import { describe, expect, it } from 'vitest';
import {
  aiRunRecordSchema,
  answerKeySchema,
  attemptRecordSchema,
  contentRevisionSchema,
  contentStatusSchema,
  idempotencyKeySchema,
  lessonProgressRecordSchema,
  localizedContentSchema,
  optionRecordSchema,
  profileSchema,
  questionRecordSchema,
  reviewCardSchema,
  reviewDecisionSchema,
  submitAttemptInputSchema,
  submitAttemptResultSchema,
  syncPayloadSchema,
  usageEventSchema,
  xpEventSchema,
} from '../src/contracts/data';

const uuid = '123e4567-e89b-42d3-a456-426614174000';
const ts = '2026-10-31T12:00:00.000Z';

describe('data contracts (ADR 0002)', () => {
  it('accepts a valid profile', () => {
    const result = profileSchema.safeParse({
      id: uuid, uiLocale: 'pt-BR', studyLocale: 'en', timezone: 'America/Sao_Paulo', createdAt: ts, updatedAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('rejects profile with invalid locale', () => {
    const result = profileSchema.safeParse({
      id: uuid, uiLocale: 'fr', studyLocale: 'en', createdAt: ts, updatedAt: ts,
    });
    expect(result.success).toBe(false);
  });

  it('accepts valid lesson_progress record', () => {
    const result = lessonProgressRecordSchema.safeParse({
      userId: uuid, lessonId: 'cardiac-output', lessonRevision: 1,
      stage: 2, selectedOptionId: 'b', submitted: true, completedAt: ts, updatedAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('accepts lesson_progress with null completedAt (in progress)', () => {
    const result = lessonProgressRecordSchema.safeParse({
      userId: uuid, lessonId: 'cardiac-output', lessonRevision: 1,
      stage: 0, selectedOptionId: null, submitted: false, completedAt: null, updatedAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('rejects lesson_progress with invalid stage', () => {
    const result = lessonProgressRecordSchema.safeParse({
      userId: uuid, lessonId: 'cardiac-output', lessonRevision: 1,
      stage: 5, selectedOptionId: null, submitted: false, completedAt: null, updatedAt: ts,
    });
    expect(result.success).toBe(false);
  });

  it('accepts valid attempt record', () => {
    const result = attemptRecordSchema.safeParse({
      id: uuid, userId: uuid, lessonId: 'cardiac-output', questionId: 'q-co-1',
      selectedOptionId: 'a', correct: true, createdAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('accepts xp_event with valid idempotency key and reason', () => {
    const result = xpEventSchema.safeParse({
      idempotencyKey: uuid, userId: uuid, lessonId: 'cardiac-output',
      amount: 10, reason: 'lesson_completed', createdAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('rejects xp_event with invalid reason', () => {
    const result = xpEventSchema.safeParse({
      idempotencyKey: uuid, userId: uuid, lessonId: 'cardiac-output',
      amount: 10, reason: 'hack', createdAt: ts,
    });
    expect(result.success).toBe(false);
  });

  it('rejects non-uuid idempotency key', () => {
    expect(idempotencyKeySchema.safeParse('not-a-uuid').success).toBe(false);
    expect(idempotencyKeySchema.safeParse(uuid).success).toBe(true);
  });

  it('accepts valid review_card', () => {
    const result = reviewCardSchema.safeParse({
      userId: uuid, questionId: 'q-co-1', dueAt: ts, state: 'review', createdAt: ts, updatedAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('content status enum covers full editorial flow', () => {
    for (const status of ['draft', 'in_review', 'approved', 'published', 'withdrawn'] as const) {
      expect(contentStatusSchema.safeParse(status).success).toBe(true);
    }
    expect(contentStatusSchema.safeParse('demo-unreviewed').success).toBe(false);
    expect(contentStatusSchema.safeParse('bogus').success).toBe(false);
  });

  it('accepts valid content_revision', () => {
    const result = contentRevisionSchema.safeParse({
      id: uuid, lessonId: 'cardiac-output', revision: 1, status: 'in_review', createdAt: ts, updatedAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('accepts localized_content', () => {
    const result = localizedContentSchema.safeParse({
      contentRevisionId: uuid, locale: 'pt-BR', body: { title: 'Débito cardíaco' }, status: 'draft', createdAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('accepts question/option/answer_key records', () => {
    expect(questionRecordSchema.safeParse({ id: 'q-co-1', lessonId: 'cardiac-output', createdAt: ts }).success).toBe(true);
    expect(optionRecordSchema.safeParse({ id: 'a', questionId: 'q-co-1', locale: 'en', label: '5.25 L/min', explanation: 'CO = HR × SV' }).success).toBe(true);
    expect(answerKeySchema.safeParse({ questionId: 'q-co-1', correctOptionId: 'a' }).success).toBe(true);
  });

  it('accepts review_decision with all decision types', () => {
    for (const decision of ['approved', 'rejected', 'changes_requested'] as const) {
      const result = reviewDecisionSchema.safeParse({
        id: uuid, contentRevisionId: uuid, locale: 'pt-BR', reviewerId: uuid, decision, decidedAt: ts,
      });
      expect(result.success).toBe(true);
    }
  });

  it('accepts ai_run_record without sensitive data fields', () => {
    const result = aiRunRecordSchema.safeParse({
      runId: uuid, userId: uuid, providerId: 'offline-fixture-v1', providerKind: 'fixture',
      promptId: 'medical-study-plan', promptVersion: '1.0.0', schemaVersion: 1,
      studyLocale: 'pt-BR', outcome: 'draft-created', elapsedMs: 42, inputTokens: 40, outputTokens: 20, createdAt: ts,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      const json = JSON.stringify(result.data);
      expect(json).not.toContain('rawPrompt');
      expect(json).not.toContain('systemPrompt');
      expect(json).not.toContain('excerpt');
      expect(json).not.toContain('providerError');
    }
  });

  it('rejects ai_run_record with extra sensitive fields', () => {
    const result = aiRunRecordSchema.safeParse({
      runId: uuid, userId: uuid, providerId: 'x', providerKind: 'fixture',
      promptId: 'p', promptVersion: '1', schemaVersion: 1, studyLocale: 'en',
      outcome: 'failed', elapsedMs: 1, createdAt: ts,
      rawPrompt: 'secret',
    });
    expect(result.success).toBe(false);
  });

  it('accepts usage_event', () => {
    const result = usageEventSchema.safeParse({
      id: uuid, userId: uuid, runId: uuid, providerId: 'live-v1',
      inputTokens: 100, outputTokens: 50, costCents: 2, createdAt: ts,
    });
    expect(result.success).toBe(true);
  });

  it('accepts sync payload for local→remote first login', () => {
    const result = syncPayloadSchema.safeParse({
      stateVersion: 1, uiLocale: 'pt-BR', studyLocale: 'pt-BR',
      lessons: [{
        lessonId: 'cardiac-output', lessonRevision: 1,
        progress: { stage: 2, selectedOptionId: 'a', submitted: true, completedAt: ts },
      }],
      idempotencyKey: uuid,
    });
    expect(result.success).toBe(true);
  });

  it('rejects sync payload with wrong version', () => {
    const result = syncPayloadSchema.safeParse({
      stateVersion: 2, uiLocale: 'pt-BR', studyLocale: 'pt-BR', lessons: [], idempotencyKey: uuid,
    });
    expect(result.success).toBe(false);
  });

  it('accepts submit_attempt input and result', () => {
    const input = submitAttemptInputSchema.safeParse({
      lessonId: 'cardiac-output', lessonRevision: 1, questionId: 'q-co-1',
      selectedOptionId: 'a', idempotencyKey: uuid,
    });
    expect(input.success).toBe(true);
    const result = submitAttemptResultSchema.safeParse({
      correct: true, explanation: 'CO = HR × SV = 75 × 70 = 5250 mL/min', xpAwarded: 10,
    });
    expect(result.success).toBe(true);
  });

  it('rejects submit_attempt result that leaks correctOptionId', () => {
    const result = submitAttemptResultSchema.safeParse({
      correct: true, explanation: 'ok', xpAwarded: 10, correctOptionId: 'a',
    });
    expect(result.success).toBe(false);
  });
});
