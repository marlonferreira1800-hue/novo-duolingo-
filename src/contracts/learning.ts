import { z } from 'zod';

export const locales = ['pt-BR', 'en'] as const;
export const localeSchema = z.enum(locales);
export type Locale = z.infer<typeof localeSchema>;

const stageSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
  takeaway: z.string().min(1),
  diagram: z.enum(['pump', 'equation', 'calculation', 'phases', 'valves', 'sounds']),
});
const optionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  explanation: z.string().min(1),
});
export const localizedLessonSchema = z.object({
  courseTitle: z.string().min(1),
  sectionTitle: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  objective: z.string().min(1),
  stages: z.array(stageSchema).length(3),
  question: z.object({
    prompt: z.string().min(1),
    options: z.array(optionSchema).length(4),
  }),
});
export const lessonSchema = z.object({
  id: z.string().min(1),
  revision: z.number().int().min(1),
  questionId: z.string().min(1),
  correctOptionId: z.string().min(1),
  estimatedMinutes: z.number().positive(),
  xp: z.number().int().positive(),
  status: z.enum(['demo-unreviewed']),
  sources: z.array(z.object({ id: z.string(), title: z.string(), url: z.url(), section: z.string() })).min(1),
  translations: z.object({ 'pt-BR': localizedLessonSchema, en: localizedLessonSchema }),
}).superRefine((lesson, ctx) => {
  const pt = lesson.translations['pt-BR'];
  const en = lesson.translations.en;
  for (const [index, stage] of pt.stages.entries()) {
    if (!en.stages[index] || stage.id !== en.stages[index].id || stage.diagram !== en.stages[index].diagram) {
      ctx.addIssue({ code: 'custom', message: 'Stage identities must match across languages.' });
    }
  }
  const ids = pt.question.options.map((option) => option.id);
  const translatedIds = en.question.options.map((option) => option.id);
  if (new Set(ids).size !== 4 || ids.join('|') !== translatedIds.join('|') || !ids.includes(lesson.correctOptionId)) {
    ctx.addIssue({ code: 'custom', message: 'Question option identities must be unique and match across languages.' });
  }
});
export type Lesson = z.infer<typeof lessonSchema>;
export type LocalizedLesson = z.infer<typeof localizedLessonSchema>;

export const lessonCatalogSchema = z.array(lessonSchema).min(1).superRefine((lessons, ctx) => {
  const ids = lessons.map((lesson) => lesson.id);
  const questionIds = lessons.map((lesson) => lesson.questionId);
  if (new Set(ids).size !== ids.length) {
    ctx.addIssue({ code: 'custom', message: 'Lesson ids must be unique in the catalog.' });
  }
  if (new Set(questionIds).size !== questionIds.length) {
    ctx.addIssue({ code: 'custom', message: 'Question ids must be unique in the catalog.' });
  }
});
export type LessonCatalog = z.infer<typeof lessonCatalogSchema>;

export const lessonProgressSchema = z.object({
  stage: z.number().int().min(0).max(2),
  selectedOptionId: z.string().nullable(),
  submitted: z.boolean(),
  completedAt: z.string().datetime().nullable(),
});
export type LessonProgress = z.infer<typeof lessonProgressSchema>;
export const learningStateSchema = z.object({
  version: z.literal(1),
  uiLocale: localeSchema,
  studyLocale: localeSchema,
  lessons: z.record(z.string(), lessonProgressSchema),
});
export type LearningState = z.infer<typeof learningStateSchema>;
export interface ProgressStore {
  getSnapshot(): LearningState;
  subscribe(listener: () => void): () => void;
  setLocales(uiLocale: Locale, studyLocale: Locale): void;
  saveProgress(lesson: Lesson, progress: LessonProgress): void;
}
export const progressKey = (lesson: Pick<Lesson, 'id' | 'revision'>) => `${lesson.id}@${lesson.revision}`;
