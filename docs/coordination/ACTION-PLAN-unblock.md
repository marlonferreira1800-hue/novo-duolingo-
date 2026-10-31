# Plano de ação — desbloquear D5/D6/D8 (31/10/2026)

Objetivo: transformar os bloqueios atuais (D8 humano, ADR 0002 não aprovado, etapa 3 não iniciada) em um caminho executável com tarefas atribuíveis aos agentes definidos em `agents/`.

## Diagnóstico dos bloqueios

| Bloqueio | Causa raiz | Solução neste plano |
|----------|-----------|---------------------|
| D8 (revisão médica) | Falta infraestrutura para registrar decisão de revisor humano | Fase B: contrato `review_decisions` + fluxo editorial no schema |
| ADR 0002 não aprovado | Contratos de dados (`src/contracts/data.ts`) não existem em código | Fase A: implementar contratos Zod do ADR 0002 |
| Etapa 3 não iniciada | Falta ambiente Supabase local + fases não despachadas | Fases C+D: emulador local → fases 0-2 incrementais |
| D5 (IA live) | Sem auth/quotas | Desbloqueado após Fase D (fase 3 do stage3) |
| D6 (FSRS) | Sem persistência real | Desbloqueado após Fase D |

---

## Fase A — Contratos de dados (ADR 0002 → código)

**Agente:** Coordinator (`agents/coordinator.md`)
**Arquivos:** `src/contracts/data.ts` (novo), `tests/contracts-data.test.ts` (novo, QA)
**Duração estimada:** 1 sessão

### Tarefas
1. Criar `src/contracts/data.ts` com schemas Zod espelhando o ADR 0002:
   - `profileSchema`, `lessonProgressRecordSchema`, `attemptRecordSchema`
   - `xpEventSchema` (com `idempotencyKeySchema` uuid + unicidade semântica declarada)
   - `reviewCardSchema`, `reviewDecisionSchema` (para D8)
   - `aiRunRecordSchema` / `usageEventSchema` (para D5, sem dados sensíveis)
   - `contentRevisionSchema`, `localizedContentSchema` (status: draft→in_review→approved→published/withdrawn)
   - `questionRecordSchema`, `optionRecordSchema`, `answerKeySchema` (gabarito nunca público)
2. Tipos exportados para cada schema.
3. Testes de contrato em `tests/contracts-data.test.ts` (QA): formas válidas/inválidas, unicidade semântica, transições de status.

### Critérios de aceite
- `tsc --noEmit` ok, lint ok, vitest verde.
- ADR 0002 pode ser marcado "aceito" (contratos fechados).
- D8 pode avançar: `reviewDecisionSchema` existe para registrar revisor humano.

### Desbloqueia
- Fase B (infraestrutura D8), Fase D (etapa 3), D5 (usage_events), D6 (review_cards).

---

## Fase B — Infraestrutura de revisão médica (D8準備)

**Agente:** Content-Médico (`agents/content-medico.md`) + Coordinator
**Arquivos:** `src/contracts/learning.ts` (estender status), `content/` (adicionar campos de revisão), `docs/coordination/D8-medical-review-packet.md` (atualizar)
**Duração estimada:** 1 sessão

### Tarefas
1. Estender `lessonSchema` em `src/contracts/learning.ts`:
   - `status` passa de `z.enum(['demo-unreviewed'])` para `z.enum(['demo-unreviewed', 'in_review', 'approved', 'published', 'withdrawn'])`
   - Adicionar `reviewMetadata?: { reviewedBy?: string; reviewedAt?: string; decisionId?: string }` (opcional, preenchido por humano via processo editorial)
2. Atualizar `content/cardiac-output.ts` e `content/cardiac-cycle.ts` — permanecem `demo-unreviewed` (nada muda até revisão humana).
3. Atualizar `D8-medical-review-packet.md` com instruções atualizadas: quando revisor humano aprovar, mudar `status` + registrar em `review_decisions` (futuro).
4. Testes: QA adiciona teste de que novo enum aceita todos os status e rejeita inválidos.

### Critérios de aceite
- `npm run validate` verde.
- D8 continua bloqueada para publicação, mas a **infraestrutura para registrar a decisão humana existe**.
- Quando um revisor humano aprovar, basta mudar o campo `status` no content + registrar decisão — sem mudar código.

### Desbloqueia
- D8 (quando revisor humano existir), publicação futura.

---

## Fase C — Ambiente Supabase local (emulador)

**Agente:** Dados (`agents/dados.md`) + Coordinator (instala deps)
**Arquivos:** `supabase/` (novo), `.env.example`, `docker-compose.yml` (opcional, para emulador local)
**Duração estimada:** 1 sessão

