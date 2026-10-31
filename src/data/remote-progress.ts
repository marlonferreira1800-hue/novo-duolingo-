'use client';

import { randomUUID } from 'node:crypto';
import type { LearningState, ProgressStore } from '@/contracts/learning';
import { progressKey } from '@/contracts/learning';
import { initialLearningState } from '@/features/learning/progress';
import { loadRemoteProgress, saveRemoteProgress, syncLocalState } from '@/app/actions/progress';
import { localProgressStore } from './local-progress';

/**
 * RemoteProgressStore: implements ProgressStore on top of Supabase server actions.
 * Falls back to local behavior when unauthenticated (caller decides).
 */
export function createRemoteProgressStore(): ProgressStore {
  let snapshot: LearningState = initialLearningState;
  const listeners = new Set<() => void>();

  function emit() {
    for (const l of listeners) l();
  }

  return {
    getSnapshot: () => snapshot,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    setLocales(uiLocale, studyLocale) {
      snapshot = { ...snapshot, uiLocale, studyLocale };
      emit();
    },
    saveProgress(lesson, progress) {
      const key = progressKey(lesson);
      snapshot = { ...snapshot, lessons: { ...snapshot.lessons, [key]: progress } };
      void saveRemoteProgress({
        lessonId: lesson.id,
        lessonRevision: lesson.revision,
        progress,
        idempotencyKey: randomUUID(),
      }).catch(() => {});
      emit();
    },
  };
}

export async function hydrateRemoteStore(): Promise<void> {
  try {
    const result = await loadRemoteProgress();
    if (!result.ok) return;
  } catch {
    // Unauthenticated or offline — keep local state.
  }
}

export async function syncLocalToRemote(): Promise<boolean> {
  try {
    const local = localProgressStore.getSnapshot();
    const lessons = Object.entries(local.lessons).map(([key, progress]) => {
      const [lessonId, revisionStr] = key.split('@');
      return {
        lessonId,
        lessonRevision: Number(revisionStr),
        progress,
      };
    });
    const result = await syncLocalState({
      stateVersion: 1,
      uiLocale: local.uiLocale,
      studyLocale: local.studyLocale,
      lessons,
      idempotencyKey: randomUUID(),
    });
    return result.ok;
  } catch {
    return false;
  }
}
