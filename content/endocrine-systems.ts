import { lessonSchema } from '../src/contracts/learning';

export const endocrineGhProlactinLesson = lessonSchema.parse({
  id: 'endocrine-gh-prolactin',
  revision: 1,
  questionId: 'endocrine-gh-prolactin-q1',
  correctOptionId: 'gh-igf1-somatomedin',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch17-pituitary',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-3-the-pituitary-gland-and-hypothalamus',
      section: 'Chapter 17 · Pituitary Gland: Growth Hormone, Prolactin, and Posterior Hormones',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Como um hormônio hipofisário pulsátil durante a noite faz os ossos crescerem e queima gordura poupando proteínas?',
      title: 'Hormônio do crescimento (GH), prolactina e neuro-hipófise',
      description: 'Explore o eixo somatotrófico (GHRH, GH, IGF-1), a regulação dopaminérgica da prolactina e os hormônios da neuro-hipófise (ocitocina e ADH).',
      objective: 'Analisar as ações metabólicas diretas do GH versus as ações mediadas pelo IGF-1 hepático e o tônus inibitório sobre a prolactina.',
      stages: [
        {
          id: 'gh-axis-somatomedin',
          title: 'O eixo somatotrófico e o papel do IGF-1',
          paragraphs: [
            'O hormônio do crescimento (GH ou somatotrofina) é secretado pelos somatotrofos da adeno-hipófise em pulsos (especialmente nas fases de sono de ondas lentas N3), estimulado pelo GHRH hipotalâmico e inibido pela somatostatina.',
            'As ações anabólicas de crescimento longitudinal ósseo e hipertrofia tecidual são mediadas predominantemente pelo fator de crescimento semelhante à insulina tipo 1 (IGF-1 ou somatomedina C), sintetizado no fígado sob comando do GH.',
          ],
          takeaway: 'O GH estimula o fígado a produzir IGF-1, que comanda o crescimento longitudinal e a síntese proteica.',
          diagram: 'endocrine',
        },
        {
          id: 'gh-metabolic-actions',
          title: 'Ações metabólicas diretas do GH',
          paragraphs: [
            'Diferente de suas ações anabólicas via IGF-1, o GH possui ações metabólicas diretas anti-insulínicas (diabetogênicas).',
            'Ele estimula a lipólise nos adipócitos liberando ácidos graxos livres, reduz a captação de glicose mediada por GLUT4 no músculo esquelético e aumenta a gliconeogênese hepática, preservando glicose para o cérebro em períodos de jejum.',
          ],
          takeaway: 'O GH promove lipólise e poupa glicose ao antagonizar a captação periférica de glicose.',
          diagram: 'bone',
        },
        {
          id: 'prolactin-and-oxytocin',
          title: 'Prolactina e ocitocina: lactogênese e ejeção',
          paragraphs: [
            'A prolactina é sintetizada pelos lactotrofos adeno-hipofisários e está sob controle tônico inibitório predominante da dopamina hipotalâmica (fator inibidor da prolactina). A prolactina estimula a síntese e a produção de leite nas glândulas mamárias (lactogênese).',
            'A ocitocina, sintetizada no hipotálamo e armazenada na neuro-hipófise, é liberada em resposta à sucção do mamilo e à distensão do colo uterino (reflexo de Ferguson). Ela contrai as células mioepiteliais mamárias promovendo a ejeção ativa do leite e comanda contrações uterinas no parto.',
          ],
          takeaway: 'A prolactina produz leite sob freio tônico da dopamina; a ocitocina contrai células mioepiteliais para ejetar o leite.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo é o principal responsável por mediar o crescimento longitudinal dos ossos longos promovido pelo hormônio do crescimento (GH)?',
        options: [
          {
            id: 'gh-igf1-somatomedin',
            label: 'Estimulação hepática para a síntese e liberação de IGF-1 (somatomedina C)',
            explanation: 'Correto: o IGF-1 hepático e parácrino estimula a proliferação de condrócitos nas placas epifisárias de crescimento dos ossos.',
          },
          {
            id: 'direct-cortisol-inhibition',
            label: 'Inibição direta da secreção de cortisol na zona fasciculada adrenal',
            explanation: 'Incorreto: o GH não inibe a zona fasciculada; o eixo corticotrófico é regulado de forma independente pelo ACTH.',
          },
          {
            id: 'prolactin-co-secretion',
            label: 'Cossecreção obrigatória de prolactina nos osteoblastos da díploe craniana',
            explanation: 'Incorreto: a prolactina é produzida na adeno-hipófise e atua nas mamas, não sendo a mediadora do crescimento esquelético do GH.',
          },
          {
            id: 'insulin-secretion-arrest',
            label: 'Parada completa da síntese de insulina nas células beta pancreáticas',
            explanation: 'Incorreto: embora o GH antagonize a ação periférica da insulina, ele não interrompe a produção pancreática hormonal.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'How does an episodic nocturnal pituitary hormone drive longitudinal bone growth while simultaneously mobilizing fat and sparing muscle?',
      title: 'Growth hormone (GH), prolactin, and the posterior pituitary',
      description: 'Explore the somatotropic axis (GHRH, GH, IGF-1), dopamine inhibition of prolactin, and posterior pituitary neurohormones (oxytocin and ADH).',
      objective: 'Analyze direct metabolic actions of GH versus hepatic IGF-1-mediated skeletal effects and understand dopaminergic control of prolactin.',
      stages: [
        {
          id: 'gh-axis-somatomedin',
          title: 'The somatotropic axis and the role of IGF-1',
          paragraphs: [
            'Growth hormone (GH or somatotropin) is secreted by anterior pituitary somatotrophs in episodic pulses (peaking prominently during slow-wave N3 deep sleep), stimulated by hypothalamic GHRH and suppressed by somatostatin.',
            'Somatic anabolism, chondrocyte proliferation, and longitudinal bone growth are executed primarily through insulin-like growth factor 1 (IGF-1 or somatomedin C), transcribed and secreted by hepatocytes under GH stimulation.',
          ],
          takeaway: 'GH prompts hepatic synthesis of IGF-1, which drives chondrocyte mitosis and epiphyseal linear bone growth.',
          diagram: 'endocrine',
        },
        {
          id: 'gh-metabolic-actions',
          title: 'Direct metabolic actions of growth hormone',
          paragraphs: [
            'Distinct from its IGF-1-mediated growth actions, GH possesses direct insulin-antagonistic (diabetogenic) metabolic actions on peripheral tissues.',
            'It accelerates adipocyte lipolysis to mobilize free fatty acids, downregulates insulin-stimulated GLUT4 glucose uptake in skeletal muscle, and increases hepatic gluconeogenesis, ensuring glucose availability for the central nervous system during fasting.',
          ],
          takeaway: 'GH stimulates lipolysis and impairs peripheral glucose disposal to spare carbohydrates during food deprivation.',
          diagram: 'bone',
        },
        {
          id: 'prolactin-and-oxytocin',
          title: 'Prolactin and oxytocin: milk synthesis and milk ejection',
          paragraphs: [
            'Prolactin is synthesized by anterior pituitary lactotrophs and remains under dominant, tonic inhibitory control by tuberoinfundibular hypothalamic dopamine. Prolactin primes mammary alveolar development and drives milk synthesis (lactogenesis).',
            'Oxytocin, produced in paraventricular and supraoptic hypothalamic nuclei and released from the posterior pituitary, is triggered by suckling or cervical stretch (Ferguson reflex). It contracts myoepithelial cells surrounding mammary alveoli to mediate milk ejection (milk letdown) and stimulates uterine myometrial labor contractions.',
          ],
          takeaway: 'Prolactin drives milk synthesis under tonic dopamine inhibition; oxytocin contracts myoepithelial cells for milk ejection.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which mechanism predominantly mediates linear bone growth orchestrated by growth hormone (GH)?',
        options: [
          {
            id: 'gh-igf1-somatomedin',
            label: 'Hepatic stimulation of insulin-like growth factor 1 (IGF-1 / somatomedin C) synthesis',
            explanation: 'Correct: circulating hepatic and local paracrine IGF-1 stimulates chondrocyte proliferation and hypertrophy at epiphyseal plates.',
          },
          {
            id: 'direct-cortisol-inhibition',
            label: 'Direct suppression of adrenal cortisol output across the zona fasciculata',
            explanation: 'Incorrect: GH does not shut down adrenal glucocorticoid synthesis; cortisol is regulated by pituitary ACTH.',
          },
          {
            id: 'prolactin-co-secretion',
            label: 'Obligate co-secretion of prolactin by cranial osteoblasts in epiphyseal cartilage',
            explanation: 'Incorrect: prolactin is an anterior pituitary hormone specialized in lactation, not skeletal elongation.',
          },
          {
            id: 'insulin-secretion-arrest',
            label: 'Complete shutdown of pancreatic beta-cell insulin synthesis',
            explanation: 'Incorrect: while GH exerts anti-insulin metabolic effects on peripheral tissues, it does not stop insulin production.',
          },
        ],
      },
    },
  },
});

export const endocrineMaleReproductiveLesson = lessonSchema.parse({
  id: 'endocrine-male-reproductive',
  revision: 1,
  questionId: 'endocrine-male-reproductive-q1',
  correctOptionId: 'sertoli-fsh-leydig-lh',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch27-male',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-1-anatomy-and-physiology-of-the-male-reproductive-system',
      section: 'Chapter 27 · Male Reproductive Endocrinology and Spermatogenesis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Como duas células testiculares vizinhas trabalham em equipe para produzir milhões de espermatozoides por dia?',
      title: 'Fisiologia reprodutiva masculina: eixo HHG, Sertoli e Leydig',
      description: 'Compreenda o eixo hipotálamo-hipófise-gonadal masculino, a ação do FSH nas células de Sertoli, do LH nas células de Leydig e a síntese de testosterona.',
      objective: 'Distinguir as funções endócrinas das células de Sertoli e de Leydig e explicar o feedback negativo da testosterona e da inibina.',
      stages: [
        {
          id: 'hpg-axis-male-pulsatility',
          title: 'Pulsatilidade do GnRH e as gonadotrofinas',
          paragraphs: [
            'O hipotálamo secreta o hormônio liberador de gonadotrofinas (GnRH) em pulsos rítmicos a cada 90 a 120 minutos nos vasos porta-hipofisários. A pulsatilidade é essencial: o estímulo contínuo dessensibiliza receptores e desliga o eixo reprodutivo.',
            'O GnRH estimula os gonadotrofos da adeno-hipófise a secretarem duas glicoproteínas fundamentais: o hormônio luteinizante (LH) e o hormônio folículo-estimulante (FSH).',
          ],
          takeaway: 'A secreção pulsátil de GnRH estimula a liberação adeno-hipofisária coordenada de LH e FSH.',
          diagram: 'endocrine',
        },
        {
          id: 'leydig-testosterone-synthesis',
          title: 'Células de Leydig e produção de testosterona',
          paragraphs: [
            'As células de Leydig (intersticiais) localizam-se no tecido conectivo entre os túbulos seminíferos e expressam receptores para o LH.',
            'O estímulo do LH ativa a proteína StAR e cliva o colesterol em pregnenolona, impulsionando a síntese de testosterona. A testosterona promove caracteres sexuais secundários masculinos, anabolismo muscular e exerce feedback negativo sobre a hipófise (LH) e hipotálamo (GnRH).',
          ],
          takeaway: 'O LH estimula as células de Leydig a sintetizarem testosterona; a testosterona inibe LH e GnRH.',
          diagram: 'dna',
        },
        {
          id: 'sertoli-spermatogenesis-barrier',
          title: 'Células de Sertoli: suporte e barreira hematotesticular',
          paragraphs: [
            'As células de Sertoli revestem os túbulos seminíferos, agindo como células nutridoras da espermatogênese sob estímulo do FSH.',
            'Unidas por junções de oclusão estreitas, elas formam a barreira hematotesticular que protege os espermatozoides haploides contra autoataque imunológico, secretam a proteína ligadora de andrógenos (ABP) para concentrar testosterona intraluminal e liberam inibina B para feedback inibitório seletivo sobre o FSH.',
          ],
          takeaway: 'As células de Sertoli (estimuladas por FSH) nutrem espermatozoides, formam a barreira hematotesticular e secretam inibina B.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a correlação entre as gonadotrofinas adeno-hipofisárias e suas respectivas células-alvo testiculares:',
        blank: 'No testículo, o FSH estimula as células de ______ enquanto o LH estimula as células de ______.',
        options: [
          {
            id: 'sertoli-fsh-leydig-lh',
            label: 'Sertoli e Leydig',
            explanation: 'Correto: mnemônica clássica: FSH estimula Sertoli (suporte/espermatogênese); LH estimula Leydig (lipídeos/testosterona).',
          },
          {
            id: 'leydig-fsh-sertoli-lh',
            label: 'Leydig e Sertoli',
            explanation: 'Incorreto: as associações estão invertidas; o LH estimula Leydig e o FSH estimula Sertoli.',
          },
          {
            id: 'chromaffin-fsh-chief-lh',
            label: 'cromafins e principais',
            explanation: 'Incorreto: células cromafins pertencem à medula adrenal e células principais às paratireoides.',
          },
          {
            id: 'granulosa-fsh-theca-lh',
            label: 'granulosa e teca',
            explanation: 'Incorreto: granulosa e teca são as células ovarianas equivalentes femininas, não testiculares.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'How do two neighboring testicular cell lineages team up to manufacture hundreds of millions of viable sperm every day?',
      title: 'Male reproductive physiology: HPG axis, Sertoli, and Leydig cells',
      description: 'Understand the male hypothalamic-pituitary-gonadal axis, FSH actions on Sertoli cells, LH stimulation of Leydig cells, and testosterone synthesis.',
      objective: 'Distinguish the endocrine functions of Sertoli and Leydig cells and explain the negative feedback of testosterone and inhibin.',
      stages: [
        {
          id: 'hpg-axis-male-pulsatility',
          title: 'Pulsatile GnRH and anterior gonadotrophs',
          paragraphs: [
            'The hypothalamus releases gonadotropin-releasing hormone (GnRH) in discrete pulses every 90 to 120 minutes into the hypophyseal portal vasculature. Pulsatility is essential; continuous GnRH exposure downregulates receptors and arrests gonadal function.',
            'GnRH prompts anterior pituitary gonadotrophs to synthesize and exocytose two heterodimeric glycoprotein hormones: luteinizing hormone (LH) and follicle-stimulating hormone (FSH).',
          ],
          takeaway: 'Pulsatile hypothalamic GnRH drive directs anterior pituitary secretion of LH and FSH.',
          diagram: 'endocrine',
        },
        {
          id: 'leydig-testosterone-synthesis',
          title: 'Leydig cells and testosterone biosynthesis',
          paragraphs: [
            'Interstitial cells of Leydig occupy the connective stroma wedged between adjacent seminiferous tubules, expressing abundant LH receptors.',
            'LH signaling activates the steroidogenic acute regulatory protein (StAR) to import cholesterol into mitochondria, generating testosterone. Circulating testosterone promotes secondary sex characteristics, muscle anabolism, and exerts negative feedback on hypothalamic GnRH and pituitary LH.',
          ],
          takeaway: 'LH stimulates Leydig cells to manufacture testosterone; testosterone exerts negative feedback on LH and GnRH.',
          diagram: 'dna',
        },
        {
          id: 'sertoli-spermatogenesis-barrier',
          title: 'Sertoli nurse cells and the blood-testis barrier',
          paragraphs: [
            'Sertoli cells line the seminiferous tubular epithelium, functioning as nurse cells that guide developing germ cells from spermatogonia to mature spermatozoa under FSH stimulation.',
            'Connected by tight junctions, they establish the blood-testis barrier to protect haploid gametes from autoimmune attack, secrete androgen-binding protein (ABP) to sequester high intratubular testosterone, and release inhibin B for selective negative feedback on FSH.',
          ],
          takeaway: 'FSH-stimulated Sertoli cells maintain the blood-testis barrier, secrete ABP, and release inhibin B to brake FSH.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the statement pairing pituitary gonadotropins with their precise testicular cellular targets:',
        blank: 'Within the testis, FSH acts upon ______ cells while LH acts upon ______ cells.',
        options: [
          {
            id: 'sertoli-fsh-leydig-lh',
            label: 'Sertoli and Leydig',
            explanation: 'Correct: FSH targets Sertoli nurse cells supporting spermatogenesis, while LH targets interstitial Leydig cells to produce testosterone.',
          },
          {
            id: 'leydig-fsh-sertoli-lh',
            label: 'Leydig and Sertoli',
            explanation: 'Incorrect: the targets are reversed; LH stimulates Leydig cells and FSH stimulates Sertoli cells.',
          },
          {
            id: 'chromaffin-fsh-chief-lh',
            label: 'chromaffin and chief',
            explanation: 'Incorrect: chromaffin cells are adrenal and chief cells are parathyroid/gastric.',
          },
          {
            id: 'granulosa-fsh-theca-lh',
            label: 'granulosa and theca',
            explanation: 'Incorrect: granulosa and theca are the female ovarian counterparts.',
          },
        ],
      },
    },
  },
});

export const endocrineFemaleCycleLesson = lessonSchema.parse({
  id: 'endocrine-female-cycle',
  revision: 1,
  questionId: 'endocrine-female-cycle-q1',
  correctOptionId: 'female-cycle-order-correct',
  correctOrderIds: ['follicular-estrogen', 'lh-surge-ovulation', 'corpus-luteum-progesterone', 'luteolysis-menstruation'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch27-female',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-female-reproductive-system',
      section: 'Chapter 27 · Ovarian and Endometrial Menstrual Cycles',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Como o estrogênio comuta repentinamente de um freio inibitório para um potente acelerador que dispara a ovulação?',
      title: 'Fisiologia reprodutiva feminina: ciclo ovariano e endometrial',
      description: 'Acompanhe as fases folicular e lútea do ovário, o pico de LH, a ovulação e as modificações proliferativas e secretoras do endométrio.',
      objective: 'Ordenar as fases hormonais do ciclo ovariano e correlacioná-las com as fases proliferativa, secretora e menstrual do endométrio.',
      stages: [
        {
          id: 'two-cell-two-gonadotropin',
          title: 'A teoria das duas células e duas gonadotrofinas',
          paragraphs: [
            'A esteroidogênese ovariana na fase folicular requer cooperação integrada entre duas linhagens celulares.',
            'As células da teca externa respondem ao LH convertendo colesterol em androstenediona. Essa androstenediona difunde-se para as células da granulosa vizinhas, que respondem ao FSH expressando a enzima aromatase, convertendo os andrógenos em 17-beta-estradiol.',
          ],
          takeaway: 'Células da teca (LH) produzem andrógenos; células da granulosa (FSH) usam aromatase para convertê-los em estradiol.',
          diagram: 'endocrine',
        },
        {
          id: 'positive-feedback-lh-surge',
          title: 'O pico ovulatório de LH por feedback positivo',
          paragraphs: [
            'Durante a maior parte da fase folicular, níveis moderados de estradiol exercem retroalimentação negativa sobre a secreção de LH e FSH na hipófise.',
            'Contudo, ao final da fase folicular, o folículo dominante de Graaf atinge maturação máxima e secreta altas concentrações sustentadas de estradiol (>200 pg/mL por mais de 36 horas). Esse limiar induz uma mudança paradoxal: comuta para feedback positivo hipofisário, disparando o pico maciço pré-ovulatório de LH.',
          ],
          takeaway: 'Estradiol elevado e sustentado comuta para feedback positivo, disparando o pico de LH que induz a ovulação.',
          diagram: 'phases',
        },
        {
          id: 'corpus-luteum-endometrium',
          title: 'Corpo lúteo e o ciclo endometrial',
          paragraphs: [
            'Após a expulsão do oócito (ovulação), as células foliculares residuais luteinizam-se formando o corpo lúteo, que secreta grandes quantidades de progesterona e estrogênio, convertendo o endométrio proliferativo em endométrio secretor.',
            'Se a fertilização não ocorre, o corpo lúteo involui em corpo albicans (luteólise). A queda abrupta de progesterona e estrogênio priva o endométrio de suporte trófico, provocando espasmo das artérias espiraladas, necrose isquêmica e descamação menstrual.',
          ],
          takeaway: 'O corpo lúteo produz progesterona mantendo o endométrio secretor; sua regressão deflagra a menstruação.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Ordene cronologicamente os eventos hormonais e teciduais que compõem o ciclo menstrual de 28 dias:',
        items: [
          {
            id: 'follicular-estrogen',
            label: 'Crescimento folicular ovariano com secreção crescente de estradiol e proliferação endometrial',
            explanation: 'O FSH recruta folículos e o estradiol induz a reconstrução da camada funcional endometrial.',
          },
          {
            id: 'lh-surge-ovulation',
            label: 'Pico pré-ovulatório de LH deflagrado por feedback positivo de estradiol culminando na ovulação',
            explanation: 'O pico gonadotrófico desencadeia a ruptura folicular e liberação do oócito secundário no dia 14.',
          },
          {
            id: 'corpus-luteum-progesterone',
            label: 'Formação do corpo lúteo com secreção de progesterona e maturação secretora endometrial',
            explanation: 'A progesterona desenvolve glândulas tortuosas e glicogênio para implantação embrionária.',
          },
          {
            id: 'luteolysis-menstruation',
            label: 'Luteólise com queda hormonal esteroide e descamação isquêmica menstrual',
            explanation: 'Sem fertilização, a cessação de progesterona provoca necrose isquêmica endometrial no dia 28.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'How does estrogen suddenly switch from being an inhibitory negative feedback brake to a powerful positive trigger for ovulation?',
      title: 'Female reproductive physiology: ovarian and endometrial cycles',
      description: 'Follow the follicular and luteal ovarian phases, the pre-ovulatory LH surge, ovulation, and endometrial cyclic transformations.',
      objective: 'Sequence the endocrine events of the ovarian cycle and correlate them with proliferative, secretory, and menstrual endometrial phases.',
      stages: [
        {
          id: 'two-cell-two-gonadotropin',
          title: 'The two-cell, two-gonadotropin model',
          paragraphs: [
            'Ovarian steroidogenesis during the follicular phase requires coordinated biochemical cooperation between theca and granulosa cells.',
            'Outer theca interna cells express LH receptors, synthesizing androstenedione from cholesterol. Androstenedione traverses the basement membrane into inner granulosa cells, where FSH stimulates the enzyme aromatase (CYP19A1) to convert androgens into 17-beta-estradiol.',
          ],
          takeaway: 'Theca cells (LH) produce androgens; granulosa cells (FSH) convert them into estradiol via aromatase.',
          diagram: 'endocrine',
        },
        {
          id: 'positive-feedback-lh-surge',
          title: 'The positive feedback loop and the ovulatory LH surge',
          paragraphs: [
            'Throughout the early to mid-follicular phase, moderate estradiol concentrations deliver classical negative feedback on anterior pituitary LH and FSH release.',
            'However, once the dominant Graafian follicle achieves pre-ovulatory maturity, it maintains high sustained estradiol output (>200 pg/mL for >36 hours). This threshold flips the hypothalamic-pituitary axis into positive feedback, triggering the massive pre-ovulatory surge of luteinizing hormone (LH).',
          ],
          takeaway: 'High sustained estradiol flips into positive feedback, unleashing the ovulatory LH spike.',
          diagram: 'phases',
        },
        {
          id: 'corpus-luteum-endometrium',
          title: 'The corpus luteum and endometrial cyclic changes',
          paragraphs: [
            'Following follicular rupture and oocyte expulsion (ovulation), remaining granulosa and theca cells luteinize to form the vascular corpus luteum, which secretes abundant progesterone alongside estrogen to convert the proliferative endometrium into a nutrient-rich secretory state.',
            'If fertilization does not take place, the corpus luteum undergoes programmed apoptosis (luteolysis into corpus albicans). The steep plunge in circulating progesterone and estrogen destabilizes the endometrial functionalis, causing spiral artery spasm, ischemic necrosis, and menstrual sloughing.',
          ],
          takeaway: 'The corpus luteum secretes progesterone to maintain the secretory endometrium; its demise initiates menses.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Order the chronological sequence of endocrine and tissue events that constitute the 28-day human menstrual cycle:',
        items: [
          {
            id: 'follicular-estrogen',
            label: 'Ovarian follicular development with climbing estradiol levels driving endometrial proliferation',
            explanation: 'FSH recruits cohort follicles, and rising estradiol rebuilds the endometrial functionalis layer.',
          },
          {
            id: 'lh-surge-ovulation',
            label: 'Estradiol-driven positive feedback switch eliciting the pre-ovulatory LH surge and oocyte release',
            explanation: 'The gonadotropin surge activates proteolytic enzymes that rupture the mature follicle at day 14.',
          },
          {
            id: 'corpus-luteum-progesterone',
            label: 'Corpus luteum differentiation secreting progesterone to induce tortuous secretory endometrial glands',
            explanation: 'Luteal progesterone transforms the uterine lining to welcome blastocyst implantation.',
          },
          {
            id: 'luteolysis-menstruation',
            label: 'Luteal regression causing steroid withdrawal, spiral arteriolar vasospasm, and menstrual shedding',
            explanation: 'In the absence of hCG, progesterone collapse induces ischemic sloughing of the functionalis.',
          },
        ],
      },
    },
  },
});

export const endocrinePregnancyLactationLesson = lessonSchema.parse({
  id: 'endocrine-pregnancy-lactation',
  revision: 1,
  questionId: 'endocrine-pregnancy-lactation-q1',
  correctOptionId: 'progesterone-estrogen-block-milk',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch28-lactation',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/28-4-maternal-changes-during-pregnancy-labor-and-birth',
      section: 'Chapter 28 · Endocrine Adjustments of Pregnancy, Parturition, and Lactation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Se os níveis de prolactina sobem dez vezes durante a gravidez, por que o leite materno só desce após o parto?',
      title: 'Endocrinologia da gestação, parto e lactação',
      description: 'Entenda o papel do hCG, o desvio lúteo-placentário, os gatilhos hormonais do parto e a inibição esteroide sobre a lactação.',
      objective: 'Analisar as funções do hCG, progesterona e ocitocina no parto e explicar por que o leite é ejetado apenas após a expulsão placentária.',
      stages: [
        {
          id: 'hcg-corpus-luteum-rescue',
          title: 'Resgate do corpo lúteo pelo hCG e deslocamento placentário',
          paragraphs: [
            'O blastocisto em implantação produz gonadotrofina coriônica humana (hCG) a partir do sinciciotrofoblasto. O hCG compartilha a subunidade beta com o LH e liga-se aos mesmos receptores, resgatando o corpo lúteo da regressão.',
            'O corpo lúteo mantém a produção de progesterona e estrogênio até a 8ª a 10ª semana de gestação, momento no qual a placenta madura assume a produção em massa desses esteroides (deslocamento lúteo-placentário), garantindo a quiescência miometrial.',
          ],
          takeaway: 'O hCG resgata o corpo lúteo nas primeiras semanas; a placenta assume a produção de progesterona por volta da 9ª semana.',
          diagram: 'embryo',
        },
        {
          id: 'parturition-oxytocin-positive-feedback',
          title: 'O parto e a alça de feedback positivo de Ferguson',
          paragraphs: [
            'Ao final do terceiro trimestre, a razão estrogênio/progesterona eleva-se, aumentando a expressão de receptores de ocitocina e junções comunicantes (gap junctions de conexina-43) no miométrio.',
            'A pressão da cabeça fetal sobre o colo uterino dispara reflexos sensoriais ao hipotálamo (reflexo de Ferguson), provocando liberação pulsátil de ocitocina pela neuro-hipófise. As contrações uterinas forçam mais a cabeça fetal contra o colo, liberando ainda mais ocitocina em uma potente alça de feedback positivo até o nascimento.',
          ],
          takeaway: 'O estrogênio prepara o miométrio para a ocitocina, cujo reflexo de Ferguson atua por feedback positivo até o parto.',
          diagram: 'endocrine',
        },
        {
          id: 'lactation-steroid-withdrawal',
          title: 'Lactação: desinibição esteroide pós-parto',
          paragraphs: [
            'Durante a gestação, a prolactina hipofisária aumenta progressivamente estimulada pelos estrogênios, preparando o desenvolvimento dos alvéolos mamários. Contudo, a lactogênese ativa não ocorre antes do parto.',
            'Os elevados níveis plasmáticos de progesterona e estrogênio placentários bloqueiam competitivamente os receptores de prolactina nas células epiteliais mamárias. Com o parto e a expulsão da placenta (dequitação), os níveis de esteroides caem vertiginosamente, desinibindo a síntese de leite pela prolactina.',
          ],
          takeaway: 'A ejeção da placenta elimina o bloqueio da progesterona e do estrogênio, permitindo que a prolactina inicie a produção de leite.',
          diagram: 'pump',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Por que a secreção de leite materno não ocorre durante a gestação, apesar dos níveis de prolactina estarem marcadamente elevados?',
        options: [
          {
            id: 'progesterone-estrogen-block-milk',
            label: 'Altas concentrações de progesterona e estrogênio placentários antagonizam a ação secretora da prolactina na glândula mamária',
            explanation: 'Correto: a progesterona e o estrogênio bloqueiam a sinalização da prolactina na mama; somente com a expulsão da placenta e a queda hormonal esteroide o leite pode ser produzido.',
          },
          {
            id: 'oxytocin-receptor-absence',
            label: 'Ausência total de receptores de ocitocina nas células mioepiteliais mamárias até a infância',
            explanation: 'Incorreto: os receptores de ocitocina estão plenamente desenvolvidos e atuam na ejeção mecânica, não na síntese de leite.',
          },
          {
            id: 'hcg-direct-milk-inhibition',
            label: 'O hCG atua como toxina citoplasmática bloqueando ribossomos de lactócitos mamários',
            explanation: 'Incorreto: o hCG atua no resgate do corpo lúteo no início da gestação, sem ação citotóxica na mama.',
          },
          {
            id: 'dopamine-placental-surge',
            label: 'Secreção placentária de dopamina inibindo completamente a transcrição de RNA mensageiro de prolactina',
            explanation: 'Incorreto: a prolactina sérica na gravidez é muito elevada; a inibição ocorre no tecido-alvo mamário pelos esteroides sexuais.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'If circulating prolactin climbs tenfold during pregnancy, why does breast milk only begin flowing after delivery?',
      title: 'Endocrinology of pregnancy, parturition, and lactation',
      description: 'Understand the role of hCG, the luteal-placental shift, hormonal triggers of labor, and steroid inhibition of lactation.',
      objective: 'Analyze the actions of hCG, progesterone, and oxytocin during labor and explain why milk production begins only after placental delivery.',
      stages: [
        {
          id: 'hcg-corpus-luteum-rescue',
          title: 'hCG rescue of the corpus luteum and luteal-placental shift',
          paragraphs: [
            'The implanting blastocyst secretes human chorionic gonadotropin (hCG) from its outer syncytiotrophoblast. Sharing an identical beta subunit homology with LH, hCG binds luteal LH receptors to rescue the corpus luteum from programmed luteolysis.',
            'The corpus luteum continues churning out progesterone and estrogen to preserve uterine quiescence through weeks 8 to 10, when the growing placenta takes over large-scale steroidogenesis (the luteal-placental shift).',
          ],
          takeaway: 'Trophoblastic hCG rescues the corpus luteum initially; the placenta assumes progesterone output around week 9.',
          diagram: 'embryo',
        },
        {
          id: 'parturition-oxytocin-positive-feedback',
          title: 'Parturition and the Ferguson positive feedback loop',
          paragraphs: [
            'In late gestation, an elevating estrogen-to-progesterone ratio upregulates myometrial oxytocin receptors and gap junctions (connexin-43), synchronizing uterine muscle for rhythmic contraction.',
            'Descent of the fetal head mechanically distends the cervix, firing afferent sensory signals to the hypothalamus (the Ferguson reflex) that command pulsatile oxytocin release from the posterior pituitary. Oxytocin-induced contractions drive the fetus harder against the cervix, releasing more oxytocin in a classic positive feedback loop until expulsion.',
          ],
          takeaway: 'Estrogen primes the myometrium for oxytocin, which drives labor via the Ferguson positive feedback loop.',
          diagram: 'endocrine',
        },
        {
          id: 'lactation-steroid-withdrawal',
          title: 'Lactation: steroid withdrawal and milk letdown',
          paragraphs: [
            'Throughout gestation, anterior pituitary prolactin output rises under high estrogenic drive, priming mammary alveolar ductal development. Yet true copious milk secretion (galactopoiesis) is held in check.',
            'High circulating placental progesterone and estrogen competitively antagonize prolactin receptor signaling on mammary epithelial cells. Following parturition and placental expulsion (afterbirth), progesterone and estrogen plunge abruptly, lifting the peripheral block and unleashing prolactin-driven milk synthesis.',
          ],
          takeaway: 'Placental delivery clears high progesterone and estrogen, allowing prolactin to trigger milk synthesis.',
          diagram: 'pump',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Why is copious breast milk production inhibited during gestation despite marked maternal prolactin elevation?',
        options: [
          {
            id: 'progesterone-estrogen-block-milk',
            label: 'High circulating placental progesterone and estrogen antagonize the secretory signaling of prolactin on mammary epithelia',
            explanation: 'Correct: elevated gestational progesterone and estrogen block prolactin receptor action in the breast; only their sharp postnatal withdrawal permits milk secretion.',
          },
          {
            id: 'oxytocin-receptor-absence',
            label: 'Total developmental absence of oxytocin receptors in myoepithelial cells until late childhood',
            explanation: 'Incorrect: oxytocin receptors are abundant and mediate milk letdown/ejection, but do not dictate biochemical milk synthesis.',
          },
          {
            id: 'hcg-direct-milk-inhibition',
            label: 'Circulating hCG acts as an intracellular ribotoxin in mammary alveolar lactocytes',
            explanation: 'Incorrect: hCG functions to preserve the corpus luteum and possesses zero ribotoxic or inhibitory effects on mammary cells.',
          },
          {
            id: 'dopamine-placental-surge',
            label: 'Massive placental dopamine secretion halting prolactin mRNA transcription in the pituitary gland',
            explanation: 'Incorrect: maternal pituitary prolactin concentrations are extremely high; inhibition is mediated at the mammary tissue receptor level.',
          },
        ],
      },
    },
  },
});

export const endocrineEnergyBalanceLesson = lessonSchema.parse({
  id: 'endocrine-energy-balance',
  revision: 1,
  questionId: 'endocrine-energy-balance-q1',
  correctOptionId: 'leptin-anorexigenic-pomc-cart',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch24-metabolism',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-1-overview-of-metabolic-reactions',
      section: 'Chapter 24 · Neuroendocrine Regulation of Appetite, Leptin, and Energy Balance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Como o hipotálamo mede quanta gordura você tem estocada no corpo para regular a fome ou a saciedade a cada refeição?',
      title: 'Regulação neuroendócrina do apetite: leptina, grelina e POMC',
      description: 'Descubra como o núcleo arqueado do hipotálamo integra sinais de fome (grelina, NPY/AgRP) e sinais de saciedade (leptina, insulina, POMC/CART).',
      objective: 'Diferenciar as vias orexígenas e anorexígenas no núcleo arqueado e os papéis da leptina adiposa e da grelina gástrica no equilíbrio energético.',
      stages: [
        {
          id: 'arcuate-nucleus-architecture',
          title: 'O núcleo arqueado: centro integrador do apetite',
          paragraphs: [
            'O controle central da ingestão alimentar e do gasto energético reside no núcleo arqueado do hipotálamo, que apresenta barreira hematoencefálica fenestrada permeável a hormônios circulantes.',
            'O núcleo arqueado contém dois circuitos neuronais opostos: a via anorexígena (que reduz o apetite e aumenta o gasto metabólico, mediada por neurônios que coexpressam pró-opiomelanocortina [POMC] e CART) e a via orexígena (que estimula o apetite, mediada por neurônios que coexpressam neuropeptídeo Y [NPY] e peptídeo relacionado a agouti [AgRP]).',
          ],
          takeaway: 'O núcleo arqueado abriga a via anorexígena POMC/CART (saciedade) e a via orexígena NPY/AgRP (fome).',
          diagram: 'brain',
        },
        {
          id: 'leptin-satiety-signal',
          title: 'Leptina e insulina: sensores de reserva de longo prazo',
          paragraphs: [
            'A leptina é um hormônio proteico secretado pelos adipócitos brancos proporcionalmente à massa total de gordura corporal, atuando como sensor crônico de suficiência energética.',
            'No núcleo arqueado, a leptina estimula os neurônios POMC a clivarem alfa-MSH (que ativa receptores MC4R para suprimir a fome) e inibe simultaneamente os neurônios orexígenos NPY/AgRP. A insulina circulante atua de forma sinérgica como sinal anorexígeno.',
          ],
          takeaway: 'A leptina adiposa sinaliza saciedade crônica estimulando a via POMC/alfa-MSH e inibindo a via NPY/AgRP.',
          diagram: 'endocrine',
        },
        {
          id: 'ghrelin-hunger-trigger',
          title: 'Grelina: o sinalizador de fome de curto prazo',
          paragraphs: [
            'A grelina é um hormônio peptídico secretado pelas células oxínticas da mucosa do fundo gástrico durante períodos de jejum ou estômago vazio, agindo como potente estimulador agudo do apetite.',
            'A grelina atravessa o hipotálamo e estimula diretamente os neurônios NPY/AgRP no núcleo arqueado, disparando a sensação de fome voraz pré-prandial. Logo após a ingestão de alimento e distensão gástrica, sua secreção cai rapidamente, cedendo lugar a peptídeos de saciedade intestinal como PYY e GLP-1.',
          ],
          takeaway: 'A grelina é o hormônio gástrico da fome que estimula neurônios NPY/AgRP no jejum; sua concentração cai após comer.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o mecanismo celular pelo qual a leptina atua no núcleo arqueado do hipotálamo para promover a saciedade?',
        options: [
          {
            id: 'leptin-anorexigenic-pomc-cart',
            label: 'Estimulação dos neurônios anorexígenos POMC/CART e inibição simultânea dos neurônios orexígenos NPY/AgRP',
            explanation: 'Correto: a leptina ativa os neurônios POMC liberando alfa-MSH nos receptores MC4R (saciedade) e inibe a via NPY/AgRP (fome).',
          },
          {
            id: 'ghrelin-synergy-stomach',
            label: 'Ativação sinérgica das células gástricas do fundo para duplicar a síntese de grelina',
            explanation: 'Incorreto: a leptina suprime o apetite e não estimula a grelina (que é um hormônio pró-apetite).',
          },
          {
            id: 'mc4r-receptor-blockade',
            label: 'Bloqueio competitivo dos receptores MC4R impedindo a ação do neuropeptídeo alfa-MSH',
            explanation: 'Incorreto: o bloqueio do MC4R é exercido pelo AgRP para induzir hiperfagia; a leptina promove a ativação do MC4R.',
          },
          {
            id: 'inhibit-all-hypothalamic-cells',
            label: 'Destruição citolítica dos corpos de neurônios no órgão vasculoso da lâmina terminal',
            explanation: 'Incorreto: a leptina é um hormônio sinalizador que liga-se a receptores específicos Ob-R (JAK/STAT), não um agente tóxico.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'How does your hypothalamus monitor exact total body fat stores to govern feeding versus satiety with each passing meal?',
      title: 'Neuroendocrine regulation of appetite: leptin, ghrelin, and POMC',
      description: 'Discover how the hypothalamic arcuate nucleus integrates hunger triggers (ghrelin, NPY/AgRP) and satiety signals (leptin, insulin, POMC/CART).',
      objective: 'Contrast orexigenic versus anorexigenic arcuate circuits and differentiate adipose leptin from gastric ghrelin in energy homeostasis.',
      stages: [
        {
          id: 'arcuate-nucleus-architecture',
          title: 'The arcuate nucleus: central appetite command center',
          paragraphs: [
            'Central integration of dietary caloric intake and metabolic expenditure resides within the hypothalamic arcuate nucleus, situated adjacent to a semi-permeable median eminence.',
            'The arcuate nucleus contains two mutually antagonistic neuronal populations: an anorexigenic satiety arm (pro-opiomelanocortin [POMC] and cocaine-and-amphetamine-regulated transcript [CART] neurons) and an orexigenic hunger arm (neuropeptide Y [NPY] and agouti-related peptide [AgRP] neurons).',
          ],
          takeaway: 'The arcuate nucleus contains the anorexigenic POMC/CART satiety circuit and the orexigenic NPY/AgRP hunger circuit.',
          diagram: 'brain',
        },
        {
          id: 'leptin-satiety-signal',
          title: 'Leptin and insulin: long-term energy barometers',
          paragraphs: [
            'Leptin is a peptide hormone synthesized by subcutaneous white adipocytes in direct proportion to total body triglyceride adipose reserves, functioning as an indicator of energy abundance.',
            'Within the arcuate nucleus, leptin binds LepRb receptors to excite POMC neurons, driving processing of alpha-MSH, which engages downstream melanocortin-4 receptors (MC4R) to extinguish hunger and upregulate metabolic rate. Simultaneously, leptin silences orexigenic NPY/AgRP neurons.',
          ],
          takeaway: 'Adipose leptin signals chronic energy sufficiency by activating POMC/alpha-MSH and silencing NPY/AgRP.',
          diagram: 'endocrine',
        },
        {
          id: 'ghrelin-hunger-trigger',
          title: 'Ghrelin: the acute meal-initiation signal',
          paragraphs: [
            'Ghrelin is an acylated peptide secreted primarily by P/D1 oxyntic cells in the gastric fundus during periods of fasting or gastric lumen emptiness, acting as an acute orexigenic hunger trigger.',
            'Circulating ghrelin activates growth hormone secretagogue receptors on arcuate NPY/AgRP neurons, stimulating voracious pre-prandial appetite. Following nutrient ingestion and gastric wall distension, ghrelin falls sharply, yielding to postprandial gut satiety peptides (such as PYY and GLP-1).',
          ],
          takeaway: 'Gastric ghrelin triggers meal initiation by firing NPY/AgRP neurons during fasting; its level falls after eating.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which cellular mechanism explains how adipose leptin acts within the hypothalamic arcuate nucleus to promote satiety?',
        options: [
          {
            id: 'leptin-anorexigenic-pomc-cart',
            label: 'Stimulation of anorexigenic POMC/CART neurons coupled with simultaneous inhibition of orexigenic NPY/AgRP neurons',
            explanation: 'Correct: leptin engages POMC neurons to release alpha-MSH onto MC4R receptors (promoting satiety) while actively dampening hunger-inducing NPY/AgRP neurons.',
          },
          {
            id: 'ghrelin-synergy-stomach',
            label: 'Synergistic stimulation of gastric fundic cells to double systemic ghrelin output',
            explanation: 'Incorrect: leptin suppresses appetite and does not promote ghrelin (which is an orexigenic hunger trigger).',
          },
          {
            id: 'mc4r-receptor-blockade',
            label: 'Competitive antagonism of MC4R receptors to prevent alpha-MSH binding',
            explanation: 'Incorrect: MC4R antagonism is carried out by AgRP to induce feeding; leptin promotes MC4R activation.',
          },
          {
            id: 'inhibit-all-hypothalamic-cells',
            label: 'Cytolytic necrosis of neuroendocrine soma within the circumventricular organs',
            explanation: 'Incorrect: leptin operates through receptor-mediated phosphorylation (JAK2/STAT3), not cytolytic destruction.',
          },
        ],
      },
    },
  },
});
