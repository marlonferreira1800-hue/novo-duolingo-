'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, Loader2, ShieldCheck, Bot, ArrowRight } from 'lucide-react';
import { runAgentOrchestrator } from '@/app/actions/agents';
import type { OrchestratorDraft, OrchestratorRequest } from '@/contracts/ai';
import type { Locale } from '@/contracts/learning';

export function CreatePage({ studyLocale }: { studyLocale: Locale }) {
  const t = useTranslations('app');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState<OrchestratorDraft | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    if (goal.trim().length < 3) return;
    setLoading(true);
    setError(null);
    setDraft(null);
    const request: OrchestratorRequest = {
      goal: goal.trim(),
      studyLocale,
      level: 'basic',
      maxSteps: 4,
    };
    const result = await runAgentOrchestrator(request);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
    } else {
      setDraft(result.draft);
    }
  }

  return <section className="create-page">
    <span className="eyebrow"><Sparkles size={16} aria-hidden="true"/> {t('create')}</span>
    <h1>{t('createHeading')}</h1>
    <p className="page-description">{t('createDescription')}</p>

    <div className="create-composer">
      <textarea
        data-testid="create-goal"
        aria-label={t('createPlaceholder')}
        placeholder={t('createPlaceholder')}
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        rows={3}
        maxLength={500}
      />
      <button
        className="button primary"
        data-testid="create-generate"
        disabled={loading || goal.trim().length < 3}
        onClick={() => void generate()}
      >
        {loading ? <Loader2 size={16} className="spin" aria-hidden="true"/> : <Sparkles size={16} aria-hidden="true"/>}
        {loading ? t('generating') : t('generate')}
      </button>
    </div>

    {error ? <p role="alert" className="create-error" data-testid="create-error">{t('createError')} ({error})</p> : null}

    {draft ? <article className="create-draft" data-testid="create-draft">
      <header className="draft-header">
        <span className="demo-badge"><ShieldCheck size={14} aria-hidden="true"/> {t('demo')}</span>
        <h2 lang={studyLocale}>{draft.content.draft.title}</h2>
        <p className="draft-status">{t('draftStatus')}</p>
      </header>
      <p lang={studyLocale} className="draft-body">{draft.content.draft.body}</p>
      <p className="draft-summary">{draft.content.summary}</p>

      <details className="agent-trace" data-testid="agent-trace">
        <summary><Bot size={15} aria-hidden="true"/> {t('agentTrace')} ({draft.provenance.agentTrace.length})</summary>
        <ol>
          {draft.provenance.agentTrace.map((step, i) => (
            <li key={i}>
              <strong>{step.agentId}</strong> ({step.role}) — {step.action}
              {step.handoffTo ? <> <ArrowRight size={12} aria-hidden="true"/> {step.handoffTo}</> : null}
            </li>
          ))}
        </ol>
      </details>

      <p className="draft-evidence">
        {t('sourcesTitle')}: {draft.content.draft.evidenceKeys.join(', ')}
      </p>
    </article> : null}
  </section>;
}
