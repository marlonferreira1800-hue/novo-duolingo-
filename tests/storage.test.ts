import { describe, expect, it, vi } from 'vitest';
import { cardiacOutputLesson as lesson } from '../content/cardiac-output';
import { learningStateSchema, progressKey, type LearningState, type LessonProgress } from '../src/contracts/learning';
import { createLocalProgressStore, STORAGE_KEY, type KeyValueStorage } from '../src/data/local-progress';
import {
  completeLesson,
  earnedXp,
  emptyProgress,
  getProgress,
  initialLearningState,
  recordAnswer,
} from '../src/features/learning/progress';

const key = progressKey(lesson);
const completionTime = '2026-10-01T12:00:00.000Z';
const makeProgress = (overrides: Partial<LessonProgress> = {}): LessonProgress => ({ ...emptyProgress, ...overrides });
const makeState = (overrides: Partial<LearningState> = {}): LearningState => ({
  ...initialLearningState,
  lessons: {},
  ...overrides,
});
const completedProgress = () => completeLesson(
  lesson,
  recordAnswer(lesson, makeProgress({ stage: 2 }), lesson.correctOptionId),
  new Date(completionTime),
);

function memoryStorage() {
  const values = new Map<string, string>();
  const storage: KeyValueStorage = {
    getItem: vi.fn((name: string) => values.get(name) ?? null),
    setItem: vi.fn((name: string, value: string) => { values.set(name, value); }),
  };
  return { values, storage };
}

