import { lessonSchema } from '../src/contracts/learning';

export const immunologyInnateAdaptiveLesson = lessonSchema.parse({
  id: 'immunology-innate-adaptive',
  revision: 1,
  questionId: 'immunology-adaptive-memory',
  correctOptionId: 'adaptive-memory',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'immunology',
  sources: [
    {
      id: 'openstax-microbiology-ch15',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/15-1',
      section: 'Chapters 15–18 · Innate and adaptive immunity',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Imunologia',
      hook: 'Por que a segunda infecção pelo mesmo vírus costuma ser mais branda?',
      title: 'Imunidade inata vs adaptativa',
      description: 'Compare as duas linhas de defesa do organismo: rapidez, especificidade e memória.',
      objective: 'Diferenciar imunidade inata de adaptativa e explicar por que a adaptativa cria memória imunológica.',
      stages: [
        {
          id: 'innate',
          title: 'Inata: a primeira linha de defesa',
          paragraphs: [
            'A imunidade inata é imediata e inespecífica: pele, mucosas, fagócitos (macrófagos, neutrófilos) e proteínas do complemento.',
            'Ela não memoriza patógenos.',
          ],
          takeaway: 'Inata = rápida, inespecífica, sem memória.',
          diagram: 'immune',
        },
        {
          id: 'adaptive',
          title: 'Adaptativa: específico e com memória',
          paragraphs: [
            'A imunidade adaptativa usa linfócitos T e B, que reconhecem antígenos específicos. Leva dias para ativar, mas é precisa.',
            'Ela guarda células de memória: na reinfecção, a resposta é rápida e forte.',
          ],
          takeaway: 'Adaptativa = lenta na 1ª vez, específica e com memória.',
          diagram: 'immune',
        },
        {
          id: 'vaccines',
          title: 'Vacinas simulam a primeira infecção',
          paragraphs: [
            'A vacina apresenta o antígeno sem causar doença, gerando células de memória. Assim, o organismo responde rápido ao patógeno real.',
          ],
          takeaway: 'Vacina = memória imunológica sem a doença.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Por que a resposta adaptativa é muito mais rápida na segunda exposição ao mesmo patógeno?',
        options: [
          {
            id: 'adaptive-memory',
            label: 'Porque células de memória B e T permanecem no organismo',
            explanation: 'Correto: na primeira exposição, linfócitos específicos viram células de memória; na reinfecção, elas respondem em horas, não em dias.',
          },
          {
            id: 'innate-faster',
            label: 'Porque a imunidade inata fica mais rápida',
            explanation: 'Não: a inata não muda com a exposição — ela continua igualmente rápida e inespecífica.',
          },
          {
            id: 'antibodies-always',
            label: 'Porque já existem anticorpos contra todos os patógenos',
            explanation: 'Não: anticorpos específicos só são produzidos após o contato com o antígeno (ou a vacina).',
          },
          {
            id: 'mutation',
            label: 'Porque o patógeno muda e fica mais fraco',
            explanation: 'Não: a memória imunológica é do hospedeiro, não depende de o patógeno enfraquecer.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Immunology',
      hook: 'Why is a second infection with the same virus usually milder?',
      title: 'Innate vs adaptive immunity',
      description: 'Compare the body’s two lines of defense: speed, specificity and memory.',
      objective: 'Tell innate from adaptive immunity apart and explain why adaptive immunity creates immune memory.',
      stages: [
        {
          id: 'innate',
          title: 'Innate: the first line of defense',
          paragraphs: [
            'Innate immunity is immediate and nonspecific: skin, mucosa, phagocytes (macrophages, neutrophils) and complement proteins.',
            'It does not remember pathogens.',
          ],
          takeaway: 'Innate = fast, nonspecific, no memory.',
          diagram: 'immune',
        },
        {
          id: 'adaptive',
          title: 'Adaptive: specific and with memory',
          paragraphs: [
            'Adaptive immunity uses T and B lymphocytes that recognize specific antigens. It takes days to activate but is precise.',
            'It keeps memory cells: on reinfection, the response is fast and strong.',
          ],
          takeaway: 'Adaptive = slow the first time, specific, with memory.',
          diagram: 'immune',
        },
        {
          id: 'vaccines',
          title: 'Vaccines mimic the first infection',
          paragraphs: [
            'A vaccine presents the antigen without causing disease, generating memory cells. The body then responds quickly to the real pathogen.',
          ],
          takeaway: 'Vaccine = immune memory without the disease.',
          diagram: 'immune',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Why is the adaptive response much faster on the second exposure to the same pathogen?',
        options: [
          {
            id: 'adaptive-memory',
            label: 'Because memory B and T cells remain in the body',
            explanation: 'Correct: on first exposure, specific lymphocytes become memory cells; on reinfection they respond in hours, not days.',
          },
          {
            id: 'innate-faster',
            label: 'Because innate immunity gets faster',
            explanation: 'No: innate immunity does not change with exposure — it stays equally fast and nonspecific.',
          },
          {
            id: 'antibodies-always',
            label: 'Because antibodies against all pathogens already exist',
            explanation: 'No: specific antibodies are only produced after contact with the antigen (or a vaccine).',
          },
          {
            id: 'mutation',
            label: 'Because the pathogen mutates and becomes weaker',
            explanation: 'No: immune memory belongs to the host, not to the pathogen weakening.',
          },
        ],
      },
    },
  },
});
