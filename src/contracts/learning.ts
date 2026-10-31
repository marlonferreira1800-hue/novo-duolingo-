import { z } from 'zod';

export const locales = ['pt-BR', 'en'] as const;
export const localeSchema = z.enum(locales);
export type Locale = z.infer<typeof localeSchema>;

const stageSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
  takeaway: z.string().min(1),
  diagram: z.enum(['pump', 'equation', 'calculation']),
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
  id: z.literal('cardiac-output'),
  revision: z.literal(1),
  questionId: z.literal('cardiac-output-calculation'),
  correctOptionId: z.literal('output-5250'),
  estimatedMinutes: z.number().positive(),
  xp: z.literal(10),
  status: z.literal('demo-unreviewed'),
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
