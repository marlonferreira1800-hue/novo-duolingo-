import type { Locale } from '@/contracts/learning';

type ThreeItems<T> = readonly [T, T, T];
type TitledCopy = { title: string; description: string };

export type LandingMessages = {
  skipToContent: string;
  storageWarning: string;
  nav: {
    label: string;
    howItWorks: string;
    demo: string;
    faq: string;
    localeLabel: string;
    ctaEnabled: string;
    ctaDisabled: string;
    backToTop: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    ctaEnabled: string;
    ctaDisabled: string;
    secondaryCta: string;
    availableNote: string;
    unavailableNote: string;
    chips: ThreeItems<string>;
  };
  demo: {
    eyebrow: string;
    title: string;
    description: string;
    lessonCount: string;
    duration: string;
    languages: string;
    sourceLabel: string;
    sourceTitle: string;
    sourceSection: string;
    notice: string;
    cta: string;
    unavailableTitle: string;
    unavailableDescription: string;
    illustrationTitle: string;
    illustrationCaption: string;
    trailLabels: ThreeItems<string>;
  };
  how: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ThreeItems<TitledCopy>;
  };
  languages: {
    eyebrow: string;
    title: string;
    description: string;
    uiLabel: string;
    studyLabel: string;
    names: Record<Locale, string>;
    independenceNote: string;
    studyNote: string;
  };
  limits: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly [TitledCopy, TitledCopy, TitledCopy, TitledCopy];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly { question: string; answer: string }[];
  };
  closing: {
    eyebrow: string;
    title: string;
    description: string;
  };
  footer: {
    tagline: string;
    notice: string;
    navLabel: string;
  };
};

