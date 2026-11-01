import { lessonSchema } from '../src/contracts/learning';

export const endocrinePancreasLesson = lessonSchema.parse({
  id: 'endocrine-pancreas',
  revision: 1,
  questionId: 'endocrine-pancreas-insulin',
  correctOptionId: 'insulin-lowers',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch17',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-1',
      section: 'Chapter 17 · The Endocrine System (pancreas)',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Depois de uma refeição açucarada, quem manda a glicose entrar nas células?',
      title: 'Pâncreas endócrino: insulina e glucagon',
      description: 'Entenda como as ilhotas pancreáticas regulam a glicemia com insulina e glucagon.',
      objective: 'Diferenciar a ação da insulina (baixa glicemia) e do glucagon (sobe glicemia) e localizar esses hormônios nas ilhotas pancreáticas.',
      stages: [
        {
          id: 'islets',
          title: 'As ilhotas pancreáticas produzem hormônios',
          paragraphs: [
            'O pâncreas tem parte exócrina (enzimas digestivas) e endócrina: as ilhotas de Langerhans, com células beta e alfa.',
          ],
          takeaway: 'Ilhotas de Langerhans = fábrica de insulina e glucagon.',
          diagram: 'endocrine',
        },
        {
          id: 'insulin',
          title: 'Insulina baixa a glicose',
          paragraphs: [
            'As células beta liberam insulina depois da refeição: ela faz a glicose entrar nas células musculares e adiposas e o fígado a armazenar como glicogênio.',
          ],
          takeaway: 'Insulina (células beta) = tira glicose do sangue.',
          diagram: 'endocrine',
        },
        {
          id: 'glucagon',
          title: 'Glucagon sobe a glicose',
          paragraphs: [
            'Em jejum, as células alfa liberam glucagon, que faz o fígado quebrar glicogênio e liberar glicose no sangue. Insulina e glucagon são antagônicos.',
            'A falta de insulina causa diabetes mellitus.',
          ],
          takeaway: 'Glucagon (células alfa) = devolve glicose ao sangue; falta de insulina = diabetes.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual hormônio, produzido pelas células beta do pâncreas, baixa a glicemia após uma refeição?',
        options: [
          {
            id: 'insulin-lowers',
            label: 'A insulina',
            explanation: 'Correto: a insulina, liberada pelas células beta após a refeição, estimula a entrada de glicose nas células e a formação de glicogênio no fígado.',
          },
          {
            id: 'glucagon',
            label: 'O glucagon',
            explanation: 'Não: o glucagon, das células alfa, faz o efeito contrário — sobe a glicemia em jejum.',
          },
          {
            id: 'tiroxina',
            label: 'A tiroxina',
            explanation: 'Não: a tiroxina é da tireoide e regula o metabolismo basal, não a glicemia pós-refeição.',
          },
          {
            id: 'adrenalina',
            label: 'A adrenalina',
            explanation: 'Não: a adrenalina (medula adrenal) também sobe a glicemia em situações de estrés, não a baixa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'After a sugary meal, who tells glucose to enter the cells?',
      title: 'Endocrine pancreas: insulin and glucagon',
      description: 'Understand how the pancreatic islets regulate blood glucose with insulin and glucagon.',
      objective: 'Tell insulin (lowers glucose) apart from glucagon (raises glucose) and locate these hormones in the pancreatic islets.',
      stages: [
        {
          id: 'islets',
          title: 'The pancreatic islets produce hormones',
          paragraphs: [
            'The pancreas has an exocrine part (digestive enzymes) and an endocrine part: the islets of Langerhans, with beta and alpha cells.',
          ],
          takeaway: 'Islets of Langerhans = the factory of insulin and glucagon.',
          diagram: 'endocrine',
        },
        {
          id: 'insulin',
          title: 'Insulin lowers glucose',
          paragraphs: [
            'Beta cells release insulin after a meal: it makes glucose enter muscle and fat cells and the liver store it as glycogen.',
          ],
          takeaway: 'Insulin (beta cells) = takes glucose out of the blood.',
          diagram: 'endocrine',
        },
        {
          id: 'glucagon',
          title: 'Glucagon raises glucose',
          paragraphs: [
            'During fasting, alpha cells release glucagon, which makes the liver break down glycogen and release glucose into the blood. Insulin and glucagon are antagonists.',
            'Lack of insulin causes diabetes mellitus.',
          ],
          takeaway: 'Glucagon (alpha cells) = puts glucose back into the blood; lack of insulin = diabetes.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which hormone, produced by pancreatic beta cells, lowers blood glucose after a meal?',
        options: [
          {
            id: 'insulin-lowers',
            label: 'Insulin',
            explanation: 'Correct: insulin, released by beta cells after a meal, drives glucose into cells and glycogen formation in the liver.',
          },
          {
            id: 'glucagon',
            label: 'Glucagon',
            explanation: 'No: glucagon, from alpha cells, does the opposite — it raises blood glucose during fasting.',
          },
          {
            id: 'tiroxina',
            label: 'Thyroxine',
            explanation: 'No: thyroxine comes from the thyroid and regulates basal metabolism, not post-meal glucose.',
          },
          {
            id: 'adrenalina',
            label: 'Adrenaline',
            explanation: 'No: adrenaline (adrenal medulla) also raises blood glucose in stress, it does not lower it.',
          },
        ],
      },
    },
  },
});
