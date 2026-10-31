'use server';

import { createServerSupabaseClient } from '@/auth/server';
import { reviewCardSchema } from '@/contracts/data';
import { nextCardState, type ReviewGrade, type CardStateRecord } from '@/ai/fsrs-scheduler';

async function requireUser() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('UNAUTHENTICATED');
  return { supabase, userId: user.id };
}

export async function getDueReviews() {
  const { supabase, userId } = await requireUser();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from('review_cards')
    .select('question_id, due_at, state')
    .eq('user_id', userId)
    .lte('due_at', now)
    .order('due_at', { ascending: true })
    .limit(20);
  if (error) throw new Error('LOAD_FAILED');
  return { ok: true, cards: data ?? [] };
}

export async function gradeReview(questionId: string, grade: ReviewGrade) {
  const { supabase, userId } = await requireUser();
  const { data: existing } = await supabase
    .from('review_cards')
    .select('question_id, due_at, state')
    .eq('user_id', userId)
    .eq('question_id', questionId)
    .maybeSingle();

  const current: CardStateRecord | null = existing ? {
    state: existing.state as CardStateRecord['state'],
    dueAt: existing.due_at,
    stability: 1,
    difficulty: 5,
    reps: 0,
    lapses: 0,
  } : null;

  const next = nextCardState(current, grade);
  const record = reviewCardSchema.parse({
    userId,
    questionId,
    dueAt: next.dueAt,
    state: next.state,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const { error } = await supabase.from('review_cards').upsert({
    user_id: record.userId,
    question_id: record.questionId,
    due_at: record.dueAt,
    state: record.state,
    updated_at: record.updatedAt,
  }, { onConflict: 'user_id,question_id' });
  if (error) throw new Error('SAVE_FAILED');

  // Award review XP (idempotent via xp_events semantic uniqueness is per-lesson, so review XP uses different reason)
  return { ok: true, nextDueAt: next.dueAt, state: next.state };
}

export async function scheduleReviewAfterAttempt(questionId: string) {
  const { supabase, userId } = await requireUser();
  const now = new Date().toISOString();
  // Create card in 'learning' state if it doesn't exist
  const { data: existing } = await supabase
    .from('review_cards')
    .select('question_id')
    .eq('user_id', userId)
    .eq('question_id', questionId)
    .maybeSingle();
  if (existing) return { ok: true, alreadyScheduled: true };
  const card = reviewCardSchema.parse({
    userId, questionId, dueAt: now, state: 'new',
    createdAt: now, updatedAt: now,
  });
  await supabase.from('review_cards').insert({
    user_id: card.userId,
    question_id: card.questionId,
    due_at: card.dueAt,
    state: card.state,
  });
  return { ok: true, alreadyScheduled: false };
}
