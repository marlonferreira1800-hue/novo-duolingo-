# Orquestrador Autônomo de Decisões e Implementações do Medora

Registro vivo da arquitetura implementada, do backlog de decisões (`D1–D16`) e dos **Blueprints Arquiteturais Pré-Aprovados** para que o **Agente Coordenador** e os **6 Agentes Especialistas** (`agents/*.md`) saibam exatamente o que já existe e como implementar novos pedidos do usuário com autonomia ponta-a-ponta.

---

## Estado Atual Consolidado (01/11/2026)

- **Currículo Completo do Ciclo Básico (`content/`, `src/contracts/learning.ts`):**
  - **210 lições bilíngues (`pt-BR` / `en`)** organizadas em **21 disciplinas completas (10 lições por trilha — Parte Geral + Parte Especial/Sistemas)** do Ciclo Básico (1º e 2º ano de Medicina), além de seletor de disciplinas no topo do **Início** (`discipline-picker`) e atalho **Abrir trilha completa** na **Biblioteca**.
  - **3 tipos de exercício interativo:** `'multiple-choice'`, `'fill'` (preenchimento de lacuna) e `'order'` (ordenação de sequência fisiológica/clínica).
  - **30 diagramas SVG semânticos** em `src/features/learning/lesson-diagram.tsx` com textos traduzidos em `src/i18n/messages.ts`.
- **Sistema Multi-Agente de IA & Serviços Cognitivos (`src/ai/`, `src/contracts/ai.ts`):**
  - **Orquestrador Multi-Agente (`src/ai/agents/orchestrator.ts`):** coordena `planner` → `tutor-agent` → `question-gen` → `fact-checker` com ferramentas auditadas (`search_evidence`, `get_lesson`, `compute_example`), memória de sessão (`session.ts`) e `agentTrace` completo.
  - **Estúdio Criar + Projetos Dinâmicos `?project=<id>` com Lições Interativas Geradas (`src/features/create/create-page.tsx` + `src/app/actions/agents.ts`):** integrado na navegação principal de `/app` com tópicos recomendados, geração autônoma de lições didáticas completas (`generatedLessons` com estágios, diagramas SVG semânticos e quiz interativo) e abertura direta na trilha com sincronização de URL (`?project=<id>`).
  - **Gaveta do Tutor IA Contextual + Assistente Flutuante (`src/features/learning/tutor-drawer.tsx` + `src/app/actions/tutor.ts` — D14):** acessível tanto dentro do `LessonReader` quanto pelo botão flutuante do shell, citando `evidenceKeys` OpenStax e sugerindo perguntas de aprofundamento.
  - **Integração Avançada (`Advanced Lesson`) & Desafio Clínico (`Live Challenge`) (`src/features/learning/clinical-integration-modal.tsx`):** desbloqueados em cada uma das 21 seções da trilha com síntese fisiopatológica, questão integradora e XP idempotente (`completedChallenges`).
  - **Canvas Médico Interativo (`src/features/canvas/canvas-page.tsx`):** quadro pontilhado `Think in parallel` habilitado na navegação com controles de zoom/undo e adição de nós em paralelo (`Achado`, `Mecanismo`, `Hipótese`, `Evidência`).
  - **Agendador FSRS (`src/ai/fsrs-scheduler.ts` + `src/features/review/review-queue.tsx` + `src/app/actions/review.ts`):** repetição espaçada server-side completa.
  - **Study Plan & Tutor (`study-plan-service.ts`, `tutor-service.ts`)** + **Live Provider (`src/ai/providers/live.ts`)** pronto e fail-closed (`AI_LIVE_ENABLED=true` + `AI_API_KEY`).
- **Persistência Híbrida, Auth & Governança Médica (`src/data/`, `src/auth/`, `supabase/`, `/admin/review`):**
  - `localProgressStore` + `RemoteProgressStore` com sync local→remoto idempotente, verificação de gabarito no servidor (`submitAttemptAction`), migration `0001_init.sql` com RLS e portal `/admin/review` para decisão humana D8.
- **Qualidade e Validação Verificada:**
  - `npm run typecheck` (`tsc --noEmit`): **OK**
  - `npm test` (Vitest): **14 arquivos / 199 testes passando (incluindo 60 evals de IA, fronteiras e 210 lições em 21 trilhas)**
  - `npx playwright test` (`learning.spec.ts` + `accessibility.spec.ts`): **30 testes E2E passando (desktop e mobile)**

---

## Status das Decisões (D1 a D16)

