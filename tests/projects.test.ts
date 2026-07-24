import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

describe('project content and routes', () => {
  it('includes required featured project files', () => {
    const dir = path.join(root, 'src/content/projects');
    const files = fs.readdirSync(dir);
    for (const required of [
      'distributed-llm-serving.mdx',
      'agent-reliability-lab.mdx',
      'persistent-agent-memory.mdx',
      'rag-metric-auditor.mdx',
      'large-customer-model.mdx',
    ]) {
      expect(files).toContain(required);
    }
  });

  it('does not render TBD strings in project content bodies', () => {
    const dir = path.join(root, 'src/content/projects');
    for (const file of fs.readdirSync(dir)) {
      const text = fs.readFileSync(path.join(dir, file), 'utf8');
      // Allow TBD only in comments if ever needed; public body must not show it
      const body = text.split('---').slice(2).join('---');
      expect(body).not.toMatch(/\bTBD\b/);
    }
  });

  it('labels unfinished projects in frontmatter', () => {
    const unfinished = [
      'agent-reliability-lab.mdx',
      'persistent-agent-memory.mdx',
      'rag-metric-auditor.mdx',
    ];
    for (const file of unfinished) {
      const text = fs.readFileSync(
        path.join(root, 'src/content/projects', file),
        'utf8',
      );
      expect(text).toMatch(/status:\s*(in-development|research-in-progress|planned)/);
    }
  });
});

describe('build artifacts expectations', () => {
  it('defines project dynamic route', () => {
    expect(
      fs.existsSync(path.join(root, 'src/pages/projects/[slug].astro')),
    ).toBe(true);
  });
});
