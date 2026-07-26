export const profile = {
  name: 'Atharva Dhoble',
  shortName: 'AD',
  roles: ['Data Engineer', 'Data Analyst', 'Analytics Engineer'],
  headline: 'Building trusted data systems - from ingestion and validation to analytics and insight.',
  summary:
    'I design Azure data platforms, production ETL/ELT pipelines, data quality frameworks, reconciliation systems, and Power BI analytics that help teams make decisions with confidence.',
  email: 'atharvadhoble25@gmail.com',
  linkedin: 'https://www.linkedin.com/in/atharva-dhoble/',
  github: 'https://github.com/Aathaarvaa',
  location: 'Pune, Maharashtra, India',
  resume: './Atharva_Dhoble_Resume.pdf',
};

export const navigation = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['architecture', 'Architecture'],
  ['publications', 'Research'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];

export const focusAreas = [
  {
    icon: 'cloud',
    label: 'Azure Data Platforms',
    text: 'Medallion architecture, orchestration, storage, transformation, and governed delivery.',
  },
  {
    icon: 'shieldCheck',
    label: 'Production Data Quality',
    text: 'Reconciliation, schema validation, intrinsic checks, baselines, and operational monitoring.',
  },
  {
    icon: 'pipeline',
    label: 'ETL / ELT Pipelines',
    text: 'Configurable pipelines, SCD patterns, idempotent loads, and multi-source integration.',
  },
  {
    icon: 'chart',
    label: 'Business Analytics',
    text: 'Power BI models and dashboards that translate technical data health into business signals.',
  },
];

export const metrics = [
  { value: 150, suffix: '+', label: 'Data quality checks', detail: 'Reconciliation, intrinsic, baseline, and SNM validation' },
  { value: 15, suffix: '+', label: 'Production entities', detail: 'Validated across enterprise data workflows' },
  { value: 650, suffix: '+', label: 'Column mappings', detail: 'Source-to-target reliability and traceability' },
  { value: 48, suffix: '', label: 'Production configurations', detail: 'JSON-driven workflow configurations' },
  { value: 95, suffix: '%', label: 'Data health monitoring', detail: 'Reported through Power BI analytics' },
  { value: 9.21, decimals: 2, suffix: '', label: 'Academic CGPA', detail: 'B.Tech in Artificial Intelligence & Data Science' },
];

export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    icon: 'code',
    description: 'Languages and analytical programming used across engineering, automation, and reporting.',
    skills: ['Python', 'SQL', 'DAX', 'KQL', 'C++', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    id: 'engineering',
    label: 'Data Engineering',
    icon: 'pipeline',
    description: 'Patterns for reliable ingestion, transformation, validation, and data delivery.',
    skills: [
      'ETL / ELT Pipelines',
      'Data Modeling',
      'Azure Data Factory',
      'Azure Synapse',
      'Microsoft Fabric',
      'Data Reconciliation',
      'Data Quality Validation',
      'Schema Validation',
      'SCD Type 1',
      'SCD Type 2',
      'Idempotent Loads',
      'Medallion Architecture',
    ],
  },
  {
    id: 'platforms',
    label: 'Cloud & Platforms',
    icon: 'cloud',
    description: 'Cloud services, analytical stores, and storage layers used to build data platforms.',
    skills: ['Microsoft Azure', 'ADLS Gen2', 'Azure Synapse', 'Microsoft Fabric', 'Snowflake', 'BigQuery'],
  },
  {
    id: 'analytics',
    label: 'Analytics & BI',
    icon: 'chart',
    description: 'Semantic modeling, dashboard development, web analytics, and decision support.',
    skills: ['Power BI', 'Power Query', 'DAX', 'Tableau', 'GA4', 'Google Tag Manager'],
  },
  {
    id: 'sources',
    label: 'Databases & Sources',
    icon: 'database',
    description: 'Operational and analytical sources integrated into reporting and platform workflows.',
    skills: ['MySQL', 'Snowflake', 'BigQuery', 'Oracle', 'Salesforce', 'SOQL', 'SharePoint', 'Peloton'],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    icon: 'gitBranch',
    description: 'Delivery, automation, integration, and configuration tools supporting production workflows.',
    skills: [
      'Azure DevOps',
      'CI/CD',
      'Git',
      'Azure Functions',
      'Azure Service Bus',
      'Azure Container Apps',
      'JSON Configuration',
      'Excel',
    ],
  },
];

