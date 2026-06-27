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
  { id: 'featured-products', label: 'Featured Product', inNav: true },
  { id: 'calculator', label: 'Calculator', inNav: true },
  { id: 'usecases', label: 'Use Cases', inNav: true },
  { id: 'technologies', label: 'Technologies', inNav: true },
  { id: 'ai-design', label: 'AI Design', inNav: true },
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
    desc: [
      'Shield single-phase loads from micro-outages and voltage sags',
      'Prevent data corruption and premature hardware stress',
      'Entry-level protection for offices and edge racks',
    ],
    specs: ['1 to 10kVA', 'AVR stabilization', 'Online / Line Interactive options'],
    links: ['ServerAudit', 'ServerExtend'],
    icon: Zap,
  },
  {
    title: 'Three Phase UPS',
    tag: 'Enterprise',
    color: '#1565c0',
    desc: [
      'Enterprise-grade resilience for 3-phase infrastructure',
      'N+1 redundancy with hot-swappable modules',
      'Tolerates severe grid fluctuation and generator sync failures',
    ],
    specs: ['10 to 800kVA', 'Up to 96% efficiency', 'Generator sync ready'],
    links: ['Data Centre Design and Build', 'SLA backed contracts'],
    icon: BatteryCharging,
  },
  {
    title: 'Modular UPS',
    tag: 'Scalable',
    color: '#a855f7',
    desc: [
      'Scale capacity incrementally without over-provisioning CapEx',
      'Maintain N+1 fault tolerance as you grow',
      'Hot-swap modules during business hours',
    ],
    specs: ['Parallel redundancy', 'Scales to multi-megawatt', 'Phased expansion'],
    links: ['ModServe', 'Commercial Model Template'],
    icon: Server,
  },
  {
    title: 'Rackmount UPS',
    tag: 'Edge',
    color: '#009d9a',
    desc: [
      'Eliminate downtime at edge and remote sites',
      'Manage power remotely without truck rolls',
      'Fit into space-constrained racks and closets',
    ],
    specs: ['1U to 3U form factors', '10 to 50kVA', 'SNMP/Modbus', 'Generator sync ready'],
    links: ['Network Operations', 'Rack and Cabinet'],
    icon: HardDrive,
  },
  {
    title: 'UPS Sizes',
    tag: 'Right Sized',
    color: '#f97316',
    desc: [
      'Right-size protection to your actual load profile',
      'Avoid wasted CapEx on over-provisioned systems',
      'Plan growth with load-validated sizing',
    ],
    specs: ['1kVA to 800kVA+', 'Load audit included', 'Runtime modelling', 'Growth forecasting'],
    links: ['ServerAudit', 'Migration and Relocation'],
    icon: Gauge,
  },
  {
    title: 'UPS Accessories',
    tag: 'Extend',
    color: '#6f6f6f',
    desc: [
      'Extend runtime for prolonged grid outages',
      'Service UPS without shutting down critical loads',
      'Add remote monitoring and predictive alerting',
    ],
    specs: ['External battery strings', 'Maintenance bypass', 'Isolation transformers', 'SNMP cards'],
    links: ['Maintenance and Support', 'Monitoring'],
    icon: Cable,
  },
];

