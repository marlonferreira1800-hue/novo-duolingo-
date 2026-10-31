import { existsSync, readFileSync } from 'node:fs';
import { dirname, extname, relative, resolve } from 'node:path';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';

const root = process.cwd();

function runtimeDependencies(path: string): string[] {
  const source = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true);
  const specifiers = new Set<string>();
  function visit(node: ts.Node) {
    if (ts.isImportDeclaration(node) && !node.importClause?.isTypeOnly && ts.isStringLiteral(node.moduleSpecifier)) {
      specifiers.add(node.moduleSpecifier.text);
    }
    if (ts.isExportDeclaration(node) && !node.isTypeOnly && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
      specifiers.add(node.moduleSpecifier.text);
    }
    if (ts.isCallExpression(node)
      && (node.expression.kind === ts.SyntaxKind.ImportKeyword
        || (ts.isIdentifier(node.expression) && node.expression.text === 'require'))
      && node.arguments.length === 1 && ts.isStringLiteral(node.arguments[0])) {
      specifiers.add(node.arguments[0].text);
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  return [...specifiers].flatMap((specifier) => {
    if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return [];
    // Styles are not executable lesson dependencies; traverse local TS/TSX modules only.
    if (extname(specifier) && !['.ts', '.tsx'].includes(extname(specifier))) return [];
    const base = specifier.startsWith('@/')
      ? resolve(root, 'src', specifier.slice(2))
      : resolve(dirname(path), specifier);
    const dependency = [base, `${base}.ts`, `${base}.tsx`, resolve(base, 'index.ts'), resolve(base, 'index.tsx')]
      .find((candidate) => ['.ts', '.tsx'].includes(extname(candidate)) && existsSync(candidate));
    expect(dependency, `Resolve public dependency ${specifier} from ${relative(root, path)}`).toBeDefined();
    return [dependency!];
  });
}

describe('public landing content boundary', () => {
  it.each([
    'src/features/marketing/landing-page.tsx',
    'src/app/layout.tsx',
    'src/app/page.tsx',
  ])('%s does not import lesson fixtures or the learning UI, even transitively', (entry) => {
    const visited = new Set<string>();
    const pending = [resolve(root, entry)];
    while (pending.length) {
      const file = pending.pop()!;
      if (visited.has(file)) continue;
      visited.add(file);
      const name = relative(root, file).replaceAll('\\', '/');
      expect(name, `Medical fixture in public import graph: ${name}`).not.toMatch(/^content\//);
      expect(name, `Learning UI in public import graph: ${name}`)
        .not.toMatch(/^src\/features\/learning\/(?:learning-app|lesson-reader)\.tsx$/);
      pending.push(...runtimeDependencies(file));
    }
    expect(visited.size).toBeGreaterThan(0);
  });
});
