import { lessonSchema } from '../src/contracts/learning';

export const respiratoryGasExchangeLesson = lessonSchema.parse({
  id: 'respiratory-gas-exchange',
  revision: 1,
  questionId: 'respiratory-gas-exchange-direction',
  correctOptionId: 'o2-in-co2-out',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch23',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-1',
      section: 'Chapter 22 · The Respiratory System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Cada respiração troca dois gases — em que direção cada um vai?',
      title: 'Hematose: troca gasosa no alvéolo',
      description: 'Veja como O₂ entra no sangue e CO₂ sai dele nos alvéolos pulmonares.',
      objective: 'Explicar a troca gasosa alveolar por diffusão e indicar a direção de passagem de O₂ e CO₂.',
      stages: [
        {
          id: 'alveolus',
          title: 'O alvéolo é a unidade de troca',
          paragraphs: [
            'Nos alvéolos, o ar inspirado fica a milímetros do sangue capilar. A parede alveolar e a capilar são finíssimas, formando a membrana respiratória.',
          ],
          takeaway: 'Alvéolo + capilar = membrana respiratória, fina o suficiente para a troca gasosa.',
          diagram: 'lung',
        },
        {
          id: 'gradients',
          title: 'Os gases seguem o gradiente de pressão',
          paragraphs: [
            'A troca ocorre por difusão simples, guiada pela diferença de pressão parcial: no alvéolo, pO₂ é alta e pCO₂ é baixa; no sangue venoso que chega, é o contrário.',
            'Assim o O₂ difunde do alvéolo para o sangue e o CO₂ do sangue para o alvéolo.',
          ],
          takeaway: 'O₂ vai para o sangue; CO₂ vai para o alvéolo — sempre do maior para o menor gradiente.',
          diagram: 'lung',
        },
        {
          id: 'result',
          title: 'Sangue arterial sai enriquecido',
          paragraphs: [
            'Depois da hematose, o sangue que deixa os pulmões tem pO₂ alta e pCO₂ baixa — sangue arterial. O CO₂ é eliminado na expiração.',
          ],
          takeaway: 'A hematose transforma sangue venoso em arterial nos pulmões.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Na hematose alveolar, em que direção cada gás se move?',
        options: [
          {
            id: 'o2-in-co2-out',
            label: 'O₂ do alvéolo para o sangue; CO₂ do sangue para o alvéolo',
            explanation: 'Correto: pela diferença de pressão parcial, o O₂ difunde para o sangue e o CO₂ para o ar alveolar, que é eliminado na expiração.',
          },
          {
            id: 'both-in',
            label: 'O₂ e CO₂ entram no sangue',
            explanation: 'Não: o CO₂ sai do sangue no alvéolo, pois a pCO₂ do sangue venoso é maior que a do ar alveolar.',
          },
          {
            id: 'both-out',
            label: 'O₂ e CO₂ saem do sangue',
            explanation: 'Não: o O₂ entra no sangue, pois a pO₂ alveolar é maior que a do sangue venoso.',
          },
          {
            id: 'no-exchange',
            label: 'Não há troca de gases nos alvéolos',
            explanation: 'Não: os alvéolos são exatamente o local da troca gasosa entre o ar e o sangue.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'Every breath swaps two gases — which way does each one go?',
      title: 'Gas exchange: diffusion at the alveolus',
      description: 'See how O₂ enters the blood and CO₂ leaves it in the pulmonary alveoli.',
      objective: 'Explain alveolar gas exchange by diffusion and state the direction of O₂ and CO₂ movement.',
      stages: [
        {
          id: 'alveolus',
          title: 'The alveolus is the exchange unit',
          paragraphs: [
            'In the alveoli, inspired air is millimeters away from capillary blood. The alveolar and capillary walls are extremely thin, forming the respiratory membrane.',
          ],
          takeaway: 'Alveolus + capillary = respiratory membrane, thin enough for gas exchange.',
          diagram: 'lung',
        },
        {
          id: 'gradients',
          title: 'Gases follow the pressure gradient',
          paragraphs: [
            'Exchange happens by simple diffusion, driven by partial pressure differences: in the alveolus, pO₂ is high and pCO₂ is low; in the incoming venous blood, it is the opposite.',
            'So O₂ diffuses from the alveolus into the blood and CO₂ from the blood into the alveolus.',
          ],
          takeaway: 'O₂ goes into the blood; CO₂ goes into the alveolus — always down the gradient.',
          diagram: 'lung',
        },
        {
          id: 'result',
          title: 'Enriched arterial blood leaves',
          paragraphs: [
            'After gas exchange, the blood leaving the lungs has high pO₂ and low pCO₂ — arterial blood. CO₂ is removed during expiration.',
          ],
          takeaway: 'Gas exchange turns venous blood into arterial blood in the lungs.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'During alveolar gas exchange, which way does each gas move?',
        options: [
          {
            id: 'o2-in-co2-out',
            label: 'O₂ from alveolus into blood; CO₂ from blood into alveolus',
            explanation: 'Correct: driven by partial pressure differences, O₂ diffuses into the blood and CO₂ into the alveolar air, which is then exhaled.',
          },
          {
            id: 'both-in',
            label: 'Both O₂ and CO₂ enter the blood',
            explanation: 'No: CO₂ leaves the blood in the alveolus because venous blood pCO₂ is higher than alveolar pCO₂.',
          },
          {
            id: 'both-out',
            label: 'Both O₂ and CO₂ leave the blood',
            explanation: 'No: O₂ enters the blood because alveolar pO₂ is higher than venous blood pO₂.',
          },
          {
            id: 'no-exchange',
            label: 'No gas exchange happens in the alveoli',
            explanation: 'No: the alveoli are exactly where gas exchange between air and blood occurs.',
          },
        ],
      },
    },
  },
});
