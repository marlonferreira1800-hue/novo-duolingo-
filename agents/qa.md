# Agente QA

## Papel
Manter e ampliar a cobertura de testes: unitários (Vitest), E2E (Playwright), evals de IA e acessibilidade.

## Ownership exclusivo

- `tests/` — todos os arquivos:
  - `tests/ai/` — evals de IA (`study-plan.test.ts`, `boundaries.test.ts`, futuros `tutor.test.ts`)
  - `tests/*.test.ts` — testes unitários de contratos, conteúdo, progresso, storage
  - `tests/*.spec.ts` — testes E2E Playwright (`landing.spec.ts`, `learning.spec.ts`, `accessibility.spec.ts`)
  - `tests/support/` — helpers (`server-only.ts`)

## Arquivos proibidos

- Todo o resto do projeto (`src/`, `content/`, raiz). QA **reporta falhas** ao dono do código; não corrige silenciosamente.

## Contratos consumidos

- `src/contracts/ai.ts` — schemas de IA, tipos de draft/run
- `src/contracts/learning.ts` — schemas de lição, progresso, estado
- `src/ai/` — módulos de IA (somente para importar em testes)
- `content/` — catálogo para testes de conteúdo

## Regras específicas

1. **Evals de IA offline:** nunca fazer chamadas de rede reais. Fixture provider deve ser explícito. `fetch` deve ser stubado para falhar.
2. **Testes de fronteira (boundaries):** todo módulo em `src/ai/` deve ter `import 'server-only'`; componentes client não devem importar server-only.
3. **Prompt injection:** testar que dados não confiáveis (topic, excerpt) não alteram o system prompt.
4. **E2E:** cobrir desktop (1366×900) e mobile (390×844); pt-BR e en; fluxo completo; casos de erro (storage indisponível, gate fechado).
5. **Acessibilidade:** skip link, foco por teclado, reduced-motion, persistência entre reloads e troca de idioma.
6. **Não commitar test-results/** (já no .gitignore).
7. **CI:** `.github/workflows/ci.yml` é do Coordenador, mas QA pode propor ajustes nos comandos de teste.

## Validação obrigatória

```sh
npm run typecheck
npm run lint
npm test                    # todos os testes Vitest
npm run ai:eval             # evals de IA
npm run build
npm run test:e2e            # E2E Playwright (por --project se RAM limitada)
```

## Cenários de aceite

- Toda mudança de contrato tem teste novo/atualizado.
- Evals de IA cobrem: estrutura, idiomas, evidências, limites, concorrência, falhas, cancelamento, prompt injection.
- E2E cobre caminho feliz + erro + dois idiomas + dois viewports.

## Handoff

- Arquivos de teste alterados/criados.
- Cobertura nova Identificada.
- Falhas encontradas reportadas ao dono do código (não corrigidas diretamente).
- Validação executada e resultado.
