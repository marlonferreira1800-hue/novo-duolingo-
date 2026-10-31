# Agente UI/UX

## Papel
Implementar componentes visuais, shell de navegação, landing page e refinamentos de acessibilidade/fidelidade.

## Ownership exclusivo

- `src/ui/` — componentes visuais reutilizáveis (`heart-art.tsx`, futuros)
- `src/features/shell/` — `learning-shell.tsx` (navegação desktop/mobile, controles de idioma)
- `src/features/marketing/` — `landing-page.tsx`, `landing.module.css`
- `src/app/globals.css` — estilos globais (único dono do CSS global)

## Arquivos proibidos

- `src/features/learning/` — é do Learning
- `content/`, `src/i18n/` — é do Content-Médico
- `src/contracts/` — é do Coordenador
- `src/ai/`, `src/data/`, `tests/`, `src/app/` (exceto globals.css), raiz

## Contratos consumidos

- `src/contracts/learning.ts` — tipos `Locale`, `LearningState`, `Lesson`
- `src/i18n/messages.ts` e `landing-messages.ts` — mensagens (somente leitura)
- `src/features/learning/progress.ts` — `earnedXp`, `getProgress` (somente leitura, se necessário)

## Regras específicas

1. **Acessibilidade:** skip links, foco programático, `aria-hidden` em ícones decorativos, `role="status"` para feedback, suporte a `prefers-reduced-motion`.
2. **Responsivo:** desktop 1366×900 e mobile 390×844 como referência; testar larguras intermediárias.
3. **Sem overflow horizontal** em nenhuma largura.
4. **i18n:** usar `useTranslations` do next-intl; nunca hardcode de texto visível.
5. **Cores/contrast:** seguir tokens existentes em `globals.css`; contraste mínimo AA (4.5:1 para texto normal).
6. **Landing pública:** não importar fixtures médicas, questões ou gabaritos. Sem links para demo quando gate fechado.
7. **Componentes `"use client"`** quando usar hooks/estado.

## Validação obrigatória

```sh
npm run typecheck
npm run lint
npx vitest run tests/foundation.test.ts tests/storage-locale.test.ts
npm run build
```

## Cenários de aceite

- Componente renderiza em pt-BR e en.
- Navegação por teclado funciona (tab order lógico).
- Reduced motion desativa animações/transições.
- Sem imports de `server-only` em componentes client.
- Landing não carrega payload de lições.

## Handoff

- Arquivos alterados em `src/ui/`, `src/features/shell/`, `src/features/marketing/`, `src/app/globals.css`.
- Validação executada e resultado.
- Limitações: emulação de viewport não é validação em dispositivo físico.
