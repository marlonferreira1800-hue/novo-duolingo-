import { describe, expect, it } from 'vitest';
import { cardiacOutputLesson as lesson } from '../content/cardiac-output';
import { progressKey, questionOptions, type LearningState, type LessonProgress } from '../src/contracts/learning';
import {
  completeLesson,
  earnedXp,
  emptyProgress,
  getProgress,
  initialLearningState,
  recordAnswer,
  updateProgress,
} from '../src/features/learning/progress';

const firstCompletion = '2026-10-01T12:00:00.000Z';
const laterCompletion = '2026-10-02T12:00:00.000Z';
const key = progressKey(lesson);
const makeProgress = (overrides: Partial<LessonProgress> = {}): LessonProgress => ({
  ...emptyProgress,
  ...overrides,
});
const makeState = (overrides: Partial<LearningState> = {}): LearningState => ({
  ...initialLearningState,
  lessons: {},
  ...overrides,
});
const correctAnswer = () => recordAnswer(lesson, makeProgress({ stage: 2 }), lesson.correctOptionId);

// Dates are injected so these tests never depend on the wall clock.
describe('learning progress', () => {
  it('starts without an answer, completion or XP', () => {
    const state = makeState();

    expect(getProgress(state, lesson)).toEqual({
      stage: 0, selectedOptionId: null, orderedIds: null, submitted: false, completedAt: null,
    });
    expect(earnedXp(state, lesson)).toBe(0);
  });

  it.each(['pt-BR', 'en'] as const)('records canonical option IDs from %s without awarding XP', (locale) => {
    for (const option of questionOptions(lesson.translations[locale].question)!) {
      const before = makeProgress({ stage: 2 });
      const answer = recordAnswer(lesson, before, option.id);
      const state = updateProgress(makeState(), lesson, answer);

      expect(answer).toEqual({ ...before, selectedOptionId: option.id, submitted: true });
      expect(before).toEqual(makeProgress({ stage: 2 }));
      expect(earnedXp(state, lesson)).toBe(0);
    }
  });

  it.each(['unknown-option', '', questionOptions(lesson.translations.en.question)![0].label])(
    'ignores invalid option ID %j instead of accepting a translated label',
    (optionId) => {
      const before = correctAnswer();
      expect(recordAnswer(lesson, before, optionId)).toBe(before);
    },
  );

  it.each([
    { name: 'no answer', progress: makeProgress() },
    { name: 'selected but not submitted', progress: makeProgress({ selectedOptionId: lesson.correctOptionId }) },
    { name: 'submitted without selection', progress: makeProgress({ submitted: true }) },
    ...questionOptions(lesson.translations.en.question)!
      .filter((option) => option.id !== lesson.correctOptionId)
      .map((option) => ({
        name: `incorrect answer ${option.id}`,
        progress: makeProgress({ selectedOptionId: option.id, submitted: true }),
      })),
    { name: 'unknown answer', progress: makeProgress({ selectedOptionId: 'unknown-option', submitted: true }) },
  ])('does not complete a lesson with $name', ({ progress }) => {
    expect(completeLesson(lesson, progress, new Date(firstCompletion))).toBe(progress);
    expect(progress.completedAt).toBeNull();
  });

  it('completes only a submitted correct answer, storing the supplied ISO timestamp', () => {
    const before = correctAnswer();
    const completed = completeLesson(lesson, before, new Date(firstCompletion));
    const state = updateProgress(makeState(), lesson, completed);

    expect(completed).toEqual({ ...before, completedAt: firstCompletion });
    expect(before.completedAt).toBeNull();
    expect(getProgress(state, lesson)).toEqual(completed);
    expect(earnedXp(state, lesson)).toBe(10);
  });

  it('allows correcting a wrong answer before completing', () => {
    const wrong = recordAnswer(lesson, makeProgress(), 'output-525');
    const corrected = recordAnswer(lesson, wrong, lesson.correctOptionId);

    expect(completeLesson(lesson, wrong, new Date(firstCompletion))).toBe(wrong);
    expect(completeLesson(lesson, corrected, new Date(firstCompletion)).completedAt).toBe(firstCompletion);
  });

  it('keeps the original timestamp when completion is repeated', () => {
    const completed = completeLesson(lesson, correctAnswer(), new Date(firstCompletion));

    expect(completeLesson(lesson, completed, new Date(laterCompletion))).toBe(completed);
    expect(completed.completedAt).toBe(firstCompletion);
  });

  it('shares completion and exactly 10 XP across locale changes, repetitions and study reviews', () => {
    const completed = completeLesson(lesson, correctAnswer(), new Date(firstCompletion));
    let state = updateProgress(makeState(), lesson, completed);

    for (const locale of ['en', 'pt-BR', 'en'] as const) {
      state = { ...state, uiLocale: locale, studyLocale: locale };
      for (const option of questionOptions(lesson.translations[locale].question)!) {
        const reviewed = recordAnswer(lesson, getProgress(state, lesson), option.id);
        const repeated = completeLesson(lesson, reviewed, new Date(laterCompletion));
        state = updateProgress(state, lesson, repeated);

        expect(getProgress(state, lesson).completedAt).toBe(firstCompletion);
        expect(earnedXp(state, lesson)).toBe(10);
        expect(Object.keys(state.lessons)).toEqual([key]);
      }
    }
  });

  it.each([
    { name: 'resetting the exercise', incoming: makeProgress() },
    { name: 'submitting a wrong answer', incoming: makeProgress({ selectedOptionId: 'output-525', submitted: true }) },
    { name: 'clearing completion on a correct answer', incoming: correctAnswer() },
    { name: 'replacing the completion date', incoming: { ...correctAnswer(), completedAt: laterCompletion } },
  ])('preserves completedAt when $name', ({ incoming }) => {
    const completed = { ...correctAnswer(), completedAt: firstCompletion };
    const before = makeState({ lessons: { [key]: completed } });
    const next = updateProgress(before, lesson, incoming);

    expect(getProgress(next, lesson)).toEqual({ ...incoming, completedAt: firstCompletion });
    expect(earnedXp(next, lesson)).toBe(10);
    expect(before.lessons[key]).toEqual(completed);
  });

  it.each([
    { name: 'unsubmitted correct selection', incoming: makeProgress({ selectedOptionId: lesson.correctOptionId }) },
    { name: 'wrong answer', incoming: makeProgress({ selectedOptionId: 'output-70', submitted: true }) },
    { name: 'missing answer', incoming: makeProgress({ submitted: true }) },
  ])('does not accept an injected completion timestamp for $name', ({ incoming }) => {
    const state = updateProgress(makeState(), lesson, { ...incoming, completedAt: firstCompletion });

    expect(getProgress(state, lesson).completedAt).toBeNull();
    expect(earnedXp(state, lesson)).toBe(0);
  });

  it('rejects an unknown option without changing state', () => {
    const before = makeState();
    const incoming = makeProgress({ selectedOptionId: 'unknown-option', submitted: true, completedAt: firstCompletion });

    expect(updateProgress(before, lesson, incoming)).toBe(before);
  });

  it('preserves unrelated progress without mutating the initial state or defaults', () => {
    const unrelated = makeProgress({ stage: 1 });
    const before = makeState({ lessons: { 'another-lesson@1': unrelated } });
    const incoming = makeProgress({ stage: 2 });
    const next = updateProgress(before, lesson, incoming);

    expect(next.lessons['another-lesson@1']).toEqual(unrelated);
    expect(next.lessons[key]).toEqual(incoming);
    expect(before.lessons).toEqual({ 'another-lesson@1': unrelated });
    expect(initialLearningState.lessons).toEqual({});
    expect(emptyProgress).toEqual(makeProgress());
  });

  it('does not reuse an incompatible content revision as current completion or XP', () => {
    const historical = { ...correctAnswer(), completedAt: firstCompletion };
    const before = makeState({ lessons: { 'cardiac-output@0': historical } });

    expect(getProgress(before, lesson)).toEqual(emptyProgress);
    expect(earnedXp(before, lesson)).toBe(0);

    const next = updateProgress(before, lesson, makeProgress({ stage: 1 }));
    expect(next.lessons['cardiac-output@0']).toEqual(historical);
    expect(next.lessons[key].completedAt).toBeNull();
  });
});

