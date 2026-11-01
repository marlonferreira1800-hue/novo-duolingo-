import { lessonSchema } from '../src/contracts/learning';

export const biochemistryKrebsLesson = lessonSchema.parse({
  id: 'biochemistry-krebs',
  revision: 1,
  questionId: 'biochemistry-krebs-nadh',
  correctOptionId: 'matrix-yield',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch24-krebs',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-2-carbohydrate-metabolism',
      section: 'Chapter 24 · Citric Acid Cycle and Carbohydrate Metabolism',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Bioquímica',
      hook: 'Como os carbonos provenientes dos alimentos são oxidados para abastecer a fábrica de ATP celular?',
      title: 'Ciclo de Krebs: a encruzilhada metabólica mitocondrial',
      description: 'Aprenda como o acetil-CoA é oxidado na matriz mitocondrial para gerar coenzimas reduzidas transportadoras de elétrons.',
      objective: 'Compreender as reações do ciclo do ácido cítrico e seu rendimento energético em coenzimas reduzidas.',
      stages: [
        {
          id: 'entry',
          title: 'Condensação de acetil-CoA e oxaloacetato',
          paragraphs: [
            'O ciclo de Krebs ocorre na matriz mitocondrial. Ele tem início com a condensação do grupo acetil (2 carbonos) do acetil-CoA com o oxaloacetato (4 carbonos), formando citrato (6 carbonos).',
            'A enzima citrato sintase catalisa essa reação irreversível que alimenta o ciclo com intermediários derivados de carboidratos, lipídios e aminoácidos.',
          ],
          takeaway: 'O ciclo inicia quando citrato sintase condensa acetil-CoA com oxaloacetato formando citrato na matriz.',
          diagram: 'mitochondria',
        },
        {
          id: 'cycle-reactions',
          title: 'Descarboxilações oxidativas e coenzimas',
          paragraphs: [
            'Ao longo do ciclo ocorrem duas descarboxilações oxidativas consecutivas (catalisadas pela isocitrato desidrogenase e alfa-cetoglutarato desidrogenase), liberando duas moléculas de CO₂.',
            'Nessas etapas, elétrons de alta energia são transferidos para coenzimas aceptoras, reduzindo NAD⁺ a NADH + H⁺.',
          ],
          takeaway: 'Duas descarboxilações sucessivas liberam dois CO₂ e geram NADH como carreador de elétrons.',
          diagram: 'mitochondria',
        },
        {
          id: 'energy-yield',
          title: 'Saldo por volta: NADH, FADH₂ e GTP/ATP',
          paragraphs: [
            'Para cada molécula de acetil-CoA oxidada, o ciclo rende 3 NADH, 1 FADH₂ (gerado pela succinato desidrogenase) e 1 GTP (convertível em ATP) por fosforilação ao nível de substrato.',
            'Essas coenzimas reduzidas migram para a membrana interna mitocondrial para doar elétrons à cadeia de transporte de elétrons.',
          ],
          takeaway: 'Cada acetil-CoA gera 3 NADH, 1 FADH₂ e 1 GTP para alimentar a fosforilação oxidativa.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em qual compartimento celular ocorre o ciclo de Krebs e qual é o seu principal produto carreador de elétrons?',
        options: [
          {
            id: 'matrix-yield',
            label: 'Matriz mitocondrial, gerando 3 NADH e 1 FADH₂ por acetil-CoA',
            explanation: 'Correto: todas as enzimas solúveis do ciclo atuam na matriz mitocondrial, produzindo coenzimas reduzidas.',
          },
          {
            id: 'cytosol-lactate',
            label: 'Citosol celular, gerando lactato e NAD⁺ oxidado',
            explanation: 'Incorreto: a fermentação lática citosólica ocorre em anaerobiose e consome NADH, não pertencendo ao ciclo.',
          },
          {
            id: 'intermembrane-proton',
            label: 'Espaço intermembranas, gerando acúmulo de oxaloacetato',
            explanation: 'Incorreto: o ciclo ocorre na matriz; o espaço intermembranas apenas recebe prótons da cadeia respiratória.',
          },
          {
            id: 'outer-membrane-atp',
            label: 'Membrana mitocondrial externa, gerando quebra direta de glicose',
            explanation: 'Incorreto: a membrana externa possui porinas permeáveis e não abriga as enzimas do ciclo de Krebs.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'How are carbon skeletons from food oxidized to generate fuel for the cellular ATP synthesis machine?',
      title: 'Krebs cycle: the mitochondrial metabolic crossroads',
      description: 'Learn how acetyl-CoA is fully oxidized in the mitochondrial matrix to produce reduced electron carriers.',
      objective: 'Understand citric acid cycle reactions and quantify its energy yield in reduced electron coenzymes.',
      stages: [
        {
          id: 'entry',
          title: 'Condensation of acetyl-CoA with oxaloacetate',
          paragraphs: [
            'The Krebs cycle operates within the mitochondrial matrix. It begins when the two-carbon acetyl group of acetyl-CoA condenses with four-carbon oxaloacetate to form six-carbon citrate.',
            'Citrate synthase catalyzes this irreversible entry step that funnel carbons from carbohydrates, lipids, and amino acids into oxidation.',
          ],
          takeaway: 'The cycle begins when citrate synthase fuses acetyl-CoA with oxaloacetate inside the matrix.',
          diagram: 'mitochondria',
        },
        {
          id: 'cycle-reactions',
          title: 'Oxidative decarboxylations and coenzymes',
          paragraphs: [
            'Two consecutive oxidative decarboxylation steps (catalyzed by isocitrate dehydrogenase and alpha-ketoglutarate dehydrogenase) release two molecules of CO₂.',
            'High-energy electrons stripped from metabolic intermediates reduce NAD⁺ into NADH + H⁺ during these rate-limiting reactions.',
          ],
          takeaway: 'Two decarboxylations release two CO₂ molecules and generate reduced NADH.',
          diagram: 'mitochondria',
        },
        {
          id: 'energy-yield',
          title: 'Yield per turn: NADH, FADH₂, and GTP/ATP',
          paragraphs: [
            'Each acetyl-CoA round yields 3 NADH, 1 FADH₂ (via succinate dehydrogenase), and 1 GTP (convertible to ATP) by substrate-level phosphorylation.',
            'These reduced electron shuttles diffuse across to the inner mitochondrial membrane to donate electrons to the respiratory chain.',
          ],
          takeaway: 'Each acetyl-CoA yields 3 NADH, 1 FADH₂, and 1 GTP to power oxidative phosphorylation.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In which cellular compartment does the Krebs cycle occur, and what is its primary electron-carrier yield?',
        options: [
          {
            id: 'matrix-yield',
            label: 'Mitochondrial matrix, yielding 3 NADH and 1 FADH₂ per acetyl-CoA',
            explanation: 'Correct: soluble Krebs enzymes reside in the mitochondrial matrix and yield high-energy reduced coenzymes.',
          },
          {
            id: 'cytosol-lactate',
            label: 'Cytosol, yielding lactate and oxidized NAD⁺',
            explanation: 'Incorrect: cytosolic lactic fermentation occurs under anaerobic conditions and consumes NADH.',
          },
          {
            id: 'intermembrane-proton',
            label: 'Intermembrane space, accumulating oxaloacetate',
            explanation: 'Incorrect: the intermembrane space accumulates pumped protons, while cycle enzymes are matrix-bound.',
          },
          {
            id: 'outer-membrane-atp',
            label: 'Outer mitochondrial membrane, directly splitting glucose',
            explanation: 'Incorrect: the outer membrane contains non-specific porins and does not house citric acid cycle enzymes.',
          },
        ],
      },
    },
  },
});

export const biochemistryOxphosLesson = lessonSchema.parse({
  id: 'biochemistry-oxidative-phosphorylation',
  revision: 1,
  questionId: 'biochemistry-oxphos-proton',
  correctOptionId: 'proton-gradient',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch24-oxphos',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-2-carbohydrate-metabolism',
      section: 'Chapter 24 · Electron Transport Chain and ATP Synthesis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Bioquímica',
      hook: 'Como o fluxo de elétrons através de complexos proteicos se transforma em centenas de moléculas de ATP?',
      title: 'Fosforilação oxidativa: gradiente de prótons e ATP sintase',
      description: 'Descubra o mecanismo quimiosmótico que acopla o transporte de elétrons à síntese rotacional de ATP.',
      objective: 'Identificar os complexos da cadeia respiratória, a formação da força próton-motriz e o funcionamento da ATP sintase.',
      stages: [
        {
          id: 'electron-transport',
          title: 'A cadeia de transporte de elétrons',
          paragraphs: [
            'Quatro complexos multiproteicos (I a IV) estão inseridos na membrana mitocondrial interna. O NADH doa elétrons ao Complexo I e o FADH₂ ao Complexo II.',
            'Os elétrons fluem sequencialmente pela ubiquinona (coenzima Q) e citocromo c até o Complexo IV, onde o oxigênio molecular atua como aceptor final de elétrons, formando água.',
          ],
          takeaway: 'Os elétrons fluem através dos complexos I-IV até o oxigênio, formando água.',
          diagram: 'mitochondria',
        },
        {
          id: 'proton-gradient',
          title: 'Bombeamento de prótons e força próton-motriz',
          paragraphs: [
            'Conforme os elétrons transitam pelos complexos I, III e IV, energia livre é liberada para bombear prótons (H⁺) da matriz mitocondrial para o espaço intermembranas.',
            'Como a membrana interna é impermeável a íons, gera-se um forte gradiente eletroquímico de prótons (força próton-motriz), com pH mais baixo no espaço intermembranas.',
          ],
          takeaway: 'O bombeamento de prótons para o espaço intermembranas estabelece a força próton-motriz.',
          diagram: 'mitochondria',
        },
        {
          id: 'atp-synthase',
          title: 'ATP sintase: o motor molecular rotacional',
          paragraphs: [
            'A ATP sintase (Complexo V) possui um canal transmembrana (F₀) e uma cabeça catalítica (F₁) voltada para a matriz. O refluxo favorável de H⁺ por F₀ faz a haste central girar.',
            'Essa rotação mecânica induz mudanças conformacionais nas subunidades beta de F₁, catalisando a condensação de ADP e fosfato inorgânico (Pi) em ATP.',
          ],
          takeaway: 'O refluxo de prótons pela ATP sintase aciona rotação molecular que sintetiza ATP a partir de ADP e Pi.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual força motriz é diretamente utilizada pela ATP sintase para catalisar a síntese de ATP a partir de ADP e Pi?',
        options: [
          {
            id: 'proton-gradient',
            label: 'Gradiente eletroquímico de prótons através da membrana mitocondrial interna',
            explanation: 'Correto: a força próton-motriz gerada pela cadeia respiratória impulsiona o motor rotacional da ATP sintase.',
          },
          {
            id: 'direct-substrate-phosphorylation',
            label: 'Transferência direta de grupo fosfato de intermediários citosólicos solúveis',
            explanation: 'Incorreto: isso descreve fosforilação em nível de substrato, como na glicólise, e não a fosforilação oxidativa.',
          },
          {
            id: 'active-sodium-pump',
            label: 'Gradiente de sódio e potássio gerado pela bomba Na⁺/K⁺ ATPase',
            explanation: 'Incorreto: a Na⁺/K⁺ ATPase fica na membrana plasmática e consome ATP, em vez de sintetizá-lo.',
          },
          {
            id: 'glucose-breakdown',
            label: 'Quebra osmótica direta da molécula de glicose na matriz',
            explanation: 'Incorreto: a quebra de nutrientes transfere elétrons; a síntese de ATP depende estritamente do gradiente quimiosmótico.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'How does the transfer of electrons across protein complexes convert into billions of cellular ATP units?',
      title: 'Oxidative phosphorylation: proton gradient and ATP synthase',
      description: 'Master the chemiosmotic mechanism coupling mitochondrial electron transport to rotational ATP synthesis.',
      objective: 'Identify respiratory chain complexes, explain the proton-motive force, and describe ATP synthase mechanics.',
      stages: [
        {
          id: 'electron-transport',
          title: 'The electron transport chain',
          paragraphs: [
            'Four multiprotein complexes (I through IV) are embedded in the inner mitochondrial membrane. NADH donates electrons to Complex I, whereas FADH₂ donates to Complex II.',
            'Electrons pass sequentially via ubiquinone (coenzyme Q) and cytochrome c to Complex IV, where molecular oxygen serves as the terminal electron acceptor, yielding water.',
          ],
          takeaway: 'Electrons cascade through complexes I–IV to molecular oxygen, generating water.',
          diagram: 'mitochondria',
        },
        {
          id: 'proton-gradient',
          title: 'Proton pumping and the proton-motive force',
          paragraphs: [
            'As electrons traverse complexes I, III, and IV, free energy drives proton (H⁺) translocation from the mitochondrial matrix into the intermembrane space.',
            'Because the inner membrane is strictly impermeable to ions, an electrochemical proton gradient (proton-motive force) builds up with lower pH in the intermembrane space.',
          ],
          takeaway: 'Proton extrusion into the intermembrane space creates the electrochemical proton-motive force.',
          diagram: 'mitochondria',
        },
        {
          id: 'atp-synthase',
          title: 'ATP synthase: the rotational nanomotor',
          paragraphs: [
            'ATP synthase (Complex V) contains a transmembrane channel (F₀) and a catalytic matrix headpiece (F₁). Exergonic H⁺ reentry through F₀ drives rotor rotation.',
            'This rotational kinetic energy induces sequential conformational shifts in F₁ catalytic beta subunits, condensing ADP and inorganic phosphate (Pi) into ATP.',
          ],
          takeaway: 'Proton flow down its gradient through ATP synthase drives mechanical rotation to condense ADP and Pi.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which driving force is directly harnessed by ATP synthase to catalyze ATP generation from ADP and inorganic phosphate?',
        options: [
          {
            id: 'proton-gradient',
            label: 'Electrochemical proton gradient across the inner mitochondrial membrane',
            explanation: 'Correct: the chemiosmotic proton-motive force powers proton flux through F₀, driving rotary ATP synthesis.',
          },
          {
            id: 'direct-substrate-phosphorylation',
            label: 'Direct phosphate group transfer from cytosolic metabolic intermediates',
            explanation: 'Incorrect: direct phosphate transfer defines substrate-level phosphorylation, not chemiosmotic oxidative phosphorylation.',
          },
          {
            id: 'active-sodium-pump',
            label: 'Transmembrane sodium-potassium gradient powered by Na⁺/K⁺ ATPase',
            explanation: 'Incorrect: plasma membrane Na⁺/K⁺ ATPase hydrolyzes ATP to maintain ion balance rather than producing ATP.',
          },
          {
            id: 'glucose-breakdown',
            label: 'Direct osmotic rupture of glucose molecules in the matrix',
            explanation: 'Incorrect: fuel oxidation provides high-energy electrons; ATP production strictly relies on the proton gradient.',
          },
        ],
      },
    },
  },
});

export const biochemistryEnzymesLesson = lessonSchema.parse({
  id: 'biochemistry-enzymes',
  revision: 1,
  questionId: 'biochemistry-enzymes-km',
  correctOptionId: 'competitive-km',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch2-enzymes',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/2-5-chemical-reactions',
      section: 'Chapter 2 · Chemical Reactions and Enzyme Kinetics',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Bioquímica',
      hook: 'Como medicamentos e metabólitos regulam a velocidade das reações químicas aceleradas por enzimas?',
      title: 'Cinética enzimática: Km, Vmáx e tipos de inibição',
      description: 'Compreenda o modelo de Michaelis-Menten e aprenda a distinguir inibidores competitivos de não competitivos.',
      objective: 'Interpretar parâmetros cinéticos enzimáticos e diferenciar inibição competitiva e não competitiva em gráficos cinéticos.',
      stages: [
        {
          id: 'catalysis-kinetics',
          title: 'Enzimas diminuem a energia de ativação',
          paragraphs: [
            'Enzimas são catalisadores biológicos que aceleram reações estabilizando o estado de transição, sem alterar o equilíbrio químico global ou a variação de energia livre (ΔG).',
            'O substrato se liga ao sítio ativo com alta especificidade estereoquímica por meio do modelo de ajuste induzido.',
          ],
          takeaway: 'Enzimas diminuem a energia de ativação sem alterar o equilíbrio químico termodinâmico.',
          diagram: 'mitochondria',
        },
        {
          id: 'km-vmax',
          title: 'Equação de Michaelis-Menten: Vmáx e Km',
          paragraphs: [
            'Vmáx reflete a taxa máxima da reação quando todos os sítios ativos estão saturados por substrato. Km (constante de Michaelis) é a concentração de substrato na qual a velocidade é metade da Vmáx.',
            'Um Km baixo indica alta afinidade da enzima pelo substrato, necessitando de pouca quantidade para atingir meia saturação.',
          ],
          takeaway: 'Km é a concentração de substrato na metade da Vmáx e correlaciona-se inversamente com afinidade.',
          diagram: 'mitochondria',
        },
        {
          id: 'inhibition-types',
          title: 'Inibição competitiva versus não competitiva',
          paragraphs: [
            'Na inibição competitiva, o inibidor se assemelha ao substrato e disputa o sítio ativo: o Km aumenta (menor afinidade aparente), mas a Vmáx permanece inalterada em altas concentrações de substrato.',
            'Na inibição não competitiva clássica, o inibidor se liga a um sítio alostérico distante: a Vmáx diminui porque a catálise é prejudicada, mas o Km não se altera.',
          ],
          takeaway: 'Inibidores competitivos aumentam o Km sem alterar Vmáx; inibidores não competitivos reduzem Vmáx sem mudar Km.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual alteração nos parâmetros cinéticos é característica de um inibidor reversível que compete diretamente com o substrato pelo sítio ativo?',
        options: [
          {
            id: 'competitive-km',
            label: 'Aumento do Km aparente mantendo a Vmáx inalterada',
            explanation: 'Correto: o inibidor competitivo exige maior concentração de substrato para atingir Vmáx/2, mas altas doses de substrato superam o bloqueio.',
          },
          {
            id: 'noncompetitive-vmax',
            label: 'Redução acentuada da Vmáx mantendo o Km inalterado',
            explanation: 'Incorreto: a diminuição de Vmáx sem alteração no Km caracteriza a inibição não competitiva (alostérica).',
          },
          {
            id: 'uncompetitive-both',
            label: 'Redução simultânea e proporcional de Km e Vmáx',
            explanation: 'Incorreto: redução paralela de ambos os parâmetros define inibição incompetitiva.',
          },
          {
            id: 'allosteric-irreversible',
            label: 'Modificação covalente irreversível com Vmáx tendendo a zero',
            explanation: 'Incorreto: modificação covalente permanente define inativação enzimática suicida ou irreversível.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'How do clinical drugs and cellular metabolites control the catalytic velocity of vital enzyme systems?',
      title: 'Enzyme kinetics: Km, Vmax, and modes of inhibition',
      description: 'Master Michaelis-Menten kinetics and distinguish competitive from non-competitive enzyme inhibitors.',
      objective: 'Interpret enzyme kinetic parameters and differentiate competitive versus non-competitive inhibition.',
      stages: [
        {
          id: 'catalysis-kinetics',
          title: 'Enzymes lower transition-state activation energy',
          paragraphs: [
            'Enzymes are biological catalysts that dramatically accelerate reaction velocity by stabilizing the chemical transition state without altering thermodynamic equilibrium or overall free energy change (ΔG).',
            'Substrates bind to the active site with precise stereochemical complementarity described by the induced-fit model.',
          ],
          takeaway: 'Enzymes lower activation energy barriers without changing overall chemical reaction equilibrium.',
          diagram: 'mitochondria',
        },
        {
          id: 'km-vmax',
          title: 'Michaelis-Menten parameters: Vmax and Km',
          paragraphs: [
            'Vmax represents the maximum catalytic rate attained when all enzyme active sites are fully saturated with substrate. Km is the substrate concentration at half-maximal velocity (Vmax/2).',
            'A low Km value indicates high substrate affinity, meaning minimal substrate concentration is required to reach half saturation.',
          ],
          takeaway: 'Km is the substrate concentration at half Vmax and inversely reflects enzyme-substrate affinity.',
          diagram: 'mitochondria',
        },
        {
          id: 'inhibition-types',
          title: 'Competitive versus non-competitive inhibition',
          paragraphs: [
            'In competitive inhibition, the inhibitor resembles the substrate and competes for the active site: apparent Km increases while Vmax remains unchanged at saturating substrate levels.',
            'In classical non-competitive inhibition, the inhibitor binds an allosteric site: Vmax drops because catalysis is impaired, while substrate affinity (Km) stays identical.',
          ],
          takeaway: 'Competitive inhibitors increase Km without altering Vmax; non-competitive inhibitors decrease Vmax without changing Km.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which kinetic alteration characteristically describes a reversible inhibitor that directly competes with substrate for the catalytic active site?',
        options: [
          {
            id: 'competitive-km',
            label: 'Apparent Km increases while Vmax remains unchanged',
            explanation: 'Correct: competitive inhibitors require higher substrate levels to reach Vmax/2, but excess substrate outcompetes the inhibitor.',
          },
          {
            id: 'noncompetitive-vmax',
            label: 'Vmax decreases significantly while Km remains unaltered',
            explanation: 'Incorrect: decreased Vmax with unchanged Km defines non-competitive (allosteric) enzyme inhibition.',
          },
          {
            id: 'uncompetitive-both',
            label: 'Both Km and Vmax decrease in equal proportion',
            explanation: 'Incorrect: parallel decreases in both Km and Vmax define uncompetitive inhibition binding the ES complex.',
          },
          {
            id: 'allosteric-irreversible',
            label: 'Irreversible covalent inactivation reducing Vmax toward zero',
            explanation: 'Incorrect: permanent covalent modification describes irreversible suicide inhibition rather than competitive inhibition.',
          },
        ],
      },
    },
  },
});

export const biochemistryGluconeogenesisLesson = lessonSchema.parse({
  id: 'biochemistry-gluconeogenesis',
  revision: 1,
  questionId: 'biochemistry-gluconeogenesis-fasting',
  correctOptionId: 'liver-glycemia',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'biochemistry',
  sources: [
    {
      id: 'openstax-ap2e-ch24-fasting',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/24-2-carbohydrate-metabolism',
      section: 'Chapter 24 · Gluconeogenesis, Glycogen Metabolism and Fasting',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Bioquímica',
      hook: 'Como o organismo mantém a glicemia estável durante horas de sono ou dias de jejum prolongado?',
      title: 'Gliconeogênese e glicogênio: manutenção da glicemia no jejum',
      description: 'Entenda os papéis complementares da glicogenólise hepática e da gliconeogênese a partir de precursores não glicídicos.',
      objective: 'Distinguir a reserva de glicogênio hepático da gliconeogênese e reconhecer os precursores na homeostase da glicose.',
      stages: [
        {
          id: 'glycogen-storage',
          title: 'Glicogenólise hepática: resposta rápida ao jejum',
          paragraphs: [
            'Após refeições, o fígado armazena glicose na forma de glicogênio ramificado. Durante as primeiras 12 a 18 horas de jejum, a glicogênio fosforilase libera glicose-1-fosfato.',
            'O fígado expressa a enzima glicose-6-fosfatase, permitindo desfosforilar a glicose livre para exportá-la para o sangue e suprir órgãos dependentes como o cérebro.',
          ],
          takeaway: 'O glicogênio hepático supre glicose nas primeiras horas de jejum via glicose-6-fosfatase.',
          diagram: 'mitochondria',
        },
        {
          id: 'gluconeogenesis-pathway',
          title: 'Gliconeogênese: síntese de novo de glicose',
          paragraphs: [
            'Com o esgotamento dos estoques de glicogênio, o fígado (e em menor grau os rins) passa a sintetizar glicose nova a partir de lactato, glicerol e aminoácidos glicogênicos (como alanina).',
            'A gliconeogênese contorna as três etapas irreversíveis da glicólise utilizando piruvato carboxilase, fosfoenolpiruvato carboxiquinase, frutose-1,6-bisfosfatase e glicose-6-fosfatase.',
          ],
          takeaway: 'A gliconeogênese converte lactato, glicerol e alanina em glicose para sustentar o jejum prolongado.',
          diagram: 'mitochondria',
        },
        {
          id: 'hormonal-regulation',
          title: 'Controle hormonal: glucagon versus insulina',
          paragraphs: [
            'No jejum, a queda de insulina e a elevação de glucagon e cortisol ativam a adenilato ciclase hepática, induzindo a transcrição de enzimas gliconeogênicas.',
            'O músculo esquelético armazena glicogênio para consumo próprio durante contração vigorosa, mas não possui glicose-6-fosfatase para liberar glicose no sangue.',
          ],
          takeaway: 'O glucagon estimula a gliconeogênese hepática; o músculo consome seu próprio glicogênio sem exportar glicose livre.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual órgão é o sítio primário de gliconeogênese responsável por sintetizar e liberar glicose livre no sangue durante o jejum prolongado?',
        options: [
          {
            id: 'liver-glycemia',
            label: 'Fígado, por expressar glicose-6-fosfatase e enzimas gliconeogênicas completas',
            explanation: 'Correto: o fígado é o órgão-chave que desfosforila glicose-6-fosfato e exporta glicose livre para manter a glicemia sistêmica.',
          },
          {
            id: 'skeletal-muscle',
            label: 'Músculo esquelético, liberando glicose livre de suas fibras diretamente na veia cava',
            explanation: 'Incorreto: o músculo carece de glicose-6-fosfatase e utiliza seu glicogênio exclusivamente para contração mecânica interna.',
          },
          {
            id: 'adipose-tissue',
            label: 'Tecido adiposo branco, convertendo ácidos graxos livres em glicose',
            explanation: 'Incorreto: ácidos graxos com número par de carbonos geram acetil-CoA e corpos cetônicos, mas não sintetizam glicose líquida.',
          },
          {
            id: 'brain-cortex',
            label: 'Córtex cerebral, gerando reservas abundantes de glicogênio para proteger neurônios',
            explanation: 'Incorreto: o cérebro possui estoques mínimos de glicogênio nos astrócitos e depende criticamente da glicemia plasmática.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Biochemistry',
      hook: 'How does the human body maintain steady circulating glucose levels during overnight sleep or multi-day fasting?',
      title: 'Gluconeogenesis and glycogen: maintaining fasting blood glucose',
      description: 'Understand the complementary roles of hepatic glycogen breakdown and de novo gluconeogenesis from non-carbohydrate precursors.',
      objective: 'Distinguish liver glycogenolysis from gluconeogenesis and recognize substrate precursors in glucose homeostasis.',
      stages: [
        {
          id: 'glycogen-storage',
          title: 'Hepatic glycogenolysis: early fasting defense',
          paragraphs: [
            'Postprandially, the liver stores excess glucose as branched glycogen granules. During the first 12 to 18 hours of fasting, glycogen phosphorylase cleaves glucose-1-phosphate.',
            'Crucially, hepatocytes express glucose-6-phosphatase, which removes the phosphate group to export free glucose into blood for obligate consumers like the brain.',
          ],
          takeaway: 'Liver glycogenolysis provides free glucose during initial fasting hours via glucose-6-phosphatase.',
          diagram: 'mitochondria',
        },
        {
          id: 'gluconeogenesis-pathway',
          title: 'Gluconeogenesis: de novo glucose synthesis',
          paragraphs: [
            'As glycogen reserves deplete, hepatocytes (and renal cortex) synthesize new glucose from lactate, glycerol, and glucogenic amino acids (notably alanine).',
            'Gluconeogenesis bypasses the three irreversible steps of glycolysis using pyruvate carboxylase, PEPCK, fructose-1,6-bisphosphatase, and glucose-6-phosphatase.',
          ],
          takeaway: 'Gluconeogenesis converts lactate, glycerol, and alanine into glucose to sustain prolonged fasting.',
          diagram: 'mitochondria',
        },
        {
          id: 'hormonal-regulation',
          title: 'Hormonal control: glucagon versus insulin',
          paragraphs: [
            'During fasting, declining insulin and elevated glucagon and cortisol activate adenylyl cyclase, upregulating hepatic gluconeogenic enzyme transcription.',
            'Skeletal muscle stores abundant glycogen for self-consumption during high-intensity contraction, but lacks glucose-6-phosphatase and cannot export free glucose.',
          ],
          takeaway: 'Glucagon upregulates hepatic gluconeogenesis; skeletal muscle retains its glycogen for local contraction.',
          diagram: 'mitochondria',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which organ is the primary site of gluconeogenesis capable of releasing free glucose into systemic circulation during prolonged fasting?',
        options: [
          {
            id: 'liver-glycemia',
            label: 'Liver, because it expresses glucose-6-phosphatase and complete gluconeogenic enzymes',
            explanation: 'Correct: the liver possesses glucose-6-phosphatase to dephosphorylate glucose-6-phosphate and export free glucose systemically.',
          },
          {
            id: 'skeletal-muscle',
            label: 'Skeletal muscle, releasing free glucose directly into venous circulation',
            explanation: 'Incorrect: muscle lacks glucose-6-phosphatase and traps phosphorylated glucose for its own glycolytic contraction.',
          },
          {
            id: 'adipose-tissue',
            label: 'White adipose tissue, converting fatty acids into glucose',
            explanation: 'Incorrect: even-chain fatty acids yield acetyl-CoA and ketone bodies, but cannot produce net glucose in humans.',
          },
          {
            id: 'brain-cortex',
            label: 'Cerebral cortex, accumulating dense glycogen stores to nourish neurons',
            explanation: 'Incorrect: the brain has minimal glial glycogen reserves and depends continually on circulating blood glucose.',
          },
        ],
      },
    },
  },
});
