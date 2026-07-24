export type EarlierProject = {
  title: string;
  summary: string;
  tags: string[];
  github?: string;
  legacyPath?: string;
};

export const earlierProjects: EarlierProject[] = [
  {
    title: 'Taxi Demand Prediction in New York City',
    summary:
      'Forecasting taxi demand across NYC regions using spatiotemporal features and classical ML models.',
    tags: ['Forecasting', 'Time series', 'Geospatial'],
    github:
      'https://github.com/Aditya-Nannapaneni/Personal_Projects/tree/main/Machine_Learning_Projects/Taxi%20Demand%20Prediction%20in%20NYC',
    legacyPath: '/post/project-4/',
  },
  {
    title: 'Facebook Friend Recommendation using Graph Mining',
    summary:
      'Link-prediction models over a directed social graph using graph features and supervised classifiers.',
    tags: ['Graph learning', 'Link prediction'],
    github:
      'https://github.com/Aditya-Nannapaneni/Personal_Projects/tree/main/Machine_Learning_Projects',
    legacyPath: '/post/project-3/',
  },
  {
    title: 'Quora Question Pair Similarity',
    summary:
      'Duplicate-question detection with NLP feature engineering and models optimized for log loss.',
    tags: ['NLP', 'Similarity', 'Classification'],
    github:
      'https://github.com/Aditya-Nannapaneni/Personal_Projects/tree/main/Machine_Learning_Projects/Quora%20Question%20Pair%20Similarity',
    legacyPath: '/post/project-2/',
  },
  {
    title: 'Building Energy Score Prediction',
    summary:
      'Tabular modeling to predict NYC building Energy Star scores and identify predictive intensity features.',
    tags: ['Tabular ML', 'Regression'],
    github:
      'https://github.com/Aditya-Nannapaneni/Personal_Projects/tree/main/Machine_Learning_Projects/Building%20Energy%20Score%20Prediction',
    legacyPath: '/post/project-1/',
  },
];

export const archiveNote =
  'These projects document earlier work in forecasting, graph learning, NLP, and tabular modeling. My current work focuses on production AI systems, evaluation, retrieval, and agent infrastructure.';
