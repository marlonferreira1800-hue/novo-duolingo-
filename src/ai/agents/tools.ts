import 'server-only';
import { evidenceKey, type Evidence } from '@/contracts/ai';
import type { Lesson } from '@/contracts/learning';
import { recallCognitiveMemory, upsertSemanticConcept, updateProceduralMemory } from './memory';
import type { ReviewGrade } from '../fsrs-scheduler';

// Ferramentas auditadas disponíveis aos agentes.
// NUNCA: web search, file read, URL fetch, publish, XP, budget change.
// Toda chamada é registrada no AgentRunRecord para auditoria.

export interface ToolResult {
  ok: boolean;
  data?: unknown;
  error?: string;
}

export function searchEvidence(evidence: readonly Evidence[], query: string, limit = 3): ToolResult {
  const q = query.toLowerCase();
  const scored = evidence
    .map(ev => ({ ev, score: (ev.title + ' ' + ev.excerpt).toLowerCase().split(q).length - 1 }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(1, limit));
  return {
    ok: true,
    data: scored.map(x => ({ key: evidenceKey(x.ev), title: x.ev.title, excerpt: x.ev.excerpt.slice(0, 500) })),
  };
}

export function getLessonById(lessons: readonly Lesson[], lessonId: string): ToolResult {
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return { ok: false, error: 'LESSON_NOT_FOUND' };
  return {
    ok: true,
    data: {
      id: lesson.id,
      title: { 'pt-BR': lesson.translations['pt-BR'].title, en: lesson.translations.en.title },
      objective: { 'pt-BR': lesson.translations['pt-BR'].objective, en: lesson.translations.en.objective },
    },
  };
}

export function computeExample(expr: string): ToolResult {
  // Only safe arithmetic: digits, operators, spaces, parentheses, dot.
  if (!/^[\d\s+\-*/().]+$/.test(expr) || expr.length > 100) {
    return { ok: false, error: 'UNSAFE_EXPRESSION' };
  }
  try {
    const result = Function(`"use strict"; return (${expr})`)();
    if (typeof result !== 'number' || !Number.isFinite(result)) return { ok: false, error: 'NOT_A_NUMBER' };
    return { ok: true, data: { expression: expr, result } };
  } catch {
    return { ok: false, error: 'EVAL_FAILED' };
  }
}

export type AgentToolName =
  | 'search_evidence'
  | 'get_lesson'
  | 'compute_example'
  | 'recall_memory'
  | 'consolidate_memory';

export function executeTool(
  name: AgentToolName,
  input: Record<string, unknown>,
  ctx: { evidence: readonly Evidence[]; lessons: readonly Lesson[]; sessionId?: string },
): ToolResult {
  switch (name) {
    case 'search_evidence':
      return searchEvidence(ctx.evidence, String(input.query ?? ''), Number(input.limit ?? 3));
    case 'get_lesson':
      return getLessonById(ctx.lessons, String(input.lessonId ?? ''));
    case 'compute_example':
      return computeExample(String(input.expr ?? ''));
    case 'recall_memory': {
      if (!ctx.sessionId) return { ok: false, error: 'SESSION_REQUIRED' };
      const snapshot = recallCognitiveMemory(ctx.sessionId, input.query ? String(input.query) : undefined);
      return { ok: true, data: snapshot };
    }
    case 'consolidate_memory': {
      if (!ctx.sessionId) return { ok: false, error: 'SESSION_REQUIRED' };
      const conceptId = String(input.conceptId ?? 'cardiac-output').replace(/[^a-z0-9._-]/gi, '').toLowerCase() || 'cardiac-output';
      const lessonId = String(input.lessonId ?? 'cardiac-output').replace(/[^a-z0-9._-]/gi, '').toLowerCase() || 'cardiac-output';
      const validKeys = ctx.evidence.map(evidenceKey);
      const suppliedKeys = Array.isArray(input.evidenceKeys)
        ? input.evidenceKeys.map(String).filter(k => validKeys.includes(k))
        : [];
      const evidenceKeys = suppliedKeys.length > 0 ? suppliedKeys : validKeys.slice(0, 1);
      const semantic = upsertSemanticConcept(ctx.sessionId, {
        conceptId,
        lessonId,
        masteryDelta: typeof input.masteryDelta === 'number' ? input.masteryDelta : undefined,
        misconceptionDetected: Boolean(input.misconceptionDetected),
        evidenceKeys,
      });
      let procedural;
      if (input.questionId && typeof input.grade === 'number' && [1, 2, 3, 4].includes(input.grade)) {
        procedural = updateProceduralMemory(ctx.sessionId, {
          questionId: String(input.questionId),
          lessonId,
          grade: input.grade as ReviewGrade,
        });
      }
      return { ok: true, data: { semantic, procedural } };
    }
    default:
      return { ok: false, error: 'UNKNOWN_TOOL' };
  }
}
