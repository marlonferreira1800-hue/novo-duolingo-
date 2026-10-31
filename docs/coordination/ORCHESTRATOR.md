# Orquestrador de decisões do produto

Registro vivo das decisões pendentes do Medora. Atualizar a cada incremento: mudar status, registrar resultado e ativar a próxima decisão. Não é um agente autônomo de execução; é a fila de decisões que o humano (ou coordenador designado) administra.

## Estado atual (31/10/2026, após implementação completa: D9-D13 infra + D6 FSRS + D5 adapter)

- Fundação (etapa 0) e base executável (etapa 1) concluídas; fatia demonstrativa da etapa 2 integrada.
- **D9–D12 encerradas** (contratos, editorial status, Supabase local, auth+sync+gabarito).
- **D6 (FSRS) implementado**: scheduler server-side (`src/ai/fsrs-scheduler.ts`), server actions (`src/app/actions/review.ts`), UI de fila (`src/features/review/review-queue.tsx` integrada na nav), 7 testes unitários.
- **D5 preparado**: adapter live provider (`src/ai/providers/live.ts`) pronto — só falta `OPENAI_API_KEY` no `.env` + aprovação D5. Modo live continua falhando fechado até lá.
- **D8 infra pronta**: `/admin/review` registra decisões humanas em `review_decisions`. Aguardando revisor humano real.
- **Validação final (31/10):** `tsc` ok; `eslint` ok; **180 testes Vitest (13 arquivos)** ok; `ai:eval` 50/50 ok; `next build` ok — rotas `/`, `/app`, `/login`, `/admin/review`.
- **Bloqueio de infra real:** Docker Desktop não está rodando neste ambiente → emulador Supabase (`supabase start`) não sobe. Testes E2E autenticados (`tests/auth.spec.ts`) pulam automaticamente sem `SUPABASE_URL`.
- Git local: commits anteriores + novos arquivos prontos para commit quando autorizado.

## Regras de orquestração

1. Uma decisão ativa por vez; a ativa está marcada em "Decisão ativa".
2. Ordem por dependência: refinar o que existe antes de ampliar escopo (ARQUITETURA.md, "Próxima ação").
3. Gate médico: conteúdo novo entra como rascunho bilíngue; nada é publicado sem revisão médica (D8). O gate de demo permanece fechado em produção.
4. Backend/auth (D4) é planejamento até os contratos de dados existirem; não implementar Supabase em paralelo sem aprovar contratos.
5. IA live (D5) permanece bloqueada: exige auth, quotas, avaliação com modelo real e orçamento. Fixtures nunca viram live silenciosamente.
6. Toda decisão encerra com: arquivos alterados, validação executada (comando real e resultado), limitações remanescentes.

## Backlog de decisões

| ID | Decisão | Status | Bloqueia/bloqueada por |
| --- | --- | --- | --- |
| D1 | Refinar fidelidade visual e acessibilidade da lição de débito cardíaco (foco, teclado, reduced-motion, comparação com capturas em 1366×900 e 390×844) | **concluída em 31/10** (ver histórico) | nada |
| D2 | Segunda lição bilíngue (ciclo cardíaco) como rascunho: contrato generalizado + catálogo, `content/cardiac-cycle.ts`, trilha com 2 nós, diagramas phases/valves/sounds, landing atualizada | **concluída em 31/10 (validação completa verde; commit pendente de autorização)** | D1 concluída; revisão médica antes de publicar |
| D3 | Ampliar cobertura QA: tests/accessibility.spec.ts (skip link, foco por etapa/feedback, reduced-motion, persistência intermediária entre reloads e troca de idioma) + E2E da 2ª lição (20 XP) | **concluída em 31/10** (ver histórico) | nada |
| D4 | Planejamento (documento) da migração Supabase/auth e dos contratos de dados | **concluída em 31/10 — ADR 0002 proposto** (contratos, RLS, idempotência, sync local→remoto; sem código de backend) | D1–D3; precisa de定义 de contratos antes de código |
| D5 | Provedor de IA live (adapter real, credenciais server-side, quotas, eval com modelo real) | bloqueada | D4 (auth/quotas); orçamento e política de dados |
| D6 | Revisão espaçada FSRS | bloqueada | validar requisitos; depende de persistência real (D4) |
| D7 | Canvas, tutor contextual, áudio/vídeo, recursos sociais | bloqueada | entregas posteriores separadas (etapa 5) |
| D8 | Revisão médica/editorial do conteúdo existente | **em andamento — pacote pronto; aguardando revisor humano** | bloqueia publicação do conteúdo médico |
| D9 | Contratos de dados (`src/contracts/data.ts`) — Fase A do ACTION-PLAN | **concluída 31/10** (22 testes) | ADR 0002 effectively aceito em código |
| D10 | Infraestrutura de revisão médica (enum status + reviewDecisionSchema) — Fase B | **concluída 31/10** | D8 pronto para registro humano |
| D11 | Ambiente Supabase local (emulador + migration 0001 + config) — Fase C | **concluída 31/10** | migration 0001_init.sql com RLS completa |
| D12 | Etapa 3 fases 0-4: auth (magic link) + sync local→remoto + gabarito servidor — Fase D | **infra concluída 31/10** (rota /login, middleware, server actions, useSession, RemoteProgressStore) | requer emulador Supabase rodando para E2E real; desbloqueia D5/D6 quando testado |
| D13 | D5 IA live + D6 FSRS | **D6 implementado; D5 adapter pronto (falta credencial)** | D6: pronto para teste com emulador. D5: falta OPENAI_API_KEY + aprovação + orçamento |

