import { z } from 'zod';
import { localeSchema } from './learning';

const slug = z.string().min(1).max(80).regex(/^[a-z0-9]+(?:[._-][a-z0-9]+)*$/);
export const evidenceKeySchema = z.string().max(100).regex(/^[a-z0-9]+(?:[._-][a-z0-9]+)*@[1-9][0-9]*$/);
export const evidenceSchema = z.strictObject({
  id: slug,
  revision: z.number().int().positive(),
  title: z.string().min(1).max(200),
  url: z.url().refine((url) => new URL(url).protocol === 'https:', 'Evidence URLs must use HTTPS.'),
  excerpt: z.string().min(1).max(3000),
});
export type Evidence = z.infer<typeof evidenceSchema>;
export const evidenceKey = (evidence: Pick<Evidence, 'id' | 'revision'>) => `${evidence.id}@${evidence.revision}`;

export const studyPlanRequestSchema = z.strictObject({
  topic: z.string().trim().min(3).max(160),
  studyLocale: localeSchema,
  level: z.enum(['basic', 'clinical', 'internship']),
});
export type StudyPlanRequest = z.infer<typeof studyPlanRequestSchema>;

// Providers cannot submit publication status, reviewer identities or source URLs.
export const studyPlanOutputSchema = z.strictObject({
  locale: localeSchema,
  title: z.string().min(1).max(160),
  lessons: z.array(z.strictObject({
    id: slug,
    title: z.string().min(1).max(160),
    objective: z.string().min(1).max(400),
    evidenceKeys: z.array(evidenceKeySchema).min(1).max(4),
  })).min(1).max(6),
});
export type StudyPlanOutput = z.infer<typeof studyPlanOutputSchema>;

export const tutorRequestSchema = z.strictObject({
  question: z.string().trim().min(3).max(500),
  lessonId: slug.optional(),
  studyLocale: localeSchema,
  level: z.enum(['basic', 'clinical', 'internship']),
});
export type TutorRequest = z.infer<typeof tutorRequestSchema>;

// Tutor output: answer must cite supplied evidence keys; no clinical advice disclaimers are provider-controlled.
export const tutorOutputSchema = z.strictObject({
  locale: localeSchema,
  answer: z.string().min(1).max(2000),
  difficulty: z.enum(['basic', 'intermediate', 'advanced']),
  evidenceKeys: z.array(evidenceKeySchema).min(1).max(4),
  followUpSuggestions: z.array(z.string().min(1).max(200)).max(3).optional(),
});
export type TutorOutput = z.infer<typeof tutorOutputSchema>;
export const tokenUsageSchema = z.strictObject({
  inputTokens: z.number().int().nonnegative().max(1000000),
  outputTokens: z.number().int().nonnegative().max(1000000),
});
export type TokenUsage = z.infer<typeof tokenUsageSchema>;

export interface PromptEnvelope { system: string; user: string }
export interface ProviderRequest {
  prompt: PromptEnvelope;
  maxOutputTokens: number;
  signal: AbortSignal;
}
export interface ProviderResponse { output: unknown; usage?: TokenUsage }
export interface DraftProvider {
  readonly id: string;
  readonly kind: 'fixture' | 'live';
  generate(request: ProviderRequest): Promise<ProviderResponse>;
}
export const aiErrorCodes = [
  'INVALID_INPUT', 'INVALID_EVIDENCE', 'INPUT_TOO_LARGE', 'INVALID_OUTPUT',
  'UNKNOWN_EVIDENCE', 'LOCALE_MISMATCH', 'INVALID_USAGE', 'BUDGET_EXCEEDED',
  'CAPACITY_EXCEEDED', 'TIMEOUT', 'PROVIDER_FAILED', 'PROVIDER_NOT_CONFIGURED',
] as const;
export type AiErrorCode = typeof aiErrorCodes[number];
export type PromptId = 'medical-study-plan' | 'medical-tutor';
export type PromptVersion = '1.0.0';
export interface RunRecord {
  runId: string;
  providerId: string;
  providerKind: DraftProvider['kind'];
  promptId: PromptId;
  promptVersion: PromptVersion;
  schemaVersion: 1;
  studyLocale: StudyPlanRequest['studyLocale'];
  outcome: 'draft-created' | 'failed';
  errorCode?: AiErrorCode;
  elapsedMs: number;
  usage?: TokenUsage;
}
export interface StudyPlanDraft {
  id: string;
  status: 'draft';
  medicallyReviewed: false;
  content: StudyPlanOutput;
  provenance: {
    runId: string;
    createdAt: string;
    providerId: string;
    providerKind: DraftProvider['kind'];
    promptId: 'medical-study-plan';
    promptVersion: '1.0.0';
    schemaVersion: 1;
    evidenceKeys: string[];
  };
}
export interface TutorDraft {
  id: string;
  status: 'draft';
  medicallyReviewed: false;
  content: TutorOutput;
  provenance: {
    runId: string;
    createdAt: string;
    providerId: string;
    providerKind: DraftProvider['kind'];
    promptId: 'medical-tutor';
    promptVersion: '1.0.0';
    schemaVersion: 1;
    evidenceKeys: string[];
  };
}

