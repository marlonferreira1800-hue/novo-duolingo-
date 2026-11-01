import { lessonSchema } from '../src/contracts/learning';

export const parasitologyCyclesLesson = lessonSchema.parse({
  id: 'parasitology-cycles',
  revision: 1,
  questionId: 'parasitology-cycles-hosts',
  correctOptionId: 'sexual-reproduction-host',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-parasites',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/5-1-unicellular-eukaryotic-parasites',
      section: 'Chapter 5.1 · Unicellular Eukaryotic Parasites: Life cycles and host alternation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Parasitologia',
      hook: 'Por que alguns parasitas precisam de dois animais diferentes para conseguir completar sua reprodução?',
      title: 'Ciclos biológicos: hospedeiros definitivos e intermediários',
      description: 'Diferencie ciclos monoxênicos e heteroxênicos e entenda as definições biológicas de hospedeiro definitivo e intermediário.',
      objective: 'Distinguir ciclos monoxênicos de heteroxênicos e definir o papel reprodutivo dos hospedeiros definitivo e intermediário.',
      stages: [
        {
          id: 'monoxenic-heteroxenic',
          title: 'Ciclos monoxênicos vs heteroxênicos',
          paragraphs: [
            'Parasitas monoxênicos completam todo o seu ciclo de vida em uma única espécie de hospedeiro (como o nematódeo Ascaris lumbricoides e o protozoário Giardia lamblia).',
            'Parasitas heteroxênicos necessitam obrigatoriamente de duas ou mais espécies de hospedeiros em momentos distintos de sua vida para atingir a maturação (como Taenia solium e Schistosoma mansoni).',
          ],
          takeaway: 'Monoxênico requer apenas um hospedeiro; heteroxênico alterna entre espécies diferentes.',
          diagram: 'parasite',
        },
        {
          id: 'definitive-intermediate',
          title: 'Hospedeiro definitivo vs intermediário',
          paragraphs: [
            'O hospedeiro definitivo é aquele que abriga a forma adulta do parasito ou no qual ocorre a sua reprodução sexuada (por exemplo, o mosquito Anopheles na malária ou o homem na esquistossomose).',
            'O hospedeiro intermediário abriga as formas larvárias ou juvenis, ou aquele no qual o parasito se reproduz exclusivamente por vias assexuadas (como o homem na malária ou o caramujo Biomphalaria na esquistossomose).',
          ],
          takeaway: 'Definitivo = reprodução sexuada/fase adulta; intermediário = reprodução assexuada/fase larvária.',
          diagram: 'parasite',
        },
        {
          id: 'transmission-routes',
          title: 'Vias de transmissão e reservatórios',
          paragraphs: [
            'A infecção humana pode ocorrer por ingestão fecal-oral de cistos ou ovos, penetração transcutânea ativa de larvas ou inoculação biológica por artrópodes vetores.',
            'Reservatórios naturais são espécies animais ou ecossistemas nos quais o parasita sobrevive e se multiplica endemicamente, mantendo o ciclo na natureza mesmo com controle sanitário humano.',
          ],
          takeaway: 'Mecanismos de transmissão orientam medidas de saneamento básico, combate a vetores e profilaxia.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Em parasitologia médica, qual critério biológico define com exatidão um hospedeiro definitivo?',
        options: [
          {
            id: 'sexual-reproduction-host',
            label: 'Abrigação do parasito em sua fase adulta ou realização do ciclo de reprodução sexuada',
            explanation: 'Correto: o hospedeiro definitivo é aquele no qual o parasito atinge a maturidade sexual ou realiza a fase sexuada de sua reprodução biológica.',
          },
          {
            id: 'asexual-larval-host',
            label: 'Manutenção exclusiva de estágios larvários com multiplicação por fissão assexuada',
            explanation: 'Incorreto: abrigar formas larvárias e permitir multiplicação assexuada define o hospedeiro intermediário.',
          },
          {
            id: 'accidental-vector-host',
            label: 'Transporte mecânico passivo do parasito em patas ou asas sem replicação tecidual',
            explanation: 'Incorreto: o transporte passivo sem multiplicação tecidual caracteriza um vetor mecânico, e não um hospedeiro biológico.',
          },
          {
            id: 'reservoir-soil-host',
            label: 'Permanência obrigatória em solo úmido ou água doce sem penetração tecidual',
            explanation: 'Incorreto: solo ou água são veículos ou reservatórios ambientais inanimados, não hospedeiros vivos.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'Why do certain parasites strictly require two completely different animal species to complete their life cycle?',
      title: 'Biological Cycles: Definitive and Intermediate Hosts',
      description: 'Differentiate monoxenic and heteroxenic cycles, establishing clear biological definitions for definitive and intermediate hosts.',
      objective: 'Distinguish monoxenic from heteroxenic life cycles and define the specific reproductive roles of definitive and intermediate hosts.',
      stages: [
        {
          id: 'monoxenic-heteroxenic',
          title: 'Monoxenic vs heteroxenic life cycles',
          paragraphs: [
            'Monoxenic (direct) parasites complete their entire biological life cycle within a single host species (e.g., the nematode Ascaris lumbricoides and the protozoan Giardia lamblia).',
            'Heteroxenic (indirect) parasites obligatorily depend on two or more distinct animal species at separate life stages to achieve maturity (e.g., Taenia solium and Schistosoma mansoni).',
          ],
          takeaway: 'Monoxenic parasites utilize one host; heteroxenic parasites alternate across different species.',
          diagram: 'parasite',
        },
        {
          id: 'definitive-intermediate',
          title: 'Definitive vs intermediate hosts',
          paragraphs: [
            'The definitive host is the organism harboring the adult stage or within which the parasite undergoes sexual reproduction (such as the female Anopheles mosquito in malaria or humans in schistosomiasis).',
            'The intermediate host supports larval or juvenile stages, or represents the host in which only asexual multiplication takes place (such as humans in malaria or Biomphalaria snails in schistosomiasis).',
          ],
          takeaway: 'Definitive host = sexual reproduction / adult stage; intermediate host = asexual reproduction / larval development.',
          diagram: 'parasite',
        },
        {
          id: 'transmission-routes',
          title: 'Transmission routes and zoonotic reservoirs',
          paragraphs: [
            'Human parasitic transmission occurs via fecal-oral ingestion of cysts or embryonated eggs, active transcutaneous larval penetration, or vector-borne inoculation by blood-feeding arthropods.',
            'Zoonotic reservoirs are animal populations in which the parasite naturally propagates, preserving endemic transmission even when human cases are suppressed.',
          ],
          takeaway: 'Understanding transmission mechanisms guides targeted sanitation, vector eradication, and prophylaxis.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'In medical parasitology, which biological benchmark precisely designates an organism as a definitive host?',
        options: [
          {
            id: 'sexual-reproduction-host',
            label: 'Harboring the adult parasite stage or supporting its sexual reproductive cycle',
            explanation: 'Correct: the definitive host is defined as the species harboring the adult stage of the parasite or supporting the sexual phase of its reproduction.',
          },
          {
            id: 'asexual-larval-host',
            label: 'Exclusively sustaining immature larval stages undergoing asexual division',
            explanation: 'Incorrect: housing larval stages and facilitating asexual multiplication is the formal hallmark of an intermediate host.',
          },
          {
            id: 'accidental-vector-host',
            label: 'Providing passive mechanical transport on appendages without cellular tissue invasion',
            explanation: 'Incorrect: passive physical carriage without tissue multiplication defines a mechanical vector, not a biological host.',
          },
          {
            id: 'reservoir-soil-host',
            label: 'Obligate free-living soil maturation without entering any eukaryotic tissue',
            explanation: 'Incorrect: damp soil or water represent environmental matrices or reservoirs, not definitive animal hosts.',
          },
        ],
      },
    },
  },
});

export const parasitologyBloodProtozoaLesson = lessonSchema.parse({
  id: 'parasitology-blood-protozoa',
  revision: 1,
  questionId: 'parasitology-blood-malaria',
  correctOptionId: 'plasmodium-falciparum',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-protozoan-diseases',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/25-4-protozoan-infections-of-the-circulatory-and-lymphatic-systems',
      section: 'Chapter 25.4 · Protozoan Infections: Malaria, Chagas disease, and Leishmaniasis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Parasitologia',
      hook: 'Como um parasita unicelular transmitido por um mosquito consegue sincronizar a destruição de milhões de glóbulos vermelhos ao mesmo tempo?',
      title: 'Protozoários sistêmicos: malária, Chagas e leishmaniose',
      description: 'Estude os principais hemoflagelados e apicomplexos: Plasmodium, Trypanosoma cruzi e Leishmania, seus vetores e patogênese.',
      objective: 'Identificar Plasmodium, Trypanosoma cruzi e Leishmania, correlacionando seus ciclos aos vetores e às repercussões sistêmicas.',
      stages: [
        {
          id: 'plasmodium-malaria',
          title: 'Plasmodium e o ciclo eritrocítico da malária',
          paragraphs: [
            'Inoculado pela fêmea do mosquito Anopheles na forma de esporozoítos, o Plasmodium (como P. falciparum e P. vivax) passa por uma fase exoeritrocítica silenciosa no fígado.',
            'Merozoítos invadem as hemácias, amadurecem em trofozoítos e esquizontes, culminando na lise sincronizada das hemácias, que libera citocinas inflamatórias responsáveis pelos paroxismos típicos de calafrios, febre alta e sudorese.',
          ],
          takeaway: 'A ruptura sincrônica de hemácias infectadas deflagra os picos febris clássicos da malária.',
          diagram: 'parasite',
        },
        {
          id: 'trypanosoma-chagas',
          title: 'Trypanosoma cruzi e a doença de Chagas',
          paragraphs: [
            'Transmitido pelo inseto triatomíneo (barbeiro), o T. cruzi penetra na pele quando as fezes ou urinas do vetor são friccionadas sobre a picada ou mucosas.',
            'As formas tripomastigotas invadem células cardíacas e do trato digestivo, transformando-se em amastigotas intracelulares que formam ninhos nos tecidos, culminando em miocardiopatia dilatada, megacólon e megaesôfago.',
          ],
          takeaway: 'T. cruzi gera ninhos de amastigotas no coração e plexos mioentéricos, causando cardiomegalia e megas.',
          diagram: 'parasite',
        },
        {
          id: 'leishmania-systemic',
          title: 'Leishmania e a invasão de macrófagos',
          paragraphs: [
            'Transmitida pela picada do mosquito-palha (Lutzomyia), a forma promastigota da Leishmania é fagocitada por macrófagos do hospedeiro mamífero.',
            'Dentro dos fagolisossomos dos macrófagos, ela se converte em amastigota resistente. Na forma visceral (calazar), acomete baço, fígado e medula óssea, cursando com hepatoesplenomegalia maciça e pancitopenia.',
          ],
          takeaway: 'Leishmania parasita macrófagos; a forma visceral causa calazar com pancitopenia e grande esplenomegalia.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual protozoário sistêmico é transmitido pela fêmea do mosquito Anopheles, replica-se inicialmente nos hepatócitos e depois promove hemólise sincrônica de hemácias com episódios cíclicos de febre e calafrios?',
        options: [
          {
            id: 'plasmodium-falciparum',
            label: 'Plasmodium falciparum (agente da malária)',
            explanation: 'Correto: as espécies de Plasmodium invadem eritrócitos e causam lise periódica maciça sincronizada, deflagrando os paroxismos febris da malária.',
          },
          {
            id: 'trypanosoma-cruzi',
            label: 'Trypanosoma cruzi (agente da doença de Chagas)',
            explanation: 'Incorreto: o T. cruzi é transmitido por triatomíneos e parasita miócitos e neurônios mioentéricos, não causando paroxismos hemolíticos cíclicos.',
          },
          {
            id: 'leishmania-donovani',
            label: 'Leishmania donovani (agente do calazar)',
            explanation: 'Incorreto: a Leishmania é transmitida por flebotomíneos (mosquito-palha) e multiplica-se exclusivamente dentro de macrófagos teciduais.',
          },
          {
            id: 'toxoplasma-gondii',
            label: 'Toxoplasma gondii (agente da toxoplasmose)',
            explanation: 'Incorreto: o T. gondii é transmitido pela ingestão de oocistos em fezes de felídeos ou cistos em carne malcozida, não por mosquitos Anopheles.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'How can a single-celled protozoan injected by a mosquito synchronize the bursting of millions of human red blood cells simultaneously?',
      title: 'Systemic Protozoa: Malaria, Chagas Disease, and Leishmaniasis',
      description: 'Study critical hemoflagellates and apicomplexans: Plasmodium, Trypanosoma cruzi, and Leishmania, detailing vectors and pathogenesis.',
      objective: 'Identify Plasmodium, Trypanosoma cruzi, and Leishmania, linking their developmental cycles to vector vectors and systemic pathologies.',
      stages: [
        {
          id: 'plasmodium-malaria',
          title: 'Plasmodium and the erythrocytic cycle of malaria',
          paragraphs: [
            'Inoculated by the female Anopheles mosquito as sporozoites, Plasmodium species (including P. falciparum and P. vivax) complete a silent exoerythrocytic phase in liver hepatocytes.',
            'Released merozoites invade red blood cells, progressing through ring, trophozoite, and schizont stages. Synchronized erythrocyte rupture releases inflammatory cytokines, causing classic paroxysms of severe chills, spikes of fever, and sweats.',
          ],
          takeaway: 'Synchronous destruction of infected red cells produces the characteristic cyclical fevers of malaria.',
          diagram: 'parasite',
        },
        {
          id: 'trypanosoma-chagas',
          title: 'Trypanosoma cruzi and Chagas disease',
          paragraphs: [
            'Transmitted by blood-sucking triatomine bugs (kissing bugs), T. cruzi enters the skin when infectious feces or urine are rubbed into the bite wound or mucous membranes.',
            'Circulating trypomastigotes penetrate cardiac myocytes and enteric neurons, differentiating into intracellular amastigotes that form pseudo-cysts, causing dilated cardiomyopathy, megacolon, and megaesophagus.',
          ],
          takeaway: 'T. cruzi establishes intracellular amastigote nests in cardiac tissue and enteric plexuses, causing cardiomyopathy and organomegaly.',
          diagram: 'parasite',
        },
        {
          id: 'leishmania-systemic',
          title: 'Leishmania and macrophage subversion',
          paragraphs: [
            'Transmitted by phlebotomine sandflies (such as Lutzomyia), flagellated promastigotes are phagocytosed by host mononuclear phagocytes.',
            'Inside macrophage phagolysosomes, they transform into acid-resistant amastigotes. In visceral leishmaniasis (kala-azar), colonization of the spleen, liver, and bone marrow precipitates massive hepatosplenomegaly and pancytopenia.',
          ],
          takeaway: 'Leishmania replicates inside macrophages; visceral disease causes kala-azar marked by pancytopenia and splenomegaly.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which systemic protozoan is inoculated by the female Anopheles mosquito, undergoes an initial hepatic phase, and subsequently triggers synchronized hemolysis causing periodic febrile paroxysms?',
        options: [
          {
            id: 'plasmodium-falciparum',
            label: 'Plasmodium falciparum (causative agent of malaria)',
            explanation: 'Correct: Plasmodium species invade erythrocytes and replicate inside them, resulting in synchronous cellular lysis that triggers malarial paroxysms.',
          },
          {
            id: 'trypanosoma-cruzi',
            label: 'Trypanosoma cruzi (causative agent of Chagas disease)',
            explanation: 'Incorrect: T. cruzi is transmitted via contaminated triatomine feces and targets cardiac tissue and enteric nerves, not causing cyclical hemolytic paroxysms.',
          },
          {
            id: 'leishmania-donovani',
            label: 'Leishmania donovani (causative agent of kala-azar)',
            explanation: 'Incorrect: Leishmania is inoculated by sandflies and replicates intracellularly within tissue macrophages rather than causing synchronized erythrocyte lysis.',
          },
          {
            id: 'toxoplasma-gondii',
            label: 'Toxoplasma gondii (causative agent of toxoplasmosis)',
            explanation: 'Incorrect: T. gondii is contracted through feline fecal oocysts or undercooked meat, not through Anopheles mosquito vectors.',
          },
        ],
      },
    },
  },
});

export const parasitologyNematodesLesson = lessonSchema.parse({
  id: 'parasitology-nematodes',
  revision: 1,
  questionId: 'parasitology-nematodes-ascaris',
  correctOptionId: 'hookworms-ancylostoma',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-helminths',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/5-2-parasitic-helminths',
      section: 'Chapter 5.2 · Parasitic Helminths: Nematodes, life cycles, and clinical manifestations',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Parasitologia',
      hook: 'Como vermes intestinais conseguem migrar pelos pulmões antes de se fixarem no tubo digestivo e sugar o sangue do hospedeiro?',
      title: 'Nematelmintos intestinais: ciclo pulmonar e ancilostomídeos',
      description: 'Explore os principais nematódeos intestinais: Ascaris lumbricoides, ancilostomídeos e Strongyloides, destacando o ciclo de Loss e a anemia carencial.',
      objective: 'Descrever o ciclo pulmonar de Loss e correlacionar a biologia dos ancilostomídeos com a anemia ferropriva microcítica.',
      stages: [
        {
          id: 'loss-cycle',
          title: 'Ciclo cardiopulmonar de Loss',
          paragraphs: [
            'Determinados nematódeos (como Ascaris lumbricoides, Ancylostoma duodenale, Necator americanus e Strongyloides stercoralis) realizam uma migração tecidual obrigatória conhecida como ciclo de Loss.',
            'As larvas atravessam a parede intestinal ou a pele, alcançam a circulação venosa, passam pelas cavidades direitas do coração e atingem os capilares pulmonares. Rompem os alvéolos, sobem pela árvore traqueobrônquica até a laringe, são deglutidas e atingem o intestino delgado, podendo provocar tosse e infiltrados eosinofílicos (síndrome de Löffler).',
          ],
          takeaway: 'No ciclo de Loss, larvas migram pelos pulmões e vias aéreas antes de se estabelecerem no intestino delgado.',
          diagram: 'parasite',
        },
        {
          id: 'ascaris-intestinal',
          title: 'Ascaris lumbricoides e obstrução mecânica',
          paragraphs: [
            'Ascaris lumbricoides é adquirido pela ingestão de água ou alimentos contaminados com ovos embrionados do solo.',
            'Por atingirem grandes dimensões (até 30-40 cm), vermes adultos podem se aglomerar em bolos compactos na luz do íleo terminal, causando suboclusão ou obstrução intestinal mecânica aguda em crianças pequenas.',
          ],
          takeaway: 'Ascaris é transmitido por ingestão fecal-oral de ovos e seu grande porte predispõe à obstrução intestinal.',
          diagram: 'parasite',
        },
        {
          id: 'hookworms-strongyloides',
          title: 'Ancilostomídeos e anemia ferropriva',
          paragraphs: [
            'As larvas filarioides de Necator americanus e Ancylostoma duodenale penetram ativamente pela pele descalça em contato com solo contaminado.',
            'No duodeno e jejuno, os vermes adultos utilizam lâminas ou dentes quitinosos para dilacerar a mucosa intestinal e alimentar-se continuamente de sangue, provocando sangramento crônico oculto e grave anemia ferropriva microcítica e hipocrômica.',
          ],
          takeaway: 'Ancilostomídeos penetram ativamente pela pele e dilaceram a mucosa, causando anemia ferropriva crônica.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Quais nematódeos intestinais infectam o ser humano por penetração ativa transcutânea de larvas filarioides do solo e fixam-se à mucosa do intestino delgado, provocando perda sanguínea crônica e anemia ferropriva grave?',
        options: [
          {
            id: 'hookworms-ancylostoma',
            label: 'Ancilostomídeos (Ancylostoma duodenale e Necator americanus)',
            explanation: 'Correto: os ancilostomídeos penetram pela pele e fixam-se com dentes ou placas cortantes na mucosa intestinal, sugando sangue e causando anemia ferropriva clássica.',
          },
          {
            id: 'enterobius-pinworm',
            label: 'Enterobius vermicularis (oxiúro)',
            explanation: 'Incorreto: o Enterobius causa prurido perianal noturno por deposição de ovos nas margens anais, sem invasão hematófaga nem anemia.',
          },
          {
            id: 'trichuris-whipworm',
            label: 'Trichuris trichiura (tricocéfalo)',
            explanation: 'Incorreto: o Trichuris habita o ceco e cólon e pode causar prolapso retal e disenteria em infecções maciças, mas a penetração cutânea com hematofagia clássica pertence aos ancilostomídeos.',
          },
          {
            id: 'taenia-tapeworm',
            label: 'Taenia saginata (tênia bovina)',
            explanation: 'Incorreto: a Taenia saginata é um platelminto cestódeo transmitido pela ingestão de carne bovina crua com cisticercos, sem penetração cutânea.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'How can intestinal worms migrate through human lung tissue before returning to latch onto the gut wall and drink blood?',
      title: 'Intestinal Nematodes: Pulmonary Migration and Hookworms',
      description: 'Examine major gastrointestinal roundworms: Ascaris lumbricoides, hookworms, and Strongyloides, focusing on the Looss pulmonary cycle and blood loss.',
      objective: 'Outline the pulmonary Looss migratory cycle and link hookworm mechanical feeding to microcytic hypochromic iron-deficiency anemia.',
      stages: [
        {
          id: 'loss-cycle',
          title: 'The cardiopulmonary Looss migratory cycle',
          paragraphs: [
            'Specific intestinal nematodes (notably Ascaris lumbricoides, Ancylostoma duodenale, Necator americanus, and Strongyloides stercoralis) undergo an obligatory internal migration known as the Looss cycle.',
            'Larvae penetrate the bowel wall or intact skin, enter the venous return to the right heart, and lodge in pulmonary alveolar capillaries. They break through alveoli, ascend the tracheobronchial tree to the epiglottis, are swallowed, and mature in the small intestine, occasionally producing transient cough and eosinophilia (Löffler syndrome).',
          ],
          takeaway: 'In the Looss cycle, larvae migrate through the lungs and airways before establishing definitive residency in the small bowel.',
          diagram: 'parasite',
        },
        {
          id: 'ascaris-intestinal',
          title: 'Ascaris lumbricoides and mechanical bolus obstruction',
          paragraphs: [
            'Ascaris lumbricoides is contracted by ingesting food or water contaminated with microscopic embryonated eggs deposited in soil.',
            'Because individual adults grow up to 30–40 cm in length, massive worm burdens can tangle into an obstructing bolus in the terminal ileum, causing acute mechanical bowel obstruction in pediatric patients.',
          ],
          takeaway: 'Ascaris is acquired via fecal-oral ingestion of eggs; adult worm mass can physically obstruct the intestinal lumen.',
          diagram: 'parasite',
        },
        {
          id: 'hookworms-strongyloides',
          title: 'Hookworms and chronic iron-deficiency anemia',
          paragraphs: [
            'Filariform larvae of Necator americanus and Ancylostoma duodenale directly penetrate the epidermis of bare feet walking on contaminated soil.',
            'In the upper small intestine, adult worms use ventral cutting plates or chitinous teeth to lacerate mucosal capillaries, ingesting blood and causing persistent occult hemorrhage, resulting in severe microcytic hypochromic iron-deficiency anemia.',
          ],
          takeaway: 'Hookworms penetrate bare skin and actively feed on mucosal blood, creating insidious iron-deficiency anemia.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which intestinal nematodes infect humans through direct skin penetration of filariform larvae from soil and anchor to the small intestinal mucosa, leading to insidious hemorrhage and marked iron-deficiency anemia?',
        options: [
          {
            id: 'hookworms-ancylostoma',
            label: 'Hookworms (Ancylostoma duodenale and Necator americanus)',
            explanation: 'Correct: hookworms penetrate skin directly and attach to small intestinal villi using cutting apparatuses, feeding on blood and driving profound iron-deficiency anemia.',
          },
          {
            id: 'enterobius-pinworm',
            label: 'Enterobius vermicularis (pinworm)',
            explanation: 'Incorrect: pinworms cause nocturnal perianal pruritus following nocturnal egg deposition around anal folds, without tissue blood consumption.',
          },
          {
            id: 'trichuris-whipworm',
            label: 'Trichuris trichiura (whipworm)',
            explanation: 'Incorrect: Trichuris lives in the cecum and colon, causing rectal prolapse in massive pediatric infections, but lacks percutaneous larval entry and hookworm hematophagy.',
          },
          {
            id: 'taenia-tapeworm',
            label: 'Taenia saginata (beef tapeworm)',
            explanation: 'Incorrect: Taenia saginata is a flatworm (cestode) acquired by eating undercooked beef harboring cysticercus larvae, without percutaneous invasion.',
          },
        ],
      },
    },
  },
});

export const parasitologyPlathelminthesLesson = lessonSchema.parse({
  id: 'parasitology-plathelminthes',
  revision: 1,
  questionId: 'parasitology-plathelminthes-schistosoma',
  correctOptionId: 'ingestion-viable-eggs',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'parasitology',
  sources: [
    {
      id: 'openstax-microbiology-parasitic-flukes-tapeworms',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/5-2-parasitic-helminths',
      section: 'Chapter 5.2 · Parasitic Helminths: Trematodes (flukes) and Cestodes (tapeworms)',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Parasitologia',
      hook: 'Como o consumo acidental de saladas contaminadas com ovos de um verme pode levar a convulsões no cérebro?',
      title: 'Platelmintos: esquistossomose, teníase e neurocisticercose',
      description: 'Compreenda a biologia dos trematódeos e cestódeos: o ciclo do Schistosoma mansoni e a distinção clínica crucial entre teníase e neurocisticercose.',
      objective: 'Distinguir a patogênese da esquistossomose e diferenciar a transmissão de teníase (cisticercos na carne) da neurocisticercose (ingestão de ovos).',
      stages: [
        {
          id: 'schistosoma-life-cycle',
          title: 'Schistosoma mansoni e o ciclo biológico aquático',
          paragraphs: [
            'O Schistosoma mansoni é um trematódeo heteroxênico causador da esquistossomose mansônica (barriga d’água). Ovos eliminados nas fezes humanas eclodem em água doce liberando miracídios ciliados.',
            'O miracídio invade o caramujo Biomphalaria (hospedeiro intermediário), onde se multiplica e gera milhares de cercárias flageladas, que nadam ativamente e penetram a pele de banhistas.',
          ],
          takeaway: 'O caramujo Biomphalaria é o hospedeiro intermediário; a infecção humana ocorre pela penetração ativa de cercárias na pele.',
          diagram: 'parasite',
        },
        {
          id: 'schistosoma-pathology',
          title: 'Patologia esquistossomótica e hipertensão portal',
          paragraphs: [
            'Os vermes adultos acasalam-se e habitam os ramos do sistema venoso mesentérico. A fêmea ovipõe centenas de ovos, dos quais uma parte fica retida nos capilares do fígado.',
            'Os antígenos dos ovos retidos nos espaços porta deflagram uma reação inflamatória granulomatosa crônica com fibrose periportal (fibrose de Symmers), que obstrui o fluxo vascular e culmina em hipertensão portal pré-senusoidal, varizes esofágicas e esplenomegalia.',
          ],
          takeaway: 'Granulomas periovulares geram fibrose periportal, hipertensão portal e hemorragia por varizes de esôfago.',
          diagram: 'parasite',
        },
        {
          id: 'taenia-cysticercosis',
          title: 'Teníase vs neurocisticercose',
          paragraphs: [
            'A teníase intestinal ocorre quando o ser humano ingere carne suína malcozida contendo larvas encistadas (cisticercos) de Taenia solium, desenvolvendo o verme adulto no intestino.',
            'Já a neurocisticercose é uma patologia completamente diferente: ocorre quando o humano ingere diretamente ovos viáveis de Taenia solium (por alimentos contaminados ou autofecundação), tornando-se hospedeiro intermediário acidental. As larvas eclodem, invadem o sangue e formam cistos no parênquima cerebral, gerando crises epilépticas e déficits neurológicos.',
          ],
          takeaway: 'Comer carne com cisticerco dá teníase intestinal; ingerir ovos viáveis causa cistos no cérebro (neurocisticercose).',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é a forma exata pela qual o ser humano desenvolve a neurocisticercose com formação de cistos larvares no parênquima encefálico?',
        options: [
          {
            id: 'ingestion-viable-eggs',
            label: 'Ingestão de água ou alimentos contaminados com ovos de Taenia solium',
            explanation: 'Correto: a neurocisticercose acontece quando o humano ingere ovos viáveis de Taenia solium (atuando como hospedeiro intermediário acidental), cujos embriões migram e encistam no sistema nervoso central.',
          },
          {
            id: 'ingestion-pork-cysticerci',
            label: 'Ingestão de carne suína malcozida contendo larvas encistadas (cisticercos)',
            explanation: 'Incorreto: a ingestão de carne com cisticercos desenvolve a teníase intestinal (verme adulto na luz do intestino), e não cisticercose tecidual.',
          },
          {
            id: 'skin-cercariae-penetration',
            label: 'Penetração transcutânea ativa de cercárias natantes em lagoas de água doce',
            explanation: 'Incorreto: a penetração transcutânea por cercárias é o mecanismo de infecção do Schistosoma mansoni, causador da esquistossomose.',
          },
          {
            id: 'bite-triatomine-vector',
            label: 'Picada de inseto triatomíneo seguida de contaminação por dejetos fecais',
            explanation: 'Incorreto: este é o mecanismo de inoculação do Trypanosoma cruzi na doença de Chagas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Parasitology',
      hook: 'How can accidentally eating unwashed vegetables contaminated with worm eggs lead to seizure disorders in the brain?',
      title: 'Platyhelminthes: Schistosomiasis, Taeniasis, and Cysticercosis',
      description: 'Master trematodes and cestodes: the aquatic cycle of Schistosoma mansoni and the critical distinction between taeniasis and neurocysticercosis.',
      objective: 'Distinguish schistosomiasis pathogenesis and contrast taeniasis (eating cysticerci in pork) with neurocysticercosis (ingesting viable eggs).',
      stages: [
        {
          id: 'schistosoma-life-cycle',
          title: 'Schistosoma mansoni and the freshwater cycle',
          paragraphs: [
            'Schistosoma mansoni is a heteroxenic blood fluke responsible for intestinal and hepatosplenic schistosomiasis. Eggs shed in human feces into freshwater hatch to release ciliated miracidia.',
            'Miracidia infect freshwater Biomphalaria snails (intermediate host), multiplying into thousands of fork-tailed cercariae that swim freely and penetrate the unbroken skin of wading individuals.',
          ],
          takeaway: 'Biomphalaria snails act as intermediate hosts; human transmission happens via active skin penetration by swimming cercariae.',
          diagram: 'parasite',
        },
        {
          id: 'schistosoma-pathology',
          title: 'Schistosomal pathology and portal hypertension',
          paragraphs: [
            'Adult worms mate and reside within mesenteric venous venules. Female worms lay hundreds of eggs daily; a large fraction sweep retrograde into the portal venous circulation and lodge in intrahepatic venules.',
            'Trapped eggs elicit an exuberant cell-mediated granulomatous reaction that progresses to periportal fibrosis (Symmers pipestem fibrosis), causing severe presinusoidal portal hypertension, esophageal varices, and splenomegaly.',
          ],
          takeaway: 'Granulomas encasing embolized eggs induce periportal fibrosis, driving presinusoidal portal hypertension.',
          diagram: 'parasite',
        },
        {
          id: 'taenia-cysticercosis',
          title: 'Intestinal taeniasis vs neurocysticercosis',
          paragraphs: [
            'Intestinal taeniasis results from eating undercooked pork harboring larval cysticerci of Taenia solium, maturing into an adult tapeworm anchored inside the bowel lumen.',
            'Neurocysticercosis is an entirely distinct clinical entity caused when a human directly swallows viable Taenia solium eggs (via contaminated produce or autoinfection). Humans become accidental intermediate hosts: oncospheres hatch, cross the bowel, enter the circulation, and encyst in the brain parenchyma, precipitating seizures and focal neurological deficits.',
          ],
          takeaway: 'Ingesting encysted pork larvae causes intestinal tapeworms; swallowing viable eggs causes larval cysts in the brain.',
          diagram: 'parasite',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'By which specific mechanism do humans acquire neurocysticercosis, leading to larval cyst development within the brain parenchyma?',
        options: [
          {
            id: 'ingestion-viable-eggs',
            label: 'Ingestion of food or water contaminated with Taenia solium eggs',
            explanation: 'Correct: neurocysticercosis occurs when humans ingest microscopic Taenia solium eggs (acting as accidental intermediate hosts), releasing larvae that penetrate the bloodstream and encyst within brain tissue.',
          },
          {
            id: 'ingestion-pork-cysticerci',
            label: 'Ingestion of undercooked pork containing viable larval cysticerci',
            explanation: 'Incorrect: consuming meat with cysticerci produces intestinal taeniasis (adult luminal tapeworm) rather than systemic tissue cysticercosis.',
          },
          {
            id: 'skin-cercariae-penetration',
            label: 'Active percutaneous entry of free-swimming cercariae from freshwater ponds',
            explanation: 'Incorrect: cercarial percutaneous entry is the transmission mechanism of Schistosoma mansoni, the blood fluke of schistosomiasis.',
          },
          {
            id: 'bite-triatomine-vector',
            label: 'Triatomine insect puncture followed by contamination with infectious feces',
            explanation: 'Incorrect: this is the insect-borne transmission route of Trypanosoma cruzi in Chagas disease.',
          },
        ],
      },
    },
  },
});
