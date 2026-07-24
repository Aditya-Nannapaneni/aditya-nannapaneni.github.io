export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const siteConfig = {
  name: 'Aditya Nannapaneni',
  title: 'Aditya Nannapaneni — Applied AI Scientist and Research Engineer',
  description:
    'Senior Applied Scientist at AWS building production LLM systems, agent evaluation frameworks, retrieval systems, and reusable machine learning infrastructure.',
  url: 'https://aditya-nannapaneni.github.io',
  email: 'anannapaneni96@gmail.com',
  location: 'Seattle, WA',
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/aditya-nannapaneni',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anannapaneni',
    external: true,
  },
  // Google Scholar URL not yet provided — omit from rendered lists until set
  {
    label: 'Email',
    href: 'mailto:anannapaneni96@gmail.com',
  },
];

export const primaryNav: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Research', href: '/research' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
];

export const proofPoints = [
  'Senior Applied Scientist at AWS',
  '10+ years in machine learning',
  '2 AI research publications',
  'AWS CEO Award',
] as const;
