import { lessonSchema } from '../src/contracts/learning';

export const cellMembraneLesson = lessonSchema.parse({
  id: 'cell-membrane',
  revision: 1,
  questionId: 'cell-membrane-transport',
  correctOptionId: 'selective',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-biology-2e-ch4',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/4-1',
      section: 'Chapter 4 · Cell Structure',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como a célula sabe o que entra e o que sai?',
      title: 'Membrana plasmática: a fronteira seletiva',
      description: 'Veja a bicamada lipídica e as proteínas de membrana que controlam o transporte celular.',
      objective: 'Descrever a estrutura da membrana plasmática e explicar por que ela é seletivamente permeável.',
      stages: [
        {
          id: 'bilayer',
          title: 'Uma bicamada de fosfolipídios',
          paragraphs: [
            'A membrana plasmática é formada por duas camadas de fosfolipídios: as cabeças hidrofílicas ficam para fora e as caudas hidrofóbicas, para dentro.',
            'Essa bicamada impede a passagem livre de moléculas hidrossolúveis grandes e íons.',
          ],
          takeaway: 'Cabeças para fora, caudas para dentro: a bicamada bloqueia o que é hidrossolúvel.',
          diagram: 'membrane',
        },
        {
          id: 'proteins',
          title: 'Proteínas fazem o transporte',
          paragraphs: [
            'Proteínas inseridas na membrana formam canais e transportadores. Canais permitem difusão passiva; transportadores podem gastar ATP (transporte ativo).',
            'Receptores de membrana captam sinais químicos do ambiente.',
          ],
          takeaway: 'Canais e transportadores controlam o que atravessa a membrana.',
          diagram: 'membrane',
        },
        {
          id: 'selective',
          title: 'Permeabilidade seletiva',
          paragraphs: [
            'Moléculas pequenas e apolares (O₂, CO₂) atravessam a bicamada livremente. Íons e moléculas grandes precisam de proteínas.',
            'Assim a célula mantém seu ambiente interno estável, diferente do meio externo — a homeostase.',
          ],
          takeaway: 'A membrana deixa passar algumas coisas e barra outras: é seletivamente permeável.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Por que a membrana plasmática é chamada de seletivamente permeável?',
        options: [
          {
            id: 'selective',
            label: 'Porque deixa passar algumas substâncias e bloqueia outras',
            explanation: 'Correto: a bicamada lipídica barra íons e moléculas grandes, enquanto O₂ e CO₂ passam livremente; proteínas controlam o resto.',
          },
          {
            id: 'nothing',
            label: 'Porque não deixa nada passar',
            explanation: 'Não: moléculas pequenas e apolares, como O₂ e CO₂, atravessam a bicamada livremente.',
          },
          {
            id: 'everything',
            label: 'Porque deixa tudo passar',
            explanation: 'Não: íons e moléculas grandes hidrossolúveis não atravessam a bicamada sem proteínas de transporte.',
          },
          {
            id: 'rigid',
            label: 'Porque é uma parede rígida e fixa',
            explanation: 'Não: a membrana é fluida e dinâmica, formada por fosfolipídios e proteínas em constante movimento.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How does a cell know what goes in and what goes out?',
      title: 'Plasma membrane: the selective boundary',
      description: 'See the lipid bilayer and the membrane proteins that control cellular transport.',
      objective: 'Describe the structure of the plasma membrane and explain why it is selectively permeable.',
      stages: [
        {
          id: 'bilayer',
          title: 'A bilayer of phospholipids',
          paragraphs: [
            'The plasma membrane is made of two layers of phospholipids: the hydrophilic heads face outward and the hydrophobic tails face inward.',
            'This bilayer blocks most water-soluble molecules and ions from crossing freely.',
          ],
          takeaway: 'Heads out, tails in: the bilayer blocks water-soluble substances.',
          diagram: 'membrane',
        },
        {
          id: 'proteins',
          title: 'Proteins do the transport',
          paragraphs: [
            'Proteins embedded in the membrane form channels and carriers. Channels allow passive diffusion; carriers can spend ATP (active transport).',
            'Membrane receptors pick up chemical signals from the environment.',
          ],
          takeaway: 'Channels and carriers control what crosses the membrane.',
          diagram: 'membrane',
        },
        {
          id: 'selective',
          title: 'Selective permeability',
          paragraphs: [
            'Small nonpolar molecules (O₂, CO₂) cross the bilayer freely. Ions and large molecules need proteins.',
            'This lets the cell keep a stable internal environment, different from the outside — homeostasis.',
          ],
          takeaway: 'The membrane lets some things through and blocks others: it is selectively permeable.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Why is the plasma membrane called selectively permeable?',
        options: [
          {
            id: 'selective',
            label: 'Because it lets some substances through and blocks others',
            explanation: 'Correct: the lipid bilayer blocks ions and large molecules, while O₂ and CO₂ cross freely; proteins handle the rest.',
          },
          {
            id: 'nothing',
            label: 'Because it lets nothing through',
            explanation: 'No: small nonpolar molecules such as O₂ and CO₂ cross the bilayer freely.',
          },
          {
            id: 'everything',
            label: 'Because it lets everything through',
            explanation: 'No: ions and large water-soluble molecules cannot cross the bilayer without transport proteins.',
          },
          {
            id: 'rigid',
            label: 'Because it is a rigid, fixed wall',
            explanation: 'No: the membrane is fluid and dynamic, made of phospholipids and proteins in constant motion.',
          },
        ],
      },
    },
  },
});
