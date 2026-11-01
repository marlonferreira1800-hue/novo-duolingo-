import { lessonSchema } from '../src/contracts/learning';

export const embryologyPharyngealLesson = lessonSchema.parse({
  id: 'embryology-pharyngeal',
  revision: 1,
  questionId: 'embryology-pharyngeal-q1',
  correctOptionId: 'arch1-trigeminal-meckel',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-ap2e-ch28-pharyngeal',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-2',
      section: 'Chapter 28 · Development and Inheritance: Embryonic Development of the Head and Neck',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Embriologia',
      hook: 'Como estruturas que nos peixes formavam brânquias deram origem à nossa mandíbula, ossículos do ouvido e glândulas cervicais?',
      title: 'Aparelho faríngeo: arcos, bolsas, fendas e formação craniofacial',
      description: 'Analise os derivados dos arcos faríngeos, bolsas endodérmicas e fendas ectodérmicas na morfogênese facial.',
      objective: 'Identificar a contribuição embrionária dos arcos faríngeos, bolsas e fendas na formação do esqueleto facial, musculatura mastigatória e glândulas cervicais.',
      stages: [
        {
          id: 'pharyngeal-arches',
          title: 'Arcos faríngeos e crista neural craniana',
          paragraphs: [
            'A partir da quarta semana embrionária, seis pares de arcos faríngeos mesodérmicos e colonizados por células da crista neural desenvolvem-se lateralmente à faringe primitiva.',
            'O primeiro arco faríngeo (mandibular) dá origem à cartilagem de Meckel, à maxila, à mandíbula, ao martelo, à bigorna e aos músculos da mastigação, sendo inervado pelo nervo trigêmeo (NC V).',
          ],
          takeaway: 'O 1º arco origina a mandíbula, martelo, bigorna e músculos da mastigação inervados pelo NC V.',
          diagram: 'embryo',
        },
        {
          id: 'pouches-and-clefts',
          title: 'Bolsas endodérmicas e fendas ectodérmicas',
          paragraphs: [
            'As bolsas faríngeas internas são revestidas por endoderma: a 1ª bolsa forma a tuba auditiva e o tímpano médio, a 2ª origina a tonsila palatina, a 3ª forma o timo e as paratireoides inferiores, e a 4ª forma as paratireoides superiores.',
            'Apenas a 1ª fenda ectodérmica externa persiste no adulto, formando o meato acústico externo. As demais fendas são recobertas pelo crescimento caudal do 2º arco; sua persistência gera cistos cervicais laterais.',
          ],
          takeaway: '1ª fenda forma o meato acústico externo; bolsas originam tuba auditiva, tonsilas, timo e paratireoides.',
          diagram: 'tissue',
        },
        {
          id: 'face-palate',
          title: 'Morfogênese da face e do palato',
          paragraphs: [
            'A face humana forma-se pela fusão coordenada de cinco proeminências: o processo frontonasal ímpar, os dois processos maxilares e os dois processos mandibulares.',
            'O palato secundário desenvolve-se a partir de cristas palatinas maxilares que se horizontalizam e fundem-se na linha média. Falhas na fusão entre os processos geram fendas labiais e palatinas congênitas.',
          ],
          takeaway: 'O palato e a face resultam da fusão das proeminências maxilares, mandibulares e frontonasal.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual par de derivados anatômicos adultos e nervo craniano associado tem origem embriológica direta no primeiro arco faríngeo?',
        options: [
          {
            id: 'arch1-trigeminal-meckel',
            label: 'Músculos da mastigação, mandíbula, martelo e nervo trigêmeo (NC V)',
            explanation: 'Correto: o primeiro arco faríngeo (arco mandibular) abriga a cartilagem de Meckel, forma os ossículos martelo e bigorna, musculatura mastigatória e tem como nervo o trigêmeo.',
          },
          {
            id: 'arch2-facial-stapes',
            label: 'Músculos da mímica facial, estribo e nervo glossofaríngeo (NC IX)',
            explanation: 'Incorreto: o segundo arco dá origem aos músculos da mímica e estribo, mas seu nervo craniano é o facial (NC VII), não o glossofaríngeo.',
          },
          {
            id: 'arch3-glossopharyngeal-thymus',
            label: 'Cartilagens tireóidea e cricóidea, intrínsecos da laringe e nervo vago (NC X)',
            explanation: 'Incorreto: cartilagens e músculos laríngeos originam-se do quarto e sexto arcos, inervados por ramos do nervo vago.',
          },
          {
            id: 'arch4-vagus-constrictors',
            label: 'Glândula tireoide ectópica sublingual e meato acústico externo medial',
            explanation: 'Incorreto: a tireoide descende do forame cego do dorso lingual, e o meato acústico origina-se da 1ª fenda ectodérmica.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'How did structures that served as gills in aquatic ancestors transform into our human jaw, middle ear bones, and cervical glands?',
      title: 'Pharyngeal apparatus: arches, pouches, clefts, and craniofacial development',
      description: 'Analyze derivatives of the mesodermal arches, endodermal pouches, and ectodermal clefts during facial morphogenesis.',
      objective: 'Identify the embryonic contributions of pharyngeal arches, pouches, and clefts to facial bones, masticatory muscles, and neck glands.',
      stages: [
        {
          id: 'pharyngeal-arches',
          title: 'Pharyngeal arches and cranial neural crest cells',
          paragraphs: [
            'Beginning in the fourth gestational week, six bilateral pairs of mesodermal pharyngeal arches heavily colonized by cranial neural crest cells form flanking the foregut.',
            'The first (mandibular) pharyngeal arch yields Meckel’s cartilage, maxilla, mandible, malleus, incus, and the muscles of mastication, receiving motor and sensory innervation from the trigeminal nerve (CN V).',
          ],
          takeaway: 'Arch 1 generates the jaw, malleus, incus, and masticatory muscles innervated by CN V.',
          diagram: 'embryo',
        },
        {
          id: 'pouches-and-clefts',
          title: 'Endodermal pouches and ectodermal clefts',
          paragraphs: [
            'Internal pharyngeal pouches are lined by endoderm: pouch 1 forms the auditory tube and middle ear cavity, pouch 2 yields palatine tonsillar crypts, pouch 3 forms the thymus and inferior parathyroids, and pouch 4 develops into superior parathyroids.',
            'Only the first external ectodermal cleft persists postnatally as the external acoustic meatus. Clefts 2 through 4 are obliterated by the descending 2nd arch; failure of regression produces lateral cervical branchial cysts.',
          ],
          takeaway: 'Cleft 1 forms the external acoustic meatus; pouches yield auditory tube, tonsils, thymus, and parathyroids.',
          diagram: 'tissue',
        },
        {
          id: 'face-palate',
          title: 'Craniofacial and palatal morphogenesis',
          paragraphs: [
            'The human face assembles through the coordinated convergence and fusion of five prominences: the unpaired frontonasal prominence, bilateral maxillary swellings, and paired mandibular prominences.',
            'The secondary palate arises from palatal shelves elevating horizontally above the tongue to fuse along the midline. Incomplete fusion between prominences underlies cleft lip and cleft palate malformations.',
          ],
          takeaway: 'The face and secondary palate assemble from maxillary, mandibular, and frontonasal prominences.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which set of anatomical derivatives and associated cranial nerve originates directly from the embryonic first pharyngeal arch?',
        options: [
          {
            id: 'arch1-trigeminal-meckel',
            label: 'Muscles of mastication, mandible, malleus, and the trigeminal nerve (CN V)',
            explanation: 'Correct: the first pharyngeal arch contains Meckel’s cartilage, yields the malleus and incus, masticatory muscles, and is innervated by CN V.',
          },
          {
            id: 'arch2-facial-stapes',
            label: 'Muscles of facial expression, stapes, and the glossopharyngeal nerve (CN IX)',
            explanation: 'Incorrect: arch 2 forms facial expression muscles and the stapes, but its cranial nerve is the facial nerve (CN VII).',
          },
          {
            id: 'arch3-glossopharyngeal-thymus',
            label: 'Thyroid and cricoid laryngeal cartilages and the vagus nerve (CN X)',
            explanation: 'Incorrect: laryngeal cartilages and intrinsic laryngeal muscles arise from arches 4 and 6, innervated by branches of CN X.',
          },
          {
            id: 'arch4-vagus-constrictors',
            label: 'Ectopic sublingual thyroid tissue and medial external acoustic meatus',
            explanation: 'Incorrect: the thyroid develops as a ventral endodermal diverticulum at the foramen cecum, and the meatus arises from the 1st ectodermal cleft.',
          },
        ],
      },
    },
  },
});

export const embryologyCardiovascularLesson = lessonSchema.parse({
  id: 'embryology-cardiovascular',
  revision: 1,
  questionId: 'embryology-cardiovascular-q1',
  correctOptionId: 'fetal-shunts-foramen-ductus',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-ap2e-ch28-cardiovascular',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-3',
      section: 'Chapter 28 · Development and Inheritance: Fetal Circulation and Heart Development',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Embriologia',
      hook: 'Como o coração fetal se septa em quatro câmaras enquanto bate sem parar e desvia o sangue dos pulmões colapsados?',
      title: 'Embriologia cardiovascular: tubo cardíaco, septação e circulação fetal',
      description: 'Estude o dobramento do tubo cardíaco primitivo, a septação atrial e ventricular e os shunts vasculares fetais.',
      objective: 'Descrever o dobramento do tubo cardíaco primitivo, o mecanismo de septação interatrial por septo primum e secundum e o fechamento dos shunts fetais ao nascimento.',
      stages: [
        {
          id: 'heart-tube-looping',
          title: 'Tubo cardíaco primitivo e dobramento dextrógiro',
          paragraphs: [
            'O coração primitivo origina-se do mesoderma cardiogênico na 3ª semana, formando um tubo endotelial único que se divide em seio venoso, átrio primitivo, ventrículo primitivo, bulbo cardíaco e tronco arterioso.',
            'Entre os dias 23 e 28, o tubo cardíaco sofre curvatura dextrógira (looping cardíaco) para a direita e anteriormente, posicionando os futuros ventrículos caudalmente e os átrios cranialmente.',
          ],
          takeaway: 'O looping cardíaco dextrógiro estabelece a assimetria anatômica e o posicionamento das câmaras.',
          diagram: 'embryo',
        },
        {
          id: 'atrial-ventricular-septation',
          title: 'Septação interatrial e interventricular',
          paragraphs: [
            'A septação atrial ocorre pelo crescimento do septum primum em direção aos coxins endocárdicos, fenestrado pelo ostium secundum antes de ser coberto pelo septum secundum muscular mais rígido.',
            'O espaço restante entre o septum secundum e o primum forma o forame oval, que atua como válvula unidirecional permitindo a passagem de sangue oxigenado do átrio direito para o átrio esquerdo.',
          ],
          takeaway: 'O forame oval funciona como válvula interatrial unidirecional da direita para a esquerda.',
          diagram: 'valves',
        },
        {
          id: 'fetal-circulation-shunts',
          title: 'Circulação fetal e transição neonatal',
          paragraphs: [
            'O feto depende de três shunts vasculares: o ducto venoso (que desvia sangue oxigenado da placenta para a veia cava inferior poupando o fígado), o forame oval e o ducto arterioso (que conecta a artéria pulmonar à aorta).',
            'Na primeira respiração ao nascer, a queda da resistência vascular pulmonar e o aumento do retorno venoso ao átrio esquerdo fecham funcionalmente o forame oval e iniciam a constrição do ducto arterioso em ligamento arterioso.',
          ],
          takeaway: 'Três shunts (ducto venoso, forame oval e ducto arterioso) mantêm a perfusão sistêmica fetal.',
          diagram: 'pump',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a descrição dos shunts fisiológicos responsáveis pela circulação fetal no período intrauterino:',
        blank: 'O sangue oxigenado da veia umbilical desvia pelo ______ ao fígado, e atravessa o ______ para o átrio esquerdo.',
        options: [
          {
            id: 'fetal-shunts-foramen-ductus',
            label: 'ducto venoso / forame oval',
            explanation: 'Correto: o ducto venoso conecta a veia umbilical à veia cava inferior desviando dos sinusoides hepáticos, e o forame oval comunica os átrios direito e esquerdo.',
          },
          {
            id: 'fetal-shunts-arteriosus-venosus',
            label: 'ducto arterioso / canal atrioventricular',
            explanation: 'Incorreto: o ducto arterioso liga a artéria pulmonar à aorta descendente, não a veia umbilical à veia cava inferior.',
          },
          {
            id: 'fetal-shunts-sinus-septum',
            label: 'seio coronário / ostium primum persistente',
            explanation: 'Incorreto: o seio coronário drena a circulação miocárdica venosa; o shunt fisiológico interatrial valvulado é o forame oval.',
          },
          {
            id: 'fetal-shunts-ligament-urachus',
            label: 'ligamento falciforme / cordão uracal',
            explanation: 'Incorreto: o ligamento falciforme e o úraco são resquícios anatômicos fibróticos pós-natais, não condutos vasculares funcionais fetais.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'How can the fetal heart build four distinct pumping chambers while actively beating and completely bypassing fluid-filled lungs?',
      title: 'Cardiovascular embryology: heart tube, septation, and fetal circulation',
      description: 'Study primitive heart tube looping, atrial and ventricular septation, and fetal circulatory shunt physiology.',
      objective: 'Describe primitive heart tube dextral looping, atrial septation via septum primum and secundum, and neonatal shunt closures.',
      stages: [
        {
          id: 'heart-tube-looping',
          title: 'Primitive heart tube and dextral looping',
          paragraphs: [
            'The primitive heart coalesces from cardiogenic mesoderm in week 3, forming a single pulsating endothelial tube segmented into sinus venosus, primitive atrium, primitive ventricle, bulbus cordis, and truncus arteriosus.',
            'Between embryonic days 23 and 28, the elongating tube undergoes rightward looping (dextral looping), swinging the prospective ventricles ventrally and caudally while sweeping atria dorsocranially.',
          ],
          takeaway: 'Rightward heart tube looping establishes normal cardiac anatomical orientation and situs.',
          diagram: 'embryo',
        },
        {
          id: 'atrial-ventricular-septation',
          title: 'Interatrial and interventricular septation',
          paragraphs: [
            'Atrial septation initiates when the crescent-shaped septum primum grows toward endocardial cushions, fenestrated by ostium secundum before being shielded by the muscular septum secundum.',
            'The overlapping slit between septum secundum and the mobile flap of septum primum forms the foramen ovale, operating as an obligatory right-to-left interatrial shunt.',
          ],
          takeaway: 'The foramen ovale acts as a unidirectional flap-valve allowing right-to-left interatrial shunting.',
          diagram: 'valves',
        },
        {
          id: 'fetal-circulation-shunts',
          title: 'Fetal circulation and neonatal circulatory transition',
          paragraphs: [
            'Fetal perfusion relies on three vascular shunts: the ductus venosus (bypassing hepatic sinusoids), the foramen ovale, and the ductus arteriosus (diverting pulmonary artery flow directly into the descending aorta).',
            'With the newborn’s first breath, dramatic drops in pulmonary vascular resistance and surging left atrial venous return press septum primum against septum secundum, functionally closing the foramen ovale.',
          ],
          takeaway: 'Three fetal shunts (ductus venosus, foramen ovale, ductus arteriosus) sustain prenatal perfusion.',
          diagram: 'pump',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the statement describing physiological circulatory shunts during intrauterine fetal life:',
        blank: 'Oxygenated umbilical venous blood bypasses the liver through the ______ and crosses the ______ into the left atrium.',
        options: [
          {
            id: 'fetal-shunts-foramen-ductus',
            label: 'ductus venosus / foramen ovale',
            explanation: 'Correct: the ductus venosus shunts umbilical venous blood into the IVC bypassing the liver, and the foramen ovale shunts blood across the interatrial septum.',
          },
          {
            id: 'fetal-shunts-arteriosus-venosus',
            label: 'ductus arteriosus / atrioventricular canal',
            explanation: 'Incorrect: the ductus arteriosus connects the pulmonary artery to the aorta, not the umbilical vein to the IVC.',
          },
          {
            id: 'fetal-shunts-sinus-septum',
            label: 'coronary sinus / persistent ostium primum',
            explanation: 'Incorrect: the coronary sinus collects myocardial venous return; the physiologic interatrial flap valve is the foramen ovale.',
          },
          {
            id: 'fetal-shunts-ligament-urachus',
            label: 'falciform ligament / urachal cord',
            explanation: 'Incorrect: the falciform ligament and urachus are fibrous postnatal remnants, not patent embryonic vascular conduits.',
          },
        ],
      },
    },
  },
});

export const embryologyRespiratoryLesson = lessonSchema.parse({
  id: 'embryology-respiratory',
  revision: 1,
  questionId: 'embryology-respiratory-q1',
  correctOptionId: 'bochdalek-pleuroperitoneal-diaphragm',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-ap2e-ch28-respiratory',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-2',
      section: 'Chapter 28 · Development and Inheritance: Development of the Respiratory System and Diaphragm',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Embriologia',
      hook: 'Por que um feto prematuro de 24 semanas corre risco grave de asfixia se os pulmões já possuem brônquios formados?',
      title: 'Embriologia respiratória e diafragma: maturação e hérnias',
      description: 'Acompanhe as cinco fases de maturação pulmonar, a síntese do surfactante e o fechamento do diafragma.',
      objective: 'Classificar os períodos embriológicos do desenvolvimento pulmonar, o papel dos pneumócitos tipo II na produção de surfactante e a gênese da hérnia diafragmática congênita.',
      stages: [
        {
          id: 'lung-bud-development',
          title: 'Divertículo laringotraqueal e ramificação brônquica',
          paragraphs: [
            'Na 4ª semana gestacional, o divertículo laringotraqueal (broto pulmonar) evagina da parede ventral do intestino anterior endodérmico, separado do esôfago pelo septo traqueoesofágico.',
            'O broto bifurca-se em brônquios primários direito e esquerdo, que penetram no mesênquima esplâncnico adjacente e ramificam-se sucessivamente formando a árvore traqueobrônquica condutora.',
          ],
          takeaway: 'O broto pulmonar endodérmico surge do intestino anterior e ramifica-se no mesênquima torácico.',
          diagram: 'embryo',
        },
        {
          id: 'alveolar-maturation-surfactant',
          title: 'Estágios de maturação pulmonar e surfactante',
          paragraphs: [
            'O desenvolvimento pulmonar divide-se em fases: pseudoglandular (sem bronquíolos respiratórios), canalicular (formação de bronquíolos respiratórios e capilarização), sacular (sacos terminais) e alveolar definitiva.',
            'A partir da 24ª-26ª semana, pneumócitos tipo II iniciam a síntese de surfactante dipalmitoilfosfatidilcolina, reduzindo a tensão superficial alveolar e prevenindo atelectasias neonatais.',
          ],
          takeaway: 'Pneumócitos tipo II sintetizam surfactante pulmonar a partir da 24ª–26ª semana gestacional.',
          diagram: 'lung',
        },
        {
          id: 'diaphragm-and-hernia',
          title: 'Formação do diafragma e hérnia de Bochdalek',
          paragraphs: [
            'O diafragma toracoabdominal forma-se pela fusão de quatro estruturas: o septo transverso (centro tendíneo), as membranas pleuroperitoneais, o mesentério dorsal do esôfago e a parede corporal lateral.',
            'A falha no fechamento da membrana pleuroperitoneal esquerda resulta na hérnia diafragmática congênita de Bochdalek, com herniação de alças intestinais para o tórax e hipoplasia pulmonar grave.',
          ],
          takeaway: 'Defeito na membrana pleuroperitoneal gera hérnia de Bochdalek e hipoplasia pulmonar ipsilateral.',
          diagram: 'chest',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual falha embriológica específica na formação das estruturas do diafragma origina a hérnia diafragmática congênita posterolateral de Bochdalek?',
        options: [
          {
            id: 'bochdalek-pleuroperitoneal-diaphragm',
            label: 'Falha no fechamento da membrana pleuroperitoneal posterolateral (geralmente à esquerda)',
            explanation: 'Correto: a não fusão da membrana pleuroperitoneal com o septo transverso deixa o forame posterolateral de Bochdalek patente, permitindo herniação visceral e compressão pulmonar.',
          },
          {
            id: 'esophageal-hiatal-dilatation',
            label: 'Alargamento do hiato aórtico derivado da crista neural mesencefálica',
            explanation: 'Incorreto: o hiato aórtico não é formado por crista neural e não participa da patogênese da hérnia congênita de Bochdalek.',
          },
          {
            id: 'septum-transversum-aplasia',
            label: 'Ausência congênita bilateral de todas as lamelas do septo transverso anterior',
            explanation: 'Incorreto: o septo transverso forma o centro tendíneo anterior; a hérnia de Bochdalek é tipicamente posterolateral.',
          },
          {
            id: 'tracheoesophageal-fistula-bud',
            label: 'Incompleta canalização traqueal com fístula laringocutânea cervical',
            explanation: 'Incorreto: fístulas traqueoesofágicas decorrem de falhas no septo traqueoesofágico superior, não na partição diafragmática toracoabdominal.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'Why does a premature 24-week infant face life-threatening respiratory collapse despite having formed conducting bronchial trees?',
      title: 'Respiratory and diaphragm embryology: alveolar maturation and hernias',
      description: 'Trace the five stages of lung maturation, surfactant production by type II pneumocytes, and diaphragmatic assembly.',
      objective: 'Classify pulmonary developmental stages, explain surfactant mechanics by type II pneumocytes, and describe congenital diaphragmatic hernia etiology.',
      stages: [
        {
          id: 'lung-bud-development',
          title: 'Laryngotracheal diverticulum and bronchial branching',
          paragraphs: [
            'In week 4, the respiratory diverticulum (lung bud) evaginates from the ventral floor of the endodermal foregut, demarcated from the esophagus by longitudinal tracheoesophageal ridges.',
            'The distal bud bifurcates into right and left primary bronchial buds, which invade splanchnic mesenchyme and undergo iterative dichotomous branching to generate the conducting bronchial tree.',
          ],
          takeaway: 'The endodermal lung bud sprouts from the ventral foregut into thoracic splanchnic mesenchyme.',
          diagram: 'embryo',
        },
        {
          id: 'alveolar-maturation-surfactant',
          title: 'Pulmonary maturation stages and surfactant synthesis',
          paragraphs: [
            'Pulmonary genesis proceeds through pseudoglandular (conducting airways only), canalicular (respiratory bronchioles and capillarization), saccular (terminal primitive air sacs), and postnatal alveolar stages.',
            'Beginning around weeks 24 to 26, differentiating type II pneumocytes produce dipalmitoylphosphatidylcholine surfactant, lowering alveolar surface tension to prevent end-expiratory collapse.',
          ],
          takeaway: 'Type II pneumocytes commence pulmonary surfactant secretion around weeks 24–26 gestation.',
          diagram: 'lung',
        },
        {
          id: 'diaphragm-and-hernia',
          title: 'Diaphragm assembly and congenital diaphragmatic hernia',
          paragraphs: [
            'The thoracoabdominal diaphragm coalesces from four embryonic precursors: the septum transversum (central tendon), bilateral pleuroperitoneal membranes, the esophageal dorsal mesentery, and lateral body wall muscular ingrowth.',
            'Failure of the posterolateral pleuroperitoneal membrane to seal the pericardioperitoneal canal (most commonly on the left) causes Bochdalek hernia, herniating abdominal viscera and driving fatal pulmonary hypoplasia.',
          ],
          takeaway: 'Pleuroperitoneal membrane closure failure causes posterolateral Bochdalek hernia and hypoplasia.',
          diagram: 'chest',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which embryonic defect during diaphragmatic partition development causes the classic posterolateral congenital diaphragmatic hernia of Bochdalek?',
        options: [
          {
            id: 'bochdalek-pleuroperitoneal-diaphragm',
            label: 'Failure of closure of the posterolateral pleuroperitoneal membrane (predominantly left-sided)',
            explanation: 'Correct: incomplete closure of the pleuroperitoneal membrane leaves the posterolateral canal of Bochdalek patent, allowing abdominal organs to invade the thoracic cavity.',
          },
          {
            id: 'esophageal-hiatal-dilatation',
            label: 'Isolated muscular enlargement of the aortic hiatus derived from cranial neural crest',
            explanation: 'Incorrect: the aortic hiatus is an anatomical aperture in the crura, not the embryonic site of Bochdalek herniation.',
          },
          {
            id: 'septum-transversum-aplasia',
            label: 'Complete bilateral agenesis of the anterior septum transversum mesenchyme',
            explanation: 'Incorrect: the septum transversum forms the anterior central tendon; Bochdalek hernias are characteristically posterolateral.',
          },
          {
            id: 'tracheoesophageal-fistula-bud',
            label: 'Tracheoesophageal septum non-fusion with blind laryngeal atresia',
            explanation: 'Incorrect: tracheoesophageal septum anomalies produce tracheoesophageal fistulas, not thoracoabdominal diaphragmatic defects.',
          },
        ],
      },
    },
  },
});

export const embryologyDigestiveLesson = lessonSchema.parse({
  id: 'embryology-digestive',
  revision: 1,
  questionId: 'embryology-digestive-q1',
  correctOptionId: 'midgut-270-counterclockwise-rotation',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-ap2e-ch28-digestive',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-2',
      section: 'Chapter 28 · Development and Inheritance: Development of the Gastrointestinal Tract',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Embriologia',
      hook: 'Como mais de 6 metros de intestino conseguem caber no abdome embrionário sem torcer seus vasos nutricionais vitais?',
      title: 'Embriologia do sistema digestório: rotação do intestino e derivados',
      description: 'Explore a regionalização em intestino anterior, médio e posterior, e a rotação de 270° sobre a artéria mesentérica superior.',
      objective: 'Descrever a vascularização dos três segmentos do tubo digestivo, o processo de herniação fisiológica e a rotação anti-horária de 270° do intestino médio.',
      stages: [
        {
          id: 'foregut-derivatives',
          title: 'Intestino anterior e rotações gástricas',
          paragraphs: [
            'O intestino anterior estende-se da membrana orofaríngea até a porção proximal do duodeno, sendo nutrido pelo tronco celíaco e originando o estômago, fígado, vesícula biliar e pâncreas.',
            'O estômago primordial dilata-se e sofre uma rotação de 90° no sentido horário em torno do seu eixo longitudinal, posicionando sua curvatura maior à esquerda e deslocando o nervo vago esquerdo para a face anterior.',
          ],
          takeaway: 'Intestino anterior (tronco celíaco) inclui estômago, que gira 90° horário posicionando o vago esquerdo anteriormente.',
          diagram: 'embryo',
        },
        {
          id: 'midgut-rotation-herniation',
          title: 'Intestino médio e rotação de 270° anti-horária',
          paragraphs: [
            'O intestino médio é suprido pela artéria mesentérica superior (AMS). Na 6ª semana, o rápido crescimento intestinal força a herniação fisiológica das alças para dentro do celoma do cordão umbilical.',
            'Durante a herniação e o subsequente retorno ao abdome na 10ª semana, a alça do intestino médio sofre uma rotação total de 270° no sentido anti-horário em torno do eixo da AMS.',
          ],
          takeaway: 'O intestino médio hernia e roda 270° anti-horário em torno do eixo vascular da AMS.',
          diagram: 'intestine',
        },
        {
          id: 'hindgut-cloaca',
          title: 'Intestino posterior e septação cloacal',
          paragraphs: [
            'O intestino posterior é nutrido pela artéria mesentérica inferior (AMI) e origina o terço distal do cólon transverso, cólon descendente, sigmoide e reto proximal.',
            'Sua extremidade distal termina na cloaca, que é dividida pelo septo urorretal em seio urogenital ventralmente e canal anorretal dorsalmente. A linha pectinada do canal anal marca o limite entre endoderma embrionário e proctódeo ectodérmico.',
          ],
          takeaway: 'O septo urorretal divide a cloaca em canal anorretal dorsal e seio urogenital ventral.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o sentido e a amplitude angular completa da rotação intestinal sofrida pela alça do intestino médio em torno da artéria mesentérica superior?',
        options: [
          {
            id: 'midgut-270-counterclockwise-rotation',
            label: 'Rotação total de 270° no sentido anti-horário em torno do eixo da artéria mesentérica superior',
            explanation: 'Correto: a alça realiza primeiros 90° anti-horários durante a herniação na 6ª semana e mais 180° anti-horários ao retornar ao abdome na 10ª semana (total de 270° anti-horário).',
          },
          {
            id: 'midgut-180-clockwise-rotation',
            label: 'Rotação de 180° no sentido horário em torno da veia cava inferior',
            explanation: 'Incorreto: a rotação ocorre no sentido anti-horário e toma como eixo anatômico a artéria mesentérica superior (AMS), perfazendo 270° no total.',
          },
          {
            id: 'midgut-360-coeliac-rotation',
            label: 'Rotação de 360° em sentido horário ao redor do tronco celíaco proximal',
            explanation: 'Incorreto: o tronco celíaco vasculariza o intestino anterior, e a rotação fisiológica do intestino médio não completa 360° em sentido horário.',
          },
          {
            id: 'midgut-90-horizontal-rotation',
            label: 'Deslocamento linear único de 90° sem rotação axial vascular',
            explanation: 'Incorreto: a rotação do intestino médio é um processo tridimensional estritamente rotacional e helicoidal fundamental para fixar o ceco na fossa ilíaca direita.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'How can more than 20 feet of developing bowel loop pack securely into the fetal abdomen without strangling its mesenteric arterial lifeline?',
      title: 'Digestive system embryology: gut rotation and derivatives',
      description: 'Explore anatomical division into foregut, midgut, and hindgut, and the crucial 270° counterclockwise midgut rotation.',
      objective: 'Outline vascular territories of the gut segments, describe physiologic umbilical herniation, and map the 270° counterclockwise midgut rotation.',
      stages: [
        {
          id: 'foregut-derivatives',
          title: 'Foregut derivatives and gastric rotational axis',
          paragraphs: [
            'The foregut stretches from the oropharyngeal membrane to the mid-duodenum, vascularized by the celiac trunk to yield esophagus, stomach, liver, gallbladder, and pancreas.',
            'The stomach primordium dilates fusiformly and rotates 90° clockwise along its longitudinal axis, swinging its greater curvature to the left and pulling the left vagus nerve into an anterior position.',
          ],
          takeaway: 'Foregut (celiac axis) organs include the stomach, rotating 90° clockwise to position the left vagus nerve anteriorly.',
          diagram: 'embryo',
        },
        {
          id: 'midgut-rotation-herniation',
          title: 'Midgut physiologic herniation and 270° counterclockwise rotation',
          paragraphs: [
            'The midgut is fed by the superior mesenteric artery (SMA). During week 6, dramatic hepatic expansion forces physiologic herniation of the midgut loop into the extraembryonic umbilical cord coelom.',
            'Over the course of herniation and return to the abdominal cavity by week 10, the midgut executes an aggregate 270° counterclockwise rotation around the central axis of the SMA.',
          ],
          takeaway: 'The midgut executes an aggregate 270° counterclockwise rotation centered on the SMA vascular axis.',
          diagram: 'intestine',
        },
        {
          id: 'hindgut-cloaca',
          title: 'Hindgut partition and cloacal septation',
          paragraphs: [
            'The hindgut is supplied by the inferior mesenteric artery (IMA), forming the distal third of the transverse colon, descending colon, sigmoid colon, and proximal rectum.',
            'Its blind caudal terminus, the cloaca, is bifurcated by the descending urorectal septum into an anterior urogenital sinus and posterior anorectal canal, meeting at the future perineal body.',
          ],
          takeaway: 'The urorectal septum divides the cloaca into a dorsal anorectal canal and ventral urogenital sinus.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the precise direction and total degree of rotation executed by the embryonic midgut loop around the superior mesenteric artery?',
        options: [
          {
            id: 'midgut-270-counterclockwise-rotation',
            label: 'Total 270° counterclockwise rotation centered around the superior mesenteric artery axis',
            explanation: 'Correct: the loop rotates 90° counterclockwise during physiologic herniation in week 6, followed by another 180° counterclockwise during reduction in week 10 (total 270°).',
          },
          {
            id: 'midgut-180-clockwise-rotation',
            label: '180° clockwise rotation pivoting directly on the inferior vena cava',
            explanation: 'Incorrect: midgut rotation proceeds in a counterclockwise direction and uses the superior mesenteric artery as its physical rotational spindle.',
          },
          {
            id: 'midgut-360-coeliac-rotation',
            label: '360° clockwise rotation enveloping the origin of the celiac trunk',
            explanation: 'Incorrect: the celiac artery supplies the foregut; midgut rotation spans 270° counterclockwise around the SMA.',
          },
          {
            id: 'midgut-90-horizontal-rotation',
            label: 'Simple 90° translational displacement without vascular axial rotation',
            explanation: 'Incorrect: midgut rotation is a complex three-dimensional rotational sequence essential for placing the cecum in the right lower quadrant.',
          },
        ],
      },
    },
  },
});

export const embryologyUrogenitalLesson = lessonSchema.parse({
  id: 'embryology-urogenital',
  revision: 1,
  questionId: 'embryology-urogenital-q1',
  correctOptionId: 'sry-amh-mullerian-regression',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'embryology',
  sources: [
    {
      id: 'openstax-ap2e-ch28-urogenital',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-4',
      section: 'Chapter 28 · Development and Inheritance: Development of the Urinary and Reproductive Systems',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Embriologia',
      hook: 'Como o embrião indiferenciado decide ativar os ductos masculinos de Wolff ou os ductos femininos de Müller?',
      title: 'Embriologia urogenital: metanefro e diferenciação sexual',
      description: 'Estude as três fases renais (pronefro, mesonefro, metanefro) e os mecanismos genéticos da determinação sexual.',
      objective: 'Distinguir os três sistemas renais embrionários e explicar a indução recíproca entre broto ureteral e blastema metanéfrico, bem como a ação do gene SRY e AMH na diferenciação sexual.',
      stages: [
        {
          id: 'nephric-stages-pronephros-metanephros',
          title: 'Sistemas renais: pronefro, mesonefro e metanefro',
          paragraphs: [
            'O aparelho urinário desenvolve-se sucessivamente a partir do mesoderma intermediário em três conjuntos temporais: o pronefro cervical rudimentar (que logo regride), o mesonefro toracolombar funcional transitório e o metanefro definitivo.',
            'Enquanto o pronefro e a maioria dos túbulos mesonéfricos degeneram, o ducto mesonéfrico (de Wolff) é mantido em embriões masculinos para formar o epidídimo, ducto deferente e vesículas seminais.',
          ],
          takeaway: 'O rim definitivo origina-se do metanefro a partir da quinta semana embrionária.',
          diagram: 'kidney',
        },
        {
          id: 'ureteric-bud-blastema',
          title: 'Indução recíproca entre broto ureteral e blastema metanéfrico',
          paragraphs: [
            'O metanefro origina-se de duas fontes embriológicas: o broto ureteral (evaginação do ducto mesonéfrico) e o blastema metanefrogênico (massa mesenquimal adjacente).',
            'Ocorre indução recíproca: o broto ureteral penetra o blastema e ramifica-se para formar o ureter, pelve renal, cálices e túbulos coletores; o blastema metanéfrico, em resposta, diferencia-se nos néfrons funcionais (glomérulos até túbulo contorcido distal).',
          ],
          takeaway: 'Broto ureteral forma o sistema coletor; blastema metanéfrico forma os néfrons funcionais.',
          diagram: 'embryo',
        },
        {
          id: 'sexual-differentiation-ducts',
          title: 'Diferenciação sexual: Wolff, Müller, SRY e AMH',
          paragraphs: [
            'No sexo cromossômico masculino (XY), a proteína TDF expressa pelo gene SRY no cromossomo Y induz o desenvolvimento testicular.',
            'Células de Sertoli fetais secretam hormônio antimülleriano (AMH), provocando regressão dos ductos paramesonéfricos de Müller. Células de Leydig secretam testosterona, estimulando a sobrevivência e diferenciação dos ductos mesonéfricos de Wolff em genitália interna masculina.',
          ],
          takeaway: 'SRY ativa testículos: AMH induz regressão de Müller e testosterona preserva ductos de Wolff.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o mecanismo molecular e hormonal responsável pela regressão dos ductos paramesonéfricos (de Müller) durante a diferenciação sexual masculina?',
        options: [
          {
            id: 'sry-amh-mullerian-regression',
            label: 'Secreção de hormônio antimülleriano (AMH) pelas células de Sertoli fetais orientadas pelo gene SRY',
            explanation: 'Correto: a proteína SRY induz diferenciação testicular; as células de Sertoli produzem AMH (ou MIF), que causa apoptose e regressão dos ductos paramesonéfricos de Müller.',
          },
          {
            id: 'testosterone-aromatase-degradation',
            label: 'Conversão periférica de estrogênio em progesterona inibitória pelo mesênquima urogenital',
            explanation: 'Incorreto: o processo é ativo no feto masculino via AMH; a ausência de AMH no feto feminino permite que os ductos de Müller formem trompas, útero e terço superior da vagina.',
          },
          {
            id: 'dihydrotestosterone-wolffian-arrest',
            label: 'Supressão dos túbulos de Wolff por di-hidrotestosterona (DHT) originada na zona glomerulosa',
            explanation: 'Incorreto: a di-hidrotestosterona (DHT) atua na masculinização da genitália externa (pênis e bolsa escrotal), não na regressão de Müller.',
          },
          {
            id: 'ureteric-bud-growth-factor',
            label: 'Migração de células da crista neural inibindo a expressão do receptor de androgênios',
            explanation: 'Incorreto: o sistema mülleriano responde diretamente a hormônios peptídicos e esteroides gonadais, sem envolvimento de células da crista neural.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Embryology',
      hook: 'How does an indifferent bipotential embryo decide whether to preserve male Wolffian ducts or female Müllerian ducts?',
      title: 'Urogenital embryology: metanephros and sexual differentiation',
      description: 'Study the three renal stages (pronephros, mesonephros, metanephros) and genetic switches governing sexual dimorphism.',
      objective: 'Distinguish the three embryonic renal systems, describe ureteric bud-metanephric blastema induction, and explain SRY and AMH actions.',
      stages: [
        {
          id: 'nephric-stages-pronephros-metanephros',
          title: 'Sequential renal systems: pronephros, mesonephros, metanephros',
          paragraphs: [
            'The urinary system develops successively from intermediate mesoderm in three cranial-to-caudal waves: the rudimentary non-functional pronephros, the transiently functional mesonephros, and the definitive metanephros.',
            'While the pronephros and most mesonephric tubules degenerate, the paired mesonephric (Wolffian) ducts are retained in males under androgen stimulation to build the epididymis, ductus deferens, and seminal vesicles.',
          ],
          takeaway: 'The definitive adult human kidney develops from the metanephros starting in week 5.',
          diagram: 'kidney',
        },
        {
          id: 'ureteric-bud-blastema',
          title: 'Reciprocal induction: ureteric bud and metanephric blastema',
          paragraphs: [
            'The metanephros arises through dynamic reciprocal induction between the ureteric bud (an epithelial outgrowth of the caudal Wolffian duct) and the unsegmented metanephric blastema mesenchyme.',
            'The invading ureteric bud branches to form the ureter, renal pelvis, calyces, and collecting duct system; in turn, it induces the surrounding metanephric blastema to condense into nephrons (Bowman capsule through distal convoluted tubule).',
          ],
          takeaway: 'The ureteric bud forms collecting conduits; the metanephric blastema synthesizes functional nephrons.',
          diagram: 'embryo',
        },
        {
          id: 'sexual-differentiation-ducts',
          title: 'Sexual differentiation: Wolff, Müller, SRY, and AMH',
          paragraphs: [
            'In genetic males (46,XY), expression of testis-determining factor encoded by the SRY gene on the Y chromosome initiates testicular development within the gonadal ridges.',
            'Developing Sertoli cells secrete anti-Müllerian hormone (AMH), causing rapid apoptosis and regression of the paramesonephric (Müllerian) ducts. Leydig cells secrete testosterone to stabilize the mesonephric (Wolffian) ducts.',
          ],
          takeaway: 'SRY triggers testis formation: AMH drives Müllerian regression while testosterone preserves Wolffian ducts.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which hormonal and cellular mechanism drives the complete regression of paramesonephric (Müllerian) ducts in the developing male fetus?',
        options: [
          {
            id: 'sry-amh-mullerian-regression',
            label: 'Anti-Müllerian hormone (AMH) secreted by fetal Sertoli cells directed by the SRY gene',
            explanation: 'Correct: SRY drives testis differentiation; fetal Sertoli cells produce AMH (Müllerian-inhibiting substance), causing bilateral regression of Müllerian female ductal primordia.',
          },
          {
            id: 'testosterone-aromatase-degradation',
            label: 'Peripheral aromatization of estrogen into inhibitory progesterone within the genital ridge',
            explanation: 'Incorrect: paramesonephric regression is mediated actively by AMH; in females lacking AMH, Müllerian ducts persist to form the uterus, fallopian tubes, and upper vagina.',
          },
          {
            id: 'dihydrotestosterone-wolffian-arrest',
            label: 'Dihydrotestosterone (DHT) suppression of Wolffian tubes originating from the adrenal cortex',
            explanation: 'Incorrect: DHT mediates external male genital differentiation (penis and scrotum), while testosterone itself stabilizes internal Wolffian ducts.',
          },
          {
            id: 'ureteric-bud-growth-factor',
            label: 'Cranial neural crest migration blocking the transcription of genital androgen receptors',
            explanation: 'Incorrect: genital duct differentiation is controlled by steroid and glycoprotein hormones without cranial neural crest migration.',
          },
        ],
      },
    },
  },
});
