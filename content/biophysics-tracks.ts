import { lessonSchema } from '../src/contracts/learning';

export const biophysicsNernstLesson = lessonSchema.parse({
  id: 'biophysics-nernst',
  revision: 1,
  questionId: 'biophysics-nernst-potassium',
  correctOptionId: 'higher-resting-k-permeability',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-nerve-potentials',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential',
      section: 'Chapter 12.4 · The Action Potential: Electrochemical gradients, Nernst and membrane resting potential',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biofísica',
      hook: 'Por que o potencial elétrico de uma célula em repouso é tão negativo, quase colado no valor de equilíbrio do potássio?',
      title: 'Potenciais bioelétricos: equação de Nernst e repouso de membrana',
      description: 'Compreenda as bases biofísicas do potencial de repouso, o equilíbrio eletroquímico de Nernst e a equação de Goldman-Hodgkin-Katz.',
      objective: 'Aplicar a equação de Nernst para íons isolados e explicar por que a alta permeabilidade ao K⁺ dita o potencial de membrana em repouso.',
      stages: [
        {
          id: 'nernst-equilibrium',
          title: 'Equilíbrio eletroquímico e a equação de Nernst',
          paragraphs: [
            'Um íon permeável atravessa a membrana impulsionado por duas forças: o gradiente químico de concentração e o gradiente elétrico determinado pela separação de cargas.',
            'O potencial de Nernst (E_íon) é a voltagem de membrana exata na qual a força elétrica equilibra com precisão a tendência de difusão química, cessando o fluxo líquido daquele íon específico.',
          ],
          takeaway: 'O potencial de Nernst iguala força elétrica e química; para o K⁺ fica em torno de -90 mV, e para o Na⁺ em +60 mV.',
          diagram: 'neuron',
        },
        {
          id: 'potassium-dominance',
          title: 'Permeabilidade ao potássio e potencial de repouso',
          paragraphs: [
            'No estado de repouso de neurônios e miócitos, canais de vazamento de K⁺ permanecem constitutivamente abertos, conferindo uma permeabilidade ao K⁺ de 25 a 50 vezes maior que a permeabilidade ao Na⁺.',
            'Como o K⁺ sai continuamente a favor de seu gradiente químico carregando cargas positivas para o meio extracelular, o interior celular torna-se eletronegativo, aproximando o potencial de repouso (-70 mV) do potencial de equilíbrio do K⁺ (-90 mV).',
          ],
          takeaway: 'A alta condutância de repouso ao K⁺ atrai o potencial de membrana celular para perto de -90 mV.',
          diagram: 'neuron',
        },
        {
          id: 'goldman-equation',
          title: 'Equação de Goldman-Hodgkin-Katz (GHK)',
          paragraphs: [
            'Quando múltiplos íons permeáveis coexistem através da membrana (Na⁺, K⁺ e Cl⁻), o potencial elétrico real de repouso não depende de uma única espécie, mas sim da permeabilidade relativa de cada uma.',
            'A equação de Goldman-Hodgkin-Katz pondera a concentração e a condutância relativa desses íons, demonstrando formalmente por que variações na permeabilidade (como a abertura de canais de sódio no disparo do potencial de ação) invertem a polaridade da membrana.',
          ],
          takeaway: 'A equação de GHK integra a permeabilidade relativa de vários íons para calcular a voltagem real de membrana.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Por que o potencial de repouso da membrana neuronal (-70 mV) é muito mais próximo do potencial de equilíbrio do potássio (-90 mV) do que do potencial de equilíbrio do sódio (+60 mV)?',
        options: [
          {
            id: 'higher-resting-k-permeability',
            label: 'Porque a membrana celular em repouso é muito mais permeável aos íons K⁺ do que aos íons Na⁺',
            explanation: 'Correto: a presença de canais de vazamento abertos para o K⁺ faz com que a condutância ao potássio domine amplamente o repouso celular, puxando o potencial elétrico para próximo de seu equilíbrio.',
          },
          {
            id: 'higher-resting-na-permeability',
            label: 'Porque os canais voltagem-dependentes de Na⁺ permanecem abertos de forma contínua no repouso',
            explanation: 'Incorreto: os canais de sódio voltagem-dependentes estão fechados no potencial de repouso; abrem-se somente após despolarização limiar.',
          },
          {
            id: 'absence-leak-channels',
            label: 'Porque a membrana é completamente impermeável a qualquer fluxo iônico passivo',
            explanation: 'Incorreto: se não houvesse canais de vazamento, nenhum gradiente elétrico passivo poderia ser estabelecido.',
          },
          {
            id: 'direct-atp-hyperpolarization',
            label: 'Porque a bomba de sódio-potássio bombeia exclusivamente cargas negativas para o interior citoplasmático',
            explanation: 'Incorreto: a bomba de Na⁺/K⁺ é eletrogênica positiva líquida (ejeta 3 Na⁺ e absorve 2 K⁺), contribuindo com apenas alguns milivolts para o repouso.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'Why is the resting electrical potential of our cells so negative, closely tracking the equilibrium value of potassium?',
      title: 'Bioelectric Potentials: The Nernst Equation and Resting Potential',
      description: 'Master the biophysical foundations of resting membrane potential, Nernst electrochemical equilibrium, and the Goldman-Hodgkin-Katz equation.',
      objective: 'Apply the Nernst equation for single ions and explain why dominant K⁺ permeability establishes the negative resting potential.',
      stages: [
        {
          id: 'nernst-equilibrium',
          title: 'Electrochemical equilibrium and the Nernst equation',
          paragraphs: [
            'Permeant ions cross cellular membranes propelled by two converging forces: a chemical concentration gradient and an electrical charge gradient.',
            'The Nernst potential (E_ion) represents the exact membrane voltage at which the electrical force precisely counters the chemical diffusion tendency, halting net flux for that particular ion.',
          ],
          takeaway: 'The Nernst potential balances chemical and electrical forces; for K⁺ it is roughly -90 mV, while for Na⁺ it is +60 mV.',
          diagram: 'neuron',
        },
        {
          id: 'potassium-dominance',
          title: 'Potassium permeability and resting membrane voltage',
          paragraphs: [
            'In resting neurons and excitable cells, non-gated K⁺ leak channels remain constitutively open, conferring a resting permeability to K⁺ that is 25 to 50 times greater than that of Na⁺.',
            'As K⁺ continuously diffuses outward along its concentration gradient carrying positive charge into the extracellular space, it leaves the cell interior electronegative, pulling resting voltage (-70 mV) close to K⁺ equilibrium (-90 mV).',
          ],
          takeaway: 'High resting conductance to K⁺ drives the membrane resting potential down near -90 mV.',
          diagram: 'neuron',
        },
        {
          id: 'goldman-equation',
          title: 'The Goldman-Hodgkin-Katz (GHK) equation',
          paragraphs: [
            'When several permeant ions coexist across the membrane (Na⁺, K⁺, and Cl⁻), the true resting potential does not depend on a single equilibrium, but on the relative permeability of each species.',
            'The Goldman-Hodgkin-Katz equation weights the concentrations and relative conductances of these ions, demonstrating why changes in permeability (such as rapid sodium channel opening during an action potential) swing membrane voltage.',
          ],
          takeaway: 'The GHK equation integrates relative ion permeabilities to calculate real-world multi-ion membrane voltages.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Why is the resting neuronal membrane potential (-70 mV) much closer to the potassium equilibrium potential (-90 mV) than to the sodium equilibrium potential (+60 mV)?',
        options: [
          {
            id: 'higher-resting-k-permeability',
            label: 'Because resting cell membranes are substantially more permeable to K⁺ than to Na⁺',
            explanation: 'Correct: constitutively open K⁺ leak channels make resting potassium conductance dominate membrane energetics, drawing resting potential near EK.',
          },
          {
            id: 'higher-resting-na-permeability',
            label: 'Because voltage-gated Na⁺ channels remain constitutively wide open during steady resting states',
            explanation: 'Incorrect: voltage-gated sodium channels are closed at resting potentials, activating only when threshold depolarization is attained.',
          },
          {
            id: 'absence-leak-channels',
            label: 'Because the lipid bilayer is entirely impermeable to any passive ion movement in resting states',
            explanation: 'Incorrect: complete impermeability would prevent ion fluxes and abolish the establishment of resting membrane potentials.',
          },
          {
            id: 'direct-atp-hyperpolarization',
            label: 'Because the sodium-potassium pump exclusively pumps negative anions into the cytoplasm',
            explanation: 'Incorrect: the Na⁺/K⁺ pump exports 3 Na⁺ for every 2 K⁺ imported, generating a minor net positive outward current of only a few millivolts.',
          },
        ],
      },
    },
  },
});

export const biophysicsHemodynamicsLesson = lessonSchema.parse({
  id: 'biophysics-hemodynamics',
  revision: 1,
  questionId: 'biophysics-hemodynamics-poiseuille',
  correctOptionId: 'increases-sixteen-fold',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-blood-pressure-flow',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance',
      section: 'Chapter 20.2 · Blood Flow, Blood Pressure, and Resistance: Poiseuille law, vessel radius and resistance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biofísica',
      hook: 'Como uma redução de apenas 10% no calibre de uma artéria pode diminuir o fluxo de sangue em mais de um terço?',
      title: 'Biofísica da circulação: lei de Poiseuille e resistência vascular',
      description: 'Explore a hidrodinâmica cardiovascular: a dependência de r⁴ na resistência arteriolar e as características do fluxo laminar versus turbulento.',
      objective: 'Aplicar a lei de Poiseuille para demonstrar o impacto do raio na resistência vascular e distinguir fluxos laminares de turbulentos.',
      stages: [
        {
          id: 'poiseuille-law',
          title: 'A lei de Poiseuille e a quarta potência do raio (r⁴)',
          paragraphs: [
            'O fluxo de um fluido viscoso através de um tubo rígido é governado pela equação de Poiseuille, segundo a qual a resistência ao fluxo (R) é inversamente proporcional à quarta potência do raio do vaso (R ∝ 1/r⁴).',
            'Isso significa que modificações mínimas no calibre vascular produzem impactos astronômicos na resistência: duplicar o raio reduz a resistência em 16 vezes (2⁴ = 16), enquanto reduzir o raio pela metade multiplica a resistência por 16.',
          ],
          takeaway: 'Resistência é inversamente proporcional a r⁴: pequenos ajustes de calibre causam enormes mudanças no fluxo sanguíneo.',
          diagram: 'pressure',
        },
        {
          id: 'arteriolar-control',
          title: 'Arteríolas como vasos de resistência periférica',
          paragraphs: [
            'No leito vascular sistêmico, as arteríolas possuem abundante musculatura lisa em suas paredes e respondem por mais de 50% da Resistência Vascular Periférica Total (RPT).',
            'Através de vasoconstrição ou vasodilatação arteriolar finamente orquestrada pelo sistema nervoso autônomo, o organismo consegue redistribuir o débito cardíaco para órgãos prioritários e modular a pressão arterial média.',
          ],
          takeaway: 'As arteríolas ajustam seu raio para controlar a resistência periférica e regular a pressão arterial.',
          diagram: 'pressure',
        },
        {
          id: 'laminar-turbulent-flow',
          title: 'Fluxo laminar vs fluxo turbulento e número de Reynolds',
          paragraphs: [
            'Em condições fisiológicas normais, o sangue flui em padrão laminar silencioso: camadas cilíndricas concêntricas onde as hemácias centrais movem-se com velocidade máxima e a camada marginal encostada no endotélio quase para.',
            'Quando a velocidade aumenta excessivamente, o calibre alarga abruptamente ou a viscosidade cai (anemia grave), o número de Reynolds supera 2.000, convertendo o fluxo em turbulento. A turbulência consome mais energia e gera vibrações audíveis que chamamos de sopros cardiovasculares.',
          ],
          takeaway: 'Fluxo laminar é organizado e silencioso; fluxo turbulento gera turbilhões, perda de energia e sopros audíveis ao estetoscópio.',
          diagram: 'pressure',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'De acordo com a lei de Poiseuille da hidrodinâmica, se o raio de um vaso de resistência arteriolar for reduzido à metade (diminuição de 50%) mantendo constantes o comprimento e a viscosidade do sangue, o que ocorrerá com sua resistência vascular?',
        options: [
          {
            id: 'increases-sixteen-fold',
            label: 'A resistência vascular aumentará 16 vezes (2⁴ = 16)',
            explanation: 'Correto: como a resistência é inversamente proporcional à quarta potência do raio (R ∝ 1/r⁴), reduzir o raio pela metade eleva a resistência por (1 / (1/2)⁴) = 16 vezes.',
          },
          {
            id: 'increases-two-fold',
            label: 'A resistência vascular aumentará apenas 2 vezes linearmente',
            explanation: 'Incorreto: a relação com o raio não é linear, mas exponencial de quarta potência.',
          },
          {
            id: 'increases-four-fold',
            label: 'A resistência vascular aumentará 4 vezes proporcionalmente à área da secção',
            explanation: 'Incorreto: a área varia com o quadrado do raio (r²), mas a resistência hidrodinâmica varia com r⁴.',
          },
          {
            id: 'decreases-by-half',
            label: 'A resistência vascular cairá pela metade para manter a velocidade do fluxo',
            explanation: 'Incorreto: constrição arteriolar sempre aumenta a resistência vascular de forma maciça, nunca a reduz.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'How can a seemingly minor 10% narrowing in an artery choke off more than a third of its blood supply?',
      title: 'Biophysics of Circulation: Poiseuille’s Law and Vascular Resistance',
      description: 'Explore cardiovascular hemodynamics: the dramatic r⁴ dependence of arteriolar resistance and the physics of laminar versus turbulent flow.',
      objective: 'Apply Poiseuille’s law to demonstrate how vessel radius governs resistance and distinguish laminar from turbulent flow patterns.',
      stages: [
        {
          id: 'poiseuille-law',
          title: 'Poiseuille’s law and the fourth-power radius relationship (r⁴)',
          paragraphs: [
            'The flow of a Newtonian fluid through cylindrical conduits is governed by Poiseuille’s equation, where resistance (R) is inversely proportional to the fourth power of the radius (R ∝ 1/r⁴).',
            'Consequently, minute adjustments in vascular caliber produce colossal swings in hydraulic resistance: doubling vessel radius slashes resistance 16-fold (2⁴ = 16), while halving radius inflates resistance 16-fold.',
          ],
          takeaway: 'Resistance is inversely proportional to r⁴: subtle changes in vascular caliber exert massive effects on local blood flow.',
          diagram: 'pressure',
        },
        {
          id: 'arteriolar-control',
          title: 'Arterioles as master resistance vessels',
          paragraphs: [
            'Across the systemic vascular tree, arterioles boast a rich coat of vascular smooth muscle and generate over 50% of Total Peripheral Resistance (TPR).',
            'By executing coordinated vasoconstriction and vasodilation regulated by sympathetic tone, arterioles redistribute cardiac output to working organs and defend systemic arterial blood pressure.',
          ],
          takeaway: 'Arteriolar caliber regulates total peripheral resistance and directs organ perfusion.',
          diagram: 'pressure',
        },
        {
          id: 'laminar-turbulent-flow',
          title: 'Laminar vs turbulent flow and the Reynolds number',
          paragraphs: [
            'Under physiological conditions, blood progresses in a silent, organized laminar profile: concentric parabolic streamtubes where central axial flow moves fastest while the boundary layer adjacent to endothelium is nearly stationary.',
            'When linear velocity surges, diameter changes abruptly, or viscosity decreases (as in severe anemia), the Reynolds number exceeds 2000, transitioning flow into turbulent vortices. Turbulence dissipates energy and vibrates tissues, generating audible vascular murmurs and bruits.',
          ],
          takeaway: 'Laminar flow is streamlined and silent; turbulent flow wastes kinetic energy and creates audible murmurs.',
          diagram: 'pressure',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'According to Poiseuille’s hydrodynamic law, if the radius of an arteriolar resistance vessel is halved (decreased by 50%) while vessel length and blood viscosity remain constant, what happens to its hydraulic vascular resistance?',
        options: [
          {
            id: 'increases-sixteen-fold',
            label: 'Vascular resistance increases 16-fold (2⁴ = 16)',
            explanation: 'Correct: because vascular resistance is inversely proportional to the fourth power of the radius (R ∝ 1/r⁴), halving the radius escalates resistance by (1 / (0.5)⁴) = 16 times.',
          },
          {
            id: 'increases-two-fold',
            label: 'Vascular resistance doubles linearly with the caliber reduction',
            explanation: 'Incorrect: resistance does not follow a linear relationship; it scales with the fourth power of the radius.',
          },
          {
            id: 'increases-four-fold',
            label: 'Vascular resistance increases 4-fold in direct proportion to cross-sectional area',
            explanation: 'Incorrect: while cross-sectional area relates to r², viscous hydrodynamic flow resistance is governed strictly by r⁴.',
          },
          {
            id: 'decreases-by-half',
            label: 'Vascular resistance drops by 50% to maintain constant perfusion velocity',
            explanation: 'Incorrect: narrowing a vascular lumen drastically amplifies resistance rather than reducing it.',
          },
        ],
      },
    },
  },
});

export const biophysicsVisionHearingLesson = lessonSchema.parse({
  id: 'biophysics-vision-hearing',
  revision: 1,
  questionId: 'biophysics-vision-refraction',
  correctOptionId: 'cornea-interface',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-vision-hearing',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/15-1-divisions-of-the-autonomic-nervous-system',
      section: 'Chapter 14.1 · Sensory Perception: Optical refraction of the eye and cochlear hair cell transduction',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biofísica',
      hook: 'Por que enxergamos tudo embaçado quando abrimos os olhos embaixo d’água, mas com uma máscara de mergulho a visão fica nítida?',
      title: 'Biofísica sensorial: refração ocular e transdução coclear',
      description: 'Analise a biofísica da visão (poder dióptrico da córnea, acomodação do cristalino e ametropias) e a mecano-transdução no ouvido interno.',
      objective: 'Identificar a interface ar-córnea como o principal elemento refrativo do olho e explicar a transdução mecânica coclear no órgão de Corti.',
      stages: [
        {
          id: 'cornea-lens-optics',
          title: 'Óptica ocular: o poder refrativo da córnea e do cristalino',
          paragraphs: [
            'A refração ocorre quando a luz muda de velocidade ao atravessar meios com diferentes índices de refração. A interface anterior da córnea com o ar possui a maior diferença de índices de refração do sistema óptico (ar = 1,00 vs estroma corneano = 1,37).',
            'Por isso, a córnea responde por aproximadamente 40 a 44 dioptrias (cerca de dois terços) do poder de refração total do olho (~60 dioptrias), enquanto o cristalino fornece as 15 a 20 dioptrias restantes, permitindo a focalização dinâmica (acomodação) pelo músculo ciliar.',
          ],
          takeaway: 'A córnea fornece dois terços do poder dióptrico total do olho humano devido à grande diferença de índice de refração com o ar.',
          diagram: 'membrane',
        },
        {
          id: 'refractive-errors',
          title: 'Biofísica das ametropias: miopia e hipermetropia',
          paragraphs: [
            'Na emetropia, os raios paralelos convergem exatamente sobre a fóvea retiniana. Na miopia, o eixo ântero-posterior do olho é excessivamente longo ou o poder de refração é muito alto, fazendo os raios convergirem antes da retina (corrigido com lentes divergentes côncavas).',
            'Na hipermetropia, o olho é curto ou seu poder refrativo é insuficiente, convergindo a imagem teoricamente atrás da retina (corrigido com lentes convergentes convexas).',
          ],
          takeaway: 'Miopia focaliza antes da retina (lentes divergentes); hipermetropia focaliza atrás (lentes convergentes).',
          diagram: 'membrane',
        },
        {
          id: 'cochlear-transduction',
          title: 'Transdução mecanoelétrica na cóclea',
          paragraphs: [
            'No ouvido interno, as ondas sonoras vibram a perilinfa e a membrana basilar do ducto coclear. No órgão de Corti, a oscilação da membrana basilar deflete os estereocílios das células ciliadas contra a membrana tectorial.',
            'A deflexão dos estereocílios tensiona filamentos de união de ponta (tip links), abrindo mecanicamente canais iônicos de influxo de K⁺ (presente em alta concentração na endolinfa), despolarizando a célula ciliada e deflagrando o potencial de ação no nervo auditivo.',
          ],
          takeaway: 'O som vibra a membrana basilar, defletindo estereocílios que abrem canais iônicos mecânicos via tip links.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual estrutura é responsável pela maior parte do poder de refração dióptrica do olho humano, convergindo os raios luminosos antes que atinjam o cristalino?',
        options: [
          {
            id: 'cornea-interface',
            label: 'A interface entre o ar e a superfície anterior da córnea (~40 a 44 dioptrias)',
            explanation: 'Correto: a acentuada curvatura da córnea e o grande salto no índice de refração do ar para o tecido corneano fornecem cerca de 70% de todo o poder dióptrico ocular.',
          },
          {
            id: 'crystalline-lens',
            label: 'O cristalino em sua curvatura de repouso desacomodada (~15 dioptrias)',
            explanation: 'Incorreto: o cristalino é responsável pela refração dinâmica fina (acomodação), mas contribui com apenas um terço do poder total.',
          },
          {
            id: 'vitreous-humor',
            label: 'O corpo vítreo transparente da câmara posterior do olho',
            explanation: 'Incorreto: o humor vítreo preenche a cavidade posterior mantendo a arquitetura do globo, com poder refrativo desprezível.',
          },
          {
            id: 'neural-retina',
            label: 'A camada de fotorreceptores e células pigmentadas da retina',
            explanation: 'Incorreto: a retina é a superfície sensora neural de transdução da luz em potenciais elétricos, e não uma lente dióptrica de refração.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'Why is our vision hopelessly blurry when we open our eyes underwater, yet instantly razor-sharp when wearing a simple swim mask?',
      title: 'Sensory Biophysics: Ocular Refraction and Cochlear Transduction',
      description: 'Analyze sensory physics: the dioptric power of the cornea, lens accommodation, refractive errors, and cochlear mechanotransduction.',
      objective: 'Identify the air-cornea interface as the primary refractive element of the eye and detail mechanical sound transduction in the organ of Corti.',
      stages: [
        {
          id: 'cornea-lens-optics',
          title: 'Ocular optics: Cornea and lens refractive power',
          paragraphs: [
            'Light bends (refracts) when its velocity changes across materials of differing refractive indices. The anterior air-cornea interface exhibits the sharpest index contrast in the entire visual apparatus (air = 1.00 vs corneal stroma = 1.37).',
            'Consequently, the cornea supplies roughly 40 to 44 diopters (about two-thirds) of the eye’s total 60-diopter focusing power, while the crystalline lens delivers the remaining 15 to 20 diopters, providing dynamic focus (accommodation) driven by the ciliary muscle.',
          ],
          takeaway: 'The cornea contributes approximately two-thirds of the eye’s total dioptric power due to the large refractive index difference with air.',
          diagram: 'membrane',
        },
        {
          id: 'refractive-errors',
          title: 'Biophysics of ametropias: Myopia and hyperopia',
          paragraphs: [
            'In emmetropia, parallel rays converge sharply on the fovea. In myopia (nearsightedness), excessive axial length or corneal curvature causes light to focus in front of the retina (corrected with concave divergent lenses).',
            'In hyperopia (farsightedness), the eyeball is too short or refractive power is too weak, causing rays to focus theoretically behind the retina (corrected with convex convergent lenses).',
          ],
          takeaway: 'Myopia focuses light in front of the retina (diverging lenses); hyperopia focuses behind the retina (converging lenses).',
          diagram: 'membrane',
        },
        {
          id: 'cochlear-transduction',
          title: 'Mechanotranduction in the inner ear cochlea',
          paragraphs: [
            'In the inner ear, acoustic pressure waves vibrate perilymph fluid, exciting the cochlear duct basilar membrane. Within the organ of Corti, basilar oscillations shear hair cell stereocilia against the overlying tectorial membrane.',
            'Mechanical displacement stretches molecular tip links connecting stereocilia, directly gating open mechanosensitive K⁺ channels. Influx of potassium from K⁺-rich endolymph depolarizes hair cells, triggering acoustic nerve action potentials.',
          ],
          takeaway: 'Sound waves vibrate the basilar membrane, deflecting stereocilia and mechanically gating open ion channels via tip links.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which ocular structure provides the largest fraction of total dioptric refractive power in the human eye, bending incident light rays before they reach the crystalline lens?',
        options: [
          {
            id: 'cornea-interface',
            label: 'The anterior air-cornea interface (~40 to 44 diopters of refractive power)',
            explanation: 'Correct: the steep curvature of the cornea paired with the large refractive index difference between air (1.00) and corneal tissue (1.37) produces roughly 70% of total ocular refraction.',
          },
          {
            id: 'crystalline-lens',
            label: 'The unaccommodated crystalline lens in its resting state (~15 diopters)',
            explanation: 'Incorrect: while the crystalline lens provides variable dynamic accommodation, it contributes only about one-third of total baseline refraction.',
          },
          {
            id: 'vitreous-humor',
            label: 'The gelatinous vitreous humor filling the posterior vitreous chamber',
            explanation: 'Incorrect: vitreous humor maintains ocular shape and optical transparency, but lacks significant refractive converging power.',
          },
          {
            id: 'neural-retina',
            label: 'The photoreceptor layer and pigmented neuroepithelium of the retina',
            explanation: 'Incorrect: the retina is the sensory transducer converting photons into neural signals, not a refractive lens.',
          },
        ],
      },
    },
  },
});

export const biophysicsRadiationLesson = lessonSchema.parse({
  id: 'biophysics-radiation',
  revision: 1,
  questionId: 'biophysics-radiation-imaging',
  correctOptionId: 'ultrasound-and-mri',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biophysics',
  sources: [
    {
      id: 'openstax-ap2e-medical-imaging',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/1-2-structural-organization-of-the-human-body',
      section: 'Chapter 1.2 · Medical Imaging: Ionizing radiation (X-rays, CT) and non-ionizing modalities (Ultrasound, MRI)',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Biofísica',
      hook: 'Por que grávidas podem fazer ultrassonografia e ressonância magnética com tranquilidade, mas devem evitar radiografias e tomografias?',
      title: 'Biofísica das radiações: imagem diagnóstica ionizante e não ionizante',
      description: 'Diferencie radiação ionizante (raios X e tomografia) de métodos não ionizantes (ultrassom mecânico e ressonância magnética nuclear).',
      objective: 'Categorizar exames de imagem médica pelo tipo de radiação envolvida e explicar os princípios físicos do ultrassom e da ressonância magnética.',
      stages: [
        {
          id: 'ionizing-radiation',
          title: 'Radiação ionizante: raios X e tomografia computadorizada',
          paragraphs: [
            'A radiação eletromagnética ionizante (raios X e raios gama) possui fótons com energia suficiente (> 10-12 eV) para arrancar elétrons de átomos e moléculas biológicas.',
            'A ionização pode quebrar diretamente pontes fosfodiéster do DNA ou gerar radicais livres reativos de oxigênio (efeito indireto pela radiólise da água), conferindo risco cumulativo dose-dependente de mutações e carcinogênese. Radiografias convencionais e tomografias computadorizadas utilizam raios X ionizantes.',
          ],
          takeaway: 'Raios X e TC usam radiação ionizante, capaz de ejetar elétrons de orbitais atômicos e induzir danos no DNA.',
          diagram: 'membrane',
        },
        {
          id: 'ultrasound-acoustics',
          title: 'Ultrassonografia: ondas mecânicas e impedância acústica',
          paragraphs: [
            'O ultrassom não utiliza radiação eletromagnética; baseia-se em ondas mecânicas sonoras de alta frequência (> 2 a 15 MHz) propagadas pela oscilação elástica de partículas do meio.',
            'O transdutor converte eletricidade em vibrações mecânicas pelo efeito piezoelétrico. O feixe reflete-se na transição entre tecidos com impedâncias acústicas distintas, permitindo mapear órgãos sem qualquer dano por radiação ionizante.',
          ],
          takeaway: 'Ultrassom utiliza ondas mecânicas piezoelétricas; reflexões ocorrem nas interfaces de impedância acústica tecidual.',
          diagram: 'membrane',
        },
        {
          id: 'mri-resonance',
          title: 'Ressonância Magnética (RM): campos magnéticos e radiofrequência',
          paragraphs: [
            'A Ressonância Magnética utiliza campos magnéticos estáticos intensos (1,5 a 3 Tesla) para alinhar os momentos magnéticos (spins) dos prótons de hidrogênio (¹H) abundantes na água tecidual.',
            'Pulsos de radiofrequência (radiação não ionizante de baixa energia) perturbam esse alinhamento. Ao retornarem ao equilíbrio, os prótons emitem sinais de radiofrequência que são captados por bobinas, diferenciando tecidos com altíssima resolução espacial sem ionização molecular.',
          ],
          takeaway: 'RM alinha spins de prótons de hidrogênio com campo magnético e pulsos de radiofrequência não ionizantes.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Quais modalidades diagnósticas de imagem médica baseiam-se em princípios biofísicos estritamente não ionizantes, sendo seguras para avaliação fetal e tecidos radiosensíveis?',
        options: [
          {
            id: 'ultrasound-and-mri',
            label: 'Ultrassonografia (ondas sonoras mecânicas) e Ressonância Magnética (campos magnéticos e radiofrequência)',
            explanation: 'Correto: tanto a ultrassonografia (ondas mecânicas acústicas) quanto a RM (radiofrequência em campo magnético) não utilizam radiação ionizante, eliminando risco de quebra de DNA por ionização.',
          },
          {
            id: 'xray-and-ct',
            label: 'Radiografia convencional de tórax e Tomografia Computadorizada de feixe helicoidal',
            explanation: 'Incorreto: radiografias e tomografias dependem diretamente de feixes de raios X, que são formas de radiação eletromagnética ionizante.',
          },
          {
            id: 'pet-and-scintigraphy',
            label: 'Tomografia por Emissão de Pósitrons (PET-CT) e Cintilografia óssea',
            explanation: 'Incorreto: PET e cintilografia utilizam radiofármacos emissores de pósitrons e raios gama, ambos altamente ionizantes.',
          },
          {
            id: 'fluoroscopy-and-ct',
            label: 'Fluoroscopia contínua intervencionista e Angiotomografia arterial',
            explanation: 'Incorreto: fluoroscopia e angiotomografia utilizam altas cargas de raios X ionizantes para obter imagens dinâmicas e volumétricas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biophysics',
      hook: 'Why can pregnant women undergo ultrasounds and MRI scans with complete reassurance, yet must scrupulously avoid X-rays and CT scans?',
      title: 'Radiation Biophysics: Ionizing and Non-Ionizing Diagnostic Imaging',
      description: 'Differentiate ionizing radiation (X-rays and CT) from non-ionizing modalities (mechanical ultrasound and nuclear magnetic resonance).',
      objective: 'Categorize medical imaging modalities by radiation modality and explain the physical principles of ultrasound and magnetic resonance.',
      stages: [
        {
          id: 'ionizing-radiation',
          title: 'Ionizing radiation: X-rays and computed tomography (CT)',
          paragraphs: [
            'Ionizing electromagnetic radiation (X-rays and gamma rays) consists of high-energy photons (> 10–12 eV) capable of ejecting orbital electrons from biological atoms.',
            'Ionization directly shears phosphodiester DNA backbones or generates reactive oxygen species via water radiolysis, imparting cumulative, dose-dependent risks of somatic mutation and carcinogenesis. Plain radiography and CT employ ionizing X-rays.',
          ],
          takeaway: 'X-rays and CT utilize ionizing radiation, stripping electrons from atoms and posing cumulative DNA-damage risks.',
          diagram: 'membrane',
        },
        {
          id: 'ultrasound-acoustics',
          title: 'Ultrasonography: Mechanical acoustic waves and acoustic impedance',
          paragraphs: [
            'Ultrasound relies on high-frequency mechanical longitudinal pressure waves (> 2–15 MHz) propagated through the elastic oscillation of physical medium particles, devoid of electromagnetic radiation.',
            'Piezoelectric transducer crystals interconvert electrical currents and acoustic vibrations. Sound beams reflect at acoustic impedance boundaries between differing tissue densities, mapping internal anatomy safely.',
          ],
          takeaway: 'Ultrasound employs mechanical acoustic pressure waves; reflections generate images at acoustic impedance interfaces.',
          diagram: 'membrane',
        },
        {
          id: 'mri-resonance',
          title: 'Magnetic Resonance Imaging (MRI): Static fields and radiofrequency',
          paragraphs: [
            'MRI applies strong static magnetic fields (1.5–3.0 Tesla) to align the magnetic dipole moments (nuclear spins) of hydrogen protons (¹H) abundant in tissue water molecules.',
            'Non-ionizing radiofrequency pulses tip these spins out of alignment. As protons relax back to equilibrium, they emit radio signals recorded by receiver coils, yielding exquisite soft-tissue contrast without molecular ionization.',
          ],
          takeaway: 'MRI aligns tissue hydrogen protons in a strong magnetic field and perturbs them with non-ionizing radiofrequency pulses.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which diagnostic medical imaging modalities rely strictly upon non-ionizing physical mechanisms, making them safe for fetal assessment and radiosensitive tissues?',
        options: [
          {
            id: 'ultrasound-and-mri',
            label: 'Ultrasonography (acoustic mechanical waves) and Magnetic Resonance Imaging (magnetic fields and radiofrequency)',
            explanation: 'Correct: neither ultrasound (mechanical sound waves) nor MRI (radiofrequency pulses within static magnetic fields) utilizes ionizing radiation, eliminating ionization-induced DNA double-strand breaks.',
          },
          {
            id: 'xray-and-ct',
            label: 'Conventional chest radiography and helical volumetric Computed Tomography',
            explanation: 'Incorrect: conventional radiography and CT scanners generate ionizing X-ray photons that can displace orbital electrons and damage DNA.',
          },
          {
            id: 'pet-and-scintigraphy',
            label: 'Positron Emission Tomography (PET) and radioisotope bone scintigraphy',
            explanation: 'Incorrect: PET and scintigraphy administer radiotracers emitting positrons and gamma photons, which represent ionizing radiation.',
          },
          {
            id: 'fluoroscopy-and-ct',
            label: 'Continuous interventional fluoroscopy and arterial CT angiography',
            explanation: 'Incorrect: fluoroscopy and CT angiography rely on ionizing X-ray emissions to reconstruct real-time or cross-sectional vascular images.',
          },
        ],
      },
    },
  },
});
