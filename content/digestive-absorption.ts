import { lessonSchema } from '../src/contracts/learning';

export const digestiveAbsorptionLesson = lessonSchema.parse({
  id: 'digestive-absorption',
  revision: 1,
  questionId: 'digestive-absorption-surface',
  correctOptionId: 'villi',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch23',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1',
      section: 'Chapter 23 · The Digestive System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como o intestino consegue absorver tantos nutrientes em tão pouco espaço?',
      title: 'Absorção intestinal: vilosidades e microvilosidades',
      description: 'Veja como as dobras do intestino aumentam a superfície de contato e permitem a absorção.',
      objective: 'Explicar como vilosidades e microvilosidades aumentam a área de absorção e indicar para onde vão os nutrientes.',
      stages: [
        {
          id: 'folds',
          title: 'O intestino é cheio de dobras',
          paragraphs: [
            'O intestino delgado tem pregas circulares, vilosidades (projeções como dedos) e microvilosidades nas células — a “borda em escova”.',
            'Juntas, multiplicam a área de superfície em centenas de vezes.',
          ],
          takeaway: 'Pregas + vilosidades + microvilosidades = área enorme de absorção.',
          diagram: 'intestine',
        },
        {
          id: 'absorption',
          title: 'Os nutrientes atravessam as células',
          paragraphs: [
            'Aminoácidos e glicose são absorvidos por transporte ativo ou facilitado e caem nos capilares sanguíneos da vilosidade.',
            'Os lipídios são reempacotados em quilomícrons e vão para o lacteal (vaso linfático) da vilosidade.',
          ],
          takeaway: 'Açúcares e aminoácidos → sangue; lipídios → linfa (lacteal).',
          diagram: 'intestine',
        },
        {
          id: 'transport',
          title: 'Do intestino para o fígado',
          paragraphs: [
            'O sangue rico em nutrientes vai pela veia porta hepática direto para o fígado, que processa e armazena o que chega.',
          ],
          takeaway: 'Quase tudo que absorvemos passa primeiro pelo fígado.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'O que aumenta tanto a área de absorção do intestino delgado?',
        options: [
          {
            id: 'villi',
            label: 'Pregas circulares, vilosidades e microvilosidades',
            explanation: 'Correto: essa combinação de dobras aumenta a superfície de contato em até ~600 vezes, acelerando a absorção.',
          },
          {
            id: 'enzymes',
            label: 'Somente as enzimas digestivas',
            explanation: 'Não: as enzimas quebram os alimentos, mas não aumentam a área de contato para absorver.',
          },
          {
            id: 'length',
            label: 'Apenas o comprimento maior do intestino',
            explanation: 'Não: o comprimento ajuda, mas as vilosidades e microvilosidades são o que multiplicam a área de superfície.',
          },
          {
            id: 'mucus',
            label: 'A camada de muco',
            explanation: 'Não: o muco protege a parede, mas não aumenta a área de absorção.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How does the intestine absorb so many nutrients in so little space?',
      title: 'Intestinal absorption: villi and microvilli',
      description: 'See how the intestine’s folds increase the contact surface and allow absorption.',
      objective: 'Explain how villi and microvilli enlarge the absorptive area and state where nutrients go.',
      stages: [
        {
          id: 'folds',
          title: 'The intestine is full of folds',
          paragraphs: [
            'The small intestine has circular folds, villi (finger-like projections) and microvilli on the cells — the “brush border”.',
            'Together they multiply the surface area hundreds of times.',
          ],
          takeaway: 'Folds + villi + microvilli = a huge absorptive area.',
          diagram: 'intestine',
        },
        {
          id: 'absorption',
          title: 'Nutrients cross the cells',
          paragraphs: [
            'Amino acids and glucose are absorbed by active or facilitated transport into the villus capillaries.',
            'Lipids are repackaged into chylomicrons and enter the lacteal (lymphatic vessel) of the villus.',
          ],
          takeaway: 'Sugars and amino acids → blood; lipids → lymph (lacteal).',
          diagram: 'intestine',
        },
        {
          id: 'transport',
          title: 'From the intestine to the liver',
          paragraphs: [
            'Nutrient-rich blood travels through the hepatic portal vein straight to the liver, which processes and stores what arrives.',
          ],
          takeaway: 'Almost everything we absorb passes through the liver first.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What so greatly increases the small intestine’s absorptive area?',
        options: [
          {
            id: 'villi',
            label: 'Circular folds, villi and microvilli',
            explanation: 'Correct: this combination of folds increases the contact surface up to ~600-fold, speeding up absorption.',
          },
          {
            id: 'enzymes',
            label: 'Digestive enzymes only',
            explanation: 'No: enzymes break food down, but they do not increase the contact area for absorption.',
          },
          {
            id: 'length',
            label: 'Only the intestine’s greater length',
            explanation: 'No: length helps, but villi and microvilli are what multiply the surface area.',
          },
          {
            id: 'mucus',
            label: 'The mucus layer',
            explanation: 'No: mucus protects the wall, but it does not increase the absorptive area.',
          },
        ],
      },
    },
  },
});
