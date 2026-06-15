import {
  Thermometer,
  Droplets,
  Waves,
  Zap,
  Wind,
  Lock,
  Flame,
  BarChart3,
  Server,
  Building2,
  Mail,
  MessageSquare,
  Phone,
  Globe,
  Bell,
  Smartphone,
  FileText,
  HardHat,
  Settings,
  GraduationCap,
  Headphones,
  Cloud,
  Cpu,
  ShieldCheck,
  Coins,
  Menu,
} from 'lucide-react';

export const PAGE_SECTIONS = [
  { id: 'environments', label: 'Environments', inNav: true },
  { id: 'what', label: 'What We Monitor', inNav: true },
  { id: 'how', label: 'How It Works', inNav: true },
  { id: 'alerts', label: 'Alerts', inNav: true },
  { id: 'software', label: 'Software', inNav: true },
  { id: 'services', label: 'Services', inNav: true },
  { id: 'related', label: 'Related', inNav: true },
  { id: 'cta', label: 'Get Started', inNav: true },
] as const;

export const ENVIRONMENTS = [
  {
    icon: Server,
    color: '#4589ff',
    tag: 'Server Room',
    title: 'Server Room Monitoring',
    subtitle: 'Right-Sized Protection for Growing IT Environments',
    qualifier: 'Single-site, essential protection',
    builtFor: 'SMBs, branch offices, and overloaded IT teams managing 1–20 racks',
    riskHeading: 'The Risk You\'re Mitigating',
    riskDesc: [
      'Undetected AC failure, power fluctuation or water leak can destroy equipment',
      'Failures can trigger days of downtime before anyone realises',
      'Problems often happen outside business hours when no one is on-site',
    ],
    whatYouGet: [
      'Continuous temperature, humidity, and water-leak monitoring',
      'Instant alerts via email, SMS, and phone call',
      '24/7 remote monitoring via cloud dashboard or on-premises software',
      'Fixed-price deployment with 8-week go-live commitment',
      'UK-governed support with 24/7 NOC coverage',
    ],
    outcome: [
      'Eliminate after-hours emergency callouts',
      'Protect hardware warranties',
      'Convert unplanned CapEx into predictable monthly OpEx',
    ],
  },
  {
    icon: Globe,
    color: '#009d9a',
    tag: 'Edge & Mid-Market',
    title: 'Edge & Mid-Market Data Centre Monitoring',
    subtitle: 'Scalable Intelligence for Distributed Infrastructure',
    qualifier: 'Multi-site, scalable intelligence',
    builtFor: 'Regional colocation, edge deployments, and growing enterprises managing 20–50 racks across multiple sites',
    riskHeading: 'The Risk You\'re Mitigating',
    riskDesc: [
      'Outgrown basic server room monitoring but not ready for enterprise DCIM overhead',
      'Unstaffed edge sites create blind spots with no local oversight',
      'Multi-site environments lack unified visibility',
      'One remote failure can cascade into customer SLA breaches and revenue loss',
    ],
    whatYouGet: [
      'Scalable monitoring platform with multi-site dashboard',
      'Edge-optimized sensors for unstaffed locations (GSM/LTE, battery backup)',
      'Mid-tier DCIM: asset tracking, capacity alerts, basic thermal mapping',
      'Unified visibility across all sites from a single pane of glass',
      'Integration with ServiceNow, SNMP-based NMS, and ticketing systems',
      'Compliance-ready reporting (ISO 27001, SBP-aligned, SOC 2 preparation)',
      'Fixed-price deployment with 6-week go-live commitment',
      '99.95% uptime SLA with 24/7 NOC and remote hands coordination',
    ],
    outcome: [
      'Achieve unified multi-site visibility without enterprise overhead',
      'Defer hardware refresh through predictive alerts',
      'Scale from 20 to 50+ racks without re-architecture',
    ],
  },
  {
    icon: Building2,
    color: '#0f62fe',
    tag: 'Data Centre & DCIM',
    title: 'Data Centre Monitoring & DCIM',
    subtitle: 'Enterprise-Grade Intelligence for Mission-Critical Facilities',
    qualifier: 'Enterprise, full DCIM platform',
    builtFor: 'Enterprise IT, colocation providers, and facilities teams operating 50+ racks across single or multi-site environments',
    riskHeading: 'The Risk You\'re Mitigating',
    riskDesc: [
      'Silent capacity exhaustion goes unnoticed until it becomes critical',
      'Undetected cooling inefficiencies drive up PUE and energy costs',
      'Compliance gaps jeopardise Tier certification and client SLAs',
    ],
    whatYouGet: [
      'Full DCIM platform: thermal mapping, capacity forecasting, asset lifecycle tracking',
      'End-to-end power chain monitoring (utility → UPS → PDU → rack)',
      'Integration with ServiceNow, BMS, and SNMP-based NMS',
      'Automated compliance reporting (ISO 27001, Tier III/IV, SBP-aligned)',
      '99.95% uptime SLA with certified consultants and 24/7 NOC',
    ],
    outcome: [
      'Reduce PUE by 15–25%',
      'Defer capital refresh through predictive failure analysis',
      'Maintain continuous audit readiness',
    ],
  },
];

export const COMPARISON_TIERS = [
  { segment: 'Server Room', racks: '1–20', complexity: 'Basic environmental', goLive: '8 weeks' },
  { segment: 'Edge & Mid-Market', racks: '20–50', complexity: 'Multi-site, mid-tier DCIM', goLive: '6 weeks' },
  { segment: 'Data Centre', racks: '50+', complexity: 'Full DCIM, AI/ML analytics', goLive: '12 weeks' },
];

