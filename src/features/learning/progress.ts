import type { Lesson, LessonProgress, LearningState } from '@/contracts/learning';
import { progressKey, questionItems, questionOptions } from '@/contracts/learning';

export const emptyProgress: LessonProgress = {
  stage: 0, selectedOptionId: null, orderedIds: null, submitted: false, completedAt: null,
};
export const initialLearningState: LearningState = {
  version: 1, uiLocale: 'pt-BR', studyLocale: 'pt-BR', lessons: {},
};
export function getProgress(state: LearningState, lesson: Lesson): LessonProgress {
  return state.lessons[progressKey(lesson)] ?? emptyProgress;
}
export function earnedXp(state: LearningState, lesson: Lesson): number {
  return getProgress(state, lesson).completedAt ? lesson.xp : 0;
}
export function recordAnswer(lesson: Lesson, progress: LessonProgress, optionId: string): LessonProgress {
  const options = questionOptions(lesson.translations.en.question);
  if (!options?.some((option) => option.id === optionId)) return progress;
  return { ...progress, selectedOptionId: optionId, orderedIds: null, submitted: true };
}
export function recordOrder(lesson: Lesson, progress: LessonProgress, orderedIds: string[]): LessonProgress {
  const items = questionItems(lesson.translations.en.question);
  if (!items) return progress;
  const itemIds = items.map((item) => item.id).sort().join('|');
  if ([...orderedIds].sort().join('|') !== itemIds) return progress;
  return { ...progress, selectedOptionId: null, orderedIds, submitted: true };
}
export function isCorrectSubmission(lesson: Lesson, progress: LessonProgress): boolean {
  if (!progress.submitted) return false;
  const question = lesson.translations.en.question;
  if (question.type === 'order') {
    const correct = lesson.correctOrderIds ?? [];
    const given = progress.orderedIds ?? [];
    return correct.length === given.length && correct.every((id, index) => id === given[index]);
  }
  return progress.selectedOptionId === lesson.correctOptionId;
}
export function completeLesson(lesson: Lesson, progress: LessonProgress, now = new Date()): LessonProgress {
  if (progress.completedAt || !isCorrectSubmission(lesson, progress)) return progress;
  return { ...progress, completedAt: now.toISOString() };
}
export function updateProgress(state: LearningState, lesson: Lesson, incoming: LessonProgress): LearningState {
  const old = getProgress(state, lesson);
  const question = lesson.translations.en.question;
  const options = questionOptions(question);
  const items = questionItems(question);
  const validOption = incoming.selectedOptionId === null || Boolean(options?.some((o) => o.id === incoming.selectedOptionId));
  const validOrder = incoming.orderedIds == null ||
    (items != null && [...incoming.orderedIds].sort().join('|') === items.map((item) => item.id).sort().join('|'));
  if (!validOption || !validOrder) return state;
  const canComplete = isCorrectSubmission(lesson, incoming);
  return {
    ...state,
    lessons: {
      ...state.lessons,
      [progressKey(lesson)]: { ...incoming, completedAt: old.completedAt ?? (canComplete ? incoming.completedAt : null) },
    },
  };
}
