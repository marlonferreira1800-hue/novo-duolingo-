import { lessonSchema } from '../src/contracts/learning';

export const respiratoryMechanicsLesson = lessonSchema.parse({
  id: 'respiratory-mechanics',
  revision: 1,
  questionId: 'respiratory-mechanics-surfactant',
  correctOptionId: 'surface-tension',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-mechanics',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing',
      section: 'Chapter 22 · The Process of Breathing and Pulmonary Mechanics',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Como as variações de pressão no tórax conseguem mover meio litro de ar para dentro e fora dos pulmões a cada respiração tranquila?',
      title: 'Mecânica ventilatória: pressões, lei de Boyle e surfactante',
      description: 'Entenda os gradientes de pressão transpulmonar, a contração diafragmática e a estabilização alveolar pelo surfactante.',
      objective: 'Aplicar a lei de Boyle à ventilação pulmonar e explicar a função biofísica do surfactante na complacência.',
      stages: [
        {
          id: 'boyle-law',
          title: 'Lei de Boyle e contração diafragmática',
          paragraphs: [
            'A ventilação pulmonar obedece à lei de Boyle (P₁V₁ = P₂V₂): a pressão de um gás varia inversamente ao seu volume em temperatura constante.',
            'Na inspiração quieta, o diafragma contrai e desce, aumentando o volume vertical do tórax. A pressão intra-alveolar cai para -1 cmH₂O em relação à atmosférica, fazendo o ar fluir para dentro dos pulmões.',
          ],
          takeaway: 'O aumento do volume torácico reduz a pressão alveolar abaixo da atmosférica, puxando o ar para os pulmões.',
          diagram: 'lung',
        },
        {
          id: 'pleural-pressure',
          title: 'Pressão intrapleural negativa e recolhimento elástico',
          paragraphs: [
            'O espaço entre as pleuras visceral e parietal possui uma pressão sempre subatmosférica (cerca de -5 cmH₂O no final da expiração de repouso).',
            'Essa pressão negativa decorre de duas forças opostas: a tendência elástica do pulmão de colapsar para dentro e a tendência elástica da parede torácica de expandir para fora.',
          ],
          takeaway: 'A pressão intrapleural negativa mantém os pulmões distendidos contra a parede torácica.',
          diagram: 'lung',
        },
        {
          id: 'surfactant-role',
          title: 'Surfactante pulmonar e tensão superficial',
          paragraphs: [
            'A interface ar-líquido dos alvéolos gera alta tensão superficial que tenderia a colapsar alvéolos menores de acordo com a lei de Laplace (P = 2T/r).',
            'Pneumócitos tipo II secretam o surfactante pulmonar (rico em dipalmitoilfosfatidilcolina - DPPC), que reduz drasticamente a tensão superficial, aumenta a complacência e impede atelectasias.',
          ],
          takeaway: 'O surfactante diminui a tensão superficial alveolar, prevenindo o colabamento no final da expiração.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o papel fisiológico fundamental do surfactante pulmonar sintetizado pelos pneumócitos tipo II?',
        options: [
          {
            id: 'surface-tension',
            label: 'Reduzir a tensão superficial na interface ar-líquido alveolar e prevenir o colabamento pulmonar',
            explanation: 'Correto: o surfactante reduz a tensão superficial, estabiliza alvéolos de diferentes calibres e reduz o trabalho respiratório.',
          },
          {
            id: 'airway-resistance-increase',
            label: 'Aumentar a resistência nas vias aéreas superiores para desacelerar o fluxo de gás',
            explanation: 'Incorreto: o surfactante atua na periferia alveolar aumentando a complacência e não a resistência aérea.',
          },
          {
            id: 'mucus-hypersecretion',
            label: 'Promover hipersecreção de muco espesso nos bronquíolos respiratórios',
            explanation: 'Incorreto: a hipersecreção de muco decorre de inflamação e prejudica a ventilação alveolar.',
          },
          {
            id: 'capillary-constriction',
            label: 'Induzir vasoconstrição permanente nos capilares perialveolares',
            explanation: 'Incorreto: a perfusão capilar precisa ser mantida para trocas gasosas eficientes, sem vasoconstrição difusa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'How do minute pressure changes inside the thoracic cage move half a liter of atmospheric air into the lungs with every quiet breath?',
      title: 'Ventilatory mechanics: pressures, Boyle’s law, and surfactant',
      description: 'Master transpulmonary pressure gradients, diaphragmatic excursion, and alveolar stabilization by pulmonary surfactant.',
      objective: 'Apply Boyle’s law to pulmonary ventilation and describe surfactant biophysics in respiratory compliance.',
      stages: [
        {
          id: 'boyle-law',
          title: 'Boyle’s law and diaphragmatic excursion',
          paragraphs: [
            'Pulmonary ventilation is governed by Boyle’s law (P₁V₁ = P₂V₂): the pressure of a given gas mass is inversely proportional to its volume at constant temperature.',
            'During quiet inspiration, diaphragmatic contraction increases thoracic vertical dimension. Intra-alveolar pressure drops to approximately -1 cmH₂O below atmospheric, drawing air into the lungs.',
          ],
          takeaway: 'Thoracic expansion lowers alveolar pressure below atmospheric, establishing an inward airflow gradient.',
          diagram: 'lung',
        },
        {
          id: 'pleural-pressure',
          title: 'Negative intrapleural pressure and elastic recoil',
          paragraphs: [
            'The fluid-filled intrapleural space between parietal and visceral pleurae maintains subatmospheric pressure (around -5 cmH₂O at end-expiration).',
            'This suction pressure is generated by two opposing vectors: the inward elastic recoil of lung parenchyma versus the outward spring-like recoil of the chest wall.',
          ],
          takeaway: 'Negative intrapleural pressure keeps delicate lung parenchyma coupled to the expanding chest wall.',
          diagram: 'lung',
        },
        {
          id: 'surfactant-role',
          title: 'Pulmonary surfactant and surface tension',
          paragraphs: [
            'The air-water interface of the alveoli creates high surface tension that would cause small alveoli to collapse into larger ones according to the law of Laplace (P = 2T/r).',
            'Type II alveolar cells secrete surfactant (rich in dipalmitoylphosphatidylcholine - DPPC), which dramatically lowers surface tension, improves compliance, and prevents atelectasis.',
          ],
          takeaway: 'Surfactant reduces surface tension at the alveolar interface, preventing end-expiratory atelectasis.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the primary physiological function of pulmonary surfactant produced by type II alveolar cells?',
        options: [
          {
            id: 'surface-tension',
            label: 'Reducing alveolar air-liquid surface tension to prevent end-expiratory collapse',
            explanation: 'Correct: surfactant lowers surface tension, prevents alveolar collapse (atelectasis), and increases lung compliance.',
          },
          {
            id: 'airway-resistance-increase',
            label: 'Increasing airflow resistance across conducting airways to delay exhalation',
            explanation: 'Incorrect: surfactant functions in peripheral alveoli to enhance compliance rather than impeding airflow.',
          },
          {
            id: 'mucus-hypersecretion',
            label: 'Inducing thick mucus secretion to coat respiratory bronchioles',
            explanation: 'Incorrect: mucus plugging impairs alveolar ventilation; surfactant is an amphipathic lipid film, not mucus.',
          },
          {
            id: 'capillary-constriction',
            label: 'Triggering diffuse vasoconstriction of perialveolar capillaries',
            explanation: 'Incorrect: capillaries require unobstructed flow for gas diffusion; surfactant does not act as a vascular constrictor.',
          },
        ],
      },
    },
  },
});

export const respiratoryVolumesLesson = lessonSchema.parse({
  id: 'respiratory-volumes',
  revision: 1,
  questionId: 'respiratory-volumes-vital',
  correctOptionId: 'vital-capacity',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-volumes',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing',
      section: 'Chapter 22 · Respiratory Volumes and Capacities',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Quanto ar permanece nos seus pulmões mesmo após você expirar todo o fôlego com a força máxima?',
      title: 'Volumes e capacidades pulmonares: espirometria clínica',
      description: 'Diferencie volume corrente, volume de reserva inspiratório e expiratório, volume residual e capacidade vital.',
      objective: 'Distinguir os 4 volumes pulmonares primários e calcular capacidades a partir da espirometria.',
      stages: [
        {
          id: 'tidal-volume',
          title: 'Volume corrente e volumes de reserva',
          paragraphs: [
            'O volume corrente (VC) é o ar inspirado ou expirado em cada ciclo respiratório basal tranquilo (aproximadamente 500 mL no adulto jovem).',
            'O volume de reserva inspiratório (VRI, cerca de 3.000 mL) é o volume extra inspirado com esforço máximo após uma inspiração normal. O volume de reserva expiratório (VRE, cerca de 1.100 mL) é o ar expelido com expiração forçada após o VC.',
          ],
          takeaway: 'O volume corrente mede a respiração basal e os volumes de reserva medem o esforço respiratório adicional.',
          diagram: 'lung',
        },
        {
          id: 'residual-volume',
          title: 'Volume residual: o ar inexpulsável',
          paragraphs: [
            'Mesmo após a expiração mais forçada e prolongada possível, resta ar nos pulmões: o volume residual (VR, cerca de 1.200 mL).',
            'O VR não pode ser expelido nem medido por espirometria simples. Ele mantém os alvéolos patentes e permite trocas gasosas contínuas entre os ciclos respiratórios.',
          ],
          takeaway: 'O volume residual permanece nos pulmões mesmo após esforço expiratório máximo.',
          diagram: 'lung',
        },
        {
          id: 'capacities',
          title: 'Capacidades: somas de dois ou mais volumes',
          paragraphs: [
            'A Capacidade Vital (CV = VRI + VC + VRE, cerca de 4.600 mL) representa o volume máximo de gás expelido dos pulmões após uma inspiração máxima.',
            'A Capacidade Pulmonar Total (CPT = CV + VR) engloba todo o volume de gás presente nos pulmões na insuflação máxima.',
          ],
          takeaway: 'A capacidade vital é o volume máximo expirado após inspiração máxima (VRI + VC + VRE).',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual capacidade pulmonar representa o volume máximo de ar que pode ser expelido dos pulmões após uma inspiração máxima forçada?',
        options: [
          {
            id: 'vital-capacity',
            label: 'Capacidade Vital (soma de VRI, VC e VRE)',
            explanation: 'Correto: a capacidade vital mede a amplitude máxima de ventilação voluntária obtida pelo paciente.',
          },
          {
            id: 'residual-volume',
            label: 'Volume residual (ar retido nos alvéolos)',
            explanation: 'Incorreto: o volume residual é o ar que não consegue ser expelido mesmo com expiração máxima.',
          },
          {
            id: 'tidal-volume',
            label: 'Volume corrente em repouso basal',
            explanation: 'Incorreto: o volume corrente é o valor movimentado em respiração de repouso (~500 mL).',
          },
          {
            id: 'functional-residual-capacity',
            label: 'Capacidade residual funcional ao término do repouso',
            explanation: 'Incorreto: a CRF é o volume remanescente nos pulmões após uma expiração corrente passiva de repouso.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'How much gas remains trapped inside your lungs even after you forcefully exhale every possible breath?',
      title: 'Lung volumes and capacities: clinical spirometry',
      description: 'Master tidal volume, inspiratory and expiratory reserves, residual volume, and diagnostic capacities.',
      objective: 'Differentiate the four primary lung volumes and calculate clinical capacities from spirometric records.',
      stages: [
        {
          id: 'tidal-volume',
          title: 'Tidal volume and respiratory reserve volumes',
          paragraphs: [
            'Tidal volume (TV) represents the volume of air inspired or expired with each peaceful basal breath (approximately 500 mL in a healthy young adult).',
            'Inspiratory reserve volume (IRV, ~3,000 mL) is the maximal air inspired beyond quiet tidal breath. Expiratory reserve volume (ERV, ~1,100 mL) is the extra air forcefully expired after tidal expiration.',
          ],
          takeaway: 'Tidal volume measures resting breaths; reserve volumes reflect maximal respiratory recruitment.',
          diagram: 'lung',
        },
        {
          id: 'residual-volume',
          title: 'Residual volume: the untrapped gas volume',
          paragraphs: [
            'Even following the most exhaustive maximal exhalation, gas remains in the airways: the residual volume (RV, ~1,200 mL).',
            'Residual volume cannot be measured by simple spirometry. It keeps alveolar units patent and sustains gas exchange between breaths.',
          ],
          takeaway: 'Residual volume remains trapped in lung units even after maximal forced expiratory effort.',
          diagram: 'lung',
        },
        {
          id: 'capacities',
          title: 'Capacities: sums of two or more lung volumes',
          paragraphs: [
            'Vital Capacity (VC = IRV + TV + ERV, ~4,600 mL) measures the maximal volume exhaled from full inspiratory expansion.',
            'Total Lung Capacity (TLC = VC + RV) represents the absolute volume of air contained within the pulmonary system after maximal inspiratory effort.',
          ],
          takeaway: 'Vital capacity represents the maximal air displaced between full inspiration and exhalation (IRV + TV + ERV).',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which pulmonary capacity represents the maximal volume of gas that can be exhaled following maximal forced inspiration?',
        options: [
          {
            id: 'vital-capacity',
            label: 'Vital Capacity (sum of IRV, TV, and ERV)',
            explanation: 'Correct: vital capacity quantifies the maximum voluntary ventilatory excursion available to the patient.',
          },
          {
            id: 'residual-volume',
            label: 'Residual volume trapped inside alveoli',
            explanation: 'Incorrect: residual volume is the air volume that cannot be exhaled even during maximal effort.',
          },
          {
            id: 'tidal-volume',
            label: 'Quiet baseline tidal volume',
            explanation: 'Incorrect: tidal volume corresponds to normal resting breathing without forced recruitment (~500 mL).',
          },
          {
            id: 'functional-residual-capacity',
            label: 'Functional residual capacity at resting expiration',
            explanation: 'Incorrect: FRC is the volume remaining in the lungs at the end of a normal passive expiration.',
          },
        ],
      },
    },
  },
});

export const respiratoryHemoglobinLesson = lessonSchema.parse({
  id: 'respiratory-hemoglobin',
  revision: 1,
  questionId: 'respiratory-hemoglobin-bohr',
  correctOptionId: 'right-shift-o2-release',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-transport',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-5-transport-of-gases',
      section: 'Chapter 22 · Transport of Gases in Blood',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Como a hemoglobina "sabe" que deve capturar oxigênio nos pulmões e liberá-lo exatamente nos tecidos que mais trabalham?',
      title: 'Transporte de gases: saturação da hemoglobina e efeito Bohr',
      description: 'Compreenda a cooperatividade da ligação do O₂, a curva sigmoide e os moduladores alostéricos do desvio da curva.',
      objective: 'Interpretar a curva de dissociação oxigênio-hemoglobina e reconhecer o efeito Bohr e seus moduladores fisiológicos.',
      stages: [
        {
          id: 'oxygen-binding',
          title: 'Hemoglobina e cooperatividade alostérica',
          paragraphs: [
            'Mais de 98% do oxigênio sanguíneo é transportado ligado aos grupos heme da hemoglobina tetramérica (HbA), enquanto menos de 2% viaja dissolvido no plasma.',
            'A ligação da primeira molécula de O₂ induz transição da conformação T (tensa, baixa afinidade) para a conformação R (relaxada, alta afinidade), gerando a cooperatividade positiva.',
          ],
          takeaway: 'A transição alostérica da forma Tensa para Relaxada produz cooperatividade positiva na captação de O₂.',
          diagram: 'lung',
        },
        {
          id: 'dissociation-curve',
          title: 'A curva sigmoide de dissociação',
          paragraphs: [
            'A cooperatividade resulta em uma curva de dissociação em formato sigmoide (em "S"). Nos capilares pulmonares (PO₂ ~100 mmHg), a hemoglobina atinge ~98% de saturação.',
            'Nos tecidos em repouso (PO₂ ~40 mmHg), a saturação cai para cerca de 75%, liberando cerca de 25% de seu conteúdo e retendo uma ampla margem de reserva oxifórica.',
          ],
          takeaway: 'A curva sigmoide garante saturação plena nos pulmões e descarregamento eficiente em tecidos periféricos.',
          diagram: 'lung',
        },
        {
          id: 'bohr-effect',
          title: 'Efeito Bohr: desvio para a direita em tecidos ativos',
          paragraphs: [
            'Em tecidos com metabolismo acelerado ocorrem elevação de PCO₂, aumento de íons H⁺ (queda do pH), aumento de temperatura e de 2,3-bisfosfoglicerato (2,3-BPG).',
            'Esses fatores estabilizam a forma T, desviando a curva para a direita (efeito Bohr): para a mesma PO₂, a afinidade da hemoglobina cai, descarregando mais O₂ para os tecidos necessitados.',
          ],
          takeaway: 'O efeito Bohr desvia a curva para a direita (pH baixo, CO₂ alto, calor), facilitando a liberação de O₂ aos tecidos.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o impacto funcional do efeito Bohr quando o sangue atinge um músculo esquelético sob intensa atividade metabólica?',
        options: [
          {
            id: 'right-shift-o2-release',
            label: 'Desvio da curva para a direita (menor afinidade por O₂), facilitando a liberação de oxigênio aos tecidos',
            explanation: 'Correto: acidose local e hipercapnia reduzem a afinidade da Hb por O₂, descarregando oxigênio prontamente no tecido ativo.',
          },
          {
            id: 'left-shift-increased-affinity',
            label: 'Desvio da curva para a esquerda com retenção irreversível de oxigênio pela molécula de globina',
            explanation: 'Incorreto: desvio para a esquerda ocorre com alcalose e hipotermia, aumentando a afinidade por O₂.',
          },
          {
            id: 'irreversible-co-binding',
            label: 'Ligação irreversível do monóxido de carbono bloqueando os quatro sítios férricos',
            explanation: 'Incorreto: isso descreve a intoxicação por monóxido de carbono (carboxiemoglobina), e não o efeito Bohr.',
          },
          {
            id: 'inhibition-of-carbonic-anhydrase',
            label: 'Inibição imediata da anidrase carbônica impedindo a conversão de bicarbonato',
            explanation: 'Incorreto: o efeito Bohr é um mecanismo alostérico que depende dos prótons gerados pela anidrase carbônica ativa.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'How does hemoglobin selectively pick up oxygen in the lungs and deliver it precisely to the most metabolically demanding tissues?',
      title: 'Gas transport: hemoglobin saturation and the Bohr effect',
      description: 'Explore oxygen-binding cooperativity, the sigmoid dissociation curve, and allosteric modulators of oxygen delivery.',
      objective: 'Interpret the oxyhemoglobin dissociation curve and explain the Bohr effect under physiological stress.',
      stages: [
        {
          id: 'oxygen-binding',
          title: 'Hemoglobin and positive cooperativity',
          paragraphs: [
            'Over 98% of blood oxygen is transported reversibly bound to the four iron-heme groups of tetrameric hemoglobin (HbA), while less than 2% dissolves in plasma.',
            'Binding of the first O₂ molecule triggers an allosteric transition from the low-affinity T (tense) state to the high-affinity R (relaxed) state, driving positive cooperativity.',
          ],
          takeaway: 'Transition from Tense to Relaxed conformation produces positive cooperativity in oxygen binding.',
          diagram: 'lung',
        },
        {
          id: 'dissociation-curve',
          title: 'The sigmoidal dissociation curve',
          paragraphs: [
            'Cooperativity gives the oxyhemoglobin dissociation curve its signature S-shape. In pulmonary capillaries (PO₂ ~100 mmHg), hemoglobin reaches ~98% oxygen saturation.',
            'In resting systemic tissues (PO₂ ~40 mmHg), saturation falls to ~75%, releasing ~25% of carried O₂ while maintaining a large protective reserve.',
          ],
          takeaway: 'The sigmoidal curve ensures full loading in the lungs and responsive unloading in systemic capillaries.',
          diagram: 'lung',
        },
        {
          id: 'bohr-effect',
          title: 'The Bohr effect: right-shifting in active tissues',
          paragraphs: [
            'Strenuously exercising tissues generate elevated PCO₂, hydrogen ions (lowered pH), increased temperature, and 2,3-bisphosphoglycerate (2,3-BPG).',
            'These allosteric ligands stabilize the T state, shifting the dissociation curve to the right (the Bohr effect): at any PO₂, oxygen affinity drops, releasing more O₂.',
          ],
          takeaway: 'The Bohr effect shifts the curve rightward (low pH, high CO₂, heat), enhancing oxygen unloading in tissues.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the physiological consequence of the Bohr effect when arterial blood reaches actively exercising skeletal muscle?',
        options: [
          {
            id: 'right-shift-o2-release',
            label: 'A rightward shift of the dissociation curve, lowering oxygen affinity and facilitating O₂ unloading',
            explanation: 'Correct: local acidosis and hypercapnia decrease hemoglobin affinity for O₂, unloading vital oxygen into working myocytes.',
          },
          {
            id: 'left-shift-increased-affinity',
            label: 'A leftward shift of the curve causing tight irreversible oxygen retention by globin chains',
            explanation: 'Incorrect: leftward shifts occur during hypothermia or alkalosis, increasing oxygen binding affinity.',
          },
          {
            id: 'irreversible-co-binding',
            label: 'Irreversible carbon monoxide poisoning locking iron porphyrin rings',
            explanation: 'Incorrect: this describes carboxyhemoglobin toxicity rather than reversible physiological Bohr regulation.',
          },
          {
            id: 'inhibition-of-carbonic-anhydrase',
            label: 'Total shutdown of intraerythrocytic carbonic anhydrase blocking bicarbonate synthesis',
            explanation: 'Incorrect: carbonic anhydrase remains fully active, generating the very protons that drive the Bohr effect.',
          },
        ],
      },
    },
  },
});

export const respiratoryControlLesson = lessonSchema.parse({
  id: 'respiratory-control',
  revision: 1,
  questionId: 'respiratory-control-co2',
  correctOptionId: 'central-chemoreceptors-co2',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-control',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing',
      section: 'Chapter 22 · Neural Control of Ventilation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Você consegue prender a respiração voluntariamente, mas o que faz o cérebro forçá-lo a respirar de qualquer maneira?',
      title: 'Controle da respiração: centros bulbares e quimiorreceptores',
      description: 'Estude o gerador central de ritmo respiratório no tronco encefálico e os quimiorreceptores sensíveis ao CO₂ e ao pH.',
      objective: 'Identificar os centros respiratórios do bulbo e da ponte e o papel do CO₂/H⁺ na regulação da ventilação.',
      stages: [
        {
          id: 'medullary-centers',
          title: 'Centros respiratórios no bulbo e ponte',
          paragraphs: [
            'O ritmo ventilatório basal involuntário é gerado no bulbo pelo complexo pre-Bötzinger e pelo grupo respiratório dorsal (GRD), que envia impulsos aos nervos frênicos para contrair o diafragma.',
            'O grupo respiratório ventral (GRV) atua na expiração forçada, enquanto os centros pontinos (pneumotáxico e apnêustico) modulam a duração da inspiração e a transição do ciclo.',
          ],
          takeaway: 'Centros bulbares coordenam o ritmo automático e centros pontinos refinam a transição ventilatória.',
          diagram: 'lung',
        },
        {
          id: 'chemoreceptors',
          title: 'Quimiorreceptores centrais e periféricos',
          paragraphs: [
            'Os quimiorreceptores centrais situam-se na superfície ventrolateral do bulbo, banhados pelo líquido cefalorraquidiano (LCR). O CO₂ arterial cruza livremente a barreira hematoencefálica e gera íons H⁺ no LCR via anidrase carbônica.',
            'A elevação de H⁺ no LCR é o estímulo químico primário mais potente para acelerar a frequência respiratória. Quimiorreceptores periféricos nos corpos carotídeos e aórticos respondem à hipóxia marcante (PaO₂ < 60 mmHg) e acidose.',
          ],
          takeaway: 'Quimiorreceptores centrais monitoram H⁺ derivado de CO₂ no LCR e são o principal motor da ventilação basal.',
          diagram: 'lung',
        },
        {
          id: 'ventilation-perfusion',
          title: 'A relação ventilação-perfusão (V/Q)',
          paragraphs: [
            'Para que a hematose seja eficiente, a ventilação alveolar (V) deve corresponder ao fluxo sanguíneo capilar pulmonar (Q), com relação global média próxima a 0,8.',
            'Em áreas pouco ventiladas, ocorre vasoconstrição pulmonar hipóxica — mecanismo reflexo protetor que desvia o fluxo sanguíneo para alvéolos bem oxigenados.',
          ],
          takeaway: 'A vasoconstrição pulmonar hipóxica desvia a perfusão para áreas alveolares bem ventiladas.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o principal estímulo fisiológico detectado pelos quimiorreceptores centrais bulbares para aumentar o drive ventilatório em condições normais?',
        options: [
          {
            id: 'central-chemoreceptors-co2',
            label: 'Aumento da PCO₂ arterial, gerando acidificação por íons H⁺ no líquido cefalorraquidiano',
            explanation: 'Correto: o CO₂ cruza a barreira hematoencefálica e forma H⁺ no líquor, estimulando diretamente os quimiorreceptores centrais.',
          },
          {
            id: 'peripheral-hypoxia-only',
            label: 'Pequenas oscilações na pressão parcial de oxigênio acima de 90 mmHg',
            explanation: 'Incorreto: quimiorreceptores centrais não respondem a O₂; quimiorreceptores periféricos só disparam hipóxia se PaO₂ cair abaixo de 60 mmHg.',
          },
          {
            id: 'baroreceptor-stretch',
            label: 'Estimulação mecânica de barorreceptores carotídeos por hipertensão',
            explanation: 'Incorreto: barorreceptores regulam a pressão arterial sistêmica e cronotropismo cardíaco, não o drive respiratório químico primário.',
          },
          {
            id: 'pulmonary-stretch-inhibition',
            label: 'Estiramento contínuo dos mecanorreceptores da musculatura bronquiolar lisa',
            explanation: 'Incorreto: o reflexo de insuflação de Hering-Breuer inibe a inspiração excessiva para evitar hiperdistensão, não sendo o drive químico primário.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'You can hold your breath voluntarily, but what neural trigger ultimately overrules your willpower and forces you to breathe?',
      title: 'Control of ventilation: medullary rhythm and chemoreceptors',
      description: 'Explore brainstem respiratory rhythm generators and chemoreceptor feedback loops sensitive to CO₂ and pH.',
      objective: 'Identify brainstem respiratory centers and explain the dominant role of CO₂/H⁺ in driving ventilatory demand.',
      stages: [
        {
          id: 'medullary-centers',
          title: 'Medullary and pontine respiratory rhythm centers',
          paragraphs: [
            'Involuntary ventilatory rhythm originates in the medulla within the pre-Bötzinger complex and dorsal respiratory group (DRG), sending rhythmic motor output down phrenic nerves to the diaphragm.',
            'The ventral respiratory group (VRG) coordinates forced exhalation, while pontine centers (pneumotaxic and apneustic centers) smooth cycle transitions and cap inspiratory depth.',
          ],
          takeaway: 'Medullary centers drive autonomic rhythm while pontine nuclei modulate pattern transitions.',
          diagram: 'lung',
        },
        {
          id: 'chemoreceptors',
          title: 'Central and peripheral chemoreceptor feedback',
          paragraphs: [
            'Central chemoreceptors line the ventrolateral medulla bathed by cerebrospinal fluid (CSF). Arterial CO₂ diffuses across the blood-brain barrier to generate H⁺ ions via carbonic anhydrase.',
            'CSF acidification by H⁺ is the primary physiological drive determining resting respiratory rate. Peripheral chemoreceptors (carotid/aortic bodies) respond to severe hypoxia (PaO₂ < 60 mmHg) and acidosis.',
          ],
          takeaway: 'Central chemoreceptors sense CO₂-derived H⁺ in cerebrospinal fluid as the primary baseline drive.',
          diagram: 'lung',
        },
        {
          id: 'ventilation-perfusion',
          title: 'Ventilation-perfusion (V/Q) matching',
          paragraphs: [
            'Optimal gas exchange requires matching alveolar ventilation (V) with pulmonary capillary perfusion (Q), maintaining an ideal resting global ratio near 0.8.',
            'In poorly ventilated alveoli, hypoxic pulmonary vasoconstriction reflexively constricts local arterioles, rerouting capillary blood toward well-ventilated lung zones.',
          ],
          takeaway: 'Hypoxic pulmonary vasoconstriction directs capillary perfusion toward well-ventilated lung regions.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the dominant physiological stimulus detected by central medullary chemoreceptors driving resting ventilation?',
        options: [
          {
            id: 'central-chemoreceptors-co2',
            label: 'Elevated arterial PCO₂, causing local H⁺ acidification in the cerebrospinal fluid',
            explanation: 'Correct: lipophilic CO₂ crosses the blood-brain barrier into CSF, liberating H⁺ that directly depolarizes central chemoreceptors.',
          },
          {
            id: 'peripheral-hypoxia-only',
            label: 'Minor resting fluctuations in arterial PO₂ above 90 mmHg',
            explanation: 'Incorrect: central chemoreceptors are insensitive to O₂; peripheral chemoreceptors trigger only under profound hypoxia (PaO₂ < 60 mmHg).',
          },
          {
            id: 'baroreceptor-stretch',
            label: 'Mechanical carotid sinus baroreceptor distension caused by hypertension',
            explanation: 'Incorrect: arterial baroreceptors modulate autonomic vasomotor tone and heart rate, not the primary chemical ventilatory drive.',
          },
          {
            id: 'pulmonary-stretch-inhibition',
            label: 'Sustained stretching of mechanical stretch receptors in bronchial smooth muscle',
            explanation: 'Incorrect: the Hering-Breuer reflex terminates excessive lung overinflation rather than initiating the chemical drive to breathe.',
          },
        ],
      },
    },
  },
});
