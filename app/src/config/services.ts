import {
  Cloud,
  Server,
  Database,
  Settings,
  Network,
  Layers,
  CheckCircle2,
  Clock,
  Globe,
  LucideIcon
} from 'lucide-react';

// ============================================================================
// SERVICE CATEGORIES - Single source of truth for navigation and portfolio
// ============================================================================

export type ServiceCategoryId = 'cloud' | 'infrastructure' | 'data' | 'platforms' | 'network' | 'ai';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  link: string;
  badge?: string;
}

export interface HubItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  spokes: {
    id: string;
    title: string;
    link: string;
    icon: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  clientName?: string;
  industry: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  slug: string;
  featured?: boolean;
  isCollection?: boolean;
  collectionCount?: number;
  relatedServiceIds: string[];
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  navLabel: string;
  description: string;
  icon: LucideIcon;
  color: {
    bg: string;
    text: string;
    border: string;
    light: string;
  };
  services?: ServiceItem[];
  hubs?: HubItem[];
  caseStudies: CaseStudy[];
}

// ============================================================================
// CLOUD SERVICES - Hub & Spoke Structure
// ============================================================================

const cloudHubs: HubItem[] = [
  {
    id: 'cloud-management',
    title: 'Cloud Management',
    description: 'Strategic cloud adoption and migration services for seamless infrastructure transition.',
    spokes: [
      { id: 'cloud-migration', title: 'Cloud Migration', link: '/services/cloud-migration', icon: 'Cloud' },
      { id: 'cloud-provisioning', title: 'Cloud Provisioning', link: '/services/cloud-provisioning', icon: 'Server' },
      { id: 'architecture-patterns', title: 'Architecture Patterns', link: '/services/architecture-patterns', icon: 'LayoutGrid' }
    ]
  },
  {
    id: 'cloud-cost-optimisation',
    title: 'Cloud Cost Optimisation',
    description: 'FinOps practices and tools to reduce cloud spend while maintaining performance.',
    badge: 'POPULAR',
    spokes: [
      { id: 'cost-explorer', title: 'Cost Explorer', link: '/services/cost-explorer', icon: 'PieChart' },
      { id: 'budget-alerts', title: 'Budget Alerts', link: '/services/budget-alerts', icon: 'Bell' },
      { id: 'reserved-instance-planner', title: 'Reserved Instance Planner', link: '/services/reserved-instance-planner', icon: 'Calendar' },
      { id: 'usage-analytics', title: 'Usage Analytics', link: '/services/usage-analytics', icon: 'BarChart3' },
      { id: 'savings-recommendations', title: 'Savings Recommendations', link: '/services/savings-recommendations', icon: 'Lightbulb' }
    ]
  },
  {
    id: 'devops-delivery',
    title: 'DevOps & Delivery',
    description: 'CI/CD pipelines and DevSecOps integration for rapid, secure software delivery.',
    spokes: [
      { id: 'devops-pipelines', title: 'DevOps Pipelines', link: '/services/devops-pipelines', icon: 'GitBranch' },
      { id: 'devsecops-integration', title: 'DevSecOps Integration', link: '/services/devsecops-integration', icon: 'ShieldCheck' },
      { id: 'cicd-templates', title: 'CI/CD Templates', link: '/services/cicd-templates', icon: 'FileCode' }
    ]
  },
  {
    id: 'container-platform',
    title: 'Container Platform',
    description: 'Kubernetes and container orchestration for scalable, portable applications.',
    spokes: [
      { id: 'kubernetes', title: 'Kubernetes', link: '/services/kubernetes', icon: 'Hexagon' },
      { id: 'container-orchestration', title: 'Container Orchestration', link: '/services/container-orchestration', icon: 'Layers' },
      { id: 'cluster-management', title: 'Cluster Management', link: '/services/cluster-management', icon: 'Grid3x3' }
    ]
  },
  {
    id: 'operations-monitoring',
    title: 'Operations & Monitoring',
    description: 'Full-stack observability, logging, and alerting for cloud infrastructure.',
    spokes: [
      { id: 'observability', title: 'Observability', link: '/services/observability', icon: 'Eye' },
      { id: 'logging-tracing', title: 'Logging & Tracing', link: '/services/logging-tracing', icon: 'ScrollText' },
      { id: 'alerting-rules', title: 'Alerting Rules', link: '/services/alerting-rules', icon: 'BellRing' }
    ]
  }
];

