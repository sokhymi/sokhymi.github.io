/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://sokhymi.github.io',
  meta: {
    title: 'Bilegjargal Bold (Emil) | GIS Developer',
    description:
      'GIS Developer with experience in data analytics and data engineering',
  },
  hero: {
    name: 'Bilegjargal (Emil)',
    role: 'GIS Developer | Data Engineer',
    tagline: '...with 4 years of experience',
    contact: 'Open to collaborations and roles that utilize geospatial data to create innovative solutions, in academia and industry',
    avatarSrc: '/portrait.jpg',
    avatarAlt: 'Bilegjargal Bold',
  },
  about: {
    paragraphs: [
      "Currently an Erasmus Mundus scholar funded by the EU, studying Geoinformatics and Data Science at the University of Salzburg and the University of South Brittany. Proficient English and German speaker, with Spanish on the way!",
      '',
      {
        heading: 'Focal areas',
        bullets: [
          'Flexible and quick to adapt to new programming technologies and environments',
          'Development of data pipelines that ensure data quality and consistency with business logic',
          'Experience with RESTful API programming patterns to easily adapt to requirements',
          'Strong interest in IoT data engineering and near real-time analytics, with Kafka and Spark',
        ],
      },
      {
        heading: 'Tech stack',
        techItems: ['Python', 'Bash', 'SQL', 'PowerShell', 'HTML', 'CSS', 'JavaScript', 'PostGIS', 'PostgreSQL', 'Google Earth Engine', 'Azure', 'GCP',],
      }
    ],
  },
  experiences: [
    {
      period: '2023-2025',
      title: 'Reporting & Analytics Developer',
      company: 'Rio Tinto',
      summary:
        'BI data engineering, as well as platform optimization and monitoring, using various APIs, including Power BI and Apache Atlas.',
      highlights: [
        'Designed and shipped Azure Data Factory pipelines transforming data from SAP BW4/HANA to Azure SQL Databases for optimized business reporting',
        'Developed Power BI reports based on OLAP environments spanning various enterprise areas: IT, finances, asset management and safety',
        'Designed and developed a full set of PowerShell programs to migrate Power BI environments between organizations - the first in Rio Tinto',
      ],
      tech: ['SQL', 'Azure Data Factory', 'SAP BW4/HANA', 'PowerShell', 'Power BI'],
    },
    {
      period: '2022-2023',
      title: 'Data Analyst',
      company: 'GOBI Cashmere',
      summary:
        'Built from the ground-up a Power BI- and PostgreSQL-based HR reporting environment.',
      highlights: [
        'Development of Python programs to create snapshots of HR data from an Oracle database',
        'Configuration and administration of a PostgreSQL data warehouse to house above snapshots as historical data',
        'Kimball dimensional modeling on HR data for efficient Power BI reporting across the organization, following best practices',
      ],
      tech: ['PostgreSQL', 'Oracle', 'Python', 'Power BI', 'Power Automate'],
    },
    {
      period: '2021-2022',
      title: 'GIS Specialist',
      company: 'MonMap (Esri Mongolia)',
      summary:
        'Development of various ArcGIS-based geospatial solutions.',
      highlights: [
        'Development of maps, Python, JavaScript scripts to create monitoring dashboards on ArcGIS Online',
        'Python and Bash scripts to automate collection of satellite datasets',
        'Working with surveying products, including Wingtra mapping drones and Trimble GPS receivers to research feasibility for various geospatial projects',
      ],
      tech: ['ArcGIS', 'Python', 'JavaScript', 'ArcPy', 'ArcGIS API for Python'],
    },
  ],
  featuredProjects: [
    {
      title: 'Enterprise data engineering at Rio Tinto',
      period: '2024-2025',
      summary: 'Azure-based enterprise data transformation pipelines',
      solution: 'Utilizing Azure Data Factory, its CI/CD integration and Logic Apps to develop a globally accessible Azure SQL Database warehouse for end-user reporting',
      impact: 'Reduced load on operational SAP databases and an increase in organizational dashboard performance thanks to better interoperability between Power BI and Azure SQL Databases',
      image: 'adf_process.jpg',
      imageAlt: 'Azure Data Factory process at Rio Tinto',
      techCategories: [
        {
          category: 'Databases',
          items: ['Azure SQL Database', 'SAP BW4/HANA', 'SAP Business Warehouse'],
        },
        {
          category: 'Tools',
          items: ['Azure Data Factory', 'Azure Logic Apps', 'Power BI'],
        },
      ],
    },
    {
      title: 'Power BI cross-organization migration',
      period: '2023',
      summary: "Cross-tenant Power BI asset migration",
      solution: "Development of a set of PowerShell programs to migrate all Power BI assets of a subsidiary organization to Rio Tinto's",
      impact: "All dashboard & dataset assets of subsidiary organization successfully integrated into Rio Tinto's without downtime",
      image: '',
      imageAlt: '',
      techCategories: [
        {
          category: 'Assets migrated',
          items: ['Datasets', 'Dashboards', 'Users', 'Server connections', 'Dataset refresh schedules'],
        },
        {
          category: 'Tools',
          items: ['PowerShell', 'Power BI API'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects in industry',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Azure data engineering', role: 'Data Engineer', techStack: 'Azure Data Factory, Logic Apps, SQL' },
    { date: '2024', project: 'YOLOv10-based tree detection', role: 'Researcher', techStack: 'YOLOv10 (Python)' },
    { date: '2023', project: 'Power BI cross-tenant migration', role: 'BI Developer', techStack: 'PowerShell, Power BI' },
    { date: '2022', project: 'HR reporting environment at Gobi', role: 'BI Developer', techStack: 'Python, PostgreSQL, Oracle, Power BI' },
    { date: '2022', project: 'ArcGIS dashboard automation', role: 'GIS Developer', techStack: 'ArcPy, ArcGIS API for Python' },
  ],
  contact: {
    email: 'bilegjargal0328@gmail.com',
    github: 'https://github.com/sokhymi/',
    linkedin: 'https://www.linkedin.com/in/bilegjargalbold',
  },
  uniProjectArchivePage: {
    title: "Master in Copernicus Digital Earth projects",
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work during studies',
  },
  uniProjectArchive: [
    { type: 'Simulation', project: 'Simulation of sheep behavior based on the Boids algorithm', link: '', techStack: 'HTML, JavaScript, three.js' },
    { type: 'Workshop', project: 'Artificial Intelligence for Earth Observation (AI4EO) conference', link: 'uniprojects/ai4eo', techStack: 'Python' },
    { type: 'Leaflet visualization', project: 'Leaflet map on coastal eutrophication in Europe', link: '', techStack: 'HTML, JavaScript, leaflet.js, Mapbox' },
    { type: 'SAR analysis', project: 'Terrain displacement metrics using SAR processing methods', link: '', techStack: 'ESA SNAP, Sen2Cor' },
    { type: 'Humanitarian case study', project: 'Mapping metrics concerning conflict and food insecurity', link: '', techStack: 'Python' },
  ],
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
