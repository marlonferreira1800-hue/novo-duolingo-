import { lessonCatalogSchema, type LessonCatalog } from '../src/contracts/learning';
import { cardiacOutputLesson } from './cardiac-output';
import { cardiacCycleLesson } from './cardiac-cycle';

export const lessons: LessonCatalog = lessonCatalogSchema.parse([
  cardiacOutputLesson,
  cardiacCycleLesson,
]);

export { cardiacOutputLesson, cardiacCycleLesson };
export type { LessonCatalog };
