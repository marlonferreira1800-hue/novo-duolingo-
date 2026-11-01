import { lessonSchema } from '../src/contracts/learning';

export const endocrineThyroidLesson = lessonSchema.parse({
  id: 'endocrine-thyroid',
  revision: 1,
  questionId: 'endocrine-thyroid-t3t4',
  correctOptionId: 't3t4-iodine-tsh-feedback',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch17-thyroid',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-4-the-thyroid-gland',
      section: 'Chapter 17 · The Thyroid Gland and Metabolic Rate',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Como pequenas moléculas iodadas sintetizadas no pescoço regulam a velocidade do metabolismo de todas as células do corpo?',
      title: 'Fisiologia da tireoide: síntese hormonal e regulação por feedback',
      description: 'Compreenda a síntese de T3 e T4 na tireoide, o papel fundamental do iodo, as ações metabólicas basais e o controle pelo TSH.',
      objective: 'Descrever as etapas de síntese e liberação dos hormônios tireoidianos e o mecanismo de retroalimentação negativa no eixo hipotálamo-hipófise-tireoide.',
      stages: [
        {
          id: 'iodide-trapping-organification',
          title: 'Captação do iodo e organificação folicular',
          paragraphs: [
            'As células foliculares da tireoide captam ativamente o iodeto plasmático via simporte Na+/I- (NIS) na membrana basolateral contra um gradiente expressivo.',
            'No coloide folicular, a tireoperoxidase (TPO) oxida o iodeto e o liga a resíduos de tirosina da tireoglobulina, formando monoiodotirosina (MIT) e di-iodotirosina (DIT), processo denominado organificação.',
          ],
          takeaway: 'A tireoperoxidase (TPO) oxida o iodeto e o acopla à tireoglobulina no lúmen folicular.',
          diagram: 'endocrine',
        },
        {
          id: 't3-t4-metabolic-actions',
          title: 'Acoplamento, T3, T4 e taxa metabólica',
          paragraphs: [
            'A TPO promove o acoplamento: DIT + DIT gera tiroxina (T4, secretado em 90%), enquanto MIT + DIT gera tri-iodotironina (T3, secretado em 10%).',
            'Na periferia, desiodases convertem T4 na forma biologicamente ativa T3. O T3 liga-se a receptores nucleares, estimulando a Na+/K+-ATPase, o consumo de oxigênio celular, a termogênese e a taxa metabólica basal.',
          ],
          takeaway: 'O T4 é o principal hormônio secretado, mas o T3 é a forma ativa que comanda a taxa metabólica celular.',
          diagram: 'endocrine',
        },
        {
          id: 'tsh-negative-feedback',
          title: 'O eixo hipotálamo-hipófise-tireoide',
          paragraphs: [
            'O hormônio liberador de tireotrofina (TRH) do hipotálamo estimula a adeno-hipófise a produzir o hormônio estimulador da tireoide (TSH).',
            'O TSH estimula todas as etapas glandulares foliculares. Por retroalimentação negativa (feedback negativo), concentrações elevadas de T3 e T4 livres inibem a secreção hipofisária de TSH e hipotalâmica de TRH.',
          ],
          takeaway: 'Níveis circulantes de T3 e T4 exercem feedback negativo sobre o TSH hipofisário para manter a eutiroidia.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo regula a síntese e a secreção dos hormônios tireoidianos no eixo endócrino?',
        options: [
          {
            id: 't3t4-iodine-tsh-feedback',
            label: 'A TPO oxida o iodeto para formar T3/T4, e os hormônios livres exercem feedback negativo inibindo o TSH hipofisário',
            explanation: 'Correto: a síntese depende da TPO organificando iodeto na tireoglobulina, e a homeostase é mantida pelo feedback negativo de T3/T4 sobre o TSH hipofisário.',
          },
          {
            id: 'tsh-direct-stimulation',
            label: 'O TSH inibe diretamente o simporte Na+/I- quando os níveis plasmáticos de T4 caem bruscamente',
            explanation: 'Incorreto: o TSH estimula fortemente o simporte Na+/I- e todas as etapas de síntese folicular.',
          },
          {
            id: 'tpo-deiodinase-block',
            label: 'A tireoperoxidase converte T3 em T4 nos tecidos periféricos para estimular o apetite',
            explanation: 'Incorreto: a TPO atua na tireoide produzindo hormônios, enquanto as desiodases periféricas convertem T4 em T3.',
          },
          {
            id: 'positive-tsh-feedback',
            label: 'Altas concentrações de T3 exercem feedback positivo permanente, induzindo hipersecreção contínua de TSH',
            explanation: 'Incorreto: o feedback fisiológico é negativo; a elevação de T3 e T4 suprime o TSH.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'How do small iodinated molecules created in your neck dictate the metabolic speed of nearly every cell in the human body?',
      title: 'Thyroid physiology: hormone synthesis and feedback regulation',
      description: 'Understand the synthesis of T3 and T4 in the thyroid gland, the indispensable role of iodine, basal metabolic actions, and TSH control.',
      objective: 'Describe the steps of thyroid hormone synthesis and the negative feedback mechanism governing the hypothalamic-pituitary-thyroid axis.',
      stages: [
        {
          id: 'iodide-trapping-organification',
          title: 'Iodide trapping and follicular organification',
          paragraphs: [
            'Thyroid follicular cells actively accumulate circulating iodide through the basolateral Na+/I- symporter (NIS) against a steep concentration gradient.',
            'Inside the follicular lumen colloid, thyroid peroxidase (TPO) oxidizes iodide and incorporates it onto tyrosine residues of thyroglobulin, generating monoiodotyrosine (MIT) and diiodotyrosine (DIT) through organification.',
          ],
          takeaway: 'Thyroid peroxidase (TPO) oxidizes iodide and couples it to thyroglobulin inside follicular colloid.',
          diagram: 'endocrine',
        },
        {
          id: 't3-t4-metabolic-actions',
          title: 'Coupling, T3, T4, and metabolic rate',
          paragraphs: [
            'TPO catalyzes coupling reactions: DIT + DIT yields thyroxine (T4, ~90% of output), whereas MIT + DIT produces triiodothyronine (T3, ~10%).',
            'In peripheral target tissues, 5’-deiodinases convert T4 into biologically potent T3. T3 binds nuclear thyroid hormone receptors to upregulate Na+/K+-ATPase, oxygen consumption, thermogenesis, and basal metabolic rate.',
          ],
          takeaway: 'T4 is the primary circulating hormone, but T3 is the potent active form driving basal cellular metabolism.',
          diagram: 'endocrine',
        },
        {
          id: 'tsh-negative-feedback',
          title: 'The hypothalamic-pituitary-thyroid axis',
          paragraphs: [
            'Hypothalamic thyrotropin-releasing hormone (TRH) stimulates the anterior pituitary to secrete thyroid-stimulating hormone (TSH).',
            'TSH enhances every synthetic step in follicular cells. Through negative feedback, elevated circulating levels of free T3 and T4 inhibit pituitary TSH release and hypothalamic TRH drive.',
          ],
          takeaway: 'Circulating free T3 and T4 exert negative feedback on pituitary TSH to sustain euthyroid homeostasis.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which mechanism accurately explains the synthesis and negative feedback regulation of thyroid hormones?',
        options: [
          {
            id: 't3t4-iodine-tsh-feedback',
            label: 'TPO oxidizes iodide to yield T3/T4, while free thyroid hormones exert negative feedback to suppress pituitary TSH',
            explanation: 'Correct: synthesis requires TPO organifying iodide onto thyroglobulin, and axis balance is maintained by negative feedback of free T3/T4 on pituitary TSH secretion.',
          },
          {
            id: 'tsh-direct-stimulation',
            label: 'TSH directly inhibits the basolateral Na+/I- symporter whenever circulating free T4 concentrations drop',
            explanation: 'Incorrect: TSH stimulates the Na+/I- symporter and promotes all follicular synthesis and secretion steps.',
          },
          {
            id: 'tpo-deiodinase-block',
            label: 'Thyroid peroxidase converts T3 into T4 across peripheral vascular beds to stimulate metabolic appetite',
            explanation: 'Incorrect: TPO operates in the thyroid gland during synthesis, whereas peripheral deiodinases convert T4 into active T3.',
          },
          {
            id: 'positive-tsh-feedback',
            label: 'High concentrations of T3 exert continuous positive feedback, driving unending pituitary hypersecretion of TSH',
            explanation: 'Incorrect: thyroid hormone regulation operates by negative feedback; elevated T3 and T4 shut down TSH secretion.',
          },
        ],
      },
    },
  },
});

export const endocrineAdrenalLesson = lessonSchema.parse({
  id: 'endocrine-adrenal',
  revision: 1,
  questionId: 'endocrine-adrenal-cortisol',
  correctOptionId: 'adrenal-layers-hormones',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch17-adrenal',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-6-the-adrenal-glands',
      section: 'Chapter 17 · The Adrenal Glands',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Como uma única glândula sobre os rins abriga fábricas químicas completamente distintas para estresse agudo e crônico?',
      title: 'Glândula adrenal: zonas corticais e medula',
      description: 'Diferencie as três zonas do córtex adrenal (aldosterona, cortisol, andrógenos) e a medula produtora de catecolaminas.',
      objective: 'Correlacionar cada camada do córtex adrenal e da medula com seus respectivos hormônios e ações fisiológicas.',
      stages: [
        {
          id: 'cortex-zones-gfr',
          title: 'As três zonas do córtex adrenal',
          paragraphs: [
            'O córtex da glândula adrenal origina-se do mesoderma e é dividido de fora para dentro em três zonas funcionais distintas: glomerulosa, fasciculada e reticular.',
            'A zona glomerulosa produz mineralocorticoides (aldosterona); a zona fasciculada (mais espessa) sintetiza glicocorticoides (cortisol); e a zona reticular secreta andrógenos fracos (DHEA e androstenediona).',
          ],
          takeaway: 'Córtex adrenal: Glomerulosa = aldosterona, Fasciculada = cortisol, Reticular = andrógenos.',
          diagram: 'endocrine',
        },
        {
          id: 'cortisol-stress-response',
          title: 'Cortisol: o glicocorticoide do estresse',
          paragraphs: [
            'O cortisol é secretado sob comando pulsátil do ACTH hipofisário, regulado pelo CRH hipotalâmico, com pico matinal no ritmo circadiano.',
            'Ele garante substratos energéticos em situações de estresse aumentando a gliconeogênese hepática, a proteólise muscular e a lipólise, além de exercer potente efeito anti-inflamatório ao inibir a fosfolipase A2 e a transcrição de citocinas (como NF-kB).',
          ],
          takeaway: 'O cortisol eleva a glicemia pela gliconeogênese e suprime respostas inflamatórias mediadas por citocinas.',
          diagram: 'endocrine',
        },
        {
          id: 'adrenal-medulla-catecholamines',
          title: 'Medula adrenal: extensão do sistema simpático',
          paragraphs: [
            'A medula adrenal tem origem na crista neural e atua funcionalmente como um gânglio simpático modificado.',
            'Suas células cromafins são inervadas diretamente por fibras simpáticas pré-ganglionares colinérgicas e liberam adrenalina (80%) e noradrenalina (20%) na corrente sanguínea em resposta ao estresse agudo ("luta ou fuga").',
          ],
          takeaway: 'A medula adrenal libera adrenalina e noradrenalina sob estimulação simpática direta para resposta rápida ao estresse.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual correlação anatômica e funcional entre as divisões da glândula adrenal e seus hormônios secretados está correta?',
        options: [
          {
            id: 'adrenal-layers-hormones',
            label: 'Zona glomerulosa produz aldosterona; zona fasciculada produz cortisol; zona reticular produz andrógenos; e a medula secreta adrenalina',
            explanation: 'Correto: essa é a clássica correlação estrutural e endócrina da glândula adrenal.',
          },
          {
            id: 'fasciculata-aldosterone',
            label: 'Zona fasciculada produz aldosterona exclusiva sob estímulo direto da angiotensina II',
            explanation: 'Incorreto: a aldosterona é sintetizada na zona glomerulosa mais externa, enquanto a fasciculada produz cortisol.',
          },
          {
            id: 'glomerulosa-adrenaline',
            label: 'Zona glomerulosa secreta adrenalina e peptídeos opioides sob comando exclusivo do ACTH',
            explanation: 'Incorreto: as catecolaminas (adrenalina) são sintetizadas na medula adrenal, de origem neuroectodérmica.',
          },
          {
            id: 'medulla-cortisol',
            label: 'A medula adrenal é a maior produtora corporal de cortisol em resposta ao ciclo circadiano',
            explanation: 'Incorreto: o cortisol é produzido na zona fasciculada do córtex adrenal, não na medula.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'How does a single cap atop each kidney house completely different hormonal engines for acute fright and chronic endurance?',
      title: 'Adrenal gland: cortical zones and the medulla',
      description: 'Differentiate the three layers of the adrenal cortex (aldosterone, cortisol, androgens) and the catecholamine-producing medulla.',
      objective: 'Correlate each layer of the adrenal cortex and medulla with its respective hormones and physiological actions.',
      stages: [
        {
          id: 'cortex-zones-gfr',
          title: 'The three zones of the adrenal cortex',
          paragraphs: [
            'The adrenal cortex originates from mesoderm and is organized from the capsule inward into three functional zones: glomerulosa, fasciculata, and reticularis.',
            'The zona glomerulosa produces mineralocorticoids (aldosterone); the thick zona fasciculata synthesizes glucocorticoids (cortisol); and the zona reticularis secretes weak androgens (DHEA and androstenedione).',
          ],
          takeaway: 'Adrenal cortex: Glomerulosa = aldosterone, Fasciculata = cortisol, Reticularis = androgens.',
          diagram: 'endocrine',
        },
        {
          id: 'cortisol-stress-response',
          title: 'Cortisol: the stress glucocorticoid',
          paragraphs: [
            'Cortisol is released in response to pulsatile pituitary ACTH, governed by hypothalamic CRH, exhibiting a prominent morning circadian peak.',
            'It mobilizes fuel during sustained stress by promoting hepatic gluconeogenesis, muscle proteolysis, and lipolysis, while exerting robust anti-inflammatory suppression on phospholipase A2 and NF-kB signaling.',
          ],
          takeaway: 'Cortisol fuels energy metabolism via gluconeogenesis and blunts cytokine-mediated inflammation.',
          diagram: 'endocrine',
        },
        {
          id: 'adrenal-medulla-catecholamines',
          title: 'Adrenal medulla: sympathetic arm',
          paragraphs: [
            'The adrenal medulla arises from the neural crest and functions essentially as a specialized, hormone-secreting sympathetic ganglion.',
            'Chromaffin cells are innervated directly by preganglionic sympathetic fibers, releasing epinephrine (80%) and norepinephrine (20%) into the bloodstream during acute fight-or-flight emergencies.',
          ],
          takeaway: 'The adrenal medulla releases epinephrine and norepinephrine under direct sympathetic drive for rapid alarm responses.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which anatomical and functional pairing between the adrenal gland divisions and their principal hormones is correct?',
        options: [
          {
            id: 'adrenal-layers-hormones',
            label: 'Zona glomerulosa yields aldosterone; zona fasciculata yields cortisol; zona reticularis yields androgens; and the medulla secretes epinephrine',
            explanation: 'Correct: this matches the established structural and hormonal architecture of the adrenal cortex and medulla.',
          },
          {
            id: 'fasciculata-aldosterone',
            label: 'Zona fasciculata produces aldosterone under direct stimulation by circulating angiotensin II',
            explanation: 'Incorrect: aldosterone is produced in the outermost zona glomerulosa, while the fasciculata synthesizes cortisol.',
          },
          {
            id: 'glomerulosa-adrenaline',
            label: 'Zona glomerulosa secretes epinephrine and opioid peptides commanded exclusively by ACTH',
            explanation: 'Incorrect: catecholamines (epinephrine/norepinephrine) are manufactured in the adrenal medulla, not the glomerulosa.',
          },
          {
            id: 'medulla-cortisol',
            label: 'The adrenal medulla represents the body’s prime manufacturer of cortisol tied to diurnal circadian rhythms',
            explanation: 'Incorrect: cortisol is manufactured within the cortical zona fasciculata, not in the neuroendocrine medulla.',
          },
        ],
      },
    },
  },
});

export const endocrineCalciumLesson = lessonSchema.parse({
  id: 'endocrine-calcium',
  revision: 1,
  questionId: 'endocrine-calcium-pth',
  correctOptionId: 'pth-calcitriol-elevate-calcium',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'endocrine-physiology',
  sources: [
    {
      id: 'openstax-anatomy-physiology-2e-ch17-parathyroid',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-5-the-parathyroid-glands',
      section: 'Chapter 17 · The Parathyroid Glands and Calcium Homeostasis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia endócrina',
      hook: 'Como o organismo resgata cálcio dos ossos e rins em minutos para evitar arritmias e tetania neuromuscular?',
      title: 'Homeostase do cálcio: paratormônio, calcitriol e calcitonina',
      description: 'Entenda os papéis coordenados do PTH, da vitamina D ativa (calcitriol) e da calcitonina no equilíbrio plasmático de cálcio e fósforo.',
      objective: 'Explicar a regulação da calcemia pelo paratormônio (PTH), calcitriol e calcitonina nos ossos, rins e trato gastrointestinal.',
      stages: [
        {
          id: 'casr-pth-secretion',
          title: 'O sensor de cálcio e o disparo do PTH',
          paragraphs: [
            'O cálcio ionizado plasmático é monitorado continuamente pelas células principais das glândulas paratireoides através do receptor sensível ao cálcio (CaSR).',
            'Uma queda na concentração plasmática de Ca²⁺ desativa a sinalização inibitória do CaSR, liberando rapidamente o paratormônio (PTH) na circulação sistêmica.',
          ],
          takeaway: 'A hipocalcemia estimula as glândulas paratireoides a secretarem PTH imediatamente.',
          diagram: 'endocrine',
        },
        {
          id: 'pth-actions-bone-kidney',
          title: 'Ações do PTH nos ossos e nos rins',
          paragraphs: [
            'Nos ossos, o PTH liga-se a osteoblastos, induzindo a expressão de RANKL, que estimula os osteoclastos a promoverem a reabsorção óssea, liberando cálcio e fosfato na circulação.',
            'Nos rins, o PTH aumenta a reabsorção tubular de cálcio no túbulo contorcido distal e inibe a reabsorção de fosfato no túbulo proximal (efeito fosfatúrico), evitando a precipitação de cristais de fosfato de cálcio.',
          ],
          takeaway: 'O PTH resgata cálcio dos ossos, retém cálcio nos rins e excreta fosfato na urina.',
          diagram: 'endocrine',
        },
        {
          id: 'calcitriol-and-calcitonin',
          title: 'Calcitriol intestinal e o contraponto da calcitonina',
          paragraphs: [
            'O PTH estimula a enzima 1-alfa-hidroxilase renal, que converte a 25-hidroxivitamina D em sua forma ativa: 1,25-di-hidroxivitamina D (calcitriol). O calcitriol estimula a absorção intestinal eficiente de cálcio e fósforo.',
            'Em contrapartida, a calcitonina (secretada pelas células parafoliculares C da tireoide em resposta à hipercalcemia) inibe discretamente a atividade osteoclástica, atuando como antagonista fisiológico menor.',
          ],
          takeaway: 'O calcitriol promove a absorção intestinal de cálcio; a calcitonina atua inibindo os osteoclastos.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Como o paratormônio (PTH) atua para restabelecer os níveis normais de cálcio sérico em vigência de hipocalcemia?',
        options: [
          {
            id: 'pth-calcitriol-elevate-calcium',
            label: 'Estimula a reabsorção óssea osteoclástica, aumenta a reabsorção renal de cálcio e ativa a síntese renal de calcitriol',
            explanation: 'Correto: o PTH ativa osteoclastos via RANKL, retém cálcio nos néfrons distais e induz a 1-alfa-hidroxilase para síntese de calcitriol, que eleva a absorção intestinal.',
          },
          {
            id: 'inhibit-osteoclasts-renal-loss',
            label: 'Inibe a atividade dos osteoclastos e força a eliminação urinária imediata de cálcio',
            explanation: 'Incorreto: o PTH ativa a reabsorção óssea e reduz a perda renal de cálcio.',
          },
          {
            id: 'block-calcitriol',
            label: 'Bloqueia a 1-alfa-hidroxilase renal para poupar reservas ósseas de hidroxiapatita',
            explanation: 'Incorreto: o PTH estimula fortemente a 1-alfa-hidroxilase renal para produzir calcitriol ativo.',
          },
          {
            id: 'calcitonin-synergy',
            label: 'Estimula as células parafoliculares tireoidianas a secretarem calcitonina em sinergia funcional',
            explanation: 'Incorreto: a calcitonina é liberada na hipercalcemia e tem ação oposta ao PTH na remodelação óssea.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Endocrine physiology',
      hook: 'How does the human body recruit calcium from bones and urine within minutes to fend off fatal tetany and cardiac arrhythmias?',
      title: 'Calcium homeostasis: parathyroid hormone, calcitriol, and calcitonin',
      description: 'Understand the coordinated roles of PTH, active vitamin D (calcitriol), and calcitonin in plasma calcium and phosphate balance.',
      objective: 'Explain the regulation of systemic calcemia by parathyroid hormone (PTH), calcitriol, and calcitonin in bone, kidneys, and gut.',
      stages: [
        {
          id: 'casr-pth-secretion',
          title: 'The calcium sensor and PTH release',
          paragraphs: [
            'Extracellular ionized calcium is constantly monitored by chief cells of the parathyroid glands via the cell-surface calcium-sensing receptor (CaSR).',
            'A decline in plasma Ca²⁺ relieves CaSR-mediated tonic suppression, prompting the rapid vesicular release of parathyroid hormone (PTH) into systemic blood.',
          ],
          takeaway: 'Hypocalcemia relieves CaSR inhibition, triggering immediate PTH secretion by parathyroid chief cells.',
          diagram: 'endocrine',
        },
        {
          id: 'pth-actions-bone-kidney',
          title: 'PTH actions on bone and kidneys',
          paragraphs: [
            'In bone tissue, PTH binds osteoblasts, upregulating RANKL expression to stimulate osteoclastic bone resorption and mobilize calcium and phosphate into blood.',
            'In the kidneys, PTH increases calcium reabsorption within the distal convoluted tubule and inhibits proximal tubular phosphate reabsorption (phosphaturic effect), preventing calcium phosphate mineral precipitation.',
          ],
          takeaway: 'PTH frees bone calcium, saves renal calcium, and promotes urinary phosphate excretion.',
          diagram: 'endocrine',
        },
        {
          id: 'calcitriol-and-calcitonin',
          title: 'Intestinal calcitriol and calcitonin counter-regulation',
          paragraphs: [
            'PTH upregulates renal 1-alpha-hydroxylase, converting circulating 25-hydroxyvitamin D into active 1,25-dihydroxyvitamin D (calcitriol). Calcitriol then drives efficient intestinal absorption of calcium and phosphate.',
            'Conversely, calcitonin (secreted by thyroid parafollicular C cells in response to hypercalcemia) weakly blunts osteoclast-mediated bone breakdown, serving as a minor physiological brake.',
          ],
          takeaway: 'Calcitriol drives gastrointestinal calcium uptake; calcitonin weakly curbs osteoclastic resorption.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'How does parathyroid hormone (PTH) act to restore normal serum calcium concentrations during acute hypocalcemia?',
        options: [
          {
            id: 'pth-calcitriol-elevate-calcium',
            label: 'Stimulates osteoclastic bone resorption, increases distal renal calcium reabsorption, and triggers renal calcitriol synthesis',
            explanation: 'Correct: PTH stimulates bone breakdown via RANKL, salvages filtered calcium in the distal tubule, and upregulates 1-alpha-hydroxylase to promote gut absorption through calcitriol.',
          },
          {
            id: 'inhibit-osteoclasts-renal-loss',
            label: 'Inhibits osteoclastic activity while forcing rapid urinary excretion of filtered calcium',
            explanation: 'Incorrect: PTH stimulates osteoclasts and decreases urinary calcium excretion.',
          },
          {
            id: 'block-calcitriol',
            label: 'Blocks renal 1-alpha-hydroxylase to safeguard skeleton hydroxyapatite crystals',
            explanation: 'Incorrect: PTH strongly stimulates renal 1-alpha-hydroxylase to generate active calcitriol.',
          },
          {
            id: 'calcitonin-synergy',
            label: 'Stimulates thyroid parafollicular cells to secrete calcitonin in functional synergy',
            explanation: 'Incorrect: calcitonin is secreted under hypercalcemic conditions and opposes PTH osteoclastic activity.',
          },
        ],
      },
    },
  },
});