export const experiences = [
  {
    id: 'mindstix',
    company: 'Mindstix Software Labs Pvt Ltd.',
    role: 'Member of Technical Staff',
    location: 'Pune, Maharashtra',
    period: 'June 2024 - Present',
    type: 'Professional Experience',
    summary:
      'Building production data engineering and analytics solutions across FMCG and luxury e-commerce domains.',
    technologies: [
      'Python',
      'SQL',
      'Azure Data Factory',
      'Azure Synapse',
      'ADLS Gen2',
      'Microsoft Fabric',
      'Power BI',
      'DAX',
      'Power Query',
      'Azure DevOps',
    ],
    projects: [
      {
        name: 'Data Quality Reconciliation & Analytics Platform for FMCG Enterprise',
        intro:
          'An Azure-based framework for validating enterprise source data against Azure Data Lake and Synapse while making data health visible to engineering and business teams.',
        achievements: [
          'Built a Data Quality & Reconciliation Framework validating Oracle/Peloton data against Azure Data Lake and Synapse across 15+ production entities.',
          'Configured 48 production JSON files covering reconciliation, full reload, intrinsic checks, and SNM validation workflows.',
          'Implemented 150+ data quality checks: 89 reconciliation/baseline checks, 50 intrinsic checks, and 14 SNM checks.',
          'Developed Power BI dashboards using DAX and Power Query to monitor 95% data health, entity-level accuracy, pass/fail status, and injected record counts.',
          'Improved reporting reliability through schema validation, data cleanup, baseline hashing, and 650+ source-to-target column mappings.',
          'Collaborated with clients, vendors, data engineering, QA, and DevOps teams to resolve data issues and support production releases.',
          'Used Azure DevOps for CI/CD deployments, configuration releases, pipeline execution, documentation, and version control across dev, test, and prod.',
        ],
        metrics: ['15+ entities', '150+ checks', '48 configurations', '650+ mappings', '95% health monitoring'],
      },
      {
        name: 'Azure Data Platform for a Luxury E-commerce Retailer',
        intro:
          'A scalable Azure data platform integrating commerce, forecasting, CRM, and digital analytics data into curated models and Power BI reporting.',
        achievements: [
          'Designed and developed a scalable Azure data platform using Raw, Bronze, Silver, and Gold Medallion layers.',
          'Built Azure Data Factory ETL pipelines with SCD Type 1 and Type 2 handling, idempotent loads, schema validation, and configurable external rules.',
          'Integrated MySQL purchase data, SharePoint forecasting data, and Salesforce CRM data using SOQL.',
          'Ingested GA4, GTM, and BigQuery web analytics data for marketing performance and customer behavior reporting.',
          'Developed Power BI dashboards for sales, inventory, purchases, finance, and commission KPIs using DAX and Power Query.',
          'Used Microsoft Fabric, ADLS Gen2, Power BI, Excel, and PowerPoint to deliver data models, reports, and business-ready insights.',
        ],
        metrics: ['4-layer architecture', 'Multi-source integration', 'SCD 1 & 2', 'Business KPI reporting'],
      },
    ],
  },
  {
    id: 'hexagon',
    company: 'Hexagon Geosystems',
    role: 'Intern',
    location: 'Gurugram, Delhi',
    period: 'January 2024 - May 2024',
    type: 'Internship',
    summary:
      'Worked in Geospatial analysis and data management using C# and .NET, employing Python for process automation.',
    technologies: ['C#', '.NET', 'Python', 'GIS', 'Bentley MicroStation'],
    projects: [
      {
        name: 'Geospatial Analysis & Mapping Workflows',
        intro:
          'Supported geospatial data management and mapping solutions with a focus on GIS development and vector mapping workflows.',
        achievements: [
          'Worked in Geospatial analysis and data management using C# and .NET, employing Python for process automation.',
          'Worked on solutions for various mapping jobs, with a focus on GIS development, and utilized vector mapping tools such as Bentley MicroStation.',
        ],
        metrics: ['GIS development', 'Process automation', 'Vector mapping'],
      },
    ],
  },
];

export const projectFilters = ['All', 'Data Engineering', 'Analytics', 'Machine Learning', 'Computer Vision', 'Research'];

