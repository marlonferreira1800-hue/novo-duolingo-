import 'server-only';
import type { DraftProvider, ProviderRequest, ProviderResponse, TokenUsage } from '@/contracts/ai';

// Live provider adapter (D5). Reads credentials ONLY from server-side env vars:
//   AI_PROVIDER (openai | anthropic | mistral | custom)
//   AI_API_KEY  (never exposed to browser, never logged)
//   AI_BASE_URL (optional override)
//   AI_MODEL    (default depends on provider, e.g. mistral-small-latest or gpt-4o-mini)
//
// createAiRuntime({ mode: 'live' }) fails closed until AI_API_KEY is set AND D5 is approved.

interface LiveConfig {
  provider: string;
  baseUrl: string;
  apiKey: string;
  model: string;
  maxOutputTokens: number;
}

const PROVIDER_DEFAULTS: Record<string, { baseUrl: string; model: string }> = {
  openai: { baseUrl: 'https://api.openai.com/v1', model: 'gpt-4o-mini' },
  anthropic: { baseUrl: 'https://api.anthropic.com/v1', model: 'claude-3-5-haiku-latest' },
  mistral: { baseUrl: 'https://api.mistral.ai/v1', model: 'mistral-small-latest' },
  custom: { baseUrl: '', model: '' },
};

export function getLiveConfig(): LiveConfig | null {
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) return null;
  const inferredProvider = apiKey.startsWith('mstrl_') ? 'mistral' : 'openai';
  const provider = (process.env.AI_PROVIDER ?? inferredProvider).toLowerCase();
  const defaults = PROVIDER_DEFAULTS[provider] ?? PROVIDER_DEFAULTS.custom;
  const baseUrl = process.env.AI_BASE_URL ?? defaults.baseUrl;
  const model = process.env.AI_MODEL ?? defaults.model;
  if (!baseUrl || !model) return null;
  const maxOutputTokens = Number(process.env.AI_MAX_OUTPUT_TOKENS ?? 1200);
  return { provider, baseUrl, apiKey, model, maxOutputTokens: Number.isFinite(maxOutputTokens) ? maxOutputTokens : 1200 };
}

export function isLiveProviderConfigured(): boolean {
  return getLiveConfig() !== null;
}

export function createLiveProvider(id?: string): DraftProvider | null {
  const config = getLiveConfig();
  if (!config) return null;
  const providerId = id ?? `${config.provider}-live-v1`;
  return {
    id: providerId,
    kind: 'live',
    async generate(request: ProviderRequest): Promise<ProviderResponse> {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);
      request.signal.addEventListener('abort', () => controller.abort(), { once: true });
      try {
        const isAnthropic = config.provider === 'anthropic';
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        let body: Record<string, unknown>;
        if (isAnthropic) {
          headers['x-api-key'] = config.apiKey;
          headers['anthropic-version'] = '2023-06-01';
          body = {
            model: config.model,
            max_tokens: Math.min(request.maxOutputTokens, config.maxOutputTokens),
            system: request.prompt.system,
            messages: [{ role: 'user', content: request.prompt.user }],
          };
        } else {
          headers['Authorization'] = `Bearer ${config.apiKey}`;
          body = {
            model: config.model,
            messages: [
              { role: 'system', content: request.prompt.system },
              { role: 'user', content: request.prompt.user },
            ],
            max_tokens: Math.min(request.maxOutputTokens, config.maxOutputTokens),
            response_format: { type: 'json_object' },
          };
        }
        const endpoint = isAnthropic ? `${config.baseUrl}/messages` : `${config.baseUrl}/chat/completions`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify(body),
          signal: controller.signal,
        });
        if (!response.ok) {
          // Never log the key or request body — only the status code.
          throw new Error(`PROVIDER_HTTP_${response.status}`);
        }
        const data = await response.json();
        let output: string;
        let usage: TokenUsage;
        if (isAnthropic) {
          output = data.content?.[0]?.text ?? '';
          usage = {
            inputTokens: data.usage?.input_tokens ?? 0,
            outputTokens: data.usage?.output_tokens ?? 0,
          };
        } else {
          output = data.choices?.[0]?.message?.content ?? '';
          usage = {
            inputTokens: data.usage?.prompt_tokens ?? 0,
            outputTokens: data.usage?.completion_tokens ?? 0,
          };
        }
        return { output, usage };
      } finally {
        clearTimeout(timeout);
      }
    },
  };
}
