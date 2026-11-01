import { lessonSchema } from '../src/contracts/learning';

export const digestiveOralEsophagealLesson = lessonSchema.parse({
  id: 'digestive-oral-esophageal',
  revision: 1,
  questionId: 'digestive-oral-esophageal-q1',
  correctOptionId: 'les-relaxation-nitric-oxide-vip',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-oral',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-2',
      section: 'Chapter 23 · The Digestive System: The Oral Cavity, Pharynx, and Esophagus',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como o esôfago consegue empurrar o alimento contra a gravidade até o estômago mesmo se estivermos de cabeça para baixo?',
      title: 'Fisiologia oral e esofágica: salivação, deglutição e esfíncteres',
      description: 'Analise a fase cefálica, o controle autonômico da saliva, os estágios da deglutição e a motilidade do esfíncter esofágico inferior.',
      objective: 'Descrever a composição da secreção salivar, os componentes voluntário e reflexo da deglutição e os neurotransmissores do esfíncter esofágico inferior (EEI).',
      stages: [
        {
          id: 'cephalic-phase-saliva',
          title: 'Fase cefálica e secreção salivar parassimpática',
          paragraphs: [
            'A digestão inicia-se antes mesmo da mastigação: a visão, o olfato ou o pensamento em alimentos ativam centros corticais e hipotalâmicos, disparando a fase cefálica mediada pelo nervo vago e nervos cranianos salivares (NC VII e NC IX).',
            'As glândulas parótidas, submandibulares e sublinguais secretam cerca de 1 a 1,5 litro de saliva por dia. O estímulo parassimpático gera saliva aquosa rica em amilase salivar (ptialina, que inicia a quebra de amido em pH neutro), lipase lingual, mucinas protetoras e bicarbonato.',
          ],
          takeaway: 'O estímulo parassimpático gera saliva fluida rica em amilase salivar, mucinas e bicarbonato protetor.',
          diagram: 'brain',
        },
        {
          id: 'swallowing-reflex-phases',
          title: 'O reflexo da deglutição: fases oral, faríngea e esofágica',
          paragraphs: [
            'A deglutição divide-se em três etapas sincronizadas: a fase oral voluntária (a língua empurra o bolo alimentar contra o palato duro em direção à orofaringe), a fase faríngea involuntária e a fase esofágica.',
            'Na fase faríngea, o contato do bolo com receptores tácteis na orofaringe dispara o centro da deglutição no bulbo: o palato mole eleva-se vedando a nasofaringe, as pregas vocais se fecham e a epiglote bascula cobrindo a laringe enquanto o esfíncter esofágico superior (músculo cricofaríngeo) se relaxa para receber o bolo alimentar.',
          ],
          takeaway: 'A fase faríngea involuntária veda a nasofaringe e fecha a laringe com a epiglote, prevenindo aspiração.',
          diagram: 'tissue',
        },
        {
          id: 'esophageal-motility-les',
          title: 'Motilidade esofágica e relaxamento do esfíncter inferior (EEI)',
          paragraphs: [
            'O terço superior do esôfago possui músculo estriado esquelético, enquanto os dois terços inferiores são compostos por músculo liso involuntário, impulsionados por ondas peristálticas primárias (desencadeadas pela deglutição) e secundárias (disparadas por resíduo intraluminal).',
            'O esfíncter esofágico inferior (EEI) mantém tônus basal de 15 a 25 mmHg para impedir o refluxo gastroesofágico ácido. Quando a onda peristáltica se aproxima, neurônios entéricos pós-ganglionares não adrenérgicos e não colinérgicos (NANC) liberam óxido nítrico (NO) e peptídeo intestinal vasoativo (VIP), relaxando o EEI. Falha nesse relaxamento por destruição neuronal do plexo mioentérico causa acalasia.',
          ],
          takeaway: 'O relaxamento do EEI é mediado por óxido nítrico (NO) e VIP; sua perda no plexo mioentérico causa acalasia.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual mecanismo neuroquímico é responsável pelo relaxamento fisiológico receptivo do esfíncter esofágico inferior (EEI) durante a deglutição?',
        options: [
          {
            id: 'les-relaxation-nitric-oxide-vip',
            label: 'Liberação de óxido nítrico (NO) e peptídeo intestinal vasoativo (VIP) por neurônios inibitórios do plexo mioentérico',
            explanation: 'Correto: a aproximação da onda peristáltica ativa neurônios entéricos NANC (não adrenérgicos, não colinérgicos) que sintetizam NO e VIP, relaxando o músculo liso do EEI.',
          },
          {
            id: 'acetylcholine-muscarinic-contraction',
            label: 'Descarga maciça de acetilcolina sobre receptores muscarínicos M3 da túnica circular',
            explanation: 'Incorreto: a acetilcolina estimula a contração e eleva o tônus do esfíncter esofágico, não o seu relaxamento receptivo.',
          },
          {
            id: 'sympathetic-noradrenaline-relaxation',
            label: 'Estimulação adrenérgica simpática que fecha o esfíncter esofágico superior',
            explanation: 'Incorreto: os reflexos de abertura do EEI durante a deglutição são coordenados de forma intrínseca pelo plexo entérico eferente via NO.',
          },
          {
            id: 'gastrin-acid-luminal-closure',
            label: 'Secreção de gastrina antral no sangue que provoca abertura esfincteriana imediata',
            explanation: 'Incorreto: a gastrina na realidade aumenta o tônus pressórico do EEI para prevenir refluxo quando a acidez gástrica se eleva.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How can the esophagus drive food down against gravity into the stomach even if you swallow while hanging completely upside-down?',
      title: 'Oral and esophageal physiology: salivation, deglutition, and sphincters',
      description: 'Explore the cephalic phase, autonomic salivary control, swallowing stages, and lower esophageal sphincter (LES) dynamics.',
      objective: 'Describe salivary secretion dynamics, trace voluntary and reflex deglutition phases, and explain LES neurotransmitters.',
      stages: [
        {
          id: 'cephalic-phase-saliva',
          title: 'Cephalic phase and parasympathetic salivary secretion',
          paragraphs: [
            'Digestive preparation anticipates mechanical mastication: the sight, aroma, or thought of food engages cortical and hypothalamic networks, initiating the vagal cephalic phase and cranial salivary output (CN VII and CN IX).',
            'Parotid, submandibular, and sublingual glands yield 1.0 to 1.5 liters of saliva daily. Parasympathetic stimulation elicits abundant serous secretions loaded with salivary amylase (ptyalin, commencing starch hydrolysis at neutral pH), lingual lipase, protective mucins, and bicarbonate buffer.',
          ],
          takeaway: 'Parasympathetic tone drives serous saliva enriched in amylase, mucins, and bicarbonate.',
          diagram: 'brain',
        },
        {
          id: 'swallowing-reflex-phases',
          title: 'The deglutition reflex: oral, pharyngeal, and esophageal phases',
          paragraphs: [
            'Swallowing proceeds through three sequentially synchronized intervals: the voluntary oral phase (lingual propulsion of the masticated bolus into the oropharynx), the involuntary pharyngeal phase, and the esophageal phase.',
            'During the pharyngeal phase, tactile bolus pressure triggers the medullary swallowing center: the soft palate elevates to seal the nasopharynx, vocal cords adduct, and the epiglottis flips down to cover the larynx while the upper esophageal sphincter (cricopharyngeus) relaxes.',
          ],
          takeaway: 'The involuntary pharyngeal phase seals the nasopharynx and larynx, preventing tracheal aspiration.',
          diagram: 'tissue',
        },
        {
          id: 'esophageal-motility-les',
          title: 'Esophageal motility and lower esophageal sphincter (LES) relaxation',
          paragraphs: [
            'The upper third of the esophagus comprises skeletal striated muscle, transitioning over the lower two-thirds to involuntary smooth muscle organized into primary (swallow-induced) and secondary (distension-induced) peristaltic clearing waves.',
            'The lower esophageal sphincter (LES) maintains high basal resting tone (15–25 mmHg) to protect against acid reflux. Approaching peristaltic waves stimulate postganglionic non-adrenergic non-cholinergic (NANC) myenteric neurons to release nitric oxide (NO) and vasoactive intestinal peptide (VIP), causing receptive LES relaxation. Loss of these inhibitory neurons causes achalasia.',
          ],
          takeaway: 'LES relaxation is mediated by nitric oxide (NO) and VIP; myenteric loss of these neurons causes achalasia.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which neurochemical mechanism executes the physiological receptive relaxation of the lower esophageal sphincter (LES) during deglutition?',
        options: [
          {
            id: 'les-relaxation-nitric-oxide-vip',
            label: 'Release of nitric oxide (NO) and vasoactive intestinal peptide (VIP) by inhibitory myenteric neurons',
            explanation: 'Correct: oncoming peristaltic waves stimulate postganglionic NANC enteric neurons that release NO and VIP, triggering smooth muscle hyperpolarization and LES opening.',
          },
          {
            id: 'acetylcholine-muscarinic-contraction',
            label: 'Massive acetylcholine discharge onto circular smooth muscle M3 muscarinic receptors',
            explanation: 'Incorrect: acetylcholine increases basal LES tone and causes smooth muscle contraction rather than relaxation.',
          },
          {
            id: 'sympathetic-noradrenaline-relaxation',
            label: 'Sympathetic noradrenaline bursts triggering upper esophageal sphincter spasm',
            explanation: 'Incorrect: receptive deglutitive LES opening is mediated intrinsically through enteric inhibitory nitrergic neurons.',
          },
          {
            id: 'gastrin-acid-luminal-closure',
            label: 'Antral gastrin release directly forcing instantaneous opening of the esophageal hiatus',
            explanation: 'Incorrect: circulating gastrin actually elevates resting LES tone to protect the esophagus against reflux during active digestion.',
          },
        ],
      },
    },
  },
});

export const digestiveMacronutrientsLesson = lessonSchema.parse({
  id: 'digestive-macronutrients',
  revision: 1,
  questionId: 'digestive-macronutrients-q1',
  correctOptionId: 'sglt1-glucose-sodium-cotransport',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-macronutrients',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-7',
      section: 'Chapter 23 · Chemical Digestion and Absorption: Absorption of Carbohydrates, Proteins, and Lipids',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como o epitélio intestinal consegue absorver açúcares e aminoácidos contra seus gradientes de concentração sem gastar ATP diretamente em cada transportador?',
      title: 'Digestão e absorção de macronutrientes: carboidratos, proteínas e lipídios',
      description: 'Estude os transportadores SGLT1, GLUT5, PEPT1 e o empacotamento de lipídios em quilomícrons para a circulação linfática.',
      objective: 'Descrever o transporte ativo secundário de monossacarídeos e peptídeos e o processamento intracelular de lipídios em quilomícrons.',
      stages: [
        {
          id: 'carbohydrate-digestion-sglt1',
          title: 'Carboidratos: amilases, dissacaridases e transporte por SGLT1',
          paragraphs: [
            'O amido é hidrolisado pela amilase pancreática em maltose, maltotriose e dextrinas-alfa. Na borda em escova dos enterócitos, dissacaridases específicas (lactase, sacarase-isomaltase) clivam os oligossacarídeos em monossacarídeos simples.',
            'A glicose e a galactose são absorvidas na membrana apical pelo transportador SGLT1 por transporte ativo secundário movido pelo gradiente de sódio (gerado pela bomba Na+/K+-ATPase basolateral). A frutose é absorvida por difusão facilitada independente de sódio via GLUT5, e todos os três monossacarídeos deixam o enterócito para o sangue portal via GLUT2 basolateral.',
          ],
          takeaway: 'Glicose e galactose entram por SGLT1 (simporte com Na+); frutose entra por GLUT5; todas saem por GLUT2.',
          diagram: 'membrane',
        },
        {
          id: 'protein-hydrolysis-pept1',
          title: 'Proteínas: proteases luminais, peptidases e simporte por PEPT1',
          paragraphs: [
            'A digestão de proteínas inicia-se no estômago pela pepsina e é concluída no duodeno por endopeptidases pancreáticas (tripsina, quimiotripsina, elastase) e exopeptidases (carboxipeptidases A e B).',
            'Na borda em escova, aminopeptidases clivam peptídeos em aminoácidos livres e oligopeptídeos. Dipeptídeos e tripeptídeos são absorvidos com extraordinária eficiência pelo cotransportador PEPT1 movido por gradiente eletroquímico de prótons (H+), sendo subsequentemente hidrolisados em aminoácidos no citoplasma antes de alcançarem a circulação portal.',
          ],
          takeaway: 'Dipeptídeos e tripeptídeos são ativamente absorvidos por PEPT1 em simporte com H+.',
          diagram: 'intestine',
        },
        {
          id: 'lipid-absorption-chylomicrons',
          title: 'Lipídios: micelas mistas, reesterificação e quilomícrons',
          paragraphs: [
            'A lipase pancreática e a colipase hidrolisam triglicerídeos em ácidos graxos livres e 2-monoacilglicerol, que formam micelas mistas com os sais biliares para atravessar a camada aquosa estagnada até os enterócitos.',
            'No retículo endoplasmático liso do enterócito, os lipídios absorvidos são reesterificados em triglicerídeos e empacotados com fosfolipídios, colesterol e apolipoproteína B-48 para formar os quilomícrons. Os quilomícrons sofrem exocitose na membrana basolateral e entram nos vasos linfáticos lácteos devido ao grande tamanho de sua partícula.',
          ],
          takeaway: 'Enterócitos reesterificam lipídios em quilomícrons com apoB-48, que são secretados nos vasos linfáticos lácteos.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete os mecanismos de transporte apical utilizados para a absorção intestinal dos monossacarídeos:',
        blank: 'A glicose e a galactose são ativamente absorvidas na membrana apical dos enterócitos pelo transportador ______, enquanto a frutose é transportada via ______.',
        options: [
          {
            id: 'sglt1-glucose-sodium-cotransport',
            label: 'SGLT1 / GLUT5',
            explanation: 'Correto: a glicose e a galactose utilizam o simporte ativo secundário dependente de sódio SGLT1, enquanto a frutose entra por difusão facilitada independente de sódio através do transportador GLUT5.',
          },
          {
            id: 'glut2-glut4-inversion',
            label: 'GLUT2 / GLUT4',
            explanation: 'Incorreto: GLUT2 atua na membrana basolateral exportando monossacarídeos para o sangue; GLUT4 é o transportador sensível a insulina no músculo e tecido adiposo.',
          },
          {
            id: 'pept1-sglt2-renal',
            label: 'PEPT1 / SGLT2',
            explanation: 'Incorreto: PEPT1 transporta di- e tripeptídeos com prótons; SGLT2 é o transportador renal no túbulo contorcido proximal.',
          },
          {
            id: 'glut1-dmt1-metal',
            label: 'GLUT1 / DMT1',
            explanation: 'Incorreto: GLUT1 é o transportador basal de hemácias e endotélio cerebral; DMT1 transporta íons ferroso Fe2+.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How can the intestinal epithelium drive simple sugars and peptides uphill against steep concentration gradients without burning ATP at each transporter?',
      title: 'Macronutrient digestion and absorption: carbohydrates, proteins, and lipids',
      description: 'Study molecular transporters SGLT1, GLUT5, PEPT1, and enterocyte packaging of lipids into lymphatic chylomicrons.',
      objective: 'Detail secondary active transport of monosaccharides and oligopeptides and map lipid assembly into chylomicrons.',
      stages: [
        {
          id: 'carbohydrate-digestion-sglt1',
          title: 'Carbohydrates: amylases, brush-border enzymes, and SGLT1',
          paragraphs: [
            'Dietary starches are digested by pancreatic alpha-amylase into maltose, maltotriose, and alpha-limit dextrins. At the enterocyte brush border, microvillar disaccharidases (lactase, sucrase-isomaltase) cleave oligosaccharides into absorbable monosaccharides.',
            'Glucose and galactose are actively transported across the apical membrane by SGLT1 via secondary active symport powered by the inward sodium gradient (maintained by basolateral Na+/K+-ATPases). Fructose enters via sodium-independent facilitated diffusion through GLUT5, and all three exit basolaterally via GLUT2 into mesenteric capillaries.',
          ],
          takeaway: 'Glucose and galactose enter via SGLT1 (Na+ symport); fructose enters via GLUT5; all exit via basolateral GLUT2.',
          diagram: 'membrane',
        },
        {
          id: 'protein-hydrolysis-pept1',
          title: 'Proteins: luminal peptidases and proton-driven PEPT1 uptake',
          paragraphs: [
            'Protein cleavage begins with gastric pepsin and accelerates in the duodenum through pancreatic endopeptidases (trypsin, chymotrypsin, elastase) and exopeptidases (carboxypeptidases A and B).',
            'Brush-border aminopeptidases yield free amino acids and small peptides. Dipeptides and tripeptides are absorbed with high transport velocity via the PEPT1 symporter driven by an electrochemical proton (H+) gradient, undergoing intracellular peptidase hydrolysis into free amino acids prior to portal exit.',
          ],
          takeaway: 'Intestinal di- and tripeptides are absorbed via proton-coupled PEPT1 symporters.',
          diagram: 'intestine',
        },
        {
          id: 'lipid-absorption-chylomicrons',
          title: 'Lipids: mixed micelles, re-esterification, and chylomicrons',
          paragraphs: [
            'Pancreatic lipase and colipase hydrolyze dietary triglycerides into free fatty acids and 2-monoacylglycerols, which coalesce with amphipathic bile salts into mixed micelles traversing the unstirred water layer.',
            'Inside enterocyte smooth endoplasmic reticulum, absorbed lipids are re-esterified into triglycerides and enveloped with phospholipids, cholesterol, and apolipoprotein B-48 to assemble chylomicrons. Chylomicrons undergo basolateral exocytosis and enter blind-ended lacteals because their large size prevents capillary entry.',
          ],
          takeaway: 'Enterocytes re-esterify lipids into apoB-48 chylomicrons, which enter lymphatic lacteals.',
          diagram: 'tissue',
        },
      ],
      question: {
        type: 'fill',
        prompt: 'Complete the description of the distinct apical transport mechanisms handling intestinal monosaccharide absorption:',
        blank: 'Glucose and galactose are actively co-transported across the enterocyte apical membrane via ______, while dietary fructose enters via ______.',
        options: [
          {
            id: 'sglt1-glucose-sodium-cotransport',
            label: 'SGLT1 / GLUT5',
            explanation: 'Correct: glucose and galactose are carried by apical sodium-glucose cotransporter-1 (SGLT1), while fructose is transported by sodium-independent facilitated carrier GLUT5.',
          },
          {
            id: 'glut2-glut4-inversion',
            label: 'GLUT2 / GLUT4',
            explanation: 'Incorrect: GLUT2 mediates basolateral efflux into blood; GLUT4 is the insulin-dependent transporter in muscle and adipocytes.',
          },
          {
            id: 'pept1-sglt2-renal',
            label: 'PEPT1 / SGLT2',
            explanation: 'Incorrect: PEPT1 transports di- and tripeptides; SGLT2 is the renal glucose transporter in proximal convoluted tubules.',
          },
          {
            id: 'glut1-dmt1-metal',
            label: 'GLUT1 / DMT1',
            explanation: 'Incorrect: GLUT1 operates in erythrocytes and the blood-brain barrier; DMT1 transports divalent ferrous iron.',
          },
        ],
      },
    },
  },
});

export const digestiveMicronutrientsLesson = lessonSchema.parse({
  id: 'digestive-micronutrients',
  revision: 1,
  questionId: 'digestive-micronutrients-q1',
  correctOptionId: 'hepcidin-degrades-ferroportin',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-micronutrients',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6',
      section: 'Chapter 23 · Chemical Digestion and Absorption: Absorption of Water, Electrolytes, and Micronutrients',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como o fígado consegue trancar o ferro dentro das células durante infecções crônicas para privar as bactérias desse nutriente vital?',
      title: 'Absorção de micronutrientes: ferro, vitamina B12, cálcio e água',
      description: 'Estude o eixo hepcidina-ferroportina no metabolismo do ferro, a absorção ileal de B12 por fator intrínseco e os fluxos de cálcio e água.',
      objective: 'Explicar a regulação da absorção de ferro pela hepcidina e ferroportina, as etapas da absorção de vitamina B12 e o transporte de cálcio mediado por vitamina D.',
      stages: [
        {
          id: 'iron-homeostasis-hepcidin',
          title: 'Homeostase do ferro: DMT1, ferroportina e hepcidina',
          paragraphs: [
            'O ferro não heme (Fe3+) alimentar é reduzido a ferro ferroso (Fe2+) pela enzima ferrirredutase duodenal (Dcytb) e absorvido na membrana apical pelo transportador de metais bivalentes 1 (DMT1).',
            'O ferro intracelular pode ser armazenado como ferritina ou exportado para o sangue pela ferroportina basolateral. O hormônio hepático hepcidina atua como o regulador negativo mestre: ao ligar-se à ferroportina, induz sua internalização e degradação lisossômica, bloqueando a liberação de ferro para a circulação na sobrecarga férrica e em estados inflamatórios crônicos (anemia de doença crônica).',
          ],
          takeaway: 'A hepcidina hepática degrada a ferroportina basolateral, bloqueando a absorção e exportação de ferro no organismo.',
          diagram: 'kidney',
        },
        {
          id: 'vitamin-b12-absorption',
          title: 'Vitamina B12 (cobalamina) e receptor de cubilina',
          paragraphs: [
            'A vitamina B12 alimentar desprendida das proteínas pelo ácido gástrico liga-se inicialmente à haptocorrina (fator R) salivar e gástrica para resistir à acidez estomacal.',
            'No duodeno, as proteases pancreáticas degradam a haptocorrina, permitindo que a B12 ligue-se ao fator intrínseco (secretado pelas células parietais). O complexo B12-fator intrínseco viaja intacto até o íleo terminal, onde se liga ao receptor específico cubilina e é absorvido por endocitose mediada.',
          ],
          takeaway: 'A vitamina B12 viaja protegida pelo fator intrínseco até ser endocitada por receptores de cubilina no íleo terminal.',
          diagram: 'intestine',
        },
        {
          id: 'calcium-and-water-fluxes',
          title: 'Absorção de cálcio e balanço hídrico intestinal',
          paragraphs: [
            'O cálcio é absorvido ativamente no duodeno sob estímulo da 1,25-di-hidroxivitamina D3 (calcitriol), que induz canais de cálcio apicais TRPV6, a proteína carreadora citosólica calbindina-D9k e bombas basolaterais PMCA1b.',
            'O trato digestivo recebe cerca de 9 litros de água por dia (2 L de ingestão oral e 7 L de secreções endógenas). O intestino delgado absorve aproximadamente 7 litros e o cólon absorve mais 1,5 a 1,8 litros por acoplamento osmótico ao sódio, restando apenas cerca de 100 a 200 mL excretados nas fezes.',
          ],
          takeaway: 'Calcitriol estimula TRPV6 e calbindina no duodeno; mais de 98% dos 9 litros diários de água são reabsorvidos.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o mecanismo molecular pelo qual o hormônio hepático hepcidina reduz a concentração sérica de ferro durante inflamações sistêmicas?',
        options: [
          {
            id: 'hepcidin-degrades-ferroportin',
            label: 'Ligação direta à ferroportina basolateral em enterócitos e macrófagos, induzindo sua internalização e degradação',
            explanation: 'Correto: a hepcidina é o hormônio regulador do ferro; sua ligação à ferroportina provoca a degradação lisossômica desse canal exportador, retendo o ferro no interior das células e diminuindo o ferro sérico.',
          },
          {
            id: 'hepcidin-activates-dcytb',
            label: 'Estimulação transcricional direta do transportador DMT1 e da enzima Dcytb no ápice dos enterócitos',
            explanation: 'Incorreto: a hepcidina reduz, não aumenta, a disponibilidade de ferro sistêmico degradando a ferroportina.',
          },
          {
            id: 'hepcidin-cleaves-transferrin',
            label: 'Clivagem proteolítica da transferrina circulante no capilar glomerular renal',
            explanation: 'Incorreto: a transferrina transporta ferro no plasma sem ser degradada enzimaticamente pela hepcidina.',
          },
          {
            id: 'hepcidin-inhibits-cubilin',
            label: 'Inibição alostérica irreversível dos receptores de cubilina nas células do íleo terminal',
            explanation: 'Incorreto: a cubilina é o receptor ileal para absorção do complexo vitamina B12-fator intrínseco, não tendo relação com a hepcidina.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How can the liver lock iron securely inside intestinal cells and macrophages during chronic inflammation to starve invading pathogens?',
      title: 'Micronutrient absorption: iron, vitamin B12, calcium, and water',
      description: 'Explore the hepcidin-ferroportin axis in iron homeostasis, terminal ileal cobalamin uptake, and calcium and fluid balance.',
      objective: 'Explain iron absorption control via hepcidin and ferroportin, outline B12-intrinsic factor transit, and detail calcitriol-mediated calcium uptake.',
      stages: [
        {
          id: 'iron-homeostasis-hepcidin',
          title: 'Iron homeostasis: DMT1, ferroportin, and systemic hepcidin',
          paragraphs: [
            'Dietary ferric non-heme iron (Fe3+) is reduced to ferrous iron (Fe2+) by apical duodenal cytochrome b (Dcytb) and transported into enterocytes via divalent metal transporter-1 (DMT1).',
            'Intracellular iron can be stored within ferritin or exported across the basolateral membrane into the bloodstream via ferroportin. The hepatic peptide hormone hepcidin serves as the master negative regulator: by binding to ferroportin, it induces its internalization and lysosomal degradation, locking iron within enterocytes and macrophages in states of iron overload and chronic systemic inflammation (anemia of chronic disease).',
          ],
          takeaway: 'Hepatic hepcidin binds and degrades basolateral ferroportin, shutting down systemic iron export.',
          diagram: 'kidney',
        },
        {
          id: 'vitamin-b12-absorption',
          title: 'Vitamin B12 (cobalamin) and the cubilin receptor pathway',
          paragraphs: [
            'Dietary vitamin B12 released from food proteins by gastric hydrochloric acid complexes with salivary and gastric haptocorrin (R-factor) to withstand harsh gastric acidity.',
            'Within the duodenum, pancreatic proteases hydrolyze haptocorrin, allowing cobalamin to bind intrinsic factor (secreted by gastric parietal cells). The stable B12-intrinsic factor complex travels undisturbed to the terminal ileum, where it binds cubilin receptors on microvilli and undergoes receptor-mediated endocytosis.',
          ],
          takeaway: 'Vitamin B12 complexes with intrinsic factor and is endocytosed via cubilin receptors in the terminal ileum.',
          diagram: 'intestine',
        },
        {
          id: 'calcium-and-water-fluxes',
          title: 'Calcium transport and massive intestinal water absorption',
          paragraphs: [
            'Duodenal active transcellular calcium uptake is driven by 1,25-dihydroxyvitamin D3 (calcitriol), which upregulates apical TRPV6 calcium channels, cytosolic calbindin-D9k shuttles, and basolateral PMCA1b calcium-ATPases.',
            'The gastrointestinal tract receives approximately 9 liters of fluid daily (2 liters oral intake plus 7 liters endogenous digestive secretions). The small bowel reclaims ~7 liters and the colon reclaims another 1.5 to 1.8 liters by solvent drag and sodium coupling, leaving merely 100 to 200 mL excreted in normal stool.',
          ],
          takeaway: 'Calcitriol drives duodenal TRPV6 and calbindin uptake; >98% of 9 daily liters of digestive fluid is reclaimed.',
          diagram: 'endocrine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which molecular mechanism enables the hepatic hormone hepcidin to restrict systemic circulating iron levels during systemic inflammation?',
        options: [
          {
            id: 'hepcidin-degrades-ferroportin',
            label: 'Directly binding basolateral ferroportin on enterocytes and macrophages, inducing its internalization and lysosomal degradation',
            explanation: 'Correct: hepcidin binds the sole iron exporter ferroportin, causing its ubiquitination and lysosomal destruction, which traps iron within stores and drives hypoferremia.',
          },
          {
            id: 'hepcidin-activates-dcytb',
            label: 'Transcriptional upregulation of apical DMT1 and Dcytb reducing enzymes on enterocyte microvilli',
            explanation: 'Incorrect: hepcidin downregulates systemic iron availability by eliminating cellular ferroportin export channels.',
          },
          {
            id: 'hepcidin-cleaves-transferrin',
            label: 'Enzymatic proteolytic cleavage of circulating apotransferrin within renal glomeruli',
            explanation: 'Incorrect: transferrin transports iron in serum; hepcidin regulates cellular export by targeting ferroportin, not serum transferrin.',
          },
          {
            id: 'hepcidin-inhibits-cubilin',
            label: 'Allosteric inhibition of ileal cubilin receptors blocking water-soluble vitamin uptake',
            explanation: 'Incorrect: cubilin is the specific endocytic receptor for the intrinsic factor-cobalamin complex in the distal ileum.',
          },
        ],
      },
    },
  },
});

export const digestiveGiHormonesLesson = lessonSchema.parse({
  id: 'digestive-gi-hormones',
  revision: 1,
  questionId: 'digestive-gi-hormones-q1',
  correctOptionId: 'incretins-glp1-gip-insulin',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-hormones',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3',
      section: 'Chapter 23 · The Digestive System: Neuroendocrine Regulation and Gastrointestinal Hormones',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Por que ingerir glicose por via oral provoca uma liberação de insulina muito maior do que receber a mesma quantidade diretamente na veia?',
      title: 'Hormônios gastrointestinais: gastrina, CCK, secretina, incretinas e motilina',
      description: 'Analise a regulação endócrina do TGI: estímulos, células secretoras e ações das incretinas (GLP-1 e GIP) e da motilina.',
      objective: 'Diferenciar os principais hormônios gastrointestinais, identificar as células de origem (G, I, S, K, L, M) e explicar o efeito incretina na secreção de insulina.',
      stages: [
        {
          id: 'gastrin-and-cholecystokinin',
          title: 'Gastrina (células G) e colecistocinina (células I)',
          paragraphs: [
            'A gastrina é secretada pelas células G do antro gástrico em resposta a peptídeos luminais e estimulação vagal (mediada por peptídeo liberador de gastrina - GRP). Ela estimula as células ECL a liberarem histamina e as células parietais a secretarem ácido clorídrico, sofrendo retroalimentação negativa por pH < 1,5 via somatostatina.',
            'A colecistocinina (CCK) é liberada pelas células I do duodeno e jejuno ao detectarem ácidos graxos e aminoácidos. A CCK induz a contração da vesícula biliar, relaxa o esfíncter de Oddi, estimula a secreção de enzimas acinares pancreáticas e retarda o esvaziamento gástrico.',
          ],
          takeaway: 'Gastrina estimula a secreção ácida gástrica; CCK orquestra a ejeção biliar e a secreção enzimática pancreática.',
          diagram: 'endocrine',
        },
        {
          id: 'secretin-and-incretins',
          title: 'Secretina (células S) e o efeito incretina (GLP-1 e GIP)',
          paragraphs: [
            'A secretina é liberada pelas células S duodenais quando o pH luminal cai abaixo de 4,5, atuando nas células ductais do pâncreas para induzir secreção volumosa de bicarbonato e neutralizar o quimo gástrico.',
            'O efeito incretina explica por que a glicose oral gera mais insulina do que a endovenosa: o peptídeo inibitório gástrico (GIP, células K duodenais) e o peptídeo semelhante ao glucagon 1 (GLP-1, células L ileais) são liberados pela chegada de nutrientes ao lúmen e estimulam fortemente a secreção de insulina glicose-dependente pelas células beta pancreáticas.',
          ],
          takeaway: 'O efeito incretina (GIP e GLP-1) potencializa a liberação antecipada de insulina após nutrientes orais.',
          diagram: 'intestine',
        },
        {
          id: 'motilin-and-mmc',
          title: 'Motilina (células M) e o complexo mioelétrico migratório',
          paragraphs: [
            'A motilina é um hormônio peptídico produzido pelas células M da mucosa do duodeno e jejuno proximal secretado periodicamente em ciclos de 90 a 120 minutos durante o jejum interdigestivo.',
            'A motilina deflagra o complexo mioelétrico migratório (MMC), gerando ondas de contração peristáltica vigorosa que varrem detritos alimentares, células descamadas e bactérias do estômago até o íleo terminal, prevenindo o supercrescimento bacteriano no intestino delgado (SIBO). A alimentação interrompe o MMC imediatamente.',
          ],
          takeaway: 'A motilina coordena o complexo mioelétrico migratório (MMC) durante o jejum para limpeza luminal periódica.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o papel fisiológico das incretinas intestinais GLP-1 e GIP em resposta à passagem de nutrientes pelo trato gastrointestinal?',
        options: [
          {
            id: 'incretins-glp1-gip-insulin',
            label: 'Estimulação antecipada e dependente de glicose da secreção de insulina pelas células beta pancreáticas',
            explanation: 'Correto: GLP-1 (células L) e GIP (células K) são incretinas que amplificam a secreção de insulina pelo pâncreas após a ingestão oral de carboidratos, além de retardar o esvaziamento gástrico e promover saciedade.',
          },
          {
            id: 'incretins-block-pancreatic-bicarbonate',
            label: 'Inibição completa da secreção de bicarbonato e ativação imediata de pepsina',
            explanation: 'Incorreto: o bicarbonato pancreático é regulado pela secretina; as incretinas atuam no eixo endócrino metabólico e esvaziamento gástrico.',
          },
          {
            id: 'incretins-induce-gallbladder-contraction',
            label: 'Contração tônica potente da vesícula biliar com espasmo do esfíncter de Oddi',
            explanation: 'Incorreto: a contração da vesícula biliar e relaxamento do esfíncter de Oddi são mediados pela colecistocinina (CCK).',
          },
          {
            id: 'incretins-interdigestive-mmc-sweeper',
            label: 'Deflagração das ondas do complexo mioelétrico migratório em períodos de jejum prolongado',
            explanation: 'Incorreto: a indução das fases propulsivas do complexo mioelétrico migratório (MMC) durante o jejum é mediada pela motilina.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'Why does an oral dose of glucose provoke a vastly greater surge of insulin than the identical amount of glucose administered intravenously?',
      title: 'Gastrointestinal hormones: gastrin, CCK, secretin, incretins, and motilin',
      description: 'Analyze GI neuroendocrine regulation: triggers, cellular origins, and the physiological actions of incretins (GLP-1, GIP) and motilin.',
      objective: 'Distinguish major GI hormones by cell type (G, I, S, K, L, M) and explain the incretin effect on glucose-dependent insulin secretion.',
      stages: [
        {
          id: 'gastrin-and-cholecystokinin',
          title: 'Gastrin (G cells) and cholecystokinin (I cells)',
          paragraphs: [
            'Gastrin is synthesized by antral G cells in response to luminal peptides, amino acids, and vagal gastrin-releasing peptide (GRP). It stimulates ECL cells to release histamine and parietal cells to produce hydrochloric acid, suppressed via negative feedback when luminal pH drops below 1.5 through somatostatin from D cells.',
            'Cholecystokinin (CCK) is released by duodenal and jejunal I cells sensing fatty acids and amino acids. CCK triggers gallbladder smooth muscle contraction, relaxes the sphincter of Oddi, induces pancreatic acinar zymogen exocytosis, and slows gastric emptying.',
          ],
          takeaway: 'Gastrin drives gastric acid secretion; CCK coordinates gallbladder emptying and pancreatic enzyme release.',
          diagram: 'endocrine',
        },
        {
          id: 'secretin-and-incretins',
          title: 'Secretin (S cells) and the incretin effect (GLP-1 and GIP)',
          paragraphs: [
            'Secretin is secreted by duodenal S cells upon duodenal acidification (pH < 4.5), acting on pancreatic ductal cells to drive copious alkaline bicarbonate secretion that neutralizes gastric acid.',
            'The incretin effect explains why oral glucose elicits greater insulin release than intravenous glucose: glucose-dependent insulinotropic peptide (GIP, duodenal K cells) and glucagon-like peptide-1 (GLP-1, distal ileal L cells) are secreted in response to luminal carbohydrates and lipids to stimulate glucose-dependent insulin release from pancreatic beta cells.',
          ],
          takeaway: 'Incretins (GIP and GLP-1) amplify glucose-dependent insulin release in response to enteral nutrients.',
          diagram: 'intestine',
        },
        {
          id: 'motilin-and-mmc',
          title: 'Motilin (M cells) and the migrating motor complex',
          paragraphs: [
            'Motilin is a peptide hormone synthesized by mucosal M cells in the duodenum and proximal jejunum, released cyclically in 90 to 120-minute pulses during the interdigestive fasting state.',
            'Motilin triggers the migrating motor complex (MMC), generating coordinated propulsive peristaltic sweeps from the stomach to the ileum that clear residual food debris, sloughed mucosal cells, and bacteria, preventing small intestinal bacterial overgrowth (SIBO). Feeding immediately abolishes the MMC.',
          ],
          takeaway: 'Motilin governs fasting migrating motor complex (MMC) sweeps, clearing luminal debris to prevent bacterial overgrowth.',
          diagram: 'phases',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the primary physiological function executed by the intestinal incretins GLP-1 and GIP following enteral meal transit?',
        options: [
          {
            id: 'incretins-glp1-gip-insulin',
            label: 'Glucose-dependent amplification of insulin secretion by pancreatic beta cells along with satiety induction',
            explanation: 'Correct: GLP-1 and GIP are gut incretins that augment insulin secretion in response to enteral nutrients, suppress glucagon (GLP-1), slow gastric emptying, and enhance satiety.',
          },
          {
            id: 'incretins-block-pancreatic-bicarbonate',
            label: 'Complete inhibition of ductal bicarbonate output and activation of gastric pepsinogen',
            explanation: 'Incorrect: pancreatic ductal bicarbonate is regulated by secretin; incretins orchestrate endocrine metabolic adaptations.',
          },
          {
            id: 'incretins-induce-gallbladder-contraction',
            label: 'Tonic gallbladder contraction paired with sustained spasm of the sphincter of Oddi',
            explanation: 'Incorrect: gallbladder contraction and sphincter of Oddi relaxation are governed by cholecystokinin (CCK).',
          },
          {
            id: 'incretins-interdigestive-mmc-sweeper',
            label: 'Triggering interdigestive migrating motor complex waves during prolonged starvation',
            explanation: 'Incorrect: interdigestive phase III migrating motor complex waves are driven by motilin, not incretins.',
          },
        ],
      },
    },
  },
});

export const digestiveColonMicrobiotaLesson = lessonSchema.parse({
  id: 'digestive-colon-microbiota',
  revision: 1,
  questionId: 'digestive-colon-microbiota-q1',
  correctOptionId: 'butyrate-colonocyte-fuel',
  estimatedMinutes: 4,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-colon',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6',
      section: 'Chapter 23 · The Large Intestine: Colonic Absorption, Microbiota, and Defecation',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo Básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como trilhões de bactérias no cólon conseguem sintetizar vitaminas essenciais e produzir o combustível que alimenta as próprias células da nossa parede intestinal?',
      title: 'Fisiologia colônica, microbiota e reflexo da defecação',
      description: 'Analise a absorção colônica de água e eletrólitos, a fermentação de fibras em ácidos graxos de cadeia curta e o reflexo da defecação.',
      objective: 'Descrever o papel dos ácidos graxos de cadeia curta (butirato, propionato, acetato), a absorção mediada por ENaC e a mecânica esfincteriana da defecação.',
      stages: [
        {
          id: 'colonic-electrolyte-water-absorption',
          title: 'Absorção colônica de eletrólitos e desidratação fecal',
          paragraphs: [
            'O cólon recebe cerca de 1,5 a 2,0 litros de quimo líquido ileal por dia através da válvula ileocecal, desidratando o conteúdo até formar cerca de 150 a 200 gramas de fezes sólidas.',
            'A absorção apical de sódio no cólon distal é mediada por canais epiteliais de sódio (ENaC), altamente estimulados pela aldosterona circulante. O transporte ativo de Na+ para o espaço intercelular pela bomba Na+/K+-ATPase basolateral cria um gradiente osmótico que absorve água transcelular e paracelularmente, associado à secreção de potássio e bicarbonato.',
          ],
          takeaway: 'O cólon absorve água por acoplamento osmótico ao sódio via canais ENaC estimulados pela aldosterona.',
          diagram: 'kidney',
        },
        {
          id: 'gut-microbiota-and-scfa',
          title: 'Microbiota intestinal e ácidos graxos de cadeia curta (AGCC)',
          paragraphs: [
            'O cólon abriga uma densa comunidade de mais de 10¹⁴ microrganismos (predominantemente bactérias anaeróbias estritas dos filos Bacteroidetes e Firmicutes) que fermentam polissacarídeos e fibras dietéticas não digeríveis pelo intestino delgado.',
            'Essa fermentação gera ácidos graxos de cadeia curta (AGCC): acetato, propionato e butirato. O butirato atua como o principal substrato energético para os colonócitos, estimula a proliferação celular saudável e a barreira mucosa; o propionato é metabolizado no fígado na gliconeogênese e o acetato atua como substrato lipogênico periférico, além da síntese bacteriana de vitamina K e biotina.',
          ],
          takeaway: 'A microbiota fermenta fibras em AGCC; o butirato é o principal combustível metabólico dos colonócitos.',
          diagram: 'microbe',
        },
        {
          id: 'defecation-reflex-mechanics',
          title: 'O reflexo e a mecânica da defecação',
          paragraphs: [
            'Movimentos de massa em grande escala no cólon impulsionam o bolo fecal para a ampola retal. A distensão da parede retal estimula mecanorreceptores e dispara o reflexo parassimpático da defecação mediado por nervos esplâncnicos pélvicos (S2-S4).',
            'Ocorre o reflexo inibitório retoanal: o esfíncter anal interno (músculo liso involuntário) relaxa de forma reflexa. A continência é mantida pelo esfíncter anal externo (músculo estriado voluntário inervado pelo nervo pudendo) e pelo músculo puborretal; quando a defecação é voluntariamente permitida, o esfíncter externo relaxa e a manobra de Valsalva auxilia a evacuação.',
          ],
          takeaway: 'A distensão retal relaxa o esfíncter interno involuntário; a evacuação depende do relaxamento do esfíncter externo via nervo pudendo.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual ácido graxo de cadeia curta produzido pela fermentação anaeróbia da microbiota colônica é a principal fonte de energia metabólica direta para as células epiteliais do cólon (colonócitos)?',
        options: [
          {
            id: 'butyrate-colonocyte-fuel',
            label: 'Butirato (ácido butírico), substrato oxidativo preferencial dos colonócitos que mantém a integridade da barreira mucosa',
            explanation: 'Correto: o butirato fornece cerca de 70% da energia oxidativa consumida pelas células epiteliais do cólon, além de exercer atividade anti-inflamatória e inibir desacetilases de histonas.',
          },
          {
            id: 'propionate-gluconeogenesis-primary',
            label: 'Propionato, que atua exclusivamente induzindo peroxidação lipídica e apoptose da mucosa',
            explanation: 'Incorreto: o propionato é absorvido e transportado pela veia porta ao fígado, servindo de substrato para a gliconeogênese hepática.',
          },
          {
            id: 'acetate-ketone-fuel',
            label: 'Acetato, que atua como neurotransmissor parassimpático pós-ganglionar na placa motora',
            explanation: 'Incorreto: o neurotransmissor parassimpático é a acetilcolina; o acetato bacteriano é o AGCC mais abundante no plasma para lipogênese periférica.',
          },
          {
            id: 'lactate-anaerobic-waste',
            label: 'Succinato oxidado livre, que inibe os canais epiteliais de sódio (ENaC) no reto',
            explanation: 'Incorreto: o principal combustível colônico é o butirato; o sódio colônico é regulado por aldosterona nos canais ENaC.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How can trillions of symbiotic bacteria in the colon synthesize essential vitamins and forge the primary metabolic fuel powering our own gut cells?',
      title: 'Colonic physiology, gut microbiota, and the defecation reflex',
      description: 'Analyze colonic fluid and electrolyte uptake, bacterial fermentation of fiber into short-chain fatty acids (SCFAs), and the defecation reflex.',
      objective: 'Describe the biological functions of SCFAs (butyrate, propionate, acetate), ENaC-mediated sodium reclamation, and defecatory sphincter dynamics.',
      stages: [
        {
          id: 'colonic-electrolyte-water-absorption',
          title: 'Colonic electrolyte absorption and fecal compaction',
          paragraphs: [
            'The large bowel receives 1.5 to 2.0 liters of fluid ileal effluent daily across the ileocecal valve, concentrating and desorbing moisture to assemble 150 to 200 grams of compacted solid feces.',
            'Apical sodium entry in the distal colon is governed by epithelial sodium channels (ENaC), strongly upregulated by circulating adrenal aldosterone. Basolateral Na+/K+-ATPase pumping creates an osmotic gradient that drives paracellular and transcellular fluid reclamation paired with active potassium and bicarbonate secretion.',
          ],
          takeaway: 'The colon reclaims water by osmotic coupling to ENaC-mediated sodium absorption driven by aldosterone.',
          diagram: 'kidney',
        },
        {
          id: 'gut-microbiota-and-scfa',
          title: 'Gut microbiota and short-chain fatty acids (SCFAs)',
          paragraphs: [
            'The human colon houses a mutualistic ecosystem exceeding 10¹⁴ microbes (dominated by obligate anaerobes of the Bacteroidetes and Firmicutes phyla) that ferment indigestible dietary complex plant carbohydrates and resistant starches.',
            'This anaerobic fermentation yields short-chain fatty acids (SCFAs): acetate, propionate, and butyrate. Butyrate serves as the primary direct metabolic oxidative fuel for colonic epithelial cells (colonocytes), maintaining tight junctions and epithelial renewal; propionate fuels hepatic gluconeogenesis, while acetate fuels peripheral lipogenesis alongside bacterial vitamin K synthesis.',
          ],
          takeaway: 'Colonic microbiota ferment fiber into SCFAs; butyrate is the primary direct metabolic fuel for colonocytes.',
          diagram: 'microbe',
        },
        {
          id: 'defecation-reflex-mechanics',
          title: 'Defecation mechanics and sphincter reflex loops',
          paragraphs: [
            'Gastrocolic mass movements transport fecal contents into the normally empty rectal ampulla. Passive rectal wall stretch excites intrinsic stretch mechanoreceptors, igniting the parasympathetic defecation reflex via pelvic splanchnic nerves (S2–S4).',
            'This reflex initiates the rectoanal inhibitory reflex: the involuntary internal anal sphincter (smooth muscle) relaxes. Fecal continence is preserved by conscious tonic contraction of the external anal sphincter (striated muscle innervated by the somatic pudendal nerve) and puborectalis muscle sling until voluntary relaxation and Valsalva mechanics permit evacuation.',
          ],
          takeaway: 'Rectal stretch relaxes the involuntary internal sphincter; defecation proceeds once the external sphincter relaxes via the pudendal nerve.',
          diagram: 'neuron',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which short-chain fatty acid produced by anaerobic microbiota fermentation serves as the primary metabolic energy substrate for colonic epithelial cells (colonocytes)?',
        options: [
          {
            id: 'butyrate-colonocyte-fuel',
            label: 'Butyrate (butyric acid), the preferred oxidative fuel for colonocytes sustaining mucosal barrier integrity',
            explanation: 'Correct: butyrate supplies up to 70% of the total oxidative energy required by colonic epithelial cells and promotes regulatory T-cell differentiation and mucosal healing.',
          },
          {
            id: 'propionate-gluconeogenesis-primary',
            label: 'Propionate, functioning exclusively as an epithelial uncoupler that drives apoptotic sloughing',
            explanation: 'Incorrect: propionate is absorbed into the portal vein and delivered to hepatocytes as a key substrate for gluconeogenesis.',
          },
          {
            id: 'acetate-ketone-fuel',
            label: 'Acetate, acting as the primary postganglionic parasympathetic neurotransmitter in the gut',
            explanation: 'Incorrect: acetylcholine is the parasympathetic transmitter; acetate is an SCFA used for peripheral muscle and lipid metabolism.',
          },
          {
            id: 'lactate-anaerobic-waste',
            label: 'Succinate, which exerts competitive allosteric inhibition over distal colonic ENaC channels',
            explanation: 'Incorrect: colonic sodium uptake is driven by aldosterone via ENaC; butyrate is the essential colonocyte metabolic fuel.',
          },
        ],
      },
    },
  },
});
