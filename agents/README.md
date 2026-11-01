# Agentes Autônomos de Desenvolvimento — Medora (Arquitetura SOTA)

Este diretório define o **Sistema Multi-Agente Autônomo de Engenharia** do Medora.
Quando o usuário solicita uma ou múltiplas implementações (*"implemente X, Y e Z"*), o **Agente Coordenador (Orquestrador)** e os **6 Agentes Especialistas** operam com **autonomia ponta-a-ponta** — planejando contratos, executando em paralelo em diretórios disjuntos, tomando decisões técnicas baseadas nas arquiteturas de IA mais sofisticadas do momento e auto-corrigindo falhas via auditoria em 3 barreiras antes de entregar.

---

## 🧠 Matriz de Decisão Arquitetural SOTA (Embutida em Todos os Agentes)

Todos os agentes já conhecem o que foi implementado no projeto e tomam decisões técnicas guiadas por 6 pilares:

1. **Orquestração Hierárquica Supervisor-Workers (LangGraph / Anthropic Multi-Agent Pattern):**
   - No produto (`src/ai/agents/orchestrator.ts`): o `orchestrator` coordena `planner` → `tutor-agent` → `question-gen` → `fact-checker` com ferramentas auditadas (`search_evidence`, `get_lesson`, `compute_example`), memória de sessão (`session.ts`) e `agentTrace` completo.
   - Na engenharia (`agents/`): o `coordinator` fecha contratos em `src/contracts/` e despacha subagentes paralelos via `invoke_subagent` com ownership exclusivo de diretórios.
2. **Contract-First & Constrained Decoding (Zod Strict Schemas):**
   - Toda fronteira (`src/contracts/ai.ts`, `learning.ts`, `data.ts`) usa `z.strictObject()` ou `z.discriminatedUnion()`. Campos desconhecidos, URLs arbitrárias ou flags de auto-aprovação médica são rejeitados deterministamente.
3. **Grounding Curado, Vínculo de Evidências & Verificação Factual:**
   - Nenhum conteúdo ou rascunho de IA depende apenas de memória paramétrica. Todo output cita `evidenceKey` versionada (`<id>@<revision>`) de `src/ai/evidence/` e passa pelo `fact-checker`.
   - Vínculo técnico ≠ aprovação clínica: todo output de IA nasce `status: 'draft'`, `medicallyReviewed: false`; toda lição nasce `status: 'demo-unreviewed'` até decisão humana D8 em `/admin/review`.
4. **Defense-in-Depth & Isolamento de Contexto Não-Confiável:**
   - `import 'server-only'` obrigatório em todo `src/ai/**` (garantido por `tests/ai/boundaries.test.ts`).
   - Inputs do usuário e trechos de evidência entram apenas como JSON serializado no envelope `user`, nunca concatenados ao `system` prompt.
   - Telemetria (`RunRecord`, `AgentRunRecord`) registra apenas metadados operacionais seguros (zero prompts, zero PII, zero erro bruto).
5. **Repetição Espaçada Cognitiva (FSRS) & Idempotência Dupla:**
   - Agendamento FSRS (`src/ai/fsrs-scheduler.ts`) calcula `stability`, `difficulty`, `retrievability` e `state` vinculados ao `question_id` canônico (independente de idioma).
   - Persistência híbrida (`localProgressStore` + `RemoteProgressStore`) garante `completedAt` monotônico e dupla unicidade em `xp_events` (`idempotency_key` UUID + `(user_id, lesson_id, reason)`).
6. **Loop de Auto-Cura em 3 Barreiras (SWE-agent / AutoCodeRover / Hermes):**
   - Nenhum agente interrompe o usuário por erro de compilação, lint ou teste quebrado. O agente lê o log, formula a hipótese da causa raiz, aplica o patch cirúrgico mínimo e reexecuta até passar nas 3 barreiras:
     - **Barreira 1:** `npm run typecheck` + `npm run lint`
     - **Barreira 2:** Testes unitários do domínio + `npm run ai:eval`
     - **Barreira 3:** `npm test` global (195+ testes) + `npm run build` (+ E2E Playwright quando aplicável)

