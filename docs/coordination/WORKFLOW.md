# Workflow de Orquestração Autônoma Multi-Agente e Git

## Contexto Obrigatório

Ler `AGENTS.md`, `ARQUITETURA.md`, `docs/AI-NATIVE.md`, `docs/coordination/ORCHESTRATOR.md` e `research/wondering/MEDICINA.md`. Consultar os contratos (`src/contracts/`) e os testes do domínio antes de editar.

---

## Ciclo de Execução Autônoma (Ponta a Ponta)

Quando o usuário solicita uma ou múltiplas implementações (*"implemente X, Y e Z"*), o **Coordenador (Orquestrador)** e os **Agentes Especialistas** executam o ciclo abaixo de forma **100% autônoma**, sem pausar para pedir aprovação de passos técnicos intermediários:

1. **Triage & Contratos Primeiro (Coordenador):**
   - Decompõe o pedido em um grafo (DAG) de tarefas por domínio.
   - Fecha ou atualiza os contratos compartilhados em `src/contracts/` (`learning.ts`, `ai.ts`, `data.ts`) antes que qualquer consumidor seja modificado.
2. **Despacho Paralelo em Diretórios Disjuntos (`invoke_subagent`):**
   - Um único escritor por arquivo; diretórios exclusivos por agente (`agents/*.md`).
   - Os subagentes já conhecem toda a arquitetura implementada e a Matriz SOTA de decisão técnica.
3. **Implementação & Auto-Cura Local (Agente Especialista):**
   - Cada agente implementa sua parte e executa imediatamente sua suíte de validação local (`typecheck`, `lint`, testes Vitest do domínio e `ai:eval`).
   - Se ocorrer qualquer erro, o próprio agente diagnostica a causa raiz, aplica a correção cirúrgica e reexecuta até passar.
4. **Composição e Checkpoint de Integração (Coordenador):**
   - O Coordenador integra rotas (`src/app/`) e Server Actions (`src/app/actions/`), pausa escritas concorrentes e executa as **3 Barreiras Globais**:
     - **Barreira 1:** `npm run typecheck` + `npm run lint`
     - **Barreira 2:** `npm run ai:eval` (60 evals de IA e fronteiras)
     - **Barreira 3:** `npm test` (195+ testes em 14 arquivos) + `npm run build` (+ Playwright E2E quando fluxos visuais mudam)
5. **Sincronização Viva de Documentação:**
   - O Coordenador atualiza `docs/coordination/ORCHESTRATOR.md` com os arquivos alterados, resultados reais de validação e status do backlog.
6. **Governança Clínica e Git:**
   - Conteúdo médico e saídas de IA permanecem como rascunhos (`demo-unreviewed` / `status: 'draft'`) até decisão humana em `/admin/review` (D8).
   - Commits locais e push remoto ocorrem apenas quando solicitados/autorizados pelo usuário.

---

## Ownership da Camada de IA e Produto

- **Coordenador (`agents/coordinator.md`):** `src/contracts/ai.ts`, `src/contracts/learning.ts`, `src/contracts/data.ts`, rotas `src/app/**`, Server Actions `src/app/actions/**`, configs raiz e CI.
- **AI-Engineer (`agents/ai-engineer.md`):** `src/ai/**` (`agents/orchestrator.ts`, `agents/definitions.ts`, `agents/tools.ts`, `agents/session.ts`, `study-plan-service.ts`, `tutor-service.ts`, `fsrs-scheduler.ts`, `prompts/**`, `evidence/**`, `providers/**`, `runtime.ts`).
- **Learning (`agents/learning.md`):** `src/features/learning/**`, `src/features/review/**`, `src/features/create/**`.
- **UI/UX (`agents/ui-ux.md`):** `src/ui/**`, `src/features/shell/**`, `src/features/marketing/**`, `src/app/globals.css`.
- **Content-Médico (`agents/content-medico.md`):** `content/**` (30 lições, 20 seções), `src/i18n/**`.
- **Dados (`agents/dados.md`):** `src/data/**`, `src/auth/**`, `supabase/**`, `middleware.ts`.
- **QA (`agents/qa.md`):** `tests/**`.

---

## Template de Despacho para Subagentes

```text
Objetivo: [Resultado observável e determinístico]
Agente: [coordinator | ai-engineer | learning | ui-ux | content-medico | dados | qa]
Arquivos permitidos: [Caminhos exclusivos do agente]
Arquivos proibidos: [Caminhos fora do ownership]
Contratos consumidos: [Schemas de src/contracts/ aplicáveis]
Decisões arquiteturais SOTA já definidas: [Regras aplicáveis da Matriz SOTA]
Validação de auto-cura obrigatória: [Comandos exatos que devem sair com código 0]
```

---

## Disciplina Git e Segurança

- Verificar `git status` e `git diff` antes de preparar qualquer commit autorizado.
- Nunca versionar `.env`, chaves de API (`OPENAI_API_KEY`, `AI_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY`), tokens ou capturas de sessão privada.
- Não executar `git reset --hard`, `rebase`, `force push`, `clean -fd` ou exclusão de trabalho existente sem autorização explícita.
