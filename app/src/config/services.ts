import {
  Cloud,
  Server,
  Database,
  Settings,
  Network,
  Layers,
  Infinity as InfinityIcon,
  CheckCircle2,
  Clock,
  Globe,
  LucideIcon
} from 'lucide-react';

// ============================================================================
// SERVICE CATEGORIES - Single source of truth for navigation and portfolio
// ============================================================================

export type ServiceCategoryId = 'cloud' | 'devops-cloud' | 'infrastructure' | 'data' | 'platforms' | 'network' | 'ai';

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
  image?: string;
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
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    description: 'DevOps, FinOps, AIOps, MLOps, LLMOps, and Platform Engineering for the AI era.',
    badge: 'NEW',
    spokes: [
      { id: 'container-orchestration', title: 'Container Orchestration', link: '/services/devops-cloud#container-orchestration', icon: 'Hexagon' },
      { id: 'cicd', title: 'AI-Enhanced CI/CD', link: '/services/devops-cloud#cicd', icon: 'Workflow' },
      { id: 'aiops', title: 'AIOps & Observability', link: '/services/devops-cloud#aiops', icon: 'Eye' },
      { id: 'platform-engineering', title: 'Platform Engineering', link: '/services/devops-cloud#platform-engineering', icon: 'LayoutGrid' },
    ]
  },
  {
    id: 'cloud-cost-optimisation',
    title: 'Cloud Cost Optimisation',
    description: 'Reduce spend by 30–40% with FinOps practices and intelligent resource management.',
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
    id: 'cloud-strategy',
    title: 'Cloud Strategy',
    description: 'Multi-cloud roadmap & governance.',
    spokes: [
      { id: 'cloud-assessment', title: 'Cloud Assessment', link: '/services/cloud-assessment', icon: 'ClipboardCheck' },
      { id: 'roadmap-planning', title: 'Roadmap Planning', link: '/services/roadmap-planning', icon: 'Map' },
      { id: 'governance-framework', title: 'Governance Framework', link: '/services/governance-framework', icon: 'Shield' }
    ]
  },
  {
    id: 'cloud-management',
    title: 'Cloud Management',
    description: 'Operations & monitoring.',
    spokes: [
      { id: 'cloud-migration', title: 'Cloud Migration', link: '/services/cloud-migration', icon: 'Cloud' },
      { id: 'cloud-provisioning', title: 'Cloud Provisioning', link: '/services/cloud-provisioning', icon: 'Server' },
      { id: 'architecture-patterns', title: 'Architecture Patterns', link: '/services/architecture-patterns', icon: 'LayoutGrid' }
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
    id: 'financial-market-observability',
    title: 'Advanced Observability for Stock Exchange',
    subtitle: 'Trading infrastructure monitoring with 99.99% uptime SLA',
    client: 'Major Asian Stock Exchange',
    industry: 'Financial Services',
    description: 'Implemented comprehensive observability platform covering trading systems, market surveillance, and infrastructure monitoring. Maintained **99.99%** trading uptime SLA with full regulatory compliance and immutable audit trail.',
    outcomes: [
      '**99.99%** trading system uptime SLA maintained continuously',
      '**100%** regulatory compliance with audit requirements',
      '**30-day** immutable audit trail for all transactions',
      'Market surveillance latency: **<100ms** on alert generation',
      'Zero unplanned downtime during trading hours',
      'Sub-second detection of trading system anomalies'
    ],
    technologies: ['Observability Platform', 'Monitoring', 'IBM Netcool', 'Encryption', 'Audit Logging'],
    slug: 'financial-market-observability',
    featured: false,
    relatedServiceIds: ['observability', 'alerting-rules', 'sla-support']
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
  },
  {
    id: 'k8s-telco-scalability',
    title: 'Kubernetes-Driven Scalability for Telecom Operations',
    subtitle: 'Multi-region enterprise infrastructure for rapid scaling',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description: 'Architected multi-region Kubernetes clusters on AWS to eliminate provisioning bottlenecks for mobile tower management. Reduced regional expansion cycles from weeks to hours while maintaining **99.99%** availability SLA across production infrastructure.',
    outcomes: [
      '**3x** throughput increase on identical infrastructure investment',
      'Infrastructure provisioning time reduced from **5 weeks** to **<48 hours**',
      '**50%** infrastructure cost reduction through right-sizing and workload optimisation',
      'Automatic failover capability achieving **99.99%** availability SLA'
    ],
    technologies: ['Amazon EKS', 'Docker', 'ArgoCD', 'Helm', 'Prometheus', 'Grafana'],
    slug: 'k8s-telco-scalability',
    featured: false,
    isCollection: true,
    collectionCount: 2,
    relatedServiceIds: ['kubernetes', 'container-orchestration', 'cluster-management']
  },
  {
    id: 'cloud-iot-provisioning',
    title: 'Infrastructure-as-Code for IoT Cloud Platforms',
    subtitle: 'Serverless infrastructure patterns for distributed data collection',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description: 'Eliminated infrastructure provisioning bottleneck using Terraform and CloudFormation for IoT data collection infrastructure. Enabled regional expansion in **<48 hours** vs. previous **5-week** hardware procurement cycles.',
    outcomes: [
      'Provisioning automation reduced manual work by **95%**',
      'New region deployments from **5 weeks** to **<48 hours**',
      'Cost predictability improved: **$0** surprise overages through billing alerts',
      'Disaster recovery RTO reduced to **30 minutes**'
    ],
    technologies: ['Terraform', 'AWS CloudFormation', 'Infrastructure-as-Code', 'S3', 'CloudWatch'],
    slug: 'cloud-iot-provisioning',
    featured: false,
    relatedServiceIds: ['cloud-provisioning', 'architecture-patterns', 'cloud-migration']
  },
  {
    id: 'k8s-devops-pipeline',
    title: 'Kubernetes-Native CI/CD Pipeline & DevSecOps',
    subtitle: 'Automated deployment with integrated security scanning',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Built full-stack CI/CD pipeline integrating GitOps, automated testing, and security scanning. Increased deployment frequency **10x** while reducing security incidents by **92%** through continuous compliance validation.',
    outcomes: [
      'Deployment frequency increased from monthly to **daily**',
      'Security vulnerability detection time reduced by **92%**',
      'Code coverage increased to **99%** automated testing',
      'Mean time to deployment reduced to **<15 minutes**'
    ],
    technologies: ['GitHub Actions', 'ArgoCD', 'SonarQube', 'Container Registry', 'Kubernetes'],
    slug: 'k8s-devops-pipeline',
    featured: false,
    relatedServiceIds: ['devops-pipelines', 'devsecops-integration', 'cicd-templates']
  },
  {
    id: 'k8s-cluster-operations',
    title: 'Multi-Cluster Kubernetes Operations & Day-2 Management',
    subtitle: 'Enterprise-grade cluster lifecycle and performance optimisation',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Deployed multi-cluster control plane managing **50+** microservices across production. Established automated scaling policies and observability, reducing unplanned downtime by **87%** through proactive resource management.',
    outcomes: [
      '**20,000+** pod deployments per month with **99.95%** success rate',
      'Pod propagation latency reduced to **<500ms**',
      'Unplanned downtime reduced by **87%**',
      'Cluster utilisation optimised: **78%** average (vs. **42%** industry baseline)'
    ],
    technologies: ['Kubernetes', 'Karpenter', 'Prometheus', 'Grafana', 'Sealed Secrets'],
    slug: 'k8s-cluster-operations',
    featured: false,
    isCollection: true,
    collectionCount: 2,
    relatedServiceIds: ['kubernetes', 'cluster-management', 'observability']
  },
  {
    id: 'iot-data-collection-infrastructure',
    title: 'Edge-Resilient IoT Data Collection Infrastructure',
    subtitle: 'Distributed MQTT collectors with local buffering & failover',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description: 'Deployed edge-based MQTT collectors with local buffering to eliminate centralized collection bottleneck. Achieved **99.95%** data delivery during regional outages through resilient architecture.',
    outcomes: [
      'Data delivery reliability improved to **99.95%**',
      'Regional outage resilience: no data loss during infrastructure failures',
      'Latency reduced from **120ms** to **<25ms** average',
      'Collection scalability: **2M+ events/minute** sustained throughput'
    ],
    technologies: ['MQTT Edge', 'Kubernetes', 'Message Queues', 'Data Normalization', 'Prometheus'],
    slug: 'iot-collection-infrastructure',
    featured: false,
    relatedServiceIds: ['cloud-provisioning', 'iot-analytics', 'observability']
  },
  {
    id: 'stream-event-processing',
    title: 'Real-Time Event Stream Processing & Enrichment',
    subtitle: 'Intelligent event correlation reducing alert noise by 60%',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Implemented stream processing with event enrichment and intelligent correlation, reducing operational noise by **60%** and improving alert actionability from **8%** to **94%**.',
    outcomes: [
      'Alert noise reduced by **60%** through correlation',
      'Alert actionability improved from **8%** to **94%**',
      '**<5 second** latency on event-to-alert pipeline',
      'Automated remediation initiated for **78%** of correlated events'
    ],
    technologies: ['Kafka', 'Spark Streaming', 'Complex Event Processing', 'Apache Flink'],
    slug: 'stream-event-processing',
    featured: false,
    relatedServiceIds: ['observability', 'alerting-rules', 'logging-tracing']
  },
  {
    id: 'event-correlation-rca',
    title: 'Event Correlation & Root Cause Analysis Engine',
    subtitle: 'Dependency mapping reducing MTTR by 70%',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Built service dependency mapping with automatic event correlation engine. Reduced Mean-Time-To-Recovery from **3 hours** to **50 minutes** through **94%** accurate root cause identification.',
    outcomes: [
      'MTTR reduced from **3 hours** to **50 minutes** (**70%** improvement)',
      'Root cause identification accuracy: **94%**',
      'Unplanned downtime prevented monthly: **12+ incidents**',
      'On-call engineer response time: **<10 minutes** average'
    ],
    technologies: ['Observability Platform', 'Netcool', 'Dependency Mapping', 'Machine Learning'],
    slug: 'event-correlation-rca',
    featured: false,
    relatedServiceIds: ['observability', 'alerting-rules', 'logging-tracing']
  },
  {
    id: 'financial-markets-observability',
    title: 'Advanced Observability for Financial Markets',
    subtitle: 'Trading infrastructure monitoring with 30-day audit trail',
    client: 'Major Asian Stock Exchange',
    industry: 'Financial Services',
    description: 'Implemented comprehensive observability platform covering trading systems, market surveillance, and infrastructure monitoring. Maintained **99.99%** trading uptime SLA with full regulatory compliance and immutable audit trail.',
    outcomes: [
      '**99.99%** trading system uptime SLA maintained continuously',
      '**100%** regulatory compliance with audit requirements',
      '**30-day** immutable audit trail for all transactions',
      'Market surveillance latency: **<100ms** on alert generation'
    ],
    technologies: ['Observability Platform', 'Monitoring', 'IBM', 'Encryption', 'Audit Logging'],
    slug: 'financial-markets-observability',
    featured: false,
    relatedServiceIds: ['observability', 'alerting-rules', 'sla-support']
  }
];

