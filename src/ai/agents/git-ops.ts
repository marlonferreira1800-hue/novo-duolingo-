import 'server-only';
import {
  gitAuditResultSchema,
  type AgentDomainOwner,
  type GitAuditResult,
  type GitCommitGroup,
} from '@/contracts/ai';

const BLOCKED_PATH_PATTERNS: readonly RegExp[] = [
  /^\.env(?!\.example$)/i,
  /(?:^|\/)\.env\.(?:local|development|production|test)$/i,
  /\.(?:pem|key|p12|pfx|log)$/i,
  /^preview(?:\/|$)/i,
  /^wondering-probe.*\.mjs$/i,
  /^research\/wondering\/authenticated(?:\/|$)/i,
  /^\.ai-runs(?:\/|$)/i,
];

const SECRET_DIFF_PATTERNS: readonly { id: string; regex: RegExp }[] = [
  { id: 'openai-or-api-secret-key', regex: /\bsk-[a-zA-Z0-9_-]{20,}\b/ },
  { id: 'mistral-api-secret-key', regex: /\bmstrl_[a-zA-Z0-9_-]{20,}\b/ },
  { id: 'private-key-header', regex: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { id: 'inline-api-key-assignment', regex: /\b(?:OPENAI_API_KEY|AI_API_KEY|SUPABASE_SERVICE_ROLE_KEY)\s*=\s*['"]?[A-Za-z0-9._-]{16,}/ },
];

export function normalizeRepoPath(filePath: string): string {
  return filePath.replace(/\\/g, '/').replace(/^\.\//, '').trim();
}

export function isBlockedGitPath(filePath: string): boolean {
  const normalized = normalizeRepoPath(filePath);
  return BLOCKED_PATH_PATTERNS.some(pattern => pattern.test(normalized));
}

export function classifyFileOwner(filePath: string): AgentDomainOwner {
  const p = normalizeRepoPath(filePath);
  if (p === 'src/app/globals.css' || p.startsWith('src/ui/') || p.startsWith('src/features/shell/') || p.startsWith('src/features/marketing/')) {
    return 'ui-ux';
  }
  if (p.startsWith('src/features/learning/') || p.startsWith('src/features/review/')) {
    return 'learning';
  }
  if (p.startsWith('content/') || p.startsWith('src/i18n/')) {
    return 'content-medico';
  }
  if (p.startsWith('src/ai/')) {
    return 'ai-engineer';
  }
  if (p.startsWith('src/data/') || p.startsWith('src/auth/') || p.startsWith('supabase/')) {
    return 'dados';
  }
  if (p.startsWith('tests/')) {
    return 'qa';
  }
  return 'coordinator';
}

const OWNER_ORDER: Record<AgentDomainOwner, number> = {
  coordinator: 1,
  'dados': 2,
  'ai-engineer': 3,
  'content-medico': 4,
  'learning': 5,
  'ui-ux': 6,
  qa: 7,
};

const OWNER_COMMIT_META: Record<AgentDomainOwner, { id: string; commitMessage: string }> = {
  coordinator: {
    id: 'group-coordinator',
    commitMessage: 'feat(contracts): expand AI-native cognitive memory and GitOps contracts',
  },
  dados: {
    id: 'group-dados',
    commitMessage: 'feat(data): update local persistence and data store adapters',
  },
  'ai-engineer': {
    id: 'group-ai-engineer',
    commitMessage: 'feat(ai): add 3-tier cognitive memory curator and GitOps planner',
  },
  'content-medico': {
    id: 'group-content-medico',
    commitMessage: 'feat(content): add bilingual medical lessons and i18n catalog drafts',
  },
  learning: {
    id: 'group-learning',
    commitMessage: 'feat(learning): expand curriculum tracks, reader and diagram views',
  },
  'ui-ux': {
    id: 'group-ui-ux',
    commitMessage: 'feat(ui): refine learning shell layout and responsive tokens',
  },
  qa: {
    id: 'group-qa',
    commitMessage: 'test(qa): expand catalog, accessibility, E2E and AI memory/GitOps evals',
  },
};

export function auditAndPlanGitChanges(input: {
  files: readonly string[];
  diffText?: string;
}): GitAuditResult {
  const blockedFiles: string[] = [];
  const eligibleFiles: string[] = [];

  for (const raw of input.files) {
    const normalized = normalizeRepoPath(raw);
    if (!normalized) continue;
    if (isBlockedGitPath(normalized)) {
      blockedFiles.push(normalized);
    } else if (!eligibleFiles.includes(normalized)) {
      eligibleFiles.push(normalized);
    }
  }

  const secretFindings: string[] = [];
  const invariantViolations: string[] = [];
  const diff = input.diffText ?? '';

  for (const rule of SECRET_DIFF_PATTERNS) {
    if (rule.regex.test(diff)) {
      secretFindings.push(rule.id);
    }
  }

  // Check medical review gate invariant: never allow flipping medicallyReviewed: true in AI runtime
  if (/^\+.*medicallyReviewed\s*:\s*true\b/m.test(diff)) {
    invariantViolations.push('ai-output-cannot-claim-medically-reviewed');
  }

  const byOwner = new Map<AgentDomainOwner, string[]>();
  for (const file of eligibleFiles) {
    const owner = classifyFileOwner(file);
    const list = byOwner.get(owner) ?? [];
    list.push(file);
    byOwner.set(owner, list);
  }

  const commitGroups: GitCommitGroup[] = [...byOwner.entries()]
    .sort(([a], [b]) => OWNER_ORDER[a] - OWNER_ORDER[b])
    .map(([owner, files], idx) => ({
      id: OWNER_COMMIT_META[owner].id,
      owner,
      commitMessage: OWNER_COMMIT_META[owner].commitMessage,
      files: files.sort(),
      order: idx + 1,
    }));

  const safe = secretFindings.length === 0 && invariantViolations.length === 0;

  return gitAuditResultSchema.parse({
    safe,
    blockedFiles,
    secretFindings,
    invariantViolations,
    commitGroups,
  });
}