const cloudCaseStudies: CaseStudy[] = [
  {
    id: 'mobile-tower-iot',
    title: 'IoT & Analytics Platform for Mobile Towers',
    subtitle: 'End-to-end digital transformation for African telecom infrastructure',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description: 'Comprehensive IoT and cloud platform monitoring mobile towers across Africa. Unified data collection, real-time analytics, and geospatial visualisation.',
    outcomes: [
      'Real-time monitoring of tower operations',
      'Geospatial visualisation for network planning',
      'Automated data collection across regions',
      'Cloud-native scalable architecture'
    ],
    technologies: ['Azure', 'Databricks', 'MQTT', 'Kubernetes', 'AWS', 'IoT'],
    slug: 'iot-data-analytics-mobile-towers',
    featured: true,
    isCollection: true,
    collectionCount: 6,
    relatedServiceIds: ['cloud-migration', 'kubernetes', 'observability']
  },
  {
    id: 'stock-exchange-observability',
    title: 'Advanced Observability for Stock Exchange',
    subtitle: 'Monitoring, audit and reporting system',
    client: 'Major Asian Stock Exchange',
    industry: 'Financial Services',
    description: 'Comprehensive monitoring, audit, and reporting system enhancing operational transparency and performance visibility for critical trading infrastructure.',
    outcomes: [
      'Enhanced operational transparency',
      'Performance visibility for trading systems',
      'Comprehensive audit capabilities'
    ],
    technologies: ['Observability', 'Monitoring', 'IBM'],
    slug: 'stock-exchange-observability',
    relatedServiceIds: ['observability']
  },
  {
    id: 'isp-observability',
    title: 'Observability Infrastructure for ISP',
    subtitle: 'Comprehensive monitoring implementation',
    client: 'Major Internet Service Provider',
    industry: 'Telecommunications',
    description: 'Comprehensive observability infrastructure integrating server, application, and network monitoring for service provider operations.',
    outcomes: [
      'End-to-end infrastructure visibility',
      'Integrated monitoring solution'
    ],
    technologies: ['Observability', 'Zabbix', 'Monitoring'],
    slug: 'isp-observability',
    relatedServiceIds: ['observability']
  }
];

// ============================================================================
// INFRASTRUCTURE SERVICES
// ============================================================================

const infrastructureServices: ServiceItem[] = [
  {
    id: 'hardware-support',
    title: 'Hardware Support',
    description: 'Save 60% vs. vendor support contracts',
    link: '/services/hardware-support'
  },
  {
    id: 'datacenter',
    title: 'Data Center Services',
    description: 'On-premise + cloud that actually works',
    link: '/services/datacenter'
  },
  {
    id: 'sla-support',
    title: '24×7 SLA Support',
    description: 'Guaranteed response times, 24/7 coverage',
    link: '/services/sla-support'
  },
  {
    id: 'business-continuity',
    title: 'Business Continuity',
    description: 'Immutable backups, air-gapped storage',
    link: '/services/business-continuity'
  }
];

