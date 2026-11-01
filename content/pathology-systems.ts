import { lessonSchema } from '../src/contracts/learning';

export const pathologyAccumulationsLesson = lessonSchema.parse({
  id: 'pathology-accumulations',
  revision: 1,
  questionId: 'pathology-accumulations-q1',
  correctOptionId: 'dystrophic-vs-metastatic-calcification',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-ap2e-ch4-accumulations',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-4-tissue-injury-and-aging',
      section: 'Chapter 4 · Intracellular Storage and Pathologic Calcification',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Como células sobrecarregadas estocam gordura, ferro e cálcio até transformarem tecidos elásticos em placas rígidas semelhantes a pedras?',
      title: 'Acúmulos intracelulares e calcificação patológica',
      description: 'Diferencie a esteatose hepática, a hemossiderose e as características da calcificação distrófica em comparação à calcificação metastática.',
      objective: 'Identificar as causas de sobrecargas metabólicas intracelulares e contrastar calcificação distrófica e metastática.',
      stages: [
        {
          id: 'steatosis-and-lipids',
          title: 'Esteatose e acúmulos lipídicos intracelulares',
          paragraphs: [
            'O acúmulo intracelular anormal de substâncias reflete distúrbios no metabolismo celular, defeitos genéticos enzimáticos ou incapacidade de degradar partículas fagocitadas.',
            'A esteatose (degeneração gordurosa) é o acúmulo anômalo de triglicerídeos no interior de células parenquimatosas, frequentemente no fígado devido ao consumo crônico de álcool, obesidade ou diabetes, decorrente do desequilíbrio entre captação de ácidos graxos e exportação de VLDL.',
          ],
          takeaway: 'A esteatose é o acúmulo de triglicerídeos no parênquima hepático por desequilíbrio metabólico.',
          diagram: 'tissue',
        },
        {
          id: 'pigments-hemosiderin',
          title: 'Pigmentos endógenos e exógenos: hemossiderina e lipofuscina',
          paragraphs: [
            'Pigmentos patológicos dividem-se em exógenos (como o carvão na antracose pulmonar) e endógenos. A hemossiderina é um pigmento derivado da hemoglobina que se acumula em macrófagos após hemorragias locais ou em órgãos sistêmicos na hemocromatose hereditária.',
            'A lipofuscina (pigmento do envelhecimento ou do desgaste) consiste em polímeros insolúveis de lipídios e fosfolipídios oxidados por radicais livres, estocados nos lisossomos de células perenes como neurônios e cardiomiócitos.',
          ],
          takeaway: 'A hemossiderina armazena excesso de ferro; a lipofuscina marca a peroxidação lipídica do envelhecimento celular.',
          diagram: 'mitochondria',
        },
        {
          id: 'dystrophic-vs-metastatic',
          title: 'Calcificação distrófica versus metastática',
          paragraphs: [
            'A calcificação distrófica ocorre em tecidos necrosados, isquêmicos ou degenerados na vigência de níveis séricos estritamente normais de cálcio e fosfato (ex.: placas de aterosclerose e valvas aórticas calcificadas).',
            'Já a calcificação metastática ocorre em tecidos previamente sadios em decorrência de hipercalcemia sistêmica sustentada (causada por hiperparatireoidismo primário, intoxicação por vitamina D ou metástases ósseas osteolíticas), depositando cristais de hidroxiapatita nos rins, pulmões e mucosa gástrica.',
          ],
          takeaway: 'Calcificação distrófica = cálcio normal em tecido morto; calcificação metastática = hipercalcemia em tecido sadio.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual distinção fundamental separa a calcificação distrófica da calcificação metastática na patologia médica?',
        options: [
          {
            id: 'dystrophic-vs-metastatic-calcification',
            label: 'A calcificação distrófica ocorre em tecidos necróticos com calcemia normal, enquanto a metastática resulta de hipercalcemia em tecidos sadios',
            explanation: 'Correto: a calcificação distrófica deposita sais de cálcio em áreas de lesão celular prévia sem distúrbio metabólico sérico, ao passo que a metastática é fruto de hipercalcemia sistêmica.',
          },
          {
            id: 'dystrophic-requires-hypercalcemia',
            label: 'A calcificação distrófica requer obrigatoriamente hiperparatireoidismo com hipercalcemia grave',
            explanation: 'Incorreto: na calcificação distrófica os níveis de cálcio sérico são normais.',
          },
          {
            id: 'metastatic-confined-necrotic',
            label: 'A calcificação metastática restringe-se estritamente ao lúmen de artérias com necrose caseosa prévia',
            explanation: 'Incorreto: a calcificação metastática deposita-se difusamente em tecidos viáveis normais (como septos alveolares e túbulos renais).',
          },
          {
            id: 'lipofuscin-conversion-metastatic',
            label: 'A calcificação distrófica decorre da conversão química direta de lipofuscina em cristais de oxalato',
            explanation: 'Incorreto: a calcificação envolve sais de fosfato de cálcio/hidroxiapatita sobre membranas celulares lesadas, sem relação direta com a lipofuscina.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'How do injured cells sequester fats, iron, and minerals until soft elastic vessels turn to solid stone?',
      title: 'Intracellular accumulations and pathologic calcification',
      description: 'Differentiate hepatic steatosis, hemosiderosis, and contrast the pathology of dystrophic versus metastatic calcification.',
      objective: 'Identify metabolic intracellular overloads and contrast dystrophic versus metastatic pathologic calcifications.',
      stages: [
        {
          id: 'steatosis-and-lipids',
          title: 'Steatosis and intracellular lipid congestion',
          paragraphs: [
            'Abnormal intracellular accumulation stems from metabolic dysregulation, genetic enzymatic defects, or cellular inability to break down foreign phagocytosed material.',
            'Steatosis (fatty change) represents aberrant accumulation of triglycerides within parenchymal cells, most prominently hepatocytes. Common etiologies include alcohol abuse, obesity, and diabetes, which disrupt the balance between free fatty acid influx and VLDL lipoprotein clearance.',
          ],
          takeaway: 'Steatosis is the intracellular buildup of triglycerides within hepatocytes secondary to metabolic imbalance.',
          diagram: 'tissue',
        },
        {
          id: 'pigments-hemosiderin',
          title: 'Endogenous and exogenous pigments: hemosiderin and lipofuscin',
          paragraphs: [
            'Pathologic pigments are classified as exogenous (e.g., carbon in pulmonary anthracosis) or endogenous. Hemosiderin is a golden-brown, iron-rich hemoglobin breakdown product that collects in macrophages following local hematomas or systemically in hereditary hemochromatosis.',
            'Lipofuscin (wear-and-tear pigment) represents insoluble aggregates of oxidized lipids and proteins derived from free radical-induced lipid peroxidation, persisting within tertiary lysosomes of non-dividing cardiac myocytes and neurons.',
          ],
          takeaway: 'Hemosiderin stores excess degraded iron; lipofuscin represents the lysosomal wear-and-tear of aging.',
          diagram: 'mitochondria',
        },
        {
          id: 'dystrophic-vs-metastatic',
          title: 'Dystrophic versus metastatic calcification',
          paragraphs: [
            'Dystrophic calcification occurs within necrotic, ischemic, or degenerating tissues in the presence of completely normal serum calcium and phosphate concentrations (e.g., advanced atheromatous plaques and calcific aortic stenosis).',
            'In contrast, metastatic calcification occurs within fundamentally normal, non-injured tissues secondary to chronic systemic hypercalcemia (driven by primary hyperparathyroidism, osteolytic bone metastases, or hypervitaminosis D), depositing hydroxyapatite into lungs, gastric mucosa, and renal basement membranes.',
          ],
          takeaway: 'Dystrophic calcification = normal calcium in dead tissue; metastatic calcification = hypercalcemia in normal tissue.',
          diagram: 'bone',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which fundamental clinicopathologic distinction separates dystrophic calcification from metastatic calcification?',
        options: [
          {
            id: 'dystrophic-vs-metastatic-calcification',
            label: 'Dystrophic calcification develops in necrotic tissue with normal serum calcium, whereas metastatic calcification stems from hypercalcemia in normal tissues',
            explanation: 'Correct: dystrophic calcification precipitates in dead or dying tissue with normal serum calcium levels, whereas metastatic calcification deposits minerals into healthy tissues due to systemic hypercalcemia.',
          },
          {
            id: 'dystrophic-requires-hypercalcemia',
            label: 'Dystrophic calcification strictly requires primary hyperparathyroidism with systemic hypercalcemia',
            explanation: 'Incorrect: dystrophic calcification proceeds under completely normal systemic serum calcium concentrations.',
          },
          {
            id: 'metastatic-confined-necrotic',
            label: 'Metastatic calcification is confined to arteries displaying prior confluent caseous necrosis',
            explanation: 'Incorrect: metastatic calcification occurs in previously healthy, viable tissues because of elevated circulating mineral products.',
          },
          {
            id: 'lipofuscin-conversion-metastatic',
            label: 'Dystrophic calcification represents the direct chemical polymerization of lipofuscin into oxalate',
            explanation: 'Incorrect: calcification precipitates hydroxyapatite on membrane vesicles; it is entirely unrelated to lipofuscin.',
          },
        ],
      },
    },
  },
});

export const pathologyChronicGranulomaLesson = lessonSchema.parse({
  id: 'pathology-chronic-granuloma',
  revision: 1,
  questionId: 'pathology-chronic-granuloma-q1',
  correctOptionId: 'epitheloid-histiocytes-langhans',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-ap2e-ch21-inflammation',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-2-barrier-defenses-and-the-innate-immune-response',
      section: 'Chapter 21 · Chronic Inflammation and Granulomatous Disease',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Como macrófagos e linfócitos T constroem uma fortaleza celular impenetrável contra micróbios que se recusam a morrer?',
      title: 'Inflamação crônica, macrófagos M1/M2 e granulomas',
      description: 'Explore a polarização macrofágica clássica (M1) e alternativa (M2), a cooperação linfocitária e a arquitetura histológica dos granulomas.',
      objective: 'Diferenciar as funções dos macrófagos M1 e M2 e identificar os elementos histopatológicos característicos de um granuloma.',
      stages: [
        {
          id: 'chronic-inflammation-hallmarks',
          title: 'Assinaturas histológicas da inflamação crônica',
          paragraphs: [
            'A inflamação crônica é uma resposta de duração prolongada (semanas a anos) na qual coexistem simultaneamente inflamação ativa, destruição tecidual e tentativas de cicatrização.',
            'Suas características histopatológicas definidoras incluem o infiltrado de células mononucleares (macrófagos, linfócitos e plasmócitos), destruição tecidual induzida pelas próprias células inflamatórias e proliferação vascular com fibrose cicatricial.',
          ],
          takeaway: 'Inflamação crônica combina infiltrado mononuclear (macrófagos/linfócitos), destruição tecidual e reparo com fibrose.',
          diagram: 'inflammation',
        },
        {
          id: 'm1-m2-macrophage-polarization',
          title: 'Polarização macrofágica M1 versus M2',
          paragraphs: [
            'Os macrófagos ativados pela via clássica (M1) são estimulados por endotoxinas bacterianas (LPS) e interferon-gama (IFN-γ) produzido por células Th1. Os macrófagos M1 produzem óxido nítrico, espécies reativas de oxigênio e citocinas pró-inflamatórias (IL-1, IL-12, TNF), especializando-se na destruição de patógenos.',
            'Por outro lado, a via alternativa (M2) é induzida por IL-4 e IL-13 de células Th2. Os macrófagos M2 secretam fatores de crescimento tecidual como TGF-beta, angiogênicos e citocinas anti-inflamatórias (IL-10), promovendo reparo, remodelamento da matriz extracelular e fibrose.',
          ],
          takeaway: 'Macrófagos M1 (IFN-γ) são microbicidas pró-inflamatórios; macrófagos M2 (IL-4/IL-13) promovem reparo tecidual e fibrose.',
          diagram: 'immune',
        },
        {
          id: 'granulomatous-architecture',
          title: 'Arquitetura do granuloma',
          paragraphs: [
            'A inflamação granulomatosa é um padrão celular distinto da inflamação crônica destinado a conter agentes indigeríveis (como Mycobacterium tuberculosis, Schistosoma ou corpos estranhos).',
            'O granuloma é delimitado por macrófagos ativados com citoplasma abundante que lembram células epiteliais (histiócitos epitelioides). Esses histiócitos frequentemente se fundem formando células gigantes multinucleadas (tipo Langhans, com núcleos em ferradura periférica), cercadas por uma coroa de linfócitos T e fibroblastos.',
          ],
          takeaway: 'Granulomas contêm histiócitos epitelioides modificados, células gigantes de Langhans e uma coroa periférica de linfócitos.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a descrição sobre a célula modificada que forma o componente histológico nuclear de qualquer granuloma:',
        blank: 'O elemento característico definidor da inflamação granulomatosa são os ______ e as células gigantes multinucleadas.',
        options: [
          {
            id: 'epitheloid-histiocytes-langhans',
            label: 'histiócitos epitelioides (macrófagos modificados)',
            explanation: 'Correto: macrófagos ativados transformam-se em histiócitos epitelioides com citoplasma amplo e vesicular para formar a barreira do granuloma.',
          },
          {
            id: 'neutrophil-microabscesses',
            label: 'agregados densos de neutrófilos hipersegmentados',
            explanation: 'Incorreto: neutrófilos são a marca da inflamação aguda e do pus, não da inflamação granulomatosa típica.',
          },
          {
            id: 'eosinophil-crystals',
            label: 'acúmulos de eosinófilos com cristais de Charcot-Leyden',
            explanation: 'Incorreto: eosinófilos predominam em infecções parasitárias helmínticas e reações alérgicas tipo I, não sendo o pilar estrutural do granuloma.',
          },
          {
            id: 'plasma-cell-cords',
            label: 'cordões maciços de plasmócitos com corpúsculos de Russell',
            explanation: 'Incorreto: plasmócitos secretam anticorpos na inflamação crônica, mas não constituem a célula epitelioide que define o granuloma.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'How do macrophages and T lymphocytes build an impenetrable microscopic fortress to wall off microbes that refuse to die?',
      title: 'Chronic inflammation, M1/M2 macrophages, and granulomas',
      description: 'Explore classical (M1) versus alternative (M2) macrophage polarization, lymphocyte collaboration, and granuloma histopathology.',
      objective: 'Differentiate M1 and M2 macrophage functional phenotypes and identify the defining histopathological features of a granuloma.',
      stages: [
        {
          id: 'chronic-inflammation-hallmarks',
          title: 'Histopathological hallmarks of chronic inflammation',
          paragraphs: [
            'Chronic inflammation is a protracted biological response (lasting weeks, months, or years) in which active inflammation, progressive tissue destruction, and repair attempts proceed concurrently.',
            'Its defining histological triad consists of: 1) mononuclear leukocyte infiltration (macrophages, lymphocytes, plasma cells), 2) tissue injury fueled by inflammatory byproducts, and 3) proliferation of small blood vessels (angiogenesis) accompanied by connective tissue fibrosis.',
          ],
          takeaway: 'Chronic inflammation is characterized by mononuclear infiltrates, ongoing parenchymal destruction, and fibrovascular repair.',
          diagram: 'inflammation',
        },
        {
          id: 'm1-m2-macrophage-polarization',
          title: 'M1 versus M2 macrophage polarization programs',
          paragraphs: [
            'Classically activated macrophages (M1) are induced by microbial endotoxins (LPS) and T-cell-derived interferon-gamma (IFN-γ). M1 effectors produce nitric oxide, reactive oxygen species, and inflammatory cytokines (IL-1, IL-12, TNF), serving as microbicidal and cytotoxic soldiers.',
            'Alternatively activated macrophages (M2) are induced by helper T-cell cytokines IL-4 and IL-13. M2 cells downregulate inflammation, secrete tissue growth factors like TGF-beta, and promote fibroblast proliferation, extracellular matrix synthesis, and tissue remodeling.',
          ],
          takeaway: 'M1 macrophages (IFN-γ) are microbicidal and cytotoxic; M2 macrophages (IL-4/IL-13) direct healing and fibrogenesis.',
          diagram: 'immune',
        },
        {
          id: 'granulomatous-architecture',
          title: 'Granuloma microscopic architecture',
          paragraphs: [
            'Granulomatous inflammation is a distinctive histologic pattern of chronic inflammation mounted to contain poorly degradable inciting agents (e.g., Mycobacterium tuberculosis, fungal spores, or surgical suture fragments).',
            'A granuloma features aggregated, activated macrophages that assume an epithelial-like plump eosinophilic appearance (epithelioid histiocytes). These cells often fuse into Langhans multinucleated giant cells (with nuclei arranged in a peripheral horseshoe ring), surrounded by a collar of T lymphocytes and outer fibroblasts.',
          ],
          takeaway: 'Granulomas are formed by epithelioid histiocytes, Langhans giant cells, and a peripheral mantle of lymphocytes.',
          diagram: 'microbe',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the sentence identifying the hallmark modified cellular constituent that defines any granuloma:',
        blank: 'The defining histopathological building block of granulomatous inflammation is the collection of ______ and multinucleated giant cells.',
        options: [
          {
            id: 'epitheloid-histiocytes-langhans',
            label: 'epithelioid histiocytes (modified macrophages)',
            explanation: 'Correct: activated macrophages transform into epithelioid histiocytes with abundant pink cytoplasm to construct the granulomatous barrier.',
          },
          {
            id: 'neutrophil-microabscesses',
            label: 'sheets of hypersegmented pyogenic neutrophils',
            explanation: 'Incorrect: neutrophils dominate acute inflammation and abscess cavities, not classical granulomatous reactions.',
          },
          {
            id: 'eosinophil-crystals',
            label: 'dense eosinophils containing Charcot-Leyden crystals',
            explanation: 'Incorrect: eosinophil accumulations characterize helminthic infections or type I allergic hypersensitivity, not typical granulomas.',
          },
          {
            id: 'plasma-cell-cords',
            label: 'pure cords of antibody-secreting plasma cells',
            explanation: 'Incorrect: plasma cells can populate the chronic inflammatory mantle, but the hallmark core cell is the epithelioid histiocyte.',
          },
        ],
      },
    },
  },
});

export const pathologyTissueRepairLesson = lessonSchema.parse({
  id: 'pathology-tissue-repair',
  revision: 1,
  questionId: 'pathology-tissue-repair-q1',
  correctOptionId: 'repair-order-correct',
  correctOrderIds: ['hemostasis-clot', 'neutrophil-macrophage-clearance', 'granulation-angiogenesis', 'collagen-remodeling-scar'],
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-ap2e-ch4-repair',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-4-tissue-injury-and-aging',
      section: 'Chapter 4 · Tissue Repair, Granulation, and Scar Formation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Como uma ferida cirúrgica profunda na pele reconstrói vasos e substitui o coágulo de sangue por uma cicatriz fibrosa resistente?',
      title: 'Reparo tecidual: regeneração, cicatrização e fibrose',
      description: 'Acompanhe as fases cronológicas do reparo tecidual: hemostasia, debridamento inflamatório, tecido de granulação e remodelação cicatricial.',
      objective: 'Ordenar as fases da cicatrização tecidual e distinguir a cicatrização por primeira intenção da cicatrização por segunda intenção.',
      stages: [
        {
          id: 'regeneration-vs-scarring',
          title: 'Regeneração celular versus cicatrização por substituição',
          paragraphs: [
            'O reparo tecidual ocorre por regeneração (proliferação de células não lesadas e diferenciação de células-tronco teciduais, restaurando a arquitetura normal) ou por cicatrização/fibrose (deposição de tecido conjuntivo que substitui o parênquima destruído por colágeno).',
            'Tecidos lábeis (como a epiderme e o epitélio intestinal) regeneram-se facilmente; tecidos estáveis (fígado e túbulos renais) têm baixa taxa de replicação, mas proliferam perante lesão; e tecidos permanentes (miocárdio e neurônios do SNC) não se dividem, reparando-se invariavelmente por cicatriz fibrosa ou gliose.',
          ],
          takeaway: 'Lábeis se regeneram rapidamente; estáveis proliferam sob demanda; permanentes reparam-se por fibrose cicatricial.',
          diagram: 'tissue',
        },
        {
          id: 'primary-vs-secondary-intention',
          title: 'Cicatrização por primeira versus segunda intenção',
          paragraphs: [
            'A cicatrização por primeira intenção ocorre em feridas limpas e não infectadas com bordas aproximadas por sutura cirúrgica, exibindo mínima perda tecidual e cicatriz linear discreta.',
            'A cicatrização por segunda intenção ocorre quando há grande perda de substância (úlceras extensas ou feridas infectadas). Exige grande quantidade de tecido de granulação, inflamação muito mais intensa e expressiva contração da ferida mediada por miofibroblastos.',
          ],
          takeaway: 'Primeira intenção tem bordas alinhadas e cicatriz mínima; segunda intenção envolve grande perda tecidual e contração miofibroblástica.',
          diagram: 'inflammation',
        },
        {
          id: 'granulation-tissue-remodeling',
          title: 'Tecido de granulação e remodelação da matriz',
          paragraphs: [
            'O tecido de granulação é a marca histológica do reparo provisório (dia 3 ao 5), caracterizado por proliferação de fibroblastos estimulados por TGF-beta e novos capilares de paredes delgadas (angiogênese mediada por VEGF).',
            'Com o tempo, o colágeno tipo III inicial e flexível é degradado por metaloproteinases da matriz (MMPs dependentes de zinco) e substituído por colágeno tipo I denso e resistente. A resistência tênsil máxima da cicatriz madura alcança no máximo 70% a 80% da pele original intacta.',
          ],
          takeaway: 'O tecido de granulação (VEGF e TGF-beta) substitui o colágeno tipo III por colágeno tipo I via metaloproteinases.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Ordene a sequência cronológica dos eventos histopatológicos fundamentais no reparo e cicatrização de uma ferida cirúrgica:',
        items: [
          {
            id: 'hemostasis-clot',
            label: 'Formação do coágulo hemostático de fibrina e liberação inicial de fatores de crescimento plaquetários',
            explanation: 'Minutos a horas após a lesão, o tampão hemostático estanca o sangramento e cria a matriz provisória.',
          },
          {
            id: 'neutrophil-macrophage-clearance',
            label: 'Infiltração inflamatória aguda por neutrófilos seguida de macrófagos para debridamento de detritos',
            explanation: 'Nas primeiras 24 a 48 horas, leucócitos eliminam patógenos e tecidos necróticos.',
          },
          {
            id: 'granulation-angiogenesis',
            label: 'Desenvolvimento do tecido de granulação com angiogênese intensa e proliferação de miofibroblastos',
            explanation: 'Entre os dias 3 e 7, VEGF e TGF-beta induzem novos capilares e síntese de matriz de colágeno III.',
          },
          {
            id: 'collagen-remodeling-scar',
            label: 'Remodelação tecidual com troca do colágeno III por colágeno tipo I e regressão vascular cicatricial',
            explanation: 'Semanas a meses depois, metaloproteinases reorganizam o colágeno I, conferindo resistência tênsil final.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'How does a deep incision rebuild blood vessels and replace a soft fragile clot with strong, resilient scar tissue?',
      title: 'Tissue repair: regeneration, healing, and fibrosis',
      description: 'Follow the chronological phases of tissue repair: hemostasis, inflammatory debridement, granulation tissue formation, and scar remodeling.',
      objective: 'Sequence the phases of wound repair and contrast healing by primary versus secondary intention.',
      stages: [
        {
          id: 'regeneration-vs-scarring',
          title: 'Cellular regeneration versus replacement scar tissue',
          paragraphs: [
            'Tissue repair occurs by regeneration (proliferation of residual uninjured parenchymal cells and tissue stem cell differentiation to restore original architecture) or by connective tissue replacement / scar formation (collagen deposition replaces destroyed parenchyma).',
            'Labile tissues (e.g., epidermis, gut mucosa) continuously cycle and regenerate readily; stable tissues (e.g., liver hepatocytes, proximal renal tubules) replicate at low baseline rates but proliferate vigorously following injury; and permanent tissues (myocardium, neurons) cannot undergo mitotic division, repairing strictly via collagenous scarring or gliosis.',
          ],
          takeaway: 'Labile tissues regenerate; stable tissues proliferate upon injury; permanent tissues form collagen scars.',
          diagram: 'tissue',
        },
        {
          id: 'primary-vs-secondary-intention',
          title: 'Healing by first versus second intention',
          paragraphs: [
            'Healing by primary intention (first intention) takes place in clean, uninfected surgical incisions whose opposing margins are closely approximated by sutures or staples, requiring minimal re-epithelialization and leaving a hairline scar.',
            'Healing by secondary intention occurs when parenchymal loss is extensive (large cutaneous ulcers, abscess cavities). It requires abundant granulation tissue filling, intense persistent inflammation, and substantial wound contraction mediated by specialized contractile myofibroblasts.',
          ],
          takeaway: 'First intention healing features opposed margins and minimal scarring; second intention entails heavy tissue loss and myofibroblast contraction.',
          diagram: 'inflammation',
        },
        {
          id: 'granulation-tissue-remodeling',
          title: 'Granulation tissue and extracellular matrix remodeling',
          paragraphs: [
            'Granulation tissue is the hallmark of wound repair (emerging by days 3 to 5), histologically characterized by proliferating fibroblasts driven by TGF-beta and fragile newly sprouted capillary loops (angiogenesis driven by VEGF).',
            'Over subsequent weeks, pliable initial type III collagen is cleared by zinc-dependent matrix metalloproteinases (MMPs) and replaced by organized, cross-linked type I collagen bundles. Ultimate scar tensile strength plateaus at approximately 70% to 80% of uninjured skin.',
          ],
          takeaway: 'Granulation tissue combines VEGF-driven angiogenesis and TGF-beta fibroplasia; type III collagen matures into strong type I collagen.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'order',
        prompt: 'Order the chronological sequence of fundamental histopathological events during cutaneous wound repair:',
        items: [
          {
            id: 'hemostasis-clot',
            label: 'Hemostatic fibrin clot assembly and initial platelet-derived growth factor degranulation',
            explanation: 'Minutes to hours post-injury, platelets aggregate to stem bleeding and supply the provisional scaffold.',
          },
          {
            id: 'neutrophil-macrophage-clearance',
            label: 'Acute neutrophil recruitment followed by macrophage infiltration for necrotic tissue debridement',
            explanation: 'During the first 24-48 hours, inflammatory leukocytes clear debris and release pro-repair cytokines.',
          },
          {
            id: 'granulation-angiogenesis',
            label: 'Granulation tissue development marked by capillary angiogenesis and myofibroblast proliferation',
            explanation: 'By days 3 to 7, VEGF and TGF-beta drive fragile neovascular loops and abundant type III collagen deposition.',
          },
          {
            id: 'collagen-remodeling-scar',
            label: 'Matrix remodeling replacing type III collagen with dense type I collagen bundles',
            explanation: 'Over subsequent weeks to months, metalloproteinases remodel and cross-link type I collagen to build scar tensile strength.',
          },
        ],
      },
    },
  },
});

export const pathologyCancerHallmarksLesson = lessonSchema.parse({
  id: 'pathology-cancer-hallmarks',
  revision: 1,
  questionId: 'pathology-cancer-hallmarks-q1',
  correctOptionId: 'tp53-guardian-genome',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-ap2e-ch4-cancer',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-4-tissue-injury-and-aging',
      section: 'Chapter 4 · Neoplasia, Oncogenes, and Tumor Suppressors',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Quais alterações moleculares transformam uma célula normal bem-comportada em uma linhagem imortal que invade outros tecidos?',
      title: 'Bases moleculares do câncer: oncogenes e supressores tumorais',
      description: 'Explore os pilares moleculares da carcinogênese: ativação de proto-oncogenes, perda de supressores tumorais (TP53 e RB) e o processo metastático.',
      objective: 'Distinguir proto-oncogenes de genes supressores de tumor e explicar as etapas da cascata de invasão e metástase neoplásica.',
      stages: [
        {
          id: 'oncogenes-and-growth-signals',
          title: 'Proto-oncogenes versus genes supressores de tumor',
          paragraphs: [
            'Os proto-oncogenes são genes normais que codificam proteínas promotoras do ciclo celular e da sobrevivência. Quando sofrem mutações de ganho de função (como KRAS ou amplificação de HER2/neu), convertem-se em oncogenes, estimulando proliferação celular autônoma descontrolada com mutação em apenas um alelo (efeito dominante).',
            'Por outro lado, os genes supressores de tumor atuam como freios celulares (como TP53 e RB1). Eles normalmente impedem a transição de ciclo ou reparam danos ao DNA; a perda de sua função exige mutações inativadoras em ambos os alelos ("hipótese dos dois acertos" de Knudson).',
          ],
          takeaway: 'Oncogenes requerem ganho de função em um alelo; supressores tumorais exigem inativação de ambos os alelos (dois acertos).',
          diagram: 'dna',
        },
        {
          id: 'p53-guardian-of-the-genome',
          title: 'O gene TP53: o guardião do genoma',
          paragraphs: [
            'O TP53 codifica a proteína p53, o sensor central de estresse celular. Em resposta a quebras de DNA, hipóxia ou encurtamento telomérico, a p53 acumula-se no núcleo e ativa a transcrição de p21, que inibe quinases dependentes de ciclina (CDKs) e paralisa o ciclo celular na fase G1/S para reparo do DNA.',
            'Se o dano for irreparável, a p53 induz a transcrição de genes pró-apoptóticos (BAX e PUMA), desencadeando a via intrínseca mitocondrial da apoptose. Mais de 50% de todos os cânceres humanos apresentam mutações inativadoras no gene TP53.',
          ],
          takeaway: 'A proteína p53 bloqueia o ciclo em G1/S via p21 para reparo ou induz apoptose via BAX perante dano genômico letal.',
          diagram: 'neoplasia',
        },
        {
          id: 'invasion-metastasis-cascade',
          title: 'A cascata de invasão e disseminação metastática',
          paragraphs: [
            'A metástase é a marca inequívoca da malignidade tumoral. Para metastatizar, as células tumorais perdem a adesão intercelular através da inativação de E-caderinas e degradam a membrana basal secretando colagenases e catepsinas.',
            'Uma vez no estroma, sofrem transição epitélio-mesênquima (TEM), invadem vasos sanguíneos ou linfáticos (intravasamento), sobrevivem em agregados com plaquetas, aderem ao endotélio distal (extravasamento) e secretam fatores angiogênicos (VEGF) para colonizar o novo órgão.',
          ],
          takeaway: 'A metástase requer perda de E-caderina, digestão da matriz extracelular, intravasamento vascular e colonização distal.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o papel biológico clássico exercido pelo gene supressor de tumor TP53 quando uma célula normal sofre lesão no DNA?',
        options: [
          {
            id: 'tp53-guardian-genome',
            label: 'Promover a parada do ciclo celular em G1/S ativando p21 ou induzir apoptose via transcrição de BAX',
            explanation: 'Correto: a p53 bloqueia o ciclo celular na fase G1/S para permitir o reparo do genoma ou deflagra a apoptose mitocondrial se o dano for irreparável.',
          },
          {
            id: 'telomerase-activation-direct',
            label: 'Ativação constitutiva da enzima telomerase para prevenir encurtamento cromossômico',
            explanation: 'Incorreto: a reativação da telomerase é um mecanismo oncogênico que confere imortalidade replicativa, oposto à ação da p53.',
          },
          {
            id: 'e-cadherin-downregulation',
            label: 'Supressão da expressão de E-caderina para facilitar a migração fibroblástica tumoral',
            explanation: 'Incorreto: a perda de E-caderina promove invasão tumoral, não sendo um efeito fisiológico da p53.',
          },
          {
            id: 'cdk4-phosphorylation-boost',
            label: 'Fosforilação direta da ciclina D e amplificação mitogênica de receptores tirosina quinase',
            explanation: 'Incorreto: a p53 inibe os complexos CDK/ciclina por meio de p21, paralisando a proliferação.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'What molecular steps transform an orderly cell into an immortal invasive lineage that colonizes distant organs?',
      title: 'Molecular basis of cancer: oncogenes and tumor suppressors',
      description: 'Explore the foundations of carcinogenesis: proto-oncogene activation, loss of tumor suppressors (TP53 and RB), and metastatic invasion.',
      objective: 'Distinguish proto-oncogenes from tumor suppressor genes and describe the steps of the metastatic invasion cascade.',
      stages: [
        {
          id: 'oncogenes-and-growth-signals',
          title: 'Proto-oncogenes versus tumor suppressor genes',
          paragraphs: [
            'Proto-oncogenes are normal physiological genes encoding proteins that drive cell proliferation and survival. When altered by gain-of-function point mutations, translocations, or amplifications (e.g., KRAS, HER2/neu), they become oncogenes, driving autonomous growth through a dominant single-allele mutation.',
            'In contrast, tumor suppressor genes act as cellular brakes (e.g., TP53, RB1) that stall cell cycle transitions or direct DNA repair. Losing their protective restraint typically demands inactivating mutations across both alleles, fitting Knudson’s "two-hit" hypothesis.',
          ],
          takeaway: 'Oncogenes require dominant single-allele gain of function; tumor suppressors require recessive two-hit loss of both alleles.',
          diagram: 'dna',
        },
        {
          id: 'p53-guardian-of-the-genome',
          title: 'TP53: the guardian of the genome',
          paragraphs: [
            'The TP53 gene encodes p53, the central sensor of genomic integrity. In response to double-stranded DNA breaks, hypoxia, or oncogenic stress, p53 accumulates rapidly in the nucleus and transcribes p21 (CDKN1A), which inhibits cyclin-dependent kinases (CDKs) to arrest the cell cycle at G1/S for repair.',
            'If genomic damage is unresolvable, p53 upregulates pro-apoptotic factors such as BAX and PUMA, breaching mitochondrial outer membranes to trigger apoptosis. Inactivating mutations in TP53 occur in more than 50% of human malignancies.',
          ],
          takeaway: 'The p53 protein arrests the cell cycle at G1/S via p21 or executes apoptosis via BAX if damage is beyond repair.',
          diagram: 'neoplasia',
        },
        {
          id: 'invasion-metastasis-cascade',
          title: 'The invasion and metastatic cascade',
          paragraphs: [
            'Metastasis is the defining signature of malignant neoplasia. To spread, neoplastic cells detach by downregulating homotypic E-cadherin junctions and digest basement membranes by secreting matrix metalloproteinases (MMPs) and cathepsins.',
            'After traversing the extracellular matrix via epithelial-to-mesenchymal transition (EMT), tumor cells enter the vasculature (intravasation), form protective thrombo-emboli with host platelets, adhere to distant microvascular beds (extravasation), and stimulate VEGF-mediated angiogenesis to establish distant secondary colonies.',
          ],
          takeaway: 'Metastasis requires downregulating E-cadherin, digesting extracellular matrix, intravasation, and angiogenic colonization.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the classical molecular role of the TP53 tumor suppressor protein in a cell sustaining genotoxic DNA damage?',
        options: [
          {
            id: 'tp53-guardian-genome',
            label: 'Arresting the cell cycle at G1/S via p21 induction or triggering apoptosis via BAX transcription',
            explanation: 'Correct: p53 halts cell cycle progression at G1/S through p21 CDK inhibition to allow DNA repair, or activates BAX to induce mitochondrial apoptosis if damage is permanent.',
          },
          {
            id: 'telomerase-activation-direct',
            label: 'Constitutive transcriptional activation of telomerase reverse transcriptase to avoid replicative senescence',
            explanation: 'Incorrect: telomerase upregulation is an oncogenic hallmark that provides immortal replication, opposed to p53 surveillance.',
          },
          {
            id: 'e-cadherin-downregulation',
            label: 'Suppression of surface E-cadherin expression to accelerate tumor cell motility',
            explanation: 'Incorrect: loss of E-cadherin facilitates malignant detachment and invasion, rather than acting as a tumor suppressor.',
          },
          {
            id: 'cdk4-phosphorylation-boost',
            label: 'Direct phosphorylation of cyclin D to accelerate entry into S phase',
            explanation: 'Incorrect: p53 blocks CDK/cyclin complexes to stall cell cycle entry.',
          },
        ],
      },
    },
  },
});

export const pathologyEnvironmentalLesson = lessonSchema.parse({
  id: 'pathology-environmental',
  revision: 1,
  questionId: 'pathology-environmental-q1',
  correctOptionId: 'tnm-staging-prognosis',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'general-pathology',
  sources: [
    {
      id: 'openstax-ap2e-ch4-environmental',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-4-tissue-injury-and-aging',
      section: 'Chapter 4 · Environmental Pathology, Nutritional Deficiencies, and TNM Staging',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Patologia geral',
      hook: 'Como poluentes do ar, tabagismo e carências vitamínicas lesam o DNA e como os médicos quantificam o avanço de um tumor?',
      title: 'Patologia ambiental, lesão celular física e estadiamento TNM',
      description: 'Analise o impacto patológico do tabagismo, radiação ionizante, desnutrição proteico-calórica e os princípios do estadiamento tumoral TNM.',
      objective: 'Identificar os mecanismos de toxicidade ambiental e aplicar o sistema TNM para classificação de extensão e prognóstico neoplásico.',
      stages: [
        {
          id: 'tobacco-and-radiation',
          title: 'Tabagismo e radiação ionizante',
          paragraphs: [
            'O fumo do tabaco contém mais de 60 carcinógenos conhecidos (como hidrocarbonetos aromáticos policíclicos e nitrosaminas), responsáveis diretos por carcinomas de pulmão, laringe, esôfago e bexiga.',
            'A radiação ionizante (raios X, radiação gama) causa lesões celulares quebrando moléculas de água e gerando radicais hidroxila livres (OH•) que produzem quebras duplas na fita de DNA, predispondo a leucemias agudas e carcinomas da tireoide.',
          ],
          takeaway: 'O tabaco expõe a carcinógenos químicos; a radiação ionizante induz quebras duplas de DNA por radicais hidroxila.',
          diagram: 'neoplasia',
        },
        {
          id: 'nutritional-pathology',
          title: 'Desnutrição e hipovitaminoses',
          paragraphs: [
            'A desnutrição proteico-calórica divide-se em Marasmo (deficiência calórica global com perda extrema de massa muscular e gordura subcutânea com níveis preservados de albumina) e Kwashiorkor (deficiência proteica com aporte calórico de carboidratos, levando a hipoalbuminemia, edema generalizado, ascite e esteatose hepática maciça).',
            'Deficiências vitamínicas produzem lesões clássicas: vitamina C causa escorbuto (defeito na hidroxilação de prolina do colágeno gerando fragilidade vascular e sangramentos); vitamina D causa raquitismo em crianças e osteomalácia em adultos.',
          ],
          takeaway: 'Marasmo é perda calórica global; Kwashiorkor é privação proteica com hipoalbuminemia e anasarca.',
          diagram: 'tissue',
        },
        {
          id: 'tnm-staging-system',
          title: 'Graduação histológica versus estadiamento TNM',
          paragraphs: [
            'A graduação tumoral (graus I a IV) reflete o grau de diferenciação celular e a contagem de mitoses observadas ao microscópio pelo patologista (como a semelhança com o tecido de origem).',
            'O estadiamento clínico-patológico (sistema TNM da UICC/AJCC) avalia a extensão anatômica do tumor: T (tamanho e invasão local do tumor primário), N (acometimento de linfonodos regionais) e M (presença de metástases à distância). O estadiamento TNM é o determinante prognóstico mais poderoso para a sobrevida e planejamento terapêutico oncológico.',
          ],
          takeaway: 'Graduação avalia diferenciação celular microscópica; estadiamento TNM mede a extensão anatômica e define o prognóstico.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual parâmetro oncológico avaliado pelo sistema de estadiamento TNM possui maior valor preditivo para o prognóstico e sobrevida global do paciente com câncer?',
        options: [
          {
            id: 'tnm-staging-prognosis',
            label: 'A extensão anatômica da disseminação tumoral (tamanho primário, linfonodos e metástases à distância)',
            explanation: 'Correto: o estadiamento TNM mede a invasão e disseminação anatômica real da neoplasia, sendo clinicamente superior ao grau histológico isolado no prognóstico.',
          },
          {
            id: 'histologic-grade-mitoses',
            label: 'O número absoluto de mitoses atípicas observadas na biópsia inicial',
            explanation: 'Incorreto: o índice mitótico define a graduação histopatológica, que embora relevante, tem peso secundário frente ao estadiamento anatômico TNM.',
          },
          {
            id: 'vitamin-d-serum-level',
            label: 'A concentração sérica de calcidiol e o grau de esteatose hepática associada',
            explanation: 'Incorreto: níveis nutricionais não fazem parte dos critérios oncológicos de estadiamento TNM.',
          },
          {
            id: 'nuclear-pleomorphism-only',
            label: 'O pleomorfismo nuclear avaliado isoladamente em células de descamação citológica',
            explanation: 'Incorreto: o pleomorfismo nuclear compõe a graduação citológica, mas não determina o estadiamento TNM.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pathology',
      hook: 'How do airborne toxins, ionizing radiation, and nutrient shortages damage DNA, and how do clinicians quantify tumor progression?',
      title: 'Environmental pathology, physical injury, and TNM staging',
      description: 'Analyze the impact of cigarette smoke, ionizing radiation, protein-energy malnutrition, and principles of the TNM staging system.',
      objective: 'Identify mechanisms of environmental toxicity and apply the TNM system to quantify anatomical tumor burden and prognosis.',
      stages: [
        {
          id: 'tobacco-and-radiation',
          title: 'Tobacco carcinogens and ionizing radiation',
          paragraphs: [
            'Cigarette smoke contains over 60 verified carcinogens (including polycyclic aromatic hydrocarbons and nitrosamines), acting as direct mutagens responsible for carcinomas of the lung, larynx, oral cavity, and bladder.',
            'Ionizing radiation (X-rays, gamma emissions) inflicts cellular injury by radiolytically splitting water molecules into reactive hydroxyl radicals (OH•) that induce double-stranded DNA breaks, predisposing heavily to acute leukemias and papillary thyroid carcinoma.',
          ],
          takeaway: 'Tobacco exposes tissues to chemical mutagens; ionizing radiation induces double-stranded DNA breaks via hydroxyl radicals.',
          diagram: 'neoplasia',
        },
        {
          id: 'nutritional-pathology',
          title: 'Protein-energy malnutrition and hypovitaminoses',
          paragraphs: [
            'Protein-energy malnutrition splits into Marasmus (balanced global caloric starvation with profound somatic muscle and adipose wasting, sparing plasma albumin) and Kwashiorkor (selective protein deficiency despite caloric carbohydrate intake, causing severe hypoalbuminemia, anasarca, ascites, and marked fatty liver).',
            'Vitamin deficiencies exhibit characteristic lesions: vitamin C deficiency causes scurvy (defective proline/lysine hydroxylation during collagen synthesis yielding capillary fragility and bleeding); vitamin D deficiency causes rickets in children and osteomalacia in adults.',
          ],
          takeaway: 'Marasmus represents global caloric starvation; Kwashiorkor is protein malnutrition with hypoalbuminemia and edema.',
          diagram: 'tissue',
        },
        {
          id: 'tnm-staging-system',
          title: 'Histologic grading versus the TNM staging system',
          paragraphs: [
            'Histologic tumor grade (grades I through IV) measures how closely the neoplastic cells resemble normal differentiated architecture under the light microscope alongside mitotic counts.',
            'In contrast, clinical and pathologic staging (the AJCC/UICC TNM system) evaluates anatomical spread: T (size and local depth of the primary tumor), N (regional lymph node metastasis), and M (distant hematogenous metastasis). TNM stage provides the single most powerful clinical predictor of prognosis and dictates curative versus palliative therapy.',
          ],
          takeaway: 'Grading assesses microscopic cellular differentiation; TNM staging assesses anatomical spread and dictates clinical prognosis.',
          diagram: 'stats',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which oncologic parameter evaluated by the TNM staging system provides the single strongest clinical predictor of patient overall survival?',
        options: [
          {
            id: 'tnm-staging-prognosis',
            label: 'The anatomical extent of tumor dissemination (primary size/depth, regional nodes, and distant metastases)',
            explanation: 'Correct: the anatomical stage of spread encoded by the TNM system is the foremost clinical determinant of oncological prognosis and therapy.',
          },
          {
            id: 'histologic-grade-mitoses',
            label: 'The absolute mitotic index and pleomorphism score observed on biopsy',
            explanation: 'Incorrect: mitotic frequency defines microscopic grade; while prognostically relevant, it is subordinate to anatomical TNM stage.',
          },
          {
            id: 'vitamin-d-serum-level',
            label: 'Circulating calcidiol levels and associated nutritional fatty liver infiltration',
            explanation: 'Incorrect: nutritional parameters do not govern the TNM staging algorithm.',
          },
          {
            id: 'nuclear-pleomorphism-only',
            label: 'Isolated nuclear hyperchromasia evaluated across exfoliated cytologic smears',
            explanation: 'Incorrect: nuclear pleomorphism reflects histological differentiation, not the anatomical TNM stage.',
          },
        ],
      },
    },
  },
});