const pt: LandingMessages = {
  skipToContent: 'Pular para o conteúdo',
  storageWarning: 'O armazenamento do navegador está indisponível. Sua preferência de idioma e seu progresso ficam apenas nesta sessão, enquanto a página estiver aberta.',
  nav: {
    label: 'Navegação principal',
    howItWorks: 'Como funciona',
    demo: 'A demonstração',
    faq: 'Dúvidas',
    localeLabel: 'Idioma da página',
    ctaEnabled: 'Experimentar',
    ctaDisabled: 'Ver demo',
    backToTop: 'Medora — voltar ao início',
  },
  hero: {
    eyebrow: 'UM ESPAÇO PARA ESTUDAR MEDICINA',
    titleStart: 'Um pouco de',
    titleHighlight: 'medicina.',
    titleEnd: 'Todos os dias.',
    description: 'Abra espaço para uma ideia. Estude um conceito, teste o que entendeu e volte a ele no seu tempo.',
    ctaEnabled: 'Experimentar a demo',
    ctaDisabled: 'Conhecer o protótipo',
    secondaryCta: 'Como funciona',
    availableNote: 'Duas lições demonstrativas. Sem criar conta.',
    unavailableNote: 'Demonstração indisponível neste ambiente',
    chips: ['Aprender', 'Recordar', 'Conectar ideias'],
  },
  demo: {
    eyebrow: 'UM COMEÇO PEQUENO, DE PROPÓSITO',
    title: 'Fisiologia cardiovascular',
    description: 'Duas lições demonstrativas de fisiologia cardiovascular para conhecer a experiência: leitura em etapas, exercício com feedback e revisão manual.',
    lessonCount: '2 lições',
    duration: '≈ 6 min',
    languages: 'pt-BR + en',
    sourceLabel: 'Fonte da demonstração',
    sourceTitle: 'OpenStax · Anatomy and Physiology 2e',
    sourceSection: 'Seção 19.4 · Cardiac Physiology (em inglês)',
    notice: 'Conteúdo demonstrativo, sem revisão médica. Não usar em decisões clínicas.',
    cta: 'Abrir a demonstração',
    unavailableTitle: 'Demonstração indisponível neste ambiente',
    unavailableDescription: 'O acesso às lições está bloqueado aqui. Esta página apresenta apenas a proposta e o escopo do protótipo, sem exibir o conteúdo médico.',
    illustrationTitle: 'UM CAMINHO, EM MINIATURA',
    illustrationCaption: 'Ilustração da experiência · não interativa',
    trailLabels: ['Estudar', 'Responder', 'Revisar'],
  },
  how: {
    eyebrow: 'COMO FUNCIONA',
    title: 'Um conceito por vez. Tempo para entender.',
    description: 'Na demonstração, o caminho é simples: lições curtas, uma tentativa em cada uma e uma oportunidade de voltar ao que estudou.',
    steps: [
      {
        title: 'Estude um conceito.',
        description: 'Percorra uma leitura curta, em etapas, com esquemas didáticos próprios. Sem precisar abrir um curso inteiro.',
      },
      {
        title: 'Responda e confira.',
        description: 'Faça o exercício da lição e leia o feedback da sua resposta. Um momento para conferir o que entendeu.',
      },
      {
        title: 'Volte para recordar.',
        description: 'Depois de concluir, retome a prática de revisão quando quiser. Você decide quando voltar; não há agendamento automático.',
      },
    ],
  },
  languages: {
    eyebrow: 'DOIS IDIOMAS. ESCOLHAS INDEPENDENTES.',
    title: 'Navegue em português. Estude em inglês. Ou vice-versa.',
    description: 'A interface e a lição estão disponíveis em pt-BR e inglês. O idioma da página não precisa ser o idioma do seu estudo.',
    uiLabel: 'Idioma da interface',
    studyLabel: 'Idioma de estudo atual',
    names: { 'pt-BR': 'Português (Brasil)', en: 'Inglês' },
    independenceNote: 'Trocar o idioma aqui muda só a interface. Seu estudo, suas conclusões e seu XP continuam como estavam.',
    studyNote: 'O idioma de estudo é escolhido separadamente dentro da demonstração, quando disponível. A tradução não muda unidades nem contexto clínico.',
  },
  limits: {
    eyebrow: 'O PROTÓTIPO, SEM LETRAS MIÚDAS',
    title: 'Um recorte para experimentar. Não uma promessa de tudo.',
    description: 'Medora é um protótipo educacional local. Estes são os limites da experiência atual.',
    items: [
      {
        title: 'Duas lições, não um catálogo amplo.',
        description: 'Há duas lições demonstrativas de fisiologia cardiovascular (débito cardíaco e ciclo cardíaco). Biblioteca e perfil mostram apenas a experiência local desse recorte.',
      },
      {
        title: 'No navegador, não na nuvem.',
        description: 'Não há login nem sincronização entre dispositivos. Limpar os dados do navegador remove o progresso salvo.',
      },
      {
        title: 'Revisão no seu tempo.',
        description: 'A prática é retomada manualmente após a conclusão. Não há algoritmo de repetição espaçada ou calendário de revisão.',
      },
      {
        title: 'Sem aprovação médica ou IA ao vivo.',
        description: 'O conteúdo ainda não tem revisão médica. Não há tutor, geração por IA integrada ou Canvas nesta experiência.',
      },
    ],
  },
  faq: {
    eyebrow: 'ANTES DE COMEÇAR',
    title: 'Algumas dúvidas, respondidas.',
    items: [
      {
        question: 'Preciso criar uma conta?',
        answer: 'Não. Quando a demonstração está habilitada, você pode abrir as lições sem cadastro. Este protótipo não tem login; o perfil é apenas local.',
      },
      {
        question: 'Onde ficam meu progresso e minhas preferências?',
        answer: 'No armazenamento local deste navegador, quando disponível. Eles não são sincronizados com uma conta ou outro dispositivo. Limpar os dados do navegador apaga esse registro. Se o armazenamento estiver indisponível, as alterações duram apenas nesta sessão, enquanto a página estiver aberta.',
      },
      {
        question: 'O conteúdo já passou por revisão médica?',
        answer: 'Não. As lições são demonstrativas e ainda não foram revisadas por um profissional médico. A fonte indicada permite consultar a referência, mas não equivale a aprovação médica. Medora não deve ser usado para decisões clínicas ou orientação a pacientes. A demonstração pode estar bloqueada neste ambiente.',
      },
      {
        question: 'Há um tutor ou uma IA gerando minhas lições?',
        answer: 'Não há IA ao vivo, tutor ou geração integrada ao aplicativo. A fundação técnica de IA usa uma fixture offline explícita, apenas no servidor, e não faz parte desta experiência de estudo. Isso não representa validação de um modelo real.',
      },
      {
        question: 'Posso separar o idioma da página do idioma de estudo?',
        answer: 'Sim. O seletor desta página altera somente a interface. O idioma de estudo é uma preferência independente, escolhida dentro da demonstração quando disponível. Trocar a interface não reinicia lições, não altera suas conclusões e não concede nem remove XP. As traduções não mudam as unidades ou o contexto clínico.',
      },
    ],
  },
  closing: {
    eyebrow: 'UM CONCEITO DE CADA VEZ',
    title: 'Um pouco já é um começo.',
    description: 'Conheça o recorte atual do Medora, com lições curtas e espaço para voltar a elas.',
  },
  footer: {
    tagline: 'Um pouco de medicina. Todos os dias.',
    notice: 'Protótipo educacional local · sem revisão médica · não destinado ao uso clínico.',
    navLabel: 'Links do rodapé',
  },
};