export const USE_CASES = [
  {
    title: 'Server Rooms',
    tag: 'Small Scale',
    color: '#6f6f6f',
    desc: [
      'Prevent thermal + power cascade failures in dense server closets',
      'Coordinated UPS, cooling, and monitoring under one managed service',
    ],
    bestFor: 'Small offices, branch server closets, and edge network racks.',
    deliverables: [
      { label: 'UPS Range', body: '5–20kVA integrated units with AVR' },
      { label: 'Power Distribution', body: 'Basic PDU with overload protection' },
      { label: 'Monitoring', body: 'Environmental probes + remote NOC visibility' },
      { label: 'Runtime Matching', body: 'Cooling failover correlation validated' },
    ],
    icon: Server,
  },
  {
    title: 'Data Centres',
    tag: 'Enterprise',
    color: '#1565c0',
    desc: 'Tier-aligned power architecture with 2N redundancy, intelligent load shedding, and grid islanding capability.',
    bestFor: 'Enterprise data centres, colocation facilities, and mission-critical infrastructure.',
    deliverables: [
      { label: 'UPS Range', body: '100–800kVA three-phase with N+1 redundancy' },
      { label: 'Battery Technology', body: 'SmartLi or VRLA with AI health forecasting' },
      { label: 'Power Intelligence', body: 'Intelligent PDU with per-outlet metering' },
      { label: 'Commissioning', body: '99.95% SLA-backed with grid-sync validation' },
    ],
    icon: Building,
  },
  {
    title: 'Edge Computing',
    tag: 'Distributed',
    color: '#a855f7',
    desc: 'Ruggedized power for distributed edge sites. Auto-recovery, low maintenance, and cellular monitoring for unmanned locations.',
    bestFor: 'Remote edge sites, retail chains, and distributed IoT hubs.',
    deliverables: [
      { label: 'UPS Range', body: 'Compact 10–50kVA rackmount units' },
      { label: 'Connectivity', body: 'Cellular monitoring with remote reboot' },
      { label: 'Predictive Health', body: 'AI battery forecasting and automated escalation' },
      { label: 'Environmental', body: 'Dust-rated enclosures and wide temp tolerance' },
    ],
    icon: Radio,
  },
  {
    title: 'Network Servers',
    tag: 'Core Infrastructure',
    color: '#009d9a',
    desc: 'Protect network integrity with SNMP trap integration, graceful shutdown sequencing, and extended outage resilience.',
    bestFor: 'Core network rooms, ISP facilities, and telecom infrastructure.',
    deliverables: [
      { label: 'Management', body: 'SNMP-managed UPS with trap integration' },
      { label: 'Automation', body: 'Auto shutdown scripts for graceful sequencing' },
      { label: 'Correlation', body: 'Sync with network monitoring tools (Netcool, SolarWinds)' },
      { label: 'Resilience', body: 'Extended runtime with generator sync validation' },
    ],
    icon: Wifi,
  },
  {
    title: 'Small Offices',
    tag: 'Entry',
    color: '#f97316',
    desc: 'Plug-and-play protection for small offices. Affordable, quiet operation with remote management option.',
    bestFor: 'Small offices, home offices, and basic workstation protection.',
    deliverables: [
      { label: 'UPS Range', body: '1–10kVA entry-level with AVR stabilization' },
      { label: 'Compliance', body: 'SBP-compliant power for regulated sectors' },
      { label: 'Remote Mgmt', body: 'Optional SNMP card for central visibility' },
      { label: 'Support', body: 'Business-hours support with local spares' },
    ],
    icon: Monitor,
  },
  {
    title: 'Industrial',
    tag: 'Harsh Environment',
    color: '#6f6f6f',
    desc: 'Harsh environment resilience with wide input voltage range, dust and heat tolerance, and generator synchronization.',
    bestFor: 'Manufacturing floors, textile mills, and FMCG production facilities.',
    deliverables: [
      { label: 'UPS Spec', body: 'Industrial-grade with IP rating and sealed enclosures' },
      { label: 'Temp Range', body: 'Extended -10°C to 50°C ambient operation' },
      { label: 'Generator Sync', body: 'Auto-transfer and synchronization logic' },
      { label: 'Load Shedding', body: 'Intelligent priority-based load shedding' },
    ],
    icon: Factory,
  },
];

export const TECHNOLOGIES = [
  {
    title: 'Online (Double-Conversion)',
    icon: 'ShieldCheck',
    desc: 'Zero transfer time · Ideal for sensitive servers, storage, and network core · Milliseconds matter',
    specs: ['True online topology', '<1ms transfer time', '96% efficiency', 'IEC 62040-3 certified'],
    links: ['ServerExtend', 'Data Centres', 'SLA backed contracts'],
    bestFor: 'Mission-critical servers · Storage arrays · Medical equipment',
  },
  {
    title: 'Line Interactive',
    icon: 'Activity',
    desc: 'Cost-effective voltage regulation · AVR stabilizes without battery drain · Ideal for non-critical loads',
    specs: ['AVR stabilization', '2 to 4ms transfer time', 'Suitable for grid fluctuation environments', 'Lower TCO'],
    links: ['ServerAudit', 'Small Offices', 'Commercial Model Template'],
    bestFor: 'Workstations · Network gear · Non-critical IT in stable-ish grids',
  },
  {
    title: 'Standby / Off-Line',
    icon: 'Power',
    desc: 'Entry-level protection for workstations · Surge suppression · Short backup with clear upgrade path',
    specs: ['Basic surge protection', '8 to 12ms transfer time', '5 to 15min runtime', 'Cost optimised'],
    links: ['ServerSure', 'ServerAudit', 'Maintenance and Support'],
    bestFor: 'Individual workstations · Home offices · Basic peripherals',
  },
  {
    title: 'Lithium-ion Batteries',
    icon: 'Zap',
    desc: 'Longer lifespan · Smaller footprint · Faster recharge · Reduce TCO and floor space vs legacy VRLA',
    specs: ['15 year design life', '1.5x energy density vs. VRLA', '30% smaller footprint', 'Cloud based health analytics'],
    links: ['Commercial Model Template', 'Maintenance and Support', 'Smart Power Monitoring'],
    bestFor: 'Space-constrained data centres · Long runtime requirements · High-cycle environments',
  },
  {
    title: 'Extended Backup',
    icon: 'Timer',
    desc: 'Runtime scaling for prolonged outages · External battery strings · Generator sync · Intelligent load shedding',
    specs: ['External battery expansion', 'Generator auto transfer', 'Load shedding profiles', 'Runtime modelling included'],
    links: ['Generators', 'SLA backed contracts', 'Migration and Relocation'],
    bestFor: 'Extended load-shedding regions · Generator-backed sites · Critical 24/7 operations',
  },
];

