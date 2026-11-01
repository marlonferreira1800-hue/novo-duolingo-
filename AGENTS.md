# Working agreement & Autonomous Multi-Agent Architecture

Read ARQUITETURA.md, docs/AI-NATIVE.md, docs/coordination/WORKFLOW.md and research/wondering/MEDICINA.md before changing product behavior.

## Current scope (Implemented Architecture)

Medora is an AI-native bilingual (`pt-BR` / `en`) medical education platform (currently in development/demo gate until human D8 medical review):
- **Surfaces:** Public bilingual landing (`/`), learning workspace (`/app` with Path, Reader, Review Queue, Create Studio, Library, Profile), magic-link auth (`/login`), and human medical review portal (`/admin/review`).
- **Curriculum & Content (`content/`):** 30 bilingual lessons across 20 Basic Cycle sections, 3 question types (`multiple-choice`, `fill`, `order`), and 30 semantic SVG diagram types — all validated by `catalogSchema` and marked `demo-unreviewed` until human D8 sign-off.
- **Server-Only AI & Multi-Agent System (`src/ai/`):**
  - Hierarchical Multi-Agent Orchestrator (`src/ai/agents/orchestrator.ts`) coordinating 4 specialist agents (`planner`, `tutor-agent`, `question-gen`, `fact-checker`) with scoped audited tools (`search_evidence`, `get_lesson`, `compute_example`), session memory (`session.ts`), and full `agentTrace` provenance.
  - Study-plan (`study-plan-service.ts`) and contextual tutor (`tutor-service.ts`) workflows with versioned prompts (`src/ai/prompts/`), curated OpenStax evidence (`src/ai/evidence/`), deterministic offline fixture adapters (`fixture.ts`, `agent-fixture.ts`), and fail-closed live OpenAI-compatible adapter (`live.ts`).
- **Spaced Repetition & Data Layer (`src/ai/fsrs-scheduler.ts`, `src/data/`, `src/auth/`, `supabase/`):**
  - Server-side FSRS scheduler (`fsrs-scheduler.ts`) + review actions (`src/app/actions/review.ts`) + `ReviewQueue` (`src/features/review/review-queue.tsx`).
  - Offline-first `localProgressStore` (`local-progress.ts`) + authenticated `RemoteProgressStore` (`remote-progress.ts`) with first-login local→remote sync, server-side answer verification (`submitAttemptAction`), dual-key idempotent XP (`xp_events`), and PostgreSQL RLS migration (`supabase/migrations/0001_init.sql`).

## Autonomous Execution Protocol (Orchestrator & Subagents)

When the user requests one or multiple implementations (e.g., *"implemente X, Y e Z"*), the **Coordinator (Orchestrator)** and **Specialized Agents** MUST operate with **full technical autonomy** from start to finish:

1. **Zero Micro-Interruptions:** Do NOT pause to ask the user for approval on code structure, schema design, file decomposition, or intermediate technical decisions. Apply the **SOTA AI & Architecture Decision Matrix** below and advance automatically.
2. **Contract-First DAG Decomposition:**
   - **Step 1 (Contracts):** Coordinator updates or defines strict Zod schemas in `src/contracts/` (`learning.ts`, `ai.ts`, `data.ts`) before any consumer or provider code is written.
   - **Step 2 (Parallel Subagent Dispatch):** Coordinator dispatches specialized subagents (`invoke_subagent` / `define_subagent`) in parallel across disjoint ownership directories (1 writer per file).
   - **Step 3 (Route & Action Composition):** Coordinator wires server actions (`src/app/actions/`) and Next.js routes (`src/app/`).
3. **Self-Healing 3-Gate Verification Loop (SWE-agent / AutoCodeRover / Hermes Pattern):**
   - Never report a task as done or ask the user for help on a build/test error without running the self-healing loop:
     - **Gate 1 (Static):** `npm run typecheck` and `npm run lint` must exit 0.
     - **Gate 2 (Domain & AI Evals):** Targeted Vitest suite + `npm run ai:eval` must pass 100%.
     - **Gate 3 (Global Integration):** Full `npm test` and `npm run build` (plus Playwright E2E when UI/flows change) must pass.
   - If any gate fails, read the traceback, formulate a root-cause hypothesis, apply a minimal surgical fix in the owning agent's scope, and re-verify until green.
4. **Automatic State Synchronization:** Upon completing an implementation increment, update `docs/coordination/ORCHESTRATOR.md` (and ADRs in `docs/adr/` if architectural) with the real validation results.

## SOTA AI & Software Architecture Decision Matrix

Both the development agents (`agents/*.md`) and the product AI agents (`src/ai/agents/*`) must make decisions grounded in these state-of-the-art patterns:

1. **Hierarchical Supervisor + Specialist Subagents (Orchestrator-Workers Pattern):**
   - Complex goals are routed through a bounded supervisor (`orchestrator`) to single-responsibility specialists (`planner` → `tutor-agent` → `question-gen` → `fact-checker` in product; `coordinator` → `ai-engineer` / `learning` / `ui-ux` / `dados` / `content-medico` / `qa` in engineering).
   - Each agent has an explicit allowlist of deterministic tools (`allowedTools`), strict token/step budgets (`maxSteps`, `maxOutputTokens`), and structured JSON handoffs (`handoffTo`).
2. **Schema-First Constrained Decoding & Strict Contracts:**
   - Every LLM output, tool input, server action, and database entity is validated at runtime with `z.strictObject()` or discriminated unions. Unknown fields (such as self-approved publication flags or raw URLs) are rejected immediately with deterministic `AiErrorCode`s.