export const projects = [
  {
    id: 'dq-platform',
    title: 'Production Data Quality & Reconciliation Framework',
    category: 'Data Engineering',
    eyebrow: 'Selected professional work',
    summary:
      'A configuration-driven Azure framework that reconciles source and reporting data, executes intrinsic validations, and exposes data health through Power BI.',
    problem:
      'Enterprise reporting required repeatable validation across multiple production entities, source systems, reload paths, and reporting layers.',
    approach: [
      'Used JSON-driven configurations to support reconciliation, full reload, intrinsic, and SNM workflows.',
      'Combined schema validation, baseline hashing, source-to-target mappings, and pass/fail monitoring.',
      'Connected engineering checks to business-facing Power BI data health reporting.',
    ],
    outcomes: [
      '150+ verified data quality checks across 15+ production entities.',
      '48 production configurations and 650+ source-to-target mappings.',
      '95% data health monitoring surfaced through Power BI.',
    ],
    metrics: ['150+ checks', '15+ entities', '650+ mappings'],
    technologies: ['Azure Data Factory', 'Azure Synapse', 'ADLS Gen2', 'Python', 'SQL', 'Power BI', 'DAX', 'JSON'],
    github: null,
    demo: null,
    linkNote: 'Client-confidential professional work; public source code is not available.',
    featured: true,
  },
  {
    id: 'ecommerce-platform',
    title: 'Azure Data Platform for Luxury E-commerce',
    category: 'Data Engineering',
    eyebrow: 'Selected professional work',
    summary:
      'A Medallion-based Azure platform integrating operational, forecasting, CRM, and web analytics data into governed reporting layers.',
    problem:
      'The business needed a scalable, multi-source platform for sales, inventory, purchase, finance, commission, marketing, and customer behavior analytics.',
    approach: [
      'Designed Raw, Bronze, Silver, and Gold data layers.',
      'Built ADF pipelines with SCD Type 1 and 2 patterns, schema validation, configurable rules, and idempotent loads.',
      'Integrated MySQL, SharePoint, Salesforce/SOQL, GA4, GTM, and BigQuery data.',
    ],
    outcomes: [
      'Delivered curated data models and business-ready Power BI reports.',
      'Supported cross-functional KPI reporting across commerce and finance use cases.',
    ],
    metrics: ['4 data layers', '6+ source types', 'SCD 1 & 2'],
    technologies: ['Azure Data Factory', 'Microsoft Fabric', 'ADLS Gen2', 'Power BI', 'DAX', 'Power Query', 'BigQuery'],
    github: null,
    demo: null,
    linkNote: 'Client-confidential professional work; public source code is not available.',
    featured: true,
  },
  {
    id: 'cricket-analytics',
    title: 'Cricket World Cup 2022 Data Analytics',
    category: 'Analytics',
    eyebrow: 'Portfolio project',
    summary:
      'An analytics project focused on exploring tournament data and communicating match, team, and player patterns through a structured analytical story.',
    problem:
      'Tournament data contains multiple dimensions that need to be organized into meaningful comparisons and decision-ready observations.',
    approach: [
      'Project title and analytics theme were supplied, but the exact dataset, transformation steps, dashboard platform, and measures were not present in the resume.',
    ],
    outcomes: ['Add verified findings, screenshots, and analytical metrics before publishing.'],
    metrics: [],
    technologies: ['Data Analytics', 'Sports Analytics'],
    github: null,
    demo: null,
    linkNote: 'Add verified repository and dashboard links.',
  },
  {
    id: 'demand-forecasting',
    title: 'Store Item Demand Forecasting',
    category: 'Machine Learning',
    eyebrow: 'Portfolio project',
    summary:
      'A forecasting project aimed at estimating future demand from historical store-item sales while accounting for time-dependent patterns.',
    problem:
      'Demand planning requires a reliable way to translate historical store and item behavior into future estimates.',
    approach: [
      'Project title and forecasting theme were supplied, but the exact models, feature engineering, validation strategy, and evaluation metrics were not present in the resume.',
    ],
    outcomes: ['Add verified model comparison, forecast horizon, and evaluation results before publishing.'],
    metrics: [],
    technologies: ['Demand Forecasting', 'Time Series'],
    github: null,
    demo: null,
    linkNote: 'Add verified repository, notebook, or demo link.',
  },
  {
    id: 'climate-food',
    title: 'Impact of Climate Change on Global Food Supply',
    category: 'Research',
    eyebrow: 'Research-oriented project',
    summary:
      'An analytical study exploring relationships between climate indicators and global food-supply outcomes.',
    problem:
      'Climate and food-supply data span regions, time periods, and indicators, making transparent analysis and careful interpretation essential.',
    approach: [
      'Project theme was supplied, but the exact datasets, statistical methods, geographic scope, and conclusions were not present in the resume.',
    ],
    outcomes: ['Add verified datasets, methodology, visualizations, and conclusions before publishing.'],
    metrics: [],
    technologies: ['Climate Analytics', 'Food Supply Analysis'],
    github: null,
    demo: null,
    linkNote: 'Add verified repository, report, or presentation link.',
  },
  {
    id: 'hand-sign',
    title: '2-Way Hand Sign Talk System',
    category: 'Computer Vision',
    eyebrow: 'Published research project',
    summary:
      'A two-way communication system centered on hand-sign interaction, connected to the 2024 publication in ICT for Intelligent Systems.',
    problem:
      'The project addresses communication support through a system designed around hand signs and two-way interaction.',
    approach: [
      'Publication authorship and venue are verified.',
      'Implementation architecture, model details, datasets, and performance metrics were not included in the supplied resume.',
    ],
    outcomes: ['Published as a chapter in ICT for Intelligent Systems in 2024.'],
    metrics: ['Published 2024'],
    technologies: ['Computer Vision', 'Hand Sign Interaction', 'Research'],
    github: null,
    demo: null,
    paper: 'https://doi.org/10.1007/978-981-97-6678-9_34',
    linkNote: 'Add verified source-code and demo links.',
  },
  {
    id: 'covid-voice',
    title: 'Voice Assistance COVID-19 Questionnaire',
    category: 'Machine Learning',
    eyebrow: 'Portfolio project',
    summary:
      'A voice-guided questionnaire concept for collecting structured COVID-19 screening responses through an accessible conversational flow.',
    problem:
      'Questionnaire completion can be difficult when users need a hands-free or more accessible interaction mode.',
    approach: [
      'Project title and voice-assistance theme were supplied, but supported platforms, speech services, data handling, and evaluation details were not present in the resume.',
    ],
    outcomes: ['Add verified workflow, privacy notes, supported languages, and evaluation details before publishing.'],
    metrics: [],
    technologies: ['Voice Interface', 'Questionnaire Workflow'],
    github: null,
    demo: null,
    linkNote: 'Add verified repository and demo links.',
  },
];

