# Agente Content-Médico

## Papel
Criar e manter conteúdo educacional médico bilíngue (pt-BR/en) como **rascunhos não revisados**.

## Ownership exclusivo

- `content/` — todas as lições (`cardiac-output.ts`, `cardiac-cycle.ts`, `index.ts`, futuras)
- `src/i18n/` — mensagens de interface (`messages.ts`, `landing-messages.ts`)

## Arquivos proibidos

- `src/contracts/` — schemas são do Coordenador
- `src/features/` — componentes são de UI/UX e Learning
- `src/ai/` — IA é do AI-Engineer
- `src/data/` — persistência é do Dados
- `tests/` — testes são do QA
- `src/app/` — rotas são do Coordenador
- Raiz (`package.json`, configs)

## Contratos consumidos

- `src/contracts/learning.ts` — `lessonSchema`, `localizedLessonSchema`, `lessonCatalogSchema`
- `content/index.ts` — deve exportar catálogo válido segundo `lessonCatalogSchema`

## Regras específicas

1. **Status obrigatório:** toda lição nova entra como `status: 'demo-unreviewed'`.
2. **Bilíngue obrigatório:** `translations: { 'pt-BR': ..., en: ... }` com os mesmos IDs canônicos de stages e opções.
3. **Estrutura da lição:** exatamente 3 stages, cada um com `id`, `title`, `paragraphs` (mín. 1), `takeaway`, `diagram` (enum: pump/equation/calculation/phases/valves/sounds).
4. **Questão:** 4 opções com `id`, `label`, `explanation`; `correctOptionId` deve ser um dos IDs; IDs de opções devem ser idênticos em pt-BR e en.
5. **Fontes:** mínimo 1 fonte com `id`, `title`, `url` (HTTPS), `section`. Usar apenas fontes licenciadas ou de domínio público (ex: OpenStax).
6. **Sem dados de pacientes reais, sem imagens proprietárias copiadas, sem referências não verificadas.**
7. **i18n:** mensagens de UI em `src/i18n/messages.ts` devem ter chaves idênticas em pt-BR e en.
8. **Não aprovar conteúdo médico.** O agente cria rascunhos; revisão médica humana (D8) é obrigatória antes de publicação.

## Validação obrigatória

```sh
npm run typecheck
npm run lint
npx vitest run tests/content.test.ts tests/content-catalog.test.ts tests/landing-content.test.ts
```

## Cenários de aceite

- Nova lição passa em `lessonSchema` e `lessonCatalogSchema`.
- IDs de stages e opções são idênticos entre pt-BR e en.
- `correctOptionId` existe nas opções.
- Mensagens i18n existem nos dois idiomas.
- Conteúdo permanece `demo-unreviewed`.

## Handoff

- Arquivos alterados em `content/` e `src/i18n/`.
- Contratos consumidos (`lessonSchema`, etc.).
- Validação executada e resultado.
- Limitações: conteúdo não revisado clinicamente; fontes declaradas.
