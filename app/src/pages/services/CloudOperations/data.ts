import type { LucideIcon } from 'lucide-react';
import {
  Hexagon,
  Workflow,
  DollarSign,
  RefreshCw,
  Lock,
  Eye,
  Brain,
  LayoutGrid,
  Cloud,
  Headphones,
  PieChart,
} from 'lucide-react';
import type { TestimonialData } from '@/components/TestimonialCarousel';

// ============================================================================
// NAVIGATION
// ============================================================================

export const PAGE_SECTIONS = [
  { id: 'overview', label: 'Overview', inNav: false },
  { id: 'capabilities', label: 'Capabilities', inNav: true },
  { id: 'ai-services', label: 'AI Services', inNav: true },
  { id: 'testimonials', label: 'Testimonials', inNav: true },
  { id: 'case-study', label: 'Case Study', inNav: true },
  { id: 'partner', label: 'Partner', inNav: true },
  { id: 'cta', label: 'Get Started', inNav: true },
] as const;

// ============================================================================
// HERO
// ============================================================================

export const HERO_BADGES = [
  'Container Orchestration',
  'CI/CD/CA',
  'FinOps',
  'AIOps',
  'Platform Engineering',
];

// ============================================================================
// CORE CAPABILITIES
// ============================================================================

export interface Capability {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  whatWeDo: string[];
  impact: string;
  quote: string;
}

export const CORE_CAPABILITIES: Capability[] = [
  {
    id: 'container-orchestration',
    icon: Hexagon,
    title: 'Container Orchestration & Service Mesh',
    tagline: 'Designed for maximum efficiency, resilience, and scale.',
    description:
      'Build and manage your application deployments with state-of-the-art Container Orchestration. We go beyond basic Kubernetes, implementing advanced Service Mesh (e.g., Istio, Linkerd) for secure service-to-service communication.',
    whatWeDo: [
      'Seamless scaling and intelligent load balancing',
      'Automated rollout and rollback strategies',
      'Multi-cloud cluster management',
      'Service mesh implementation and mTLS',
    ],
    impact:
      'Streamline container deployment and management while experiencing absolute operational confidence.',
    quote:
      'Our solutions leverage advanced orchestration to automate management and ensure high availability.',
  },
  {
    id: 'deployment-pipelines',
    icon: Workflow,
    title: 'AI-Enhanced Deployment Pipelines (CI/CD/CA)',
    tagline: 'Optimised, intelligent software delivery.',
    description:
      'Deployment pipelines offer a streamlined approach to development, integrating coding, building, testing, and deployment. We elevate this by integrating Continuous Automation (CA) and AI-assisted workflows.',
    whatWeDo: [
      'GitOps practices and automated Git-based deployments',
      'AI-driven code reviews and test generation',
      'Shift-left security testing',
      'Release orchestration and rollback automation',
    ],
    impact:
      'Faster release cycles, drastically reduced human error, and enhanced operational efficiency.',
    quote:
      'Automate the development lifecycle for continuous integration, continuous deployment, and continuous automation.',
  },
  {
    id: 'cloud-provisioning',
    icon: DollarSign,
    title: 'Cloud Provisioning, IaC & FinOps',
    tagline: 'Infrastructure as Code for efficient, cost-optimized management.',
    description:
      'Transform cloud resource management using Infrastructure as Code (IaC) via Terraform, Pulumi, or Crossplane. But we do not stop at provisioning; we integrate FinOps to ensure your cloud spend aligns with business value.',
    whatWeDo: [
      'Automated provisioning and environment consistency',
      'Resource right-sizing and auto-remediation',
      'Real-time cloud cost anomaly detection',
      'Tagging policies and charge-back models',
    ],
    impact:
      'Enhance scalability, increase deployment speed, and eliminate cloud waste.',
    quote:
      'Reduce human error, ensure consistency, and optimize cloud ROI across all environments.',
  },
  {
    id: 'cloud-migration',
    icon: RefreshCw,
    title: 'Cloud Migration & Modernization',
    tagline: 'Seamless transition to cloud-native architectures.',
    description:
      'Our Cloud Migration services cater to businesses moving from on-premise or monolithic systems to cloud-native platforms. We do not just lift and shift; we refactor and modernize.',
    whatWeDo: [
      'Comprehensive readiness assessments',
      'Microservices extraction and containerization',
      'Serverless adoption and edge-computing integration',
      'Automated migration toolchains and validation',
    ],
    impact:
      'Minimal disruption, optimal performance, and enhanced scalability.',
    quote:
      'Transition seamlessly while modernizing your architecture for the cloud-native era.',
  },
  {
    id: 'devsecops',
    icon: Lock,
    title: 'DevSecOps & Zero-Trust Integration',
    tagline: 'Bolstering security at the speed of DevOps.',
    description:
      'Empower your cloud operations by embedding security directly into the DNA of your DevOps workflow. We implement a Zero-Trust architecture ensuring security is continuous from design to deployment.',
    whatWeDo: [
      'SAST/DAST integration and AI-driven vulnerability scanning',
      'Automated compliance management (SOC2, ISO)',
      'Secure supply chain and SBOM practices',
      'Zero-trust network segmentation and identity policies',
    ],
    impact:
      'Proactively reduce vulnerabilities and compliance risks, leading to robust, secure software products.',
    quote:
      'Embed security practices directly into the workflow for continuous, automated protection.',
  },
  {
    id: 'cloud-cost-optimisation',
    icon: PieChart,
    title: 'Cloud Cost Optimisation',
    tagline: 'FinOps practices and tools to reduce cloud spend while maintaining performance.',
    description:
      'Identify waste, right-size resources, and automate savings across AWS, Azure, and hybrid environments. We combine FinOps tooling with governance processes so your cloud spend aligns with business value.',
    whatWeDo: [
      'Cost Explorer dashboards and charge-back visibility',
      'Budget alerts and anomaly detection',
      'Reserved Instance and Savings Plans planning',
      'Usage analytics and rightsizing recommendations',
      'Automated savings recommendations and tagging governance',
    ],
    impact:
      'Reduce cloud spend by 30–40% while maintaining performance and reliability.',
    quote:
      'FinOps practices and tools to reduce cloud spend while maintaining performance.',
  },
];

