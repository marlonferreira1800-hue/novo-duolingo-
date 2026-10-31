import { expect, it } from 'vitest';
import { canShowMedicalDemo } from '../src/content/demo-policy';

it('allows local development but blocks production unless explicitly enabled', () => {
  expect(canShowMedicalDemo('development', undefined)).toBe(true);
  expect(canShowMedicalDemo('production', undefined)).toBe(false);
  expect(canShowMedicalDemo('production', 'false')).toBe(false);
  expect(canShowMedicalDemo('production', 'TRUE')).toBe(false);
  expect(canShowMedicalDemo('production', 'true')).toBe(true);
});
