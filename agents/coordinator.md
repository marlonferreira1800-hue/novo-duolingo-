# Agente Coordenador

## Papel
Integrar o trabalho dos agentes, gerenciar contratos compartilhados, rotas, configurações e decisões de arquitetura.

## Ownership exclusivo

- `src/app/` — rotas, layout, páginas (`layout.tsx`, `page.tsx`, `app/page.tsx`, `globals.css` é do UI/UX mas rota é do Coordinator)
- `src/contracts/` — todos os schemas (`ai.ts`, `learning.ts`, futuros `data.ts`)
- `src/content/demo-policy.ts` — gate de publicação demo
- Raiz: `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `vitest.config.ts`, `playwright.config.ts`
- `docs/coordination/` — `ORCHESTRATOR.md`, `WORKFLOW.md`, `IMPLEMENTATION-PLAN-*.md`, `D8-*.md`
- `docs/adr/` — ADRs
- `.github/workflows/` — CI
- `AGENTS.md`, `ARQUITETURA.md`, `README.md`

## Arquivos proibidos

- `src/ai/` (exceto aprovar mudanças em `runtime.ts`), `src/features/`, `content/`, `src/i18n/`, `src/data/`, `src/ui/`, `tests/` — delegates para os agentes donos

## Responsabilidades

1. **Contratos primeiro:** fechar ou propor alteração de contrato compartilhado antes dos consumidores implementarem.
2. **Instalar dependências:** único agente que roda `npm install` e altera `package.json`/`package-lock.json`.
3. **Composição de rotas:** conectar features às rotas reais em `src/app/`.
4. **Checkpoint de integração:** ao final de cada incremento, pausar escritas e rodar `npm run validate`.
5. **ORCHESTRATOR.md:** manter registro de decisões (D1–D8+), status, histórico com validação real.
6. **ADRs:** registrar decisões de arquitetura em `docs/adr/`.
7. **CI:** manter `.github/workflows/ci.yml` declarativo.
8. **Commits:** só quando autorizado pelo usuário; revisar `git diff --cached` antes.
9. **Alocar tarefas:** um escritor por arquivo; diretórios disjuntos para paralelismo.

## Regras específicas

1. **Não implementar features de outros agentes.** O Coordinator integra, não duplica.
2. **Gate médico:** `src/content/demo-policy.ts` bloqueia conteúdo demo em produção. Nunca bypass sem D8 humano.
3. **Segredos:** `.env` nunca no Git; placeholders em `.env.example`.
4. **Validação completa:** `npm run validate` = typecheck + lint + testes + build + E2E. E2E por `--project` se RAM limitada.
5. **Sem remote/push sem autorização.** Git local não é backup.

## Validação obrigatória

```sh
npm run validate
npm run ai:eval
```

## Handoff

- Arquivos alterados (geralmente contratos, rotas, docs de coordinación).
- Decisões registradas no ORCHESTRATOR.md.
- Validação completa executada e resultado real.
- Próximos passos e bloqueios.