// ============================================================================
// NEXT-GEN AI SERVICES
// ============================================================================

export interface NextGenService {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  capabilities: string[];
}

export const NEXT_GEN_SERVICES: NextGenService[] = [
  {
    id: 'aiops',
    icon: Eye,
    title: 'AIOps & Intelligent Observability',
    tagline: 'Move from reactive to predictive.',
    capabilities: [
      'AI-driven anomaly detection',
      'Predictive incident resolution',
      'Automated root-cause analysis',
      'Unified telemetry: logs, metrics, and traces',
      'OpenTelemetry and eBPF instrumentation',
    ],
  },
  {
    id: 'mlops',
    icon: Brain,
    title: 'MLOps, LLMOps & AI Infrastructure',
    tagline: 'Operationalize your AI and machine learning.',
    capabilities: [
      'CI/CD for Machine Learning (MLOps)',
      'Large Language Model Operations (LLMOps)',
      'RAG pipeline deployment',
      'Vector database management',
      'GPU cluster orchestration',
    ],
  },
  {
    id: 'platform-engineering',
    icon: LayoutGrid,
    title: 'Platform Engineering',
    tagline: 'Empower your developers with self-service.',
    capabilities: [
      'Internal Developer Portals (IDPs)',
      'Self-service infrastructure provisioning',
      'Golden path templates',
      'Developer experience (DevEx) optimization',
      'Policy-as-code guardrails',
    ],
  },
];

// ============================================================================
// TESTIMONIALS
// ============================================================================

