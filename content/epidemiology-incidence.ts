import { lessonSchema } from '../src/contracts/learning';

export const epidemiologyIncidenceLesson = lessonSchema.parse({
  id: 'epidemiology-incidence',
  revision: 1,
  questionId: 'epidemiology-incidence-formula',
  correctOptionId: 'new-cases-over-risk',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'cdc-principles-epidemiology',
      title: 'CDC · Principles of Epidemiology in Public Health Practice',
      url: 'https://www.cdc.gov/training-publichealth101/php/training/principles-of-epidemiology.html',
      section: 'Measures of frequency: incidence and prevalence',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Quantas pessoas adoeceram esse mês? E de quantas podiam adoecer?',
      title: 'Incidência: casos novos sobre população em risco',
      description: 'Defina incidência e distinga-a de prevalência, usando a fórmula correta.',
      objective: 'Calcular a incidência como casos novos divididos pela população em risco e diferenciar incidência de prevalência.',
      stages: [
        {
          id: 'definition',
          title: 'Incidência conta casos novos',
          paragraphs: [
            'Incidência mede a velocidade de aparição de casos novos: quantos novos adoecimentos surgem em um período. Quem já estava doente não entra no numerador.',
          ],
          takeaway: 'Incidência = casos novos em um período.',
          diagram: 'incidence',
        },
        {
          id: 'formula',
          title: 'A fórmula',
          paragraphs: [
            'Incidência = número de casos novos ÷ população em risco (quem ainda pode adoecer), no mesmo período. Resultado: uma taxa, geralmente por 1.000 ou 100.000 habitantes.',
          ],
          takeaway: 'Incidência = casos novos / população em risco × constante.',
          diagram: 'incidence',
        },
        {
          id: 'vs-prevalence',
          title: 'Incidência vs prevalence',
          paragraphs: [
            'Prevalência conta todos os casos existentes (novos + antigos) em um momento. Incidência é o fluxo de novos casos; prevalência é o “estoque” de doentes.',
            'Doenças curtas têm prevalência próxima da incidência; doenças crônicas acumulam prevalência.',
          ],
          takeaway: 'Incidência = fluxo (novos); prevalência = estoque (todos os casos).',
          diagram: 'incidence',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Como se calcula a incidência de uma doença?',
        options: [
          {
            id: 'new-cases-over-risk',
            label: 'Casos novos no período ÷ população em risco no período',
            explanation: 'Correto: a incidência é uma taxa de casos novos sobre quem ainda podia adoecer, geralmente expressa por 100.000 habitantes.',
          },
          {
            id: 'all-cases',
            label: 'Todos os casos existentes ÷ população total',
            explanation: 'Não: isso é a prevalência, que inclui os casos antigos, não só os novos.',
          },
          {
            id: 'deaths',
            label: 'Óbitos ÷ população total',
            explanation: 'Não: óbitos/população é a taxa de mortalidade, não a incidência.',
          },
          {
            id: 'new-only',
            label: 'Apenas o número de casos novos, sem dividir',
            explanation: 'Não: sem dividir pela população em risco não dá para comparar grupos de tamanhos diferentes — é preciso a taxa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology and biostatistics',
      hook: 'How many people fell ill this month? And how many could have?',
      title: 'Incidence: new cases over population at risk',
      description: 'Define incidence and tell it apart from prevalence, using the correct formula.',
      objective: 'Compute incidence as new cases divided by the population at risk and distinguish incidence from prevalence.',
      stages: [
        {
          id: 'definition',
          title: 'Incidence counts new cases',
          paragraphs: [
            'Incidence measures how fast new cases appear: how many new illnesses arise in a period. People already ill are not counted in the numerator.',
          ],
          takeaway: 'Incidence = new cases in a period.',
          diagram: 'incidence',
        },
        {
          id: 'formula',
          title: 'The formula',
          paragraphs: [
            'Incidence = number of new cases ÷ population at risk (who could still fall ill), over the same period. The result is a rate, usually per 1,000 or 100,000 inhabitants.',
          ],
          takeaway: 'Incidence = new cases / population at risk × constant.',
          diagram: 'incidence',
        },
        {
          id: 'vs-prevalence',
          title: 'Incidence vs prevalence',
          paragraphs: [
            'Prevalence counts all existing cases (new + old) at a point in time. Incidence is the flow of new cases; prevalence is the “stock” of the ill.',
            'Short diseases have prevalence close to incidence; chronic diseases accumulate prevalence.',
          ],
          takeaway: 'Incidence = flow (new cases); prevalence = stock (all cases).',
          diagram: 'incidence',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'How is the incidence of a disease calculated?',
        options: [
          {
            id: 'new-cases-over-risk',
            label: 'New cases in the period ÷ population at risk in the period',
            explanation: 'Correct: incidence is a rate of new cases over those who could still fall ill, usually expressed per 100,000 inhabitants.',
          },
          {
            id: 'all-cases',
            label: 'All existing cases ÷ total population',
            explanation: 'No: that is prevalence, which includes old cases, not only new ones.',
          },
          {
            id: 'deaths',
            label: 'Deaths ÷ total population',
            explanation: 'No: deaths/population is the mortality rate, not incidence.',
          },
          {
            id: 'new-only',
            label: 'Just the number of new cases, without dividing',
            explanation: 'No: without dividing by the population at risk you cannot compare groups of different sizes — you need the rate.',
          },
        ],
      },
    },
  },
});
