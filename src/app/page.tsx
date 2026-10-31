import { LearningApp } from '@/features/learning/learning-app';
import { canShowMedicalDemo } from '@/content/demo-policy';

export const dynamic = 'force-dynamic';

export default function Page() {
  if (!canShowMedicalDemo(process.env.NODE_ENV, process.env.ENABLE_MEDICAL_DEMO)) {
    return <main className="demo-gate"><h1>Medora</h1><h2>Medical demo disabled · Demonstração médica desativada</h2><p>This prototype contains content that has not been medically reviewed. Production access requires an explicit demo opt-in.</p><p lang="pt-BR">Este protótipo contém material sem revisão médica. O acesso em produção exige habilitação explícita da demonstração.</p></main>;
  }
  return <LearningApp/>;
}
