#!/usr/bin/env node
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const flagSet = new Set(args);
const execute = flagSet.has('--execute');
const skipGate = flagSet.has('--skip-gate');
const filesArg = args.find(a => a.startsWith('--files='));
const ownersArg = args.find(a => a.startsWith('--owners='));
const filterFiles = filesArg ? new Set(filesArg.slice('--files='.length).split(',').map(s => s.trim()).filter(Boolean)) : null;
const filterOwners = ownersArg ? new Set(ownersArg.slice('--owners='.length).split(',').map(s => s.trim()).filter(Boolean)) : null;

const BLOCKED_PATTERNS = [
  /^\.env(?!\.example$)/i,
  /(?:^|\/)\.env\.(?:local|development|production|test)$/i,
  /\.(?:pem|key|p12|pfx|log)$/i,
  /^preview(?:\/|$)/i,
  /^wondering-probe.*\.mjs$/i,
  /^research\/wondering\/authenticated(?:\/|$)/i,
  /^\.ai-runs(?:\/|$)/i,
];

const SECRET_PATTERNS = [
  { id: 'openai-or-api-secret-key', regex: /\bsk-[a-zA-Z0-9_-]{20,}\b/ },
  { id: 'private-key-header', regex: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { id: 'inline-api-key-assignment', regex: /\b(?:OPENAI_API_KEY|AI_API_KEY|SUPABASE_SERVICE_ROLE_KEY)\s*=\s*['"]?[A-Za-z0-9._-]{16,}/ },
];

const OWNER_ORDER = {
  coordinator: 1,
  dados: 2,
  'ai-engineer': 3,
  'content-medico': 4,
  learning: 5,
  'ui-ux': 6,
  qa: 7,
};

const OWNER_COMMIT_META = {
  coordinator: 'feat(contracts): expand AI-native cognitive memory and GitOps contracts',
  dados: 'feat(data): update local persistence and data store adapters',
  'ai-engineer': 'feat(ai): add 3-tier cognitive memory curator and GitOps planner',
  'content-medico': 'feat(content): add bilingual medical lessons and i18n catalog drafts',
  learning: 'feat(learning): expand curriculum tracks, reader and diagram views',
  'ui-ux': 'feat(ui): refine learning shell layout and responsive tokens',
  qa: 'test(qa): expand catalog, accessibility, E2E and AI memory/GitOps evals',
};

function runGit(gitArgs) {
  return execFileSync('git', gitArgs, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).replace(/[\r\n]+$/, '');
}

function runNpm(npmArgs) {
  const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  execFileSync(cmd, npmArgs, { stdio: 'inherit', shell: process.platform === 'win32' });
}

function normalizePath(p) {
  return p.replace(/\\/g, '/').replace(/^"|"$/g, '').trim();
}

function isBlocked(filePath) {
  const p = normalizePath(filePath);
  return BLOCKED_PATTERNS.some(rx => rx.test(p));
}

function classifyOwner(filePath) {
  const p = normalizePath(filePath);
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

const rawStatus = runGit(['status', '--porcelain', '-uall']);
if (!rawStatus) {
  console.log('[ai-git-agent] Working tree is clean. Nothing to commit.');
  process.exit(0);
}

const allFiles = [];
for (const line of rawStatus.split(/\r?\n/)) {
  if (!line.trim()) continue;
  const rawPath = line.slice(3).trim();
  const actualPath = rawPath.includes(' -> ') ? rawPath.split(' -> ').pop() : rawPath;
  if (actualPath) allFiles.push(normalizePath(actualPath));
}

const blockedFiles = allFiles.filter(isBlocked);
const eligibleFiles = [...new Set(allFiles.filter(f => {
  if (isBlocked(f)) return false;
  if (filterFiles && !filterFiles.has(f)) return false;
  if (filterOwners && !filterOwners.has(classifyOwner(f))) return false;
  return true;
}))];

const byOwner = new Map();
for (const file of eligibleFiles) {
  const owner = classifyOwner(file);
  const list = byOwner.get(owner) ?? [];
  list.push(file);
  byOwner.set(owner, list);
}

const groups = [...byOwner.entries()]
  .sort(([a], [b]) => OWNER_ORDER[a] - OWNER_ORDER[b])
  .map(([owner, files], idx) => ({
    order: idx + 1,
    owner,
    commitMessage: OWNER_COMMIT_META[owner],
    files: files.sort(),
  }));

console.log(JSON.stringify({
  mode: execute ? 'execute' : 'dry-run',
  eligibleCount: eligibleFiles.length,
  blockedFiles,
  groups: groups.map(g => ({ order: g.order, owner: g.owner, commitMessage: g.commitMessage, fileCount: g.files.length })),
}, null, 2));

if (!execute) {
  process.exit(0);
}

if (!skipGate) {
  console.log('[ai-git-agent] Running deterministic quality gate (typecheck + lint + test + ai:eval)...');
  runNpm(['run', 'typecheck']);
  runNpm(['run', 'lint']);
  runNpm(['test']);
  runNpm(['run', 'ai:eval']);
}

runGit(['reset']);

for (const group of groups) {
  runGit(['add', '--', ...group.files]);
  const stagedDiff = runGit(['diff', '--cached']);
  for (const rule of SECRET_PATTERNS) {
    if (rule.regex.test(stagedDiff)) {
      runGit(['reset']);
      console.error(`[ai-git-agent] ABORTED: Secret pattern (${rule.id}) detected in group ${group.owner}`);
      process.exit(1);
    }
  }
  runGit(['commit', '-m', group.commitMessage]);
  console.log(`[ai-git-agent] Committed (${group.owner}): ${group.commitMessage}`);
}
