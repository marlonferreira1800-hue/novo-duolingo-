import { describe, expect, it } from 'vitest';
import { cardiacOutputLesson as lesson } from '../content/cardiac-output';
import { lessonSchema, questionOptions } from '../src/contracts/learning';

const cloneLesson = () => structuredClone(lesson);
const optionsOf = (locale: 'pt-BR' | 'en') => {
  const options = questionOptions(lesson.translations[locale].question);
  if (!options) throw new Error('expected an option-based question');
  return options;
};

describe('cardiac output demo content', () => {
  it('satisfies the lesson contract and keeps its canonical identity', () => {
    expect(lessonSchema.safeParse(lesson).success).toBe(true);
    expect(lesson).toMatchObject({
      id: 'cardiac-output',
      revision: 1,
      questionId: 'cardiac-output-calculation',
      correctOptionId: 'output-5250',
      xp: 10,
      sectionId: 'cardio-physiology',
    });
    expect(lesson.translations['pt-BR'].question.type).toBe('multiple-choice');
    expect(lesson.translations['pt-BR'].hook.length).toBeGreaterThan(10);
    expect(lesson.translations.en.hook.length).toBeGreaterThan(10);
  });

  it('uses the same ordered stage IDs and diagrams in Portuguese and English', () => {
    const stages = (locale: 'pt-BR' | 'en') => lesson.translations[locale].stages
      .map(({ id, diagram }) => ({ id, diagram }));

    expect(stages('pt-BR')).toEqual([
      { id: 'pump', diagram: 'pump' },
      { id: 'equation', diagram: 'equation' },
      { id: 'calculation', diagram: 'calculation' },
    ]);
    expect(stages('en')).toEqual(stages('pt-BR'));
  });

  it('uses four unique canonical option IDs in the same order across locales', () => {
    const ids = (locale: 'pt-BR' | 'en') => optionsOf(locale).map((option) => option.id);

    expect(ids('pt-BR')).toEqual(['output-5250', 'output-525', 'output-10500', 'output-70']);
    expect(ids('en')).toEqual(ids('pt-BR'));
    expect(new Set(ids('pt-BR')).size).toBe(4);
    for (const locale of ['pt-BR', 'en'] as const) {
      expect(ids(locale).filter((id) => id === lesson.correctOptionId)).toHaveLength(1);
      expect(optionsOf(locale).every((option) => option.explanation.trim().length > 0)).toBe(true);
    }
  });

  it('is explicitly an unreviewed demo with its educational source and section', () => {
    expect(lesson.status).toBe('demo-unreviewed');
    expect(lesson.sources).toEqual([
      {
        id: 'openstax-anatomy-physiology-2e-19-4',
        title: 'OpenStax Anatomy and Physiology 2e',
        url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology',
        section: '19.4 Cardiac Physiology',
      },
    ]);
  });

  it.each([0, 1, 2])('rejects a mismatched stage ID at index %i', (index) => {
    const candidate = cloneLesson();
    candidate.translations.en.stages[index].id = 'different-stage';

    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });

  it('rejects a mismatched diagram even if the stage ID matches', () => {
    const candidate = cloneLesson();
    candidate.translations.en.stages[0].diagram = 'equation';

    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });

  it.each(['pt-BR', 'en'] as const)('rejects duplicate option IDs in %s', (locale) => {
    const candidate = cloneLesson();
    const q = candidate.translations[locale].question;
    if (q.type === 'order') throw new Error('expected options');
    q.options[1].id = q.options[0].id;

    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });

  it('rejects duplicate option IDs even when both translations have identical duplicates', () => {
    const candidate = cloneLesson();
    for (const locale of ['pt-BR', 'en'] as const) {
      const q = candidate.translations[locale].question;
      if (q.type === 'order') throw new Error('expected options');
      q.options[1].id = lesson.correctOptionId;
    }

    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });

  it('rejects reordered options in only one translation', () => {
    const candidate = cloneLesson();
    const q = candidate.translations.en.question;
    if (q.type === 'order') throw new Error('expected options');
    q.options.reverse();

    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });

  it('rejects a missing correct option even when the translated IDs match', () => {
    const candidate = cloneLesson();
    for (const locale of ['pt-BR', 'en'] as const) {
      const q = candidate.translations[locale].question;
      if (q.type === 'order') throw new Error('expected options');
      q.options[0].id = 'replacement-option';
    }

    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });

  it('rejects a question type mismatch across locales', () => {
    const candidate = cloneLesson();
    candidate.translations.en.question = { ...candidate.translations.en.question, type: 'fill', blank: 'x' } as never;

    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });

  it.each(['in_review', 'approved', 'published', 'withdrawn'])('accepts editorial status %s in schema (gate still blocks production)', (status) => {
    expect(lessonSchema.safeParse({ ...lesson, status }).success).toBe(true);
  });

  it('real demo content remains demo-unreviewed until human medical review (D8)', () => {
    expect(lesson.status).toBe('demo-unreviewed');
  });

  it('rejects content without a source or with an invalid source URL', () => {
    expect(lessonSchema.safeParse({ ...lesson, sources: [] }).success).toBe(false);
    expect(lessonSchema.safeParse({
      ...lesson,
      sources: [{ ...lesson.sources[0], url: 'not-a-url' }],
    }).success).toBe(false);
  });

  it.each([0, 1, 2])('regression: rejects %i English stages through safeParse instead of throwing', (count) => {
    const candidate = cloneLesson();
    candidate.translations.en.stages = candidate.translations.en.stages.slice(0, count);

    // A malformed translation must produce a validation failure, not an indexing exception.
    expect(lessonSchema.safeParse(candidate).success).toBe(false);
  });
});
