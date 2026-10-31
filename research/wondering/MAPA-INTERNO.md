# Wondering — mapa da interface autenticada

## Escopo e privacidade

Inspeção autorizada pelo titular após login manual. A conexão utiliza a janela isolada aberta para este trabalho. Não foram exportados cookies, tokens, senhas, storage ou tráfego de rede. O perfil temporário do navegador continua contendo a sessão até que ela seja encerrada ou removida; não está no repositório.

As capturas em `authenticated/` ocultam nome, e-mails e campos de entrada. Retângulos magenta são máscaras de privacidade do Playwright, não elementos do design. Textos JSON também passam por ocultação de nome e e-mails. As imagens e os textos são material de referência, não conteúdo para publicar na nova aplicação.

A inspeção se limitou à navegação: não foram enviados prompts, respostas de exercícios, formulários, compras ou comandos de geração. Abrir telas pode alterar estado transitório do próprio serviço; não foi auditado o backend. Na aba original já havia um vídeo em geração iniciado antes desta inspeção; ela não foi navegada nem interrompida.

## Estrutura real observada

### Shell desktop

- Barra lateral de aproximadamente 256 px; o conteúdo principal começa perto de x=256 e tem margem interna.
- Fundo off-white, painel principal arredondado com borda fina, rolagem interna.
- Navegação: Home, Create, Canvas, Library e Profile.
- Seção contextual: cursos na Home; canvases no Canvas.
- Rodapé da barra lateral: streak/XP, Upgrade e menu do usuário.
- Acesso ao assistente por botão flutuante no canto inferior direito.
- Public Sans para textos, Share Tech Mono para várias ações, fundo #FFFCF0 e CTA #7ACEFF, coerentes com as referências públicas.

### Home — trilha do curso

Referência: `authenticated/home-desktop.png` e `.json`.

- A Home autenticada abre uma trilha, não o hero da página pública.
- Cabeçalho do curso: capa pequena, nome/seletor, Podcast, View Saved, Share e Settings no desktop.
- Cada seção tem cabeçalho com título, contagem de lições e acesso a itens salvos.
- Lições distribuídas verticalmente com deslocamentos laterais e nós circulares com relevo.
- Nó disponível destacado em azul; nós bloqueados mostram cadeado.
- Nome da lição ao lado do nó.
- Advanced Lesson, Section Review e Live Challenge aparecem como etapas distintas.
- Revisão/desafio mostram pré-requisito de conclusão da seção.
- Recomendações e feedback do curso aparecem depois das seções.

Esses elementos estavam visíveis; as regras de desbloqueio, revisão e desafio não foram executadas.

### Mobile

Referência: `authenticated/home-mobile.png` e `.json`, viewport 390 × 844.

- Barra lateral dá lugar a controle compacto superior e navegação inferior flutuante.
- Streak e XP aparecem no topo.
- Card do curso com capa, título, Podcast e menu de opções.
- Trilha mantém nós e cadeados, com títulos quebrando linha.
- Barra inferior em formato de cápsula, com cinco destinos por ícones e assistente separado.

Não implementar somente uma barra lateral encolhida: há uma composição mobile diferente.

### Create

Referência final: `authenticated/create-settled.png` e `.json`.

- Pergunta central: What do you want to learn?
- Subtítulo explica geração de curso personalizado.
- Campo de texto com placeholder I want to learn about...
- Controles de arquivo, referência/livro e entrada por voz visíveis.
- Recomendações personalizadas em lista, com miniatura, categoria, título, autor e justificativa curta.
- Ação Explore Other Courses.
- Durante carregamento, texto informa seleção baseada em papéis, objetivos e interesses.

Não foi enviado texto, arquivo ou áudio. A forma de gerar e refinar a trilha depois do envio ainda não foi observada.

### Library

Referência final: `authenticated/library-settled.png` e `.json`.

- Seletor Browse / My Courses.
- Busca e filtros de categoria e idioma.
- Carrosséis horizontais: Trending, New e categorias temáticas.
- Cards com capa ilustrada, título, número de lições e, em alguns casos, autoria e indicadores de popularidade.
- Menus nos cards e View All por seção.

O catálogo demorou a carregar: as capturas iniciais vazias não representam a experiência final. A seleção de My Courses não foi confirmada porque uma camada sobreposta interceptou o clique. Não alegar que essa aba foi validada.

### Profile

Referência: `authenticated/profile.png` e `.json`.

- Avatar, nome, username e métricas de dias, XP, seguidores e seguindo.
- Card de streak freezes.
- Edit, Add Friends e Share.
- Convite para completar perfil.
- Friend Streaks e espaço para amigos.
- My Progress com Weekly Report, Learning Stats e Course Stats.
- Lista de cursos em aprendizado.

Não foram alterados perfil, amizades ou preferências. Valores observados pertencem a esta conta e não devem virar regras do produto.

### Canvas

Referências: `authenticated/canvas.png`, `canvas-settled.png` e respectivos JSON.

- Área pontilhada com controles de zoom e undo/redo.
- Lista contextual de canvases; aparece Untitled canvas.
- Composer inferior com Web search on e modo Fast.
- Tutorial modal de quatro indicadores; primeira etapa Think in parallel.
- Ilustração de conversas conectadas e explicação sobre explorar múltiplas ideias.

Não foram enviados prompts nem criados nós manualmente. Não foi confirmado se o rascunho inicial é persistido automaticamente. O tutorial pode aparecer com atraso e interceptar a navegação entre áreas. As etapas posteriores do tutorial e a interação com nós não foram verificadas.

## Consequências para a implementação

A reprodução fiel exige duas superfícies: site público e aplicativo autenticado. Prioridade sugerida:

1. Shell desktop/mobile + Home com trilha demonstrativa, bloqueios e estados de progresso.
2. Leitor de lições usando as referências públicas já capturadas; exercícios próprios.
3. Create e Library com recomendações e carrosséis demonstrativos.
4. Profile e componentes de retenção.
5. Persistência, autenticação e geração real por IA.
6. Canvas, multimídia e recursos sociais em entregas identificadas separadamente.

Marca, mascote, capas e conteúdo serão próprios. Preservar estrutura, proporções, hierarquia visual e padrões de interação observados.

## Validação desta pesquisa

- Sessão autenticada confirmada pela navegação interna e elementos da conta.
- Capturas analisadas visualmente em desktop e mobile.
- Formulário Create e catálogo Library registrados novamente após carregamento.
- Script principal `capture_authenticated.py --port PORTA_LOCAL` executado com sucesso na sessão da pesquisa.
- Inspeções adicionais esbarraram em uma camada sobreposta do Canvas ao tentar abrir My Courses/progresso; não contornar a camada nem registrar esses fluxos como concluídos.
- Nenhuma aplicação foi implementada ou testada nesta etapa.
