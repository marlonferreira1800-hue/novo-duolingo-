# Referência e plano de reprodução do Wondering

## Objetivo

Construir uma aplicação visual e funcionalmente semelhante ao Wondering observado no navegador, especializada em estudantes de medicina — não um painel hospitalar nem um aplicativo genérico de cursos. A direção de produto, o recorte inicial e os critérios de qualidade médica estão em [MEDICINA.md](MEDICINA.md). Usar marca, ilustrações e conteúdo próprios. Capturas são referências de pesquisa, não ativos para publicação. Não apresentar selo de apoio da YC, depoimentos, números de usuários ou logotipos institucionais como se pertencessem ao novo produto.

## Método e evidências

Primeira etapa: navegação pública real com Playwright, sem autenticação, pagamentos ou criação de conta. Segunda etapa: inspeção autenticada autorizada após login manual do titular, documentada em [MAPA-INTERNO.md](MAPA-INTERNO.md), com referências em `authenticated/` e dados pessoais ocultos. Resoluções: desktop 1366 × 900 e início mobile 390 × 844. Os scripts capture_reference.py e capture_flows.py salvam capturas PNG e registros JSON com texto e controles; o primeiro também registra estilos computados. Dependência de pesquisa: `uv run --with playwright python research/wondering/capture_reference.py` e equivalente para capture_flows.py. Requer Chromium do Playwright instalado. Esses scripts são observacionais e dependem da disponibilidade e das mudanças do site externo.

### Superfícies verificadas

| Área | Referência | Observações |
| --- | --- | --- |
| Início desktop | home-desktop.png / .json | Cabeçalho compacto, hero central, fundo claro, halo azul, CTA azul com relevo, sugestão de assuntos e demonstrações abaixo |
| Início mobile | home-mobile.png / .json | Banner superior, cabeçalho reduzido com menu, título e CTAs empilhados |
| Entrada | start-learning.png / .json | Start Learning leva a /get-started, com boas-vindas, convite Discord e Let's Go |
| Explorar | explore.png / .json | Título, explicação, filtros de categoria e idioma; cursos não apareceram durante a captura. Não concluir que o catálogo é vazio |
| Personalização de IA | personalize.png / .json | Introdução, benefícios e botão Continue; etapas posteriores não foram verificadas |
| Curso público | public-course.png / .json | Capa, descrição, módulos, lições, duração, objetivo, fontes, personalização e mapa de aprendizagem |
| Prévia da lição | lesson-preview.png / .json | Abre o leitor sem login; introdução com pergunta e diagramas, navegação Back/Next |
| Etapa seguinte | lesson-next.png / .json | Indicador de progresso, título, diagrama central, explicação e Check My Understanding |
| Autenticação | sign-in.png / .json | Modal aberto pelo Sign In: Google, email e acesso a conta existente |

Curso inspecionado: https://wondering.app/learn/attention-is-all-you-need-zp2vvu . Exibia 7 seções, 21 lições e aproximadamente 63 minutos. Não usar esses valores como regra para todo curso.

### Limites da observação

- Não foi criada uma conta pelo agente. O titular realizou login manual e autorizou a inspeção interna; ver MAPA-INTERNO.md para o escopo atualizado.
- O clique em Let's Go não produziu um avanço confirmado nas capturas; não inferir o restante desse fluxo.
- O formulário posterior ao Continue não foi capturado. A renderização apresentou variação de carregamento entre visitas.
- Não foram enviados respostas, prompts de tutor, pedidos de geração ou compras. XP, streaks e recursos sociais foram observados na interface interna, mas suas regras não foram testadas.
- Não confundir botões visíveis com funcionalidades integralmente verificadas.
- XP, streaks, FSRS, tutor, áudio e vídeo são descritos publicamente. Foram observados controles de XP/streak, assistente e Podcast, além de uma tela de vídeo em geração já aberta pelo titular. Detalhes internos desses serviços continuam desconhecidos.
- Este diretório contém referências e scripts. A raiz do projeto agora também contém a fundação e uma lição médica bilíngue funcional; ver README.md e ARQUITETURA.md na raiz. As funcionalidades restantes abaixo continuam sendo planejamento.

## Linguagem visual observada

Valores computados, não estimativas:

- Fundo: rgb(255, 252, 240), equivalente a #FFFCF0.
- Texto principal: rgb(38, 20, 18), equivalente a #261412.
- CTA azul observado: rgb(122, 206, 255), equivalente a #7ACEFF.
- Texto/interface: Public Sans, com fallbacks de sistema.
- Ações: Share Tech Mono, geralmente em maiúsculas.
- Título da introdução /learn-ai: Inter.
- Botões principais observados: raio de 12 px; login: 8 px.
- Título do curso desktop: 30 px; título da introdução de IA: 36 px.