export const TESTIMONIALS: TestimonialData[] = [
  {
    quote: `We have been working with Perception IT now for several years. Their proactive approach and commitment to excellence have been instrumental in ensuring that we stay ahead of the competition and continue to meet the evolving needs of our customers.\n\nTheir smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution. This has resulted in improved accessibility, increased efficiency, and overall cost savings.`,
    author: 'Usman Ikram',
    org: 'Manager, SQM & Automation Support, Jazz',
    logo: '/logos/clients/client-jazz-logo.png',
    bg: 'from-[#0f62fe] to-[#0353e9]',
  },
  {
    quote: `Our partnership with Perception IT has elevated our solutions to new heights. Their expert architectural designs have streamlined our data processes and significantly boosted our system's scalability.\n\nThis transformation has led to faster insights and fortified our growth trajectory. Moreover, their modernisation initiatives, including the adoption of containerisation techniques, have enhanced our team's efficiency and agility. Thanks to Perception IT, we're achieving quicker, more reliable results, paving the way for sustained innovation and market leadership.`,
    author: 'Muhammad Bukhari',
    org: 'CEO, Farmdar',
    bg: 'from-[#0043ce] to-[#002d9c]',
  },
];

// ============================================================================
// CASE STUDY
// ============================================================================

export const CASE_STUDY = {
  id: 'iot-data-analytics-mobile-towers',
  headline: 'IoT & Data Analytics for Mobile Towers',
  description:
    'Perception IT implemented a sophisticated cloud-based IoT and streaming data analytics solution for monitoring mobile tower operations across Africa.',
  link: '/#/projects/case-study/iot-data-analytics-mobile-towers',
};

export const RELATED_SERVICES = [
  { label: 'Observability', href: '/#/services/observability' },
  { label: 'MLOps', href: '/#/services/mlops' },
  { label: 'Cloud and Kubernetes', href: '/#/services/container-platform' },
  { label: 'Managed Services Solutions', href: '/#/services/cloud-management' },
];

// ============================================================================
// PARTNER / WHY US
// ============================================================================