// ============================================================
// Multi-agent orchestration contracts (AI-native agent layer)
// Same rules: server-only, drafts only, no auto-publish, audited tools.
// ============================================================

export const agentIdSchema = z.string().min(1).max(40).regex(/^[a-z0-9-]+$/);
export const agentToolSchema = z.enum(['search_evidence', 'get_lesson', 'compute_example']);
export const agentRoleSchema = z.enum(['orchestrator', 'planner', 'tutor', 'question-generator', 'fact-checker']);

export const agentMessageSchema = z.strictObject({
  role: agentRoleSchema,
  content: z.string().min(1).max(4000),
  toolCalls: z.array(z.strictObject({
    tool: agentToolSchema,
    input: z.record(z.string(), z.unknown()),
    output: z.unknown().optional(),
  })).max(5).optional(),
  handoffTo: agentIdSchema.optional(),
});
export type AgentMessage = z.infer<typeof agentMessageSchema>;

export const agentHandoffSchema = z.strictObject({
  from: agentIdSchema,
  to: agentIdSchema,
  reason: z.string().min(1).max(300),
  context: z.record(z.string(), z.unknown()).optional(),
});
export type AgentHandoff = z.infer<typeof agentHandoffSchema>;

export const orchestratorRequestSchema = z.strictObject({
  goal: z.string().trim().min(3).max(500),
  studyLocale: localeSchema,
  level: z.enum(['basic', 'clinical', 'internship']),
  maxSteps: z.number().int().min(1).max(8).default(4),
  sessionId: z.string().uuid().optional(),
});
export type OrchestratorRequest = z.infer<typeof orchestratorRequestSchema>;

// Orchestrator output is always a draft plan of agent steps + final draft.
// It never contains publication status, approval, or raw URLs from tools.
export const orchestratorOutputSchema = z.strictObject({
  locale: localeSchema,
  summary: z.string().min(1).max(1000),
  agentTrace: z.array(z.strictObject({
    agentId: agentIdSchema,
    role: agentRoleSchema,
    action: z.string().min(1).max(300),
    handoffTo: agentIdSchema.optional(),
  })).min(1).max(8),
  draft: z.strictObject({
    title: z.string().min(1).max(160),
    body: z.string().min(1).max(4000),
    evidenceKeys: z.array(evidenceKeySchema).min(1).max(4),
  }),
  toolCalls: z.array(z.strictObject({
    tool: agentToolSchema,
    agentId: agentIdSchema,
  })).max(10).optional(),
});
export type OrchestratorOutput = z.infer<typeof orchestratorOutputSchema>;

export interface AgentDefinition {
  id: string;
  role: z.infer<typeof agentRoleSchema>;
  promptId: string;
  promptVersion: '1.0.0';
  allowedTools: readonly z.infer<typeof agentToolSchema>[];
  maxOutputTokens: number;
}

export interface AgentRunRecord {
  runId: string;
  sessionId: string;
  providerId: string;
  providerKind: DraftProvider['kind'];
  steps: number;
  handoffs: AgentHandoff[];
  toolCalls: number;
  outcome: 'draft-created' | 'failed';
  errorCode?: AiErrorCode;
  elapsedMs: number;
  usage?: TokenUsage;
}

export interface OrchestratorDraft {
  id: string;
  status: 'draft';
  medicallyReviewed: false;
  sessionId: string;
  content: OrchestratorOutput;
  provenance: {
    runId: string;
    createdAt: string;
    providerId: string;
    providerKind: DraftProvider['kind'];
    schemaVersion: 1;
    evidenceKeys: string[];
    agentTrace: OrchestratorOutput['agentTrace'];
  };
}
