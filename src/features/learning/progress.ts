import type { Lesson, LessonProgress, LearningState } from '@/contracts/learning';
import { progressKey } from '@/contracts/learning';

export const emptyProgress: LessonProgress = {
  stage: 0, selectedOptionId: null, submitted: false, completedAt: null,
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
  if (!lesson.translations.en.question.options.some((option) => option.id === optionId)) return progress;
  return { ...progress, selectedOptionId: optionId, submitted: true };
}
export function completeLesson(lesson: Lesson, progress: LessonProgress, now = new Date()): LessonProgress {
  if (progress.completedAt || !progress.submitted || progress.selectedOptionId !== lesson.correctOptionId) return progress;
  return { ...progress, completedAt: now.toISOString() };
}
export function updateProgress(state: LearningState, lesson: Lesson, incoming: LessonProgress): LearningState {
  const old = getProgress(state, lesson);
  const validOption = incoming.selectedOptionId === null || lesson.translations.en.question.options.some((o) => o.id === incoming.selectedOptionId);
  if (!validOption) return state;
  const canComplete = incoming.submitted && incoming.selectedOptionId === lesson.correctOptionId;
  return {
    ...state,
    lessons: {
      ...state.lessons,
      [progressKey(lesson)]: { ...incoming, completedAt: old.completedAt ?? (canComplete ? incoming.completedAt : null) },
    },
  };
}
