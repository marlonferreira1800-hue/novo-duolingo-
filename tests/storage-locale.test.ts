import { expect, it } from 'vitest';
import { cardiacOutputLesson as lesson } from '../content/cardiac-output';
import { createLocalProgressStore } from '../src/data/local-progress';
import { completeLesson, emptyProgress, earnedXp, recordAnswer } from '../src/features/learning/progress';

it('changing language in a stale tab must not erase completion saved by another tab', () => {
  const values = new Map<string, string>();
  const storage = { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); } };
  const first = createLocalProgressStore(() => storage);
  const stale = createLocalProgressStore(() => storage);
  stale.getSnapshot();
  first.saveProgress(lesson, completeLesson(lesson, recordAnswer(lesson, emptyProgress, lesson.correctOptionId)));
  stale.setLocales('en', 'en');
  const restored = createLocalProgressStore(() => storage).getSnapshot();
  expect(earnedXp(restored, lesson)).toBe(10);
  expect(restored.uiLocale).toBe('en');
});
