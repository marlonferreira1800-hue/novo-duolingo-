import { lessonSchema } from '../src/contracts/learning';

export const embryologyFertilizationLesson = lessonSchema.parse({
  id: 'embryology-fertilization',
  revision: 1,
  questionId: 'embryology-fertilization-blastocyst',
  correctOptionId: 'ampulla-cleavage-blastocyst',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch28-fertilization',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-1-fertilization',
      section: 'Chapter 28 · Fertilization and Early Embryonic Cleavage',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Embriologia',
      hook: 'Como uma única célula fecundada na tuba uterina se transforma em um blastocisto pronto para invadir o endométrio em apenas 6 dias?',
      title: 'Fecundação, clivagem e implantação do blastocisto',
      description: 'Acompanhe os eventos cruciais da primeira e segunda semanas: fecundação na ampola, clivagem, formação da mórula e implantação do blastocisto.',
      objective: 'Descrever a sequência temporal e morfológica da fecundação, clivagem, blastocisto e implantação endometrial.',
      stages: [
        {
          id: 'fertilization-in-ampulla',
          title: 'Fecundação na ampola tubária',
          paragraphs: [
            'A fecundação ocorre habitualmente na ampola da tuba uterina. O espermatozoide sofre capacitação e reação acrossômica para penetrar a corona radiata e a zona pelúcida.',
            'A fusão das membranas desencadeia a reação cortical (bloqueio à poliespermia), a conclusão da meiose II do oócito secundário e a fusão dos pronúcleos, restabelecendo a diploidia (46 cromossomos) e formando o zigoto.',
          ],
          takeaway: 'A fecundação ocorre na ampola tubária e restaura a diploidia, formando o zigoto unicelular.',
          diagram: 'embryo',
        },
        {
          id: 'cleavage-and-morula',
          title: 'Clivagem e formação da mórula',
          paragraphs: [
            'O zigoto sofre sucessivas divisões mitóticas chamadas clivagens enquanto viaja pela tuba uterina em direção à cavidade uterina.',
            'Essas divisões aumentam o número de células (blastômeros) sem aumentar o volume total da estrutura. Ao redor do 3º ao 4º dia, a estrutura compactada com 16 a 32 células é denominada mórula.',
          ],
          takeaway: 'A clivagem gera múltiplos blastômeros menores mantidos dentro da zona pelúcida, culminando na mórula.',
          diagram: 'embryo',
        },
        {
          id: 'blastocyst-and-implantation',
          title: 'Blastocisto e início da implantação',
          paragraphs: [
            'A entrada de líquido na mórula cria a cavidade blastocística (blastocele), formando o blastocisto. As células diferenciam-se em embrioblasto (massa celular interna, que originará o embrião) e trofoblasto (camada externa, precursora da placenta).',
            'Por volta do 6º dia, após a eclosão da zona pelúcida, o trofoblasto adere ao endométrio secretor e divide-se em citotrofoblasto e sinciciotrofoblasto invasivo, que secreta gonadotrofina coriônica humana (hCG).',
          ],
          takeaway: 'O blastocisto é formado pelo embrioblasto e trofoblasto, iniciando a nidação endometrial ao 6º dia com secreção de hCG.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual sequência cronológica e morfológica sintetiza os eventos da primeira semana do desenvolvimento embrionário humano?',
        options: [
          {
            id: 'ampulla-cleavage-blastocyst',
            label: 'Fecundação na ampola tubária, clivagens mitóticas em blastômeros, formação da mórula compactada e diferenciação do blastocisto com embrioblasto e trofoblasto',
            explanation: 'Correto: o trajeto da 1ª semana segue da fecundação na ampola tubária, pelas clivagens sucessivas até mórula, e formação do blastocisto que inicia a nidação ao final da primeira semana.',
          },
          {
            id: 'gastrulation-endometrium',
            label: 'Gastrulação imediata no lúmen tubário com surgimento do disco trilaminar antes do contato uterino',
            explanation: 'Incorreto: a gastrulação ocorre apenas na terceira semana de desenvolvimento embrionário, bem após a implantação.',
          },
          {
            id: 'neurulation-bilaminar',
            label: 'Fechamento do tubo neural no fundo uterino seguido pela formação do saco vitelino primitivo',
            explanation: 'Incorreto: a neurulação ocorre na quarta semana e depende da gastrulação prévia.',
          },
          {
            id: 'syncytiotrophoblast-ovary',
            label: 'Invasão ovariana primária pelo citotrofoblasto gerando o córion antes da fertilização',
            explanation: 'Incorreto: o trofoblasto invade o endométrio uterino na implantação, não o ovário.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'How does a single cell conceived in the fallopian tube turn into an invasive blastocyst ready to implant within 6 days?',
      title: 'Fertilization, cleavage, and blastocyst implantation',
      description: 'Trace the crucial milestones of weeks 1 and 2: fertilization in the ampulla, cleavage divisions, morula compaction, and blastocyst implantation.',
      objective: 'Describe the chronological and morphological sequence of fertilization, cleavage, blastocyst differentiation, and endometrial implantation.',
      stages: [
        {
          id: 'fertilization-in-ampulla',
          title: 'Fertilization in the tubal ampulla',
          paragraphs: [
            'Fertilization typically occurs in the ampulla of the uterine tube. Capacitated sperm undergo the acrosome reaction to penetrate the corona radiata and zona pellucida.',
            'Membrane fusion triggers the cortical reaction (polyspermy block), completion of oocyte meiosis II, and pronuclear syngamy, restoring diploidy (46 chromosomes) to yield the zygote.',
          ],
          takeaway: 'Fertilization occurs in the tubal ampulla and restores diploid genetics, forming the single-cell zygote.',
          diagram: 'embryo',
        },
        {
          id: 'cleavage-and-morula',
          title: 'Cleavage and morula compaction',
          paragraphs: [
            'The zygote undergoes rapid mitotic cleavages as it is swept along the fallopian tube toward the uterine cavity.',
            'These divisions partition the cytoplasm into progressively smaller blastomeres without expanding total volume. By day 3 to 4, a compacted sphere of 16 to 32 cells forms the morula.',
          ],
          takeaway: 'Cleavage produces smaller blastomeres confined inside the zona pellucida, culminating in the morula.',
          diagram: 'embryo',
        },
        {
          id: 'blastocyst-and-implantation',
          title: 'Blastocyst differentiation and implantation',
          paragraphs: [
            'Fluid accumulation within the morula creates the blastocyst cavity (blastocoele). Cells segregate into an inner cell mass (embryoblast, source of the embryo) and outer layer (trophoblast, source of the placenta).',
            'Around day 6, following zona hatching, the trophoblast adheres to the receptive endometrium and differentiates into inner cytotrophoblast and invasive outer syncytiotrophoblast, which secretes human chorionic gonadotropin (hCG).',
          ],
          takeaway: 'The blastocyst segregates into embryoblast and trophoblast, initiating endometrial implantation around day 6 with hCG secretion.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which chronological and morphological timeline accurately summarizes week 1 of human embryonic development?',
        options: [
          {
            id: 'ampulla-cleavage-blastocyst',
            label: 'Fertilization in the tubal ampulla, mitotic cleavages into blastomeres, morula compaction, and blastocyst differentiation into embryoblast and trophoblast',
            explanation: 'Correct: week 1 begins with ampullary fertilization, advances through mitotic cleavage to morula compaction, and ends as the blastocyst hatches and begins implantation.',
          },
          {
            id: 'gastrulation-endometrium',
            label: 'Immediate tubal gastrulation creating the trilaminar germ disc prior to endometrial contact',
            explanation: 'Incorrect: gastrulation does not take place until week 3 of development, well after implantation.',
          },
          {
            id: 'neurulation-bilaminar',
            label: 'Neural tube closure in the uterine fundus followed by primitive yolk sac emergence',
            explanation: 'Incorrect: neural tube formation belongs to week 4, long after cleavage and blastocyst stages.',
          },
          {
            id: 'syncytiotrophoblast-ovary',
            label: 'Primary ovarian parenchymal invasion by cytotrophoblast generating chorionic villi before fertilization',
            explanation: 'Incorrect: trophoblast invasion targets the uterine endometrium during post-fertilization implantation.',
          },
        ],
      },
    },
  },
});

export const embryologyNeurulationLesson = lessonSchema.parse({
  id: 'embryology-neurulation',
  revision: 1,
  questionId: 'embryology-neurulation-neural-tube',
  correctOptionId: 'neural-tube-folate-crest',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch28-neurulation',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-2-embryonic-development',
      section: 'Chapter 28 · Neurulation and Neural Crest Specialization',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Embriologia',
      hook: 'Como uma simples placa na superfície dorsal do embrião se fecha para formar o encéfalo e a medula espinal?',
      title: 'Neurulação e derivados da crista neural',
      description: 'Entenda a indução pela notocorda, o fechamento dos neuróporos, a prevenção de defeitos do tubo neural por ácido fólico e a extraordinária migração da crista neural.',
      objective: 'Descrever o processo de neurulação primária, o cronograma de fechamento dos neuróporos e os múltiplos derivados teciduais da crista neural.',
      stages: [
        {
          id: 'neural-plate-induction',
          title: 'A indução da placa e do sulco neural',
          paragraphs: [
            'Na terceira semana, a notocorda emite sinais moleculares (como Sonic Hedgehog e antagonistas de BMP) que induzem a ectoderme sobrejacente a se espessar, formando a placa neural.',
            'As bordas laterais da placa elevam-se formando as pregas neurais, que delimitam uma depressão central longitudinal denominada sulco neural.',
          ],
          takeaway: 'A notocorda induz a ectoderme dorsal a se transformar em neuroectoderme e placa neural.',
          diagram: 'embryo',
        },
        {
          id: 'tube-closure-neuropores',
          title: 'Fechamento do tubo e papel do ácido fólico',
          paragraphs: [
            'As pregas neurais fundem-se na linha média iniciando na região cervical e progredindo bidirecionalmente, convertendo a placa em tubo neural.',
            'As extremidades abertas são os neuróporos: o neuróporo cranial (anterior) fecha por volta do dia 25, e o neuróporo caudal (posterior) fecha por volta do dia 28. A suplementação periconcepcional de ácido fólico (vitamina B9) previne em até 70% os defeitos de fechamento (anencefalia e espinha bífida).',
          ],
          takeaway: 'O neuróporo cranial fecha ao dia 25 e o caudal ao dia 28; o ácido fólico é essencial para esse fechamento.',
          diagram: 'embryo',
        },
        {
          id: 'neural-crest-migration',
          title: 'Crista neural: a quarta camada germinativa',
          paragraphs: [
            'Conforme o tubo neural se fecha, células das bordas das pregas neurais sofrem transição epitélio-mesênquima e desprendem-se, constituindo a crista neural.',
            'Essas células multipotentes migram extensamente por todo o corpo, originando os gânglios sensitivos e autonômicos, células de Schwann, melanócitos da pele, células cromafins da medula adrenal e o ectomesênquima craniofacial.',
          ],
          takeaway: 'A crista neural migra por todo o embrião, formando o sistema nervoso periférico, melanócitos e medula adrenal.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual evento do fechamento do tubo neural e da diferenciação da crista neural possui fundamental relevância preventiva e funcional na clínica médica?',
        options: [
          {
            id: 'neural-tube-folate-crest',
            label: 'O fechamento dos neuróporos cranial e caudal depende criticamente do ácido fólico, enquanto a crista neural origina o sistema nervoso periférico e melanócitos',
            explanation: 'Correto: o ácido fólico periconcepcional previne anencefalia e mielomeningocele no fechamento dos neuróporos, e a crista neural dá origem ao SNP, melanócitos e medula adrenal.',
          },
          {
            id: 'cranial-pore-folate-independent',
            label: 'O neuróporo cranial fecha no final do segundo trimestre sem relação biológica com o metabolismo de folatos',
            explanation: 'Incorreto: o neuróporo anterior fecha no 25º dia embrionário e sua integridade depende estritamente de folatos.',
          },
          {
            id: 'crest-forms-spinal-cord',
            label: 'As células da crista neural formam o parênquima motor central e a substância cinzenta da medula espinal',
            explanation: 'Incorreto: o tubo neural dá origem ao sistema nervoso central (encéfalo e medula espinal); a crista neural origina o sistema nervoso periférico e derivados especializados.',
          },
          {
            id: 'tube-forms-skin-epithelium',
            label: 'O tubo neural permanece como fenda aberta para formar as glândulas sudoríparas da epiderme queratinizada',
            explanation: 'Incorreto: o tubo neural se fecha completamente e se aprofunda abaixo da ectoderme de superfície (que formará a epiderme).',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'How does a flat cellular ribbon on the embryo’s back fold into the brain, spinal cord, and all peripheral nerves?',
      title: 'Neurulation and neural crest derivatives',
      description: 'Understand notochordal induction, neuropore closure timing, folic acid prevention of neural tube defects, and neural crest migration.',
      objective: 'Describe primary neurulation, neuropore closure milestones, and the diverse anatomical derivatives of migrating neural crest cells.',
      stages: [
        {
          id: 'neural-plate-induction',
          title: 'Induction of the neural plate and groove',
          paragraphs: [
            'During week 3, the axial notochord sends inductive molecular cues (including Sonic Hedgehog and BMP antagonists) instructing overlying ectoderm to thicken into neuroectoderm, creating the neural plate.',
            'The lateral edges of the neural plate elevate into neural folds that flank a central longitudinal depression called the neural groove.',
          ],
          takeaway: 'The notochord induces dorsal ectoderm to specialize into neuroectoderm and the neural plate.',
          diagram: 'embryo',
        },
        {
          id: 'tube-closure-neuropores',
          title: 'Neural tube closure and folic acid',
          paragraphs: [
            'The neural folds converge and fuse along the midline, starting in the prospective cervical region and progressing cranially and caudally to convert the groove into a closed neural tube.',
            'The open ends are the neuropores: the cranial neuropore seals around day 25, while the caudal neuropore closes around day 28. Periconceptional folic acid supplementation prevents up to 70% of open neural tube defects (anencephaly and spina bifida).',
          ],
          takeaway: 'The cranial neuropore seals on day 25 and the caudal on day 28; maternal folic acid is required for closure.',
          diagram: 'embryo',
        },
        {
          id: 'neural-crest-migration',
          title: 'Neural crest: the fourth germ layer',
          paragraphs: [
            'As the neural folds fuse, cells at their crest undergo an epithelial-to-mesenchymal transition and detach, generating the neural crest population.',
            'These highly migratory multipotent cells disperse throughout the embryo to establish sensory and autonomic ganglia, Schwann cells, epidermal melanocytes, adrenal chromaffin cells, and craniofacial ectomesenchyme.',
          ],
          takeaway: 'Neural crest cells migrate widely, generating the peripheral nervous system, melanocytes, and adrenal medulla.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which clinical and embryological concept accurately links neural tube closure and neural crest diversification?',
        options: [
          {
            id: 'neural-tube-folate-crest',
            label: 'Cranial and caudal neuropore closure relies critically on maternal folic acid, while the neural crest gives rise to the peripheral nervous system and melanocytes',
            explanation: 'Correct: periconceptional folate prevents anencephaly and spina bifida during neuropore fusion, and neural crest gives rise to PNS neurons, glia, melanocytes, and adrenal medulla.',
          },
          {
            id: 'cranial-pore-folate-independent',
            label: 'The cranial neuropore seals during late second trimester without any reliance on vitamin folate pathways',
            explanation: 'Incorrect: the anterior neuropore closes around embryonic day 25 and is highly dependent on folate-mediated single-carbon metabolism.',
          },
          {
            id: 'crest-forms-spinal-cord',
            label: 'Neural crest cells differentiate into the motor neurons and gray matter parenchymal core of the spinal cord',
            explanation: 'Incorrect: the neural tube produces central nervous system parenchyma (brain and spinal cord); neural crest forms peripheral ganglia and nerves.',
          },
          {
            id: 'tube-forms-skin-epithelium',
            label: 'The neural tube remains a permanent patent cleft in order to build epidermal sweat and sebaceous glands',
            explanation: 'Incorrect: the neural tube closes completely and sinks beneath the surface ectoderm, which then forms the epidermis.',
          },
        ],
      },
    },
  },
});

export const embryologyPlacentaLesson = lessonSchema.parse({
  id: 'embryology-placenta',
  revision: 1,
  questionId: 'embryology-placenta-barrier',
  correctOptionId: 'chorion-trophoblast-exchanges',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch28-placenta',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-3-fetal-development',
      section: 'Chapter 28 · Extraembryonic Membranes and Placental Physiology',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Embriologia',
      hook: 'Como o feto respira, se alimenta e elimina excretas no útero materno sem nunca misturar diretamente seu sangue com o da mãe?',
      title: 'Membranas fetais e placenta: barreira e trocas materno-fetais',
      description: 'Explore o córion, o âmnio, a barreira placentária, as funções endócrinas de suporte (hCG e progesterona) e os vasos umbilicais.',
      objective: 'Compreender a estrutura das vilosidades coriônicas, os componentes da barreira placentária e a circulação materno-fetal.',
      stages: [
        {
          id: 'extraembryonic-membranes',
          title: 'As quatro membranas fetais',
          paragraphs: [
            'O âmnio delimita a cavidade amniótica contendo líquido amniótico, que amortece traumas mecânicos, permite movimentos fetais simétricos e mantém a temperatura constante.',
            'O saco vitelino é o sítio primordial da hematopoiese inicial e abriga as células germinativas primordiais; o alantoide contribui para os vasos umbilicais e o úraco; e o córion (trofoblasto + mesoderma extraembrionário) forma a porção fetal da placenta.',
          ],
          takeaway: 'Âmnio protege contra choques; saco vitelino inicia o sangue; córion constrói a placenta fetal.',
          diagram: 'embryo',
        },
        {
          id: 'placental-barrier-exchange',
          title: 'Vilosidades coriônicas e a barreira placentária',
          paragraphs: [
            'A placenta humana é hemocorial: o sangue materno preenche os espaços intervilosos a partir das artérias espiraladas endometriais, banhando diretamente as vilosidades coriônicas fetais sem anastomose direta.',
            'A barreira placentária (sinciciotrofoblasto, citotrofoblasto, lâmina própria e endotélio capilar fetal) permite a difusão de oxigênio, glicose, aminoácidos e a passagem de imunoglobulinas maternas IgG por pinocitose seletiva, retendo hemácias maternas.',
          ],
          takeaway: 'A barreira placentária realiza trocas gasosas e nutricionais vitais sem misturar o sangue materno e fetal.',
          diagram: 'embryo',
        },
        {
          id: 'endocrine-and-vessels',
          title: 'Função endócrina e vasos umbilicais',
          paragraphs: [
            'O sinciciotrofoblasto secreta hCG nas primeiras semanas para manter o corpo lúteo ovariano produzindo progesterona. A partir da 8ª-10ª semana, a própria placenta assume a produção maciça de progesterona e estrogênios (deslocamento lúteo-placentário).',
            'O cordão umbilical maduro abriga uma veia umbilical (que transporta sangue rico em oxigênio e nutrientes da placenta para o feto) e duas artérias umbilicais (que conduzem sangue venoso hipoxigenado do feto de volta à placenta).',
          ],
          takeaway: 'A placenta produz hCG e progesterona; o cordão tem 1 veia oxigenada e 2 artérias desoxigenadas.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual correlação estrutural e fisiológica sobre a placenta humana e seus vasos está correta?',
        options: [
          {
            id: 'chorion-trophoblast-exchanges',
            label: 'O córion forma vilosidades que realizam trocas gasosas no espaço interviloso sem mistura do sangue materno e fetal, e a veia umbilical leva sangue oxigenado ao feto',
            explanation: 'Correto: a barreira placentária impede a mistura direta de sangue materno e fetal, e a veia umbilical transporta sangue rico em oxigênio e nutrientes ao coração fetal.',
          },
          {
            id: 'direct-blood-mixing',
            label: 'Os capilares endometriais realizam anastomose livre direta com as duas veias umbilicais fetais',
            explanation: 'Incorreto: não há anastomose direta nem mistura de sangue integral; o cordão umbilical normal possui apenas uma veia umbilical, e não duas.',
          },
          {
            id: 'amnion-hormone-synthesis',
            label: 'A cavidade amniótica secreta todo o hCG gestacional e impede a passagem de anticorpos IgG',
            explanation: 'Incorreto: o hCG é secretado pelo sinciciotrofoblasto placentário, e anticorpos IgG maternos atravessam ativamente a barreira placentária para conferir imunidade passiva.',
          },
          {
            id: 'umbilical-vein-deoxygenated',
            label: 'As artérias umbilicais conduzem sangue oxigenado da mãe até a veia cava inferior do concepto',
            explanation: 'Incorreto: as artérias umbilicais levam sangue venoso fetal (desoxigenado) de volta à placenta.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'How does a developing fetus breathe, feed, and clear nitrogenous wastes in utero without ever mixing its blood directly with the mother’s?',
      title: 'Fetal membranes and placenta: barrier and maternal-fetal exchange',
      description: 'Explore the chorion, amnion, placental barrier architecture, endocrine support (hCG and progesterone), and umbilical circulation.',
      objective: 'Understand chorionic villi organization, placental barrier layers, and the hemodynamics of maternal-fetal exchange.',
      stages: [
        {
          id: 'extraembryonic-membranes',
          title: 'The four extraembryonic membranes',
          paragraphs: [
            'The amnion encloses the amniotic cavity filled with fluid that cushions against mechanical shocks, permits symmetrical fetal musculoskeletal movement, and regulates thermal stability.',
            'The yolk sac drives initial embryonic hematopoiesis and germ cell origin; the allantois contributes to the umbilical vessels and urachus; and the chorion (trophoblast plus extraembryonic mesoderm) constructs the fetal component of the placenta.',
          ],
          takeaway: 'Amnion buffers trauma; yolk sac initiates hematopoiesis; chorion constructs the fetal placenta.',
          diagram: 'embryo',
        },
        {
          id: 'placental-barrier-exchange',
          title: 'Chorionic villi and the placental barrier',
          paragraphs: [
            'The human placenta is hemomonochorial: maternal blood spurts from spiral arteries into intervillous spaces, bathing chorionic villous trees without open vascular anastomosis.',
            'The placental barrier (syncytiotrophoblast, cytotrophoblast, villous core, and fetal capillary endothelium) mediates diffusion of O2, CO2, glucose, amino acids, and receptor-mediated pinocytosis of maternal IgG, while barring maternal red blood cells.',
          ],
          takeaway: 'The placental barrier facilitates vital nutrient and gas exchanges without mixing maternal and fetal erythrocytes.',
          diagram: 'embryo',
        },
        {
          id: 'endocrine-and-vessels',
          title: 'Endocrine drive and umbilical vasculature',
          paragraphs: [
            'The syncytiotrophoblast secretes human chorionic gonadotropin (hCG) during early pregnancy to preserve the ovarian corpus luteum. By weeks 8-10, the placenta itself synthesizes adequate progesterone and estrogens (luteal-placental shift).',
            'The mature umbilical cord contains one umbilical vein (ferrying oxygen- and nutrient-rich blood from the placenta to the fetus) and two umbilical arteries (carrying deoxygenated fetal blood back to the placenta).',
          ],
          takeaway: 'The placenta produces hCG and progesterone; the cord houses 1 oxygenated vein and 2 deoxygenated arteries.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which structural and physiological statement concerning the human placenta and umbilical vessels is correct?',
        options: [
          {
            id: 'chorion-trophoblast-exchanges',
            label: 'The chorion forms villi that conduct gas exchange across intervillous spaces without mixing blood supplies, and the umbilical vein delivers oxygenated blood to the fetus',
            explanation: 'Correct: the placental barrier isolates fetal and maternal erythrocytes while permitting gas/nutrient exchange, and the umbilical vein carries oxygenated blood inward.',
          },
          {
            id: 'direct-blood-mixing',
            label: 'Maternal endometrial capillaries form direct continuous vascular anastomoses with two fetal umbilical veins',
            explanation: 'Incorrect: there is no direct vascular conduit, and the normal umbilical cord contains a single umbilical vein, not two.',
          },
          {
            id: 'amnion-hormone-synthesis',
            label: 'The amniotic cavity secretes all gestational hCG while strictly barring the transfer of maternal IgG antibodies',
            explanation: 'Incorrect: syncytiotrophoblast manufactures hCG, and protective maternal IgG antibodies are actively transcytosed across the placental barrier.',
          },
          {
            id: 'umbilical-vein-deoxygenated',
            label: 'The umbilical arteries transport high-pressure oxygenated blood from maternal spiral vessels into the fetal inferior vena cava',
            explanation: 'Incorrect: umbilical arteries carry deoxygenated, waste-laden blood away from the fetal internal iliac arteries back to the placenta.',
          },
        ],
      },
    },
  },
});

export const embryologyOrganogenesisLesson = lessonSchema.parse({
  id: 'embryology-organogenesis',
  revision: 1,
  questionId: 'embryology-organogenesis-teratogens',
  correctOptionId: 'embryonic-critical-period',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch28-organogenesis',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-2-embryonic-development',
      section: 'Chapter 28 · Embryonic Folding, Organogenesis, and Teratology',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Embriologia',
      hook: 'Por que uma infecção ou medicamento nas primeiras 8 semanas pode causar malformações graves, enquanto no 8º mês causa apenas baixo peso?',
      title: 'Organogênese e períodos críticos de teratogênese',
      description: 'Compreenda o dobramento embrionário da quarta semana, o estabelecimento dos primórdios de órgãos e a vulnerabilidade máxima a agentes teratogênicos.',
      objective: 'Identificar as consequências do dobramento embrionário e correlacionar o período embrionário (3ª à 8ª semana) à suscetibilidade a teratógenos.',
      stages: [
        {
          id: 'embryonic-folding-4th-week',
          title: 'O dobramento embrionário na quarta semana',
          paragraphs: [
            'Na quarta semana, o rápido crescimento do encéfalo e da medula espinal promove o dobramento longitudinal (céfalo-caudal) e transversal (látero-lateral) do disco embrionário trilaminar.',
            'Esse dobramento fecha as paredes corporais ventralmente, internaliza a endoderme como o tubo digestivo primitivo e posiciona o coração e o septo transverso na sua topografia torácica definitiva.',
          ],
          takeaway: 'O dobramento embrionário converte o disco plano em um corpo cilíndrico tridimensional com tubo digestivo interno.',
          diagram: 'embryo',
        },
        {
          id: 'organogenesis-critical-window',
          title: 'A janela crítica da organogênese (3ª à 8ª semana)',
          paragraphs: [
            'O período embrionário estende-se da 3ª à 8ª semana pós-fertilização. É a fase em que todos os principais órgãos e sistemas corporais estabelecem seus primórdios fundamentais.',
            'Devido à intensíssima divisão, migração e diferenciação celular, este é o período de maior vulnerabilidade a agentes teratogênicos, capazes de induzir grandes malformações morfológicas congênitas.',
          ],
          takeaway: 'A 3ª à 8ª semana é o período mais vulnerável a teratógenos por abrigar a organogênese primária.',
          diagram: 'embryo',
        },
        {
          id: 'teratogenic-agents-manifestations',
          title: 'Agentes teratogênicos e mecanismos de lesão',
          paragraphs: [
            'Agentes teratogênicos englobam microrganismos (síndrome TORCH: toxoplasmose, rubéola, citomegalovírus, herpes e sífilis), fármacos (talidomida causando focomelia, isotretinoína, varfarina) e toxinas químicas ambientais como o álcool (síndrome alcoólica fetal).',
            'O efeito do teratógeno depende da dose, predisposição genética e, sobretudo, do estágio de desenvolvimento: agressões antes da 3ª semana costumam seguir a lei do "tudo-ou-nada" (morte precoce ou sobrevivência intacta), enquanto exposições no período fetal (após a 9ª semana) causam déficits funcionais ou restrição de crescimento.',
          ],
          takeaway: 'Teratógenos causam grandes defeitos estruturais na organogênese e alterações funcionais ou restrição no período fetal.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Por que o intervalo entre a 3ª e a 8ª semana pós-fertilização é clinicamente considerado o período de máxima suscetibilidade a defeitos congênitos estruturais graves por teratógenos?',
        options: [
          {
            id: 'embryonic-critical-period',
            label: 'É a fase da organogênese primária, quando os primórdios anatômicos dos grandes sistemas corporais estão sendo estabelecidos e diferenciados',
            explanation: 'Correto: na fase embrionária (3ª à 8ª semana) ocorre a organogênese, momento em que perturbações celulares causam malformações estruturais anatômicas graves.',
          },
          {
            id: 'pre-implantation-susceptibility',
            label: 'Nesse período o concepto encontra-se em clivagem tubária sob efeito exclusivo da lei do "tudo-ou-nada"',
            explanation: 'Incorreto: o efeito do "tudo-ou-nada" aplica-se às duas primeiras semanas pré-implantação e pré-gastrulação.',
          },
          {
            id: 'fetal-growth-phase',
            label: 'Corresponde ao período fetal tardio, caracterizado unicamente pela maturação funcional e hipertrofia de tecidos já formados',
            explanation: 'Incorreto: o período fetal se inicia na 9ª semana e vai até o nascimento; a 3ª à 8ª semana é o período embrionário.',
          },
          {
            id: 'placental-breakdown',
            label: 'Ocorre degeneração fisiológica programada do trofoblasto, deixando o embrião sem qualquer barreira farmacológica',
            explanation: 'Incorreto: o trofoblasto não se degenera; ele se especializa ativamente na formação e maturação da placenta.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'Why does exposure to an infection or drug during the first 8 weeks produce missing limbs or heart holes, but in month 8 only causes low birth weight?',
      title: 'Organogenesis and critical windows of teratogenesis',
      description: 'Understand week 4 embryonic folding, organ primordia establishment, and maximal vulnerability to environmental teratogens.',
      objective: 'Identify the anatomical outcomes of embryonic folding and correlate the embryonic period (weeks 3–8) with peak teratogenic susceptibility.',
      stages: [
        {
          id: 'embryonic-folding-4th-week',
          title: 'Embryonic folding during week 4',
          paragraphs: [
            'During week 4, rapid expansion of the neural tube drives longitudinal (head-to-tail) and lateral (transverse) folding of the trilaminar embryonic disc.',
            'Folding closes the ventral body wall, internalizes endoderm to form the primitive gut tube, and swings the heart and septum transversum into their definitive thoracic anatomical positions.',
          ],
          takeaway: 'Embryonic folding transforms the flat disc into a three-dimensional cylindrical body with an internal gut tube.',
          diagram: 'embryo',
        },
        {
          id: 'organogenesis-critical-window',
          title: 'The critical organogenesis window (weeks 3–8)',
          paragraphs: [
            'The embryonic period spans weeks 3 through 8 post-fertilization. During this window, all major organ systems establish their initial developmental primordia.',
            'Because cellular division, migration, and differentiation are occurring at peak intensity, this window represents the phase of maximal vulnerability to teratogenic agents, risking severe structural congenital anomalies.',
          ],
          takeaway: 'Weeks 3 through 8 represent peak teratogenic vulnerability because primary organogenesis is underway.',
          diagram: 'embryo',
        },
        {
          id: 'teratogenic-agents-manifestations',
          title: 'Teratogens and principles of malformation',
          paragraphs: [
            'Teratogens include pathogens (TORCH infections: toxoplasmosis, rubella, cytomegalovirus, herpes, syphilis), pharmaceutical agents (thalidomide causing phocomelia, isotretinoin, warfarin), and toxic substances like ethanol (fetal alcohol syndrome).',
            'Susceptibility depends on timing, genetics, and dose: insult prior to week 3 usually follows an "all-or-none" rule (resorption/death or intact recovery), while fetal period exposures (after week 9) primarily cause functional deficits or growth restriction.',
          ],
          takeaway: 'Teratogens produce major structural anomalies during organogenesis and functional delays during the fetal period.',
          diagram: 'embryo',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Why is the interval from weeks 3 to 8 post-fertilization designated as the period of maximal susceptibility to major structural birth defects?',
        options: [
          {
            id: 'embryonic-critical-period',
            label: 'It encompasses primary organogenesis, during which embryonic primordia of all major organ systems undergo foundational morphogenesis and patterning',
            explanation: 'Correct: during the embryonic period (weeks 3 to 8), primary organs and structures are forming, making them exceptionally susceptible to teratogen-induced structural malformations.',
          },
          {
            id: 'pre-implantation-susceptibility',
            label: 'The conceptus is undergoing cleavage divisions governed strictly by the "all-or-none" survival law',
            explanation: 'Incorrect: the "all-or-none" phenomenon applies to the first two weeks prior to organogenesis (pre-implantation and early bilaminar disc stages).',
          },
          {
            id: 'fetal-growth-phase',
            label: 'It represents the late fetal stage, characterized purely by cellular growth and physiological functional refinement of preexisting tissues',
            explanation: 'Incorrect: the fetal stage extends from week 9 to term; weeks 3 through 8 constitute the embryonic organogenesis stage.',
          },
          {
            id: 'placental-breakdown',
            label: 'Trophoblastic tissue undergoes programmed physiological lysis, leaving embryonic cells completely unshielded by any placental membranes',
            explanation: 'Incorrect: trophoblast does not lyse; it proliferates and differentiates into the mature placental barrier.',
          },
        ],
      },
    },
  },
});
