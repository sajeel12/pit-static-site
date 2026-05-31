import {
  BatteryCharging,
  Zap,
  Server,
  Radio,
  Building,
  Factory,
  Shield,
  Activity,
  HardDrive,
  Cable,
  Monitor,
  Wifi,
  CloudLightning,
  Gauge,
} from 'lucide-react';

export const PAGE_SECTIONS = [
  { id: 'services', label: 'Services', inNav: false },
  { id: 'systems', label: 'UPS Systems', inNav: true },
  { id: 'calculator', label: 'Calculator', inNav: true },
  { id: 'usecases', label: 'Use Cases', inNav: true },
  { id: 'technologies', label: 'Technologies', inNav: true },
  { id: 'distribution', label: 'Power Distribution', inNav: true },
  { id: 'monitoring', label: 'Monitoring', inNav: true },
  { id: 'sla', label: 'SLA Tiers', inNav: true },
  { id: 'ecosystem', label: 'Ecosystem', inNav: true },
  { id: 'testimonials', label: 'Testimonials', inNav: true },
  { id: 'results', label: 'Results', inNav: true },
  { id: 'faq', label: 'FAQ', inNav: true },
  { id: 'cta', label: 'Get Started', inNav: true },
] as const;

export const UPS_SYSTEMS = [
  {
    title: 'Single Phase',
    tag: 'Entry',
    color: '#6f6f6f',
    desc: 'Protect critical single-phase loads from micro-outages and voltage sags—preventing data corruption and hardware stress.',
    specs: ['1–10kVA', 'AVR stabilization', 'Online / Line-interactive options'],
    links: ['ServerAudit', 'ServerExtend'],
    icon: Zap,
  },
  {
    title: 'Three Phase UPS',
    tag: 'Enterprise',
    color: '#1565c0',
    desc: 'Enterprise-grade resilience for 3-phase infrastructure: N+1 redundancy, hot-swappable modules, and grid fluctuation tolerance.',
    specs: ['10–800kVA', '96% efficiency', 'IEC 62040-3 certified', 'N+1/N+X redundancy'],
    links: ['Data Centre Design & Build', 'SLA-backed contracts'],
    icon: BatteryCharging,
  },
  {
    title: 'Modular UPS',
    tag: 'Scalable',
    color: '#a855f7',
    desc: 'Scale power resilience incrementally—avoid over-provisioning CapEx while maintaining N+1 fault tolerance.',
    specs: ['Hot-swappable modules', 'Parallel redundancy', '1.2MW max scaling', 'Phased expansion'],
    links: ['ModServe', 'Commercial Model Template'],
    icon: Server,
  },
  {
    title: 'Rackmount UPS',
    tag: 'Edge',
    color: '#009d9a',
    desc: 'Space-optimized backup for edge and network racks: integrated SNMP, auto-shutdown, and remote management.',
    specs: ['1U–3U form factors', '10–50kVA', 'SNMP/Modbus', 'Generator sync ready'],
    links: ['Network Operations', 'Rack & Cabinet'],
    icon: HardDrive,
  },
  {
    title: 'UPS Sizes',
    tag: 'Right-Sized',
    color: '#f97316',
    desc: 'Right-sized resilience: avoid under-protection (risk) or over-provisioning (waste) with load-profiled sizing.',
    specs: ['1kVA–800kVA+', 'Load audit included', 'Runtime modeling', 'Growth forecasting'],
    links: ['ServerAudit', 'Migration & Relocation'],
    icon: Gauge,
  },
  {
    title: 'UPS Accessories',
    tag: 'Extend',
    color: '#6f6f6f',
    desc: 'Extend functionality: external battery packs, isolation transformers, maintenance bypass for safe servicing.',
    specs: ['External battery strings', 'Maintenance bypass', 'Isolation transformers', 'SNMP cards'],
    links: ['Maintenance & Support', 'Environmental Monitoring'],
    icon: Cable,
  },
];

