import { lessonSchema } from '../src/contracts/learning';

export const respiratoryVqLesson = lessonSchema.parse({
  id: 'respiratory-vq',
  revision: 1,
  questionId: 'respiratory-vq-q1',
  correctOptionId: 'apex-high-vq',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-gas-exchange',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange',
      section: 'Chapter 22 · Ventilation and Perfusion Matching',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Por que o topo e a base dos pulmões trocam oxigênio com eficiências tão diferentes?',
      title: 'Zonas de West e relação ventilação/perfusão (V/Q)',
      description: 'Entenda a distribuição gravitacional do fluxo sanguíneo pulmonar, as zonas de West e o acoplamento ventilação/perfusão.',
      objective: 'Analisar as variações regionais da relação V/Q no pulmão e suas repercussões nas pressões parciais alveolares de O2 e CO2.',
      stages: [
        {
          id: 'west-zones-gravity',
          title: 'Gravidade e zonas fisiológicas de West',
          paragraphs: [
            'A circulação pulmonar é um circuito de baixa pressão e alta complacência. Em posição ortostática, a gravidade cria um gradiente hidrostático marcante entre o ápice e a base pulmonar.',
            'John West dividiu o pulmão em três zonas funcionais com base nas relações entre a pressão arterial pulmonar (Pa), alveolar (PA) e venosa pulmonar (Pv). Na zona 1 apical, teoricamente PA > Pa > Pv, podendo colabar capilares; na zona 3 da base, Pa > Pv > PA, mantendo fluxo capilar contínuo.',
          ],
          takeaway: 'O fluxo sanguíneo e a ventilação aumentam em direção à base, mas a perfusão cresce muito mais rapidamente.',
          diagram: 'pressure',
        },
        {
          id: 'vq-gradient-mismatch',
          title: 'O gradiente regional da relação V/Q',
          paragraphs: [
            'Embora tanto a ventilação (V) quanto a perfusão (Q) sejam maiores na base pulmonar, o fluxo sanguíneo aumenta com maior declive. Como consequência, a relação V/Q é alta no ápice (~3,0) e baixa na base (~0,6).',
            'No ápice hiperventilado em relação ao fluxo, a PO2 alveolar é elevada (~130 mmHg) e a PCO2 é baixa (~28 mmHg). Na base relativamente subventilada para seu elevado fluxo, a PO2 é menor (~89 mmHg) e a PCO2 é mais alta (~42 mmHg).',
          ],
          takeaway: 'O ápice tem alta relação V/Q com PO2 alveolar elevada; a base tem menor relação V/Q.',
          diagram: 'lung',
        },
        {
          id: 'hypoxic-vasoconstriction',
          title: 'Vasoconstrição pulmonar hipóxica e desvios extremos',
          paragraphs: [
            'Diferente da circulação sistêmica, que se dilata em resposta à hipóxia tecidual, os vasos pré-capilares pulmonares sofrem vasoconstrição reflexa quando a PO2 alveolar diminui.',
            'A vasoconstrição pulmonar hipóxica desvia o fluxo de alvéolos mal ventilados para regiões bem oxigenadas, minimizando o efeito shunt (V/Q = 0) e otimizando a oxigenação global do sangue arterial.',
          ],
          takeaway: 'A vasoconstrição pulmonar hipóxica desvia fluxo sanguíneo de alvéolos hipóxicos para proteger a relação V/Q.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual característica fisiológica distingue o ápice pulmonar em relação à base em um indivíduo saudável de pé?',
        options: [
          {
            id: 'apex-high-vq',
            label: 'Maior relação V/Q, resultando em maior PO2 alveolar e menor PCO2 alveolar',
            explanation: 'Correto: no ápice a perfusão é desproporcionalmente menor que a ventilação, gerando relação V/Q elevada com alvéolos hiperoxigenados.',
          },
          {
            id: 'apex-shunt-dominant',
            label: 'Predomínio de shunt intrapulmonar verdadeiro com relação V/Q tendendo a zero',
            explanation: 'Incorreto: o shunt (V/Q = 0) ocorre quando há perfusão sem ventilação, enquanto o ápice tem excesso de ventilação relativa.',
          },
          {
            id: 'apex-maximal-perfusion',
            label: 'Máxima pressão de perfusão hidrostática capilar superando a pressão venosa da base',
            explanation: 'Incorreto: a gravidade reduz a pressão hidrostática no ápice, fazendo dele a região de menor fluxo sanguíneo.',
          },
          {
            id: 'apex-low-po2',
            label: 'Menor PO2 alveolar decorrente de hipoventilação alveolar paradoxal',
            explanation: 'Incorreto: a PO2 alveolar no ápice é mais alta (~130 mmHg) justamente pela elevada taxa de ventilação por unidade de fluxo.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'Why do the apex and base of the lungs exchange oxygen with markedly different efficiencies?',
      title: 'West zones and the ventilation/perfusion (V/Q) ratio',
      description: 'Understand the gravitational distribution of pulmonary blood flow, West zones, and ventilation/perfusion matching.',
      objective: 'Analyze regional V/Q variations within the lung and their impact on alveolar partial pressures of O2 and CO2.',
      stages: [
        {
          id: 'west-zones-gravity',
          title: 'Gravity and West’s physiological zones',
          paragraphs: [
            'The pulmonary circulation is a low-resistance, high-compliance circuit. In an upright posture, gravity generates a pronounced hydrostatic pressure gradient between lung apex and base.',
            'John West categorized the lung into three functional zones based on arterial (Pa), alveolar (PA), and venous (Pv) pressures. In non-pathological zone 1 at the apex, PA > Pa > Pv can intermittently compress capillaries, whereas in basal zone 3, Pa > Pv > PA ensures continuous recruitment and flow.',
          ],
          takeaway: 'Both perfusion and ventilation increase toward the lung base, but blood flow climbs at a significantly steeper slope.',
          diagram: 'pressure',
        },
        {
          id: 'vq-gradient-mismatch',
          title: 'Regional gradients of the V/Q ratio',
          paragraphs: [
            'Because perfusion rises faster than ventilation down the vertical axis of the upright lung, the ratio of ventilation to perfusion (V/Q) is high at the apex (~3.0) and lower at the base (~0.6).',
            'At the over-ventilated apex relative to flow, alveolar PO2 is elevated (~130 mmHg) and PCO2 is low (~28 mmHg). At the base, relative underventilation yields a lower alveolar PO2 (~89 mmHg) and higher PCO2 (~42 mmHg).',
          ],
          takeaway: 'The apex features a high V/Q ratio and high alveolar PO2; the base exhibits a lower V/Q ratio.',
          diagram: 'lung',
        },
        {
          id: 'hypoxic-vasoconstriction',
          title: 'Hypoxic pulmonary vasoconstriction and extreme mismatch',
          paragraphs: [
            'Unlike systemic arterioles that vasodilate when oxygen drops, pulmonary pre-capillary arterioles contract in response to low alveolar PO2.',
            'This hypoxic pulmonary vasoconstriction reflex diverts blood flow away from poorly ventilated alveoli toward well-oxygenated areas, minimizing shunt fraction (V/Q = 0) and defending systemic arterial saturation.',
          ],
          takeaway: 'Hypoxic pulmonary vasoconstriction shunts blood away from hypoxic alveoli to preserve overall V/Q matching.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which physiological characteristic distinguishes the pulmonary apex compared to the base in an upright human?',
        options: [
          {
            id: 'apex-high-vq',
            label: 'Higher V/Q ratio, resulting in elevated alveolar PO2 and lower alveolar PCO2',
            explanation: 'Correct: apical perfusion is markedly diminished relative to its ventilation, driving the V/Q ratio up and elevating alveolar oxygen.',
          },
          {
            id: 'apex-shunt-dominant',
            label: 'True intrapulmonary shunt predominance with a V/Q ratio approaching zero',
            explanation: 'Incorrect: shunt (V/Q = 0) represents perfusion without ventilation; the apex actually has relative excess ventilation.',
          },
          {
            id: 'apex-maximal-perfusion',
            label: 'Maximal hydrostatic capillary perfusion pressure exceeding basal venous pressures',
            explanation: 'Incorrect: gravity reduces hydrostatic pressure at the apex, rendering it the region of lowest blood flow.',
          },
          {
            id: 'apex-low-po2',
            label: 'Lowest alveolar PO2 driven by paradoxical regional alveolar hypoventilation',
            explanation: 'Incorrect: apical alveolar PO2 is highest (~130 mmHg) because of the elevated ventilation per unit of capillary flow.',
          },
        ],
      },
    },
  },
});

export const respiratoryCo2TransportLesson = lessonSchema.parse({
  id: 'respiratory-co2-transport',
  revision: 1,
  questionId: 'respiratory-co2-transport-q1',
  correctOptionId: 'co2-order-correct',
  correctOrderIds: ['tissue-diffusion', 'carbonic-hydration', 'chloride-shift', 'alveolar-release'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-gas-transport',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-5-transport-of-gases',
      section: 'Chapter 22 · Transport of Carbon Dioxide in Blood',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Como o dióxido de carbono viaja dos tecidos até os pulmões sem transformar o plasma sanguíneo em ácido letal?',
      title: 'Transporte de CO2 no sangue e efeito Haldane',
      description: 'Compreenda as três formas de transporte de CO2, o papel da anidrase carbônica eritrocitária, o desvio de cloreto e o efeito Haldane.',
      objective: 'Ordenar as etapas do transporte eritrocitário de dióxido de carbono e explicar a influência da oxigenação da hemoglobina no carreamento de CO2.',
      stages: [
        {
          id: 'co2-fractions-blood',
          title: 'As três formas de carreamento de CO2',
          paragraphs: [
            'O dióxido de carbono gerado pelo metabolismo celular é transportado no sangue de três maneiras distintas: dissolvido fisicamente no plasma (~7%), ligado a grupos amino da hemoglobina como carbaminoemoglobina (~23%), e como íon bicarbonato dissolvido (~70%).',
            'Essa conversão predominante em bicarbonato (HCO3-) confere ao sangue imensa capacidade tampão e evita bolhas gasosas nos capilares periféricos.',
          ],
          takeaway: 'Cerca de 70% do CO2 é transportado como bicarbonato, 23% como carbaminoemoglobina e 7% dissolvido.',
          diagram: 'lung',
        },
        {
          id: 'carbonic-anhydrase-chloride',
          title: 'Anidrase carbônica e o desvio de cloreto de Hamburger',
          paragraphs: [
            'Dentro dos eritrócitos, a enzima anidrase carbônica hidrata rapidamente o CO2 em ácido carbônico (H2CO3), que se dissocia espontaneamente em H+ e HCO3-. O H+ é tamponado pela desoxiemoglobina.',
            'O bicarbonato intracelular acumulado é ejetado para o plasma pelo trocador aniônico AE1 (Banda 3) em troca de íons cloreto (Cl-), fenômeno conhecido como desvio de cloreto (Chloride Shift ou efeito Hamburger).',
          ],
          takeaway: 'O trocador AE1 exporta HCO3- para o plasma e internaliza Cl- para manter o equilíbrio elétrico eritrocitário.',
          diagram: 'membrane',
        },
        {
          id: 'haldane-effect',
          title: 'O efeito Haldane nos capilares pulmonares',
          paragraphs: [
            'O efeito Haldane descreve como a oxigenação do sangue nos pulmões reduz a afinidade da hemoglobina pelo CO2 e prótons H+.',
            'Quando a hemoglobina se liga ao O2 no capilar alveolar, ela assume conformação relaxada que libera prótons; esses prótons reagem com o bicarbonato reabsorvido, gerando CO2 que se difunde para o alvéolo e é expirado.',
          ],
          takeaway: 'A ligação do O2 à hemoglobina nos alvéolos força a liberação de CO2 para o gás expirado (efeito Haldane).',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Ordene a sequência fisiológica do transporte e eliminação de dióxido de carbono, desde a produção tissular até a expiração alveolar:',
        items: [
          {
            id: 'tissue-diffusion',
            label: 'Difusão do CO2 do interstício tecidual para o interior dos eritrócitos capilares',
            explanation: 'O gradiente de pressão parcial compele o CO2 metabólico a ingressar no eritrócito.',
          },
          {
            id: 'carbonic-hydration',
            label: 'Hidratação catalisada pela anidrase carbônica formando H+ e íon bicarbonato',
            explanation: 'A anidrase carbônica celular gera ácido carbônico que se dissocia em bicarbonato e prótons.',
          },
          {
            id: 'chloride-shift',
            label: 'Efluxo de bicarbonato ao plasma via trocador AE1 em contrapartida ao influxo de cloreto',
            explanation: 'O desvio de cloreto exporta o tampão bicarbonato para o plasma enquanto o sangue viaja aos pulmões.',
          },
          {
            id: 'alveolar-release',
            label: 'Reversão da reação catalítica estimulada pelo efeito Haldane e difusão de CO2 aos alvéolos',
            explanation: 'A oxigenação da hemoglobina no pulmão compele a conversão reversa e expiração do CO2 gasoso.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'How does carbon dioxide journey from active tissues to the lungs without converting blood plasma into lethal acid?',
      title: 'Blood CO2 transport and the Haldane effect',
      description: 'Understand the three modes of CO2 transport, red cell carbonic anhydrase, the chloride shift, and the Haldane effect.',
      objective: 'Sequence the stages of erythrocyte carbon dioxide handling and explain how hemoglobin oxygenation influences CO2 transport.',
      stages: [
        {
          id: 'co2-fractions-blood',
          title: 'The three fractions of circulating CO2',
          paragraphs: [
            'Carbon dioxide generated by mitochondrial respiration is transported in blood in three forms: physically dissolved in plasma (~7%), bound to terminal globin amino groups as carbaminohemoglobin (~23%), and hydrated into plasma bicarbonate (~70%).',
            'This dominant conversion into bicarbonate (HCO3-) endows circulating blood with massive buffering power while averting intravascular gas bubble formation.',
          ],
          takeaway: 'Roughly 70% of CO2 circulates as bicarbonate, 23% as carbaminohemoglobin, and 7% dissolved in plasma.',
          diagram: 'lung',
        },
        {
          id: 'carbonic-anhydrase-chloride',
          title: 'Carbonic anhydrase and the Hamburger chloride shift',
          paragraphs: [
            'Inside red blood cells, zinc-containing carbonic anhydrase rapidly hydrates CO2 into carbonic acid (H2CO3), which ionizes into H+ and HCO3-. Deoxyhemoglobin buffers the released proton.',
            'Intracellular bicarbonate accumulation drives its exit into plasma through the AE1 anion exchanger (Band 3) in direct exchange for extracellular chloride (Cl-), an electroneutral phenomenon termed the chloride shift.',
          ],
          takeaway: 'The AE1 antiporter exports HCO3- into plasma in exchange for Cl- to preserve erythrocyte electrical neutrality.',
          diagram: 'membrane',
        },
        {
          id: 'haldane-effect',
          title: 'The Haldane effect in pulmonary capillaries',
          paragraphs: [
            'The Haldane effect describes how hemoglobin oxygenation decreases its binding affinity for both CO2 and hydrogen ions.',
            'As mixed venous blood traverses alveolar capillaries and binds O2, hemoglobin assumes the R-state, releasing buffered H+; these protons recombine with imported HCO3- to release CO2 gas into alveoli for exhalation.',
          ],
          takeaway: 'Oxygen binding to hemoglobin in pulmonary capillaries promotes CO2 unloading into exhaled gas (Haldane effect).',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Order the physiological sequence of carbon dioxide processing and elimination from active tissues to alveolar expiration:',
        items: [
          {
            id: 'tissue-diffusion',
            label: 'Diffusion of metabolic CO2 from tissue interstitium into capillary red blood cells',
            explanation: 'The partial pressure gradient compels metabolic CO2 to cross into circulating erythrocytes.',
          },
          {
            id: 'carbonic-hydration',
            label: 'Carbonic anhydrase-catalyzed hydration yielding protons and bicarbonate ions',
            explanation: 'Erythrocyte carbonic anhydrase generates carbonic acid, which dissociates into bicarbonate and protons.',
          },
          {
            id: 'chloride-shift',
            label: 'Efflux of bicarbonate into plasma via AE1 antiporter paired with chloride influx',
            explanation: 'The chloride shift exports bicarbonate buffer into plasma during transit toward the lungs.',
          },
          {
            id: 'alveolar-release',
            label: 'Haldane effect-driven reversal of hydration with diffusion of gaseous CO2 into alveoli',
            explanation: 'Alveolar oxygenation releases protons, regenerating CO2 gas that diffuses into expired airspace.',
          },
        ],
      },
    },
  },
});

export const respiratoryComplianceLesson = lessonSchema.parse({
  id: 'respiratory-compliance',
  revision: 1,
  questionId: 'respiratory-compliance-q1',
  correctOptionId: 'surfactant-dppc',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-mechanics',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing',
      section: 'Chapter 22 · Pulmonary Mechanics and Compliance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Como pequenas bolhas alveolares evitam o colapso e o esvaziamento prematuro em alvéolos vizinhos maiores?',
      title: 'Complacência pulmonar, surfactante e lei de Laplace',
      description: 'Explore a complacência pulmonar estática, a tensão superficial alveolar pela lei de Laplace e a ação biofísica do surfactante.',
      objective: 'Calcular a relação de complacência pulmonar (ΔV/ΔP) e entender a prevenção de atelectasias pelo surfactante pulmonar.',
      stages: [
        {
          id: 'compliance-definition',
          title: 'Complacência pulmonar: facilidade de distensão',
          paragraphs: [
            'A complacência pulmonar (C) mede a variação de volume pulmonar obtida por unidade de variação na pressão transpulmonar (C = ΔV / ΔP). Em adultos saudáveis, a complacência do sistema respiratório total é de cerca de 100 mL/cmH2O.',
            'Ela é determinada pela elasticidade intrínseca do parênquima pulmonar (fibras de elastina e colágeno) e pela tensão superficial existente na interface líquido-ar que reveste a superfície interna dos alvéolos.',
          ],
          takeaway: 'A complacência pulmonar reflete a facilidade com que os pulmões se expandem perante gradientes de pressão.',
          diagram: 'calculation',
        },
        {
          id: 'laplace-surface-tension',
          title: 'A lei de Laplace e a instabilidade alveolar',
          paragraphs: [
            'A lei de Laplace para estruturas esféricas estabelece que a pressão de colapso interna (P) é proporcional ao dobro da tensão superficial (T) e inversamente proporcional ao raio alveolar (r): P = 2T / r.',
            'Sem um mecanismo compensatório, alvéolos menores gerariam pressões internas muito maiores que alvéolos vizinhos maiores, esvaziando seu ar neles e sofrendo atelectasia progressiva.',
          ],
          takeaway: 'Pela lei de Laplace (P = 2T / r), alvéolos menores teriam maior pressão de colapso sem redução da tensão superficial.',
          diagram: 'pressure',
        },
        {
          id: 'surfactant-biophysics',
          title: 'Surfactante pulmonar e pneumócitos tipo II',
          paragraphs: [
            'O surfactante pulmonar é uma mistura lipoproteica sintetizada e secretada pelos pneumócitos tipo II, composta predominantemente por dipalmitoilfosfatidilcolina (DPPC) e apoproteínas específicas (SP-A, B, C e D).',
            'Ao se intercalar entre as moléculas de água na superfície alveolar, o surfactante reduz drasticamente a tensão superficial — e o faz de forma mais pronunciada quanto menor for o raio alveolar, estabilizando alvéolos de diferentes calibres e reduzindo o trabalho elástico respiratório.',
          ],
          takeaway: 'O surfactante reduz a tensão superficial especialmente nos alvéolos menores, prevenindo o colabamento pulmonar.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Identifique o principal componente fosfolipídico do surfactante responsável por reduzir a tensão superficial alveolar:',
        blank: 'O principal fosfolipídio tensoativo do surfactante é a ______.',
        options: [
          {
            id: 'surfactant-dppc',
            label: 'Dipalmitoilfosfatidilcolina (DPPC)',
            explanation: 'Correto: a DPPC é o fosfolipídio anfifílico dominante do surfactante que se compacta na interface ar-líquido para quebrar forças coesivas da água.',
          },
          {
            id: 'sphingomyelin',
            label: 'Esfingomielina pura',
            explanation: 'Incorreto: a esfingomielina é um lipídio de membrana cuja proporção serve de referência na maturidade fetal (relação L/S), mas não é o tensoativo primário.',
          },
          {
            id: 'cholesterol-ester',
            label: 'Colesterol esterificado livre',
            explanation: 'Incorreto: o colesterol é um componente neutro menor que modula a fluidez, mas não o redutor primário da tensão.',
          },
          {
            id: 'phosphatidylinositol',
            label: 'Fosfatidilinositol ancorado',
            explanation: 'Incorreto: embora existam fosfolipídios menores na mistura, a DPPC constitui a vasta maioria funcional e estrutural do surfactante.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'How do microscopic alveolar bubbles avoid emptying into larger adjacent neighbors and collapsing entirely?',
      title: 'Pulmonary compliance, surfactant, and Laplace’s law',
      description: 'Explore static lung compliance, alveolar surface tension through Laplace’s law, and the biophysics of pulmonary surfactant.',
      objective: 'Calculate the compliance relationship (ΔV/ΔP) and explain the physiological prevention of atelectasis by surfactant.',
      stages: [
        {
          id: 'compliance-definition',
          title: 'Lung compliance: ease of expansion',
          paragraphs: [
            'Pulmonary compliance (C) quantifies the change in lung volume generated per unit change in transpulmonary pressure (C = ΔV / ΔP). Normal total respiratory system compliance averages approximately 100 mL/cmH2O.',
            'Compliance is determined by parenchymal tissue elasticity (collagen and elastin scaffolding) and, crucially, by the surface tension forces operating at the air-liquid interface lining the alveoli.',
          ],
          takeaway: 'Pulmonary compliance measures how easily lungs distend in response to applied transpulmonary pressure gradients.',
          diagram: 'calculation',
        },
        {
          id: 'laplace-surface-tension',
          title: 'Laplace’s law and alveolar instability',
          paragraphs: [
            'Laplace’s law for spherical geometries states that inward collapsing pressure (P) is proportional to twice the wall surface tension (T) divided by alveolar radius (r): P = 2T / r.',
            'Without an adaptive regulator, smaller alveoli would generate higher collapsing pressures than adjacent larger units, prematurely dumping their gas into larger alveoli and collapsing into diffuse atelectasis.',
          ],
          takeaway: 'Under Laplace’s law (P = 2T / r), smaller alveoli face greater collapsing pressures unless surface tension drops proportionally.',
          diagram: 'pressure',
        },
        {
          id: 'surfactant-biophysics',
          title: 'Pulmonary surfactant and type II alveolar pneumocytes',
          paragraphs: [
            'Pulmonary surfactant is a complex lipoprotein secretion produced by type II pneumocytes, dominated by dipalmitoylphosphatidylcholine (DPPC) and surfactant proteins (SP-A, SP-B, SP-C, SP-D).',
            'By intercalating between water molecules at the alveolar lining, surfactant lowers surface tension. Importantly, it reduces tension most dramatically at smaller radii, equalizing collapsing pressures across heterogeneous alveoli.',
          ],
          takeaway: 'Surfactant drastically lowers surface tension as alveoli shrink, equalizing pressures and preventing atelectasis.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Identify the principal phospholipid constituent of surfactant responsible for reducing alveolar surface tension:',
        blank: 'The primary surface-active phospholipid of alveolar surfactant is ______.',
        options: [
          {
            id: 'surfactant-dppc',
            label: 'Dipalmitoylphosphatidylcholine (DPPC)',
            explanation: 'Correct: DPPC is the amphipathic phospholipid whose packed hydrophobic tails break surface cohesion at the alveolar interface.',
          },
          {
            id: 'sphingomyelin',
            label: 'Pure sphingomyelin',
            explanation: 'Incorrect: sphingomyelin serves as a reference marker in the amniotic L/S ratio for fetal lung maturity, but is not the active tensoactive molecule.',
          },
          {
            id: 'cholesterol-ester',
            label: 'Free esterified cholesterol',
            explanation: 'Incorrect: cholesterol constitutes a minor lipid fraction that modulates bilayer fluidity without driving surface tension reduction.',
          },
          {
            id: 'phosphatidylinositol',
            label: 'Membrane-anchored phosphatidylinositol',
            explanation: 'Incorrect: phosphatidylinositol is a secondary phospholipid in surfactant; DPPC forms the vast active functional core.',
          },
        ],
      },
    },
  },
});

export const respiratoryHypoxiaLesson = lessonSchema.parse({
  id: 'respiratory-hypoxia',
  revision: 1,
  questionId: 'respiratory-hypoxia-q1',
  correctOptionId: 'hypoxic-aa-gradient-normal',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-gas-exchange-pathology',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange',
      section: 'Chapter 22 · Pathophysiology of Hypoxemia and Hypoxia',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Como saber se a falta de oxigênio no cérebro decorre de pulmões doentes, anemia grave ou intoxicação mitocondrial?',
      title: 'Fisiopatologia das hipóxias e gradiente alvéolo-arterial',
      description: 'Classifique as quatro formas fundamentais de hipóxia celular e utilize o gradiente alvéolo-arterial de oxigênio (P[A-a]O2) no diagnóstico diferencial.',
      objective: 'Distinguir hipóxia hipoxêmica, anêmica, isquêmica e histotóxica, e calcular o gradiente alvéolo-arterial de O2.',
      stages: [
        {
          id: 'hypoxia-four-classes',
          title: 'As quatro classes fundamentais de hipóxia',
          paragraphs: [
            'Hipóxia é a oxigenação tecidual inadequada para a demanda metabólica celular. Ela classifica-se em quatro categorias: hipoxêmica (baixa PaO2 arterial), anêmica (PaO2 normal, mas baixo conteúdo total de hemoglobina/O2), isquêmica/circulatória (fluxo sanguíneo tecidual insuficiente) e histotóxica (células incapazes de utilizar O2, como na intoxicação por cianeto).',
            'Reconhecer o mecanismo fisiopatológico exato é vital, pois a oxigenoterapia suplementar reverte rapidamente a hipóxia hipoxêmica, mas tem efeito desprezível sobre a hipóxia histotóxica.',
          ],
          takeaway: 'Hipóxia divide-se em hipoxêmica (baixa PaO2), anêmica, isquêmica e histotóxica (bloqueio metabólico celular).',
          diagram: 'tissue',
        },
        {
          id: 'alveolar-gas-equation',
          title: 'Equação do gás alveolar e cálculo da PAO2',
          paragraphs: [
            'Para determinar se a hipoxemia arterial decorre de defeito pulmonar intrínseco, calcula-se a pressão alveolar ideal de O2 (PAO2) pela equação do gás alveolar: PAO2 = PiO2 - (PaCO2 / R), onde PiO2 é a fração inspirada de O2 ajustada pela pressão de vapor d’água (~150 mmHg em ar ambiente) e R é o quociente respiratório (~0,8).',
            'O gradiente alvéolo-arterial de oxigênio, P(A-a)O2, é a diferença entre a PAO2 calculada e a PaO2 arterial medida por gasometria.',
          ],
          takeaway: 'A equação do gás alveolar calcula a PAO2 alveolar teórica para estabelecer o gradiente alvéolo-arterial.',
          diagram: 'equation',
        },
        {
          id: 'aa-gradient-interpretation',
          title: 'O gradiente P(A-a)O2 no diagnóstico diferencial',
          paragraphs: [
            'Em indivíduos jovens saudáveis respirando ar ambiente ao nível do mar, o gradiente P(A-a)O2 fisiológico situa-se entre 5 e 15 mmHg.',
            'Um gradiente normal com hipoxemia indica hipoventilação alveolar pura (ex.: overdose de opioides) ou baixa FiO2 (altitude). Já um gradiente P(A-a)O2 aumentado denuncia lesão pulmonar intrínseca: mismatch V/Q (DPOC, asma), distúrbio de difusão (fibrose intersticial) ou shunt direita-esquerda anatômico.',
          ],
          takeaway: 'Gradiente P(A-a)O2 normal = hipoventilação pura; gradiente elevado = alteração de troca pulmonar intrínseca.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual cenário clínico de hipoxemia arterial cursa caracteristicamente com gradiente alvéolo-arterial de oxigênio P(A-a)O2 estritamente normal?',
        options: [
          {
            id: 'hypoxic-aa-gradient-normal',
            label: 'Hipoventilação alveolar central pura decorrente de intoxicação por opioides',
            explanation: 'Correto: na hipoventilação pura a PAO2 cai na mesma proporção da PaO2, mantendo a diferença entre alvéolo e sangue arterial normal (5-15 mmHg).',
          },
          {
            id: 'pulmonary-embolism',
            label: 'Tromboembolismo pulmonar maciço com espaço morto alveolar agudo',
            explanation: 'Incorreto: o TEP gera marcado descompasso V/Q e shunt com elevação patológica do gradiente P(A-a)O2.',
          },
          {
            id: 'interstitial-fibrosis',
            label: 'Fibrose pulmonar idiopática com espessamento da barreira hematoaérea',
            explanation: 'Incorreto: o bloqueio alvéolo-capilar de difusão eleva substancialmente o gradiente P(A-a)O2.',
          },
          {
            id: 'severe-ards',
            label: 'Síndrome do desconforto respiratório agudo com edema alveolar exsudativo',
            explanation: 'Incorreto: a SDRA cursa com shunt intrapulmonar grave e gradiente P(A-a)O2 acentuadamente alargado.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'How can you determine whether cellular oxygen deprivation stems from diseased lungs, severe anemia, or mitochondrial poison?',
      title: 'Hypoxia pathophysiology and the alveolar-arterial oxygen gradient',
      description: 'Classify the four fundamental categories of cellular hypoxia and apply the alveolar-arterial oxygen gradient (P[A-a]O2) to differential diagnosis.',
      objective: 'Distinguish hypoxemic, anemic, ischemic, and histotoxic hypoxia, and calculate the alveolar-arterial PO2 gradient.',
      stages: [
        {
          id: 'hypoxia-four-classes',
          title: 'The four fundamental classes of cellular hypoxia',
          paragraphs: [
            'Hypoxia represents insufficient tissue oxygen delivery to support cellular metabolic work. It is categorized into four classes: hypoxemic (low arterial PaO2), anemic (normal PaO2 with depressed total oxygen-carrying hemoglobin capacity), stagnant/ischemic (inadequate perfusion flow), and histotoxic (metabolic inability to use delivered O2, e.g. cyanide poisoning).',
            'Identifying the underlying category dictates urgent management: supplemental high-flow oxygen quickly corrects pure hypoxemic hypoxia, but offers minimal benefit in histotoxic cytochrome c oxidase poisoning.',
          ],
          takeaway: 'Hypoxia is grouped into hypoxemic (low PaO2), anemic, stagnant/ischemic, and histotoxic cellular failure.',
          diagram: 'tissue',
        },
        {
          id: 'alveolar-gas-equation',
          title: 'The alveolar gas equation and ideal PAO2',
          paragraphs: [
            'To discern whether arterial hypoxemia arises from intrinsic pulmonary pathology, ideal alveolar oxygen (PAO2) is calculated via the alveolar gas equation: PAO2 = PiO2 - (PaCO2 / R), where PiO2 is water-saturated inspired PO2 (~150 mmHg at sea level) and R is the respiratory quotient (~0.8).',
            'The alveolar-arterial oxygen gradient, P(A-a)O2, is the difference between calculated ideal alveolar PAO2 and measured arterial PaO2 from blood gas analysis.',
          ],
          takeaway: 'The alveolar gas equation defines theoretical PAO2 to calculate the alveolar-arterial oxygen gradient.',
          diagram: 'equation',
        },
        {
          id: 'aa-gradient-interpretation',
          title: 'Interpreting the P(A-a)O2 gradient',
          paragraphs: [
            'In healthy young individuals breathing ambient room air at sea level, the expected baseline P(A-a)O2 gradient spans 5 to 15 mmHg.',
            'A normal gradient alongside hypoxemia points definitively to pure alveolar hypoventilation (e.g., opioid-induced depression) or low atmospheric FiO2 (high altitude). An elevated P(A-a)O2 gradient unmasks intrinsic gas exchange failure: V/Q mismatch, diffusion barriers, or anatomical right-to-left shunts.',
          ],
          takeaway: 'Normal P(A-a)O2 with hypoxemia indicates hypoventilation; an elevated gradient confirms intrinsic lung pathology.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which clinical cause of arterial hypoxemia is characterized by a strictly normal alveolar-arterial oxygen gradient P(A-a)O2?',
        options: [
          {
            id: 'hypoxic-aa-gradient-normal',
            label: 'Pure central alveolar hypoventilation induced by opioid overdose',
            explanation: 'Correct: in pure hypoventilation alveolar PAO2 drops symmetrically alongside arterial PaO2, preserving a normal P(A-a)O2 difference (5-15 mmHg).',
          },
          {
            id: 'pulmonary-embolism',
            label: 'Massive pulmonary embolism creating acute high V/Q alveolar dead space',
            explanation: 'Incorrect: pulmonary embolism induces acute V/Q mismatch and shunting, broadening the P(A-a)O2 gradient.',
          },
          {
            id: 'interstitial-fibrosis',
            label: 'Idiopathic pulmonary fibrosis with alveolar capillary membrane thickening',
            explanation: 'Incorrect: impaired diffusion capacity across thickened alveolar septa markedly widens the P(A-a)O2 gradient.',
          },
          {
            id: 'severe-ards',
            label: 'Acute respiratory distress syndrome with exudative alveolar flooding',
            explanation: 'Incorrect: ARDS produces profound intrapulmonary shunting and severe pathological widening of the P(A-a)O2 gradient.',
          },
        ],
      },
    },
  },
});

export const respiratoryAltitudeExerciseLesson = lessonSchema.parse({
  id: 'respiratory-altitude-exercise',
  revision: 1,
  questionId: 'respiratory-altitude-exercise-q1',
  correctOptionId: 'altitude-alkalosis-bicarbonate',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'respiratory-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch22-altitude-exercise',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing',
      section: 'Chapter 22 · Adjustments to Exercise and High Altitude',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia respiratória',
      hook: 'Como montanhistas sobrevivem no cume do Everest onde a pressão de oxigênio é um terço da encontrada na praia?',
      title: 'Adaptações respiratórias à altitude e ao exercício físico',
      description: 'Explore a aclimatação à grande altitude, a resposta ventilatória hipóxica, a compensação renal da alcalose respiratória e a hiperventilação do exercício.',
      objective: 'Descrever a resposta ventilatória imediata e crônica à altitude e os ajustes cardiorrespiratórios durante o exercício vigoroso.',
      stages: [
        {
          id: 'hypobaric-hypoxia-response',
          title: 'Hipóxia hipobárica e resposta ventilatória imediata',
          paragraphs: [
            'Em grandes altitudes, a fração inspirada de O2 permanece constante em 21%, mas a pressão barométrica total cai substancialmente, diminuindo a pressão parcial de O2 inspirado (PiO2).',
            'A queda na PaO2 arterial abaixo de 60 mmHg ativa intensamente os quimiorreceptores periféricos dos corpos carotídeos, deflagrando hiperventilação alveolar compensatória para resgatar a PO2 arterial.',
          ],
          takeaway: 'A grande altitude gera hipóxia hipobárica, ativando os corpos carotídeos para disparar hiperventilação reflexa.',
          diagram: 'pressure',
        },
        {
          id: 'altitude-acclimatization',
          title: 'Aclimatação: compensação renal e poliglobulia',
          paragraphs: [
            'A hiperventilação alveolar sustentada elimina CO2 em excesso, gerando alcalose respiratória aguda. O pH alcalino no líquor cefalorraquidiano atua como freio inibitório sobre o centro respiratório bulbar.',
            'Ao longo de 48 a 72 horas, os rins compensam essa alcalose eliminando bicarbonato na urina, permitindo uma segunda onda de ventilação ainda mais vigorosa. Em semanas, a secreção de eritropoietina (EPO) estimulada pelo HIF-1 renal eleva a massa eritrocitária (poliglobulia adaptativa).',
          ],
          takeaway: 'Os rins excretam bicarbonato para compensar a alcalose respiratória, estabilizando a aclimatação ventilatória.',
          diagram: 'phases',
        },
        {
          id: 'exercise-hyperpnea',
          title: 'Hiperpneia do exercício físico',
          paragraphs: [
            'Durante o exercício físico dinâmico, o consumo de oxigênio (VO2) e a produção de CO2 (VCO2) podem aumentar em mais de dez vezes.',
            'Surpreendentemente, a ventilação alveolar aumenta em perfeita proporcionalidade com a taxa metabólica (hiperpneia), de modo que a PaO2 e a PaCO2 arteriais médias permanecem normais durante o exercício moderado graças ao acoplamento neuro-humoral rápido.',
          ],
          takeaway: 'No exercício moderado, a ventilação acompanha o metabolismo, mantendo PaO2 e PaCO2 arteriais constantes.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual evento renal é indispensável para permitir a aclimatação respiratória bem-sucedida nos primeiros dias de exposição à altitude?',
        options: [
          {
            id: 'altitude-alkalosis-bicarbonate',
            label: 'Excreção urinária aumentada de bicarbonato, normalizando o pH sistêmico e permitindo hiperventilação contínua',
            explanation: 'Correto: a eliminação renal de HCO3- compensa a alcalose respiratória induzida pela hiperventilação hipóxica, destravando o centro respiratório bulbar.',
          },
          {
            id: 'inhibit-erythropoietin',
            label: 'Supressão imediata da síntese de eritropoietina para prevenir síndrome de hiperviscosidade sanguínea',
            explanation: 'Incorreto: a síntese de eritropoietina é fortemente estimulada pela hipóxia renal via HIF-1.',
          },
          {
            id: 'conserve-protons',
            label: 'Secreção tubular máxima de prótons H+ para acidificar a urina e reter bicarbonato',
            explanation: 'Incorreto: na alcalose respiratória os rins devem eliminar bases (bicarbonato), e não reter.',
          },
          {
            id: 'shut-down-aldosterone',
            label: 'Bloqueio total dos receptores de aldosterona para promover hipovolemia hiposmolar voluntária',
            explanation: 'Incorreto: a aldosterona continua regulando volume e eletrólitos; o ajuste primário da aclimatação ácidobásica é a bicarbonatúria.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Respiratory physiology',
      hook: 'How do mountaineers survive near the summit of Mount Everest where oxygen pressure drops to one-third of sea-level values?',
      title: 'Respiratory adaptations to high altitude and exercise',
      description: 'Explore high-altitude acclimatization, the hypoxic ventilatory response, renal compensation of respiratory alkalosis, and exercise hyperpnea.',
      objective: 'Describe acute and chronic ventilatory responses to altitude and explain cardiorespiratory adjustments during vigorous exercise.',
      stages: [
        {
          id: 'hypobaric-hypoxia-response',
          title: 'Hypobaric hypoxia and acute ventilatory response',
          paragraphs: [
            'At high altitude, fractional inspired oxygen remains constant at 21%, but barometric pressure plummets, causing a parallel drop in inspired ambient PO2 (hypobaric hypoxia).',
            'When arterial PaO2 falls below approximately 60 mmHg, glomus cells of the carotid bodies fire intensely, launching reflex alveolar hyperventilation to defend systemic arterial oxygenation.',
          ],
          takeaway: 'High altitude triggers hypobaric hypoxia, stimulating carotid bodies to drive immediate reflex hyperventilation.',
          diagram: 'pressure',
        },
        {
          id: 'altitude-acclimatization',
          title: 'Acclimatization: renal compensation and polycythemia',
          paragraphs: [
            'Sustained alveolar hyperventilation blows off large amounts of CO2, causing acute respiratory alkalosis. Cerebrospinal fluid alkalosis acts as an inhibitory brake on the medullary respiratory controller.',
            'Over 48 to 72 hours, renal tubules compensate by actively excreting bicarbonate, normalizing CSF pH and permitting a second, deeper phase of hyperventilation. Concurrently, hypoxia-inducible factor 1 (HIF-1) stimulates erythropoietin (EPO), raising red cell mass.',
          ],
          takeaway: 'Renal excretion of bicarbonate restores systemic pH, unlocking sustained ventilatory acclimatization.',
          diagram: 'phases',
        },
        {
          id: 'exercise-hyperpnea',
          title: 'Exercise hyperpnea and matching',
          paragraphs: [
            'During dynamic physical exertion, total oxygen consumption (VO2) and carbon dioxide production (VCO2) can surge more than tenfold.',
            'Remarkably, alveolar ventilation scales in near-perfect lockstep with metabolic demands (hyperpnea). Consequently, mean arterial PaO2, PaCO2, and pH remain virtually unchanged during moderate exercise.',
          ],
          takeaway: 'During moderate exercise, ventilation perfectly matches metabolic rate, maintaining steady arterial blood gases.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which renal adjustment is essential to enable successful sustained ventilatory acclimatization during the first days at high altitude?',
        options: [
          {
            id: 'altitude-alkalosis-bicarbonate',
            label: 'Increased urinary excretion of bicarbonate, restoring systemic pH and allowing continued hyperventilation',
            explanation: 'Correct: renal wasting of HCO3- compensates for hyperventilation-induced respiratory alkalosis, releasing the central respiratory brake.',
          },
          {
            id: 'inhibit-erythropoietin',
            label: 'Immediate suppression of renal erythropoietin synthesis to avoid blood hyperviscosity',
            explanation: 'Incorrect: renal peritubular interstitial cells upregulate erythropoietin in response to hypoxia via HIF-1.',
          },
          {
            id: 'conserve-protons',
            label: 'Maximal tubular proton secretion to acidify urine and retain circulating bicarbonate',
            explanation: 'Incorrect: during respiratory alkalosis, the kidney must eliminate excess bicarbonate base rather than retain it.',
          },
          {
            id: 'shut-down-aldosterone',
            label: 'Complete shutdown of aldosterone signaling to induce rapid hypoosmolar hypovolemia',
            explanation: 'Incorrect: aldosterone remains functionally active; the primary acid-base adjustment is proximal and collecting duct bicarbonaturia.',
          },
        ],
      },
    },
  },
});
