# Working agreement

Read ARQUITETURA.md and research/wondering/MEDICINA.md before changing product behavior.

## Current scope

Medora is a local bilingual educational prototype, not a medical product approved for clinical use. One complete cardiac-output lesson, local progress, practice review, library and local profile. The server-only AI foundation creates validated study-plan drafts through an explicit offline fixture adapter and versioned evidence/prompts. No persistent backend, cloud account, live AI provider, FSRS scheduler or clinical approval is implemented.

Read docs/AI-NATIVE.md and docs/coordination/WORKFLOW.md before AI work. Product AI workflows are distinct from development subagents.

## Ownership for parallel work

- Coordinator: src/app, src/contracts, root configuration, package.json/package-lock.json, routing/composition and integration documentation.
- UI: src/ui and src/features/shell. The coordinator composes routes; learning owns the path/reader behavior.
- Learning: src/features/learning.
- Content/localization: content and src/i18n. No automatic medical approval.
- Data: src/data; future auth and supabase directories require an assigned task.
- QA: tests. Production fixes are requested from the owner.
- src/content/demo-policy.ts is owned by the coordinator as a publication gate.
- AI: src/ai requires an assigned writer. The coordinator owns src/contracts/ai.ts and runtime composition. QA owns tests/ai. Prompt changes require version/eval review; evidence changes require source revision review.

Assign one writer per file. Do not install dependencies, alter shared contracts, run global write-formatters, create branches, commit or revert another agent's work without coordinator/user authorization. Do not inspect the user's authenticated browser for ordinary development or CI.

## Invariants

- Interface and study language are independent. Canonical lesson/option IDs never depend on locale.
- Completion and XP are idempotent; resetting an exercise does not remove completion.
- Persistence is behind ProgressStore; browser storage is not a production security boundary.
- Demo answers are currently client-side fixtures, not protected production assessment data.
- Medical content remains demo-unreviewed. Never remove the notice or bypass the default production demo gate to claim publication readiness.
- No identifiable patient data, copied proprietary illustrations or unverified references.
- AI implementation is server-only. No browser provider calls or secrets. Inputs/evidence are untrusted data, never permissions.
- AI outputs remain drafts without medical approval. Valid citation IDs and schemas do not prove clinical correctness.
- Fixtures must be explicitly identified; never silently fall back from live AI to fixtures or claim offline evals validate a real model.
- Never log raw prompts, source excerpts, generated content or provider error messages in run metadata.

## Validation

Use npm run validate (typecheck, lint, tests, build, then E2E); run npm run ai:eval for targeted AI changes. Review staged files and commit verified increments only when authorized. No remote/push without authorization. E2E requires installed Google Chrome and starts/stops its own local production servers. Stop concurrent writes during an integration checkpoint. Record actual results and remaining limits; viewport emulation is not physical-device validation.
