'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, Check, CircleCheck, Lightbulb, ShieldCheck, Sparkles, Star, X } from 'lucide-react';
import type { CourseSection, Lesson, Locale } from '@/contracts/learning';
import { questionOptions } from '@/contracts/learning';

export function ClinicalIntegrationModal({
  section,
  sectionLessons,
  mode,
  studyLocale,
  completed,
  onComplete,
  onClose,
}: {
  section: CourseSection;
  sectionLessons: readonly Lesson[];
  mode: 'advanced' | 'challenge';
  studyLocale: Locale;
  completed: boolean;
  onComplete: () => void;
  onClose: () => void;
}) {
  const t = useTranslations('app');
  const sectionTitle = section.translations[studyLocale].title;
  const anchorLesson = sectionLessons[sectionLessons.length - 1] ?? sectionLessons[0];
  const fallbackMcLesson =
    sectionLessons.find((l) => l.translations[studyLocale].question.type !== 'order') ?? anchorLesson;
  const content = fallbackMcLesson.translations[studyLocale];
  const options = questionOptions(content.question) ?? [];

  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);

  const isCorrect = selected === fallbackMcLesson.correctOptionId;
  const selectedOption = options.find((o) => o.id === selected);

  function handleCheck() {
    if (!selected) return;
    setSubmitted(true);
  }

  function handleFinish() {
    onComplete();
    setFinished(true);
  }

  return (
    <div
      className="integration-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="integration-modal-title"
      data-testid="clinical-integration-modal"
    >
      <div className="integration-modal">
        <header className="integration-modal-header">
          <div>
            <span className="eyebrow">
              <Sparkles size={14} aria-hidden="true"/>{' '}
              {t(mode === 'advanced' ? 'advancedModalBadge' : 'challengeModalBadge')}
            </span>
            <h2 id="integration-modal-title" lang={studyLocale}>
              {t(mode === 'advanced' ? 'advanced' : 'challenge')} · {sectionTitle}
            </h2>
          </div>
          <button
            type="button"
            className="reader-close"
            data-testid="close-integration-modal"
            aria-label={t('close')}
            onClick={onClose}
          >
            <X size={18} aria-hidden="true"/>
          </button>
        </header>

        <div className="tutor-draft-badge">
          <ShieldCheck size={14} aria-hidden="true"/>
          <span>{t('demoNotice')}</span>
        </div>

        {!finished ? (
          <div className="integration-modal-body" lang={studyLocale}>
            <section className="integration-synthesis">
              <h3>
                <Lightbulb size={16} aria-hidden="true"/> {t('clinicalSynthesis')}
              </h3>
              <ol className="integration-takeaway-list">
                {sectionLessons.slice(0, 4).map((lesson) => {
                  const lText = lesson.translations[studyLocale];
                  return (
                    <li key={lesson.id}>
                      <strong>{lText.title}:</strong> {lText.stages[0]?.takeaway}
                    </li>
                  );
                })}
              </ol>
            </section>

            {options.length > 0 ? (
              <section className="integration-quiz">
                <h3>{t('clinicalQuestion')}</h3>
                <p className="integration-prompt">{content.question.prompt}</p>
                <div className="integration-options">
                  {options.map((opt, idx) => (
                    <label
                      key={opt.id}
                      className={`answer-option ${selected === opt.id ? 'selected' : ''} ${
                        submitted && selected === opt.id
                          ? isCorrect
                            ? 'answer-correct'
                            : 'answer-incorrect'
                          : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="integration-option"
                        value={opt.id}
                        disabled={submitted && isCorrect}
                        checked={selected === opt.id}
                        onChange={() => {
                          setSelected(opt.id);
                          setSubmitted(false);
                        }}
                      />
                      <span className="answer-letter" aria-hidden="true">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>

                {submitted && selectedOption ? (
                  <div
                    role="status"
                    className={`answer-feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}
                    data-testid="integration-feedback"
                  >
                    <strong>{t(isCorrect ? 'correct' : 'incorrect')}</strong>
                    <p>{selectedOption.explanation}</p>
                  </div>
                ) : null}
              </section>
            ) : null}

            <footer className="integration-modal-footer">
              {!submitted || !isCorrect ? (
                <button
                  type="button"
                  className="button primary"
                  data-testid="integration-check"
                  disabled={!selected}
                  onClick={handleCheck}
                >
                  {t('checkAnswer')}
                  <Check size={16} aria-hidden="true"/>
                </button>
              ) : (
                <button
                  type="button"
                  className="button primary"
                  data-testid="integration-complete"
                  onClick={handleFinish}
                >
                  {t('completeChallengeAction')}
                  <ArrowRight size={16} aria-hidden="true"/>
                </button>
              )}
            </footer>
          </div>
        ) : (
          <div className="completion-screen" data-testid="integration-completed">
            <div className="completion-icon">
              <CircleCheck size={46} aria-hidden="true"/>
            </div>
            <h3>{t('lessonComplete')}</h3>
            <div className="earned-xp">
              <Star size={18} aria-hidden="true"/>
              {t(completed ? 'alreadyEarned' : 'earned', { count: 30 })}
            </div>
            <button
              type="button"
              className="button primary"
              data-testid="integration-return"
              onClick={onClose}
            >
              {t('returnHome')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
