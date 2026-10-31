import type { Metadata } from 'next';
import { LandingPage } from '@/features/marketing/landing-page';
import { canShowMedicalDemo } from '@/content/demo-policy';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Medora — um pouco de medicina, todos os dias',
  description: 'Conheça o Medora: um protótipo educacional para estudantes de medicina em português e inglês. A bilingual medical learning prototype.',
};

export default function Page() {
  return <LandingPage demoEnabled={canShowMedicalDemo(process.env.NODE_ENV, process.env.ENABLE_MEDICAL_DEMO)}/>;
}