const infrastructureCaseStudies: CaseStudy[] = [
  {
    id: 'asian-telecom-operations',
    title: 'Integrated Operations Platform',
    subtitle: 'Service desk, incident management, and network automation',
    client: 'Largest Telecom Operator in Asia',
    industry: 'Telecommunications',
    description: 'Multi-layered operational support handling millions of daily events. ServiceNow implementation with automated incident management and cross-domain network operations.',
    outcomes: [
      'Service desk for change and incident management',
      'Automated incident response integration',
      'Cross-domain network alarm correlation',
      '24/7 operational event processing'
    ],
    technologies: ['ServiceNow', 'Netcool', 'IBM', 'Automation'],
    slug: 'integrated-operations-platform',
    isCollection: true,
    collectionCount: 4,
    relatedServiceIds: ['sla-support', 'hardware-support']
  },
  {
    id: 'managed-services-uk',
    title: 'Managed Services Outsourcing',
    subtitle: 'Operational support team augmentation',
    client: 'Leading UK System Integrator',
    industry: 'Technology Services',
    description: 'Provided top-tier managed services support team significantly enhancing operational capabilities for enterprise clients.',
    outcomes: [
      'Enhanced operational capabilities',
      'Enterprise-grade support delivery'
    ],
    technologies: ['Managed Services', 'ITIL'],
    slug: 'managed-services-outsourcing',
    relatedServiceIds: ['sla-support']
  },
  {
    id: 'hardware-support-textile',
    title: 'Hardware Server Support',
    subtitle: 'Critical infrastructure maintenance',
    client: 'Major Textile Manufacturer',
    industry: 'Manufacturing',
    description: 'Vital hardware support services for critical business applications on Lenovo Servers, including systems without vendor support coverage.',
    outcomes: [
      'Maintained critical business applications',
      'Support for legacy server infrastructure'
    ],
    technologies: ['Lenovo', 'Server Support', 'Hardware'],
    slug: 'hardware-server-support',
    relatedServiceIds: ['hardware-support']
  }
];

// ============================================================================
// DATA & ANALYTICS SERVICES
// ============================================================================

const dataServices: ServiceItem[] = [
  {
    id: 'iot-analytics',
    title: 'IoT Data Analytics',
    description: 'Real-time telco data using Databricks, Azure, Data Lakes',
    link: '/services/iot-analytics'
  },
  {
    id: 'data-lakes',
    title: 'Data Lakes & Warehousing',
    description: 'Cloud-based data warehousing and lakehouse architecture',
    link: '/services/data-lakes'
  },
  {
    id: 'geospatial',
    title: 'Geospatial Analytics',
    description: 'Real-time mobile tower status with mapping',
    link: '/services/geospatial'
  },
  {
    id: 'data-federation',
    title: 'Data Federation',
    description: 'Cross-functional central portals for secure data access',
    link: '/services/data-federation'
  },
  {
    id: 'database-optimization',
    title: 'Database Optimization',
    description: 'DB2 PureScale, SQL Server, Oracle performance tuning',
    link: '/services/database-optimization',
    badge: 'POPULAR'
  }
];

const dataCaseStudies: CaseStudy[] = [
  {
    id: 'db2-purescale',
    title: 'ITSM Database Performance Optimisation',
    subtitle: 'DB2 PureScale implementation',
    client: 'Enterprise Client',
    industry: 'Technology',
    description: 'Enhanced database performance and reliability through IBM DB2 PureScale upgrade for ITSM workloads.',
    outcomes: [
      'Enhanced database performance',
      'Improved system reliability'
    ],
    technologies: ['DB2', 'PureScale', 'IBM'],
    slug: 'db2-purescale-optimisation',
    relatedServiceIds: ['database-optimization']
  },
  {
    id: 'data-federation-portal',
    title: 'Unified Data Federation Portal',
    subtitle: 'Cross-functional data access platform',
    client: 'Telecommunications Operator',
    industry: 'Telecommunications',
    description: 'Cross-functional central portal for secure data access and analytics across various telecommunication domains.',
    outcomes: [
      'Secure cross-domain data access',
      'Unified analytics platform'
    ],
    technologies: ['Data Federation', 'Analytics'],
    slug: 'data-federation-portal',
    relatedServiceIds: ['data-federation', 'data-lakes']
  }
];

// ============================================================================
// PLATFORMS SERVICES
// ============================================================================

const platformsServices: ServiceItem[] = [
  {
    id: 'servicenow',
    title: 'ServiceNow',
    description: 'Go live in 8 weeks, not 8 months',
    link: '/services/servicenow',
    badge: 'POPULAR'
  },
  {
    id: 'maximo',
    title: 'IBM Maximo',
    description: 'Asset management that actually tracks everything',
    link: '/services/maximo'
  },
  {
    id: 'jira',
    title: 'Jira Service Management',
    description: 'Agile ITSM for modern teams',
    link: '/services/jira-service-management'
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    description: 'Bespoke applications, integrations, and portals built for your business',
    link: '/services/custom-development'
  },
  {
    id: 'service-desk',
    title: 'Service Desk',
    description: 'Digitised ITSM processes with automation',
    link: '/services/service-desk',
    badge: 'POPULAR'
  }
];

