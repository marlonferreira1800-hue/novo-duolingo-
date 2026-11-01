import { lessonSchema } from '../src/contracts/learning';

export const microbiologyPathogenesisLesson = lessonSchema.parse({
  id: 'microbiology-pathogenesis',
  revision: 1,
  questionId: 'microbiology-pathogenesis-q1',
  correctOptionId: 'ab-exotoxin-mechanism',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch15-virulence',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/15-3',
      section: 'Chapter 15 · How Pathogens Cause Disease: Bacterial Toxins and Virulence Factors',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Microbiologia',
      hook: 'Como bactérias microscópicas conseguem colonizar cateteres de plástico, resistir a neutrófilos e derrubar a pressão arterial de um adulto em choque?',
      title: 'Patogênese bacteriana: fatores de virulência, endotoxinas e exotoxinas A-B',
      description: 'Estude os determinantes de patogenicidade bacteriana: adesinas, biofilmes, o choque endotóxico por LPS e o mecanismo das exotoxinas A-B.',
      objective: 'Diferenciar endotoxinas de exotoxinas e explicar o mecanismo de ação bipartido das exotoxinas A-B na toxicidade celular.',
      stages: [
        {
          id: 'adherence-and-biofilms',
          title: 'Colonização: adesinas, cápsula e biofilmes',
          paragraphs: [
            'A patogênese bacteriana inicia-se com a adesão aos tecidos do hospedeiro mediada por fímbrias, pili e adesinas superficiais que se ligam a receptores de glicoproteínas nas células epiteliais.',
            'Bactérias encapsuladas (como Streptococcus pneumoniae) resistem à opsonização e fagocitose por neutrófilos. Muitas espécies formam biofilmes: comunidades sésseis embebidas em matriz exopolissacarídica protetora que confere extrema resistência a antibióticos e defesas do hospedeiro sobre próteses e cateteres.',
          ],
          takeaway: 'Adesinas iniciam a fixação; cápsulas evadem a fagocitose e biofilmes protegem contra antimicrobianos.',
          diagram: 'microbe',
        },
        {
          id: 'endotoxin-lps-shock',
          title: 'Endotoxina (LPS) e cascata do choque séptico',
          paragraphs: [
            'A endotoxina é o lipopolissacarídeo (LPS) que compõe a folha externa da membrana externa de bactérias Gram-negativas, cujo componente tóxico ativo é o lípido A.',
            'O lípido A liga-se ao complexo TLR4/MD-2 em macrófagos circulantes, desencadeando a liberação maciça e desregulada de citocinas pró-inflamatórias (TNF-α, IL-1 e IL-6). Essa tempestade induz febre alta, vasodilatação sistêmica profunda por óxido nítrico endotelial, extravasamento capilar e choque séptico.',
          ],
          takeaway: 'O lípido A do LPS ativa o TLR4 macrofágico, liberando TNF-α e IL-1 que disparam o choque séptico.',
          diagram: 'inflammation',
        },
        {
          id: 'ab-exotoxins',
          title: 'Exotoxinas bacterianas: o mecanismo estrutural A-B',
          paragraphs: [
            'Diferente da endotoxina estrutural, as exotoxinas são proteínas solúveis altamente tóxicas secretadas ativamente por bactérias vivas Gram-positivas e Gram-negativas.',
            'As exotoxinas A-B possuem duas subunidades funcionais: a subunidade B (binding) liga-se a receptores específicos na membrana celular e medeia a entrada por endocitose; a subunidade A (active) transloca-se para o citosol e exerce atividade enzimática letal, frequentemente ADP-ribosilando alvos vitais como o fator de elongação EF-2 (toxina diftérica) ou a proteína Gs (toxina colérica).',
          ],
          takeaway: 'Nas toxinas A-B, a subunidade B liga-se ao receptor e a subunidade A catalisa a inativação enzimática de alvos celulares.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é a função desempenhada por cada subunidade na classe das exotoxinas bacterianas clássicas do tipo A-B?',
        options: [
          {
            id: 'ab-exotoxin-mechanism',
            label: 'A subunidade B liga-se a receptores específicos na membrana celular; a subunidade A transloca-se e exerce a atividade enzimática citotóxica',
            explanation: 'Correto: a subunidade B (binding) reconhece o receptor da célula hospedeira para facilitar a internalização, permitindo que a subunidade A (active) catalise reações tóxicas (como ADP-ribosilação).',
          },
          {
            id: 'ab-reverse-subunits',
            label: 'A subunidade A ancora a bactéria no biofilme; a subunidade B metaboliza a cápsula de peptideoglicano',
            explanation: 'Incorreto: as subunidades A e B são componentes solúveis da exotoxina proteica secretada, não adesinas de biofilme.',
          },
          {
            id: 'lipid-a-exotoxin-binding',
            label: 'A subunidade A consiste em lípido A de membrana e a subunidade B é um canal de cálcio voltagem-dependente',
            explanation: 'Incorreto: o lípido A é o cerne lipídico da endotoxina (LPS) Gram-negativa, não uma subunidade de exotoxina proteica.',
          },
          {
            id: 'complement-ab-cleavage',
            label: 'Ambas as subunidades atuam simultaneamente perfurando os poros lipídicos de neutrófilos polimorfonucleares',
            explanation: 'Incorreto: toxinas do tipo A-B atuam por internalização e atividade enzimática intracelular específica, enquanto toxinas formadoras de poros constituem outra família de exotoxinas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'How can microscopic bacterial species colonize indwelling plastic lines, evade engulfment by neutrophils, and crash human vascular tone into lethal shock?',
      title: 'Bacterial pathogenesis: virulence determinants, endotoxins, and A-B exotoxins',
      description: 'Study essential pathogenicity mechanisms: adhesins, biofilms, LPS-mediated endotoxic shock, and the molecular action of A-B exotoxins.',
      objective: 'Distinguish endotoxins from exotoxins and explain the bipartite subunit structure and catalytic intoxication of A-B exotoxins.',
      stages: [
        {
          id: 'adherence-and-biofilms',
          title: 'Colonization: adhesins, capsules, and protective biofilms',
          paragraphs: [
            'Bacterial pathogenesis initiates when surface adhesins, fimbriae, and pili dock onto specific glycoprotein receptors displayed by host mucosal epithelial surfaces.',
            'Encapsulated organisms (such as Streptococcus pneumoniae) resist complement opsonization and phagocytic engulfment. Many species establish robust biofilms: structured sessile communities encased within self-secreted exopolysaccharide matrices that confer physical resistance against host defenses and antimicrobial drugs on prostheses and catheters.',
          ],
          takeaway: 'Adhesins drive attachment; capsules block phagocytosis, and biofilms defend against antimicrobials.',
          diagram: 'microbe',
        },
        {
          id: 'endotoxin-lps-shock',
          title: 'Endotoxin (LPS) and the septic shock cascade',
          paragraphs: [
            'Endotoxin is lipopolysaccharide (LPS) anchored into the outer leaflet of Gram-negative bacterial outer membranes, with toxicity driven by its hydrophobic lipid A core.',
            'Circulating lipid A engages the TLR4/MD-2 complex on macrophages, triggering systemic overproduction of inflammatory cytokines (TNF-α, IL-1, IL-6). This storm causes high fever, extensive endothelial inducible nitric oxide synthesis, systemic vasodilation, capillary leakage, and septic shock.',
          ],
          takeaway: 'Lipid A of LPS engages macrophage TLR4, unleashing TNF-α and IL-1 to ignite septic vascular collapse.',
          diagram: 'inflammation',
        },
        {
          id: 'ab-exotoxins',
          title: 'Bacterial exotoxins: the A-B bipartite paradigm',
          paragraphs: [
            'In contrast to structural cell-wall endotoxins, exotoxins are soluble enzymatic proteins actively synthesized and secreted by viable Gram-positive and Gram-negative bacteria.',
            'Classic A-B exotoxins possess two functional components: the B (binding) subunit attaches specifically to host cell-surface target receptors to facilitate endocytosis; the A (active) catalytic subunit translocates into the cytosol to inactivate vital host machinery, frequently via ADP-ribosylation of targets such as EF-2 (diphtheria toxin) or Gs-alpha (cholera toxin).',
          ],
          takeaway: 'In A-B toxins, the B subunit mediates receptor docking, while the A subunit delivers cytotoxic enzymatic cleavage.',
          diagram: 'membrane',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What distinct physiological functions are executed by the individual subunits within classic bacterial A-B exotoxins?',
        options: [
          {
            id: 'ab-exotoxin-mechanism',
            label: 'The B subunit binds specific host surface receptors; the A subunit translocates into the cytosol to exert catalytic enzymatic toxicity',
            explanation: 'Correct: the B (binding) subunit mediates target-cell specificity and cellular uptake, allowing the catalytic A (active) subunit to reach intracellular substrate targets.',
          },
          {
            id: 'ab-reverse-subunits',
            label: 'The A subunit anchors bacterial cells to abiotic surfaces; the B subunit hydrolyzes peptidoglycan cross-links',
            explanation: 'Incorrect: A-B subunits are parts of secreted soluble protein toxins, not surface structural adhesins.',
          },
          {
            id: 'lipid-a-exotoxin-binding',
            label: 'The A subunit corresponds to outer membrane lipid A while the B subunit forms a voltage-gated calcium conduit',
            explanation: 'Incorrect: lipid A is the glycolipid anchor of Gram-negative endotoxin (LPS), not a component of secreted A-B protein exotoxins.',
          },
          {
            id: 'complement-ab-cleavage',
            label: 'Both subunits function simultaneously as non-specific pore-forming agents across neutrophil membranes',
            explanation: 'Incorrect: A-B toxins internalize to catalyze specific cytosolic enzymatic reactions, unlike pore-forming cytolysins.',
          },
        ],
      },
    },
  },
});

export const microbiologyGramPositiveCocciLesson = lessonSchema.parse({
  id: 'microbiology-gram-positive-cocci',
  revision: 1,
  questionId: 'microbiology-gram-positive-cocci-q1',
  correctOptionId: 'catalase-positive-staph-negative-strep',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch4-cocci',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/4-1',
      section: 'Chapter 4 · Prokaryotic Diversity: Gram-Positive Cocci of Clinical Significance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Microbiologia',
      hook: 'Como um teste de um minuto com água oxigenada separa instantaneamente as bactérias de abscessos cutâneos graves das que causam faringite e febre reumática?',
      title: 'Cocos Gram-positivos de relevância clínica: Staph e Strep',
      description: 'Diferencie Staphylococcus aureus, Streptococcus pyogenes e S. pneumoniae quanto à bioquímica, virulência e doenças clínicas.',
      objective: 'Aplicar a prova da catalase e coagulase, identificar os fatores de virulência de S. aureus (proteína A) e S. pyogenes (proteína M), e reconhecer as sequelas pós-estreptocócicas.',
      stages: [
        {
          id: 'staph-aureus-virulence',
          title: 'Staphylococcus aureus: catalase positiva e coagulase positiva',
          paragraphs: [
            'Estafilococos organizam-se em cachos e são catalase-positivos (decompõem H2O2 gerando efervescência de O2). Dentre eles, o Staphylococcus aureus destaca-se por ser coagulase-positivo e formar colônias douradas por pigmento carotenoide.',
            'O S. aureus expressa a Proteína A na parede celular, que se liga à porção Fc da IgG na orientação invertida, impedindo a opsonização e o ataque por neutrófilos. Ele produz também toxinas potentes como a TSST-1 (superantígeno que causa choque tóxico) e enterotoxinas termoestáveis indutoras de intoxicação alimentar.',
          ],
          takeaway: 'S. aureus é catalase-positivo, coagulase-positivo e expressa Proteína A para evadir neutrófilos invertendo a IgG.',
          diagram: 'microbe',
        },
        {
          id: 'strep-pyogenes-group-a',
          title: 'Streptococcus pyogenes (GAS): faringite e sequelas imunológicas',
          paragraphs: [
            'Estreptococos são catalase-negativos e crescem em cadeias. O Streptococcus pyogenes (estreptococo beta-hemolítico do grupo A de Lancefield) expressa a Proteína M, que inibe o complemento C3b e previne a fagocitose.',
            'Além de infecções supurativas locais (faringite, erisipela, escarlatina e fasceíte necrosante), anticorpos dirigidos contra a proteína M podem reagir de forma cruzada com a miosina cardíaca humana (mimetismo molecular), deflagrando a febre reumática aguda e a cardite.',
          ],
          takeaway: 'S. pyogenes é beta-hemolítico; a proteína M antifagocítica pode induzir febre reumática por mimetismo molecular.',
          diagram: 'immune',
        },
        {
          id: 'strep-pneumoniae-capsule',
          title: 'Streptococcus pneumoniae: o pneumococo alfa-hemolítico',
          paragraphs: [
            'O Streptococcus pneumoniae apresenta-se microscopicamente como diplococos lanceolados aos pares e exibe colônias com alfa-hemólise parcial (halo esverdeado) em ágar-sangue, sendo sensível à optoquina e solúvel em bile.',
            'Seu principal determinante de virulência é a cápsula polissacarídica espessa, que impede o contato direto com fagócitos. O pneumococo é a principal causa bacteriana de pneumonia adquirida na comunidade, meningite bacteriana no adulto e otite média em crianças.',
          ],
          takeaway: 'S. pneumoniae é diplococo alfa-hemolítico sensível à optoquina cuja cápsula é o alvo das vacinas antipneumocócicas.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a diferenciação bioquímica primária entre os dois maiores gêneros de cocos Gram-positivos clínicos:',
        blank: 'O teste da catalase diferencia os cocos Gram-positivos: o gênero Staphylococcus é catalase-______ e o gênero Streptococcus é catalase-______.',
        options: [
          {
            id: 'catalase-positive-staph-negative-strep',
            label: 'positivo / negativo',
            explanation: 'Correto: os estafilococos produzem a enzima catalase (catalase-positivos, liberam bolhas de O2 com H2O2), enquanto os estreptococos não produzem catalase (catalase-negativos).',
          },
          {
            id: 'catalase-negative-staph-positive-strep',
            label: 'negativo / positivo',
            explanation: 'Incorreto: o resultado está invertido; Staphylococcus é catalase-positivo e Streptococcus é catalase-negativo.',
          },
          {
            id: 'catalase-positive-both',
            label: 'positivo / positivo',
            explanation: 'Incorreto: apenas os estafilococos possuem a enzima catalase; estreptococos são anaeróbios facultativos catalase-negativos.',
          },
          {
            id: 'catalase-negative-both',
            label: 'negativo / negativo',
            explanation: 'Incorreto: se ambos fossem negativos, o teste da catalase não permitiria a clássica diferenciação diagnóstica entre os gêneros.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'How can a one-minute bedside hydrogen peroxide bubble test instantly segregate purulent skin abscess bacteria from the culprit behind rheumatic carditis?',
      title: 'Clinically significant Gram-positive cocci: Staph and Strep',
      description: 'Differentiate Staphylococcus aureus, Streptococcus pyogenes, and S. pneumoniae through biochemistry, virulence factors, and disease spectrum.',
      objective: 'Apply catalase and coagulase testing, identify key virulence determinants (Protein A, M protein), and trace post-streptococcal sequelae.',
      stages: [
        {
          id: 'staph-aureus-virulence',
          title: 'Staphylococcus aureus: catalase-positive and coagulase-positive',
          paragraphs: [
            'Staphylococci arrange in irregular grape-like clusters and are uniformly catalase-positive (cleaving H2O2 into oxygen gas bubbles). Staphylococcus aureus is singled out as coagulase-positive and typically synthesizes carotenoid staphyloxanthin producing golden colonies.',
            'S. aureus anchors Protein A onto its cell wall peptidoglycan, which binds the Fc domain of host IgG in an upside-down orientation, crippling opsonization and neutrophil Fc-receptor recognition. It also secretes destructive superantigens such as toxic shock syndrome toxin-1 (TSST-1) and heat-stable enterotoxins causing food poisoning.',
          ],
          takeaway: 'S. aureus is catalase- and coagulase-positive; cell-wall Protein A binds IgG Fc backwards to evade phagocytosis.',
          diagram: 'microbe',
        },
        {
          id: 'strep-pyogenes-group-a',
          title: 'Streptococcus pyogenes (GAS): pharyngitis and immune sequelae',
          paragraphs: [
            'Streptococci are catalase-negative and grow in paired or linear chains. Streptococcus pyogenes (Lancefield group A beta-hemolytic streptococcus) carries antiphagocytic surface M protein, which binds host factor H to degrade C3b opsonins.',
            'Beyond acute purulent illnesses (strep pharyngitis, erysipelas, scarlet fever, necrotizing fasciitis), anti-M protein antibodies cross-react against human cardiac sarcolemmal myosin via molecular mimicry, provoking acute rheumatic fever and rheumatic carditis.',
          ],
          takeaway: 'S. pyogenes is beta-hemolytic; antiphagocytic M protein triggers acute rheumatic carditis via molecular mimicry.',
          diagram: 'immune',
        },
        {
          id: 'strep-pneumoniae-capsule',
          title: 'Streptococcus pneumoniae: the alpha-hemolytic pneumococcus',
          paragraphs: [
            'Streptococcus pneumoniae appears as lancet-shaped diplococci under Gram staining, producing characteristic greenish alpha-hemolytic rings on blood agar and displaying exquisite sensitivity to optochin and bile solubility.',
            'Its major virulence determinant is an extensive polysaccharide capsule that sterically shields against phagocytic engulfment. It represents the leading bacterial cause of community-acquired pneumonia, adult meningitis, and pediatric otitis media.',
          ],
          takeaway: 'S. pneumoniae is an optochin-sensitive alpha-hemolytic diplococcus defended by a protective polysaccharide capsule.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the primary biochemical differentiation separating the two major clinical Gram-positive coccal genera:',
        blank: 'The catalase test discriminates Gram-positive cocci: the genus Staphylococcus is catalase-______, whereas the genus Streptococcus is catalase-______.',
        options: [
          {
            id: 'catalase-positive-staph-negative-strep',
            label: 'positive / negative',
            explanation: 'Correct: staphylococci produce catalase (cleaving H2O2 into H2O and vigorous O2 bubbles), while streptococci lack catalase and test negative.',
          },
          {
            id: 'catalase-negative-staph-positive-strep',
            label: 'negative / positive',
            explanation: 'Incorrect: this is inverted; Staphylococcus produces catalase, whereas Streptococcus is catalase-negative.',
          },
          {
            id: 'catalase-positive-both',
            label: 'positive / positive',
            explanation: 'Incorrect: streptococci are catalase-negative aerotolerant organisms.',
          },
          {
            id: 'catalase-negative-both',
            label: 'negative / negative',
            explanation: 'Incorrect: staphylococcal species are robustly catalase-positive.',
          },
        ],
      },
    },
  },
});

export const microbiologyGramNegativeRodsLesson = lessonSchema.parse({
  id: 'microbiology-gram-negative-rods',
  revision: 1,
  questionId: 'microbiology-gram-negative-rods-q1',
  correctOptionId: 'ehec-shiga-hus-triad',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch4-gram-negative',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/4-1',
      section: 'Chapter 4 · Prokaryotic Diversity: Gram-Negative Rods and Clinical Enterobacteriaceae',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Microbiologia',
      hook: 'Como o consumo de um hambúrguer mal passado pode levar uma criança a desenvolver anemia profunda e insuficiência renal aguda?',
      title: 'Bastonetes Gram-negativos clínicos: enterobactérias, Pseudomonas e Neisseria',
      description: 'Estude as enterobactérias (E. coli, Salmonella), Pseudomonas aeruginosa e diplococos de Neisseria.',
      objective: 'Classificar enterobactérias pela fermentação de lactose, detalhar a patogênese da toxina Shiga na síndrome hemolítico-urêmica (SHU) e identificar Pseudomonas aeruginosa.',
      stages: [
        {
          id: 'enterobacteriaceae-ecoli',
          title: 'Enterobactérias e Escherichia coli entero-hemorrágica (EHEC)',
          paragraphs: [
            'A família Enterobacteriaceae é composta por bacilos Gram-negativos que fermentam glicose, reduzem nitratos a nitritos e são oxidase-negativos. Em ágar MacConkey, a fermentação de lactose distingue E. coli e Klebsiella (colônias róseas) de patógenos não fermentadores como Salmonella e Shigella (colônias claras).',
            'A Escherichia coli entero-hemorrágica (EHEC, sorotipo clássico O157:H7) produz a toxina Shiga (Stx-1 e Stx-2). A toxina liga-se a receptores Gb3 no endotélio glomerular renal e inibe a subunidade 28S do ribossomo 60S, provocando colapso endotelial, trombose microvascular e a tríade da Síndrome Hemolítico-Urêmica (SHU: anemia hemolítica microangiopática, plaquetopenia e lesão renal aguda).',
          ],
          takeaway: 'EHEC O157:H7 secreta toxina Shiga, inibindo ribossomos endoteliais e causando a Síndrome Hemolítico-Urêmica (SHU).',
          diagram: 'microbe',
        },
        {
          id: 'salmonella-and-shigella',
          title: 'Salmonella entérica e Shigella: diarreias invasivas',
          paragraphs: [
            'Salmonella e Shigella são bacilos não fermentadores de lactose. Salmonella enterica invade ativamente enterócitos e macrófagos nas placas de Peyer ileais, produzindo sulfeto de hidrogênio (H2S positivo em ágar TSI) e disseminando-se pelo sistema reticuloendotelial (febre tifoide por S. Typhi).',
            'Shigella dysenteriae possui baixíssimo inóculo infectante (menos de 100 bactérias) e invade a mucosa colônica, utilizando polimerização de actina intracelular do hospedeiro para passar diretamente de um enterócito ao vizinho sem cair no espaço extracelular, causando colite ulcerativa com disenteria sanguinolenta mucopurulenta.',
          ],
          takeaway: 'Salmonella é H2S-positiva e penetra macrófagos; Shigella tem inóculo baixo e move-se por filamentos de actina intracelular.',
          diagram: 'intestine',
        },
        {
          id: 'pseudomonas-and-neisseria',
          title: 'Pseudomonas aeruginosa e diplococos de Neisseria',
          paragraphs: [
            'Pseudomonas aeruginosa é um bacilo Gram-negativo aeróbio estrito, oxidase-positivo, não fermentador de glicose, produtor do pigmento azul-esverdeado piocianina e dotado de odor frutado característico. É um dos principais patógenos nosocomiais e ataca imunossuprimidos, queimados e portadores de fibrose cística através da exotoxina A (que inativa EF-2).',
            'Neisseria meningitidis e N. gonorrhoeae são diplococos Gram-negativos aeróbios oxidase-positivos. O meningococo possui cápsula polissacarídica e causa meningite fulminante com síndrome de Waterhouse-Friderichsen (necrose hemorrágica adrenal); o gonococo carece de cápsula, apresentando grande variação antigênica nos pili.',
          ],
          takeaway: 'Pseudomonas secreta piocianina e exotoxina A; Neisseria meningitidis é diplococo encapsulado causador de meningite bacteriana.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual tríade clínica e laboratorial caracteriza a Síndrome Hemolítico-Urêmica (SHU) deflagrada por infecção gastrointestinal por E. coli entero-hemorrágica (EHEC O157:H7)?',
        options: [
          {
            id: 'ehec-shiga-hus-triad',
            label: 'Anemia hemolítica microangiopática, trombocitopenia e lesão renal aguda',
            explanation: 'Correto: a toxina Shiga lesa o endotélio glomerular gerando microtrombos que consomem plaquetas (trombocitopenia), fragmentam hemácias em esquizócitos (anemia hemolítica microangiopática) e precipitam falência renal aguda.',
          },
          {
            id: 'waterhouse-friderichsen-triad',
            label: 'Rigidez de nuca, petéquias difusas e apoplexia adrenal hemorrágica',
            explanation: 'Incorreto: meningococcemia fulminante com necrose adrenal bilateral define a síndrome de Waterhouse-Friderichsen causada por Neisseria meningitidis.',
          },
          {
            id: 'typhoid-enteric-fever-triad',
            label: 'Bradicardia relativa (sinal de Faget), manchas rosadas abdominais e esplenomegalia',
            explanation: 'Incorreto: febre entérica associada a bradicardia relativa e roséolas tíficas decorre de bacteremia invasiva por Salmonella Typhi.',
          },
          {
            id: 'cystic-fibrosis-pseudomonas-triad',
            label: 'Bronquiectasias mucopurulentas, baqueteamento digital e pigmentação azulada',
            explanation: 'Incorreto: infecções pulmonares crônicas pigmentadas por piocianina ocorrem por Pseudomonas aeruginosa em pacientes com fibrose cística.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'How can undercooked ground beef trigger a cascade that devastates a toddler’s kidneys and shears circulating red blood cells into fragments?',
      title: 'Clinical Gram-negative rods: Enterobacteriaceae, Pseudomonas, and Neisseria',
      description: 'Study enteric bacilli (E. coli, Salmonella), opportunistic Pseudomonas aeruginosa, and fastidious Neisseria diplococci.',
      objective: 'Classify Enterobacteriaceae by lactose fermentation, explain Shiga toxin action in hemolytic uremic syndrome (HUS), and identify Pseudomonas.',
      stages: [
        {
          id: 'enterobacteriaceae-ecoli',
          title: 'Enterobacteriaceae and enterohemorrhagic E. coli (EHEC)',
          paragraphs: [
            'The family Enterobacteriaceae encompasses Gram-negative rods that ferment glucose, reduce nitrates to nitrites, and are oxidase-negative. MacConkey agar lactose fermentation segregates rapid fermenters like E. coli and Klebsiella (pink colonies) from non-fermenting pathogens like Salmonella and Shigella (pale colonies).',
            'Enterohemorrhagic Escherichia coli (EHEC, prototypic serotype O157:H7) secretes Shiga toxin (Stx-1 and Stx-2), which binds Gb3 glycolipid receptors abundant on renal glomerular endothelium. Cleavage of the 28S rRNA within the 60S ribosomal subunit causes endothelial death, microvascular thrombosis, and the classic triad of Hemolytic Uremic Syndrome (HUS: microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury).',
          ],
          takeaway: 'EHEC O157:H7 secretes ribosome-inactivating Shiga toxin, driving Hemolytic Uremic Syndrome (HUS).',
          diagram: 'microbe',
        },
        {
          id: 'salmonella-and-shigella',
          title: 'Salmonella enterica and Shigella: invasive enterocolitis',
          paragraphs: [
            'Salmonella and Shigella are classic non-lactose-fermenting enteric rods. Salmonella enterica invades ileal Peyer patches, generates hydrogen sulfide gas (H2S-positive black colonies on TSI agar), and survives intracellularly inside reticuloendothelial macrophages (typhoid enteric fever).',
            'Shigella dysenteriae exhibits an exceptionally low infectious dose (<100 organisms) to conquer gastric acidity. Once inside colonic enterocytes, it polymerizes host intracellular actin tails to rocket directly into neighboring cells without extracellular exposure, causing ulcerating bloody-mucopurulent dysentery.',
          ],
          takeaway: 'Salmonella produces H2S and survives within macrophages; Shigella uses intracellular actin rocketing to spread.',
          diagram: 'intestine',
        },
        {
          id: 'pseudomonas-and-neisseria',
          title: 'Pseudomonas aeruginosa and pathogenic Neisseria diplococci',
          paragraphs: [
            'Pseudomonas aeruginosa is an obligate aerobic, oxidase-positive, non-glucose-fermenting rod that synthesizes the blue-green pigment pyocyanin alongside a grape-like scent. An opportunistic nosocomial threat in neutropenic patients, burn victims, and cystic fibrosis lungs, it secretes Exotoxin A to ADP-ribosylate and halt host elongation factor-2 (EF-2).',
            'Neisseria meningitidis and N. gonorrhoeae are fastidious oxidase-positive Gram-negative diplococci. N. meningitidis produces a heavy antiphagocytic polysaccharide capsule, driving fulminant meningococcemia and bilateral adrenal hemorrhagic apoplexy (Waterhouse-Friderichsen syndrome); N. gonorrhoeae lacks a capsule and evades immunity through pilin antigenic variation.',
          ],
          takeaway: 'Pseudomonas secretes pyocyanin and Exotoxin A; Neisseria meningitidis is an encapsulated diplococcus causing fulminant meningitis.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which clinical and laboratory triad uniquely defines the diagnosis of Hemolytic Uremic Syndrome (HUS) following EHEC O157:H7 enterocolitis?',
        options: [
          {
            id: 'ehec-shiga-hus-triad',
            label: 'Microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury',
            explanation: 'Correct: Shiga toxin injury to capillary endothelium produces platelet-rich microthrombi that consume platelets (thrombocytopenia), sheer passing RBCs into schistocytes (microangiopathic anemia), and cause acute renal failure.',
          },
          {
            id: 'waterhouse-friderichsen-triad',
            label: 'Nuchal rigidity, petechial rash, and bilateral hemorrhagic adrenal collapse',
            explanation: 'Incorrect: acute hemorrhagic destruction of adrenal glands due to fulminant bacteremia defines Waterhouse-Friderichsen syndrome caused by Neisseria meningitidis.',
          },
          {
            id: 'typhoid-enteric-fever-triad',
            label: 'Relative bradycardia (Faget sign), faint abdominal rose spots, and splenomegaly',
            explanation: 'Incorrect: rose spots, relative bradycardia, and step-ladder fever are canonical hallmarks of systemic typhoid fever caused by Salmonella Typhi.',
          },
          {
            id: 'cystic-fibrosis-pseudomonas-triad',
            label: 'Mucopurulent bronchiectasis, digital clubbing, and diffuse blue-green skin discoloration',
            explanation: 'Incorrect: persistent endobronchial colonization with pyocyanin pigment describes chronic pulmonary Pseudomonas aeruginosa infection in cystic fibrosis.',
          },
        ],
      },
    },
  },
});

export const microbiologyMycobacteriaSpirochetesLesson = lessonSchema.parse({
  id: 'microbiology-mycobacteria-spirochetes',
  revision: 1,
  questionId: 'microbiology-mycobacteria-spirochetes-q1',
  correctOptionId: 'mycobacterium-mycolic-acid-fast',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch21-mycobacteria',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/21-2',
      section: 'Chapter 21 · Skin and Eye Infections: Mycobacterial and Spirochetal Pathogens',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Microbiologia',
      hook: 'Por que o bacilo da tuberculose é imune à coloração de Gram comum e consegue sobreviver dormente dentro de macrófagos por 50 anos?',
      title: 'Bacteriologia clínica: Mycobacterium, espiroquetas e Clostridium',
      description: 'Estude Mycobacterium tuberculosis (ácido-álcool resistência e granulomas), Treponema pallidum (sífilis) e bacilos anaeróbios esporulados de Clostridium.',
      objective: 'Explicar a base química da álcool-ácido resistência por ácidos micólicos, correlacionar os estágios da sífilis e diferenciar as neurotoxinas clostridiais.',
      stages: [
        {
          id: 'mycobacterium-tuberculosis',
          title: 'Mycobacterium tuberculosis e parede rica em ácidos micólicos',
          paragraphs: [
            'O gênero Mycobacterium possui uma parede celular única contendo mais de 60% de lipídios cerosos, destacando-se os ácidos micólicos ligados a arabinogalactano e peptideoglicano. Essa camada cerosa impede a penetração de corantes hidrossolúveis comuns da coloração de Gram.',
            'Identificam-se como bacilos álcool-ácido resistentes (BAAR) na coloração de Ziehl-Neelsen, retendo a carbolfucsina após lavagem ácida intensa. A infecção pulmonar primária forma o complexo de Ghon; a imunidade mediada por células Th1 secreta IFN-γ para conter os bacilos dentro de granulomas caseosos.',
          ],
          takeaway: 'Ácidos micólicos conferem álcool-ácido resistência (BAAR em Ziehl-Neelsen) e sobrevivência intracelular em granulomas.',
          diagram: 'lung',
        },
        {
          id: 'mycobacterium-leprae',
          title: 'Mycobacterium leprae e o espectro da hanseníase',
          paragraphs: [
            'O Mycobacterium leprae possui tropismo por macrófagos dérmicos e células de Schwann de nervos periféricos, crescendo preferencialmente em temperaturas amenas (30-33°C).',
            'A doença manifesta-se em espectro dependente da resposta imune celular do hospedeiro: na forma tuberculoide, forte imunidade celular Th1 contém a infecção em poucas lesões hipocrômicas anestésicas; na forma virchowiana (lepromatosa), falha da resposta Th1 com polarização Th2 anérgica permite proliferação bacilar descontrolada, fácies leonina e neuropatia periférica desfigurante.',
          ],
          takeaway: 'Hanseníase tuberculoide = forte resposta Th1 protetora; hanseníase virchowiana = anergia Th1 com alta carga bacilar.',
          diagram: 'tissue',
        },
        {
          id: 'spirochetes-and-clostridium',
          title: 'Treponema pallidum (sífilis) e clostrídios neurotóxicos',
          paragraphs: [
            'O Treponema pallidum é uma espiroqueta delgada móvel por filamentos axiais periplasmáticos, invisível na microscopia óptica padrão e visualizada por microscopia de campo escuro. A sífilis evolui em fases: cancro duro indolor na primária, rash cutâneo palmar/plantar e condiloma plano na secundária, e gomas com neurossífilis na terciária.',
            'O gênero Clostridium é composto por bacilos Gram-positivos anaeróbios estritos esporulados. Clostridium tetani produz a tetanospasmina (que cliva a sinaptobrevina em interneurônios inibitórios de Renshaw, bloqueando GABA/glicina e gerando paralisia espástica), enquanto Clostridium botulinum produz a toxina botulínica (que bloqueia a liberação de acetilcolina na placa motora, gerando paralisia flácida descendente).',
          ],
          takeaway: 'Tetanospasmina bloqueia inibição espinhal gerando paralisia espástica; toxina botulínica bloqueia ACh causando paralisia flácida.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual constituinte químico característico do envoltório celular confere a propriedade de álcool-ácido resistência ao Mycobacterium tuberculosis na coloração de Ziehl-Neelsen?',
        options: [
          {
            id: 'mycobacterium-mycolic-acid-fast',
            label: 'Ácidos micólicos de cadeia longa e lipídios cerosos ligados à parede celular',
            explanation: 'Correto: os ácidos micólicos formam uma barreira cerosa espessa e hidrofóbica que retém avidamente o corante fucsina fenicada mesmo após lavagem com solução de álcool e ácido clorídrico.',
          },
          {
            id: 'peptidoglycan-teichoic-retention',
            label: 'Polímeros de ácido teicoico e cristais de fosfato inorgânico na membrana',
            explanation: 'Incorreto: ácidos teicoicos são típicos da parede de cocos Gram-positivos clássicos, não conferindo álcool-ácido resistência.',
          },
          {
            id: 'endotoxin-lipid-a-complex',
            label: 'Lípido A associado a antígeno O polissacarídico na membrana externa',
            explanation: 'Incorreto: LPS/lípido A compõe a membrana externa de Gram-negativos e é facilmente descorado pelo álcool na coloração de Gram.',
          },
          {
            id: 'dipicolinic-acid-spore-coat',
            label: 'Dipicolinato de cálcio desidratado no interior do córtex esporular',
            explanation: 'Incorreto: dipicolinato de cálcio estabiliza endósporos bacterianos de Clostridium e Bacillus, não a parede vegetativa das micobactérias.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'Why does the tuberculosis bacillus refuse to stain with standard Gram reagents yet survive silently walled inside pulmonary macrophages for half a century?',
      title: 'Clinical bacteriology: Mycobacterium, spirochetes, and Clostridium',
      description: 'Study Mycobacterium tuberculosis (acid-fastness, granulomas), Treponema pallidum (syphilis), and neurotoxic spore-forming Clostridia.',
      objective: 'Explain the chemical basis of acid-fast staining via mycolic acids, trace syphilitic disease stages, and contrast clostridial neurotoxins.',
      stages: [
        {
          id: 'mycobacterium-tuberculosis',
          title: 'Mycobacterium tuberculosis and the waxy mycolic acid barrier',
          paragraphs: [
            'The genus Mycobacterium is distinguished by an envelope containing >60% hydrophobic waxy lipids, centered on long-chain branched mycolic acids tethered to arabinogalactan and peptidoglycan. This barrier resists ordinary water-soluble Gram stains.',
            'Organisms identify as acid-fast bacilli (AFB) on Ziehl-Neelsen or Kinyoun staining, tenaciously retaining carbolfuchsin dye against destaining by hydrochloric acid in alcohol. Primary infection forms the calcified Ghon complex; host Th1 cellular immunity produces IFN-γ to constrain bacilli inside caseating granulomas.',
          ],
          takeaway: 'Mycolic acids confer acid-fastness (AFB on Ziehl-Neelsen) and support intracellular survival inside caseous granulomas.',
          diagram: 'lung',
        },
        {
          id: 'mycobacterium-leprae',
          title: 'Mycobacterium leprae and the clinical leprosy spectrum',
          paragraphs: [
            'Mycobacterium leprae exhibits absolute tropism for cooler dermal macrophages and peripheral Schwann cells, replicating at 30–33°C.',
            'Clinical disease manifests along an immunologic continuum dictated by host cell-mediated competence: tuberculoid leprosy features a robust Th1 response confining bacilli to hypopigmented anesthetic plaques; lepromatous leprosy reflects defective Th1 anergy, allowing unrestrained bacillary proliferation, leonine facies, and severe peripheral neuropathy.',
          ],
          takeaway: 'Tuberculoid leprosy = intact Th1 containment; lepromatous leprosy = Th1 anergy with massive bacillary burden.',
          diagram: 'tissue',
        },
        {
          id: 'spirochetes-and-clostridium',
          title: 'Treponema pallidum (syphilis) and neurotoxic Clostridia',
          paragraphs: [
            'Treponema pallidum is a corkscrew spirochete propelled by periplasmic endoflagella, invisible on brightfield microscopy and visualized via darkfield illumination. Syphilis proceeds through primary painless chancre, secondary maculopapular palmar/plantar rash and condylomata lata, and tertiary gummas, aortitis, and neurosyphilis.',
            'The genus Clostridium consists of obligate anaerobic Gram-positive spore-forming bacilli. Clostridium tetani secretes tetanospasmin (cleaving synaptobrevin in spinal Renshaw interneurons to block inhibitory GABA/glycine release, producing spastic tetanic paralysis); Clostridium botulinum releases botulinum toxin (cleaving SNARE proteins at motor end-plates to block acetylcholine release, causing flaccid paralysis).',
          ],
          takeaway: 'Tetanospasmin blocks inhibitory spinal interneurons causing spasticity; botulinum toxin blocks peripheral ACh release causing flaccidity.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which chemical constituent of the Mycobacterium tuberculosis cell envelope confers its diagnostic acid-fast staining property in Ziehl-Neelsen stains?',
        options: [
          {
            id: 'mycobacterium-mycolic-acid-fast',
            label: 'High-molecular-weight mycolic acids and complex envelope glycolipids',
            explanation: 'Correct: long-chain branched mycolic acids create a dense hydrophobic shell that traps lipid-soluble carbolfuchsin, resisting decolorization with acid-alcohol washes.',
          },
          {
            id: 'peptidoglycan-teichoic-retention',
            label: 'Teichoic acid polymers anchored into thick murein meshes',
            explanation: 'Incorrect: teichoic and lipoteichoic acids are structural components of standard Gram-positive cocci, not conferring acid-fastness.',
          },
          {
            id: 'endotoxin-lipid-a-complex',
            label: 'Lipid A core linked to repeating O-antigen surface chains',
            explanation: 'Incorrect: lipid A anchors Gram-negative outer membrane LPS, which decolorizes instantly in alcohol.',
          },
          {
            id: 'dipicolinic-acid-spore-coat',
            label: 'Calcium dipicolinate crystal matrices within endospore coats',
            explanation: 'Incorrect: calcium dipicolinate confers heat and chemical resistance to bacterial endospores (Bacillus and Clostridium), not mycobacterial vegetative cell walls.',
          },
        ],
      },
    },
  },
});

export const microbiologyClinicalVirologyLesson = lessonSchema.parse({
  id: 'microbiology-clinical-virology',
  revision: 1,
  questionId: 'microbiology-clinical-virology-q1',
  correctOptionId: 'influenza-antigenic-shift-reassortment',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'microbiology',
  sources: [
    {
      id: 'openstax-microbiology-ch25-virology',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/25-2',
      section: 'Chapter 25 · Circulatory and Lymphatic System Infections: Viral Pathogens of Clinical Relevance',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Microbiologia',
      hook: 'Como o vírus da gripe consegue criar uma cepa completamente nova capaz de causar uma pandemia global a cada poucas décadas?',
      title: 'Virologia clínica: arbovírus, hepatites, herpesvírus e influenza',
      description: 'Analise arboviroses (dengue, zika), hepatites virais de transmissão entérica vs parenteral, latência dos herpesvírus e mutações do influenza.',
      objective: 'Distinguir os mecanismos de antigenic drift e shift no vírus Influenza, as vias de transmissão das hepatites (A-E) e o extravasamento plasmático na dengue grave.',
      stages: [
        {
          id: 'arboviruses-dengue-zika',
          title: 'Arboviroses humanas: vírus da Dengue e Zika',
          paragraphs: [
            'Arbovírus (vírus transmitidos por artrópodes vetores como o Aedes aegypti) pertencem principalmente às famílias Flaviviridae e Togaviridae.',
            'O vírus da Dengue possui 4 sorotipos (DENV-1 a DENV-4). A infecção secundária por sorotipo heterólogo predispõe à dengue grave pelo fenômeno de facilitação dependente de anticorpos (ADE): anticorpos prévios subneutralizantes ligam-se ao novo vírus e facilitam sua entrada em monócitos via receptores Fcγ, deflagrando tempestade de citocinas, disfunção endotelial e extravasamento plasmático grave.',
          ],
          takeaway: 'Na dengue, infecção secundária por sorotipo diferente pode disparar ADE, choque e extravasamento plasmático.',
          diagram: 'microbe',
        },
        {
          id: 'viral-hepatitis-a-e',
          title: 'Hepatites virais: transmissão entérica (A, E) vs parenteral (B, C, D)',
          paragraphs: [
            'Os vírus das hepatites dividem-se em duas rotas clássicas de transmissão e desfecho biológico.',
            'Os vírus HAV e HEV são transmitidos por via fecal-oral (alimentos/água contaminados), são vírus de RNA sem envelope e provocam hepatite aguda autolimitada sem cronificação (com exceção de HEV em gestantes com risco de falência hepática fulminante). Em contraste, HBV (vírus DNA com transcriptase reversa) e HCV (vírus RNA) são transmitidos por via parenteral/sexual/vertical e possuem alto potencial de cronificação, evoluindo para cirrose e carcinoma hepatocelular.',
          ],
          takeaway: 'Hepatites A e E são de transmissão fecal-oral e autolimitadas; B e C são parenterais e evoluem para cirrose crônica.',
          diagram: 'intestine',
        },
        {
          id: 'herpesviruses-and-influenza',
          title: 'Herpesvírus (latência) e vírus Influenza (shift antigênico)',
          paragraphs: [
            'Herpesvírus (HSV, VZV, EBV, CMV) estabelecem latência ao longo da vida do hospedeiro: HSV e VZV alojam-se em gânglios sensitivos neuronais reativando-se com queda da imunidade (como herpes zoster).',
            'O vírus Influenza A possui genoma de RNA segmentado (8 segmentos) recoberto pelas glicoproteínas hemaglutinina (HA) e neuraminidase (NA). Pequenas mutações pontuais no gene da RNA polimerase causam o antigenic drift (epidemias anuais); a recombinação (reassortment) de segmentos genômicos inteiros entre cepas humanas e animais causa o antigenic shift, criando subtipos novos indutores de pandemias mundiais.',
          ],
          takeaway: 'Antigenic shift decorre do rearranjo de segmentos genômicos inteiros do Influenza A, deflagrando pandemias.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo virológico é responsável pelo antigenic shift no vírus Influenza A, originando novos subtipos pandêmicos?',
        options: [
          {
            id: 'influenza-antigenic-shift-reassortment',
            label: 'Rearranjo genético (reassortment) de segmentos inteiros de RNA viral entre diferentes cepas em coinfecção',
            explanation: 'Correto: como o Influenza A possui genoma de RNA segmentado em 8 fragmentos, a coinfecção de uma mesma célula hospedeira por duas cepas diferentes permite a troca de segmentos inteiros (antigenic shift), alterando drasticamente a hemaglutinina ou neuraminidase.',
          },
          {
            id: 'influenza-antigenic-drift-point-mutations',
            label: 'Acúmulo progressivo de mutações pontuais aleatórias pela polimerase viral sem revisão',
            explanation: 'Incorreto: o acúmulo de mutações pontuais graduais que altera levemente epítopos define o antigenic drift, causador de epidemias sazonais menores.',
          },
          {
            id: 'lysogenic-proviral-integration',
            label: 'Integração lisogênica de um provírus de DNA bacteriano no cromossomo humano',
            explanation: 'Incorreto: o vírus Influenza é um vírus de RNA que não se integra ao genoma do hospedeiro (não possui integrase nem ciclo lisogênico).',
          },
          {
            id: 'ade-macrophage-invasion',
            label: 'Facilitação por anticorpos heterólogos subneutralizantes com extravasamento capilar',
            explanation: 'Incorreto: a facilitação dependente de anticorpos (ADE) é o mecanismo fisiopatológico clássico da dengue grave por Flavivírus.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Microbiology',
      hook: 'How can the influenza virus reinvent its coat so radically that it triggers a worldwide human pandemic every few decades?',
      title: 'Clinical virology: arboviruses, hepatitis, herpesviruses, and influenza',
      description: 'Analyze arboviral pathogenesis (dengue, Zika), enteral versus parenteral viral hepatitis, herpesvirus latency, and influenza shift.',
      objective: 'Contrast influenza antigenic drift and shift, map hepatitis routes (A–E), and describe antibody-dependent enhancement in dengue shock.',
      stages: [
        {
          id: 'arboviruses-dengue-zika',
          title: 'Human arboviral pathogens: dengue and Zika viruses',
          paragraphs: [
            'Arboviruses (arthropod-borne viruses transmitted primarily by Aedes aegypti mosquitoes) encompass medically vital members of Flaviviridae and Togaviridae.',
            'Dengue virus circulates as 4 distinct serotypes (DENV-1 through DENV-4). Secondary infection with a heterologous serotype predisposes to severe dengue through antibody-dependent enhancement (ADE): non-neutralizing cross-reactive antibodies opsonize the heterologous virion to accelerate entry into monocytes via Fcγ receptors, driving massive cytokine release, vascular leakage, and shock.',
          ],
          takeaway: 'In dengue, secondary heterologous infection triggers antibody-dependent enhancement (ADE) and vascular shock.',
          diagram: 'microbe',
        },
        {
          id: 'viral-hepatitis-a-e',
          title: 'Viral hepatitis: enteral (A, E) vs parenteral (B, C, D) pathways',
          paragraphs: [
            'Hepatotropic viruses divide cleanly along transmission routes and long-term natural history.',
            'Hepatitis A (HAV) and E (HEV) are non-enveloped RNA viruses spread through contaminated food/water (fecal-oral), causing self-limited acute hepatitis without chronicity (excepting high mortality in pregnant patients with HEV). In stark contrast, HBV (partially double-stranded DNA virus with reverse transcriptase) and HCV (enveloped positive-sense RNA virus) transmit parenterally and sexually, establishing chronic active hepatitis predisposing to cirrhosis and hepatocellular carcinoma.',
          ],
          takeaway: 'Hepatitis A and E spread via fecal-oral routes; B and C spread parenterally to cause chronic cirrhosis.',
          diagram: 'intestine',
        },
        {
          id: 'herpesviruses-and-influenza',
          title: 'Herpesvirus latency and influenza antigenic shift',
          paragraphs: [
            'Herpesviridae (HSV, VZV, EBV, CMV) establish permanent nuclear latency: HSV and VZV persist within sensory nerve ganglia, reactivating as painful herpes zoster during immunosenescence or immunosuppression.',
            'Influenza A virus carries a segmented negative-sense RNA genome (8 segments) studded with hemagglutinin (HA) and neuraminidase (NA). Error-prone RNA polymerase causes gradual point mutations (antigenic drift, mandating annual vaccine updates); reassortment of whole RNA segments between human and animal strains creates entirely novel subtypes (antigenic shift) capable of inciting catastrophic pandemics.',
          ],
          takeaway: 'Antigenic shift arises from genetic reassortment of segmented RNA between Influenza A strains, triggering global pandemics.',
          diagram: 'lung',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which virological mechanism drives antigenic shift in Influenza A, generating novel pandemic subtypes with dramatically altered surface glycoproteins?',
        options: [
          {
            id: 'influenza-antigenic-shift-reassortment',
            label: 'Genetic reassortment of complete viral RNA segments during host coinfection with two distinct strains',
            explanation: 'Correct: because the Influenza A genome consists of 8 distinct segmented RNA pieces, coinfection of an animal host (e.g., swine) by human and avian strains allows reassortment of whole gene segments, yielding sudden antigenic shift.',
          },
          {
            id: 'influenza-antigenic-drift-point-mutations',
            label: 'Progressive accumulation of point mutations within hemagglutinin epitopes caused by unproofread replication',
            explanation: 'Incorrect: point mutation accumulation is termed antigenic drift, responsible for yearly seasonal variation rather than major pandemic shifts.',
          },
          {
            id: 'lysogenic-proviral-integration',
            label: 'Lysogenic integration of retroviral proviruses into host telomeric sequences',
            explanation: 'Incorrect: influenza viruses do not reverse transcribe or integrate into host DNA.',
          },
          {
            id: 'ade-macrophage-invasion',
            label: 'Antibody-dependent enhancement driving Fc-receptor mediated viral entry into macrophages',
            explanation: 'Incorrect: antibody-dependent enhancement (ADE) is the hallmark pathophysiological driver of severe dengue shock, not influenza shift.',
          },
        ],
      },
    },
  },
});
