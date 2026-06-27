import {
  Headphones,
  ShieldCheck,
  Clock,
  Users,
  CalendarDays,
  FileText,
  Zap,
  Snowflake,
  Server,
  Activity,
  Flame,
  ArrowRight,
} from 'lucide-react';

export const PAGE_SECTIONS = [
  { id: 'overview', label: 'Overview', inNav: true },
  { id: 'problem', label: 'Why Facilities Fail', inNav: true },
  { id: 'tiers', label: 'SLA Tiers', inNav: true },
  { id: 'coverage', label: 'What We Cover', inNav: true },
  { id: 'process', label: 'How We Work', inNav: true },
  { id: 'calculator', label: 'Cost Calculator', inNav: true },
  { id: 'results', label: 'Results', inNav: true },
  { id: 'faq', label: 'FAQ', inNav: true },
  { id: 'cta', label: 'Get Started', inNav: true },
] as const;

export const HERO_TILES = [
  { icon: Clock, label: '4-Hour Emergency Response', desc: 'On-site target for Enterprise tier' },
  { icon: Headphones, label: '24/7 NOC Monitoring', desc: 'Real-time escalation and triage' },
  { icon: ShieldCheck, label: 'Single SLA', desc: 'Across multi-vendor equipment' },
];

export const WHY_FACILITIES_FAIL = [
  {
    icon: Users,
    title: 'Vendor fragmentation',
    desc: 'Cooling, UPS, and rack vendors each blame the other when something fails. No single throat to choke means longer outages and higher recovery costs.',
  },
  {
    icon: CalendarDays,
    title: 'Calendar-based maintenance',
    desc: 'Preventive maintenance happens on a fixed schedule, not based on actual equipment condition. Hidden degradation is missed until it becomes a failure.',
  },
  {
    icon: FileText,
    title: 'No runbook continuity',
    desc: 'Knowledge walks out when the installer leaves. Your internal team is left guessing during the incident that matters most.',
  },
];

export const SLA_TIERS = [
  {
    name: 'Essential',
    tag: 'Remote First',
    color: '#4589ff',
    who: 'Small server rooms and remote branch sites',
    response: 'Next business day',
    includes: [
      'Remote diagnostics and telephone support',
      'Parts guidance and sourcing support',
      'Email-based ticket management',
      'Standard business-hours escalation',
    ],
  },
  {
    name: 'Professional',
    tag: 'Most Popular',
    color: '#0f62fe',
    who: 'Mid-size data centres and co-location facilities',
    response: '8-hour on-site target',
    includes: [
      'Planned preventive maintenance visits',
      'Monitoring integration and threshold tuning',
      'Firmware and patch management',
      'Priority spare parts allocation',
    ],
  },
  {
    name: 'Enterprise',
    tag: 'Mission Critical',
    color: '#009d9a',
    who: 'Tier-III/IV facilities, telco, banking and manufacturing',
    response: '4-hour emergency response',
    includes: [
      '24/7 NOC monitoring and escalation',
      'Resident engineer option',
      'SLA-backed uptime commitments',
      'Local spare parts holding',
    ],
  },
];

export const SLA_MATRIX = [
  {
    area: 'Cooling & Airflow',
    criticality: 'High',
    essential: 'Remote triage; next-business-day dispatch for non-critical faults',
    professional: '8-hour on-site target; seasonal priority scheduling',
    enterprise: '4-hour emergency response; resident engineer option; spare coil/blower holding',
  },
  {
    area: 'Power & UPS',
    criticality: 'High',
    essential: 'Remote diagnostics; next-business-day parts guidance',
    professional: '8-hour on-site target; scheduled PM and battery checks',
    enterprise: '4-hour emergency response; local battery/capacitor stock; bypass support',
  },
  {
    area: 'Racks & Physical',
    criticality: 'Medium',
    essential: 'Remote guidance; scheduled on-site visit (5-day lead time)',
    professional: 'Next-business-day on-site; cabinet/PDU swap support',
    enterprise: '8-hour on-site target; priority containment and cable remediation',
  },
  {
    area: 'Monitoring',
    criticality: 'Medium',
    essential: 'Business-hours remote support; threshold review on request',
    professional: 'Extended-hours remote support; monthly health review',
    enterprise: '24/7 NOC monitoring; real-time escalation and sensor calibration',
  },
  {
    area: 'Fire & Safety Coordination',
    criticality: 'Compliance',
    essential: 'Annual inspection coordination; documentation support',
    professional: 'Bi-annual inspections; compliance reporting and partner escalation',
    enterprise: 'Quarterly inspections; dedicated compliance calendar; emergency coordination',
  },
  {
    area: 'Migration & Relocation',
    criticality: 'Project',
    essential: 'Remote planning support; standard-hours standby',
    professional: 'On-site cutover support; weekend/out-of-hours scheduling',
    enterprise: 'Dedicated migration team; 24/7 standby; rollback-ready spares',
  },
];

