# Produto: experiência Wondering para estudantes de medicina

## Direção confirmada

Preservar a experiência visual e os padrões de interação observados no Wondering, especializando o produto no estudo de medicina. Não transformar em dashboard hospitalar, prontuário ou chatbot genérico. Marca, mascote, ilustrações e conteúdo próprios.

A estrutura das telas segue MAPA-INTERNO.md. As decisões médicas abaixo são propostas de produto, não funcionalidades observadas no Wondering nem conteúdo médico já validado.

## Público e posicionamento

Estudantes de medicina, com personalização por etapa: ciclo básico, ciclo clínico e internato. Produto bilíngue desde a primeira versão: português brasileiro (pt-BR) e inglês (en). Idioma não determina país nem diretriz clínica; confirmar mercado e contexto antes de escolher recomendações como padrão. Foco em aprendizado e preparação acadêmica, não em orientação a pacientes ou suporte autônomo à decisão clínica.

## Inglês e português — requisito confirmado

- Interface completa nos dois idiomas: navegação, onboarding, botões, formulários, validações, erros, feedback, acessibilidade e avisos educacionais.
- Seletor de idioma acessível antes e depois do login, com preferência persistida. Usar a preferência do navegador apenas na primeira visita, com fallback explícito.
- Lições, exercícios, explicações, casos fictícios e tutor disponíveis em português e inglês. Incluir rótulos dos diagramas, não somente o texto ao redor.
- Conteúdo e interface seguem o idioma selecionado inicialmente; permitir escolher o idioma de estudo separadamente, por exemplo interface em português e lições em inglês.
- Manter IDs estáveis para curso, objetivo, lição e questão entre traduções. Trocar de idioma não reinicia progresso, revisões ou XP, nem concede recompensas duplicadas.
- Não traduzir conteúdo médico a cada renderização. Manter versões localizadas persistidas, vinculadas à mesma versão de conteúdo e com revisão terminológica/médica própria.
- Se uma tradução ainda não estiver disponível ou revisada, informar isso e oferecer a versão existente sem troca silenciosa. O curso demonstrativo inicial deve estar completo nos dois idiomas.
- Glossário bilíngue de termos médicos e abreviações; expandir siglas quando necessário e preservar a equivalência conceitual das questões e dos gabaritos.
- Formatação de números, datas e durações por locale; explicitar unidades clínicas. Não converter unidades nem trocar protocolos automaticamente ao mudar de idioma.
- Diretrizes, fontes, população e jurisdição permanecem explícitas independentemente da língua da interface.
- Estrutura técnica prevista: catálogos de mensagens por locale e biblioteca de internacionalização compatível com Next.js, como next-intl. Conteúdo médico localizado separado das mensagens da interface.

## Adaptação fiel por tela

| Wondering | Versão medicina |
| --- | --- |
| Home com trilha e nós | Trilha por sistema/disciplina, lições, prática e revisões |
| Create | O que você quer estudar? Objetivo, etapa do curso, assunto e tempo diário |
| Library | Biblioteca por anatomia, fisiologia, patologia, farmacologia, semiologia e áreas clínicas |
| Leitor por etapas | Conceito, diagrama, aplicação e pergunta com feedback |
| Advanced Lesson | Integração entre disciplinas e raciocínio clínico |
| Section Review | Revisão de conceitos e questões dos erros |
| Live Challenge | Caso clínico fictício por etapas; sem presumir interação ao vivo entre usuários |
| Tutor | Explicações contextualizadas na lição e em fontes selecionadas |
| Profile | Progresso, XP, streaks e histórico de estudo, sem alegar competência clínica |
| Canvas | Mapa de mecanismos, conceitos e hipóteses em casos fictícios |

Manter fundo claro, cores, tipografia, relevo dos botões, sidebar desktop, navegação inferior mobile e geometria da trilha observados. Diferenciar a marca de forma clara.

## Primeira entrega recomendada

Uma fatia vertical funcional, em vez de tentar cobrir toda medicina:

1. Home com uma trilha demonstrativa de sistema cardiovascular.
2. Seção de fisiologia cardiovascular com microlições e diagramas originais.
3. Leitor com navegação por etapas e exercício com explicação do gabarito e distratores.
4. Revisão de conceitos e um caso fictício de integração, sem prescrição individualizada.
5. Library e Create com estados demonstrativos explicitamente identificados.
6. Progresso local no protótipo; conta e persistência real na fase seguinte.

A duração aproximada de três minutos se aplica à microlição, não obrigatoriamente ao caso completo. Não comprimir conteúdo a ponto de perder rigor. O conteúdo inicial é demonstrativo até revisão médica e editorial.

## Qualidade e segurança de conteúdo

- Conteúdo publicado deve ter fontes identificáveis, versão/data e status de revisão. Links e citações da IA precisam ser conferidos; não aceitar referências inventadas.
- Conteúdo clínico deve registrar contexto, população e jurisdição da recomendação quando aplicável. Não misturar diretrizes de países diferentes sem explicação.
- Questões precisam de objetivo educacional, gabarito justificável e explicação dos distratores; revisão médica antes de publicação.
- IA adapta a explicação e propõe rascunhos com base em materiais selecionados; não publica recomendações clínicas automaticamente.
- Distinguir rascunho de IA, conteúdo revisado e conteúdo desatualizado. Possibilitar denúncia e retirada de itens incorretos.
- Usar casos fictícios e não solicitar dados identificáveis de pacientes. O protótipo não aceitará upload de prontuários reais.
- Tutor não apresenta o aplicativo como substituto de supervisão, avaliação clínica ou atendimento.
- Não copiar capítulos, bancos pagos de questões ou imagens de atlas sem licença. Usar materiais próprios ou licenciados.
- Avaliar repetição e desempenho educacional sem prometer aprovação em provas ou aptidão clínica.

## Etapas seguintes

- Autenticação e progresso sincronizado.
- Revisão espaçada e feedback por objetivos educacionais.
- Geração supervisionada de trilhas e tutor apoiado em fontes.
- Expansão do catálogo após revisão especializada.
- Canvas, áudio e vídeo após validação da experiência central.

## Critérios de aceite

- Comparação visual com as referências Wondering em desktop e mobile.
- Fluxo completo trilha → lição → exercício → feedback → revisão.
- Nenhum recurso simulado apresentado como integração real.
- Sem concessão duplicada de XP nem perda de progresso em atualização de página.
- Conteúdo demonstrativo identificado; conteúdo médico de produção revisado antes de disponibilização.
- Fluxo principal completo em pt-BR e en, incluindo exercícios, feedback e diagramas.
- Alternância de idioma persiste após atualização e login, sem perda de progresso ou duplicação de XP.
- Sem mensagens internas não traduzidas, chaves de tradução expostas ou alteração silenciosa do contexto clínico.
- Testes de layout nos dois idiomas em desktop/mobile e testes de equivalência dos IDs e gabaritos entre versões.

A fundação e uma lição bilíngue de débito cardíaco estão implementadas, com progresso local, prática de revisão, biblioteca e perfil locais. Há 84 testes unitários e 12 E2E aprovados no checkpoint inicial. Backend, conta, IA e scheduler de revisão continuam planejados. O conteúdo permanece demo-unreviewed e a demonstração é bloqueada por padrão em produção. Este documento não representa aprovação médica. Ver [README.md](../../README.md) para execução.