export const architecture = [
  {
    id: 'sources',
    label: 'Data Sources',
    icon: 'database',
    items: ['MySQL', 'Salesforce', 'SharePoint', 'Oracle', 'GA4', 'BigQuery'],
    accent: 'azure',
  },
  {
    id: 'ingestion',
    label: 'Ingestion',
    icon: 'pipeline',
    items: ['Azure Data Factory', 'Config-driven pipelines'],
    accent: 'teal',
  },
  {
    id: 'storage',
    label: 'Storage',
    icon: 'layers',
    items: ['ADLS Gen2', 'Raw / Bronze / Silver / Gold'],
    accent: 'violet',
  },
  {
    id: 'processing',
    label: 'Processing',
    icon: 'settings',
    items: ['Azure Synapse', 'Microsoft Fabric', 'SQL / Python'],
    accent: 'azure',
  },
  {
    id: 'quality',
    label: 'Data Quality',
    icon: 'shieldCheck',
    items: ['Reconciliation', 'Schema validation', 'Intrinsic checks'],
    accent: 'lime',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'chart',
    items: ['Power BI', 'DAX', 'Power Query'],
    accent: 'violet',
  },
  {
    id: 'insights',
    label: 'Business Insights',
    icon: 'sparkles',
    items: ['Trusted KPIs', 'Decision support', 'Data health'],
    accent: 'teal',
  },
];

export const publications = [
  {
    title: 'Designing an Electronic Ticketing System for Local Commuter Transportation',
    venue: 'ICT Analysis and Applications, Springer Nature, Singapore',
    year: '2023',
    type: 'Book chapter',
    description:
      'Research on an electronic ticketing approach for local commuter transportation, published in ICT Analysis and Applications.',
    publication: 'https://doi.org/10.1007/978-981-99-6568-7_52',
    researchGate:
      'https://www.researchgate.net/publication/376744239_Designing_an_Electronic_Ticketing_System_for_Local_Commuter_Transportation',
    pdf: null,
  },
  {
    title: '2-Way Hand Sign Talk System',
    venue: 'ICT for Intelligent Systems',
    year: '2024',
    type: 'Book chapter',
    description:
      'A published research project focused on a two-way hand-sign communication system.',
    publication: 'https://doi.org/10.1007/978-981-97-6678-9_34',
    researchGate: 'https://www.researchgate.net/publication/385407303_2-Way_Hand_Sign_Talk_System',
    pdf: null,
  },
];

export const education = {
  institution: 'Vishwakarma Institute of Technology',
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  period: 'August 2020 - June 2024',
  location: 'Pune, Maharashtra',
  cgpa: '9.21',
  note: 'A technical foundation spanning data, analytics, artificial intelligence, software development, and research.',
};