export const PROJECTS = [
  {
    title: 'IoT & Data Analytics for Mobile Towers',
    sector: 'Telecommunications',
    org: 'Major African Telecom Operator',
    desc: 'Cloud-based IoT and streaming data analytics solution for monitoring mobile tower operations across Africa.',
    image: '/Sections/projects/devops and cloud/IoT & Data Analytics for Mobile Towers 600×700.jpg',
    outcomes: [
      'Real-time monitoring of mobile tower operations',
      'Cloud-native, scalable architecture',
      'Streaming data analytics for operational insights',
      'Cross-Africa network visibility'
    ],
    tags: ['Azure', 'Databricks', 'MQTT', 'Kubernetes', 'IoT'],
    link: '/#/projects/case-study/iot-data-analytics-mobile-towers',
  },
  {
    title: 'Property Management Communication Broker',
    sector: 'Real Estate',
    org: 'Real Estate Technology Company',
    desc: 'Cross-platform application facilitating seamless communication and service brokerage between landlords, tenants, and property managers.',
    outcomes: [
      'Unified communication platform for property stakeholders',
      'Streamlined property management workflows',
      'Improved tenant and landlord satisfaction',
      'Complete request audit trail'
    ],
    tags: ['Angular', 'Custom Development', 'Real Estate APIs', 'Cloud'],
    link: '/#/projects/case-study/property-management-communication-broker',
  },
  {
    title: 'Cloud Infrastructure for IoT Data Collection and Visualisation',
    sector: 'Technology',
    org: 'IoT Software Provider',
    desc: 'Low-management AWS infrastructure solution for software providing IoT data collection and visualisation.',
    outcomes: [
      'Low-management AWS infrastructure',
      'Scalable IoT data collection pipeline',
      'Real-time data visualisation dashboards',
      'Automated customer provisioning'
    ],
    tags: ['AWS', 'IoT', 'Data Visualisation', 'Serverless'],
    link: '/#/projects/case-study/cloud-infrastructure-iot-data-visualisation',
  },
  {
    title: 'Unified Data Federation Portal',
    sector: 'Telecommunications',
    org: 'Telecommunications Operator',
    desc: 'Cross-functional central portal for data federation providing secure data access and analytics across telecommunication domains.',
    outcomes: [
      'Secure cross-domain data access',
      'Unified analytics platform',
      'Reduced data silos across telecom domains',
      'Centralised data governance'
    ],
    tags: ['Data Federation', 'Analytics', 'API Gateway', 'Cloud'],
    link: '/#/projects/case-study/unified-data-federation-portal',
  },
  {
    title: 'Automated Incident Management',
    sector: 'Telecommunications',
    org: 'Major Telecom Operator',
    desc: 'Automated incident management microservice integrating network alarms with ServiceNow to automate incident handling.',
    outcomes: [
      'Automated incident creation from network alarms',
      'Reduced manual ticket handling',
      'Faster incident response times',
      'Context-rich tickets for faster triage'
    ],
    tags: ['ServiceNow', 'REST APIs', 'Workflow Automation', 'Cloud'],
    link: '/#/projects/case-study/automated-incident-management',
  },
  {
    title: 'Streaming IoT and Data Analytics',
    sector: 'Telecommunications',
    org: 'Major Telecom Operator',
    desc: 'Streaming analytics solution for telco data using Databricks, Azure, and Data Lakes, providing real-time analytics and event analysis.',
    outcomes: [
      'Real-time streaming analytics pipeline',
      'Event-driven operational insights',
      'Scalable data lake architecture',
      'Proactive network and customer care'
    ],
    tags: ['Databricks', 'Azure', 'Data Lakes', 'Kafka', 'IoT'],
    link: '/#/projects/case-study/streaming-iot-data-analytics',
  },
  {
    title: 'Kubernetes Deployment for Telco Operations',
    sector: 'Telecommunications',
    org: 'Major African Telecom Operator',
    desc: 'Architecture and deployment of Kubernetes on AWS to streamline development and production of mobile tower management.',
    outcomes: [
      'Containerised microservices platform deployed',
      'Streamlined development and production workflows',
      'Elastic scaling for tower management workloads',
      'Consistent environments from dev to prod'
    ],
    tags: ['Kubernetes', 'AWS', 'DevOps', 'Containers'],
    link: '/#/projects/case-study/kubernetes-deployment-telco-operations',
  },
  {
    title: 'IoT Data Collection for Mobile Towers',
    sector: 'Telecommunications',
    org: 'Major African Telecom Operator',
    desc: 'MQTT-based IoT solution for centralised data analytics of mobile towers across Africa.',
    outcomes: [
      'MQTT-based IoT data collection at scale',
      'Centralised analytics platform',
      'Africa-wide tower coverage',
      'Resilient edge-to-cloud messaging'
    ],
    tags: ['MQTT', 'IoT', 'AWS', 'Analytics', 'Kubernetes'],
    link: '/#/projects/case-study/iot-data-collection-mobile-towers',
  },
  {
    title: 'Empowering Agriculture with Advanced Data Architectures',
    sector: 'Agri-Tech',
    org: 'Farmdar',
    desc: 'Transformed agritech platform with advanced data design and modern application frameworks for unparalleled decision-making support.',
    outcomes: [
      'Advanced data architecture enabling real-time insights',
      'Modern application frameworks adopted',
      'Enhanced decision-making support for agriculture',
      'Scalable foundation for AI and analytics'
    ],
    tags: ['Data Architecture', 'Containerisation', 'Modern Frameworks', 'Cloud'],
    link: '/#/projects/case-study/farmdar-agritech-solution-enhancement',
  },
];

export const PARTNER_CARDS = [
  {
    icon: Cloud,
    title: 'Evaluation and Advisory Services',
    description:
      'We can advise you where you can get the most benefit from DevOps and by migrating to cloud technologies. We help you run technology using modern practices either on-premise, hybrid, or entirely on the cloud.',
  },
  {
    icon: Headphones,
    title: 'Runtime and Support',
    description:
      'Perception IT can ensure smooth running for your implementation of DevOps and cloud services so you can concentrate on your key business strengths.',
  },
];

// ============================================================================
// STATS
// ============================================================================

export const STATS = [
  { value: '40%', label: 'Average cloud cost reduction', icon: 'TrendingUp' },
  { value: '3x', label: 'Faster release cycles', icon: 'Zap' },
  { value: '99.99%', label: 'Uptime SLA target', icon: 'Cloud' },
  { value: '24/7', label: 'Operational coverage', icon: 'Clock' },
];
