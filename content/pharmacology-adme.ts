import { lessonSchema } from '../src/contracts/learning';

export const pharmacologyAdmeLesson = lessonSchema.parse({
  id: 'pharmacology-adme',
  revision: 1,
  questionId: 'pharmacology-adme-order',
  correctOptionId: 'adme-order',
  correctOrderIds: ['absorption', 'distribution', 'metabolism', 'excretion'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'statpearls-pharmacokinetics',
      title: 'StatPearls · Pharmacokinetics (NCBI Bookshelf)',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551668/',
      section: 'Pharmacokinetics, ADME',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'O que o corpo faz com um remédio antes de ele fazer efeito?',
      title: 'Farmacocinética: o caminho do fármaco (ADME)',
      description: 'Siga as quatro fases do fármaco no organismo: absorção, distribuição, metabolização e excreção.',
      objective: 'Ordenar as fases do ADME e explicar que a metabolização hepática e a excreção renal eliminam o fármaco.',
      stages: [
        {
          id: 'absorption',
          title: 'Absorção: o fármaco entra na corrente sanguínea',
          paragraphs: [
            'Depois de ingerido, o fármaco atravessa a parede do trato gastrointestinal e cai na circulação — em parte pela veia porta até o fígado.',
          ],
          takeaway: 'Absorção = entrada do fármaco no sangue.',
          diagram: 'adme',
        },
        {
          id: 'distribution',
          title: 'Distribuição: o fármaco chega aos tecidos',
          paragraphs: [
            'Na corrente sanguínea, o fármaco se liga a proteínas plasmáticas e se distribui pelos tecidos, chegando ao local de ação.',
          ],
          takeaway: 'Distribuição = o fármaco sai do sangue para os tecidos.',
          diagram: 'adme',
        },
        {
          id: 'metabolism-excretion',
          title: 'Metabolização e excreção: o corpo elimina o fármaco',
          paragraphs: [
            'O fígado metaboliza o fármaco (geralmente o torna mais hidrossolúvel) e os rins o excretam na urina. É o que determina a meia-vida e a duração do efeito.',
          ],
          takeaway: 'Fígado metaboliza; rim excreta — isso encerra a ação do fármaco.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Coloque na ordem correta as fases da farmacocinética (ADME):',
        items: [
          {
            id: 'absorption',
            label: 'Absorção',
            explanation: '1º: o fármaco entra na corrente sanguínea pelo trato gastrointestinal.',
          },
          {
            id: 'distribution',
            label: 'Distribuição',
            explanation: '2º: o fármaco circula e chega aos tecidos e ao local de ação.',
          },
          {
            id: 'metabolism',
            label: 'Metabolização',
            explanation: '3º: o fígado transforma o fármaco, geralmente para facilitar a eliminação.',
          },
          {
            id: 'excretion',
            label: 'Excreção',
            explanation: '4º: os rins (ou outras vias) eliminam o fármaco e seus metabólitos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'What does the body do to a drug before the drug does anything?',
      title: 'Pharmacokinetics: the drug’s journey (ADME)',
      description: 'Follow the four phases a drug goes through in the body: absorption, distribution, metabolism and excretion.',
      objective: 'Order the ADME phases and explain that hepatic metabolism and renal excretion clear the drug.',
      stages: [
        {
          id: 'absorption',
          title: 'Absorption: the drug enters the bloodstream',
          paragraphs: [
            'After ingestion, the drug crosses the gastrointestinal wall into the circulation — partly through the portal vein to the liver.',
          ],
          takeaway: 'Absorption = the drug entering the blood.',
          diagram: 'adme',
        },
        {
          id: 'distribution',
          title: 'Distribution: the drug reaches the tissues',
          paragraphs: [
            'In the bloodstream, the drug binds plasma proteins and spreads into the tissues, reaching its site of action.',
          ],
          takeaway: 'Distribution = the drug leaves the blood for the tissues.',
          diagram: 'adme',
        },
        {
          id: 'metabolism-excretion',
          title: 'Metabolism and excretion: the body clears the drug',
          paragraphs: [
            'The liver metabolizes the drug (usually making it more water-soluble) and the kidneys excrete it in urine. This determines half-life and duration of effect.',
          ],
          takeaway: 'Liver metabolizes; kidney excretes — that ends the drug’s action.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Put the pharmacokinetic phases (ADME) in the correct order:',
        items: [
          {
            id: 'absorption',
            label: 'Absorption',
            explanation: '1st: the drug enters the bloodstream through the gastrointestinal tract.',
          },
          {
            id: 'distribution',
            label: 'Distribution',
            explanation: '2nd: the drug circulates and reaches the tissues and site of action.',
          },
          {
            id: 'metabolism',
            label: 'Metabolism',
            explanation: '3rd: the liver transforms the drug, usually to make elimination easier.',
          },
          {
            id: 'excretion',
            label: 'Excretion',
            explanation: '4th: the kidneys (or other routes) eliminate the drug and its metabolites.',
          },
        ],
      },
    },
  },
});
