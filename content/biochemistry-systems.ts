import { lessonSchema } from '../src/contracts/learning';

export const biochemistryProteinsHbLesson = lessonSchema.parse({
  id: 'biochemistry-proteins-hb',
  revision: 1,
  questionId: 'biochemistry-proteins-hb-q1',
  correctOptionId: 'quaternary-cooperativity',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch2-ch18-proteins',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/2-5-chemical-reactions',
      section: 'Chapter 2 & 18 · Protein Architecture and Hemoglobin Dynamics',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Bioquímica',
      hook: 'Como a substituição de um único aminoácido em uma cadeia de centenas de resíduos pode deformar uma hemácia e causar crises álgicas?',
      title: 'Aminoácidos, estrutura proteica e alosteria da hemoglobina',
      description: 'Entenda os quatro níveis de organização proteica e o comportamento alostérico da hemoglobina comparada à mioglobina.',
      objective: 'Diferenciar as estruturas primária, secundária, terciária e quaternária e explicar a cooperatividade alostérica.',
      stages: [
        {
          id: 'protein-levels',
          title: 'Níveis de estrutura proteica: de peptídeos a conformações tridimensionais',
          paragraphs: [
            'A estrutura primária é a sequência linear de aminoácidos unidos por ligações peptídicas covalentes rígidas. A estrutura secundária envolve pontes de hidrogênio locais formando alfa-hélices ou folhas beta-pregueadas.',
            'A estrutura terciária resulta do dobramento tridimensional da cadeia impulsionado pelo efeito hidrofóbico, pontes de dissulfeto entre cisteínas e pontes salinas. A estrutura quaternária une duas ou mais subunidades polipeptídicas.',
          ],
          takeaway: 'O arranjo proteico evolui de sequências lineares até complexos quaternários estabilizados por forças não covalentes.',
          diagram: 'dna',
        },
        {
          id: 'hemoglobin-myoglobin',
          title: 'Hemoglobina versus mioglobina: monômero versus tetrâmero',
          paragraphs: [
            'A mioglobina muscular é um monômero com curva hiperbólica de saturação por O₂, exibindo altíssima afinidade e servindo como reservatório intracelular de oxigênio em condições basais.',
            'A hemoglobina adulta (HbA) é um heterotetrâmero (α₂β₂). A ligação do O₂ à primeira subunidade quebra pontes salinas intersubunidades, facilitando a ligação subsequente nas demais por cooperatividade homotrópica positiva.',
          ],
          takeaway: 'A mioglobina monomérica retém oxigênio com curva hiperbólica; a hemoglobina tetramérica entrega O₂ com curva sigmoide.',
          diagram: 'equation',
        },
        {
          id: 'allosteric-t-r-states',
          title: 'Transição T para R e moduladores alostéricos',
          paragraphs: [
            'A hemoglobina oscila entre dois estados conformacionais: o estado T (tenso, de baixa afinidade por O₂) e o estado R (relaxado, de alta afinidade).',
            'O 2,3-bisfosfoglicerato (2,3-BPG) liga-se exclusivamente à cavidade central da forma Tensa carregada positivamente, estabilizando-a e reduzindo a afinidade pelo O₂ para facilitar sua entrega tecidual em hipóxia e altitudes.',
          ],
          takeaway: 'O 2,3-BPG estabiliza o estado T da hemoglobina, promovendo o descarregamento de oxigênio nos capilares teciduais.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual nível de organização estrutural é indispensável para que uma proteína como a hemoglobina exiba cooperatividade alostérica positiva entre subunidades?',
        options: [
          {
            id: 'quaternary-cooperativity',
            label: 'Estrutura quaternária (interação entre múltiplas subunidades polipeptídicas)',
            explanation: 'Correto: a cooperatividade alostérica requer a comunicação entre subunidades distintas dentro de um complexo quaternário.',
          },
          {
            id: 'primary-linear-only',
            label: 'Estrutura primária linear desprovida de dobras',
            explanation: 'Incorreto: cadeias lineares sem dobramento espacial não possuem sítios alostéricos comunicantes.',
          },
          {
            id: 'secondary-alpha-helix',
            label: 'Estrutura secundária restrita a alfa-hélices isoladas',
            explanation: 'Incorreto: hélices secundárias participam do esqueleto peptídico, mas não coordenam a cooperatividade multimérica.',
          },
          {
            id: 'lipid-micellar-coat',
            label: 'Capa micelar lipídica hidrofóbica circundante',
            explanation: 'Incorreto: a hemoglobina é uma proteína globular hidrossolúvel citoplasmática, não uma lipoproteína micelar.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'How can substituting one single amino acid along hundreds of residues deform red blood cells and trigger sickle crises?',
      title: 'Amino acids, protein structure, and hemoglobin allostery',
      description: 'Master the four tiers of protein architecture and contrast monomeric myoglobin against allosteric tetrameric hemoglobin.',
      objective: 'Distinguish primary through quaternary structures and explain allosteric cooperativity and 2,3-BPG modulation.',
      stages: [
        {
          id: 'protein-levels',
          title: 'Protein structural levels: from linear peptides to tertiary folds',
          paragraphs: [
            'Primary structure consists of linear amino acid sequences held by rigid planar peptide bonds. Secondary structure comprises periodic hydrogen bonding forming alpha-helices or beta-pleated sheets.',
            'Tertiary structure reflects spatial three-dimensional folding dictated by hydrophobic burial, cysteine disulfide bridges, and electrostatic salt bridges. Quaternary structure assembles two or more independent polypeptide chains into a functional multimer.',
          ],
          takeaway: 'Proteins assemble from linear primary sequence into intricate tertiary domains and multisubunit quaternary machines.',
          diagram: 'dna',
        },
        {
          id: 'hemoglobin-myoglobin',
          title: 'Hemoglobin versus myoglobin: monomer versus tetramer',
          paragraphs: [
            'Skeletal myoglobin is a compact monomer yielding a hyperbolic oxygen saturation curve, binding oxygen tightly to serve as an intracellular muscle reservoir.',
            'Adult hemoglobin (HbA) is an alpha-two-beta-two heterotetramer. Oxygen engagement at the first heme iron breaks stabilizing salt bridges, sequentially escalating affinity across remaining subunits via positive homotropic cooperativity.',
          ],
          takeaway: 'Monomeric myoglobin yields a hyperbolic storage curve; tetrameric hemoglobin features a responsive sigmoidal delivery curve.',
          diagram: 'equation',
        },
        {
          id: 'allosteric-t-r-states',
          title: 'Tense-to-relaxed transitions and allosteric modulators',
          paragraphs: [
            'Hemoglobin shifts between two quaternary states: the T (tense, low oxygen affinity) state and the R (relaxed, high oxygen affinity) state.',
            'Negatively charged 2,3-bisphosphoglycerate (2,3-BPG) inserts selectively into the basic central pocket of the T state, stabilizing it and decreasing overall oxygen affinity to boost tissue unloading during hypoxic stress.',
          ],
          takeaway: '2,3-BPG binds the central cavity of the T state, promoting oxygen unloading to peripheral tissues.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which level of structural organization is strictly required for a protein such as hemoglobin to display cooperative allosteric ligand binding?',
        options: [
          {
            id: 'quaternary-cooperativity',
            label: 'Quaternary structure (multisubunit polypeptide interactions)',
            explanation: 'Correct: allosteric positive cooperativity requires mechanical conformational crosstalk between distinct subunits in a multimeric complex.',
          },
          {
            id: 'primary-linear-only',
            label: 'Linear primary sequence without spatial folds',
            explanation: 'Incorrect: unfolded primary sequences lack spatial catalytic pockets and cooperative allosteric transitions.',
          },
          {
            id: 'secondary-alpha-helix',
            label: 'Isolated secondary alpha-helices',
            explanation: 'Incorrect: alpha-helices provide local backbone rigidity but cannot alone mediate multimeric allosteric cooperativity.',
          },
          {
            id: 'lipid-micellar-coat',
            label: 'Hydrophobic lipid micellar encapsulation',
            explanation: 'Incorrect: hemoglobin is a soluble cytosolic globular protein, not a lipid-encapsulated micelle.',
          },
        ],
      },
    },
  },
});

export const biochemistryPentoseRosLesson = lessonSchema.parse({
  id: 'biochemistry-pentose-ros',
  revision: 1,
  questionId: 'biochemistry-pentose-ros-q1',
  correctOptionId: 'g6pd-nadph-glutathione',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch24-pentose',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-2-carbohydrate-metabolism',
      section: 'Chapter 24 · Pentose Phosphate Pathway and Antioxidant Defense',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Bioquímica',
      hook: 'Por que o consumo de favas ou certos antibióticos pode desencadear anemia hemolítica fulminante em pessoas com deficiência genética de G6PD?',
      title: 'Via das pentoses-fosfato, G6PD, NADPH e defesa antioxidante',
      description: 'Compreenda a fase oxidativa da via das pentoses, a geração de NADPH e a regeneração da glutationa reduzida.',
      objective: 'Explicar a via das pentoses-fosfato e o papel vital do NADPH na proteção das hemácias contra estresse oxidativo.',
      stages: [
        {
          id: 'oxidative-phase',
          title: 'A fase oxidativa e a glicose-6-fosfato desidrogenase',
          paragraphs: [
            'A via das pentoses-fosfato (ou shunt das hexoses-monofosfato) ocorre no citosol e desvia glicose-6-fosfato sem gerar ATP. Sua fase oxidativa irreversível é comandada pela enzima marca-passo glicose-6-fosfato desidrogenase (G6PD).',
            'Nessa fase, duas moléculas de NADP⁺ são reduzidas a NADPH + H⁺ para cada glicose-6-fosfato descarboxilada, gerando também ribulose-5-fosfato e CO₂.',
          ],
          takeaway: 'A G6PD catalisa a fase oxidativa irreversível gerando NADPH e ribulose-5-fosfato a partir de glicose-6-fosfato.',
          diagram: 'equation',
        },
        {
          id: 'non-oxidative-phase',
          title: 'Fase não oxidativa: síntese de ribose-5-fosfato e reciclagem',
          paragraphs: [
            'A fase não oxidativa é reversível e controlada por transcetolases (dependentes de tiamina pirofosfato/vitamina B1) e transaldolases.',
            'Essa ramificação converte pentoses em ribose-5-fosfato (necessária para a síntese de nucleotídeos de DNA e RNA) ou reverte intermediários para frutose-6-fosfato e gliceraldeído-3-fosfato da glicólise.',
          ],
          takeaway: 'A fase não oxidativa gera ribose-5-fosfato para ácidos nucleicos e interconverte açúcares intermediários.',
          diagram: 'mitochondria',
        },
        {
          id: 'glutathione-defense',
          title: 'NADPH e o sistema glutationa redutase nas hemácias',
          paragraphs: [
            'As hemácias não têm mitocôndrias e dependem exclusivamente da G6PD para gerar NADPH. O NADPH é o cofator essencial da glutationa redutase, que mantém a glutationa em seu estado reduzido (GSH).',
            'A glutationa peroxidase utiliza GSH para neutralizar peróxido de hidrogênio (H₂O₂) em água. Na deficiência de G6PD sob estresse oxidativo, o H₂O₂ oxida a hemoglobina em metaemoglobina e corpos de Heinz, provocando hemólise intravascular e esplênica.',
          ],
          takeaway: 'O NADPH reduz a glutationa, que neutraliza espécies reativas de oxigênio e previne a hemólise das hemácias.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: na hemácia, a enzima da via das pentoses responsável por gerar o NADPH indispensável para regenerar a glutationa reduzida e prevenir hemólise oxidativa é a ______.',
        blank: 'A enzima protetora chave da hemácia é a ______.',
        options: [
          {
            id: 'g6pd-nadph-glutathione',
            label: 'Glicose-6-fosfato desidrogenase (G6PD)',
            explanation: 'Correto: a deficiência de G6PD impede a regeneração de NADPH, tornando as hemácias suscetíveis a danos oxidativos.',
          },
          {
            id: 'hexokinase-atp',
            label: 'Hexoquinase',
            explanation: 'Incorreto: a hexoquinase fosforila glicose em glicose-6-fosfato na glicólise, consumindo ATP sem gerar NADPH.',
          },
          {
            id: 'pyruvate-kinase',
            label: 'Piruvato quinase',
            explanation: 'Incorreto: a piruvato quinase gera ATP na etapa final da glicólise citosólica.',
          },
          {
            id: 'citrate-synthase',
            label: 'Citrato sintase',
            explanation: 'Incorreto: a citrato sintase opera na matriz mitocondrial e eritrócitos maduros carecem de mitocôndrias.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'Why can ingesting fava beans or sulfa drugs precipitate life-threatening hemolytic anemia in individuals with G6PD deficiency?',
      title: 'Pentose phosphate pathway, G6PD, NADPH, and antioxidant defense',
      description: 'Master the oxidative phase of the hexose monophosphate shunt, NADPH synthesis, and glutathione recycling.',
      objective: 'Explain the pentose phosphate pathway and the indispensable role of NADPH in shielding red blood cells from oxidative stress.',
      stages: [
        {
          id: 'oxidative-phase',
          title: 'The oxidative phase and glucose-6-phosphate dehydrogenase',
          paragraphs: [
            'The pentose phosphate pathway (hexose monophosphate shunt) takes place in the cytosol, diverting glucose-6-phosphate without consuming or generating ATP. Its committed rate-limiting step is catalyzed by glucose-6-phosphate dehydrogenase (G6PD).',
            'This irreversible oxidative cascade reduces two NADP⁺ molecules into two NADPH + H⁺ per molecule of glucose-6-phosphate decarboxylated into ribulose-5-phosphate and CO₂.',
          ],
          takeaway: 'G6PD catalyzes the irreversible oxidative step generating NADPH and ribulose-5-phosphate from glucose-6-phosphate.',
          diagram: 'equation',
        },
        {
          id: 'non-oxidative-phase',
          title: 'Non-oxidative phase: ribose-5-phosphate and glycolytic shunting',
          paragraphs: [
            'The downstream non-oxidative branch is reversible, governed by transketolases (requiring thiamine pyrophosphate/vitamin B1 as a cofactor) and transaldolases.',
            'This phase manufactures ribose-5-phosphate for purine and pyrimidine nucleotide synthesis or returns excess pentose intermediates back into fructose-6-phosphate and glyceraldehyde-3-phosphate.',
          ],
          takeaway: 'The non-oxidative branch generates ribose-5-phosphate for nucleic acids and recycles surplus carbon back into glycolysis.',
          diagram: 'mitochondria',
        },
        {
          id: 'glutathione-defense',
          title: 'NADPH and the glutathione reductase shield in erythrocytes',
          paragraphs: [
            'Mature erythrocytes lack mitochondria, relying exclusively on G6PD to replenish NADPH. NADPH serves as an obligate electron donor for glutathione reductase to maintain reduced glutathione (GSH).',
            'Glutathione peroxidase harnesses GSH to reduce toxic hydrogen peroxide (H₂O₂) into water. Under G6PD deficiency and oxidant stress, uncontrolled peroxides crosslink hemoglobin into Heinz bodies, driving brisk hemolysis.',
          ],
          takeaway: 'NADPH regenerates reduced glutathione, neutralizing reactive oxygen species and preventing erythrocyte hemolysis.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete: in red blood cells, the rate-limiting pentose phosphate pathway enzyme that produces NADPH to reduce glutathione and prevent hemolytic crisis is ______.',
        blank: 'The critical protective antioxidant enzyme is ______.',
        options: [
          {
            id: 'g6pd-nadph-glutathione',
            label: 'Glucose-6-phosphate dehydrogenase (G6PD)',
            explanation: 'Correct: G6PD produces NADPH, the mandatory electron source for glutathione reduction against oxidative hemolysis.',
          },
          {
            id: 'hexokinase-atp',
            label: 'Hexokinase',
            explanation: 'Incorrect: hexokinase phosphorylates glucose into G6P during glycolysis, consuming ATP rather than generating NADPH.',
          },
          {
            id: 'pyruvate-kinase',
            label: 'Pyruvate kinase',
            explanation: 'Incorrect: pyruvate kinase catalyzes the final substrate-level phosphorylation of glycolysis.',
          },
          {
            id: 'citrate-synthase',
            label: 'Citrate synthase',
            explanation: 'Incorrect: citrate synthase resides in mitochondria, which mature erythrocytes completely lack.',
          },
        ],
      },
    },
  },
});

export const biochemistryLipidOxidationLesson = lessonSchema.parse({
  id: 'biochemistry-lipid-oxidation',
  revision: 1,
  questionId: 'biochemistry-lipid-oxidation-q1',
  correctOptionId: 'cpt1-carnitine-shuttle',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch24-lipids',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-3-lipid-metabolism',
      section: 'Chapter 24 · Lipid Catabolism, Beta-Oxidation, and Ketogenesis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Bioquímica',
      hook: 'Como o tecido adiposo mobiliza seus triglicerídeos para alimentar o coração e os músculos esqueléticos durante horas de exercício prolongado?',
      title: 'Metabolismo de lipídios I: lipólise, beta-oxidação e corpos cetônicos',
      description: 'Aprenda a ativação de ácidos graxos, a lançadeira da carnitina e a cetogênese hepática no jejum.',
      objective: 'Descrever a beta-oxidação mitocondrial e explicar a síntese e uso de corpos cetônicos durante o jejum prolongado.',
      stages: [
        {
          id: 'lipolysis-activation',
          title: 'Lipólise adipocitária e ativação de acil-CoA',
          paragraphs: [
            'Em resposta ao glucagon e catecolaminas, a lipase sensível a hormônio (LSH) e a lipase de triglicerídeos adipocitária (ATGL) clivam triglicerídeos intracelulares em glicerol e ácidos graxos livres.',
            'Os ácidos graxos viajam ligados à albumina até os tecidos e são ativados no citosol em acil-CoA graxo pela enzima acil-CoA sintetase, com hidrólise de ATP em AMP e pirofosfato inorgânico.',
          ],
          takeaway: 'A lipólise libera ácidos graxos livres que são ativados em acil-CoA no citosol com gasto de ATP.',
          diagram: 'mitochondria',
        },
        {
          id: 'carnitine-beta-oxidation',
          title: 'Lançadeira da carnitina e o ciclo da beta-oxidação',
          paragraphs: [
            'A membrana mitocondrial interna é impermeável a acil-CoA de cadeia longa. A enzima carnitina palmitoiltransferase I (CPT-I, inibida alostericamente por malonil-CoA) transfere o grupo acil para a carnitina, permitindo sua translocação.',
            'Na matriz, a beta-oxidação repete quatro reações (oxidação por FAD, hidratação, oxidação por NAD⁺ e clivagem tiolítica), liberando acetil-CoA, 1 FADH₂ e 1 NADH por volta.',
          ],
          takeaway: 'A CPT-I transporta ácidos graxos para a matriz mitocondrial, onde a beta-oxidação gera acetil-CoA, NADH e FADH₂.',
          diagram: 'equation',
        },
        {
          id: 'ketogenesis-utilization',
          title: 'Cetogênese hepática e consumo extra-hepático',
          paragraphs: [
            'No jejum prolongado ou no diabetes descompensado, o oxaloacetato hepático é consumido na gliconeogênese, acumulando acetil-CoA da beta-oxidação que excede a capacidade do ciclo de Krebs.',
            'O fígado expressa a enzima HMG-CoA liase e sintetiza corpos cetônicos (acetoacetato e beta-hidroxibutirato). Eles são exportados para o sangue para nutrir cérebro, miocárdio e músculo esquelético, enquanto o fígado não os consome por carecer de tioforase.',
          ],
          takeaway: 'O fígado converte excesso de acetil-CoA em corpos cetônicos para nutrir órgãos vitais no jejum.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual enzima mitocondrial externa representa a etapa limitante controlada para a entrada de ácidos graxos de cadeia longa na matriz mitocondrial?',
        options: [
          {
            id: 'cpt1-carnitine-shuttle',
            label: 'Carnitina palmitoiltransferase I (CPT-I)',
            explanation: 'Correto: a CPT-I conjuga carnitina ao acil-CoA e é inibida por malonil-CoA durante a síntese de lipídios.',
          },
          {
            id: 'hormone-sensitive-lipase',
            label: 'Lipase sensível a hormônio citoplasmática',
            explanation: 'Incorreto: a lipase sensível a hormônio opera no citoplasma do adipócito para clivar triglicerídeos em ácidos graxos.',
          },
          {
            id: 'hmg-coa-reductase',
            label: 'HMG-CoA redutase do retículo endoplasmático',
            explanation: 'Incorreto: a HMG-CoA redutase é a enzima limitante da síntese de colesterol, não da beta-oxidação.',
          },
          {
            id: 'succinate-dehydrogenase',
            label: 'Succinato desidrogenase da membrana interna',
            explanation: 'Incorreto: a succinato desidrogenase é o Complexo II da cadeia respiratória/ciclo de Krebs.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'How does adipose tissue mobilize its stored energy to sustain the heart and working skeletal muscles across fasting hours?',
      title: 'Lipid metabolism I: lipolysis, beta-oxidation, and ketone bodies',
      description: 'Trace fatty acid activation, carnitine shuttle translocation, and hepatic ketogenesis during sustained fasting.',
      objective: 'Describe mitochondrial beta-oxidation steps and explain the synthesis and extrahepatic oxidation of ketone bodies.',
      stages: [
        {
          id: 'lipolysis-activation',
          title: 'Adipocyte lipolysis and cytosolic acyl-CoA activation',
          paragraphs: [
            'In response to elevated glucagon and epinephrine, adipose triglyceride lipase (ATGL) and hormone-sensitive lipase (HSL) hydrolyze stored triacylglycerols into glycerol and three free fatty acids.',
            'Circulating fatty acids bind serum albumin and enter target cells, where outer mitochondrial acyl-CoA synthetases activate them into fatty acyl-CoA, expending ATP to yield AMP and pyrophosphate.',
          ],
          takeaway: 'Lipolysis yields free fatty acids that are activated into acyl-CoA in the cytosol at the expense of ATP.',
          diagram: 'mitochondria',
        },
        {
          id: 'carnitine-beta-oxidation',
          title: 'The carnitine shuttle and the four beta-oxidation steps',
          paragraphs: [
            'Because the inner mitochondrial membrane is strictly impermeable to long-chain acyl-CoA, carnitine palmitoyltransferase I (CPT-I, allosterically inhibited by malonyl-CoA) esterifies acyl groups to carnitine.',
            'Inside the matrix, beta-oxidation sequentially removes two-carbon units via four repetitive reactions (FAD oxidation, hydration, NAD⁺ oxidation, and thiolytic cleavage), generating acetyl-CoA, 1 FADH₂, and 1 NADH per cycle.',
          ],
          takeaway: 'CPT-I translocates acyl groups into the matrix, where beta-oxidation yields acetyl-CoA, NADH, and FADH₂.',
          diagram: 'equation',
        },
        {
          id: 'ketogenesis-utilization',
          title: 'Hepatic ketogenesis and extrahepatic utilization',
          paragraphs: [
            'During prolonged starvation or untreated diabetic ketoacidosis, hepatic oxaloacetate is consumed by active gluconeogenesis, causing beta-oxidation-derived acetyl-CoA to exceed citric acid cycle capacity.',
            'Hepatocytes utilize mitochondrial HMG-CoA lyase to synthesize ketone bodies (acetoacetate and beta-hydroxybutyrate). These are exported to power the brain, myocardium, and muscle, while the liver itself cannot consume them due to lacking thiophorase.',
          ],
          takeaway: 'The liver converts excess acetyl-CoA into ketone bodies to fuel extrahepatic tissues during fasting.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which outer mitochondrial membrane enzyme serves as the rate-limiting gateway for the import of long-chain fatty acids into the mitochondrial matrix?',
        options: [
          {
            id: 'cpt1-carnitine-shuttle',
            label: 'Carnitine palmitoyltransferase I (CPT-I)',
            explanation: 'Correct: CPT-I links acyl groups to carnitine for transit across the inner membrane and is inhibited by malonyl-CoA.',
          },
          {
            id: 'hormone-sensitive-lipase',
            label: 'Cytosolic hormone-sensitive lipase',
            explanation: 'Incorrect: hormone-sensitive lipase operates within adipocytes to release free fatty acids from intracellular lipid droplets.',
          },
          {
            id: 'hmg-coa-reductase',
            label: 'Endoplasmic reticulum HMG-CoA reductase',
            explanation: 'Incorrect: HMG-CoA reductase is the rate-limiting enzyme in de novo cholesterol biosynthesis.',
          },
          {
            id: 'succinate-dehydrogenase',
            label: 'Inner membrane succinate dehydrogenase',
            explanation: 'Incorrect: succinate dehydrogenase is Complex II of the electron transport chain and Krebs cycle.',
          },
        ],
      },
    },
  },
});

export const biochemistryLipoproteinsLesson = lessonSchema.parse({
  id: 'biochemistry-lipoproteins',
  revision: 1,
  questionId: 'biochemistry-lipoproteins-q1',
  correctOptionId: 'ldl-apob100-receptor',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch24-lipoproteins',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-3-lipid-metabolism',
      section: 'Chapter 24 · Cholesterol Metabolism and Plasma Lipoproteins',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Bioquímica',
      hook: 'Como gorduras completamente insolúveis em água navegam pela corrente sanguínea sem formar êmbolos gordurosos fatais?',
      title: 'Metabolismo de lipídios II: síntese de colesterol e lipoproteínas plasmáticas',
      description: 'Explore a rota da HMG-CoA redutase e as vias exógena e endógena de transporte por quilomícrons, VLDL, LDL e HDL.',
      objective: 'Distinguir quilomícrons, VLDL, LDL e HDL por suas apolipoproteínas e compreender o transporte reverso do colesterol.',
      stages: [
        {
          id: 'cholesterol-synthesis',
          title: 'Biossíntese de colesterol e a HMG-CoA redutase',
          paragraphs: [
            'O colesterol é um esterol essencial para a fluidez das membranas e precursor de hormônios esteroides, vitamina D e ácidos biliares. Sua síntese de novo ocorre no retículo endoplasmático e citosol a partir de acetil-CoA.',
            'A etapa limitante é catalisada pela enzima HMG-CoA redutase, que converte HMG-CoA em mevalonato consumindo 2 NADPH. Essa enzima é alvo farmacológico das estatinas e regulada por retroalimentação negativa mediada por SREBP.',
          ],
          takeaway: 'A HMG-CoA redutase é a enzima-chave na síntese de colesterol e alvo primordial das estatinas.',
          diagram: 'membrane',
        },
        {
          id: 'exogenous-endogenous',
          title: 'Vias exógena e endógena de lipoproteínas',
          paragraphs: [
            'Lipoproteínas são partículas esféricas com núcleo hidrofóbico de ésteres de colesterol e triglicerídeos, recobertas por monocamada anfifílica de fosfolipídios, colesterol livre e apolipoproteínas estruturais e regulatórias.',
            'Os quilomícrons (com ApoB-48) transportam gorduras da dieta a partir do intestino. O fígado secreta VLDL (com ApoB-100), cujos triglicerídeos são hidrolisados nos capilares periféricos pela lipase lipoproteica (LPL, ativada por ApoC-II), gerando remanescentes IDL e partículas LDL ricas em colesterol.',
          ],
          takeaway: 'Quilomícrons transportam lipídios da dieta e VLDL transporta triglicerídeos endógenos, gerando LDL.',
          diagram: 'intestine',
        },
        {
          id: 'ldl-hdl-reverse',
          title: 'LDL, captação tecidual e transporte reverso por HDL',
          paragraphs: [
            'O LDL entrega colesterol a células periféricas através da endocitose mediada por receptor de LDL, que reconhece a ApoB-100.',
            'O HDL (rico em ApoA-I) é sintetizado pelo fígado e intestino. Ele recolhe colesterol excedente dos tecidos periféricos através do transportador ABCA1, esterifica-o via enzima LCAT e o transfere de volta ao fígado (transporte reverso de colesterol), protegendo contra a aterogênese.',
          ],
          takeaway: 'O LDL entrega colesterol às células periféricas via ApoB-100; o HDL realiza o transporte reverso protetor.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual apolipoproteína presente na superfície da partícula de LDL é reconhecida pelo receptor de LDL para permitir a endocitose celular de colesterol?',
        options: [
          {
            id: 'ldl-apob100-receptor',
            label: 'Apolipoproteína B-100 (ApoB-100)',
            explanation: 'Correto: a ApoB-100 é a apolipoproteína estrutural do VLDL e LDL que se liga ao receptor de LDL celular.',
          },
          {
            id: 'hdl-apoa1-marker',
            label: 'Apolipoproteína A-I (ApoA-I)',
            explanation: 'Incorreto: a ApoA-I é a principal apolipoproteína estrutural do HDL, ativando a enzima LCAT.',
          },
          {
            id: 'lpl-apoc2-activator',
            label: 'Apolipoproteína C-II (ApoC-II)',
            explanation: 'Incorreto: a ApoC-II atua como cofator ativador da enzima lipase lipoproteica nos capilares.',
          },
          {
            id: 'chylomicron-apob48',
            label: 'Apolipoproteína B-48 (ApoB-48)',
            explanation: 'Incorreto: a ApoB-48 é a forma truncada sintetizada pelo intestino para os quilomícrons, não ligando receptores de LDL.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'How do completely water-insoluble fats travel through circulating aqueous blood without precipitating fatal emboli?',
      title: 'Lipid metabolism II: cholesterol synthesis and plasma lipoproteins',
      description: 'Master the rate-limiting HMG-CoA reductase cascade and contrast exogenous and endogenous lipid transport pathways.',
      objective: 'Distinguish chylomicrons, VLDL, LDL, and HDL by apolipoproteins and describe reverse cholesterol transport.',
      stages: [
        {
          id: 'cholesterol-synthesis',
          title: 'Cholesterol biosynthesis and HMG-CoA reductase',
          paragraphs: [
            'Cholesterol is a sterol indispensable for membrane fluidity and the obligate precursor of steroid hormones, vitamin D, and bile salts. De novo synthesis occurs in the endoplasmic reticulum and cytosol from cytosolic acetyl-CoA.',
            'The committing rate-limiting step is catalyzed by HMG-CoA reductase, which reduces HMG-CoA to mevalonate consuming two NADPH equivalents. HMG-CoA reductase is the therapeutic target of statins and undergoes feedback inhibition via SREBP-SCAP.',
          ],
          takeaway: 'HMG-CoA reductase catalyzes the rate-limiting step of cholesterol synthesis and is competitively targeted by statins.',
          diagram: 'membrane',
        },
        {
          id: 'exogenous-endogenous',
          title: 'Exogenous and endogenous lipoprotein transport pathways',
          paragraphs: [
            'Lipoproteins are spherical assemblies with a neutral hydrophobic core (triacylglycerols and cholesteryl esters) surrounded by an amphipathic monolayer of phospholipids, free cholesterol, and apolipoproteins.',
            'Chylomicrons (displaying ApoB-48) transport dietary lipids from enterocytes into lymph. The liver secretes VLDL (displaying ApoB-100), which delivers triglycerides to peripheral capillary beds after hydrolysis by lipoprotein lipase (LPL, activated by ApoC-II), generating IDL and LDL.',
          ],
          takeaway: 'Chylomicrons convey dietary lipids, while hepatic VLDL delivers endogenous triglycerides, yielding cholesterol-rich LDL.',
          diagram: 'intestine',
        },
        {
          id: 'ldl-hdl-reverse',
          title: 'LDL receptor-mediated endocytosis and HDL reverse transport',
          paragraphs: [
            'LDL particles deliver cholesterol to peripheral tissues via receptor-mediated endocytosis, which specifically engages the single ApoB-100 protein on LDL.',
            'HDL (abundant in ApoA-I) is assembled by the liver and intestines to scavenge excess cholesterol from peripheral membranes via ABCA1 transporters. Lecithin-cholesterol acyltransferase (LCAT) esterifies cholesterol, routing it back to the liver in anti-atherogenic reverse transport.',
          ],
          takeaway: 'LDL delivers cholesterol to cells via ApoB-100; HDL mediates anti-atherogenic reverse cholesterol transport.',
          diagram: 'adme',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which structural apolipoprotein present on the surface of LDL particles is specifically recognized by the LDL receptor to trigger endocytosis?',
        options: [
          {
            id: 'ldl-apob100-receptor',
            label: 'Apolipoprotein B-100 (ApoB-100)',
            explanation: 'Correct: ApoB-100 is the full-length structural apoprotein of VLDL and LDL that binds LDL receptors for uptake.',
          },
          {
            id: 'hdl-apoa1-marker',
            label: 'Apolipoprotein A-I (ApoA-I)',
            explanation: 'Incorrect: ApoA-I is the primary structural protein of HDL and functions as an activator of LCAT.',
          },
          {
            id: 'lpl-apoc2-activator',
            label: 'Apolipoprotein C-II (ApoC-II)',
            explanation: 'Incorrect: ApoC-II serves as an obligate cofactor activating endothelial lipoprotein lipase in capillary beds.',
          },
          {
            id: 'chylomicron-apob48',
            label: 'Apolipoprotein B-48 (ApoB-48)',
            explanation: 'Incorrect: ApoB-48 is a truncated intestinal isoform found on chylomicrons that lacks the LDL-receptor binding domain.',
          },
        ],
      },
    },
  },
});

export const biochemistryUreaIntegrationLesson = lessonSchema.parse({
  id: 'biochemistry-urea-integration',
  revision: 1,
  questionId: 'biochemistry-urea-integration-q1',
  correctOptionId: 'cps1-n-acetylglutamate',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch24-urea',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-4-protein-metabolism',
      section: 'Chapter 24 · Amino Acid Catabolism, the Urea Cycle, and Metabolic Integration',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Bioquímica',
      hook: 'Como o organismo converte a amônia altamente tóxica gerada pelo catabolismo proteico em um composto inócuo excretado pelos rins?',
      title: 'Metabolismo de aminoácidos, ciclo da ureia e integração metabólica',
      description: 'Estude as reações de transaminação, o ciclo mitocondrial e citosólico da ureia e a transição alimentado-jejum.',
      objective: 'Identificar a rota da amônia tóxica até a ureia e contrastar os estados metabólicos alimentado e de jejum.',
      stages: [
        {
          id: 'transamination-deamination',
          title: 'Transaminação e desaminação oxidativa',
          paragraphs: [
            'O catabolismo de aminoácidos começa pela remoção do grupo amino através de transaminases dependentes de piridoxal-fosfato (vitamina B6), como ALT e AST, que transferem o nitrogênio para o alfa-cetoglutarato, formando glutamato.',
            'No fígado, a glutamato desidrogenase mitocondrial promove a desaminação oxidativa do glutamato, liberando amônia livre tóxica (NH₄⁺) e regenerando alfa-cetoglutarato para novo uso.',
          ],
          takeaway: 'Transaminases e glutamato desidrogenase canalizam o nitrogênio dos aminoácidos em amônia na mitocôndria hepática.',
          diagram: 'mitochondria',
        },
        {
          id: 'urea-cycle-steps',
          title: 'O ciclo da ureia: compartimentos e enzima-chave',
          paragraphs: [
            'O ciclo da ureia ocorre exclusivamente nos hepatócitos, distribuído entre a matriz mitocondrial e o citosol. A enzima marca-passo mitocondrial é a carbamoil-fosfato sintetase I (CPS-I), que condensa amônia e bicarbonato consumindo 2 ATP e requer N-acetilglutamato como ativador alostérico obrigatório.',
            'A ornitina transcarbamilase (OTC) gera citrulina, que migra ao citosol. Reações sucessivas com aspartato e liberação de fumarato culminam na ação da arginase, que cliva arginina em ornitina reciclada e ureia solúvel não tóxica excretada na urina.',
          ],
          takeaway: 'A CPS-I mitocondrial inicia o ciclo da ureia com amônia e bicarbonato; a arginase citosólica libera a ureia.',
          diagram: 'kidney',
        },
        {
          id: 'metabolic-integration',
          title: 'Integração metabólica: estado absortivo versus pós-absortivo',
          paragraphs: [
            'No estado absortivo (alimentado), a insulina alta ativa a glicogênese, síntese de ácidos graxos e proteogênese, enquanto inibe vias catabólicas.',
            'No estado pós-absortivo (jejum), a relação glucagon/insulina elevada ativa glicogenólise hepática, lipólise no adipócito, gliconeogênese a partir de aminoácidos musculares e cetogênese para poupar glicose para eritrócitos e cérebro.',
          ],
          takeaway: 'A insulina comanda o anabolismo alimentado e o glucagon orquestra a mobilização energética durante o jejum.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual enzima mitocondrial hepática catalisa a etapa limitante inicial do ciclo da ureia e exige N-acetilglutamato como ativador alostérico obrigatório?',
        options: [
          {
            id: 'cps1-n-acetylglutamate',
            label: 'Carbamoil-fosfato sintetase I (CPS-I)',
            explanation: 'Correto: a CPS-I mitocondrial sintetiza carbamoil-fosfato a partir de amônia e bicarbonato e é estritamente dependente de N-acetilglutamato.',
          },
          {
            id: 'ornithine-transcarbamylase',
            label: 'Ornitina transcarbamilase (OTC)',
            explanation: 'Incorreto: a OTC condensa carbamoil-fosfato com ornitina para gerar citrulina na segunda etapa do ciclo.',
          },
          {
            id: 'arginase-cytosolic',
            label: 'Arginase citosólica',
            explanation: 'Incorreto: a arginase atua na etapa citosólica final, hidrolisando arginina em ureia e ornitina.',
          },
          {
            id: 'glutamine-synthetase',
            label: 'Glutamina sintetase citoplasmática',
            explanation: 'Incorreto: a glutamina sintetase fixa amônia em tecidos periféricos para transporte seguro ao fígado.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'How does the human liver convert lethal neurotoxic ammonia produced during protein breakdown into benign urinary urea?',
      title: 'Amino acid metabolism, urea cycle, and metabolic integration',
      description: 'Trace transamination reactions, mitochondrial and cytosolic urea synthesis, and fuel switching in fed versus fasting states.',
      objective: 'Outline amino acid nitrogen disposal via the urea cycle and explain hormonal shifts between fed and fasting states.',
      stages: [
        {
          id: 'transamination-deamination',
          title: 'Transamination and oxidative deamination',
          paragraphs: [
            'Amino acid catabolism commences with alpha-amino group removal catalyzed by pyridoxal phosphate-dependent (vitamin B6) transaminases like ALT and AST, transferring nitrogen onto alpha-ketoglutarate to form glutamate.',
            'Inside hepatocytes, mitochondrial glutamate dehydrogenase executes oxidative deamination of glutamate, generating toxic free ammonium ions (NH₄⁺) while recycling alpha-ketoglutarate.',
          ],
          takeaway: 'Transaminases and glutamate dehydrogenase concentrate excess amino nitrogen into mitochondrial ammonia in hepatocytes.',
          diagram: 'mitochondria',
        },
        {
          id: 'urea-cycle-steps',
          title: 'The urea cycle: compartmentalization and the committing enzyme',
          paragraphs: [
            'The urea cycle is restricted to hepatocytes, partitioned between mitochondrial matrix and cytosol. The committed rate-limiting enzyme is mitochondrial carbamoyl phosphate synthetase I (CPS-I), which condenses ammonia and bicarbonate at the cost of two ATP molecules and requires N-acetylglutamate as an obligate allosteric activator.',
            'Ornithine transcarbamylase (OTC) synthesizes citrulline, which exits to the cytosol. Following aspartate addition and fumarate release, cytosolic arginase cleaves arginine into ornithine and non-toxic water-soluble urea excreted by the kidneys.',
          ],
          takeaway: 'Mitochondrial CPS-I commits ammonia into carbamoyl phosphate; cytosolic arginase cleaves arginine to produce urea.',
          diagram: 'kidney',
        },
        {
          id: 'metabolic-integration',
          title: 'Metabolic integration: fed versus fasting states',
          paragraphs: [
            'In the fed (absorptive) state, elevated insulin stimulates hepatic glycogenesis, lipogenesis, and systemic protein synthesis, while suppressing catabolic lipolysis and gluconeogenesis.',
            'In the fasting (post-absorptive) state, elevated glucagon and catecholamines mobilize adipose fatty acids, muscle proteolysis, hepatic gluconeogenesis, and ketogenesis to preserve vital glucose for erythrocytes and brain.',
          ],
          takeaway: 'Insulin commands fed-state fuel storage, whereas glucagon directs catabolic fuel mobilization in fasting.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which mitochondrial hepatic enzyme catalyzes the committed, rate-limiting initial step of the urea cycle and strictly requires N-acetylglutamate as an obligate activator?',
        options: [
          {
            id: 'cps1-n-acetylglutamate',
            label: 'Carbamoyl phosphate synthetase I (CPS-I)',
            explanation: 'Correct: mitochondrial CPS-I combines ammonia and bicarbonate into carbamoyl phosphate and is allosterically dependent on N-acetylglutamate.',
          },
          {
            id: 'ornithine-transcarbamylase',
            label: 'Ornithine transcarbamylase (OTC)',
            explanation: 'Incorrect: OTC condenses carbamoyl phosphate with ornithine to produce citrulline as the second step in the cycle.',
          },
          {
            id: 'arginase-cytosolic',
            label: 'Cytosolic arginase',
            explanation: 'Incorrect: arginase operates as the final cytosolic step, hydrolyzing arginine into urea and regenerating ornithine.',
          },
          {
            id: 'glutamine-synthetase',
            label: 'Cytosolic glutamine synthetase',
            explanation: 'Incorrect: glutamine synthetase traps free ammonia as non-toxic glutamine in peripheral tissues for liver transport.',
          },
        ],
      },
    },
  },
});
