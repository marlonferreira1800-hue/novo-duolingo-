import { lessonSchema } from '../src/contracts/learning';

export const pathologyNeoplasiaLesson = lessonSchema.parse({
  id: 'pathology-neoplasia',
  revision: 1,
  questionId: 'pathology-neoplasia-malignant',
  correctOptionId: 'invasion-metastasis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-biology-2e-ch23',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/23-1',
      section: 'Chapter 23 · Cancer and Cell Division (uncontrolled growth)',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Por que um tumor benigno não mata, mas um maligno pode?',
      title: 'Neoplasia: benigno vs maligno',
      description: 'Compare tumor benigno e maligno e entenda invasão e metástase.',
      objective: 'Diferenciar neoplasia benigna de maligna e associar malignidade à invasão local e à metástase.',
      stages: [
        {
          id: 'definition',
          title: 'Neoplasia é crescimento descontrolado',
          paragraphs: [
            'Uma neoplasia (tumor) surge quando células perdem o controle da divisão. Pode ser benigna ou maligna (câncer).',
          ],
          takeaway: 'Neoplasia = proliferação celular sem controle normal.',
          diagram: 'neoplasia',
        },
        {
          id: 'benign',
          title: 'Benigno: lento e localizado',
          paragraphs: [
            'O tumor benigno cresce devagar, fica delimitado, não invade tecidos vizinhos e não faz metástase. Pode ser removido cirurgicamente.',
          ],
          takeaway: 'Benigno = lento, delimitado, sem metástase.',
          diagram: 'neoplasia',
        },
        {
          id: 'malignant',
          title: 'Maligno: invade e metastatiza',
          paragraphs: [
            'O câncer cresce rápido, invade estruturas vizinhas, entra em vasos sanguíneos/linfáticos e forma metástases em outros órgãos — é o que torna a doença grave.',
          ],
          takeaway: 'Maligno = invasão local + metástase à distância.',
          diagram: 'neoplasia',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'O que torna uma neoplasia maligna (câncer) potencialmente fatal, diferentemente de uma benigna?',
        options: [
          {
            id: 'invasion-metastasis',
            label: 'A capacidade de invadir tecidos vizinhos e formar metástases',
            explanation: 'Correto: a invasão local e a metástase para outros órgãos são as marcas do câncer e a principal causa de gravidade.',
          },
          {
            id: 'size-only',
            label: 'Apenas o tamanho grande do tumor',
            explanation: 'Não: tamanho não define malignidade; há tumores grandes benignos e pequenos malignos.',
          },
          {
            id: 'pain',
            label: 'A dor intensa que sempre causa',
            explanation: 'Não: nem todo câncer dói; a gravidade vem da invasão e da metástase, não da dor.',
          },
          {
            id: 'fast-growth-only',
            label: 'Somente crescer rápido',
            explanation: 'Não: crescimento rápido ajuda a suspeitar, mas o que define o câncer é a invasão e a metástase.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'Why can a benign tumor not kill, but a malignant one can?',
      title: 'Neoplasia: benign vs malignant',
      description: 'Compare benign and malignant tumors and understand invasion and metastasis.',
      objective: 'Tell benign from malignant neoplasia and link malignancy to local invasion and metastasis.',
      stages: [
        {
          id: 'definition',
          title: 'Neoplasia is uncontrolled growth',
          paragraphs: [
            'A neoplasm (tumor) arises when cells lose control of division. It can be benign or malignant (cancer).',
          ],
          takeaway: 'Neoplasm = cell proliferation without normal control.',
          diagram: 'neoplasia',
        },
        {
          id: 'benign',
          title: 'Benign: slow and localized',
          paragraphs: [
            'A benign tumor grows slowly, stays well delimited, does not invade neighboring tissues and does not metastasize. It can usually be removed surgically.',
          ],
          takeaway: 'Benign = slow, delimited, no metastasis.',
          diagram: 'neoplasia',
        },
        {
          id: 'malignant',
          title: 'Malignant: invades and metastasizes',
          paragraphs: [
            'Cancer grows fast, invades neighboring structures, enters blood or lymphatic vessels and forms metastases in other organs — that is what makes the disease serious.',
          ],
          takeaway: 'Malignant = local invasion + distant metastasis.',
          diagram: 'neoplasia',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What makes a malignant neoplasm (cancer) potentially fatal, unlike a benign one?',
        options: [
          {
            id: 'invasion-metastasis',
            label: 'The ability to invade neighboring tissues and form metastases',
            explanation: 'Correct: local invasion and metastasis to other organs are the hallmarks of cancer and the main cause of its severity.',
          },
          {
            id: 'size-only',
            label: 'Only being large',
            explanation: 'No: size does not define malignancy; there are large benign tumors and small malignant ones.',
          },
          {
            id: 'pain',
            label: 'The intense pain it always causes',
            explanation: 'No: not all cancers hurt; severity comes from invasion and metastasis, not pain.',
          },
          {
            id: 'fast-growth-only',
            label: 'Only growing fast',
            explanation: 'No: fast growth raises suspicion, but what defines cancer is invasion and metastasis.',
          },
        ],
      },
    },
  },
});
