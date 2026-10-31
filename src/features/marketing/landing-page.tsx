'use client';

import { useEffect, useSyncExternalStore } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown,
  Clock3, Globe2, HeartPulse, Info, Languages, Link2, MessageSquare,
  Plus, RotateCcw,
} from 'lucide-react';
import type { Locale } from '@/contracts/learning';
import { localProgressStore } from '@/data/local-progress';
import { initialLearningState } from '@/features/learning/progress';
import { landingMessages } from '@/i18n/landing-messages';
import { HeartArt } from '@/ui/heart-art';
import styles from './landing.module.css';

const stepIcons = [BookOpen, MessageSquare, RotateCcw] as const;
const chipIcons = [BookOpen, RotateCcw, Link2] as const;
const sourceUrl = 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology';

export function LandingPage({ demoEnabled }: { demoEnabled: boolean }) {
  const state = useSyncExternalStore(
    localProgressStore.subscribe,
    localProgressStore.getSnapshot,
    () => initialLearningState,
  );
  const t = landingMessages[state.uiLocale];
  const demoHref = demoEnabled ? '/app' : '#demo';
  const primaryLabel = demoEnabled ? t.hero.ctaEnabled : t.hero.ctaDisabled;

  useEffect(() => {
    document.documentElement.lang = state.uiLocale;
  }, [state.uiLocale]);

  function changeLocale(value: string) {
    if (value === 'pt-BR' || value === 'en') {
      const locale: Locale = value;
      localProgressStore.setLocales(locale, state.studyLocale);
    }
  }

  return (
    <div className={styles.page} data-testid="landing-page" lang={state.uiLocale} id="top">
      <a className={styles.skipLink} href="#main-content">{t.skipToContent}</a>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label={t.nav.backToTop}>
          <span className={styles.brandMark} aria-hidden="true"><HeartPulse size={21} strokeWidth={1.7} /></span>
          medora<span className={styles.brandDot}>.</span>
        </a>
        <nav className={styles.desktopNav} aria-label={t.nav.label}>
          <a href="#how-it-works">{t.nav.howItWorks}</a>
          <a href="#demo">{t.nav.demo}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.localeControl}>
            <Globe2 size={16} aria-hidden="true" />
            <select
              data-testid="landing-locale"
              aria-label={t.nav.localeLabel}
              value={state.uiLocale}
              onChange={(event) => changeLocale(event.target.value)}
            >
              <option value="pt-BR" lang="pt-BR">PT-BR</option>
              <option value="en" lang="en">EN</option>
            </select>
            <ChevronDown size={12} className={styles.selectChevron} aria-hidden="true" />
          </div>
          <a className={`${styles.raisedLink} ${styles.headerCta}`} href={demoHref}>
            {demoEnabled ? t.nav.ctaEnabled : t.nav.ctaDisabled}
          </a>
        </div>
      </header>

      {localProgressStore.getPersistenceStatus() === 'unavailable' && (
        <p className={styles.storageNotice} role="status">
          <Info size={18} aria-hidden="true" />{t.storageWarning}
        </p>
      )}

      <main id="main-content" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="landing-title">
          <div className={styles.heroMark} aria-hidden="true"><HeartPulse size={28} strokeWidth={1.5} /></div>
          <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
          <h1 id="landing-title" className={styles.heroTitle}>
            {t.hero.titleStart} <span className={styles.highlight}>{t.hero.titleHighlight}</span>
            <br />{t.hero.titleEnd}
          </h1>
          <p className={styles.heroDescription}>{t.hero.description}</p>
          <div className={styles.heroActions}>
            <a
              className={`${styles.raisedLink} ${styles.primaryLink}`}
              href={demoHref}
              data-testid={demoEnabled ? 'landing-demo-link' : undefined}
            >
              {primaryLabel}<ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className={styles.secondaryLink} href="#how-it-works">
              {t.hero.secondaryCta}<ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <p className={styles.heroNote}>
            {demoEnabled ? t.hero.availableNote : t.hero.unavailableNote}
          </p>
          <ul className={styles.chips}>
            {t.hero.chips.map((label, index) => {
              const Icon = chipIcons[index];
              return <li key={label}><Icon size={15} aria-hidden="true" />{label}</li>;
            })}
          </ul>
        </section>

        <section id="demo" className={styles.demoSection} aria-labelledby="demo-title">
          <div className={styles.demoCard}>
            <figure className={styles.pathIllustration}>
              <p className={styles.illustrationEyebrow}>{t.demo.illustrationTitle}</p>
              <div className={styles.trail}>
                <svg className={styles.trailLine} viewBox="0 0 150 240" fill="none" aria-hidden="true">
                  <path d="M36 28C36 74 92 62 92 118S36 166 36 212" stroke="currentColor" strokeWidth="2" strokeDasharray="5 7" strokeLinecap="round" />
                </svg>
                <ol className={styles.trailSteps}>
                  {t.demo.trailLabels.map((label, index) => {
                    const Icon = stepIcons[index];
                    return (
                      <li key={label}>
                        <span className={styles.trailNode} aria-hidden="true"><Icon size={24} strokeWidth={1.6} /></span>
                        <span><small aria-hidden="true">0{index + 1}</small><strong>{label}</strong></span>
                      </li>
                    );
                  })}
                </ol>
                <div className={styles.illustrationHeart} aria-hidden="true"><HeartArt /></div>
                <Plus className={styles.illustrationPlus} size={22} strokeWidth={1.2} aria-hidden="true" />
              </div>
              <figcaption>{t.demo.illustrationCaption}</figcaption>
            </figure>

            <div className={styles.demoCopy}>
              <p className={styles.eyebrow}>{t.demo.eyebrow}</p>
              <h2 id="demo-title">{t.demo.title}</h2>
              <ul className={styles.demoMeta}>
                <li><BookOpen size={15} aria-hidden="true" />{t.demo.lessonCount}</li>
                <li><Clock3 size={15} aria-hidden="true" />{t.demo.duration}</li>
                <li><Languages size={15} aria-hidden="true" />{t.demo.languages}</li>
              </ul>
              <p className={styles.demoDescription}>{t.demo.description}</p>
              <div className={styles.source}>
                <span>{t.demo.sourceLabel}</span>
                <a href={sourceUrl}>
                  <span lang="en">{t.demo.sourceTitle}</span><ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <small>{t.demo.sourceSection}</small>
              </div>
              <p className={styles.medicalNotice}><Info size={18} aria-hidden="true" />{t.demo.notice}</p>
              {demoEnabled ? (
                <a className={`${styles.raisedLink} ${styles.primaryLink} ${styles.demoLink}`} href="/app">
                  {t.demo.cta}<ArrowRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <div className={styles.unavailable}>
                  <strong>{t.demo.unavailableTitle}</strong>
                  <p>{t.demo.unavailableDescription}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="how-it-works" className={styles.howSection} aria-labelledby="how-title">
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>{t.how.eyebrow}</p><h2 id="how-title">{t.how.title}</h2></div>
            <p>{t.how.description}</p>
          </div>
          <ol className={styles.stepCards}>
            {t.how.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li key={step.title}>
                  <div className={styles.stepTop}>
                    <span className={styles.stepIcon} aria-hidden="true"><Icon size={24} strokeWidth={1.6} /></span>
                    <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
                  </div>
                  <h3>{step.title}</h3><p>{step.description}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <section className={styles.languageSection} aria-labelledby="languages-title">
          <div className={styles.languageCopy}>
            <p className={styles.eyebrow}>{t.languages.eyebrow}</p>
            <h2 id="languages-title">{t.languages.title}</h2>
            <p>{t.languages.description}</p>
            <p className={styles.studyNote}>{t.languages.studyNote}</p>
          </div>
          <div className={styles.languageCard}>
            <span className={styles.languageCardIcon} aria-hidden="true"><Languages size={29} strokeWidth={1.4} /></span>
            <dl className={styles.languageValues}>
              <div><dt>{t.languages.uiLabel}</dt><dd>{t.languages.names[state.uiLocale]}<span aria-hidden="true">{state.uiLocale}</span></dd></div>
              <div><dt>{t.languages.studyLabel}</dt><dd>{t.languages.names[state.studyLocale]}<span aria-hidden="true">{state.studyLocale}</span></dd></div>
            </dl>
            <p><Check size={17} aria-hidden="true" />{t.languages.independenceNote}</p>
          </div>
        </section>

        <section className={styles.limitsSection} aria-labelledby="limits-title">
          <div className={styles.limitsIntro}>
            <p className={styles.eyebrow}>{t.limits.eyebrow}</p>
            <h2 id="limits-title">{t.limits.title}</h2>
            <p>{t.limits.description}</p>
          </div>
          <ul className={styles.limitItems}>
            {t.limits.items.map((item) => (
              <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>
            ))}
          </ul>
        </section>

        <section id="faq" className={styles.faqSection} aria-labelledby="faq-title">
          <div className={styles.faqIntro}>
            <p className={styles.eyebrow}>{t.faq.eyebrow}</p>
            <h2 id="faq-title">{t.faq.title}</h2>
          </div>
          <div className={styles.faqItems}>
            {t.faq.items.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<Plus size={19} aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <span className={styles.closingMark} aria-hidden="true"><HeartPulse size={29} strokeWidth={1.5} /></span>
          <p className={styles.eyebrow}>{t.closing.eyebrow}</p>
          <h2 id="closing-title">{t.closing.title}</h2>
          <p className={styles.closingDescription}>{t.closing.description}</p>
          <a className={`${styles.raisedLink} ${styles.primaryLink}`} href={demoHref}>
            {primaryLabel}<ArrowRight size={18} aria-hidden="true" />
          </a>
          <p className={styles.heroNote}>{demoEnabled ? t.hero.availableNote : t.hero.unavailableNote}</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div><a className={styles.footerBrand} href="#top" aria-label={t.nav.backToTop}>medora.</a><p>{t.footer.tagline}</p></div>
          <nav aria-label={t.footer.navLabel}>
            <a href="#how-it-works">{t.nav.howItWorks}</a>
            <a href="#demo">{t.nav.demo}</a>
            <a href="#faq">{t.nav.faq}</a>
          </nav>
        </div>
        <p className={styles.footerNotice}>{t.footer.notice}</p>
      </footer>
    </div>
  );
}