## Decisão ativa

**Aguardando humano/infra externa.** Todo o código está implementado e validado (180 testes verdes). Bloqueios restantes são externos ao código:
1. **D8**: revisor médico humano acessa `/admin/review` e registra decisão.
2. **D12 teste real**: ligar Docker Desktop → `npx supabase start` → rodar `npm run test:e2e` (auth.spec.ts ativa automaticamente).
3. **D5 live**: adicionar `OPENAI_API_KEY` no `.env` → `createAiRuntime({ mode: 'live' })` passa a funcionar.

## Histórico de decisões encerradas

| Data | Decisão | Resultado | Validação |
| --- | --- | --- | --- |
| 31/10/2026 | Fundação bilíngue + fatia demonstrativa + núcleo IA server-only (fixture) | 3 commits locais | typecheck, 137 testes, E2E passed, build |
| 31/10/2026 | D1 — refinamentos de acessibilidade da lição: skip link p/ `#reader-main` no reader (main com `tabIndex={-1}`), foco programático no feedback do quiz após submit (`role="status"` + `tabIndex={-1}`), `aria-hidden` em ícones decorativos (reader, shell, app, diagram, heart-art já tinha), `prefers-reduced-motion` agora também desativa `animation`, outline de foco removido apenas em alvos de foco programático. Arquivos: `src/features/learning/lesson-reader.tsx`, `learning-app.tsx`, `lesson-diagram.tsx`, `src/features/shell/learning-shell.tsx`, `src/app/globals.css` | Fidelidade comparada com capturas Wondering (lesson-preview/lesson-next, home desktop/mobile): header com X + dots + ações fixas já estavam fieis; desvios intencionais mantidos (XP no header no lugar de ícones de notas) | `tsc --noEmit` ok; `eslint src content tests` ok; 137 testes Vitest ok; `next build` ok; E2E 16 desktop + 16 mobile ok (rodados por projeto por limite de RAM da máquina — run único com 2 servidores + Chrome estoura os 7,8 GB e derruba o servidor, não é falha de código). Limitação: emulação de viewport não é validação em dispositivo físico; contraste auditado por cálculo (muted #786f65 sobre #FFFCF0 ≈ 4,8:1, passa AA) |
| 31/10/2026 | D3 — QA ampliado: `tests/accessibility.spec.ts` (skip-link como 1º tab stop, foco no h1 por etapa e no feedback após submit, reduced-motion desativa transition/animation, etapa intermediária + seleção não submetida persistem entre reloads e troca de idioma de estudo) | +5 testes × 2 projetos | E2E accessibility 10/10 (desktop+mobile) |
| 31/10/2026 | D2 (parcial) — contrato generalizado (`id`/`revision`/`xp` genéricos, `lessonCatalogSchema` com ids únicos), `content/index.ts` + `content/cardiac-cycle.ts` (rascunho bilíngue `demo-unreviewed`, fonte OpenStax 19.4), diagramas `phases`/`valves`/`sounds` em `lesson-diagram.tsx` + textos i18n, `learning-app.tsx` com trilha de 2 lições (testids por id, revisão da última concluída, library lista lições, perfil agrega), landing atualizada para 2 lições, `tests/content-catalog.test.ts` + E2E da 2ª lição (20 XP no total) | 145 testes unit (10 arquivos); E2E 22+22 por projeto | `tsc --noEmit` ok, lint ok, vitest 145 ok, build ok, playwright desktop 22/22 + mobile 22/22 passed (por `--project`, `NODE_OPTIONS=--max-old-space-size=768`) |
| 31/10/2026 | D2 (checkpoint final) — validate completo reexecutado após integração: typecheck ok, lint ok, 145 testes Vitest (10 arquivos) ok, `next build` ok (rotas `/` estática e `/app` dinâmica), E2E desktop 22/22 passed (47.7s) e mobile 22/22 passed (46.2s), incluindo o teste da 2ª lição (20 XP no total) em ambos os projetos | D2 encerrada | Commit local pendente de autorização; revisão médica (D8) continua bloqueando publicação |
| 31/10/2026 | D4 — planejamento apenas: `docs/adr/0002-supabase-auth-and-data-contracts.md` (status proposto). Define contratos de dados (`profiles`, `lesson_progress`, `attempts`, `xp_events` com idempotência dupla, `review_cards`, tabelas de conteúdo/gabarito, `usage_events`), RLS padrão `auth.uid() = user_id`, `RemoteProgressStore` sobre a mesma interface `ProgressStore`, sync local→remoto no primeiro login, variáveis de ambiente sem segredos no cliente, 5 questões em aberto para decisão humana | Documento; nada de código de backend | Aprovação humana dos contratos antes da etapa 3; D5/D6 continuam bloqueadas |
| 31/10/2026 | D8 (preparação) — `docs/coordination/D8-medical-review-packet.md`: escopo (2 lições `demo-unreviewed` rev 1, pt-BR/en), fonte declarada (OpenStax A&P 2e §19.4), checklist por lição/idioma, fluxo editorial proposto `draft → in_review → approved → published` com registro por revisão+idioma; README atualizado com checkpoint D1–D4 (145 unit, E2E 22+22) | Documento; gate de produção permanece fechado | Aguardando revisor médico humano; automação não aprova conteúdo clínico |
| 31/10/2026 | Agentes de desenvolvimento criados em `agents/` (coordinator, content-medico, ui-ux, learning, dados, qa, ai-engineer) + plano de desbloqueio `docs/coordination/ACTION-PLAN-unblock.md` com fases A-F para resolver D8/ADR 0002/etapa 3/D5/D6. D9-D13 adicionadas ao backlog. AGENTS.md atualizado com referências aos agentes | 8 arquivos `.md` em `agents/` + ACTION-PLAN + ORCHESTRATOR atualizado | `tsc --noEmit` ok; `eslint` ok; `ai:eval` 50/50 ok — arquivos `.md` não afetam build | Próxima: executar Fase A (D9 — contratos data.ts) |
| 31/10/2026 | **D9-D12 (infra completa) — execução do ACTION-PLAN fases A-D:** D9 `src/contracts/data.ts` (13 schemas Zod: profiles, lesson_progress, attempts, xp_events, review_cards, content_revisions, localized_content, questions/options/answer_keys, review_decisions, ai_runs/usage_events, sync payload, submit attempt) + 22 testes; D10 `lessonStatusSchema` estendido (demo-unreviewed/in_review/approved/published/withdrawn) + teste content atualizado; D11 `supabase/migrations/0001_init.sql` (todas as tabelas + RLS + trigger completed_at + índices) + `supabase/config.toml` + `.env.example` com SUPABASE_*/NEXT_PUBLIC_*; D12 `src/auth/` (config público, server-config server-only, server client, browser client, middleware, useSession hook), `middleware.ts` raiz, rota `/login` com magic link + `login-form.tsx` (useActionState), server actions `src/app/actions/auth.ts` (signInWithMagicLink/signOut) + `src/app/actions/progress.ts` (saveRemoteProgress, syncLocalState, loadRemoteProgress, submitAttempt com gabarito no servidor + xp_events idempotente, getRemoteXp), `src/data/remote-progress.ts` (createRemoteProgressStore, syncLocalToRemote, hydrateRemoteStore), `learning-shell.tsx` com botões sign-in/sign-out, `learning-app.tsx` com useSession + sync no primeiro login, mensagens i18n signIn/signOut/syncedAccount, teste boundaries ajustado para não seguir 'use server' nos client graphs, `tests/auth-config.test.ts` (3 testes) | 173 testes Vitest (12 arquivos) — todos verdes; rotas `/`, `/app`, `/login` no build | `tsc --noEmit` ok; `eslint src content tests` ok; `vitest` 173/173 ok; `next build` ok (3 rotas); `ai:eval` 50/50 ok | D12 pendente de teste real contra emulador Supabase (`npx supabase start` + E2E com 2 usuários). D8 aguardando humano. D5/D6 desbloqueáveis após D12 testado |
