import { lessonSchema } from '../src/contracts/learning';

export const anatomyBoneLesson = lessonSchema.parse({
  id: 'anatomy-bone',
  revision: 1,
  questionId: 'anatomy-bone-parts',
  correctOptionId: 'diaphysis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch6',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1',
      section: 'Chapter 6 · Bone Tissue and the Skeletal System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Anatomia',
      hook: 'O que dá forma e sustentação ao seu corpo?',
      title: 'Osso longo: epífise, diáfise e medula',
      description: 'Conheça as partes de um osso longo e onde acontece a formação de células do sangue.',
      objective: 'Identificar epífise, diáfise e medula óssea em um osso longo e associar a medula à hematopoiese.',
      stages: [
        {
          id: 'shape',
          title: 'Um osso longo tem duas pontas e um corpo',
          paragraphs: [
            'O osso longo, como o fêmur, tem duas epífises (extremidades) e uma diáfise (corpo cilíndrico) entre elas.',
            'As epífises são cobertas por cartilagem articular nas articulações.',
          ],
          takeaway: 'Epífises nas pontas, diáfise no meio.',
          diagram: 'bone',
        },
        {
          id: 'inside',
          title: 'Por dentro: medula óssea',
          paragraphs: [
            'A diáfise é oca: sua cavidade medular abriga a medula óssea. A medula vermelha produz células do sangue (hematopoiese); a amarela é rica em gordura.',
          ],
          takeaway: 'A cavidade da diáfise contém a medula óssea, que pode produzir sangue.',
          diagram: 'bone',
        },
        {
          id: 'covering',
          title: 'O periósteo reveste o osso',
          paragraphs: [
            'O periósteo é uma membrana de tecido conjuntivo que reveste o osso e contém vasos e nervos. O endósteo reveste a cavidade medular.',
            'Essas membranas nutrem o osso e participam do reparo de fraturas.',
          ],
          takeaway: 'Periósteo por fora, endósteo por dentro: nutrem e reparam o osso.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em um osso longo, onde fica a medula óssea vermelha, responsável pela produção de células do sangue?',
        options: [
          {
            id: 'diaphysis',
            label: 'Na cavidade medular da diáfise',
            explanation: 'Correto: a diáfise é o corpo do osso longo e sua cavidade abriga a medula óssea, onde ocorre a hematopoiese na medula vermelha.',
          },
          {
            id: 'epiphysis-only',
            label: 'Somente na cartilagem das epífises',
            explanation: 'Não: a cartilagem articular reveste as epífises nas articulações, mas a medula fica na cavidade da diáfise (e também em ossos esponjosos das epífises).',
          },
          {
            id: 'periosteum',
            label: 'No periósteo',
            explanation: 'Não: o periósteo é a membrana externa de tecido conjuntivo; ele nutre o osso, mas não produz células do sangue.',
          },
          {
            id: 'tendon',
            label: 'No tendão',
            explanation: 'Não: o tendão liga músculo a osso e não tem função de produção de células sanguíneas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'What gives your body shape and support?',
      title: 'The long bone: epiphysis, diaphysis and marrow',
      description: 'Learn the parts of a long bone and where blood cells are formed.',
      objective: 'Identify the epiphysis, diaphysis and bone marrow in a long bone and link marrow to hematopoiesis.',
      stages: [
        {
          id: 'shape',
          title: 'A long bone has two ends and a shaft',
          paragraphs: [
            'A long bone, such as the femur, has two epiphyses (ends) and a diaphysis (cylindrical shaft) between them.',
            'The epiphyses are covered by articular cartilage at the joints.',
          ],
          takeaway: 'Epiphyses at the ends, diaphysis in the middle.',
          diagram: 'bone',
        },
        {
          id: 'inside',
          title: 'Inside: bone marrow',
          paragraphs: [
            'The diaphysis is hollow: its medullary cavity holds the bone marrow. Red marrow produces blood cells (hematopoiesis); yellow marrow is rich in fat.',
          ],
          takeaway: 'The shaft’s cavity holds bone marrow, which can produce blood.',
          diagram: 'bone',
        },
        {
          id: 'covering',
          title: 'The periosteum covers the bone',
          paragraphs: [
            'The periosteum is a connective-tissue membrane that covers the bone and contains vessels and nerves. The endosteum lines the medullary cavity.',
            'These membranes nourish the bone and take part in fracture repair.',
          ],
          takeaway: 'Periosteum outside, endosteum inside: they nourish and repair bone.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In a long bone, where is the red bone marrow that produces blood cells?',
        options: [
          {
            id: 'diaphysis',
            label: 'In the medullary cavity of the diaphysis',
            explanation: 'Correct: the diaphysis is the shaft of the long bone and its cavity holds the bone marrow, where red marrow performs hematopoiesis.',
          },
          {
            id: 'epiphysis-only',
            label: 'Only in the cartilage of the epiphyses',
            explanation: 'No: articular cartilage covers the epiphyses at the joints, but the marrow lies in the shaft’s cavity (and in the spongy bone of the epiphyses).',
          },
          {
            id: 'periosteum',
            label: 'In the periosteum',
            explanation: 'No: the periosteum is the outer connective-tissue membrane; it nourishes bone but does not produce blood cells.',
          },
          {
            id: 'tendon',
            label: 'In the tendon',
            explanation: 'No: the tendon attaches muscle to bone and has no blood-cell-producing role.',
          },
        ],
      },
    },
  },
});
