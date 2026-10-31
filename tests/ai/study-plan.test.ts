import { Buffer } from 'node:buffer';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  evidenceKey,
  type AiErrorCode,
  type DraftProvider,
  type ProviderResponse,
  type RunRecord,
  type StudyPlanOutput,
  type StudyPlanRequest,
  type TokenUsage,
} from '../../src/contracts/ai';
import { cardiovascularEvidence } from '../../src/ai/evidence/cardiovascular';
import { AiRunError } from '../../src/ai/errors';
import { buildStudyPlanPrompt } from '../../src/ai/prompts/study-plan-v1';
import { createFixtureProvider } from '../../src/ai/providers/fixture';
import { createAiRuntime } from '../../src/ai/runtime';
import { createStudyPlanService } from '../../src/ai/study-plan-service';

const sourceKey = evidenceKey(cardiovascularEvidence);
const usage: TokenUsage = { inputTokens: 40, outputTokens: 20 };
const timeoutMs = 25;

type Locale = StudyPlanRequest['studyLocale'];
type Limits = Parameters<typeof createStudyPlanService>[0]['limits'];

function makeRequest(studyLocale: Locale = 'pt-BR'): StudyPlanRequest {
  return {
    topic: studyLocale === 'pt-BR' ? 'Débito cardíaco' : 'Cardiac output',
    studyLocale,
    level: 'basic',
  };
}

function makeOutput(locale: Locale = 'pt-BR'): StudyPlanOutput {
  return {
    locale,
    title: locale === 'pt-BR' ? 'Débito cardíaco' : 'Cardiac output',
    lessons: [{
      id: 'cardiac-output',
      title: locale === 'pt-BR' ? 'Equação básica' : 'Basic equation',
      objective: locale === 'pt-BR'
        ? 'Relacionar frequência cardíaca e volume sistólico.'
        : 'Relate heart rate and stroke volume.',
      evidenceKeys: [sourceKey],
    }],
  };
}

function setup(response: ProviderResponse = { output: makeOutput(), usage }, limits?: Limits) {
  const fixture = createFixtureProvider(response);
  const generate = vi.fn<DraftProvider['generate']>(fixture.generate);
  const onRun = vi.fn<(record: RunRecord) => void>();
  const service = createStudyPlanService({
    provider: { ...fixture, generate },
    evidence: [cardiovascularEvidence],
    limits,
    onRun,
  });
  return { service, generate, onRun };
}

async function expectFailure(result: Promise<unknown>, code: AiErrorCode) {
  await expect(result).rejects.toBeInstanceOf(AiRunError);
  await expect(result).rejects.toMatchObject({ code });
}

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: Error) => void;
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, resolve, reject };
}

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() => {
    throw new Error('Network access is forbidden in offline AI evaluations.');
  }));
});

afterEach(() => {
  const fetchMock = vi.mocked(fetch);
  vi.useRealTimers();
  vi.unstubAllGlobals();
  expect(fetchMock).not.toHaveBeenCalled();
});

