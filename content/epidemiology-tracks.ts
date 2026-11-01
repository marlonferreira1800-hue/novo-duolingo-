import { lessonSchema } from '../src/contracts/learning';

export const epidemiologyDiagnosticTestsLesson = lessonSchema.parse({
  id: 'epidemiology-diagnostic-tests',
  revision: 1,
  questionId: 'epidemiology-diagnostic-sensitivity',
  correctOptionId: 'high-sensitivity',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'openstax-intro-stats-probability',
      title: 'OpenStax Introductory Statistics',
      url: 'https://openstax.org/books/introductory-statistics/pages/3-1-terminology',
      section: 'Chapter 3.1 · Probability Topics: Contingency tables, conditional probabilities and testing',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Se um teste laboratorial dá positivo para uma doença rara, qual é a chance real de o paciente realmente estar doente?',
      title: 'Testes diagnósticos: sensibilidade, especificidade e predição',
      description: 'Domine a interpretação de sensibilidade para rastreamento, especificidade para confirmação e a dependência do VPP quanto à prevalência.',
      objective: 'Distinguir sensibilidade e especificidade e prever como a prevalência populacional altera os valores preditivos positivo e negativo.',
      stages: [
        {
          id: 'sensitivity-screening',
          title: 'Sensibilidade: o teste ideal para rastreamento',
          paragraphs: [
            'A sensibilidade é a probabilidade de um teste resultar positivo quando o paciente é verdadeiramente portador da doença (Verdadeiros Positivos / Total de Doentes).',
            'Testes com altíssima sensibilidade produzem pouquíssimos falsos-negativos. Por essa razão, são os instrumentos de escolha no rastreamento (screening) populacional: se o resultado for negativo, afasta-se a doença com segurança.',
          ],
          takeaway: 'Alta sensibilidade evita falsos-negativos e é essencial para rastrear doenças graves precocemente.',
          diagram: 'stats',
        },
        {
          id: 'specificity-confirmation',
          title: 'Especificidade: o teste de confirmação diagnóstica',
          paragraphs: [
            'A especificidade mede a capacidade do teste em identificar corretamente os indivíduos sadios (Verdadeiros Negativos / Total de Não Doentes).',
            'Testes altamente específicos raramente geram falsos-positivos. Eles são ideais para etapas confirmatórias: se o teste der positivo, confirma-se o diagnóstico sem expor o paciente a tratamentos tóxicos desnecessários.',
          ],
          takeaway: 'Alta especificidade evita falsos-positivos e confirma diagnósticos suspeitos com segurança.',
          diagram: 'stats',
        },
        {
          id: 'predictive-values',
          title: 'Valores preditivos positivo (VPP) e negativo (VPN)',
          paragraphs: [
            'Enquanto sensibilidade e especificidade são propriedades intrínsecas do exame, os valores preditivos dependem diretamente da prevalência da doença na população testada.',
            'Em populações com baixa prevalência (doenças raras), o Valor Preditivo Positivo (VPP) cai drasticamente, pois a maioria dos testes positivos corresponderá a falsos-positivos.',
          ],
          takeaway: 'O VPP sobe com o aumento da prevalência; em doenças raras, a maioria dos positivos pode ser falso-positivo.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em um programa de triagem populacional em massa para detecção precoce de uma infecção grave e tratável, qual propriedade o teste inicial deve priorizar para evitar que pessoas infectadas fiquem sem diagnóstico?',
        options: [
          {
            id: 'high-sensitivity',
            label: 'Alta sensibilidade, minimizando a ocorrência de resultados falsos-negativos',
            explanation: 'Correto: exames de triagem exigem alta sensibilidade para detectar o maior número possível de doentes, evitando que indivíduos infectados recebam falso laudo de normalidade.',
          },
          {
            id: 'high-specificity',
            label: 'Alta especificidade, minimizando a taxa de falsos-positivos na primeira etapa',
            explanation: 'Incorreto: a alta especificidade é reservada prioritariamente aos testes confirmatórios secundários para evitar falsos-positivos.',
          },
          {
            id: 'low-negative-predictive',
            label: 'Baixo valor preditivo negativo para descartar a doença em populações de risco',
            explanation: 'Incorreto: em triagens deseja-se altíssimo valor preditivo negativo para que um teste não reagente garanta ausência de doença.',
          },
          {
            id: 'high-false-positive-rate',
            label: 'Elevada proporção deliberada de resultados falso-positivos em amostras normais',
            explanation: 'Incorreto: taxas excessivas de falso-positivos geram ansiedade e custos desnecessários, embora sejam mais toleráveis na triagem do que falsos-negativos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology and biostatistics',
      hook: 'If a lab test comes back positive for an uncommon condition, what are the actual odds that the patient truly has the disease?',
      title: 'Diagnostic Tests: Sensitivity, Specificity, and Predictive Values',
      description: 'Master sensitivity for population screening, specificity for disease confirmation, and how disease prevalence shapes PPV.',
      objective: 'Distinguish sensitivity from specificity and calculate how background prevalence governs positive and negative predictive values.',
      stages: [
        {
          id: 'sensitivity-screening',
          title: 'Sensitivity: The screening test priority',
          paragraphs: [
            'Sensitivity is the probability that a diagnostic test will be positive given that the patient truly has the target disease (True Positives / Total Diseased).',
            'Tests with very high sensitivity produce very few false-negative results. Consequently, they serve as ideal frontline screening tests: a negative test reliably rules out the condition.',
          ],
          takeaway: 'High sensitivity minimizes false negatives, making it indispensable for broad early screening.',
          diagram: 'stats',
        },
        {
          id: 'specificity-confirmation',
          title: 'Specificity: The confirmatory standard',
          paragraphs: [
            'Specificity measures the test’s ability to correctly identify healthy, non-diseased individuals (True Negatives / Total Non-Diseased).',
            'Highly specific tests produce few false-positive results. They are utilized in subsequent confirmatory steps: a positive test reliably rules in the disease without triggering harmful overtreatment.',
          ],
          takeaway: 'High specificity avoids false positives and provides definitive confirmation of suspected diagnoses.',
          diagram: 'stats',
        },
        {
          id: 'predictive-values',
          title: 'Positive (PPV) and negative (NPV) predictive values',
          paragraphs: [
            'While sensitivity and specificity are fixed intrinsic test parameters, predictive values depend intimately on the underlying disease prevalence.',
            'In low-prevalence settings (rare disorders), the Positive Predictive Value (PPV) plummets, meaning the majority of positive screening results are false positives.',
          ],
          takeaway: 'PPV increases with higher prevalence; in rare conditions, most positive screens represent false positives.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In a widespread population screening program designed to detect an early, curable serious infection, which parameter must the primary frontline test prioritize to avoid missing diseased patients?',
        options: [
          {
            id: 'high-sensitivity',
            label: 'High sensitivity, thereby minimizing false-negative test results',
            explanation: 'Correct: screening assays must possess high sensitivity to catch nearly all true cases, ensuring that diseased patients are not falsely cleared as disease-free.',
          },
          {
            id: 'high-specificity',
            label: 'High specificity, thereby eliminating all initial false positives',
            explanation: 'Incorrect: high specificity is prioritized in subsequent confirmatory testing to rule in the diagnosis after an initial sensitive screen.',
          },
          {
            id: 'low-negative-predictive',
            label: 'Low negative predictive value when evaluating high-risk populations',
            explanation: 'Incorrect: screening tests ideally have a very high negative predictive value so that a negative result reliably confirms health.',
          },
          {
            id: 'high-false-positive-rate',
            label: 'Deliberately elevated false-positive rate across healthy baseline samples',
            explanation: 'Incorrect: excessive false positives inflate anxiety and diagnostic costs, even though false negatives are clinically worse in screening.',
          },
        ],
      },
    },
  },
});

export const epidemiologyStudyDesignsLesson = lessonSchema.parse({
  id: 'epidemiology-study-designs',
  revision: 1,
  questionId: 'epidemiology-study-cohort',
  correctOptionId: 'cohort-study',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'openstax-intro-stats-sampling',
      title: 'OpenStax Introductory Statistics',
      url: 'https://openstax.org/books/introductory-statistics/pages/1-4-experimental-design-and-ethics',
      section: 'Chapter 1.4 · Experimental Design and Ethics: Observational studies vs controlled experiments',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Como provar que o tabagismo causa câncer de pulmão sem forçar voluntários a fumar em um laboratório?',
      title: 'Desenhos de estudo em epidemiologia clínica',
      description: 'Conheça a hierarquia das evidências: estudos transversais, caso-controle, coortes prospectivas e ensaios clínicos randomizados.',
      objective: 'Classificar os principais delineamentos epidemiológicos e identificar o estudo de coorte para cálculo de incidência.',
      stages: [
        {
          id: 'observational-cross-case',
          title: 'Estudos observacionais: transversal e caso-controle',
          paragraphs: [
            'O estudo transversal mede simultaneamente exposição e desfecho em um único momento no tempo, sendo útil para estimar prevalência, mas incapaz de estabelecer causalidade temporal.',
            'O estudo caso-controle parte de pacientes que já apresentam o desfecho (casos) e os compara a indivíduos sadios (controles), investigando retrospectivamente exposições passadas. É excelente para doenças raras.',
          ],
          takeaway: 'Transversal estima prevalência num ponto único; caso-controle investiga exposições passadas em doenças raras.',
          diagram: 'incidence',
        },
        {
          id: 'cohort-prospective',
          title: 'Estudo de coorte: seguimento longitudinal da exposição',
          paragraphs: [
            'No estudo de coorte, selecionam-se indivíduos livres da doença classificados de acordo com o status de exposição a um fator de risco.',
            'Os grupos expostos e não expostos são acompanhados ao longo do tempo (prospectivamente ou retrospectivamente) para aferir a incidência de novos casos e calcular o Risco Relativo (RR).',
          ],
          takeaway: 'Estudos de coorte partem da exposição em direção ao desfecho, permitindo medir a incidência real no tempo.',
          diagram: 'incidence',
        },
        {
          id: 'rct-interventional',
          title: 'Ensaio clínico randomizado (ECR): o padrão-ouro intervencionista',
          paragraphs: [
            'Diferente dos estudos observacionais, o ensaio clínico randomizado é um estudo experimental em que o pesquisador aloca ativamente a intervenção de forma aleatória (randomização).',
            'A randomização aliada ao mascaramento (duplo-cego) neutraliza variáveis de confusão conhecidas e desconhecidas, estabelecendo o nível mais robusto de causalidade para eficácia de tratamentos.',
          ],
          takeaway: 'ECR distribui intervenções aleatoriamente, controlando variáveis de confusão para demonstrar causalidade.',
          diagram: 'incidence',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual delineamento epidemiológico seleciona uma população inicialmente livre da doença de interesse com base no status de exposição a um fator e a acompanha ao longo do tempo para aferir a incidência de novos casos?',
        options: [
          {
            id: 'cohort-study',
            label: 'Estudo de coorte',
            explanation: 'Correto: a coorte parte da exposição e segue os participantes longitudinalmente no tempo para mensurar diretamente a incidência de desfechos clínicos.',
          },
          {
            id: 'case-control-study',
            label: 'Estudo de caso-controle',
            explanation: 'Incorreto: o caso-controle seleciona participantes com base na presença ou ausência da doença (desfecho) e olha para o passado para avaliar exposições.',
          },
          {
            id: 'cross-sectional-study',
            label: 'Estudo transversal',
            explanation: 'Incorreto: o estudo transversal coleta dados de exposição e doença simultaneamente em uma única fotografia temporal, sem seguimento longitudinal.',
          },
          {
            id: 'ecological-study',
            label: 'Estudo ecológico',
            explanation: 'Incorreto: estudos ecológicos analisam dados agregados de populações ou regiões geográficas inteiras, sem mensuração no nível individual.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology and biostatistics',
      hook: 'How can we prove that smoking causes lung cancer without ethically forcing research subjects to smoke in a laboratory?',
      title: 'Study Designs in Clinical Epidemiology',
      description: 'Explore the hierarchy of evidence: cross-sectional snapshots, case-control analyses, prospective cohorts, and randomized trials.',
      objective: 'Classify fundamental epidemiological study designs and recognize cohort studies as the primary method to calculate incidence.',
      stages: [
        {
          id: 'observational-cross-case',
          title: 'Observational designs: Cross-sectional and case-control',
          paragraphs: [
            'Cross-sectional studies evaluate exposure and outcome simultaneously at a single point in time, measuring prevalence effectively without confirming temporal sequence.',
            'Case-control studies identify subjects with the disease (cases) and without the disease (controls), looking backward retrospectively to assess previous exposures. This design is optimal for rare diseases.',
          ],
          takeaway: 'Cross-sectional measures point prevalence; case-control looks backward from disease status to past exposures.',
          diagram: 'incidence',
        },
        {
          id: 'cohort-prospective',
          title: 'Cohort study: Longitudinal tracking from exposure to outcome',
          paragraphs: [
            'In a cohort study, disease-free individuals are enrolled and categorized according to whether they are exposed or unexposed to a potential determinant.',
            'Both cohorts are monitored longitudinally over time to document the occurrence of incident disease cases, directly enabling calculation of Relative Risk (RR).',
          ],
          takeaway: 'Cohorts track subjects forward from exposure to new disease onset, yielding true incidence rates.',
          diagram: 'incidence',
        },
        {
          id: 'rct-interventional',
          title: 'Randomized controlled trial (RCT): The interventional gold standard',
          paragraphs: [
            'Unlike observational studies, an RCT is an experimental trial in which the investigator actively allocates therapies through randomization.',
            'Random allocation combined with blinding balances both measured and unmeasured confounding variables across study arms, establishing robust causal evidence for therapy efficacy.',
          ],
          takeaway: 'RCTs balance known and unknown confounders via random assignment to definitively evaluate therapeutic causality.',
          diagram: 'incidence',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which epidemiological study design enrolls a disease-free baseline sample, categorizes participants by their exposure status, and tracks them longitudinally over time to calculate disease incidence?',
        options: [
          {
            id: 'cohort-study',
            label: 'Cohort study',
            explanation: 'Correct: cohort studies assemble groups based on exposure status and monitor them over time to evaluate new incident cases and relative risk.',
          },
          {
            id: 'case-control-study',
            label: 'Case-control study',
            explanation: 'Incorrect: case-control studies assemble cohorts based on outcome status (cases vs controls) and look back retrospectively at prior exposures.',
          },
          {
            id: 'cross-sectional-study',
            label: 'Cross-sectional study',
            explanation: 'Incorrect: cross-sectional studies capture exposure and outcome at a single static point in time, lacking longitudinal prospective observation.',
          },
          {
            id: 'ecological-study',
            label: 'Ecological study',
            explanation: 'Incorrect: ecological studies evaluate aggregated population-level metrics rather than individual patient-level data.',
          },
        ],
      },
    },
  },
});

export const epidemiologyRiskMeasuresLesson = lessonSchema.parse({
  id: 'epidemiology-risk-measures',
  revision: 1,
  questionId: 'epidemiology-risk-relative',
  correctOptionId: 'significant-increased-risk',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'epidemiology',
  sources: [
    {
      id: 'openstax-intro-stats-hypothesis',
      title: 'OpenStax Introductory Statistics',
      url: 'https://openstax.org/books/introductory-statistics/pages/9-1-null-and-alternative-hypotheses',
      section: 'Chapter 9.1 · Hypothesis Testing: Null hypothesis and statistical significance thresholds',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Epidemiologia e bioestatística',
      hook: 'Se um estudo aponta que uma nova medicação reduz o risco em 50%, por que o intervalo de confiança pode desmascarar esse resultado?',
      title: 'Medidas de associação: Risco Relativo e Odds Ratio',
      description: 'Aprenda a interpretar o Risco Relativo (RR), a Razão de Chances (Odds Ratio) e o papel do Intervalo de Confiança de 95% na significância estatística.',
      objective: 'Calcular e interpretar Risco Relativo e Odds Ratio e julgar a significância estatística baseando-se no intervalo de confiança.',
      stages: [
        {
          id: 'relative-risk-cohort',
          title: 'Risco Relativo (RR) em estudos de coorte',
          paragraphs: [
            'O Risco Relativo (RR) é a razão entre a incidência da doença no grupo exposto e a incidência no grupo não exposto (I_expostos / I_não_expostos).',
            'Um RR igual a 1,0 indica ausência de associação; RR > 1,0 indica que a exposição aumenta o risco (fator de risco); e RR < 1,0 indica redução do risco (fator de proteção).',
          ],
          takeaway: 'RR compara incidências diretamente; RR = 1 indica efeito nulo, enquanto valores maiores ou menores sinalizam risco ou proteção.',
          diagram: 'stats',
        },
        {
          id: 'odds-ratio-casecontrol',
          title: 'Razão de Chances (Odds Ratio - OR)',
          paragraphs: [
            'Em estudos de caso-controle não é possível calcular a verdadeira incidência populacional da doença, impossibilitando o cálculo direto do Risco Relativo.',
            'Utiliza-se então o Odds Ratio (OR), que é a razão entre a chance de ter sido exposto no grupo caso e a chance de exposição no grupo controle. Em doenças raras, o OR aproxima-se confiavelmente do RR.',
          ],
          takeaway: 'O Odds Ratio é a medida padrão do estudo caso-controle e estima o RR em condições de baixa prevalência.',
          diagram: 'stats',
        },
        {
          id: 'confidence-intervals',
          title: 'Intervalo de confiança de 95% e hipótese nula',
          paragraphs: [
            'O Intervalo de Confiança de 95% (IC 95%) fornece a faixa plausível onde se encontra o verdadeiro valor populacional da medida de associação com 95% de certeza.',
            'Como o valor nulo de uma razão (RR ou OR) é 1,0, se o IC 95% incluir o número 1,0 (por exemplo: RR = 1,4 com IC 95% 0,9 a 2,2), a associação não é estatisticamente significativa (p ≥ 0,05).',
          ],
          takeaway: 'Para razões como RR e OR, se o IC 95% cruzar o 1,0, não há diferença estatisticamente significativa entre os grupos.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em um estudo de coorte prospectivo sobre sedentarismo e doença coronariana, os pesquisadores relataram um Risco Relativo (RR) de 2,4 com Intervalo de Confiança de 95% entre 1,6 e 3,5. Qual é a interpretação epidemiológica correta desse dado?',
        options: [
          {
            id: 'significant-increased-risk',
            label: 'O sedentarismo associa-se a um aumento estatisticamente significativo no risco de coronariopatia, pois o IC 95% não cruza o valor nulo 1,0',
            explanation: 'Correto: como todo o IC 95% (1,6 a 3,5) situa-se estritamente acima de 1,0, a exposição eleva o risco com significância estatística (p < 0,05).',
          },
          {
            id: 'no-significant-association',
            label: 'Não há evidência de associação entre os fatores, pois o intervalo não atingiu o valor de corte de 5,0',
            explanation: 'Incorreto: a ausência de significância ocorreria apenas se o intervalo cruzasse o valor nulo (1,0), o que não ocorreu.',
          },
          {
            id: 'protective-factor-effect',
            label: 'O sedentarismo atua como fator de proteção vascular ao reduzir a incidência do desfecho',
            explanation: 'Incorreto: fatores de proteção apresentam RR inferior a 1,0 com IC inteiramente abaixo de 1,0.',
          },
          {
            id: 'invalid-cohort-measure',
            label: 'O resultado é metodologicamente inválido, pois estudos de coorte só podem calcular Odds Ratio',
            explanation: 'Incorreto: estudos de coorte calculam incidência de novos casos e, portanto, são o modelo primário para medir o Risco Relativo.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Epidemiology and biostatistics',
      hook: 'If a clinical study claims a medication cuts disease risk by 50%, why can the 95% confidence interval completely debunk that conclusion?',
      title: 'Measures of Association: Relative Risk and Odds Ratio',
      description: 'Master Relative Risk (RR), Odds Ratio (OR), and the critical interpretation of 95% Confidence Intervals in testing statistical significance.',
      objective: 'Calculate and interpret Relative Risk and Odds Ratios, judging statistical significance based on confidence intervals.',
      stages: [
        {
          id: 'relative-risk-cohort',
          title: 'Relative Risk (RR) in cohort investigations',
          paragraphs: [
            'Relative Risk (RR) is the ratio of cumulative disease incidence among exposed subjects to disease incidence among unexposed subjects (I_exposed / I_unexposed).',
            'An RR of 1.0 signifies no association between exposure and disease; RR > 1.0 indicates elevated risk (risk factor); and RR < 1.0 reflects reduced risk (protective factor).',
          ],
          takeaway: 'RR compares disease incidence directly; RR = 1 represents the null value, whereas values above or below signify risk or protection.',
          diagram: 'stats',
        },
        {
          id: 'odds-ratio-casecontrol',
          title: 'Odds Ratio (OR) in case-control studies',
          paragraphs: [
            'Because case-control studies do not follow a fixed population cohort over time, true disease incidence cannot be established directly, precluding RR calculation.',
            'Researchers compute the Odds Ratio (OR), comparing the odds of exposure among cases to the odds of exposure among controls. In rare diseases, OR closely approximates RR.',
          ],
          takeaway: 'The Odds Ratio is the standard measure in case-control studies, serving as an effective surrogate for Relative Risk in rare diseases.',
          diagram: 'stats',
        },
        {
          id: 'confidence-intervals',
          title: '95% Confidence intervals and the null hypothesis',
          paragraphs: [
            'A 95% Confidence Interval (95% CI) defines the range within which the true population effect measure is expected to reside with 95% probability.',
            'Because the null value for a ratio metric (RR or OR) is 1.0, any 95% CI that encompasses 1.0 (e.g., RR = 1.4 with 95% CI 0.9 to 2.2) fails to reach statistical significance (p ≥ 0.05).',
          ],
          takeaway: 'For ratio metrics like RR and OR, if the 95% CI crosses 1.0, the association is not statistically significant.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In a prospective cohort study examining physical inactivity and coronary artery disease, authors report a Relative Risk (RR) of 2.4 with a 95% Confidence Interval of 1.6 to 3.5. What is the correct epidemiological interpretation?',
        options: [
          {
            id: 'significant-increased-risk',
            label: 'Inactivity is associated with a statistically significant increase in coronary disease risk, as the 95% CI excludes 1.0',
            explanation: 'Correct: because the entire 95% confidence interval (1.6 to 3.5) lies above the null threshold of 1.0, the elevated risk is statistically significant (p < 0.05).',
          },
          {
            id: 'no-significant-association',
            label: 'No statistically significant association exists because the upper limit fell short of 5.0',
            explanation: 'Incorrect: an absence of statistical significance requires the confidence interval to include the null value of 1.0.',
          },
          {
            id: 'protective-factor-effect',
            label: 'Inactivity operates as a protective cardiovascular factor by decreasing overall disease occurrence',
            explanation: 'Incorrect: protective factors display an RR below 1.0 with confidence intervals lying entirely below 1.0.',
          },
          {
            id: 'invalid-cohort-measure',
            label: 'The analysis is invalid because cohort investigations are restricted exclusively to calculating Odds Ratios',
            explanation: 'Incorrect: cohort studies calculate incident disease cases directly, making them the classic design for assessing Relative Risk.',
          },
        ],
      },
    },
  },
});
