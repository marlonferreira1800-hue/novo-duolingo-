# Orquestrador de decisões do produto

Registro vivo das decisões pendentes do Medora. Atualizar a cada incremento: mudar status, registrar resultado e ativar a próxima decisão. Não é um agente autônomo de execução; é a fila de decisões que o humano (ou coordenador designado) administra.

## Estado atual (31/10/2026, sessão retomada e concluída)

- Fundação (etapa 0) e base executável (etapa 1) concluídas; fatia demonstrativa da etapa 2 integrada.
- D1, D2 e D3 encerradas nesta sessão — ver histórico. D2 VALIDAÇÃO COMPLETA VERDE (ver histórico).
- Validação completa desta sessão (31/10, após checkpoint final da D2): `tsc --noEmit` ok; `eslint src content tests` ok; 145 testes Vitest (10 arquivos) ok; `next build` ok; E2E por projeto com `NODE_OPTIONS=--max-old-space-size=768`: desktop 22/22 passed (47.7s), mobile 22/22 passed (46.2s). E2E full em uma única run é instável neste ambiente (8 GB RAM, o servidor Next é morto no meio da run mobile — rodar por `--project`).
- Git local: 3 commits + alterações não commitadas desta sessão (acessibilidade + catálogo de 2 lições + ORCHESTRATOR.md), sem remote. Commit pendente de autorização.

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
| D4 | Planejamento (documento) da migração Supabase/auth e dos contratos de dados | pendente | D1–D3; precisa de定义 de contratos antes de código |
| D5 | Provedor de IA live (adapter real, credenciais server-side, quotas, eval com modelo real) | bloqueada | D4 (auth/quotas); orçamento e política de dados |
| D6 | Revisão espaçada FSRS | bloqueada | validar requisitos; depende de persistência real (D4) |
| D7 | Canvas, tutor contextual, áudio/vídeo, recursos sociais | bloqueada | entregas posteriores separadas (etapa 5) |
| D8 | Revisão médica/editorial do conteúdo existente | pendente — gate de publicação | bloqueia qualquer publicação do conteúdo médico |

## Decisão ativa

**D2 encerrada (checkpoint final verde).** Pendente apenas: commit local quando autorizado. **Próxima: D4** (documento de planejamento Supabase/auth e contratos de dados) — sem bloqueio de código.

## Histórico de decisões encerradas

| Data | Decisão | Resultado | Validação |
| --- | --- | --- | --- |
| 31/10/2026 | Fundação bilíngue + fatia demonstrativa + núcleo IA server-only (fixture) | 3 commits locais | typecheck, 137 testes, E2E passed, build |
| 31/10/2026 | D1 — refinamentos de acessibilidade da lição: skip link p/ `#reader-main` no reader (main com `tabIndex={-1}`), foco programático no feedback do quiz após submit (`role="status"` + `tabIndex={-1}`), `aria-hidden` em ícones decorativos (reader, shell, app, diagram, heart-art já tinha), `prefers-reduced-motion` agora também desativa `animation`, outline de foco removido apenas em alvos de foco programático. Arquivos: `src/features/learning/lesson-reader.tsx`, `learning-app.tsx`, `lesson-diagram.tsx`, `src/features/shell/learning-shell.tsx`, `src/app/globals.css` | Fidelidade comparada com capturas Wondering (lesson-preview/lesson-next, home desktop/mobile): header com X + dots + ações fixas já estavam fieis; desvios intencionais mantidos (XP no header no lugar de ícones de notas) | `tsc --noEmit` ok; `eslint src content tests` ok; 137 testes Vitest ok; `next build` ok; E2E 16 desktop + 16 mobile ok (rodados por projeto por limite de RAM da máquina — run único com 2 servidores + Chrome estoura os 7,8 GB e derruba o servidor, não é falha de código). Limitação: emulação de viewport não é validação em dispositivo físico; contraste auditado por cálculo (muted #786f65 sobre #FFFCF0 ≈ 4,8:1, passa AA) |
| 31/10/2026 | D3 — QA ampliado: `tests/accessibility.spec.ts` (skip-link como 1º tab stop, foco no h1 por etapa e no feedback após submit, reduced-motion desativa transition/animation, etapa intermediária + seleção não submetida persistem entre reloads e troca de idioma de estudo) | +5 testes × 2 projetos | E2E accessibility 10/10 (desktop+mobile) |
| 31/10/2026 | D2 (parcial) — contrato generalizado (`id`/`revision`/`xp` genéricos, `lessonCatalogSchema` com ids únicos), `content/index.ts` + `content/cardiac-cycle.ts` (rascunho bilíngue `demo-unreviewed`, fonte OpenStax 19.4), diagramas `phases`/`valves`/`sounds` em `lesson-diagram.tsx` + textos i18n, `learning-app.tsx` com trilha de 2 lições (testids por id, revisão da última concluída, library lista lições, perfil agrega), landing atualizada para 2 lições, `tests/content-catalog.test.ts` + E2E da 2ª lição (20 XP no total) | 145 testes unit (10 arquivos); E2E 22+22 por projeto | `tsc --noEmit` ok, lint ok, vitest 145 ok, build ok, playwright desktop 22/22 + mobile 22/22 passed (por `--project`, `NODE_OPTIONS=--max-old-space-size=768`) |
| 31/10/2026 | D2 (checkpoint final) — validate completo reexecutado após integração: typecheck ok, lint ok, 145 testes Vitest (10 arquivos) ok, `next build` ok (rotas `/` estática e `/app` dinâmica), E2E desktop 22/22 passed (47.7s) e mobile 22/22 passed (46.2s), incluindo o teste da 2ª lição (20 XP no total) em ambos os projetos | D2 encerrada | Commit local pendente de autorização; revisão médica (D8) continua bloqueando publicação |
