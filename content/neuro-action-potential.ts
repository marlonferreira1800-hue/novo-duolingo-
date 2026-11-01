import { lessonSchema } from '../src/contracts/learning';

export const neuroActionPotentialLesson = lessonSchema.parse({
  id: 'neuro-action-potential',
  revision: 1,
  questionId: 'neuro-action-potential-order',
  correctOptionId: 'ap-order',
  correctOrderIds: ['rest', 'depolarization', 'repolarization', 'hyperpolarization'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neurophysiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch12',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-1',
      section: 'Chapter 12 · Nervous Tissue',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neurofisiologia',
      hook: 'Um impulso nervoso é uma onda elétrica — em que ordem as fases acontecem?',
      title: 'Potencial de ação: a onda do impulso nervoso',
      description: 'Acompanhe as fases do potencial de ação, do repouso à hiperpolarização.',
      objective: 'Ordenar as fases do potencial de ação e associar despolarização à entrada de Na⁺ e repolarização à saída de K⁺.',
      stages: [
        {
          id: 'rest',
          title: 'No repouso, a membrana está polarizada',
          paragraphs: [
            'Em repouso, o neurônio fica em cerca de −70 mV: o interior é negativo em relação ao exterior, mantido pela bomba de Na⁺/K⁺ e pelos canais de K⁺ de vazamento.',
          ],
          takeaway: 'Repouso ≈ −70 mV, com o interior negativo.',
          diagram: 'neuron',
        },
        {
          id: 'depolarize',
          title: 'Estímulo abre canais de Na⁺',
          paragraphs: [
            'Quando um estímulo atinge o limiar, canais de Na⁺ voltagem-dependentes se abrem e o Na⁺ entra: a membrana despolariza e chega a valores positivos.',
            'É o potencial de ação em ascensão.',
          ],
          takeaway: 'Entrada de Na⁺ → despolarização.',
          diagram: 'neuron',
        },
        {
          id: 'repolarize',
          title: 'K⁺ sai e a membrana repolariza',
          paragraphs: [
            'Os canais de Na⁺ se inativam e os de K⁺ se abrem: o K⁺ sai, o interior volta a ficar negativo (repolarização) e pode passar do repouso (hiperpolarização) antes de estabilizar.',
          ],
          takeaway: 'Saída de K⁺ → repolarização, seguida de breve hiperpolarização.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Coloque as fases do potencial de ação na ordem correta:',
        items: [
          {
            id: 'rest',
            label: 'Potencial de repouso (−70 mV)',
            explanation: 'Início: membrana polarizada, interior negativo, canais de Na⁺ fechados.',
          },
          {
            id: 'depolarization',
            label: 'Despolarização (entrada de Na⁺)',
            explanation: 'Canais de Na⁺ se abrem no limiar e o interior fica positivo.',
          },
          {
            id: 'repolarization',
            label: 'Repolarização (saída de K⁺)',
            explanation: 'Na⁺ para de entrar e K⁺ sai; o interior volta a ficar negativo.',
          },
          {
            id: 'hyperpolarization',
            label: 'Hiperpolarização',
            explanation: 'Saída de K⁺ passa do ponto de repouso; depois a bomba restabelece −70 mV.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neurophysiology',
      hook: 'A nerve impulse is an electrical wave — in what order do the phases happen?',
      title: 'Action potential: the wave of the nerve impulse',
      description: 'Follow the phases of the action potential, from rest to hyperpolarization.',
      objective: 'Order the phases of the action potential and link depolarization to Na⁺ influx and repolarization to K⁺ efflux.',
      stages: [
        {
          id: 'rest',
          title: 'At rest, the membrane is polarized',
          paragraphs: [
            'At rest, the neuron sits around −70 mV: the inside is negative relative to the outside, maintained by the Na⁺/K⁺ pump and leak K⁺ channels.',
          ],
          takeaway: 'Rest ≈ −70 mV, with a negative inside.',
          diagram: 'neuron',
        },
        {
          id: 'depolarize',
          title: 'A stimulus opens Na⁺ channels',
          paragraphs: [
            'When a stimulus reaches threshold, voltage-gated Na⁺ channels open and Na⁺ rushes in: the membrane depolarizes and reaches positive values.',
            'This is the rising phase of the action potential.',
          ],
          takeaway: 'Na⁺ influx → depolarization.',
          diagram: 'neuron',
        },
        {
          id: 'repolarize',
          title: 'K⁺ leaves and the membrane repolarizes',
          paragraphs: [
            'Na⁺ channels inactivate and K⁺ channels open: K⁺ leaves, the inside becomes negative again (repolarization) and may briefly overshoot rest (hyperpolarization) before stabilizing.',
          ],
          takeaway: 'K⁺ efflux → repolarization, followed by brief hyperpolarization.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Put the phases of the action potential in the correct order:',
        items: [
          {
            id: 'rest',
            label: 'Resting potential (−70 mV)',
            explanation: 'Start: polarized membrane, negative inside, Na⁺ channels closed.',
          },
          {
            id: 'depolarization',
            label: 'Depolarization (Na⁺ influx)',
            explanation: 'Na⁺ channels open at threshold and the inside becomes positive.',
          },
          {
            id: 'repolarization',
            label: 'Repolarization (K⁺ efflux)',
            explanation: 'Na⁺ stops entering and K⁺ leaves; the inside becomes negative again.',
          },
          {
            id: 'hyperpolarization',
            label: 'Hyperpolarization',
            explanation: 'K⁺ efflux overshoots rest; then the pump restores −70 mV.',
          },
        ],
      },
    },
  },
});
