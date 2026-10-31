import { z } from 'zod';
import { localeSchema } from './learning';

// ADR 0002 data contracts. These schemas mirror the proposed Supabase tables.
// Table names are conceptual; final SQL lives in supabase/migrations (owner: dados).

export const uuidSchema = z.string().uuid();
export const idempotencyKeySchema = uuidSchema;
export const timestampSchema = z.string().datetime();

// --- profiles ---
export const profileSchema = z.strictObject({
  id: uuidSchema,
  uiLocale: localeSchema,
  studyLocale: localeSchema,
  timezone: z.string().min(1).max(64).default('UTC'),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type Profile = z.infer<typeof profileSchema>;

// --- lesson_progress ---
// PK (user_id, lesson_id, lesson_revision); completedAt never regresses.
export const lessonProgressRecordSchema = z.strictObject({
  userId: uuidSchema,
  lessonId: z.string().min(1).max(80),
  lessonRevision: z.number().int().min(1),
  stage: z.number().int().min(0).max(2),
  selectedOptionId: z.string().nullable(),
  submitted: z.boolean(),
  completedAt: timestampSchema.nullable(),
  updatedAt: timestampSchema,
});
export type LessonProgressRecord = z.infer<typeof lessonProgressRecordSchema>;

// --- attempts ---
// INSERT-only, immutable; never exposes answer key.
export const attemptRecordSchema = z.strictObject({
  id: uuidSchema,
  userId: uuidSchema,
  lessonId: z.string().min(1).max(80),
  questionId: z.string().min(1).max(80),
  selectedOptionId: z.string().min(1),
  correct: z.boolean(),
  createdAt: timestampSchema,
});
export type AttemptRecord = z.infer<typeof attemptRecordSchema>;

// --- xp_events ---
// Double uniqueness: idempotency_key (request) + semantic (user_id, lesson_id, reason).
export const xpEventSchema = z.strictObject({
  idempotencyKey: idempotencyKeySchema,
  userId: uuidSchema,
  lessonId: z.string().min(1).max(80),
  amount: z.number().int().positive(),
  reason: z.enum(['lesson_completed', 'review_completed', 'challenge_completed']),
  createdAt: timestampSchema,
});
export type XpEvent = z.infer<typeof xpEventSchema>;

// --- review_cards (future D6/FSRS) ---
// Scheduling binds to question_id, never to translated strings.
export const reviewCardSchema = z.strictObject({
  userId: uuidSchema,
  questionId: z.string().min(1).max(80),
  dueAt: timestampSchema,
  state: z.enum(['new', 'learning', 'review', 'relearning', 'suspended']),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type ReviewCard = z.infer<typeof reviewCardSchema>;

// --- content governance ---
export const contentStatusSchema = z.enum(['draft', 'in_review', 'approved', 'published', 'withdrawn']);
export type ContentStatus = z.infer<typeof contentStatusSchema>;

export const contentRevisionSchema = z.strictObject({
  id: uuidSchema,
  lessonId: z.string().min(1).max(80),
  revision: z.number().int().min(1),
  status: contentStatusSchema,
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type ContentRevision = z.infer<typeof contentRevisionSchema>;

export const localizedContentSchema = z.strictObject({
  contentRevisionId: uuidSchema,
  locale: localeSchema,
  body: z.record(z.string(), z.unknown()),
  status: contentStatusSchema,
  createdAt: timestampSchema,
});
export type LocalizedContent = z.infer<typeof localizedContentSchema>;

// --- questions/options/answer_keys ---
// Option IDs are stable across locales; answer_keys never in public SELECT.
export const questionRecordSchema = z.strictObject({
  id: z.string().min(1).max(80),
  lessonId: z.string().min(1).max(80),
  createdAt: timestampSchema,
});
export type QuestionRecord = z.infer<typeof questionRecordSchema>;

export const optionRecordSchema = z.strictObject({
  id: z.string().min(1).max(80),
  questionId: z.string().min(1).max(80),
  locale: localeSchema,
  label: z.string().min(1),
  explanation: z.string().min(1),
});
export type OptionRecord = z.infer<typeof optionRecordSchema>;

export const answerKeySchema = z.strictObject({
  questionId: z.string().min(1).max(80),
  correctOptionId: z.string().min(1).max(80),
});
export type AnswerKey = z.infer<typeof answerKeySchema>;

// --- review_decisions (D8: medical/editorial review record) ---
// History preserved, never overwritten. Reviewer must be a qualified human.
export const reviewDecisionSchema = z.strictObject({
  id: uuidSchema,
  contentRevisionId: uuidSchema,
  locale: localeSchema,
  reviewerId: uuidSchema,
  decision: z.enum(['approved', 'rejected', 'changes_requested']),
  notes: z.string().max(2000).optional(),
  decidedAt: timestampSchema,
});
export type ReviewDecision = z.infer<typeof reviewDecisionSchema>;

// --- ai_runs / usage_events (D5 quotas) ---
// NEVER log raw prompts, source excerpts, generated content or provider error messages.
export const aiRunRecordSchema = z.strictObject({
  runId: uuidSchema,
  userId: uuidSchema.nullable(),
  providerId: z.string().min(1).max(80),
  providerKind: z.enum(['fixture', 'live']),
  promptId: z.string().min(1).max(80),
  promptVersion: z.string().min(1).max(20),
  schemaVersion: z.number().int().min(1),
  studyLocale: localeSchema,
  outcome: z.enum(['draft-created', 'failed']),
  errorCode: z.string().max(40).optional(),
  elapsedMs: z.number().int().min(0),
  inputTokens: z.number().int().nonnegative().max(1000000).optional(),
  outputTokens: z.number().int().nonnegative().max(1000000).optional(),
  createdAt: timestampSchema,
});
export type AiRunRecord = z.infer<typeof aiRunRecordSchema>;

export const usageEventSchema = z.strictObject({
  id: uuidSchema,
  userId: uuidSchema,
  runId: uuidSchema,
  providerId: z.string().min(1).max(80),
  inputTokens: z.number().int().nonnegative(),
  outputTokens: z.number().int().nonnegative(),
  costCents: z.number().nonnegative().optional(),
  createdAt: timestampSchema,
});
export type UsageEvent = z.infer<typeof usageEventSchema>;

// --- sync payload (local → remote first login) ---
export const syncPayloadSchema = z.strictObject({
  stateVersion: z.literal(1),
  uiLocale: localeSchema,
  studyLocale: localeSchema,
  lessons: z.array(z.strictObject({
    lessonId: z.string().min(1).max(80),
    lessonRevision: z.number().int().min(1),
    progress: z.strictObject({
      stage: z.number().int().min(0).max(2),
      selectedOptionId: z.string().nullable(),
      submitted: z.boolean(),
      completedAt: timestampSchema.nullable(),
    }),
  })),
  idempotencyKey: idempotencyKeySchema,
});
export type SyncPayload = z.infer<typeof syncPayloadSchema>;

// --- submit attempt (server action: client never receives correctOptionId) ---
export const submitAttemptInputSchema = z.strictObject({
  lessonId: z.string().min(1).max(80),
  lessonRevision: z.number().int().min(1),
  questionId: z.string().min(1).max(80),
  selectedOptionId: z.string().min(1).max(80),
  idempotencyKey: idempotencyKeySchema,
});
export type SubmitAttemptInput = z.infer<typeof submitAttemptInputSchema>;

export const submitAttemptResultSchema = z.strictObject({
  correct: z.boolean(),
  explanation: z.string().min(1),
  xpAwarded: z.number().int().min(0),
});
export type SubmitAttemptResult = z.infer<typeof submitAttemptResultSchema>;
