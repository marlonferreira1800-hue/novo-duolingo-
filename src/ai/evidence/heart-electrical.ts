import 'server-only';
import { evidenceSchema } from '@/contracts/ai';

// Curated source selected during research, not a medical approval.
export const heartElectricalEvidence = evidenceSchema.parse({
  id: 'openstax-conduction-19-4',
  revision: 1,
  title: 'OpenStax Anatomy and Physiology 2e — 19.4 Cardiac Conduction System',
  url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology',
  excerpt: 'The sinoatrial (SA) node acts as the natural pacemaker, initiating impulses at about 60–100 times per minute. The impulse spreads through the atria, reaches the atrioventricular (AV) node, travels down the AV bundle (bundle of His) and Purkinje fibers, causing ventricular contraction. ECG waves reflect this electrical activity: P wave (atrial depolarization), QRS complex (ventricular depolarization), T wave (ventricular repolarization).',
});