### Tarefas
1. Coordinator instala `@supabase/supabase-js` e `@supabase/ssr` (único que altera package.json).
2. Dados cria `supabase/migrations/0001_init.sql` com as tabelas do ADR 0002:
   - `profiles`, `lesson_progress`, `attempts`, `xp_events`, `review_cards`
   - `courses`, `lessons`, `content_revisions`, `localized_content`, `questions`, `options`, `answer_keys`, `question_localizations`
   - `review_decisions`, `ai_runs`, `usage_events`
   - RLS habilitado em todas de aluno; políticas `auth.uid() = user_id`; cascades.
3. `.env.example` ganha `SUPABASE_URL=`, `SUPABASE_ANON_KEY=`, `SUPABASE_SERVICE_ROLE_KEY=` (placeholders vazios).
4. Documentar comando para subir emulador local: `npx supabase start` (requer Supabase CLI instalado).

### Critérios de aceite
- Migration aplica limpa no emulador local.
- `supabase db lint` sem erros de RLS.
- Nenhum segredo real no Git.

### Desbloqueia
- Fase D (implementação real contra emulador).

---

## Fase D — Etapa 3: Auth + Progresso remoto (fases 0-3 do IMPLEMENTATION-PLAN-stage3.md)

**Agentes:** Dados (auth + remote-progress), UI/UX (tela de login), Learning (integração), QA (E2E autenticado)
**Duração estimada:** 3-4 sessões

### Sub-fase D1 — Auth (Fase 2 do stage3)
- **Dados:** `src/auth/` com `createServerSupabaseClient`, `createBrowserSupabaseClient`, `middleware.ts`.
- **UI/UX:** rota `/login` (magic link), estados loading/erro, copy bilíngue.
- **Coordinator:** compõe rota `/login` em `src/app/`.
- **QA:** `tests/auth.spec.ts` — login, sessão persiste, dois usuários isolados.

### Sub-fase D2 — Progresso remoto + sync (Fase 3 do stage3)
- **Dados:** `src/data/remote-progress.ts` implementando `ProgressStore` via server actions.
- **Learning:** `learning-app.tsx` hidrata local primeiro, escolhe store conforme sessão, sync local→remoto no primeiro login.
- **QA:** testes de banco reais (2 usuários, RLS, idempotência, replay não duplica).

### Sub-fase D3 — Gabarito no servidor (Fase 4 do stage3)
- **Coordinator + Learning:** server action `submit-attempt` valida resposta no servidor, retorna só `{correct, explanation}`.
- **Dados:** `xp_events` com dupla unicidade.
- **QA:** E2E cobre fluxo autenticado; inspecionar Network não revela gabarito.

### Critérios de aceite (Fase D completa)
- Login/logout funcionam; sessão persiste; isolamento entre 2 usuários comprovado.
- Progresso sobrevive a troca de dispositivo; modo convidado continua offline.
- Gabarito não está no payload público; XP idempotente.
- `npm run validate` verde com E2E novo.

### Desbloqueia
- **D5 (IA live):** auth + `usage_events` existem → quotas por `user_id` possíveis.
- **D6 (FSRS):** `review_cards` + persistência real existem.

---

## Fase E — D5: IA live (após Fase D)

**Agente:** AI-Engineer (`agents/ai-engineer.md`)
**Pré-requisitos:** Fase D completa + orçamento definido + política de dados aprovada.

1. Implementar adapter live real (ex: OpenAI/Anthropic) em `src/ai/providers/live.ts` — credenciais só no servidor.
2. Conectar quotas via `usage_events` (teto por usuário definido na ADR 0002 questão 3).
3. Evals com modelo real em ambiente controlado (`npm run ai:eval` contra live).
4. Conectar UI (botão Criar/tutor) — só após revisão médica (D8).

---

## Fase F — D6: FSRS (após Fase D)

**Agente:** Learning + Dados
1. Scheduler FSRS no servidor usando `review_cards`.
2. UI de fila de revisão (vinculada a `question_id`, nunca a string traduzida).
3. E2E de revisão espaçada.

---

## Ordem de execução recomendada

```
Sessão 1: Fase A (contratos data.ts) → ADR 0002 aceito
Sessão 2: Fase B (enum de status + D8 infra) → D8 pronto para revisor humano
Sessão 3: Fase C (emulador Supabase local + migration)
Sessão 4-6: Fase D (auth → sync → gabarito servidor) → D5/D6 desbloqueados
Sessão 7+: Fase E (D5 live) e Fase F (D6 FSRS) em paralelo quando houvertarefas independentes
```

## O que NÃO fazer

- ❌ Agentes aprovarem conteúdo médico (só humano D8)
- ❌ IA live antes de auth/quotas (D5 bloqueada por segurança)
- ❌ Fallback silencioso live→fixture
- ❌ Commits sem autorização do usuário
- ❌ Segredos no Git
- ❌ Implementar Supabase em paralelo sem contratos fechados (Fase A primeiro)

## Checkpoint esperado após cada fase

Após cada fase: `npm run validate` verde (E2E por `--project` se RAM limitada), ORCHESTRATOR.md atualizado com resultado real e limitações.