describe('local progress storage', () => {
  it('initializes lazily, keeps snapshot identity stable and does not write on reads', () => {
    const { storage } = memoryStorage();
    const provider = vi.fn(() => storage);
    const preferredLocale = vi.fn(() => 'pt-BR');
    const store = createLocalProgressStore(provider, preferredLocale);

    expect(provider).not.toHaveBeenCalled();
    expect(preferredLocale).not.toHaveBeenCalled();
    const snapshot = store.getSnapshot();
    expect(snapshot).toEqual(makeState());
    expect(store.getSnapshot()).toBe(snapshot);
    expect(preferredLocale).toHaveBeenCalledTimes(1);
    expect(storage.getItem).toHaveBeenCalledWith(STORAGE_KEY);
    expect(storage.setItem).not.toHaveBeenCalled();
    expect(store.getPersistenceStatus()).toBe('available');
  });

  it.each([
    ['pt-BR', 'pt-BR'], ['pt-PT', 'pt-BR'], ['PT-br', 'pt-BR'],
    ['en', 'en'], ['en-US', 'en'],
  ] as const)('uses injected browser preference %s as %s for both locales on first use', (preferred, expected) => {
    const { storage } = memoryStorage();
    const store = createLocalProgressStore(() => storage, () => preferred);

    expect(store.getSnapshot()).toEqual(makeState({ uiLocale: expected, studyLocale: expected }));
  });

  it('restores a valid snapshot including separate locale preferences, stage, completion and XP', () => {
    const { values, storage } = memoryStorage();
    const saved = makeState({ uiLocale: 'en', studyLocale: 'pt-BR', lessons: { [key]: completedProgress() } });
    values.set(STORAGE_KEY, JSON.stringify(saved));
    const store = createLocalProgressStore(() => storage, () => 'pt-BR');

    expect(store.getSnapshot()).toEqual(saved);
    expect(getProgress(store.getSnapshot(), lesson).stage).toBe(2);
    expect(getProgress(store.getSnapshot(), lesson).completedAt).toBe(completionTime);
    expect(earnedXp(store.getSnapshot(), lesson)).toBe(10);
    expect(storage.setItem).not.toHaveBeenCalled();
  });

  it('persists distinct UI/study locales and restores them instead of the browser preference', () => {
    const { storage } = memoryStorage();
    const store = createLocalProgressStore(() => storage);
    store.setLocales('pt-BR', 'en');
    const restored = createLocalProgressStore(() => storage, () => 'en-US');

    expect(restored.getSnapshot()).toEqual(makeState({ uiLocale: 'pt-BR', studyLocale: 'en' }));
  });

  it.each([0, 1, 2])('persists stage %i and an unanswered exercise across store instances', (stage) => {
    const { values, storage } = memoryStorage();
    const store = createLocalProgressStore(() => storage);
    const progress = makeProgress({ stage });
    store.saveProgress(lesson, progress);
    const restored = createLocalProgressStore(() => storage);

    expect(getProgress(restored.getSnapshot(), lesson)).toEqual(progress);
    expect(earnedXp(restored.getSnapshot(), lesson)).toBe(0);
    expect(learningStateSchema.parse(JSON.parse(values.get(STORAGE_KEY)!))).toEqual(restored.getSnapshot());
  });

  it('restores a submitted answer without implicitly completing it', () => {
    const { storage } = memoryStorage();
    const answer = recordAnswer(lesson, makeProgress({ stage: 2 }), lesson.correctOptionId);
    createLocalProgressStore(() => storage).saveProgress(lesson, answer);
    const restored = createLocalProgressStore(() => storage);

    expect(getProgress(restored.getSnapshot(), lesson)).toEqual(answer);
    expect(earnedXp(restored.getSnapshot(), lesson)).toBe(0);
  });

  it.each([0, 2, '1', null, undefined])('rejects unsupported or missing persisted version %j and writes v1 on the next update', (version) => {
    const { values, storage } = memoryStorage();
    const incompatible = { ...makeState({ lessons: { [key]: completedProgress() } }), version };
    const raw = JSON.stringify(incompatible);
    values.set(STORAGE_KEY, raw);
    const store = createLocalProgressStore(() => storage, () => 'en-US');

    expect(store.getSnapshot()).toEqual(makeState({ uiLocale: 'en', studyLocale: 'en' }));
    expect(store.getPersistenceStatus()).toBe('recovered');
    expect(earnedXp(store.getSnapshot(), lesson)).toBe(0);
    expect(values.get(STORAGE_KEY)).toBe(raw);

    store.saveProgress(lesson, makeProgress({ stage: 1 }));
    expect(learningStateSchema.parse(JSON.parse(values.get(STORAGE_KEY)!))).toEqual(
      makeState({ uiLocale: 'en', studyLocale: 'en', lessons: { [key]: makeProgress({ stage: 1 }) } }),
    );
  });

  it.each([
    { name: 'unsupported locale', state: { ...makeState(), studyLocale: 'fr' } },
    { name: 'out-of-range stage', state: makeState({ lessons: { [key]: makeProgress({ stage: 3 }) } }) },
    { name: 'invalid completion date', state: makeState({ lessons: { [key]: makeProgress({ completedAt: 'not-a-date' }) } }) },
  ])('recovers from schema-invalid persisted data: $name', ({ state }) => {
    const { values, storage } = memoryStorage();
    values.set(STORAGE_KEY, JSON.stringify(state));
    const store = createLocalProgressStore(() => storage);

    expect(store.getSnapshot()).toEqual(makeState());
    expect(store.getPersistenceStatus()).toBe('recovered');
  });

  it('recovers from malformed JSON and remains usable in memory', () => {
    const { values, storage } = memoryStorage();
    values.set(STORAGE_KEY, '{broken-json');
    const store = createLocalProgressStore(() => storage, () => 'en');

    expect(store.getSnapshot()).toEqual(makeState({ uiLocale: 'en', studyLocale: 'en' }));
    expect(() => store.saveProgress(lesson, completedProgress())).not.toThrow();
    expect(earnedXp(store.getSnapshot(), lesson)).toBe(10);
  });

  it.each([
    { name: 'missing storage', provider: (): KeyValueStorage | null => null },
    { name: 'provider throws', provider: (): KeyValueStorage => { throw new Error('access denied'); } },
    {
      name: 'reads throw',
      provider: (): KeyValueStorage => ({ getItem() { throw new Error('read denied'); }, setItem() {} }),
    },
    {
      name: 'writes throw',
      provider: (): KeyValueStorage => ({ getItem: () => null, setItem() { throw new Error('quota exceeded'); } }),
    },
  ])('keeps locale changes, progress and notifications in memory when $name', ({ provider }) => {
    const store = createLocalProgressStore(provider, () => 'en-US');
    expect(store.getSnapshot().studyLocale).toBe('en');
    const listener = vi.fn();
    const unsubscribe = store.subscribe(listener);

    expect(() => store.setLocales('pt-BR', 'en')).not.toThrow();
    expect(() => store.saveProgress(lesson, completedProgress())).not.toThrow();
    expect(store.getSnapshot()).toEqual(makeState({
      uiLocale: 'pt-BR', studyLocale: 'en', lessons: { [key]: completedProgress() },
    }));
    expect(earnedXp(store.getSnapshot(), lesson)).toBe(10);
    expect(store.getPersistenceStatus()).toBe('unavailable');
    expect(listener).toHaveBeenCalledTimes(2);
    unsubscribe();
    store.setLocales('en', 'en');
    expect(listener).toHaveBeenCalledTimes(2);
  });

  it.each([
    makeProgress({ stage: -1 }),
    makeProgress({ stage: 3 }),
    makeProgress({ stage: 0.5 }),
    makeProgress({ completedAt: 'not-a-date' }),
  ])('ignores an invalid progress payload %# without persisting or notifying', (progress) => {
    const { storage } = memoryStorage();
    const store = createLocalProgressStore(() => storage);
    const before = store.getSnapshot();
    const listener = vi.fn();
    store.subscribe(listener);
    store.saveProgress(lesson, progress);

    expect(store.getSnapshot()).toBe(before);
    expect(storage.setItem).not.toHaveBeenCalled();
    expect(listener).not.toHaveBeenCalled();
  });

  it('does not award completion or XP for a forged wrong answer', () => {
    const { storage } = memoryStorage();
    const store = createLocalProgressStore(() => storage);
    store.saveProgress(lesson, makeProgress({
      selectedOptionId: 'output-525', submitted: true, completedAt: completionTime,
    }));

    expect(getProgress(store.getSnapshot(), lesson).completedAt).toBeNull();
    expect(earnedXp(store.getSnapshot(), lesson)).toBe(0);
  });

  it('keeps the original completion and XP on reset, locale switch and repeated submission after reload', () => {
    const { storage } = memoryStorage();
    createLocalProgressStore(() => storage).saveProgress(lesson, completedProgress());
    const restored = createLocalProgressStore(() => storage);
    restored.setLocales('en', 'en');
    restored.saveProgress(lesson, makeProgress({ stage: 1 }));
    restored.saveProgress(lesson, { ...completedProgress(), completedAt: '2026-10-02T12:00:00.000Z' });
    const snapshot = createLocalProgressStore(() => storage).getSnapshot();

    expect(getProgress(snapshot, lesson).completedAt).toBe(completionTime);
    expect(earnedXp(snapshot, lesson)).toBe(10);
    expect(Object.keys(snapshot.lessons)).toEqual([key]);
    expect(snapshot.uiLocale).toBe('en');
    expect(snapshot.studyLocale).toBe('en');
  });

  it('retains a completion written by another tab before saving a stale draft', () => {
    const { storage } = memoryStorage();
    const firstTab = createLocalProgressStore(() => storage);
    const staleTab = createLocalProgressStore(() => storage);
    firstTab.getSnapshot();
    staleTab.getSnapshot();
    firstTab.saveProgress(lesson, completedProgress());
    staleTab.saveProgress(lesson, makeProgress({ stage: 1 }));

    const snapshot = createLocalProgressStore(() => storage).getSnapshot();
    expect(getProgress(snapshot, lesson)).toEqual({ ...makeProgress({ stage: 1 }), completedAt: completionTime });
    expect(earnedXp(snapshot, lesson)).toBe(10);
  });

  it('preserves other persisted revision keys without treating them as the current completion', () => {
    const { values, storage } = memoryStorage();
    values.set(STORAGE_KEY, JSON.stringify(makeState({ lessons: { 'cardiac-output@0': completedProgress() } })));
    const store = createLocalProgressStore(() => storage);
    expect(earnedXp(store.getSnapshot(), lesson)).toBe(0);
    store.saveProgress(lesson, makeProgress({ stage: 1 }));

    expect(store.getSnapshot().lessons).toEqual({
      'cardiac-output@0': completedProgress(), [key]: makeProgress({ stage: 1 }),
    });
  });

  it('regression: retains in-memory completion when a failed write leaves a stale persisted draft', () => {
    const { values, storage } = memoryStorage();
    values.set(STORAGE_KEY, JSON.stringify(makeState({ lessons: { [key]: makeProgress({ stage: 1 }) } })));
    let rejectWrites = true;
    const unreliable: KeyValueStorage = {
      getItem: (name) => storage.getItem(name),
      setItem: (name, value) => {
        if (rejectWrites) throw new Error('quota exceeded');
        storage.setItem(name, value);
      },
    };
    const store = createLocalProgressStore(() => unreliable);
    store.saveProgress(lesson, completedProgress());
    expect(getProgress(store.getSnapshot(), lesson).completedAt).toBe(completionTime);
    expect(store.getPersistenceStatus()).toBe('unavailable');

    // The persisted draft predates the in-memory completion that could not be written.
    rejectWrites = false;
    store.saveProgress(lesson, makeProgress({ stage: 2 }));

    expect(getProgress(store.getSnapshot(), lesson).completedAt).toBe(completionTime);
    expect(earnedXp(store.getSnapshot(), lesson)).toBe(10);
    const restored = createLocalProgressStore(() => storage).getSnapshot();
    expect(getProgress(restored, lesson).completedAt).toBe(completionTime);
    expect(earnedXp(restored, lesson)).toBe(10);
  });
});

describe('custom projects and clinical integration challenges', () => {
  it('saves custom projects, sets activeProjectId and records challenge completion idempotently', () => {
    const { storage } = memoryStorage();
    const store = createLocalProgressStore(() => storage);
    store.saveCustomProject({
      id: 'proj-cardio1',
      title: 'Fisiologia do Débito Cardíaco',
      goal: 'Estudar débito cardíaco',
      summary: 'Resumo de estudo',
      body: 'Corpo do rascunho',
      evidenceKeys: ['openstax-anatomy-physiology-2e-cardiovascular@1'],
      sectionId: 'cardio-physiology',
      createdAt: completionTime,
    });

    expect(store.getSnapshot().activeProjectId).toBe('proj-cardio1');
    expect(store.getSnapshot().customProjects).toHaveLength(1);

    store.completeChallenge('cardio-physiology:advanced', completionTime);
    store.completeChallenge('cardio-physiology:advanced', '2026-10-05T12:00:00.000Z');
    expect(store.getSnapshot().completedChallenges?.['cardio-physiology:advanced']).toBe(completionTime);

    store.setActiveProject(null);
    expect(store.getSnapshot().activeProjectId).toBeNull();
  });
});
