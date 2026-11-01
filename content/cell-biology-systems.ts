import { lessonSchema } from '../src/contracts/learning';

export const cellCytoskeletonLesson = lessonSchema.parse({
  id: 'cell-cytoskeleton',
  revision: 1,
  questionId: 'cell-cytoskeleton-q1',
  correctOptionId: 'kinesin-anterograde',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch3-cytoskeleton',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-2-the-cytoplasm-and-cellular-organelles',
      section: 'Chapter 3 · The Cytoskeleton and Molecular Motors',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como vesículas cheias de neurotransmissores viajam mais de um metro ao longo de um único axônio neuronal até a sinapse?',
      title: 'Citoesqueleto e motores moleculares: actina, microtúbulos, cinesina e dineína',
      description: 'Explore os três filamentos do citoesqueleto e os motores moleculares que geram força mecânica e transporte axonal.',
      objective: 'Distinguir microfilamentos, filamentos intermediários e microtúbulos e contrastar cinesina e dineína.',
      stages: [
        {
          id: 'cytoskeleton-filaments',
          title: 'Os três componentes do citoesqueleto',
          paragraphs: [
            'O citoesqueleto celular é uma rede tridimensional dinâmica formada por microfilamentos de actina (7 nm, responsáveis por motilidade, anel contrátil e microvilosidades), filamentos intermediários (10 nm, como queratina e vimentina, estáveis e resistentes a tensão mecânica) e microtúbulos (25 nm).',
            'Microtúbulos são cilindros ocos polimerizados a partir de heterodímeros de alfa e beta-tubulina orientados a partir do centrossomo (MTOC), exibindo instabilidade dinâmica entre crescimento e catástrofe de despolimerização.',
          ],
          takeaway: 'Actina confere contratilidade, filamentos intermediários dão força tensil e microtúbulos organizam trilhos de transporte.',
          diagram: 'sarcomere',
        },
        {
          id: 'molecular-motors',
          title: 'Motores moleculares: cinesina e dineína',
          paragraphs: [
            'O transporte vesicular ao longo dos microtúbulos depende de proteínas motoras que utilizam hidrólise de ATP para "caminhar" com suas cabeças globulares.',
            'A cinesina desloca cargas predominantemente em direção à extremidade positiva (+) dos microtúbulos (transporte anterógrado para a periferia celular), enquanto a dineína citoplasmática caminha em direção à extremidade negativa (-) voltada para o centrossomo (transporte retrógrado).',
          ],
          takeaway: 'Cinesinas movem cargas para a extremidade mais periférica e dineínas movem para o centro celular (extremidade menos).',
          diagram: 'neuron',
        },
        {
          id: 'cilia-and-mitotic-spindle',
          title: 'Cílios, flagelos e fuso mitótico',
          paragraphs: [
            'Nos cílios e flagelos, os microtúbulos se organizam no axonema no arranjo 9+2 (nove dupletos periféricos e um par central), onde a dineína ciliar desliza os dupletos para gerar batimento ondulatório.',
            'Durante a divisão celular, o fuso mitótico de microtúbulos conecta seus cinetócoros aos cromossomos para tracioná-los na anáfase, processo farmacologicamente inibido por alcaloides como colchicina, vincristina e paclitaxel.',
          ],
          takeaway: 'O arranjo 9+2 com dineína move cílios e o fuso mitótico de microtúbulos segrega os cromossomos na mitose.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual proteína motora dependente de ATP transporta vesículas contendo neurotransmissores do corpo celular neuronal em direção ao terminal axonal (transporte anterógrado)?',
        options: [
          {
            id: 'kinesin-anterograde',
            label: 'Cinesina (movendo-se em direção à extremidade positiva dos microtúbulos)',
            explanation: 'Correto: a cinesina conduz o transporte axonal anterógrado para a periferia axonal na extremidade (+).',
          },
          {
            id: 'dynein-retrograde',
            label: 'Dineína citoplasmática (movendo-se para a extremidade negativa)',
            explanation: 'Incorreto: a dineína é responsável pelo transporte retrógrado da periferia de volta ao soma neuronal.',
          },
          {
            id: 'myosin-actin-sliding',
            label: 'Miosina II sarcomérica',
            explanation: 'Incorreto: a miosina II interage com filamentos de actina para contração muscular, não em trilhos axonais de microtúbulos.',
          },
          {
            id: 'tubulin-dimer',
            label: 'Heterodímero estático de tubulina',
            explanation: 'Incorreto: tubulinas são os blocos estruturais do microtúbulo e não possuem atividade motora de transporte.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How do secretory vesicles packed with neurotransmitters travel over a meter down a single axon to reach the presynaptic terminal?',
      title: 'Cytoskeleton and molecular motors: actin, microtubules, kinesin, and dynein',
      description: 'Explore the three cytoskeletal filaments and the ATP-driven motor proteins generating force and directional intracellular transit.',
      objective: 'Distinguish microfilaments, intermediate filaments, and microtubules, and contrast kinesin and dynein directional motility.',
      stages: [
        {
          id: 'cytoskeleton-filaments',
          title: 'The three foundational cytoskeletal filament networks',
          paragraphs: [
            'The eukaryotic cytoskeleton is a dynamic structural scaffold composed of actin microfilaments (7 nm, mediating cellular motility, cytokinesis rings, and microvillar rigidity), intermediate filaments (10 nm, providing tensile mechanical strength via keratins and lamins), and microtubules (25 nm).',
            'Microtubules are hollow polarized cylinders assembled from alpha- and beta-tubulin heterodimers nucleated at the centrosome (MTOC), undergoing dynamic instability between GTP-capped elongation and rapid depolymerization catastrophe.',
          ],
          takeaway: 'Actin drives motility and contraction, intermediate filaments resist tensile strain, and microtubules form transport tracks.',
          diagram: 'sarcomere',
        },
        {
          id: 'molecular-motors',
          title: 'ATP-powered molecular motors: kinesin and dynein',
          paragraphs: [
            'Intracellular organelle and vesicular trafficking along microtubule conduits requires motor proteins that convert ATP hydrolysis into stepping motion via globular motor heads.',
            'Conventional kinesin motors step toward the rapidly growing plus-end (+) of microtubules (driving anterograde transport toward the cell periphery), whereas cytoplasmic dynein steps retrogradely toward the minus-end (-) anchored at the centrosome.',
          ],
          takeaway: 'Kinesin drives plus-end directed anterograde transport, while dynein drives minus-end directed retrograde return.',
          diagram: 'neuron',
        },
        {
          id: 'cilia-and-mitotic-spindle',
          title: 'Ciliary axonemes and the mitotic spindle apparatus',
          paragraphs: [
            'Motile cilia and flagella organize microtubules into an evolutionarily conserved 9+2 axoneme (nine doublet microtubules encircling a central singlet pair), where axonemal dynein arms slide doublets to produce rhythmic beating.',
            'During cell division, the microtubule mitotic spindle captures chromosomal kinetochores to partition sister chromatids in anaphase, a clinical target for anti-neoplastic drugs like colchicine, vinca alkaloids, and taxanes.',
          ],
          takeaway: 'The 9+2 axonemal array drives ciliary motility, while the spindle apparatus partitions chromosomes during mitosis.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which ATP-dependent molecular motor protein propels secretory vesicles from the neuronal soma down the axon toward the synaptic terminal (anterograde transport)?',
        options: [
          {
            id: 'kinesin-anterograde',
            label: 'Kinesin (stepping toward the microtubule plus-end)',
            explanation: 'Correct: kinesins power fast anterograde axonal transport toward the axon terminal at the microtubule plus-end (+).',
          },
          {
            id: 'dynein-retrograde',
            label: 'Cytoplasmic dynein (stepping toward the microtubule minus-end)',
            explanation: 'Incorrect: dynein powers retrograde transport from the nerve terminal back to the soma.',
          },
          {
            id: 'myosin-actin-sliding',
            label: 'Sarcomeric myosin II',
            explanation: 'Incorrect: myosin motors interact with actin filaments for contraction rather than microtubule-based axonal transit.',
          },
          {
            id: 'tubulin-dimer',
            label: 'Static tubulin heterodimer',
            explanation: 'Incorrect: tubulin is the structural building block of the microtubule track, lacking autonomous motor translocase activity.',
          },
        ],
      },
    },
  },
});

export const cellJunctionsEcmLesson = lessonSchema.parse({
  id: 'cell-junctions-ecm',
  revision: 1,
  questionId: 'cell-junctions-ecm-q1',
  correctOptionId: 'connexin-gap-junction',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch3-ch4-junctions',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-1-the-cell-membrane',
      section: 'Chapter 3 & 4 · Cell Junctions and Extracellular Adhesion',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como células vizinhas conseguem compartilhar sinais químicos e elétricos instantaneamente como se compartilhassem o mesmo citoplasma?',
      title: 'Junções celulares e matriz extracelular: oclusivas, aderentes, desmossomos e gap',
      description: 'Diferencie as especializações de membrana epitelial e entenda como as células se ancoram à lâmina basal e comunicam-se entre si.',
      objective: 'Identificar as proteínas estruturais das zônulas de oclusão, desmossomos, hemidesmossomos e junções comunicantes.',
      stages: [
        {
          id: 'occluding-adherens',
          title: 'Zônula de oclusão e zônula de adesão',
          paragraphs: [
            'No polo apical dos epitélios, a zônula de oclusão (tight junction) é formada por ocludinas e claudinas. Ela veda o espaço intercelular, estabelecendo a barreira paracelular e mantendo a polaridade celular ao restringir a difusão lipídica na membrana.',
            'Logo abaixo situa-se a zônula de adesão, onde caderinas clássicas dependentes de cálcio conectam-se intracelularmente a filamentos de actina via cateninas, formando um cinturão de sustentação mecânica contínuo.',
          ],
          takeaway: 'Zônulas de oclusão vedam o espaço paracelular com claudinas; zônulas de adesão unem filamentos de actina com caderinas.',
          diagram: 'membrane',
        },
        {
          id: 'desmosomes-hemidesmosomes',
          title: 'Desmossomos e hemidesmossomos: âncoras contra estresse mecânico',
          paragraphs: [
            'Máculas de adesão (desmossomos) unem células adjacentes como pontos de solda através de desmogleínas e desmocolinas, ancoradas a placas citoplasmáticas que se ligam a filamentos intermediários (queratina/tonofilamentos).',
            'Na face basal, hemidesmossomos ancoram os filamentos intermediários da célula à laminina da membrana basal através de integrinas transmembrana (alfa-6-beta-4), prevenindo o descolamento epitelial (como no penfigoide bolhoso).',
          ],
          takeaway: 'Desmossomos conectam filamentos intermediários entre células vizinhas e hemidesmossomos ancoram a célula à lâmina basal.',
          diagram: 'tissue',
        },
        {
          id: 'gap-junctions-ecm',
          title: 'Junções comunicantes (gap) e acoplamento iônico',
          paragraphs: [
            'Junções comunicantes (gap junctions) são canais hidrofílicos intercelulares formados por dois conexons alinhados (cada um composto por seis proteínas conexinas).',
            'Permitem a passagem livre e direta de íons (como Ca²⁺), segundo mensageiros (AMPc, IP₃) e moléculas menores que 1 kDa entre citoplasmas vizinhos, permitindo o acoplamento elétrico coordenado do miocárdio e músculo liso.',
          ],
          takeaway: 'Junções gap formadas por conexinas permitem a passagem direta de íons e pequenas moléculas entre células.',
          diagram: 'valves',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual especialização de junção intercelular é composta por hexâmeros de conexinas que formam canais aquosos permitindo acoplamento elétrico e iônico direto?',
        options: [
          {
            id: 'connexin-gap-junction',
            label: 'Junção comunicante (gap junction)',
            explanation: 'Correto: junções comunicantes são formadas por conexinas montadas em conexons que acoplam metabolicamente e eletricamente as células.',
          },
          {
            id: 'tight-junction-claudin',
            label: 'Zônula de oclusão (tight junction)',
            explanation: 'Incorreto: zônulas de oclusão vedam o espaço intercelular impedindo a passagem de substâncias pela via paracelular.',
          },
          {
            id: 'hemidesmosome-integrin',
            label: 'Hemidesmossomo basal',
            explanation: 'Incorreto: hemidesmossomos ancoram o citoesqueleto da célula à matriz extracelular da lâmina basal.',
          },
          {
            id: 'adherens-actin-belt',
            label: 'Zônula de adesão apical',
            explanation: 'Incorreto: zônulas de adesão ancoram a rede de microfilamentos de actina através de caderinas e cateninas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How can neighboring cells instantaneously share electrical potentials and chemical signals as though merged into a single cytoplasm?',
      title: 'Cell junctions and extracellular matrix: tight, adherens, desmosomes, and gap',
      description: 'Master apical junctional complexes, mechanical desmosome weld spots, and direct intercellular communication channels.',
      objective: 'Identify key structural proteins in tight junctions, desmosomes, hemidesmosomes, and communicating gap junctions.',
      stages: [
        {
          id: 'occluding-adherens',
          title: 'Zonula occludens and zonula adherens',
          paragraphs: [
            'At the apical epithelial boundary, tight junctions (zonulae occludentes) are composed of transmembrane claudins and occludins that seal the intercellular space, controlling paracellular permeability and preserving apical-basolateral lipid asymmetry.',
            'Immediately basal lies the zonula adherens, where classical calcium-dependent cadherins span the extracellular gap to link internally to continuous circumferential actin microfilament belts via catenins.',
          ],
          takeaway: 'Tight junctions seal paracellular pathways with claudins; adherens junctions couple circumferential actin belts via cadherins.',
          diagram: 'membrane',
        },
        {
          id: 'desmosomes-hemidesmosomes',
          title: 'Desmosomes and hemidesmosomes: tensile stress anchors',
          paragraphs: [
            'Spot desmosomes (maculae adherentes) act as intercellular rivets through specialized cadherins (desmogleins and desmocollins), which attach to cytoplasmic plaques anchored directly into keratin intermediate filament networks.',
            'At the basal interface, hemidesmosomes anchor cellular intermediate filaments to extracellular laminin within the basement membrane via transmembrane integrins (alpha-6-beta-4), preventing mechanical blistering separation.',
          ],
          takeaway: 'Desmosomes couple intermediate filaments between neighboring cells; hemidesmosomes anchor them to the basal lamina.',
          diagram: 'tissue',
        },
        {
          id: 'gap-junctions-ecm',
          title: 'Gap junctions and direct electrochemical coupling',
          paragraphs: [
            'Gap junctions are intercellular hydrophilic conduits constructed from two aligned hemichannels (connexons), each formed by a circular hexamer of transmembrane connexin proteins.',
            'They permit the unhindered bidirectional flow of inorganic ions (Ca²⁺, K⁺), metabolites, and second messengers (<1 kDa) between adjacent cytoplasms, enabling synchronized electrical propagation in cardiac and visceral smooth muscle.',
          ],
          takeaway: 'Hexameric connexin gap junctions permit direct intercellular transfer of ions and small second messengers.',
          diagram: 'valves',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which specialized intercellular junction consists of hexameric connexin channels that mediate direct electrochemical coupling between neighboring cells?',
        options: [
          {
            id: 'connexin-gap-junction',
            label: 'Gap (communicating) junction',
            explanation: 'Correct: gap junctions consist of paired connexons formed by six connexins, enabling direct intercellular ionic transit.',
          },
          {
            id: 'tight-junction-claudin',
            label: 'Tight junction (zonula occludens)',
            explanation: 'Incorrect: tight junctions form an impermeable barrier restricting paracellular diffusion between apical and basolateral poles.',
          },
          {
            id: 'hemidesmosome-integrin',
            label: 'Basal hemidesmosome',
            explanation: 'Incorrect: hemidesmosomes mechanically tether intracellular intermediate filaments to the underlying extracellular basal lamina.',
          },
          {
            id: 'adherens-actin-belt',
            label: 'Zonula adherens',
            explanation: 'Incorrect: adherens junctions couple cell-to-cell adhesion directly to the actin microfilament cytoskeleton.',
          },
        ],
      },
    },
  },
});

export const cellActiveTransportLesson = lessonSchema.parse({
  id: 'cell-active-transport',
  revision: 1,
  questionId: 'cell-active-transport-q1',
  correctOptionId: 'na-k-atpase-stoichiometry',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch3-transport',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-1-the-cell-membrane',
      section: 'Chapter 3 · Active Transport Mechanisms Across Cell Membranes',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como as células gastam até um terço de toda a energia do corpo apenas para manter íons sódio fora e potássio dentro?',
      title: 'Transporte ativo através da membrana: bombas ATPases e cotransportadores',
      description: 'Diferencie transporte ativo primário e secundário e compreenda a eletrogenecidade da bomba Na⁺/K⁺-ATPase.',
      objective: 'Distinguir transporte ativo primário de secundário (simporte e antiporte) e calcular a estequiometria da Na⁺/K⁺-ATPase.',
      stages: [
        {
          id: 'primary-active-pump',
          title: 'Transporte ativo primário: a bomba Na⁺/K⁺-ATPase',
          paragraphs: [
            'O transporte ativo move solutos contra seus gradientes eletroquímicos com consumo de energia metabólica. No transporte ativo primário, a hidrólise de ATP é diretamente acoplada ao transporte de íons pela própria proteína carreadora.',
            'A Na⁺/K⁺-ATPase é uma bomba eletrogênica de classe P ubíqua que exporta 3 íons Na⁺ para fora da célula e importa 2 íons K⁺ para dentro para cada molécula de ATP hidrolisada, gerando o gradiente transmembrana essencial para o potencial de repouso e controle de volume celular.',
          ],
          takeaway: 'A bomba Na⁺/K⁺-ATPase consome 1 ATP para bombear 3 Na⁺ para fora e 2 K⁺ para dentro da célula.',
          diagram: 'pump',
        },
        {
          id: 'secondary-active-symport',
          title: 'Transporte ativo secundário: simporte Na⁺-glicose',
          paragraphs: [
            'No transporte ativo secundário, o transporte de uma substância contra seu gradiente é impulsionado pelo fluxo a favor do gradiente eletroquímico de outro íon (geralmente Na⁺), previamente estabelecido pelo transporte primário.',
            'No simporte (cotransporte na mesma direção), o transportador SGLT1 da membrana apical do enterócito utiliza o influxo termodinamicamente favorável de 2 íons Na⁺ para transportar 1 molécula de glicose para dentro da célula contra seu gradiente.',
          ],
          takeaway: 'O simporte aproveita o gradiente de sódio para transportar solutos como glicose na mesma direção.',
          diagram: 'membrane',
        },
        {
          id: 'secondary-active-antiport',
          title: 'Antiporte secundário e bombas de cálcio',
          paragraphs: [
            'No antiporte (contratransporte em direções opostas), o influxo de Na⁺ impulsiona a saída de outro soluto, como no trocador Na⁺/Ca²⁺ (NCX) cardíaco (que exporta 1 Ca²⁺ para cada 3 Na⁺ que entram) e no trocador Na⁺/H⁺ (NHE1) que regula o pH citosólico.',
            'As bombas SERCA do retículo sarcoplasmático e PMCA da membrana plasmática são ATPases primárias de cálcio que mantêm o cálcio citosólico em níveis nanomolares em repouso.',
          ],
          takeaway: 'O antiporte troca solutos em direções opostas impulsionado pelo sódio, e bombas de Ca²⁺ mantêm o cálcio basal baixo.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: a cada ciclo de hidrólise de uma molécula de ATP, a bomba eletrogênica primária Na⁺/K⁺-ATPase transporta ______ íons sódio para o meio extracelular e ______ íons potássio para o meio intracelular.',
        blank: 'A bomba move ______ para fora e ______ para dentro.',
        options: [
          {
            id: 'na-k-atpase-stoichiometry',
            label: '3 Na⁺ para fora e 2 K⁺ para dentro',
            explanation: 'Correto: a estequiometria fixa da bomba Na⁺/K⁺-ATPase é de 3 Na⁺ expulsos e 2 K⁺ captados por ATP consumido.',
          },
          {
            id: 'na-k-2-3-inverted',
            label: '2 Na⁺ para fora e 3 K⁺ para dentro',
            explanation: 'Incorreto: a estequiometria correta é de três sódios para dois potássios, gerando carga líquida positiva externa.',
          },
          {
            id: 'na-k-equal-stoichiometry',
            label: '1 Na⁺ para fora e 1 K⁺ para dentro eletroneutro',
            explanation: 'Incorreto: a bomba é estritamente eletrogênica e transporta íons em proporção assimétrica 3:2.',
          },
          {
            id: 'na-k-passive-channel',
            label: 'Difusão passiva livre de 4 íons sem consumo de ATP',
            explanation: 'Incorreto: o transporte é ativo primário contra gradientes eletroquímicos com consumo obrigatório de ATP.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How do living cells expend nearly one-third of their entire daily energy expenditure solely pumping sodium out and potassium in?',
      title: 'Active membrane transport: ATPase pumps and cotransporters',
      description: 'Contrast primary and secondary active transport mechanisms and master the electrogenic stoichiometry of the Na⁺/K⁺-ATPase.',
      objective: 'Distinguish primary from secondary active transport (symport versus antiport) and explain the Na⁺/K⁺-ATPase mechanism.',
      stages: [
        {
          id: 'primary-active-pump',
          title: 'Primary active transport: the electrogenic Na⁺/K⁺-ATPase',
          paragraphs: [
            'Active transport drives solutes across biological membranes against their chemical or electrochemical gradients via thermodynamic coupling to metabolic energy.',
            'The ubiquitous P-type Na⁺/K⁺-ATPase couples the hydrolysis of one ATP molecule to the outward translocation of 3 Na⁺ ions and the inward translocation of 2 K⁺ ions, generating the transmembrane chemical gradients required for resting membrane potential and cell volume control.',
          ],
          takeaway: 'The Na⁺/K⁺-ATPase expends 1 ATP to export 3 Na⁺ and import 2 K⁺ ions, maintaining cellular electrogenic gradients.',
          diagram: 'pump',
        },
        {
          id: 'secondary-active-symport',
          title: 'Secondary active transport: sodium-glucose symport',
          paragraphs: [
            'Secondary active transport couples the uphill movement of a solute against its gradient to the dissipative downhill flux of another driving ion (typically Na⁺), previously banked by primary ATPase pumps.',
            'In symport (cotransport in the identical direction), apical SGLT1 transporters in enterocytes utilize the inward electrochemical sodium gradient to haul glucose uphill into the epithelial cytoplasm.',
          ],
          takeaway: 'Symporters harness the steep inward sodium gradient to pull solutes like glucose into the cell.',
          diagram: 'membrane',
        },
        {
          id: 'secondary-active-antiport',
          title: 'Secondary active antiport and primary calcium pumps',
          paragraphs: [
            'In antiport (countertransport in opposite directions), inward sodium flux drives the extrusion of another substrate, exemplified by the cardiac Na⁺/Ca²⁺ exchanger (NCX, 3 Na⁺ in for 1 Ca²⁺ out) and the Na⁺/H⁺ exchanger (NHE1) regulating cytoplasmic pH.',
            'Intracellular calcium is maintained in the low nanomolar resting range through primary active P-type pumps, including sarcoplasmic/endoplasmic reticulum SERCA pumps and plasma membrane PMCA ATPases.',
          ],
          takeaway: 'Antiporters exchange solutes in opposite directions; primary SERCA/PMCA pumps keep resting cytosolic calcium nanomolar.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: for each molecule of ATP hydrolyzed, the primary electrogenic Na⁺/K⁺-ATPase exports ______ sodium ions out of the cell and imports ______ potassium ions into the cell.',
        blank: 'The pump moves ______ out and ______ in.',
        options: [
          {
            id: 'na-k-atpase-stoichiometry',
            label: '3 Na⁺ out and 2 K⁺ in',
            explanation: 'Correct: the fixed stoichiometry of the Na⁺/K⁺ pump is 3 Na⁺ expelled and 2 K⁺ imported per ATP hydrolyzed.',
          },
          {
            id: 'na-k-2-3-inverted',
            label: '2 Na⁺ out and 3 K⁺ in',
            explanation: 'Incorrect: the correct stoichiometry is three sodium ions exported for every two potassium ions imported.',
          },
          {
            id: 'na-k-equal-stoichiometry',
            label: '1 Na⁺ out and 1 K⁺ in electroneutrally',
            explanation: 'Incorrect: the pump is strictly electrogenic and asymmetrical, transporting ions in an unequal 3:2 ratio.',
          },
          {
            id: 'na-k-passive-channel',
            label: 'Passive free diffusion of 4 ions without consuming ATP',
            explanation: 'Incorrect: this pump performs uphill primary active transport powered by obligate ATP hydrolysis.',
          },
        ],
      },
    },
  },
});

export const cellMeiosisLesson = lessonSchema.parse({
  id: 'cell-meiosis',
  revision: 1,
  questionId: 'cell-meiosis-q1',
  correctOptionId: 'prophase1-pachytene-crossingover',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch27-meiosis',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-1-anatomy-and-physiology-of-the-male-reproductive-system',
      section: 'Chapter 27 · Meiosis and Gametogenesis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como irmãos biológicos dos mesmos pais podem ter combinações genéticas tão distintas e únicas entre si?',
      title: 'Meiose I e II, recombinação homóloga (crossing-over) e gametogênese',
      description: 'Entenda os eventos da divisão reducional e equacional e o papel do crossing-over na geração de variabilidade genética.',
      objective: 'Diferenciar a meiose I reducional da meiose II equacional e explicar as etapas da prófase I meiótica.',
      stages: [
        {
          id: 'meiosis1-prophase',
          title: 'Prófase I: pareamento de homólogos e crossing-over',
          paragraphs: [
            'A meiose é a divisão celular especializada que reduz a ploidia de diploide (2n) para haploide (n) para formar gametas férteis. A prófase I é a etapa mais longa e divide-se em: leptóteno, zigóteno (sinapse cromossômica via complexo sinaptonêmico), paquíteno, diplóteno e diacinese.',
            'Durante o paquíteno ocorre a recombinação homóloga (crossing-over): quebras na fita dupla de DNA e trocas recíprocas de fragmentos de cromátides não irmãs nos quiasmas, embaralhando alelos paternos e maternos.',
          ],
          takeaway: 'O crossing-over ocorre no paquíteno da prófase I entre cromátides não irmãs, gerando diversidade genética.',
          diagram: 'dna',
        },
        {
          id: 'reductive-equational',
          title: 'Meiose I reducional versus meiose II equacional',
          paragraphs: [
            'Na anáfase I, os pares de cromossomos homólogos se separam aleatoriamente para polos opostos (segregação independente de Mendel), reduzindo o número de cromossomos de 46 para 23 cromossomos duplicados.',
            'Após uma intercinese sem replicação de DNA, ocorre a meiose II: semelhante a uma mitose comum, as cromátides-irmãs são finalmente separadas na anáfase II, gerando quatro células filhas haploides geneticamente únicas.',
          ],
          takeaway: 'A meiose I separa cromossomos homólogos (reducional) e a meiose II separa cromátides-irmãs (equacional).',
          diagram: 'phases',
        },
        {
          id: 'gametogenesis-differences',
          title: 'Gametogênese: espermatogênese versus ovogênese',
          paragraphs: [
            'A espermatogênese é contínua a partir da puberdade, gerando quatro espermatozoides viáveis a partir de cada espermatócito primário a cada ~64 dias.',
            'A ovogênese inicia-se no período fetal, onde os oócitos primários ficam estagnados no diplóteno da prófase I até a ovulação na maturidade sexual, gerando apenas um óvulo viável e corpúsculos polares degenerativos por citocinese assimétrica.',
          ],
          takeaway: 'A espermatogênese produz quatro gametas contínuos; a ovogênese produz um óvulo com pausas meióticas prolongadas.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em qual subfase específica da prófase I meiótica ocorre a recombinação homóloga recíproca (crossing-over) entre cromátides não irmãs?',
        options: [
          {
            id: 'prophase1-pachytene-crossingover',
            label: 'Paquíteno',
            explanation: 'Correto: no paquíteno o complexo sinaptonêmico está completamente formado e ocorrem as trocas de segmentos cromossômicos.',
          },
          {
            id: 'prophase1-leptotene-start',
            label: 'Leptóteno',
            explanation: 'Incorreto: no leptóteno a cromatina inicia sua condensação em filamentos delgados, antes do pareamento homólogo.',
          },
          {
            id: 'prophase1-zygotene-synapsis',
            label: 'Zigóteno',
            explanation: 'Incorreto: no zigóteno ocorre o início da sinapse cromossômica, mas o crossing-over propriamente dito dá-se no paquíteno.',
          },
          {
            id: 'prophase1-diplotene-chiasma',
            label: 'Diplóteno',
            explanation: 'Incorreto: no diplóteno o complexo sinaptonêmico se desintegra e os quiasmas tornam-se visíveis após o crossing-over.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How can biological siblings from the same biological parents inherit entirely unique combinations of parental traits?',
      title: 'Meiosis I and II, homologous recombination, and gametogenesis',
      description: 'Trace reductional and equational divisions and understand how crossing-over generates boundless genetic diversity.',
      objective: 'Distinguish reductional meiosis I from equational meiosis II and sequence the stages of meiotic prophase I.',
      stages: [
        {
          id: 'meiosis1-prophase',
          title: 'Prophase I: homologous chromosome pairing and crossing-over',
          paragraphs: [
            'Meiosis is the specialized cell division program that halves chromosomal ploidy from diploid (2n) to haploid (n) to produce functional gametes. Prophase I comprises five distinct substages: leptotene, zygotene (synaptonemal complex assembly), pachytene, diplotene, and diakinesis.',
            'During pachytene, reciprocal homologous recombination (crossing-over) occurs: programmed double-strand DNA breaks enable molecular exchange between non-sister chromatids at chiasmata, shuffling paternal and maternal alleles.',
          ],
          takeaway: 'Crossing-over takes place during pachytene of prophase I between non-sister chromatids, driving genetic variation.',
          diagram: 'dna',
        },
        {
          id: 'reductive-equational',
          title: 'Reductional meiosis I versus equational meiosis II',
          paragraphs: [
            'In anaphase I, homologous chromosome pairs independently segregate to opposite spindle poles (Mendelian independent assortment), halving chromosomal content from 46 to 23 duplicated chromosomes.',
            'Following interkinesis without intervening DNA replication, equational meiosis II proceeds: sister chromatids are partitioned during anaphase II, culminating in four genetically non-identical haploid gametes.',
          ],
          takeaway: 'Meiosis I segregates homologous chromosomes (reductional), while meiosis II segregates sister chromatids (equational).',
          diagram: 'phases',
        },
        {
          id: 'gametogenesis-differences',
          title: 'Gametogenesis contrasts: spermatogenesis versus oogenesis',
          paragraphs: [
            'Spermatogenesis operates continuously post-puberty, generating four functional motile spermatozoa from each primary spermatocyte over a ~64-day cycle.',
            'Oogenesis initiates during fetal development, where primary oocytes arrest in prophase I diplotene (dictyotene) until ovulation decades later, ultimately producing a single cytoplasm-rich ovum and diminutive polar bodies via asymmetric cytokinesis.',
          ],
          takeaway: 'Spermatogenesis yields four continuous gametes; oogenesis yields a single ovum following prolonged developmental arrests.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'During which specific substage of meiotic prophase I does reciprocal homologous recombination (crossing-over) take place between non-sister chromatids?',
        options: [
          {
            id: 'prophase1-pachytene-crossingover',
            label: 'Pachytene',
            explanation: 'Correct: in pachytene, full synapsis is completed and reciprocal DNA strand exchange occurs between homologous non-sister chromatids.',
          },
          {
            id: 'prophase1-leptotene-start',
            label: 'Leptotene',
            explanation: 'Incorrect: leptotene marks initial condensation of chromatin into visible threads prior to homologous alignment.',
          },
          {
            id: 'prophase1-zygotene-synapsis',
            label: 'Zygotene',
            explanation: 'Incorrect: zygotene initiates synaptonemal complex assembly, but physical crossing-over completes in pachytene.',
          },
          {
            id: 'prophase1-diplotene-chiasma',
            label: 'Diplotene',
            explanation: 'Incorrect: in diplotene, the synaptonemal complex disassembles, revealing chiasmata formed during preceding pachytene.',
          },
        ],
      },
    },
  },
});

export const cellAutophagyProteasomeLesson = lessonSchema.parse({
  id: 'cell-autophagy-proteasome',
  revision: 1,
  questionId: 'cell-autophagy-proteasome-q1',
  correctOptionId: 'ubiquitin-proteasome-26s',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cell-biology',
  sources: [
    {
      id: 'openstax-ap2e-ch3-proteasome',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-2-the-cytoplasm-and-cellular-organelles',
      section: 'Chapter 3 · Cellular Quality Control, Proteostasis, and Autophagy',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Biologia celular',
      hook: 'Como as células eliminam proteínas defeituosas ou tóxicas antes que elas se agreguem e causem doenças neurodegenerativas?',
      title: 'Controle de qualidade celular: sistema ubiquitina-proteassoma, autofagia e senescência',
      description: 'Explore a marcação por poliubiquitina, a degradação proteassomal no cilindro 26S e a macroautofagia lisossômica.',
      objective: 'Distinguir a degradação via proteassoma 26S da macroautofagia de organelas e explicar a senescência celular.',
      stages: [
        {
          id: 'ubiquitin-cascade',
          title: 'A cascata enzimática de poliubiquitinação',
          paragraphs: [
            'Proteínas citoplasmáticas e nucleares mal dobradas ou de vida curta são reconhecidas por chaperonas e direcionadas para degradação pela marcação covalente com o peptídeo conservado ubiquitina.',
            'A marcação ocorre através de uma cascata de três enzimas: E1 (enzima ativadora de ubiquitina), E2 (enzima conjugadora) e E3 (ubiquitina ligase, responsável pela especificidade do substrato). A formação de cadeias de poliubiquitina ligadas à lisina-48 serve como sinal de destruição.',
          ],
          takeaway: 'A cascata E1-E2-E3 marca proteínas para degradação adicionando cadeias de poliubiquitina na lisina-48.',
          diagram: 'membrane',
        },
        {
          id: 'proteasome-26s',
          title: 'O proteassoma 26S: o triturador molecular',
          paragraphs: [
            'O proteassoma 26S é um complexo enzimático cilíndrico composto por uma partícula central catalítica 20S ladeada por duas partículas regulatórias 19S.',
            'A partícula 19S reconhece a cauda de poliubiquitina, remove as ubiquitinas para reciclagem com enzimas desubiquitinases e utiliza ATP para desdobrar a proteína, empurrando a cadeia linear para a câmara 20S, onde proteases a clivam em oligopeptídeos curtos.',
          ],
          takeaway: 'O proteassoma 26S desdobra e degrada proteínas poliubiquitinadas em peptídeos com gasto de ATP.',
          diagram: 'mitochondria',
        },
        {
          id: 'autophagy-senescence',
          title: 'Autofagia e senescência celular',
          paragraphs: [
            'Enquanto o proteassoma degrada proteínas individuais, agregados proteicos volumosos e mitocôndrias danificadas (mitofagia) são recolhidos por autofagossomos de membrana dupla que se fundem a lisossomos.',
            'Estresse oxidativo crônico ou encurtamento telomérico crítico induzem senescência celular irreversível guiada por p16 e p21, na qual a célula cessa a divisão e adquire o fenótipo secretor associado à senescência (SASP), que secreta citocinas inflamatórias nos tecidos.',
          ],
          takeaway: 'A autofagia recicla agregados e organelas inteiras via lisossomos; a senescência bloqueia divisão e secreta citocinas SASP.',
          diagram: 'neoplasia',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual sistema celular é o principal responsável por reconhecer e degradar proteínas solúveis anômalas marcadas por cadeias de poliubiquitina com gasto de ATP?',
        options: [
          {
            id: 'ubiquitin-proteasome-26s',
            label: 'Sistema ubiquitina-proteassoma 26S',
            explanation: 'Correto: o proteassoma 26S reconhece cadeias de ubiquitina e degrada as proteínas alvo no interior da partícula 20S.',
          },
          {
            id: 'peroxisome-catalase',
            label: 'Peroxissomos via oxidação por catalase',
            explanation: 'Incorreto: peroxissomos metabolizam peróxido de hidrogênio e ácidos graxos de cadeia muito longa, sem degradar proteínas ubiquitinadas.',
          },
          {
            id: 'golgi-secretory-granule',
            label: 'Grânulos secretores exocíticos do complexo de Golgi',
            explanation: 'Incorreto: vesículas de Golgi direcionam proteínas para a membrana ou secreção extracelular.',
          },
          {
            id: 'ribosomal-peptidyl-transferase',
            label: 'Centro peptidil-transferase do ribossomo',
            explanation: 'Incorreto: o centro peptidil-transferase sintetiza proteínas a partir de RNA mensageiro, não as degradando.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Cell biology',
      hook: 'How do cells detect and destroy misfolded or toxic proteins before they aggregate into lethal neurodegenerative deposits?',
      title: 'Cellular quality control: ubiquitin-proteasome system, autophagy, and senescence',
      description: 'Explore polyubiquitin targeting, 26S proteasomal degradation, and macroautophagic organelle clearance.',
      objective: 'Distinguish proteasomal degradation from macroautophagy and describe cellular senescence and the SASP phenotype.',
      stages: [
        {
          id: 'ubiquitin-cascade',
          title: 'The three-tier enzymatic polyubiquitination cascade',
          paragraphs: [
            'Short-lived, misfolded, or regulatory proteins are identified by molecular chaperones and covalently tagged for destruction with the 76-amino-acid peptide ubiquitin.',
            'Tagging involves a sequential enzymatic triad: E1 (ubiquitin-activating enzyme), E2 (ubiquitin-conjugating enzyme), and E3 (ubiquitin ligase, conferring substrate specificity). Assembling a polyubiquitin chain linked through lysine-48 (K48) serves as the canonical destruction code.',
          ],
          takeaway: 'The E1-E2-E3 cascade tags targeted substrates with K48-linked polyubiquitin chains for rapid proteolysis.',
          diagram: 'membrane',
        },
        {
          id: 'proteasome-26s',
          title: 'The 26S proteasome: ATP-dependent molecular shredder',
          paragraphs: [
            'The 26S proteasome is a cylindrical multisubunit complex composed of a 20S catalytic core capped by two 19S regulatory particles.',
            'The 19S cap binds polyubiquitin, deubiquitinating enzymes salvage free ubiquitin, and AAA-ATPases unfold the targeted protein, feeding the unfolded polypeptide into the enclosed 20S chamber where threonine proteases cleave it into short oligopeptides.',
          ],
          takeaway: 'The 26S proteasome recognizes polyubiquitin, unfolds substrates via ATP, and digests them into oligopeptides.',
          diagram: 'mitochondria',
        },
        {
          id: 'autophagy-senescence',
          title: 'Autophagy and cellular senescence',
          paragraphs: [
            'While proteasomes target individual proteins, large protein aggregates and damaged organelles (mitophagy) are sequestered inside double-membrane autophagosomes that fuse with lysosomes.',
            'Chronic genotoxic stress or critical telomere shortening drives permanent cell cycle arrest termed cellular senescence, orchestrated by p16INK4a and p21, accompanied by a senescence-associated secretory phenotype (SASP) that releases inflammatory cytokines.',
          ],
          takeaway: 'Autophagy clears bulk aggregates and organelles via lysosomes; senescence arrests growth and releases SASP cytokines.',
          diagram: 'neoplasia',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which cellular quality control system is specifically responsible for recognizing and degrading soluble proteins marked with polyubiquitin chains in an ATP-dependent manner?',
        options: [
          {
            id: 'ubiquitin-proteasome-26s',
            label: '26S ubiquitin-proteasome system',
            explanation: 'Correct: the 26S proteasome captures polyubiquitinated proteins, unfolds them, and cleaves them within its 20S core.',
          },
          {
            id: 'peroxisome-catalase',
            label: 'Peroxisomal catalase oxidation',
            explanation: 'Incorrect: peroxisomes specialize in beta-oxidation of very-long-chain fatty acids and hydrogen peroxide detoxification.',
          },
          {
            id: 'golgi-secretory-granule',
            label: 'Golgi exocytic secretory granule pathway',
            explanation: 'Incorrect: Golgi granules transport newly synthesized cargo for extracellular secretion rather than cytosolic degradation.',
          },
          {
            id: 'ribosomal-peptidyl-transferase',
            label: 'Ribosomal peptidyl transferase center',
            explanation: 'Incorrect: peptidyl transferase catalyzes peptide bond formation during translation, not proteolysis.',
          },
        ],
      },
    },
  },
});
