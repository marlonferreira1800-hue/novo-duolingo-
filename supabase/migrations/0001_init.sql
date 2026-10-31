-- ADR 0002: initial schema for Medora (D4 planning → etapa 3)
-- All student data tables have RLS enabled with auth.uid() = user_id policies.
-- answer_keys and draft content are never exposed via public SELECT.

-- Enable UUID extension
create extension if not exists "pgcrypto";

-- ============================================================
-- profiles (1:1 with auth.users)
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  ui_locale text not null check (ui_locale in ('pt-BR', 'en')),
  study_locale text not null check (study_locale in ('pt-BR', 'en')),
  timezone text not null default 'UTC',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "users manage own profile" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

-- ============================================================
-- lesson_progress (PK: user_id, lesson_id, lesson_revision)
-- completed_at never regresses (enforced in application + trigger)
-- ============================================================
create table if not exists public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  lesson_revision integer not null check (lesson_revision >= 1),
  stage integer not null check (stage between 0 and 2),
  selected_option_id text,
  submitted boolean not null default false,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id, lesson_revision)
);
alter table public.lesson_progress enable row level security;
create policy "users manage own progress" on public.lesson_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Trigger: completed_at never regresses
create or replace function public.prevent_completed_at_regression()
returns trigger language plpgsql as $$
begin
  if old.completed_at is not null and new.completed_at is null then
    new.completed_at := old.completed_at;
  end if;
  if old.completed_at is not null and new.completed_at is not null and new.completed_at < old.completed_at then
    new.completed_at := old.completed_at;
  end if;
  new.updated_at := now();
  return new;
end;
$$;
create trigger lesson_progress_no_regression
  before update on public.lesson_progress
  for each row execute function public.prevent_completed_at_regression();

-- ============================================================
-- attempts (INSERT-only, immutable)
-- ============================================================
create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  question_id text not null,
  selected_option_id text not null,
  correct boolean not null,
  created_at timestamptz not null default now()
);
alter table public.attempts enable row level security;
create policy "users insert own attempts" on public.attempts
  for insert with check (auth.uid() = user_id);
create policy "users read own attempts" on public.attempts
  for select using (auth.uid() = user_id);
-- No UPDATE or DELETE policies: attempts are immutable.

-- ============================================================
-- xp_events (double uniqueness: idempotency_key + semantic)
-- ============================================================
create table if not exists public.xp_events (
  idempotency_key uuid not null unique,
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  amount integer not null check (amount > 0),
  reason text not null check (reason in ('lesson_completed', 'review_completed', 'challenge_completed')),
  created_at timestamptz not null default now(),
  -- Semantic uniqueness: one reward per (user, lesson, reason)
  unique (user_id, lesson_id, reason)
);
alter table public.xp_events enable row level security;
create policy "users read own xp" on public.xp_events
  for select using (auth.uid() = user_id);
create policy "users insert own xp" on public.xp_events
  for insert with check (auth.uid() = user_id);

