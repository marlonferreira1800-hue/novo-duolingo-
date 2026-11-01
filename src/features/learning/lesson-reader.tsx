'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, BookOpen, Check, CircleCheck, Lightbulb, RotateCcw, Star, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Lesson, LessonProgress, LearningState, Locale } from '@/contracts/learning';
import { questionItems, questionOptions } from '@/contracts/learning';
import { LanguageControls } from '@/features/shell/learning-shell';
import { messages } from '@/i18n/messages';
import { completeLesson, recordAnswer, recordOrder } from './progress';
import { LessonDiagram } from './lesson-diagram';

type Phase = 'content' | 'quiz' | 'result';
export function LessonReader({ lesson, progress, state, onSave, onExit, onLocales, reviewOnly = false }: {
  lesson: Lesson; progress: LessonProgress; state: LearningState; onSave: (progress: LessonProgress) => void;
  onExit: () => void; onLocales: (ui: Locale, study: Locale) => void; reviewOnly?: boolean;
}) {
  const t = useTranslations('app');
  const d = messages[state.studyLocale];
  const content = lesson.translations[state.studyLocale];
  const question = content.question;
  const [phase, setPhase] = useState<Phase>(reviewOnly || progress.selectedOptionId || progress.orderedIds ? 'quiz' : 'content');
  const [stage, setStage] = useState(progress.stage);
  const [atHook, setAtHook] = useState(phase === 'content' && progress.stage === 0 && !progress.selectedOptionId && !progress.orderedIds);
  const [selected, setSelected] = useState<string | null>(reviewOnly ? null : progress.selectedOptionId);
  const [orderIds, setOrderIds] = useState<string[]>(() => {
    const items = questionItems(question);
    if (!items) return [];
    const saved = progress.orderedIds;
    if (saved && saved.length === items.length) return saved;
    return items.map((item) => item.id).reverse();
  });
  const [submitted, setSubmitted] = useState(reviewOnly ? false : progress.submitted);
  const wasCompleted = useRef(Boolean(progress.completedAt));
  const headingRef = useRef<HTMLHeadingElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const correctOrder = lesson.correctOrderIds ?? [];
  const correct = question.type === 'order'
    ? correctOrder.length === orderIds.length && correctOrder.every((id, index) => id === orderIds[index])
    : selected === lesson.correctOptionId;
  const active = content.stages[stage];
  const stepIndex = phase === 'content' ? (atHook ? 0 : stage + 1) : phase === 'quiz' ? 4 : 5;
  useEffect(() => { headingRef.current?.focus({ preventScroll: true }); window.scrollTo(0, 0); }, [phase, stage, atHook]);
  useEffect(() => { if (submitted) feedbackRef.current?.focus({ preventScroll: true }); }, [submitted]);
  function advance(nextStage: number) {
    setStage(nextStage);
    onSave({ ...progress, stage: nextStage, selectedOptionId: null, orderedIds: null, submitted: false });
  }
  function select(id: string) {
    setSelected(id); setSubmitted(false);
    if (!reviewOnly) onSave({ ...progress, selectedOptionId: id, submitted: false });
  }
  function move(id: string, dir: -1 | 1) {
    setOrderIds((current) => {
      const index = current.indexOf(id);
      const target = index + dir;
      if (index < 0 || target < 0 || target >= current.length) return current;
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      setSubmitted(false);
      if (!reviewOnly) onSave({ ...progress, orderedIds: next, submitted: false });
      return next;
    });
  }
  function submit() {
    if (question.type === 'order') {
      if (orderIds.length === 0) return;
      setSubmitted(true);
      if (!reviewOnly) onSave(recordOrder(lesson, progress, orderIds));
    } else {
      if (!selected) return;
      setSubmitted(true);
      if (!reviewOnly) onSave(recordAnswer(lesson, progress, selected));
    }
  }
  function finish() {
    if (!submitted || !correct) return;
    const effective = question.type === 'order' ? recordOrder(lesson, progress, orderIds) : recordAnswer(lesson, progress, selected ?? '');
    if (!reviewOnly) onSave(completeLesson(lesson, effective));
    setPhase('result');
  }
  const option = questionOptions(question)?.find((item) => item.id === selected);
  const orderedItems = questionItems(question)?.slice().sort((a, b) => orderIds.indexOf(a.id) - orderIds.indexOf(b.id)) ?? [];
  const correctItems = questionItems(question)?.slice().sort((a, b) => correctOrder.indexOf(a.id) - correctOrder.indexOf(b.id)) ?? [];
  return <div className="reader">
    <a className="skip-link" href="#reader-main">{t('skipToContent')}</a>
    <header className="reader-header"><button className="icon-button" aria-label={t('exit')} onClick={onExit}><X size={23} aria-hidden="true"/></button><div className="step-dots" role="progressbar" aria-label={t('lessonProgress')} aria-valuemin={0} aria-valuemax={6} aria-valuenow={stepIndex + 1}>{[0, 1, 2, 3, 4, 5].map((index) => <span key={index} aria-hidden="true" className={index === stepIndex ? 'current' : index < stepIndex ? 'done' : ''}/>)}</div><span className="reader-xp"><Star size={15} aria-hidden="true"/> {lesson.xp} XP</span></header>
    <div className="reader-languages"><LanguageControls state={state} onChange={onLocales}/></div>
    <main className="reader-body" id="reader-main" tabIndex={-1}>
      <div className="reader-kicker"><span>{t(reviewOnly ? 'reviewMode' : 'foundational')}</span><span>{t('step', { current: stepIndex + 1, total: 6 })}</span></div>
      {phase === 'content' && atHook && <section lang={state.studyLocale} className="hook-screen"><h1 className="lesson-hook hook-hero" ref={headingRef} tabIndex={-1}>{content.hook}</h1><p className="hook-lesson-title">{content.title}</p></section>}
      {phase === 'content' && !atHook && <section lang={state.studyLocale}>
        <h1 ref={headingRef} tabIndex={-1}>{active.title}</h1>
        <LessonDiagram kind={active.diagram} locale={state.studyLocale}/>
        <div className="lesson-copy">{active.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <aside className="takeaway"><Lightbulb size={20} aria-hidden="true"/><div><span>{d.keyIdea}</span><p>{active.takeaway}</p></div></aside>
      </section>}
      {phase === 'quiz' && question.type !== 'order' && <section>
        <h1 ref={headingRef} tabIndex={-1}>{t('checkUnderstanding')}</h1>
        <fieldset className="quiz" lang={state.studyLocale} disabled={submitted}>
          <legend>{question.prompt}</legend>
          {question.type === 'fill' && <p className="fill-blank" aria-hidden="true">{question.blank}</p>}
          <p className="quiz-instruction">{question.type === 'fill' ? d.fillInstruction : d.questionLabel}</p>
          {questionOptions(question)?.map((answer, index) => <label key={answer.id} className={`answer-option ${selected === answer.id ? 'selected' : ''} ${submitted && selected === answer.id ? correct ? 'answer-correct' : 'answer-incorrect' : ''}`}><input type="radio" name={`${lesson.id}-answer`} value={answer.id} checked={selected === answer.id} onChange={() => select(answer.id)}/><span className="answer-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span>{answer.label}</span>{selected === answer.id && <Check size={18} aria-hidden="true"/>}</label>)}
        </fieldset>
        {submitted && option && <div ref={feedbackRef} tabIndex={-1} className={`answer-feedback ${correct ? 'correct-feedback' : 'incorrect-feedback'}`} role="status"><strong>{t(correct ? 'correct' : 'incorrect')}</strong><p lang={state.studyLocale}>{option.explanation}</p></div>}
      </section>}
      {phase === 'quiz' && question.type === 'order' && <section>
        <h1 ref={headingRef} tabIndex={-1}>{t('checkUnderstanding')}</h1>
        <p className="quiz-instruction">{d.orderInstruction}</p>
        <ol className="order-list" lang={state.studyLocale}>
          {orderedItems.map((item, index) => (
            <li key={item.id} data-testid={`order-item-${item.id}`} className={`order-item ${submitted && correct ? 'answer-correct' : ''}`}>
              <span className="order-position" aria-hidden="true">{index + 1}</span>
              <span className="order-label">{item.label}</span>
              <span className="order-controls">
                <button type="button" className="icon-button" data-testid={`order-up-${item.id}`} aria-label={`${d.moveUp} ${index + 1}`} disabled={submitted || index === 0} onClick={() => move(item.id, -1)}><ArrowUp size={16} aria-hidden="true"/></button>
                <button type="button" className="icon-button" data-testid={`order-down-${item.id}`} aria-label={`${d.moveDown} ${index + 1}`} disabled={submitted || index === orderedItems.length - 1} onClick={() => move(item.id, 1)}><ArrowDown size={16} aria-hidden="true"/></button>
              </span>
            </li>
          ))}
        </ol>
        {submitted && <div ref={feedbackRef} tabIndex={-1} className={`answer-feedback ${correct ? 'correct-feedback' : 'incorrect-feedback'}`} role="status"><strong>{t(correct ? 'correct' : 'incorrect')}</strong>{!correct && <ol className="order-solution" lang={state.studyLocale}>{correctItems.map((item, index) => <li key={item.id}><strong>{index + 1}.</strong> {item.label} — {item.explanation}</li>)}</ol>}</div>}
      </section>}
      {phase === 'result' && <section className="completion-screen"><div className="completion-icon"><CircleCheck size={52} aria-hidden="true"/></div><span className="eyebrow">{t('foundational')}</span><h1 ref={headingRef} tabIndex={-1}>{t(reviewOnly ? 'reviewComplete' : 'lessonComplete')}</h1><p>{t(reviewOnly ? 'reviewDoneDescription' : 'completeDescription')}</p>{!reviewOnly && <div className="earned-xp"><Star size={20} aria-hidden="true"/>{t(wasCompleted.current ? 'alreadyEarned' : 'earned', { count: lesson.xp })}</div>}<div className="completion-summary" lang={state.studyLocale}><span>{d.keyIdea}</span><strong>{d.formula}</strong><p>{content.stages[2].takeaway}</p></div></section>}
      <details className="lesson-sources"><summary><BookOpen size={15} aria-hidden="true"/>{t('sourcesTitle')}</summary>{lesson.sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.title} · {source.section} ↗</a>)}</details>
      <p className="reader-disclaimer">{t('demoNotice')}</p>
    </main>
    <footer className="reader-actions">{phase === 'result' ? <button className="button primary full-width" onClick={onExit}>{t('returnHome')}<ArrowRight size={18} aria-hidden="true"/></button> : <><button className="button secondary reader-back" onClick={() => { if (phase === 'quiz' && !reviewOnly) { setPhase('content'); setAtHook(false); } else if (phase === 'content' && !atHook && stage > 0) advance(stage - 1); else if (phase === 'content' && !atHook) setAtHook(true); else onExit(); }}><ArrowLeft size={17} aria-hidden="true"/>{t('back')}</button>{phase === 'content' ? <button className="button primary" onClick={() => { if (atHook) setAtHook(false); else if (stage < 2) advance(stage + 1); else setPhase('quiz'); }}>{t(atHook || stage < 2 ? 'next' : 'checkUnderstanding')}<ArrowRight size={17} aria-hidden="true"/></button> : submitted ? correct ? <button className="button primary" data-testid="complete-lesson" onClick={finish}>{t('finish')}<Check size={18} aria-hidden="true"/></button> : <button className="button primary" onClick={() => { setSubmitted(false); setSelected(null); setOrderIds((current) => current); if (!reviewOnly) onSave({ ...progress, submitted: false, selectedOptionId: null, orderedIds: null }); }}>{t('tryAgain')}<RotateCcw size={17} aria-hidden="true"/></button> : <button className="button primary" data-testid="check-answer" disabled={question.type === 'order' ? orderIds.length === 0 : !selected} onClick={submit}>{t('checkAnswer')}<Check size={18} aria-hidden="true"/></button>}</>}</footer>
  </div>;
}