Outras características observadas: bordas finas, sombras inferiores de relevo, grandes espaços vazios, coluna central estreita no curso, azul como ação principal e diagramas com amarelo/verde/azul. Reproduzir proporções usando as capturas, não somente as cores.

## Plano de implementação

### 1. Base visual, shell autenticado e início

A inspeção autenticada passou a ser a referência principal para a experiência do aplicativo. Consultar MAPA-INTERNO.md antes de implementar: a Home interna é uma trilha com nós, não um painel genérico.

- Next.js, TypeScript e CSS/Tailwind; componentes acessíveis.
- Barra lateral desktop, painel arredondado, navegação inferior mobile e acesso flutuante ao assistente.
- Home com card do curso, seções, nós disponíveis/bloqueados, Advanced Lesson, Section Review e Live Challenge.
- Create com composer e recomendações, Library com busca/filtros/carrosséis e Profile com métricas.
- Tokens para cores, fontes, bordas e relevo.
- Header desktop/mobile, hero, CTAs, sugestões e blocos demonstrativos.
- Identidade provisória própria; sem mascote, capa ou marcas de terceiros reutilizadas.
- Estados de foco, hover, pressionado e movimento reduzido.

Aceite: comparar capturas nas mesmas resoluções, verificando posições, dimensões, quebras de texto, espaçamento e hierarquia. Documentar diferenças intencionais de marca e texto.

### 2. Curso público e leitor — prioridade funcional

- Conteúdo demonstrativo próprio de fisiologia cardiovascular para estudantes de medicina, identificado como demonstrativo até revisão médica/editorial.
- Curso com capa própria, descrição, metadados, módulos, objetivos e fontes.
- View Path, Learning Map, Personalize e Sources como ações separadas.
- Prévia sem login, com progresso por etapas, diagramas e Back/Next.
- Check My Understanding com exercício e feedback; comportamento será proposto onde ainda não foi observado.
- Leitor responsivo com controles inferiores sem encobrir o conteúdo.

Aceite: percorrer a prévia, voltar, sair e reabrir; comparar curso e leitor com as referências. Testar navegação por teclado.

### 3. Entrada, personalização e autenticação

- Reproduzir a estrutura das telas observadas com textos próprios.
- Confirmar etapas não observadas antes de alegar fidelidade ao onboarding completo.
- Autenticação com Supabase; Google e email conforme configuração disponível.
- Estados de envio, erro, recuperação e sessão expirada.

Aceite: fluxo de conta funcional e nenhuma credencial no cliente ou no repositório.

### 4. Persistência e geração por IA

- PostgreSQL/Supabase com permissões por usuário.
- Estruturas: perfis, cursos, módulos, lições, etapas, exercícios, inscrições, progresso e tentativas.
- Gerar primeiro o plano; lições sob demanda, persistidas e validadas por schema.
- Chamadas somente no servidor; cotas, limites e controle de falhas.
- Tutor contextual e ação de denunciar conteúdo incorreto.
- Não prometer verificação factual sem processo real de fontes e revisão. Para medicina, aplicar as barreiras de fontes, contexto clínico, revisão médica e separação entre rascunho e conteúdo publicado definidas em MEDICINA.md.

Aceite: retomar um curso entre sessões, evitar regeneração indevida e impedir acesso a dados de outros usuários.

### 5. Retenção e multimídia

- XP e conclusão idempotentes; streaks com política de fuso horário explícita.
- Revisão espaçada com biblioteca FSRS após validar os requisitos.
- Áudio, vídeo e planos pagos em entregas posteriores, sem anunciá-los como funcionais antes da integração.

## Testes previstos

- Vitest: progressão, tentativas, cálculo de XP, datas e agendamento de revisão.
- Playwright: início → curso → prévia → exercício → resultado; autenticação e retomada quando implementadas.
- Comparação visual em 1366 × 900 e 390 × 844; snapshots da nova aplicação, com referências externas apenas para revisão.
- Acessibilidade: teclado, foco, nomes acessíveis, contraste e redução de movimento.
- IA: saída inválida, timeout, indisponibilidade, cotas e repetição de requisição.

## Próxima entrega concreta

Implementar shell autenticado desktop/mobile, Home com trilha e leitor demonstrativo com fidelidade às referências disponíveis. Diferenciar o site público da Home interna. Depois implementar Create, Library e Profile usando MAPA-INTERNO.md; Canvas terá entrega separada. Banco e IA entram após validar o fluxo demonstrativo. Não começar por um dashboard inventado.