| ID | Decisão / Entrega | Status | Notas & Próxima Ação Autônoma |
| --- | --- | --- | --- |
| **D1** | Fidelidade visual e acessibilidade WCAG AA (skip-link, foco programático, reduced-motion) | **Concluída** | Validada em desktop (`1366×900`) e mobile (`390×844`) |
| **D2** | Expansão do currículo bilíngue: 210 lições em 21 seções (10 lições por disciplina) + seletor de disciplinas no Início + 3 tipos de questão (`multiple-choice`, `fill`, `order`) + 30 diagramas SVG | **Concluída** | 210 lições ativas como `demo-unreviewed`; 199 testes unitários + E2E verdes |
| **D3** | Cobertura QA ampliada (`accessibility.spec.ts`, `content-catalog.test.ts`, `ai/agents.test.ts`, `fsrs.test.ts`) | **Concluída** | 14 suítes Vitest + 4 suítes Playwright E2E |
| **D4** | Planejamento de contratos de dados, Auth e RLS (ADR 0002) | **Concluída** | Implementado em `src/contracts/data.ts` e `0001_init.sql` |
| **D5** | Provedor de IA Live (`src/ai/providers/live.ts` — OpenAI, Anthropic, Mistral) + Orquestrador Multi-Agente (`src/ai/agents/*`) | **Ativo (Mistral Live em `.env.local`)** | Configurado com `AI_PROVIDER=mistral` (`mistral-small-latest`) e `AI_LIVE_ENABLED=true` em `.env.local` (ignorado pelo Git) |
| **D6** | Revisão espaçada FSRS (`src/ai/fsrs-scheduler.ts` + `review-queue.tsx`) | **Concluída** | Integrada na navegação `/app` e validada por `tests/fsrs.test.ts` |
| **D7** | Expansões da Etapa 5 (Projetos Dinâmicos `?project=`, Gaveta de Tutor Contextual, `Advanced Lesson`/`Live Challenge`, `Canvas` Médico) | **Concluída** | 100% implementada e integrada na navegação `/app` |
| **D8** | Revisão médica/editorial humana (`/admin/review`) | **Infra Pronta** | Aguardando apenas revisor médico humano (agentes nunca auto-aprovam medicina) |
| **D9–D13** | Contratos `data.ts`, status editorial, migration Supabase RLS, Auth Magic Link, `RemoteProgressStore`, gabarito server-side | **Concluídas** | 100% implementadas e testadas |
| **D14** | Gaveta de Tutor Contextual dentro do `LessonReader` + Botão Flutuante conectada a `tutor-service.ts` | **Concluída** | Implementada em `src/features/learning/tutor-drawer.tsx` e `src/app/actions/tutor.ts` |
| **D15** | *(Blueprint Pronto)* Cotas por usuário (`usage_events`) e rate-limiting server-side antes de chamadas `live` | **Pronto p/ Execução Autônoma** | Ver blueprint abaixo |
| **D16** | *(Blueprint Pronto)* Persistência de `agent_sessions` no Supabase e fila `generation_jobs` com lease/retry | **Pronto p/ Execução Autônoma** | Ver blueprint abaixo |

---

## Blueprints Arquiteturais Pré-Aprovados (Para Execução Autônoma Imediata)

Quando o usuário pedir qualquer uma das implementações abaixo (ou variações delas), o **Coordenador** e os **Agentes** já sabem exatamente como construir sem fazer perguntas:

### 1. Gaveta de Tutor Contextual no Leitor (D14)
- **Contratos (`Coordinator`):** Já existem `tutorRequestSchema`, `tutorOutputSchema` e `TutorDraft` em `src/contracts/ai.ts`. Criar Server Action `askTutorAction` em `src/app/actions/tutor.ts` (modo `live` se `AI_LIVE_ENABLED=true`, caso contrário fixture determinística contextualizada pela lição).
- **UI & Fluxo (`Learning` + `UI/UX`):** Botão "Perguntar ao Tutor" no `lesson-reader.tsx` abre um painel acessível (`role="dialog"` ou `<aside>` colapsável) enviando `{ question, lessonId: lesson.id, studyLocale, level: 'basic' }`. Exibe `answer`, `evidenceKeys`, `followUpSuggestions` e badge obrigatório de rascunho não revisado.
- **Testes (`QA`):** Evals em `tests/ai/` + teste de componente/fluxo.

### 2. Cotas de Uso e Rate-Limiting por Usuário em IA Live (D15)
- **Contratos (`Coordinator`):** Usar `usageEventSchema` e `aiRunRecordSchema` já definidos em `src/contracts/data.ts`.
- **Serviço (`AI-Engineer` + `Dados`):** Criar verificador de orçamento `checkAndRecordQuota(userId, usage)` consultando `usage_events` no Supabase (ou contador em memória no modo demo) antes de liberar chamadas ao `createLiveProvider()`. Se exceder o teto diário de tokens/execuções, lançar `new AiRunError('BUDGET_EXCEEDED')`.

### 3. Persistência Durável de Sessões Multi-Agente e Jobs Assíncronos (D16)
- **Banco (`Dados`):** Adicionar migration `0002_agent_sessions_and_jobs.sql` com tabelas `agent_sessions` e `generation_jobs` (`status`, `locked_until`, `attempts`, `idempotency_key`) e RLS `auth.uid() = user_id`.
- **Agentes (`AI-Engineer`):** Conectar `src/ai/agents/session.ts` a um adapter substituível (`SessionStore`: memória por padrão, Supabase quando autenticado).

### 4. Expansão de Lições, Ciclo Clínico ou Novos Diagramas Interativos
- **Contratos (`Coordinator`):** Se houver novo ícone/diagrama SVG, adicionar slug ao enum `diagram` em `src/contracts/learning.ts`.
- **Conteúdo (`Content-Médico`):** Criar arquivo em `content/<slug>.ts` com `status: 'demo-unreviewed'`, 3 `stages`, questão (`multiple-choice`, `fill` ou `order`), traduções `pt-BR`/`en` simétricas e fonte `https://` verificada; registrar em `content/index.ts` e `src/i18n/messages.ts`.
- **Visual (`Learning`):** Implementar o SVG semântico em `src/features/learning/lesson-diagram.tsx`.
