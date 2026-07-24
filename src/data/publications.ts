export type Publication = {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venueLabel: string; // e.g. "arXiv preprint"
  arxivId: string;
  arxivUrl: string;
  pdfUrl: string;
  summary: string;
  codeUrl?: string;
  bibtex: string;
};

export const publications: Publication[] = [
  {
    id: 'attribution-metrics-transfer',
    title:
      'Do LLM Attribution Metrics Transfer? Auditing Retrieval-Augmented Generation Evaluation Across Datasets and Constructs',
    authors: [
      'Tianyu Ding',
      'Aditya Nannapaneni',
      'Juan Pablo De la Cruz Weinstein',
    ],
    year: 2026,
    venueLabel: 'arXiv preprint',
    arxivId: '2606.23915',
    arxivUrl: 'https://arxiv.org/abs/2606.23915',
    pdfUrl: 'https://arxiv.org/pdf/2606.23915',
    summary:
      'We audit eight automatic attribution scorers across evaluation constructs and show that no audited automatic metric transfers reliably across the datasets of a construct. Metric choice must be validated on the target dataset rather than learned from others.',
    bibtex: `@article{ding2026attribution,
  title={Do LLM Attribution Metrics Transfer? Auditing Retrieval-Augmented Generation Evaluation Across Datasets and Constructs},
  author={Ding, Tianyu and Nannapaneni, Aditya and De la Cruz Weinstein, Juan Pablo},
  journal={arXiv preprint arXiv:2606.23915},
  year={2026}
}`,
  },
  {
    id: 'always-on-agents',
    title:
      'Always-On Agents: A Survey of Persistent Memory, State, and Governance in LLM Agents',
    authors: [
      'Tianyu Ding',
      'Aditya Nannapaneni',
      'Bingfan Liu',
      'Ling Zhang',
    ],
    year: 2026,
    venueLabel: 'arXiv preprint',
    arxivId: '2606.30306',
    arxivUrl: 'https://arxiv.org/abs/2606.30306',
    pdfUrl: 'https://arxiv.org/pdf/2606.30306',
    summary:
      'We survey persistent-state always-on agents across a 435-work corpus and introduce the Always-On Evaluation Protocol (AOEP-v0), which scores state mutation and recovery obligations rather than answer quality alone.',
    bibtex: `@article{ding2026alwayson,
  title={Always-On Agents: A Survey of Persistent Memory, State, and Governance in LLM Agents},
  author={Ding, Tianyu and Nannapaneni, Aditya and Liu, Bingfan and Zhang, Ling},
  journal={arXiv preprint arXiv:2606.30306},
  year={2026}
}`,
  },
];

export const researchInterests = [
  'LLM evaluation',
  'Agent reliability',
  'Persistent memory and state',
  'Retrieval-augmented generation',
  'Semantic retrieval',
  'Production ML systems',
  'Human and model-based evaluation',
] as const;

export const researchStatement =
  'My current work focuses on how to evaluate and operate reliable AI systems. I’m particularly interested in agent quality, retrieval-augmented generation, persistent memory, model evaluation, and the infrastructure required to move research ideas into production.';