export const USE_CASES = [
  {
    title: 'Server Rooms',
    desc: 'Prevent thermal + power cascade failures: coordinated UPS + cooling + monitoring for dense server closets.',
    implementation: 'Integrated UPS (5–20kVA) + basic PDU + environmental probes • Remote NOC monitoring • Runtime matched to cooling failover',
    links: ['Cooling & Airflow', 'ServerSure', 'Environmental Monitoring'],
    icon: Server,
  },
  {
    title: 'Data Centres',
    desc: 'Tier-aligned power architecture: 2N UPS, intelligent load shedding, and grid-islanding for mission-critical workloads.',
    implementation: 'UPS 100–800kVA + SmartLi batteries + intelligent PDU • CFD-validated design • 99.95% SLA-backed commissioning',
    links: ['Data Centre Design & Build', 'SLA-backed contracts', 'Migration & Relocation'],
    icon: Building,
  },
  {
    title: 'Edge Computing',
    desc: 'Ruggedized, remote-manageable power for distributed edge: auto-recovery, low-maintenance, cellular monitoring.',
    implementation: 'Compact UPS (10–50kVA) + cellular monitoring + remote reboot • Predictive battery health • Automated escalation',
    links: ['Network Operations', '24×7 SLA Support', 'Environmental Monitoring'],
    icon: Radio,
  },
  {
    title: 'Network Servers',
    desc: 'Protect network integrity: UPS with SNMP trap integration to trigger graceful shutdowns during extended outages.',
    implementation: 'SNMP-managed UPS • Auto-shutdown scripts • Correlation with network monitoring tools • Graceful failover sequencing',
    links: ['Network Monitoring', 'Cross-Domain Automation', 'ServerExtend'],
    icon: Wifi,
  },
  {
    title: 'Small Offices',
    desc: 'Plug-and-play protection: affordable, quiet, low-maintenance UPS for workstations and VoIP systems.',
    implementation: 'Entry-level UPS (1–10kVA) • AVR stabilization • SBP-compliant • Remote management option',
    links: ['ServerSure', 'ServerAudit', 'Maintenance & Support'],
    icon: Monitor,
  },
  {
    title: 'Industrial',
    desc: 'Harsh-environment resilience: wide input voltage range, dust/heat tolerance, and generator sync for factories.',
    implementation: 'Industrial-grade UPS • Extended temp range (-10°C to 50°C) • Generator synchronization • Load-shedding logic',
    links: ['Fire Suppression', 'Data Centre Design & Build', 'SLA-backed contracts'],
    icon: Factory,
  },
];

export const TECHNOLOGIES = [
  {
    title: 'Online (Double-Conversion)',
    desc: 'Zero-transfer-time protection: ideal for sensitive servers, storage, and network core where milliseconds matter.',
    specs: ['True online topology', '<1ms transfer time', '96% efficiency', 'IEC 62040-3 certified'],
    links: ['ServerExtend', 'Data Centres', 'SLA-backed contracts'],
    bestFor: 'Mission-critical servers, storage arrays, medical equipment',
  },
  {
    title: 'Line Interactive',
    desc: 'Cost-effective voltage regulation for non-critical loads: AVR stabilizes without battery drain.',
    specs: ['AVR stabilization', '2–4ms transfer time', 'Suitable for grid-fluctuation environments', 'Lower TCO'],
    links: ['ServerAudit', 'Small Offices', 'Commercial Model Template'],
    bestFor: 'Workstations, network gear, non-critical IT in stable-ish grids',
  },
  {
    title: 'Standby / Off-Line',
    desc: 'Entry-level protection for workstations and non-critical IT: surge suppression + short backup with clear upgrade path.',
    specs: ['Basic surge protection', '8–12ms transfer time', '5–15min runtime', 'Cost-optimized'],
    links: ['ServerSure', 'ServerAudit', 'Maintenance & Support'],
    bestFor: 'Individual workstations, home offices, basic peripherals',
  },
  {
    title: 'Lithium-ion Batteries',
    desc: 'Longer lifespan, smaller footprint, faster recharge: reduce TCO and floor space vs. legacy VRLA—with AI health forecasting.',
    specs: ['15-year design life', '1.5x energy density vs. VRLA', '30% smaller footprint', 'Cloud-based health analytics'],
    links: ['Commercial Model Template', 'Maintenance & Support', 'Smart Power Monitoring'],
    bestFor: 'Space-constrained data centres, long-runtime requirements, high-cycle environments',
  },
  {
    title: 'Extended Backup',
    desc: 'Runtime scaling for prolonged outages: external battery strings, generator sync, and intelligent load-shedding logic.',
    specs: ['External battery expansion', 'Generator auto-transfer', 'Load-shedding profiles', 'Runtime modeling included'],
    links: ['Generators', 'SLA-backed contracts', 'Migration & Relocation'],
    bestFor: 'Regions with extended load-shedding, generator-backed sites, critical 24/7 operations',
  },
];

