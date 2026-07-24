import { describe, expect, it } from 'vitest';
import { publications } from '../src/data/publications';
import { experience } from '../src/data/experience';
import { earlierProjects } from '../src/data/earlierProjects';
import { primaryNav, socialLinks, proofPoints } from '../src/data/socialLinks';

describe('site data integrity', () => {
  it('exposes primary navigation without Contact', () => {
    const labels = primaryNav.map((item) => item.label);
    expect(labels).toEqual(['Work', 'Research', 'Experience', 'About']);
    expect(labels).not.toContain('Contact');
    expect(labels).not.toContain('Resume');
  });

  it('keeps external social links with safe targets', () => {
    for (const link of socialLinks) {
      if (link.href.startsWith('http')) {
        expect(link.external).toBe(true);
      }
    }
  });

  it('renders four proof points', () => {
    expect(proofPoints).toHaveLength(4);
  });

  it('includes both publications with arXiv URLs', () => {
    expect(publications).toHaveLength(2);
    for (const pub of publications) {
      expect(pub.arxivUrl).toMatch(/^https:\/\/arxiv\.org\/abs\//);
      expect(pub.authors).toContain('Aditya Nannapaneni');
      expect(pub.venueLabel.toLowerCase()).toContain('arxiv');
    }
  });

  it('lists three experience companies', () => {
    expect(experience.map((e) => e.company)).toEqual([
      'Amazon Web Services',
      'Embr Labs',
      'American Express',
    ]);
  });

  it('archives earlier projects separately', () => {
    expect(earlierProjects.length).toBeGreaterThanOrEqual(4);
    const titles = earlierProjects.map((p) => p.title).join(' ');
    expect(titles).toMatch(/Taxi/);
    expect(titles).toMatch(/Facebook/);
    expect(titles).toMatch(/Quora/);
    expect(titles).toMatch(/Energy/);
  });
});

describe('publication rendering helpers', () => {
  it('does not invent code links', () => {
    for (const pub of publications) {
      if (pub.codeUrl !== undefined) {
        expect(pub.codeUrl).toMatch(/^https?:\/\//);
      }
    }
  });
});
