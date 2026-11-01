import 'server-only';
import { randomUUID } from 'node:crypto';
import {
  cognitiveMemorySnapshotSchema,
  type AgentMessage,
  type CognitiveMemorySnapshot,
  type EpisodicMemoryEntry,
  type ProceduralRetentionEntry,
  type SemanticConceptNode,
} from '@/contracts/ai';
import { nextCardState, isDue, type CardStateRecord, type ReviewGrade } from '../fsrs-scheduler';

const MAX_SESSIONS = 200;
const MAX_EPISODES = 20;
const MAX_SEMANTIC_NODES = 30;
const MAX_PROCEDURAL_ENTRIES = 30;

interface SessionCognitiveMemory {
  sessionId: string;
  episodic: EpisodicMemoryEntry[];
  semantic: Map<string, SemanticConceptNode>;
  procedural: Map<string, { card: CardStateRecord; lessonId: string }>;
  consolidatedCount: number;
}

const memoryStore = new Map<string, SessionCognitiveMemory>();

function ensureMemory(sessionId: string): SessionCognitiveMemory {
  const existing = memoryStore.get(sessionId);
  if (existing) return existing;
  if (memoryStore.size >= MAX_SESSIONS) {
    const oldestKey = memoryStore.keys().next().value;
    if (oldestKey) memoryStore.delete(oldestKey);
  }
  const created: SessionCognitiveMemory = {
    sessionId,
    episodic: [],
    semantic: new Map(),
    procedural: new Map(),
    consolidatedCount: 0,
  };
  memoryStore.set(sessionId, created);
  return created;
}

function sanitizeSummary(raw: string): string {
  const collapsed = raw.replace(/\s+/g, ' ').trim();
  return collapsed.slice(0, 300) || 'recorded-step';
}

export function computeSalience(role: AgentMessage['role'], summary: string, conceptIds: readonly string[]): number {
  const roleWeight = role === 'fact-checker' ? 0.85
    : role === 'memory-curator' ? 0.9
    : role === 'tutor' ? 0.75
    : role === 'question-generator' ? 0.7
    : 0.6;
  const conceptBonus = Math.min(0.15, conceptIds.length * 0.05);
  const lengthBonus = summary.length > 40 ? 0.05 : 0;
  return Number(Math.min(1, roleWeight + conceptBonus + lengthBonus).toFixed(2));
}

export function recordEpisodicMemory(
  sessionId: string,
  input: {
    role: AgentMessage['role'];
    summary: string;
    conceptIds?: readonly string[];
    salience?: number;
    now?: Date;
  },
): EpisodicMemoryEntry {
  const mem = ensureMemory(sessionId);
  const conceptIds = (input.conceptIds ?? []).slice(0, 6);
  const summary = sanitizeSummary(input.summary);
  const salience = input.salience !== undefined
    ? Math.max(0, Math.min(1, input.salience))
    : computeSalience(input.role, summary, conceptIds);

  const entry: EpisodicMemoryEntry = {
    id: `ep-${randomUUID().slice(0, 8)}`,
    role: input.role,
    summary,
    salience,
    conceptIds: [...conceptIds],
    createdAt: (input.now ?? new Date()).toISOString(),
  };

  if (mem.episodic.length >= MAX_EPISODES) {
    // Salience-aware pruning: evict lowest-salience oldest episode
    let lowestIdx = 0;
    for (let i = 1; i < mem.episodic.length; i += 1) {
      if (mem.episodic[i].salience < mem.episodic[lowestIdx].salience) {
        lowestIdx = i;
      }
    }
    mem.episodic.splice(lowestIdx, 1);
  }
  mem.episodic.push(entry);
  return entry;
}

