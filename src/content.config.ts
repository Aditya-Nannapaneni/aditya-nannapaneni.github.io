import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const urlString = z.string().refine((value) => /^https?:\/\//.test(value), {
  message: 'Must be an http(s) URL',
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum([
      'shipped',
      'in-development',
      'research-in-progress',
      'planned',
      'confidential',
    ]),
    statusLabel: z.string().optional(),
    year: z.string(),
    role: z.string(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()),
    category: z.enum(['selected-systems', 'open-research', 'earlier']),
    featured: z.boolean().default(false),
    featuredOrder: z.number().optional(),
    keyResult: z.string().optional(),
    researchQuestion: z.string().optional(),
    confidentialityNote: z.boolean().default(false),
    links: z
      .object({
        github: urlString.optional(),
        paper: urlString.optional(),
        demo: urlString.optional(),
        report: urlString.optional(),
        slides: urlString.optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
