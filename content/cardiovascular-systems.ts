import { lessonSchema } from '../src/contracts/learning';

export const cardioMicrocirculationLesson = lessonSchema.parse({
  id: 'cardio-microcirculation',
  revision: 1,
  questionId: 'cardio-microcirculation-q1',
  correctOptionId: 'oncotic-reabsorption',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cardio-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch20-microcirculation',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-1-structure-and-function-of-blood-vessels',
      section: 'Chapter 20 · Capillary Exchange and Microcirculation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Sistema cardiovascular',
      sectionTitle: 'Fisiologia cardiovascular',
      hook: 'Como os nutrientes saem dos vasos sanguíneos para alimentar as células sem inundar os tecidos?',
      title: 'Microcirculação, forças de Starling e sistema linfático',
      description: 'Compreenda o equilíbrio hidrostático e coloidosmótico capilar e o papel da drenagem linfática.',
      objective: 'Aplicar a equação de Starling para explicar trocas de fluidos na microcirculação e a formação de edema.',
      stages: [
        {
          id: 'capillary-structure',
          title: 'Arquitetura capilar e esfíncteres pré-capilares',
          paragraphs: [
            'A microcirculação é o local primário onde ocorrem trocas de gases, nutrientes e resíduos entre o sangue e o fluido intersticial. As arteríolas ramificam-se em metarteríolas guarnecidas por esfíncteres pré-capilares.',
            'O tônus vasomotor dessas arteríolas e esfíncteres responde a mediadores locais (como adenosina, NO e pH ácido), ajustando dinamicamente a densidade capilar perfundida de acordo com as necessidades metabólicas teciduais.',
          ],
          takeaway: 'Esfíncteres pré-capilares e arteríolas modulam o fluxo microvascular em resposta a demandas metabólicas locais.',
          diagram: 'pressure',
        },
        {
          id: 'starling-forces',
          title: 'As quatro forças de Starling',
          paragraphs: [
            'A movimentação de líquido transcapilar obedece à equação de Starling: Jv = Kf · [(Pc - Pi) - σ(πc - πi)]. A pressão hidrostática capilar (Pc) empurra fluido para fora, sendo mais alta na extremidade arteriolar (~35 mmHg) do que na venular (~15 mmHg).',
            'A pressão coloidosmótica plasmática (πc ~28 mmHg), gerada predominantemente pela albumina, atrai líquido de volta para o vaso, contrapondo-se à filtração e limitando o acúmulo de líquido intersticial.',
          ],
          takeaway: 'A filtração é impulsionada pela pressão hidrostática capilar e contida pela pressão oncótica da albumina plasmática.',
          diagram: 'equation',
        },
        {
          id: 'lymphatic-drainage',
          title: 'Drenagem linfática e patogênese do edema',
          paragraphs: [
            'Em condições normais, há discreta filtração líquida diária excedente (~2 a 4 L/dia) que não é reabsorvida pelas vênulas. Essa fração intersticial é recolhida pelos capilares linfáticos de fundo cego.',
            'Falhas na drenagem linfática, hipoalbuminemia grave ou aumento crônico da pressão venosa desequilibram as forças de Starling, resultando em acúmulo patológico de líquido no interstício denominado edema.',
          ],
          takeaway: 'Os linfáticos drenam o excesso diário de filtrado capilar; seu colapso ou sobrecarga resulta em edema tecidual.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual força de Starling é a principal responsável por reabsorver líquido do espaço intersticial para o interior do capilar sanguíneo?',
        options: [
          {
            id: 'oncotic-reabsorption',
            label: 'Pressão coloidosmótica (oncótica) do plasma gerada pelas proteínas plasmáticas',
            explanation: 'Correto: a pressão oncótica do plasma (πc), exercida mormente pela albumina, puxa água do interstício para a luz vascular.',
          },
          {
            id: 'hydrostatic-arteriolar',
            label: 'Pressão hidrostática capilar arteriolar',
            explanation: 'Incorreto: a pressão hidrostática capilar atua empurrando fluido para fora da luz do capilar (filtração).',
          },
          {
            id: 'interstitial-oncotic',
            label: 'Pressão coloidosmótica do fluido intersticial',
            explanation: 'Incorreto: a pressão oncótica intersticial favorece a saída de fluido em direção aos tecidos.',
          },
          {
            id: 'atmospheric-pressure',
            label: 'Pressão atmosférica externa ao tegumento',
            explanation: 'Incorreto: a pressão atmosférica é transmitida uniformemente e não gera o gradiente osmótico transvascular.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Cardiovascular system',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'How do nutrients escape blood vessels to nourish tissue cells without flooding interstitial spaces?',
      title: 'Microcirculation, Starling forces, and lymphatics',
      description: 'Understand capillary hydrostatic and oncotic balances and the indispensable role of lymphatic drainage.',
      objective: 'Apply the Starling equation to predict fluid exchange across microvascular beds and explain edema genesis.',
      stages: [
        {
          id: 'capillary-structure',
          title: 'Capillary architecture and precapillary sphincters',
          paragraphs: [
            'The microcirculation is the critical interface for diffusive gas, nutrient, and waste exchange between blood and tissue parenchyma. Terminal arterioles feed into metarterioles guarded by precapillary sphincters.',
            'Local arteriolar smooth muscle tone responds to metabolic paracrine signals (adenosine, nitric oxide, low pH), dynamically titrating perfused capillary surface area to match regional metabolic requirements.',
          ],
          takeaway: 'Arterioles and precapillary sphincters dynamically govern capillary perfusion based on regional tissue metabolism.',
          diagram: 'pressure',
        },
        {
          id: 'starling-forces',
          title: 'The four classical Starling forces',
          paragraphs: [
            'Transmicrovascular fluid flux is dictated by Starling’s principle: Jv = Kf · [(Pc - Pi) - σ(πc - πi)]. Capillary hydrostatic pressure (Pc) drives outward fluid filtration, declining from arteriolar (~35 mmHg) to venular (~15 mmHg) ends.',
            'Plasma colloid osmotic pressure (πc ~28 mmHg), predominantly established by circulating serum albumin, draws water back into the vascular lumen, opposing excessive peripheral fluid extravasation.',
          ],
          takeaway: 'Filtration is propelled by intravascular hydrostatic pressure and restrained by albumin-driven plasma oncotic pressure.',
          diagram: 'equation',
        },
        {
          id: 'lymphatic-drainage',
          title: 'Lymphatic drainage and edema pathophysiology',
          paragraphs: [
            'Under physiological steady states, a net excess of filtered fluid (~2 to 4 L/day) escapes venular reabsorption. This interstitial filtrate is reclaimed by blind-ended terminal lymphatic channels.',
            'Disruptions of lymphatic transport, severe hypoalbuminemia, or elevated central venous pressure unbalance Starling forces, precipitating interstitial fluid accumulation termed edema.',
          ],
          takeaway: 'Lymphatics clear net daily capillary filtrate; impaired drainage or oncotic failure results in clinical edema.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which Starling force is primarily responsible for drawing fluid from the interstitial space back into the capillary lumen?',
        options: [
          {
            id: 'oncotic-reabsorption',
            label: 'Plasma colloid osmotic (oncotic) pressure exerted by circulating serum proteins',
            explanation: 'Correct: plasma oncotic pressure (πc), primarily governed by albumin, exerts an osmotic pull that reabsorbs water into capillaries.',
          },
          {
            id: 'hydrostatic-arteriolar',
            label: 'Arteriolar capillary hydrostatic pressure',
            explanation: 'Incorrect: capillary hydrostatic pressure pushes fluid outward across endothelial pores (filtration).',
          },
          {
            id: 'interstitial-oncotic',
            label: 'Interstitial fluid colloid osmotic pressure',
            explanation: 'Incorrect: interstitial oncotic pressure exerts an outward pull, promoting tissue filtration rather than luminal reabsorption.',
          },
          {
            id: 'atmospheric-pressure',
            label: 'Ambient atmospheric barometric pressure',
            explanation: 'Incorrect: barometric pressure is transmitted equally across compartments and does not establish transendothelial osmotic gradients.',
          },
        ],
      },
    },
  },
});

export const cardioBaroreceptorsLesson = lessonSchema.parse({
  id: 'cardio-baroreceptors',
  revision: 1,
  questionId: 'cardio-baroreceptors-q1',
  correctOptionId: 'vagus-bradycardia',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cardio-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch20-baroreceptors',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-4-homeostatic-regulation-of-the-vascular-system',
      section: 'Chapter 20 · Neural Regulation of Vascular Homeostasis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Sistema cardiovascular',
      sectionTitle: 'Fisiologia cardiovascular',
      hook: 'Como o encéfalo detecta uma queda súbita na pressão arterial em milissegundos ao nos levantarmos da cama?',
      title: 'Regulação neural da PA: reflexo barorreceptor e quimiorreceptores',
      description: 'Explore o arco reflexo dos barorreceptores carotídeos e aórticos no controle autonômico batimento a batimento.',
      objective: 'Descrever a via aferente, a integração bulbar e a resposta eferente simpática/parassimpática do barorreflexo.',
      stages: [
        {
          id: 'sensor-afferents',
          title: 'Sensores de estiramento: seio carotídeo e arco aórtico',
          paragraphs: [
            'Os barorreceptores arteriais são mecanorreceptores de estiramento situados na adventícia do seio carotídeo (inervado pelo nervo glossofaríngeo, NC IX) e do arco aórtico (inervado pelo nervo vago, NC X).',
            'O aumento da pressão arterial média distende a parede vascular, elevando a frequência de disparo de potenciais de ação nessas fibras aferentes em direção ao tronco encefálico.',
          ],
          takeaway: 'Barorreceptores aumentam sua taxa de disparo quando a pressão arterial média distende as artérias elásticas.',
          diagram: 'pressure',
        },
        {
          id: 'medullary-integration',
          title: 'Integração bulbar no núcleo do trato solitário',
          paragraphs: [
            'Os sinais aferentes chegam ao núcleo do trato solitário (NTS) no bulbo. O NTS estimula o núcleo ambíguo e o núcleo motor dorsal do vago, ativando a eferência parassimpática.',
            'Simultaneamente, o NTS ativa interneurônios inibitórios que suprimem a área pré-motora simpática da medula ventrolateral rostral (RVLM), diminuindo o tônus adrenérgico vascular e cardíaco.',
          ],
          takeaway: 'O NTS bulbar amplifica o tônus parassimpático e inibe a eferência simpática frente a pressões elevadas.',
          diagram: 'brain',
        },
        {
          id: 'effector-response',
          title: 'A resposta compensatória eferente rápida',
          paragraphs: [
            'Em resposta à hipertensão aguda, o aumento parassimpático diminui o cronotropismo no nó sinoatrial via receptores muscarínicos M2, enquanto a retirada simpática reduz a contratilidade (inotropismo) e causa vasodilatação.',
            'Na hipotensão ortostática (ao levantar), a queda do estiramento reduz o disparo aferente, desinibindo o RVLM: o influxo simpático sobe, causando vasoconstrição arteriolar e taquicardia reflexa.',
          ],
          takeaway: 'Queda de pressão arterial desinibe o tônus simpático, provocando vasoconstrição periférica e aumento da frequência cardíaca.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é a resposta reflexa desencadeada pelo centro cardiovascular bulbar ao registrar aumento abrupto da pressão no seio carotídeo?',
        options: [
          {
            id: 'vagus-bradycardia',
            label: 'Ativação parassimpática vagal com bradicardia e inibição simpática com vasodilatação',
            explanation: 'Correto: o aumento do estiramento estimula o NTS, que ativa o vago (reduzindo FC) e suprime o RVLM simpático.',
          },
          {
            id: 'sympathetic-tachycardia',
            label: 'Estimulação adrenérgica maciça com aumento imediato da frequência cardíaca',
            explanation: 'Incorreto: o tônus simpático é inibido, e não ativado, quando a pressão nos barorreceptores se eleva.',
          },
          {
            id: 'arteriolar-vasoconstriction',
            label: 'Vasoconstrição arteriolar generalizada via receptores alfa-1 adrenérgicos',
            explanation: 'Incorreto: a retirada simpática promove vasodilatação para atenuar a hipertensão, e não vasoconstrição.',
          },
          {
            id: 'complete-chemoreceptor-inhibition',
            label: 'Desativação total do nó atrioventricular com assistolia fisiológica irreversível',
            explanation: 'Incorreto: o reflexo modula a frequência de modo proporcional e reversível, sem induzir assistolia.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Cardiovascular system',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'How does the human brain detect an orthostatic blood pressure dip within milliseconds upon standing?',
      title: 'Neural BP regulation: baroreceptor reflex and chemoreceptors',
      description: 'Explore the carotid sinus and aortic arch baroreflex arc governing autonomic beat-to-beat pressure regulation.',
      objective: 'Outline the afferent sensory path, medullary integration center, and autonomic efferent limbs of the arterial baroreflex.',
      stages: [
        {
          id: 'sensor-afferents',
          title: 'Stretch mechanoreceptors: carotid sinus and aortic arch',
          paragraphs: [
            'Arterial baroreceptors are spray-type mechanoreceptors embedded within the adventitia of the carotid sinus (CN IX, glossopharyngeal) and aortic arch (CN X, vagus).',
            'Elevations in pulsatile mean arterial pressure stretch vascular walls, escalating action potential firing frequency along afferent sensory axons into the medulla.',
          ],
          takeaway: 'Baroreceptors accelerate sensory afferent firing when elevated arterial wall stretch distends elastic arteries.',
          diagram: 'pressure',
        },
        {
          id: 'medullary-integration',
          title: 'Medullary integration within the nucleus tractus solitarii',
          paragraphs: [
            'Afferent sensory fibers terminate within the nucleus tractus solitarii (NTS) of the dorsal medulla. The NTS excites vagal motor nuclei, potentiating parasympathetic outflow.',
            'Concurrently, the NTS engages inhibitory GABAergic interneurons that project to the rostral ventrolateral medulla (RVLM), disengaging tonic sympathetic drive to the heart and arterioles.',
          ],
          takeaway: 'The medullary NTS promotes vagal outflow and blunts sympathetic discharge in response to high arterial pressure.',
          diagram: 'brain',
        },
        {
          id: 'effector-response',
          title: 'Rapid efferent autonomic compensation',
          paragraphs: [
            'In response to acute blood pressure surges, acetylcholine acting on nodal M2 muscarinic receptors slows heart rate, while adrenergic withdrawal decreases myocardial contractility and dilates systemic resistance arterioles.',
            'Conversely, upon sudden standing, reduced transmural stretch unloads baroreceptor afferents, unleashing RVLM sympathetic discharge to drive restorative arteriolar vasoconstriction and reflex tachycardia.',
          ],
          takeaway: 'Unloading baroreceptors disinhibits sympathetic outflow, provoking systemic vasoconstriction and reflex tachycardia.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What primary autonomic compensatory reflex occurs when carotid sinus baroreceptors detect an acute rise in systemic blood pressure?',
        options: [
          {
            id: 'vagus-bradycardia',
            label: 'Increased vagal parasympathetic outflow causing bradycardia and sympathetic withdrawal causing vasodilation',
            explanation: 'Correct: increased stretch informs the NTS to stimulate cardiac vagal tone (slowing HR) and suppress sympathetic arteriolar constriction.',
          },
          {
            id: 'sympathetic-tachycardia',
            label: 'Massive sympathetic surge causing immediate positive chronotropic acceleration',
            explanation: 'Incorrect: sympathetic output is suppressed, not stimulated, when baroreceptor stretch increases.',
          },
          {
            id: 'arteriolar-vasoconstriction',
            label: 'Generalized systemic vasoconstriction mediated by vascular alpha-1 adrenergic receptors',
            explanation: 'Incorrect: sympathoinhibition results in systemic vasodilation to alleviate the elevated arterial pressure.',
          },
          {
            id: 'complete-chemoreceptor-inhibition',
            label: 'Permanent AV nodal blockade resulting in terminal asystole',
            explanation: 'Incorrect: baroreceptor compensation is a dynamic and reversible physiological modulation, not a pathological arrest.',
          },
        ],
      },
    },
  },
});

export const cardioCoronaryLesson = lessonSchema.parse({
  id: 'cardio-coronary',
  revision: 1,
  questionId: 'cardio-coronary-q1',
  correctOptionId: 'diastolic-perfusion',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cardio-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch19-coronary',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy',
      section: 'Chapter 19 · Coronary Circulation and Myocardial Perfusion',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Sistema cardiovascular',
      sectionTitle: 'Fisiologia cardiovascular',
      hook: 'Por que o músculo cardíaco recebe seu suprimento sanguíneo quase exclusivamente durante o relaxamento, e não durante a contração?',
      title: 'Circulação coronariana, cerebral e autorregulação do fluxo',
      description: 'Entenda os mecanismos de perfusão diastólica miocárdica e a autorregulação metabólica vascular.',
      objective: 'Explicar a dinâmica da perfusão coronariana esquerda na diástole e os mediadores da autorregulação metabólica.',
      stages: [
        {
          id: 'coronary-diastole',
          title: 'Perfusão miocárdica esquerda e compressão sistólica',
          paragraphs: [
            'Durante a sístole ventricular esquerda, a imensa tensão da parede miocárdica e a pressão intramural superam a pressão da raiz aórtica, comprimindo os vasos subendocárdicos e interrompendo temporariamente o fluxo.',
            'Consequentemente, mais de 70% a 80% do fluxo sanguíneo coronariano para o ventrículo esquerdo ocorre durante a diástole, quando o músculo relaxa e as artérias coronárias desfrutam do gradiente de pressão aórtica diastólica.',
          ],
          takeaway: 'O miocárdio ventricular esquerdo é perfundido predominantemente durante a diástole devido à compressão extravascular sistólica.',
          diagram: 'pump',
        },
        {
          id: 'metabolic-autoregulation',
          title: 'Autorregulação metabólica coronariana e cerebral',
          paragraphs: [
            'O miocárdio extrai cerca de 70% a 80% do oxigênio arterial em repouso (extração quase máxima). Portanto, aumentos no consumo miocárdico de O₂ (MVO₂) exigem aumentos proporcionais imediatos no fluxo coronariano.',
            'A adenosina (gerada pela quebra de ATP celular), a hipóxia e o óxido nítrico endotelial promovem vasodilatação arteriolar potente, mantendo o fluxo adequado frente a variações na pressão de perfusão.',
          ],
          takeaway: 'O fluxo coronariano depende de vasodilatação metabólica local mediada principalmente por adenosina e óxido nítrico.',
          diagram: 'pressure',
        },
        {
          id: 'cerebral-co2-control',
          title: 'Circulação cerebral e reatividade ao CO₂',
          paragraphs: [
            'O fluxo sanguíneo cerebral é rigorosamente mantido constante entre pressões arteriais médias de 60 a 140 mmHg pelo mecanismo miogênico (resposta de Bayliss).',
            'Além disso, as arteríolas cerebrais são extraordinariamente sensíveis à pressão arterial de CO₂ (PaCO₂): a hipercapnia causa vasodilatação cerebral intensa, enquanto a hipocapnia (por hiperventilação) causa vasoconstrição e redução do fluxo cerebral.',
          ],
          takeaway: 'A circulação cerebral autorregula o fluxo por mecanismo miogênico e varia intensamente com a PaCO₂ arterial.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em qual fase do ciclo cardíaco ocorre a maior parte da perfusão sanguínea para o subendocárdio do ventrículo esquerdo?',
        options: [
          {
            id: 'diastolic-perfusion',
            label: 'Durante a diástole ventricular, quando o miocárdio relaxa e cessa a compressão mecânica intramural',
            explanation: 'Correto: a compressão mecânica sistólica comprime os vasos subendocárdicos; a perfusão ocorre na diástole.',
          },
          {
            id: 'systolic-isovolumetric',
            label: 'Durante a contração isovolumétrica, quando a pressão ventricular atinge o pico inicial',
            explanation: 'Incorreto: na sístole a pressão transmural comprime a microcirculação coronariana profunda.',
          },
          {
            id: 'rapid-ejection-phase',
            label: 'Durante a ejeção rápida ventricular máxima',
            explanation: 'Incorreto: o pico da ejeção coincide com grande estresse de parede, impedindo a perfusão plena do subendocárdio esquerdo.',
          },
          {
            id: 'atrial-systole-only',
            label: 'Exclusivamente durante a contração atrial',
            explanation: 'Incorreto: a perfusão ocorre ao longo de toda a diástole ventricular, impulsionada pelo recuo elástico aórtico.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Cardiovascular system',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'Why does left ventricular heart muscle receive its essential blood supply during relaxation rather than contraction?',
      title: 'Coronary and cerebral circulation and flow autoregulation',
      description: 'Explore diastolic myocardial perfusion mechanics and metabolic autoregulation of coronary and cerebral beds.',
      objective: 'Explain left coronary perfusion dynamics during diastole and chemical mediators governing metabolic autoregulation.',
      stages: [
        {
          id: 'coronary-diastole',
          title: 'Left ventricular perfusion and systolic extravascular compression',
          paragraphs: [
            'During left ventricular systole, powerful intramyocardial wall tension compresses subendocardial microvessels, transiently choking off capillary flow.',
            'As a result, more than 70% to 80% of left coronary myocardial blood flow takes place during ventricular diastole, when wall tension collapses and coronary vessels receive uninterrupted aortic diastolic recoil pressure.',
          ],
          takeaway: 'Left ventricular myocardium is perfused primarily during diastole because systolic compression pinches intramural vessels.',
          diagram: 'pump',
        },
        {
          id: 'metabolic-autoregulation',
          title: 'Metabolic autoregulation of coronary blood flow',
          paragraphs: [
            'Resting myocardium already extracts 70% to 80% of delivered arterial oxygen, leaving negligible oxygen extraction reserve. Any elevation in myocardial oxygen demand (MVO₂) requires proportional increases in coronary blood flow.',
            'Locally accumulated adenosine (from ATP hydrolysis), hypoxia, and endothelium-derived nitric oxide induce potent precapillary vasodilation, linking blood flow to instantaneous metabolic demand.',
          ],
          takeaway: 'Coronary flow relies on local metabolic vasodilation governed primarily by adenosine and endothelium-derived nitric oxide.',
          diagram: 'pressure',
        },
        {
          id: 'cerebral-co2-control',
          title: 'Cerebral autoregulation and CO₂ vascular reactivity',
          paragraphs: [
            'Cerebral blood flow is stringently buffered across mean arterial pressures of 60 to 140 mmHg by intrinsic vascular myogenic tone (Bayliss response).',
            'Furthermore, cerebral arterioles exhibit exquisite sensitivity to arterial PCO₂ (PaCO₂): hypercapnia induces profound vasodilation, whereas hyperventilation-induced hypocapnia triggers arteriolar vasoconstriction and reduces intracranial blood flow.',
          ],
          takeaway: 'Cerebral vessels maintain constant flow via myogenic autoregulation and respond robustly to arterial PaCO₂.',
          diagram: 'brain',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'During which phase of the cardiac cycle does the majority of left ventricular subendocardial perfusion occur?',
        options: [
          {
            id: 'diastolic-perfusion',
            label: 'During ventricular diastole, when myocardial relaxation relieves intramural mechanical compression',
            explanation: 'Correct: systolic intramyocardial wall tension collapses subendocardial vessels; coronary flow surges during diastole.',
          },
          {
            id: 'systolic-isovolumetric',
            label: 'During isovolumetric contraction when intraventricular pressure spikes',
            explanation: 'Incorrect: during isovolumetric contraction, wall tension rises sharply, collapsing intramural capillaries.',
          },
          {
            id: 'rapid-ejection-phase',
            label: 'During peak rapid ventricular ejection',
            explanation: 'Incorrect: maximum systolic ejection generates intense myocardial compression that blunts left coronary inflow.',
          },
          {
            id: 'atrial-systole-only',
            label: 'Exclusively during active atrial systole',
            explanation: 'Incorrect: left ventricular perfusion occurs throughout the entirety of diastole driven by systemic diastolic pressure.',
          },
        ],
      },
    },
  },
});

export const cardioHemostasisLesson = lessonSchema.parse({
  id: 'cardio-hemostasis',
  revision: 1,
  questionId: 'cardio-hemostasis-q1',
  correctOptionId: 'thrombin-fibrin',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cardio-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch18-hemostasis',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/18-5-hemostasis',
      section: 'Chapter 18 · Hemostasis and Blood Clotting',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Sistema cardiovascular',
      sectionTitle: 'Fisiologia cardiovascular',
      hook: 'Como o organismo estanca um sangramento vascular em minutos sem obstruir a circulação inteira com coágulos?',
      title: 'Hemostasia primária, cascata de coagulação e fibrinólise',
      description: 'Aprenda os três pilares do controle hemorrágico: vasoespasmo, tampão plaquetário e rede de fibrina.',
      objective: 'Distinguir hemostasia primária e secundária e identificar os fatores-chave da coagulação e da fibrinólise.',
      stages: [
        {
          id: 'primary-hemostasis',
          title: 'Hemostasia primária: adesão e ativação plaquetária',
          paragraphs: [
            'A lesão endotelial expõe o colágeno subendotelial. O fator de von Willebrand (vWF) conecta o colágeno ao receptor plaquetário glicoproteína Ib (GPIb), promovendo adesão plaquetária imediata.',
            'As plaquetas ativadas mudam de formato, liberam grânulos com ADP e tromboxano A₂ (TXA₂), e expressam receptores GPIIb/IIIa que ligam fibrinogênio para formar o tampão plaquetário primário.',
          ],
          takeaway: 'A hemostasia primária culmina na adesão, ativação e agregação de plaquetas em um tampão instável.',
          diagram: 'tissue',
        },
        {
          id: 'secondary-hemostasis',
          title: 'Hemostasia secundária: trombina e malha de fibrina',
          paragraphs: [
            'A hemostasia secundária consolida o tampão através da cascata de coagulação na superfície fosfolipídica das plaquetas ativadas. O fator tecidual (TF) exposto ativa o fator VII, disparando a via extrínseca.',
            'As vias convergem na via comum: o complexo protrombinase (fator Xa, Va, cálcio e fosfolipídios) cliva a protrombina em trombina (fator IIa). A trombina então cliva o fibrinogênio solúvel em monômeros de fibrina insolúvel, estabilizados pelo fator XIIIa.',
          ],
          takeaway: 'A trombina converte fibrinogênio solúvel em fibrina insolúvel, consolidando o coágulo hemostático.',
          diagram: 'phases',
        },
        {
          id: 'fibrinolysis',
          title: 'Fibrinólise e controle anticoagulante natural',
          paragraphs: [
            'Para evitar trombose descontrolada, o endotélio saudável adjacente expressa trombomodulina (que ativa a proteína C com a proteína S) e antitrombina III potencializada por proteoglicanos de heparina.',
            'Conforme o vaso cicatriza, o ativador do plasminogênio tecidual (t-PA) converte o plasminogênio aderido ao coágulo em plasmina ativa, que degrada a malha de fibrina gerando dímeros D solúveis.',
          ],
          takeaway: 'A plasmina gerada pelo t-PA dissolve a rede de fibrina, restaurando a patência vascular após o reparo.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: na hemostasia secundária, a enzima chave gerada pela via comum que cliva o fibrinogênio solúvel em monômeros de fibrina insolúvel é a ______.',
        blank: 'A enzima central da coagulação é a ______.',
        options: [
          {
            id: 'thrombin-fibrin',
            label: 'Trombina (Fator IIa)',
            explanation: 'Correto: a trombina converte fibrinogênio em fibrina e amplifica a cascata ativando fatores V, VIII e XI.',
          },
          {
            id: 'plasmin-enzyme',
            label: 'Plasmina',
            explanation: 'Incorreto: a plasmina atua na fibrinólise degradando coágulos já formados, não na formação de fibrina.',
          },
          {
            id: 'albumin-protein',
            label: 'Albumina',
            explanation: 'Incorreto: a albumina mantém a pressão oncótica e transporta fármacos, sem atividade proteolítica coagulante.',
          },
          {
            id: 'heparin-molecule',
            label: 'Heparina',
            explanation: 'Incorreto: a heparina é um glicosaminoglicano anticoagulante que potencializa a antitrombina.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Cardiovascular system',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'How does the body staunch a vascular hemorrhage in minutes without clotting off the entire circulating bloodstream?',
      title: 'Primary hemostasis, coagulation cascade, and fibrinolysis',
      description: 'Master the three phases of bleeding arrest: vasospasm, platelet plug assembly, and stable fibrin mesh deposition.',
      objective: 'Distinguish primary from secondary hemostasis and recognize key enzymes in clot stabilization and fibrinolysis.',
      stages: [
        {
          id: 'primary-hemostasis',
          title: 'Primary hemostasis: platelet adhesion and aggregation',
          paragraphs: [
            'Endothelial injury exposes subendothelial collagen fibers. Circulating von Willebrand factor (vWF) binds collagen and captures platelet glycoprotein Ib (GPIb) receptors to initiate adhesion.',
            'Engaged platelets undergo shape change, exocytose storage granules rich in ADP and thromboxane A₂ (TXA₂), and unmask GPIIb/IIIa integrins to crosslink fibrinogen into an initial platelet plug.',
          ],
          takeaway: 'Primary hemostasis drives platelet adhesion, activation, and crosslinking into a temporary hemostatic plug.',
          diagram: 'tissue',
        },
        {
          id: 'secondary-hemostasis',
          title: 'Secondary hemostasis: thrombin and the stable fibrin mesh',
          paragraphs: [
            'Secondary hemostasis reinforces the fragile platelet plug via sequential enzymatic activations on procoagulant platelet membrane surfaces. Exposed tissue factor (TF) complexes with factor VIIa to trigger clotting.',
            'The pathways converge onto the common pathway: the prothrombinase complex (FXa, FVa, Ca²⁺, and phospholipids) cleaves prothrombin into active thrombin (FIIa). Thrombin cleaves soluble fibrinogen into insoluble fibrin polymers crosslinked by FXIIIa.',
          ],
          takeaway: 'Thrombin cleaves soluble fibrinogen into stable insoluble fibrin strands, cementing the hemostatic clot.',
          diagram: 'phases',
        },
        {
          id: 'fibrinolysis',
          title: 'Fibrinolysis and endogenous anticoagulant checks',
          paragraphs: [
            'To limit pathological intravascular thrombosis, adjacent uninjured endothelium displays thrombomodulin (activating protein C with cofactor protein S) and heparan sulfates stimulating antithrombin III.',
            'As wound healing progresses, tissue plasminogen activator (t-PA) hydrolyzes clot-bound plasminogen into active plasmin, which enzymatic digests fibrin fibrils into measurable D-dimer degradation products.',
          ],
          takeaway: 'Active plasmin cleaves fibrin meshes into soluble fragments, restoring vessel lumen patency following tissue repair.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: in secondary hemostasis, the central serine protease generated by the common pathway that cleaves soluble fibrinogen into insoluble fibrin strands is ______.',
        blank: 'The central clotting protease is ______.',
        options: [
          {
            id: 'thrombin-fibrin',
            label: 'Thrombin (Factor IIa)',
            explanation: 'Correct: thrombin hydrolyzes fibrinogen into insoluble fibrin monomers and back-activates factors V, VIII, and XI.',
          },
          {
            id: 'plasmin-enzyme',
            label: 'Plasmina',
            explanation: 'Incorrect: plasmin is the principal fibrinolytic enzyme that degrades clots rather than assembling them.',
          },
          {
            id: 'albumin-protein',
            label: 'Albumin',
            explanation: 'Incorrect: albumin provides colloid oncotic pressure and carrier functions without catalytic clotting activity.',
          },
          {
            id: 'heparin-molecule',
            label: 'Heparin',
            explanation: 'Incorrect: heparin is an endogenous glycosaminoglycan that activates antithrombin to shut down coagulation.',
          },
        ],
      },
    },
  },
});

export const cardioExerciseShockLesson = lessonSchema.parse({
  id: 'cardio-exercise-shock',
  revision: 1,
  questionId: 'cardio-exercise-shock-q1',
  correctOptionId: 'hypovolemic-shock',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'cardio-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch20-shock',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-4-homeostatic-regulation-of-the-vascular-system',
      section: 'Chapter 20 · Circulatory Shock and Exercise Physiology',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Sistema cardiovascular',
      sectionTitle: 'Fisiologia cardiovascular',
      hook: 'Como o débito cardíaco aumenta em até cinco vezes no exercício intenso, e o que falha quando o corpo entra em choque circulatório?',
      title: 'Resposta cardiovascular ao exercício e fisiopatologia do choque',
      description: 'Compare as adaptações integradas ao esforço físico com os colapsos hemodinâmicos dos quatro tipos de choque.',
      objective: 'Identificar as respostas autonômicas ao exercício e contrastar os mecanismos de choque hipovolêmico, cardiogênico, obstrutivo e distributivo.',
      stages: [
        {
          id: 'exercise-hemodynamics',
          title: 'Hemodinâmica integrada no exercício físico aeróbico',
          paragraphs: [
            'Durante o exercício vigoroso, o comando central cortical e mecanorreceptores musculares desencadeiam ativação simpática com retirada vagal: a frequência cardíaca e a contratilidade aumentam, elevando o débito cardíaco de 5 para até 25 L/min.',
            'Ocorre vasoconstrição simpática na circulação esplâncnica e renal, enquanto a vasodilatação metabólica local em músculos ativos reduz a resistência vascular periférica total, otimizando o aporte de oxigênio.',
          ],
          takeaway: 'No exercício, o débito cardíaco quintuplica e o fluxo sanguíneo é maciçamente redistribuído aos músculos esqueléticos.',
          diagram: 'pump',
        },
        {
          id: 'shock-pathophysiology',
          title: 'Fisiopatologia do choque circulatório',
          paragraphs: [
            'O choque é um estado de hipoperfusão tecidual sistêmica grave que resulta em débito de oxigênio celular, acidose lática e disfunção de múltiplos órgãos.',
            'Ele se divide em quatro categorias hemodinâmicas: hipovolêmico (perda de volume intravascular), cardiogênico (falência de bomba), obstrutivo (bloqueio mecânico como embolia pulmonar) e distributivo (vasodilatação patológica como no choque séptico).',
          ],
          takeaway: 'O choque caracteriza-se por hipoperfusão tecidual difusa e inadequação entre oferta e demanda de oxigênio.',
          diagram: 'pressure',
        },
        {
          id: 'shock-compensation',
          title: 'Respostas compensatórias e transição para o choque irreversível',
          paragraphs: [
            'Inicialmente, barorreflexos e o sistema renina-angiotensina-aldosterona (SRAA) tentam restaurar a pressão arterial por taquicardia e intensa retenção hídrica.',
            'Se a hipóxia celular persistir, os esfíncteres pré-capilares perdem o tônus sob acidose enquanto as vênulas permanecem constritas, levando a estase capilar, dano endotelial, extravasamento maciço de fluido e colapso irreversível.',
          ],
          takeaway: 'Acidose celular prolongada leva à perda do tônus vascular, aumento da permeabilidade capilar e choque refratário.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual tipo de choque circulatório é primariamente caracterizado por queda grave da pré-carga cardíaca decorrente de hemorragia aguda ou desidratação maciça?',
        options: [
          {
            id: 'hypovolemic-shock',
            label: 'Choque hipovolêmico',
            explanation: 'Correto: a perda de volume intravascular reduz o retorno venoso, a pré-carga e o débito cardíaco.',
          },
          {
            id: 'distributive-septic',
            label: 'Choque distributivo séptico',
            explanation: 'Incorreto: o choque distributivo decorre de vasodilatação sistêmica profunda e queda da pós-carga.',
          },
          {
            id: 'cardiogenic-infarct',
            label: 'Choque cardiogênico por infarto',
            explanation: 'Incorreto: o choque cardiogênico é decorrente da falência da contratilidade intrínseca miocárdica com pré-carga elevada.',
          },
          {
            id: 'obstructive-tamponade',
            label: 'Choque neurogênico medular',
            explanation: 'Incorreto: o choque neurogênico cursa com perda do tônus simpático vasomotor e bradicardia relativa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Cardiovascular system',
      sectionTitle: 'Cardiovascular physiology',
      hook: 'How can cardiac output surge fivefold during strenuous athletics, and why does this circulatory reserve collapse during shock?',
      title: 'Cardiovascular response to exercise and shock pathophysiology',
      description: 'Contrast coordinated cardiovascular adaptations to exercise against the life-threatening hemodynamics of circulatory shock.',
      objective: 'Detail autonomic exercise responses and contrast mechanisms of hypovolemic, cardiogenic, obstructive, and distributive shock.',
      stages: [
        {
          id: 'exercise-hemodynamics',
          title: 'Integrated hemodynamics in aerobic exercise',
          paragraphs: [
            'During vigorous exertion, central command and muscular ergoreceptors induce intense sympathetic activation combined with parasympathetic withdrawal: stroke volume and heart rate escalate, surging cardiac output from 5 up to 25 L/min.',
            'Alpha-1-mediated vasoconstriction shunts blood away from splanchnic and renal territories, while potent metabolic vasodilation lowers resistance in active skeletal muscle beds to enrich oxygen extraction.',
          ],
          takeaway: 'Exercise multiplies cardiac output fivefold while selectively shunting systemic perfusion to exercising muscle.',
          diagram: 'pump',
        },
        {
          id: 'shock-pathophysiology',
          title: 'Pathophysiology of circulatory shock',
          paragraphs: [
            'Circulatory shock is defined as generalized, severe tissue hypoperfusion causing an oxygen delivery-consumption mismatch, cellular anaerobic metabolism, lactic acidosis, and end-organ failure.',
            'Shock is clinically divided into four pathophysiological categories: hypovolemic (volume loss), cardiogenic (pump failure), obstructive (physical impediment to filling/ejection), and distributive (pathological systemic vasodilation as in sepsis).',
          ],
          takeaway: 'Circulatory shock reflects widespread microvascular hypoperfusion failing to satisfy baseline tissue oxygen consumption.',
          diagram: 'pressure',
        },
        {
          id: 'shock-compensation',
          title: 'Neuroendocrine compensation and refractory shock',
          paragraphs: [
            'Early compensatory mechanics engage sympathetic baroreflexes and the renin-angiotensin-aldosterone axis to defend blood pressure via profound cutaneous vasoconstriction and antidiuresis.',
            'Prolonged cellular hypoxia produces tissue acidosis that paralyzes precapillary sphincter tone while postcapillary venules remain constricted, causing capillary pooling, endothelial disruption, and refractory multi-organ collapse.',
          ],
          takeaway: 'Protracted microvascular acidosis induces loss of vascular resistance, widespread capillary leak, and refractory shock.',
          diagram: 'inflammation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which clinical category of circulatory shock is fundamentally driven by a critical depletion of intravascular volume following acute hemorrhage or severe fluid loss?',
        options: [
          {
            id: 'hypovolemic-shock',
            label: 'Hypovolemic shock',
            explanation: 'Correct: catastrophic loss of blood or extracellular fluid sharply reduces venous return, ventricular preload, and stroke volume.',
          },
          {
            id: 'distributive-septic',
            label: 'Distributive septic shock',
            explanation: 'Incorrect: distributive shock is primarily defined by severe systemic vasodilation and reduced peripheral resistance.',
          },
          {
            id: 'cardiogenic-infarct',
            label: 'Cardiogenic shock secondary to acute infarction',
            explanation: 'Incorrect: cardiogenic shock results from direct loss of myocardial pump performance despite adequate or elevated preload.',
          },
          {
            id: 'obstructive-tamponade',
            label: 'Neurogenic shock after spinal cord trauma',
            explanation: 'Incorrect: neurogenic shock results from the loss of sympathetic vasomotor tone, presenting with vasodilation and inappropriate bradycardia.',
          },
        ],
      },
    },
  },
});
