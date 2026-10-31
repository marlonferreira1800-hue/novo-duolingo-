'use server';

import { randomUUID } from 'node:crypto';
import { createServerSupabaseClient } from '@/auth/server';
import {
  idempotencyKeySchema,
  lessonProgressRecordSchema,
  submitAttemptInputSchema,
  syncPayloadSchema,
  xpEventSchema,
  type SubmitAttemptResult,
} from '@/contracts/data';
import { lessonProgressSchema, questionOptions, type LessonProgress } from '@/contracts/learning';

async function requireUser() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('UNAUTHENTICATED');
  return { supabase, userId: user.id };
}

export async function saveRemoteProgress(input: {
  lessonId: string;
  lessonRevision: number;
  progress: LessonProgress;
  idempotencyKey: string;
}) {
  const { supabase, userId } = await requireUser();
  const key = idempotencyKeySchema.parse(input.idempotencyKey);
  const progress = lessonProgressSchema.parse(input.progress);
  const record = lessonProgressRecordSchema.parse({
    userId,
    lessonId: input.lessonId,
    lessonRevision: input.lessonRevision,
    stage: progress.stage,
    selectedOptionId: progress.selectedOptionId,
    submitted: progress.submitted,
    completedAt: progress.completedAt,
    updatedAt: new Date().toISOString(),
  });
  const { error } = await supabase.from('lesson_progress').upsert({
    user_id: record.userId,
    lesson_id: record.lessonId,
    lesson_revision: record.lessonRevision,
    stage: record.stage,
    selected_option_id: record.selectedOptionId,
    submitted: record.submitted,
    completed_at: record.completedAt,
  }, { onConflict: 'user_id,lesson_id,lesson_revision' });
  if (error) throw new Error('SAVE_FAILED');
  return { ok: true, idempotencyKey: key };
}

export async function syncLocalState(payload: unknown) {
  const { supabase, userId } = await requireUser();
  const parsed = syncPayloadSchema.parse(payload);
  for (const item of parsed.lessons) {
    const progress = lessonProgressSchema.parse(item.progress);
    await supabase.from('lesson_progress').upsert({
      user_id: userId,
      lesson_id: item.lessonId,
      lesson_revision: item.lessonRevision,
      stage: progress.stage,
      selected_option_id: progress.selectedOptionId,
      submitted: progress.submitted,
      completed_at: progress.completedAt,
    }, { onConflict: 'user_id,lesson_id,lesson_revision' });
  }
  await supabase.from('profiles').upsert({
    id: userId,
    ui_locale: parsed.uiLocale,
    study_locale: parsed.studyLocale,
  });
  return { ok: true, synced: parsed.lessons.length };
}

export async function loadRemoteProgress() {
  const { supabase, userId } = await requireUser();
  const { data, error } = await supabase
    .from('lesson_progress')
    .select('lesson_id, lesson_revision, stage, selected_option_id, submitted, completed_at')
    .eq('user_id', userId);
  if (error) throw new Error('LOAD_FAILED');
  return { ok: true, rows: data ?? [] };
}

export async function submitAttempt(input: unknown, lesson: { id: string; revision: number; questionId: string; correctOptionId: string; xp: number; translations: Record<string, { question: import('@/contracts/learning').Question }> }, studyLocale: 'pt-BR' | 'en'): Promise<SubmitAttemptResult> {
  const { supabase, userId } = await requireUser();
  const parsed = submitAttemptInputSchema.parse(input);
  const correct = parsed.selectedOptionId === lesson.correctOptionId;
  const explanation = questionOptions(lesson.translations[studyLocale].question)?.find(o => o.id === parsed.selectedOptionId)?.explanation ?? '';

  await supabase.from('attempts').insert({
    user_id: userId,
    lesson_id: parsed.lessonId,
    question_id: parsed.questionId,
    selected_option_id: parsed.selectedOptionId,
    correct,
  });

  let xpAwarded = 0;
  if (correct) {
    const xpEvent = xpEventSchema.parse({
      idempotencyKey: parsed.idempotencyKey,
      userId,
      lessonId: parsed.lessonId,
      amount: lesson.xp,
      reason: 'lesson_completed',
      createdAt: new Date().toISOString(),
    });
    const { error: xpError } = await supabase.from('xp_events').insert({
      idempotency_key: xpEvent.idempotencyKey,
      user_id: xpEvent.userId,
      lesson_id: xpEvent.lessonId,
      amount: xpEvent.amount,
      reason: xpEvent.reason,
    });
    // Unique constraint violation = already awarded (idempotent)
    if (!xpError) xpAwarded = lesson.xp;
  }

  return { correct, explanation, xpAwarded };
}

export async function getRemoteXp(): Promise<number> {
  const { supabase, userId } = await requireUser();
  const { data, error } = await supabase
    .from('xp_events')
    .select('amount')
    .eq('user_id', userId);
  if (error) return 0;
  return (data ?? []).reduce((sum, row) => sum + row.amount, 0);
}

export { randomUUID };
