'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { RotateCcw, CheckCircle2, Clock } from 'lucide-react';
import { getDueReviews, gradeReview } from '@/app/actions/review';
import type { Lesson } from '@/contracts/learning';

interface DueCard {
  question_id: string;
  due_at: string;
  state: string;
}

export function ReviewQueue({ lessons, studyLocale }: { lessons: readonly Lesson[]; studyLocale: 'pt-BR' | 'en' }) {
  const t = useTranslations('app');
  const [cards, setCards] = useState<DueCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [done, setDone] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getDueReviews();
      setCards(result.cards as DueCard[]);
      setCurrentIndex(0);
      setDone(result.cards.length === 0);
    } catch {
      setCards([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function grade(grade: 1 | 2 | 3 | 4) {
    const card = cards[currentIndex];
    if (!card) return;
    try {
      await gradeReview(card.question_id, grade);
      if (currentIndex + 1 >= cards.length) {
        setDone(true);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } catch {
      // Offline or unauthenticated — stay on current card.
    }
  }

  if (loading) return <p role="status">{t('loading')}</p>;
  if (done || cards.length === 0) {
    return <div className="review-empty"><CheckCircle2 size={32} aria-hidden="true"/><p>{t('noReviewsDue')}</p></div>;
  }

  const card = cards[currentIndex];
  const lesson = lessons.find(l => l.questionId === card.question_id);
  const question = lesson?.translations[studyLocale].question;

  return <section className="review-queue" data-testid="review-queue">
    <header className="review-header">
      <span className="eyebrow"><RotateCcw size={16} aria-hidden="true"/> {t('review')}</span>
      <h2>{t('reviewQueue')}</h2>
      <p><Clock size={14} aria-hidden="true"/> {currentIndex + 1} / {cards.length}</p>
    </header>
    {question ? (
      <div className="review-card">
        <p lang={studyLocale} className="review-question">{question.prompt}</p>
        <div className="review-grades">
          <button data-testid="grade-again" onClick={() => grade(1)}>{t('gradeAgain')}</button>
          <button data-testid="grade-hard" onClick={() => grade(2)}>{t('gradeHard')}</button>
          <button data-testid="grade-good" onClick={() => grade(3)}>{t('gradeGood')}</button>
          <button data-testid="grade-easy" onClick={() => grade(4)}>{t('gradeEasy')}</button>
        </div>
      </div>
    ) : <p>{card.question_id}</p>}
  </section>;
}
