import { catalogSchema, type Catalog, type LessonCatalog } from '../src/contracts/learning';
import { cardiacOutputLesson } from './cardiac-output';
import { cardiacCycleLesson } from './cardiac-cycle';
import { cardiacOutputFormulaLesson } from './cardiac-output-formula';

export const catalog: Catalog = catalogSchema.parse({
  course: {
    id: 'cardiovascular-system',
    translations: {
      'pt-BR': {
        title: 'Sistema cardiovascular',
        description: 'Entenda o coração, um conceito de cada vez.',
      },
      en: {
        title: 'Cardiovascular system',
        description: 'Understand the heart, one concept at a time.',
      },
    },
    sections: [
      {
        id: 'cardio-physiology',
        translations: {
          'pt-BR': { title: '01 · Fisiologia cardiovascular' },
          en: { title: '01 · Cardiovascular physiology' },
        },
        lessonIds: ['cardiac-output', 'cardiac-output-formula', 'cardiac-cycle'],
      },
    ],
  },
  lessons: [cardiacOutputLesson, cardiacOutputFormulaLesson, cardiacCycleLesson],
});

export const lessons: LessonCatalog = catalog.lessons;
export const course = catalog.course;

export { cardiacOutputLesson, cardiacCycleLesson, cardiacOutputFormulaLesson };
export type { LessonCatalog };