const en: LandingMessages = {
  skipToContent: 'Skip to content',
  storageWarning: 'Browser storage is unavailable. Your language preference and progress stay only in this session, while the page remains open.',
  nav: {
    label: 'Main navigation',
    howItWorks: 'How it works',
    demo: 'The demo',
    faq: 'FAQ',
    localeLabel: 'Page language',
    ctaEnabled: 'Try demo',
    ctaDisabled: 'View demo',
    backToTop: 'Medora — back to top',
  },
  hero: {
    eyebrow: 'A SPACE TO STUDY MEDICINE',
    titleStart: 'A little',
    titleHighlight: 'medicine.',
    titleEnd: 'Every day.',
    description: 'Make room for an idea. Study a concept, check your understanding, and return to it in your own time.',
    ctaEnabled: 'Try the demo',
    ctaDisabled: 'Meet the prototype',
    secondaryCta: 'How it works',
    availableNote: 'Two demonstration lessons. No account needed.',
    unavailableNote: 'Demo unavailable in this environment',
    chips: ['Learn', 'Recall', 'Connect ideas'],
  },
  demo: {
    eyebrow: 'A SMALL START, BY DESIGN',
    title: 'Cardiovascular physiology',
    description: 'Two cardiovascular physiology demonstration lessons to explore the experience: step-by-step reading, an exercise with feedback, and manual review.',
    lessonCount: '2 lessons',
    duration: '≈ 6 min',
    languages: 'pt-BR + en',
    sourceLabel: 'Demo source',
    sourceTitle: 'OpenStax · Anatomy and Physiology 2e',
    sourceSection: 'Section 19.4 · Cardiac Physiology (in English)',
    notice: 'Demonstration content, not medically reviewed. Not for clinical decisions.',
    cta: 'Open the demo',
    unavailableTitle: 'Demo unavailable in this environment',
    unavailableDescription: 'Access to the lessons is blocked here. This page only describes the prototype and its scope, without displaying medical content.',
    illustrationTitle: 'A PATH, IN MINIATURE',
    illustrationCaption: 'Illustration of the experience · not interactive',
    trailLabels: ['Study', 'Answer', 'Review'],
  },
  how: {
    eyebrow: 'HOW IT WORKS',
    title: 'One concept at a time. Room to understand.',
    description: 'The demo keeps the path simple: short lessons, one attempt in each, and an opportunity to return to what you studied.',
    steps: [
      {
        title: 'Study one concept.',
        description: 'Move through a short reading in stages, with original learning diagrams. No need to open an entire course.',
      },
      {
        title: 'Answer and reflect.',
        description: 'Try the lesson’s exercise and read the feedback on your answer. Take a moment to check what you understood.',
      },
      {
        title: 'Return to recall.',
        description: 'Once you finish, revisit the review practice whenever you like. You decide when to return; there is no automatic scheduling.',
      },
    ],
  },
  languages: {
    eyebrow: 'TWO LANGUAGES. INDEPENDENT CHOICES.',
    title: 'Browse in Portuguese. Study in English. Or the other way around.',
    description: 'The interface and lesson are available in Brazilian Portuguese and English. Your page language does not have to be your study language.',
    uiLabel: 'Interface language',
    studyLabel: 'Current study language',
    names: { 'pt-BR': 'Portuguese (Brazil)', en: 'English' },
    independenceNote: 'Switching languages here only changes the interface. Your study language, completions, and XP stay as they were.',
    studyNote: 'Study language is chosen separately inside the demo, when available. Translation does not change units or clinical context.',
  },
  limits: {
    eyebrow: 'THE PROTOTYPE, WITHOUT THE FINE PRINT',
    title: 'A small experience to try. Not a promise of everything.',
    description: 'Medora is a local educational prototype. These are the limits of the current experience.',
    items: [
      {
        title: 'Two lessons, not a broad catalogue.',
        description: 'There are two cardiovascular physiology demonstration lessons (cardiac output and the cardiac cycle). The library and profile only reflect this small, local experience.',
      },
      {
        title: 'In your browser, not the cloud.',
        description: 'There is no login or cross-device sync. Clearing browser data removes your saved progress.',
      },
      {
        title: 'Review in your own time.',
        description: 'Review practice is opened manually after completion. There is no spaced-repetition algorithm or review calendar.',
      },
      {
        title: 'No medical approval or live AI.',
        description: 'The content has not been medically reviewed. There is no tutor, integrated AI generation, or Canvas in this experience.',
      },
    ],
  },
  faq: {
    eyebrow: 'BEFORE YOU BEGIN',
    title: 'A few questions, answered.',
    items: [
      {
        question: 'Do I need to create an account?',
        answer: 'No. When the demo is enabled, you can open the lessons without signing up. This prototype has no login; the profile is local only.',
      },
      {
        question: 'Where are my progress and preferences stored?',
        answer: 'In this browser’s local storage, when available. They are not synced with an account or another device. Clearing browser data deletes the record. If storage is unavailable, changes last only for this session, while the page remains open.',
      },
      {
        question: 'Has the content been medically reviewed?',
        answer: 'No. The lessons are demonstration content and have not been reviewed by a medical professional. The listed source lets you inspect the reference, but it is not medical approval. Medora must not be used for clinical decisions or patient guidance. The demo may be blocked in this environment.',
      },
      {
        question: 'Is a tutor or AI generating my lessons?',
        answer: 'There is no live AI, tutor, or generation integrated into the app. The technical AI foundation uses an explicit offline fixture, on the server only, and is not part of this study experience. This does not validate a real model.',
      },
      {
        question: 'Can I choose different page and study languages?',
        answer: 'Yes. The selector on this page only changes the interface. Study language is an independent preference, chosen inside the demo when available. Changing the interface does not restart lessons, alter completions, or grant or remove XP. Translations do not change units or clinical context.',
      },
    ],
  },
  closing: {
    eyebrow: 'ONE CONCEPT AT A TIME',
    title: 'A little is a beginning.',
    description: 'Explore Medora’s current scope, with short lessons and room to come back to them.',
  },
  footer: {
    tagline: 'A little medicine. Every day.',
    notice: 'Local educational prototype · not medically reviewed · not for clinical use.',
    navLabel: 'Footer links',
  },
};

export const landingMessages: Record<Locale, LandingMessages> = { 'pt-BR': pt, en };
