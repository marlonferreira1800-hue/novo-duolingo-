import { lessonSchema } from '../src/contracts/learning';

export const anatomyThoraxLesson = lessonSchema.parse({
  id: 'anatomy-thorax',
  revision: 1,
  questionId: 'anatomy-thorax-contents',
  correctOptionId: 'lungs-heart-vessels',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'anatomy',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch22',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-1',
      section: 'Chapter 22 · Anatomy of the Respiratory System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Anatomia',
      hook: 'O que o tórax esconde atrás das costelas?',
      title: 'Tórax: pulmões, coração e grandes vasos',
      description: 'Veja o que a caixa torácica abriga e por que o mediastino é tão importante.',
      objective: 'Identificar pulmões, coração e grandes vasos como o conteúdo do tórax e localizar o coração no mediastino.',
      stages: [
        {
          id: 'cage',
          title: 'A caixa torácica protege',
          paragraphs: [
            'As costelas, o esterno e as vértebras torácicas formam uma gaiola que protege os órgãos vitais e participa da respiração ao se mover.',
          ],
          takeaway: 'Costelas protegem pulmões e coração.',
          diagram: 'chest',
        },
        {
          id: 'contents',
          title: 'Dentro dele: pulmões e coração',
          paragraphs: [
            'Cada pulmão ocupa uma cavidade pleural. Entre eles fica o mediastino, que abriga o coração, a aorta, as veias cavas, o esôfago e a traqueia.',
          ],
          takeaway: 'Pulmões nas laterais; coração e grandes vasos no mediastino.',
          diagram: 'chest',
        },
        {
          id: 'position',
          title: 'O coração fica mais à esquerda',
          paragraphs: [
            'Cerca de dois terços do coração ficam à esquerda da linha média. A ponta (ictus) pode ser sentida no 5º espaço intercostal esquerdo.',
          ],
          takeaway: 'Coração 2/3 à esquerda; ponta no 5º espaço intercostal esquerdo.',
          diagram: 'chest',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Quais são os principais órgãos contidos na cavidade torácica?',
        options: [
          {
            id: 'lungs-heart-vessels',
            label: 'Pulmões, coração e grandes vasos',
            explanation: 'Correto: o tórax abriga os pulmões (nas pleuras) e, no mediastino, o coração com a aorta e as veias cavas.',
          },
          {
            id: 'only-lungs',
            label: 'Apenas os pulmões',
            explanation: 'Não: além dos pulmões, o tórax abriga o coração e os grandes vasos no mediastino.',
          },
          {
            id: 'liver-spleen',
            label: 'Fígado e baço',
            explanation: 'Não: fígado e baço ficam no abdome, abaixo do diafragma.',
          },
          {
            id: 'kidneys',
            label: 'Os rins',
            explanation: 'Não: os rins ficam no retroperitônio, atrás da cavidade abdominal.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Anatomy',
      hook: 'What does the thorax hide behind the ribs?',
      title: 'The thorax: lungs, heart and great vessels',
      description: 'See what the rib cage houses and why the mediastinum matters.',
      objective: 'Identify the lungs, heart and great vessels as the contents of the thorax and locate the heart in the mediastinum.',
      stages: [
        {
          id: 'cage',
          title: 'The rib cage protects',
          paragraphs: [
            'The ribs, sternum and thoracic vertebrae form a cage that protects the vital organs and moves during breathing.',
          ],
          takeaway: 'Ribs protect the lungs and heart.',
          diagram: 'chest',
        },
        {
          id: 'contents',
          title: 'Inside: lungs and heart',
          paragraphs: [
            'Each lung fills a pleural cavity. Between them lies the mediastinum, housing the heart, aorta, vena cavae, esophagus and trachea.',
          ],
          takeaway: 'Lungs on the sides; heart and great vessels in the mediastinum.',
          diagram: 'chest',
        },
        {
          id: 'position',
          title: 'The heart sits more to the left',
          paragraphs: [
            'About two thirds of the heart lie left of the midline. The apex (ictus) can be felt at the 5th left intercostal space.',
          ],
          takeaway: 'Heart 2/3 to the left; apex at the 5th left intercostal space.',
          diagram: 'chest',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What are the main organs contained in the thoracic cavity?',
        options: [
          {
            id: 'lungs-heart-vessels',
            label: 'Lungs, heart and great vessels',
            explanation: 'Correct: the thorax houses the lungs (in the pleurae) and, in the mediastinum, the heart with the aorta and vena cavae.',
          },
          {
            id: 'only-lungs',
            label: 'Only the lungs',
            explanation: 'No: besides the lungs, the thorax houses the heart and great vessels in the mediastinum.',
          },
          {
            id: 'liver-spleen',
            label: 'Liver and spleen',
            explanation: 'No: the liver and spleen lie in the abdomen, below the diaphragm.',
          },
          {
            id: 'kidneys',
            label: 'The kidneys',
            explanation: 'No: the kidneys lie in the retroperitoneum, behind the abdominal cavity.',
          },
        ],
      },
    },
  },
});
