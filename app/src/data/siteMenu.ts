/**
 * Single source of truth for site navigation.
 * Both desktop mega-menu and mobile hamburger draw from this config.
 */

export interface MenuItem {
  label: string;
  href: string;
  desc?: string;
}

export interface MenuGroup {
  label: string;
  children: MenuItem[];
}

export interface MenuCategory {
  label: string;
  featured?: {
    label: string;
    title: string;
    desc: string;
    href: string;
  };
  groups: MenuGroup[];
}

export const siteMenu: MenuCategory[] = [

  {
    label: 'Consultancy',
    groups: [
      {
        label: 'Advisory',
        children: [
          { label: 'IT Assessment', href: '/#/services/it-assessment', desc: 'Current-state analysis & gaps' },
          { label: 'Technology Roadmap', href: '/#/services/technology-roadmap', desc: '3-year planning & prioritisation' },
          { label: 'Digital Transformation', href: '/#/services/digital-transformation', desc: 'Process modernisation' },
        ],
      },
    ],
  },

  {
    label: 'Cloud',
    featured: {
      label: 'Featured',
      title: 'DevOps & Cloud',
      desc: 'DevOps, FinOps, AIOps, MLOps, LLMOps, and Platform Engineering.',
      href: '/#/services/devops-cloud',
    },
    groups: [
      {
        label: 'Cloud Services',
        children: [
          { label: 'DevOps & Cloud', href: '/#/services/devops-cloud', desc: 'Intelligent cloud & DevOps for the AI era' },
          { label: 'Cloud Strategy', href: '/#/services/cloud-strategy', desc: 'Multi-cloud roadmap & governance' },
          { label: 'Cloud Cost Optimisation', href: '/#/services/cloud-cost-optimisation', desc: 'Reduce spend by 30–40%' },
          { label: 'Cloud Management', href: '/#/services/cloud-management', desc: 'Operations & monitoring' },
        ],
      },
      {
        label: 'Delivery',
        children: [
          { label: 'DevOps Delivery', href: '/#/services/devops-delivery', desc: 'CI/CD pipelines & automation' },
          { label: 'Container Platform', href: '/#/services/container-platform', desc: 'Kubernetes & orchestration' },
        ],
      },
    ],
  },

  {
    label: 'Infrastructure',
    groups: [
      {
        label: 'Core Infrastructure',
        children: [
          { label: 'Server Continuity', href: '/#/services/server-continuity', desc: 'Business continuity & disaster recovery' },
          { label: 'Hardware Support', href: '/#/services/hardware-support', desc: 'Save 60% vs vendor contracts' },
          { label: '24×7 SLA Support', href: '/#/services/sla-support', desc: 'Guaranteed response times' },
        ],
      },
      {
        label: 'Network Operations',
        children: [
          { label: 'Cross-Domain Automation', href: '/#/services/cross-domain-automation', desc: 'Automate alarm correlation' },
          { label: 'Network Monitoring', href: '/#/services/network-monitoring', desc: 'Real-time visibility & optimisation' },
        ],
      },
      {
        label: 'Data Centre Services',
        children: [
          { label: 'Cost Optimisation', href: '/#/infrastructure/data-centre-services/cost-optimisation', desc: 'Cost reduction & ROI across data centre infrastructure' },
          { label: 'Cooling', href: '/#/infrastructure/data-centre-services/cooling', desc: 'Precision cooling & thermal continuity' },
          { label: 'Power & UPS', href: '/#/infrastructure/data-centre-services/power-ups', desc: 'UPS & power distribution' },
          { label: 'Rack & Cabinet', href: '/#/infrastructure/data-centre-services/rack-cabinets', desc: 'Server cabinets & enclosures' },
          { label: 'Monitoring', href: '/#/infrastructure/data-centre-services/monitoring', desc: 'Temp, humidity, leak detection' },
          { label: 'Migration & Relocation', href: '/#/infrastructure/data-centre-services/migration-relocation', desc: 'Zero-downtime moves' },
          { label: 'Maintenance & Support', href: '/#/infrastructure/data-centre-services/maintenance-support', desc: 'SLA-backed contracts' },
        ],
      },
    ],
  },

  {
    label: 'Data and Analytics',
    groups: [
      {
        label: 'Analytics',
        children: [
          { label: 'IoT Data Analytics', href: '/#/services/iot-data-analytics', desc: 'Real-time sensor data processing' },
          { label: 'Data Lakes & Warehousing', href: '/#/services/data-lakes-warehousing', desc: 'Cloud-based data warehousing' },
          { label: 'Geospatial Analytics', href: '/#/services/geospatial-analytics', desc: 'Real-time mobile tower mapping' },
          { label: 'Data Federation', href: '/#/services/data-federation', desc: 'Cross-functional data portals' },
          { label: 'Database Optimisation', href: '/#/services/database-optimisation', desc: 'DB2, SQL Server, Oracle tuning' },
        ],
      },
    ],
  },

  {
    label: 'AI',
    groups: [
      {
        label: 'Artificial Intelligence',
        children: [
          { label: 'AI Strategy', href: '/#/services/ai-strategy', desc: 'AI roadmap & use-case prioritisation' },
          { label: 'MLOps', href: '/#/services/mlops', desc: 'Model deployment & monitoring' },
          { label: 'Generative AI', href: '/#/services/generative-ai', desc: 'LLM integration & fine-tuning' },
          { label: 'AI Governance', href: '/#/services/ai-governance', desc: 'Compliance & ethics frameworks' },
        ],
      },
    ],
  },

  {
    label: 'IT Platforms',
    groups: [
      {
        label: 'Platforms',
        children: [
          { label: 'ServiceNow', href: '/#/services/servicenow', desc: 'ITSM & enterprise workflows' },
          { label: 'Salesforce', href: '/#/services/salesforce', desc: 'CRM implementation & customisation' },
          { label: 'Microsoft 365', href: '/#/services/microsoft-365', desc: 'Migration & governance' },
          { label: 'Cybersecurity', href: '/#/services/cybersecurity-platform', desc: 'SOC & threat detection' },
        ],
      },
    ],
  },
];

export const topLevelLinks: MenuItem[] = [
  { label: 'Projects', href: '/#/projects' },
  { label: 'About', href: '/#/about' },
];