-- ============================================================
-- review_cards (future D6/FSRS)
-- ============================================================
create table if not exists public.review_cards (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null,
  due_at timestamptz not null,
  state text not null check (state in ('new', 'learning', 'review', 'relearning', 'suspended')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, question_id)
);
alter table public.review_cards enable row level security;
create policy "users manage own review cards" on public.review_cards
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============================================================
-- Content governance tables (public read only for published)
-- ============================================================
create table if not exists public.content_revisions (
  id uuid primary key default gen_random_uuid(),
  lesson_id text not null,
  revision integer not null check (revision >= 1),
  status text not null check (status in ('draft', 'in_review', 'approved', 'published', 'withdrawn')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (lesson_id, revision)
);
-- No RLS on content tables: they are read-only public catalogs.
-- Drafts/in_review require editorial role via service role key (server-side only).
create policy "public read published revisions" on public.content_revisions
  for select using (status = 'published');

create table if not exists public.localized_content (
  content_revision_id uuid not null references public.content_revisions(id) on delete cascade,
  locale text not null check (locale in ('pt-BR', 'en')),
  body jsonb not null,
  status text not null check (status in ('draft', 'in_review', 'approved', 'published', 'withdrawn')),
  created_at timestamptz not null default now(),
  primary key (content_revision_id, locale)
);
create policy "public read published localized content" on public.localized_content
  for select using (status = 'published');

-- ============================================================
-- questions / options / answer_keys
-- answer_keys NEVER exposed via public SELECT (no select policy).
-- ============================================================
create table if not exists public.questions (
  id text primary key,
  lesson_id text not null,
  created_at timestamptz not null default now()
);
create policy "public read questions" on public.questions for select using (true);

create table if not exists public.options (
  id text not null,
  question_id text not null references public.questions(id) on delete cascade,
  locale text not null check (locale in ('pt-BR', 'en')),
  label text not null,
  explanation text not null,
  primary key (id, question_id, locale)
);
create policy "public read options" on public.options for select using (true);

create table if not exists public.answer_keys (
  question_id text primary key references public.questions(id) on delete cascade,
  correct_option_id text not null
);
alter table public.answer_keys enable row level security;
-- NO select policy for students: answer keys only via server-side service role.
-- This table has RLS enabled but no policies → denied by default.

-- ============================================================
-- review_decisions (D8: medical/editorial review history)
-- History preserved, never overwritten.
-- ============================================================
create table if not exists public.review_decisions (
  id uuid primary key default gen_random_uuid(),
  content_revision_id uuid not null references public.content_revisions(id) on delete cascade,
  locale text not null check (locale in ('pt-BR', 'en')),
  reviewer_id uuid not null references auth.users(id),
  decision text not null check (decision in ('approved', 'rejected', 'changes_requested')),
  notes text,
  decided_at timestamptz not null default now()
);
alter table public.review_decisions enable row level security;
create policy "public read review decisions" on public.review_decisions for select using (true);
create policy "reviewers insert decisions" on public.review_decisions
  for insert with check (auth.uid() = reviewer_id);

-- ============================================================
-- ai_runs / usage_events (D5 quotas)
-- NEVER store raw prompts, source excerpts, or provider error messages.
-- ============================================================
create table if not exists public.ai_runs (
  run_id uuid primary key,
  user_id uuid references auth.users(id) on delete set null,
  provider_id text not null,
  provider_kind text not null check (provider_kind in ('fixture', 'live')),
  prompt_id text not null,
  prompt_version text not null,
  schema_version integer not null,
  study_locale text not null check (study_locale in ('pt-BR', 'en')),
  outcome text not null check (outcome in ('draft-created', 'failed')),
  error_code text,
  elapsed_ms integer not null check (elapsed_ms >= 0),
  input_tokens integer check (input_tokens >= 0 and input_tokens <= 1000000),
  output_tokens integer check (output_tokens >= 0 and output_tokens <= 1000000),
  created_at timestamptz not null default now()
);
alter table public.ai_runs enable row level security;
create policy "users read own ai runs" on public.ai_runs
  for select using (auth.uid() = user_id);
create policy "service inserts ai runs" on public.ai_runs
  for insert with check (true); -- server-side only via service role

create table if not exists public.usage_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  run_id uuid not null references public.ai_runs(run_id),
  provider_id text not null,
  input_tokens integer not null check (input_tokens >= 0),
  output_tokens integer not null check (output_tokens >= 0),
  cost_cents numeric check (cost_cents >= 0),
  created_at timestamptz not null default now()
);
alter table public.usage_events enable row level security;
create policy "users read own usage" on public.usage_events
  for select using (auth.uid() = user_id);
create policy "service inserts usage" on public.usage_events
  for insert with check (true); -- server-side only

-- ============================================================
-- Indexes for common queries
-- ============================================================
create index if not exists idx_lesson_progress_user on public.lesson_progress(user_id);
create index if not exists idx_attempts_user on public.attempts(user_id);
create index if not exists idx_xp_events_user on public.xp_events(user_id);
create index if not exists idx_review_cards_due on public.review_cards(user_id, due_at);
create index if not exists idx_ai_runs_user on public.ai_runs(user_id, created_at);
create index if not exists idx_usage_events_user on public.usage_events(user_id, created_at);
