import { lessonSchema } from '../src/contracts/learning';

export const pharmacologyCholinergicLesson = lessonSchema.parse({
  id: 'pharmacology-cholinergic',
  revision: 1,
  questionId: 'pharmacology-cholinergic-q1',
  correctOptionId: 'atropine-sulfate',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-autonomic-drugs',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/15-2-autonomic-reflexes-and-homeostasis',
      section: 'Chapter 15.2 · Autonomic Drugs: Cholinergic transmission, muscarinic receptors, and antagonists',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'Como um colírio usado para dilatar a pupila tem o mesmo princípio ativo que o antídoto que salva a vida de lavradores intoxicados por agrotóxicos?',
      title: 'Farmacologia colinérgica: agonistas, anticolinesterásicos e atropina',
      description: 'Domine a farmacologia do sistema nervoso parassimpático: receptores muscarínicos, inibidores da acetilcolinesterase e antagonistas anticolinérgicos.',
      objective: 'Distinguir os subtipos de receptores muscarínicos e descrever as ações clínicas dos anticolinesterásicos e do antagonista atropina.',
      stages: [
        {
          id: 'muscarinic-receptors',
          title: 'Receptores muscarínicos: acoplamento e distribuição',
          paragraphs: [
            'A acetilcolina atua no sistema nervoso parassimpático pós-ganglionar através de cinco subtipos de receptores acoplados a proteínas G (M1 a M5).',
            'Os receptores M1, M3 e M5 são acoplados à proteína Gq, ativando a fosfolipase C e aumentando IP3 e diacilglicerol com elevação de Ca2+ intracelular (promovendo broncoconstrição, salivação, lacrimejamento e miose). Os receptores M2 são acoplados à proteína Gi no coração, inibindo a adenilil ciclase e abrindo canais de K+ para reduzir a frequência cardíaca (cronotropismo negativo) e a velocidade de condução atrioventricular.',
          ],
          takeaway: 'M1/M3 (Gq) ativam secreções e contraem músculo liso broncopulmonar e gastrointestinal; M2 (Gi) reduz o ritmo cardíaco.',
          diagram: 'adme',
        },
        {
          id: 'anticholinesterases',
          title: 'Anticolinesterásicos e a síndrome colinérgica',
          paragraphs: [
            'Fármacos anticolinesterásicos inibem a enzima acetilcolinesterase na fenda sináptica, impedindo a hidrólise da acetilcolina e prolongando sua ação em receptores muscarínicos e nicotínicos.',
            'Inibidores reversíveis como a piridostigmina e a neostigmina são utilizados na miastenia gravis e na reversão de bloqueadores neuromusculares. Inibidores irreversíveis (como os inseticidas organofosforados e gases neurotóxicos) causam hiperestimulação colinérgica maciça (síndrome colinérgica: miose puntiforme, broncorreia, bradicardia extrema, salivação, fasciculações e convulsões).',
          ],
          takeaway: 'Anticolinesterásicos acumulam acetilcolina na fenda; inibidores irreversíveis (organofosforados) causam crise colinérgica grave.',
          diagram: 'phases',
        },
        {
          id: 'muscarinic-antagonists',
          title: 'Antagonistas muscarínicos: a atropina',
          paragraphs: [
            'A atropina é o protótipo dos antagonistas competitivos não seletivos dos receptores muscarínicos, bloqueando reversivelmente as ações da acetilcolina em todos os órgãos efetores parassimpáticos.',
            'Suas ações terapêuticas incluem elevação da frequência cardíaca em bradicardias sinusais sintomáticas, dilatação pupilar (midríase), inibição de secreções respiratórias em anestesia e reversão rápida dos sintomas muscarínicos em envenenamentos por organofosforados. Seus efeitos adversos clássicos são boca seca, visão turva, constipação, retenção urinária e taquicardia.',
          ],
          takeaway: 'A atropina bloqueia competitivamente receptores muscarínicos, acelerando o coração e secando secreções exócrinas.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual fármaco atua como antagonista competitivo dos receptores muscarínicos e é administrado emergencialmente na bradicardia sinusal instável e nas intoxicações graves por inseticidas organofosforados?',
        options: [
          {
            id: 'atropine-sulfate',
            label: 'Sulfato de atropina',
            explanation: 'Correto: a atropina bloqueia reversivelmente os receptores muscarínicos M1-M5, revertendo a bradicardia vagal extrema e a hipersecreção colinérgica.',
          },
          {
            id: 'pilocarpine-agonist',
            label: 'Cloridrato de pilocarpina',
            explanation: 'Incorreto: a pilocarpina é um agonista muscarínico que agravaria ainda mais a bradicardia e a broncorreia.',
          },
          {
            id: 'pyridostigmine-inhibitor',
            label: 'Brometo de piridostigmina',
            explanation: 'Incorreto: a piridostigmina inibe a acetilcolinesterase, o que aumentaria ainda mais os níveis tóxicos de acetilcolina.',
          },
          {
            id: 'succinylcholine-blocker',
            label: 'Succinilcolina despolarizante',
            explanation: 'Incorreto: a succinilcolina atua na placa motora nicotínica como relaxante muscular para intubação, não revertendo crises muscarínicas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'How can an eye drop used to dilate pupils share the exact same active molecule as the antidote that saves farmers poisoned by pesticides?',
      title: 'Cholinergic Pharmacology: Agonists, Anticholinesterases, and Atropine',
      description: 'Master parasympathetic pharmacology: muscarinic receptor subtypes, acetylcholinesterase inhibitors, and competitive muscarinic blockade.',
      objective: 'Distinguish muscarinic receptor subtypes and delineate the clinical actions of anticholinesterases and the antagonist atropine.',
      stages: [
        {
          id: 'muscarinic-receptors',
          title: 'Muscarinic receptors: Coupling and tissue distribution',
          paragraphs: [
            'Acetylcholine mediates postganglionic parasympathetic neurotransmission through five distinct G-protein coupled muscarinic receptor subtypes (M1 through M5).',
            'M1, M3, and M5 receptors couple to Gq proteins, activating phospholipase C to generate IP3 and DAG with consequent cytosolic Ca2+ surges (producing bronchoconstriction, lacrimation, salivation, and pupillary miosis). M2 receptors couple to Gi proteins in cardiac nodal tissue, suppressing adenylyl cyclase and opening inward rectifier K+ channels to slow heart rate and atrioventricular conduction velocity.',
          ],
          takeaway: 'M1/M3 (Gq) stimulate exocrine secretion and smooth muscle contraction; M2 (Gi) depresses cardiac chronotropy and dromotropy.',
          diagram: 'adme',
        },
        {
          id: 'anticholinesterases',
          title: 'Anticholinesterases and cholinergic toxidromes',
          paragraphs: [
            'Anticholinesterase agents inhibit acetylcholinesterase within synaptic clefts, preventing acetylcholine hydrolysis and amplifying muscarinic and nicotinic signaling.',
            'Reversible inhibitors like pyridostigmine and neostigmine treat myasthenia gravis and reverse nondepolarizing neuromuscular blockade. Irreversible organophosphate pesticides and nerve agents phosphorylate the active enzyme serine, provoking massive cholinergic toxicity (DUMBELS toxidrome: pinpoint miosis, severe bronchorrhea, bradycardia, salivation, muscle fasciculations, and seizures).',
          ],
          takeaway: 'Anticholinesterases accumulate acetylcholine; irreversible organophosphates trigger life-threatening cholinergic crises.',
          diagram: 'phases',
        },
        {
          id: 'muscarinic-antagonists',
          title: 'Muscarinic antagonists: Atropine',
          paragraphs: [
            'Atropine represents the prototypical non-selective competitive antagonist at muscarinic acetylcholine receptors, reversibly preventing agonist binding across all effector tissues.',
            'Its primary indications include accelerating nodal rhythm during hemodynamically unstable bradycardia, preoperative reduction of respiratory tract secretions, and reversing muscarinic hyperstimulation in organophosphate poisoning. Classic adverse manifestations include xerostomia, mydriasis with cycloplegia, urinary retention, and tachycardia.',
          ],
          takeaway: 'Atropine competitively blocks muscarinic receptors to relieve bradycardia and eliminate excessive exocrine secretions.',
          diagram: 'equation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which pharmacological agent functions as a competitive muscarinic receptor antagonist and is administered emergently for symptomatic sinus bradycardia and acute organophosphate insecticide toxicity?',
        options: [
          {
            id: 'atropine-sulfate',
            label: 'Atropine sulfate',
            explanation: 'Correct: atropine reversibly blocks M1-M5 muscarinic receptors, overcoming vagal bradycardia and lethal cholinergic bronchorrhea.',
          },
          {
            id: 'pilocarpine-agonist',
            label: 'Pilocarpine hydrochloride',
            explanation: 'Incorrect: pilocarpine is a muscarinic agonist that would exacerbate bronchospasm, secretions, and bradycardia.',
          },
          {
            id: 'pyridostigmine-inhibitor',
            label: 'Pyridostigmine bromide',
            explanation: 'Incorrect: pyridostigmine inhibits acetylcholinesterase, compounding synaptic acetylcholine accumulation.',
          },
          {
            id: 'succinylcholine-blocker',
            label: 'Succinylcholine chloride',
            explanation: 'Incorrect: succinylcholine targets skeletal muscle nicotinic receptors to induce paralytic relaxation, lacking muscarinic antagonism.',
          },
        ],
      },
    },
  },
});

export const pharmacologyAdrenergicLesson = lessonSchema.parse({
  id: 'pharmacology-adrenergic',
  revision: 1,
  questionId: 'pharmacology-adrenergic-q1',
  correctOptionId: 'beta2-bronchial',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-adrenergic-drugs',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/15-2-autonomic-reflexes-and-homeostasis',
      section: 'Chapter 15.2 · Autonomic Pharmacology: Sympathetic receptors, catecholamines, and beta-blockers',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'Por que prescrever um remédio para pressão alta muito antigo pode causar uma crise fatal de falta de ar em um paciente que tem asma?',
      title: 'Farmacologia adrenérgica: receptores, catecolaminas e betabloqueadores',
      description: 'Explore a sinalização dos receptores alfa e beta adrenérgicos, o uso clínico de adrenalina e noradrenalina e a seletividade dos betabloqueadores.',
      objective: 'Diferenciar os receptores alfa-1, alfa-2, beta-1 e beta-2 e reconhecer o perigo do bloqueio beta-2 não seletivo em pneumopatias obstrutivas.',
      stages: [
        {
          id: 'adrenergic-receptors',
          title: 'Subtipos de receptores adrenérgicos e cascatas de sinalização',
          paragraphs: [
            'O sistema nervoso simpático e a medula adrenal modulam seus alvos através de quatro classes principais de receptores acoplados a proteínas G.',
            'Receptores alfa-1 (acoplados a Gq) provocam vasoconstrição arteriolar e midríase pupilar. Receptores alfa-2 (acoplados a Gi) atuam como autorreceptores pré-sinápticos inibitórios que reduzem a liberação adicional de noradrenalina. Receptores beta-1 (acoplados a Gs) no coração aumentam a frequência (cronotropismo), força de contração (inotropismo) e velocidade de condução. Receptores beta-2 (acoplados a Gs) promovem relaxamento potente do músculo liso bronquiolar e vasodilatação na musculatura esquelética.',
          ],
          takeaway: 'Alfa-1 causa vasoconstrição; alfa-2 inibe pré-sinapse; beta-1 estimula o coração; beta-2 relaxa brônquios e vasos musculares.',
          diagram: 'adme',
        },
        {
          id: 'catecholamines-agonists',
          title: 'Catecolaminas na prática clínica: adrenalina e noradrenalina',
          paragraphs: [
            'A adrenalina (epinefrina) é um agonista potente de todos os receptores alfa e beta. Em choque anafilático, é o fármaco de primeira escolha indiscutível: estimula receptores alfa-1 para reverter o colapso vascular e edema de glote, beta-1 para sustentar o débito cardíaco e beta-2 para broncodilatar e suprimir a degranulação de mastócitos.',
            'A noradrenalina (norepinefrina) possui ação alfa-1 e beta-1 proeminente com mínima atividade beta-2, sendo o vasopressor de escolha no choque séptico distributivo para elevar a resistência vascular periférica sistêmica sem induzir vasodilatação periférica.',
          ],
          takeaway: 'Adrenalina ativa todos os receptores adrenérgicos e salva vidas na anafilaxia; noradrenalina é o vasopressor padrão em choque séptico.',
          diagram: 'pressure',
        },
        {
          id: 'beta-blockers',
          title: 'Betabloqueadores e seletividade farmacológica',
          paragraphs: [
            'Os betabloqueadores diminuem o consumo miocárdico de oxigênio, a pressão arterial e as arritmias, sendo pilares no tratamento da insuficiência cardíaca crônica e coronariopatia.',
            'Fármacos de primeira geração como o propranolol são não seletivos (bloqueiam beta-1 e beta-2 indistintamente). Em pacientes com asma ou DPOC, o bloqueio beta-2 nos brônquios impede a ação dilatadora fisiológica da adrenalina, deflagrando broncoespasmo grave. Betabloqueadores de segunda geração (como metoprolol e atenolol) são cardiosseletivos para receptores beta-1 em doses usuais, conferindo maior perfil de segurança pulmonar.',
          ],
          takeaway: 'Betabloqueadores não seletivos bloqueiam beta-2 e podem deflagrar broncoespasmo fatal em asmáticos; cardiosseletivos poupam os brônquios.',
          diagram: 'pump',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete a sentença sobre a seletividade dos betabloqueadores em pacientes pneumopatas:',
        blank: 'Betabloqueadores não seletivos como o propranolol devem ser evitados em pacientes asmáticos porque o bloqueio dos receptores __________ no músculo liso brônquico desencadeia broncoespasmo.',
        options: [
          {
            id: 'beta2-bronchial',
            label: 'beta-2 adrenérgicos',
            explanation: 'Correto: os receptores beta-2 medeiam relaxamento do músculo liso brônquico; seu bloqueio farmacológico precipita broncoespasmo agudo.',
          },
          {
            id: 'alpha1-vascular',
            label: 'alfa-1 adrenérgicos',
            explanation: 'Incorreto: o bloqueio alfa-1 causa vasodilatação periférica com hipotensão postural, não broncoconstrição.',
          },
          {
            id: 'muscarinic-m2',
            label: 'muscarínicos M2 cardíacos',
            explanation: 'Incorreto: receptores M2 são colinérgicos no nó sinoatrial e atrioventricular, não alvos de betabloqueadores.',
          },
          {
            id: 'dopamine-d2',
            label: 'dopaminérgicos D2 estriatais',
            explanation: 'Incorreto: receptores D2 estão no sistema nervoso central e são modulados por antipsicóticos, não por betabloqueadores.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'Why can prescribing an older blood pressure pill trigger an acute, life-threatening asthma attack in a susceptible patient?',
      title: 'Adrenergic Pharmacology: Receptors, Catecholamines, and Beta-Blockers',
      description: 'Explore alpha and beta-adrenergic signaling cascades, emergency catecholamine deployment, and beta-blocker receptor selectivity.',
      objective: 'Distinguish alpha-1, alpha-2, beta-1, and beta-2 receptors and understand the clinical hazard of non-selective beta-2 blockade in asthma.',
      stages: [
        {
          id: 'adrenergic-receptors',
          title: 'Adrenergic receptor subtypes and intracellular cascades',
          paragraphs: [
            'The sympathetic nervous system and adrenal medulla regulate vascular and visceral targets through four major G-protein coupled receptor classes.',
            'Alpha-1 receptors (Gq-coupled) trigger vascular smooth muscle contraction and pupillary radial muscle mydriasis. Alpha-2 receptors (Gi-coupled) serve as inhibitory presynaptic autoreceptors blunting further norepinephrine exocytosis. Beta-1 receptors (Gs-coupled) in the heart enhance chronotropy, inotropy, and dromotropy. Beta-2 receptors (Gs-coupled) mediate profound relaxation of bronchial smooth muscle and vasodilation within skeletal muscle vascular beds.',
          ],
          takeaway: 'Alpha-1 constricts vessels; alpha-2 inhibits transmitter release; beta-1 excites the heart; beta-2 dilates airways and skeletal muscle arterioles.',
          diagram: 'adme',
        },
        {
          id: 'catecholamines-agonists',
          title: 'Clinical catecholamines: Epinephrine and norepinephrine',
          paragraphs: [
            'Epinephrine (adrenaline) is a non-selective agonist displaying potent affinity for all alpha and beta receptors. In anaphylactic shock, it is the undisputed drug of choice: alpha-1 activation restores vascular tone and reduces laryngeal edema, beta-1 maintains cardiac output, and beta-2 reverses bronchospasm while halting mast cell mediator release.',
            'Norepinephrine exhibits dominant alpha-1 and beta-1 activity with minimal beta-2 affinity, making it the first-line vasopressor in septic distributive shock to augment total peripheral resistance without inducing paradoxical peripheral vasodilation.',
          ],
          takeaway: 'Epinephrine activates all adrenoceptors to reverse anaphylaxis; norepinephrine is the gold standard vasopressor for septic shock.',
          diagram: 'pressure',
        },
        {
          id: 'beta-blockers',
          title: 'Beta-blockers and pharmacological cardioselectivity',
          paragraphs: [
            'Beta-adrenergic antagonists decrease myocardial oxygen demand, reduce arterial pressure, and prevent malignant dysrhythmias in ischemic heart disease and heart failure.',
            'First-generation agents (such as propranolol) are non-selective, blocking beta-1 and beta-2 receptors equally. In asthmatic or COPD patients, concurrent beta-2 blockade shuts down physiological bronchodilation, provoking catastrophic bronchospasm. Second-generation beta-1 selective agents (such as metoprolol and atenolol) spare airway receptors at therapeutic doses.',
          ],
          takeaway: 'Non-selective beta-blockers trigger severe bronchoconstriction in asthmatics via beta-2 antagonism; beta-1 cardioselective agents spare the lungs.',
          diagram: 'pump',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the sentence regarding beta-blocker receptor selectivity in obstructive lung disease:',
        blank: 'Non-selective beta-blockers such as propranolol are contraindicated in patients with active asthma because blockade of __________ receptors in bronchial smooth muscle triggers bronchospasm.',
        options: [
          {
            id: 'beta2-bronchial',
            label: 'beta-2 adrenergic',
            explanation: 'Correct: beta-2 receptors mediate bronchial smooth muscle relaxation; their pharmacological blockade produces unchecked bronchoconstriction.',
          },
          {
            id: 'alpha1-vascular',
            label: 'alpha-1 adrenergic',
            explanation: 'Incorrect: alpha-1 blockade causes peripheral vasodilation and orthostatic hypotension rather than bronchospasm.',
          },
          {
            id: 'muscarinic-m2',
            label: 'cardiac muscarinic M2',
            explanation: 'Incorrect: M2 receptors are parasympathetic cholinergic receptors located in nodal cardiac tissue.',
          },
          {
            id: 'dopamine-d2',
            label: 'striatal dopamine D2',
            explanation: 'Incorrect: D2 receptors are central dopaminergic targets for neuroleptic medications, untouched by beta-blockers.',
          },
        ],
      },
    },
  },
});

export const pharmacologyNsaidsSteroidsLesson = lessonSchema.parse({
  id: 'pharmacology-nsaids-steroids',
  revision: 1,
  questionId: 'pharmacology-nsaids-steroids-q1',
  correctOptionId: 'cox1-prostaglandin-inhibition',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-inflammation-drugs',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-2-barrier-defenses-and-the-innate-immune-response',
      section: 'Chapter 21.2 · The Inflammatory Response: Eicosanoids, prostaglandins, and anti-inflammatory pharmacology',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'Por que o uso diário de um analgésico comum para dor no joelho pode causar uma hemorragia digestiva com vômito de sangue vivo?',
      title: 'Farmacologia da inflamação e dor: AINEs, esteroides e opioides',
      description: 'Analise a cascata do ácido araquidônico, a inibição da COX-1 e COX-2 por AINEs, a genômica dos glicocorticoides e a analgesia opioide.',
      objective: 'Distinguir a farmacodinâmica dos AINEs e corticoides e explicar por que o bloqueio da COX-1 lesa a mucosa gástrica e o fluxo renal.',
      stages: [
        {
          id: 'nsaids-cox-inhibition',
          title: 'AINEs e a cascata da cicloxigenase (COX-1 vs COX-2)',
          paragraphs: [
            'Os anti-inflamatórios não esteroides (AINEs) inibem as enzimas cicloxigenases que convertem o ácido araquidônico em prostaglandinas inflamatórias, prostaciclina (PGI2) e tromboxano A2 (TXA2).',
            'A COX-1 é expressa constitutivamente em tecidos saudáveis: produz prostaglandinas protetoras (PGE2 e PGI2) que estimulam a secreção de muco gástrico e bicarbonato e mantêm a vasodilatação da arteríola aferente renal. A COX-2 é induzível por citocinas inflamatórias em sítios de lesão. AINEs não seletivos (como cetoprofeno, ibuprofeno e indometacina) bloqueiam ambas as isoenzimas, eliminando a dor mas destruindo a barreira protetora gástrica e reduzindo a taxa de filtração glomerular.',
          ],
          takeaway: 'A COX-1 protege o estômago e o rim; AINEs não seletivos bloqueiam COX-1 e COX-2, arriscando úlceras e insuficiência renal.',
          diagram: 'inflammation',
        },
        {
          id: 'glucocorticoids-genomic',
          title: 'Glicocorticoides: mecanismo genômico e imunossupressão',
          paragraphs: [
            'Os glicocorticoides (como prednisona, dexametasona e hidrocortisona) atuam em um nível superior e mais potente da cascata inflamatória através de receptores nucleares intracelulares.',
            'Após atravessarem a membrana plasmática lipofílica, ligam-se ao receptor de glicocorticoide citosólico, translocam-se para o núcleo e inibem diretamente fatores de transcrição pró-inflamatórios como o NF-kB. Além disso, induzem a síntese de anexina-1 (lipocortina-1), que bloqueia a fosfolipase A2 no topo da cascata, impedindo a liberação de ácido araquidônico e suprimindo tanto prostaglandinas quanto leucotrienos.',
          ],
          takeaway: 'Corticoides bloqueiam a fosfolipase A2 via lipocortina e inibem NF-kB no núcleo, conferindo imunossupressão profunda.',
          diagram: 'dna',
        },
        {
          id: 'opioids-analgesia',
          title: 'Opioides: modulação central da dor via receptores mu',
          paragraphs: [
            'Os analgésicos opioides (como morfina, fentanil e codeína) mimetizam encefalinas e endorfinas endógenas ligando-se a receptores mu-opioides acoplados a Gi/o na substância cinzenta periaquedutal e no corno dorsal da medula.',
            'Essa ligação fecha canais de Ca2+ voltagem-dependentes pré-sinápticos (bloqueando a liberação de glutamato e substância P) e abre canais de K+ pós-sinápticos, hiperpolarizando a membrana e impedindo a condução do sinal nociceptivo para o córtex. Em doses excessivas, produzem a tríade clássica de intoxicação: coma, miose puntiforme e depressão respiratória potencialmente fatal, revertida pelo antagonista puro naloxona.',
          ],
          takeaway: 'Opioides ativam receptores mu para hiperpolarizar neurônios e fechar canais de Ca2+; sobredose causa coma, miose e apneia (antídoto: naloxona).',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo farmacológico é diretamente responsável pelo aparecimento de gastrite erosiva, úlceras pépticas e sangramento digestivo decorrentes do uso crônico de AINEs não seletivos?',
        options: [
          {
            id: 'cox1-prostaglandin-inhibition',
            label: 'Inibição da COX-1, diminuindo a síntese de prostaglandinas protetoras gástricas (PGE2 e PGI2)',
            explanation: 'Correto: a supressão de PGE2 e PGI2 mediada por COX-1 diminui a secreção de muco e bicarbonato e desregula o fluxo sanguíneo da mucosa gástrica, predispondo a úlceras.',
          },
          {
            id: 'direct-histamine-secretion',
            label: 'Estimulação direta da degranulação de histamina pelas células enterocromafins',
            explanation: 'Incorreto: AINEs não estimulam a degranulação direta de histamina na mucosa digestiva.',
          },
          {
            id: 'vagal-hyperstimulation',
            label: 'Hiperestimulação crônica das eferências colinérgicas vagais para o antro gástrico',
            explanation: 'Incorreto: AINEs não possuem efeitos agonistas parassimpáticos no nervo vago.',
          },
          {
            id: 'pepsinogen-autoactivation',
            label: 'Quelação de zinco com autoativação massiva de pepsinogênio em pH alcalino',
            explanation: 'Incorreto: a toxicidade decorre da perda de citoproteção eclusiva por prostaglandinas, e o pepsinogênio só se ativa em pH ácido.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'Why can taking an over-the-counter painkiller every day for joint pain suddenly lead to vomiting bright red blood from a bleeding ulcer?',
      title: 'Pharmacology of Pain and Inflammation: NSAIDs, Steroids, and Opioids',
      description: 'Analyze the arachidonic acid cascade, COX-1 vs COX-2 inhibition by NSAIDs, steroid gene transcription, and mu-opioid antinociception.',
      objective: 'Distinguish NSAID and glucocorticoid pharmacodynamics and explain how COX-1 suppression causes gastrointestinal ulceration.',
      stages: [
        {
          id: 'nsaids-cox-inhibition',
          title: 'NSAIDs and the cyclooxygenase cascade (COX-1 vs COX-2)',
          paragraphs: [
            'Nonsteroidal anti-inflammatory drugs (NSAIDs) inhibit cyclooxygenase enzymes, preventing the conversion of membrane arachidonic acid into pro-inflammatory prostaglandins, prostacyclin (PGI2), and thromboxane A2 (TXA2).',
            'COX-1 is constitutively expressed in baseline tissues: it generates cytoprotective PGE2 and PGI2 that stimulate gastric mucus and bicarbonate secretion while maintaining afferent arteriolar vasodilation in kidneys. COX-2 is induced at sites of inflammation. Traditional non-selective NSAIDs (such as ibuprofen, naproxen, and indomethacin) inactivate both isoforms, providing analgesia while stripping the gastric lining of protective prostanoids and degrading renal perfusion.',
          ],
          takeaway: 'Constitutive COX-1 protects gastric mucosa and kidneys; non-selective NSAIDs block both COX-1 and COX-2, risking ulceration and renal injury.',
          diagram: 'inflammation',
        },
        {
          id: 'glucocorticoids-genomic',
          title: 'Glucocorticoids: Genomic signaling and broad immunosuppression',
          paragraphs: [
            'Glucocorticoids (such as prednisone, dexamethasone, and hydrocortisone) act upstream with profound anti-inflammatory potency through intracellular steroid receptors.',
            'Upon crossing cell membranes, they bind the cytosolic glucocorticoid receptor, translocate into the nucleus, and physically repress master inflammatory transcription factors like NF-kB and AP-1. Furthermore, they induce annexin-1 (lipocortin-1), an endogenous inhibitor of phospholipase A2, shutting down arachidonic acid liberation and blocking synthesis of both prostaglandins and leukotrienes.',
          ],
          takeaway: 'Corticosteroids inhibit phospholipase A2 via lipocortin and silence NF-kB gene transcription to deliver profound anti-inflammatory suppression.',
          diagram: 'dna',
        },
        {
          id: 'opioids-analgesia',
          title: 'Opioids: Central antinociception via mu-opioid receptors',
          paragraphs: [
            'Opioid analgesics (such as morphine, fentanyl, and oxycodone) mirror endogenous endorphins by activating Gi/o-coupled mu-opioid receptors located within the periaqueductal gray and the substantia gelatinosa of the spinal dorsal horn.',
            'Receptor activation closes presynaptic voltage-gated Ca2+ channels (impeding glutamate and substance P exocytosis) and opens postsynaptic inward-rectifying K+ channels, hyperpolarizing second-order projection neurons to halt pain transmission. Severe overdose triggers the classic triad: coma, pinpoint miosis, and fatal central respiratory depression, rapidly reversible with the competitive antagonist naloxone.',
          ],
          takeaway: 'Opioids stimulate mu-receptors to hyperpolarize neurons and block transmitter release; overdose triad is coma, miosis, and apnea (antidote: naloxone).',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which pharmacological mechanism directly explains the formation of erosive gastritis, peptic ulcer disease, and upper GI hemorrhage in patients chronically using non-selective NSAIDs?',
        options: [
          {
            id: 'cox1-prostaglandin-inhibition',
            label: 'Inhibition of COX-1, depleting mucosal cytoprotective prostaglandins (PGE2 and PGI2)',
            explanation: 'Correct: COX-1 inhibition reduces gastric mucus and bicarbonate production and impairs local microvascular perfusion, leaving epithelium vulnerable to acid injury.',
          },
          {
            id: 'direct-histamine-secretion',
            label: 'Direct stimulation of enterochromaffin-like cell histamine degranulation',
            explanation: 'Incorrect: NSAIDs do not induce direct histamine release from gastric enterochromaffin-like cells.',
          },
          {
            id: 'vagal-hyperstimulation',
            label: 'Chronic hyperactivation of vagal parasympathetic efferents targeting the antrum',
            explanation: 'Incorrect: NSAIDs exert no parasympathomimetic actions upon the vagus nerve.',
          },
          {
            id: 'pepsinogen-autoactivation',
            label: 'Zinc chelation triggering spontaneous pepsinogen activation in alkaline fluid',
            explanation: 'Incorrect: ulcerogenesis is driven by loss of prostaglandin-mediated mucosal defense, and pepsinogen requires an acidic pH for catalytic cleavage.',
          },
        ],
      },
    },
  },
});

export const pharmacologyCardiovascularLesson = lessonSchema.parse({
  id: 'pharmacology-cardiovascular',
  revision: 1,
  questionId: 'pharmacology-cardiovascular-q1',
  correctOptionId: 'dry-persistent-cough',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-cardio-drugs',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance',
      section: 'Chapter 20.2 · Blood Flow and Resistance: Cardiovascular pharmacology, antihypertensive classes, and renal targets',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'Por que trocar um remédio terminado em "-pril" por outro terminado em "-sartana" faz sumir uma tosse seca e irritante que não passava com nenhum xarope?',
      title: 'Farmacologia cardiovascular: IECA, BRA, bloqueadores de Ca2+ e diuréticos',
      description: 'Domine as quatro classes basilares de anti-hipertensivos: inibidores do SRAA (IECA e BRA), bloqueadores dos canais de cálcio e diuréticos.',
      objective: 'Comparar mecanismos de ação de IECA e BRA e diferenciar bloqueadores de canais de cálcio di-hidropiridínicos de diuréticos de alça e tiazídicos.',
      stages: [
        {
          id: 'raas-inhibitors',
          title: 'Bloqueio do SRAA: IECA versus BRA',
          paragraphs: [
            'O sistema renina-angiotensina-aldosterona (SRAA) regula o volume intravascular e o tônus vascular. Os Inibidores da Enzima Conversora de Angiotensina (IECA, como enalapril e captopril) impedem a conversão de angiotensina I em angiotensina II, reduzindo a vasoconstrição arteriolar e a secreção de aldosterona.',
            'Como a ECA é idêntica à cininase II, sua inibição impede a degradação da bradicinina e substância P nas vias aéreas, deflagrando tosse seca persistente em 10-20% dos pacientes e risco de angioedema. Os Bloqueadores dos Receptores de Angiotensina II (BRA, como losartana e valsartana) antagonizam diretamente o receptor AT1 sem inibir a degradação da bradicinina, oferecendo a mesma eficácia hemodinâmica sem induzir tosse.',
          ],
          takeaway: 'IECA bloqueia a conversão e acumula bradicinina (tosse seca); BRA antagoniza o receptor AT1 diretamente sem causar tosse.',
          diagram: 'kidney',
        },
        {
          id: 'calcium-channel-blockers',
          title: 'Bloqueadores dos canais de cálcio tipo L',
          paragraphs: [
            'Os bloqueadores dos canais de cálcio (BCC) inibem a entrada de íons Ca2+ pelos canais dependentes de voltagem do tipo L durante a despolarização.',
            'Subdividem-se em duas famílias: as di-hidropiridinas (como anlodipino e nifedipino) possuem alta seletividade pelos canais do músculo liso arteriolar, promovendo potente vasodilatação periférica e redução da pós-carga (efeito adverso: edema maleolar periférico). Os não di-hidropiridínicos (verapamil e diltiazem) atuam predominantemente no miocárdio e nós de condução cardíacos, reduzindo contratilidade e frequência cardíaca.',
          ],
          takeaway: 'Di-hidropiridinas (anlodipino) relaxam artérias periféricas; não di-hidropiridinas (verapamil) deprimem a função cardíaca.',
          diagram: 'pressure',
        },
        {
          id: 'diuretics-classes',
          title: 'Classes de diuréticos: alça, tiazídicos e poupadores de K+',
          paragraphs: [
            'Os diuréticos modulam o transporte tubular renal de sódio para diminuir a volemia e a pressão arterial.',
            'Diuréticos de alça (como furosemida) inibem o cotransportador NKCC2 na alça de Henle espessa ascendente, apresentando a maior potência natriurética (indicados em edema agudo e insuficiência cardíaca descompensada; causam hipocalemia). Diuréticos tiazídicos (como hidroclorotiazida) inibem o cotransportador NCC no túbulo contorcido distal, sendo excelentes no manejo crônico da hipertensão primária. Poupadores de potássio (como espironolactona) antagonizam os receptores de aldosterona no ducto coletor.',
          ],
          takeaway: 'Furosemida inibe NKCC2 na alça de Henle (alta potência); tiazídicos inibem NCC no túbulo distal; espironolactona bloqueia aldosterona.',
          diagram: 'calculation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual efeito colateral clássico é compartilhado pelos Inibidores da ECA (como enalapril), mas não pelos Bloqueadores dos Receptores de Angiotensina (como losartana), decorrente do acúmulo de bradicinina nas vias aéreas?',
        options: [
          {
            id: 'dry-persistent-cough',
            label: 'Tosse seca crônica e persistente que não responde a antitussígenos comuns',
            explanation: 'Correto: a ECA degrada bradicinina e substância P; sua inibição acumula esses mediadores no epitélio brônquico, deflagrando tosse seca irritativa.',
          },
          {
            id: 'acute-hypokalemia',
            label: 'Hipocalemia profunda com perda urinária maciça de potássio',
            explanation: 'Incorreto: bloqueadores do SRAA diminuem a aldosterona e provocam retenção de potássio (risco de hipercalemia, não hipocalemia).',
          },
          {
            id: 'severe-tachyarrhythmia',
            label: 'Taquicardia ventricular polimórfica com prolongamento extremo do intervalo QT',
            explanation: 'Incorreto: IECA e BRA não prolongam o intervalo QT nem geram arritmias ventriculares diretas.',
          },
          {
            id: 'peripheral-pitting-edema',
            label: 'Edema maleolar bilateral por vasodilatação arteriolar pré-capilar seletiva',
            explanation: 'Incorreto: edema maleolar periférico é o efeito adverso típico dos bloqueadores de canais de cálcio di-hidropiridínicos (anlodipino).',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'Why does switching a blood pressure medication ending in "-pril" to one ending in "-sartan" eliminate a persistent hacking dry cough?',
      title: 'Cardiovascular Pharmacology: ACEIs, ARBs, CCBs, and Diuretics',
      description: 'Master core antihypertensive drug classes: RAAS inhibitors (ACEIs and ARBs), calcium channel blockers, and nephron-targeted diuretics.',
      objective: 'Compare ACE inhibitor and ARB mechanisms and differentiate dihydropyridine calcium channel blockers from loop and thiazide diuretics.',
      stages: [
        {
          id: 'raas-inhibitors',
          title: 'RAAS blockade: ACE inhibitors versus ARBs',
          paragraphs: [
            'The renin-angiotensin-aldosterone system (RAAS) regulates extracellular volume and arteriolar resistance. Angiotensin-Converting Enzyme Inhibitors (ACEIs, e.g., enalapril and lisinopril) block conversion of angiotensin I to angiotensin II, decreasing systemic vasoconstriction and aldosterone synthesis.',
            'Because ACE is identical to kininase II, its inhibition prevents the physiological breakdown of bradykinin and substance P in bronchial mucosa, inducing a dry hacking cough in 10-20% of patients and posing an angioedema risk. Angiotensin Receptor Blockers (ARBs, e.g., losartan and valsartan) selectively block the AT1 receptor directly without inhibiting kinin catabolism, achieving identical hemodynamic control without the cough.',
          ],
          takeaway: 'ACE inhibitors cause bradykinin accumulation and dry cough; ARBs selectively block AT1 receptors without elevating bradykinin.',
          diagram: 'kidney',
        },
        {
          id: 'calcium-channel-blockers',
          title: 'L-type voltage-gated calcium channel blockers (CCBs)',
          paragraphs: [
            'Calcium channel blockers prevent Ca2+ influx through voltage-dependent L-type channels during vascular and cardiac depolarization.',
            'They fall into two distinct pharmacodynamic subclasses: dihydropyridines (such as amlodipine and nifedipine) selectively target vascular smooth muscle, provoking marked arteriolar vasodilation to lower afterload (common adverse effect: dependent peripheral ankle edema). Non-dihydropyridines (verapamil and diltiazem) display balanced or cardioselective affinities, decreasing chronotropy and inotropy at nodal and myocardial sites.',
          ],
          takeaway: 'Dihydropyridines (amlodipine) vasodilate peripheral arterioles; non-dihydropyridines (verapamil) slow the heart and reduce inotropy.',
          diagram: 'pressure',
        },
        {
          id: 'diuretics-classes',
          title: 'Diuretic classes: Loop, thiazides, and potassium-sparing agents',
          paragraphs: [
            'Diuretic agents impair tubular sodium reabsorption across specific nephron segments, reducing circulating intravascular volume.',
            'Loop diuretics (such as furosemide) inhibit the NKCC2 symporter in the thick ascending limb of the loop of Henle, exerting potent natriuresis (indicated for pulmonary edema and acute congestive heart failure; prone to hypokalemia). Thiazide diuretics (hydrochlorothiazide) inhibit NCC cotransport in the distal convoluted tubule, optimal for primary hypertension. Potassium-sparing diuretics (spironolactone) block aldosterone receptors in collecting ducts.',
          ],
          takeaway: 'Furosemide blocks NKCC2 in the loop of Henle; thiazides block NCC in the distal tubule; spironolactone antagonizes aldosterone.',
          diagram: 'calculation',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which characteristic adverse effect is commonly induced by ACE inhibitors (such as enalapril) but avoided by switching to an ARB (such as losartan), due to kinin accumulation in pulmonary tissue?',
        options: [
          {
            id: 'dry-persistent-cough',
            label: 'Chronic persistent dry cough refractory to standard antitussive medications',
            explanation: 'Correct: ACE inhibition prevents the enzymatic breakdown of bradykinin and substance P, which accumulate in airway mucosa and provoke an intractable dry cough.',
          },
          {
            id: 'acute-hypokalemia',
            label: 'Severe hypokalemia driven by massive renal urinary potassium wasting',
            explanation: 'Incorrect: RAAS blockade reduces aldosterone, predisposing patients to potassium retention (hyperkalemia, not hypokalemia).',
          },
          {
            id: 'severe-tachyarrhythmia',
            label: 'Polymorphic ventricular tachycardia linked to marked QT prolongation',
            explanation: 'Incorrect: neither ACEIs nor ARBs prolong myocardial repolarization or cause torsades de pointes.',
          },
          {
            id: 'peripheral-pitting-edema',
            label: 'Bilateral dependent ankle edema caused by selective precapillary arteriolar dilation',
            explanation: 'Incorrect: peripheral dependent edema is the classic hallmark adverse effect of dihydropyridine calcium channel blockers like amlodipine.',
          },
        ],
      },
    },
  },
});

export const pharmacologyAntimicrobialsLesson = lessonSchema.parse({
  id: 'pharmacology-antimicrobials',
  revision: 1,
  questionId: 'pharmacology-antimicrobials-q1',
  correctOptionId: 'pbp-transpeptidation-inhibition',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'pharmacology',
  sources: [
    {
      id: 'openstax-ap2e-antimicrobials',
      title: 'OpenStax Microbiology',
      url: 'https://openstax.org/books/microbiology/pages/14-3-mechanisms-of-antibacterial-drugs',
      section: 'Chapter 14.3 · Antibacterial Drugs: Cell wall inhibitors, protein synthesis, and nucleic acid synthesis',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Farmacologia geral',
      hook: 'Como um antibiótico consegue destruir a parede de uma bactéria invasora e explodi-la por lise osmótica sem causar nenhum dano às células do corpo humano?',
      title: 'Princípios de antimicrobianos: parede celular, ribossomos e DNA',
      description: 'Explore os alvos farmacológicos seletivos dos antibacterianos: beta-lactâmicos, inibidores ribossômicos 30S e 50S e fluoroquinolonas.',
      objective: 'Categorizar as principais classes de antibacterianos pelos seus alvos moleculares e contrastar mecanismos bactericidas e bacteriostáticos.',
      stages: [
        {
          id: 'cell-wall-betalactams',
          title: 'Inibidores da parede celular: a família dos beta-lactâmicos',
          paragraphs: [
            'A parede celular bacteriana é constituída por uma malha rígida de peptideoglicano que confere resistência contra a alta pressão osmótica interna.',
            'Os antibióticos beta-lactâmicos (penicilinas, cefalosporinas e carbapenêmicos) mimetizam a porção D-Ala-D-Ala e ligam-se covalentemente às Proteínas Ligadoras de Penicilina (PBPs). Ao inibir a transpeptidação final da malha, a bactéria em replicação perde sua integridade mecânica e sofre lise osmótica bactericida. Bactérias resistentes produzem beta-lactamases, enzimas combatidas terapeuticamente pela adição de inibidores suicidas como o ácido clavulânico e o tazobactam.',
          ],
          takeaway: 'Beta-lactâmicos inibem PBPs e impedem a ligação cruzada de peptideoglicano, gerando lise osmótica bactericida.',
          diagram: 'microbe',
        },
        {
          id: 'protein-synthesis-inhibitors',
          title: 'Inibidores da síntese proteica: subunidades 30S e 50S',
          paragraphs: [
            'Os ribossomos bacterianos (70S) diferem estruturalmente dos ribossomos eucarióticos (80S), permitindo toxicidade seletiva sobre a tradução proteica.',
            'Fármacos que se ligam à subunidade 30S incluem os aminoglicosídeos (como gentamicina e amicacina, que induzem leitura errônea do RNAm e são bactericidas) e as tetraciclinas (como doxiciclina, que impedem o encaixe do aminoacil-RNAt e são bacteriostáticas). Fármacos que ligam à subunidade 50S incluem os macrolídeos (como azitromicina e claritromicina) e a clindamicina, que inibem a translocação do ribossomo ao longo da fita de RNA mensageiro.',
          ],
          takeaway: '30S é alvo de aminoglicosídeos e tetraciclinas; 50S é alvo de macrolídeos e clindamicina.',
          diagram: 'phases',
        },
        {
          id: 'dna-gyrase-quinolones',
          title: 'Inibidores de replicação de DNA e síntese de folato',
          paragraphs: [
            'Para replicar e transcrever seu cromossomo circular, as bactérias utilizam as enzimas DNA girase (topoisomerase II) e topoisomerase IV para aliviar a tensão de superenrolamento do DNA.',
            'As fluoroquinolonas (como ciprofloxacino e levofloxacino) ligam-se a essas enzimas e estabilizam quebras na dupla-fita de DNA bacteriano, deflagrando morte celular bactericida rápida. Paralelamente, sulfonamidas e trimetoprima inibem etapas sequenciais da síntese de ácido tetraidrofólico, bloqueando a síntese de nucleotídeos purínicos e pirimidínicos.',
          ],
          takeaway: 'Fluoroquinolonas inibem DNA girase e topoisomerase IV; sulfametoxazol-trimetoprima bloqueia a via do folato bacteriano.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o mecanismo molecular bactericida primordial executado pelos antibióticos da classe dos beta-lactâmicos (como amoxicilina e ceftriaxona)?',
        options: [
          {
            id: 'pbp-transpeptidation-inhibition',
            label: 'Ligação covalente às PBPs com inibição da transpeptidação da parede de peptideoglicano',
            explanation: 'Correto: os beta-lactâmicos inibem as enzimas transpeptidases (PBPs), impedindo a reticulação do peptideoglicano e levando à lise osmótica da bactéria.',
          },
          {
            id: 'ribosomal-50s-blockade',
            label: 'Bloqueio estéreo da subunidade 50S ribossômica impedindo o alongamento do peptídeo',
            explanation: 'Incorreto: o bloqueio da subunidade 50S é o mecanismo de ação dos macrolídeos e da clindamicina, não dos beta-lactâmicos.',
          },
          {
            id: 'folate-reductase-suppression',
            label: 'Inibição alostérica da di-hidrofolato redutase na síntese de purinas',
            explanation: 'Incorreto: a inibição da di-hidrofolato redutase é o mecanismo da trimetoprima.',
          },
          {
            id: 'outer-lipid-detergent-action',
            label: 'Ação detergente catiônica desestabilizadora da membrana externa por polimixinas',
            explanation: 'Incorreto: desestabilização da membrana externa por interação com LPS é o mecanismo das polimixinas (colistina).',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'General pharmacology',
      hook: 'How can an antibiotic completely dismantle a bacterium’s cell wall and explode it via osmotic lysis without harming human host cells?',
      title: 'Principles of Antimicrobials: Cell Wall, Ribosomes, and DNA',
      description: 'Explore the selective pharmacological targets of antibacterial therapeutics: beta-lactams, 30S/50S ribosomal blockers, and quinolones.',
      objective: 'Classify major antibacterial classes by molecular targets and distinguish bactericidal from bacteriostatic mechanisms of action.',
      stages: [
        {
          id: 'cell-wall-betalactams',
          title: 'Cell wall synthesis inhibitors: The beta-lactam superfamily',
          paragraphs: [
            'The bacterial cell wall consists of a rigid cross-linked peptidoglycan mesh that maintains structural integrity against immense internal turgor pressures.',
            'Beta-lactam antimicrobials (penicillins, cephalosporins, carbapenems, and monobactams) stereochemically mimic the terminal D-Ala-D-Ala peptide and covalently bind penicillin-binding proteins (PBPs). By inhibiting transpeptidase cross-linking, actively growing bacteria develop defective walls that rupture under osmotic gradients. Resistant pathogens synthesize beta-lactamase enzymes, which are countered clinically by suicide inhibitors like clavulanate and tazobactam.',
          ],
          takeaway: 'Beta-lactams inhibit PBPs to block peptidoglycan transpeptidation, precipitating bactericidal osmotic cell lysis.',
          diagram: 'microbe',
        },
        {
          id: 'protein-synthesis-inhibitors',
          title: 'Ribosomal protein synthesis inhibitors: 30S and 50S subunits',
          paragraphs: [
            'Bacterial 70S ribosomes differ structurally from eukaryotic 80S ribosomes, affording targets for selective antimicrobial toxicity.',
            'Agents binding the 30S ribosomal subunit include aminoglycosides (such as gentamicin and amikacin, which misread mRNA transcripts and act bactericidally) and tetracyclines (such as doxycycline, which sterically block aminoacyl-tRNA accommodation and act bacteriostatically). Agents targeting the 50S subunit include macrolides (azithromycin and clarithromycin) and clindamycin, which stall peptide chain elongation and ribosomal translocation.',
          ],
          takeaway: 'Aminoglycosides and tetracyclines bind 30S; macrolides and clindamycin inhibit the 50S ribosomal subunit.',
          diagram: 'phases',
        },
        {
          id: 'dna-gyrase-quinolones',
          title: 'DNA replication and folate synthesis inhibitors',
          paragraphs: [
            'To transcribe and replicate their circular double-stranded chromosomes, bacteria employ DNA gyrase (topoisomerase II) and topoisomerase IV to manage torsional supercoiling stress.',
            'Fluoroquinolones (such as ciprofloxacin and levofloxacin) bind and trap these enzymes in cleaved DNA complexes, causing irreversible double-strand chromosomal breaks and rapid bactericidal death. Meanwhile, sulfonamides and trimethoprim sequentially block dihydropteroate synthase and dihydrofolate reductase, starving bacteria of essential tetrahydrofolate for purine and thymidine synthesis.',
          ],
          takeaway: 'Fluoroquinolones trap DNA gyrase and topoisomerase IV; trimethoprim-sulfamethoxazole shuts down bacterial tetrahydrofolate synthesis.',
          diagram: 'dna',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the primary bactericidal molecular mechanism executed by beta-lactam antimicrobials (such as amoxicillin and ceftriaxone)?',
        options: [
          {
            id: 'pbp-transpeptidation-inhibition',
            label: 'Covalent binding to PBPs with inhibition of peptidoglycan cell wall transpeptidation',
            explanation: 'Correct: beta-lactams bind bacterial transpeptidases (PBPs), halting peptidoglycan cross-linking and triggering autolytic osmotic rupture.',
          },
          {
            id: 'ribosomal-50s-blockade',
            label: 'Steric blockade of the 50S ribosomal subunit preventing polypeptide elongation',
            explanation: 'Incorrect: 50S subunit inhibition is the mechanism of macrolides and clindamycin, not beta-lactams.',
          },
          {
            id: 'folate-reductase-suppression',
            label: 'Allosteric inhibition of dihydrofolate reductase shutting down thymidine production',
            explanation: 'Incorrect: dihydrofolate reductase inhibition is the specific target of trimethoprim.',
          },
          {
            id: 'outer-lipid-detergent-action',
            label: 'Cationic detergent disruption of outer bacterial membrane lipopolysaccharide layers',
            explanation: 'Incorrect: membrane detergent disruption is executed by polymyxin antibiotics (colistin).',
          },
        ],
      },
    },
  },
});
