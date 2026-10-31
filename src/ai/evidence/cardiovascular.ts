import 'server-only';
import { evidenceSchema } from '@/contracts/ai';

// A source selected during research, not a medical approval or automated retrieval result.
export const cardiovascularEvidence = evidenceSchema.parse({
  id: 'openstax-cardio-19-4',
  revision: 1,
  title: 'OpenStax Anatomy and Physiology 2e — 19.4 Cardiac Physiology',
  url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology',
  excerpt: 'Cardiac output is the volume pumped by each ventricle per minute. It equals heart rate multiplied by stroke volume. In the worked example, 75 beats/min multiplied by 70 mL/beat gives 5,250 mL/min, or 5.25 L/min. Output from the two ventricles is not added together.',
});
