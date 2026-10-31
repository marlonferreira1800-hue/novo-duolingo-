'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { ArrowRight, BookMarked, BookOpen, Check, CheckCircle2, Clock3, HeartPulse, Lightbulb, LockKeyhole, RotateCcw, Search, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { cardiacOutputLesson as lesson } from '../../../content/cardiac-output';
import type { LearningState, LessonProgress, Locale } from '@/contracts/learning';
import { localProgressStore } from '@/data/local-progress';
import { messages } from '@/i18n/messages';
import { LearningShell, type View } from '@/features/shell/learning-shell';
import { HeartArt } from '@/ui/heart-art';
import { earnedXp, getProgress, initialLearningState } from './progress';
import { LessonReader } from './lesson-reader';

export function LearningApp() {
  const state = useSyncExternalStore(localProgressStore.subscribe, localProgressStore.getSnapshot, () => initialLearningState);
  const [view, setView] = useState<View>('home');
  const [reading, setReading] = useState(false);
  const [reviewOnly, setReviewOnly] = useState(false);
  const progress = getProgress(state, lesson);
  const onLocales = (ui: Locale, study: Locale) => localProgressStore.setLocales(ui, study);
  useEffect(() => { document.documentElement.lang = state.uiLocale; }, [state.uiLocale]);
  function begin(review = false) {
    if (!review && progress.completedAt) localProgressStore.saveProgress(lesson, { ...progress, stage: 0, selectedOptionId: null, submitted: false });
    setReviewOnly(review); setReading(true);
  }
  return <NextIntlClientProvider locale={state.uiLocale} messages={{ app: messages[state.uiLocale] }} timeZone="UTC">
    {reading ? <LessonReader lesson={lesson} progress={progress} state={state} reviewOnly={reviewOnly} onSave={(next) => localProgressStore.saveProgress(lesson, next)} onExit={() => { setReading(false); setView('home'); }} onLocales={onLocales}/> : <LearningShell view={view} onNavigate={setView} xp={earnedXp(state, lesson)} state={state} onLocales={onLocales} persistent={localProgressStore.getPersistenceStatus() !== 'unavailable'}>
      <DemoNotice/>
      <StorageNotice/>
      {view === 'home' && <LearningPath state={state} progress={progress} onBegin={() => begin()} onReview={() => begin(true)}/>}
      {view === 'library' && <Library state={state} onBegin={() => begin()}/>}
      {view === 'profile' && <Profile state={state}/>}
    </LearningShell>}
  </NextIntlClientProvider>;
}
function DemoNotice() {
  const t = useTranslations('app');
  return <div className="demo-notice"><ShieldCheck size={15}/><span>{t('demoNotice')}</span></div>;
}
function StorageNotice() {
  const t = useTranslations('app');
  const status = localProgressStore.getPersistenceStatus();
  return status === 'available' ? null : <p role="status" className="storage-notice">{t(status === 'unavailable' ? 'storageWarning' : 'recoveredWarning')}</p>;
}
function LearningPath({ state, progress, onBegin, onReview }: { state: LearningState; progress: LessonProgress; onBegin: () => void; onReview: () => void }) {
  const t = useTranslations('app');
  const text = lesson.translations[state.studyLocale];
  const completed = Boolean(progress.completedAt);
  const started = progress.stage > 0 || progress.selectedOptionId !== null;
  return <div className="learning-home">
    <section className="course-header"><div className="course-art"><HeartArt small/></div><div className="course-heading" lang={state.studyLocale}><span className="eyebrow">{state.studyLocale === 'en' ? 'BASIC SCIENCES' : 'CICLO BÁSICO'}</span><h1>{text.courseTitle}</h1><p>{state.studyLocale === 'en' ? messages.en.courseDescription : messages['pt-BR'].courseDescription}</p></div><div className="course-meta"><span><BookOpen size={15}/>{t('lessonCount')}</span><span><Clock3 size={15}/>{t('minutes', { count: lesson.estimatedMinutes })}</span></div></section>
    <section className="path-section"><header className="section-header"><div><span className="eyebrow">{t('foundational')}</span><h2>{t('section')}</h2><p>{t('lessonsProgress', { done: completed ? 1 : 0 })}</p></div><span className={`section-status ${completed ? 'section-done' : ''}`}>{completed ? <CheckCircle2 size={21}/> : <BookMarked size={21}/>}</span></header>
      <div className="path-layout"><div className="path-track">
        <button className={`path-item available ${completed ? 'completed-node' : ''}`} data-testid="start-lesson" onClick={onBegin}><span className="lesson-node current-node">{completed ? <Check size={28}/> : <HeartPulse size={28}/>}</span><span className="path-label"><span className="node-eyebrow">{t(completed ? 'revisit' : started ? 'continue' : 'start')}</span><strong lang={state.studyLocale}>{text.title}</strong><small>{t('minutes', { count: 3 })} · {lesson.xp} XP</small></span></button>
        <button className="path-item" disabled title={t('futureLesson')}><span className="lesson-node locked-node"><LockKeyhole size={23}/></span><span className="path-label"><strong>{t('nextLesson')}</strong><small>{t('futureLesson')}</small></span></button>
        <button className="path-item" disabled title={t('soon')}><span className="lesson-node locked-node"><Sparkles size={23}/></span><span className="path-label"><strong>{t('advanced')}</strong><small>{t('soon')}</small></span></button>
        <button className={`path-item ${completed ? 'available review-node' : ''}`} disabled={!completed} onClick={onReview} data-testid="start-review"><span className={`lesson-node ${completed ? 'unlocked-node' : 'locked-node'}`}>{completed ? <RotateCcw size={25}/> : <LockKeyhole size={23}/>}</span><span className="path-label"><strong>{t('review')}</strong><small>{t(completed ? 'reviewDescription' : 'unlockReview')}</small></span></button>
        <button className="path-item" disabled title={t('soon')}><span className="lesson-node locked-node"><LockKeyhole size={23}/></span><span className="path-label"><strong>{t('challenge')}</strong><small>{t('challengeDescription')}</small></span></button>
      </div><aside className="focus-card"><span className="focus-icon"><Lightbulb size={23}/></span><span className="eyebrow">{t('focus')}</span><h3>{t('tipTitle')}</h3><p>{t('tip')}</p><div className="focus-divider"/><span className="focus-objective-label">{t('objective')}</span><p lang={state.studyLocale}>{text.objective}</p><button className="button primary" data-testid="resume-lesson" onClick={onBegin}>{t(completed ? 'revisit' : started ? 'continue' : 'start')}<ArrowRight size={16}/></button></aside></div>
    </section>
  </div>;
}
function Library({ state, onBegin }: { state: LearningState; onBegin: () => void }) {
  const t = useTranslations('app');
  const [query, setQuery] = useState('');
  const text = lesson.translations[state.studyLocale];
  const normalized = (value: string) => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  const matches = normalized(`${text.courseTitle} ${text.title}`).includes(normalized(query));
  return <section className="library-page"><span className="eyebrow">{t('library')}</span><h1>{t('libraryHeading')}</h1><p className="page-description">{t('libraryDescription')}</p><label className="search-field"><Search size={18}/><input aria-label={t('search')} placeholder={t('search')} value={query} onChange={(event) => setQuery(event.target.value)}/></label><h2>{t('foundations')}</h2>{matches ? <button className="library-course" onClick={onBegin}><div className="library-cover"><HeartArt/><span className="cover-badge">{t('demo')}</span></div><div className="library-course-copy"><h3 lang={state.studyLocale}>{text.courseTitle}</h3><p lang={state.studyLocale}>{text.description}</p><span>{t('lessonCount')}<ArrowRight size={17}/></span></div></button> : <p role="status">{t('noResults')}</p>}</section>;
}
function Profile({ state }: { state: LearningState }) {
  const t = useTranslations('app');
  const completed = Boolean(getProgress(state, lesson).completedAt);
  return <section className="profile-page"><span className="profile-avatar"><HeartPulse size={38}/></span><span className="eyebrow">{t('localPrototype')}</span><h1>{t('profileHeading')}</h1><p className="page-description">{t('profileDescription')}</p><div className="profile-stats"><div><CheckCircle2 size={21}/><strong>{completed ? 1 : 0}</strong><span>{t('completedLessons')}</span></div><div><Star size={21}/><strong>{earnedXp(state, lesson)}</strong><span>{t('totalXp')}</span></div></div><div className="privacy-note"><ShieldCheck size={20}/>{t('deviceOnly')}</div></section>;
}
