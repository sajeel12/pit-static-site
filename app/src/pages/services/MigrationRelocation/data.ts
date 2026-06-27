import {
  ClipboardCheck,
  ShieldCheck,
  Settings,
  Server,
  Building2,
  Cloud,
  ShieldAlert,
  Cpu,
  Merge,
  ArrowRightLeft,
  Phone,
  Landmark,
  Factory,
  HardHat,
  Headphones,
  Globe,
} from 'lucide-react';

export const PAGE_SECTIONS = [
  { id: 'overview', label: 'Overview', inNav: true },
  { id: 'problem', label: 'De-Risk Migrations', inNav: true },
  { id: 'models', label: 'Engagement Models', inNav: true },
  { id: 'industries', label: 'Industries', inNav: true },
  { id: 'hardware', label: 'Hardware Bundle', inNav: true },
  { id: 'projects', label: 'Projects', inNav: true },
  { id: 'results', label: 'Results', inNav: true },
  { id: 'cta', label: 'Get Started', inNav: true },
] as const;

export const WHY_MIGRATIONS_FAIL = [
  {
    step: '01',
    title: 'Operational discovery before scheduling',
    desc: 'We audit first so the plan is based on fact, not assumption.',
    bullets: [
      'Map applications, dependencies, SLAs, and infrastructure',
      'Go beyond the rack list',
      'Validate assumptions before scheduling any move',
    ],
  },
  {
    step: '02',
    title: 'Single accountability from audit to support',
    desc: 'We keep accountability in one place so gaps cannot hide between vendors.',
    bullets: [
      'One vendor owns procurement, migration and support',
      'No hand-off gaps between project and operations',
      'Managed services stay with the same team that executed the move',
    ],
  },
  {
    step: '03',
    title: 'Steady-state operations are the finish line',
    desc: 'Cutover is not the end. We design for operational continuity long after the move.',
    bullets: [
      'Hyper-care period with dedicated engineering coverage',
      'NOC handover and operational runbooks',
      'Continuous performance validation post-migration',
    ],
  },
];

export const ENGAGEMENT_MODELS = [
  {
    icon: ClipboardCheck,
    title: 'Migration Advisory & Assessment',
    subtitle: 'High-margin consulting, low execution risk',
    desc: 'An independent audit of migration feasibility, risk exposure, and business case. We deliver a target architecture, vendor-neutral technology recommendations, and a phased roadmap you can execute internally or with us.',
    features: ['Feasibility audit & dependency mapping', 'Risk assessment & mitigation plan', 'Target architecture design', 'Vendor-neutral recommendations'],
    cta: 'Request a Migration Assessment',
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: 'Managed Migration Oversight',
    subtitle: 'Project governance with 24/7 cutover insurance',
    desc: 'You retain your contractors; we provide the governance, risk management, testing validation, and NOC oversight that keeps the migration honest. Ideal when you need an operator watching the operation, not a consultant watching a Gantt chart.',
    features: ['Vendor coordination & milestone governance', 'Pre-cutover testing validation', '24/7 NOC monitoring during switchover', 'Post-migration performance validation'],
    cta: 'Speak to a Migration Architect',
  },
  {
    icon: Settings,
    title: 'Turnkey Migration + Managed Services',
    subtitle: 'End-to-end execution that converts into recurring revenue',
    desc: 'We handle the full transition — audit, hardware procurement, physical move, testing, and cutover — then transition seamlessly into ongoing managed services. This is the single-vendor path from legacy facility to supported operations.',
    features: ['End-to-end execution & procurement', 'Huawei / Dell / HPE / Cisco hardware options', 'Phased migration with guaranteed RTOs', 'Seamless handover to 24/7 managed support'],
    cta: 'Discuss Turnkey Migration',
  },
];

export const INDUSTRY_EXPERIENCE = [
  {
    icon: Phone,
    title: 'Telecommunications',
    desc: 'Migrated critical infrastructure for Pakistan\'s largest operators — environments where downtime is measured in millions of revenue per hour and every minute of visibility counts.',
  },
  {
    icon: Landmark,
    title: 'Banking & Financial Services',
    desc: 'SBP-compliant migration methodologies with zero data loss, regulatory sign-off, and rollback capability tested to the minute.',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industrial',
    desc: '24/7 production continuity during infrastructure transitions, including edge site consolidations and control system migrations.',
  },
];

export const HARDWARE_BUNDLE_FEATURES = [
  'New hardware procurement through Huawei Enterprise Certified Partner status',
  'Migration execution sized to your facility and runtime requirements',
  '3-year managed support and NOC monitoring included',
  'Single vendor relationship, one accountability chain',
];

