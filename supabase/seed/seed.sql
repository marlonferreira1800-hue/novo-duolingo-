-- Seed for local testing: two test users (created via Supabase auth, not raw SQL).
-- Use `supabase auth users create` or the auth API in tests.
-- This file seeds content tables only (public read).

-- Insert published content revisions for the two demo lessons (for testing the editorial flow).
-- In production these come from the editorial pipeline, not seed.
insert into public.content_revisions (id, lesson_id, revision, status)
values
  ('00000000-0000-4000-8000-000000000001', 'cardiac-output', 1, 'in_review'),
  ('00000000-0000-4000-8000-000000000002', 'cardiac-cycle', 1, 'in_review')
on conflict (lesson_id, revision) do nothing;

insert into public.questions (id, lesson_id) values
  ('q-cardiac-output', 'cardiac-output'),
  ('q-cardiac-cycle', 'cardiac-cycle')
on conflict (id) do nothing;

insert into public.answer_keys (question_id, correct_option_id) values
  ('q-cardiac-output', 'b'),
  ('q-cardiac-cycle', 'a')
on conflict (question_id) do nothing;
