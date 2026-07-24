# Aditya Nannapaneni — Personal Website

Senior applied-AI portfolio for [aditya-nannapaneni.github.io](https://aditya-nannapaneni.github.io).

The site positions production AI systems, evaluation research, and durable ML infrastructure ahead of earlier coursework-style projects.

## Stack

- [Astro](https://astro.build) (static generation)
- TypeScript
- Tailwind CSS v4
- MDX content collections
- Vitest + ESLint
- GitHub Actions → GitHub Pages

No backend, database, CMS, or auth.

## Local setup

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:4321`).

## Scripts

```bash
npm run dev        # local development server
npm run lint       # ESLint
npm run typecheck  # Astro + TypeScript checks
npm run test       # Vitest unit tests
npm run build      # production build to dist/
npm run preview    # preview the production build
```

Broken internal links are checked in CI via `node scripts/check-links.mjs` after build.

## Content editing

| Content | Location |
| --- | --- |
| Publications | `src/data/publications.ts` |
| Experience | `src/data/experience.ts` |
| Social / nav links | `src/data/socialLinks.ts` |
| Archive projects | `src/data/earlierProjects.ts` |
| Project case studies | `src/content/projects/*.mdx` |

Incomplete fields should stay out of rendered UI. Prefer omitting optional frontmatter keys over showing `TBD`.

## Adding a project

1. Create `src/content/projects/your-slug.mdx`.
2. Fill frontmatter (`title`, `summary`, `status`, `year`, `role`, `technologies`, `tags`, `category`, etc.).
3. Write the case-study sections (Context, My contribution, System design, Key technical decisions, Evaluation, Results, What I learned).
4. Set `featured: true` and `featuredOrder` only for homepage cards.
5. For AWS work, set `confidentialityNote: true`.

The route `/projects/your-slug/` is generated automatically.

## Adding a publication

Edit `src/data/publications.ts`. Include full author order, arXiv metadata, a two-sentence summary, BibTeX, and optional `codeUrl` only when a real repository exists.

Label venue as `arXiv preprint` unless a paper is actually accepted somewhere.

## Deployment

Pushes to `main` run:

1. `npm ci`
2. lint, typecheck, test
3. production build + internal link check
4. GitHub Pages deploy from `dist/`

Repository settings must use **GitHub Actions** as the Pages source (not “Deploy from a branch” of raw files).

Legacy static Hugo output is preserved on branch `legacy-static-site` and tag `backup/pre-astro-rebuild`.

## Known placeholders

- Google Scholar URL is not configured (link omitted until provided).
- Agent Reliability Lab, Persistent Agent Memory Benchmark, and RAG Metric Auditor are labeled in progress / in development without fabricated metrics.
- Resume is intentionally omitted from navigation and contact links.

## License

Personal site content © Aditya Nannapaneni.
