export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  homepageOutcomes?: string[];
  contributions?: {
    group?: string;
    items: string[];
  }[];
};

export const experience: ExperienceItem[] = [
  {
    id: 'aws',
    company: 'Amazon Web Services',
    role: 'Senior Applied Scientist',
    dates: '2021–Present',
    location: 'Seattle, WA',
    summary:
      'Build reusable LLM and machine learning systems spanning inference, evaluation, retrieval, embeddings, recommendation, explainability, and decision intelligence.',
    homepageOutcomes: [
      'Approximately 5× serving improvement',
      'ML infrastructure adopted by more than 30 scientists',
      'Large Customer Model associated with a 15% improvement in pipeline velocity in NAMER',
    ],
    contributions: [
      {
        group: 'LLM systems and evaluation',
        items: [
          'Designed and shipped a reusable vLLM-based serving framework with PEFT and LoRA support, improving throughput, latency, and serving cost by approximately 5×.',
          'Built evaluation tooling and judgment workflows for grounding, attribution, and agent reliability.',
        ],
      },
      {
        group: 'Shared ML platforms',
        items: [
          'Developed shared ML infrastructure adopted by more than 30 scientists across sales and science organizations.',
          'Standardized reusable pipelines for training, evaluation, and deployment of internal ML systems.',
        ],
      },
      {
        group: 'Retrieval and representation learning',
        items: [
          'Built semantic retrieval and recommendation systems over enterprise account and opportunity data.',
          'Designed embedding and ranking components used in production decision workflows.',
        ],
      },
      {
        group: 'Production decision systems',
        items: [
          'Shipped the Large Customer Model associated with a 15% improvement in pipeline velocity in NAMER.',
          'Delivered explainability and decision-intelligence systems used by go-to-market teams.',
        ],
      },
    ],
  },
  {
    id: 'embr',
    company: 'Embr Labs',
    role: 'Machine Learning Engineer',
    dates: '2019–2020',
    location: 'Boston, MA',
    summary:
      'Developed wearable sensor models for sleep detection, customer segmentation systems, and production forecasting tools.',
    contributions: [
      {
        items: [
          'Built sleep-detection models from wearable sensor streams for production use.',
          'Developed customer segmentation systems to support product and marketing decisions.',
          'Shipped forecasting tooling used in operational planning.',
        ],
      },
    ],
  },
  {
    id: 'amex',
    company: 'American Express',
    role: 'Machine Learning Engineer',
    dates: '2015–2018',
    location: 'New York, NY',
    summary:
      'Worked on fraud detection and enterprise conversational-AI systems in a large financial-services environment.',
    contributions: [
      {
        items: [
          'Built and evaluated fraud-detection models for production transaction monitoring.',
          'Contributed to enterprise conversational-AI systems serving customer and agent workflows.',
          'Operated ML systems under financial-services reliability and compliance constraints.',
        ],
      },
    ],
  },
];
