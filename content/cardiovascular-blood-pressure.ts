import { lessonSchema } from '../src/contracts/learning';

export const cardiovascularBloodPressureLesson = lessonSchema.parse({
  id: 'cardiovascular-blood-pressure',
  revision: 1,
  questionId: 'cardiovascular-blood-pressure-formula',
  correctOptionId: 'cardiac-output',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cardio-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-20-3',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-3-blood-flow-blood-pressure-and-resistance',
      section: '20.3 Blood Flow, Blood Pressure, and Resistance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia cardiovascular',
      hook: 'De onde vem a pressão que o estetoscópio ouve?',
      title: 'Pressão arterial: PA = DC × RVP',
      description: 'Relacione pressão arterial, débito cardíaco e resistência vascular periférica.',
      objective: 'Completar a relação hemodinâmica PA = DC × RVP e explicar por que a pressão cai das artérias às veias.',
      stages: [
        {
          id: 'gradient',
          title: 'A pressão cai ao longo do circuito',
          paragraphs: [
            'A pressão é máxima nas artérias (≈ 120/80 mmHg na sistólica/diastólica), cai nos capilares e fica mínima nas veias. O gradiente de pressão é o que impulsiona o sangue.',
          ],
          takeaway: 'Artéria alta → capilar intermediária → veia baixa.',
          diagram: 'pressure',
        },
        {
          id: 'formula',
          title: 'PA depende de fluxo e resistência',
          paragraphs: [
            'A lei de Ohm hemodinâmica diz que pressão = fluxo × resistência. No corpo: PA = débito cardíaco × resistência vascular periférica (RVP).',
            'A RVP depende principalmente do raio dos vasos: vasoconstrição aumenta a pressão; vasodilatação diminui.',
          ],
          takeaway: 'PA = DC × RVP — mais fluxo ou mais resistência, mais pressão.',
          diagram: 'pressure',
        },
        {
          id: 'control',
          title: 'Barorreceptores ajustam a pressão',
          paragraphs: [
            'Barorreceptores no arco aórtico e seio carotídeo sentem a pressão e ajustam frequência cardíaca e tônus vascular pelo sistema nervoso autônomo.',
          ],
          takeaway: 'O organismo regula a PA em segundos pelo arco barorreceptor.',
          diagram: 'pressure',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a relação hemodinâmica fundamental:',
        blank: 'Pressão arterial (PA) = __________ × Resistência vascular periférica (RVP)',
        options: [
          {
            id: 'cardiac-output',
            label: 'Débito cardíaco (DC)',
            explanation: 'Correto: PA = DC × RVP. O fluxo que o coração ejeta, vezes a resistência dos vasos, define a pressão arterial.',
          },
          {
            id: 'blood-volume',
            label: 'Volume sanguíneo',
            explanation: 'Não: o volume sanguíneo influencia a pressão, mas a fórmula direta é PA = DC × RVP.',
          },
          {
            id: 'heart-rate-only',
            label: 'Só a frequência cardíaca',
            explanation: 'Não: a frequência cardíaca compõe o débito cardíaco, mas sozinha não define a pressão arterial.',
          },
          {
            id: 'venous-pressure',
            label: 'Pressão venosa',
            explanation: 'Não: a pressão venosa é muito baixa e não é o termo da fórmula da pressão arterial sistêmica.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'Where does the pressure the stethoscope hears come from?',
      title: 'Blood pressure: BP = CO × SVR',
      description: 'Relate blood pressure, cardiac output and systemic vascular resistance.',
      objective: 'Complete the hemodynamic relation BP = CO × SVR and explain why pressure falls from arteries to veins.',
      stages: [
        {
          id: 'gradient',
          title: 'Pressure falls along the circuit',
          paragraphs: [
            'Pressure is highest in the arteries (≈ 120/80 mmHg systolic/diastolic), drops across the capillaries and is lowest in the veins. This pressure gradient drives the blood.',
          ],
          takeaway: 'Arteries high → capillaries intermediate → veins low.',
          diagram: 'pressure',
        },
        {
          id: 'formula',
          title: 'BP depends on flow and resistance',
          paragraphs: [
            'The hemodynamic Ohm’s law says pressure = flow × resistance. In the body: BP = cardiac output × systemic vascular resistance (SVR).',
            'SVR depends mainly on vessel radius: vasoconstriction raises pressure; vasodilation lowers it.',
          ],
          takeaway: 'BP = CO × SVR — more flow or more resistance means more pressure.',
          diagram: 'pressure',
        },
        {
          id: 'control',
          title: 'Baroreceptors adjust pressure',
          paragraphs: [
            'Baroreceptors in the aortic arch and carotid sinus sense pressure and adjust heart rate and vascular tone through the autonomic nervous system.',
          ],
          takeaway: 'The body regulates BP within seconds via the baroreceptor reflex.',
          diagram: 'pressure',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the fundamental hemodynamic relation:',
        blank: 'Blood pressure (BP) = __________ × Systemic vascular resistance (SVR)',
        options: [
          {
            id: 'cardiac-output',
            label: 'Cardiac output (CO)',
            explanation: 'Correct: BP = CO × SVR. The flow the heart ejects, times the vessels’ resistance, defines blood pressure.',
          },
          {
            id: 'blood-volume',
            label: 'Blood volume',
            explanation: 'No: blood volume influences pressure, but the direct formula is BP = CO × SVR.',
          },
          {
            id: 'heart-rate-only',
            label: 'Heart rate alone',
            explanation: 'No: heart rate is part of cardiac output, but alone it does not define blood pressure.',
          },
          {
            id: 'venous-pressure',
            label: 'Venous pressure',
            explanation: 'No: venous pressure is very low and is not the term in the systemic arterial pressure formula.',
          },
        ],
      },
    },
  },
});