describe('offline study-plan drafts', () => {
  describe.each(['pt-BR', 'en'] as const)('%s', (locale) => {
    it.each(['object', 'json'] as const)('creates an unreviewed draft from %s with provenance', async (format) => {
      const output = makeOutput(locale);
      const response = { output: format === 'json' ? JSON.stringify(output) : output, usage };
      const { service, generate, onRun } = setup(response, { maxOutputTokens: 64 });
      const request = makeRequest(locale);

      const draft = await service.generate(request);

      expect(draft).toEqual({
        id: expect.any(String),
        status: 'draft',
        medicallyReviewed: false,
        content: output,
        provenance: {
          runId: expect.any(String),
          createdAt: expect.any(String),
          providerId: 'offline-fixture-v1',
          providerKind: 'fixture',
          promptId: 'medical-study-plan',
          promptVersion: '1.0.0',
          schemaVersion: 1,
          evidenceKeys: [sourceKey],
        },
      });
      expect(draft.id).not.toBe('');
      expect(draft.provenance.runId).not.toBe('');
      expect(new Date(draft.provenance.createdAt).toISOString()).toBe(draft.provenance.createdAt);
      expect(draft.content.lessons.map((lesson) => lesson.id)).toEqual(['cardiac-output']);
      expect(generate).toHaveBeenCalledExactlyOnceWith({
        prompt: buildStudyPlanPrompt(request, [cardiovascularEvidence]),
        maxOutputTokens: 64,
        signal: expect.any(AbortSignal),
      });
      const providerRequest = generate.mock.calls[0][0];
      expect(providerRequest.signal.aborted).toBe(false);
      expect(JSON.parse(providerRequest.prompt.user)).toEqual({
        task: request,
        source_material: [{
          key: sourceKey,
          title: cardiovascularEvidence.title,
          excerpt: cardiovascularEvidence.excerpt,
        }],
      });
      expect(onRun).toHaveBeenCalledExactlyOnceWith({
        runId: draft.provenance.runId,
        providerId: 'offline-fixture-v1',
        providerKind: 'fixture',
        promptId: 'medical-study-plan',
        promptVersion: '1.0.0',
        schemaVersion: 1,
        studyLocale: locale,
        outcome: 'draft-created',
        elapsedMs: expect.any(Number),
        usage,
      });
      expect(onRun.mock.calls[0][0].elapsedMs).toBeGreaterThanOrEqual(0);
    });
  });

  it('supports an explicitly configured fixture runtime without clinical approval', async () => {
    const runtime = createAiRuntime({ mode: 'fixture', response: { output: makeOutput() } });

    await expect(runtime.studyPlan.generate(makeRequest())).resolves.toMatchObject({
      status: 'draft',
      medicallyReviewed: false,
      provenance: { providerKind: 'fixture', evidenceKeys: expect.arrayContaining([sourceKey]) },
    });
  });

  it('does not fabricate zero token usage when the provider omits usage', async () => {
    const { service, onRun } = setup({ output: makeOutput() });

    await service.generate(makeRequest());

    expect(onRun).toHaveBeenCalledTimes(1);
    expect(onRun.mock.calls[0][0]).toMatchObject({ outcome: 'draft-created' });
    expect(onRun.mock.calls[0][0]).not.toHaveProperty('usage');
  });
});

describe('untrusted provider output', () => {
  it.each(['approved', 'published', 'publicado'])('rejects extra publication status %s', async (status) => {
    const { service, onRun } = setup({ output: { ...makeOutput(), status } });

    await expectFailure(service.generate(makeRequest()), 'INVALID_OUTPUT');

    expect(onRun).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
      outcome: 'failed', errorCode: 'INVALID_OUTPUT',
    }));
  });

  it('rejects a provider-supplied medical approval flag', async () => {
    const { service } = setup({ output: { ...makeOutput(), medicallyReviewed: true } });

    await expectFailure(service.generate(makeRequest()), 'INVALID_OUTPUT');
  });

  it.each(['pt-BR', 'en'] as const)('rejects output in a different locale from %s', async (locale) => {
    const otherLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';
    const { service } = setup({ output: makeOutput(otherLocale) });

    await expectFailure(service.generate(makeRequest(locale)), 'LOCALE_MISMATCH');
  });

  it.each([
    ['unknown evidence', 'unknown-source@1'],
    ['wrong evidence revision', `${cardiovascularEvidence.id}@${cardiovascularEvidence.revision + 1}`],
  ])('rejects %s even alongside a valid evidence key', async (_, invalidKey) => {
    const output = makeOutput();
    output.lessons[0].evidenceKeys = [sourceKey, invalidKey];
    const { service } = setup({ output });

    await expectFailure(service.generate(makeRequest()), 'UNKNOWN_EVIDENCE');
  });

  it('rejects duplicate canonical lesson IDs', async () => {
    const output = makeOutput();
    output.lessons.push({ ...output.lessons[0], title: 'Outra equação' });
    const { service } = setup({ output });

    await expectFailure(service.generate(makeRequest()), 'INVALID_OUTPUT');
  });

  it.each(['not-json', '{"locale":', '```json\n{}\n```'])('rejects invalid JSON %j', async (output) => {
    const { service } = setup({ output });

    await expectFailure(service.generate(makeRequest()), 'INVALID_OUTPUT');
  });

  it.each(['object', 'json'] as const)('rejects oversized UTF-8 %s output even when schema-valid', async (format) => {
    const output = makeOutput();
    output.title = 'á'.repeat(160);
    output.lessons[0].objective = 'á'.repeat(400);
    const text = JSON.stringify(output);
    expect(text.length).toBeLessThanOrEqual(1024);
    expect(Buffer.byteLength(text, 'utf8')).toBeGreaterThan(1024);
    const { service } = setup({ output: format === 'json' ? text : output }, { maxOutputBytes: 1024 });

    await expectFailure(service.generate(makeRequest()), 'INVALID_OUTPUT');
  });
});