export const RECENT_PROJECTS = [
  {
    title: 'Tier-3 Data Centre Consolidation',
    desc: 'Migrated 200+ racks across 3 legacy facilities into a single modernised data centre with zero data loss and 99.98% availability during transition.',
  },
  {
    title: 'Banking Core Systems Migration',
    desc: 'Executed phased migration of critical banking applications with sub-15-minute RTO, full rollback capability, and regulatory compliance sign-off.',
  },
  {
    title: 'Hybrid Cloud Transition',
    desc: 'Migrated 60% of workloads to cloud while maintaining on-premise systems for sensitive data, achieving 40% TCO reduction.',
  },
  {
    title: 'Disaster Recovery Activation',
    desc: 'Activated DR site during primary facility outage, maintained operations for 72 hours, and executed seamless failback.',
  },
];

export const OPERATIONAL_CREDENTIALS = [
  {
    icon: Headphones,
    title: '24/7 NOC Oversight',
    desc: 'Our Lahore-based NOC monitors migrations during execution and hyper-care, not just after go-live.',
  },
  {
    icon: Globe,
    title: 'Governed Delivery, Competitive Cost Model',
    desc: 'Structured governance, documented runbooks, and clear escalation paths — delivered through our Lahore-based team at competitive rates without compromising quality.',
  },
  {
    icon: HardHat,
    title: 'Operators, Not Just Consultants',
    desc: 'Every migration plan is validated by the team that will support it post-go-live.',
  },
];

export const SERVICE_SCOPE = [
  { icon: Server, label: 'Server room relocations (10–500 racks)' },
  { icon: Building2, label: 'Enterprise data centre consolidations' },
  { icon: Cloud, label: 'Cloud migrations (public, private, hybrid)' },
  { icon: ShieldAlert, label: 'Disaster recovery site activations' },
  { icon: Cpu, label: 'Technology refresh migrations' },
  { icon: Merge, label: 'M&A infrastructure integrations' },
  { icon: ArrowRightLeft, label: 'Edge computing deployments' },
  { icon: ArrowRightLeft, label: 'Colocation to owned facility transitions' },
];

export const TESTIMONIALS = [
  {
    quote: "Perception-IT did not just move our infrastructure — they stayed with us through hyper-care and into managed support. The migration became the entry point to a much simpler operational model.",
    author: 'Head of Infrastructure',
    org: 'Leading Pakistani Bank',
    bg: 'from-[#0043ce] to-[#002d9c]',
    project: {
      headline: 'Banking Data Centre Migration',
      desc: 'Turnkey relocation with ongoing managed services and NOC support',
      link: '/#/infrastructure/data-centre-services/migration-relocation',
    },
  },
  {
    quote: "We used Perception-IT as independent oversight on a complex telco migration. Their NOC caught issues before they became outages and their governance kept multiple vendors aligned.",
    author: 'Regional Operations Director',
    org: 'GCC Telecommunications Group',
    bg: 'from-[#0f62fe] to-[#0353e9]',
    project: {
      headline: 'Managed Migration Oversight',
      desc: 'Independent governance and 24/7 cutover monitoring for a multi-vendor migration',
      link: '/#/infrastructure/data-centre-services/migration-relocation',
    },
  },
  {
    quote: "The refresh-and-relocate bundle gave us new Huawei hardware, a clean migration, and three years of support under one contract. It removed the finger-pointing we had with separate vendors.",
    author: 'IT Director',
    org: 'Manufacturing Group',
    bg: 'from-[#002d9c] to-[#0043ce]',
    project: {
      headline: 'Turnkey Migration + Hardware Refresh',
      desc: 'New hardware procurement, migration execution, and ongoing managed services',
      link: '/#/infrastructure/data-centre-services/migration-relocation',
    },
  },
];

export const CONTACT_EMAIL_BODY = encodeURIComponent(
  'Hi Perception IT Team,\n\nI would like to discuss a data centre migration or relocation project. Please find the initial details below.\n\nPlease complete the sections that apply to your situation. You are not required to fill out every field — even partial information is sufficient to begin the discussion.\n\n- Company name:\n\n- Contact name and role:\n\n- Current facility location(s):\n\n- Target facility location (if known):\n\n- Approximate number of racks / workloads:\n\n- Engagement model of interest (Advisory / Managed Oversight / Turnkey):\n\n- Acceptable downtime windows or RTO/RPO requirements:\n\n- Key compliance or regulatory constraints:\n\n- Planned migration timeline:\n\n- Current pain points or concerns:\n\nPlease contact me to arrange a migration readiness assessment or consultation.\n\nBest regards,'
);