export function upsertSemanticConcept(
  sessionId: string,
  input: {
    conceptId: string;
    lessonId: string;
    masteryDelta?: number;
    misconceptionDetected?: boolean;
    evidenceKeys: readonly string[];
    now?: Date;
  },
): SemanticConceptNode {
  const mem = ensureMemory(sessionId);
  const prev = mem.semantic.get(input.conceptId);
  const baseMastery = prev ? prev.masteryScore : 0.5;
  const delta = input.masteryDelta ?? (input.misconceptionDetected ? -0.15 : 0.15);
  const masteryScore = Number(Math.max(0, Math.min(1, baseMastery + delta)).toFixed(2));
  const misconceptionsCount = (prev?.misconceptionsCount ?? 0) + (input.misconceptionDetected ? 1 : 0);

  const node: SemanticConceptNode = {
    conceptId: input.conceptId,
    lessonId: input.lessonId,
    masteryScore,
    misconceptionsCount,
    evidenceKeys: input.evidenceKeys.slice(0, 4),
    updatedAt: (input.now ?? new Date()).toISOString(),
  };

  if (!mem.semantic.has(input.conceptId) && mem.semantic.size >= MAX_SEMANTIC_NODES) {
    const oldestKey = mem.semantic.keys().next().value;
    if (oldestKey) mem.semantic.delete(oldestKey);
  }
  mem.semantic.set(input.conceptId, node);
  mem.consolidatedCount += 1;
  return node;
}

export function computeRetrievability(card: CardStateRecord, now = new Date()): number {
  const dueMs = new Date(card.dueAt).getTime();
  const nowMs = now.getTime();
  if (nowMs <= dueMs) {
    return Number(Math.max(0.75, Math.min(1, 1 - (card.difficulty - 1) * 0.02)).toFixed(2));
  }
  const elapsedOverdueDays = Math.max(0, (nowMs - dueMs) / (1000 * 60 * 60 * 24));
  const r = 1 / (1 + elapsedOverdueDays / Math.max(0.5, 9 * card.stability));
  return Number(Math.max(0.05, Math.min(1, r)).toFixed(2));
}

export function updateProceduralMemory(
  sessionId: string,
  input: {
    questionId: string;
    lessonId: string;
    grade: ReviewGrade;
    now?: Date;
  },
): ProceduralRetentionEntry {
  const mem = ensureMemory(sessionId);
  const now = input.now ?? new Date();
  const prev = mem.procedural.get(input.questionId)?.card ?? null;
  const card = nextCardState(prev, input.grade, now);

  if (!mem.procedural.has(input.questionId) && mem.procedural.size >= MAX_PROCEDURAL_ENTRIES) {
    const oldestKey = mem.procedural.keys().next().value;
    if (oldestKey) mem.procedural.delete(oldestKey);
  }
  mem.procedural.set(input.questionId, { card, lessonId: input.lessonId });
  mem.consolidatedCount += 1;

  return toProceduralEntry(input.questionId, input.lessonId, card, now);
}

function toProceduralEntry(questionId: string, lessonId: string, card: CardStateRecord, now: Date): ProceduralRetentionEntry {
  const retrievability = computeRetrievability(card, now);
  const due = isDue(card, now);
  const recommendedAction: ProceduralRetentionEntry['recommendedAction'] =
    due || retrievability < 0.7 ? 'review-now'
    : card.difficulty >= 7 || retrievability < 0.85 ? 'reinforce-concept'
    : 'advance';

  return {
    questionId,
    lessonId,
    stability: Number(card.stability.toFixed(2)),
    difficulty: Number(card.difficulty.toFixed(2)),
    retrievability,
    recommendedAction,
    dueAt: card.dueAt,
  };
}

export function recallCognitiveMemory(
  sessionId: string,
  query?: string,
  now = new Date(),
): CognitiveMemorySnapshot {
  const mem = ensureMemory(sessionId);
  const q = query?.toLowerCase().trim() ?? '';

  const episodic = q
    ? mem.episodic.filter(ep => ep.summary.toLowerCase().includes(q) || ep.conceptIds.some(c => c.includes(q)))
    : [...mem.episodic];

  const semantic = q
    ? [...mem.semantic.values()].filter(n => n.conceptId.includes(q) || n.lessonId.includes(q))
    : [...mem.semantic.values()];

  const procedural = [...mem.procedural.entries()].map(([qId, item]) =>
    toProceduralEntry(qId, item.lessonId, item.card, now),
  );

  return cognitiveMemorySnapshotSchema.parse({
    sessionId,
    episodic: episodic.slice(-MAX_EPISODES),
    semantic: semantic.slice(0, MAX_SEMANTIC_NODES),
    procedural: procedural.slice(0, MAX_PROCEDURAL_ENTRIES),
    consolidatedCount: mem.consolidatedCount,
  });
}

export function clearMemoryStoreForTests(): void {
  memoryStore.clear();
}