// ============================================================================
// DEVOPS & CLOUD CASE STUDIES
// ============================================================================

const devopsCloudCaseStudies: CaseStudy[] = [
  {
    id: 'devops-iot-data-analytics-mobile-towers',
    title: 'IoT & Data Analytics for Mobile Towers',
    subtitle: 'Cloud-based IoT and streaming data analytics across Africa',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description:
      'Perception IT implemented a sophisticated cloud-based IoT and streaming data analytics solution for monitoring mobile tower operations across Africa.',
    image: '/Sections/projects/devops and cloud/IoT & Data Analytics for Mobile Towers 600×700.jpg',
    outcomes: [
      'Real-time monitoring of mobile tower operations',
      'Cloud-native, scalable architecture',
      'Streaming data analytics for operational insights',
      'Cross-Africa network visibility'
    ],
    technologies: ['Azure', 'Databricks', 'MQTT', 'Kubernetes', 'IoT', 'Data Lakes'],
    slug: 'iot-data-analytics-mobile-towers',
    featured: true,
    relatedServiceIds: ['container-orchestration', 'cloud-migration', 'aiops']
  },
  {
    id: 'devops-property-management-communication-broker',
    title: 'Property Management Communication Broker',
    subtitle: 'Cross-platform communication and service brokerage application',
    client: 'Real Estate Technology Company',
    industry: 'Real Estate',
    description:
      'Sophisticated cross-platform application facilitating seamless communication and service brokerage between landlords, tenants, and property managers.',
    outcomes: [
      'Unified communication platform for property stakeholders',
      'Streamlined property management workflows',
      'Improved tenant and landlord satisfaction',
      'Complete request audit trail'
    ],
    technologies: ['Angular', 'Custom Application Development', 'Real Estate APIs', 'Cloud'],
    slug: 'property-management-communication-broker',
    relatedServiceIds: ['cicd', 'devsecops', 'platform-engineering']
  },
  {
    id: 'devops-cloud-infrastructure-iot-data-visualisation',
    title: 'Cloud Infrastructure for IoT Data Collection and Visualisation',
    subtitle: 'Low-management AWS infrastructure for IoT software',
    client: 'IoT Software Provider',
    industry: 'Technology',
    description:
      'Deployed a low-management AWS infrastructure solution for software providing IoT data collection and visualisation.',
    outcomes: [
      'Low-management AWS infrastructure',
      'Scalable IoT data collection pipeline',
      'Real-time data visualisation dashboards',
      'Automated customer provisioning'
    ],
    technologies: ['AWS', 'IoT', 'Data Visualisation', 'Serverless', 'S3'],
    slug: 'cloud-infrastructure-iot-data-visualisation',
    relatedServiceIds: ['cloud-provisioning', 'container-orchestration', 'aiops']
  },
  {
    id: 'devops-unified-data-federation-portal',
    title: 'Unified Data Federation Portal',
    subtitle: 'Cross-functional central portal for secure telecom data access',
    client: 'Telecommunications Operator',
    industry: 'Telecommunications',
    description:
      'Provided a cross-functional central portal for data federation to provide secure data access and analytics across various telecommunication domains.',
    outcomes: [
      'Secure cross-domain data access',
      'Unified analytics platform',
      'Reduced data silos across telecom domains',
      'Centralised data governance'
    ],
    technologies: ['Data Federation', 'Analytics', 'API Gateway', 'Cloud'],
    slug: 'unified-data-federation-portal',
    relatedServiceIds: ['platform-engineering', 'cloud-provisioning', 'mlops']
  },
  {
    id: 'devops-automated-incident-management',
    title: 'Automated Incident Management',
    subtitle: 'ServiceNow microservice for network alarm integration',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description:
      'Developed an automated incident management microservice to integrate network alarms with ServiceNow, automating the management of incidents.',
    outcomes: [
      'Automated incident creation from network alarms',
      'Reduced manual ticket handling',
      'Faster incident response times',
      'Context-rich tickets for faster triage'
    ],
    technologies: ['ServiceNow', 'REST APIs', 'Workflow Automation', 'Cloud'],
    slug: 'automated-incident-management',
    relatedServiceIds: ['cicd', 'aiops', 'devsecops']
  },
  {
    id: 'devops-streaming-iot-data-analytics',
    title: 'Streaming IoT and Data Analytics',
    subtitle: 'Real-time telco analytics using Databricks, Azure and Data Lakes',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description:
      'Engineered a streaming analytics solution for telco data using Databricks, Azure, and Data Lakes, providing real-time analytics and event analysis.',
    outcomes: [
      'Real-time streaming analytics pipeline',
      'Event-driven operational insights',
      'Scalable data lake architecture',
      'Proactive network and customer care'
    ],
    technologies: ['Databricks', 'Azure', 'Data Lakes', 'Kafka', 'IoT'],
    slug: 'streaming-iot-data-analytics',
    relatedServiceIds: ['mlops', 'aiops', 'cloud-provisioning']
  },
  {
    id: 'devops-kubernetes-deployment-telco-operations',
    title: 'Kubernetes Deployment for Telco Operations',
    subtitle: 'Kubernetes on AWS for mobile tower management',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description:
      'Architecture and deployment of Kubernetes on AWS to streamline development and production of mobile tower management.',
    outcomes: [
      'Containerised microservices platform deployed',
      'Streamlined development and production workflows',
      'Elastic scaling for tower management workloads',
      'Consistent environments from dev to prod'
    ],
    technologies: ['Kubernetes', 'AWS', 'DevOps', 'Containers'],
    slug: 'kubernetes-deployment-telco-operations',
    relatedServiceIds: ['container-orchestration', 'cicd', 'platform-engineering']
  },
  {
    id: 'devops-iot-data-collection-mobile-towers',
    title: 'IoT Data Collection for Mobile Towers',
    subtitle: 'MQTT-based IoT solution for centralised tower analytics across Africa',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description:
      'Development of an MQTT-based IoT solution for centralised data analytics of mobile towers across Africa.',
    outcomes: [
      'MQTT-based IoT data collection at scale',
      'Centralised analytics platform',
      'Africa-wide tower coverage',
      'Resilient edge-to-cloud messaging'
    ],
    technologies: ['MQTT', 'IoT', 'AWS', 'Analytics', 'Kubernetes'],
    slug: 'iot-data-collection-mobile-towers',
    relatedServiceIds: ['container-orchestration', 'aiops', 'cloud-provisioning']
  },
  {
    id: 'devops-farmdar-agritech-solution-enhancement',
    title: 'Empowering Agriculture with Advanced Data Architectures',
    subtitle: 'Modern data design and application frameworks for Farmdar',
    client: 'Farmdar',
    industry: 'AgriTech',
    description:
      "Farmdar's agritech platform has been transformed with advanced data design and modern application frameworks for unparalleled decision-making support.",
    outcomes: [
      'Advanced data architecture enabling real-time insights',
      'Modern application frameworks adopted',
      'Enhanced decision-making support for agriculture',
      'Scalable foundation for AI and analytics'
    ],
    technologies: ['Data Architecture', 'Containerisation', 'Modern Frameworks', 'Cloud'],
    slug: 'farmdar-agritech-solution-enhancement',
    relatedServiceIds: ['mlops', 'platform-engineering', 'cloud-provisioning']
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
    title: 'Data Centre Services',
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
    id: 'out-of-warranty-server-support-ibrahim-fibres',
    title: 'Out-of-warranty infrastructure maintained at optimal performance without CapEx investment',
    subtitle: 'Server SLA delivering zero downtime for 48 mission-critical Lenovo servers',
    client: 'Ibrahim Fibres Limited',
    industry: 'Manufacturing',
    description: '48 Lenovo servers running mission-critical MES, ERP, and production scheduling were out of OEM warranty. Perception IT implemented 24x7 hardware support local replacement parts, proactive maintenance, and automated patching, achieving zero unplanned outages and avoiding $750K+ in downtime risk.',
    outcomes: [
      'Zero unplanned outages in 12 months (vs. 3-4 incidents/year before)',
      'MTTR reduced from 72+ hours to under 6 hours',
      'Avoided $750K+ in annual downtime risk',
      'Extended hardware life by 3-4 years, deferring $200K+ CapEx',
      'Enabled 2 new production lines on existing infrastructure',
      'Met Allied Bank IT governance requirements'
    ],
    technologies: ['Lenovo Servers SLA', '24/7 Support', 'Preventive Maintenance', 'Hardware Support'],
    slug: 'out-of-warranty-server-support-ibrahim-fibres',
    image: '/Sections/Cooling page/Images-cooling/Case studies/ibrahim-fibres/Ibrahim Fibres -case study- 1600 × 700 px.webp',
    relatedServiceIds: ['hardware-support', 'server-continuity', 'sla-support']
  },
  {
    id: 'tower-asset-intelligence',
    title: 'Mobile Tower Asset Intelligence Platform',
    subtitle: 'Centralized inventory & geospatial asset tracking',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description: 'Integrated IBM Maximo with geospatial asset database for complete tower inventory visibility. Achieved **100%** asset tracking and enabled predictive maintenance scheduling **60 days** in advance.',
    outcomes: [
      '**100%** asset visibility across **10,000+** tower locations',
      'Maintenance scheduled **60 days** in advance (vs. **7 days** reactive)',
      'Asset lifecycle efficiency improved by **45%**',
      'Unplanned outages from asset failures reduced by **73%**'
    ],
    technologies: ['IBM Maximo', 'Asset Database', 'Geospatial Mapping', 'Inventory Management'],
    slug: 'tower-asset-intelligence',
    featured: false,
    isCollection: true,
    collectionCount: 2,
    relatedServiceIds: ['hardware-support', 'maximo', 'database-optimisation']
  },
  {
    id: 'federated-access-control',
    title: 'Federated Access Control & Enterprise Security',
    subtitle: 'Role-based identity management with 90% faster provisioning',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Implemented OAuth 2.0 identity federation with LDAP synchronization across multi-domain telecom infrastructure. Reduced access provisioning time by **90%** while achieving **100%** audit compliance.',
    outcomes: [
      'Access provisioning time reduced by **90%** (from **5 days** to **<12 hours**)',
      '**100%** audit compliance with regulatory standards',
      '**99.9%** authentication availability SLA',
      'Unauthorized access incidents reduced to **zero** across audit periods'
    ],
    technologies: ['OAuth 2.0', 'LDAP', 'Active Directory', 'Encryption', 'Audit Logging'],
    slug: 'federated-access-control',
    featured: false,
    relatedServiceIds: ['cross-domain-automation', 'network-monitoring', 'sla-support']
  },
  {
    id: 'service-management-overhaul',
    title: 'Comprehensive Service Management Process Overhaul',
    subtitle: 'ITIL-aligned process transformation using IBM Maximo',
    client: 'Major Mobile Network Operator',
    industry: 'Telecommunications',
    description: 'Transformed service management landscape by implementing standardized ITIL processes using IBM Maximo. Achieved **73%** reduction in service delivery time and **85%** improvement in asset lifecycle management.',
    outcomes: [
      'Service delivery time reduced by **73%**',
      'Asset lifecycle efficiency improved by **85%**',
      'Process standardization across **12+ operational domains**',
      'Change management cycle time reduced from **3 weeks** to **3 days**'
    ],
    technologies: ['IBM Maximo', 'ITIL Processes', 'Workflow Automation', 'Service Management'],
    slug: 'service-management-overhaul',
    featured: false,
    relatedServiceIds: ['maximo', 'hardware-support', 'sla-support']
  },
  {
    id: 'middleware-id-management',
    title: 'Middleware Infrastructure for National ID Platform',
    subtitle: 'Enterprise-grade WebSphere deployment for citizen identity services',
    client: 'National Government Agency',
    industry: 'Government Services',
    description: 'Deployed robust WebSphere middleware infrastructure for high-volume citizen identity platform. Maintained **99.95%** availability serving **50M+ citizens** with **sub-500ms** request latency.',
    outcomes: [
      '**99.95%** platform availability across peak demand periods',
      '**50M+** citizen records accessible with **sub-500ms** latency',
      '**Zero** unplanned outages in **24 months** of operation',
      'Capacity handled **10x** surge traffic during election periods'
    ],
    technologies: ['WebSphere', 'Middleware', 'Java', 'Database Clustering'],
    slug: 'middleware-id-management',
    featured: false,
    relatedServiceIds: ['hardware-support', 'database-optimisation', 'sla-support']
  },
  {
    id: 'customs-reporting-security',
    title: 'Reporting Infrastructure & Enterprise Security for Trade Analytics',
    subtitle: 'Federated access control with enterprise security integration',
    client: 'National Customs & Trade Authority',
    industry: 'Government Services',
    description: 'Integrated IBM Cognos BI platform with Oracle Access Management for federated access control in customs analytics. Achieved **100%** audit compliance while enabling **500+** concurrent analyst access.',
    outcomes: [
      '**100%** regulatory compliance with customs audit standards',
      '**500+** concurrent analyst access with fine-grained permissions',
      'Report generation time reduced by **67%** (from **45min** to **15min**)',
      'Unauthorized access attempts: **zero** successful breaches in **36 months**'
    ],
    technologies: ['IBM Cognos', 'Oracle Access Management', 'LDAP', 'Encryption'],
    slug: 'customs-reporting-security',
    featured: false,
    relatedServiceIds: ['cross-domain-automation', 'network-monitoring', 'sla-support']
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
    id: 'database-optimisation',
    title: 'Database Optimisation',
    description: 'DB2 PureScale, SQL Server, Oracle performance tuning',
    link: '/services/database-optimisation',
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
    relatedServiceIds: ['database-optimisation']
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
  },
  {
    id: 'iot-streaming-data-architecture',
    title: 'IoT & Streaming Data Architecture for Tower Networks',
    subtitle: 'MQTT-to-Databricks pipeline processing 2M events/minute',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description: 'Architected end-to-end IoT streaming pipeline from **10,000+ tower** MQTT feeds through Databricks ETL to Azure Data Lake. Ingests **50TB/month** with **99.7%** delivery reliability and sub-5-minute analytics latency.',
    outcomes: [
      '**2M events/minute** processing capacity with **99.7%** reliability',
      '**50TB/month** raw data ingestion and normalization',
      'Analytics latency reduced to **<5 minutes** (vs. **48 hours** legacy)',
      'Data quality score: **90%** on ingestion validation'
    ],
    technologies: ['Azure Data Lake', 'Databricks', 'MQTT', 'Kafka', 'Delta Lake', 'Python'],
    slug: 'iot-streaming-data-architecture',
    featured: false,
    isCollection: true,
    collectionCount: 3,
    relatedServiceIds: ['data-lakes', 'iot-analytics', 'logging-tracing']
  },
  {
    id: 'geospatial-tower-visualization',
    title: 'Real-Time Geospatial Tower Status Visualization',
    subtitle: 'Live dashboard with sub-5-second latency for network operations',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description: 'Built real-time web-based geospatial dashboard displaying **10,000+** tower status pins with performance metrics. Achieves **<5-second** latency updates and integrates with network planners for proactive optimisation.',
    outcomes: [
      'Real-time status updates with **<5-second** latency',
      'Visualized **10,000+** tower locations with live metrics',
      'Network planning latency reduced by **80%**',
      '**99.95%** dashboard availability SLA'
    ],
    technologies: ['Mapbox', 'React', 'WebSockets', 'Cloud Dashboards', 'GIS'],
    slug: 'geospatial-tower-visualization',
    featured: false,
    relatedServiceIds: ['geospatial', 'iot-analytics', 'observability']
  },
  {
    id: 'regional-tower-analytics',
    title: 'Regional Tower Performance Analytics & BI',
    subtitle: 'Data warehouse enabling **90%** faster insights for regional managers',
    client: 'Major African Telecom Operator',
    industry: 'Telecommunications',
    description: 'Implemented data warehouse with regional reporting and BI dashboards. Enables regional managers to analyse performance trends independently, reducing insights generation time by **90%**.',
    outcomes: [
      'Insights generation time reduced by **90%**',
      'Predictive analytics for maintenance scheduling **45 days** ahead',
      'Regional report creation automated: **98%** coverage',
      '**100%** data accuracy on regional aggregations'
    ],
    technologies: ['Databricks', 'Dremio', 'BI Tools', 'SQL', 'Data Warehouse'],
    slug: 'regional-tower-analytics',
    featured: false,
    isCollection: true,
    collectionCount: 2,
    relatedServiceIds: ['data-lakes', 'iot-analytics', 'database-optimisation']
  },
  {
    id: 'enterprise-data-federation',
    title: 'Enterprise Data Federation Architecture',
    subtitle: 'Multi-domain unified queries eliminating **80%** of data requests',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Built federated query layer enabling single unified queries across **5+ siloed** telecom domains. Reduced data request volume by **80%** while maintaining **99.95%** query accuracy.',
    outcomes: [
      'Cross-domain data requests reduced by **80%**',
      '**99.95%** query accuracy across federated sources',
      'Query latency: **<2 seconds** for cross-domain analytics',
      'Data governance: **100%** policy compliance'
    ],
    technologies: ['Data Federation', 'API Gateway', 'Data Governance', 'Dremio'],
    slug: 'enterprise-data-federation',
    featured: false,
    relatedServiceIds: ['data-federation', 'data-lakes', 'database-optimisation']
  },
  {
    id: 'edge-insights-orchestration',
    title: 'Edge Insights Orchestration for Telecom Analytics',
    subtitle: 'Converged edge data processing with adaptive stream analytics',
    client: 'Global Telecom Operator',
    industry: 'Telecommunications',
    description: 'Implemented a hybrid edge-cloud data orchestration platform that processes telemetry at tower-edge, consolidates with cloud data lakes, and routes key insights to real-time dashboards.',
    outcomes: [
      'Latency reduced to **<1 second** for critical edge alerts',
      'Data pipeline cost optimised by **45%** via edge pre-aggregation',
      'Operational insights generated at **100x** frequency versus legacy',
      'Seamless edge-cloud failover with **99.95%** availability'
    ],
    technologies: ['Edge Computing', 'Kafka', 'Databricks', 'Azure Data Lake', 'Stream Analytics'],
    slug: 'edge-insights-orchestration',
    featured: false,
    relatedServiceIds: ['iot-analytics', 'data-lakes', 'geospatial']
  },
  {
    id: 'data-lake-self-service',
    title: 'Data Lake & Self-Service Analytics Platform',
    subtitle: 'Medallion architecture reducing analytics requests by 70%',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Deployed Medallion architecture (bronze/silver/gold) data lake with Dremio access layer. Reduced analytics team bottleneck by **70%** through self-service business user analytics.',
    outcomes: [
      'Analytics requests to central team reduced by **70%**',
      'Self-service adoption rate: **85%** within **90 days**',
      'Business user analytics report time: **<2 hours** (vs. **5 days** legacy)',
      'Data discovery improved: **95%** asset cataloging'
    ],
    technologies: ['AWS Data Lake', 'Databricks', 'Dremio', 'Delta Lake', 'BI Tools'],
    slug: 'data-lake-self-service',
    featured: false,
    relatedServiceIds: ['data-lakes', 'iot-analytics', 'database-optimisation']
  },
  {
    id: 'db2-purescale-optimisation',
    title: 'ITSM Database Performance Optimisation with DB2 PureScale',
    subtitle: 'Database performance enhancement achieving 99.9% uptime',
    client: 'Enterprise ITSM User',
    industry: 'Enterprise Technology',
    description: 'Upgraded legacy ITSM database to IBM DB2 PureScale, delivering enhanced performance and reliability. Achieved **99.9%** steady-state uptime with **3x** query throughput improvement.',
    outcomes: [
      'Database query throughput increased **3x**',
      'System uptime improved to **99.9%** SLA',
      'ITSM ticket response time reduced by **65%**',
      'Database maintenance window reduced from **4 hours** to **<30 minutes**'
    ],
    technologies: ['DB2 PureScale', 'IBM Database', 'HA/DR', 'Performance Tuning'],
    slug: 'db2-purescale-optimisation',
    featured: false,
    relatedServiceIds: ['database-optimisation', 'data-lakes', 'sla-support']
  },
  {
    id: 'agritech-data-architecture',
    title: 'AgriTech Advanced Data Architectures',
    subtitle: 'Modern data design enabling agile agricultural decision-making',
    client: 'Farmer SaaS Platform',
    industry: 'Agriculture Technology',
    description: 'Transformed agritech platform with advanced data design and modern application frameworks. Enabled real-time agricultural analytics, crop yield prediction, and decision-making support with **sub-second** query latency.',
    outcomes: [
      'Decision-making latency reduced from **1 week** to **real-time**',
      'Crop yield prediction accuracy: **88%**',
      'Farmer app load time improved by **92%**',
      'Data pipeline reliability: **99.5%** through season'
    ],
    technologies: ['Advanced Data Design', 'Modern Frameworks', 'Real-time Analytics', 'Machine Learning'],
    slug: 'agritech-data-architecture',
    featured: false,
    relatedServiceIds: ['iot-analytics', 'data-lakes', 'database-optimisation']
  },
  {
    id: 'farmdar-data-modernization',
    title: 'Data Architecture Modernization for AgriTech Platform',
    subtitle: 'Expert architectural designs streamlining data processes and boosting scalability',
    client: 'Farmdar',
    industry: 'AgriTech',
    description: 'Our partnership with Perception IT elevated Farmdar solutions to new heights. Expert architectural designs streamlined data processes and significantly boosted system scalability. Modernisation initiatives, including the adoption of containerisation techniques, enhanced team efficiency and agility.',
    outcomes: [
      'Data processes streamlined through expert architectural designs',
      'System scalability significantly boosted',
      'Team efficiency enhanced through modernisation initiatives',
      'Containerisation techniques adopted for improved agility',
      'Faster insights and fortified growth trajectory'
    ],
    technologies: ['Data Architecture', 'Containerisation', 'Modern Frameworks', 'Cloud'],
    slug: 'farmdar-data-modernization',
    featured: false,
    relatedServiceIds: ['data-lakes', 'iot-analytics', 'cloud-migration']
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
  },
  {
    id: 'service-desk2',
    title: 'Service Desk V2',
    description: 'Alternative design exploration for service desk',
    link: '/services/service-desk2'
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
  },
  {
    id: 'servicenow-automation-advanced',
    title: 'Intelligent Incident Automation in ServiceNow',
    subtitle: 'Microservice automation reducing manual incident work by 40%',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Developed microservice bridge integrating network alarms into ServiceNow automated incident workflow. Eliminated **40%** of manual incident handling through auto-correlation and context-driven assignment.',
    outcomes: [
      'Manual incident work reduced by **40%**',
      '**100%** incident traceability for compliance',
      'Incident lifecycle time reduced by **45%**',
      'SLA compliance improved to **98%** from **76%**'
    ],
    technologies: ['ServiceNow', 'REST APIs', 'Workflow Automation', 'Incident Management'],
    slug: 'servicenow-incident-automation-advanced',
    featured: false,
    isCollection: true,
    collectionCount: 2,
    relatedServiceIds: ['servicenow', 'service-desk', 'sla-support']
  },
  {
    id: 'telco-service-desk-migration-servicenow',
    title: 'Telco Service Desk IT Process Migration to ServiceNow',
    subtitle: 'A mature service desk implementation modernised and migrated to ServiceNow cloud',
    client: 'Jazz (Pakistan)',
    industry: 'Telecommunications',
    description: 'A mature service desk implementation for one of Pakistan’s largest telecom operators was migrated from on-premise Maximo to ServiceNow, unlocking true cloud-native agility and end-to-end automation.',
    outcomes: [
      'Platform availability: **99.95%** SLA maintained',
      'Service desk coverage expanded to **24/7 follow-the-sun** model',
      'Ticket resolution time reduced by **52%**',
      'Agent productivity increased by **35%** with knowledge automation'
    ],
    technologies: ['ServiceNow', 'Maximo', 'DB2', 'Cloud', 'ITSM', 'Workflow Automation'],
    slug: 'telco-service-desk-it-process-migration-to-servicenow',
    featured: false,
    relatedServiceIds: ['servicenow', 'service-desk', 'observability']
  },
  {
    id: 'maximo-asset-implementation',
    title: 'Maximo Asset Management Standardization for Telecom',
    subtitle: 'Streamlined inventory & asset lifecycle across infrastructure',
    client: 'Major Mobile Telecom Provider',
    industry: 'Telecommunications',
    description: 'Standardized inventory and asset management using IBM Maximo across telecom infrastructure. Achieved **100%** asset visibility and enabled predictive maintenance, reducing unplanned failures by **68%**.',
    outcomes: [
      '**100%** asset inventory accuracy and visibility',
      'Unplanned asset failures reduced by **68%**',
      'Maintenance cost savings: **$2.3M** annually',
      'Asset lifecycle efficiency improved by **52%**'
    ],
    technologies: ['IBM Maximo', 'Asset Management', 'Lifecycle Optimisation', 'Integration'],
    slug: 'maximo-asset-implementation',
    featured: false,
    relatedServiceIds: ['maximo', 'hardware-support', 'database-optimisation']
  },
  {
    id: 'property-management-platform-advanced',
    title: 'Property Management Communication Platform',
    subtitle: 'Cross-platform SaaS for landlord-tenant-manager ecosystem',
    client: 'Real Estate Technology SaaS',
    industry: 'Real Estate',
    description: 'Developed sophisticated cross-platform application facilitating communication and service brokerage between stakeholders. Achieved **95%** user satisfaction and **40%** reduction in property management overhead.',
    outcomes: [
      'User satisfaction rating: **95%**',
      'Property management overhead reduced by **40%**',
      'Request processing time: **<2 hours** (vs. **3 days** manual)',
      'Tenant retention improved by **23%** through improved communication'
    ],
    technologies: ['Angular', 'Custom Application Development', 'Real Estate APIs'],
    slug: 'property-management-platform-advanced',
    featured: false,
    relatedServiceIds: ['custom-development', 'service-desk']
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
    description: 'Real-time visibility and performance optimisation',
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
  },
  {
    id: 'network-domain-automation',
    title: 'Network Domain Operations & Cross-Domain Automation',
    subtitle: 'Declarative automation reducing operational errors by 80%',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Implemented declarative network automation with conflict resolution across multiple telecom domains. Reduced operational errors by **80%** while achieving **95%** automation coverage.',
    outcomes: [
      'Operational errors reduced by **80%**',
      'Automation coverage: **95%** of common tasks',
      'Change deployment time: **<30 minutes** (vs. **8 hours** manual)',
      'Network policy compliance: **100%** enforced'
    ],
    technologies: ['Netcool', 'Network APIs', 'Ansible', 'Policy Engines', 'Automation Framework'],
    slug: 'network-domain-automation',
    featured: false,
    isCollection: true,
    collectionCount: 2,
    relatedServiceIds: ['cross-domain-automation', 'network-monitoring', 'observability']
  },
  {
    id: 'alarm-correlation-optimisation',
    title: 'Alarm Correlation & Cross-Domain Optimisation',
    subtitle: 'Intelligent correlation eliminating redundant alarms 60%',
    client: 'Major Telecom Provider',
    industry: 'Telecommunications',
    description: 'Enhanced network operations through intelligent alarm correlation across telecom domains. Reduced alarm noise by **60%** while increasing root-cause identification accuracy to **87%**.',
    outcomes: [
      'Alarm noise reduced by **60%** through correlation',
      'Root-cause identification accuracy: **87%**',
      'NOC incident response time: **<10 minutes** average',
      'Network reliability SLA: **99.95%** maintained'
    ],
    technologies: ['Netcool', 'Complex Event Processing', 'Correlation Rules', 'Observability'],
    slug: 'alarm-correlation-optimisation',
    featured: false,
    relatedServiceIds: ['cross-domain-automation', 'network-monitoring', 'observability']
  },
  {
    id: 'network-monitoring-enterprise',
    title: 'Enterprise Network Monitoring & Performance Optimisation',
    subtitle: 'Real-time visibility reducing MTTR by 65%',
    client: 'Major ISP / Network Provider',
    industry: 'Telecommunications',
    description: 'Implemented comprehensive network monitoring providing real-time visibility across infrastructure. Reduced Mean-Time-To-Recovery by **65%** and increased network uptime to **99.95%**.',
    outcomes: [
      'MTTR reduced by **65%** through real-time alerts',
      'Network infrastructure uptime: **99.95%** SLA',
      'Performance degradation detection: **<2 minutes** vs. **30 minutes** manual',
      'Customer complaints about network performance reduced by **73%**'
    ],
    technologies: ['Network Monitoring', 'Zabbix', 'Performance Analytics', 'Alert Management'],
    slug: 'network-monitoring-enterprise',
    featured: false,
    relatedServiceIds: ['network-monitoring', 'cross-domain-automation', 'observability']
  },
  {
    id: 'isp-observability-infrastructure',
    title: 'Enterprise Observability Infrastructure for ISP',
    subtitle: 'Unified server-app-network monitoring with 99.9% SLA',
    client: 'Major Internet Service Provider',
    industry: 'Telecommunications',
    description: 'Deployed comprehensive observability integrating server, application, and network monitoring. Achieved **99.9%** infrastructure uptime with **60%** reduction in mean-time-to-recovery.',
    outcomes: [
      'Infrastructure uptime: **99.9%** SLA maintained',
      'MTTR reduced by **60%** through integrated visibility',
      'Mean time between failures increased **2.5x**',
      'Infrastructure cost savings through optimisation: **$1.2M** annually'
    ],
    technologies: ['Zabbix', 'Monitoring Platform', 'Infrastructure Telemetry', 'Observability'],
    slug: 'isp-observability-infrastructure',
    featured: false,
    relatedServiceIds: ['network-monitoring', 'observability', 'logging-tracing']
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
  },
  {
    id: 'aiops-incident-automation',
    title: 'Intelligent Incident Automation with AIOps',
    subtitle: 'ML-driven event correlation achieving 88% alert accuracy',
    client: 'Major Telecom Operator',
    industry: 'Telecommunications',
    description: 'Deployed AI/ML models on operational logs for real-time anomaly detection and intelligent incident automation. Reduced alert noise by **88%** while improving MTTR by **65%** through predictive analytics.',
    outcomes: [
      '**88%** reduction in false-positive alerts',
      'MTTR improved by **65%** through AI insights',
      'Predictive alerts for critical KPIs: **87%** accuracy',
      'On-call engineer context time reduced by **72%**'
    ],
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'Prometheus', 'Machine Learning'],
    slug: 'aiops-incident-automation',
    featured: false,
    isCollection: true,
    collectionCount: 2,
    relatedServiceIds: ['aiops', 'mlops', 'observability']
  },
  {
    id: 'mlops-production-pipeline',
    title: 'MLOps Production Pipeline & Model Governance',
    subtitle: 'End-to-end ML deployment enabling monthly model updates',
    client: 'Enterprise Technology Organisation',
    industry: 'Technology',
    description: 'Built production-ready MLOps infrastructure with model governance, enabling rapid iteration on operational AI models. Automated model deployment, monitoring, and rollback reducing deployment time **90%**.',
    outcomes: [
      'Model deployment cycle time reduced by **90%**',
      'Monthly model update cadence enabled (vs. **quarterly** baseline)',
      'Model accuracy monitoring: **real-time** with **99.5%** SLA',
      'Model retraining automation: **100%** of production models'
    ],
    technologies: ['MLOps Platform', 'Model Registry', 'Kubernetes', 'Python', 'TensorFlow'],
    slug: 'mlops-production-pipeline',
    featured: false,
    relatedServiceIds: ['mlops', 'aiops', 'observability']
  },
  {
    id: 'ai-anomaly-detection',
    title: 'AI-Driven Anomaly Detection for IT Operations',
    subtitle: 'Unsupervised learning reducing operational incidents by 45%',
    client: 'Global Enterprise',
    industry: 'Enterprise Technology',
    description: 'Implemented unsupervised ML models for infrastructure anomaly detection without predefined rules. Detected **45%** more infrastructure issues proactively versus reactive alerting.',
    outcomes: [
      'Proactive incident detection increased by **45%**',
      'Mean-time-to-identification reduced by **78%**',
      'False positives: **<5%** with adaptive baselining',
      'Infrastructure cost optimisation through ML insights: **$3.2M** annually'
    ],
    technologies: ['Machine Learning', 'Python', 'Unsupervised Learning', 'Anomaly Detection'],
    slug: 'ai-anomaly-detection',
    featured: false,
    relatedServiceIds: ['aiops', 'mlops', 'observability']
  }
];

// ============================================================================
// MAIN EXPORT - All service categories
// ============================================================================

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'devops-cloud',
    label: 'DevOps & Cloud',
    navLabel: 'DevOps & Cloud',
    description: 'DevOps, FinOps, AIOps, MLOps, LLMOps, and Platform Engineering for the AI era',
    icon: InfinityIcon,
    color: {
      bg: 'bg-teal-100',
      text: 'text-teal-700',
      border: 'border-teal-200',
      light: 'bg-teal-50'
    },
    hubs: [cloudHubs[0]],
    caseStudies: devopsCloudCaseStudies
  },
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
    description: 'Hardware support, data centre services, and 24×7 SLA support',
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

// ============================================================================
// EXPORTED SERVICE LISTS FOR NAVIGATION
// ============================================================================

export { dataServices, aiServices, platformsServices };