describe('usage validation and budgets', () => {
  it.each([
    { name: 'negative input tokens', value: { inputTokens: -1, outputTokens: 20 } },
    { name: 'negative output tokens', value: { inputTokens: 40, outputTokens: -1 } },
    { name: 'fractional input tokens', value: { inputTokens: 0.5, outputTokens: 20 } },
    { name: 'fractional output tokens', value: { inputTokens: 40, outputTokens: 0.5 } },
    { name: 'non-finite input tokens', value: { inputTokens: Infinity, outputTokens: 20 } },
    { name: 'NaN output tokens', value: { inputTokens: 40, outputTokens: NaN } },
    { name: 'input tokens above schema limit', value: { inputTokens: 1000001, outputTokens: 20 } },
    { name: 'output tokens above schema limit', value: { inputTokens: 40, outputTokens: 1000001 } },
    { name: 'string token count', value: { inputTokens: '40', outputTokens: 20 } },
    { name: 'missing output tokens', value: { inputTokens: 40 } },
    { name: 'null usage', value: null },
    { name: 'extra usage fields', value: { ...usage, totalTokens: 60 } },
  ])('rejects $name without recording invalid usage', async ({ value }) => {
    // A provider can return malformed runtime data despite the TypeScript contract.
    const { service, onRun } = setup({ output: makeOutput(), usage: value as TokenUsage });

    await expectFailure(service.generate(makeRequest()), 'INVALID_USAGE');

    expect(onRun).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
      outcome: 'failed', errorCode: 'INVALID_USAGE',
    }));
    expect(onRun.mock.calls[0][0]).not.toHaveProperty('usage');
  });

  it('rejects valid usage above the configured output-token budget', async () => {
    const overBudget = { inputTokens: 40, outputTokens: 65 };
    const { service, generate, onRun } = setup({ output: makeOutput(), usage: overBudget }, { maxOutputTokens: 64 });

    await expectFailure(service.generate(makeRequest()), 'BUDGET_EXCEEDED');

    expect(generate).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({ maxOutputTokens: 64 }));
    expect(onRun).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
      outcome: 'failed', errorCode: 'BUDGET_EXCEEDED', usage: overBudget,
    }));
  });
});

describe('input validation before provider invocation', () => {
  it.each([
    { name: 'null request', value: null },
    { name: 'missing topic', value: { studyLocale: 'pt-BR', level: 'basic' } },
    { name: 'blank topic', value: { ...makeRequest(), topic: '   ' } },
    { name: 'topic above schema limit', value: { ...makeRequest(), topic: 'a'.repeat(161) } },
    { name: 'unsupported locale', value: { ...makeRequest(), studyLocale: 'fr' } },
    { name: 'unsupported level', value: { ...makeRequest(), level: 'expert' } },
    { name: 'extra input fields', value: { ...makeRequest(), status: 'approved' } },
  ])('rejects $name without calling the provider', async ({ value }) => {
    const { service, generate, onRun } = setup();

    await expectFailure(service.generate(value), 'INVALID_INPUT');

    expect(generate).not.toHaveBeenCalled();
    expect(onRun).not.toHaveBeenCalled();
  });

  it('enforces the full prompt UTF-8 byte budget before calling the provider', async () => {
    const request = { ...makeRequest(), topic: 'á'.repeat(160) };
    const prompt = buildStudyPlanPrompt(request, [cardiovascularEvidence]);
    const text = prompt.system + prompt.user;
    const maxInputBytes = text.length;
    expect(maxInputBytes).toBeGreaterThanOrEqual(256);
    expect(Buffer.byteLength(text, 'utf8')).toBeGreaterThan(maxInputBytes);
    const { service, generate, onRun } = setup(undefined, { maxInputBytes });

    await expectFailure(service.generate(request), 'INPUT_TOO_LARGE');

    expect(generate).not.toHaveBeenCalled();
    expect(onRun).not.toHaveBeenCalled();
  });
});

