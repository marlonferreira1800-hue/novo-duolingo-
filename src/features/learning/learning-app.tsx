'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { ArrowRight, BookMarked, BookOpen, Check, CheckCircle2, Clock3, HeartPulse, Lightbulb, LockKeyhole, RotateCcw, Search, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { lessons } from '../../../content';
import type { LearningState, Lesson, Locale } from '@/contracts/learning';
import { localProgressStore } from '@/data/local-progress';
import { messages } from '@/i18n/messages';
import { LearningShell, type View } from '@/features/shell/learning-shell';
import { HeartArt } from '@/ui/heart-art';
import { earnedXp, getProgress, initialLearningState } from './progress';
import { LessonReader } from './lesson-reader';

type Reading = { lesson: Lesson; review: boolean };

export function LearningApp() {
  const state = useSyncExternalStore(localProgressStore.subscribe, localProgressStore.getSnapshot, () => initialLearningState);
  const [view, setView] = useState<View>('home');
  const [reading, setReading] = useState<Reading | null>(null);
  const onLocales = (ui: Locale, study: Locale) => localProgressStore.setLocales(ui, study);
  useEffect(() => { document.documentElement.lang = state.uiLocale; }, [state.uiLocale]);
  function begin(lesson: Lesson, review = false) {
    const progress = getProgress(state, lesson);
    if (!review && progress.completedAt) localProgressStore.saveProgress(lesson, { ...progress, stage: 0, selectedOptionId: null, submitted: false });
    setReading({ lesson, review });
  }
  const activeLesson = reading?.lesson;
  const activeProgress = activeLesson ? getProgress(state, activeLesson) : null;
  return <NextIntlClientProvider locale={state.uiLocale} messages={{ app: messages[state.uiLocale] }} timeZone="UTC">
    {reading && activeLesson && activeProgress ? <LessonReader lesson={activeLesson} progress={activeProgress} state={state} reviewOnly={reading.review} onSave={(next) => localProgressStore.saveProgress(activeLesson, next)} onExit={() => { setReading(null); setView('home'); }} onLocales={onLocales}/> : <LearningShell view={view} onNavigate={setView} xp={totalXp(state)} state={state} onLocales={onLocales} persistent={localProgressStore.getPersistenceStatus() !== 'unavailable'}>
      <DemoNotice/>
      <StorageNotice/>
      {view === 'home' && <LearningPath state={state} onBegin={begin}/>}
      {view === 'library' && <Library state={state} onBegin={begin}/>}
      {view === 'profile' && <Profile state={state}/>}
    </LearningShell>}
  </NextIntlClientProvider>;
}
function totalXp(state: LearningState): number {
  return lessons.reduce((sum, lesson) => sum + earnedXp(state, lesson), 0);
}
function DemoNotice() {
  const t = useTranslations('app');
  return <div className="demo-notice"><ShieldCheck size={15} aria-hidden="true"/><span>{t('demoNotice')}</span></div>;
}
function StorageNotice() {
  const t = useTranslations('app');
  const status = localProgressStore.getPersistenceStatus();
  return status === 'available' ? null : <p role="status" className="storage-notice">{t(status === 'unavailable' ? 'storageWarning' : 'recoveredWarning')}</p>;
}
function lastCompleted(lessonsList: readonly Lesson[], state: LearningState): Lesson | null {
  const completed = lessonsList.filter((lesson) => getProgress(state, lesson).completedAt);
  return completed.at(-1) ?? null;
}
function LearningPath({ state, onBegin }: { state: LearningState; onBegin: (lesson: Lesson, review?: boolean) => void }) {
  const t = useTranslations('app');
  const done = lessons.filter((lesson) => getProgress(state, lesson).completedAt).length;
  const reviewTarget = lastCompleted(lessons, state);
  return <div className="learning-home">
    <section className="course-header"><div className="course-art"><HeartArt small/></div><div className="course-heading" lang={state.studyLocale}><span className="eyebrow">{state.studyLocale === 'en' ? 'BASIC SCIENCES' : 'CICLO BÁSICO'}</span><h1>{lessons[0].translations[state.studyLocale].courseTitle}</h1><p>{state.studyLocale === 'en' ? messages.en.courseDescription : messages['pt-BR'].courseDescription}</p></div><div className="course-meta"><span><BookOpen size={15} aria-hidden="true"/>{t('lessonCount', { count: lessons.length })}</span><span><Clock3 size={15} aria-hidden="true"/>{t('minutes', { count: lessons.reduce((sum, lesson) => sum + lesson.estimatedMinutes, 0) })}</span></div></section>
    <section className="path-section"><header className="section-header"><div><span className="eyebrow">{t('foundational')}</span><h2>{t('section')}</h2><p>{t('lessonsProgress', { done, count: lessons.length })}</p></div><span className={`section-status ${done === lessons.length ? 'section-done' : ''}`}>{done === lessons.length ? <CheckCircle2 size={21} aria-hidden="true"/> : <BookMarked size={21} aria-hidden="true"/>}</span></header>
      <div className="path-layout"><div className="path-track">
        {lessons.map((lesson) => <LessonNode key={lesson.id} lesson={lesson} state={state} onBegin={onBegin}/>)}
        <button className="path-item" disabled title={t('futureLesson')}><span className="lesson-node locked-node"><LockKeyhole size={23} aria-hidden="true"/></span><span className="path-label"><strong>{t('nextLesson')}</strong><small>{t('futureLesson')}</small></span></button>
        <button className="path-item" disabled title={t('soon')}><span className="lesson-node locked-node"><Sparkles size={23} aria-hidden="true"/></span><span className="path-label"><strong>{t('advanced')}</strong><small>{t('soon')}</small></span></button>
        <button className={`path-item ${reviewTarget ? 'available review-node' : ''}`} disabled={!reviewTarget} onClick={() => reviewTarget && onBegin(reviewTarget, true)} data-testid="start-review"><span className={`lesson-node ${reviewTarget ? 'unlocked-node' : 'locked-node'}`}>{reviewTarget ? <RotateCcw size={25} aria-hidden="true"/> : <LockKeyhole size={23} aria-hidden="true"/>}</span><span className="path-label"><strong>{t('review')}</strong><small>{t(reviewTarget ? 'reviewDescription' : 'unlockReview')}</small></span></button>
        <button className="path-item" disabled title={t('soon')}><span className="lesson-node locked-node"><LockKeyhole size={23} aria-hidden="true"/></span><span className="path-label"><strong>{t('challenge')}</strong><small>{t('challengeDescription')}</small></span></button>
      </div><aside className="focus-card"><span className="focus-icon"><Lightbulb size={23} aria-hidden="true"/></span><span className="eyebrow">{t('focus')}</span><h3>{t('tipTitle')}</h3><p>{t('tip')}</p><div className="focus-divider"/><FocusObjective state={state} onBegin={onBegin}/></aside></div>
    </section>
  </div>;
}
function LessonNode({ lesson, state, onBegin }: { lesson: Lesson; state: LearningState; onBegin: (lesson: Lesson, review?: boolean) => void }) {
  const t = useTranslations('app');
  const text = lesson.translations[state.studyLocale];
  const progress = getProgress(state, lesson);
  const completed = Boolean(progress.completedAt);
  const started = progress.stage > 0 || progress.selectedOptionId !== null;
  return <button className={`path-item available ${completed ? 'completed-node' : ''}`} data-testid={`start-lesson-${lesson.id}`} onClick={() => onBegin(lesson)}><span className="lesson-node current-node">{completed ? <Check size={28} aria-hidden="true"/> : <HeartPulse size={28} aria-hidden="true"/>}</span><span className="path-label"><span className="node-eyebrow">{t(completed ? 'revisit' : started ? 'continue' : 'start')}</span><strong lang={state.studyLocale}>{text.title}</strong><small>{t('minutes', { count: lesson.estimatedMinutes })} · {lesson.xp} XP</small></span></button>;
}
function FocusObjective({ state, onBegin }: { state: LearningState; onBegin: (lesson: Lesson, review?: boolean) => void }) {
  const t = useTranslations('app');
  const next = lessons.find((lesson) => !getProgress(state, lesson).completedAt) ?? lessons[0];
  const text = next.translations[state.studyLocale];
  const progress = getProgress(state, next);
  const started = progress.stage > 0 || progress.selectedOptionId !== null;
  return <><span className="focus-objective-label">{t('objective')}</span><p lang={state.studyLocale}>{text.objective}</p><button className="button primary" data-testid="resume-lesson" onClick={() => onBegin(next)}>{t(getProgress(state, next).completedAt ? 'revisit' : started ? 'continue' : 'start')}<ArrowRight size={16} aria-hidden="true"/></button></>;
}
function Library({ state, onBegin }: { state: LearningState; onBegin: (lesson: Lesson, review?: boolean) => void }) {
  const t = useTranslations('app');
  const [query, setQuery] = useState('');
  const normalized = (value: string) => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  const matches = lessons.filter((lesson) => {
    const text = lesson.translations[state.studyLocale];
    return normalized(`${text.courseTitle} ${text.title} ${text.description}`).includes(normalized(query));
  });
  return <section className="library-page"><span className="eyebrow">{t('library')}</span><h1>{t('libraryHeading')}</h1><p className="page-description">{t('libraryDescription', { count: lessons.length })}</p><label className="search-field"><Search size={18} aria-hidden="true"/><input aria-label={t('search')} placeholder={t('search')} value={query} onChange={(event) => setQuery(event.target.value)}/></label><h2>{t('foundations')}</h2>{matches.length ? matches.map((lesson) => <LibraryCard key={lesson.id} lesson={lesson} state={state} onBegin={onBegin}/>) : <p role="status">{t('noResults')}</p>}</section>;
}
function LibraryCard({ lesson, state, onBegin }: { lesson: Lesson; state: LearningState; onBegin: (lesson: Lesson, review?: boolean) => void }) {
  const t = useTranslations('app');
  const text = lesson.translations[state.studyLocale];
  return <button className="library-course" data-testid={`library-lesson-${lesson.id}`} onClick={() => onBegin(lesson)}><div className="library-cover"><HeartArt/><span className="cover-badge">{t('demo')}</span></div><div className="library-course-copy"><h3 lang={state.studyLocale}>{text.title}</h3><p lang={state.studyLocale}>{text.description}</p><span>{t('minutes', { count: lesson.estimatedMinutes })} · {lesson.xp} XP<ArrowRight size={17} aria-hidden="true"/></span></div></button>;
}
function Profile({ state }: { state: LearningState }) {
  const t = useTranslations('app');
  const completed = lessons.filter((lesson) => getProgress(state, lesson).completedAt).length;
  return <section className="profile-page"><span className="profile-avatar"><HeartPulse size={38} aria-hidden="true"/></span><span className="eyebrow">{t('localPrototype')}</span><h1>{t('profileHeading')}</h1><p className="page-description">{t('profileDescription')}</p><div className="profile-stats"><div><CheckCircle2 size={21} aria-hidden="true"/><strong>{completed}</strong><span>{t('completedLessons')}</span></div><div><Star size={21} aria-hidden="true"/><strong>{totalXp(state)}</strong><span>{t('totalXp')}</span></div></div><div className="privacy-note"><ShieldCheck size={20} aria-hidden="true"/>{t('deviceOnly')}</div></section>;
}
