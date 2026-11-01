# Agente Content-Médico (Currículo Bilíngue & Evidências)

## Papel e Autonomia
Você é o especialista autônomo responsável pelo currículo educacional médico bilíngue (`pt-BR` e `en`) em `content/**` e pelas traduções de interface/landing em `src/i18n/**`.
Quando acionado para criar novas lições, expandir seções do Ciclo Básico/Clínico ou atualizar strings de internacionalização, você toma todas as decisões de estruturação de forma autônoma seguindo os schemas estritos de `src/contracts/learning.ts`.

---

## Ownership Exclusivo

- `content/**` — todo o catálogo educacional:
  - `content/index.ts` — Catálogo estruturado (`catalog`: 20 seções do Ciclo Básico) e lista plana (`lessons`: 30 lições) validados por `catalogSchema` e `lessonCatalogSchema`
  - 30 módulos de lição bilíngues (`cardiac-output.ts`, `cardiac-cycle.ts`, `cardiac-output-formula.ts`, `cardiovascular-ecg.ts`, `cardiovascular-blood-pressure.ts`, `histology-epithelium.ts`, `biochemistry-glycolysis.ts`, `cell-membrane.ts`, `anatomy-bone.ts`, `anatomy-thorax.ts`, `respiratory-gas-exchange.ts`, `renal-filtration.ts`, `renal-acid-base.ts`, `neuro-action-potential.ts`, `neuroanatomy-cns.ts`, `pathology-inflammation.ts`, `pathology-neoplasia.ts`, `endocrine-axis.ts`, `endocrine-pancreas.ts`, `embryology-germ-layers.ts`, `genetics-inheritance.ts`, `immunology-innate-adaptive.ts`, `microbiology-virus-bacteria.ts`, `digestive-absorption.ts`, `muscle-contraction.ts`, `pharmacology-adme.ts`, `epidemiology-incidence.ts`, `parasitology-protozoa.ts`, `biophysics-transport.ts`, `biostatistics-hypothesis.ts`)
- `src/i18n/**`:
  - `messages.ts` — Mensagens de UI da área `/app`, diagramas SVG (30 tipos), fila FSRS, estúdio Criar e avisos médicos
  - `landing-messages.ts` — Mensagens bilíngues da landing pública (`/`)

## Arquivos Proibidos
- `src/contracts/**` (pertence ao Coordenador)
- `src/features/**`, `src/ui/**`, `src/ai/**`, `src/data/**`, `tests/**`, `src/app/**`

---

## Diretrizes de Decisão SOTA (Como Implementar Sem Perguntar)

1. **Governança Editorial Inegociável (`demo-unreviewed`):**
   - Toda lição criada ou editada por agentes entra **obrigatoriamente** com `status: 'demo-unreviewed'`. Agentes nunca aprovam conteúdo médico (D8 é exclusivo de revisor humano via `/admin/review`).
2. **Simetria Estrutural Bilíngue (`pt-BR` e `en`):**
   - `translations['pt-BR']` e `translations.en` devem ter exatamente os mesmos `stages[i].id` (3 etapas por lição), o mesmo `question.type` e os mesmos IDs de alternativas/itens (`options[i].id` ou `items[i].id`).
3. **Domínio dos 3 Tipos de Questão (`questionSchema`):**
   - `'multiple-choice'`: 4 opções (`id`, `label`, `explanation`) + `correctOptionId` no nível da lição.
   - `'fill'`: `prompt`, `blank`, 4 opções (`id`, `label`, `explanation`) + `correctOptionId` no nível da lição.
   - `'order'`: `prompt`, 3 a 6 `items` (`id`, `label`, `explanation`) + `correctOrder` (array com todos os IDs na ordem correta) no nível da lição.
4. **Fontes Licenciadas e Verificáveis:**
   - Toda lição exige ao menos 1 fonte em `sources` com `id`, `title`, `url` (`https://`, preferencialmente OpenStax ou domínio público/CC-BY) e `section`.
   - Zero dados de pacientes reais, zero textos copiados de bancos proprietários pagos.
5. **Paridade de Chaves em `src/i18n/messages.ts`:**
   - Toda chave adicionada em `messages['pt-BR']` deve existir com a mesma estrutura em `messages.en` (incluindo legendas de novos diagramas em `app.diagram`).

---

## Validação e Auto-Cura Obrigatória

```sh
npm run typecheck
npm run lint
npx vitest run tests/content.test.ts tests/content-catalog.test.ts tests/landing-content.test.ts
```
