import { lessonSchema } from '../src/contracts/learning';

export const neuroanatomyCnsLesson = lessonSchema.parse({
  id: 'neuroanatomy-cns',
  revision: 1,
  questionId: 'neuroanatomy-cerebellum',
  correctOptionId: 'cerebellum-balance',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'neuroanatomy',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch13',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-1',
      section: 'Chapter 13 · Anatomy of the Nervous System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Neuroanatomia',
      hook: 'Quem comanda o equilíbrio quando você anda de bicicleta?',
      title: 'SNC: cérebro, cerebelo e tronco encefálico',
      description: 'Conheça as três grandes divisões do sistema nervoso central e suas funções.',
      objective: 'Diferenciar cérebro, cerebelo e tronco encefálico e associar o cerebelo ao equilíbrio e à coordenação motora.',
      stages: [
        {
          id: 'cerebrum',
          title: 'O cérebro: funções superiores',
          paragraphs: [
            'O cérebro, com seus giros e sulcos, processa sensibilidade, movimento voluntário, linguagem, memória e pensamento.',
          ],
          takeaway: 'Cérebro = funções superiores (pensar, sentir, comandar).',
          diagram: 'brain',
        },
        {
          id: 'cerebellum',
          title: 'O cerebelo: equilíbrio e coordenação',
          paragraphs: [
            'O cerebelo, na parte de trás do crânio, compara o movimento pretendido com o realizado e ajusta a precisão — é ele que mantém o equilíbrio.',
          ],
          takeaway: 'Cerebelo = equilíbrio e coordenação fina.',
          diagram: 'brain',
        },
        {
          id: 'brainstem',
          title: 'O tronco encefálico: funções vitais',
          paragraphs: [
            'O tronco encefálico (mesencéfalo, ponte e bulbo) controla respiração, frequência cardíaca e pressão arterial — funções que não paramos para pensar.',
          ],
          takeaway: 'Tronco encefálico = respiração e batimentos.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual estrutura do sistema nervoso central é responsável principalmente pelo equilíbrio e pela coordenação motora fina?',
        options: [
          {
            id: 'cerebellum-balance',
            label: 'O cerebelo',
            explanation: 'Correto: o cerebelo integra sinais sensitivos e motores para manter o equilíbrio e a coordenação precisa dos movimentos.',
          },
          {
            id: 'cerebrum',
            label: 'O cérebro',
            explanation: 'Não: o cérebro processa funções superiores (pensamento, linguagem, movimento voluntário), não o equilíbrio fino.',
          },
          {
            id: 'brainstem',
            label: 'O tronco encefálico',
            explanation: 'Não: o tronco controla funções vitais automáticas (respiração, batimentos), não a coordenação motora.',
          },
          {
            id: 'spinal-cord',
            label: 'A medula espinal',
            explanation: 'Não: a medula transmite sinais e faz reflexos, mas o centro do equilíbrio é o cerebelo.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Neuroanatomy',
      hook: 'Who keeps your balance when you ride a bike?',
      title: 'CNS: cerebrum, cerebellum and brainstem',
      description: 'Learn the three main divisions of the central nervous system and their roles.',
      objective: 'Tell cerebrum, cerebellum and brainstem apart and link the cerebellum to balance and motor coordination.',
      stages: [
        {
          id: 'cerebrum',
          title: 'The cerebrum: higher functions',
          paragraphs: [
            'The cerebrum, with its gyri and sulci, processes sensation, voluntary movement, language, memory and thought.',
          ],
          takeaway: 'Cerebrum = higher functions (thinking, feeling, commanding).',
          diagram: 'brain',
        },
        {
          id: 'cerebellum',
          title: 'The cerebellum: balance and coordination',
          paragraphs: [
            'The cerebellum, at the back of the skull, compares intended movement with actual movement and adjusts precision — it keeps you balanced.',
          ],
          takeaway: 'Cerebellum = balance and fine coordination.',
          diagram: 'brain',
        },
        {
          id: 'brainstem',
          title: 'The brainstem: vital functions',
          paragraphs: [
            'The brainstem (midbrain, pons and medulla) controls breathing, heart rate and blood pressure — functions we do not have to think about.',
          ],
          takeaway: 'Brainstem = breathing and heartbeat.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which structure of the central nervous system is mainly responsible for balance and fine motor coordination?',
        options: [
          {
            id: 'cerebellum-balance',
            label: 'The cerebellum',
            explanation: 'Correct: the cerebellum integrates sensory and motor signals to keep balance and coordinate precise movements.',
          },
          {
            id: 'cerebrum',
            label: 'The cerebrum',
            explanation: 'No: the cerebrum handles higher functions (thought, language, voluntary movement), not fine balance.',
          },
          {
            id: 'brainstem',
            label: 'The brainstem',
            explanation: 'No: the brainstem controls automatic vital functions (breathing, heartbeat), not motor coordination.',
          },
          {
            id: 'spinal-cord',
            label: 'The spinal cord',
            explanation: 'No: the spinal cord transmits signals and mediates reflexes, but the balance center is the cerebellum.',
          },
        ],
      },
    },
  },
});
