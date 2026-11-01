import { lessonSchema } from '../src/contracts/learning';

export const renalClearanceLesson = lessonSchema.parse({
  id: 'renal-clearance',
  revision: 1,
  questionId: 'renal-clearance-q1',
  correctOptionId: 'clearance-inulin-gfr',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch25-physiology',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-5-physiology-of-urine-formation',
      section: 'Chapter 25 · Renal Clearance and Glomerular Filtration Rate',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Como os nefrologistas medem a filtração microscópica de milhões de néfrons com uma simples amostra de sangue e urina?',
      title: 'Depuração renal: inulina, creatinina e fluxo plasmático renal (PAH)',
      description: 'Entenda a fórmula de depuração (clearance), o padrão-ouro da inulina para a TFG e o uso do para-aminohipurato (PAH) para aferir o fluxo plasmático renal.',
      objective: 'Aplicar o conceito biofísico de depuração renal (clearance = U × V / P) para estimar a taxa de filtração glomerular e o fluxo plasmático renal.',
      stages: [
        {
          id: 'clearance-concept-formula',
          title: 'O conceito biofísico de depuração renal',
          paragraphs: [
            'O clearance (depuração) renal quantifica o volume virtual de plasma sanguíneo que é completamente limpo de uma determinada substância pelos rins por unidade de tempo.',
            'A fórmula universal do clearance é C = (U × V) / P, onde U representa a concentração urinária do soluto, V é o fluxo urinário em mL/min e P é a concentração plasmática do mesmo soluto.',
          ],
          takeaway: 'O clearance renal (C = U × V / P) quantifica o volume de plasma limpo de um soluto por minuto.',
          diagram: 'calculation',
        },
        {
          id: 'inulin-creatinine-gfr',
          title: 'Inulina e creatinina: medindo a filtração glomerular',
          paragraphs: [
            'Para que o clearance de uma substância seja exatamente igual à taxa de filtração glomerular (TFG), ela deve ser livremente filtrada pelos glomérulos e não sofrer nenhuma reabsorção ou secreção tubular.',
            'O polissacarídeo inulina preenche perfeitamente esse critério, constituindo o padrão-ouro para aferição da TFG (~125 mL/min). Na prática clínica diária, a creatinina endógena é utilizada como estimador prático, embora sofra discreta secreção tubular proximal (~10%).',
          ],
          takeaway: 'A inulina mede com exatidão a TFG porque é livremente filtrada e não sofre reabsorção nem secreção.',
          diagram: 'kidney',
        },
        {
          id: 'pah-renal-plasma-flow',
          title: 'Ácido para-aminohipurato (PAH) e fluxo plasmático renal',
          paragraphs: [
            'O ácido para-aminohipurato (PAH) é livremente filtrado pelo glomérulo e ativamente secretado pelas células do túbulo proximal com tamanha avidez que quase todo o soluto que chega aos rins é depurado em uma única passagem (extração renal de ~90%).',
            'Por essa razão, o clearance de PAH equivale ao fluxo plasmático renal efetivo (FPRE, ~600 mL/min). Dividindo o clearance de inulina pelo clearance de PAH obtém-se a fração de filtração (FF = TFG / FPR ~ 0,20 ou 20%).',
          ],
          takeaway: 'O clearance de PAH estima o fluxo plasmático renal; a fração de filtração fisiológica é de aproximadamente 20%.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a afirmação sobre a propriedade que torna a inulina o padrão-ouro na mensuração da taxa de filtração glomerular:',
        blank: 'A inulina mede com exatidão a TFG porque é livremente filtrada e ______ pelos túbulos renais.',
        options: [
          {
            id: 'clearance-inulin-gfr',
            label: 'não é reabsorvida e nem secretada',
            explanation: 'Correto: a inulina não sofre transporte transepitelial após ser filtrada, de modo que toda a quantidade filtrada por minuto aparece intacta na urina.',
          },
          {
            id: 'clearance-actively-secreted',
            label: 'ativamente secretada no túbulo proximal',
            explanation: 'Incorreto: a secreção ativa é uma propriedade do PAH, que serve para medir o fluxo plasmático renal, não da inulina.',
          },
          {
            id: 'clearance-totally-reabsorbed',
            label: 'totalmente reabsorvida por cotransporte de sódio',
            explanation: 'Incorreto: solutos totalmente reabsorvidos (como a glicose) possuem clearance nulo (C = 0 mL/min).',
          },
          {
            id: 'clearance-metabolized-cortex',
            label: 'rapidamente metabolizada pelas células do córtex',
            explanation: 'Incorreto: substâncias usadas para clearance não podem ser metabolizadas, sintetizadas ou destruídas pelo parênquima renal.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'How do nephrologists measure the microscopic filtration of millions of nephrons with a single blood and urine sample?',
      title: 'Renal clearance: inulin, creatinine, and renal plasma flow (PAH)',
      description: 'Understand the clearance equation, the gold standard of inulin for GFR, and the application of para-aminohippurate (PAH) to gauge renal plasma flow.',
      objective: 'Apply the clearance formula (C = U × V / P) to estimate glomerular filtration rate and effective renal plasma flow.',
      stages: [
        {
          id: 'clearance-concept-formula',
          title: 'The biophysical concept of renal clearance',
          paragraphs: [
            'Renal clearance quantifies the virtual volume of arterial plasma completely cleared of a given substance by the kidneys per unit time.',
            'The universal clearance equation is expressed as C = (U × V) / P, where U represents urinary concentration of the solute, V is urine flow rate (mL/min), and P is plasma solute concentration.',
          ],
          takeaway: 'Renal clearance (C = U × V / P) measures the volume of plasma cleared of a solute each minute.',
          diagram: 'calculation',
        },
        {
          id: 'inulin-creatinine-gfr',
          title: 'Inulin and creatinine: measuring glomerular filtration',
          paragraphs: [
            'For a solute’s clearance to equal the true glomerular filtration rate (GFR), it must be freely filtered at the glomerulus while undergoing zero tubular reabsorption and zero tubular secretion.',
            'The plant polysaccharide inulin perfectly fulfills this requirement, defining the physiological gold standard for GFR (~125 mL/min). In daily clinical practice, endogenous creatinine serves as a routine surrogate, despite modest proximal tubular secretion (~10%).',
          ],
          takeaway: 'Inulin measures true GFR because it is freely filtered without undergoing tubular reabsorption or secretion.',
          diagram: 'kidney',
        },
        {
          id: 'pah-renal-plasma-flow',
          title: 'Para-aminohippurate (PAH) and renal plasma flow',
          paragraphs: [
            'Para-aminohippurate (PAH) is freely filtered at the glomerulus and aggressively secreted by proximal tubule organic anion transporters, achieving an extraction ratio approaching 90% in a single renal pass.',
            'Consequently, PAH clearance reflects effective renal plasma flow (ERPF, ~600 mL/min). Dividing inulin clearance by PAH clearance yields the filtration fraction (FF = GFR / RPF ~ 0.20 or 20%).',
          ],
          takeaway: 'PAH clearance gauges renal plasma flow; the normal filtration fraction is approximately 20%.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the statement regarding the biophysical property that makes inulin the gold standard for measuring GFR:',
        blank: 'Inulin clearance accurately equals GFR because it is freely filtered and is ______ by renal tubular epithelia.',
        options: [
          {
            id: 'clearance-inulin-gfr',
            label: 'neither reabsorbed nor secreted',
            explanation: 'Correct: inulin experiences zero transepithelial transport post-filtration; therefore, total filtered inulin equals total excreted inulin.',
          },
          {
            id: 'clearance-actively-secreted',
            label: 'actively secreted across proximal tubules',
            explanation: 'Incorrect: active proximal secretion characterizes PAH (used for renal plasma flow), not inulin.',
          },
          {
            id: 'clearance-totally-reabsorbed',
            label: 'completely reabsorbed through sodium cotransport',
            explanation: 'Incorrect: completely reabsorbed solutes (such as glucose) have a clearance of zero.',
          },
          {
            id: 'clearance-metabolized-cortex',
            label: 'rapidly metabolized by cortical parenchyma',
            explanation: 'Incorrect: ideal clearance markers must not be synthesized, degraded, or stored by the renal tissue.',
          },
        ],
      },
    },
  },
});

export const renalOsmolarityAdhLesson = lessonSchema.parse({
  id: 'renal-osmolarity-adh',
  revision: 1,
  questionId: 'renal-osmolarity-adh-q1',
  correctOptionId: 'v2-camp-aquaporin2',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch25-water-balance',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-6-tubular-reabsorption',
      section: 'Chapter 25 · Regulation of Extracellular Osmolarity and Water Balance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Como os osmorreceptores hipotalâmicos detectam uma variação de apenas 1% na concentração de sais e fecham as perdas urinárias?',
      title: 'Osmolaridade extracelular, vasopressina (ADH) e água livre',
      description: 'Aprenda como os osmorreceptores hipotalâmicos regulam o ADH, a translocação de aquaporinas-2 e o conceito de clearance de água livre.',
      objective: 'Compreender o controle neuroendócrino da tonicidade plasmática pelo ADH e analisar a excreção renal de água livre.',
      stages: [
        {
          id: 'hypothalamic-osmoreceptors',
          title: 'Osmorreceptores hipotalâmicos e secreção de ADH',
          paragraphs: [
            'A osmolaridade plasmática normal é rigidamente mantida entre 280 e 295 mOsm/kg. Variações mínimas de 1% são detectadas por osmorreceptores neurais situados no órgão vasculoso da lâmina terminal (OVLT) e no órgão subfornicial.',
            'A hipertonicidade provoca enrugamento celular desses osmorreceptores, disparando a liberação de hormônio antidiurético (ADH/arginina vasopressina) pelos corpos de neurônios dos núcleos supraóptico e paraventricular na neuro-hipófise.',
          ],
          takeaway: 'Osmorreceptores no hipotálamo detectam desvios de 1% na tonicidade para modular a secreção de ADH.',
          diagram: 'pressure',
        },
        {
          id: 'v2-receptor-signaling',
          title: 'Sinalização V2 e canais de aquaporina-2',
          paragraphs: [
            'No sangue, o ADH liga-se a receptores V2 acoplados à proteína Gs na membrana basolateral das células principais do ducto coletor, ativando a adenilil ciclase e gerando AMP cíclico (cAMP).',
            'A ativação da proteína quinase A (PKA) fosforila vesículas citoplasmáticas contendo canais de aquaporina-2 (AQP2), induzindo sua fusão rápida à membrana apical e tornando o epitélio altamente permeável à água.',
          ],
          takeaway: 'O ADH via receptor V2-cAMP insere aquaporinas-2 na membrana apical para absorver água por osmose.',
          diagram: 'membrane',
        },
        {
          id: 'free-water-clearance',
          title: 'O conceito de clearance de água livre (CH2O)',
          paragraphs: [
            'O clearance de água livre (CH2O) reflete a quantidade de água pura que deve ser subtraída ou adicionada à urina para torná-la iso-osmótica em relação ao plasma: CH2O = V - Cosm = V × [1 - (Uosm / Posm)].',
            'Quando a urina é hipotônica em relação ao plasma (Uosm < Posm), como na ausência de ADH, o CH2O é positivo, indicando eliminação líquida de água livre. Na desidratação (com ADH máximo), a urina torna-se hipertônica (Uosm > Posm) e o CH2O é negativo, indicando conservação renal de água.',
          ],
          takeaway: 'CH2O positivo significa perda de água livre (urina diluída); CH2O negativo significa conservação de água pura.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual via de transdução intracelular medeia o aumento imediato da permeabilidade à água nas células principais do ducto coletor?',
        options: [
          {
            id: 'v2-camp-aquaporin2',
            label: 'Ligação do ADH ao receptor V2, elevação de cAMP via proteína Gs e exocitose apical de aquaporina-2',
            explanation: 'Correto: o receptor V2 basolateral estimula adenilil ciclase, elevando cAMP e ativando PKA para ancorar aquaporina-2 na membrana apical.',
          },
          {
            id: 'v1-ip3-calcium',
            label: 'Estimulação de receptores V1 com clivagem de PIP2 em IP3 e diacilglicerol no epitélio proximal',
            explanation: 'Incorreto: os receptores V1a usam via Gq/IP3 no músculo liso vascular para vasoconstrição, não para permeabilidade de água no néfron.',
          },
          {
            id: 'enac-direct-block',
            label: 'Bloqueio alostérico direto dos canais epiteliais de sódio (ENaC) dependente de GMP cíclico',
            explanation: 'Incorreto: o ADH na verdade estimula a atividade de ENaC e não atua por via de GMPc.',
          },
          {
            id: 'basolateral-aqp4-shutdown',
            label: 'Inativação dos canais basolaterais constitutivos de aquaporina-3 e aquaporina-4',
            explanation: 'Incorreto: as aquaporinas 3 e 4 permanecem constitutivamente abertas na membrana basolateral para escoar a água reabsorvida.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'How do hypothalamic osmoreceptors register a mere 1% shift in tonicity and immediately halt urinary water loss?',
      title: 'Extracellular osmolarity, vasopressin (ADH), and free water clearance',
      description: 'Learn how hypothalamic osmoreceptors modulate ADH, aquaporin-2 vesicle trafficking, and the concept of free water clearance.',
      objective: 'Understand neuroendocrine control of plasma tonicity by ADH and evaluate renal free water clearance.',
      stages: [
        {
          id: 'hypothalamic-osmoreceptors',
          title: 'Hypothalamic osmoreceptors and ADH secretion',
          paragraphs: [
            'Plasma osmolarity is tightly defended within a narrow homeostatic window of 280 to 295 mOsm/kg. Deviations as subtle as 1% are detected by circumventricular osmoreceptors in the organum vasculosum of the lamina terminalis (OVLT).',
            'Hypertonic shrinkage of these neurons triggers depolarization and axonal release of antidiuretic hormone (arginine vasopressin/ADH) from posterior pituitary terminals originating in supraoptic and paraventricular nuclei.',
          ],
          takeaway: 'Hypothalamic osmoreceptors detect 1% osmolar perturbations to command posterior pituitary ADH output.',
          diagram: 'pressure',
        },
        {
          id: 'v2-receptor-signaling',
          title: 'V2 receptor signaling and aquaporin-2 trafficking',
          paragraphs: [
            'Circulating ADH engages basolateral Gs-protein-coupled V2 receptors on principal cells of the renal collecting duct, activating adenylyl cyclase to generate cyclic AMP (cAMP).',
            'Protein kinase A (PKA) phosphorylates cytoplasmic storage vesicles containing aquaporin-2 (AQP2), commanding their rapid exocytic fusion with the apical luminal membrane to permit osmotic water entry.',
          ],
          takeaway: 'ADH acts through V2-cAMP-PKA signaling to shuttle aquaporin-2 into the apical membrane of principal cells.',
          diagram: 'membrane',
        },
        {
          id: 'free-water-clearance',
          title: 'Free water clearance (CH2O) dynamics',
          paragraphs: [
            'Free water clearance (CH2O) represents the volume of solute-free water excreted or retained relative to isosmotic plasma: CH2O = V - Cosm = V × [1 - (Uosm / Posm)].',
            'When urine is dilute (Uosm < Posm), as in diabetes insipidus or water loading, CH2O is positive, indicating net water excretion. During water deprivation with maximal ADH, hypertonic urine (Uosm > Posm) yields a negative CH2O, denoting free water preservation.',
          ],
          takeaway: 'Positive CH2O reflects free water excretion (dilute urine); negative CH2O indicates pure water conservation.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which intracellular signaling cascade mediates the acute increase in collecting duct water permeability in response to ADH?',
        options: [
          {
            id: 'v2-camp-aquaporin2',
            label: 'Basolateral V2 receptor engagement, Gs-mediated cAMP surge, and apical insertion of aquaporin-2 channels',
            explanation: 'Correct: basolateral V2 receptors elevate cAMP and activate PKA to trigger exocytic insertion of aquaporin-2 into the luminal apical membrane.',
          },
          {
            id: 'v1-ip3-calcium',
            label: 'V1 receptor stimulation with IP3-mediated intracellular calcium surges across proximal epithelia',
            explanation: 'Incorrect: V1a receptors use Gq/phospholipase C signaling in vascular smooth muscle to cause vasoconstriction.',
          },
          {
            id: 'enac-direct-block',
            label: 'Allosteric blockade of epithelial sodium channels (ENaC) driven by cyclic GMP cascades',
            explanation: 'Incorrect: ADH actually upregulates ENaC activity and does not depend on cyclic GMP.',
          },
          {
            id: 'basolateral-aqp4-shutdown',
            label: 'Selective shutdown of constitutive basolateral aquaporin-3 and aquaporin-4 exit channels',
            explanation: 'Incorrect: basolateral AQP3 and AQP4 remain constitutively open to allow absorbed water to flow into the hypertonic interstitium.',
          },
        ],
      },
    },
  },
});

export const renalPotassiumCalciumLesson = lessonSchema.parse({
  id: 'renal-potassium-calcium',
  revision: 1,
  questionId: 'renal-potassium-calcium-q1',
  correctOptionId: 'principal-intercalated-k-handling',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch25-electrolytes',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-6-tubular-reabsorption',
      section: 'Chapter 25 · Tubular Processing of Potassium, Calcium, and Phosphate',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Como os néfrons evitam que uma refeição rica em potássio pare o coração em diástole?',
      title: 'Manejo renal de potássio, cálcio, fosfato e magnésio',
      description: 'Descubra como o túbulo proximal, a alça de Henle e o néfron distal dividem o controle fino do potássio, cálcio e fosfato.',
      objective: 'Diferenciar a secreção distal de potássio pelas células principais e intercaladas e a ação do PTH no transporte tubular de cálcio e fosfato.',
      stages: [
        {
          id: 'potassium-nephron-handling',
          title: 'Potássio: reabsorção em massa e secreção distal fina',
          paragraphs: [
            'Cerca de 65% do potássio filtrado é reabsorvido passivamente no túbulo contorcido proximal e outros 20% são recuperados pelo cotransportador NKCC2 na alça de Henle espessa.',
            'O ajuste fino da calemia ocorre no néfron distal (túbulo conector e ducto coletor): em dietas ricas em potássio, as células principais secretam K+ ativamente nos canais ROMK e BK estimuladas pela aldosterona; em estados de depleção severa de K+, células intercaladas tipo A reabsorvem K+ via H+/K+-ATPase.',
          ],
          takeaway: 'O TCP e a alça reabsorvem a maior parte do K+; as células principais secretam K+ sob estímulo da aldosterona.',
          diagram: 'kidney',
        },
        {
          id: 'calcium-and-pth-action',
          title: 'Cálcio renal e regulação pelo paratormônio (PTH)',
          paragraphs: [
            'Cerca de 60% do cálcio plasmático é ionizado e livremente filtrado. O TCP reabsorve ~65% via transporte paracelular passivo acoplado à água e ao sódio.',
            'O paratormônio (PTH) atua especificamente no túbulo contorcido distal, abrindo canais apicais de cálcio TRPV5 e estimulando a extrusão basolateral via trocador NCX1 e bomba PMCA, maximizando a reabsorção ativa de cálcio.',
          ],
          takeaway: 'O PTH estimula canais TRPV5 no túbulo distal para aumentar a reabsorção ativa de cálcio.',
          diagram: 'endocrine',
        },
        {
          id: 'phosphate-and-magnesium',
          title: 'Fosfato e magnésio: limiar e sítios de transporte',
          paragraphs: [
            'O fosfato é reabsorvido no TCP por cotransportadores NaPi-IIa. O PTH inibe esses cotransportadores, promovendo fosfatúria para evitar que o cálcio reabsorvido precipite como sal insolúvel no sangue.',
            'O magnésio tem comportamento singular: seu principal sítio de reabsorção não é o TCP, mas sim o ramo ascendente espesso da alça de Henle (~60%), onde cruza paracelularmente via claudinas 16 e 19 impulsionado pelo potencial transepitelial positivo gerado pela reciclagem de K+ no ROMK.',
          ],
          takeaway: 'O PTH inibe o cotransporte de fosfato no TCP; o magnésio é reabsorvido principalmente na alça de Henle espessa.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Como as células do néfron distal respondem à sobrecarga alimentar crônica de potássio sob ação da aldosterona?',
        options: [
          {
            id: 'principal-intercalated-k-handling',
            label: 'Células principais aumentam a atividade da Na+/K+-ATPase basolateral e a secreção apical de K+ via canais ROMK',
            explanation: 'Correto: a aldosterona estimula a captação basolateral de K+ pela bomba Na+/K+ e abre canais ROMK apicais para secretar o excesso de potássio na urina.',
          },
          {
            id: 'intercalated-alpha-absorption',
            label: 'Células intercaladas tipo A invertem a bomba H+/K+-ATPase para reter potássio plasmático',
            explanation: 'Incorreto: as células intercaladas alfa ativam a reabsorção de K+ durante a hipocalemia, não durante sobrecargas de potássio.',
          },
          {
            id: 'loop-nkcc2-shutdown',
            label: 'Inibição completa do cotransportador NKCC2 na alça ascendente espessa',
            explanation: 'Incorreto: o NKCC2 continua ativo na reabsorção de íons na alça de Henle; o ajuste adaptativo chave ocorre no ducto coletor.',
          },
          {
            id: 'proximal-tubule-secretion',
            label: 'O túbulo contorcido proximal passa a secretar 90% do potássio filtrado',
            explanation: 'Incorreto: o túbulo proximal é um segmento reabsorvedor contínuo de potássio, sem capacidade fisiológica de secreção maciça.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'How do nephrons prevent a potassium-rich meal from instantly causing fatal diastolic cardiac arrest?',
      title: 'Renal handling of potassium, calcium, phosphate, and magnesium',
      description: 'Discover how the proximal tubule, loop of Henle, and distal nephron coordinate fine-tuning of potassium, calcium, and phosphate.',
      objective: 'Differentiate distal potassium secretion by principal versus intercalated cells and understand PTH actions on calcium and phosphate transport.',
      stages: [
        {
          id: 'potassium-nephron-handling',
          title: 'Potassium: bulk reclamation and distal secretory tuning',
          paragraphs: [
            'Approximately 65% of filtered potassium is reabsorbed isosmotically along the proximal convoluted tubule, and an additional 20% is recaptured via NKCC2 in the thick ascending limb.',
            'Final systemic potassium balance is governed by the distal nephron: under potassium abundance or aldosterone stimulation, principal cells secrete K+ through apical ROMK and BK channels; during severe hypokalemia, type A intercalated cells reabsorb K+ via an active H+/K+-ATPase pump.',
          ],
          takeaway: 'The PCT and loop recover the bulk of potassium; distal principal cells secrete potassium under aldosterone drive.',
          diagram: 'kidney',
        },
        {
          id: 'calcium-and-pth-action',
          title: 'Renal calcium and parathyroid hormone (PTH) orchestration',
          paragraphs: [
            'About 60% of circulating calcium is ionized and freely filtered across the glomerular filtration barrier. The proximal tubule recovers ~65% via passive paracellular pathways coupled to sodium and water reabsorption.',
            'Parathyroid hormone (PTH) acts selectively in the distal convoluted tubule to open apical TRPV5 calcium channels while stimulating basolateral NCX1 antiporters and PMCA pumps, driving active regulated calcium reabsorption.',
          ],
          takeaway: 'PTH stimulates apical TRPV5 channels in the distal tubule to boost active calcium reclamation.',
          diagram: 'endocrine',
        },
        {
          id: 'phosphate-and-magnesium',
          title: 'Phosphate and magnesium: thresholds and distinct transport sites',
          paragraphs: [
            'Phosphate is reabsorbed in the proximal tubule via NaPi-IIa cotransporters. PTH downregulates these transporters, inducing phosphaturia to prevent calcium phosphate precipitation in circulating blood.',
            'Magnesium features a unique profile: its predominant reabsorptive niche is not the proximal tubule, but rather the thick ascending limb of Henle (~60%), where it crosses paracellularly via claudin-16/19 driven by the lumen-positive potential generated by ROMK K+ recycling.',
          ],
          takeaway: 'PTH promotes proximal phosphaturia; magnesium is predominantly reclaimed across the thick ascending limb of Henle.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'How do distal nephron cells adapt to dietary potassium loading under the influence of aldosterone?',
        options: [
          {
            id: 'principal-intercalated-k-handling',
            label: 'Principal cells upregulate basolateral Na+/K+-ATPase and apical ROMK channels to enhance urinary K+ secretion',
            explanation: 'Correct: aldosterone drives basolateral K+ uptake via Na+/K+-ATPase and increases apical membrane conductance via ROMK channels, dumping potassium into tubular fluid.',
          },
          {
            id: 'intercalated-alpha-absorption',
            label: 'Type A intercalated cells switch on maximal H+/K+-ATPase activity to reclaim potassium into blood',
            explanation: 'Incorrect: type A intercalated cells turn on H+/K+-ATPase during hypokalemia to save potassium, not during potassium overload.',
          },
          {
            id: 'loop-nkcc2-shutdown',
            label: 'Total shutdown of the NKCC2 cotransporter across the thick ascending limb',
            explanation: 'Incorrect: NKCC2 remains functional; loop diuretics inhibit NKCC2, which causes potassium wasting rather than normal homeostatic excretion.',
          },
          {
            id: 'proximal-tubule-secretion',
            label: 'The proximal convoluted tubule converts from reabsorbing to secreting 90% of potassium',
            explanation: 'Incorrect: the proximal tubule exclusively reabsorbs potassium; it does not physiologically switch into a secretory organ for K+.',
          },
        ],
      },
    },
  },
});

export const renalDiureticsLesson = lessonSchema.parse({
  id: 'renal-diuretics',
  revision: 1,
  questionId: 'renal-diuretics-q1',
  correctOptionId: 'loop-diuretics-nkcc2',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch25-diuretics',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-6-tubular-reabsorption',
      section: 'Chapter 25 · Diuretic Actions along the Nephron Segments',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Por que diferentes diuréticos causam impactos tão opostos nos níveis de potássio e cálcio sanguíneos?',
      title: 'Fisiologia aplicada dos diuréticos nos transportadores tubulares',
      description: 'Correlacione as principais classes de diuréticos (de alça, tiazídicos, poupadores de K+ e inibidores da anidrase carbônica) aos seus alvos moleculares.',
      objective: 'Identificar os transportadores inibidos por cada classe de diurético e prever suas consequências hidroeletrolíticas características.',
      stages: [
        {
          id: 'carbonic-anhydrase-osmotic',
          title: 'Túbulo proximal: acetazolamida e diuréticos osmóticos',
          paragraphs: [
            'A acetazolamida inibe a anidrase carbônica luminal e citoplasmática no túbulo contorcido proximal, impedindo a reabsorção de bicarbonato e sódio, o que induz diurese alcalina autolimitada e acidose metabólica.',
            'O manitol é um diurético osmótico não reabsorvível que retém água por atração osmótica no lúmen do túbulo proximal e ramo descendente da alça, sendo muito empregado para redução aguda de edema cerebral e hipertensão intracraniana.',
          ],
          takeaway: 'A acetazolamida inibe a anidrase carbônica no TCP; o manitol atua como soluto osmótico não reabsorvível.',
          diagram: 'kidney',
        },
        {
          id: 'loop-and-thiazide-diuretics',
          title: 'Alça de Henle e túbulo distal: furosemida e hidroclorotiazida',
          paragraphs: [
            'Os diuréticos de alça (furosemida, bumetanida) inibem o cotransportador Na+-K+-2Cl- (NKCC2) no ramo ascendente espesso da alça de Henle. Por dissiparem a hiperosmolaridade medular, produzem natriurese potente e aumentam a excreção de cálcio e magnésio.',
            'Os tiazídicos (hidroclorotiazida, clortalidona) inibem o cotransportador Na+-Cl- (NCCT) no túbulo contorcido distal. Por terem menor fração de sobrecarga tubular, são menos natriuréticos, mas diminuem a excreção urinária de cálcio (hipocalciúria útil em litíase renal recorrente).',
          ],
          takeaway: 'Diuréticos de alça inibem NKCC2 e promovem calciúria; tiazídicos inibem NCCT e retêm cálcio.',
          diagram: 'membrane',
        },
        {
          id: 'potassium-sparing-diuretics',
          title: 'Ducto coletor: poupadores de potássio',
          paragraphs: [
            'No túbulo conector e ducto coletor cortical, os poupadores de potássio atuam bloqueando os canais de sódio epiteliais ENaC (amilorida, triantereno) ou antagonizando os receptores nucleares de mineralocorticoides (espironolactona, eplerenona).',
            'Ao impedirem a reabsorção de sódio sem criar o lúmen eletro-negativo que traciona o potássio, esses fármacos evitam a caliurese excessiva, servindo como adjuvantes para prevenir hipocalemia.',
          ],
          takeaway: 'Antagonistas da aldosterona e bloqueadores de ENaC poupam potássio ao reduzir a eletronegatividade luminal.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual transportador tubular renal é o alvo farmacológico direto dos diuréticos de alça como a furosemida?',
        options: [
          {
            id: 'loop-diuretics-nkcc2',
            label: 'Cotransportador Na+-K+-2Cl- (NKCC2) no ramo ascendente espesso da alça de Henle',
            explanation: 'Correto: a furosemida liga-se competitivamente ao sítio de cloreto do NKCC2, bloqueando a absorção de íons e dissipando o gradiente medular.',
          },
          {
            id: 'distal-ncct-symporter',
            label: 'Cotransportador Na+-Cl- sensível a tiazídicos (NCCT) no túbulo contorcido distal',
            explanation: 'Incorreto: o NCCT é o alvo específico dos diuréticos tiazídicos como a hidroclorotiazida.',
          },
          {
            id: 'enac-sodium-channel',
            label: 'Canais de sódio epiteliais amiloides (ENaC) nas células principais do ducto coletor',
            explanation: 'Incorreto: o ENaC é inibido pela amilorida e triantereno, diuréticos poupadores de potássio.',
          },
          {
            id: 'sglt2-cotransporter',
            label: 'Cotransportador de sódio-glicose tipo 2 (SGLT2) na borda em escova do túbulo proximal',
            explanation: 'Incorreto: os inibidores de SGLT2 (gliflozinas) atuam na glicose, constituindo antidiabéticos com discreto efeito natriurético.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'Why do different classes of diuretics produce opposing clinical effects on blood calcium and potassium concentrations?',
      title: 'Applied physiology of diuretics on renal tubular transporters',
      description: 'Correlate major diuretic classes (loop, thiazide, potassium-sparing, and carbonic anhydrase inhibitors) with their molecular transporter targets.',
      objective: 'Identify the tubular transporters inhibited by each diuretic class and anticipate characteristic electrolyte consequences.',
      stages: [
        {
          id: 'carbonic-anhydrase-osmotic',
          title: 'Proximal tubule: acetazolamide and osmotic agents',
          paragraphs: [
            'Acetazolamide inhibits both luminal and intracellular carbonic anhydrase in the proximal convoluted tubule, blunting sodium and bicarbonate reabsorption to induce self-limiting alkaline diuresis and metabolic acidosis.',
            'Mannitol acts as an unreabsorbable osmotic diuretic, retaining water in the proximal tubule lumen and thin descending limb through osmotic attraction, rendering it useful for reducing acute cerebral edema.',
          ],
          takeaway: 'Acetazolamide targets proximal carbonic anhydrase; mannitol exerts non-reabsorbable intraluminal osmotic drag.',
          diagram: 'kidney',
        },
        {
          id: 'loop-and-thiazide-diuretics',
          title: 'Loop and distal tubule: furosemide and thiazides',
          paragraphs: [
            'Loop diuretics (furosemide, bumetanide) reversibly block the Na+-K+-2Cl- cotransporter (NKCC2) in the thick ascending limb of Henle. By dissipating the medullary interstitial hyperosmolar gradient, they induce robust natriuresis and increase urinary calcium and magnesium excretion.',
            'Thiazide diuretics (hydrochlorothiazide, chlorthalidone) inhibit the electroneutral Na+-Cl- cotransporter (NCCT) in the distal convoluted tubule. Handling a smaller fraction of filtered sodium, they are less potent natriuretics, but diminish urinary calcium loss (useful for treating recurrent calcium nephrolithiasis).',
          ],
          takeaway: 'Loop diuretics block NKCC2 and promote calciuria; thiazides inhibit NCCT and enhance calcium reabsorption.',
          diagram: 'membrane',
        },
        {
          id: 'potassium-sparing-diuretics',
          title: 'Collecting duct: potassium-sparing diuretics',
          paragraphs: [
            'In the late distal tubule and cortical collecting duct, potassium-sparing diuretics either directly plug apical epithelial sodium channels (ENaC, e.g. amiloride, triamterene) or antagonize cytosolic mineralocorticoid receptors (spironolactone, eplerenone).',
            'By curtailing electrogenic sodium entry without generating the lumen-negative transcellular voltage that pulls potassium outward, these agents blunt urinary potassium wasting and prevent hypokalemia.',
          ],
          takeaway: 'Aldosterone antagonists and ENaC blockers save potassium by dampening lumen-negative driving potentials.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which renal tubular transporter serves as the direct pharmacological target of loop diuretics such as furosemide?',
        options: [
          {
            id: 'loop-diuretics-nkcc2',
            label: 'Na+-K+-2Cl- cotransporter (NKCC2) in the thick ascending limb of the loop of Henle',
            explanation: 'Correct: furosemide competes for the chloride-binding site of NKCC2, halting salt transport and collapsing the medullary osmotic gradient.',
          },
          {
            id: 'distal-ncct-symporter',
            label: 'Thiazide-sensitive Na+-Cl- cotransporter (NCCT) in the distal convoluted tubule',
            explanation: 'Incorrect: NCCT is the specific molecular target of thiazide diuretics such as hydrochlorothiazide.',
          },
          {
            id: 'enac-sodium-channel',
            label: 'Amiloride-sensitive epithelial sodium channels (ENaC) on collecting duct principal cells',
            explanation: 'Incorrect: ENaC channels are blocked by potassium-sparing agents such as amiloride and triamterene.',
          },
          {
            id: 'sglt2-cotransporter',
            label: 'Sodium-glucose cotransporter 2 (SGLT2) along the proximal tubule apical brush border',
            explanation: 'Incorrect: SGLT2 is targeted by gliflozins, which are antidiabetic drugs that produce modest glycosuric natriuresis.',
          },
        ],
      },
    },
  },
});

export const renalMicturitionLesson = lessonSchema.parse({
  id: 'renal-micturition',
  revision: 1,
  questionId: 'renal-micturition-q1',
  correctOptionId: 'micturition-order-correct',
  correctOrderIds: ['bladder-filling', 'pelvic-afferents', 'pontine-integration', 'detrusor-contraction'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch25-micturition',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-8-urine-transport-storage-and-elimination',
      section: 'Chapter 25 · Urine Storage and the Micturition Reflex',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Como o cérebro decide conscientemente a hora exata de esvaziar a bexiga coordenando três redes nervosas distintas?',
      title: 'Trato urinário inferior e reflexo da micção',
      description: 'Entenda a inervação simpática, parassimpática e somática da bexiga urinária e dos esfíncteres, e o reflexo pontino da micção.',
      objective: 'Ordenar os eventos neurais do arco reflexo da micção e diferenciar o controle simpático de continência do comando parassimpático de esvaziamento.',
      stages: [
        {
          id: 'bladder-anatomy-innervation',
          title: 'Três sistemas neurais controlam a bexiga',
          paragraphs: [
            'A bexiga é composta pelo músculo detrusor liso e pelo trígono vesical. A continência e a micção dependem de três inervações coordenadas: simpática (nervos hipogástricos, T11-L2), parassimpática (nervos pélvicos, S2-S4) e somática voluntária (nervo pudendo, S2-S4).',
            'Durante a fase de enchimento, o tônus simpático predomina: a noradrenalina relaxa o detrusor via receptores beta-3 e contrai o esfíncter uretral interno via receptores alfa-1, mantendo a urina retida sem aumento de pressão intravesical.',
          ],
          takeaway: 'O simpático (T11-L2) promove continência relaxando o detrusor (beta-3) e fechando o esfíncter interno (alfa-1).',
          diagram: 'kidney',
        },
        {
          id: 'pontine-micturition-center',
          title: 'O centro pontino da micção e o esfíncter externo',
          paragraphs: [
            'Conforme a bexiga atinge volumes de 300 a 400 mL, mecanorreceptores de estiramento na parede disparam potenciais pelas fibras aferentes dos nervos pélvicos até a medula sacral e o centro pontino da micção (núcleo de Barrington).',
            'Se o córtex cerebral aprova o momento como socialmente apropriado, o centro pontino suprime o tônus simpático e inibe os motoneurônios do nervo pudendo no núcleo de Onuf, relaxando o esfíncter uretral externo esquelético.',
          ],
          takeaway: 'O centro pontino da micção coordena o relaxamento do esfíncter externo somático e o disparo parassimpático.',
          diagram: 'brain',
        },
        {
          id: 'parasympathetic-emptying',
          title: 'Esvaziamento ativo via reflexo parassimpático',
          paragraphs: [
            'Em resposta ao comando pontino, neurônios pré-ganglionares parassimpáticos sacrais (S2-S4) disparam impulsos vigorosos pelos nervos pélvicos.',
            'A liberação de acetilcolina atua sobre receptores muscarínicos M3 no músculo detrusor, provocando contração coordenada e sustentada de toda a parede vesical, ejetando a urina sob baixa resistência uretral.',
          ],
          takeaway: 'O parassimpático sacral (S2-S4) contrai o músculo detrusor via receptores muscarínicos M3 para esvaziar a bexiga.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Ordene a sequência neural de eventos fisiológicos que culminam na micção voluntária:',
        items: [
          {
            id: 'bladder-filling',
            label: 'Enchimento vesical progressivo com estiramento mecânico da parede do detrusor',
            explanation: 'O acúmulo contínuo de urina eleva a tensão parietal ativando mecanorreceptores.',
          },
          {
            id: 'pelvic-afferents',
            label: 'Transmissão de potenciais aferentes via nervos pélvicos sacrais ao tronco encefálico',
            explanation: 'Fibras sensoriais sacrais informam o volume vesical ao centro pontino da micção.',
          },
          {
            id: 'pontine-integration',
            label: 'Integração no centro pontino da micção e relaxamento do esfíncter uretral externo via nervo pudendo',
            explanation: 'O córtex autoriza o esvaziamento e a ponte inibe os motoneurônios do nervo pudendo.',
          },
          {
            id: 'detrusor-contraction',
            label: 'Disparo eferente parassimpático sacral promovendo contração sustentada do detrusor via receptores M3',
            explanation: 'A ativação muscarínica M3 esvazia a bexiga através da uretra desobstruída.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'How does the human brain consciously orchestrate three separate nervous subsystems to decide the exact second to void urine?',
      title: 'Lower urinary tract and the micturition reflex',
      description: 'Understand the sympathetic, parasympathetic, and somatic innervation of the bladder and sphincters, alongside the pontine micturition center.',
      objective: 'Sequence the neural steps of the micturition reflex arc and differentiate sympathetic storage from parasympathetic emptying.',
      stages: [
        {
          id: 'bladder-anatomy-innervation',
          title: 'Three neural systems govern bladder dynamics',
          paragraphs: [
            'The urinary bladder consists of the smooth detrusor body and the trigone base. Continence and micturition depend on three integrated neural inputs: sympathetic (hypogastric nerves, T11-L2), parasympathetic (pelvic splanchnic nerves, S2-S4), and somatic motor (pudendal nerve, S2-S4).',
            'During filling, sympathetic drive dominates: norepinephrine relaxes detrusor smooth muscle via beta-3 adrenergic receptors and contracts the smooth internal urethral sphincter via alpha-1 receptors, keeping the bladder compliant under low pressures.',
          ],
          takeaway: 'Sympathetic tone (T11-L2) enforces continence by relaxing the detrusor (beta-3) and closing the internal sphincter (alfa-1).',
          diagram: 'kidney',
        },
        {
          id: 'pontine-micturition-center',
          title: 'The pontine micturition center and external sphincter',
          paragraphs: [
            'As bladder volume approaches 300 to 400 mL, stretch receptors within the bladder wall fire action potentials through pelvic sensory afferents to sacral segments and the pontine micturition center (Barrington’s nucleus).',
            'If voluntary cortical inputs confirm that voiding is socially permissible, the pontine center suppresses sympathetic tone and silences pudendal motor neurons in Onuf’s nucleus, relaxing the striated external urethral sphincter.',
          ],
          takeaway: 'The pontine micturition center synchronizes external sphincter relaxation with parasympathetic detrusor drive.',
          diagram: 'brain',
        },
        {
          id: 'parasympathetic-emptying',
          title: 'Active voiding via the parasympathetic reflex arc',
          paragraphs: [
            'Under descending pontine permission, sacral preganglionic parasympathetic neurons (S2-S4) send high-frequency discharges through pelvic nerves to ganglia on the bladder wall.',
            'Released acetylcholine stimulates muscarinic M3 receptors across the detrusor muscle, evoking powerful, coordinated contraction that purges stored urine through the open urethra.',
          ],
          takeaway: 'Sacral parasympathetics (S2-S4) contract the detrusor via muscarinic M3 receptors to achieve complete voiding.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Order the physiological neural sequence leading to voluntary micturition:',
        items: [
          {
            id: 'bladder-filling',
            label: 'Progressive bladder filling eliciting mechanical detrusor wall distension',
            explanation: 'Urine accumulation stretches wall mechanoreceptors as volume climbs toward threshold.',
          },
          {
            id: 'pelvic-afferents',
            label: 'Afferent signaling via sacral pelvic nerves toward the pontine micturition center',
            explanation: 'Sensory afferents carry volume-dependent tension signals to the brainstem controller.',
          },
          {
            id: 'pontine-integration',
            label: 'Pontine integration permitting relaxation of the striated external sphincter via pudendal nerve inhibition',
            explanation: 'Cortical clearance enables the brainstem to turn off somatic motor tone to the external sphincter.',
          },
          {
            id: 'detrusor-contraction',
            label: 'Efferent sacral parasympathetic outflow driving detrusor contraction via muscarinic M3 receptors',
            explanation: 'M3 receptor stimulation contracts the detrusor muscle, expelling urine through the relaxed outflow tract.',
          },
        ],
      },
    },
  },
});
