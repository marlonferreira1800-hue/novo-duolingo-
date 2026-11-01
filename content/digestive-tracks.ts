import { lessonSchema } from '../src/contracts/learning';

export const digestiveMotilityLesson = lessonSchema.parse({
  id: 'digestive-motility',
  revision: 1,
  questionId: 'digestive-motility-enteric',
  correctOptionId: 'auerbach-motility-meissner-submucosa',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-motility',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1',
      section: 'Chapter 23 · The Digestive System: Overview of the Digestive System and Enteric Nervous System',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como o trato gastrointestinal continua empurrando o alimento de forma rítmica mesmo quando desconectado do encéfalo?',
      title: 'Motilidade e sistema nervoso entérico: controle intrínseco',
      description: 'Explore os plexos mioentérico e submucoso, o marcapasso das células de Cajal e a coordenação do peristaltismo.',
      objective: 'Diferenciar as funções do plexo mioentérico (Auerbach) e do plexo submucoso (Meissner) e descrever o reflexo peristáltico.',
      stages: [
        {
          id: 'enteric-nervous-plexuses',
          title: 'Plexos entéricos de Auerbach e Meissner',
          paragraphs: [
            'O sistema nervoso entérico (o "segundo cérebro") atua autonomamente na parede gastrointestinal por meio de duas redes neuronais integradas.',
            'O plexo mioentérico de Auerbach situa-se entre as camadas musculares circular e longitudinal, controlando o tônus e a motilidade. O plexo submucoso de Meissner controla a secreção glandular e o fluxo sanguíneo local da mucosa.',
          ],
          takeaway: 'Auerbach (mioentérico) governa motilidade motora; Meissner (submucoso) regula secreção e fluxo mucoso.',
          diagram: 'intestine',
        },
        {
          id: 'interstitial-cajal-cells',
          title: 'Células intersticiais de Cajal: o marcapasso digestivo',
          paragraphs: [
            'As células intersticiais de Cajal funcionam como marcapassos elétricos intrínsecos do trato gastrointestinal.',
            'Elas geram o ritmo elétrico básico (ondas lentas de despolarização espontânea). Quando essas ondas lentas ultrapassam o limiar, deflagram potenciais de ação em espícula que produzem contrações musculares efetivas.',
          ],
          takeaway: 'Células de Cajal determinam a frequência máxima de contração pelas ondas lentas.',
          diagram: 'intestine',
        },
        {
          id: 'peristalsis-coordination',
          title: 'O reflexo peristáltico propulsivo',
          paragraphs: [
            'A distensão mecânica do lúmen ativa neurônios sensoriais entéricos, disparando o reflexo peristáltico coordenado (lei do intestino).',
            'Ocorre contração da musculatura circular a montante do bolo alimentar (mediada por acetilcolina e substância P) associada a relaxamento a jusante (mediado por óxido nítrico e VIP), empurrando o quimo no sentido aboral.',
          ],
          takeaway: 'Peristaltismo = contração atrás do bolo e relaxamento receptivo à frente.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é a divisão funcional correta entre os dois plexos do sistema nervoso entérico na fisiologia do trato gastrointestinal?',
        options: [
          {
            id: 'auerbach-motility-meissner-submucosa',
            label: 'Plexo mioentérico (Auerbach) coordena motilidade muscular; submucoso (Meissner) regula secreção e fluxo local',
            explanation: 'Correto: Auerbach localiza-se na túnica muscular controlando o peristaltismo; Meissner situa-se na submucosa modulando secreções e circulação tecidual.',
          },
          {
            id: 'meissner-muscular-propulsion',
            label: 'Plexo submucoso (Meissner) gera ondas de contração peristáltica de alta amplitude',
            explanation: 'Incorreto: a regulação motora das camadas musculares circulares e longitudinais é atribuição do plexo mioentérico de Auerbach.',
          },
          {
            id: 'cajal-voluntary-skeletal',
            label: 'Células de Cajal inervam placas motoras somáticas voluntárias no diafragma e língua',
            explanation: 'Incorreto: células intersticiais de Cajal operam exclusivamente no músculo liso gastrointestinal autônomo involuntário.',
          },
          {
            id: 'sympathetic-increases-motility',
            label: 'Estimulação simpática aumenta as ondas peristálticas e acelera o esvaziamento gástrico',
            explanation: 'Incorreto: o sistema nervoso simpático é inibitório da motilidade e secreções gastrointestinais (resposta de luta ou fuga).',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How can the gut keep rhythmic propulsion moving smoothly even when fully severed from brain and spinal cord connections?',
      title: 'Motility and the enteric nervous system: intrinsic control',
      description: 'Explore the myenteric and submucosal plexuses, Cajal pacemaker cells, and peristaltic reflex coordination.',
      objective: 'Distinguish the functional specializations of the myenteric (Auerbach) and submucosal (Meissner) plexuses and describe the peristaltic reflex.',
      stages: [
        {
          id: 'enteric-nervous-plexuses',
          title: 'Enteric plexuses of Auerbach and Meissner',
          paragraphs: [
            'The enteric nervous system (the "second brain") acts autonomously within the gastrointestinal wall through two interconnected ganglionated networks.',
            'Auerbach’s myenteric plexus sits between the longitudinal and circular muscle layers, controlling muscular tone and motility. Meissner’s submucosal plexus regulates glandular secretions and mucosal microvascular flow.',
          ],
          takeaway: 'Auerbach (myenteric) governs smooth muscle motility; Meissner (submucosal) regulates secretion and mucosal flow.',
          diagram: 'intestine',
        },
        {
          id: 'interstitial-cajal-cells',
          title: 'Interstitial cells of Cajal: gut pacemakers',
          paragraphs: [
            'Interstitial cells of Cajal serve as the intrinsic electrical pacemakers of the gastrointestinal smooth muscle syncytium.',
            'They generate the basic electrical rhythm (slow waves of sub-threshold depolarization). When slow waves surpass threshold, spike action potentials fire and generate forceful contractions.',
          ],
          takeaway: 'Cajal cells set the underlying maximal contraction frequency via slow-wave oscillations.',
          diagram: 'intestine',
        },
        {
          id: 'peristalsis-coordination',
          title: 'Coordinated propulsive peristaltic reflex',
          paragraphs: [
            'Luminal mechanical stretch stimulates intrinsic sensory neurons, triggering the stereotypic peristaltic reflex (law of the gut).',
            'Upstream circular smooth muscle contracts (driven by acetylcholine and substance P) while downstream circular muscle relaxes (driven by nitric oxide and VIP), propelling chyme aborally.',
          ],
          takeaway: 'Peristalsis = upstream contraction behind the bolus paired with downstream receptive relaxation.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What is the correct functional division between the two interconnected plexuses of the enteric nervous system?',
        options: [
          {
            id: 'auerbach-motility-meissner-submucosa',
            label: 'Myenteric (Auerbach) coordinates muscular motility; submucosal (Meissner) controls secretions and local flow',
            explanation: 'Correct: Auerbach lies within the muscularis externa controlling contraction rhythms; Meissner is located in the submucosa directing secretory output and blood flow.',
          },
          {
            id: 'meissner-muscular-propulsion',
            label: 'Submucosal (Meissner) plexus drives propulsive high-pressure muscular peristaltic waves',
            explanation: 'Incorrect: motor coordination of circular and longitudinal muscularis layers is carried out by Auerbach’s myenteric plexus.',
          },
          {
            id: 'cajal-voluntary-skeletal',
            label: 'Cajal cells synapse on voluntary somatic motor end-plates in diaphragm and pharynx',
            explanation: 'Incorrect: interstitial cells of Cajal are embedded strictly within autonomic gastrointestinal smooth muscle.',
          },
          {
            id: 'sympathetic-increases-motility',
            label: 'Sympathetic nerve firing enhances peristaltic velocity and accelerates gastric emptying',
            explanation: 'Incorrect: sympathetic output generally inhibits gastrointestinal motility and reduces mucosal secretions (fight-or-flight response).',
          },
        ],
      },
    },
  },
});

export const digestiveStomachLesson = lessonSchema.parse({
  id: 'digestive-stomach',
  revision: 1,
  questionId: 'digestive-stomach-parietal',
  correctOptionId: 'parietal-acid-intrinsic-factor',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-stomach',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-4',
      section: 'Chapter 23 · The Stomach: Gastric Secretions and Mucosal Defense',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como o estômago consegue produzir um ácido capaz de corroer metal sem digerir suas próprias paredes celulares?',
      title: 'Secreção gástrica: células parietais, enzimas e barreira protetora',
      description: 'Analise a secreção de ácido clorídrico e fator intrínseco, a ativação do pepsinogênio e a barreira mucosa gástrica.',
      objective: 'Identificar os produtos secretores das células parietais, principais e neuroendócrinas do estômago e detalhar a barreira de muco-bicarbonato.',
      stages: [
        {
          id: 'parietal-cells-function',
          title: 'Células parietais: ácido clorídrico e fator intrínseco',
          paragraphs: [
            'As células parietais (oxínticas) das glândulas gástricas possuem a bomba H+/K+-ATPase, que transporta ativamente prótons para o lúmen, gerando pH entre 1,5 e 2,0.',
            'Além do HCl (que desnatura proteínas e esteriliza o alimento), as células parietais secretam fator intrínseco, uma glicoproteína essencial para a absorção ileal de vitamina B12.',
          ],
          takeaway: 'Célula parietal = secreta HCl (bomba de prótons) e fator intrínseco (indispensável para absorver vitamina B12).',
          diagram: 'intestine',
        },
        {
          id: 'chief-and-neuroendocrine-cells',
          title: 'Células principais e regulação por gastrina',
          paragraphs: [
            'As células principais (zimogênicas) secretam pepsinogênio inativo. No meio ácido luminal (pH < 2), o pepsinogênio é clivado em pepsina, enzima proteolítica ativa.',
            'A secreção gástrica é estimulada pela gastrina (células G antrais), acetilcolina (estímulo vagal) e histamina (células ECL), e inibida pela somatostatina (células D).',
          ],
          takeaway: 'Células principais produzem pepsinogênio ativado pelo pH ácido da luz gástrica.',
          diagram: 'intestine',
        },
        {
          id: 'gastric-mucosal-barrier',
          title: 'Barreira protetora de muco e bicarbonato',
          paragraphs: [
            'Para resistir à autodigestão e à acidez extrema, as células epiteliais superficiais secretam uma camada contínua de muco insolúvel rica em íons bicarbonato (HCO3-).',
            'Prostaglandinas locais mantêm o fluxo sanguíneo da mucosa e estimulam a secreção de bicarbonato, garantindo um microambiente com pH próximo a 7,0 junto aos enterócitos.',
          ],
          takeaway: 'Muco + bicarbonato mantêm pH neutro na superfície epitelial contra a acidez luminal.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual par de substâncias vitais é sintetizado e secretado exclusivamente pelas células parietais da mucosa gástrica?',
        options: [
          {
            id: 'parietal-acid-intrinsic-factor',
            label: 'Ácido clorídrico (HCl) e fator intrínseco',
            explanation: 'Correto: células parietais bombeiam H+ via H+/K+-ATPase produzindo o ácido gástrico e liberam fator intrínseco, sem o qual o paciente desenvolve anemia perniciosa por deficiência de B12.',
          },
          {
            id: 'chief-cells-hcl-secretion',
            label: 'Pepsinogênio proteolítico e gastrina estimuladora antral',
            explanation: 'Incorreto: o pepsinogênio é secretado pelas células principais e a gastrina pelas células G neuroendócrinas antrais.',
          },
          {
            id: 'parietal-pepsinogen-synthesis',
            label: 'Somatostatina inibitória e histamina parácrina oxíntica',
            explanation: 'Incorreto: somatostatina provém de células D e a histamina é produzida por células ECL da lâmina própria.',
          },
          {
            id: 'g-cells-bicarbonate-barrier',
            label: 'Tripsinogênio ativador e sais de bicarbonato ductal',
            explanation: 'Incorreto: tripsinogênio e bicarbonato ductal volumoso são produtos exócrinos do pâncreas.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How can the human stomach churn out acid capable of dissolving metal without digesting its own epithelial lining?',
      title: 'Gastric secretion: parietal cells, enzymes, and the mucosal barrier',
      description: 'Analyze hydrochloric acid and intrinsic factor secretion, pepsinogen activation, and the mucus-bicarbonate barrier.',
      objective: 'Identify the secretory products of gastric parietal, chief, and endocrine cells and explain the protective mucus-bicarbonate barrier.',
      stages: [
        {
          id: 'parietal-cells-function',
          title: 'Parietal cells: hydrochloric acid and intrinsic factor',
          paragraphs: [
            'Parietal (oxyntic) cells in the gastric glands express apical H+/K+-ATPases (proton pumps), which actively pump protons to generate luminal acidity down to pH 1.5–2.0.',
            'In addition to HCl (which denatures dietary proteins and kills ingested microbes), parietal cells synthesize intrinsic factor, a glycoprotein indispensable for ileal vitamin B12 uptake.',
          ],
          takeaway: 'Parietal cells = produce HCl (via proton pump) and intrinsic factor (required for B12 absorption).',
          diagram: 'intestine',
        },
        {
          id: 'chief-and-neuroendocrine-cells',
          title: 'Chief cells and neuroendocrine stimulation',
          paragraphs: [
            'Chief (zymogenic) cells synthesize inactive pepsinogen. Upon contact with luminal gastric acid (pH < 2), it is cleaved into active proteolytic pepsin.',
            'Acid secretion is synergistically stimulated by gastrin (antral G cells), acetylcholine (vagal parasympathetic postganglionics), and histamine (ECL cells), and turned off by somatostatin (D cells).',
          ],
          takeaway: 'Chief cells produce pepsinogen, which acid activates into pepsin for protein breakdown.',
          diagram: 'intestine',
        },
        {
          id: 'gastric-mucosal-barrier',
          title: 'Mucus-bicarbonate protective barrier',
          paragraphs: [
            'To survive autodigestion, superficial foveolar epithelial cells secrete an insoluble mucus gel layer laced with bicarbonate (HCO3-) ions.',
            'Locally synthesized prostaglandins preserve mucosal perfusion and stimulate bicarbonate release, maintaining a neutral microclimate of pH ~7.0 immediately over epithelial cells.',
          ],
          takeaway: 'Mucus + bicarbonate create a neutral protective boundary shield against luminal acid.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which pair of vital substances is synthesized and secreted specifically by gastric parietal (oxyntic) cells?',
        options: [
          {
            id: 'parietal-acid-intrinsic-factor',
            label: 'Hydrochloric acid (HCl) and intrinsic factor',
            explanation: 'Correct: parietal cells utilize apical H+/K+-ATPases to secrete hydrochloric acid and synthesize intrinsic factor, the absence of which leads to pernicious anemia.',
          },
          {
            id: 'chief-cells-hcl-secretion',
            label: 'Pepsinogen zymogen and antral stimulatory gastrin',
            explanation: 'Incorrect: pepsinogen is made by chief cells, while gastrin is secreted by neuroendocrine G cells in the gastric antrum.',
          },
          {
            id: 'parietal-pepsinogen-synthesis',
            label: 'Inhibitory somatostatin and paracrine mucosal histamine',
            explanation: 'Incorrect: somatostatin is released by D cells, and paracrine histamine is released by enterochromaffin-like (ECL) cells.',
          },
          {
            id: 'g-cells-bicarbonate-barrier',
            label: 'Trypsinogen zymogen and alkaline ductal bicarbonate',
            explanation: 'Incorrect: trypsinogen and large-volume alkaline bicarbonate fluid are exocrine pancreatic secretions.',
          },
        ],
      },
    },
  },
});

export const digestivePancreasBileLesson = lessonSchema.parse({
  id: 'digestive-pancreas-bile',
  revision: 1,
  questionId: 'digestive-pancreas-secretin',
  correctOptionId: 'secretin-bicarb-cck-enzymes',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-pancreas-bile',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5',
      section: 'Chapter 23 · Chemical Digestion and Absorption: Pancreatic Secretions and Bile',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como o duodeno neutraliza o quimo extremamente ácido do estômago e dissolve gorduras insolúveis?',
      title: 'Pâncreas exócrino e bile: regulação por secretina e CCK',
      description: 'Compreenda a secreção pancreática rica em bicarbonato, a liberação de zimogênios e a emulsificação de lipídios pela bile.',
      objective: 'Explicar a estimulação ductal por secretina, o papel da colecistocinina (CCK) na ejeção enzimática/biliar e a ação emulsificante dos sais biliares.',
      stages: [
        {
          id: 'pancreatic-ductal-secretion',
          title: 'Secretina e secreção aquosa de bicarbonato',
          paragraphs: [
            'Quando o quimo ácido estomacal (pH < 4,5) atinge o duodeno, as células S duodenais liberam o hormônio secretina na circulação sanguínea.',
            'A secretina estimula intensamente as células ductais do pâncreas a secretarem um grande volume de líquido aquoso rico em bicarbonato (HCO3-), neutralizando o ácido gástrico e fornecendo o pH ideal para as enzimas intestinais.',
          ],
          takeaway: 'Secretina = estimulada por ácido luminal → secreção ductal pancreática de bicarbonato alcalino.',
          diagram: 'intestine',
        },
        {
          id: 'cck-acinar-and-gallbladder',
          title: 'Colecistocinina (CCK): enzimas e contração biliar',
          paragraphs: [
            'A presença de ácidos graxos e aminoácidos no duodeno estimula as células I a secretarem colecistocinina (CCK).',
            'A CCK age nas células acinares do pâncreas estimulando a exocitose de zimogênios digestivos (tripsinogênio, lipase, amilase) e provoca contração da vesícula biliar com relaxamento do esfíncter de Oddi.',
          ],
          takeaway: 'CCK = estimulada por gordura e proteína → secreção de enzimas acinares e esvaziamento biliar.',
          diagram: 'intestine',
        },
        {
          id: 'bile-lipid-emulsification',
          title: 'Sais biliares e emulsificação lipídica',
          paragraphs: [
            'A bile produzida pelos hepatócitos e concentrada na vesícula biliar contém sais biliares anfifílicos derivados do colesterol (ácidos cólico e quenodesoxicólico).',
            'Os sais biliares fragmentam grandes glóbulos de gordura em micelas minúsculas (emulsificação), ampliando drasticamente a área de contato para ação da lipase pancreática e colipase.',
          ],
          takeaway: 'Sais biliares emulsificam lipídios em micelas, viabilizando a digestão enzimática da gordura.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual é o padrão hormonal que coordena a neutralização ácida e a digestão de gorduras no duodeno através de secretina e colecistocinina (CCK)?',
        options: [
          {
            id: 'secretin-bicarb-cck-enzymes',
            label: 'Secretina estimula secreção ductal de bicarbonato; CCK estimula enzimas acinares e contrai a vesícula biliar',
            explanation: 'Correto: a secretina (liberada pelo ácido duodenal) promove fluido rico em HCO3-, enquanto a CCK (estimulada por gorduras) promove liberação de enzimas pancreáticas e ejeção biliar.',
          },
          {
            id: 'secretin-gallbladder-contraction',
            label: 'Secretina contrai a vesícula biliar e a CCK inibe a liberação de zimogênios intestinais',
            explanation: 'Incorreto: quem estimula a contração da vesícula e relaxa o esfíncter de Oddi é a CCK, não a secretina.',
          },
          {
            id: 'bile-salts-protein-cleavage',
            label: 'Sais biliares hidrolisam diretamente ligações peptídicas no lúmen do jejuno proximal',
            explanation: 'Incorreto: os sais biliares atuam como detergentes anfipáticos emulsificando gorduras, sem qualquer atividade proteolítica intrínseca.',
          },
          {
            id: 'cck-inhibits-pancreatic-enzymes',
            label: 'CCK estimula secreção de ácido gástrico e inibe a liberação de lípase pelo pâncreas',
            explanation: 'Incorreto: a CCK estimula a secreção das enzimas digestivas pelos ácinos pancreáticos (incluindo a lipase) e atenua o esvaziamento gástrico.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How does the duodenum neutralize acidic gastric chyme and dissolve insoluble dietary fats?',
      title: 'Exocrine pancreas and bile: regulation by secretin and CCK',
      description: 'Understand pancreatic bicarbonate secretion, zymogen discharge, and bile-mediated lipid emulsification.',
      objective: 'Explain ductal bicarbonate stimulation by secretin, cholecystokinin (CCK) actions on enzymes/gallbladder, and bile salt emulsification.',
      stages: [
        {
          id: 'pancreatic-ductal-secretion',
          title: 'Secretin and alkaline bicarbonate secretion',
          paragraphs: [
            'When acidic gastric chyme (pH < 4.5) enters the duodenal bulb, mucosal S cells release the hormone secretin into the bloodstream.',
            'Secretin powerfully activates pancreatic ductal epithelial cells to secrete large volumes of alkaline bicarbonate (HCO3-) fluid, neutralizing gastric acid to provide the optimal neutral pH for pancreatic enzymes.',
          ],
          takeaway: 'Secretin = triggered by luminal acid → stimulates ductal secretion of alkaline bicarbonate.',
          diagram: 'intestine',
        },
        {
          id: 'cck-acinar-and-gallbladder',
          title: 'Cholecystokinin (CCK): enzymes and gallbladder ejection',
          paragraphs: [
            'The presence of luminal fatty acids and amino acids stimulates duodenal I cells to secrete cholecystokinin (CCK).',
            'CCK acts on pancreatic acinar cells to trigger exocytosis of digestive zymogens (trypsinogen, lipase, amylase) and drives gallbladder smooth muscle contraction while relaxing the sphincter of Oddi.',
          ],
          takeaway: 'CCK = triggered by fat and protein → drives acinar enzyme exocytosis and gallbladder contraction.',
          diagram: 'intestine',
        },
        {
          id: 'bile-lipid-emulsification',
          title: 'Bile salts and lipid emulsification',
          paragraphs: [
            'Bile synthesized continuously by hepatocytes and stored in the gallbladder contains amphipathic bile salts derived from cholesterol (cholic and chenodeoxycholic acids).',
            'Bile salts disperse large fat globules into minute mixed micelles (emulsification), exponentially expanding surface area for pancreatic lipase and colipase docking.',
          ],
          takeaway: 'Bile salts emulsify large dietary lipid droplets into micelles to enable enzymatic digestion.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'What physiological hormonal profile coordinates duodenal acid neutralization and fat digestion via secretin and cholecystokinin (CCK)?',
        options: [
          {
            id: 'secretin-bicarb-cck-enzymes',
            label: 'Secretin stimulates ductal bicarbonate release; CCK triggers acinar enzyme release and gallbladder contraction',
            explanation: 'Correct: secretin (induced by duodenal acidity) drives alkaline HCO3- secretion, while CCK (induced by fatty acids) coordinates acinar digestive enzymes and gallbladder emptying.',
          },
          {
            id: 'secretin-gallbladder-contraction',
            label: 'Secretin contracts the gallbladder while CCK inhibits intestinal zymogen release',
            explanation: 'Incorrect: gallbladder contraction and sphincter of Oddi relaxation are governed by CCK, not secretin.',
          },
          {
            id: 'bile-salts-protein-cleavage',
            label: 'Bile salts directly hydrolyze peptide bonds in the proximal jejunal lumen',
            explanation: 'Incorrect: bile salts are amphipathic biological detergents that emulsify lipids, lacking peptide hydrolytic capacity.',
          },
          {
            id: 'cck-inhibits-pancreatic-enzymes',
            label: 'CCK promotes gastric acid release while inhibiting pancreatic lipase secretion',
            explanation: 'Incorrect: CCK triggers pancreatic acinar enzyme secretion (including pancreatic lipase) and delays gastric emptying.',
          },
        ],
      },
    },
  },
});

export const digestiveLiverLesson = lessonSchema.parse({
  id: 'digestive-liver',
  revision: 1,
  questionId: 'digestive-liver-bilirubin',
  correctOptionId: 'bilirubin-glucuronyl-conjugation',
  estimatedMinutes: 3,
  xp: 10,
  status: 'demo-unreviewed',
  sectionId: 'digestive-physiology',
  sources: [
    {
      id: 'openstax-ap2e-ch23-liver',
      title: 'OpenStax Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5',
      section: 'Chapter 23 · The Liver and Gallbladder: Hepatic Functions and Bilirubin Metabolism',
    },
  ],
  translations: {
    'pt-BR': {
      courseTitle: 'Ciclo básico',
      sectionTitle: 'Fisiologia digestiva',
      hook: 'Como o fígado transforma a hemoglobina de hemácias velhas em um pigmento hidrossolúvel eliminado nas fezes e urina?',
      title: 'Fisiologia hepática: síntese proteica, metabolismo da bilirrubina e circulação entero-hepática',
      description: 'Explore a síntese hepática de albumina e fatores de coagulação, a conjugação da bilirrubina e o ciclo dos sais biliares.',
      objective: 'Descrever as funções sintéticas do fígado, as etapas da conjugação da bilirrubina com ácido glicurônico e a recirculação entero-hepática.',
      stages: [
        {
          id: 'hepatic-protein-synthesis',
          title: 'Função sintética e homeostase plasmática',
          paragraphs: [
            'O fígado é o principal centro de biossíntese do organismo humano. Os hepatócitos sintetizam a grande maioria das proteínas plasmáticas, incluindo a albumina (responsável pela pressão coloidosmótica do sangue).',
            'Eles produzem também os fatores de coagulação essenciais (fibrinogênio, protrombina e fatores VII, IX, X dependentes da vitamina K), cuja deficiência em hepatopatias graves gera diátese hemorrágica.',
          ],
          takeaway: 'Hepatócitos sintetizam albumina, fatores da cascata de coagulação e proteínas transportadoras.',
          diagram: 'intestine',
        },
        {
          id: 'bilirubin-conjugation-pathway',
          title: 'Metabolismo e conjugação da bilirrubina',
          paragraphs: [
            'A degradação do heme de hemácias senescentes pelos macrófagos gera bilirrubina não conjugada (indireta), lipossolúvel e transportada no sangue ligada à albumina.',
            'No retículo endoplasmático do hepatócito, a enzima UDP-glicuroniltransferase conjuga a bilirrubina com o ácido glicurônico. A bilirrubina conjugada (direta) torna-se hidrossolúvel e é secretada ativamente nos canalículos biliares.',
          ],
          takeaway: 'Glicuroniltransferase conjuga a bilirrubina insolúvel com ácido glicurônico, tornando-a hidrossolúvel.',
          diagram: 'intestine',
        },
        {
          id: 'enterohepatic-circulation-bile',
          title: 'Circulação entero-hepática de sais biliares',
          paragraphs: [
            'No intestino, a bilirrubina conjugada é convertida por bactérias colônicas em urobilinogênio e estercobilina (que confere cor marrom às fezes).',
            'Cerca de 95% dos sais biliares secretados são ativamente reabsorvidos no íleo terminal e retornam pela veia porta ao fígado para nova secreção, processo denominado circulação entero-hepática.',
          ],
          takeaway: '95% dos sais biliares sofrem reabsorção ativa no íleo terminal retornando ao fígado via veia porta.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Qual etapa bioquímica do metabolismo hepático converte a bilirrubina lipossolúvel indireta na sua forma direta hidrossolúvel para excreção biliar?',
        options: [
          {
            id: 'bilirubin-glucuronyl-conjugation',
            label: 'Conjugação da bilirrubina com ácido glicurônico catalisada pela UDP-glicuroniltransferase',
            explanation: 'Correto: a UDP-glicuroniltransferase adiciona resíduos de ácido glicurônico à molécula de bilirrubina nos hepatócitos, tornando-a hidrossolúvel (direta) para ser secretada na bile.',
          },
          {
            id: 'albumin-breakdown-kidneys',
            label: 'Ligação irreversível à transferrina plasmática com filtração livre nos glomérulos renais',
            explanation: 'Incorreto: a transferrina transporta ferro férrico, não bilirrubina; a bilirrubina não conjugada circula ligada à albumina e não é filtrada pelo rim.',
          },
          {
            id: 'enterohepatic-portal-excretion',
            label: 'Conversão em estercobilina diretamente no interior dos canalículos biliares intra-hepáticos',
            explanation: 'Incorreto: a estercobilina é formada pela ação da microbiota bacteriana no lúmen do intestino grosso, não no fígado.',
          },
          {
            id: 'unconjugated-water-soluble',
            label: 'Desaminação oxidativa do heme com geração de ureia e amônia livre nos sinusóides',
            explanation: 'Incorreto: o catabolismo de aminoácidos gera amônia/ureia; o heme é degradado pela heme-oxigenase gerando biliverdina e depois bilirrubina.',
          },
        ],
      },
    },
    en: {
      courseTitle: 'Basic cycle',
      sectionTitle: 'Digestive physiology',
      hook: 'How does the liver transform hemoglobin from aged red blood cells into a water-soluble pigment excreted in stool and urine?',
      title: 'Hepatic physiology: protein synthesis, bilirubin metabolism, and enterohepatic circulation',
      description: 'Explore hepatic synthesis of albumin and coagulation factors, bilirubin conjugation, and bile salt recycling.',
      objective: 'Describe liver synthetic roles, the conjugation of bilirubin with glucuronic acid, and enterohepatic bile salt recirculation.',
      stages: [
        {
          id: 'hepatic-protein-synthesis',
          title: 'Synthetic capacity and plasma homeostasis',
          paragraphs: [
            'The liver is the body’s metabolic biosynthetic hub. Hepatocytes produce the overwhelming majority of circulating plasma proteins, most notably albumin (which generates oncotic pressure).',
            'They also synthesize key clotting cascade components (fibrinogen, prothrombin, and vitamin K-dependent factors VII, IX, and X), whose deficiency in end-stage liver failure drives severe bleeding diathesis.',
          ],
          takeaway: 'Hepatocytes synthesize albumin, clotting cascade factors, and systemic carrier proteins.',
          diagram: 'intestine',
        },
        {
          id: 'bilirubin-conjugation-pathway',
          title: 'Bilirubin handling and conjugation pathway',
          paragraphs: [
            'Heme degradation from senescent erythrocytes in the reticuloendothelial system generates unconjugated (indirect) bilirubin, which is lipid-soluble and circulates bound to albumin.',
            'Within the hepatocyte smooth endoplasmic reticulum, UDP-glucuronyltransferase conjugates bilirubin with glucuronic acid to form water-soluble conjugated (direct) bilirubin, actively pumped into bile canaliculi.',
          ],
          takeaway: 'UDP-glucuronyltransferase conjugates hydrophobic bilirubin with glucuronic acid into water-soluble form.',
          diagram: 'intestine',
        },
        {
          id: 'enterohepatic-circulation-bile',
          title: 'Enterohepatic circulation of bile salts',
          paragraphs: [
            'In the distal intestine, colonic bacteria deconjugate bilirubin and reduce it into colorless urobilinogen and brown stercobilin (imparting normal stool color).',
            'Approximately 95% of secreted bile salts are actively reclaimed in the terminal ileum and delivered back to the liver via portal venous blood, a cycle termed enterohepatic circulation.',
          ],
          takeaway: '95% of secreted bile salts undergo active terminal ileal reabsorption and portal recycling.',
          diagram: 'intestine',
        },
      ],
      question: {
        type: 'multiple-choice',
        prompt: 'Which biochemical reaction within hepatocytes transforms lipophilic unconjugated bilirubin into its water-soluble direct form for biliary excretion?',
        options: [
          {
            id: 'bilirubin-glucuronyl-conjugation',
            label: 'Conjugation of bilirubin with glucuronic acid catalyzed by UDP-glucuronyltransferase',
            explanation: 'Correct: UDP-glucuronyltransferase attaches glucuronic acid molecules to lipophilic bilirubin, generating water-soluble conjugated bilirubin readily secreted into bile.',
          },
          {
            id: 'albumin-breakdown-kidneys',
            label: 'Irreversible binding to serum transferrin followed by glomerular ultrafiltration',
            explanation: 'Incorrect: transferrin transports iron; unconjugated bilirubin is bound to albumin and cannot undergo normal glomerular ultrafiltration.',
          },
          {
            id: 'enterohepatic-portal-excretion',
            label: 'Direct enzymatic cleavage into brown stercobilin within intrahepatic bile canaliculi',
            explanation: 'Incorrect: stercobilin formation is carried out by colonic bacterial enzymes in the distal bowel, not within liver canaliculi.',
          },
          {
            id: 'unconjugated-water-soluble',
            label: 'Oxidative deamination of the heme ring yielding urea and free ammonia in sinusoids',
            explanation: 'Incorrect: amino acid catabolism yields ammonia and urea; heme cleavage by heme oxygenase yields biliverdin and subsequent bilirubin.',
          },
        ],
      },
    },
  },
});