export const MONITORED_FACTORS = [
  { icon: Thermometer, title: 'Temperature', items: ['Rack inlet/outlet temperatures', 'Hot spot detection', 'Ambient room temperature', 'High/low threshold alerts'] },
  { icon: Droplets, title: 'Humidity', items: ['Moisture levels in air', 'Condensation prevention', 'Static discharge protection', 'Combined temp/humidity sensors'] },
  { icon: Waves, title: 'Water Leakage', items: ['Spot detectors under AC units', 'Water detection rope perimeters', 'Flood sensors', 'Immediate leak alerts'] },
  { icon: Zap, title: 'Power', items: ['Mains power monitoring', 'UPS battery health', 'Power consumption (Amps/kW)', 'PDU monitoring'] },
  { icon: Wind, title: 'Airflow', items: ['Cooling efficiency', 'Ventilation issues', 'Fan failures', 'Hot/cold aisle containment'] },
  { icon: Lock, title: 'Security', items: ['Door and rack access control', 'Motion detection', 'Intrusion alerts', 'Video surveillance integration'] },
  { icon: Flame, title: 'Fire & Smoke', items: ['Smoke detectors', 'Early warning systems', 'Integration with fire suppression', 'Rapid escalation'] },
  { icon: BarChart3, title: 'Advanced Metrics', items: ['PUE tracking', 'Capacity planning', 'Thermal mapping', 'Asset tracking'] },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Sensor Deployment',
    desc: 'Environmental sensors, power meters and access controls are placed throughout the facility using hardwired or wireless options.',
  },
  {
    step: '02',
    title: 'Data Collection',
    desc: 'Sensors transmit data to monitoring gateways. Data is aggregated, processed in real time and stored for historical analysis.',
  },
  {
    step: '03',
    title: 'Alert Management',
    desc: 'Thresholds are configured per sensor. Instant alerts are triggered when limits are exceeded, with escalation procedures.',
  },
  {
    step: '04',
    title: 'Response & Resolution',
    desc: 'Teams access dashboards remotely, receive mobile notifications, and generate audit trails for compliance reporting.',
  },
];

export const ALERT_CHANNELS = [
  { icon: Mail, label: 'Email', desc: 'Detailed alerts with sensor data' },
  { icon: MessageSquare, label: 'SMS', desc: 'Text messages for critical issues' },
  { icon: Phone, label: 'Phone Calls', desc: 'Automated voice alerts' },
  { icon: Globe, label: 'Web Dashboard', desc: 'Real-time monitoring view' },
  { icon: Bell, label: 'SNMP Traps', desc: 'Integration with NMS' },
  { icon: Smartphone, label: 'Teams / Slack', desc: 'Collaboration platform alerts' },
  { icon: FileText, label: 'Reports', desc: 'Scheduled PDF and CSV reports' },
];

export const SOFTWARE_MODELS = [
  { icon: Server, title: 'On-Premises', desc: 'Local software installation with full data control, no internet dependency and custom integrations.' },
  { icon: Cloud, title: 'Cloud-Based', desc: 'SaaS platform accessible from anywhere, with automatic updates and scalable infrastructure.' },
  { icon: Cpu, title: 'Hybrid', desc: 'Local data collection with cloud dashboard — the best of both worlds with redundant monitoring.' },
];

export const SERVICE_OFFERINGS = [
  { icon: HardHat, title: 'Design & Consultation', desc: 'Site surveys, requirements analysis, solution architecture and ROI calculations.' },
  { icon: Settings, title: 'Installation & Commissioning', desc: 'Professional installation, sensor placement, system configuration and testing.' },
  { icon: ShieldCheck, title: 'Calibration & Maintenance', desc: 'Annual sensor calibration, preventive maintenance, firmware updates and performance optimisation.' },
  { icon: GraduationCap, title: 'Training & Support', desc: 'Staff training, documentation, 24/7 technical support and remote assistance.' },
  { icon: Headphones, title: 'Managed Services', desc: '24/7 monitoring service, alert response, monthly reporting and continuous optimisation.' },
];

export const RELATED_SOLUTIONS = [
  { icon: Server, title: 'Rack & Cabinet', desc: 'Server cabinets and enclosures with integrated monitoring options.', href: '/#/services/rack-cabinets' },
  { icon: Wind, title: 'Cooling & Airflow', desc: 'Optimise cooling efficiency with monitoring integration.', href: '/#/infrastructure/data-centre-services/cooling-airflow' },
  { icon: Zap, title: 'Power & UPS', desc: 'Reliable power with UPS monitoring and battery health tracking.', href: '/#/infrastructure/data-centre-services/power-ups' },
  { icon: Coins, title: 'Cost Optimisation', desc: 'Reduce energy costs through intelligent monitoring and analysis.', href: '/#/services/cost-optimisation' },
  { icon: Menu, title: 'Data Centre Services', desc: 'Complete range of data centre infrastructure solutions.', href: '/#/services/datacenter2' },
];

export const CONTACT_EMAIL_BODY = encodeURIComponent(
  'Hi Perception IT Team,\n\nI would like to discuss monitoring solutions for our environment. Please find the initial details below.\n\nPlease provide as much information as you can — you do not need to fill out every field completely. Even partial details are helpful to start the conversation.\n\n- Company name:\n\n- Contact name and role:\n\n- Site location(s):\n\n- Environment type (server room / data centre / edge / industrial):\n\n- Number of racks or square footage:\n\n- Current monitoring setup (if any):\n\n- Key concerns (temperature / humidity / water / power / security / fire):\n\n- Preferred deployment (on-premise / cloud / hybrid):\n\n- Notification channels required (email / SMS / phone / SNMP):\n\n- Compliance or audit requirements:\n\n- Planned deployment timeline:\n\nPlease contact me to arrange a consultation or site survey.\n\nBest regards,'
);
