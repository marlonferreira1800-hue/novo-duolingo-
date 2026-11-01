import { lessonSchema } from '../src/contracts/learning';

export const muscleContractionLesson = lessonSchema.parse({
  id: 'muscle-contraction',
  revision: 1,
  questionId: 'muscle-contraction-order',
  correctOptionId: 'contraction-order',
  correctOrderIds: ['stimulus', 'calcium', 'crossbridge', 'shortening'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'muscle-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch10',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-1',
      section: 'Chapter 10 · Muscle Tissue',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia muscular',
      hook: 'Um comando elétrico vira força mecânica — em que ordem?',
      title: 'Contração do músculo esquelético: o ciclo das pontes cruzadas',
      description: 'Acompanhe do estímulo nervoso até o encurtamento do sarcômero, passando pelo Ca²⁺.',
      objective: 'Ordenar as etapas da contração muscular esquelética e associar o Ca²⁺ ao deslocamento da tropomiosina.',
      stages: [
        {
          id: 'stimulus',
          title: 'O impulso nervoso chega à fibra',
          paragraphs: [
            'O potencial de ação do neurônio motor libera acetilcolina na placa motora; a fibra muscular despolariza e o impulso percorre os túbulos T.',
          ],
          takeaway: 'Estímulo nervoso → despolarização da fibra muscular.',
          diagram: 'sarcomere',
        },
        {
          id: 'calcium',
          title: 'O Ca²⁺ sai do retículo sarcoplasmático',
          paragraphs: [
            'A despolarização abre os canais de Ca²⁺ do retículo sarcoplasmático. O Ca²⁺ se liga à troponina, que desloca a tropomiosina e expõe os pontos de ligação da actina.',
          ],
          takeaway: 'Ca²⁺ + troponina → tropomiosina sai do caminho.',
          diagram: 'sarcomere',
        },
        {
          id: 'crossbridge',
          title: 'Miosina se liga à actina e puxa',
          paragraphs: [
            'A cabeça da miosina, carregada de energia (ATP), liga-se à actina formando a ponte cruzada e puxa o filamento fino. O sarcômero encurta e o músculo contrai.',
            'Novo ATP solta a miosina para o próximo ciclo.',
          ],
          takeaway: 'Ponte cruzada miosina-actina → encurtamento do sarcômero.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Coloque na ordem correta as etapas da contração muscular esquelética:',
        items: [
          {
            id: 'stimulus',
            label: 'Impulso nervoso chega à fibra muscular',
            explanation: 'Início: acetilcolina na placa motora despolariza a fibra.',
          },
          {
            id: 'calcium',
            label: 'Ca²⁺ é liberado e liga-se à troponina',
            explanation: 'O Ca²⁺ do retículo sarcoplasmático desloca a tropomiosina da actina.',
          },
          {
            id: 'crossbridge',
            label: 'Miosina forma ponte cruzada com a actina',
            explanation: 'A cabeça da miosina se liga aos pontos expostos da actina.',
          },
          {
            id: 'shortening',
            label: 'Sarcômero encurta e o músculo contrai',
            explanation: 'O filamento de miosina puxa o de actina e a fibra encurta.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Muscle physiology',
      hook: 'An electrical command becomes mechanical force — in what order?',
      title: 'Skeletal muscle contraction: the cross-bridge cycle',
      description: 'Follow the path from the nerve stimulus to sarcomere shortening, passing through Ca²⁺.',
      objective: 'Order the steps of skeletal muscle contraction and link Ca²⁺ to tropomyosin displacement.',
      stages: [
        {
          id: 'stimulus',
          title: 'The nerve impulse reaches the fiber',
          paragraphs: [
            'The motor neuron’s action potential releases acetylcholine at the neuromuscular junction; the muscle fiber depolarizes and the impulse travels down the T tubules.',
          ],
          takeaway: 'Nerve stimulus → muscle fiber depolarization.',
          diagram: 'sarcomere',
        },
        {
          id: 'calcium',
          title: 'Ca²⁺ leaves the sarcoplasmic reticulum',
          paragraphs: [
            'Depolarization opens Ca²⁺ channels in the sarcoplasmic reticulum. Ca²⁺ binds troponin, which moves tropomyosin away and exposes actin’s binding sites.',
          ],
          takeaway: 'Ca²⁺ + troponin → tropomyosin moves out of the way.',
          diagram: 'sarcomere',
        },
        {
          id: 'crossbridge',
          title: 'Myosin binds actin and pulls',
          paragraphs: [
            'The energy-loaded myosin head binds actin, forming a cross-bridge, and pulls the thin filament. The sarcomere shortens and the muscle contracts.',
            'A new ATP releases myosin for the next cycle.',
          ],
          takeaway: 'Myosin–actin cross-bridge → sarcomere shortening.',
          diagram: 'sarcomere',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Put the steps of skeletal muscle contraction in the correct order:',
        items: [
          {
            id: 'stimulus',
            label: 'Nerve impulse reaches the muscle fiber',
            explanation: 'Start: acetylcholine at the neuromuscular junction depolarizes the fiber.',
          },
          {
            id: 'calcium',
            label: 'Ca²⁺ is released and binds troponin',
            explanation: 'Ca²⁺ from the sarcoplasmic reticulum moves tropomyosin off actin.',
          },
          {
            id: 'crossbridge',
            label: 'Myosin forms a cross-bridge with actin',
            explanation: 'The myosin head binds the exposed sites on actin.',
          },
          {
            id: 'shortening',
            label: 'Sarcomere shortens and the muscle contracts',
            explanation: 'The myosin filament pulls the actin filament and the fiber shortens.',
          },
        ],
      },
    },
  },
});
