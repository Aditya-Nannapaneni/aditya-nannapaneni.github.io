// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aditya-nannapaneni.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/post/': '/archive/',
    '/post/project-1/': '/archive/',
    '/post/project-2/': '/archive/',
    '/post/project-3/': '/archive/',
    '/post/project-4/': '/archive/',
    '/about/': '/about',
    '/contact/': '/',
  },
});