describe('provider isolation and cancellation', () => {
  it('redacts provider errors and excludes prompt, topic and output from run metadata', async () => {
    const request = { ...makeRequest(), topic: 'TOPIC_MUST_NOT_BE_LOGGED' };
    const prompt = buildStudyPlanPrompt(request, [cardiovascularEvidence]);
    const output = 'OUTPUT_MUST_NOT_BE_LOGGED';
    const providerError = new Error(JSON.stringify({ prompt, topic: request.topic, output }));
    const { service, generate, onRun } = setup();
    generate.mockRejectedValueOnce(providerError);

    const failure: unknown = await service.generate(request).catch((error: unknown) => error);

    expect(failure).toBeInstanceOf(AiRunError);
    expect(failure).not.toBe(providerError);
    expect(failure).toMatchObject({
      name: 'AiRunError', code: 'PROVIDER_FAILED', message: 'AI workflow failed: PROVIDER_FAILED',
    });
    expect(failure).not.toHaveProperty('cause');
    expect(onRun).toHaveBeenCalledExactlyOnceWith({
      runId: expect.any(String),
      providerId: 'offline-fixture-v1',
      providerKind: 'fixture',
      promptId: 'medical-study-plan',
      promptVersion: '1.0.0',
      schemaVersion: 1,
      studyLocale: 'pt-BR',
      outcome: 'failed',
      errorCode: 'PROVIDER_FAILED',
      elapsedMs: expect.any(Number),
    });
    const serialized = JSON.stringify({ failure, records: onRun.mock.calls });
    for (const forbidden of [prompt.system, prompt.user, request.topic, output, providerError.message]) {
      expect(serialized).not.toContain(JSON.stringify(forbidden).slice(1, -1));
      expect(String(failure)).not.toContain(forbidden);
    }
    expect(onRun.mock.calls[0][0]).not.toHaveProperty('usage');
  });

  it('propagates timeout cancellation to the provider AbortSignal', async () => {
    vi.useFakeTimers();
    const { service, generate, onRun } = setup(undefined, { timeoutMs });
    const aborted = vi.fn();
    generate.mockImplementationOnce(({ signal }) => new Promise((_, reject) => {
      signal.addEventListener('abort', () => {
        aborted(signal.aborted);
        reject(signal.reason);
      }, { once: true });
    }));
    const timedOut = expectFailure(service.generate(makeRequest()), 'TIMEOUT');

    await vi.advanceTimersByTimeAsync(timeoutMs - 1);
    expect(generate).toHaveBeenCalledTimes(1);
    const signal = generate.mock.calls[0][0].signal;
    expect(signal.aborted).toBe(false);
    expect(onRun).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    await timedOut;

    expect(signal.aborted).toBe(true);
    expect(aborted).toHaveBeenCalledExactlyOnceWith(true);
    expect(onRun).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
      outcome: 'failed', errorCode: 'TIMEOUT',
    }));
    expect(vi.getTimerCount()).toBe(0);
  });

  it.each(['resolve', 'reject'] as const)('holds the concurrency slot until a non-cooperative provider can %s', async (settlement) => {
    vi.useFakeTimers();
    const pending = deferred<ProviderResponse>();
    const { service, generate, onRun } = setup(undefined, { timeoutMs, maxConcurrent: 1 });
    generate.mockImplementationOnce(() => pending.promise);
    const timedOut = expectFailure(service.generate(makeRequest()), 'TIMEOUT');
    await vi.advanceTimersByTimeAsync(0);

    await expectFailure(service.generate(makeRequest()), 'CAPACITY_EXCEEDED');
    expect(generate).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(timeoutMs);
    await timedOut;
    expect(generate.mock.calls[0][0].signal.aborted).toBe(true);

    await expectFailure(service.generate(makeRequest()), 'CAPACITY_EXCEEDED');
    expect(generate).toHaveBeenCalledTimes(1);
    expect(onRun).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
      outcome: 'failed', errorCode: 'TIMEOUT',
    }));

    if (settlement === 'resolve') pending.resolve({ output: makeOutput(), usage });
    else pending.reject(new Error('Offline provider finished after cancellation.'));
    await vi.advanceTimersByTimeAsync(0);
    expect(onRun).toHaveBeenCalledTimes(1);

    await expect(service.generate(makeRequest())).resolves.toMatchObject({ status: 'draft', medicallyReviewed: false });
    expect(generate).toHaveBeenCalledTimes(2);
    expect(onRun.mock.calls.map(([record]) => record.outcome)).toEqual(['failed', 'draft-created']);
    expect(vi.getTimerCount()).toBe(0);
  });
});

it('fails closed when a live runtime has no configured provider', () => {
  expect(() => createAiRuntime({ mode: 'live' })).toThrow(AiRunError);
  expect(() => createAiRuntime({ mode: 'live' })).toThrow(expect.objectContaining({
    code: 'PROVIDER_NOT_CONFIGURED',
  }));
});