---

## 🤖 Mapa de Agentes e Ownership Atualizado

| Agente | Arquivo | Ownership Exclusivo | Escopo Atual & Próximas Decisões Autônomas |
|--------|---------|---------------------|---------------------------------------------|
| **Coordenador (Orquestrador)** | [coordinator.md](coordinator.md) | `src/app/**`, `src/contracts/**`, `src/content/demo-policy.ts`, raiz, `docs/coordination/**`, `docs/adr/**`, `.github/workflows/**` | Decomposição DAG, contratos Zod, rotas (`/`, `/app`, `/login`, `/admin/review`), server actions (`src/app/actions/*`), checkpoint global |
| **AI-Engineer** | [ai-engineer.md](ai-engineer.md) | `src/ai/**` | Orquestrador multi-agente (`src/ai/agents/*`), `study-plan-service.ts`, `tutor-service.ts`, `fsrs-scheduler.ts`, prompts versionados, evidências OpenStax, adapters `fixture`/`live`, cotas por usuário |
| **Learning** | [learning.md](learning.md) | `src/features/learning/**`, `src/features/review/**`, `src/features/create/**` | Trilha (20 seções, 30 lições), leitor (3 tipos de questão: `multiple-choice`, `fill`, `order`), 30 diagramas SVG, fila FSRS (`review-queue.tsx`), estúdio multi-agente (`create-page.tsx`), gaveta de tutor contextual |
| **UI/UX** | [ui-ux.md](ui-ux.md) | `src/ui/**`, `src/features/shell/**`, `src/features/marketing/**`, `src/app/globals.css` | Shell responsivo (desktop 1366×900 / mobile 390×844), landing pública bilíngue, tokens CSS, acessibilidade WCAG AA, `prefers-reduced-motion` |
| **Content-Médico** | [content-medico.md](content-medico.md) | `content/**`, `src/i18n/**` | Catálogo de 30 lições bilíngues (`pt-BR`/`en`) do ciclo básico + expansão para ciclo clínico, mensagens de UI/landing, status `demo-unreviewed` |
| **Dados** | [dados.md](dados.md) | `src/data/**`, `src/auth/**`, `supabase/**`, `middleware.ts` | `localProgressStore`, `RemoteProgressStore`, Supabase SSR Auth (`magic link`), RLS (`0001_init.sql`), sync local→remoto, persistência futura de `agent_sessions` e `generation_jobs` |
| **QA** | [qa.md](qa.md) | `tests/**` | 195+ testes unitários (14 arquivos), evals offline de IA (`study-plan`, `agents`, `boundaries`), testes de FSRS/contratos/catálogo, E2E Playwright (`landing`, `learning`, `accessibility`, `auth`) |

---

## ⚡ Protocolo de Execução Autônoma (Quando o Usuário Pede Implementações)

```
1. RECEPÇÃO: Usuário pede "implemente A, B e C".
2. CONTRATOS PRIMEIRO: Coordenador analisa impactos e atualiza `src/contracts/*` se necessário.
3. DESPACHO PARALELO: Coordenador aciona os agentes donos (via `invoke_subagent` ou execução modular em diretórios disjuntos).
4. DECISÃO SOTA: Cada agente aplica os padrões já estabelecidos no repositório sem perguntar sobre detalhes triviais.
5. AUTO-CURA (3 BARREIRAS): Cada agente valida `typecheck`, `lint`, `vitest` e `ai:eval`, corrigindo qualquer regressão imediatamente.
6. INTEGRAÇÃO & REGISTRO: Coordenador conecta rotas/server actions, roda validação global e atualiza `docs/coordination/ORCHESTRATOR.md`.
```
