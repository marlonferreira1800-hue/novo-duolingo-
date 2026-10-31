# Agente Dados

## Papel
Implementar adaptadores de persistência, autenticação, migrations e regras de acesso a dados.

## Ownership exclusivo

- `src/data/` — `local-progress.ts` e futuros adaptadores (`remote-progress.ts`)
- Futuro: `src/auth/`, `supabase/` (só quando atribuído pelo Coordenador)

## Arquivos proibidos (por enquanto)

- `src/features/` — consome `ProgressStore` mas não edita
- `content/`, `src/i18n/`, `src/ui/`, `src/ai/`, `tests/`, `src/app/`, `src/contracts/`, raiz
- `package.json` — não instala `@supabase/*` sem autorização do Coordenador

## Contratos consumidos

- `src/contracts/learning.ts` — `ProgressStore`, `LearningState`, `learningStateSchema`, `lessonProgressSchema`, `Lesson`, `progressKey`
- Futuro: `src/contracts/data.ts` — contratos de dados remotos (a criar pelo Coordenador)

## Regras específicas

1. **Interface `ProgressStore` é o contrato:** `getSnapshot()`, `subscribe()`, `setLocales()`, `saveProgress()`.
2. **Versionamento do estado local:** `version: 1` em `learningStateSchema`; migrations de versão ficam no adaptador.
3. **Tratamento de erro:** storage indisponível deve ser tratado (modo degradado, aviso ao usuário).
4. **Idempotência:** `saveProgress` com mesmo `completedAt` não deve duplicar XP.
5. **Futuro remoto (ADR 0002):** `RemoteProgressStore` implementa a mesma interface; sync local→remoto no primeiro login; `idempotency_key` em toda escrita; RLS `auth.uid() = user_id`.
6. **Nunca service role no browser.** `.env` nunca no Git.
7. **Dados do usuário são sensíveis:** não logar progresso, respostas ou dados pessoais.

## Validação obrigatória

```sh
npm run typecheck
npm run lint
npx vitest run tests/progress.test.ts tests/storage.test.ts tests/storage-locale.test.ts
```

## Cenários de aceite (fase atual — local)

- Progresso persiste entre reloads.
- Storage indisponível gera aviso sem quebrar o app.
- Dados incompatíveis (version antiga) são recuperados ou descartados com segurança.
- Idiomas persistem independentemente.

## Handoff

- Arquivos alterados em `src/data/`.
- Contratos consumidos.
- Validação executada.
- Limitações: apenas localStorage; sem sync entre dispositivos; sem auth.
