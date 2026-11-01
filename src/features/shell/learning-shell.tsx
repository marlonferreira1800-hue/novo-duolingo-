'use client';

import { BookOpen, Bot, Brain, Check, GraduationCap, House, Languages, Leaf, LogIn, LogOut, RotateCcw, Sparkles, Star, UserRound } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { LearningState, Locale } from '@/contracts/learning';

export type View = 'home' | 'create' | 'canvas' | 'library' | 'profile' | 'review';
export function LanguageControls({ state, onChange }: { state: LearningState; onChange: (ui: Locale, study: Locale) => void }) {
  const t = useTranslations('app');
  return <div className="language-controls">
    <Languages size={17} aria-hidden="true"/>
    <label><span>{t('uiLanguage')}</span><select data-testid="interface-locale" aria-label={t('uiLanguage')} value={state.uiLocale} onChange={(event) => onChange(event.target.value as Locale, state.studyLocale)}><option value="pt-BR">Português</option><option value="en">English</option></select></label>
    <span className="language-divider"/>
    <label><span>{t('studyLanguage')}</span><select data-testid="study-locale" aria-label={t('studyLanguage')} value={state.studyLocale} onChange={(event) => onChange(state.uiLocale, event.target.value as Locale)}><option value="pt-BR">Português</option><option value="en">English</option></select></label>
  </div>;
}
export function LearningShell({
  children,
  view,
  onNavigate,
  xp,
  state,
  onLocales,
  persistent,
  courseTitle,
  userId,
  onSignOut,
  onSelectProject,
  onOpenTutor,
}: {
  children: React.ReactNode;
  view: View;
  onNavigate: (view: View) => void;
  xp: number;
  state: LearningState;
  onLocales: (ui: Locale, study: Locale) => void;
  persistent: boolean;
  courseTitle: string;
  userId?: string | null;
  onSignOut?: () => void;
  onSelectProject?: (projectId: string | null) => void;
  onOpenTutor?: () => void;
}) {
  const t = useTranslations('app');
  const nav = [
    { id: 'home', label: t('home'), icon: House, disabled: false },
    { id: 'create', label: t('create'), icon: Sparkles, disabled: false },
    { id: 'canvas', label: t('canvas'), icon: Brain, disabled: false },
    { id: 'library', label: t('library'), icon: BookOpen, disabled: false },
    { id: 'review', label: t('review'), icon: RotateCcw, disabled: false },
    { id: 'profile', label: t('profile'), icon: UserRound, disabled: false },
  ] as const;
  const customProjects = state.customProjects ?? [];
  return <div className="app-shell">
    <a className="skip-link" href="#main-content">{t('skipToContent')}</a>
    <aside className="sidebar">
      <button className="brand" onClick={() => onNavigate('home')} aria-label="Medora"><span className="brand-mark"><Leaf size={22} aria-hidden="true"/></span>medora<span className="brand-dot">.</span></button>
      <nav aria-label={t('journey')} className="desktop-nav">{nav.map(({ id, label, icon: Icon, disabled }) => <button key={id} disabled={disabled} title={disabled ? t('soon') : undefined} aria-current={view === id ? 'page' : undefined} onClick={() => !disabled && onNavigate(id as View)}><Icon size={20} aria-hidden="true"/><span>{label}</span>{disabled && <small aria-hidden="true">↗</small>}</button>)}</nav>
      <div className="sidebar-courses">
        <span>{t('courses')}</span>
        <button
          className={`selected-course ${!state.activeProjectId ? 'active-course-chip' : ''}`}
          data-testid="sidebar-default-course"
          onClick={() => {
            onSelectProject?.(null);
            onNavigate('home');
          }}
        >
          <span className="course-dot" aria-hidden="true"/>
          <span lang={state.studyLocale}>{courseTitle}</span>
        </button>
        {customProjects.length > 0 ? (
          <div className="sidebar-custom-projects" data-testid="sidebar-custom-projects">
            <span className="sidebar-sublabel">{t('customProjectsHeading')}</span>
            {customProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={`selected-course ${state.activeProjectId === project.id ? 'active-course-chip' : ''}`}
                data-testid={`sidebar-project-${project.id}`}
                onClick={() => {
                  onSelectProject?.(project.id);
                  onNavigate('home');
                }}
              >
                <span className="course-dot custom-project-dot" aria-hidden="true"/>
                <span lang={state.studyLocale}>{project.title}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="sidebar-bottom"><div className="xp-strip"><Star size={17} aria-hidden="true"/><strong data-testid="sidebar-xp">{xp}</strong><span>{t('totalXp')}</span></div><div className="prototype-card"><Leaf size={17} aria-hidden="true"/><div><strong>{t('localPrototype')}</strong><small>{userId ? t('syncedAccount') : t('deviceOnly')}</small></div></div><button className="student-chip" onClick={() => onNavigate('profile')}><span className="avatar"><GraduationCap size={19} aria-hidden="true"/></span>{t('student')}</button>{userId ? <button className="student-chip" data-testid="sign-out" onClick={onSignOut}><LogOut size={16} aria-hidden="true"/><span>{t('signOut')}</span></button> : <a className="student-chip" data-testid="sign-in" href="/login"><LogIn size={16} aria-hidden="true"/><span>{t('signIn')}</span></a>}</div>
    </aside>
    <main id="main-content" className="content-panel" tabIndex={-1}>
      <header className="app-topbar"><div className="topbar-location"><span className="topbar-section">{t(view)}</span><a className="public-site-link" href="/" data-testid="public-site-link">{t('aboutMedora')}</a></div><LanguageControls state={state} onChange={onLocales}/></header>
      {children}
      <footer className="panel-footer"><Check size={13} aria-hidden="true"/>{t(persistent ? 'savedLocally' : 'temporarySession')}</footer>
    </main>
    {onOpenTutor ? (
      <button
        type="button"
        className="floating-tutor-button"
        data-testid="floating-tutor-btn"
        aria-label={t('askTutor')}
        onClick={onOpenTutor}
      >
        <Bot size={18} aria-hidden="true"/>
        <span>{t('askTutor')}</span>
      </button>
    ) : null}
    <nav className="mobile-nav" aria-label={t('journey')}>{nav.map(({ id, label, icon: Icon, disabled }) => <button key={id} disabled={disabled} title={disabled ? t('soon') : undefined} aria-label={label} aria-current={view === id ? 'page' : undefined} onClick={() => !disabled && onNavigate(id as View)}><Icon size={21} aria-hidden="true"/><span>{label}</span></button>)}</nav>
  </div>;
}
