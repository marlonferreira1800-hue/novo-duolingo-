# Desenvolvimento orientado a agentes e Git

## Contexto obrigatório

Ler AGENTS.md, ARQUITETURA.md, docs/AI-NATIVE.md e MEDICINA.md. Consultar o código e os testes do domínio antes de trabalhar. AGENTS.md é orientação ao agente, não uma barreira de segurança.

## Ciclo de trabalho

1. Coordenador define escopo, critérios de aceite e um escritor por arquivo.
2. Fecha ou propõe alteração de contrato compartilhado antes dos consumidores.
3. Distribui tarefas pequenas em diretórios disjuntos; sem múltiplas cópias do domínio.
4. Agente implementa e reporta arquivos, validação e limitações reais.
5. QA mantém testes e solicita correções ao dono do código.
6. Em checkpoint, todos pausam escrita; coordenador executa npm run validate.
7. Revisão humana/de arquitetura confirma escopo, diferenças visuais e limites médicos.
8. Quando autorizado pelo usuário, revisar diff/index e criar commit local com mensagem curta e imperativa. Não enviar para remoto sem autorização.

## Ownership adicional para IA

- Coordenador: src/contracts/ai.ts, composição src/ai/runtime.ts, configuração e CI.
- Dono de IA designado por tarefa: src/ai/study-plan-service.ts e providers.
- Dono de conteúdo/IA designado por tarefa: prompts e evidências. Alteração de prompt exige decisão de versão e avaliação; não modificar texto clínico como manutenção cosmética.
- QA: tests/ai. Nunca editar runtime de outro agente para tornar o teste verde sem acordo.

Não criar agora agentes autônomos de execução em produção. Os agentes de desenvolvimento e o workflow de IA do produto são mecanismos diferentes.

## Template de tarefa

```text
Objetivo:
Arquivos permitidos:
Arquivos proibidos:
Contratos/versões consumidos:
Riscos de dados, custo ou conteúdo médico:
Cenários de aceite (incluindo falhas e pt-BR/en):
Validação a executar:
Handoff: arquivos, resultados, limitações e necessidade de integração.
```

## Disciplina Git

- git status e diff antes de editar e antes de preparar commit.
- Stage apenas arquivos do incremento autorizado e confira git diff --cached --check.
- Nunca versionar .env real, chaves, tokens, cookies, traces com dados privados ou capturas da sessão pessoal.
- Não rodar resets, rebase, force push, limpeza global, stash ou troca de branch para resolver conflitos sem autorização.
- Não confundir commit com backup externo: o repositório atual permanece só no computador.
- CI está definida em .github/workflows/ci.yml, mas só executará num serviço remoto após configurar e enviar o repositório com permissão do usuário.

## Definição de pronto

Contrato e implementação integrados; testes relevantes e gate global verdes; evals para mudanças de IA; documentação honesta; nenhum segredo no index; conteúdo sem falsa aprovação; commit local quando autorizado. É proibido declarar provedor live, segurança clínica ou execução de CI hospedada apenas porque os testes offline passaram.