3. **Curated Grounding, Citation Binding & Entailment Verification:**
   - Never rely on unverified parametric memory for medical facts. Every generated claim or question must bind to versioned `evidenceKey`s (`<id>@<revision>`) from `src/ai/evidence/` and pass the `fact-checker` agent step.
   - Technical citation validity ≠ clinical truth: all AI outputs are immutable `status: 'draft'` and `medicallyReviewed: false` until human D8 review.
4. **Defense-in-Depth & Untrusted Context Isolation:**
   - User topics, goals, and evidence excerpts are serialized strictly as untrusted JSON data in the `user` envelope — never interpolated into `system` instructions.
   - All `src/ai/**` modules enforce `import 'server-only'` at line 1 (verified by static import-graph tests in `tests/ai/boundaries.test.ts`).
   - Telemetry callbacks (`onRun`, `onAgentRun`) log only safe operational metadata (`runId`, `providerId`, `elapsedMs`, `usage`, `outcome`, `errorCode`) — never raw prompts, user goals, evidence excerpts, or raw provider errors.
5. **Cognitive Spaced Repetition (FSRS) & Dual-Key Idempotency:**
   - FSRS scheduling (`stability`, `difficulty`, `retrievability`, `state`) attaches to canonical `question_id` / `lesson_id`, never to localized text.
   - Progress and XP writes enforce both request-level idempotency (`idempotency_key` UUID) and semantic uniqueness (`(user_id, lesson_id, reason)`), ensuring monotonic `completedAt` and zero duplicate XP across offline/online sync.
6. **Pre-Mapped Blueprints for Upcoming Implementations:**
   - **Per-User AI Quotas & Rate Limiting (D5 completion):** Enforce daily/monthly token & run budgets in `src/ai/runtime.ts` / server actions by querying `usage_events` per authenticated `user_id` before invoking `createLiveProvider()`.
   - **Persistent Multi-Agent Sessions & Async Generation Jobs:** Persist `src/ai/agents/session.ts` into Supabase `agent_sessions` and run long multi-agent workflows via PostgreSQL-backed `generation_jobs` with lease/timeout/retry.
   - **Contextual In-Lesson AI Tutor:** Connect `tutor-service.ts` to a slide-over drawer in `lesson-reader.tsx`, passing canonical `lesson.id`, current `stage.id`, and `studyLocale` while displaying cited `evidenceKeys` and draft notices.
   - **Curriculum & Interactive Visuals Expansion:** Add lessons in `content/` using the 3 question types (`multiple-choice`, `fill`, `order`) and semantic SVG diagrams in `lesson-diagram.tsx`, keeping `pt-BR` and `en` structurally identical.

## Ownership for parallel work

- **Coordinator** ([agents/coordinator.md](agents/coordinator.md)): `src/app/**`, `src/contracts/**`, `src/content/demo-policy.ts`, root configs, `package.json`/`package-lock.json`, `docs/coordination/**`, `docs/adr/**`, `.github/workflows/**`.
- **AI-Engineer** ([agents/ai-engineer.md](agents/ai-engineer.md)): `src/ai/**` (multi-agent orchestrator, study-plan, tutor, FSRS scheduler, prompts, evidence, fixture/live providers).
- **Learning** ([agents/learning.md](agents/learning.md)): `src/features/learning/**`, `src/features/review/**`, `src/features/create/**` (path, reader, diagrams, FSRS queue UI, multi-agent Create UI, progress rules).
- **UI/UX** ([agents/ui-ux.md](agents/ui-ux.md)): `src/ui/**`, `src/features/shell/**`, `src/features/marketing/**`, `src/app/globals.css`.
- **Content-Médico** ([agents/content-medico.md](agents/content-medico.md)): `content/**`, `src/i18n/**` (bilingual lessons, catalog sections, UI/landing translations; always `demo-unreviewed`).
- **Dados** ([agents/dados.md](agents/dados.md)): `src/data/**`, `src/auth/**`, `supabase/**`, `middleware.ts`.
- **QA** ([agents/qa.md](agents/qa.md)): `tests/**` (unit, contracts, FSRS, AI evals, boundaries, Playwright E2E, accessibility).

Assign one writer per file. Do not install dependencies, alter shared contracts, run global write-formatters, create branches, commit or revert another agent's work without coordinator/user authorization. Do not inspect the user's authenticated browser for ordinary development or CI.

## Non-Negotiable Invariants

- Interface (`uiLocale`) and study (`studyLocale`) languages are independent. Canonical lesson/stage/option IDs never depend on locale.
- Completion and XP are idempotent; resetting an exercise does not remove completion.
- Persistence is behind `ProgressStore`; browser storage is not a production security boundary.
- Medical content remains `demo-unreviewed` until human D8 approval. Never remove the notice or bypass `src/content/demo-policy.ts`. The public landing (`/`) must remain accessible with the gate closed, without importing lesson fixtures/questions/answers.
- No identifiable patient data, copied proprietary illustrations or unverified references.
- AI implementation is strictly server-only (`import 'server-only'`). Inputs/evidence are untrusted data, never permissions.
- AI outputs remain `status: 'draft'` and `medicallyReviewed: false`. Fixtures must be explicitly identified; never silently fall back from live AI to fixtures.
- Never log raw prompts, source excerpts, generated content or provider error messages in run metadata.

## Validation

Use `npm run validate` (`typecheck`, `lint`, `tests`, `build`, then `E2E`); run `npm run ai:eval` for targeted AI changes. Review staged files and commit verified increments only when authorized. No remote/push without authorization.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
