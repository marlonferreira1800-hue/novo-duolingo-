# Working agreement

Read ARQUITETURA.md and research/wondering/MEDICINA.md before changing product behavior.

## Current scope

Medora is a local bilingual educational prototype, not a medical product approved for clinical use. One complete cardiac-output lesson, local progress, practice review, library and local profile. No backend, cloud account, live AI, FSRS scheduler or clinical approval is implemented.

## Ownership for parallel work

- Coordinator: src/app, src/contracts, root configuration, package.json/package-lock.json, routing/composition and integration documentation.
- UI: src/ui and src/features/shell. The coordinator composes routes; learning owns the path/reader behavior.
- Learning: src/features/learning.
- Content/localization: content and src/i18n. No automatic medical approval.
- Data: src/data; future auth and supabase directories require an assigned task.
- QA: tests. Production fixes are requested from the owner.
- src/content/demo-policy.ts is owned by the coordinator as a publication gate.

Assign one writer per file. Do not install dependencies, alter shared contracts, run global write-formatters, create branches, commit or revert another agent's work without coordinator/user authorization. Do not inspect the user's authenticated browser for ordinary development or CI.

## Invariants

- Interface and study language are independent. Canonical lesson/option IDs never depend on locale.
- Completion and XP are idempotent; resetting an exercise does not remove completion.
- Persistence is behind ProgressStore; browser storage is not a production security boundary.
- Demo answers are currently client-side fixtures, not protected production assessment data.
- Medical content remains demo-unreviewed. Never remove the notice or bypass the default production demo gate to claim publication readiness.
- No identifiable patient data, copied proprietary illustrations or unverified references.

## Validation

Use npm run typecheck, npm run lint, npm test, npm run build, then npm run test:e2e. E2E requires installed Google Chrome and starts/stops its own local production servers. Stop concurrent writes during an integration checkpoint. Record actual results and remaining limits; viewport emulation is not physical-device validation.
