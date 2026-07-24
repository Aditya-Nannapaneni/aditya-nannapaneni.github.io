import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');

function walk(dir) {
  /** @type {string[]} */
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

const htmlFiles = walk(dist);
const hrefRegex = /href="([^"]+)"/g;
/** @type {Set<string>} */
const missing = new Set();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(hrefRegex)) {
    const href = match[1];
    if (
      !href ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('#') ||
      href.startsWith('data:')
    ) {
      continue;
    }

    const clean = href.split('#')[0].split('?')[0];
    if (!clean.startsWith('/')) continue;

    const candidates = [
      path.join(dist, clean),
      path.join(dist, clean, 'index.html'),
      path.join(dist, `${clean}.html`),
    ];

    const exists = candidates.some((candidate) => fs.existsSync(candidate));
    if (!exists) missing.add(clean);
  }
}

if (missing.size > 0) {
  console.error('Broken internal links:');
  for (const href of [...missing].sort()) console.error(`  ${href}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files. No broken internal links.`);
