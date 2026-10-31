import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['.next/**', 'research/**', 'node_modules/**', 'test-results/**', 'playwright-report/**', 'next-env.d.ts'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
);
