'use client';

import { BookOpen, Brain, Check, GraduationCap, House, Languages, Leaf, Sparkles, Star, UserRound } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { LearningState, Locale } from '@/contracts/learning';

export type View = 'home' | 'library' | 'profile';
export function LanguageControls({ state, onChange }: { state: LearningState; onChange: (ui: Locale, study: Locale) => void }) {
  const t = useTranslations('app');
  return <div className="language-controls">
    <Languages size={17} aria-hidden="true"/>
    <label><span>{t('uiLanguage')}</span><select data-testid="interface-locale" aria-label={t('uiLanguage')} value={state.uiLocale} onChange={(event) => onChange(event.target.value as Locale, state.studyLocale)}><option value="pt-BR">Português</option><option value="en">English</option></select></label>
    <span className="language-divider"/>
    <label><span>{t('studyLanguage')}</span><select data-testid="study-locale" aria-label={t('studyLanguage')} value={state.studyLocale} onChange={(event) => onChange(state.uiLocale, event.target.value as Locale)}><option value="pt-BR">Português</option><option value="en">English</option></select></label>
  </div>;
}
export function LearningShell({ children, view, onNavigate, xp, state, onLocales, persistent }: {
  children: React.ReactNode; view: View; onNavigate: (view: View) => void; xp: number; state: LearningState; onLocales: (ui: Locale, study: Locale) => void; persistent: boolean;
}) {
  const t = useTranslations('app');
  const nav = [
    { id: 'home', label: t('home'), icon: House, disabled: false },
    { id: 'create', label: t('create'), icon: Sparkles, disabled: true },
    { id: 'canvas', label: t('canvas'), icon: Brain, disabled: true },
    { id: 'library', label: t('library'), icon: BookOpen, disabled: false },
    { id: 'profile', label: t('profile'), icon: UserRound, disabled: false },
  ] as const;
  return <div className="app-shell">
    <a className="skip-link" href="#main-content">{t('skipToContent')}</a>
    <aside className="sidebar">
      <button className="brand" onClick={() => onNavigate('home')} aria-label="Medora"><span className="brand-mark"><Leaf size={22}/></span>medora<span className="brand-dot">.</span></button>
      <nav aria-label={t('journey')} className="desktop-nav">{nav.map(({ id, label, icon: Icon, disabled }) => <button key={id} disabled={disabled} title={disabled ? t('soon') : undefined} aria-current={view === id ? 'page' : undefined} onClick={() => !disabled && onNavigate(id as View)}><Icon size={20}/><span>{label}</span>{disabled && <small>↗</small>}</button>)}</nav>
      <div className="sidebar-courses"><span>{t('courses')}</span><button className="selected-course" onClick={() => onNavigate('home')}><span className="course-dot"/>{state.studyLocale === 'en' ? 'Cardiovascular system' : 'Sistema cardiovascular'}</button></div>
      <div className="sidebar-bottom"><div className="xp-strip"><Star size={17}/><strong data-testid="sidebar-xp">{xp}</strong><span>{t('totalXp')}</span></div><div className="prototype-card"><Leaf size={17}/><div><strong>{t('localPrototype')}</strong><small>{t('deviceOnly')}</small></div></div><button className="student-chip" onClick={() => onNavigate('profile')}><span className="avatar"><GraduationCap size={19}/></span>{t('student')}</button></div>
    </aside>
    <main id="main-content" className="content-panel" tabIndex={-1}>
      <header className="app-topbar"><div className="topbar-location"><span className="topbar-section">{t(view)}</span><a className="public-site-link" href="/" data-testid="public-site-link">{t('aboutMedora')}</a></div><LanguageControls state={state} onChange={onLocales}/></header>
      {children}
      <footer className="panel-footer"><Check size={13}/>{t(persistent ? 'savedLocally' : 'temporarySession')}</footer>
    </main>
    <nav className="mobile-nav" aria-label={t('journey')}>{nav.map(({ id, label, icon: Icon, disabled }) => <button key={id} disabled={disabled} title={disabled ? t('soon') : undefined} aria-label={label} aria-current={view === id ? 'page' : undefined} onClick={() => !disabled && onNavigate(id as View)}><Icon size={21}/><span>{label}</span></button>)}</nav>
  </div>;
}
