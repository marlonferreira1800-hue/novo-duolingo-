import { lessonSchema } from '../src/contracts/learning';

export const epidemiologyPreventionLesson = lessonSchema.parse({
  id: 'epidemiology-prevention',
  revision: 1,
  questionId: 'epidemiology-prevention-q1',
  correctOptionId: 'secondary-screening-prevention',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'openstax-ap2e-disease-prevention',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/1-3-homeostasis',
      section: 'Chapter 1.3 · Homeostasis: Pathogenesis, natural history of disease, and clinical prevention',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Como a medicina moderna protege as pessoas de adoecerem, evita que doenças silenciosas avancem e impede que o excesso de exames cause mais mal do que bem?',
      title: 'História natural da doença e níveis de prevenção',
      description: 'Conheça o modelo de Leavell & Clark: prevenção primária, secundária, terciária e a prevenção quaternária contra a iatrogenia médica.',
      objective: 'Categorizar ações de saúde pública e prática clínica nos quatro níveis de prevenção de Leavell & Clark.',
      stages: [
        {
          id: 'primary-prevention',
          title: 'Prevenção primária: no período pré-patogênico',
          paragraphs: [
            'A prevenção primária atua antes que qualquer processo fisiopatológico se inicie no organismo humano, focando na promoção da saúde e na proteção específica.',
            'Seus objetivos centrais são eliminar a exposição a fatores de risco e aumentar a resistência do hospedeiro aos agravos. Exemplos clássicos incluem a imunização em massa por vacinas, o saneamento básico de águas e esgotos, campanhas de cessação do tabagismo, o uso de preservativos para prevenção de ISTs e a fortificação de alimentos com ácido fólico.',
          ],
          takeaway: 'Prevenção primária atua antes do início da doença eliminando riscos ou vacinando o hospedeiro suscetível.',
          diagram: 'immune',
        },
        {
          id: 'secondary-prevention',
          title: 'Prevenção secundária: diagnóstico precoce e rastreamento',
          paragraphs: [
            'A prevenção secundária intervém no período patogênico inicial, quando a doença já está instalada biologicamente mas ainda se encontra em fase pré-clínica assintomática.',
            'O foco principal é o rastreamento (screening) em populações sob risco para detectar precocemente lesões e iniciar tratamento curativo ou interruptivo antes do surgimento de sequelas irreversíveis. Exemplos incluem o exame citopatológico de colo uterino (Papanicolau), a mamografia de rastreamento bienal, o teste do pezinho neonatal e a dosagem de glicemia de jejum em diabéticos assintomáticos.',
          ],
          takeaway: 'Prevenção secundária rastreia indivíduos assintomáticos para diagnosticar e tratar a doença em fase inicial.',
          diagram: 'stats',
        },
        {
          id: 'tertiary-quaternary',
          title: 'Prevenção terciária e quaternária',
          paragraphs: [
            'A prevenção terciária atua na fase clínica avançada ou residual da patologia, visando limitar a incapacidade funcional e promover a reabilitação física, psicológica e profissional (como fisioterapia pós-AVC ou reabilitação cardíaca pós-infarto).',
            'A prevenção quaternária é a identificação de pacientes sob risco de intervenção médica excessiva ou iatrogenia. Seu objetivo é protegê-los de exames desnecessários, sobrediagnóstico (overdiagnosis) e sobretratamento (overtreatment), preservando o princípio hipocrático do Primum non nocere.',
          ],
          takeaway: 'Terciária reabilita sequelas já estabelecidas; quaternária protege o paciente contra sobrediagnóstico e excessos médicos iatrogênicos.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'A realização periódica de mamografia em mulheres assintomáticas de 50 a 69 anos para identificação precoce de microcalcificações e tumores de mama em fase pré-clínica exemplifica qual nível de prevenção?',
        options: [
          {
            id: 'secondary-screening-prevention',
            label: 'Prevenção secundária (diagnóstico precoce em fase assintomática)',
            explanation: 'Correto: a mamografia de rastreamento visa detectar neoplasias mamárias em estágio subclínico para iniciar intervenção precoce e curativa.',
          },
          {
            id: 'primary-vaccine-prevention',
            label: 'Prevenção primária (eliminação do fator de risco etiológico)',
            explanation: 'Incorreto: a mamografia não impede a mutação genética tumoral de acontecer; ela apenas detecta a lesão precocemente.',
          },
          {
            id: 'tertiary-rehab-prevention',
            label: 'Prevenção terciária (reabilitação funcional de mastectomias)',
            explanation: 'Incorreto: a prevenção terciária atua após a cirurgia ou dano estabelecido, reabilitando sequelas físicas ou estéticas.',
          },
          {
            id: 'quaternary-iatrogenic-prevention',
            label: 'Prevenção quaternária (abstenção de intervenções diagnósticas)',
            explanation: 'Incorreto: prevenção quaternária envolve evitar exames inúteis ou danosos, e não programas formais de rastreamento validado.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology & biostatistics',
      hook: 'How does modern medicine protect people from falling sick, catch silent diseases before damage occurs, and prevent unnecessary medical tests from causing harm?',
      title: 'Natural History of Disease and Levels of Prevention',
      description: 'Master the Leavell & Clark framework: primary, secondary, and tertiary prevention, alongside quaternary prevention against medical harm.',
      objective: 'Categorize public health initiatives and clinical interventions into the four Leavell & Clark levels of prevention.',
      stages: [
        {
          id: 'primary-prevention',
          title: 'Primary prevention: The pre-pathogenesis phase',
          paragraphs: [
            'Primary prevention intervenes before biological disease processes begin within the human host, focusing on general health promotion and specific pathogen protection.',
            'Its core purpose is to eradicate environmental hazard exposures and augment host biological resistance. Prototypical examples include national childhood vaccination schedules, public sanitation infrastructure, smoking cessation campaigns, barrier contraception against STIs, and dietary folate supplementation to avert neural tube defects.',
          ],
          takeaway: 'Primary prevention intervenes prior to disease onset by neutralizing environmental risks and vaccinating susceptible hosts.',
          diagram: 'immune',
        },
        {
          id: 'secondary-prevention',
          title: 'Secondary prevention: Early detection and asymptomatic screening',
          paragraphs: [
            'Secondary prevention targets early pathogenesis when biological disease is established but remains clinically occult and asymptomatic.',
            'The central modality is population screening to detect pre-malignant lesions or metabolic anomalies, initiating prompt curative therapy before permanent tissue destruction emerges. Hallmarks include cervical Pap smears, screening mammography, newborn Guthrie heel-prick testing, and fasting blood glucose screenings.',
          ],
          takeaway: 'Secondary prevention screens asymptomatic cohorts to detect and arrest disease in early pre-clinical stages.',
          diagram: 'stats',
        },
        {
          id: 'tertiary-quaternary',
          title: 'Tertiary and quaternary prevention',
          paragraphs: [
            'Tertiary prevention operates during established symptomatic disease and convalescence to minimize chronic physical disability and optimize rehabilitative outcomes (such as post-stroke physical therapy or post-infarction cardiac conditioning).',
            'Quaternary prevention identifies patients at risk of medical over-investigation or iatrogenic injury. It actively shields vulnerable individuals from redundant diagnostic cascades, overdiagnosis, and overtreatment, upholding the foundational ethical tenet of Primum non nocere.',
          ],
          takeaway: 'Tertiary prevention rehabilitates chronic functional deficits; quaternary prevention guards against medical overtesting and iatrogenesis.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Routine biennial screening mammography among asymptomatic women aged 50 to 69 to detect occult breast malignancies before symptoms appear is an example of which level of prevention?',
        options: [
          {
            id: 'secondary-screening-prevention',
            label: 'Secondary prevention (early detection during the asymptomatic stage)',
            explanation: 'Correct: screening mammograms identify subclinical neoplasms in asymptomatic individuals to facilitate early curative treatment.',
          },
          {
            id: 'primary-vaccine-prevention',
            label: 'Primary prevention (neutralization of underlying biological causes)',
            explanation: 'Incorrect: mammograms do not prevent initial neoplastic transformation from taking place; they merely detect it early.',
          },
          {
            id: 'tertiary-rehab-prevention',
            label: 'Tertiary prevention (rehabilitation following radical mastectomy)',
            explanation: 'Incorrect: tertiary prevention focuses on functional rehabilitation following clinical treatment or surgical resection.',
          },
          {
            id: 'quaternary-iatrogenic-prevention',
            label: 'Quaternary prevention (de-escalation of routine diagnostic testing)',
            explanation: 'Incorrect: quaternary prevention involves abstaining from unnecessary medical testing to protect patients from iatrogenic harm.',
          },
        ],
      },
    },
  },
});

export const epidemiologyHealthIndicatorsLesson = lessonSchema.parse({
  id: 'epidemiology-health-indicators',
  revision: 1,
  questionId: 'epidemiology-health-indicators-q1',
  correctOptionId: 'case-fatality-rate',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'openstax-stats-health-metrics',
      title: 'OpenStax Introductory Statistics',
      url: 'https://openstax.org/books/introductory-statistics/pages/1-2-data-sampling-and-variation-in-data-and-sampling',
      section: 'Chapter 1.2 · Data and Sampling: Vital statistics, rates, and population ratios in epidemiological studies',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Como um país consegue saber se seu sistema de saúde está melhorando ou piorando apenas calculando quantas crianças morrem antes de completar um ano de vida?',
      title: 'Indicadores de saúde: mortalidade, letalidade e demografia',
      description: 'Analise os grandes indicadores epidemiológicos: mortalidade infantil, razão de mortalidade materna, letalidade e a transição epidemiológica.',
      objective: 'Diferenciar mortalidade de letalidade e calcular taxas vitais para interpretar a transição demográfica e epidemiológica.',
      stages: [
        {
          id: 'infant-maternal-mortality',
          title: 'Taxa de mortalidade infantil e razão materna',
          paragraphs: [
            'A Taxa de Mortalidade Infantil (TMI) é o número de óbitos em crianças menores de um ano por 1.000 nascidos vivos em determinado ano e local. É o indicador mais sensível do desenvolvimento socioeconômico e da qualidade da atenção básica à saúde de uma nação.',
            'A TMI subdivide-se em componente neonatal precoce (0 a 6 dias), neonatal tardio (7 a 27 dias) — relacionados à assistência pré-natal e ao parto — e componente pós-neonatal (28 a 364 dias), fortemente influenciado pelo saneamento ambiental, vacinação e desnutrição. A Razão de Mortalidade Materna mede óbitos maternos durante a gestação ou puerpério por 100.000 nascidos vivos.',
          ],
          takeaway: 'A TMI reflete as condições globais de vida; mortes neonatais ligam-se ao parto, e pós-neonatais ao saneamento e nutrição.',
          diagram: 'stats',
        },
        {
          id: 'lethality-vs-mortality',
          title: 'Mortalidade versus taxa de letalidade',
          paragraphs: [
            'Mortalidade e letalidade avaliam dimensões completamente distintas do adoecimento e óbito.',
            'A taxa de mortalidade calcula o risco de morte na população geral (número de óbitos por uma causa dividido pela população total em risco, expressa por 100.000 habitantes). Já a taxa de letalidade avalia a gravidade biológica da doença: é a proporção de indivíduos que vão a óbito dentre aqueles que contraíram a doença (óbitos / casos confirmados da doença × 100). Doenças como a raiva humana têm mortalidade populacional baixa, mas letalidade de quase 100%.',
          ],
          takeaway: 'Mortalidade mede o risco de morrer na população geral; letalidade mede a gravidade biológica da doença entre os acometidos.',
          diagram: 'equation',
        },
        {
          id: 'epidemiological-transition',
          title: 'Transição demográfica e epidemiológica',
          paragraphs: [
            'A transição demográfica inicia-se com a queda sustentada da taxa de mortalidade geral (pelo avanço sanitário e médico), seguida por declínio da fecundidade, levando ao estreitamento da base da pirâmide etária e envelhecimento populacional.',
            'Simultaneamente, ocorre a transição epidemiológica: o perfil de morbimortalidade desloca-se de doenças infectocontagiosas e carências nutricionais para doenças crônicas não transmissíveis (como hipertensão, coronariopatias, diabetes e neoplasias) e causas externas de violência e acidentes.',
          ],
          takeaway: 'A transição epidemiológica substitui doenças infecciosas e desnutrição por doenças crônicas não transmissíveis e causas externas.',
          diagram: 'incidence',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a definição do indicador bioestatístico de virulência e gravidade clínica:',
        blank: 'A taxa de __________ expressa a porcentagem de pacientes que evoluem a óbito dentre o total de indivíduos confirmadamente doentes, mensurando a severidade intrínseca da enfermidade.',
        options: [
          {
            id: 'case-fatality-rate',
            label: 'letalidade',
            explanation: 'Correto: a taxa de letalidade mede a proporção de mortes entre as pessoas acometidas pela doença, refletindo sua virulência biológica.',
          },
          {
            id: 'crude-birth-rate',
            label: 'natalidade bruta',
            explanation: 'Incorreto: a taxa de natalidade calcula o número de nascimentos vivos por mil habitantes na população total.',
          },
          {
            id: 'general-incidence-rate',
            label: 'incidência cumulativa',
            explanation: 'Incorreto: a incidência mede o surgimento de novos casos na população suscetível em determinado intervalo de tempo.',
          },
          {
            id: 'proportional-morbidity-rate',
            label: 'morbidade proporcional',
            explanation: 'Incorreto: a morbidade proporcional analisa a distribuição percentual de diagnósticos dentro do total de internações ou consultas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology & biostatistics',
      hook: 'How can public health officials reliably evaluate an entire nation’s healthcare quality simply by tallying how many infants survive their first birthday?',
      title: 'Health Indicators: Mortality, Case Fatality, and Demographics',
      description: 'Analyze vital public health metrics: infant mortality rate, maternal mortality ratio, case fatality rate, and the epidemiological transition.',
      objective: 'Distinguish population mortality from case fatality rates and interpret the demographic and epidemiological transitions.',
      stages: [
        {
          id: 'infant-maternal-mortality',
          title: 'Infant mortality rate and maternal mortality ratio',
          paragraphs: [
            'The Infant Mortality Rate (IMR) quantifies deaths in children under one year of age per 1,000 live births in a specified region and calendar year. It is widely considered the most sensitive index of socioeconomic development and baseline primary healthcare access.',
            'IMR breaks down into the early neonatal period (0–6 days), late neonatal period (7–27 days) — largely reflecting perinatal care and obstetric safety — and the post-neonatal period (28–364 days), which is heavily shaped by ambient sanitation, infectious diseases, and nutritional adequacy. The Maternal Mortality Ratio measures obstetric deaths per 100,000 live births.',
          ],
          takeaway: 'IMR captures overall social and medical progress; neonatal deaths link to obstetrics, while post-neonatal deaths mirror living conditions.',
          diagram: 'stats',
        },
        {
          id: 'lethality-vs-mortality',
          title: 'Population mortality versus case fatality rate',
          paragraphs: [
            'Mortality and case fatality quantify entirely distinct epidemiological dimensions of illness and death.',
            'The cause-specific mortality rate evaluates the likelihood of death across the general population (deaths divided by total population at risk, expressed per 100,000 persons). Conversely, the case fatality rate reflects intrinsic clinical severity: the percentage of individuals who die from a disease among those definitively diagnosed (deaths / confirmed cases × 100). Rabies has a low population mortality rate, but a case fatality rate approaching 100%.',
          ],
          takeaway: 'Mortality measures population risk of death; case fatality measures the intrinsic biological lethal severity among diseased patients.',
          diagram: 'equation',
        },
        {
          id: 'epidemiological-transition',
          title: 'Demographic and epidemiological transitions',
          paragraphs: [
            'The demographic transition begins with a sustained plunge in crude mortality rates due to hygiene and antibiotics, followed by declining fertility, producing an aging population pyramid with a constricted baseline.',
            'Concurrently, the epidemiological transition shifts disease burdens from communicable acute infections and malnutrition toward chronic non-communicable diseases (cardiovascular disease, diabetes, malignancies) and trauma from external causes.',
          ],
          takeaway: 'The epidemiological transition shifts societal burdens from infectious diseases and malnutrition to chronic non-communicable conditions and trauma.',
          diagram: 'incidence',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the sentence defining the bio-statistical metric of clinical virulence and disease lethality:',
        blank: 'The __________ rate calculates the proportion of patients who succumb to an illness among the total confirmed cases of that condition, quantifying its biological severity.',
        options: [
          {
            id: 'case-fatality-rate',
            label: 'case fatality',
            explanation: 'Correct: the case fatality rate measures the percentage of deaths among confirmed cases, directly expressing biological virulence.',
          },
          {
            id: 'crude-birth-rate',
            label: 'crude birth',
            explanation: 'Incorrect: the crude birth rate tallies live births per 1,000 total population members.',
          },
          {
            id: 'general-incidence-rate',
            label: 'cumulative incidence',
            explanation: 'Incorrect: incidence reflects the rate of new case occurrence within a disease-free cohort over time.',
          },
          {
            id: 'proportional-morbidity-rate',
            label: 'proportional morbidity',
            explanation: 'Incorrect: proportional morbidity quantifies the fraction of total medical consultations attributed to a specific diagnosis.',
          },
        ],
      },
    },
  },
});

export const epidemiologySurveillanceLesson = lessonSchema.parse({
  id: 'epidemiology-surveillance',
  revision: 1,
  questionId: 'epidemiology-surveillance-q1',
  correctOptionId: 'notify-upon-clinical-suspicion',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'openstax-stats-surveillance',
      title: 'OpenStax Introductory Statistics',
      url: 'https://openstax.org/books/introductory-statistics/pages/1-1-definitions-of-statistics-probability-and-key-terms',
      section: 'Chapter 1.1 · Definitions of Key Terms: Epidemiological surveillance, registries, and outbreak tracking',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Como as autoridades sanitárias descobrem um surto de intoxicação ou uma nova epidemia viral antes mesmo que os exames laboratoriais fiquem prontos?',
      title: 'Vigilância epidemiológica e investigação de surtos',
      description: 'Explore a notificação compulsória de agravos, o princípio da notificação pela suspeita clínica e as curvas epidêmicas na investigação de surtos.',
      objective: 'Definir as etapas da vigilância epidemiológica, aplicar as regras de notificação compulsória imediata e interpretar curvas epidêmicas.',
      stages: [
        {
          id: 'surveillance-principles',
          title: 'Princípios e objetivos da vigilância epidemiológica',
          paragraphs: [
            'A vigilância epidemiológica é o conjunto contínuo de atividades de coleta sistemática, consolidação, análise e interpretação de dados de saúde essenciais para o planejamento e execução das ações de saúde pública.',
            'O princípio fundamental que orienta toda a vigilância é o lema "informação para a ação": dados que não chegam a tempo de deflagrar medidas de bloqueio vacinal, isolamento de contato ou interdição sanitária perdem sua finalidade operacional primária.',
          ],
          takeaway: 'Vigilância epidemiológica coleta e analisa dados continuamente com o objetivo de subsidiar ações imediatas de saúde pública.',
          diagram: 'incidence',
        },
        {
          id: 'mandatory-notification',
          title: 'Lista de notificação compulsória e prazos',
          paragraphs: [
            'A lista nacional de notificação compulsória estabelece doenças, agravos e eventos de relevância de saúde pública cuja comunicação às autoridades é obrigatória para todos os profissionais de saúde.',
            'A regra de ouro da notificação é que ela deve ser feita com base na simples suspeita clínica fundamentada, sem jamais aguardar confirmação laboratorial diagnóstica. Casos graves ou de alto potencial de disseminação (como botulismo, cólera, febre amarela e sarampo) exigem notificação imediata (em até 24 horas), enquanto agravos endêmicos estáveis seguem fluxo de notificação semanal.',
          ],
          takeaway: 'Notificação compulsória deve ser realizada pela simples suspeita clínica em até 24 horas para emergências de saúde pública.',
          diagram: 'phases',
        },
        {
          id: 'outbreak-investigation',
          title: 'Investigação de surtos e curvas epidêmicas',
          paragraphs: [
            'Um surto ocorre quando o número de casos de uma doença ultrapassa significativamente o limite superior esperado (endemia) em uma população e período específicos.',
            'A curva epidêmica é o histograma que plota os casos ao longo do tempo. Em um surto de fonte pontual ou comum (como intoxicação alimentar em um casamento), observa-se uma subida abrupta com pico único acentuado e queda rápida dentro de um único período de incubação. Em uma epidemia propagada (como influenza ou sarampo), ocorrem múltiplos picos sucessivos e progressivos gerados pela transmissão pessoa a pessoa.',
          ],
          takeaway: 'Curva de fonte pontual tem pico único agudo; curva propagada exibe múltiplos picos sucessivos por contágio entre indivíduos.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Ao atender um paciente com febre súbita, icterícia e hemorragia com suspeita clínica fundamentada de febre amarela silvestre, qual deve ser a conduta médica correta quanto à notificação compulsória?',
        options: [
          {
            id: 'notify-upon-clinical-suspicion',
            label: 'Notificar imediatamente a autoridade sanitária (em até 24 horas) pela simples suspeita clínica',
            explanation: 'Correto: a notificação compulsória imediata deve ser realizada perante a suspeita clínica inicial, dispensando a espera pelos resultados de exames confirmatórios.',
          },
          {
            id: 'wait-pcr-confirmation',
            label: 'Aguardar o laudo do teste de PCR molecular ou sorologia de referência antes de notificar',
            explanation: 'Incorreto: atrasar a notificação para esperar laudos laboratoriais inviabiliza as medidas urgentes de bloqueio vacinal e controle vetorial.',
          },
          {
            id: 'wait-clinical-discharge',
            label: 'Preencher a ficha de notificação apenas no momento da alta hospitalar ou transferência',
            explanation: 'Incorreto: a notificação deve ser feita nas primeiras 24 horas da suspeita, sem depender do desfecho do internamento.',
          },
          {
            id: 'notify-only-if-fatal',
            label: 'Realizar a comunicação epidemiológica apenas se o paciente evoluir para óbito',
            explanation: 'Incorreto: a vigilância visa conter a disseminação da doença enquanto o paciente está vivo e em fase virêmica.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology & biostatistics',
      hook: 'How do public health epidemiologists detect an emerging viral outbreak or waterborne pathogen days before reference laboratories return confirmation?',
      title: 'Epidemiological Surveillance and Outbreak Investigation',
      description: 'Explore mandatory reporting mandates, the clinical suspicion reporting rule, and epidemic curve interpretation in outbreak investigations.',
      objective: 'Define the components of epidemiological surveillance, apply mandatory reporting timelines, and interpret epidemic curves.',
      stages: [
        {
          id: 'surveillance-principles',
          title: 'Principles and objectives of public health surveillance',
          paragraphs: [
            'Public health surveillance entails the ongoing systematic collection, consolidation, analysis, and dissemination of vital health data required for effective health action.',
            'The operational philosophy governing all surveillance programs is "information for action": data collected without timely translation into ring vaccinations, quarantine measures, or contact tracing lose their primary utilitarian purpose.',
          ],
          takeaway: 'Epidemiological surveillance continuously tracks population health data to guide rapid, actionable public health interventions.',
          diagram: 'incidence',
        },
        {
          id: 'mandatory-notification',
          title: 'Mandatory notification lists and reporting timelines',
          paragraphs: [
            'National disease reporting mandates obligate healthcare professionals to formally report designated infectious diseases, toxic exposures, and potential epidemics to authorities.',
            'The absolute gold standard in surveillance is that notification must occur upon credible clinical suspicion, without delaying for confirmatory laboratory serologies or molecular PCR tests. High-threat diseases (such as botulism, cholera, yellow fever, and measles) demand immediate reporting (within 24 hours), whereas endemic, manageable conditions are reported on routine weekly cycles.',
          ],
          takeaway: 'Mandatory reporting must occur upon clinical suspicion alone within 24 hours for public health emergencies.',
          diagram: 'phases',
        },
        {
          id: 'outbreak-investigation',
          title: 'Outbreak investigation and epidemic curves',
          paragraphs: [
            'An outbreak is confirmed when the incidence of a condition significantly exceeds baseline endemic thresholds within a discrete population and timeframe.',
            'The epidemic curve is a histogram plotting incident cases against onset times. In point-source common outbreaks (such as food poisoning at a catered banquet), the curve displays a steep unimodal peak that resolves within one incubation period. In propagated person-to-person epidemics (such as influenza or measles), the curve displays multiple progressive, widening waves of transmission.',
          ],
          takeaway: 'Point-source curves exhibit a single steep peak; propagated epidemics show successive progressive waves from interpersonal transmission.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'When managing a patient with acute jaundice, hemorrhage, and high fever presenting with strong clinical suspicion of yellow fever, what is the mandatory reporting responsibility of the treating physician?',
        options: [
          {
            id: 'notify-upon-clinical-suspicion',
            label: 'Immediately notify public health authorities (within 24 hours) based on clinical suspicion alone',
            explanation: 'Correct: immediate mandatory notification requires reporting upon initial clinical suspicion without waiting for laboratory confirmation.',
          },
          {
            id: 'wait-pcr-confirmation',
            label: 'Withhold notification until definitive RT-PCR or serological confirmation is finalized',
            explanation: 'Incorrect: delaying notification while awaiting laboratory assays forfeits the critical window for ring vaccination and vector control.',
          },
          {
            id: 'wait-clinical-discharge',
            label: 'Complete surveillance documentation only at the time of final hospital discharge',
            explanation: 'Incorrect: notification must occur within the first 24 hours of encounter, independent of inpatient clinical trajectory.',
          },
          {
            id: 'notify-only-if-fatal',
            label: 'Submit epidemiologic notifications exclusively if the infection proves fatal',
            explanation: 'Incorrect: surveillance exists to prevent onward transmission while the patient is actively viremic, not merely to count deaths.',
          },
        ],
      },
    },
  },
});

export const epidemiologyBiasConfoundingLesson = lessonSchema.parse({
  id: 'epidemiology-bias-confounding',
  revision: 1,
  questionId: 'epidemiology-bias-confounding-q1',
  correctOptionId: 'recall-information-bias',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'openstax-stats-bias',
      title: 'OpenStax Introductory Statistics',
      url: 'https://openstax.org/books/introductory-statistics/pages/1-4-experimental-design-and-ethics',
      section: 'Chapter 1.4 · Experimental Design: Selection bias, measurement bias, and confounding variables',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Como um estudo médico pode encontrar uma forte associação estatística entre café e câncer que simplesmente não existe na vida real?',
      title: 'Validade interna em pesquisa: vieses e fatores de confusão',
      description: 'Diferencie erros sistemáticos (viés de seleção e de informação) de erros aleatórios e aprenda a identificar e controlar variáveis de confusão.',
      objective: 'Distinguir viés de seleção, viés de informação e fatores de confusão e apontar estratégias para neutralizá-los no desenho e na análise.',
      stages: [
        {
          id: 'selection-bias',
          title: 'Viés de seleção: distorções no recrutamento amostral',
          paragraphs: [
            'O viés de seleção ocorre quando os indivíduos incluídos no estudo diferem sistematicamente da população-alvo quanto à relação entre a exposição e o desfecho.',
            'Exemplos notáveis incluem o viés de Berkson (quando a seleção de controles em ambiente hospitalar distorce a prevalência de exposições devido a múltiplas comorbidades) e o efeito do trabalhador sadio (onde trabalhadores ativos exibem morbidade artificialmente menor do que a população geral). Em coortes, perdas desiguais de seguimento entre expostos e não expostos introduzem viés de atrito.',
          ],
          takeaway: 'Viés de seleção decorre de critérios distorcidos de inclusão de participantes, ameaçando a validade do estudo.',
          diagram: 'stats',
        },
        {
          id: 'information-bias',
          title: 'Viés de informação (aferição) e viés de memória',
          paragraphs: [
            'O viés de informação (ou de mensuração) surge quando as variáveis de interesse são medidas ou classificadas de forma incorreta ou assimétrica entre os grupos comparados.',
            'O viés de memória (recall bias) é o exemplo mais frequente em estudos de caso-controle: indivíduos com a doença (casos) tendem a lembrar e relatar exposições passadas com muito mais detalhamento e suspeição do que controles saudáveis. O mascaramento duplo-cego e instrumentos padronizados de medição protegem os estudos contra esse erro sistemático.',
          ],
          takeaway: 'Viés de memória faz casos lembrarem de exposições passadas de forma diferente de controles sadios, distorcendo medidas de efeito.',
          diagram: 'calculation',
        },
        {
          id: 'confounding-variables',
          title: 'Fatores de confusão: a terceira variável oculta',
          paragraphs: [
            'Uma variável atua como fator de confusão se preenche simultaneamente três critérios: está associada à exposição, é um fator de risco independente para o desfecho e não é um elo intermediário na cadeia causal.',
            'O exemplo clássico é o tabagismo atuando como confundidor entre o consumo de café e o infarto agudo do miocárdio. Fatores de confusão podem ser neutralizados na fase de planejamento (por randomização, restrição amostral ou pareamento de casos e controles) ou na fase analítica (por estratificação e modelos de regressão multivariada).',
          ],
          takeaway: 'Variável de confusão associa-se à exposição e ao desfecho sem ser passo intermediário; controla-se com randomização ou regressão.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em um estudo de caso-controle investigando a ingestão materna de medicamentos na gravidez e malformações congênitas, mães de bebês com malformação lembram e relatam o uso de fármacos com muito mais minúcia do que mães de bebês normais. Esse erro sistemático é um exemplo clássico de:',
        options: [
          {
            id: 'recall-information-bias',
            label: 'Viés de memória (subtipo de viés de informação)',
            explanation: 'Correto: o viés de memória ocorre quando a recordação de eventos passados é influenciada pela presença ou ausência da doença na prole.',
          },
          {
            id: 'berkson-selection-bias',
            label: 'Viés de Berkson (viés de admissão hospitalar)',
            explanation: 'Incorreto: o viés de Berkson decorre de taxas desiguais de hospitalização entre exposições na seleção hospitalar.',
          },
          {
            id: 'healthy-worker-effect',
            label: 'Efeito do trabalhador sadio',
            explanation: 'Incorreto: esse efeito compara trabalhadores ativos contra a população geral mais adoecida.',
          },
          {
            id: 'lead-time-screening-bias',
            label: 'Viés de tempo de antecipação (lead-time bias)',
            explanation: 'Incorreto: o lead-time bias decorre de diagnóstico precoce em triagens que prolonga artificialmente o tempo de sobrevida aparente.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology & biostatistics',
      hook: 'How can a clinical research paper find a strong statistical association between coffee drinking and lung cancer when coffee has zero oncogenic potential?',
      title: 'Internal Validity in Research: Bias and Confounding',
      description: 'Differentiate systematic errors (selection and information bias) from random error, and identify and adjust for confounding variables.',
      objective: 'Distinguish selection bias, measurement bias, and confounding, identifying strategies to neutralize them in study design and statistical modeling.',
      stages: [
        {
          id: 'selection-bias',
          title: 'Selection bias: Distortions in participant recruitment',
          paragraphs: [
            'Selection bias occurs when the procedures used to enroll participants generate a systematic difference between the study sample and the target population regarding the exposure-outcome association.',
            'Prominent examples include Berkson’s bias (where selecting control cohorts from hospitalized populations distorts exposure rates due to multiple comorbidities) and the healthy worker effect (where employed cohorts display artificially lower mortality than the general population). In cohort designs, differential loss to follow-up causes attrition bias.',
          ],
          takeaway: 'Selection bias stems from distorted sample recruitment criteria, compromising internal validity.',
          diagram: 'stats',
        },
        {
          id: 'information-bias',
          title: 'Information (measurement) bias and recall disparity',
          paragraphs: [
            'Information (or measurement) bias occurs when variables of interest are misclassified, measured inaccurately, or reported unevenly across comparison arms.',
            'Recall bias is exceptionally common in retrospective case-control investigations: patients who suffered an adverse outcome (cases) scrutinize their past exposures far more intensely and anxiously than healthy control subjects. Double-blind masking and standardized objective exposure metrics mitigate this vulnerability.',
          ],
          takeaway: 'Recall bias causes cases to remember historical exposures differently from healthy controls, artificially inflating odds ratios.',
          diagram: 'calculation',
        },
        {
          id: 'confounding-variables',
          title: 'Confounding variables: The hidden third factor',
          paragraphs: [
            'A variable qualifies as a confounder only if it fulfills three mandatory criteria: it is associated with the exposure, it is an independent risk factor for the outcome, and it does not lie along the causal pathway.',
            'A textbook example is cigarette smoking confounding the observed association between coffee consumption and coronary heart disease. Confounding can be eliminated during study design (via randomization, strict restriction, or matched case-control pairing) or during statistical analysis (via stratified analysis and multivariable regression).',
          ],
          takeaway: 'A confounder links to both exposure and outcome without being an intermediate step; it is controlled by randomization or multivariable regression.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In a retrospective case-control study investigating maternal pharmaceutical use and congenital limb defects, mothers of affected infants recall and report past medication use in far greater detail than mothers of healthy infants. This systematic error represents:',
        options: [
          {
            id: 'recall-information-bias',
            label: 'Recall bias (a subtype of information bias)',
            explanation: 'Correct: recall bias occurs when recollection of historical exposures is differentially influenced by the presence of a tragic clinical outcome.',
          },
          {
            id: 'berkson-selection-bias',
            label: 'Berkson’s bias (hospital admission rate bias)',
            explanation: 'Incorrect: Berkson’s bias stems from unequal hospitalization rates among cases and controls during recruitment.',
          },
          {
            id: 'healthy-worker-effect',
            label: 'Healthy worker effect',
            explanation: 'Incorrect: this bias compares employed workers against the general population, which includes disabled and morbid individuals.',
          },
          {
            id: 'lead-time-screening-bias',
            label: 'Lead-time screening bias',
            explanation: 'Incorrect: lead-time bias occurs in screening tests that artificially advance the diagnosis date without prolonging true biological survival.',
          },
        ],
      },
    },
  },
});

export const epidemiologyMetaAnalysisLesson = lessonSchema.parse({
  id: 'epidemiology-meta-analysis',
  revision: 1,
  questionId: 'epidemiology-meta-analysis-q1',
  correctOptionId: 'pooled-summary-effect',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'openstax-stats-meta-analysis',
      title: 'OpenStax Introductory Statistics',
      url: 'https://openstax.org/books/introductory-statistics/pages/10-1-comparing-two-independent-population-means',
      section: 'Chapter 10.1 · Independent Population Means: Meta-analytic pooling, effect sizes, and heterogeneity tests',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Como os médicos conseguem decidir se um novo tratamento funciona quando dez ensaios clínicos pequenos mostram resultados conflitantes entre si?',
      title: 'Medicina baseada em evidências: revisões sistemáticas e metanálise',
      description: 'Compreenda o topo da pirâmide de evidências: o rigor de uma revisão sistemática, o pooling estatístico da metanálise e a leitura do forest plot.',
      objective: 'Interpretar gráficos de forest plot em metanálises e avaliar a heterogeneidade estatística entre ensaios clínicos com o teste I².',
      stages: [
        {
          id: 'systematic-reviews',
          title: 'Revisão sistemática versus revisão narrativa',
          paragraphs: [
            'Enquanto uma revisão narrativa tradicional reflete a opinião subjetiva e a seleção arbitrária de artigos pelo autor, a revisão sistemática segue um protocolo científico transparente, pré-registrado e estritamente reprodutível.',
            'Ela executa buscas exaustivas em bases indexadas (como PubMed, Embase e Cochrane Central), aplica critérios explícitos de inclusão/exclusão em pares e avalia criticamente o risco de viés metodológico de cada ensaio clínico com ferramentas padronizadas (como o Cochrane RoB 2).',
          ],
          takeaway: 'A revisão sistemática adota critérios pré-definidos e metodologia reprodutível para reunir todas as evidências disponíveis.',
          diagram: 'phases',
        },
        {
          id: 'meta-analysis-pooling',
          title: 'Metanálise e combinação estatística de efeitos',
          paragraphs: [
            'A metanálise é o método estatístico que sintetiza quantitativamente os resultados de múltiplos estudos independentes em uma estimativa única de efeito global resumido (pooled effect).',
            'Ao combinar os tamanhos amostrais, a metanálise aumenta consideravelmente o poder estatístico e a precisão do intervalo de confiança. Utilizam-se modelos de efeitos fixos (quando se assume que todos os estudos medem exatamente o mesmo efeito populacional) ou modelos de efeitos aleatórios (quando há variabilidade metodológica ou clínica genuína entre as populações investigadas).',
          ],
          takeaway: 'A metanálise combina amostras estatisticamente para gerar uma estimativa de efeito global com maior precisão e poder.',
          diagram: 'stats',
        },
        {
          id: 'forest-plot-heterogeneity',
          title: 'O gráfico de forest plot e o índice I²',
          paragraphs: [
            'O forest plot é a representação visual clássica de uma metanálise. Cada estudo é ilustrado por uma linha horizontal (representando seu IC 95%) e um quadrado central (cuja área é proporcional ao peso estatístico daquele ensaio no modelo).',
            'Na base do gráfico, o efeito combinado de todos os estudos é exibido na forma de um diamante (losango): a largura lateral do diamante representa o IC 95% global e o vértice superior/inferior indica o ponto central da estimativa resumida. A heterogeneidade estatística entre os estudos é quantificada pela estatística I² (I² > 50% indica substancial heterogeneidade).',
          ],
          takeaway: 'No forest plot, o diamante resume o efeito global; a largura do diamante é seu IC 95% e o índice I² quantifica a heterogeneidade.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em um gráfico de forest plot de uma metanálise de ensaios clínicos, o que representa a figura geométrica de um diamante (losango) desenhada na extremidade inferior do diagrama?',
        options: [
          {
            id: 'pooled-summary-effect',
            label: 'A estimativa do efeito global combinado (pooled) e a largura de seu intervalo de confiança de 95%',
            explanation: 'Correto: os vértices do diamante representam o ponto central do tamanho de efeito agrupado, e suas pontas laterais definem a amplitude do IC 95% somatório.',
          },
          {
            id: 'largest-single-trial',
            label: 'O resultado isolado do ensaio clínico que possuiu o maior tamanho amostral',
            explanation: 'Incorreto: o maior ensaio clínico individual é representado pelo maior quadrado nas linhas horizontais superiores.',
          },
          {
            id: 'publication-bias-funnel',
            label: 'O índice visual de assimetria para cálculo de viés de publicação no funil',
            explanation: 'Incorreto: a avaliação de viés de publicação é realizada pelo gráfico de funil (funnel plot), não pelo diamante do forest plot.',
          },
          {
            id: 'heterogeneity-null-line',
            label: 'A linha vertical central de nulidade estatística onde o efeito é igual a zero ou um',
            explanation: 'Incorreto: a linha vertical contínua representa a linha de nulidade (efeito nulo), distinta do diamante do resultado.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology & biostatistics',
      hook: 'How can clinicians reach a definitive treatment decision when a dozen small clinical trials report conflicting and inconclusive findings?',
      title: 'Evidence-Based Medicine: Systematic Reviews and Meta-Analysis',
      description: 'Understand the peak of the evidence pyramid: systematic review methodology, statistical pooling, and forest plot interpretation.',
      objective: 'Interpret meta-analytic forest plots and evaluate between-study statistical heterogeneity using the I² metric.',
      stages: [
        {
          id: 'systematic-reviews',
          title: 'Systematic reviews versus narrative overviews',
          paragraphs: [
            'Unlike traditional narrative reviews that reflect subjective opinions and selective literature citations, a systematic review follows a transparent, pre-registered, and reproducible scientific protocol.',
            'It deploys comprehensive literature searches across major index databases (PubMed, Embase, Cochrane Central), enforces rigorous eligibility criteria in duplicate, and rigorously grades internal risk of bias for each included trial using standardized tools (such as the Cochrane RoB 2 framework).',
          ],
          takeaway: 'Systematic reviews apply pre-specified, reproducible search strategies and critical appraisal to assemble all available trials.',
          diagram: 'phases',
        },
        {
          id: 'meta-analysis-pooling',
          title: 'Meta-analysis and quantitative statistical pooling',
          paragraphs: [
            'Meta-analysis is the quantitative statistical synthesis of results from independent clinical trials into a single consolidated summary estimate (pooled effect size).',
            'By aggregating participant sample sizes, meta-analyses dramatically amplify statistical power and tighten confidence interval precision. Investigators employ fixed-effects models (assuming a single underlying true treatment effect) or random-effects models (accounting for genuine clinical or methodological heterogeneity across distinct patient populations).',
          ],
          takeaway: 'Meta-analysis quantitatively pools data across studies to augment sample size, precision, and statistical power.',
          diagram: 'stats',
        },
        {
          id: 'forest-plot-heterogeneity',
          title: 'The forest plot graphic and I² heterogeneity',
          paragraphs: [
            'The forest plot is the standard graphical presentation of a meta-analysis. Each independent study is depicted by a horizontal line (representing its 95% confidence interval) and a central box (whose area is proportional to the trial’s statistical weight).',
            'At the base of the plot, the aggregated synthesis of all trials appears as a diamond: the lateral points define the pooled 95% CI while the top/bottom vertices mark the summary point estimate. Between-study heterogeneity is formally quantified using the I² statistic (with I² > 50% indicating substantial inconsistency).',
          ],
          takeaway: 'On a forest plot, the bottom diamond represents the pooled effect size, its lateral tips mark the 95% CI, and I² reflects heterogeneity.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'On a meta-analytic forest plot summarizing randomized clinical trials, what is the meaning of the diamond icon situated at the bottom of the display?',
        options: [
          {
            id: 'pooled-summary-effect',
            label: 'The pooled summary effect estimate and the boundaries of its combined 95% confidence interval',
            explanation: 'Correct: the diamond’s vertical center reflects the aggregated pooled point estimate, while its horizontal width defines the cumulative 95% confidence interval.',
          },
          {
            id: 'largest-single-trial',
            label: 'The isolated point estimate of the individual clinical trial with the largest sample size',
            explanation: 'Incorrect: the largest individual trial is depicted by the largest square along the upper horizontal study lines.',
          },
          {
            id: 'publication-bias-funnel',
            label: 'The mathematical regression line of a funnel plot testing for publication bias',
            explanation: 'Incorrect: publication bias is evaluated using an inverted funnel plot, not the summary diamond of a forest plot.',
          },
          {
            id: 'heterogeneity-null-line',
            label: 'The vertical line of no effect where the relative risk equals 1.0 or mean difference equals 0',
            explanation: 'Incorrect: the solid vertical axis represents the line of null effect, entirely distinct from the calculated summary diamond.',
          },
        ],
      },
    },
  },
});
