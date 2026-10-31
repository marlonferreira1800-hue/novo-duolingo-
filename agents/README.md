# Agentes de Desenvolvimento — Medora

Este diretório define os agentes especializados de desenvolvimento do projeto Medora.
Cada agente tem ownership exclusivo sobre diretórios específicos, conforme definido em
[AGENTS.md](../AGENTS.md) e [WORKFLOW.md](../docs/coordination/WORKFLOW.md).

## Regras gerais (todos os agentes)

1. **Um escritor por arquivo.** Nunca edite arquivos de outro agente sem autorização do coordenador.
2. **Não instale dependências.** Apenas o Coordenador pode alterar `package.json`/`package-lock.json`.
3. **Não altere contratos compartilhados** (`src/contracts/`) sem aprovar com o Coordenador primeiro.
4. **Não rode formatadores globais, resets, stash, troca de branch ou commits** sem autorização.
5. **Valide seu trabalho:** rode `npm run typecheck`, `npm run lint` e os testes relevantes ao seu domínio.
6. **Reporte handoff:** arquivos alterados, contratos consumidos, validação executada, limitações e bloqueios.
7. **Conteúdo médico:** sempre `demo-unreviewed`. Agentes nunca aprovam conteúdo clínico.
8. **IA:** todo código em `src/ai/` deve importar `server-only`. Fixtures devem ser explicitamente identificadas.
9. **Bilinguismo:** pt-BR/en em tudo que for visível ao usuário. IDs canônicos nunca dependem de locale.
10. **Nunca commite segredos** (.env, chaves, tokens) ou capturas de sessão pessoal.

## Agentes disponíveis

| Agente | Arquivo | Ownership | Entrega típica |
|--------|---------|-----------|----------------|
| **Content-Médico** | [content-medico.md](content-medico.md) | `content/`, `src/i18n/` | Novas lições bilíngues como rascunho `demo-unreviewed` |
| **UI/UX** | [ui-ux.md](ui-ux.md) | `src/ui/`, `src/features/shell/`, `src/features/marketing/` | Componentes visuais, shell, landing, acessibilidade |
| **Learning** | [learning.md](learning.md) | `src/features/learning/` | Trilha, leitor, exercícios, regras de progresso |
| **Dados** | [dados.md](dados.md) | `src/data/`, futuro `src/auth/`, `supabase/` | Adaptadores de persistência, auth, migrations, RLS |
| **QA** | [qa.md](qa.md) | `tests/` | Testes unitários, E2E, acessibilidade, evals de IA |
| **AI-Engineer** | [ai-engineer.md](ai-engineer.md) | `src/ai/` | Novos workflows de IA, prompts versionados, providers, evidências |
| **Coordenador** | [coordinator.md](coordinator.md) | `src/app/`, `src/contracts/`, raiz, `docs/coordination/` | Integração, rotas, contratos, CI, decisões de arquitetura |

## Fluxo de despacho

```
1. Coordenador define escopo + critérios de aceite + um escritor por arquivo
2. Agente lê AGENTS.md, ARQUITETURA.md e seu próprio arquivo de agente
3. Agente implementa em seu diretório exclusivo
4. Agente roda validação local (typecheck, lint, testes do domínio)
5. Agente reporta handoff para o Coordenador
6. Coordenador faz checkpoint de integração (npm run validate)
7. Commit local apenas quando autorizado pelo usuário
```

## Template de tarefa (para o Coordenador usar ao despachar)

```text
Objetivo:
Agente:
Arquivos permitidos:
Arquivos proibidos:
Contratos/versões consumidos:
Riscos de dados, custo ou conteúdo médico:
Cenários de aceite (incluindo falhas e pt-BR/en):
Validação a executar:
Handoff esperado:
```
