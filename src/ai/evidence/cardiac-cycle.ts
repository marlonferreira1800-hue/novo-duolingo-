import 'server-only';
import { evidenceSchema } from '@/contracts/ai';

// Curated source selected during research, not a medical approval.
export const cardiacCycleEvidence = evidenceSchema.parse({
  id: 'openstax-cardiac-cycle-19-4',
  revision: 1,
  title: 'OpenStax Anatomy and Physiology 2e — 19.4 Cardiac Cycle',
  url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology',
  excerpt: 'The cardiac cycle begins with atrial systole, when the atria contract and push blood into the ventricles. Ventricular systole follows, ejecting blood into the pulmonary trunk and aorta. Diastole is the relaxation phase when chambers refill. Heart sounds S1 (lub) and S2 (dub) correspond to valve closures during the cycle.',
});
