import 'server-only';

// Simplified FSRS-inspired scheduler (not the full 19-parameter algorithm).
// Binds scheduling to question_id, never to translated strings.

export type ReviewGrade = 1 | 2 | 3 | 4; // Again, Hard, Good, Easy
export type CardState = 'new' | 'learning' | 'review' | 'relearning';

export interface CardStateRecord {
  state: CardState;
  dueAt: string;
  stability: number; // days
  difficulty: number; // 1-10
  reps: number;
  lapses: number;
}

const DEFAULT_DIFFICULTY = 5;
const DEFAULT_STABILITY = 1;

// Intervals in days by grade for a card in review state.
const REVIEW_INTERVALS: Record<ReviewGrade, number> = { 1: 0, 2: 1, 3: 3, 4: 7 };
// Learning steps in minutes converted to days fraction.
const LEARNING_STEPS_DAYS = [10 / 1440, 1, 3]; // 10min, 1 day, 3 days

export function nextCardState(current: CardStateRecord | null, grade: ReviewGrade, now = new Date()): CardStateRecord {
  const base: CardStateRecord = current ?? {
    state: 'new', dueAt: now.toISOString(), stability: DEFAULT_STABILITY,
    difficulty: DEFAULT_DIFFICULTY, reps: 0, lapses: 0,
  };

  let { state, stability, difficulty, reps, lapses } = base;

  // Update difficulty (FSRS-inspired: grade 1-2 increases difficulty, 3-4 decreases)
  if (grade <= 2) difficulty = Math.min(10, difficulty + 1);
  else difficulty = Math.max(1, difficulty - 0.5);

  if (grade === 1) {
    // Again: lapse
    lapses += 1;
    state = state === 'review' ? 'relearning' : 'learning';
    stability = Math.max(0.1, stability * 0.5);
    const intervalDays = state === 'relearning' ? LEARNING_STEPS_DAYS[0] : LEARNING_STEPS_DAYS[0];
    return { state, dueAt: addDays(now, intervalDays).toISOString(), stability, difficulty, reps, lapses };
  }

  reps += 1;

  if (state === 'new' || state === 'learning' || state === 'relearning') {
    const stepIndex = Math.min(reps - 1, LEARNING_STEPS_DAYS.length - 1);
    if (grade === 2 && reps < LEARNING_STEPS_DAYS.length) {
      state = 'learning';
      return { state, dueAt: addDays(now, LEARNING_STEPS_DAYS[stepIndex]).toISOString(), stability, difficulty, reps, lapses };
    }
    state = 'review';
    stability = Math.max(1, stability + grade);
  }

  // Review state: stability grows with grade
  if (state === 'review') {
    const multiplier = grade === 2 ? 1.2 : grade === 3 ? 2.5 : 4;
    stability = Math.max(1, stability * multiplier * (1 - (difficulty - 5) / 20));
  }

  const intervalDays = state === 'review' ? Math.max(1, Math.round(stability)) : REVIEW_INTERVALS[grade];
  return { state, dueAt: addDays(now, intervalDays).toISOString(), stability, difficulty, reps, lapses };
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + Math.ceil(days));
  return result;
}

export function isDue(card: CardStateRecord, now = new Date()): boolean {
  return new Date(card.dueAt) <= now;
}