const platformsCaseStudies: CaseStudy[] = [
  {
    id: 'maximo-asset-management',
    title: 'Asset Management for Telecom Infrastructure',
    subtitle: 'IBM Maximo implementation',
    client: 'Mobile Telecommunication Provider',
    industry: 'Telecommunications',
    description: 'Streamlined and standardised inventory and asset management using IBM Maximo for telecommunications infrastructure.',
    outcomes: [
      'Standardised asset management',
      'Improved inventory visibility'
    ],
    technologies: ['Maximo', 'IBM', 'Asset Management'],
    slug: 'maximo-asset-management',
    relatedServiceIds: ['maximo']
  },
  {
    id: 'property-management-platform',
    title: 'Property Management Platform',
    subtitle: 'Communication and service brokerage application',
    client: 'Real Estate Technology Company',
    industry: 'Real Estate',
    description: 'Sophisticated cross-platform application facilitating seamless communication and service brokerage between landlords, tenants, and property managers.',
    outcomes: [
      'Streamlined property management workflows',
      'Unified communication platform'
    ],
    technologies: ['Angular', 'Application Development'],
    slug: 'property-management-platform',
    relatedServiceIds: ['custom-development']
  },
  {
    id: 'servicenow-incident-automation',
    title: 'Automated Incident Management',
    subtitle: 'ServiceNow microservice integration',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Developed an automated incident management microservice to integrate network alarms with ServiceNow, automating the management of incidents.',
    outcomes: [
      'Automated incident creation from network alarms',
      'Reduced manual ticket handling',
      'Faster incident response times'
    ],
    technologies: ['ServiceNow', 'Integration', 'Automation'],
    slug: 'servicenow-incident-automation',
    relatedServiceIds: ['servicenow', 'service-desk']
  }
];

// ============================================================================
// NETWORK OPERATIONS SERVICES
// ============================================================================

const networkServices: ServiceItem[] = [
  {
    id: 'cross-domain-automation',
    title: 'Cross-Domain Automation',
    description: 'Automate correlation of alarms across telecom domains',
    link: '/services/cross-domain-automation'
  },
  {
    id: 'network-monitoring',
    title: 'Network Monitoring',
    description: 'Real-time visibility and performance optimization',
    link: '/services/network-monitoring'
  }
];

const networkCaseStudies: CaseStudy[] = [
  {
    id: 'network-operations-automation',
    title: 'Cross-Domain Network Automation',
    subtitle: 'Automated alarm correlation across telecom domains',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Enhanced network efficiency by automating the correlation of alarms across different telecommunication domains.',
    outcomes: [
      'Reduced manual alarm processing',
      'Faster incident identification',
      'Improved network reliability'
    ],
    technologies: ['Automation', 'Netcool', 'Network Operations'],
    slug: 'network-operations-automation',
    relatedServiceIds: ['cross-domain-automation', 'network-monitoring']
  }
];

// ============================================================================
// AI SERVICES
// ============================================================================

const aiServices: ServiceItem[] = [
  {
    id: 'mlops',
    title: 'MLOps',
    description: 'Production-ready machine learning pipelines with model governance',
    link: '/services/mlops'
  },
  {
    id: 'ai-platform',
    title: 'AI Platform Engineering',
    description: 'End-to-end AI architecture, data pipelines and containerized inferencing',
    link: '/services/ai-platform'
  },
  {
    id: 'aiops',
    title: 'AIOps',
    description: 'Automated operations using AI for predictive maintenance and anomaly detection',
    link: '/services/aiops'
  }
];

const aiCaseStudies: CaseStudy[] = [
  {
    id: 'aiops-telecom-anomaly-detection',
    title: 'AIOps-Driven Telecom Anomaly Detection',
    subtitle: 'Reducing incident noise and improving MTTR with AI insights',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Deployed AI/ML models on operational logs to auto-detect anomalies and reduce human-intensive root cause analysis.',
    outcomes: [
      '88% reduction in alert noise',
      'Mean time to resolve reduced by 65%',
      'Predictive alerts for critical network KPIs'
    ],
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'Prometheus'],
    slug: 'aiops-telecom-anomaly-detection',
    relatedServiceIds: ['aiops', 'mlops', 'observability']
  }
];