export const POWER_DISTRIBUTION = [
  {
    title: 'Basic PDU',
    desc: 'Reliable power distribution for standard racks: circuit breakers, surge protection, and straightforward cable management.',
    specs: ['10A–32A', 'IEC/C13 outlets', 'Horizontal/Vertical mount', 'Surge protection'],
    icon: Cable,
  },
  {
    title: 'Metered PDU',
    desc: 'Real-time load monitoring at the rack level: prevent overloads before they trip breakers or cascade.',
    specs: ['Digital load display', 'Per-phase monitoring', 'Overload alerts', 'SNMP integration'],
    icon: Gauge,
  },
  {
    title: 'Switched PDU',
    desc: 'Remote outlet control: reboot stuck servers, power-cycle network gear, and schedule power sequences from the NOC.',
    specs: ['Individual outlet switching', 'Remote reboot', 'Power sequencing', 'Environmental sensor ports'],
    icon: Activity,
  },
  {
    title: 'Intelligent PDU',
    desc: 'Full power intelligence: outlet-level metering, environmental correlation, and AI-driven anomaly detection.',
    specs: ['Per-outlet metering', 'Temperature/humidity ports', 'AI anomaly detection', 'API integration'],
    icon: Shield,
  },
  {
    title: 'Busbar Power',
    desc: 'High-density power delivery for HPC and AI workloads: eliminate cable clutter and enable hot-add capacity.',
    specs: ['100A–800A', 'Tap-off box hot-add', 'Copper/aluminum bus', 'Overhead/under-floor'],
    icon: Zap,
  },
  {
    title: 'Smart Power Monitoring',
    desc: 'Cloud-based power analytics: trend analysis, cost allocation, and predictive maintenance across all sites.',
    specs: ['Real-time dashboards', 'Cost per kWh tracking', 'Predictive alerts', 'Multi-site aggregation'],
    icon: CloudLightning,
  },
];

export const MONITORING_TOOLS = [
  {
    category: 'Environmental & Safety',
    items: [
      { label: 'Temperature & Humidity', desc: 'Prevent thermal runaway' },
      { label: 'Water Leakage Detection', desc: 'Spot leaks before short circuits' },
      { label: 'Remote Cabinets', desc: 'Edge power resilience monitoring' },
    ],
  },
  {
    category: 'Power-Specific Intelligence',
    items: [
      { label: 'Battery Monitoring', desc: 'AI health forecasting for VRLA/Li-ion' },
      { label: 'Power Monitors + Branch Circuits', desc: 'Circuit-level load + cost allocation' },
      { label: 'Generators Monitoring', desc: 'Fuel level, auto-start status, runtime tracking' },
    ],
  },
];

