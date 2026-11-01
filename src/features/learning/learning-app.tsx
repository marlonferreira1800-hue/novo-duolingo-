'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { ArrowRight, BookMarked, BookOpen, Check, CheckCircle2, Clock3, HeartPulse, Lightbulb, LockKeyhole, RotateCcw, Search, ShieldCheck, Sparkles, Star, X } from 'lucide-react';
import { catalog, lessons } from '../../../content';
import type { Catalog, CourseSection, CustomProject, LearningState, Lesson, Locale } from '@/contracts/learning';
import { localProgressStore } from '@/data/local-progress';
import { syncLocalToRemote } from '@/data/remote-progress';
import { useSession } from '@/auth/use-session';
import { signOut } from '@/app/actions/auth';
import { messages } from '@/i18n/messages';
import { LearningShell, type View } from '@/features/shell/learning-shell';
import { HeartArt } from '@/ui/heart-art';
import { ReviewQueue } from '@/features/review/review-queue';
import { CreatePage } from '@/features/create/create-page';
import { CanvasPage } from '@/features/canvas/canvas-page';
import { earnedXp, getProgress, initialLearningState } from './progress';
import { LessonReader } from './lesson-reader';
import { TutorDrawer } from './tutor-drawer';
import { ClinicalIntegrationModal } from './clinical-integration-modal';

type Reading = { lesson: Lesson; review: boolean };
type IntegrationTarget = { section: CourseSection; mode: 'advanced' | 'challenge' };
const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const sectionLessonsOf = (section: Catalog['course']['sections'][number]): Lesson[] =>
  section.lessonIds.map((id) => lessonById.get(id)!);

function syncProjectUrlParam(projectId: string | null) {
  if (typeof window === 'undefined') return;
  try {
    const url = new URL(window.location.href);
    if (projectId) url.searchParams.set('project', projectId);
    else url.searchParams.delete('project');
    window.history.replaceState({}, '', url.toString());
  } catch {
    // Ignore history API restrictions in embedded environments.
  }
}

