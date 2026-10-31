import { describe, expect, it } from 'vitest';
import { catalog, lessons } from '../content';
import { cardiacCycleLesson } from '../content/cardiac-cycle';
import { cardiacOutputFormulaLesson } from '../content/cardiac-output-formula';
import { lessonCatalogSchema, lessonSchema, questionItems, questionOptions } from '../src/contracts/learning';

describe('lesson catalog', () => {
  it('contains every lesson as a valid demo-unreviewed draft with unique ids', () => {
    expect(lessons.length).toBe(3);
    expect(lessonCatalogSchema.parse(lessons)).toEqual(lessons);
    expect(new Set(lessons.map((lesson) => lesson.id))).toEqual(new Set(['cardiac-output', 'cardiac-output-formula', 'cardiac-cycle']));
    expect(new Set(lessons.map((lesson) => lesson.questionId))).toHaveLength(lessons.length);
    for (const lesson of lessons) {
      expect(lesson.status).toBe('demo-unreviewed');
      expect(lessonSchema.safeParse(lesson).success).toBe(true);
      expect(lesson.sectionId).toBe('cardio-physiology');
    }
  });

  it('places every lesson in exactly one course section, matching its sectionId', () => {
    const placed = catalog.course.sections.flatMap((section) => section.lessonIds);
    expect(new Set(placed).size).toBe(placed.length);
    expect([...placed].sort()).toEqual(lessons.map((lesson) => lesson.id).sort());
    for (const lesson of lessons) {
      expect(catalog.course.sections.some((section) => section.id === lesson.sectionId && section.lessonIds.includes(lesson.id))).toBe(true);
    }
  });

  it('rejects a catalog with duplicated lesson ids', () => {
    expect(lessonCatalogSchema.safeParse([lessons[0], lessons[0]]).success).toBe(false);
  });

  it('keeps option ids scoped per lesson, so progress keys never collide across lessons', () => {
    const optionIds = lessons.flatMap((lesson) => questionOptions(lesson.translations.en.question)?.map((option) => `${lesson.id}:${option.id}`) ?? []);
    const itemIds = lessons.flatMap((lesson) => questionItems(lesson.translations.en.question)?.map((item) => `${lesson.id}:${item.id}`) ?? []);
    expect(new Set([...optionIds, ...itemIds]).size).toBe(optionIds.length + itemIds.length);
  });
});

describe('cardiac cycle demo content (order steps)', () => {
  const lesson = cardiacCycleLesson;

  it('satisfies the lesson contract and keeps its canonical identity', () => {
    expect(lessonSchema.safeParse(lesson).success).toBe(true);
    expect(lesson).toMatchObject({
      id: 'cardiac-cycle',
      revision: 1,
      questionId: 'cardiac-cycle-order',
      xp: 10,
      status: 'demo-unreviewed',
    });
    expect(lesson.translations['pt-BR'].question.type).toBe('order');
    expect(lesson.correctOrderIds).toEqual(['filling', 'atrial-systole', 'isovolumetric-contraction', 'ejection', 'isovolumetric-relaxation']);
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

  it('uses the same order item ids across locales and a correct permutation as answer key', () => {
    const ids = (locale: 'pt-BR' | 'en') => questionItems(lesson.translations[locale].question)!.map((item) => item.id);
    expect(ids('pt-BR')).toEqual(['filling', 'atrial-systole', 'isovolumetric-contraction', 'ejection', 'isovolumetric-relaxation']);
    expect(ids('en')).toEqual(ids('pt-BR'));
    expect([...(lesson.correctOrderIds ?? [])].sort()).toEqual([...ids('pt-BR')].sort());
    for (const locale of ['pt-BR', 'en'] as const) {
      expect(questionItems(lesson.translations[locale].question)!.every((item) => item.explanation.trim().length > 0)).toBe(true);
    }
  });

  it('shares the course identity with the other lessons', () => {
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

  it('rejects a correctOrderIds that is not a permutation of the item ids', () => {
    const candidate = structuredClone(lesson);
    candidate.correctOrderIds = ['filling', 'atrial-systole', 'ejection'];
    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });
});

describe('cardiac output formula demo content (fill in the blank)', () => {
  const lesson = cardiacOutputFormulaLesson;

  it('satisfies the lesson contract with a fill question and canonical answer', () => {
    expect(lessonSchema.safeParse(lesson).success).toBe(true);
    expect(lesson).toMatchObject({ id: 'cardiac-output-formula', questionId: 'cardiac-output-formula-fill', correctOptionId: 'stroke-volume' });
    const q = lesson.translations['pt-BR'].question;
    expect(q.type).toBe('fill');
    if (q.type === 'fill') {
      expect(q.blank).toContain('______');
      expect(questionOptions(q)).toHaveLength(4);
    }
    expect(lesson.translations.en.question.type).toBe('fill');
  });
});
