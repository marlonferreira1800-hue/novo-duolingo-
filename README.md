# Medora

Fundação de um aplicativo de estudo para estudantes de medicina, inspirado na experiência observada do Wondering, com marca, ilustrações e conteúdo próprios. Nome provisório.

## Executar localmente

Requer Node.js >=22.13; desenvolvimento validado com Node 24.19.0 e npm 11.17.0.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Não é necessário banco, chave de IA ou login. O servidor de desenvolvimento habilita a demonstração automaticamente.

## O que já funciona

- Shell desktop e navegação inferior mobile, com trilha visual de aprendizado.
- Uma lição completa de débito cardíaco: três etapas, diagramas originais, questão, explicação de cada alternativa e conclusão.
- Interface e conteúdo em português brasileiro e inglês; preferências independentes.
- Progresso por versão da lição, retomada, conclusão e XP único salvos no navegador.
- Revisão manual desbloqueada após conclusão, sem XP adicional; não é ainda agendamento FSRS.
- Biblioteca com busca e entrada na lição, além de perfil com métricas locais.
- Tratamento de dados salvos incompatíveis e indisponibilidade de armazenamento.

Criar e Canvas estão desabilitados e identificados como futuros. Não há geração por IA, tutor, backend, autenticação, áudio, vídeo, sincronização entre dispositivos ou conteúdo médico aprovado. O avanço entre abas não é uma sincronização em tempo real nem transação de banco; gravações preservam conclusões já observadas.

## Arquitetura AI-native

O projeto possui agora um núcleo de IA no servidor, não apenas instruções para agentes: workflow de rascunho de plano de estudo, provider port, prompt/schema/evidências versionados, validação, limites técnicos e metadados de execução. Detalhes e limites em [docs/AI-NATIVE.md](docs/AI-NATIVE.md).

O adapter disponível é uma **fixture offline explícita**, não um modelo gerativo. O modo live falha como não configurado; não há endpoint público nem integração do botão Criar. Saídas são sempre rascunhos sem aprovação médica. Não há custo de API ou envio de dados a fornecedor nesta etapa.

```sh
npm run ai:eval
npm run validate
```

AGENTS.md, contratos e [workflow de desenvolvimento](docs/coordination/WORKFLOW.md) orientam múltiplos agentes. [.github/workflows/ci.yml](.github/workflows/ci.yml) define validação futura no GitHub; não foi executada como CI hospedada nesta entrega.

## Git e armazenamento local

Código e histórico Git ficam em `C:\Users\marlo\Downloads\Startup`. Há commits locais para os incrementos verificados; nenhum remote ou push foi configurado. `.gitignore` exclui dependências, builds, segredos e referências específicas da sua sessão autenticada. Essas referências privadas continuam no computador, mas não são necessárias para executar os testes.

**Git local não é backup externo.** Um remoto privado ou outro destino de backup exige configuração e autorização separadas.

## Conteúdo médico

**Protótipo para desenvolvimento/revisão, não para decisões clínicas.** O conteúdo é demonstrativo e não recebeu revisão médica. Fonte consultada: OpenStax, Anatomy and Physiology 2e, [19.4 Cardiac Physiology](https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology). Os textos e diagramas do protótipo são próprios; a referência não equivale a aprovação editorial ou clínica.

`npm run build` gera a aplicação. Ao executar `npm start`, o conteúdo médico fica bloqueado por padrão em produção. Para uma prévia controlada, definir explicitamente a variável de servidor `ENABLE_MEDICAL_DEMO=true` e reiniciar. Isso não aprova o conteúdo, não oferece controle de acesso nem torna o aplicativo pronto para publicação. Consulte `.env.example`. Não usar essa flag para uma implantação pública sem revisão.

Gabaritos são parte das fixtures do cliente nesta fase; o protótipo não protege avaliações nem dados contra manipulação de localStorage. A etapa de backend deve mover autorização, gabaritos, recompensas e publicação para o servidor.

## Validação

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```

Os testes E2E usam Google Chrome instalado, viewport desktop 1366×900 e viewport mobile 390×844. Iniciam e encerram automaticamente servidores de teste em 127.0.0.1:3100 e :3101, com demonstração habilitada e bloqueada respectivamente. Faça build antes do E2E. Não usam a conta Wondering, serviços de IA ou dados reais de pacientes. Capturas ficam em `test-results/` (ignorado pelo Git). Testes em aparelho físico ainda são necessários.

## Checkpoint AI-native executado

- `npm run validate`: TypeScript, lint, 134 testes unitários (50 de IA), build e 12 E2E aprovados.
- `npm run ai:eval`: 50 avaliações técnicas offline aprovadas, sem chamadas a modelo real.
- CI declarativa adicionada; execução hospedada ainda não realizada. Não houve validação médica ou live provider.

## Checkpoint inicial executado

- TypeScript, lint e build aprovados.
- 84 testes unitários aprovados.
- 12 testes E2E aprovados: Chrome desktop/mobile, fluxo completo em pt-BR e en, retomada, erro de armazenamento, busca, XP idempotente e gate de produção.
- Capturas desktop/mobile inspecionadas; aparelho físico, leitor de tela, revisão médica e backend ainda não validados.
- Conteúdo e testes foram produzidos em tarefas de agentes com arquivos exclusivos; integração centralizada pelo coordenador.

## Estrutura

```text
content/                    Lições bilíngues e fontes
src/app/                    Entrada Next.js, layout e estilos globais
src/contracts/              Schemas e contratos compartilhados
src/ai/                     Workflow server-only, prompts, evidência e providers
src/content/                Política de acesso à demonstração
src/data/                   Adaptador de progresso local
src/features/learning/      Trilha, leitor, diagramas e regras
src/features/shell/         Navegação e controles de idioma
src/i18n/                   Mensagens pt-BR/en
src/ui/                     Ilustração original
tests/                      Contratos, domínio, persistência, AI evals e E2E
docs/                       ADRs e coordenação AI-native
.github/workflows/          Validação contínua declarativa
research/wondering/          Referências e planejamento
```

Arquitetura e próximos passos: [ARQUITETURA.md](ARQUITETURA.md). Regras para agentes: [AGENTS.md](AGENTS.md). Plano de produto: [MEDICINA.md](research/wondering/MEDICINA.md).
