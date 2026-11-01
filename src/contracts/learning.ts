import { z } from 'zod';

export const locales = ['pt-BR', 'en'] as const;
export const localeSchema = z.enum(locales);
export type Locale = z.infer<typeof localeSchema>;

const stageSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
  takeaway: z.string().min(1),
  diagram: z.enum(['pump', 'equation', 'calculation', 'phases', 'valves', 'sounds', 'membrane', 'mitochondria', 'tissue', 'bone', 'lung', 'kidney', 'neuron', 'inflammation', 'endocrine', 'embryo', 'dna', 'immune', 'microbe', 'intestine', 'sarcomere', 'ecg', 'pressure', 'adme', 'incidence', 'parasite', 'brain', 'chest', 'neoplasia', 'stats']),
});
const optionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  explanation: z.string().min(1),
});
const orderItemSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  explanation: z.string().min(1),
});

const multipleChoiceQuestionSchema = z.object({
  type: z.literal('multiple-choice'),
  prompt: z.string().min(1),
  options: z.array(optionSchema).length(4),
});
const fillQuestionSchema = z.object({
  type: z.literal('fill'),
  prompt: z.string().min(1),
  blank: z.string().min(1),
  options: z.array(optionSchema).length(4),
});
const orderQuestionSchema = z.object({
  type: z.literal('order'),
  prompt: z.string().min(1),
  items: z.array(orderItemSchema).min(3).max(6),
});
const questionSchema = z.discriminatedUnion('type', [
  multipleChoiceQuestionSchema,
  fillQuestionSchema,
  orderQuestionSchema,
]);
export type Question = z.infer<typeof questionSchema>;

export const localizedLessonSchema = z.object({
  courseTitle: z.string().min(1),
  sectionTitle: z.string().min(1),
  hook: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  objective: z.string().min(1),
  stages: z.array(stageSchema).length(3),
  question: questionSchema,
});
export const lessonStatusSchema = z.enum(['demo-unreviewed', 'in_review', 'approved', 'published', 'withdrawn']);
export type LessonStatus = z.infer<typeof lessonStatusSchema>;
export const lessonSchema = z.object({
  id: z.string().min(1),
  revision: z.number().int().min(1),
  questionId: z.string().min(1),
  correctOptionId: z.string().min(1),
  correctOrderIds: z.array(z.string().min(1)).optional(),
  estimatedMinutes: z.number().positive(),
  xp: z.number().int().positive(),
  status: lessonStatusSchema,
  sectionId: z.string().min(1),
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
  if (pt.question.type !== en.question.type) {
    ctx.addIssue({ code: 'custom', message: 'Question type must match across languages.' });
    return;
  }
  if (pt.question.type === 'order' && en.question.type === 'order') {
    const ptIds = pt.question.items.map((item) => item.id);
    const enIds = en.question.items.map((item) => item.id);
    if (ptIds.join('|') !== enIds.join('|')) {
      ctx.addIssue({ code: 'custom', message: 'Order item identities must match across languages.' });
    }
    const correct = lesson.correctOrderIds ?? [];
    if (correct.length !== ptIds.length || new Set([...correct, ...ptIds]).size !== ptIds.length) {
      ctx.addIssue({ code: 'custom', message: 'correctOrderIds must be a permutation of the order item ids.' });
    }
    return;
  }
  if ((pt.question.type === 'multiple-choice' || pt.question.type === 'fill') &&
      (en.question.type === 'multiple-choice' || en.question.type === 'fill')) {
    const ids = pt.question.options.map((option) => option.id);
    const translatedIds = en.question.options.map((option) => option.id);
    if (new Set(ids).size !== 4 || ids.join('|') !== translatedIds.join('|') || !ids.includes(lesson.correctOptionId)) {
      ctx.addIssue({ code: 'custom', message: 'Question option identities must be unique and match across languages.' });
    }
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

const sectionTranslationSchema = z.object({ title: z.string().min(1) });
export const courseSectionSchema = z.object({
  id: z.string().min(1),
  translations: z.object({ 'pt-BR': sectionTranslationSchema, en: sectionTranslationSchema }),
  lessonIds: z.array(z.string().min(1)).min(1),
});
export const courseSchema = z.object({
  id: z.string().min(1),
  translations: z.object({
    'pt-BR': z.object({ title: z.string().min(1), description: z.string().min(1) }),
    en: z.object({ title: z.string().min(1), description: z.string().min(1) }),
  }),
  sections: z.array(courseSectionSchema).min(1),
});
export type Course = z.infer<typeof courseSchema>;
export type CourseSection = z.infer<typeof courseSectionSchema>;

export const catalogSchema = z.object({
  course: courseSchema,
  lessons: lessonCatalogSchema,
}).superRefine((catalog, ctx) => {
  const lessonIds = new Set(catalog.lessons.map((lesson) => lesson.id));
  const seen = new Set<string>();
  for (const section of catalog.course.sections) {
    for (const id of section.lessonIds) {
      if (!lessonIds.has(id)) {
        ctx.addIssue({ code: 'custom', message: `Section ${section.id} references unknown lesson ${id}.` });
      }
      if (seen.has(id)) {
        ctx.addIssue({ code: 'custom', message: `Lesson ${id} appears in more than one section.` });
      }
      seen.add(id);
    }
  }
  for (const lesson of catalog.lessons) {
    if (!catalog.course.sections.some((section) => section.id === lesson.sectionId)) {
      ctx.addIssue({ code: 'custom', message: `Lesson ${lesson.id} has sectionId ${lesson.sectionId} missing from the course.` });
    }
    if (!seen.has(lesson.id)) {
      ctx.addIssue({ code: 'custom', message: `Lesson ${lesson.id} is not placed in any course section.` });
    }
  }
});
export type Catalog = z.infer<typeof catalogSchema>;

export const lessonProgressSchema = z.object({
  stage: z.number().int().min(0).max(2),
  selectedOptionId: z.string().nullable(),
  orderedIds: z.array(z.string().min(1)).nullish(),
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

export function questionOptions(question: Question) {
  return question.type === 'order' ? null : question.options;
}
export function questionItems(question: Question) {
  return question.type === 'order' ? question.items : null;
}
