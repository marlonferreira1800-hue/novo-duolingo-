import { lessonSchema } from '../src/contracts/learning';

export const parasitologyIntestinalProtozoaLesson = lessonSchema.parse({
  id: 'parasitology-intestinal-protozoa',
  revision: 1,
  questionId: 'parasitology-intestinal-protozoa-q1',
  correctOptionId: 'giardia-duodenalis-trophozoite',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-intestinal-protozoa',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/24-4-protozoan-infections-of-the-gastrointestinal-tract',
      section: 'Chapter 24.4 · Gastrointestinal Protozoan Infections: Giardia, Entamoeba, and Cryptosporidium',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Parasitologia',
      hook: 'Por que a Giardia causa uma diarreia gordurosa que flutua no vaso sem sangramento, enquanto a ameba perfura a parede intestinal com fezes cheias de sangue e muco?',
      title: 'Protozoários intestinais e cavitários: Giardia, ameba e Cryptosporidium',
      description: 'Diferencie a má absorção não invasiva da giardíase da colite invasiva necrosante da amebíase e conheça o Cryptosporidium na AIDS.',
      objective: 'Contrastar a patogenia e as manifestações de Giardia lamblia, Entamoeba histolytica e Cryptosporidium hominis.',
      stages: [
        {
          id: 'giardia-duodenalis',
          title: 'Giardia lamblia: disco adesivo e má absorção esteatorreica',
          paragraphs: [
            'A Giardia lamblia (ou G. duodenalis) é um protozoário flagelado ingerido na forma de cistos tetranucleados viáveis em água ou alimentos contaminados.',
            'No duodeno e jejuno proximal, os cistos desencistam em trofozoítos piriformes binucleados que utilizam um disco suctorial côncavo ventral para aderir firmemente à borda em escova dos enterócitos. Essa aderência mecânica em carpete atapeta a mucosa, provoca atrofia das vilosidades e quebra a barreira de absorção lipídica, cursando com diarreia crônica amarelada, esteatorreia (fezes gordurosas e fétidas que boiam no vaso), flatulência e perda ponderal, sem invasão tissular nem sangramento.',
          ],
          takeaway: 'A Giardia adere por disco ventral sem invadir a mucosa, causando má absorção de gorduras e diarreia esteatorreica.',
          diagram: 'parasite',
        },
        {
          id: 'entamoeba-histolytica',
          title: 'Entamoeba histolytica: colite invasiva e úlceras em botão de camisa',
          paragraphs: [
            'Diferente da Giardia, a Entamoeba histolytica é um protozoário amebóide francamente invasivo e citolítico, transmitido por cistos maduros tetranucleados.',
            'Os trofozoítos ligam-se à mucosa colônica através de lectinas galactose-específicas, secretam amebaporos e cisteína proteinases que lisam neutrófilos e enterócitos, provocando úlceras necrosantes profundas com base alargada em formato de botão de camisa (ou frasco de colo estreito). Clinicamente, manifesta-se por disenteria amebiana (evacuações frequentes com sangue vivo, muco e tenesmo) e pode disseminar pela via porta gerando abscesso hepático amebiano estéril com pus cor de pasta de anchova.',
          ],
          takeaway: 'E. histolytica destrói enterócitos por cisteína proteinases, gerando úlceras em botão de camisa, disenteria sanguinolenta e abscesso hepático.',
          diagram: 'intestine',
        },
        {
          id: 'cryptosporidium-trichomonas',
          title: 'Cryptosporidium e Trichomonas vaginalis',
          paragraphs: [
            'O Cryptosporidium hominis é um protozoário apicomplexo intracelular extracitoplasmático. Seus oocistos esféricos resistentes ao cloro são identificados por coloração ácido-resistente de Kinyoun ou Ziehl-Neelsen modificada; em indivíduos imunocompetentes causa gastroenterite autolimitada, mas em pacientes com AIDS avançada desencadeia diarreia aquosa copiosa secretória intratável com risco de desidratação fatal.',
            'O Trichomonas vaginalis é um protozoário cavitário flagelado de transmissão sexual que não forma cistos. Coloniza a mucosa urogenital humana causando vaginite com corrimento amarelo-esverdeado bolhoso, prurido intenso e colpometria típica com colo uterino em aspecto de framboesa.',
          ],
          takeaway: 'Cryptosporidium causa diarreia intratável na AIDS (oocistos ácido-resistentes); Trichomonas é uma IST flagelada sem fase cística.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual protozoário intestinal flagelado adere mecanicamente aos enterócitos do duodeno e jejuno através de um disco de sucção ventral, causando má absorção de lipídios e fezes esteatorreicas que boiam na água, sem invadir a lâmina própria?',
        options: [
          {
            id: 'giardia-duodenalis-trophozoite',
            label: 'Giardia lamblia (trofozoíto flagelado com disco suctorial)',
            explanation: 'Correto: a Giardia recobre mecanicamente as microvilosidades do duodeno com seu disco ventral, gerando esteatorreia e síndrome de má absorção sem destruição invasiva.',
          },
          {
            id: 'entamoeba-histolytica-trophozoite',
            label: 'Entamoeba histolytica (trofozoíto hematófago)',
            explanation: 'Incorreto: a ameba é invasiva e causa colite necrosante com disenteria mucossanguinolenta no cólon.',
          },
          {
            id: 'balantidium-coli-ciliate',
            label: 'Balantidium coli (trofozoíto ciliado)',
            explanation: 'Incorreto: o Balantidium coli é um protozoário ciliado gigante que invade o cólon de criadores de suínos, gerando disenteria colônica.',
          },
          {
            id: 'cryptosporidium-parvum-sporozoite',
            label: 'Cryptosporidium parvum (esporozoíto apicomplexo)',
            explanation: 'Incorreto: o Cryptosporidium causa diarreia aquosa secretória profusa em enterócitos do íleo, sem disco adesivo flagelado.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'Why does Giardia cause floating, pale, foul-smelling diarrhea with zero blood, while amoebiasis eats away the colon wall with bloody dysentery?',
      title: 'Intestinal and Cavitary Protozoa: Giardia, Amoeba, and Cryptosporidium',
      description: 'Contrast non-invasive malabsorptive giardiasis with ulcerative invasive amoebic colitis, and examine opportunistic Cryptosporidium in AIDS.',
      objective: 'Contrast the cellular pathophysiology and clinical syndromes of Giardia lamblia, Entamoeba histolytica, and Cryptosporidium hominis.',
      stages: [
        {
          id: 'giardia-duodenalis',
          title: 'Giardia lamblia: Ventral adhesive disc and fat malabsorption',
          paragraphs: [
            'Giardia lamblia (also known as G. duodenalis) is a flagellated luminal protozoan contracted by drinking water or consuming food contaminated with hardy tetranucleate environmental cysts.',
            'Excystation in the duodenum yields binucleate pear-shaped trophozoites that use a concave ventral sucking disc to anchor to the microvillus brush border of proximal enterocytes. This physical carpeting induces villous blunting, brush border enzyme deficiency, and bile salt deconjugation, precipitating pale, greasy, foul-smelling diarrhea (steatorrhea) with flatulence and malabsorption without mucosal tissue ulceration.',
          ],
          takeaway: 'Giardia anchors via a ventral adhesive disc, causing non-invasive malabsorptive steatorrhea and villous blunting.',
          diagram: 'parasite',
        },
        {
          id: 'entamoeba-histolytica',
          title: 'Entamoeba histolytica: Invasive colitis and flask-shaped ulcers',
          paragraphs: [
            'Unlike Giardia, Entamoeba histolytica is a frankly invasive, cytotoxic pseudopodial protozoan transmitted via mature spherical four-nucleate cysts.',
            'Trophozoites adhere to colonic epithelium via galactose/N-acetylgalactosamine lectins, deploying pore-forming amoebapores and cysteine proteinases that lyse mucosal cells and neutrophils. They burrow through the lamina propria down to the submucosa, excavating classic flask-shaped ulcers with broad necrotic bases. Patients present with fulminant amoebic dysentery (frequent bloody, mucoid stools with rectal tenesmus) and risk hematogenous seeding through the portal vein to develop sterile amoebic liver abscesses filled with chocolate-colored anchovy paste pus.',
          ],
          takeaway: 'E. histolytica lyses colonocytes via cysteine proteases, generating flask-shaped mucosal ulcers, bloody stools, and liver abscesses.',
          diagram: 'intestine',
        },
        {
          id: 'cryptosporidium-trichomonas',
          title: 'Cryptosporidium and Trichomonas vaginalis',
          paragraphs: [
            'Cryptosporidium hominis is an intracellular but extracytoplasmic apicomplexan parasite. Its thick-walled, chlorine-resistant oocysts are identified by modified acid-fast Kinyoun staining; while immunocompetent hosts experience self-limiting watery enteritis, severe AIDS patients suffer intractable, life-threatening cholera-like secretory diarrhea.',
            'Trichomonas vaginalis is a flagellated cavitary protozoan of strict sexual transmission devoid of an environmental cyst stage. It colonizes human lower urogenital tracts, provoking vaginitis marked by copious frothy, greenish-yellow discharge, intense vulvar pruritus, and a classic erythematous strawberry cervix.',
          ],
          takeaway: 'Cryptosporidium provokes relentless diarrhea in AIDS (acid-fast oocysts); Trichomonas is an STD protozoan lacking a cyst phase.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which flagellated intestinal protozoan mechanically carpets enterocytes of the duodenum using a ventral adhesive disc, inducing lipid malabsorption and buoyant foul steatorrhea without mucosal tissue invasion?',
        options: [
          {
            id: 'giardia-duodenalis-trophozoite',
            label: 'Giardia lamblia (flagellated trophozoite with ventral sucking disc)',
            explanation: 'Correct: Giardia adheres to upper small bowel microvilli using its ventral disc, causing brush-border blunting and steatorrhea without invading the mucosal wall.',
          },
          {
            id: 'entamoeba-histolytica-trophozoite',
            label: 'Entamoeba histolytica (erythrophagocytic trophozoite)',
            explanation: 'Incorrect: E. histolytica is a cytolytic colon parasite that invades the bowel wall to produce bloody dysentery and flask-shaped ulcers.',
          },
          {
            id: 'balantidium-coli-ciliate',
            label: 'Balantidium coli (giant ciliated trophozoite)',
            explanation: 'Incorrect: Balantidium coli is a ciliated organism acquired from swine that invades the large intestine.',
          },
          {
            id: 'cryptosporidium-parvum-sporozoite',
            label: 'Cryptosporidium parvum (apicomplexan sporozoite)',
            explanation: 'Incorrect: Cryptosporidium causes non-steatorrheic profuse secretory watery diarrhea via apical intracellular-extracytoplasmic attachment.',
          },
        ],
      },
    },
  },
});

export const parasitologyToxoplasmosisLesson = lessonSchema.parse({
  id: 'parasitology-toxoplasmosis',
  revision: 1,
  questionId: 'parasitology-toxoplasmosis-q1',
  correctOptionId: 'ocular-chorioretinitis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-toxoplasmosis',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/25-4-protozoan-infections-of-the-circulatory-and-lymphatic-systems',
      section: 'Chapter 25.4 · Circulatory Protozoa: Toxoplasma gondii life cycle, congenital infection, and neurotoxoplasmosis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Parasitologia',
      hook: 'Como um parasita que se reproduz exclusivamente no intestino dos gatos domésticos consegue infectar o feto no útero materno ou formar cistos dentro do cérebro?',
      title: 'Toxoplasmose: ciclo do T. gondii, infecção congênita e encefalite',
      description: 'Compreenda a biologia do Toxoplasma gondii, a transmissão vertical transplacentária (tétrade de Sabin) e a neurotoxoplasmose na AIDS.',
      objective: 'Descrever o ciclo biológico do Toxoplasma gondii, reconhecer os sinais da tétrade de Sabin e diagnosticar a neurotoxoplasmose.',
      stages: [
        {
          id: 'toxoplasma-cycle',
          title: 'Ciclo biológico do Toxoplasma gondii e formas parasitárias',
          paragraphs: [
            'O Toxoplasma gondii é um protozoário apicomplexo heteroxênico de distribuição global. Os felídeos domésticos e silvestres são seus únicos hospedeiros definitivos, em cujo epitélio entérico ocorre a reprodução sexuada com eliminação diária de milhões de oocistos imaturos nas fezes.',
            'Após esporularem no solo úmido por 1 a 5 dias, os oocistos tornam-se infectantes. O ser humano (hospedeiro intermediário) infecta-se ao ingerir água/verduras contaminadas com oocistos ou ao comer carne crua/malcozida (bovina ou suína) contendo cistos teciduais cheios de bradizoítos de replicação lenta. No organismo, os parasitas transformam-se em taquizoítos de replicação rápida que invadem ativamente células nucleadas e disseminam pela circulação.',
          ],
          takeaway: 'Felídeos eliminam oocistos fecais; a infecção humana dá-se por oocistos no ambiente ou cistos com bradizoítos em carnes malcozidas.',
          diagram: 'parasite',
        },
        {
          id: 'congenital-toxoplasmosis',
          title: 'Toxoplasmose congênita e a tétrade de Sabin',
          paragraphs: [
            'A transmissão congênita vertical ocorre quando uma gestante previamente soronegativa adquire a primoinfecção aguda durante a gravidez. Taquizoítos circulantes invadem a placenta e atravessam para a circulação fetal.',
            'O risco de infecção fetal é menor no primeiro trimestre, mas a gravidade das lesões teratogênicas é máxima. A infecção grave manifesta-se pela clássica tétrade de Sabin: 1) coriorretinite macular necrosante bilateral com cicatrizes pigmentadas, 2) hidrocefalia obstrutiva, 3) calcificações intracranianas periventriculares dispersas e 4) retardo mental e psicomotor com crises convulsivas.',
          ],
          takeaway: 'A primoinfecção gestacional pode causar a tétrade de Sabin no feto: coriorretinite, hidrocefalia, calcificações cerebrais e retardo mental.',
          diagram: 'embryo',
        },
        {
          id: 'neurotoxoplasmosis-aids',
          title: 'Neurotoxoplasmose no paciente imunocomprometido',
          paragraphs: [
            'Em indivíduos imunocompetentes, a imunidade mediada por linfócitos T CD4+ e IFN-gama força os taquizoítos a encistarem-se na forma de bradizoítos quiescentes no cérebro, retina e miocárdio, mantendo uma infecção latente assintomática.',
            'Em pacientes com AIDS avançada (com contagem de linfócitos T CD4+ inferior a 100 células/mm³), ocorre a reativação dos cistos latentes com proliferação descontrolada de taquizoítos. Desenvolve-se a neurotoxoplasmose (encefalite toxoplásmica), caracterizada clinicamente por cefaleia, febre e déficits neurológicos focais, evidenciando múltiplas lesões expansivas arredondadas com realce anelar após contraste na tomografia computadorizada e ressonância magnética cerebral.',
          ],
          takeaway: 'Na imunodeficiência grave (CD4 < 100), cistos reativam-se no cérebro causando lesões multifocais expansivas com realce anelar.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete os componentes da clássica apresentação congênita grave do Toxoplasma gondii:',
        blank: 'A clássica tétrade de Sabin observada na toxoplasmose congênita é composta por hidrocefalia, retardo do desenvolvimento neuropsicomotor, calcificações cerebrais periventriculares e __________ macular bilateral.',
        options: [
          {
            id: 'ocular-chorioretinitis',
            label: 'coriorretinite',
            explanation: 'Correto: a coriorretinite necrosante é a sequela ocular clássica mais comum da tétrade de Sabin na toxoplasmose congênita.',
          },
          {
            id: 'sensorineural-otitis',
            label: 'otite média secretora',
            explanation: 'Incorreto: a infecção não tem como alvo primário a orelha média nem causa otite secretora.',
          },
          {
            id: 'congenital-cataract',
            label: 'catarata congênita nuclear',
            explanation: 'Incorreto: catarata congênita é um dos achados clássicos da rubéola congênita (tétrade de Gregg), não da toxoplasmose.',
          },
          {
            id: 'hepatic-symmers-fibrosis',
            label: 'fibrose periportal de Symmers',
            explanation: 'Incorreto: a fibrose periportal de Symmers é a lesão patognomônica da esquistossomose crônica por Schistosoma mansoni.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'How can a protozoan that replicates sexually strictly inside a cat’s intestine cross the human placenta to permanently damage a fetal brain?',
      title: 'Toxoplasmosis: T. gondii Life Cycle, Congenital Damage, and Encephalitis',
      description: 'Understand Toxoplasma gondii biology, transplacental congenital transmission (Sabin’s tetrad), and reactivated cerebral toxoplasmosis in AIDS.',
      objective: 'Trace the biological life cycle of Toxoplasma gondii, recognize the hallmarks of Sabin’s tetrad, and evaluate CNS toxoplasmosis.',
      stages: [
        {
          id: 'toxoplasma-cycle',
          title: 'Toxoplasma gondii life cycle and developmental stages',
          paragraphs: [
            'Toxoplasma gondii is an obligate intracellular apicomplexan protozoan with worldwide distribution. Felines (domestic cats and wild felids) serve as the sole definitive hosts, in whose intestinal enterocytes sexual reproduction produces millions of unsporulated environmental oocysts shed in feces.',
            'Oocysts sporulate and become infectious in soil within 1 to 5 days. Intermediate hosts (including livestock and humans) contract the parasite by ingesting sporulated oocysts from soil/water or by eating undercooked meat harboring dormant tissue cysts packed with slowly dividing bradyzoites. Excystation releases crescent-shaped, rapidly replicating tachyzoites that invade host nucleated cells and disseminate hematogenously.',
          ],
          takeaway: 'Cats shed fecal oocysts; humans contract toxoplasmosis via environmental oocysts or eating undercooked meat containing tissue bradyzoite cysts.',
          diagram: 'parasite',
        },
        {
          id: 'congenital-toxoplasmosis',
          title: 'Congenital toxoplasmosis and the Sabin tetrad',
          paragraphs: [
            'Vertical congenital transmission occurs when an immunologically naive, seronegative pregnant woman acquires acute primary toxoplasmosis during gestation. Circulating tachyzoites infect the placenta and cross into the fetal circulation.',
            'While the rate of fetal transmission is lowest during the first trimester, embryonic pathology is devastatingly severe. The classic full-blown presentation is known as the Sabin tetrad: 1) bilateral necrotizing macular chorioretinitis with pigmented scar formation, 2) obstructive hydrocephalus, 3) scattered intracranial periventricular calcifications, and 4) severe neurodevelopmental delay with intractable seizures.',
          ],
          takeaway: 'Primary gestational infection can cause the fetal Sabin tetrad: chorioretinitis, hydrocephalus, intracranial calcifications, and mental retardation.',
          diagram: 'embryo',
        },
        {
          id: 'neurotoxoplasmosis-aids',
          title: 'Cerebral toxoplasmosis in the immunocompromised host',
          paragraphs: [
            'In immunocompetent individuals, CD4+ T cells and interferon-gamma force tachyzoites into latency as dormant bradyzoite tissue cysts in the brain, retina, and skeletal muscle, establishing life-long asymptomatic infection.',
            'In patients with advanced AIDS and profound immunosuppression (CD4+ count < 100 cells/mm³), latent cerebral cysts rupture and tachyzoites replicate unchecked. This manifests as acute toxoplasmic encephalitis, characterized by fever, headache, altered sensorium, and focal motor deficits, accompanied on CT/MRI imaging by multiple rounded, ring-enhancing brain mass lesions with marked surrounding vasogenic edema.',
          ],
          takeaway: 'In advanced AIDS (CD4 < 100), dormant cysts reactivate, producing multiple ring-enhancing brain mass lesions with surrounding edema.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the sentence identifying the classic ocular hallmark of congenital toxoplasmosis:',
        blank: 'The classic Sabin tetrad seen in severe congenital toxoplasmosis is composed of obstructive hydrocephalus, neurodevelopmental delay, scattered periventricular calcifications, and bilateral macular __________.',
        options: [
          {
            id: 'ocular-chorioretinitis',
            label: 'chorioretinitis',
            explanation: 'Correct: necrotizing macular chorioretinitis is the quintessential ocular lesion within Sabin’s tetrad of congenital toxoplasmosis.',
          },
          {
            id: 'sensorineural-otitis',
            label: 'secretory otitis media',
            explanation: 'Incorrect: Toxoplasma does not cause primary mucosal middle ear disease or secretory otitis media.',
          },
          {
            id: 'congenital-cataract',
            label: 'nuclear congenital cataract',
            explanation: 'Incorrect: congenital cataracts are part of Gregg’s congenital rubella syndrome, distinct from toxoplasmosis.',
          },
          {
            id: 'hepatic-symmers-fibrosis',
            label: 'Symmers pipestem fibrosis',
            explanation: 'Incorrect: Symmers pipestem periportal fibrosis is the classic pathognomonic lesion of chronic Schistosoma mansoni schistosomiasis.',
          },
        ],
      },
    },
  },
});

export const parasitologyOtherNematodesLesson = lessonSchema.parse({
  id: 'parasitology-other-nematodes',
  revision: 1,
  questionId: 'parasitology-other-nematodes-q1',
  correctOptionId: 'graham-adhesive-tape-test',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-nematodes',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/5-2-parasitic-helminths',
      section: 'Chapter 5.2 · Parasitic Helminths: Nematodes (Pinworm, Whipworm, Strongyloides, and Filariae)',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Parasitologia',
      hook: 'Como um minúsculo verme intestinal consegue provocar uma coceira anal noturna tão insuportável em crianças que o exame de fezes comum não consegue detectar?',
      title: 'Nematódeos intestinais e teciduais: enterobíase, tricuríase e filariose',
      description: 'Explore a biologia de Enterobius vermicularis, Trichuris trichiura, o risco fatal da hiperinfecção por Strongyloides e a filariose linfática.',
      objective: 'Identificar a clínica e diagnóstico da enterobíase, reconhecer o prolapso retal na tricuríase e detalhar a hiperinfecção por Strongyloides.',
      stages: [
        {
          id: 'enterobiasis-pinworm',
          title: 'Enterobius vermicularis (oxiúro) e o teste da fita gomada',
          paragraphs: [
            'O Enterobius vermicularis é um nematódeo pequeno e esbranquiçado que parasita o ceco e o apêndice vermiforme, altamente prevalente em crianças em idade escolar e creches.',
            'À noite, a fêmea grávida migra pelo esfíncter anal e deposita milhares de ovos assimétricos (com uma face plana e outra convexa em formato de "D") na região perianal, secretando uma substância irritante que desencadeia prurido perianal noturno feroz, irritabilidade e escoriações. Como os ovos não são eliminados misturados com a massa fecal, o exame parasitológico de fezes de rotina é falso-negativo em mais de 90% dos casos; o diagnóstico padrão-ouro é o teste da fita adesiva transparente perianal (método de Graham).',
          ],
          takeaway: 'O Enterobius causa prurido perianal noturno; o diagnóstico é feito pelo teste da fita gomada de Graham (ovos em "D").',
          diagram: 'parasite',
        },
        {
          id: 'trichuriasis-whipworm',
          title: 'Trichuris trichiura (tricocéfalo) e prolapso retal',
          paragraphs: [
            'O Trichuris trichiura (verme chicote) possui uma porção anterior extremamente delgada e filamentosa e uma extremidade posterior espessada.',
            'Com sua porção anterior, ele penetra e ancora-se profundamente na mucosa do ceco e cólon ascendente. Em infecções com alta carga parasitária em crianças desnutridas, a inflamação mecânica difusa e o tenesmo contínuo enfraquecem o tônus esfincteriano e pélvico, precipitando a exteriorização dolorosa da mucosa intestinal conhecida como prolapso retal, acompanhada de disenteria crônica e anemia carencial.',
          ],
          takeaway: 'Trichuris trichiura ancora-se na mucosa colônica; cargas parasitárias maciças provocam prolapso retal e desnutrição infantil.',
          diagram: 'intestine',
        },
        {
          id: 'strongyloides-filariasis',
          title: 'Strongyloides stercoralis e filariose linfática',
          paragraphs: [
            'O Strongyloides stercoralis é um nematódeo singular que possui a capacidade de realizar autoinfecção interna: larvas rabditoides eliminadas no lúmen intestinal transformam-se em filarioides infectantes dentro do próprio intestino, penetrando a mucosa e mantendo a infecção por décadas. Se o paciente for submetido a imunossupressão por corticosteroides, ocorre a síndrome de hiperinfecção disseminada, com invasão larval maciça dos pulmões e sepse por bactérias gram-negativas translocadas.',
            'A filariose linfática (Wuchereria bancrofti), transmitida pelo mosquito Culex, aloja vermes adultos nos vasos linfáticos, causando linfangite retrógrada crônica, estase e fibroedema maciço com elefantíase de membros inferiores e genitália.',
          ],
          takeaway: 'Strongyloides faz autoinfecção interna (risco de sepse fatal com corticoides); Wuchereria obstrui vasos linfáticos gerando elefantíase.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Uma criança de 6 anos apresenta prurido perianal noturno intenso e sono agitado. Qual é o teste laboratorial de escolha para confirmar o diagnóstico de enterobíase pela captura direta dos ovos aderidos na margem do ânus?',
        options: [
          {
            id: 'graham-adhesive-tape-test',
            label: 'Método da fita gomada transparente perianal de Graham',
            explanation: 'Correto: a fita gomada pressionada na pele perianal pela manhã captura diretamente os ovos assimétricos de Enterobius vermicularis.',
          },
          {
            id: 'routine-stool-sedimentation',
            label: 'Exame parasitológico de fezes de rotina por sedimentação espontânea',
            explanation: 'Incorreto: o exame de fezes tradicional é insensível (< 10%) porque a fêmea não ovipõe na luz intestinal, mas sim na margem anal externa.',
          },
          {
            id: 'blood-thick-smear-pcr',
            label: 'Gota espessa de sangue periférico com pesquisa de microfilárias',
            explanation: 'Incorreto: a gota espessa é utilizada para diagnosticar filariose ou malária, não oxiuríase intestinal.',
          },
          {
            id: 'duodenal-aspirate-culture',
            label: 'Cultura quantitativa de aspirado duodenal em meio seletivo',
            explanation: 'Incorreto: o Enterobius habita o ceco e a região anal, nunca o duodeno superior.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'How can a tiny intestinal pinworm cause nocturnal anal itching so fierce in young children while remaining completely undetectable on standard stool tests?',
      title: 'Intestinal and Tissue Nematodes: Enterobiasis, Trichuriasis, and Filariasis',
      description: 'Explore Enterobius vermicularis biology, Trichuris trichiura rectal prolapse, the mortal hazard of Strongyloides hyperinfection, and filariasis.',
      objective: 'Identify clinical hallmarks and diagnosis of enterobiasis, recognize trichuriasis complications, and analyze Strongyloides hyperinfection.',
      stages: [
        {
          id: 'enterobiasis-pinworm',
          title: 'Enterobius vermicularis (pinworm) and the cellophane tape test',
          paragraphs: [
            'Enterobius vermicularis is a ubiquitous, small white nematode inhabiting the human cecum and appendix, exceptionally prevalent among young school-aged children and daycare cohorts.',
            'Under cover of darkness at night, gravid female worms migrate through the anal canal onto perianal skin folds to deposit thousands of sticky, asymmetrical, planoconvex D-shaped eggs. This elicits fierce pruritus ani, excoriations, and insomnia. Because eggs are laid directly onto skin rather than passed in feces, standard routine stool examinations miss > 90% of cases; definitive diagnosis requires the cellophane adhesive tape test (Graham method).',
          ],
          takeaway: 'Pinworm triggers nocturnal anal itching; diagnosis requires Graham’s cellophane tape test to detect characteristic D-shaped eggs.',
          diagram: 'parasite',
        },
        {
          id: 'trichuriasis-whipworm',
          title: 'Trichuris trichiura (whipworm) and pediatric rectal prolapse',
          paragraphs: [
            'Trichuris trichiura exhibits an attenuated, whip-like anterior two-thirds and an expanded, bulbous posterior tail.',
            'Using their slender anterior segment, adult worms thread into and anchor beneath the epithelial lining of the cecum and ascending colon. In heavy childhood infestations, chronic colonic inflammation, friability, and unrelenting tenesmus weaken supporting levator ani musculature, resulting in classic full-thickness rectal prolapse with visible anchored worms, accompanied by chronic bloody dysentery and microcytic anemia.',
          ],
          takeaway: 'Trichuris anchors into the colonic wall; heavy pediatric worm burdens precipitate rectal prolapse and severe growth faltering.',
          diagram: 'intestine',
        },
        {
          id: 'strongyloides-filariasis',
          title: 'Strongyloides stercoralis hyperinfection and lymphatic filariasis',
          paragraphs: [
            'Strongyloides stercoralis is uniquely capable of internal autoinfection: rhabditiform larvae shed into the colonic lumen prematurely morph into infectious filariform larvae, penetrating bowel mucosa to establish perpetual cycles spanning decades. If a chronically infected patient receives immunosuppressive systemic corticosteroids, this autoinfection loop explodes into catastrophic disseminated hyperinfection syndrome, causing massive pulmonary larval hemorrhage and fatal Gram-negative bacterial sepsis.',
            'Lymphatic filariasis (caused by mosquito-borne Wuchereria bancrofti) lodges adult worms in dependent lymphatic conduits, triggering chronic lymphangitis, perilymphatic fibrosis, and massive disfiguring lymphedema (elephantiasis) of legs and scrotum.',
          ],
          takeaway: 'Strongyloides maintains internal autoinfection (deadly hyperinfection under steroids); Wuchereria causes lymphatic elephantiasis.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'A 6-year-old child presents with severe nocturnal perianal pruritus and restless sleep. What is the gold-standard diagnostic modality used to capture the characteristic asymmetrical D-shaped eggs from the perianal verge?',
        options: [
          {
            id: 'graham-adhesive-tape-test',
            label: 'Graham cellophane adhesive tape test applied to perianal skin',
            explanation: 'Correct: pressing clear adhesive tape against the perianal verge in the early morning directly captures Enterobius vermicularis eggs.',
          },
          {
            id: 'routine-stool-sedimentation',
            label: 'Routine stool ova and parasite examination by formal-ether sedimentation',
            explanation: 'Incorrect: standard fecal ova examinations are insensitive (< 10%) because female pinworms lay eggs on perianal skin rather than in the stool.',
          },
          {
            id: 'blood-thick-smear-pcr',
            label: 'Nocturnal thick blood smear looking for sheathed microfilariae',
            explanation: 'Incorrect: thick blood smears diagnose vector-borne filariasis or malaria, not luminal pinworm infections.',
          },
          {
            id: 'duodenal-aspirate-culture',
            label: 'Selective culture of duodenal fluid obtained via enteric endoscopy',
            explanation: 'Incorrect: Enterobius resides in the distal cecum and rectum, never the proximal duodenum.',
          },
        ],
      },
    },
  },
});

export const parasitologyTissueHelminthsLesson = lessonSchema.parse({
  id: 'parasitology-tissue-helminths',
  revision: 1,
  questionId: 'parasitology-tissue-helminths-q1',
  correctOptionId: 'cutaneous-larva-migrans',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-tissue-helminths',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/5-2-parasitic-helminths',
      section: 'Chapter 5.2 · Parasitic Helminths: Zoonotic tissue parasites, larva migrans, and cestode cysts',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Parasitologia',
      hook: 'Como andar descalço na areia de uma praia frequentada por cães pode fazer uma larva animal rastejar sob a sua pele desenhando um mapa avermelhado?',
      title: 'Helmintíases teciduais: larva migrans, cisto hidático e esquistossomose',
      description: 'Estude as infestações teciduais zoonóticas: larva migrans cutânea e visceral, a hidatidose por Echinococcus e a fibrose de Symmers.',
      objective: 'Distinguir larva migrans cutânea de visceral, reconhecer o cisto hidático e detalhar a hipertensão portal esquistossomótica.',
      stages: [
        {
          id: 'larva-migrans',
          title: 'Larva migrans cutânea e visceral',
          paragraphs: [
            'A larva migrans cutânea (conhecida popularmente como "bicho geográfico") decorre da penetração transcutânea acidental de larvas filarioides de ancilostomídeos de cães e gatos (como Ancylostoma braziliense ou A. caninum) presentes em areias e solos úmidos contaminados por fezes desses animais.',
            'Por não possuírem as enzimas colagenases necessárias para penetrar a membrana basal humana e atingir os vasos sanguíneos, as larvas ficam aprisionadas na epiderme, migrando aleatoriamente e desenhando túneis serpiginosos lineares, eritematosos e intensamente pruriginosos que avançam alguns milímetros por dia. Já a larva migrans visceral (por Toxocara canis) ocorre pela ingestão de ovos por crianças, liberando larvas que cruzam o intestino e invadem fígado, pulmões e olhos (toxocaríase ocular), deflagrando hepatoesplenomegalia e eosinofilia maciça sustentada.',
          ],
          takeaway: 'Larva migrans cutânea (A. braziliense) causa túneis serpiginosos na epiderme; larva visceral (Toxocara) invade órgãos com eosinofilia.',
          diagram: 'parasite',
        },
        {
          id: 'echinococcus-hydatid',
          title: 'Echinococcus granulosus e a doença hidática',
          paragraphs: [
            'A hidatidose (equinococose cística) é uma zoonose causada pelo pequeno cestódeo Echinococcus granulosus. O cão é o hospedeiro definitivo (que abriga o verme adulto no intestino), e ovinos ou seres humanos atuam como hospedeiros intermediários ao ingerirem ovos eliminados nas fezes caninas.',
            'Os embriões eclodem no duodeno, atravessam a veia porta e alojam-se no fígado (em 70% dos casos) ou nos pulmões, formando cistos hidáticos esféricos de crescimento lento com parede acelular espessa e camada germinativa interna que produz líquido sob alta pressão e areia hidática (protoescólices). A aspiração inadvertida ou ruptura traumática de um cisto pode deflagrar choque anafilático imediato potencialmente fatal e semeio secundário de múltiplos novos cistos na cavidade peritoneal.',
          ],
          takeaway: 'O cisto hidático do Echinococcus forma lesões expansivas no fígado; sua ruptura acidental pode causar choque anafilático fatal.',
          diagram: 'tissue',
        },
        {
          id: 'schistosomal-hypertension',
          title: 'Esquistossomose mansônica e a fibrose de Symmers',
          paragraphs: [
            'Na esquistossomose crônica por Schistosoma mansoni, os vermes adultos fêmeas habitam o plexo venoso mesentérico inferior e ovipõem continuamente. Milhares de ovos arrastados pelo fluxo retrógrado portal ficam impactados e embolizados nos vênulos pré-senusoidais do fígado.',
            'Os antígenos dos ovos deflagram uma reação inflamatória granulomatosa mediada por linfócitos Th2 rica em eosinófilos e macrófagos, culminando em extensa fibrose periportal densa em bico de cachimbo (fibrose de Symmers). Como os capilares sinusóides e os hepatócitos são preservados, o paciente desenvolve hipertensão portal pré-senusoidal grave com esplenomegalia gigante e varizes de esôfago sangrantes, mantendo as provas de função de síntese hepática (como albumina e coagulação) relativamente preservadas.',
          ],
          takeaway: 'Granulomas contra ovos de Schistosoma causam fibrose periportal de Symmers e hipertensão portal pré-senusoidal com função hepática preservada.',
          diagram: 'pressure',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual parasitose cutânea é provocada pela penetração percutânea de larvas filarioides de ancilostomídeos de cães e gatos em praias ou solos arenosos contaminados, manifestando-se por túneis serpiginosos elevados, eritematosos e intensamente pruriginosos na epiderme?',
        options: [
          {
            id: 'cutaneous-larva-migrans',
            label: 'Larva migrans cutânea (bicho geográfico)',
            explanation: 'Correto: Ancylostoma braziliense e caninum não conseguem ultrapassar a derme humana, migrando na epiderme e criando trajetos serpiginosos pruriginosos.',
          },
          {
            id: 'visceral-leishmaniasis',
            label: 'Leishmaniose visceral americana (calazar)',
            explanation: 'Incorreto: o calazar é transmitido por picada de flebotomíneos e atinge macrófagos de baço e fígado, sem lesões serpiginosas epidérmicas.',
          },
          {
            id: 'subcutaneous-cysticercosis',
            label: 'Cisticercose subcutânea por Taenia solium',
            explanation: 'Incorreto: a cisticercose gera nódulos subcutâneos firmes e móveis não pruriginosos, e não trajetos serpiginosos móveis.',
          },
          {
            id: 'acute-loiasis-migration',
            label: 'Loíase por migração subconjuntival de Loa loa',
            explanation: 'Incorreto: a Loa loa é uma filária africana transmitida por moscas Chrysops que migra pelo tecido subcutâneo e conjuntiva ocular, distinta do bicho geográfico.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'How can walking barefoot on a sunlit beach frequented by dogs lead to an animal worm tracing an intensely itchy red maze beneath your skin?',
      title: 'Tissue Helminthiases: Larva Migrans, Hydatid Cyst, and Schistosomiasis',
      description: 'Study zoonotic tissue helminth infections: cutaneous and visceral larva migrans, Echinococcus hydatid cysts, and Symmers periportal fibrosis.',
      objective: 'Distinguish cutaneous from visceral larva migrans, recognize Echinococcus hydatid disease, and explain schistosomal portal hypertension.',
      stages: [
        {
          id: 'larva-migrans',
          title: 'Cutaneous and visceral larva migrans',
          paragraphs: [
            'Cutaneous larva migrans ("creeping eruption") is triggered by accidental transcutaneous penetration of infective filariform larvae of canine and feline hookworms (principally Ancylostoma braziliense and A. caninum) residing in warm, sandy soils contaminated with animal feces.',
            'Because these animal parasites lack the matrix metalloproteinases required to breach human basement membranes into deep blood vessels, larvae wander aimlessly within the lower epidermis, tracing advanced, elevated, intensely pruritic serpiginous tracks progressing millimeters each day. Conversely, visceral larva migrans (from Toxocara canis) results from accidental egg ingestion by young children, releasing larvae that penetrate the bowel wall and invade liver, lungs, and central nervous system, driving hepatosplenomegaly and massive peripheral blood eosinophilia.',
          ],
          takeaway: 'Cutaneous larva migrans (A. braziliense) causes epidermal serpiginous tracks; visceral larva migrans (Toxocara) invades organs with marked eosinophilia.',
          diagram: 'parasite',
        },
        {
          id: 'echinococcus-hydatid',
          title: 'Echinococcus granulosus and cystic hydatid disease',
          paragraphs: [
            'Cystic hydatid disease is an insidious zoonosis caused by the dog tapeworm Echinococcus granulosus. Dogs serve as definitive hosts, harboring the tiny adult cestode in their small intestine; sheep, cattle, and humans act as intermediate hosts upon accidentally ingesting fecal eggs.',
            'Oncospheres hatch in the duodenum, cross the portal circulation, and lodge predominantly in the liver (70%) or lungs, slowly expanding into unilocular hydatid cysts bounded by an outer acellular laminated layer and an inner germinal membrane that buds daughter cysts and microscopic hydatid sand (protoscolices). Diagnostic needle aspiration or blunt rupture of a hydatid cyst carries an extreme risk of immediate fatal anaphylactic shock and secondary intraperitoneal seeding.',
          ],
          takeaway: 'Echinococcus hydatid cysts develop as slow-growing space-occupying hepatic masses; rupture can trigger fatal anaphylactic shock.',
          diagram: 'tissue',
        },
        {
          id: 'schistosomal-hypertension',
          title: 'Schistosoma mansoni and Symmers pipestem fibrosis',
          paragraphs: [
            'In chronic intestinal schistosomiasis caused by Schistosoma mansoni, mated adult blood flukes reside within inferior mesenteric veins. Thousands of daily ova are swept retrograde into the intrahepatic portal venous radicles where they lodge and embolize.',
            'Trapped eggs elicit an aggressive Th2-driven granulomatous reaction consisting of macrophages, T lymphocytes, and eosinophils, culminating in dense periportal collagen deposition known as Symmers pipestem fibrosis. Because the hepatic lobular architecture and hepatocytes remain largely unaffected, patients develop severe presinusoidal portal hypertension with massive splenomegaly and lethal bleeding esophageal varices, while synthetic hepatic function (albumin and prothrombin time) remains remarkably preserved.',
          ],
          takeaway: 'Periovular granulomas drive Symmers pipestem fibrosis, producing severe presinusoidal portal hypertension with preserved baseline synthetic liver function.',
          diagram: 'pressure',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which parasitic condition occurs when filariform larvae of animal hookworms (such as Ancylostoma braziliense) penetrate barefoot human skin on sandy beaches, causing intensely itchy, elevated serpiginous epidermal tracks?',
        options: [
          {
            id: 'cutaneous-larva-migrans',
            label: 'Cutaneous larva migrans (creeping eruption)',
            explanation: 'Correct: canine/feline hookworm larvae cannot breach the human dermal-epidermal junction, remaining confined to the epidermis to create pruritic creeping tracks.',
          },
          {
            id: 'visceral-leishmaniasis',
            label: 'Visceral leishmaniasis (kala-azar)',
            explanation: 'Incorrect: kala-azar is transmitted by sandflies and invades reticuloendothelial macrophages in liver, spleen, and bone marrow.',
          },
          {
            id: 'subcutaneous-cysticercosis',
            label: 'Subcutaneous cysticercosis from Taenia solium',
            explanation: 'Incorrect: cysticercosis presents as discrete, firm, painless, non-migratory subcutaneous nodules.',
          },
          {
            id: 'acute-loiasis-migration',
            label: 'Loiasis caused by adult Loa loa subconjunctival migration',
            explanation: 'Incorrect: Loa loa is an African filarial worm transmitted by deerflies producing transient Calabar swellings and subconjunctival eye transit.',
          },
        ],
      },
    },
  },
});

export const parasitologyEctoparasitesVectorsLesson = lessonSchema.parse({
  id: 'parasitology-ectoparasites-vectors',
  revision: 1,
  questionId: 'parasitology-ectoparasites-vectors-q1',
  correctOptionId: 'sarcoptes-scabiei-mite',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-arthropods',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/5-3-parasitic-arthropods',
      section: 'Chapter 5.3 · Parasitic Arthropods: Ectoparasites, scabies, lice, and biological vectors',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Parasitologia',
      hook: 'Como um ácaro invisível a olho nu consegue escavar galerias na pele de uma família inteira e provocar uma coceira corporal desesperadora à noite?',
      title: 'Ectoparasitos e vetores biológicos: escabiose, piolhos e insetos',
      description: 'Conheça os principais artrópodes de importância médica: escabiose por Sarcoptes scabiei, pediculose, miíases e os grandes vetores tropicais.',
      objective: 'Identificar a clínica e transmissão da escabiose e correlacionar os principais vetores artrópodes com as doenças tropicais transmitidas.',
      stages: [
        {
          id: 'scabies-sarcoptes',
          title: 'Sarcoptes scabiei e a escabiose (sarna humana)',
          paragraphs: [
            'A escabiose é uma dermatose pruriginosa contagiosa causada pelo ácaro microscópico Sarcoptes scabiei var. hominis, transmitida por contato físico pele a pele direto ou por fômites.',
            'A fêmea fecundada penetra no estrato córneo da epiderme e escava túneis (galerias serpiginosas) onde deposita fezes (cíbalos) e ovos. As fezes e ovos desencadeiam uma reação de hipersensibilidade celular tipo IV retardada após 3 a 6 semanas na primoinfecção, manifestando-se por prurido noturno intolerável e pápulas escoriadas nos espaços interdigitais das mãos, punhos, axilas, aréolas e bolsa escrotal (poupando a cabeça em adultos). Em imunossuprimidos, ocorre a sarna crostosa norueguesa com milhões de ácaros proliferando em crostas espessas.',
          ],
          takeaway: 'O Sarcoptes scabiei escava túneis no estrato córneo; o prurido noturno decorre de hipersensibilidade alérgica tardia tipo IV.',
          diagram: 'parasite',
        },
        {
          id: 'pediculosis-myiasis',
          title: 'Pediculose e miíases',
          paragraphs: [
            'A pediculose é causada por insetos da ordem Phthiraptera: Pediculus humanus capitis (piolho da cabeça que fixa lêndeas na haste dos fios de cabelo), Pediculus humanus corporis (vetor do tifo epidêmico) e Pthirus pubis (chato, transmitido sexualmente nos pelos pubianos).',
            'A miíase é a infestação de tecidos vivos de vertebrados por larvas de dípteros (moscas). A miíase furunculoide é causada pela larva da mosca Dermatobia hominis (mosca-varejeira), que se desenvolve em um nódulo subcutâneo eritematoso dotado de um orifício central por onde a larva respira e exsuda secreção serossanguinolenta. A miíase cavitária ou de feridas (por Cochliomyia hominivorax) envolve centenas de larvas carnívoras que destroem tecidos com feridas abertas.',
          ],
          takeaway: 'Pediculose envolve lêndeas fixadas aos pelos; miíase furunculoide (Dermatobia hominis) forma nódulo único com poro respiratório central.',
          diagram: 'microbe',
        },
        {
          id: 'biological-vectors',
          title: 'Grandes vetores biológicos da medicina tropical',
          paragraphs: [
            'Diferente dos vetores mecânicos (que apenas transportam patógenos em suas patas), os vetores biológicos são artrópodes nos quais o patógeno multiplica-se ou passa por etapas obrigatórias de desenvolvimento.',
            'O mosquito Anopheles transmite a malária (Plasmodium); o mosquito Aedes aegypti transmite os vírus da dengue, zika, chikungunya e febre amarela urbana; os triatomíneos (barbeiros) transmitem o Trypanosoma cruzi da doença de Chagas por contaminação fecal; o mosquito-palha flebotomíneo (Lutzomyia) transmite a Leishmania; e os simulídeos (borrachudos) transmitem a Onchocerca volvulus da oncocercose.',
          ],
          takeaway: 'Vetores biológicos albergam etapas de desenvolvimento: Anopheles (malária), Aedes (arboviroses), barbeiro (Chagas) e Lutzomyia (leishmaniose).',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual ectoparasito microscópico da classe dos aracnídeos escava galerias lineares no estrato córneo da epiderme humana para deposição de ovos e fezes, gerando uma reação de hipersensibilidade com pápulas escoriadas e intenso prurido noturno em espaços interdigitais?',
        options: [
          {
            id: 'sarcoptes-scabiei-mite',
            label: 'Sarcoptes scabiei var. hominis (ácaro da escabiose)',
            explanation: 'Correto: o ácaro da sarna escava túneis na camada córnea e desencadeia reação de hipersensibilidade alérgica tipo IV que piora à noite no leito aquecido.',
          },
          {
            id: 'pediculus-humanus-capitis',
            label: 'Pediculus humanus capitis (piolho do couro cabeludo)',
            explanation: 'Incorreto: o piolho vive no couro cabeludo e fixa lêndeas na haste do cabelo, sem escavar túneis no estrato córneo das mãos.',
          },
          {
            id: 'cimex-lectularius-bedbug',
            label: 'Cimex lectularius (percevejo-de-cama)',
            explanation: 'Incorreto: percevejos vivem em colchões e móveis e picam a pele transitoriamente à noite, não habitando túneis no estrato córneo.',
          },
          {
            id: 'dermatobia-hominis-larva',
            label: 'Larva da Dermatobia hominis (miíase furunculoide)',
            explanation: 'Incorreto: a Dermatobia gera uma lesão nodular furunculoide profunda e única com orifício central fistuloso, não múltiplas lesões interdigitais.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'How can an invisible microscopic mite burrow tunnels inside an entire family’s skin, setting off desperate, unscratchable night-time itching?',
      title: 'Ectoparasites and Biological Vectors: Scabies, Lice, and Insects',
      description: 'Master major arthropods of medical importance: scabies (Sarcoptes scabiei), pediculosis, myiasis, and critical tropical disease vectors.',
      objective: 'Identify clinical features and transmission of scabies and link major arthropod biological vectors to their tropical pathogens.',
      stages: [
        {
          id: 'scabies-sarcoptes',
          title: 'Sarcoptes scabiei and human scabies',
          paragraphs: [
            'Scabies is a contagious, intensely pruritic ectoparasitic dermatosis caused by the microscopic mite Sarcoptes scabiei var. hominis, acquired through prolonged direct skin-to-skin personal contact.',
            'Mated female mites burrow into the epidermal stratum corneum, excavating microscopic serpiginous tracks (burrows) where they deposit eggs and scybala (fecal pellets). These excretory deposits evoke a delayed Type IV cell-mediated hypersensitivity reaction after 3 to 6 weeks of initial colonization, precipitating intractable nocturnal pruritus and excoriated papules concentrated in finger web spaces, flexor wrists, axillae, areolae, and male genitalia (sparing the adult head). Immunocompromised hosts may develop crusted (Norwegian) scabies with millions of mites proliferating inside hyperkeratotic crusts.',
          ],
          takeaway: 'Sarcoptes scabiei burrows in the stratum corneum; nocturnal itching is driven by a delayed Type IV allergic response to feces and eggs.',
          diagram: 'parasite',
        },
        {
          id: 'pediculosis-myiasis',
          title: 'Pediculosis and dipteran myiasis',
          paragraphs: [
            'Pediculosis is caused by wingless sucking lice: Pediculus humanus capitis (head lice cementing chitinous nits onto hair shafts), Pediculus humanus corporis (body lice serving as the vector for epidemic typhus), and Pthirus pubis (crab lice sexually transmitted in pubic hair).',
            'Myiasis designates the parasitic infestation of living vertebrate tissues by dipterous fly larvae (maggots). Furuncular myiasis is classically caused by the human botfly (Dermatobia hominis), whose larva develops within a subcutaneous inflammatory nodule sporting a central spiracular breathing pore that intermittently discharges serosanguinous fluid. Wound or cavitary myiasis (Cochliomyia hominivorax) involves hundreds of invasive maggots devouring open cutaneous wounds.',
          ],
          takeaway: 'Lice cement nits onto hair shafts; botfly myiasis (Dermatobia hominis) presents as a solitary furunculoid nodule with a central breathing pore.',
          diagram: 'microbe',
        },
        {
          id: 'biological-vectors',
          title: 'Primary biological vectors in tropical medicine',
          paragraphs: [
            'Unlike mechanical vectors that merely transport microbes passively on external surfaces, biological vectors serve as intermediate hosts in which the pathogen obligatorily replicates or completes essential morphogenesis.',
            'Female Anopheles mosquitoes transmit malaria (Plasmodium); Aedes aegypti mosquitoes transmit dengue, Zika, chikungunya, and urban yellow fever viruses; triatomine bugs (kissing bugs) transmit Trypanosoma cruzi via infectious fecal contamination; phlebotomine sandflies (Lutzomyia) inoculate Leishmania; and blackflies (Simulium) transmit the filarial worm Onchocerca volvulus.',
          ],
          takeaway: 'Biological vectors support pathogen development: Anopheles (malaria), Aedes (arboviruses), kissing bugs (Chagas), and sandflies (leishmania).',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which microscopic arachnid ectoparasite excavates linear intraepidermal burrows within the stratum corneum to lay eggs and scybala, precipitating an intense Type IV hypersensitivity reaction with excoriated papules and severe nocturnal pruritus in web spaces?',
        options: [
          {
            id: 'sarcoptes-scabiei-mite',
            label: 'Sarcoptes scabiei var. hominis (scabies mite)',
            explanation: 'Correct: Sarcoptes scabiei burrows in the epidermal stratum corneum, triggering a delayed-type hypersensitivity reaction that worsens at night.',
          },
          {
            id: 'pediculus-humanus-capitis',
            label: 'Pediculus humanus capitis (human head louse)',
            explanation: 'Incorrect: head lice reside on the scalp and cement nits to hair shafts rather than excavating intraepidermal burrows.',
          },
          {
            id: 'cimex-lectularius-bedbug',
            label: 'Cimex lectularius (common bedbug)',
            explanation: 'Incorrect: bedbugs live in mattress crevices and bite host skin transiently at night, without burrowing in the epidermis.',
          },
          {
            id: 'dermatobia-hominis-larva',
            label: 'Dermatobia hominis larva (human botfly maggot)',
            explanation: 'Incorrect: botfly larvae produce a solitary deep subcutaneous furunculoid lesion with a central respiratory pore, not diffuse interdigital papules.',
          },
        ],
      },
    },
  },
});
