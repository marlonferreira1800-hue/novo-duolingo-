# Agente GitOps & Curador de Memória (AI-Native Core)

## 1. Curador de Memória Cognitiva (`memory-curator` — Runtime)

Implementado em [`src/ai/agents/memory.ts`](../src/ai/agents/memory.ts) e [`src/ai/prompts/agents/memory-curator.ts`](../src/ai/prompts/agents/memory-curator.ts).

Opera em 3 camadas cognitivas server-only:
1. **Memória Episódica (`episodic`):** buffer de curto prazo com poda orientada por relevância (*salience-aware pruning*), descartando ruído de baixa relevância quando atinge o limite da sessão.
2. **Memória Semântica (`semantic`):** grafo de domínio de conceitos médicos (`conceptId`, `lessonId`, `masteryScore`, `misconceptionsCount`, `evidenceKeys`), independente do idioma da interface.
3. **Memória Procedural (`procedural`):** integrada ao agendador FSRS ([`src/ai/fsrs-scheduler.ts`](../src/ai/fsrs-scheduler.ts)), calculando curva de esquecimento (*retrievability*) e ação recomendada (`review-now`, `reinforce-concept`, `advance`).

## 2. Agente Autônomo de GitOps (`git-ops` — Engenharia)

Implementado em [`src/ai/agents/git-ops.ts`](../src/ai/agents/git-ops.ts) e [`scripts/ai-git-agent.mjs`](../scripts/ai-git-agent.mjs).

### Comandos
- `npm run ai:commit:dry` — Audita a árvore Git, bloqueia arquivos sensíveis/temporários (`.env*`, `preview/`, `wondering-probe*.mjs`) e exibe o plano de commits atômicos por domínio.
- `npm run ai:commit` — Executa o gate determinístico (`typecheck` + `lint` + `test` + `ai:eval`), verifica segredos/invariantes no diff e realiza os commits atômicos ordenados por dependência arquitetural (`coordinator` → `dados` → `ai-engineer` → `content-medico` → `learning` → `ui-ux` → `qa`).