export function LearningApp() {
  const state = useSyncExternalStore(localProgressStore.subscribe, localProgressStore.getSnapshot, () => initialLearningState);
  const [view, setView] = useState<View>('home');
  const [selectedSectionId, setSelectedSectionId] = useState<string>(catalog.course.sections[0].id);
  const [reading, setReading] = useState<Reading | null>(null);
  const [shellTutorOpen, setShellTutorOpen] = useState(false);
  const [integrationTarget, setIntegrationTarget] = useState<IntegrationTarget | null>(null);
  const { userId, configured } = useSession();
  const [synced, setSynced] = useState(false);
  const onLocales = (ui: Locale, study: Locale) => localProgressStore.setLocales(ui, study);

  useEffect(() => { document.documentElement.lang = state.uiLocale; }, [state.uiLocale]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const projectParam = params.get('project');
    if (!projectParam) return;
    const matchedCustom = (state.customProjects ?? []).find((p) => p.id === projectParam);
    if (matchedCustom) {
      localProgressStore.setActiveProject(matchedCustom.id);
      setSelectedSectionId(matchedCustom.sectionId);
      return;
    }
    const matchedSection = catalog.course.sections.find((s) => s.id === projectParam);
    if (matchedSection) {
      setSelectedSectionId(matchedSection.id);
    }
  }, [state.customProjects]);

  useEffect(() => {
    if (userId && configured && !synced) {
      setSynced(true);
      void syncLocalToRemote();
    }
  }, [userId, configured, synced]);

  function begin(lesson: Lesson, review = false) {
    const progress = getProgress(state, lesson);
    if (!review && progress.completedAt) localProgressStore.saveProgress(lesson, { ...progress, stage: 0, selectedOptionId: null, submitted: false });
    setReading({ lesson, review });
  }

  function handleSelectProject(projectId: string | null) {
    localProgressStore.setActiveProject(projectId);
    syncProjectUrlParam(projectId);
    if (projectId) {
      const found = (state.customProjects ?? []).find((p) => p.id === projectId);
      if (found) setSelectedSectionId(found.sectionId);
    }
  }

  function handleOpenCreatedProject(project: CustomProject) {
    syncProjectUrlParam(project.id);
    setSelectedSectionId(project.sectionId);
    setView('home');
  }

  const activeLesson = reading?.lesson;
  const activeProgress = activeLesson ? getProgress(state, activeLesson) : null;
  const activeProject = (state.customProjects ?? []).find((p) => p.id === state.activeProjectId) ?? null;
  const customLessons = (state.customProjects ?? []).flatMap((p) => p.generatedLessons ?? []);
  const allKnownLessons = [...lessons, ...customLessons];

  return <NextIntlClientProvider locale={state.uiLocale} messages={{ app: messages[state.uiLocale] }} timeZone="UTC">
    {reading && activeLesson && activeProgress ? <LessonReader lesson={activeLesson} progress={activeProgress} state={state} reviewOnly={reading.review} onSave={(next) => localProgressStore.saveProgress(activeLesson, next)} onExit={() => { setReading(null); setView('home'); }} onLocales={onLocales}/> : <LearningShell view={view} onNavigate={setView} xp={totalXp(state)} state={state} onLocales={onLocales} persistent={localProgressStore.getPersistenceStatus() !== 'unavailable'} courseTitle={catalog.course.translations[state.studyLocale].title} userId={userId} onSignOut={() => void signOut()} onSelectProject={handleSelectProject} onOpenTutor={() => setShellTutorOpen((v) => !v)}>
      <DemoNotice/>
      <StorageNotice/>
      <TutorDrawer
        open={shellTutorOpen}
        onClose={() => setShellTutorOpen(false)}
        studyLocale={state.studyLocale}
        lessonId={lessons[0].id}
        lessonTitle={lessons[0].translations[state.studyLocale].title}
      />
      {integrationTarget ? (
        <ClinicalIntegrationModal
          section={integrationTarget.section}
          sectionLessons={sectionLessonsOf(integrationTarget.section)}
          mode={integrationTarget.mode}
          studyLocale={state.studyLocale}
          completed={Boolean(state.completedChallenges?.[`${integrationTarget.section.id}:${integrationTarget.mode}`])}
          onComplete={() => localProgressStore.completeChallenge(`${integrationTarget.section.id}:${integrationTarget.mode}`)}
          onClose={() => setIntegrationTarget(null)}
        />
      ) : null}
      {view === 'home' && <LearningPath state={state} selectedSectionId={selectedSectionId} onSelectSection={setSelectedSectionId} onBegin={begin} activeProject={activeProject} onClearProject={() => handleSelectProject(null)} onOpenIntegration={(section, mode) => setIntegrationTarget({ section, mode })}/>}
      {view === 'create' && <CreatePage studyLocale={state.studyLocale} onOpenProject={handleOpenCreatedProject}/>}
      {view === 'canvas' && <CanvasPage studyLocale={state.studyLocale}/>}
      {view === 'library' && <Library state={state} onBegin={begin} onOpenSection={(sectionId) => { setSelectedSectionId(sectionId); setView('home'); }}/>}
      {view === 'review' && <ReviewQueue lessons={allKnownLessons} studyLocale={state.studyLocale}/>}
      {view === 'profile' && <Profile state={state}/>}
    </LearningShell>}
  </NextIntlClientProvider>;
}
function totalXp(state: LearningState): number {
  const customLessons = (state.customProjects ?? []).flatMap((p) => p.generatedLessons ?? []);
  const allLessons = [...lessons, ...customLessons];
  const lessonsXp = allLessons.reduce((sum, lesson) => sum + earnedXp(state, lesson), 0);
  const challengesXp = Object.keys(state.completedChallenges ?? {}).length * 30;
  return lessonsXp + challengesXp;
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
function LearningPath({
  state,
  selectedSectionId,
  onSelectSection,
  onBegin,
  activeProject,
  onClearProject,
  onOpenIntegration,
}: {
  state: LearningState;
  selectedSectionId: string;
  onSelectSection: (sectionId: string) => void;
  onBegin: (lesson: Lesson, review?: boolean) => void;
  activeProject: CustomProject | null;
  onClearProject: () => void;
  onOpenIntegration: (section: CourseSection, mode: 'advanced' | 'challenge') => void;
}) {
  const t = useTranslations('app');
  const courseText = catalog.course.translations[state.studyLocale];
  const visibleSections = selectedSectionId === 'all' ? catalog.course.sections : catalog.course.sections.filter((section) => section.id === selectedSectionId);
  const activeSection = visibleSections[0] ?? catalog.course.sections[0];
  const activeSectionLessons = sectionLessonsOf(activeSection);
  const activeSectionDone = activeSectionLessons.filter((lesson) => getProgress(state, lesson).completedAt).length;
  return <div className="learning-home">
    {activeProject ? (
      <section className="active-project-banner" data-testid="active-project-banner">
        <div className="active-project-copy">
          <span className="eyebrow"><Sparkles size={14} aria-hidden="true"/> {t('activeProjectBanner')} · {activeProject.id}</span>
          <h2 lang={state.studyLocale}>{activeProject.title}</h2>
          <p lang={state.studyLocale}>{activeProject.body}</p>
          <small>{t('sourcesTitle')}: {activeProject.evidenceKeys.join(', ')}</small>
        </div>
        <button type="button" className="button secondary" data-testid="clear-active-project" onClick={onClearProject}>
          <X size={15} aria-hidden="true"/>
          {t('clearActiveProject')}
        </button>
      </section>
    ) : null}
    {activeProject && activeProject.generatedLessons && activeProject.generatedLessons.length > 0 ? (
      <section className="path-section active-project-section" data-testid="active-project-section">
        <header className="section-header">
          <div>
            <span className="eyebrow"><Sparkles size={14} aria-hidden="true"/> {t('activeProjectBanner')}</span>
            <h2 lang={state.studyLocale}>{activeProject.title}</h2>
            <p>{t('lessonsProgress', {
              done: activeProject.generatedLessons.filter((l) => getProgress(state, l).completedAt).length,
              count: activeProject.generatedLessons.length,
            })}</p>
          </div>
          <span className="section-status section-done">
            <Sparkles size={21} aria-hidden="true"/>
          </span>
        </header>
        <div className="path-layout">
          <div className="path-track">
            {activeProject.generatedLessons.map((lesson) => (
              <LessonNode key={lesson.id} lesson={lesson} state={state} onBegin={onBegin} />
            ))}
          </div>
          <aside className="focus-card">
            <span className="focus-icon"><Lightbulb size={23} aria-hidden="true"/></span>
            <span className="eyebrow">{t('focus')}</span>
            <h3>{activeProject.title}</h3>
            <p lang={state.studyLocale}>{activeProject.body}</p>
            <div className="focus-divider"/>
            <FocusObjective sectionLessons={activeProject.generatedLessons} state={state} onBegin={onBegin}/>
          </aside>
        </div>
      </section>
    ) : null}
    <section className="course-header"><div className="course-art"><HeartArt small/></div><div className="course-heading" lang={state.studyLocale}><span className="eyebrow">{state.studyLocale === 'en' ? 'BASIC SCIENCES' : 'CICLO BÁSICO'}</span><h1>{courseText.title}</h1><p>{courseText.description}</p></div><div className="course-meta"><span><BookOpen size={15} aria-hidden="true"/>{t('lessonCount', { count: lessons.length })}</span><span><Clock3 size={15} aria-hidden="true"/>{t('minutes', { count: lessons.reduce((sum, lesson) => sum + lesson.estimatedMinutes, 0) })}</span></div></section>
    <section className="discipline-picker" data-testid="discipline-picker">
      <div className="discipline-picker-top">
        <div className="discipline-picker-copy">
          <span className="eyebrow">{t('disciplinePickerEyebrow')}</span>
          <h2>{t('disciplinePickerLabel')}</h2>
          <p>{selectedSectionId === 'all' ? t('showingAllDisciplines', { count: catalog.course.sections.length }) : t('showingSingleDiscipline', { done: activeSectionDone, count: activeSectionLessons.length })}</p>
        </div>
        <div className="discipline-select-wrap">
          <select className="discipline-select" data-testid="discipline-select" aria-label={t('disciplineSelectLabel')} value={selectedSectionId} onChange={(event) => onSelectSection(event.target.value)}>
            <option value="all">{t('allDisciplines', { count: catalog.course.sections.length })}</option>
            {catalog.course.sections.map((section) => {
              const secLessons = sectionLessonsOf(section);
              const secDone = secLessons.filter((lesson) => getProgress(state, lesson).completedAt).length;
              return <option key={section.id} value={section.id}>{section.translations[state.studyLocale].title} ({secDone}/{secLessons.length})</option>;
            })}
          </select>
        </div>
      </div>
    </section>
    {visibleSections.map((section) => {
      const sectionLessons = sectionLessonsOf(section);
      const sectionDone = sectionLessons.filter((lesson) => getProgress(state, lesson).completedAt).length;
      const sectionReviewTarget = lastCompleted(sectionLessons, state);
      const advancedDone = Boolean(state.completedChallenges?.[`${section.id}:advanced`]);
      const challengeDone = Boolean(state.completedChallenges?.[`${section.id}:challenge`]);
      return <section className="path-section" key={section.id} data-testid={`path-section-${section.id}`}><header className="section-header"><div><span className="eyebrow">{t('foundational')}</span><h2>{section.translations[state.studyLocale].title}</h2><p>{t('lessonsProgress', { done: sectionDone, count: sectionLessons.length })}</p></div><span className={`section-status ${sectionDone === sectionLessons.length ? 'section-done' : ''}`}>{sectionDone === sectionLessons.length ? <CheckCircle2 size={21} aria-hidden="true"/> : <BookMarked size={21} aria-hidden="true"/>}</span></header>
      <div className="path-layout"><div className="path-track">
        {sectionLessons.map((lesson) => <LessonNode key={lesson.id} lesson={lesson} state={state} onBegin={onBegin}/>)}
        <button className={`path-item ${sectionReviewTarget ? 'available review-node' : ''}`} disabled={!sectionReviewTarget} onClick={() => sectionReviewTarget && onBegin(sectionReviewTarget, true)} data-testid={`start-review-${section.id}`}><span className={`lesson-node ${sectionReviewTarget ? 'unlocked-node' : 'locked-node'}`}>{sectionReviewTarget ? <RotateCcw size={25} aria-hidden="true"/> : <LockKeyhole size={23} aria-hidden="true"/>}</span><span className="path-label"><strong>{t('review')}</strong><small>{t(sectionReviewTarget ? 'reviewDescription' : 'unlockReview')}</small></span></button>
        <button className={`path-item available ${advancedDone ? 'completed-node' : ''}`} onClick={() => onOpenIntegration(section, 'advanced')} data-testid={`start-advanced-${section.id}`}>
          <span className="lesson-node current-node">{advancedDone ? <Check size={25} aria-hidden="true"/> : <Sparkles size={23} aria-hidden="true"/>}</span>
          <span className="path-label"><strong>{t('advanced')}</strong><small>{t('advancedUnlockedDesc')}</small></span>
        </button>
        <button className={`path-item available ${challengeDone ? 'completed-node' : ''}`} onClick={() => onOpenIntegration(section, 'challenge')} data-testid={`start-challenge-${section.id}`}>
          <span className="lesson-node current-node">{challengeDone ? <Check size={25} aria-hidden="true"/> : <HeartPulse size={23} aria-hidden="true"/>}</span>
          <span className="path-label"><strong>{t('challenge')}</strong><small>{t('challengeUnlockedDesc')}</small></span>
        </button>
      </div><aside className="focus-card"><span className="focus-icon"><Lightbulb size={23} aria-hidden="true"/></span><span className="eyebrow">{t('focus')}</span><h3>{t('tipTitle')}</h3><p>{t('tip')}</p><div className="focus-divider"/><FocusObjective sectionLessons={sectionLessons} state={state} onBegin={onBegin}/></aside></div>
    </section>;
    })}
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
function FocusObjective({ sectionLessons, state, onBegin }: { sectionLessons: readonly Lesson[]; state: LearningState; onBegin: (lesson: Lesson, review?: boolean) => void }) {
  const t = useTranslations('app');
  const next = sectionLessons.find((lesson) => !getProgress(state, lesson).completedAt) ?? sectionLessons[0];
  const text = next.translations[state.studyLocale];
  const progress = getProgress(state, next);
  const started = progress.stage > 0 || progress.selectedOptionId !== null;
  return <><span className="focus-objective-label">{t('objective')}</span><p lang={state.studyLocale}>{text.objective}</p><button className="button primary" data-testid="resume-lesson" onClick={() => onBegin(next)}>{t(getProgress(state, next).completedAt ? 'revisit' : started ? 'continue' : 'start')}<ArrowRight size={16} aria-hidden="true"/></button></>;
}
function Library({ state, onBegin, onOpenSection }: { state: LearningState; onBegin: (lesson: Lesson, review?: boolean) => void; onOpenSection: (sectionId: string) => void }) {
  const t = useTranslations('app');
  const [query, setQuery] = useState('');
  const normalized = (value: string) => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  const matches = (section: Catalog['course']['sections'][number], lesson: Lesson) => {
    if (normalized(section.translations[state.studyLocale].title).includes(normalized(query))) return true;
    const text = lesson.translations[state.studyLocale];
    return normalized(`${text.courseTitle} ${text.title} ${text.description}`).includes(normalized(query));
  };
  const groups = catalog.course.sections
    .map((section) => ({ section, sectionLessons: section.lessonIds.map((id) => lessons.find((lesson) => lesson.id === id)!).filter((lesson) => matches(section, lesson)) }))
    .filter((group) => group.sectionLessons.length > 0);
  return <section className="library-page"><span className="eyebrow">{t('library')}</span><h1>{t('libraryHeading')}</h1><p className="page-description">{t('libraryDescription', { count: lessons.length, sections: catalog.course.sections.length })}</p><label className="search-field"><Search size={18} aria-hidden="true"/><input aria-label={t('search')} placeholder={t('search')} value={query} onChange={(event) => setQuery(event.target.value)}/></label>
    {groups.length ? groups.map(({ section, sectionLessons }) => <LibrarySection key={section.id} section={section} sectionLessons={sectionLessons} state={state} onBegin={onBegin} onOpenSection={onOpenSection}/>) : <p role="status">{t('noResults')}</p>}
  </section>;
}
function LibrarySection({ section, sectionLessons, state, onBegin, onOpenSection }: { section: Catalog['course']['sections'][number]; sectionLessons: Lesson[]; state: LearningState; onBegin: (lesson: Lesson, review?: boolean) => void; onOpenSection: (sectionId: string) => void }) {
  const t = useTranslations('app');
  const done = sectionLessons.filter((lesson) => getProgress(state, lesson).completedAt).length;
  return <div className="library-section" data-testid={`library-section-${section.id}`}><header className="library-section-header"><h2 lang={state.studyLocale}>{section.translations[state.studyLocale].title}</h2><div className="library-section-meta"><span>{t('lessonsProgress', { done, count: sectionLessons.length })}</span><button type="button" className="library-open-path" data-testid={`open-section-path-${section.id}`} onClick={() => onOpenSection(section.id)}>{t('openDisciplinePath')}<ArrowRight size={14} aria-hidden="true"/></button></div></header><div className="library-grid">{sectionLessons.map((lesson) => <LibraryCard key={lesson.id} lesson={lesson} state={state} onBegin={onBegin}/>)}</div></div>;
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
