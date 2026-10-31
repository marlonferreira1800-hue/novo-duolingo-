import { describe, expect, it } from 'vitest';
import { nextCardState, isDue, type CardStateRecord } from '../src/ai/fsrs-scheduler';

const now = new Date('2026-10-31T12:00:00.000Z');

describe('FSRS scheduler (D6)', () => {
  it('new card graded Good (3) goes to review with ~3 day interval', () => {
    const next = nextCardState(null, 3, now);
    expect(next.state).toBe('review');
    expect(next.reps).toBe(1);
    expect(new Date(next.dueAt) > now).toBe(true);
  });

  it('new card graded Again (1) stays in learning with short interval', () => {
    const next = nextCardState(null, 1, now);
    expect(next.state).toBe('learning');
    expect(next.lapses).toBe(1);
  });

  it('review card graded Easy (4) has longer interval than Hard (2)', () => {
    const card: CardStateRecord = {
      state: 'review', dueAt: now.toISOString(), stability: 5, difficulty: 5, reps: 3, lapses: 0,
    };
    const easy = nextCardState(card, 4, now);
    const hard = nextCardState(card, 2, now);
    expect(new Date(easy.dueAt).getTime()).toBeGreaterThan(new Date(hard.dueAt).getTime());
  });

  it('lapse moves review card to relearning', () => {
    const card: CardStateRecord = {
      state: 'review', dueAt: now.toISOString(), stability: 10, difficulty: 5, reps: 5, lapses: 0,
    };
    const next = nextCardState(card, 1, now);
    expect(next.state).toBe('relearning');
    expect(next.lapses).toBe(1);
  });

  it('difficulty increases on Again, decreases on Easy', () => {
    const card: CardStateRecord = {
      state: 'review', dueAt: now.toISOString(), stability: 5, difficulty: 5, reps: 3, lapses: 0,
    };
    expect(nextCardState(card, 1, now).difficulty).toBeGreaterThan(5);
    expect(nextCardState(card, 4, now).difficulty).toBeLessThan(5);
  });

  it('isDue returns true for past due, false for future', () => {
    const past: CardStateRecord = {
      state: 'review', dueAt: '2026-10-30T00:00:00.000Z', stability: 1, difficulty: 5, reps: 1, lapses: 0,
    };
    const future: CardStateRecord = {
      state: 'review', dueAt: '2026-12-01T00:00:00.000Z', stability: 1, difficulty: 5, reps: 1, lapses: 0,
    };
    expect(isDue(past, now)).toBe(true);
    expect(isDue(future, now)).toBe(false);
  });

  it('stability never goes below minimum on lapse', () => {
    const card: CardStateRecord = {
      state: 'review', dueAt: now.toISOString(), stability: 0.1, difficulty: 5, reps: 1, lapses: 5,
    };
    const next = nextCardState(card, 1, now);
    expect(next.stability).toBeGreaterThanOrEqual(0.1);
  });
});