export const COVERAGE_AREAS = [
  {
    icon: Snowflake,
    title: 'Cooling & Airflow',
    items: ['CRAC/CRAH service', 'Refrigerant and pressure checks', 'Filter replacement', 'Thermal validation reports'],
  },
  {
    icon: Zap,
    title: 'Power & UPS',
    items: ['Battery impedance testing', 'Capacitor and fan replacement', 'Load-bank testing', 'Static and maintenance bypass checks'],
  },
  {
    icon: Server,
    title: 'Racks & Physical',
    items: ['Cabinet levelling and bracing', 'PDU swap and circuit checks', 'Cable management audits', 'Containment integrity checks'],
  },
  {
    icon: Activity,
    title: 'Monitoring',
    items: ['Sensor calibration', 'Threshold tuning', 'False-positive reduction', 'Dashboard health reviews'],
  },
  {
    icon: Flame,
    title: 'Fire & Safety Coordination',
    items: ['Suppression system inspection coordination', 'Safety system status checks', 'Partner-escalation workflow', 'Compliance documentation'],
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Baseline & Register', desc: 'Asset inventory, warranty status, criticality mapping, and documentation audit.' },
  { step: '02', title: 'Plan & Schedule', desc: 'Condition-based PM calendar aligned to manufacturer SOPs and your operational windows.' },
  { step: '03', title: 'Execute & Document', desc: 'Visit reports with photos, measurements, findings, and sign-off — every time.' },
  { step: '04', title: 'Monitor & Improve', desc: 'NOC integration, trend analysis, and failure prediction to drive down risk.' },
];

export const TRUST_ITEMS = [
  'Huawei Enterprise Certified Partner parts access',
  'Pakistan grid reality built into PM procedures',
  'Spare parts holding in Karachi, Lahore and Islamabad',
  'Engineers certified for APC, Eaton, Vertiv, Huawei and Schneider',
  'CMMS-backed asset history and audit trail',
];

export const RESULTS = [
  {
    stat: '67%',
    label: 'Cooling-related outages reduced',
    desc: 'Telecom operator over 12 months after moving from break-fix to proactive maintenance.',
  },
  {
    stat: '0',
    label: 'Unplanned UPS failures',
    desc: 'Bank caught battery degradation during scheduled PM and replaced cells before failure.',
  },
  {
    stat: '4 → 1',
    label: 'Vendor contracts consolidated',
    desc: 'Manufacturer replaced four separate maintenance contracts with a single Perception IT SLA.',
  },
];

export const FAQS = [
  {
    q: 'Do you only support equipment you installed?',
    a: 'No. We take over maintenance for existing multi-vendor environments, including cooling, UPS, racks and monitoring systems installed by other integrators.',
  },
  {
    q: 'What happens outside business hours?',
    a: 'Professional and Enterprise tiers include out-of-hours escalation. Enterprise includes 24/7 NOC monitoring with a 4-hour emergency on-site response target.',
  },
  {
    q: 'Can you take over an existing maintenance contract?',
    a: 'Yes. We run transition workshops, asset verification, and handover from incumbent vendors without service gaps.',
  },
  {
    q: 'How does this relate to your Server Continuity suite?',
    a: 'Maintenance & Support covers the facility layer — power, cooling and physical environment — while Server Continuity covers the compute layer. Together they form a single accountability chain.',
  },
];

export const ECOSYSTEM_LINKS = [
  { icon: Snowflake, title: 'Cooling & Airflow', desc: 'Precision thermal management and managed cooling services.', href: '/#/infrastructure/data-centre-services/cooling' },
  { icon: Zap, title: 'Power & UPS', desc: 'UPS, PDU and busbar power with SLA-backed support.', href: '/#/infrastructure/data-centre-services/power-ups' },
  { icon: Server, title: 'Rack & Cabinet', desc: 'Server cabinets, enclosures and physical infrastructure.', href: '/#/infrastructure/data-centre-services/rack-cabinets' },
  { icon: Activity, title: 'Monitoring', desc: 'Environmental sensors and NOC visibility.', href: '/#/infrastructure/data-centre-services/monitoring' },
  { icon: ArrowRight, title: 'Migration & Relocation', desc: 'Zero-downtime moves and facility transitions.', href: '/#/infrastructure/data-centre-services/migration-relocation' },
];

export const CONTACT_EMAIL_BODY = encodeURIComponent(
  'Hi Perception IT Team,\n\nI would like to request a maintenance and support assessment for our data centre environment. Please find our initial details below.\n\n- Company name:\n- Site location(s):\n- Facility type (server room / data centre / co-location):\n- Approximate rack count:\n- Current equipment brands (UPS / cooling / racks):\n- Current pain points or recent incidents:\n- Preferred SLA tier (Essential / Professional / Enterprise):\n- Preferred contact number and email:\n\nPlease contact me to arrange a technical consultation.\n\nBest regards,'
);
