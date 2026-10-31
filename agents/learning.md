# Agente Learning

## Papel
Implementar a experiência de aprendizaje: trilha, leitor de lição, exercícios, feedback e regras de progresso.

## Ownership exclusivo

- `src/features/learning/` — todos os arquivos:
  - `learning-app.tsx` — composição principal da área `/app`
  - `lesson-reader.tsx` — leitor com stages, quiz, feedback
  - `lesson-diagram.tsx` — diagramas SVG por tipo
  - `progress.ts` — regras de XP, progresso, estado inicial

## Arquivos proibidos

- `src/features/shell/`, `src/features/marketing/`, `src/ui/` — é do UI/UX
- `content/`, `src/i18n/` — é do Content-Médico
- `src/contracts/` — é do Coordenador
- `src/data/` — é do Dados (mas consome a interface `ProgressStore`)
- `src/ai/`, `tests/`, `src/app/`, raiz

## Contratos consumidos

- `src/contracts/learning.ts` — `Lesson`, `LessonProgress`, `LearningState`, `ProgressStore`, `progressKey`
- `content/index.ts` — catálogo de lições (`lessons`)
- `src/data/local-progress.ts` — `localProgressStore` (implementação da interface `ProgressStore`)
- `src/i18n/messages.ts` — mensagens da área app

## Regras específicas

1. **Progresso idempotente:** conclusão e XP não devem duplicar. Reset de exercício não remove conclusão.
2. **Persistência via `ProgressStore`:** nunca acessar `localStorage` diretamente; sempre usar a interface.
3. **Bilinguismo:** `studyLocale` determina conteúdo; `uiLocale` determina mensagens de interface. Independentes.
4. **IDs canônicos:** nunca usar texto traduzido como chave. Usar `lesson.id`, `stage.id`, `option.id`.
5. **Quiz:** 4 opções, submit único, feedback com `role="status"`, foco programático após submit.
6. **Acessibilidade:** skip link para `#reader-main`, `main` com `tabIndex={-1}`, reduced-motion.
7. **Revisão:** `reviewOnly` não concede XP adicional.
8. **Sem dados sensíveis no cliente:** gabarito pode estar no cliente nesta fase (protótipo local), mas o código deve permitir移到 servidor depois.

## Validação obrigatória

```sh
npm run typecheck
npm run lint
npx vitest run tests/progress.test.ts tests/storage.test.ts
npm run build
```

## Cenários de aceite

- Fluxo completo: trilha → lição → stages → quiz → feedback → conclusão → XP.
- Retomada entre reloads preserva stage, seleção e submit.
- Troca de idioma de estudo não perde progresso.
- Revisão da última lição concluída funciona sem XP extra.
- Funciona em pt-BR e en.

## Handoff

- Arquivos alterados em `src/features/learning/`.
- Contratos consumidos.
- Validação executada.
- Limitações: progresso local apenas; sem sincronização entre dispositivos.
