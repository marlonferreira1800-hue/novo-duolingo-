import { lessonSchema } from '../src/contracts/learning';

export const embryologyGermLayersLesson = lessonSchema.parse({
  id: 'embryology-germ-layers',
  revision: 1,
  questionId: 'embryology-germ-layer-nervous',
  correctOptionId: 'ectoderm',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch28',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-1',
      section: 'Chapter 28 · Development and Inheritance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Embriologia',
      hook: 'De três camadas germinativas nasce todo o corpo — qual delas forma o sistema nervoso?',
      title: 'Gastrulação: as três camadas germinativas',
      description: 'Entenda como a gastrulação forma ectoderme, mesoderme e endoderme e o que cada uma origina.',
      objective: 'Identificar as três camadas germinativas e associar a ectoderme à formação do sistema nervoso e da pele.',
      stages: [
        {
          id: 'gastrulation',
          title: 'A gastrulação dobra o embrião',
          paragraphs: [
            'Na terceira semana, o embrião em disco bilaminar passa pela gastrulação: células migram pela linha primitiva e formam uma terceira camada.',
            'Surgem então três camadas germinativas.',
          ],
          takeaway: 'A gastrulação transforma duas camadas em três.',
          diagram: 'embryo',
        },
        {
          id: 'layers',
          title: 'Ectoderme, mesoderme e endoderme',
          paragraphs: [
            'A ectoderme (externa) origina pele e sistema nervoso. O mesoderme (meio) origina músculos, ossos e sangue. O endoderme (interno) origina intestino, pulmões e fígado.',
          ],
          takeaway: 'Ecto = fora (pele, nervos); meso = meio (músculo, osso); endo = dentro (vísceras).',
          diagram: 'embryo',
        },
        {
          id: 'organogenesis',
          title: 'Cada camada vira órgãos',
          paragraphs: [
            'Depois, a organogênese usa essas camadas para formar os órgãos. Erros nessa fase originam malformações congênitas.',
          ],
          takeaway: 'As camadas germinativas são o “mapa” do corpo do embrião.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual camada germinativa dá origem ao sistema nervoso central e à epiderme?',
        options: [
          {
            id: 'ectoderm',
            label: 'Ectoderme',
            explanation: 'Correto: a ectoderme origina a epiderme e todo o sistema nervoso (a partir da placa neural).',
          },
          {
            id: 'mesoderm',
            label: 'Mesoderme',
            explanation: 'Não: o mesoderme origina músculos, ossos, tecido conjuntivo e sangue — não o sistema nervoso.',
          },
          {
            id: 'endoderm',
            label: 'Endoderme',
            explanation: 'Não: o endoderme reveste o tubo digestivo e dá origem a fígado, pâncreas e pulmões.',
          },
          {
            id: 'trophoblast',
            label: 'Trooblast',
            explanation: 'Não: o trofoblasto forma a placenta, não órgãos do embrião.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'From three germ layers the whole body arises — which one forms the nervous system?',
      title: 'Gastrulation: the three germ layers',
      description: 'Understand how gastrulation forms ectoderm, mesoderm and endoderm and what each one becomes.',
      objective: 'Identify the three germ layers and link the ectoderm to the nervous system and skin.',
      stages: [
        {
          id: 'gastrulation',
          title: 'Gastrulation folds the embryo',
          paragraphs: [
            'In the third week, the bilaminar embryonic disc undergoes gastrulation: cells migrate through the primitive streak and create a third layer.',
            'Three germ layers now exist.',
          ],
          takeaway: 'Gastrulation turns two layers into three.',
          diagram: 'embryo',
        },
        {
          id: 'layers',
          title: 'Ectoderm, mesoderm and endoderm',
          paragraphs: [
            'The ectoderm (outer) gives rise to skin and the nervous system. The mesoderm (middle) gives rise to muscle, bone and blood. The endoderm (inner) gives rise to gut, lungs and liver.',
          ],
          takeaway: 'Ecto = outside (skin, nerves); meso = middle (muscle, bone); endo = inside (organs).',
          diagram: 'embryo',
        },
        {
          id: 'organogenesis',
          title: 'Each layer becomes organs',
          paragraphs: [
            'Then organogenesis uses these layers to build the organs. Errors during this phase cause congenital malformations.',
          ],
          takeaway: 'The germ layers are the embryo’s body plan.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which germ layer gives rise to the central nervous system and the epidermis?',
        options: [
          {
            id: 'ectoderm',
            label: 'Ectoderm',
            explanation: 'Correct: the ectoderm forms the epidermis and the entire nervous system (from the neural plate).',
          },
          {
            id: 'mesoderm',
            label: 'Mesoderm',
            explanation: 'No: the mesoderm forms muscle, bone, connective tissue and blood — not the nervous system.',
          },
          {
            id: 'endoderm',
            label: 'Endoderm',
            explanation: 'No: the endoderm lines the digestive tube and gives rise to liver, pancreas and lungs.',
          },
          {
            id: 'trophoblast',
            label: 'Trophoblast',
            explanation: 'No: the trophoblast forms the placenta, not the embryo’s organs.',
          },
        ],
      },
    },
  },
});
