# Plano de implementação — o que falta (etapa 3 + desbloqueio de D5/D6)

Base: [ADR 0002](../adr/0002-supabase-auth-and-data-contracts.md) (contratos propostos, aguardando aprovação humana) e a etapa 3 da [ARQUITETURA.md](../../ARQUITETURA.md). Hoje o app consome `localProgressStore` (`localStorage`) via `useSyncExternalStore` em `src/features/learning/learning-app.tsx`; gabarito (`correctOptionId`) está no cliente. Este plano muda isso em fases pequenas, cada uma com validação própria.

## Pré-requisitos (decisão humana, fora do código)

1. Aprovar os contratos do ADR 0002 (ou ajustar e aprovar).
2. Criar projeto Supabase de desenvolvimento/teste; copiar `SUPABASE_URL`/`SUPABASE_ANON_KEY` para `.env` local (nunca commitado). Placeholders vazios entram em `.env.example`.
3. Decidir provedores de login: recomendado email magic link; OAuth fica para depois.
4. Definir teto de custo/quotas de IA por usuário (alimenta D5).

## Fase 0 — Infra Supabase (dono: dados; serial)

- Instalar `@supabase/supabase-js` e `@supabase/ssr` (só o coordenador instala dependências).
- `supabase/migrations/0001_init.sql`: tabelas do ADR 0002 (`profiles`, `lesson_progress`, `attempts`, `xp_events` com `idempotency_key unique` + unique semântica `(user_id, lesson_id, reason)`, `review_cards`, tabelas de conteúdo, `review_decisions`, `ai_runs`/`usage_events`), RLS habilitado em todas as de aluno, políticas `auth.uid() = user_id`, cascades de exclusão de conta.
- `.env.example` ganha placeholders; `.gitignore` já cobre `.env`.
- **Aceite:** migration aplica limpa no emulador local do Supabase; `supabase db lint` sem erros de RLS.

## Fase 1 — Contratos de dados (dono: coordinator; serial)

- `src/contracts/data.ts`: schemas Zod de cada registro (profile, lesson_progress, attempt, xp_event, usage_event), `idempotencyKeySchema` (uuid), tipos exportados.
- `version: 2` no estado de apprentissage (upgrade do `medora.learning.v1` local fica no adaptador, fase 3).
- Testes de contrato em `tests/contracts-data.test.ts` (formas válidas/inválidas, unicidade semântica declarada).
- **Aceite:** `tsc --noEmit`, lint e vitest verdes.

## Fase 2 — Auth e sessão (dono: dados + UI; pode rodar em paralelo com a fase 3 em diretórios disjuntos)

- `src/auth/`: `createServerSupabaseClient` (cookies, server components/actions), `createBrowserSupabaseClient`; `middleware.ts` na raiz renovando sessão em cookie.
- Rota `/login` (magic link) + logout; estados de loading/erro na UI; copy bilíngue.
- Modelo de acesso: `/app` continua utilizável sem login (modo local, aviso "não sincroniza"); com login, sincroniza (fase 3). Gate médico de produção **não muda**.
- **Aceite:** login/logout funcionam; sessão persiste entre reloads; dois usuários distintos não se veem.

## Fase 3 — Progresso remoto + sync (dono: dados + learning)

- `src/data/remote-progress.ts`: `RemoteProgressStore` implementando a mesma interface `ProgressStore`, chamando server actions.
- Server actions com validação Zod no servidor; identidade só da sessão; toda escrita leva `idempotency_key` do cliente.
- Composição em `learning-app.tsx`: hidrata do local primeiro, escolhe store conforme sessão; no primeiro login, envia lições com `completedAt` + locales (remoto vira authoritative depois; `completedAt` nunca retrocede).
- **Aceite (testes de banco reais, não mocks):** isolamento RLS com 2 usuários; replay da mesma `idempotency_key` não duplica; progresso sobrevive a troca de dispositivo; modo convidado continua funcionando offline.

## Fase 4 — Gabarito e XP no servidor (dono: coordinator + learning; depois da fase 3)

- Server action `submit-attempt`: valida resposta no servidor, grava `attempts`, retorna apenas `{correct, explanation}` — o cliente nunca recebe `correctOptionId`.
- Conclusão/XP atômicos via `xp_events` com dupla unicidade (chave + semântica).
- Conteúdo do catálogo (sem gabarito) pode virar payload público de leitura; rascunhos/gabaritos só por serviço com papel editorial.
- **Aceite:** inspecionar Network/payload público não revela gabarito; XP idempotente sob doble clique/replay; E2E cobre fluxo completo autenticado.

## Fase 5 — QA E2E autenticado (dono: QA; contínuo a partir da fase 2)

- `tests/auth.spec.ts`: login, isolamento entre 2 contas de teste (seed via service role só no ambiente de teste), sync local→remoto, idempotência, gabarito protegido, dois idiomas, desktop/mobile.
- Playwright sobe projeto Supabase de teste (emulador ou projeto dedicado); CI usa só emulador — nunca segredos reais.
- **Aceite:** `npm run validate` verde com E2E novo; nenhum segredo no repositório (`git diff --cached --check` + revisão de `.env`).

## Depois, na ordem de dependência

1. **D5 — IA live:** adapter real server-side (credenciais só no servidor), quotas por `user_id` via `usage_events` (teto definido no pré-requisito 4), eval com modelo real (`npm run ai:eval` contra provider live em ambiente controlado), orçamento. Desbloqueada pela fase 3.
2. **D6 — FSRS:** `review_cards` + scheduler no servidor vinculado a `question_id` (nunca à string traduzida); UI de fila de revisão. Desbloqueada pela fase 3.
3. **D7 — etapa 5:** canvas, tutor contextual, áudio/vídeo, social — entregas separadas, fora deste plano.

## Regras durante a construção

- Um escritor por arquivo (ver AGENTS.md); contratos mudam antes dos consumidores.
- Service role nunca no browser; `.env` nunca no Git; CI usa emulador.
- Cada fase termina com `npm run validate` (E2E por `--project` por limite de RAM) e commit local autorizado.
- Conteúdo médico continua `demo-unreviewed` e bloqueado em produção até o D8 humano; nada deste plano publica conteúdo.
