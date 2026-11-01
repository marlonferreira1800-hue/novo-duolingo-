import { lessonSchema } from '../src/contracts/learning';

export const renalTubularReabsorptionLesson = lessonSchema.parse({
  id: 'renal-tubular-reabsorption',
  revision: 1,
  questionId: 'renal-tubular-proximal',
  correctOptionId: 'tm-exceeded',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch25-pct',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-6-tubular-reabsorption',
      section: 'Chapter 25 · Tubular Reabsorption',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Quase todo o filtrado glomerular volta para o sangue — onde ocorre a maior parte dessa reabsorção?',
      title: 'Reabsorção tubular e transporte de glicose',
      description: 'Compreenda a reabsorção no túbulo contorcido proximal, o transporte máximo (Tm) de glicose e o limiar renal.',
      objective: 'Explicar a função do túbulo contorcido proximal na reabsorção de solutos e entender o conceito de transporte máximo de glicose.',
      stages: [
        {
          id: 'pct-bulk-transport',
          title: 'O túbulo contorcido proximal faz o trabalho pesado',
          paragraphs: [
            'O túbulo contorcido proximal (TCP) é responsável pela reabsorção massiva do filtrado: recupera cerca de 65% da água e do cloreto de sódio, além de praticamente 100% da glicose e dos aminoácidos filtrados.',
            'A bomba de Na+/K+-ATPase na membrana basolateral mantém um gradiente de sódio favorável que aciona cotransportadores na borda em escova apical, como o SGLT2 para a glicose.',
          ],
          takeaway: 'O TCP reabsorve a maior fração de solutos e água acoplada ao transporte ativo secundário de sódio.',
          diagram: 'kidney',
        },
        {
          id: 'glucose-transport-maximum',
          title: 'Transporte máximo (Tm) e capacidade finita',
          paragraphs: [
            'Os transportadores proteicos tubulares possuem capacidade cinética limitada. Quando todos os carreadores estão ocupados, atinge-se o Transporte Máximo (Tm).',
            'Para a glicose, o Tm situa-se ao redor de 375 mg/min nos seres humanos. Qualquer taxa de filtração de glicose que exceda essa capacidade não consegue ser recuperada.',
          ],
          takeaway: 'O Tm representa a saturação máxima dos carreadores do túbulo renal.',
          diagram: 'kidney',
        },
        {
          id: 'renal-threshold-glycosuria',
          title: 'Limiar renal e diurese osmótica',
          paragraphs: [
            'O limiar renal da glicose é a concentração plasmática em que ela começa a transbordar na urina (cerca de 180 a 200 mg/dL).',
            'No diabetes mellitus não controlado com hiperglicemia acentuada, a saturação dos carreadores resulta em glicosúria. A glicose intraluminal retém água por osmose, gerando poliúria osmótica.',
          ],
          takeaway: 'Superar o limiar renal de ~180-200 mg/dL satura os transportadores e provoca glicosúria com diurese osmótica.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Por que pacientes com diabetes mellitus descompensado apresentam glicose na urina (glicosúria)?',
        options: [
          {
            id: 'tm-exceeded',
            label: 'A carga filtrada de glicose ultrapassa o transporte máximo (Tm) dos carreadores do túbulo proximal',
            explanation: 'Correto: quando a glicemia excede ~180-200 mg/dL, a carga filtrada satura os cotransportadores SGLT do TCP, e a glicose não reabsorvida é eliminada na urina.',
          },
          {
            id: 'filter-breakdown',
            label: 'A barreira de filtração glomerular torna-se permeável a grandes monossacarídeos plasmáticos',
            explanation: 'Incorreto: a glicose já é livremente filtrada em néfrons normais; o defeito clínico é a incapacidade do túbulo em reabsorver a sobrecarga filtrada.',
          },
          {
            id: 'pct-necrosis',
            label: 'Ocorre destruição dos receptores de aldosterona no epitélio tubular coletor medular',
            explanation: 'Incorreto: a aldosterona atua no ducto coletor regulando sódio e potássio, sem relação direta com a glicosúria.',
          },
          {
            id: 'aldosterone-excess',
            label: 'O túbulo contorcido distal passa a secretar ativamente glicose para o lúmen tubular',
            explanation: 'Incorreto: os túbulos renais não secretam glicose; ela apenas deixa de ser reabsorvida quando os carreadores saturam.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'Almost all glomerular filtrate returns to the blood — where does most of this reabsorption happen?',
      title: 'Tubular reabsorption and glucose transport',
      description: 'Understand reabsorption in the proximal convoluted tubule, glucose transport maximum (Tm), and the renal threshold.',
      objective: 'Explain the function of the proximal convoluted tubule in solute reabsorption and grasp the concept of glucose transport maximum.',
      stages: [
        {
          id: 'pct-bulk-transport',
          title: 'The proximal convoluted tubule does the heavy lifting',
          paragraphs: [
            'The proximal convoluted tubule (PCT) is responsible for bulk filtrate reabsorption: it recovers roughly 65% of filtered water and sodium chloride, along with nearly 100% of filtered glucose and amino acids.',
            'The basolateral Na+/K+-ATPase pump maintains a favorable sodium gradient that powers apical brush-border cotransporters, such as SGLT2 for glucose.',
          ],
          takeaway: 'The PCT reabsorbs the bulk of solutes and water coupled to sodium secondary active transport.',
          diagram: 'kidney',
        },
        {
          id: 'glucose-transport-maximum',
          title: 'Transport maximum (Tm) and finite capacity',
          paragraphs: [
            'Tubular protein transporters have a finite kinetic capacity. When all carrier proteins are saturated, the transport maximum (Tm) is reached.',
            'For glucose, the normal Tm averages about 375 mg/min in humans. Any filtered glucose load exceeding this rate cannot be reabsorbed.',
          ],
          takeaway: 'Tm represents the maximal saturation capacity of renal tubular carriers.',
          diagram: 'kidney',
        },
        {
          id: 'renal-threshold-glycosuria',
          title: 'Renal threshold and osmotic diuresis',
          paragraphs: [
            'The renal threshold for glucose is the plasma concentration at which glucose begins to spill into the urine (typically 180 to 200 mg/dL).',
            'In uncontrolled diabetes mellitus with severe hyperglycemia, saturated carriers lead to glycosuria. Intraluminal glucose retains water osmotically, inducing osmotic polyuria.',
          ],
          takeaway: 'Exceeding the renal threshold of ~180-200 mg/dL saturates transporters and causes glycosuria with osmotic diuresis.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Why do patients with decompensated diabetes mellitus exhibit glucose in their urine (glycosuria)?',
        options: [
          {
            id: 'tm-exceeded',
            label: 'The filtered glucose load exceeds the transport maximum (Tm) of proximal tubule carriers',
            explanation: 'Correct: when blood glucose exceeds ~180-200 mg/dL, the filtered load saturates PCT SGLT cotransporters, and unreabsorbed glucose is excreted in urine.',
          },
          {
            id: 'filter-breakdown',
            label: 'The glomerular filtration barrier becomes permeable to large plasma monosaccharides',
            explanation: 'Incorrect: glucose is already freely filtered by normal glomeruli; the issue is that tubular reabsorption capacity is overwhelmed.',
          },
          {
            id: 'pct-necrosis',
            label: 'Destruction of aldosterone receptors occurs within the medullary collecting duct epithelium',
            explanation: 'Incorrect: aldosterone acts on the collecting duct to regulate sodium and potassium, without direct involvement in glycosuria.',
          },
          {
            id: 'aldosterone-excess',
            label: 'The distal convoluted tubule begins actively secreting glucose into the tubular lumen',
            explanation: 'Incorrect: renal tubules do not actively secrete glucose; it simply fails to be reabsorbed once carriers saturate.',
          },
        ],
      },
    },
  },
});

export const renalCountercurrentLesson = lessonSchema.parse({
  id: 'renal-countercurrent',
  revision: 1,
  questionId: 'renal-countercurrent-adh',
  correctOptionId: 'medullary-gradient-aquaporins',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch25-countercurrent',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-6-tubular-reabsorption',
      section: 'Chapter 25 · Countercurrent Multiplication and Medullary Osmolarity',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Como os rins conseguem produzir uma urina muito mais concentrada que o próprio plasma?',
      title: 'Alça de Henle e mecanismo contracorrente',
      description: 'Explore como a alça de Henle e a circulação medular geram o gradiente hiperosmolar que permite ao ADH concentrar a urina.',
      objective: 'Compreender o mecanismo de multiplicação por contracorrente na alça de Henle e a ação do ADH no ducto coletor.',
      stages: [
        {
          id: 'henle-countercurrent-multiplication',
          title: 'A assimetria funcional da alça de Henle',
          paragraphs: [
            'O ramo descendente fino da alça de Henle é altamente permeável à água e pouco permeável a solutos, concentrando o líquido tubular conforme desce na medula.',
            'O ramo ascendente espesso é impermeável à água e transporta ativamente solutos via cotransportador Na+-K+-2Cl- (NKCC2), bombeando íons para o interstício medular.',
          ],
          takeaway: 'A separação de soluto e solvente entre os ramos da alça gera a multiplicação por contracorrente.',
          diagram: 'kidney',
        },
        {
          id: 'medullary-hyperosmolar-gradient',
          title: 'Construção da hiperosmolaridade medular',
          paragraphs: [
            'A ação contínua do cotransportador NKCC2, combinada com a reciclagem de ureia a partir do ducto coletor interno, cria um gradiente osmótico medular crescente (de 300 mOsm/L no córtex até 1200 mOsm/L na papila).',
            'Os vasos retos (vasa recta) atuam como trocadores por contracorrente passivos, irrigando a medula sem dissipar esse gradiente osmótico vital.',
          ],
          takeaway: 'O interstício medular hiperosmolar é o motor osmótico para a conservação renal de água.',
          diagram: 'kidney',
        },
        {
          id: 'adh-aquaporin-action',
          title: 'O ADH abre as comportas de água',
          paragraphs: [
            'Na presença de hiperosmolaridade plasmática ou hipovolemia, a neuro-hipófise secreta o hormônio antidiurético (ADH ou vasopressina).',
            'O ADH liga-se a receptores V2 nas células principais do ducto coletor, promovendo a translocação de vesículas com aquaporinas-2 para a membrana apical, reabsorvendo água em direção ao interstício hipertônico.',
          ],
          takeaway: 'O ADH insere canais de aquaporina-2 no ducto coletor, permitindo que a água flua para o interstício hiperosmolar.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o mecanismo pelo qual o hormônio antidiurético (ADH) concentra a urina no néfron distal?',
        options: [
          {
            id: 'medullary-gradient-aquaporins',
            label: 'Estimula a inserção de aquaporinas-2 no ducto coletor, reabsorvendo água a favor do gradiente hipertônico medular',
            explanation: 'Correto: o ADH atua nos receptores V2 inserindo canais de aquaporina-2 na membrana apical, facilitando a reabsorção de água pelo gradiente medular.',
          },
          {
            id: 'inhibit-nkcc2',
            label: 'Inibe os cotransportadores NKCC2 na alça de Henle para dissipar o gradiente osmótico',
            explanation: 'Incorreto: inibir NKCC2 é a ação de diuréticos de alça (como furosemida), que reduzem a capacidade renal de concentrar a urina.',
          },
          {
            id: 'dilate-afferent',
            label: 'Dilata a arteríola aferente renal para forçar a excreção rápida de solutos intraluminais',
            explanation: 'Incorreto: a dilatação da arteríola aferente modula a taxa de filtração glomerular, não a permeabilidade à água mediada por ADH.',
          },
          {
            id: 'block-urea',
            label: 'Bloqueia completamente os transportadores de ureia, impedindo a osmolaridade intersticial profunda',
            explanation: 'Incorreto: o ADH na verdade estimula os transportadores de ureia (UT-A1) no ducto coletor medular interno, reforçando o gradiente.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'How do the kidneys produce urine that is far more concentrated than blood plasma?',
      title: 'Loop of Henle and countercurrent mechanism',
      description: 'Explore how the loop of Henle and medullary circulation create the hyperosmolar gradient that allows ADH to concentrate urine.',
      objective: 'Understand the countercurrent multiplication mechanism in the loop of Henle and ADH action on the collecting duct.',
      stages: [
        {
          id: 'henle-countercurrent-multiplication',
          title: 'Functional asymmetry of the loop of Henle',
          paragraphs: [
            'The thin descending limb of the loop of Henle is highly permeable to water and poorly permeable to solutes, concentrating tubular fluid as it descends into the medulla.',
            'The thick ascending limb is impermeable to water and actively transports solutes via the Na+-K+-2Cl- cotransporter (NKCC2), pumping ions into the medullary interstitium.',
          ],
          takeaway: 'The separation of solute and water reabsorption between loop limbs drives countercurrent multiplication.',
          diagram: 'kidney',
        },
        {
          id: 'medullary-hyperosmolar-gradient',
          title: 'Building medullary hyperosmolarity',
          paragraphs: [
            'Continuous NKCC2 transport, coupled with urea recycling from the inner medullary collecting duct, creates a progressive osmotic gradient (from 300 mOsm/L at cortex to 1200 mOsm/L at papilla).',
            'The vasa recta operate as passive countercurrent exchangers, nourishing the medulla without washing away this essential osmotic gradient.',
          ],
          takeaway: 'The hyperosmolar medullary interstitium provides the osmotic driving force to conserve water.',
          diagram: 'kidney',
        },
        {
          id: 'adh-aquaporin-action',
          title: 'ADH opens the water gates',
          paragraphs: [
            'In response to elevated plasma osmolarity or hypovolemia, the posterior pituitary releases antidiuretic hormone (ADH or vasopressin).',
            'ADH binds V2 receptors on principal cells of the collecting duct, inducing the trafficking of aquaporin-2 water channels to the apical membrane to reabsorb water into the hypertonic interstitium.',
          ],
          takeaway: 'ADH inserts aquaporin-2 channels into the collecting duct, enabling water flow down the medullary osmotic gradient.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'By what mechanism does antidiuretic hormone (ADH) concentrate urine in the distal nephron?',
        options: [
          {
            id: 'medullary-gradient-aquaporins',
            label: 'Stimulates insertion of aquaporin-2 into the collecting duct, reabsorbing water along the medullary osmotic gradient',
            explanation: 'Correct: ADH acts on V2 receptors to insert aquaporin-2 channels into the apical membrane, allowing water to follow the medullary hyperosmotic gradient.',
          },
          {
            id: 'inhibit-nkcc2',
            label: 'Inhibits NKCC2 cotransporters in the loop of Henle to dissipate the osmotic gradient',
            explanation: 'Incorrect: inhibiting NKCC2 is the mechanism of loop diuretics (e.g. furosemide), which impairs the kidney’s ability to concentrate urine.',
          },
          {
            id: 'dilate-afferent',
            label: 'Dilates the renal afferent arteriole to force rapid excretion of intraluminal solutes',
            explanation: 'Incorrect: afferent arteriole dilation modulates glomerular filtration rate, not ADH-mediated water permeability.',
          },
          {
            id: 'block-urea',
            label: 'Completely blocks urea transporters, preventing deep medullary interstitial osmolarity',
            explanation: 'Incorrect: ADH actually facilitates urea transporter (UT-A1) activity in the inner medullary collecting duct, boosting the medullary gradient.',
          },
        ],
      },
    },
  },
});

export const renalRaasLesson = lessonSchema.parse({
  id: 'renal-raas',
  revision: 1,
  questionId: 'renal-raas-aldosterone',
  correctOptionId: 'renin-angiotensin-aldosterone',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'renal-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch25-raas',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-7-regulation-of-renal-blood-flow',
      section: 'Chapter 25 · Endocrine Regulation of Kidney Function',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia renal',
      hook: 'Quando a pressão arterial despenca, como os rins comandam o resgate de volume de todo o organismo?',
      title: 'Sistema renina-angiotensina-aldosterona (SRAA)',
      description: 'Descubra como o aparelho justaglomerular detecta a hipovolemia e desencadeia a cascata hormonal que regula volemia e pressão.',
      objective: 'Analisar os componentes do SRAA, o papel do aparelho justaglomerular e as ações da angiotensina II e da aldosterona.',
      stages: [
        {
          id: 'jga-renin-release',
          title: 'O aparelho justaglomerular dispara o alarme',
          paragraphs: [
            'O aparelho justaglomerular é formado pelas células justaglomerulares da arteríola aferente e pela mácula densa do túbulo distal.',
            'A queda da pressão de perfusão renal, a diminuição do aporte de NaCl à mácula densa ou o estímulo simpático beta-1 disparam a secreção de renina na corrente sanguínea.',
          ],
          takeaway: 'A renina é liberada pelas células justaglomerulares quando a pressão ou o fluxo renal caem.',
          diagram: 'kidney',
        },
        {
          id: 'angiotensin-cascade',
          title: 'A cascata da angiotensina II',
          paragraphs: [
            'A renina cliva o angiotensinogênio hepático em angiotensina I. Nos leitos vasculares (sobretudo pulmonar e renal), a Enzima Conversora de Angiotensina (ECA) converte Ang I em Angiotensina II.',
            'A Angiotensina II causa potente vasoconstrição sistêmica e preferencial da arteríola eferente glomerular, preservando a taxa de filtração glomerular mesmo sob hipotensão moderada.',
          ],
          takeaway: 'A ECA converte Ang I em Ang II, que gera vasoconstrição arteriolar sistêmica e eferente.',
          diagram: 'kidney',
        },
        {
          id: 'aldosterone-retention',
          title: 'A aldosterona retém sódio e água',
          paragraphs: [
            'A Angiotensina II estimula a zona glomerulosa do córtex adrenal a secretar aldosterona.',
            'A aldosterona atua nas células principais do ducto coletor cortical, aumentando a expressão dos canais de sódio epiteliais (ENaC) e da Na+/K+-ATPase, promovendo reabsorção de Na+ e excreção de K+ e H+.',
          ],
          takeaway: 'A aldosterona recupera sódio e água em troca de potássio e hidrogênio, restaurando a volemia.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o efeito fisiológico integrado da ativação do sistema renina-angiotensina-aldosterona (SRAA) na vigência de hipovolemia?',
        options: [
          {
            id: 'renin-angiotensin-aldosterone',
            label: 'Vasoconstrição arteriolar sistêmica e retenção de sódio e água, restabelecendo a pressão arterial e a volemia',
            explanation: 'Correto: a angiotensina II gera vasoconstrição e a aldosterona retém Na+ e água no ducto coletor, restaurando a volemia e a pressão arterial.',
          },
          {
            id: 'vasodilation-natriuresis',
            label: 'Vasodilatação esplâncnica associada a natriurese intensa e perda de volume intravascular',
            explanation: 'Incorreto: esse é o perfil do peptídeo natriurético atrial (ANP), antagonista fisiológico do SRAA.',
          },
          {
            id: 'potassium-retention',
            label: 'Retenção primária de potássio associada a bloqueio da síntese adrenal de esteroides',
            explanation: 'Incorreto: a aldosterona estimula a secreção e excreção de potássio, podendo causar hipocalemia, não retenção.',
          },
          {
            id: 'inhibit-angiotensin',
            label: 'Inibição direta da enzima conversora de angiotensina (ECA) nos capilares alveolares pulmonares',
            explanation: 'Incorreto: o SRAA depende da atividade funcional da ECA para converter Ang I em Ang II.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Renal physiology',
      hook: 'When blood pressure crashes, how do the kidneys coordinate a full-body volume rescue?',
      title: 'Renin-angiotensin-aldosterone system (RAAS)',
      description: 'Discover how the juxtaglomerular apparatus detects hypovolemia and triggers the endocrine cascade regulating volume and pressure.',
      objective: 'Analyze RAAS components, the role of the juxtaglomerular apparatus, and the actions of angiotensin II and aldosterone.',
      stages: [
        {
          id: 'jga-renin-release',
          title: 'The juxtaglomerular apparatus sounds the alarm',
          paragraphs: [
            'The juxtaglomerular apparatus comprises juxtaglomerular granular cells in the afferent arteriole and the macula densa of the distal tubule.',
            'A drop in renal perfusion pressure, reduced NaCl delivery to the macula densa, or beta-1 sympathetic stimulation triggers renin release into the bloodstream.',
          ],
          takeaway: 'Renin is released by juxtaglomerular cells when renal perfusion or distal NaCl delivery declines.',
          diagram: 'kidney',
        },
        {
          id: 'angiotensin-cascade',
          title: 'The angiotensin II cascade',
          paragraphs: [
            'Renin cleaves hepatic angiotensinogen into angiotensin I. In vascular endothelial beds (especially pulmonary and renal), Angiotensin-Converting Enzyme (ACE) converts Ang I to Angiotensin II.',
            'Angiotensin II exerts potent systemic vasoconstriction and preferential efferent arteriolar constriction, sustaining glomerular filtration rate even during moderate hypotension.',
          ],
          takeaway: 'ACE converts Ang I to Ang II, causing systemic arteriolar and preferential efferent renal vasoconstriction.',
          diagram: 'kidney',
        },
        {
          id: 'aldosterone-retention',
          title: 'Aldosterone retains sodium and water',
          paragraphs: [
            'Angiotensin II stimulates the zona glomerulosa of the adrenal cortex to secrete aldosterone.',
            'Aldosterone acts on principal cells of the cortical collecting duct to upregulate apical epithelial sodium channels (ENaC) and basolateral Na+/K+-ATPase, promoting Na+ and water retention while secreting K+ and H+.',
          ],
          takeaway: 'Aldosterone recovers sodium and water in exchange for potassium and hydrogen, restoring blood volume.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the integrated physiological outcome of renin-angiotensin-aldosterone system (RAAS) activation during hypovolemia?',
        options: [
          {
            id: 'renin-angiotensin-aldosterone',
            label: 'Systemic arteriolar vasoconstriction and renal retention of sodium and water, restoring arterial pressure and circulating volume',
            explanation: 'Correct: angiotensin II causes vasoconstriction while aldosterone promotes Na+ and water reabsorption in the collecting duct, restoring volume and blood pressure.',
          },
          {
            id: 'vasodilation-natriuresis',
            label: 'Splanchnic vasodilation paired with pronounced natriuresis and intravascular volume depletion',
            explanation: 'Incorrect: this describes atrial natriuretic peptide (ANP), which physiologically opposes the RAAS.',
          },
          {
            id: 'potassium-retention',
            label: 'Primary potassium retention associated with shutdown of adrenal steroid synthesis',
            explanation: 'Incorrect: aldosterone enhances potassium secretion into tubular fluid; its activation causes kaliuresis, not potassium retention.',
          },
          {
            id: 'inhibit-angiotensin',
            label: 'Direct inhibition of angiotensin-converting enzyme (ACE) across pulmonary alveolar capillaries',
            explanation: 'Incorrect: the RAAS pathway depends on active ACE conversion of Ang I into functional Ang II.',
          },
        ],
      },
    },
  },
});
