import { lessonSchema } from '../src/contracts/learning';

export const histologyEpitheliumLesson = lessonSchema.parse({
  id: 'histology-epithelium',
  revision: 1,
  questionId: 'histology-epithelium-function',
  correctOptionId: 'covering',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'histology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch4',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-1',
      section: 'Chapter 4 · Tissues',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Histologia',
      hook: 'Tudo no corpo começa por um tecido — qual deles reveste e protege?',
      title: 'Tecido epitelial: o revestimento do corpo',
      description: 'Conheça o tecido que recobre superfícies e cavidades e entenda sua função de proteção e troca.',
      objective: 'Identificar o tecido epitelial por suas características e associá-lo à função de revestimento e proteção.',
      stages: [
        {
          id: 'structure',
          title: 'Células grudadas, quase sem matriz',
          paragraphs: [
            'O tecido epitelial é formado por células muito próximas entre si, com pouca matriz extracelular. Essa organização em lâminas compactas cria uma barreira contínua.',
            'Ele reveste a pele, as cavidades internas e os órgãos ocos, além de formar as glândulas.',
          ],
          takeaway: 'Epitélio = lâmina de células justapostas que funciona como barreira.',
          diagram: 'tissue',
        },
        {
          id: 'polarity',
          title: 'Uma face para fora, outra para dentro',
          paragraphs: [
            'As células epiteliais têm polaridade: a face apical fica virada para a luz ou para o exterior, e a face basal apoia-se na lâmina basal, sobre o tecido conjuntivo.',
            'Essa organização permite que o epitélio controle o que passa entre os dois lados.',
          ],
          takeaway: 'Face apical para fora, face basal apoiada no conjuntivo.',
          diagram: 'tissue',
        },
        {
          id: 'functions',
          title: 'Proteção, absorção e secreção',
          paragraphs: [
            'Dependendo do local, o epitélio protege (pele), absorve (intestino) ou secreta (glândulas). Ele também pode ter cílios para mover muco, como nas vias respiratórias.',
            'A classificação considera o número de camadas (simples ou estratificado) e o formato das células (pavimentoso, cúbico, colunar).',
          ],
          takeaway: 'A função do epitélio depende de suas camadas e do formato das células.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é a principal função do tecido epitelial?',
        options: [
          {
            id: 'covering',
            label: 'Revestir e proteger superfícies e cavidades',
            explanation: 'Correto: o epitélio forma lâminas contínuas que revestem a pele e os órgãos, protegendo e controlando trocas.',
          },
          {
            id: 'contraction',
            label: 'Produzir contração e movimento',
            explanation: 'Não: contração é função do tecido muscular, não do epitelial.',
          },
          {
            id: 'support',
            label: 'Sustentar e unir outros tecidos',
            explanation: 'Não: sustentação é função do tecido conjuntivo, que fica sob o epitélio.',
          },
          {
            id: 'conduction',
            label: 'Conduzir impulsos elétricos',
            explanation: 'Não: a condução de impulsos é função do tecido nervoso.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Histology',
      hook: 'Everything in the body starts with a tissue — which one covers and protects?',
      title: 'Epithelial tissue: the body’s lining',
      description: 'Meet the tissue that covers surfaces and cavities and understand its protective and exchange role.',
      objective: 'Identify epithelial tissue by its features and link it to the function of lining and protection.',
      stages: [
        {
          id: 'structure',
          title: 'Tightly packed cells, almost no matrix',
          paragraphs: [
            'Epithelial tissue is made of cells packed very close together with little extracellular matrix. This sheet-like arrangement creates a continuous barrier.',
            'It lines the skin, internal cavities and hollow organs, and it also forms glands.',
          ],
          takeaway: 'Epithelium = a sheet of tightly packed cells that works as a barrier.',
          diagram: 'tissue',
        },
        {
          id: 'polarity',
          title: 'One face out, one face in',
          paragraphs: [
            'Epithelial cells are polarized: the apical surface faces the lumen or the outside, and the basal surface rests on the basement membrane over connective tissue.',
            'This organization lets the epithelium control what passes between the two sides.',
          ],
          takeaway: 'Apical surface faces out; basal surface rests on connective tissue.',
          diagram: 'tissue',
        },
        {
          id: 'functions',
          title: 'Protection, absorption and secretion',
          paragraphs: [
            'Depending on location, epithelium protects (skin), absorbs (intestine) or secretes (glands). It can also bear cilia to move mucus, as in the airways.',
            'Classification considers the number of layers (simple or stratified) and cell shape (squamous, cuboidal, columnar).',
          ],
          takeaway: 'The epithelium’s role depends on its layers and cell shape.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the main function of epithelial tissue?',
        options: [
          {
            id: 'covering',
            label: 'Lining and protecting surfaces and cavities',
            explanation: 'Correct: epithelium forms continuous sheets that line the skin and organs, protecting and controlling exchange.',
          },
          {
            id: 'contraction',
            label: 'Producing contraction and movement',
            explanation: 'No: contraction is the job of muscle tissue, not epithelium.',
          },
          {
            id: 'support',
            label: 'Supporting and binding other tissues',
            explanation: 'No: support is the job of connective tissue, which lies beneath the epithelium.',
          },
          {
            id: 'conduction',
            label: 'Conducting electrical impulses',
            explanation: 'No: impulse conduction is the job of nervous tissue.',
          },
        ],
      },
    },
  },
});
