'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, Loader2, ShieldCheck, Bot, ArrowRight, FolderPlus, Compass } from 'lucide-react';
import { catalog } from '../../../content';
import { generateProjectLessonsAction, runAgentOrchestrator } from '@/app/actions/agents';
import type { OrchestratorDraft, OrchestratorRequest } from '@/contracts/ai';
import type { CustomProject, Locale } from '@/contracts/learning';
import { localProgressStore } from '@/data/local-progress';

const RECOMMENDATIONS: Record<Locale, Array<{ id: string; title: string; category: string; prompt: string }>> = {
  'pt-BR': [
    {
      id: 'rec-cardio',
      title: 'Fisiologia do Débito Cardíaco e Ciclo Cardíaco',
      category: 'Fisiologia Cardiovascular',
      prompt: 'Fisiologia do débito cardíaco, pré-carga, pós-carga e fases do ciclo cardíaco',
    },
    {
      id: 'rec-neuro',
      title: 'Potencial de Ação, Sinapses e Neuroanatomia',
      category: 'Neurofisiologia',
      prompt: 'Potencial de ação neuronal, canais de sódio e potássio e condução sináptica',
    },
    {
      id: 'rec-renal',
      title: 'Filtração Glomerular e Equilíbrio Ácido-Base',
      category: 'Fisiologia Renal',
      prompt: 'Filtração glomerular, depuração renal e regulação do equilíbrio ácido-base',
    },
  ],
  en: [
    {
      id: 'rec-cardio',
      title: 'Cardiac Output & Cardiac Cycle Physiology',
      category: 'Cardiovascular Physiology',
      prompt: 'Cardiac output physiology, preload, afterload and cardiac cycle phases',
    },
    {
      id: 'rec-neuro',
      title: 'Action Potential, Synapses & Neuroanatomy',
      category: 'Neurophysiology',
      prompt: 'Neuronal action potential, sodium and potassium channels and synaptic transmission',
    },
    {
      id: 'rec-renal',
      title: 'Glomerular Filtration & Acid-Base Balance',
      category: 'Renal Physiology',
      prompt: 'Glomerular filtration rate, renal clearance and acid-base balance regulation',
    },
  ],
};

function resolveMatchingSectionId(goal: string, locale: Locale): string {
  const normalized = goal.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  for (const section of catalog.course.sections) {
    const title = section.translations[locale].title.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
    const keywords = title.split(/\s+/).filter((word) => word.length > 4);
    if (keywords.some((kw) => normalized.includes(kw.slice(0, 5)))) {
      return section.id;
    }
  }
  return catalog.course.sections[0].id;
}

export function CreatePage({
  studyLocale,
  onOpenProject,
}: {
  studyLocale: Locale;
  onOpenProject?: (project: CustomProject) => void;
}) {
  const t = useTranslations('app');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState<OrchestratorDraft | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function generate(customGoal?: string) {
    const activeGoal = (customGoal ?? goal).trim();
    if (activeGoal.length < 3) return;
    if (customGoal) setGoal(customGoal);
    setLoading(true);
    setError(null);
    setDraft(null);
    const request: OrchestratorRequest = {
      goal: activeGoal,
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

  async function handleSaveAndOpen() {
    if (!draft || saving) return;
    setSaving(true);
    const slugId = `proj-${draft.id.slice(0, 8)}`;
    const sectionId = resolveMatchingSectionId(goal, studyLocale);

    const lessonsResult = await generateProjectLessonsAction({
      projectId: slugId,
      projectTitle: draft.content.draft.title,
      goal: goal.trim() || draft.content.draft.title,
      summary: draft.content.summary,
      body: draft.content.draft.body,
      evidenceKeys: draft.content.draft.evidenceKeys,
      sectionId,
      studyLocale,
    });

    const project: CustomProject = {
      id: slugId,
      title: draft.content.draft.title,
      goal: goal.trim() || draft.content.draft.title,
      summary: draft.content.summary,
      body: draft.content.draft.body,
      evidenceKeys: draft.content.draft.evidenceKeys,
      sectionId,
      createdAt: new Date().toISOString(),
      generatedLessons: lessonsResult.ok ? lessonsResult.lessons : undefined,
    };
    localProgressStore.saveCustomProject(project);
    setSaving(false);
    onOpenProject?.(project);
  }

  const recommendations = RECOMMENDATIONS[studyLocale];

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

    <div className="create-recommendations" data-testid="create-recommendations">
      <span className="eyebrow"><Compass size={14} aria-hidden="true"/> {t('recommendedTopics')}</span>
      <div className="recommendation-grid">
        {recommendations.map((rec) => (
          <button
            key={rec.id}
            type="button"
            className="recommendation-card"
            data-testid={`recommendation-${rec.id}`}
            onClick={() => void generate(rec.prompt)}
          >
            <small>{rec.category}</small>
            <strong lang={studyLocale}>{rec.title}</strong>
            <span><ArrowRight size={14} aria-hidden="true"/></span>
          </button>
        ))}
      </div>
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

      <div className="draft-actions">
        <button
          type="button"
          className="button primary"
          data-testid="save-open-project"
          disabled={saving}
          onClick={() => void handleSaveAndOpen()}
        >
          {saving ? <Loader2 size={16} className="spin" aria-hidden="true"/> : <FolderPlus size={16} aria-hidden="true"/>}
          {saving ? t('generating') : t('saveProjectAndOpen')}
          {!saving && <ArrowRight size={15} aria-hidden="true"/>}
        </button>
      </div>
    </article> : null}
  </section>;
}
