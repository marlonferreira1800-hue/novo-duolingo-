# ADR 0001 — Núcleo de IA server-only com contratos e evals

Status: aceito para a fundação. Não declara integração live ou infraestrutura de produção concluída.

## Contexto

O primeiro incremento validou aprendizado bilíngue local. O usuário exige arquitetura AI-native e histórico Git. Adicionar apenas um chatbot à UI não define contexto, evidência, custo, publicação médica nem colaboração confiável entre agentes.

## Decisão

- Manter monólito modular Next.js/TypeScript.
- Separar contratos em src/contracts/ai.ts e implementação em src/ai, marcada server-only.
- Orquestrar um caso concreto: rascunho de plano educacional apoiado em evidência selecionada.
- Usar provider port injetável e composition root explícito.
- Implementar somente adapter fixture nesta entrega, sem endpoint ou credenciais.
- Versionar prompt, schema e revisão das fontes; gerar proveniência sem autoridade médica.
- Validar idioma, estrutura, referências e limites antes de aceitar um rascunho.
- Criar evals offline e CI declarativa; manter Git local com commits de incrementos verificados.

## Consequências

- Podemos testar o contrato e a execução antes de escolher um fornecedor e assumir custos/dados externos.
- A interface não consome o workflow automaticamente; esse limite é deliberado até existir autenticação, quotas e processo editorial.
- Limites em memória e callbacks não substituem banco, fila durável, autorização ou auditoria persistente.
- Aprovação estrutural não concede aprovação médica. Conteúdo válido por schema pode estar clinicamente incorreto.
- Implementar IA live exigirá adapter, política de credenciais/dados, avaliação com modelo real e orçamento. Não será inferido como concluído a partir das fixtures.

## Alternativas rejeitadas

- Chamar modelo do navegador: expõe credenciais e dificulta quotas/autorização.
- Usar prompt único sem schema/versionamento: mudanças de comportamento não rastreáveis.
- Instalar framework multiagente e banco vetorial antecipadamente: custo operacional sem caso validado.
- Deixar a IA promover sua saída para publicada: violação da governança médica.
