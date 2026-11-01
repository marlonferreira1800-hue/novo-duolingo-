import { lessonSchema } from '../src/contracts/learning';

export const biophysicsOsmosisDonnanLesson = lessonSchema.parse({
  id: 'biophysics-osmosis-donnan',
  revision: 1,
  questionId: 'biophysics-osmosis-donnan-q1',
  correctOptionId: 'osmotic-swelling-hemolysis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-osmosis-fluids',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/26-1-body-fluids-and-fluid-compartments',
      section: 'Chapter 26.1 · Body Fluids: Osmolality, Starling forces, and Gibbs-Donnan equilibrium',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biofísica',
      hook: 'Por que injetar água destilada pura na veia de uma pessoa destruiria seus glóbulos vermelhos em segundos, enquanto o soro fisiológico é perfeitamente seguro?',
      title: 'Osmose, pressão oncótica e equilíbrio de Gibbs-Donnan',
      description: 'Explore a biofísica dos fluidos: osmolaridade versus tonicidade, forças de Starling no capilar e o equilíbrio iônico de Gibbs-Donnan.',
      objective: 'Distinguir osmolaridade de tonicidade, descrever as pressões oncótica e hidrostática capilares e formular o equilíbrio de Gibbs-Donnan.',
      stages: [
        {
          id: 'osmosis-tonicity',
          title: 'Osmose, osmolaridade e tonicidade celular',
          paragraphs: [
            'A osmose é o movimento passivo de solvente (água) através de uma membrana semipermeável a partir de uma região de menor concentração de soluto para uma de maior concentração.',
            'A osmolaridade total quantifica o número total de partículas de soluto osmoticamente ativas por litro de solução. Já a tonicidade mede exclusivamente o efeito osmótico exercido por solutos não difusíveis (impermeáveis à membrana celular). Em soluções hipotônicas (< 280 mOsm/L de solutos efetivos), a água penetra rapidamente nas hemácias por aquaporinas provocando turgor e lise osmótica (hemólise); em soluções hipertônicas, a água sai das células, causando murchamento e crenação.',
          ],
          takeaway: 'Tonicidade depende de solutos impermeáveis; soluções hipotônicas causam edema e hemólise celular, e hipertônicas causam crenação.',
          diagram: 'membrane',
        },
        {
          id: 'oncotic-starling',
          title: 'Pressão oncótica e a equação de Starling nos capilares',
          paragraphs: [
            'A pressão osmótica gerada pelas proteínas plasmáticas (especialmente a albumina) é denominada pressão coloidosmótica ou pressão oncótica (normalmente em torno de 25 a 28 mmHg).',
            'No leito microvascular, a filtração de fluido para o interstício é regida pelo balanço de Starling: a pressão hidrostática capilar empurra a água para fora, enquanto a pressão oncótica plasmática atrai a água de volta para o vaso. Em estados de hipoalbuminemia severa (como cirrose hepática ou síndrome nefrótica), a queda da pressão oncótica desequilibra o balanço capilar, deflagrando extravasamento contínuo de fluido e edema tecidual generalizado.',
          ],
          takeaway: 'A albumina gera a pressão oncótica capilar (~25-28 mmHg) que retém água no leito vascular contra a pressão hidrostática.',
          diagram: 'pressure',
        },
        {
          id: 'gibbs-donnan',
          title: 'O equilíbrio de Gibbs-Donnan e regulação do volume',
          paragraphs: [
            'O citoplasma celular é repleto de macromoléculas aniônicas impermeáveis (proteínas e fosfatos orgânicos polares que não atravessam a membrana).',
            'O efeito de Gibbs-Donnan descreve a distribuição assimétrica de íons difusíveis (Na+, K+, Cl-) através da membrana decorrente dessas cargas fixas negativas. Essa assimetria cria uma pressão osmótica coloidal intracelular permanente que faria a célula inchar até a ruptura. O organismo neutraliza essa força através da atividade contínua da bomba de Na+/K+-ATPase, que expulsa ativamente cátions sódio e mantém a tonicidade celular constante.',
          ],
          takeaway: 'O efeito Gibbs-Donnan cria tendência permanente de inchaço celular por ânions fixos, contrabalanceada ativamente pela Na+/K+-ATPase.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'O que ocorre com a morfologia celular e a integridade de hemácias humanas normais quando são suspensas em uma solução fortemente hipotônica de cloreto de sódio a 0,2%?',
        options: [
          {
            id: 'osmotic-swelling-hemolysis',
            label: 'Influxo maciço de água por osmose, provocando turgidez extrema e ruptura celular (hemólise)',
            explanation: 'Correto: a menor osmolaridade extracelular cria um gradiente que força a entrada contínua de água na célula através das aquaporinas até a lise da membrana.',
          },
          {
            id: 'crenation-water-efflux',
            label: 'Efluxo acelerado de água intracelular, provocando desidratação e crenação das hemácias',
            explanation: 'Incorreto: o efluxo de água com crenação ocorre em soluções hipertônicas, e não em soluções hipotônicas.',
          },
          {
            id: 'rigid-calcification-stiffening',
            label: 'Precipitação espontânea de íons cálcio na membrana com enrijecimento discoide',
            explanation: 'Incorreto: não há calcificação celular em meios salinos hipotônicos agudos.',
          },
          {
            id: 'instant-exocytosis-burst',
            label: 'Exocitose ativa de hemoglobina em vesículas sem alteração no volume eritrocitário',
            explanation: 'Incorreto: as hemácias não realizam exocitose vesicular de hemoglobina.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'Why would injecting pure distilled water intravenously rupture a patient’s red blood cells within seconds, whereas normal saline is completely safe?',
      title: 'Osmosis, Oncotic Pressure, and the Gibbs-Donnan Equilibrium',
      description: 'Explore the biophysics of bodily fluids: osmolality vs tonicity, capillary Starling equilibrium, and Gibbs-Donnan electrochemical balancing.',
      objective: 'Distinguish osmolality from tonicity, delineate capillary Starling forces, and analyze the Gibbs-Donnan ionic equilibrium.',
      stages: [
        {
          id: 'osmosis-tonicity',
          title: 'Osmosis, osmolality, and cellular tonicity',
          paragraphs: [
            'Osmosis describes the net passive flux of solvent (water) across a semipermeable membrane down its chemical potential gradient from lower solute concentration toward higher solute concentration.',
            'Osmolality quantifies the total number of dissolved solute particles per kilogram of solvent. Tonicity, by contrast, evaluates only the osmotic pressure exerted by non-permeant solutes that cannot freely cross the cell membrane. In hypotonic solutions (< 280 mOsm/L of effective impermeable particles), water surges into erythrocytes through aquaporin channels, driving turgidity and osmotic lysis (hemolysis); hypertonic media drive cellular dehydration and crenation.',
          ],
          takeaway: 'Tonicity is determined by non-permeant solutes; hypotonic solutions swell and hemolyze cells, while hypertonic media cause crenation.',
          diagram: 'membrane',
        },
        {
          id: 'oncotic-starling',
          title: 'Colloid oncotic pressure and capillary Starling forces',
          paragraphs: [
            'The osmotic pressure exerted by trapped plasma macromolecules (predominantly albumin) is termed colloid osmotic or oncotic pressure (typically 25 to 28 mmHg).',
            'Across microvascular capillary beds, transvascular fluid flux is dictated by the Starling equation: hydrostatic capillary pressure pushes water outward into the interstitium, whereas plasma oncotic pressure pulls fluid back into the vascular lumen. In severe hypoalbuminemia (cirrhosis or nephrotic syndrome), collapsed oncotic pressure disrupts this equilibrium, fueling progressive fluid extravasation and anasarca.',
          ],
          takeaway: 'Albumin generates intravascular oncotic pressure (~25-28 mmHg) that retains fluid against outward hydrostatic filtration.',
          diagram: 'pressure',
        },
        {
          id: 'gibbs-donnan',
          title: 'The Gibbs-Donnan equilibrium and volume regulation',
          paragraphs: [
            'The intracellular cytoplasm is densely packed with non-diffusible polyanions (proteins and organic phosphates bearing fixed negative charges that cannot traverse the lipid bilayer).',
            'The Gibbs-Donnan equilibrium describes the asymmetric distribution of diffusible inorganic ions (Na+, K+, Cl-) across the membrane dictated by these fixed charges. This charge asymmetry exerts an unremitting intracellular osmotic swelling force that would rupture the cell. Animal cells actively neutralize this threat by continuously pumping sodium ions out via the active electrogenic Na+/K+-ATPase.',
          ],
          takeaway: 'The Gibbs-Donnan effect creates an intrinsic osmotic swelling force counteracted around the clock by Na+/K+-ATPase pump activity.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What happens to the cellular morphology and structural integrity of normal human erythrocytes when suspended in a markedly hypotonic 0.2% sodium chloride saline solution?',
        options: [
          {
            id: 'osmotic-swelling-hemolysis',
            label: 'Massive osmotic influx of water, driving severe swelling and membrane rupture (hemolysis)',
            explanation: 'Correct: lower extracellular osmolality drives water into the erythrocyte via aquaporin channels, exceeding membrane elasticity and causing lytic hemolysis.',
          },
          {
            id: 'crenation-water-efflux',
            label: 'Rapid osmotic efflux of intracellular water, inducing cell dehydration and crenation',
            explanation: 'Incorrect: water efflux and crenation are triggered by exposure to hypertonic, not hypotonic, environments.',
          },
          {
            id: 'rigid-calcification-stiffening',
            label: 'Spontaneous membrane calcification inducing rigid discocyte crystallization',
            explanation: 'Incorrect: acute hypotonic exposure does not stimulate membrane calcification.',
          },
          {
            id: 'instant-exocytosis-burst',
            label: 'Regulated exocytic secretion of hemoglobin with preserved cellular volume',
            explanation: 'Incorrect: mature erythrocytes lack the exocytic machinery to secrete free hemoglobin into surrounding fluid.',
          },
        ],
      },
    },
  },
});

export const biophysicsLaplaceLesson = lessonSchema.parse({
  id: 'biophysics-laplace',
  revision: 1,
  questionId: 'biophysics-laplace-q1',
  correctOptionId: 'pulmonary-atelectasis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-laplace-breathing',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing',
      section: 'Chapter 22.3 · The Process of Breathing: Surface tension, pulmonary surfactant, and Laplace’s law',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biofísica',
      hook: 'Por que uma bolha de sabão pequena se esvazia espontaneamente dentro de uma bolha grande quando são conectadas por um canudo?',
      title: 'Tensão superficial e lei de Laplace: alvéolos e aneurismas',
      description: 'Aplique a lei de Laplace na fisiologia respiratória (papel do surfactante na estabilidade alveolar) e vascular (tensão parietal em aneurismas).',
      objective: 'Formular a lei de Laplace para esferas e cilindros e explicar por que o surfactante pulmonar previne atelectasias alveolares.',
      stages: [
        {
          id: 'laplace-sphere-cylinder',
          title: 'A lei de Laplace para estruturas esféricas e cilíndricas',
          paragraphs: [
            'A lei de Laplace descreve a relação física entre a pressão transmural de distensão (P), a tensão elástica na parede (T) e o raio de curvatura (r) de uma estrutura oca.',
            'Para uma esfera com uma interface líquido-ar (como um alvéolo pulmonar), a fórmula é expressa por P = 2T / r. Para uma estrutura cilíndrica com parede elástica (como um vaso sanguíneo ou o ventrículo cardíaco), a tensão na parede é dada por T = P × r. Essa relação demonstra que a pressão gerada pela tensão superficial é inversamente proporcional ao raio da esfera.',
          ],
          takeaway: 'Na esfera, P = 2T / r; em alvéolos de menor raio, a pressão de colapso seria muito maior se a tensão T fosse constante.',
          diagram: 'equation',
        },
        {
          id: 'pulmonary-surfactant',
          title: 'O surfactante pulmonar e a estabilização alveolar',
          paragraphs: [
            'Se a tensão superficial (T) fosse uniforme em todos os alvéolos, a lei de Laplace ditaria que alvéolos pequenos teriam pressões internas muito maiores do que alvéolos grandes (P maior quando r é menor). Consequentemente, os alvéolos pequenos esvaziariam seu ar nos grandes, colapsando difusamente em atelectasia maciça.',
            'O surfactante pulmonar (produzido pelos pneumócitos tipo II e rico em dipalmitoilfosfatidilcolina) resolve esse paradoxo biofísico: quando o alvéolo se contrai na expiração, as moléculas de surfactante se condensam e reduzem a tensão superficial (T) em proporção ainda mais rápida do que a redução do raio (r). Isso iguala as pressões de distensão entre alvéolos de diferentes tamanhos e previne o colapso respiratório.',
          ],
          takeaway: 'O surfactante reduz T preferencialmente nos alvéolos menores, igualando pressões e impedindo atelectasias.',
          diagram: 'lung',
        },
        {
          id: 'vascular-aneurysms',
          title: 'Lei de Laplace e o risco de ruptura de aneurismas',
          paragraphs: [
            'Em vasos sanguíneos cilíndricos, a tensão que distende a parede vascular é expressa por T = P × r (onde P é a pressão arterial média e r é o raio do vaso).',
            'Quando uma artéria desenvolve uma dilatação aneurismática (por exemplo, um aneurisma de aorta abdominal), o aumento patológico do raio (r) eleva proporcionalmente a tensão mecânica na parede (T), mesmo que a pressão arterial do paciente não mude. Esse ciclo vicioso de enfraquecimento e estiramento elástico explica por que aneurismas com diâmetro superior a 5,5 cm possuem risco exponencial de ruptura catastrófica.',
          ],
          takeaway: 'Em vasos (T = P × r), quanto maior o raio do aneurisma, maior a tensão na parede, elevando o risco de rotura fatal.',
          diagram: 'pressure',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a sentença sobre a função biofísica do surfactante segundo a lei de Laplace:',
        blank: 'O surfactante alveolar reduz a tensão superficial de forma mais intensa nos alvéolos pequenos, impedindo que colabem em direção aos alvéolos maiores e evitando a formação de __________.',
        options: [
          {
            id: 'pulmonary-atelectasis',
            label: 'atelectasias pulmonares',
            explanation: 'Correto: ao reduzir a tensão superficial proporcionalmente ao raio, o surfactante equaliza pressões e impede o colabamento atelectásico.',
          },
          {
            id: 'alveolar-pleural-pneumothorax',
            label: 'pneumotórax hipertensivo',
            explanation: 'Incorreto: o pneumotórax ocorre por ruptura pleural com entrada de ar na cavidade torácica, não por desbalanço simples da lei de Laplace alveolar.',
          },
          {
            id: 'surfactant-induced-emphysema',
            label: 'enfisema panacinar primário',
            explanation: 'Incorreto: o enfisema decorre da destruição de septos por elastases de neutrófilos e tabagismo, e não da falta de surfactante.',
          },
          {
            id: 'acute-bronchial-spasm',
            label: 'broncoconstrição mediada por histamina',
            explanation: 'Incorreto: broncoespasmo envolve a musculatura lisa dos bronquíolos, enquanto a lei de Laplace e o surfactante atuam nos alvéolos distais.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'Why does a small soap bubble connected via a hollow pipe to a large bubble spontaneously empty all its air into the larger one?',
      title: 'Surface Tension and Laplace’s Law: Alveoli and Aneurysms',
      description: 'Apply Laplace’s law to respiratory physiology (surfactant preventing alveolar collapse) and vascular mechanics (aneurysm wall tension).',
      objective: 'Formulate Laplace’s law for spheres and cylinders and explain how pulmonary surfactant prevents alveolar atelectasis.',
      stages: [
        {
          id: 'laplace-sphere-cylinder',
          title: 'Laplace’s law for spherical and cylindrical geometries',
          paragraphs: [
            'Laplace’s physical law describes the mechanical equilibrium between distending transmural pressure (P), wall tension (T), and radius of curvature (r) in hollow distensible structures.',
            'For a spherical bubble bounded by a fluid-gas interface (such as a pulmonary alveolus), the relationship is defined by P = 2T / r. For a cylindrical vessel (such as an artery or myocardial chamber), wall tension is expressed as T = P × r. Crucially, this dictates that distending collapse pressure is inversely proportional to radius.',
          ],
          takeaway: 'For spheres, P = 2T / r; smaller alveoli would experience much higher collapsing pressures if surface tension T were uniform.',
          diagram: 'equation',
        },
        {
          id: 'pulmonary-surfactant',
          title: 'Pulmonary surfactant and alveolar stabilization',
          paragraphs: [
            'If surface tension (T) were uniform throughout the lung, Laplace’s law would force smaller alveoli to develop far higher internal collapse pressures than adjacent larger alveoli (since P rises as r falls). Smaller units would empty their air into larger ones, resulting in widespread atelectasis.',
            'Pulmonary surfactant (secreted by type II alveolar pneumocytes and rich in dipalmitoylphosphatidylcholine) resolves this mechanical instability: as alveoli deflate during expiration, surfactant molecules pack tightly, lowering surface tension (T) even faster than the reduction in radius (r). This equalizes pressures across heterogeneous alveolar sizes, preventing collapse.',
          ],
          takeaway: 'Surfactant lowers T disproportionately in small alveoli, equalizing distending pressures and preventing atelectasis.',
          diagram: 'lung',
        },
        {
          id: 'vascular-aneurysms',
          title: 'Laplace’s law and vascular aneurysm rupture dynamics',
          paragraphs: [
            'In cylindrical blood vessels, wall tension resisting internal blood pressure is governed by T = P × r (where P is transmural pressure and r is vessel caliber).',
            'When an artery develops an aneurysmal expansion (such as an abdominal aortic aneurysm), pathologic enlargement of the radius (r) causes a proportional surge in wall tension (T), even at normal blood pressures. This progressive mechanical wall stress drives elastolysis, explaining why aneurysms exceeding 5.5 cm in diameter face an exponential risk of catastrophic rupture.',
          ],
          takeaway: 'In cylindrical vessels (T = P × r), increasing aneurysm radius inflates wall tension, driving an exponential rupture risk.',
          diagram: 'pressure',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the sentence describing the biophysical role of pulmonary surfactant via Laplace’s law:',
        blank: 'Pulmonary surfactant lowers surface tension more dramatically in small alveoli, preventing them from emptying into larger units and averting __________.',
        options: [
          {
            id: 'pulmonary-atelectasis',
            label: 'alveolar atelectasis',
            explanation: 'Correct: by reducing surface tension in proportion to radius, surfactant stabilizes small alveoli and prevents widespread atelectatic collapse.',
          },
          {
            id: 'alveolar-pleural-pneumothorax',
            label: 'tension pneumothorax',
            explanation: 'Incorrect: pneumothorax represents pleural breach with intrapleural air entry, not simple Laplace alveolar instability.',
          },
          {
            id: 'surfactant-induced-emphysema',
            label: 'destructive panacinar emphysema',
            explanation: 'Incorrect: emphysema is caused by elastase-mediated septal destruction, rather than surfactant dynamics.',
          },
          {
            id: 'acute-bronchial-spasm',
            label: 'histamine-mediated bronchospasm',
            explanation: 'Incorrect: bronchospasm involves bronchial smooth muscle, whereas Laplace’s law and surfactant govern terminal alveoli.',
          },
        ],
      },
    },
  },
});

export const biophysicsCardiacDipoleLesson = lessonSchema.parse({
  id: 'biophysics-cardiac-dipole',
  revision: 1,
  questionId: 'biophysics-cardiac-dipole-q1',
  correctOptionId: 'einthoven-law-lead2',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-cardiac-dipole',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-2-cardiac-muscle-and-electrical-activity',
      section: 'Chapter 19.2 · Cardiac Muscle and Electrical Activity: Electric dipoles, Einthoven’s triangle, and ECG vector analysis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biofísica',
      hook: 'Como três eletrodos colados nos braços e na perna de uma pessoa conseguem desenhar no papel o trajeto exato da eletricidade dentro do coração?',
      title: 'Bioeletricidade cardíaca: teoria do dipolo e triângulo de Einthoven',
      description: 'Compreenda as bases biofísicas do eletrocardiograma: o dipolo elétrico cardíaco, as derivações bipolares de Einthoven e o eixo elétrico.',
      objective: 'Aplicar a teoria do dipolo elétrico para explicar a deflexão das ondas do ECG e enunciar a lei de Einthoven (DII = DI + DIII).',
      stages: [
        {
          id: 'electric-dipole',
          title: 'A teoria do dipolo elétrico cardíaco',
          paragraphs: [
            'Durante a propagação do potencial de ação através do sincício miocárdico, a frente de onda despolarizante separa regiões celulares despolarizadas (eletronegativas no exterior) de regiões em repouso (eletropositivas no exterior).',
            'Esse par de cargas iguais e opostas separadas por uma distância finita constitui um dipolo elétrico móvel, representado no espaço por um vetor que possui magnitude, direção e sentido apontando sempre da carga negativa para a positiva. Quando o vetor aponta em direção a um eletrodo explorador positivo, o eletrocardiógrafo registra uma deflexão positiva para cima na linha de base.',
          ],
          takeaway: 'A onda de despolarização comporta-se como um dipolo elétrico; vetores que apontam para o eletrodo positivo geram deflexões positivas.',
          diagram: 'ecg',
        },
        {
          id: 'einthoven-triangle',
          title: 'O triângulo de Einthoven e a Lei de Einthoven',
          paragraphs: [
            'Willem Einthoven idealizou o coração no centro de um triângulo equilátero equilátero cujos vértices são o braço direito (RA), o braço esquerdo (LA) e a perna esquerda (LL).',
            'As derivações periféricas bipolares medem a diferença de potencial entre esses eletrodos: Derivação I (LA positivo - RA negativo), Derivação II (LL positivo - RA negativo) e Derivação III (LL positivo - LA negativo). Dessas definições físicas decorre a estrita Lei de Einthoven: a voltagem registrada na Derivação II é matematicamente idêntica à soma algébrica das Derivações I e III em qualquer milissegundo (DII = DI + DIII).',
          ],
          takeaway: 'Pela Lei de Einthoven, a derivação II é sempre a soma algébrica das derivações I e III (DII = DI + DIII).',
          diagram: 'equation',
        },
        {
          id: 'mean-electrical-axis',
          title: 'O eixo elétrico médio do QRS no plano frontal',
          paragraphs: [
            'O complexo QRS representa a despolarização dos ventrículos. Como o ventrículo esquerdo possui muito maior massa miocárdica do que o direito, o vetor resultante médio da despolarização ventricular aponta para baixo e para a esquerda.',
            'No sistema hexaxial de Bailey, o eixo elétrico médio normal situa-se entre -30° e +90°. Desvios do eixo para além de -30° (desvio para a esquerda) sugerem hipertrofia ventricular esquerda ou bloqueio divisional anterossuperior, enquanto desvios além de +90° (desvio para a direita) refletem sobrecarga ventricular direita ou cor pulmonale.',
          ],
          takeaway: 'O eixo elétrico médio normal do QRS situa-se entre -30° e +90°, apontando para a maior massa do ventrículo esquerdo.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Segundo a lei biofísica de Einthoven que fundamenta o circuito elétrico das derivações bipolares periféricas do ECG, qual igualdade matemática é invariavelmente verdadeira em qualquer ponto do traçado?',
        options: [
          {
            id: 'einthoven-law-lead2',
            label: 'Derivação II = Derivação I + Derivação III (DII = DI + DIII)',
            explanation: 'Correto: a diferença de potencial entre perna esquerda e braço direito (DII) é geometricamente a soma de DI (braço esquerdo - braço direito) e DIII (perna esquerda - braço esquerdo).',
          },
          {
            id: 'lead1-equals-lead2-plus-lead3',
            label: 'Derivação I = Derivação II + Derivação III (DI = DII + DIII)',
            explanation: 'Incorreto: a derivação II é o vetor mais longo do circuito fechado de Kirchoff, sendo ela a soma das outras duas.',
          },
          {
            id: 'lead3-equals-lead1-times-lead2',
            label: 'Derivação III = Derivação I multiplicada pela Derivação II',
            explanation: 'Incorreto: as voltagens são grandezas lineares somatórias (Lei das Malhas de Kirchhoff), não produtos multiplicativos.',
          },
          {
            id: 'all-leads-sum-to-zero',
            label: 'Derivação I + Derivação II + Derivação III = Zero estrito absoluto',
            explanation: 'Incorreto: na convenção de derivações bipolares de Einthoven, DII - DI - DIII = 0, logo DII = DI + DIII.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'How can three small electrodes taped to a person’s wrists and ankle sketch the exact millisecond path of electricity inside their beating heart?',
      title: 'Cardiac Bioelectricity: Dipole Theory and Einthoven’s Triangle',
      description: 'Understand the biophysical fundamentals of the electrocardiogram: the traveling dipole, Einthoven leads, and mean electrical axis.',
      objective: 'Apply dipole theory to explain ECG wave deflections and state Einthoven’s law (Lead II = Lead I + Lead III).',
      stages: [
        {
          id: 'electric-dipole',
          title: 'The cardiac electric dipole concept',
          paragraphs: [
            'During action potential wavefront propagation across the myocardium, advancing depolarized tissue (externally electronegative) borders resting tissue (externally electropositive).',
            'This boundary of separated equal and opposite charges behaves as an active electrical dipole, modeled as a spatial vector possessing magnitude and an orientation pointing from negative toward positive charges. When the cardiac dipole vector points toward an exploring positive electrode, the recording electrocardiograph deflects upward above the isoelectric baseline.',
          ],
          takeaway: 'Depolarization wavefronts behave as electrical dipoles; vectors advancing toward a positive electrode produce positive deflections.',
          diagram: 'ecg',
        },
        {
          id: 'einthoven-triangle',
          title: 'Einthoven’s triangle and Einthoven’s law',
          paragraphs: [
            'Willem Einthoven schematized the heart at the geometric center of an equilateral triangle whose vertices correspond to the right arm (RA), left arm (LA), and left leg (LL).',
            'Bipolar limb leads record differential voltages: Lead I (LA positive - RA negative), Lead II (LL positive - RA negative), and Lead III (LL positive - LA negative). From Kirchhoff’s voltage laws, Einthoven’s law dictates that the instantaneous voltage in Lead II must equal the sum of Lead I and Lead III (Lead II = Lead I + Lead III).',
          ],
          takeaway: 'By Einthoven’s law, the voltage recorded in Lead II equals the algebraic sum of Leads I and III (Lead II = Lead I + Lead III).',
          diagram: 'equation',
        },
        {
          id: 'mean-electrical-axis',
          title: 'The frontal plane mean QRS electrical axis',
          paragraphs: [
            'The QRS complex represents ventricular depolarization. Because the thick left ventricle possesses substantially greater muscle mass and electrical dipole magnitude than the right ventricle, the mean resultant vector points downward and toward the left.',
            'Mapped onto the Bailey hexaxial reference system, the normal adult frontal mean QRS axis spans from -30° to +90°. Leftward axis shifts beyond -30° indicate left ventricular hypertrophy or anterior hemiblock; rightward shifts past +90° reflect right ventricular strain or pulmonary hypertension.',
          ],
          takeaway: 'The normal mean QRS electrical axis ranges from -30° to +90°, reflecting dominant left ventricular myocardial mass.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'According to Einthoven’s bioelectrical law governing the frontal plane bipolar limb leads of the ECG, which mathematical identity is valid at every instantaneous point in the cardiac cycle?',
        options: [
          {
            id: 'einthoven-law-lead2',
            label: 'Lead II = Lead I + Lead III (Lead II equals the sum of Leads I and III)',
            explanation: 'Correct: under Kirchhoff’s voltage law, the potential difference between left leg and right arm (Lead II) is identical to Lead I plus Lead III.',
          },
          {
            id: 'lead1-equals-lead2-plus-lead3',
            label: 'Lead I = Lead II + Lead III',
            explanation: 'Incorrect: Lead II spans the greatest anatomical diagonal, making it the sum, not the summand, of the other two leads.',
          },
          {
            id: 'lead3-equals-lead1-times-lead2',
            label: 'Lead III = Lead I multiplied by Lead II',
            explanation: 'Incorrect: electrical potential differences obey linear additive laws, rather than multiplicative products.',
          },
          {
            id: 'all-leads-sum-to-zero',
            label: 'Lead I + Lead II + Lead III = Zero absolute',
            explanation: 'Incorrect: given Lead II = Lead I + Lead III, their unadjusted sum equals twice Lead II, not zero.',
          },
        ],
      },
    },
  },
});

export const biophysicsBiomechanicsLesson = lessonSchema.parse({
  id: 'biophysics-biomechanics',
  revision: 1,
  questionId: 'biophysics-biomechanics-q1',
  correctOptionId: 'third-class-lever-interpotent',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-biomechanics',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-1-interactions-of-skeletal-muscles-their-fascicle-arrangement-and-their-lever-systems',
      section: 'Chapter 11.1 · Lever Systems in Skeletal Muscle: First, second, and third-class levers and Wolff’s law',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biofísica',
      hook: 'Por que o bíceps precisa puxar com mais de 70 quilos de força para levantar um objeto de apenas 10 quilos na palma da mão?',
      title: 'Biomecânica musculoesquelética: alavancas, viscoelasticidade e lei de Wolff',
      description: 'Analise a biofísica osteomuscular: alavancas de 1ª, 2ª e 3ª classe, módulo de Young, viscoelasticidade e remodelamento ósseo sob carga.',
      objective: 'Classificar os sistemas de alavancas anatômicas no corpo humano e explicar a lei de Wolff de adaptação óssea à tensão mecânica.',
      stages: [
        {
          id: 'musculoskeletal-levers',
          title: 'Sistemas de alavancas anatômicas (1ª, 2ª e 3ª classe)',
          paragraphs: [
            'O sistema musculoesquelético opera através de alavancas rígidas (ossos) que giram em torno de um ponto de apoio ou fulcro (articulações) acionadas por uma força potente (músculos) contra uma resistência (carga ou peso corporal).',
            'Alavancas de 1ª classe (interfixas) têm o fulcro entre a força e a resistência (exemplo: articulação atlanto-occipital equilibrando a cabeça). Alavancas de 2ª classe (inter-resistentes) têm a resistência no meio, conferindo grande vantagem mecânica (exemplo: tríceps sural elevando o corpo na ponta dos pés). Alavancas de 3ª classe (interpotentes) têm a força aplicada entre o fulcro e a carga (exemplo: bíceps braquial no cotovelo): possuem desvantagem mecânica de força, mas amplificam enormemente a velocidade e a amplitude de movimento da extremidade.',
          ],
          takeaway: 'Alavancas de 3ª classe (bíceps) são as mais comuns no corpo: sacrificam força mecânica em troca de grande velocidade e amplitude de movimento.',
          diagram: 'bone',
        },
        {
          id: 'stress-strain-viscoelasticity',
          title: 'Tensão mecânica, deformação e viscoelasticidade tecidual',
          paragraphs: [
            'O comportamento biomecânico dos ossos, tendões e cartilagens é caracterizado pela relação tensão-deformação (stress-strain) e pelo módulo de elasticidade de Young.',
            'Tendões e ligamentos são tecidos viscoelásticos: sua resposta mecânica depende da velocidade com que a carga é aplicada. Em deformações lentas, as fibras de colágeno sofrem acomodação por relaxamento de estresse; sob impactos rápidos e violentos, o tecido torna-se mais rígido e absorve maior quantidade de energia antes de atingir o ponto de ruptura plástica.',
          ],
          takeaway: 'Tendões e ligamentos são viscoelásticos: comportam-se de forma mais rígida e resistente sob deformações rápidas.',
          diagram: 'calculation',
        },
        {
          id: 'wolff-law-remodeling',
          title: 'A Lei de Wolff e a mecanotransdução óssea',
          paragraphs: [
            'A Lei de Wolff postula que o osso sadio vivo adapta sua arquitetura e densidade interna às cargas mecânicas crônicas a que é submetido.',
            'Os osteócitos, aprisionados na matriz óssea mineralizada, atuam como mecanossensores através de sua rede canalicular. Quando a deformação mecânica induz fluxo de fluido intersticial nos canalículos, os osteócitos detectam essa força de cisalhamento e inibem a secreção de esclerostina, permitindo que a via Wnt/beta-catenina ative os osteoblastos para depositar osso cortical espesso e trabéculas orientadas nas linhas de estresse.',
          ],
          takeaway: 'Pela Lei de Wolff, o osso se remodela e se fortalece nas linhas de estresse mecânico detectadas pelos osteócitos.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'A flexão do cotovelo pelo músculo bíceps braquial segurando uma carga na mão contra a gravidade funciona bioficamente como qual tipo de sistema de alavanca anatômica?',
        options: [
          {
            id: 'third-class-lever-interpotent',
            label: 'Alavanca de 3ª classe (interpotente: força muscular aplicada entre a articulação e a carga)',
            explanation: 'Correto: no cotovelo, a inserção tendínea do bíceps fica entre a articulação (fulcro) e o peso na mão (resistência), caracterizando uma alavanca de 3ª classe.',
          },
          {
            id: 'first-class-lever-interfix',
            label: 'Alavanca de 1ª classe (interfixa: articulação posicionada exatamente no centro)',
            explanation: 'Incorreto: a alavanca interfixa tem a articulação no meio (como a articulação da cabeça na coluna cervical).',
          },
          {
            id: 'second-class-lever-interresistant',
            label: 'Alavanca de 2ª classe (inter-resistente: carga posicionada entre a articulação e o músculo)',
            explanation: 'Incorreto: a alavanca de 2ª classe ocorre na flexão plantar do tornozelo, onde o peso do corpo fica entre o ponto de apoio e o tendão calcâneo.',
          },
          {
            id: 'hydraulic-fourth-order-pulley',
            label: 'Roldana hidráulica de 4ª classe com vantagem mecânica multiplicadora infinita',
            explanation: 'Incorreto: não existem alavancas anatômicas de 4ª classe nem roldanas hidráulicas no aparelho locomotor humano.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'Why must the biceps muscle exert over 150 pounds of tensile force just to hold a modest 20-pound dumbbell steady in your hand?',
      title: 'Musculoskeletal Biomechanics: Levers, Viscoelasticity, and Wolff’s Law',
      description: 'Analyze osteomuscular biophysics: first-, second-, and third-class levers, Young’s modulus, tissue viscoelasticity, and bone remodeling.',
      objective: 'Classify anatomical lever systems and explain Wolff’s law of mechanical stress-induced bone adaptation.',
      stages: [
        {
          id: 'musculoskeletal-levers',
          title: 'Anatomical lever systems (First, second, and third class)',
          paragraphs: [
            'The human musculoskeletal system functions through rigid levers (bones) pivoting around axes or fulcrums (joints), actuated by muscular effort to displace resistances (body weight or external loads).',
            'First-class levers (inter-fulcrum) position the pivot between effort and load (e.g., atlanto-occipital joint balancing the cranium). Second-class levers (inter-load) position the load between pivot and effort, providing high mechanical advantage (e.g., calf triceps surae raising the body on tiptoes). Third-class levers (inter-effort) apply effort between fulcrum and load (e.g., biceps brachii at the elbow): they sacrifice force advantage to dramatically maximize terminal hand velocity and range of motion.',
          ],
          takeaway: 'Third-class levers (biceps) dominate the skeleton: they operate at a force disadvantage but amplify movement speed and range.',
          diagram: 'bone',
        },
        {
          id: 'stress-strain-viscoelasticity',
          title: 'Stress-strain curves, Young’s modulus, and tissue viscoelasticity',
          paragraphs: [
            'The biomechanical integrity of bone, cartilage, and tendons is defined by stress-strain curves and the elastic Young’s modulus.',
            'Tendons and ligaments exhibit pronounced viscoelasticity: their mechanical properties vary depending on loading velocity. Under slow, continuous strain, collagen fibrils undergo stress relaxation; under rapid, high-velocity traumatic impacts, viscoelastic tissues become substantially stiffer and absorb greater mechanical energy before reaching yield and ultimate failure points.',
          ],
          takeaway: 'Tendons and ligaments are viscoelastic: rapid loading increases tissue stiffness and resistance to failure.',
          diagram: 'calculation',
        },
        {
          id: 'wolff-law-remodeling',
          title: 'Wolff’s law and osteocyte mechanotransduction',
          paragraphs: [
            'Wolff’s law states that living bone continually remodels its internal trabecular architecture and cortical thickness in direct response to the mechanical loads placed upon it.',
            'Osteocytes encased within lacunar-canalicular networks serve as principal mechanosensors. Mechanical loading induces interstitial fluid shear stress along canaliculi, prompting osteocytes to downregulate sclerostin production. This derepresses the Wnt/beta-catenin pathway, stimulating osteoblasts to deposit dense mineralized matrix along lines of greatest mechanical stress.',
          ],
          takeaway: 'Under Wolff’s law, osteocytes sense fluid shear stress and direct bone deposition along lines of recurrent mechanical load.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Elbow flexion driven by the biceps brachii while supporting a dumbbell in the palm against gravity represents which type of anatomical lever system?',
        options: [
          {
            id: 'third-class-lever-interpotent',
            label: 'Third-class lever (effort applied between fulcrum and load)',
            explanation: 'Correct: the biceps tendon insertion on the radial tuberosity lies between the elbow joint pivot (fulcrum) and the weight in the hand (load).',
          },
          {
            id: 'first-class-lever-interfix',
            label: 'First-class lever (fulcrum situated between effort and load)',
            explanation: 'Incorrect: first-class levers feature a central pivot, such as the head balancing on the cervical spine.',
          },
          {
            id: 'second-class-lever-interresistant',
            label: 'Second-class lever (load situated between fulcrum and effort)',
            explanation: 'Incorrect: second-class levers place the load in the center, exemplified by the foot during plantarflexion on the toes.',
          },
          {
            id: 'hydraulic-fourth-order-pulley',
            label: 'Hydraulic fourth-order compound anatomical pulley',
            explanation: 'Incorrect: there are no fourth-class levers or hydraulic pulleys in human musculoskeletal biomechanics.',
          },
        ],
      },
    },
  },
});

export const biophysicsDialysisThermodynamicsLesson = lessonSchema.parse({
  id: 'biophysics-dialysis-thermodynamics',
  revision: 1,
  questionId: 'biophysics-dialysis-thermodynamics-q1',
  correctOptionId: 'hydrostatic-ultrafiltration-tmp',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-renal-dialysis',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-2-microscopic-anatomy-of-the-kidney',
      section: 'Chapter 25.2 · Renal Physiology: Filtration thermodynamics, semipermeable membranes, and hemodialysis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biofísica',
      hook: 'Como uma máquina consegue limpar todo o sangue de um paciente sem rins em 4 horas utilizando apenas princípios simples de termodinâmica e membranas artificiais?',
      title: 'Termodinâmica biológica e biofísica da hemodiálise',
      description: 'Explore a energia livre de Gibbs em sistemas biológicos abertos e entenda os mecanismos biofísicos da hemodiálise: difusão, convecção e ultrafiltração.',
      objective: 'Aplicar as leis da termodinâmica a sistemas vivos e explicar a depuração de solutos por difusão e convecção na hemodiálise.',
      stages: [
        {
          id: 'biological-thermodynamics',
          title: 'Termodinâmica em sistemas biológicos abertos',
          paragraphs: [
            'Os organismos vivos são sistemas termodinâmicos abertos que trocam continuamente matéria e energia com o meio ambiente para manter sua homeostase interna.',
            'A variação de energia livre de Gibbs (Delta G = Delta H - T Delta S) determina a espontaneidade das reações bioquímicas celulares. Processos exergônicos (Delta G < 0, como a hidrólise do ATP) liberam energia que é biologicamente acoplada a reações endergônicas desfavoráveis (Delta G > 0, como a síntese proteica e o transporte ativo de íons contra gradientes eletroquímicos).',
          ],
          takeaway: 'Sistemas vivos são abertos e mantêm baixa entropia interna dissipando energia livre via hidrólise de ATP acoplada.',
          diagram: 'equation',
        },
        {
          id: 'hemodialysis-diffusion',
          title: 'Biofísica da hemodiálise: difusão e contra-corrente',
          paragraphs: [
            'A hemodiálise substitui temporariamente a função renal perdida utilizando um dialisador com milhares de fibras capilares ocas semipermeáveis sintéticas.',
            'A depuração de toxinas urêmicas de baixo peso molecular (como ureia e creatinina) ocorre por difusão passiva regida pela lei de Fick: os solutos movem-se do sangue para o líquido de diálise através dos poros da membrana a favor de seu gradiente de concentração. Para maximizar esse gradiente em todo o comprimento do filtro, o sangue e a solução de diálise fluem em sentidos opostos (sistema de contra-corrente).',
          ],
          takeaway: 'A difusão remove solutos pequenos como a ureia; o fluxo em contra-corrente maximiza o gradiente de concentração no dialisador.',
          diagram: 'membrane',
        },
        {
          id: 'ultrafiltration-convection',
          title: 'Ultrafiltração hidrostática e convecção de solutos',
          paragraphs: [
            'Pacientes com insuficiência renal anúrica acumulam litros de água que não conseguem urinar. A remoção de volume na hemodiálise é realizada pelo processo biofísico de ultrafiltração hidrostática.',
            'A máquina gera uma pressão transmembrana (TMP) negativa no compartimento do dialisato, forçando a água plasmática a atravessar os microporos da membrana semipermeável. Esse fluxo de solvente arrasta consigo moléculas de solutos dissolvidos (como toxinas de médio peso molecular e eletrólitos) através de um mecanismo biofísico denominado convecção (ou arraste por solvente).',
          ],
          takeaway: 'Ultrafiltração remove líquido gerando pressão transmembrana negativa; o arraste por solvente remove toxinas médias por convecção.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'No circuito de hemodiálise, por qual mecanismo biofísico a água plasmática acumulada em excesso em um paciente anúrico é forçada a atravessar a membrana semipermeável para o compartimento do dialisato?',
        options: [
          {
            id: 'hydrostatic-ultrafiltration-tmp',
            label: 'Ultrafiltração hidrostática impulsionada por gradiente de pressão transmembrana (TMP)',
            explanation: 'Correto: a diferença de pressão hidrostática entre o sangue e o líquido de diálise (pressão transmembrana) força o efluxo de água plasmática.',
          },
          {
            id: 'active-primary-atp-pumping',
            label: 'Transporte ativo primário acoplado a bombas de ATPase no filtro capilar',
            explanation: 'Incorreto: a membrana do dialisador é inerte e sintética, desprovida de bombas ativas ou gasto de ATP celular.',
          },
          {
            id: 'facilitated-passive-pinocytosis',
            label: 'Pinocitose endotelial facilitada por canais de aquaporina tipo 2',
            explanation: 'Incorreto: as fibras do dialisador são tubos poliméricos artificiais sem células endoteliais vivas.',
          },
          {
            id: 'thermal-convection-evaporation',
            label: 'Evaporação térmica por ebulição fracionada induzida por radiofrequência',
            explanation: 'Incorreto: a diálise opera em temperatura corporal normal (36-37°C) e a água é removida como líquido por gradiente de pressão.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'How can a machine completely cleanse a kidney failure patient’s blood in 4 hours using only basic thermodynamics and synthetic plastic straw membranes?',
      title: 'Biological Thermodynamics and the Biophysics of Hemodialysis',
      description: 'Explore Gibbs free energy in living open systems and detail the transport biophysics of hemodialysis: diffusion, convection, and ultrafiltration.',
      objective: 'Apply thermodynamic principles to living systems and explain solute clearance through diffusion and convective drag in hemodialysis.',
      stages: [
        {
          id: 'biological-thermodynamics',
          title: 'Thermodynamics of open biological systems',
          paragraphs: [
            'Living biological organisms operate as open thermodynamic systems that continuously exchange matter and energy with their environment to maintain non-equilibrium homeostatic states.',
            'The change in Gibbs free energy (Delta G = Delta H - T Delta S) dictates the spontaneity of biochemical reactions. Strongly exergonic catabolic reactions (Delta G < 0, such as ATP hydrolysis) release chemical energy that is stoichiometrically coupled to drive non-spontaneous endergonic anabolic processes (Delta G > 0, such as macromolecular synthesis and active transmembrane ion transport).',
          ],
          takeaway: 'Living organisms are open thermodynamic systems that sustain low internal entropy by coupling exergonic ATP hydrolysis to vital endergonic processes.',
          diagram: 'equation',
        },
        {
          id: 'hemodialysis-diffusion',
          title: 'Hemodialysis biophysics: Fickian diffusion and countercurrent flow',
          paragraphs: [
            'Hemodialysis surrogates compromised renal clearance using an extracorporeal dialyzer packed with thousands of microscopic semipermeable hollow fibers.',
            'Clearance of low-molecular-weight uremic retention solutes (such as urea and creatinine) proceeds via passive diffusion governed by Fick’s first law: solutes diffuse from blood into dialysate down their concentration gradient across porous membrane walls. To preserve the highest possible transmembrane concentration gradient across the entire dialyzer length, blood and dialysate flow in opposite directions (countercurrent flow geometry).',
          ],
          takeaway: 'Diffusion clears small solutes like urea; countercurrent flow geometry maintains maximal concentration gradients along the entire filter.',
          diagram: 'membrane',
        },
        {
          id: 'ultrafiltration-convection',
          title: 'Hydrostatic ultrafiltration and convective solute drag',
          paragraphs: [
            'Anuric end-stage renal patients accumulate liters of excess extracellular water. In hemodialysis, intravascular fluid volume extraction is executed via hydrostatic ultrafiltration.',
            'The machine applies controlled negative suction pressure on the dialysate side, establishing a transmembrane pressure (TMP) gradient that drives bulk plasma water across membrane nanopores. This outward solvent flux sweeps along dissolved middle-molecular-weight solutes in its path, a transport mechanism termed solvent drag or convection.',
          ],
          takeaway: 'Ultrafiltration extracts fluid via negative transmembrane pressure; convective solvent drag sweeps middle-molecule toxins across the membrane.',
          diagram: 'kidney',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In a clinical hemodialysis circuit, by which biophysical mechanism is accumulated excess plasma water extracted across the semipermeable dialyzer membrane into the dialysate stream?',
        options: [
          {
            id: 'hydrostatic-ultrafiltration-tmp',
            label: 'Hydrostatic ultrafiltration driven by an applied transmembrane pressure (TMP) gradient',
            explanation: 'Correct: establishing a hydrostatic pressure differential between blood and dialysate compartments forces bulk plasma water across semipermeable pores.',
          },
          {
            id: 'active-primary-atp-pumping',
            label: 'Primary active ionic transport fueled by ATP-dependent pump cassettes',
            explanation: 'Incorrect: artificial dialyzer membranes are inert synthetic polymers lacking cellular transport ATPases.',
          },
          {
            id: 'facilitated-passive-pinocytosis',
            label: 'Vesicular pinocytosis mediated by aquaporin-2 water channels',
            explanation: 'Incorrect: artificial hollow fiber filters do not possess biological aquaporin proteins or endocytic machinery.',
          },
          {
            id: 'thermal-convection-evaporation',
            label: 'Thermal phase-change evaporation induced by radiofrequency heating',
            explanation: 'Incorrect: hemodialysis operates at physiological body temperature and fluid is extracted as liquid water through hydrostatic filtration.',
          },
        ],
      },
    },
  },
});