// ============================================================================
// MAIN EXPORT - All service categories
// ============================================================================

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cloud',
    label: 'Cloud',
    navLabel: 'Cloud',
    description: 'Modern infrastructure and operations for the cloud-native enterprise',
    icon: Cloud,
    color: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-200',
      light: 'bg-blue-50'
    },
    hubs: cloudHubs,
    caseStudies: cloudCaseStudies
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    navLabel: 'Infrastructure',
    description: 'Hardware support, data center services, and 24×7 SLA support',
    icon: Server,
    color: {
      bg: 'bg-slate-100',
      text: 'text-slate-700',
      border: 'border-slate-200',
      light: 'bg-slate-50'
    },
    services: infrastructureServices,
    caseStudies: infrastructureCaseStudies
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    navLabel: 'Data & Analytics',
    description: 'Transform data into actionable insights and intelligent operations',
    icon: Database,
    color: {
      bg: 'bg-cyan-100',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      light: 'bg-cyan-50'
    },
    services: dataServices,
    caseStudies: dataCaseStudies
  },
  {
    id: 'ai',
    label: 'AI',
    navLabel: 'AI',
    description: 'AI-first services including MLOps, AIOps and platform engineering',
    icon: Layers,
    color: {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      border: 'border-purple-200',
      light: 'bg-purple-50'
    },
    services: aiServices,
    caseStudies: aiCaseStudies
  },
  {
    id: 'platforms',
    label: 'Platforms',
    navLabel: 'Platforms',
    description: 'ServiceNow, IBM Maximo, and custom platform implementations',
    icon: Settings,
    color: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-700',
      border: 'border-indigo-200',
      light: 'bg-indigo-50'
    },
    services: platformsServices,
    caseStudies: platformsCaseStudies
  },
  {
    id: 'network',
    label: 'Network Operations',
    navLabel: 'Network Operations',
    description: 'Cross-domain automation and network monitoring solutions',
    icon: Network,
    color: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      light: 'bg-emerald-50'
    },
    services: networkServices,
    caseStudies: networkCaseStudies
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getAllCaseStudies = (): CaseStudy[] => {
  return serviceCategories.flatMap(cat => 
    cat.caseStudies.map(study => ({
      ...study,
      categoryIds: [cat.id] as ServiceCategoryId[]
    }))
  );
};

export const getCaseStudiesByCategory = (categoryId: ServiceCategoryId): CaseStudy[] => {
  const category = serviceCategories.find(cat => cat.id === categoryId);
  return category?.caseStudies || [];
};

export const getServicesByCategory = (categoryId: ServiceCategoryId): ServiceItem[] => {
  const category = serviceCategories.find(cat => cat.id === categoryId);
  return category?.services || [];
};

export const getCategoryById = (categoryId: ServiceCategoryId): ServiceCategory | undefined => {
  return serviceCategories.find(cat => cat.id === categoryId);
};

export const getFeaturedCaseStudy = (): CaseStudy | undefined => {
  for (const category of serviceCategories) {
    const featured = category.caseStudies.find(study => study.featured);
    if (featured) return featured;
  }
  return undefined;
};

export const getAllServices = (): (ServiceItem & { categoryId: ServiceCategoryId })[] => {
  return serviceCategories.flatMap(cat => 
    (cat.services || []).map(service => ({
      ...service,
      categoryId: cat.id
    }))
  );
};

export const portfolioFilters = [
  { id: 'all', label: 'All Projects', icon: Layers },
  ...serviceCategories.map(cat => ({
    id: cat.id,
    label: cat.label,
    icon: cat.icon
  }))
];

export const portfolioStats = [
  { value: '50+', label: 'Platforms Deployed', icon: CheckCircle2 },
  { value: '14+', label: 'Years Experience', icon: Clock },
  { value: '3', label: 'Continents', icon: Globe }
];