export const SLA_TIERS = [
  {
    name: 'Basic',
    uptime: '99.5%',
    response: '4 hours',
    price: 'From PKR 45K/mo',
    features: [
      'Remote monitoring',
      'Business-hours support',
      'Quarterly health reports',
      'Email alerts',
    ],
    excluded: ['On-site SLA', 'Emergency response', 'Predictive maintenance'],
    color: '#6f6f6f',
  },
  {
    name: 'Standard',
    uptime: '99.9%',
    response: '2 hours',
    price: 'From PKR 95K/mo',
    features: [
      '24/7 remote monitoring',
      'Extended-hours support',
      'Monthly health reports',
      'SMS + email alerts',
      'On-site within 4hrs',
    ],
    excluded: ['Guaranteed uptime penalty', 'Dedicated engineer'],
    color: '#1565c0',
  },
  {
    name: 'Enterprise',
    uptime: '99.95%',
    response: '< 1 hour',
    price: 'Custom',
    features: [
      '24/7 NOC monitoring',
      '24/7 dedicated support',
      'Real-time dashboard',
      'Instant alerts',
      'On-site within 2hrs',
      'Predictive maintenance',
      'Quarterly business reviews',
    ],
    excluded: [],
    color: '#0f62fe',
    recommended: true,
  },
];

export const ECOSYSTEM_ITEMS = [
  { icon: Activity, title: 'Cooling & Airflow', desc: 'Thermal management synchronized with power load.', link: '/infrastructure/data-centre-services/cooling-thermal' },
  { icon: HardDrive, title: 'Rack & Cabinet', desc: 'Airflow containment, blanking panels, and cable management.', link: '/infrastructure/data-centre-services/rack-cabinet' },
  { icon: Monitor, title: 'Environmental Monitoring', desc: 'Rack-level temperature, humidity, and leak detection.', link: '/infrastructure/data-centre-services/environmental-monitoring' },
  { icon: Shield, title: 'Fire Suppression', desc: 'FM200/clean-agent protection with power-isolation logic.', link: '/infrastructure/data-centre-services/fire-suppression' },
];

export const FAQ_ITEMS = [
  { q: 'How do I choose between Online, Line-Interactive, and Standby UPS?', a: 'Online (double-conversion) is for mission-critical loads where even micro-outages cause data loss. Line-Interactive adds AVR for grid-fluctuation environments like Pakistan—ideal for most business servers. Standby is entry-level for workstations. We assess your load criticality, grid stability, and budget to recommend the right topology.' },
  { q: 'What is the typical lifespan of a UPS battery?', a: 'VRLA batteries last 3–5 years under normal conditions. Lithium-ion batteries last 10–15 years with 1.5x energy density and 30% smaller footprint. Our AI battery monitoring predicts failure 30–60 days in advance, so you never face an unexpected outage.' },
  { q: 'Can you replace my UPS without downtime?', a: 'Yes. We use maintenance bypass switches, temporary parallel systems, and phased cutover protocols. For critical environments, we deploy a temporary UPS during migration. Every cutover includes a 72-hour grid-fluctuation simulation before handover.' },
  { q: 'Do you support generator synchronization?', a: 'Absolutely. Our three-phase and modular UPS systems include auto-transfer switches and generator sync logic. We test every deployment against simulated grid failures to ensure seamless generator handoff.' },
  { q: 'What does the 99.95% SLA actually cover?', a: 'Enterprise SLA covers: 24/7 NOC monitoring, <1 hour response, <2 hour on-site (Lahore/Karachi/Islamabad), predictive maintenance, quarterly reviews, and uptime guarantee with service credits. We provide transparent reporting via a real-time dashboard.' },
  { q: 'Is lithium-ion safe for Pakistani temperatures?', a: 'Yes. We specify Li-ion chemistries rated for 35°C+ ambient with built-in thermal management. Our designs include temperature monitoring and automatic load-shedding if thresholds are exceeded. All deployments are SBP and PTA compliant.' },
];

