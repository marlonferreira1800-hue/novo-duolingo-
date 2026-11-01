import { lessonSchema } from '../src/contracts/learning';

export const biochemistryGlycolysisLesson = lessonSchema.parse({
  id: 'biochemistry-glycolysis',
  revision: 1,
  questionId: 'biochemistry-glycolysis-atp',
  correctOptionId: 'atp-2',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-biology-2e-ch6',
      title: 'OpenStax Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/6-1',
      section: 'Chapter 6 · Cellular Respiration',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Bioquímica',
      hook: 'De onde vem a energia que move suas células neste exato momento?',
      title: 'Glicólise: a primeira etapa da respiração celular',
      description: 'Entenda como a glicose é quebrada no citosol e quanto ATP líquido essa etapa produz.',
      objective: 'Descrever a glicólise como etapa anaeróbia da respiração celular e informar seu saldo líquido de ATP por glicose.',
      stages: [
        {
          id: 'cytosol',
          title: 'A quebra acontece no citosol',
          paragraphs: [
            'A glicólise ocorre no citosol e não precisa de oxigênio. Uma molécula de glicose (6 carbonos) é quebrada em duas moléculas de piruvato (3 carbonos).',
          ],
          takeaway: 'Glicose → 2 piruvato, no citosol, sem consumir O₂.',
          diagram: 'mitochondria',
        },
        {
          id: 'investment',
          title: 'Investir para ganhar',
          paragraphs: [
            'A fase de investimento gasta 2 ATP para ativar a glicose. Na fase de retorno, são formados 4 ATP por fosforilação em nível de substrato — ou seja, 4 ATP criados diretamente por enzimas.',
            'O saldo líquido é 4 − 2 = 2 ATP por glicose, além de 2 NADH.',
          ],
          takeaway: 'Gasto de 2 ATP, retorno de 4 ATP: saldo líquido de 2 ATP.',
          diagram: 'mitochondria',
        },
        {
          id: 'handoff',
          title: 'O piruvato vai para a mitocôndria',
          paragraphs: [
            'Na presença de oxigênio, o piruvato entra na mitocôndria e segue para o ciclo de Krebs e a cadeia respiratória, que rendem muito mais ATP.',
            'Sem oxigênio, o piruvato vira lactato (fermentação), apenas para regenerar NAD⁺.',
          ],
          takeaway: 'A glicólise é só o começo: a maior parte do ATP vem da mitocôndria.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: a glicólise produz um saldo líquido de ______ por molécula de glicose.',
        blank: 'Glicólise: saldo líquido = ______ ATP por glicose',
        options: [
          {
            id: 'atp-2',
            label: '2 ATP',
            explanation: 'Correto: 4 ATP formados menos 2 ATP gastos na fase de investimento = 2 ATP líquidos por glicose.',
          },
          {
            id: 'atp-4',
            label: '4 ATP',
            explanation: 'Não: 4 ATP é o total formado, mas 2 ATP foram gastos para ativar a glicose. O saldo líquido é 2.',
          },
          {
            id: 'atp-32',
            label: '32 ATP',
            explanation: 'Não: ~30–32 ATP é o rendimento total da respiração celular completa, não só da glicólise.',
          },
          {
            id: 'atp-0',
            label: '0 ATP',
            explanation: 'Não: apesar do gasto inicial, a glicólise tem saldo positivo de 2 ATP líquidos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'Where does the energy powering your cells right now come from?',
      title: 'Glycolysis: the first step of cellular respiration',
      description: 'Understand how glucose is broken down in the cytosol and how much net ATP this step yields.',
      objective: 'Describe glycolysis as the anaerobic step of cellular respiration and state its net ATP yield per glucose.',
      stages: [
        {
          id: 'cytosol',
          title: 'The breakdown happens in the cytosol',
          paragraphs: [
            'Glycolysis takes place in the cytosol and does not require oxygen. One glucose molecule (6 carbons) is split into two pyruvate molecules (3 carbons).',
          ],
          takeaway: 'Glucose → 2 pyruvate, in the cytosol, without consuming O₂.',
          diagram: 'mitochondria',
        },
        {
          id: 'investment',
          title: 'Invest to gain',
          paragraphs: [
            'The investment phase spends 2 ATP to activate glucose. In the payoff phase, 4 ATP are produced by substrate-level phosphorylation — that is, formed directly by enzymes.',
            'The net balance is 4 − 2 = 2 ATP per glucose, plus 2 NADH.',
          ],
          takeaway: '2 ATP spent, 4 ATP formed: a net of 2 ATP.',
          diagram: 'mitochondria',
        },
        {
          id: 'handoff',
          title: 'Pyruvate moves into the mitochondrion',
          paragraphs: [
            'In the presence of oxygen, pyruvate enters the mitochondrion and continues through the Krebs cycle and the respiratory chain, which yield far more ATP.',
            'Without oxygen, pyruvate becomes lactate (fermentation), just to regenerate NAD⁺.',
          ],
          takeaway: 'Glycolysis is only the start: most ATP comes from the mitochondrion.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: glycolysis yields a net of ______ per glucose molecule.',
        blank: 'Glycolysis: net yield = ______ ATP per glucose',
        options: [
          {
            id: 'atp-2',
            label: '2 ATP',
            explanation: 'Correct: 4 ATP formed minus 2 ATP spent in the investment phase = 2 net ATP per glucose.',
          },
          {
            id: 'atp-4',
            label: '4 ATP',
            explanation: 'No: 4 ATP is the total formed, but 2 ATP were spent to activate glucose. The net is 2.',
          },
          {
            id: 'atp-32',
            label: '32 ATP',
            explanation: 'No: ~30–32 ATP is the yield of complete cellular respiration, not of glycolysis alone.',
          },
          {
            id: 'atp-0',
            label: '0 ATP',
            explanation: 'No: despite the initial cost, glycolysis has a positive net of 2 ATP.',
          },
        ],
      },
    },
  },
});
