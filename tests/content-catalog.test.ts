import { describe, expect, it } from 'vitest';
import { lessons } from '../content';
import { cardiacCycleLesson } from '../content/cardiac-cycle';
import { lessonCatalogSchema, lessonSchema } from '../src/contracts/learning';

describe('lesson catalog', () => {
  it('contains every lesson as a valid demo-unreviewed draft with unique ids', () => {
    expect(lessons.length).toBe(2);
    expect(lessonCatalogSchema.parse(lessons)).toEqual(lessons);
    expect(new Set(lessons.map((lesson) => lesson.id))).toEqual(new Set(['cardiac-output', 'cardiac-cycle']));
    expect(new Set(lessons.map((lesson) => lesson.questionId))).toHaveLength(lessons.length);
    for (const lesson of lessons) {
      expect(lesson.status).toBe('demo-unreviewed');
      expect(lessonSchema.safeParse(lesson).success).toBe(true);
    }
  });

  it('rejects a catalog with duplicated lesson ids', () => {
    expect(lessonCatalogSchema.safeParse([lessons[0], lessons[0]]).success).toBe(false);
  });

  it('keeps option ids scoped per lesson, so progress keys never collide across lessons', () => {
    const [first, second] = lessons;
    const firstOptions = first.translations.en.question.options.map((option) => option.id);
    const secondOptions = second.translations.en.question.options.map((option) => option.id);
    expect(new Set([...firstOptions, ...secondOptions]).size).toBe(firstOptions.length + secondOptions.length);
  });
});

describe('cardiac cycle demo content', () => {
  const lesson = cardiacCycleLesson;

  it('satisfies the lesson contract and keeps its canonical identity', () => {
    expect(lessonSchema.safeParse(lesson).success).toBe(true);
    expect(lesson).toMatchObject({
      id: 'cardiac-cycle',
      revision: 1,
      questionId: 'cardiac-cycle-isovolumetric',
      correctOptionId: 'valves-all-closed',
      xp: 10,
      status: 'demo-unreviewed',
    });
  });

  it('uses the same ordered stage ids and diagrams in Portuguese and English', () => {
    const stages = (locale: 'pt-BR' | 'en') => lesson.translations[locale].stages.map(({ id, diagram }) => ({ id, diagram }));
    expect(stages('pt-BR')).toEqual([
      { id: 'phases', diagram: 'phases' },
      { id: 'valves', diagram: 'valves' },
      { id: 'sounds', diagram: 'sounds' },
    ]);
    expect(stages('en')).toEqual(stages('pt-BR'));
  });

  it('uses four unique canonical option ids in the same order across locales', () => {
    const ids = (locale: 'pt-BR' | 'en') => lesson.translations[locale].question.options.map((option) => option.id);
    expect(ids('pt-BR')).toEqual(['valves-all-closed', 'valves-av-open', 'valves-semilunar-open', 'valves-all-open']);
    expect(ids('en')).toEqual(ids('pt-BR'));
    for (const locale of ['pt-BR', 'en'] as const) {
      expect(ids(locale).filter((id) => id === lesson.correctOptionId)).toHaveLength(1);
      expect(lesson.translations[locale].question.options.every((option) => option.explanation.trim().length > 0)).toBe(true);
    }
  });

  it('shares the course identity with the cardiac output lesson', () => {
    for (const locale of ['pt-BR', 'en'] as const) {
      expect(lesson.translations[locale].courseTitle).toBe(lessons[0].translations[locale].courseTitle);
      expect(lesson.translations[locale].sectionTitle).toBe(lessons[0].translations[locale].sectionTitle);
    }
  });

  it('rejects a mismatched stage diagram across locales', () => {
    const candidate = structuredClone(lesson);
    candidate.translations.en.stages[0].diagram = 'sounds';
    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });
});
