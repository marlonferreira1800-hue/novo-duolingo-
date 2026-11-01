'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Bot, Loader2, Send, ShieldCheck, Sparkles, X } from 'lucide-react';
import { askTutorAction } from '@/app/actions/tutor';
import type { TutorDraft, TutorRequest } from '@/contracts/ai';
import type { Locale } from '@/contracts/learning';

export function TutorDrawer({
  open,
  onClose,
  studyLocale,
  lessonId,
  lessonTitle,
}: {
  open: boolean;
  onClose: () => void;
  studyLocale: Locale;
  lessonId?: string;
  lessonTitle?: string;
}) {
  const t = useTranslations('app');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState<TutorDraft | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  async function ask(customQuestion?: string) {
    const q = (customQuestion ?? question).trim();
    if (q.length < 3) return;
    if (customQuestion) setQuestion(customQuestion);
    setLoading(true);
    setError(null);
    const request: TutorRequest = {
      question: q,
      ...(lessonId ? { lessonId } : {}),
      studyLocale,
      level: 'basic',
    };
    const result = await askTutorAction(request);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
    } else {
      setDraft(result.draft);
    }
  }

  return (
    <aside
      className="tutor-drawer"
      role="dialog"
      aria-labelledby="tutor-drawer-title"
      data-testid="tutor-drawer"
    >
      <header className="tutor-drawer-header">
        <div className="tutor-drawer-title-wrap">
          <span className="eyebrow">
            <Bot size={15} aria-hidden="true"/> {t('askTutor')}
          </span>
          <h2 id="tutor-drawer-title">{t('tutorHeading')}</h2>
          {lessonTitle ? <small className="tutor-context-lesson" lang={studyLocale}>{lessonTitle}</small> : null}
        </div>
        <button
          type="button"
          className="reader-close"
          data-testid="close-tutor"
          aria-label={t('close')}
          onClick={onClose}
        >
          <X size={18} aria-hidden="true"/>
        </button>
      </header>

      <p className="tutor-drawer-sub">{t('tutorSubheading')}</p>

      <div className="tutor-composer">
        <textarea
          data-testid="tutor-input"
          aria-label={t('tutorPlaceholder')}
          placeholder={t('tutorPlaceholder')}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={3}
          maxLength={500}
        />
        <button
          type="button"
          className="button primary"
          data-testid="tutor-submit"
          disabled={loading || question.trim().length < 3}
          onClick={() => void ask()}
        >
          {loading ? <Loader2 size={15} className="spin" aria-hidden="true"/> : <Send size={15} aria-hidden="true"/>}
          {loading ? t('tutorThinking') : t('tutorSend')}
        </button>
      </div>

      {error ? (
        <p role="alert" className="create-error" data-testid="tutor-error">
          {t('createError')} ({error})
        </p>
      ) : null}

      {draft ? (
        <article className="tutor-response" data-testid="tutor-response">
          <div className="tutor-draft-badge">
            <ShieldCheck size={14} aria-hidden="true"/>
            <span>{t('draftStatus')}</span>
          </div>
          <p className="tutor-answer" lang={studyLocale}>{draft.content.answer}</p>
          <p className="tutor-evidence" data-testid="tutor-evidence">
            <strong>{t('tutorEvidence')}:</strong> {draft.content.evidenceKeys.join(', ')}
          </p>
          {draft.content.followUpSuggestions && draft.content.followUpSuggestions.length > 0 ? (
            <div className="tutor-followups">
              <span className="eyebrow">
                <Sparkles size={13} aria-hidden="true"/> {t('tutorFollowUps')}
              </span>
              <div className="tutor-followup-list">
                {draft.content.followUpSuggestions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="tutor-followup-chip"
                    data-testid={`tutor-followup-${idx}`}
                    onClick={() => void ask(item)}
                  >
                    <span lang={studyLocale}>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </article>
      ) : null}
    </aside>
  );
}