export const POWER_CASES = [
  {
    title: 'Voltage Spike Elimination for Textile Manufacturer',
    sector: 'Manufacturing / Textile',
    org: 'Leading Textile Manufacturer',
    desc: 'Recurring voltage spikes during grid switching were causing server reboots and data corruption. Perception IT deployed a three-phase online UPS with AVR and generator sync, eliminating all power-related incidents.',
    outcomes: [
      'Zero power-related outages post-deployment',
      '99.95% uptime achieved',
      'Generator sync validated under 72hr simulation',
      'NOC dashboard visibility across all sites',
    ],
    tags: ['Three Phase UPS', 'AVR', 'Generator Sync'],
    link: '/projects/manufacturing-infrastructure',
    image: '/Sections/UPSandPower/UPS IMAGES/UPS case study images/UPS-lithium11600×700.webp',
  },
  {
    title: 'Modular UPS Expansion for Financial Services',
    sector: 'Banking / Financial Services',
    org: 'Leading Pakistani Bank',
    desc: 'Data centre power capacity was at 85% with no room for expansion. Perception IT installed a modular UPS architecture allowing incremental scaling without downtime, future-proofing the power infrastructure.',
    outcomes: [
      'Capacity scaled from 200kVA to 600kVA in phases',
      'Zero downtime during expansion',
      'PUE improved by 12%',
      'N+1 redundancy maintained throughout',
    ],
    tags: ['Modular UPS', 'Phased Expansion', 'N+1 Redundancy'],
    link: '/case-studies/multi-site-precision-cooling',
  },
  {
    title: 'Li-ion Battery Upgrade for Edge Network',
    sector: 'Telecommunications',
    org: 'National Telecom Provider',
    desc: 'Legacy VRLA batteries were failing every 2–3 years in edge cabinets across Pakistan. Perception IT upgraded to lithium-ion with AI health monitoring, reducing battery replacements and extending runtime.',
    outcomes: [
      'Battery life extended from 3 to 12+ years',
      '30% reduction in battery floor space',
      'AI predictions prevented 4 premature failures',
      'PKR 2.1M saved in replacement costs',
    ],
    tags: ['Li-ion Batteries', 'AI Monitoring', 'Edge Computing'],
    link: '/case-studies/edge-thermal-management',
  },
  {
    title: 'Industrial Power Hardening for FMCG Factory',
    sector: 'FMCG / Manufacturing',
    org: 'Confectionery & Bakery Manufacturing',
    desc: 'Factory floor equipment was failing due to wide voltage swings and dust ingress. Perception IT deployed industrial-grade UPS with extended temperature range and sealed enclosures.',
    outcomes: [
      'Voltage tolerance: -30% to +25% input range',
      'Equipment failures reduced by 78%',
      'Dust-proof IP54 rating achieved',
      'Generator auto-transfer under 2 seconds',
    ],
    tags: ['Industrial UPS', 'Generator Sync', 'Load Shedding'],
    link: '/case-studies/monsoon-season-resilience',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Before Perception IT, we lost a server rack every monsoon season to voltage spikes. Their three-phase UPS with AVR and generator sync eliminated outages entirely. The NOC dashboard gives us visibility we never had.",
    author: 'Head of IT Infrastructure',
    org: 'Leading Textile Manufacturer',
    bg: 'from-[#0043ce] to-[#002d9c]',
  },
  {
    quote: "We needed to upgrade our data centre power without downtime. Perception IT designed a modular UPS architecture that let us scale incrementally. Zero downtime during cutover, and our PUE dropped 12%.",
    author: 'Chief Technology Officer',
    org: 'Financial Services Firm',
    bg: 'from-[#0f62fe] to-[#0353e9]',
  },
  {
    quote: "The battery health forecasting is a game-changer. We used to replace batteries on a fixed schedule—wasting money on good cells and risking failures on marginal ones. Now we replace precisely when needed.",
    author: 'Director of Operations',
    org: 'Multi-Site Retail Chain',
    bg: 'from-[#002d9c] to-[#0043ce]',
  },
];
