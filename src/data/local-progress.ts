import { customProjectSchema, learningStateSchema, lessonProgressSchema, type CustomProject, type LearningState, type ProgressStore } from '@/contracts/learning';
import { initialLearningState, updateProgress } from '@/features/learning/progress';

export const STORAGE_KEY = 'medora.learning.v1';
export interface KeyValueStorage { getItem(key: string): string | null; setItem(key: string, value: string): void }
export type PersistenceStatus = 'available' | 'unavailable' | 'recovered';

export function createLocalProgressStore(storage: () => KeyValueStorage | null, preferredLocale: () => string = () => 'pt-BR') {
  let state: LearningState = initialLearningState;
  let initialized = false;
  let status: PersistenceStatus = 'available';
  const listeners = new Set<() => void>();
  const notify = () => { for (const listener of listeners) listener(); };
  function read(): LearningState | null {
    let raw: string | null;
    try {
      const target = storage();
      if (!target) { status = 'unavailable'; return null; }
      raw = target.getItem(STORAGE_KEY);
    } catch { status = 'unavailable'; return null; }
    if (!raw) return null;
    try {
      const parsed = learningStateSchema.safeParse(JSON.parse(raw));
      if (parsed.success) return parsed.data;
    } catch { /* A corrupt record is different from unavailable browser storage. */ }
    status = 'recovered';
    return null;
  }
  function initialize() {
    if (initialized) return;
    initialized = true;
    const locale = preferredLocale().toLowerCase().startsWith('pt') ? 'pt-BR' : 'en';
    state = read() ?? { ...initialLearningState, uiLocale: locale, studyLocale: locale, lessons: {} };
  }
  function persist(next: LearningState) {
    state = next;
    try {
      const target = storage();
      if (!target) status = 'unavailable';
      else target.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch { status = 'unavailable'; }
    notify();
  }
  function mergeSavedProgress(): LearningState {
    const remote = read();
    const lessons = { ...remote?.lessons, ...state.lessons };
    for (const [key, remoteProgress] of Object.entries(remote?.lessons ?? {})) {
      if (remoteProgress.completedAt && !lessons[key]?.completedAt) lessons[key] = remoteProgress;
    }
    const completedChallenges = { ...remote?.completedChallenges, ...state.completedChallenges };
    const existingProjects = state.customProjects ?? remote?.customProjects;
    return {
      ...state,
      lessons,
      ...(existingProjects ? { customProjects: existingProjects } : {}),
      ...(Object.keys(completedChallenges).length > 0 ? { completedChallenges } : {}),
    };
  }
  const store: ProgressStore & {
    getPersistenceStatus(): PersistenceStatus;
    saveCustomProject(project: CustomProject): void;
    setActiveProject(projectId: string | null): void;
    completeChallenge(challengeKey: string, completedAt?: string): void;
  } = {
    getSnapshot: () => { initialize(); return state; },
    subscribe: (listener) => { initialize(); listeners.add(listener); return () => { listeners.delete(listener); }; },
    setLocales: (uiLocale, studyLocale) => { initialize(); persist({ ...mergeSavedProgress(), uiLocale, studyLocale }); },
    saveProgress: (lesson, progress) => {
      initialize();
      const parsed = lessonProgressSchema.safeParse(progress);
      if (!parsed.success) return;
      // Every write, including locale changes, preserves already saved completions.
      persist(updateProgress(mergeSavedProgress(), lesson, parsed.data));
    },
    saveCustomProject: (project) => {
      initialize();
      const parsed = customProjectSchema.safeParse(project);
      if (!parsed.success) return;
      const merged = mergeSavedProgress();
      const existing = (merged.customProjects ?? []).filter((item) => item.id !== parsed.data.id);
      persist({
        ...merged,
        customProjects: [parsed.data, ...existing].slice(0, 12),
        activeProjectId: parsed.data.id,
      });
    },
    setActiveProject: (projectId) => {
      initialize();
      const merged = mergeSavedProgress();
      persist({ ...merged, activeProjectId: projectId });
    },
    completeChallenge: (challengeKey, completedAt = new Date().toISOString()) => {
      initialize();
      if (!challengeKey) return;
      const merged = mergeSavedProgress();
      const existing = merged.completedChallenges ?? {};
      if (existing[challengeKey]) return;
      persist({
        ...merged,
        completedChallenges: { ...existing, [challengeKey]: completedAt },
      });
    },
    getPersistenceStatus: () => status,
  };
  return store;
}

export const localProgressStore = createLocalProgressStore(
  () => typeof window === 'undefined' ? null : window.localStorage,
  () => typeof navigator === 'undefined' ? 'pt-BR' : navigator.language,
);
