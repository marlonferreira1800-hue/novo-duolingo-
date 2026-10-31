'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, CircleCheck, Lightbulb, RotateCcw, Star, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Lesson, LessonProgress, LearningState, Locale } from '@/contracts/learning';
import { LanguageControls } from '@/features/shell/learning-shell';
import { messages } from '@/i18n/messages';
import { completeLesson, recordAnswer } from './progress';
import { LessonDiagram } from './lesson-diagram';

type Phase = 'content' | 'quiz' | 'result';
export function LessonReader({ lesson, progress, state, onSave, onExit, onLocales, reviewOnly = false }: {
  lesson: Lesson; progress: LessonProgress; state: LearningState; onSave: (progress: LessonProgress) => void;
  onExit: () => void; onLocales: (ui: Locale, study: Locale) => void; reviewOnly?: boolean;
}) {
  const t = useTranslations('app');
  const d = messages[state.studyLocale];
  const content = lesson.translations[state.studyLocale];
  const [phase, setPhase] = useState<Phase>(reviewOnly || progress.selectedOptionId ? 'quiz' : 'content');
  const [stage, setStage] = useState(progress.stage);
  const [selected, setSelected] = useState<string | null>(reviewOnly ? null : progress.selectedOptionId);
  const [submitted, setSubmitted] = useState(reviewOnly ? false : progress.submitted);
  const wasCompleted = useRef(Boolean(progress.completedAt));
  const headingRef = useRef<HTMLHeadingElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const correct = selected === lesson.correctOptionId;
  const active = content.stages[stage];
  const stepIndex = phase === 'content' ? stage : phase === 'quiz' ? 3 : 4;
  useEffect(() => { headingRef.current?.focus({ preventScroll: true }); window.scrollTo(0, 0); }, [phase, stage]);
  useEffect(() => { if (submitted) feedbackRef.current?.focus({ preventScroll: true }); }, [submitted]);
  function advance(nextStage: number) {
    setStage(nextStage);
    onSave({ ...progress, stage: nextStage, selectedOptionId: null, submitted: false });
  }
  function select(id: string) {
    setSelected(id); setSubmitted(false);
    if (!reviewOnly) onSave({ ...progress, selectedOptionId: id, submitted: false });
  }
  function submit() {
    if (!selected) return;
    setSubmitted(true);
    if (!reviewOnly) onSave(recordAnswer(lesson, progress, selected));
  }
  function finish() {
    if (!submitted || !correct) return;
    if (!reviewOnly && selected) onSave(completeLesson(lesson, recordAnswer(lesson, progress, selected)));
    setPhase('result');
  }
  const option = content.question.options.find((item) => item.id === selected);
  return <div className="reader">
    <a className="skip-link" href="#reader-main">{t('skipToContent')}</a>
    <header className="reader-header"><button className="icon-button" aria-label={t('exit')} onClick={onExit}><X size={23} aria-hidden="true"/></button><div className="step-dots" role="progressbar" aria-label={t('lessonProgress')} aria-valuemin={0} aria-valuemax={5} aria-valuenow={stepIndex + 1}>{[0, 1, 2, 3, 4].map((index) => <span key={index} aria-hidden="true" className={index === stepIndex ? 'current' : index < stepIndex ? 'done' : ''}/>)}</div><span className="reader-xp"><Star size={15} aria-hidden="true"/> {lesson.xp} XP</span></header>
    <div className="reader-languages"><LanguageControls state={state} onChange={onLocales}/></div>
    <main className="reader-body" id="reader-main" tabIndex={-1}>
      <div className="reader-kicker"><span>{t(reviewOnly ? 'reviewMode' : 'foundational')}</span><span>{t('step', { current: stepIndex + 1, total: 5 })}</span></div>
      {phase === 'content' && <section lang={state.studyLocale}>
        <h1 ref={headingRef} tabIndex={-1}>{active.title}</h1>
        <LessonDiagram kind={active.diagram} locale={state.studyLocale}/>
        <div className="lesson-copy">{active.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <aside className="takeaway"><Lightbulb size={20} aria-hidden="true"/><div><span>{d.keyIdea}</span><p>{active.takeaway}</p></div></aside>
      </section>}
      {phase === 'quiz' && <section>
        <h1 ref={headingRef} tabIndex={-1}>{t('checkUnderstanding')}</h1>
        <fieldset className="quiz" lang={state.studyLocale} disabled={submitted}><legend>{content.question.prompt}</legend><p className="quiz-instruction">{d.questionLabel}</p>{content.question.options.map((answer, index) => <label key={answer.id} className={`answer-option ${selected === answer.id ? 'selected' : ''} ${submitted && selected === answer.id ? correct ? 'answer-correct' : 'answer-incorrect' : ''}`}><input type="radio" name="cardiac-output-answer" value={answer.id} checked={selected === answer.id} onChange={() => select(answer.id)}/><span className="answer-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span>{answer.label}</span>{selected === answer.id && <Check size={18} aria-hidden="true"/>}</label>)}</fieldset>
        {submitted && option && <div ref={feedbackRef} tabIndex={-1} className={`answer-feedback ${correct ? 'correct-feedback' : 'incorrect-feedback'}`} role="status"><strong>{t(correct ? 'correct' : 'incorrect')}</strong><p lang={state.studyLocale}>{option.explanation}</p></div>}
      </section>}
      {phase === 'result' && <section className="completion-screen"><div className="completion-icon"><CircleCheck size={52} aria-hidden="true"/></div><span className="eyebrow">{t('foundational')}</span><h1 ref={headingRef} tabIndex={-1}>{t(reviewOnly ? 'reviewComplete' : 'lessonComplete')}</h1><p>{t(reviewOnly ? 'reviewDoneDescription' : 'completeDescription')}</p>{!reviewOnly && <div className="earned-xp"><Star size={20} aria-hidden="true"/>{t(wasCompleted.current ? 'alreadyEarned' : 'earned', { count: lesson.xp })}</div>}<div className="completion-summary" lang={state.studyLocale}><span>{d.keyIdea}</span><strong>{d.formula}</strong><p>{content.stages[2].takeaway}</p></div></section>}
      <details className="lesson-sources"><summary><BookOpen size={15} aria-hidden="true"/>{t('sourcesTitle')}</summary>{lesson.sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.title} · {source.section} ↗</a>)}</details>
      <p className="reader-disclaimer">{t('demoNotice')}</p>
    </main>
    <footer className="reader-actions">{phase === 'result' ? <button className="button primary full-width" onClick={onExit}>{t('returnHome')}<ArrowRight size={18} aria-hidden="true"/></button> : <><button className="button secondary reader-back" onClick={() => { if (phase === 'quiz' && !reviewOnly) setPhase('content'); else if (phase === 'content' && stage > 0) advance(stage - 1); else onExit(); }}><ArrowLeft size={17} aria-hidden="true"/>{t('back')}</button>{phase === 'content' ? <button className="button primary" onClick={() => stage < 2 ? advance(stage + 1) : setPhase('quiz')}>{t(stage < 2 ? 'next' : 'checkUnderstanding')}<ArrowRight size={17} aria-hidden="true"/></button> : submitted ? correct ? <button className="button primary" data-testid="complete-lesson" onClick={finish}>{t('finish')}<Check size={18} aria-hidden="true"/></button> : <button className="button primary" onClick={() => { setSubmitted(false); setSelected(null); if (!reviewOnly) onSave({ ...progress, submitted: false, selectedOptionId: null }); }}>{t('tryAgain')}<RotateCcw size={17} aria-hidden="true"/></button> : <button className="button primary" data-testid="check-answer" disabled={!selected} onClick={submit}>{t('checkAnswer')}<Check size={18} aria-hidden="true"/></button>}</>}</footer>
  </div>;
}
