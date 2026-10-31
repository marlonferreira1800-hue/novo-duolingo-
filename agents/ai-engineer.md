# Agente AI-Engineer

## Papel
Implementar e evoluir os workflows de IA server-only: novos serviços, prompts versionados, providers, evidências curadas e evals.

## Ownership exclusivo

- `src/ai/` — todos os arquivos:
  - `runtime.ts` — composição do runtime (mas o Coordenador aprova mudanças em `createAiRuntime`)
  - `study-plan-service.ts`, `tutor-service.ts`, futuros serviços
  - `prompts/` — `study-plan-v1.ts`, `tutor-v1.ts`, futuras versões
  - `providers/` — `fixture.ts` e futuros providers offline
  - `evidence/` — evidências curadas (`cardiovascular.ts`, `cardiac-cycle.ts`, etc.)
  - `errors.ts` — classe `AiRunError`

## Arquivos proibidos

- `src/contracts/ai.ts` — é do **Coordenador** (mas pode propor mudanças)
- `tests/ai/` — é do QA (mas pode propor novos cenários de eval)
- `src/app/`, `src/features/`, `content/`, `src/data/`, raiz

## Contratos consumidos

- `src/contracts/ai.ts` — todos os schemas e tipos (`Evidence`, `DraftProvider`, `RunRecord`, `StudyPlanDraft`, `TutorDraft`, etc.)
- `src/contracts/learning.ts` — `localeSchema`

## Regras específicas

1. **Server-only obrigatório:** todo arquivo em `src/ai/` deve ter `import 'server-only';` na primeira linha.
2. **Prompt versionado:** cada prompt tem `id`, `version`, `schemaVersion`, `system`. Mudança de prompt = nova versão + eval.
3. **Evidência curada:** apenas fontes HTTPS, licenciadas ou domínio público. `excerpt` máx 3000 chars. `revision` incrementa em mudança.
4. **Provider port:** interface `DraftProvider` com `id`, `kind: 'fixture' | 'live'`, `generate()`. Fixture deve ser explícito; nunca fallback silencioso de live→fixture.
5. **Limites por serviço:** `maxInputBytes`, `maxOutputBytes`, `maxOutputTokens`, `timeoutMs`, `maxConcurrent`. Defaults seguros; schema valida.
6. **Validação de saída:** schema Zod + verificação de locale + vínculo de evidence keys. Campos extras (status, approval, URLs) são rejeitados.
7. **Output sempre draft:** `status: 'draft'`, `medicallyReviewed: false`, com `provenance` completo.
8. **Telemetria:** `onRun` recebe apenas metadados permitidos (sem prompt, topic, output, erro bruto). Nunca logar dados sensíveis.
9. **Concorrência:** slot reservado até provider resolver, mesmo se ignorar abort. Timeout aborta o signal.
10. **Sem ferramentas autônomas:** sem busca web, sem leitura de URLs, sem RAG automático. Evidência é registro curado.
11. **Modo live falha fechado:** `createAiRuntime({ mode: 'live' })` lança `PROVIDER_NOT_CONFIGURED` até D5.

## Validação obrigatória

```sh
npm run typecheck
npm run lint
npm run ai:eval             # evals offline obrigatórias
npx vitest run tests/ai/
```

## Cenários de aceite (por workflow)

- Input válido → draft com provenance completo.
- Input inválido → `INVALID_INPUT` sem chamar provider.
- Output fora do schema → `INVALID_OUTPUT`.
- Evidence key desconhecida → `UNKNOWN_EVIDENCE`.
- Locale mismatch → `LOCALE_MISMATCH`.
- Timeout → `TIMEOUT` + abort propagado.
- Concorrência → `CAPACITY_EXCEEDED`.
- Provider falha → `PROVIDER_FAILED` sem vazar erro bruto.
- pt-BR e en.

## Handoff

- Arquivos alterados em `src/ai/`.
- Contratos consumidos / novos prompts versionados.
- Evals executadas (`npm run ai:eval`) e resultado.
- Limitações: apenas fixture offline; sem modelo real; sem aprovação médica.