export const POWER_DISTRIBUTION = [
  {
    title: 'Basic PDU',
    tag: 'Entry',
    color: '#6f6f6f',
    desc: 'Reliable power distribution for standard racks · Circuit breakers · Surge protection · Straightforward cable management',
    specs: ['10A to 32A', 'IEC/C13 outlets', 'Horizontal/Vertical mount', 'Surge protection'],
    icon: Cable,
  },
  {
    title: 'Metered PDU',
    tag: 'Monitor',
    color: '#1565c0',
    desc: 'Real-time load monitoring at rack level · Prevent overloads before they trip breakers · Stop cascade failures',
    specs: ['Digital load display', 'Per phase monitoring', 'Overload alerts', 'SNMP integration'],
    icon: Gauge,
  },
  {
    title: 'Switched PDU',
    tag: 'Control',
    color: '#009d9a',
    desc: 'Remote outlet control · Reboot stuck servers · Power cycle network gear · Schedule sequences from the NOC',
    specs: ['Individual outlet switching', 'Remote reboot', 'Power sequencing', 'Environmental sensor ports'],
    icon: Activity,
  },
  {
    title: 'Intelligent PDU',
    tag: 'AI Ready',
    color: '#a855f7',
    desc: 'Full power intelligence · Outlet-level metering · Environmental correlation · AI-driven anomaly detection',
    specs: ['Per outlet metering', 'Temperature/humidity ports', 'AI anomaly detection', 'API integration'],
    icon: Shield,
  },
  {
    title: 'Busbar Power',
    tag: 'HPC',
    color: '#f97316',
    desc: 'High-density power delivery for HPC and AI · Eliminate cable clutter · Enable hot-add capacity',
    specs: ['100A to 800A', 'Tap off box hot add', 'Copper/aluminium bus', 'Overhead/under floor'],
    icon: Zap,
  },
  {
    title: 'Smart Power Monitoring',
    tag: 'Analytics',
    color: '#0f62fe',
    desc: 'Cloud-based power analytics · Trend analysis · Cost allocation · Predictive maintenance across all sites',
    specs: ['Real time dashboards', 'Cost per kWh tracking', 'Predictive alerts', 'Multi site aggregation'],
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
      { label: 'Battery Monitoring', desc: 'AI health forecasting for VRLA/Li ion' },
      { label: 'Power Monitors + Branch Circuits', desc: 'Circuit level load + cost allocation' },
      { label: 'Generators Monitoring', desc: 'Fuel level, auto start status, runtime tracking' },
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
      'Business hours support',
      'Quarterly health reports',
      'Email alerts',
    ],
    excluded: ['On site SLA', 'Emergency response', 'Predictive maintenance'],
    color: '#6f6f6f',
  },
  {
    name: 'Standard',
    uptime: '99.9%',
    response: '2 hours',
    price: 'From PKR 95K/mo',
    features: [
      '24/7 remote monitoring',
      'Extended hours support',
      'Monthly health reports',
      'SMS and email alerts',
      'On site within 4hrs',
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
      'Real time dashboard',
      'Instant alerts',
      'On site within 2hrs',
      'Predictive maintenance',
      'Quarterly business reviews',
    ],
    excluded: [],
    color: '#0f62fe',
    recommended: true,
  },
];

