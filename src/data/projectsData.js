export const projects = [
  {
    id: 'cinematch',
    title: 'Cinematch — Movie Discovery & Taste DNA',
    category: 'Creative Tech',
    period: '2024',
    featured: true,
    description:
      'A film recommendation platform built to help movie lovers discover stories based on their tastes, search preferences, and personal watchlists.',
    longDescription:
      'Born out of a genuine love for cinema. Cinematch explores personalized movie recommendations and taste patterns that go beyond generic trending algorithms. Features custom Taste DNA insights, search filtering, and user watchlists.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'TMDB API'],
    links: {
      github: 'https://github.com/lipiroy558-cloud/Cinematch',
      live: '#',
    },
    highlights: [
      'Personalized recommendation engine based on user taste profiles',
      'Curated watchlists and granular genre exploration',
      'Clean interface prioritizing film stills, posters, and mood'
    ]
  },
  {
    id: 'genewise',
    title: 'GeneWise — Hereditary Risk Estimator',
    category: 'Engineering & Logic',
    period: '2024',
    featured: true,
    description:
      'A rule-based health risk assessment tool that analyses multi-generational family medical patterns to estimate hereditary disease predispositions.',
    longDescription:
      'A project applying computer science logic to health history. Models compound generational risk, early-onset indicators, and lineage weightings with interactive SVG risk charts and multi-language support (English, Hindi, Bengali).',
    tags: ['JavaScript', 'React', 'Python', 'Rule-Based ML', 'SVG Data Viz'],
    links: {
      github: 'https://github.com/lipiroy558-cloud/GeneWise-Disease-Risk-Predictor',
      live: '#',
    },
    highlights: [
      'Multi-generational risk calculation across parental and maternal lineages',
      'Dynamic visual charts illustrating generational patterns',
      'Three-language interface support (English, Hindi, Bengali)'
    ]
  },
  {
    id: 'aquatrace',
    title: 'AquaTrace — Water Purity & Conservation Monitoring',
    category: 'Engineering & Logic',
    period: '2023 - 2024',
    featured: true,
    description:
      'An environmental tracking dashboard built to monitor water quality metrics, consumption trends, and conservation thresholds in real time.',
    longDescription:
      'Created to explore the intersection of environmental data and clean web interfaces. Visualizes water quality parameters, tracks historical fluctuations, and flags conservation anomalies through a responsive dashboard.',
    tags: ['JavaScript', 'React', 'Sensor Data Logic', 'REST APIs', 'CSS3'],
    links: {
      github: 'https://github.com/lipiroy558-cloud/AquaTrace',
      live: '#',
    },
    highlights: [
      'Real-time visualization of purity indices and consumption volumes',
      'Alert thresholds for environmental anomalies',
      'Accessible, high-contrast data visualization design'
    ]
  },
  {
    id: 'memegenerator',
    title: 'MemeGenerator — Lightweight Canvas Utility',
    category: 'Creative Tech',
    period: '2023',
    featured: false,
    description:
      'A minimalist, browser-based visual editor for composing media overlays, typography styling, and instant image generation.',
    longDescription:
      'A fast, zero-bloat client-side canvas utility. Built to practice pure DOM and HTML5 Canvas manipulation, real-time font rendering, and seamless image export without external servers.',
    tags: ['JavaScript', 'HTML5 Canvas', 'CSS Architecture'],
    links: {
      github: 'https://github.com/lipiroy558-cloud/MemeGenerator',
      live: '#',
    },
    highlights: [
      'Client-side Canvas rendering with instant text positioning',
      'Custom typography controls and real-time preview',
      'Lightweight architecture requiring zero server dependencies'
    ]
  }
];

export const categories = ['All', 'Creative Tech', 'Engineering & Logic'];
