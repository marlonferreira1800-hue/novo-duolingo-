# D8 — Pacote de revisão médica/editorial (preparação)

Status: **aguardando revisor médico qualificado (humano)**. Este pacote organiza o que precisa ser revisado; nada aqui aprova conteúdo. O gate de produção (`ENABLE_MEDICAL_DEMO=false` por padrão, `src/content/demo-policy.ts`) permanece fechado até decisão de revisão registrada.

## Escopo da revisão

Todo o conteúdo educacional publicado ao estudante está marcado `demo-unreviewed` em `src/contracts/learning.ts` (`status: z.enum(['demo-unreviewed'])`). Itens:

| Item | Arquivo | Revisão | Idiomas |
| --- | --- | --- | --- |
| Lição 1 — Débito cardíaco | `content/cardiac-output.ts` | 1 | pt-BR, en |
| Lição 2 — Ciclo cardíaco | `content/cardiac-cycle.ts` | 1 | pt-BR, en |

Cada lição contém: 3 etapas (título, parágrafos, takeaway, diagrama), 1 questão com 4 alternativas + explicação por alternativa + gabarito (`correctOptionId`).

## Fontes declaradas (a verificar pelo revisor)

- OpenStax, *Anatomy and Physiology 2e*, §19.4 Cardiac Physiology — https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology (citada nas duas lições, `sources[0]`).

Regra do projeto: sem dados de pacientes, sem ilustrações copiadas de atlas/bancos pagos, sem referências não verificadas. Diagramas são originais (`src/features/learning/lesson-diagram.tsx`, `src/ui/heart-art.tsx`).

## Checklist para o revisor (por lição, por idioma)

1. Exatidão clínica de cada etapa e do takeaway (ex.: débito cardíaco = FC × volume sistólico; 75 bpm × 70 mL = 5,25 L/min; ciclo cardíaco: enchimento ventricular, ejeção, relaxamento isovolumétrico; valvas abrem/fecham por gradiente de pressão; bulhas S1/S2 pelo fechamento valvar).
2. Clareza pedagógica e nível adequado ao público (estudantes de medicina, nível basic).
3. Questão: um único gabarito correto, distratores plausíveis, explicações de erro didáticas e sem contradizer o texto.
4. Consistência pt-BR/en: mesmos IDs de etapa/opção, mesma informação, unidades inalteradas (não traduzir unidades silenciosamente).
5. Terminologia: termos técnicos em pt-BR consagrados (ex.: "débito cardíaco", "volume sistólico", "diástole/sístole").
6. O que **não** aprovar: nada de diagnóstico, doses, condutas clínicas ouinerary de paciente real — fora de escopo do produto.

## Processo proposto após a revisão

- Fluxo editorial: `draft → in_review → approved → published` (com `withdrawn`), registrado por revisão+idioma em `review_decisions` (contrato futuro do ADR 0002). Edición clínica ou tradução alterada invalida a aprovação correspondente; histórico é preservado, nunca sobrescrito.
- Publicação exige versão-base e tradução aprovadas + fontes verificadas + revisor autorizado identificado.
- Só então o `status` do contrato pode sair de `demo-unreviewed` e o gate de produção pode ser reavaliado — por decisão humana explícita, nunca automática.

## Limites desta preparação

- Este pacote não é revisão médica e não altera o gate.
- A revisão deve ser feita por profissional qualificado; automação (agentes/testes) só verifica estrutura, schemas e referências disponíveis.
- Até lá, `/app` em produção continua bloqueado e a landing informa indisponibilidade sem links para a demo.