export const ECOSYSTEM_ITEMS = [
  { icon: Activity, title: 'Cooling and Airflow', desc: 'Thermal management · Synchronized with power load · Prevents thermal runaway', link: '/infrastructure/data-centre-services/cooling' },
  { icon: HardDrive, title: 'Rack and Cabinet', desc: 'Airflow containment · Blanking panels · Cable management', link: '/infrastructure/data-centre-services/rack-cabinet' },
  { icon: Monitor, title: 'Monitoring', desc: 'Rack-level temperature · Humidity monitoring · Leak detection', link: '/infrastructure/data-centre-services/monitoring' },
  { icon: Shield, title: 'Fire Suppression', desc: 'FM200 / clean agent protection · Power isolation logic · Automatic suppression', link: '/infrastructure/data-centre-services/fire-suppression' },
];

export const FAQ_ITEMS = [
  { q: 'How do I choose between Online, Line-Interactive, and Standby UPS?', a: ['Online (double-conversion) is for mission-critical loads where even micro-outages cause data loss', 'Line-Interactive adds AVR for grid-fluctuation environments like Pakistan — ideal for most business servers', 'Standby is entry-level for workstations', 'We assess your load criticality, grid stability, and budget to recommend the right topology'] },
  { q: 'What is the typical lifespan of a UPS battery?', a: ['VRLA batteries last 3–5 years under normal conditions', 'Li-ion batteries last 10–15 years with 1.5x energy density and 30% smaller footprint', 'AI battery monitoring predicts failure 30–60 days in advance'] },
  { q: 'Can you replace my UPS without downtime?', a: ['Maintenance bypass switches and temporary parallel systems for seamless cutover', 'Phased migration protocols to eliminate downtime', 'Temporary UPS deployed during migration for critical environments', '72-hour grid-fluctuation simulation before every handover'] },
  { q: 'Do you support generator synchronization?', a: ['Auto-transfer switches and generator sync logic on all three-phase and modular UPS', 'Every deployment tested against simulated grid failures', 'Seamless generator handoff validated before go-live'] },

  { q: 'Is lithium-ion safe for Pakistani temperatures?', a: ['Li-ion chemistries rated for 35°C+ ambient with built-in thermal management', 'Temperature monitoring and automatic load-shedding if thresholds are exceeded', 'All deployments are SBP and PTA compliant'] },
];

export const POWER_CASES = [
  {
    title: 'Voltage Spike Elimination for Textile Manufacturer',
    sector: 'Manufacturing and Textile',
    org: 'Leading Textile Manufacturer',
    desc: 'Recurring voltage spikes during grid switching were causing server reboots and data corruption. Perception IT deployed a three phase online UPS with AVR and generator sync, eliminating all power related incidents.',
    outcomes: [
      'Zero power related outages post deployment',
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
    sector: 'Banking and Financial Services',
    org: 'Leading Pakistani Bank',
    desc: 'Data centre power capacity was at 85% with no room for expansion. Perception IT installed a modular UPS architecture allowing incremental scaling without downtime, future proofing the power infrastructure.',
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
    title: 'Li ion Battery Upgrade for Edge Network',
    sector: 'Telecommunications',
    org: 'National Telecom Provider',
    desc: 'Legacy VRLA batteries were failing every 2 to 3 years in edge cabinets across Pakistan. Perception IT upgraded to lithium ion with AI health monitoring, reducing battery replacements and extending runtime.',
    outcomes: [
      'Battery life extended from 3 to 12+ years',
      '30% reduction in battery floor space',
      'AI predictions prevented 4 premature failures',
      'PKR 2.1M saved in replacement costs',
    ],
    tags: ['Li ion Batteries', 'AI Monitoring', 'Edge Computing'],
    link: '/case-studies/edge-thermal-management',
  },
  {
    title: 'Industrial Power Hardening for FMCG Factory',
    sector: 'FMCG and Manufacturing',
    org: 'Confectionery and Bakery Manufacturing',
    desc: 'Factory floor equipment was failing due to wide voltage swings and dust ingress. Perception IT deployed industrial grade UPS with extended temperature range and sealed enclosures.',
    outcomes: [
      'Voltage tolerance: -30% to +25% input range',
      'Equipment failures reduced by 78%',
      'Dust proof IP54 rating achieved',
      'Generator auto transfer under 2 seconds',
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
    org: 'Multi Site Retail Chain',
    bg: 'from-[#002d9c] to-[#0043ce]',
  },
];
