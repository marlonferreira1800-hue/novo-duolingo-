import { lessonSchema } from '../src/contracts/learning';

export const pharmacologyBioavailabilityLesson = lessonSchema.parse({
  id: 'pharmacology-bioavailability',
  revision: 1,
  questionId: 'pharmacology-bioavailability-first-pass',
  correctOptionId: 'iv-route',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-digestion-absorption',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-4-the-liver-and-gallbladder',
      section: 'Chapter 24.4 · The Liver and Gallbladder: Hepatic portal circulation and metabolism',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'Por que uma dose de medicamento por via oral precisa ser frequentemente maior do que a mesma dose injetada na veia?',
      title: 'Biodisponibilidade e meia-vida plasmática',
      description: 'Compreenda a fração do fármaco que chega à circulação sistêmica e a cinética de eliminação que dita os intervalos entre doses.',
      objective: 'Diferenciar biodisponibilidade intravenosa e oral, detalhar o efeito de primeira passagem hepática e calcular meias-vidas de eliminação.',
      stages: [
        {
          id: 'bioavailability-concept',
          title: 'Biodisponibilidade (F): fração ativa na circulação',
          paragraphs: [
            'A biodisponibilidade (representada pela letra F) indica a porcentagem de uma dose administrada de fármaco que alcança a circulação sistêmica de forma intacta.',
            'Quando um fármaco é injetado diretamente na corrente sanguínea pela via intravenosa (IV), sua absorção é instantânea e completa, estabelecendo por definição F = 100% (ou 1,0).',
          ],
          takeaway: 'Via intravenosa tem biodisponibilidade de 100%; outras vias sofrem perdas por absorção incompleta.',
          diagram: 'adme',
        },
        {
          id: 'first-pass-effect',
          title: 'Efeito de primeira passagem hepática',
          paragraphs: [
            'Fármacos ingeridos por via oral são absorvidos no trato gastrointestinal e drenados pelo sistema porta até o fígado antes de atingirem o coração e a circulação sistêmica.',
            'Nessa primeira passagem pelos hepatócitos, enzimas metabolizadoras podem inativar uma fração substancial do fármaco, reduzindo expressivamente a quantidade livre disponível para exercer ação terapêutica.',
          ],
          takeaway: 'O metabolismo pré-sistêmico no fígado (primeira passagem) reduz a biodisponibilidade da via oral.',
          diagram: 'adme',
        },
        {
          id: 'elimination-half-life',
          title: 'Meia-vida (t½) e estado de equilíbrio',
          paragraphs: [
            'A meia-vida de eliminação (t½) é o tempo necessário para que a concentração plasmática de um fármaco seja reduzida em 50%.',
            'Na farmacocinética de primeira ordem, são necessárias de 4 a 5 meias-vidas para eliminar mais de 95% do fármaco ou para atingir o estado de equilíbrio (steady-state) em infusões e doses repetidas.',
          ],
          takeaway: 'A meia-vida determina o intervalo entre doses; 4 a 5 meias-vidas levam ao estado de equilíbrio ou à depuração quase total.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual via de administração apresenta por definição 100% de biodisponibilidade (F = 1,0) por dispensar a etapa de absorção e o efeito de primeira passagem hepática?',
        options: [
          {
            id: 'iv-route',
            label: 'Via intravenosa (IV)',
            explanation: 'Correto: a administração intravenosa deposita a totalidade do fármaco diretamente na circulação sistêmica, garantindo 100% de biodisponibilidade imediata.',
          },
          {
            id: 'oral-route',
            label: 'Via oral (VO)',
            explanation: 'Incorreto: a via oral sofre perda por absorção gastrointestinal incompleta e metabolismo hepático de primeira passagem, tendo biodisponibilidade inferior a 100%.',
          },
          {
            id: 'subcutaneous-route',
            label: 'Via subcutânea (SC)',
            explanation: 'Incorreto: fármacos subcutâneos precisam difundir-se pelos tecidos intersticiais e capilares, com taxa de absorção gradual e variável.',
          },
          {
            id: 'transdermal-route',
            label: 'Via transdérmica',
            explanation: 'Incorreto: o estrato córneo da pele atua como barreira limitante, resultando em absorção lenta e biodisponibilidade dependente de propriedades físico-químicas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'Why does an oral dose of medication often need to be significantly larger than the same drug given intravenously?',
      title: 'Bioavailability and Plasma Half-Life',
      description: 'Understand the fraction of a drug that reaches the systemic circulation and the elimination kinetics that dictate dosing intervals.',
      objective: 'Distinguish intravenous from oral bioavailability, detail the hepatic first-pass effect, and compute elimination half-lives.',
      stages: [
        {
          id: 'bioavailability-concept',
          title: 'Bioavailability (F): Active fraction in circulation',
          paragraphs: [
            'Bioavailability (denoted as F) represents the percentage of an administered drug dose that reaches the systemic circulation in an unchanged, active form.',
            'When a drug is injected directly into the bloodstream via the intravenous (IV) route, absorption is instantaneous and complete, establishing F = 100% (or 1.0) by definition.',
          ],
          takeaway: 'Intravenous administration yields 100% bioavailability; other routes undergo losses due to incomplete absorption.',
          diagram: 'adme',
        },
        {
          id: 'first-pass-effect',
          title: 'Hepatic first-pass metabolism',
          paragraphs: [
            'Orally administered drugs are absorbed through the gastrointestinal mucosa and carried directly by the portal venous system to the liver before reaching systemic circulation.',
            'During this initial transit through hepatocytes, metabolizing enzymes can inactivate a substantial portion of the drug, dramatically diminishing the free active molecule available for therapeutic action.',
          ],
          takeaway: 'Presystemic hepatic metabolism (first-pass effect) sharply decreases oral drug bioavailability.',
          diagram: 'adme',
        },
        {
          id: 'elimination-half-life',
          title: 'Half-life (t½) and steady-state kinetics',
          paragraphs: [
            'The elimination half-life (t½) is the time required for the plasma concentration of a drug to decrease by 50%.',
            'In first-order pharmacokinetics, approximately 4 to 5 half-lives are required to eliminate more than 95% of the drug or to achieve steady-state concentration during repeated dosing.',
          ],
          takeaway: 'Half-life determines dosing intervals; 4 to 5 half-lives are required to reach steady state or near-complete clearance.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which route of administration provides by definition 100% bioavailability (F = 1.0) by bypassing both absorption barriers and hepatic first-pass metabolism?',
        options: [
          {
            id: 'iv-route',
            label: 'Intravenous route (IV)',
            explanation: 'Correct: intravenous administration places the entire dose directly into the systemic circulation, ensuring immediate 100% bioavailability.',
          },
          {
            id: 'oral-route',
            label: 'Oral route (PO)',
            explanation: 'Incorrect: oral drugs experience incomplete gastrointestinal absorption and hepatic first-pass metabolism, resulting in bioavailability below 100%.',
          },
          {
            id: 'subcutaneous-route',
            label: 'Subcutaneous route (SC)',
            explanation: 'Incorrect: subcutaneous medications must slowly diffuse across interstitial tissue and capillary beds, leading to variable absorption rates.',
          },
          {
            id: 'transdermal-route',
            label: 'Transdermal route',
            explanation: 'Incorrect: the stratum corneum creates a significant diffusion barrier, producing slow absorption and variable bioavailability.',
          },
        ],
      },
    },
  },
});

export const pharmacologyReceptorsLesson = lessonSchema.parse({
  id: 'pharmacology-receptors',
  revision: 1,
  questionId: 'pharmacology-receptors-agonist',
  correctOptionId: 'competitive-surmountable',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-nervous-synapses',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons',
      section: 'Chapter 12.5 · Communication Between Neurons: Neurotransmitter receptors and second messengers',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'Como um medicamento consegue bloquear a ação de hormônios naturais sem destruir os receptores das células?',
      title: 'Farmacodinâmica: agonistas, antagonistas e receptores',
      description: 'Explore a interação ligante-receptor, diferenciando agonistas totais, parciais e antagonistas competitivos ou irreversíveis.',
      objective: 'Distinguir agonismo pleno, agonismo parcial e tipos de antagonismo farmacológico em curvas de concentração-efeito.',
      stages: [
        {
          id: 'agonists-types',
          title: 'Agonistas plenos, parciais e inversos',
          paragraphs: [
            'Um agonista pleno liga-se ao receptor e induz uma alteração conformacional que ativa a via intracelular com resposta máxima (eficácia intrínseca = 1,0).',
            'O agonista parcial liga-se ao mesmo sítio mas produz resposta submáxima mesmo ocupando 100% dos receptores; na presença de um agonista pleno, pode atuar como antagonista competitivo relativo.',
          ],
          takeaway: 'Agonistas plenos produzem efeito máximo; agonistas parciais têm menor eficácia intrínseca e atenuam agonistas plenos.',
          diagram: 'adme',
        },
        {
          id: 'antagonists-mechanisms',
          title: 'Antagonismo competitivo vs não competitivo',
          paragraphs: [
            'Antagonistas ligam-se ao receptor mas possuem eficácia intrínseca nula, bloqueando o acesso de agonistas endógenos.',
            'O antagonista competitivo disputa o mesmo sítio de ligação de forma reversível: concentrações maiores de agonista conseguem superar o bloqueio, deslocando a curva dose-resposta para a direita sem reduzir o efeito máximo.',
          ],
          takeaway: 'Antagonistas competitivos são superáveis e desviam a curva para a direita mantendo o efeito máximo inalterado.',
          diagram: 'adme',
        },
        {
          id: 'receptor-regulation',
          title: 'Regulação de receptores: dessensibilização e hipersensibilização',
          paragraphs: [
            'A exposição crônica a agonistas frequentemente deflagra internalização e degradação de receptores (down-regulation ou dessensibilização), gerando tolerância farmacológica.',
            'Por outro lado, o bloqueio prolongado por antagonistas pode induzir aumento na densidade de receptores na membrana (up-regulation), predispondo a respostas exacerbadas na retirada súbita.',
          ],
          takeaway: 'O uso contínuo de fármacos remodela a densidade e sensibilidade dos receptores celulares.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em uma curva dose-resposta, qual é o efeito característico produzido pela adição de um antagonista competitivo reversível?',
        options: [
          {
            id: 'competitive-surmountable',
            label: 'Deslocamento da curva para a direita mantendo a resposta máxima (Emáx)',
            explanation: 'Correto: o antagonista competitivo disputa o mesmo sítio ativo reversivelmente; o aumento na concentração do agonista supera o bloqueio e atinge o mesmo Emáx.',
          },
          {
            id: 'irreversible-depression',
            label: 'Queda progressiva do efeito máximo (Emáx) sem alterar a CE50',
            explanation: 'Incorreto: a redução não superável de Emáx é a marca do antagonismo não competitivo ou irreversível.',
          },
          {
            id: 'partial-activation',
            label: 'Geração de resposta biológica intrínseca proporcional à dose do antagonista',
            explanation: 'Incorreto: antagonistas puros possuem eficácia intrínseca igual a zero e não ativam o receptor por conta própria.',
          },
          {
            id: 'inverse-reduction',
            label: 'Inversão da atividade constitutiva basal do receptor em repouso',
            explanation: 'Incorreto: suprimir a atividade constitutiva abaixo do nível basal é a definição de agonista inverso, não de antagonista neutro.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'How can a medication completely block natural hormones without destroying the body’s receptors?',
      title: 'Pharmacodynamics: Agonists, Antagonists, and Receptors',
      description: 'Explore ligand-receptor interactions, distinguishing full agonists, partial agonists, and competitive or irreversible antagonists.',
      objective: 'Distinguish full agonism, partial agonism, and pharmacological antagonism on concentration-response curves.',
      stages: [
        {
          id: 'agonists-types',
          title: 'Full, partial, and inverse agonists',
          paragraphs: [
            'A full agonist binds to a receptor and stabilizes the active conformation to elicit the maximum biological response (intrinsic efficacy = 1.0).',
            'A partial agonist binds the same receptor site but produces submaximal response even at 100% receptor occupancy; in the presence of a full agonist, it can act as a competitive antagonist.',
          ],
          takeaway: 'Full agonists achieve maximal effect; partial agonists have lower intrinsic efficacy and dampen full agonist responses.',
          diagram: 'adme',
        },
        {
          id: 'antagonists-mechanisms',
          title: 'Competitive vs non-competitive antagonism',
          paragraphs: [
            'Antagonists bind receptors with affinity but zero intrinsic efficacy, blocking endogenous ligands from triggering biological signals.',
            'Competitive antagonists bind reversibly to the primary active site: higher concentrations of agonist can outcompete the antagonist, shifting the dose-response curve to the right without reducing maximal response.',
          ],
          takeaway: 'Competitive antagonists are surmountable, shifting curves to the right while preserving maximal efficacy.',
          diagram: 'adme',
        },
        {
          id: 'receptor-regulation',
          title: 'Receptor regulation: Desensitization and sensitization',
          paragraphs: [
            'Chronic stimulation by agonists frequently leads to receptor internalization and degradation (down-regulation or desensitization), producing pharmacological tolerance.',
            'Conversely, prolonged blockade by antagonists can increase cell-surface receptor density (up-regulation), precipitating rebound hyperresponsiveness upon abrupt cessation.',
          ],
          takeaway: 'Sustained drug exposure dynamically remodels receptor density and cellular sensitivity over time.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'On a graded concentration-response curve, what is the hallmark effect of adding a reversible competitive antagonist?',
        options: [
          {
            id: 'competitive-surmountable',
            label: 'Rightward shift of the curve with preserved maximal effect (Emax)',
            explanation: 'Correct: competitive antagonists bind reversibly to the active site; increasing the agonist concentration overcomes the blockade to reach full Emax.',
          },
          {
            id: 'irreversible-depression',
            label: 'Progressive depression of maximal efficacy (Emax) without shifting EC50',
            explanation: 'Incorrect: an insurmountable decrease in Emax is characteristic of non-competitive or irreversible antagonism.',
          },
          {
            id: 'partial-activation',
            label: 'Direct induction of intrinsic downstream signaling by the antagonist',
            explanation: 'Incorrect: pure antagonists have an intrinsic efficacy of zero and cannot activate receptor signaling pathways on their own.',
          },
          {
            id: 'inverse-reduction',
            label: 'Suppression of baseline constitutive receptor signaling below resting tone',
            explanation: 'Incorrect: reducing baseline constitutive activity below resting state is the property of an inverse agonist, not a neutral antagonist.',
          },
        ],
      },
    },
  },
});

export const pharmacologyDoseResponseLesson = lessonSchema.parse({
  id: 'pharmacology-dose-response',
  revision: 1,
  questionId: 'pharmacology-dose-therapeutic-index',
  correctOptionId: 'narrow-margin-toxicity',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-cell-homeostasis',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/1-3-homeostasis',
      section: 'Chapter 1.3 · Homeostasis: Dose-dependent physiological controls and thresholds',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'O que torna um medicamento extremamente seguro e outro um veneno letal em doses pouco maiores que a usual?',
      title: 'Potência, eficácia e índice terapêutico',
      description: 'Analise parâmetros de curvas de concentração-efeito (CE50 e Emáx) e compreenda a margem de segurança clínica.',
      objective: 'Diferenciar potência e eficácia e interpretar o índice terapêutico para monitoramento clínico seguro.',
      stages: [
        {
          id: 'potency-ec50',
          title: 'Potência farmacológica e CE50',
          paragraphs: [
            'A potência refere-se à quantidade de fármaco necessária para produzir um determinado nível de efeito biológico.',
            'O parâmetro padrão é a CE50 (concentração eficaz 50%), que representa a concentração de fármaco necessária para produzir 50% de sua resposta máxima. Quanto menor a CE50, mais potente é o fármaco.',
          ],
          takeaway: 'Potência depende da afinidade: menor CE50 indica que doses menores são suficientes para produzir o efeito.',
          diagram: 'adme',
        },
        {
          id: 'efficacy-emax',
          title: 'Eficácia máxima (Emáx)',
          paragraphs: [
            'A eficácia máxima (Emáx) é o limite teto da resposta terapêutica que um fármaco é capaz de atingir, independentemente do aumento progressivo da dose.',
            'Clinicamente, a eficácia é quase sempre mais relevante do que a potência: um anti-hipertensivo muito potente com baixa eficácia não controlará crises graves, enquanto um com alta eficácia conseguirá.',
          ],
          takeaway: 'Eficácia é o teto de resposta biológica obtida; clinicamente é crucial para reverter quadros patológicos.',
          diagram: 'adme',
        },
        {
          id: 'therapeutic-index',
          title: 'Índice terapêutico e janela de segurança',
          paragraphs: [
            'O índice terapêutico (IT) mede a margem de segurança de um fármaco, expresso classicamente pela razão entre a dose letal mediana e a dose eficaz mediana (DL50 / DE50).',
            'Fármacos de índice terapêutico estreito (como varfarina, lítio e digoxina) apresentam pequena diferença entre as doses curativas e tóxicas, exigindo monitoramento plasmático regular.',
          ],
          takeaway: 'Índice terapêutico baixo reflete janela de segurança estreita e alto risco de toxicidade grave.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'O que indica na prática médica o fato de um fármaco possuir um índice terapêutico estreito (baixo valor de DL50 / DE50)?',
        options: [
          {
            id: 'narrow-margin-toxicity',
            label: 'Pequena margem entre a dose terapêutica e a dose tóxica, demandando monitoramento laboratorial',
            explanation: 'Correto: um índice terapêutico estreito significa que pequenas flutuações na dose ou concentração sérica podem precipitar toxicidade severa ou ineficácia clínica.',
          },
          {
            id: 'high-margin-safety',
            label: 'Ampla margem de tolerância sem risco de sobredosagem acidental',
            explanation: 'Incorreto: ampla margem de segurança é típica de índices terapêuticos elevados, como os da penicilina.',
          },
          {
            id: 'zero-adverse-risk',
            label: 'Ausência completa de efeitos adversos ou interações medicamentosas',
            explanation: 'Incorreto: nenhum fármaco é isento de reações adversas, e índices estreitos aumentam a gravidade dos eventos tóxicos.',
          },
          {
            id: 'high-efficacy-ceiling',
            label: 'Garantia de que o fármaco possui a maior eficácia clínica máxima possível',
            explanation: 'Incorreto: índice terapêutico reflete relação de segurança/toxicidade, não a magnitude da eficácia máxima (Emáx).',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'What makes one medicine exceptionally safe while another can become lethal at just slightly elevated doses?',
      title: 'Potency, Efficacy, and Therapeutic Index',
      description: 'Analyze concentration-response parameters (EC50 and Emax) and understand the margins of clinical drug safety.',
      objective: 'Distinguish potency from efficacy and interpret the therapeutic index for safe clinical patient monitoring.',
      stages: [
        {
          id: 'potency-ec50',
          title: 'Pharmacological potency and EC50',
          paragraphs: [
            'Potency refers to the concentration or dose of a drug required to produce a given magnitude of biological effect.',
            'The standard measure is the EC50 (effective concentration 50%), which is the concentration of drug producing 50% of its maximal response. A lower EC50 indicates a more potent drug.',
          ],
          takeaway: 'Potency reflects affinity: lower EC50 means smaller amounts are needed to elicit a biological response.',
          diagram: 'adme',
        },
        {
          id: 'efficacy-emax',
          title: 'Maximal efficacy (Emax)',
          paragraphs: [
            'Maximal efficacy (Emax) is the ceiling limit of biological response that a drug can achieve, regardless of further dose escalation.',
            'In clinical practice, efficacy is almost always more crucial than potency: a highly potent drug with low efficacy cannot resolve severe conditions, whereas a high-efficacy agent can.',
          ],
          takeaway: 'Efficacy reflects the ceiling of biological effect and determines the clinical utility of treatment.',
          diagram: 'adme',
        },
        {
          id: 'therapeutic-index',
          title: 'Therapeutic index and safety margin',
          paragraphs: [
            'The therapeutic index (TI) measures drug safety, conventionally expressed as the ratio of median lethal or toxic dose to median effective dose (LD50 / ED50).',
            'Drugs with a narrow therapeutic index (such as warfarin, lithium, and digoxin) have minimal difference between effective and toxic concentrations, requiring close therapeutic drug monitoring.',
          ],
          takeaway: 'A low therapeutic index implies a narrow safety margin and high risk of life-threatening toxicity.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In clinical practice, what is the key implication of prescribing a medication with a narrow therapeutic index (low LD50 / ED50 ratio)?',
        options: [
          {
            id: 'narrow-margin-toxicity',
            label: 'Small margin between therapeutic and toxic doses, requiring serum concentration monitoring',
            explanation: 'Correct: a narrow therapeutic index means slight variations in dosage or clearance can readily cause toxicity or therapeutic failure.',
          },
          {
            id: 'high-margin-safety',
            label: 'Broad safety buffer permitting wide dosage latitude without risk of overdose',
            explanation: 'Incorrect: a wide safety buffer characterizes high therapeutic index drugs like penicillin.',
          },
          {
            id: 'zero-adverse-risk',
            label: 'Total freedom from dose-dependent adverse reactions and drug interactions',
            explanation: 'Incorrect: no active medication is free of adverse events, and low therapeutic index drugs carry heightened risks.',
          },
          {
            id: 'high-efficacy-ceiling',
            label: 'Guaranteed attainment of the highest possible maximal clinical efficacy (Emax)',
            explanation: 'Incorrect: therapeutic index is a ratio comparing safety thresholds, distinct from maximal efficacy.',
          },
        ],
      },
    },
  },
});

export const pharmacologyCyp450Lesson = lessonSchema.parse({
  id: 'pharmacology-cyp450',
  revision: 1,
  questionId: 'pharmacology-cyp450-induction',
  correctOptionId: 'decreased-plasma-levels',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-liver-functions',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-4-the-liver-and-gallbladder',
      section: 'Chapter 24.4 · The Liver and Gallbladder: Hepatic detoxification and biotransformation pathways',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'Como tomar um simples suco de toranja (grapefruit) ou um anticonvulsivante pode anular ou multiplicar o efeito de outros remédios?',
      title: 'Biotransformação hepática: citocromo P450 e conjugação',
      description: 'Entenda as reações de Fase I e Fase II, o papel dos pró-fármacos e as consequências clínicas de indutores e inibidores enzimáticos.',
      objective: 'Distinguir reações hepáticas de Fase I e II e prever interações medicamentosas por indução ou inibição do CYP450.',
      stages: [
        {
          id: 'phase1-cyp450',
          title: 'Reações de Fase I: sistema citocromo P450',
          paragraphs: [
            'A biotransformação hepática converte compostos lipofílicos em metabólitos mais hidrossolúveis para facilitar a excreção renal ou biliar.',
            'As reações de Fase I envolvem oxidação, redução ou hidrólise, mediadas predominantemente pela superfamília enzimática do citocromo P450 (CYP3A4, CYP2D6, CYP2C9). Essas reações frequentemente introduzem grupos polares funcionais (-OH, -NH₂).',
          ],
          takeaway: 'Fase I oxida e introduz grupos funcionais via enzimas CYP450 no retículo endoplasmático liso.',
          diagram: 'adme',
        },
        {
          id: 'phase2-conjugation',
          title: 'Reações de Fase II: conjugação polar',
          paragraphs: [
            'Nas reações de Fase II, o fármaco ou seu metabólito de Fase I é acoplado a um substrato endógeno hidrofílico (como ácido glicurônico, sulfato, glutationa ou acetato).',
            'A glicuronidação (pelas enzimas UGT) é a via de conjugação mais comum, gerando compostos altamente polares e eletricamente carregados, quase sempre inativos e prontamente excretáveis.',
          ],
          takeaway: 'Fase II conjuga metabólitos com moléculas endógenas hidrossolúveis para excreção definitiva.',
          diagram: 'adme',
        },
        {
          id: 'induction-inhibition',
          title: 'Indução, inibição e pró-fármacos',
          paragraphs: [
            'Fármacos indutores enzimáticos (como rifampicina e carbamazepina) aumentam a síntese de enzimas CYP, acelerando a depuração e diminuindo a concentração de fármacos administrados em conjunto.',
            'Inibidores enzimáticos (como cetoconazol e eritromicina) bloqueiam a atividade catalítica do CYP, elevando os níveis do substrato a patamares potencialmente tóxicos.',
          ],
          takeaway: 'Indutores aceleram o metabolismo e baixam níveis séricos; inibidores desaceleram e geram acúmulo tóxico.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'O que ocorre com as concentrações séricas e o efeito terapêutico de um fármaco ativo metabolizado pelo CYP3A4 se o paciente iniciar o uso concomitante de um potente indutor do CYP3A4?',
        options: [
          {
            id: 'decreased-plasma-levels',
            label: 'Redução das concentrações plasmáticas do fármaco ativo, com risco de falha terapêutica',
            explanation: 'Correto: o indutor aumenta a quantidade de enzimas CYP3A4 funcionais, acelerando a degradação metabólica do substrato ativo e diminuindo sua concentração sérica.',
          },
          {
            id: 'increased-toxicity-risk',
            label: 'Acúmulo do fármaco ativo na circulação com toxicidade imediata por sobredose',
            explanation: 'Incorreto: o acúmulo e a toxicidade ocorrem na inibição enzimática, e não na indução.',
          },
          {
            id: 'blocked-phase2-conjugation',
            label: 'Bloqueio seletivo da excreção renal com inibição de todas as reações de conjugação de Fase II',
            explanation: 'Incorreto: a indução de CYP3A4 modula reações oxidativas de Fase I no retículo endoplasmático, sem bloquear a excreção renal.',
          },
          {
            id: 'direct-renal-accumulation',
            label: 'Conversão instantânea do fármaco ativo em pró-fármaco insolúvel nos túbulos renais',
            explanation: 'Incorreto: pró-fármacos são substâncias originalmente inativas formuladas para ativação metabólica; a indução apenas eleva a taxa de degradação.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'How can consuming grapefruit juice or taking an anti-seizure medication completely cancel or multiply another drug’s effects?',
      title: 'Hepatic Biotransformation: Cytochrome P450 and Conjugation',
      description: 'Understand Phase I and Phase II reactions, prodrug activation, and the clinical perils of enzyme induction and inhibition.',
      objective: 'Distinguish Phase I and II hepatic pathways and predict critical drug interactions involving cytochrome P450.',
      stages: [
        {
          id: 'phase1-cyp450',
          title: 'Phase I reactions: The cytochrome P450 system',
          paragraphs: [
            'Hepatic biotransformation converts lipophilic xenobiotics into more polar metabolites to facilitate renal or biliary elimination.',
            'Phase I reactions encompass oxidation, reduction, and hydrolysis, predominantly catalyzed by the cytochrome P450 enzyme superfamily (CYP3A4, CYP2D6, CYP2C9), introducing polar chemical handles (-OH, -NH₂).',
          ],
          takeaway: 'Phase I oxidizes and functionalizes drugs via CYP450 enzymes embedded in the smooth endoplasmic reticulum.',
          diagram: 'adme',
        },
        {
          id: 'phase2-conjugation',
          title: 'Phase II reactions: Polar conjugation',
          paragraphs: [
            'In Phase II reactions, the parent drug or its Phase I metabolite is coupled with an endogenous polar substrate (such as glucuronic acid, sulfate, glutathione, or acetate).',
            'Glucuronidation (via UGT enzymes) is the most prevalent pathway, producing highly charged, polar, pharmacologically inactive conjugates that are readily excreted.',
          ],
          takeaway: 'Phase II conjugates drug fragments to bulky hydrophilic molecules for rapid bodily excretion.',
          diagram: 'adme',
        },
        {
          id: 'induction-inhibition',
          title: 'Enzyme induction, inhibition, and prodrugs',
          paragraphs: [
            'Enzyme inducers (such as rifampin and carbamazepine) stimulate CYP transcription, accelerating clearance and lowering plasma concentrations of co-administered substrates.',
            'Enzyme inhibitors (such as ketoconazole and clarithromycin) directly impede catalytic turnover, driving substrate accumulation to toxic levels.',
          ],
          takeaway: 'Inducers increase metabolism and decrease drug levels; inhibitors block clearance and risk toxicity.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What happens to the plasma concentration and therapeutic efficacy of an active drug metabolized by CYP3A4 when a patient begins treatment with a potent CYP3A4 inducer?',
        options: [
          {
            id: 'decreased-plasma-levels',
            label: 'Decreased active drug plasma concentrations, risking therapeutic treatment failure',
            explanation: 'Correct: enzyme inducers stimulate CYP3A4 synthesis, accelerating clearance of the active drug and lowering circulating concentrations below therapeutic levels.',
          },
          {
            id: 'increased-toxicity-risk',
            label: 'Rapid systemic accumulation of active drug leading to severe overdose toxicity',
            explanation: 'Incorrect: drug accumulation and overdose toxicity occur with enzyme inhibitors, not enzyme inducers.',
          },
          {
            id: 'blocked-phase2-conjugation',
            label: 'Selective shutdown of renal excretion with widespread inhibition of Phase II pathways',
            explanation: 'Incorrect: CYP3A4 induction enhances Phase I oxidative turnover without halting renal excretion.',
          },
          {
            id: 'direct-renal-accumulation',
            label: 'Immediate conversion of the active drug into an insoluble prodrug in renal tubules',
            explanation: 'Incorrect: prodrugs are deliberately formulated inactive precursors; induction simply accelerates the degradation rate.',
          },
        ],
      },
    },
  },
});
