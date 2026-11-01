import { lessonSchema } from '../src/contracts/learning';

export const biophysicsTransportLesson = lessonSchema.parse({
  id: 'biophysics-transport',
  revision: 1,
  questionId: 'biophysics-facilitated-diffusion',
  correctOptionId: 'carrier-protein',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch3',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-1',
      section: 'Chapter 3 · The Cell: passive transport across membranes',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biofísica',
      hook: 'Por que a glicose atravessa a membrana com ajuda, mas o O₂ passa direto?',
      title: 'Transporte passivo: difusão simples e facilitada',
      description: 'Compare difusão simples e facilitada e entenda o papel das proteínas transportadoras.',
      objective: 'Diferenciar difusão simples de facilitada e identificar a proteína transportadora como o que torna o transporte facilitado possível.',
      stages: [
        {
          id: 'simple',
          title: 'Difusão simples: direto pela bicamada',
          paragraphs: [
            'Moléculas pequenas e apolares — O₂, CO₂, hormônios esteroides — atravessam a bicamada lipídica a favor do gradiente, sem gasto de energia.',
          ],
          takeaway: 'Difusão simples: sem proteína, sem ATP, a favor do gradiente.',
          diagram: 'membrane',
        },
        {
          id: 'facilitated',
          title: 'Difusão facilitada: com proteína carreadora',
          paragraphs: [
            'Moléculas maiores ou carregadas — glicose, íons — não atravessam a bicamada sozinhas. Elas usam canais ou proteínas carreadoras, ainda a favor do gradiente e sem ATP.',
          ],
          takeaway: 'Difusão facilitada usa proteína de membrana, mas continua passiva.',
          diagram: 'membrane',
        },
        {
          id: 'active',
          title: 'Transporte ativo gasta energia',
          paragraphs: [
            'Quando o transporte vai contra o gradiente, a célula gasta ATP — é o transporte ativo, feito por bombas como a de Na⁺/K⁺.',
            'A bomba de Na⁺/K⁺ mantém o potencial de membrana das células excitáveis.',
          ],
          takeaway: 'Contra o gradiente = transporte ativo, com ATP.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: na difusão facilitada, a molécula atravessa a membrana com a ajuda de uma __________, sem gastar ATP.',
        blank: 'Difusão facilitada = __________ + gradiente (sem ATP)',
        options: [
          {
            id: 'carrier-protein',
            label: 'proteína carreadora (ou canal)',
            explanation: 'Correto: proteínas de membrana formam canais ou carreadores que deixam íons e moléculas maiores passar a favor do gradiente, sem ATP.',
          },
          {
            id: 'atp',
            label: 'molécula de ATP',
            explanation: 'Não: se gastasse ATP seria transporte ativo, não facilitado. A difusão facilitada é passiva.',
          },
          {
            id: 'enzyme',
            label: 'enzima digestiva',
            explanation: 'Não: enzimas não atravessam a membrana transportando moléculas; quem faz isso são as proteínas de transporte.',
          },
          {
            id: 'nothing',
            label: 'nada — a molécula passa sozinha',
            explanation: 'Não: se passasse sozinha seria difusão simples. A facilitada existe justamente para moléculas que não atravessam a bicamada.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'Why does glucose cross the membrane with help, while O₂ slips straight through?',
      title: 'Passive transport: simple and facilitated diffusion',
      description: 'Compare simple and facilitated diffusion and see the role of carrier proteins.',
      objective: 'Tell simple diffusion apart from facilitated diffusion and identify the carrier protein as what makes facilitated transport possible.',
      stages: [
        {
          id: 'simple',
          title: 'Simple diffusion: straight through the bilayer',
          paragraphs: [
            'Small nonpolar molecules — O₂, CO₂, steroid hormones — cross the lipid bilayer down their gradient, with no energy cost.',
          ],
          takeaway: 'Simple diffusion: no protein, no ATP, down the gradient.',
          diagram: 'membrane',
        },
        {
          id: 'facilitated',
          title: 'Facilitated diffusion: with a carrier protein',
          paragraphs: [
            'Larger or charged molecules — glucose, ions — cannot cross the bilayer alone. They use channels or carrier proteins, still down the gradient and without ATP.',
          ],
          takeaway: 'Facilitated diffusion uses a membrane protein but is still passive.',
          diagram: 'membrane',
        },
        {
          id: 'active',
          title: 'Active transport spends energy',
          paragraphs: [
            'When transport goes against the gradient, the cell spends ATP — active transport, done by pumps such as the Na⁺/K⁺ pump.',
            'The Na⁺/K⁺ pump maintains the membrane potential of excitable cells.',
          ],
          takeaway: 'Against the gradient = active transport, with ATP.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: in facilitated diffusion, the molecule crosses the membrane with the help of a __________, without spending ATP.',
        blank: 'Facilitated diffusion = __________ + gradient (no ATP)',
        options: [
          {
            id: 'carrier-protein',
            label: 'carrier protein (or channel)',
            explanation: 'Correct: membrane proteins form channels or carriers that let ions and larger molecules pass down the gradient, without ATP.',
          },
          {
            id: 'atp',
            label: 'ATP molecule',
            explanation: 'No: if it spent ATP it would be active transport, not facilitated diffusion. Facilitated diffusion is passive.',
          },
          {
            id: 'enzyme',
            label: 'digestive enzyme',
            explanation: 'No: enzymes do not cross the membrane carrying molecules; transport proteins do that.',
          },
          {
            id: 'nothing',
            label: 'nothing — the molecule goes through alone',
            explanation: 'No: if it went alone it would be simple diffusion. Facilitated diffusion exists precisely for molecules that cannot cross the bilayer.',
          },
        ],
      },
    },
  },
});
