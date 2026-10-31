# ADR 0002 — Planejamento de Supabase/Auth e contratos de dados (D4)

Status: proposto — somente planejamento. Nenhum código de backend, nenhuma dependência de Supabase instalada, nenhuma conta/projeto criado. Implementação só após aprovar estes contratos.

## Contexto

- Hoje o progresso é 100% local: `localStorage` sob a chave `medora.learning.v1`, servido por `ProgressStore` (`src/contracts/learning.ts`) e implementado por `src/data/local-progress.ts`. Não existe conta, sessão ou isolamento entre usuários.
- A ARQUITETURA.md define a etapa 3 ("Conta e backend real") exigindo login, isolamento entre usuários, operações idempotentes e proteção real de gabaritos/rascunhos — mocks não comprovam RLS.
- D5 (provedor de IA live com quotas por usuário) e D6 (FSRS) permanecem bloqueadas até existir identidade e persistência reais. Este documento fecha os contratos que elas consumirão.

## Decisão proposta

### 1. Provedor e fronteira de segredos

- Supabase como provedor único inicial: Auth (email magic link; OAuth como decisão posterior), PostgreSQL com RLS e Storage apenas se necessário.
- `SUPABASE_URL` + `SUPABASE_ANON_KEY` no cliente; `SUPABASE_SERVICE_ROLE_KEY` exclusivamente no servidor (jobs/worker). Variáveis novas entram em `.env.example` como placeholders vazios; `.env` real nunca vai para o Git.
- Nenhum componente acessa tabela diretamente: sempre via serviço/adaptador definido por contrato em `src/contracts/`.

### 2. Contratos de dados (a fechar antes de qualquer código)

Criar `src/contracts/data.ts` com schemas Zod espelhando as tabelas abaixo. Nomes de tabela são conceituais; o schema SQL final fica em `supabase/migrations/` (dono: dados).

| Tabela | Campos principais | Invariantes |
| --- | --- | --- |
| `profiles` | `id` (ref `auth.users`), `ui_locale`, `study_locale`, `timezone`, timestamps | RLS: usuário só lê/escreve a própria linha; 1:1 com `auth.users` |
| `lesson_progress` | `user_id`, `lesson_id`, `lesson_revision`, `stage`, `selected_option_id`, `submitted`, `completed_at`, `updated_at` | PK `(user_id, lesson_id, lesson_revision)`; `completedAt` nunca retrocede (idempotente, como hoje em `updateProgress`) |
| `attempts` | `id`, `user_id`, `lesson_id`, `question_id`, `selected_option_id`, `correct`, `created_at` | somente INSERT, imutável; nunca expõe gabarito |
| `xp_events` | `idempotency_key` (unique), `user_id`, `lesson_id`, `amount`, `reason`, `created_at` | unicidade por chave de requisição + unicidade semântica `(user_id, lesson_id, reason='lesson_completed')` — recompensa repetida com outra chave é bloqueada |
| `review_cards` | `user_id`, `question_id`, `due_at`, `state`, timestamps | base futura do D6; agendamento vincula-se à questão, não à string traduzida |
| `courses`, `lessons`, `content_revisions`, `localized_content` | catálogo versionado por `revision` + `locale` + `status` (`draft → in_review → approved → published`/`withdrawn`) | leitura pública somente de `published`; rascunhos exigem papel editorial |
| `questions`, `options`, `answer_keys`, `question_localizations` | IDs de alternativas estáveis entre locales | `answer_keys` nunca em SELECT público; servido por server action que retorna só feedback |
| `review_decisions` | `content_revision_id`, `locale`, `reviewer_id`, `decision`, `decided_at` | histórico preservado, nunca sobrescrito |
| `ai_runs` / `usage_events` | `user_id`, `provider_id`, `prompt_id`, `prompt_version`, `outcome`, `usage`, `elapsed_ms`, `created_at` | base das quotas do D5; **nunca** logar prompts crus, excerpts de fonte ou mensagens de erro do provedor |

### 3. Contrato de código para progresso remoto

- Novo `RemoteProgressStore` implementando a mesma interface `ProgressStore`, em `src/data/remote-progress.ts`, consumindo `src/contracts/data.ts`.
- Estratégia de escrita: server actions/services com validação Zod no servidor; identidade vem da sessão (`auth.uid()`), nunca de `user_id` enviado pelo cliente; toda escrita leva `idempotency_key` (uuid v4 gerado no cliente) com unique constraint.
- Sincronização local→remoto: no primeiro login, o estado de `medora.learning.v1` é enviado (somente lições com `completedAt` e preferências); depois o remoto é authoritative. Modo local/convidado continua como fallback com aviso honesto de "não sincroniza".
- Migração de versão: `learningStateSchema.version` sobe para 2 no contrato novo; o adaptador local mantém o caminho de upgrade/recuperação já existente (status `recovered`).

### 4. Segurança e RLS

- RLS habilitado em todas as tabelas de dados de aluno; políticas padrão `auth.uid() = user_id`.
- Papéis editorial/admin com autorização distinta (claims ou tabela de papéis), nunca no cliente.
- Gabaritos e rascunhos clínicos protegidos por serviço/RLS — não apenas escondidos na UI.
- Exclusão de conta: cascade a partir de `auth.users` + política de retenção a definir (LGPD): progresso é dado pessoal.

### 5. O que fica fora desta entrega

- Não instalar `@supabase/*`, não criar `supabase/`, não implementar login. D5 e D6 continuam bloqueadas até a etapa 3 ser implementada de verdade.

## Consequências

- Contratos fechados antes do código evitam retrabalho e permitem testar o adaptador remoto contra o emulador local do Supabase antes de qualquer conta real.
- O modo local permanece como fallback offline/erro, com UI honesta sobre sincronização.
- Custo operacional novo: projeto Supabase, migrations versionadas, políticas RLS revisadas a cada mudança de schema.
- Quotas de IA (D5) passam a ser possíveis por `user_id` via `usage_events`.

## Alternativas rejeitadas

- Backend próprio sem Supabase (route handlers + ORM próprio): auth, RLS e sessões exigiriam código próprio sem necessidade medida nesta fase.
- Continuar só com localStorage + sync posterior anônimo: não entrega isolamento real nem quotas por usuário; bloquearia D5/D6 indefinidamente.
- Criar repositório genérico único para todos os dados: viola a regra de contratos pequenos por operação (carregar trilha, concluir lição, registrar tentativa).

## Questões em aberto (decisão humana)

1. Provedores de login: email magic link apenas, ou OAuth (Google/Apple) na etapa 3?
2. Política de retenção/exclusão de dados de progresso (LGPD) e quem opera a exclusão.
3. Orçamento/quotas de IA por usuário para o D5 (teto por dia, por plano).
4. Fuso horário padrão e regras de "dia de estudo" para streaks/revisão.
5. Storage de arquivos do usuário é necessário no MVP ou fica para a etapa 5?

## Critérios de aceite da implementação futura (etapa 3)

Login e retomada entre sessões; dois usuários com isolamento comprovado por testes de banco reais (não mocks); operações idempotentes sob requisições repetidas/concorrentes; gabaritos e rascunhos inacessíveis a estudantes; E2E cobrindo trilha → lição → exercício → persistência remota nos dois idiomas.
