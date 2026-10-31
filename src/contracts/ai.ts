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
export interface RunRecord {
  runId: string;
  providerId: string;
  providerKind: DraftProvider['kind'];
  promptId: 'medical-study-plan';
  promptVersion: '1.0.0';
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
