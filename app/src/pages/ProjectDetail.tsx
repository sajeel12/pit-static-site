
import { 
  ArrowRight, ChevronRight, ChevronDown, ChevronUp, Phone, 
  Building, CheckmarkFilled, WarningAlt, CheckmarkOutline
} from '@carbon/icons-react';
import '../styles/carbon-typography.css';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import FeaturedTestimonial from '../components/FeaturedTestimonial';
import Footer from '../sections/Footer';

interface Project {
  id: string;
  title: string;
  track: 'services' | 'infrastructure' | 'platforms';
  serviceCategories: string[];
  category: string;
  industry: string;
  tags?: string[];
  outcome: string;
  techStack: string;
  description: string;
  slug: string;
  client?: string;
  clientName?: string;
  solutionName?: string;
  location?: string;
  scale?: string;
  aboutClient?: string;
  heroImage?: string;
  challenges?: { icon: string; title: string; desc: string }[];
  challenge?: string[]; // Legacy support
  solution?: string[];
  solutions?: { icon: string; title: string; desc: string }[];
  result?: string[];
  results?: { icon: string; title: string; desc: string }[];
  metrics?: { label: string; value: string }[];
  beforeAfter?: { metric: string; before: string; after: string }[];
  businessBenefits?: { benefit: string; how: string; context: string }[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  logo?: string;
  relatedServices?: { name: string; link: string }[];
  ctaSection?: {
    headline: string;
    subheadline: string;
    primaryCta: { text: string; link: string };
    secondaryCta: { text: string; link: string };
  };
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Large-Scale Operational Support Systems as a Managed Service',
    track: 'services',
    serviceCategories: ['monitoring', 'managed'],
    category: 'Monitoring & Observability',
    industry: 'telecom',
    outcome: 'sla-stability',
    techStack: 'Netcool, IBM',
    description: 'Delivered 24/7 operational visibility for mission-critical telecom infrastructure, enabling proactive incident detection and rapid response across distributed network operations.',
    slug: 'operational-support-managed-service',
    client: 'Major Asian Telecom Operator',
    challenge: [
      'Fragmented monitoring across 50+ network domains with no unified view',
      'Reactive incident management causing 4+ hour average response times',
      'Legacy tools unable to correlate events across infrastructure layers',
      'No proactive alerting-issues discovered through customer complaints',
    ],
    solution: [
      'Deployed IBM Netcool as centralized event management platform',
      'Implemented 24/7 NOC operations with follow-the-sun coverage model',
      'Built intelligent event correlation rules to reduce alert noise by 80%',
      'Created unified dashboards for real-time infrastructure visibility',
    ],
    result: [
      '99.9% uptime SLA achieved across monitored infrastructure',
      'MTTR reduced from 4 hours to under 30 minutes',
      'Proactive detection of 85% of issues before customer impact',
      'Unified view of 10,000+ network elements',
    ],
    metrics: [
      { label: 'Uptime SLA', value: '99.9%' },
      { label: 'MTTR', value: '<30min' },
      { label: 'Devices', value: '10,000+' },
      { label: 'Coverage', value: '24/7' },
    ],
    quote: {
      text: "Perception IT's managed service transformed our network operations. The proactive monitoring and rapid response capabilities have been game-changing for our infrastructure reliability.",
      author: 'Head of Network Operations',
      role: 'Major Asian Telecom Operator',
    },
  },
  {
    id: '1a',
    title: 'Telco Service Desk IT Process Migration to ServiceNow',
    track: 'platforms',
    serviceCategories: ['servicenow', 'service-desk'],
    category: 'ServiceNow',
    industry: 'telecommunications',
    outcome: 'digital-transformation',
    techStack: 'ServiceNow, Maximo, DB2, Cloud',
    description: 'A mature service desk implementation for one of Pakistan\'s largest Telco was modernised and migrated to the cloud via ServiceNow.',
    slug: 'telco-service-desk-it-process-migration-to-servicenow',
    client: 'Jazz (Pakistan)',
    clientName: 'Jazz',
    challenge: [
      'Outdated Maximo ticketing system had become a significant operational bottleneck',
      'Scaling to 24/7 follow-the-sun support was not possible on on-premises infrastructure',
      'Lack of real-time reporting and limited integration with existing tools',
      'Manual incident workflows and high MTTR risk for business-critical services',
    ],
    solution: [
      'Designed and executed phased migration from Maximo to ServiceNow with minimal user disruption',
      'Built custom ServiceNow workflows mirroring existing processes while enabling automation',
      'Integrated ServiceNow with existing IT ecosystem and data pipelines for continuity',
      'Implemented UAT + pre-production feedback loops to refine experience before production launch',
    ],
    result: [
      'ServiceNow platform availability achieved 99.95% SLA',
      'Ticket resolution time reduced by 52% through automation and workflow optimization',
      '24/7 follow-the-sun support model enabled with cloud-based access',
      'Operational costs reduced by removing on-premises Maximo hardware and licensing dependencies',
    ],
    metrics: [
      { label: 'Platform Availability', value: '99.95%' },
      { label: 'Resolution Time', value: '-52%' },
      { label: 'Support Coverage', value: '24/7' },
      { label: 'IT Burden Reduction', value: '40%' },
    ],
    quote: {
      text: "Perception IT's expertise in migrating our IBM Maximo ticketing system to ServiceNow was invaluable. Their smooth and meticulous approach ensured a seamless transition, eliminating the need for on-premises hardware and offering our team a robust cloud-based solution.",
      author: 'Usman Ikram',
      role: 'Manager, SQM & Automation Support, Jazz',
    },
    relatedServices: [
      { name: 'ServiceNow', link: '/services/servicenow' },
      { name: 'Service Desk', link: '/services/service-desk' },
      { name: 'Observability', link: '/services/observability' },
    ],
    ctaSection: {
      headline: 'Ready to migrate your service desk to ServiceNow?',
      subheadline: 'Let us plan your end-to-end transformation with minimal disruption and maximum ROI.',
      primaryCta: { text: 'Get a Free Consultation', link: '/contact' },
      secondaryCta: { text: 'See Platform Services', link: '/services/servicenow' },
    },
  },
  {
    id: '2',
    title: 'Elevating Financial Market Observability and Insight',
    track: 'services',
    serviceCategories: ['monitoring', 'security'],
    category: 'Monitoring & Observability',
    industry: 'banking',
    outcome: 'risk-mitigation',
    techStack: 'IBM, Netcool',
    description: 'Delivered comprehensive market surveillance and infrastructure monitoring, ensuring trading continuity and regulatory compliance for a regional stock exchange.',
    slug: 'financial-market-observability',
    client: 'Major Asian Stock Exchange',
    clientName: 'Major Asian Stock Exchange',
    challenge: [
      'Trading infrastructure required 99.99% availability during market hours',
      'Regulatory compliance demanded complete audit trails and reporting',
      'No real-time visibility into trading system performance',
      'Manual monitoring unable to keep pace with market volatility',
    ],
    solution: [
      'Implemented IBM Netcool for real-time trading infrastructure monitoring',
      'Built custom dashboards for market surveillance and compliance teams',
      'Deployed automated alerting with escalation to on-call engineers',
      'Created comprehensive audit logging for regulatory requirements',
    ],
    result: [
      'Zero unplanned downtime during trading hours',
      'Full regulatory compliance with automated reporting',
      'Sub-second detection of trading system anomalies',
      'Reduced mean time to detection by 90%',
    ],
    metrics: [
      { label: 'Trading Uptime', value: '99.99%' },
      { label: 'Detection Time', value: '<1sec' },
      { label: 'Compliance', value: '100%' },
      { label: 'Systems', value: '500+' },
    ],
  },
  {
    id: '3',
    title: 'Optimising Network Performance with Automated Cross-Domain Policies',
    track: 'services',
    serviceCategories: ['monitoring', 'cloud-infra'],
    category: 'Monitoring & Observability',
    industry: 'telecom',
    outcome: 'sla-stability',
    techStack: 'Netcool',
    description: 'Implemented intelligent correlation across network domains, reducing mean-time-to-resolution and enabling faster root cause analysis for complex multi-layer incidents.',
    slug: 'network-performance-optimisation',
    client: 'National Telecom Provider',
    challenge: [
      'Network incidents spanned multiple domains (radio, transport, core)',
      'Siloed teams unable to see end-to-end impact of issues',
      'Root cause analysis taking hours due to manual correlation',
      'Recurring issues with no pattern identification',
    ],
    solution: [
      'Deployed cross-domain event correlation in IBM Netcool',
      'Created topology-aware alerting that understands network dependencies',
      'Built automated root cause analysis workflows',
      'Implemented predictive analytics for recurring issues',
    ],
    result: [
      'MTTR reduced by 70% through automated correlation',
      'Cross-domain visibility eliminated siloed troubleshooting',
      'Predictive alerts prevented 60% of recurring issues',
      'Network availability improved to 99.95%',
    ],
    metrics: [
      { label: 'MTTR Reduction', value: '70%' },
      { label: 'Availability', value: '99.95%' },
      { label: 'Domains', value: '15+' },
      { label: 'Prevention', value: '60%' },
    ],
    quote: {
      text: "The cross-domain correlation Perception IT implemented has transformed how we handle network incidents. What used to take hours now takes minutes.",
      author: 'Director of Network Operations',
      role: 'National Telecom Provider',
    },
  },
  {
    id: '4',
    title: 'Delivering Enterprise Observability for Internet Services',
    track: 'services',
    serviceCategories: ['monitoring', 'managed'],
    category: 'Monitoring & Observability',
    industry: 'telecom',
    outcome: 'sla-stability',
    techStack: 'IBM, Netcool',
    description: 'Provided end-to-end visibility across ISP infrastructure, enabling proactive capacity planning and faster incident response for customer-facing services.',
    slug: 'enterprise-observability-isp',
    client: 'Regional Internet Service Provider',
    challenge: [
      'Rapid customer growth straining network capacity',
      'No visibility into customer experience metrics',
      'Reactive capacity planning causing service degradation',
      'Multiple monitoring tools with no unified view',
    ],
    solution: [
      'Implemented unified observability platform with IBM Netcool',
      'Built customer experience dashboards with real-time metrics',
      'Deployed proactive capacity monitoring and alerting',
      'Integrated multiple data sources into single pane of glass',
    ],
    result: [
      'Customer churn reduced by 25% through improved experience',
      'Proactive capacity upgrades prevented 15+ outages',
      'Mean time to detect customer-impacting issues under 2 minutes',
      'Unified view of 5,000+ customer endpoints',
    ],
    metrics: [
      { label: 'Churn Reduction', value: '25%' },
      { label: 'Detection', value: '<2min' },
      { label: 'Endpoints', value: '5,000+' },
      { label: 'Outages Prevented', value: '15+' },
    ],
    quote: {
      text: "Perception IT gave us the visibility we needed to truly understand our customer experience. We can now proactively address issues before customers even notice.",
      author: 'VP of Network Engineering',
      role: 'Regional ISP',
    },
  },
  {
    id: '5',
    title: 'End-to-end Observability for Financial Services',
    track: 'services',
    serviceCategories: ['monitoring', 'security'],
    category: 'Monitoring & Observability',
    industry: 'banking',
    outcome: 'risk-mitigation',
    techStack: 'IBM, Netcool',
    description: 'Delivered comprehensive monitoring across trading infrastructure, ensuring system availability during market hours and supporting regulatory compliance requirements.',
    slug: 'observability-financial-services',
    client: 'Investment Banking Firm',
    challenge: [
      'Trading systems required sub-second response times',
      'Regulatory mandates for complete system visibility',
      'Complex multi-vendor trading infrastructure',
      'No unified view of end-to-end trade flow',
    ],
    solution: [
      'Deployed IBM Netcool for unified trading infrastructure monitoring',
      'Built real-time trade flow visualization dashboards',
      'Implemented automated compliance reporting',
      'Created proactive alerting for performance degradation',
    ],
    result: [
      '100% regulatory compliance achieved',
      'Trade execution latency reduced by 40%',
      'Zero SLA breaches during implementation',
      'Complete audit trail for all trading systems',
    ],
    metrics: [
      { label: 'Compliance', value: '100%' },
      { label: 'Latency', value: '-40%' },
      { label: 'SLA', value: '100%' },
      { label: 'Systems', value: '200+' },
    ],
    quote: {
      text: "The observability solution Perception IT delivered gives us complete confidence in our trading infrastructure. Compliance and performance are now fully under control.",
      author: 'Head of Trading Technology',
      role: 'Investment Banking Firm',
    },
  },
  {
    id: '6',
    title: 'Breaking Performance Barriers in Alarm Processing',
    track: 'services',
    serviceCategories: ['monitoring', 'cloud-infra'],
    category: 'Monitoring & Observability',
    industry: 'telecom',
    outcome: 'scale-enablement',
    techStack: 'Java, Kubernetes, Cloud, Netcool',
    description: 'Architected high-throughput alarm processing pipeline capable of handling millions of events, eliminating processing delays during peak network activity.',
    slug: 'high-performance-alarm-processing',
    client: 'Multi-National Telecom Operator',
    challenge: [
      'Alarm processing bottleneck causing 15+ minute delays during peak hours',
      'Millions of events per hour overwhelming legacy infrastructure',
      'Critical alarms lost in noise during high-volume periods',
      'Scaling limitations preventing network growth',
    ],
    solution: [
      'Rebuilt alarm processing pipeline with cloud-native architecture',
      'Implemented horizontal scaling with Kubernetes',
      'Built intelligent event deduplication and prioritization',
      'Deployed distributed processing for massive throughput',
    ],
    result: [
      'Alarm processing capacity increased 10x',
      'Processing delays eliminated-sub-second handling',
      'Zero critical alarms missed during peak periods',
      'Platform scales automatically with network growth',
    ],
    metrics: [
      { label: 'Throughput', value: '10x' },
      { label: 'Processing', value: '<1sec' },
      { label: 'Events/Hour', value: '10M+' },
      { label: 'Availability', value: '99.99%' },
    ],
    quote: {
      text: "The alarm processing solution Perception IT built handles our massive event volumes with ease. We no longer worry about processing delays during peak periods.",
      author: 'Chief Network Architect',
      role: 'Multi-National Telecom',
    },
  },
  {
    id: '14',
    title: 'Expanding Capabilities and Reducing Costs Through Offshoring',
    track: 'services',
    serviceCategories: ['managed', 'cloud-cost'],
    category: 'Managed IT Services',
    industry: 'telecom',
    outcome: 'cost-reduction',
    techStack: 'IBM, Netcool, Zabbix',
    description: 'Established a cost-effective offshore delivery model that maintained enterprise-grade service levels while scaling operational capacity for a UK-based system integrator.',
    slug: 'offshoring-cost-reduction',
    client: 'UK-Based System Integrator',
    challenge: [
      'Rising operational costs limiting business growth',
      'Difficulty finding and retaining skilled local talent',
      'Need to scale operations without quality degradation',
      'Client SLA requirements demanding 24/7 coverage',
    ],
    solution: [
      'Established Lahore-based NOC with British-certified engineers',
      'Implemented follow-the-sun support model with UK handoffs',
      'Deployed unified monitoring across all client infrastructure',
      'Built knowledge transfer and quality assurance processes',
    ],
    result: [
      'Operational costs reduced by 45% while maintaining SLAs',
      '24/7 coverage achieved without night shift premiums',
      'Service quality scores improved from 85% to 95%',
      'Scaled to support 3x more clients with same team size',
    ],
    metrics: [
      { label: 'Cost Reduction', value: '45%' },
      { label: 'Quality Score', value: '95%' },
      { label: 'Coverage', value: '24/7' },
      { label: 'Scale', value: '3x' },
    ],
    quote: {
      text: "Perception IT's offshore model has been transformative. We've achieved significant cost savings while actually improving service quality for our clients.",
      author: 'Managing Director',
      role: 'UK System Integrator',
    },
  },
  {
    id: '9',
    title: 'Out-of-warranty infrastructure maintained at optimal performance without CapEx investment',
    track: 'infrastructure',
    serviceCategories: ['hardware-support', 'server-continuity', 'sla-support'],
    category: 'Textile',
    industry: 'Servers',
    tags: ['Textile', '48 Critical Servers', 'Out-of-Warranty', 'Local Spares Strategy', 'Cost Savings'],
    outcome: 'risk-mitigation',
    techStack: 'Lenovo Servers SLA, Preventive Maintenance, 24/7 Support, Hardware Replacement',
    description: '24/7 hardware support for 48 mission-critical Lenovo servers | Zero unplanned outages via proactive maintenance and rapid part replacement',
    slug: 'out-of-warranty-server-support-ibrahim-fibres',
    client: 'Ibrahim Fibres Limited',
    solutionName: 'Deployed ServerLife Extend™ to Out-of-Warranty Critical Infrastructure',
    clientName: 'Ibrahim Fibres Limited',
    location: 'Pakistan',
    scale: '100+ acre polyester facility | 73.3 MW power plants | Allied Bank ownership',
    heroImage: '/case-studies/ibrahim-fibres/hero-1920.jpg',
    aboutClient: `Our client is a leading Pakistani industrial group with diverse interests in:

• Polyester & Textiles: 100-acre facilities producing 390,600 tons annually
• Energy: Two power plants generating a combined 73.3 MW
• Financial Services: Majority control of Allied Bank since 2004

**IT Infrastructure**
The backbone of their business continuity relies on 48 Lenovo servers. These systems support critical production, finance, and energy management applications, making high availability and performance essential to their operations.`,
    challenges: [
      { icon: 'WarningAlt', title: 'Hardware Risk', desc: 'Out-of-warranty Lenovo servers hosting mission-critical MES, ERP, and production scheduling applications' },
      { icon: 'Time', title: 'Response Gap', desc: 'No proactive maintenance = escalating risk of downtime; delays of days, not hours' },
      { icon: 'Security', title: 'Security Exposure', desc: 'Aging infrastructure unpatched and vulnerable to malfunctions and security threats' },
      { icon: 'DataCenter', title: 'Production Impact', desc: 'Any hardware failure (RAM, HDD, NIC, Motherboard) could disrupt operations and production lines' },
    ],
    solutions: [
      { icon: 'Tools', title: 'Preventive Maintenance', desc: 'Regular health checks to proactively identify issues; servers kept up-to-date with fix packs and patch upgrades' },
      { icon: 'Headset', title: '24/7 Coverage', desc: 'Round-the-clock support for 48 mission-critical Lenovo servers' },
      { icon: 'Security', title: 'Zero Downtime', desc: 'No unplanned outages via proactive maintenance and optimized system care' },
      { icon: 'Delivery', title: 'Rapid Response', desc: 'Sourcing and installation of replacement parts for out-of-warranty hardware to maintain business continuity' },
      { icon: 'Document', title: 'Tailored SLA', desc: 'Customized Service Level Agreement prioritizing high availability and operational continuity' },
    ],
    results: [
      { icon: 'Checkmark', title: 'Zero Unplanned Outages', desc: 'Zero incidents in 12 months vs. 3–4/year previously (avg. 12h each)' },
      { icon: 'Time', title: '<6 Hour MTTR', desc: 'Reduced from 72+ hours via same-day local spares (Lahore warehouse)' },
      { icon: 'Money', title: '$750K+ Cost Avoidance', desc: 'Annual downtime risk avoided based on $250K/day lost output' },
      { icon: 'Operations', title: 'Predictable Operations', desc: 'Shifted from reactive panic to shift-aligned 24/7 support model' },
      { icon: 'Scale', title: 'Unified Infrastructure', desc: 'SLA secures textile, power plant SCADA, and Allied Bank operations' },
      { icon: 'Growth', title: 'Enabled Expansion', desc: '2 new production lines on existing hardware; deferred $200K+ CapEx' },
      { icon: 'Shield', title: 'Security Compliance', desc: 'Automated patching closed gaps flagged in risk assessments' },
      { icon: 'Trust', title: 'Internal Confidence', desc: 'Plant managers initiate digital upgrades knowing infrastructure is reliable' },
    ],
    metrics: [
      { label: 'legacy servers supported', value: '48' },
      { label: 'Unplanned Downtime', value: 'Zero' },
      { label: 'MTTR', value: '<6hrs' },
      { label: 'Costs Saved', value: '$750K+' },
      { label: 'CapEx Deferred', value: '$200K+' },
    ],
    beforeAfter: [
      { metric: 'Unplanned Downtime', before: 'Frequent (avg. 1–2 incidents/month)', after: 'Zero since implementation' },
      { metric: 'MTTR', before: '72+ hours', after: '<6 hours' },
      { metric: 'Security Risk', before: 'High (unpatched systems)', after: 'Mitigated via automated updates' },
      { metric: 'Cost Avoidance', before: 'Emergency repairs = high $/year', after: 'Prevented entirely' },
    ],
    businessBenefits: [
      {
        benefit: 'Avoided $750K+ in Annual Downtime Risk',
        how: 'Zero unplanned outages in 12 months - vs. 3–4 incidents/year previously (avg. 12h each). Based on $250K/day lost output in polyester lines.',
        context: "In capital-intensive industries, preventing downtime is 10x cheaper than recovering from it. No CapEx - just smarter OpEx."
      },
      {
        benefit: 'Shifted from Reactive Panic to Predictable Ops',
        how: 'MTTR reduced from 72+ hours to <6 hours via same-day local spares (Lahore warehouse) and 24/7 support aligned with plant shifts - not IT business hours.',
        context: 'No more waiting for OEM parts stuck in customs or "next-business-day" promises. Operations teams trust the IT backbone.'
      },
      {
        benefit: 'Unified Infrastructure Across Diversified Operations',
        how: 'Same SLA now secures servers for textile production, power plant SCADA, and Allied Bank integration - eliminating siloed support contracts.',
        context: 'One vendor, one SLA, one accountability point - critical for conglomerates scaling across sectors.'
      },
      {
        benefit: 'Enabled Confident Growth Without Hardware Refresh',
        how: 'Supported rollout of 2 new production lines and ERP expansion on existing hardware - proving infrastructure was not the bottleneck.',
        context: 'Deferred $200K+ CapEx refresh. Extended asset life 3–4 years - ideal for budget-constrained expansion cycles.'
      },
      {
        benefit: 'Strengthened Audit & Compliance Posture',
        how: 'Automated firmware/driver patching closed security gaps flagged in internal risk assessments - critical for financial services integration.',
        context: "Met Allied Bank's IT governance requirements without costly re-architecture. Sovereign, auditable operations."
      },
      {
        benefit: 'Built Internal Confidence in IT as an Enabler',
        how: 'Plant managers now initiate digital upgrades (e.g., MES modules) - knowing infrastructure will not fail them.',
        context: 'Cultural shift: IT moved from "cost center" to "continuity partner." Adoption of future automation/AI initiatives becomes easier.'
      },
    ],
    quote: {
      text: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. With 48 critical Lenovo servers supporting our production and financial systems, any downtime could have cost us millions. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident.\n\nWe now operate with confidence knowing our IT backbone is in expert hands. For any organization managing critical hardware, I highly recommend their service.",
      author: 'Mr. Usman Zafar',
      role: 'Head of IT, Ibrahim Fibres Limited',
    },
    logo: '/logos/clients/IFL-logo.png',
    relatedServices: [
      { name: 'ServerLife Extend™', link: '/services/server-continuity' },
      { name: 'Hardware Support', link: '/services/hardware-support' },
      { name: 'Server Continuity', link: '/services/server-continuity' },
      { name: 'Data Center Operations', link: '/services/data-center' },
      { name: 'Network Operations', link: '/services/network-operations' },
      { name: '24/7 SLA Support', link: '/services/sla-support' },
    ],
    ctaSection: {
      headline: 'Facing similar risks with aging infrastructure?',
      subheadline: "Let's build a tailored SLA that keeps your operations running - no matter what.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Schedule Free Assessment', link: '/#contact' },
    },
  },
];

const ProjectDetail = () => {
  const [techExpanded, setTechExpanded] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  
  console.log('ProjectDetail slug:', slug);
  console.log('Available slugs:', projectsData.map(p => p.slug));
  
  const project = projectsData.find(p => p.slug === slug) || projectsData[0];
  
  console.log('Found project:', project.title, 'slug:', project.slug);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb - Distinct from Navigation */}
      <div className="pt-32 pb-4 bg-[#f4f4f4] border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="relative z-10 flex items-center gap-2 text-xs" aria-label="Breadcrumb">
            <Link to="/" className="text-[#0f62fe] hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <Link to="/projects" className="text-[#0f62fe] hover:underline">Projects</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="px-2 py-0.5 border border-[#525252] text-[#525252] rounded-full">Case Study</span>
          </nav>
        </div>
      </div>

      {/* Hero - Logo/Headline Left, Image Right | Solution Summary Below */}
      <section className="pt-8 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
            {/* Left: Content */}
            <div>
              {/* Large Headline */}
              <h1 className="carbon-fluid-heading-05 text-[#161616] mb-6 leading-tight">
                Securing Out-of-Warranty Infrastructure at Optimal Performance
              </h1>
              
              {/* Tags - Between Heading and Logo */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-white text-[#161616] text-xs font-medium border border-[#e0e0e0]">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Logo & Client Profile */}
              <div className="flex items-center gap-4 mb-6">
                {project.logo && (
                  <div className="w-20 h-16 sm:w-24 sm:h-20 bg-white flex items-center justify-center p-2 border border-[#e0e0e0] flex-shrink-0">
                    <img 
                      src={project.logo} 
                      alt={project.client}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div>
                  <p className="carbon-label-01 text-[#525252] uppercase tracking-wider">Client Profile</p>
                  <p className="carbon-heading-02 text-[#161616]">{project.client}</p>
                </div>
              </div>
              
            </div>
            
            {/* Right: Image */}
            <div className="relative aspect-[16/10] max-h-[400px] bg-[#262626]">
              {project.heroImage ? (
                <img 
                  src={project.heroImage} 
                  alt={`${project.client} case study`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#393939] flex items-center justify-center">
                      <Building className="w-8 h-8 text-[#8d8d8d]" aria-label="Building" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-[#8d8d8d] mb-1">Case Study</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </section>

      {/* Trust Boxes - Key Metrics */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="carbon-label-01 text-[#525252] uppercase tracking-wider text-center mb-6">Key Metrics</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* 48 Legacy Servers */}
            <div className="bg-white p-4 border border-[#e0e0e0] text-center">
              <div className="text-3xl font-light text-[#0f62fe]">48</div>
              <div className="text-sm font-medium text-[#161616] mt-1">Legacy Servers Secured</div>
              <div className="carbon-helper-text-01 text-[#525252] mt-1">MES, ERP, Scheduling</div>
            </div>
            {/* Zero Outages */}
            <div className="bg-white p-4 border border-[#e0e0e0] text-center">
              <div className="text-3xl font-light text-[#24a148]">Zero</div>
              <div className="text-sm font-medium text-[#161616] mt-1">Unplanned Outages</div>
              <div className="carbon-helper-text-01 text-[#525252] mt-1">Over 12 Consecutive Months</div>
            </div>
            {/* <6 Hrs MTTR */}
            <div className="bg-white p-4 border border-[#e0e0e0] text-center">
              <div className="text-3xl font-light text-[#f97316]">&lt;6 Hrs</div>
              <div className="text-sm font-medium text-[#161616] mt-1">MTTR</div>
              <div className="carbon-helper-text-01 text-[#525252] mt-1">vs. 72hr OEM avg</div>
            </div>
            {/* $750K+ */}
            <div className="bg-white p-4 border border-[#e0e0e0] text-center">
              <div className="text-3xl font-light text-[#0f62fe]">$750K+</div>
              <div className="text-sm font-medium text-[#161616] mt-1">Downtime Risk Avoided</div>
              <div className="carbon-helper-text-01 text-[#525252] mt-1">Based on $250K/day exposure</div>
            </div>
            {/* $200K+ */}
            <div className="bg-white p-4 border border-[#e0e0e0] text-center">
              <div className="text-3xl font-light text-[#24a148]">$200K+</div>
              <div className="text-sm font-medium text-[#161616] mt-1">CapEx Deferred</div>
              <div className="carbon-helper-text-01 text-[#525252] mt-1">Refresh pushed 3–4 years</div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Client */}
      {project.aboutClient && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Building className="w-5 h-5 text-[#0f62fe]" />
              <h2 className="carbon-heading-03 text-[#161616]">About the Client</h2>
            </div>
            
            {/* Location & Scale Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.location && (
                <span className="px-3 py-1.5 bg-[#f4f4f4] text-[#525252] text-sm flex items-center gap-2 border border-[#e0e0e0]">
                  <span className="w-2 h-2 bg-[#0f62fe]" />
                  {project.location}
                </span>
              )}
              {project.scale && (
                <span className="px-3 py-1.5 bg-[#f4f4f4] text-[#525252] text-sm flex items-center gap-2 border border-[#e0e0e0]">
                  <span className="w-2 h-2 bg-[#24a148]" />
                  {project.scale}
                </span>
              )}
            </div>
            
            {/* Structured Client Content with Visual Hierarchy */}
            <div className="space-y-6">
              {/* Intro */}
              <p className="carbon-body-02 text-[#161616] font-medium">
                Our client is a leading Pakistani industrial group with diverse interests in:
              </p>
              
              {/* Business Segments - Card Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#f4f4f4] p-4 border-l-4 border-[#0f62fe]">
                  <div className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-1">Polyester & Textiles</div>
                  <div className="text-2xl font-light text-[#161616]">100-acre</div>
                  <div className="carbon-helper-text-01 text-[#525252]">390,600 tons annually</div>
                </div>
                <div className="bg-[#f4f4f4] p-4 border-l-4 border-[#0f62fe]">
                  <div className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-1">Energy</div>
                  <div className="text-2xl font-light text-[#161616]">73.3 MW</div>
                  <div className="carbon-helper-text-01 text-[#525252]">Two power plants</div>
                </div>
                <div className="bg-[#f4f4f4] p-4 border-l-4 border-[#0f62fe]">
                  <div className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-1">Financial Services</div>
                  <div className="text-2xl font-light text-[#161616]">Allied Bank</div>
                  <div className="carbon-helper-text-01 text-[#525252]">Majority control since 2004</div>
                </div>
              </div>
              
              {/* IT Infrastructure Section */}
              <div className="border-t border-[#e0e0e0] pt-6">
                <h3 className="carbon-heading-02 text-[#161616] mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#0f62fe]/10 flex items-center justify-center">
                    <CheckmarkFilled className="w-4 h-4 text-[#0f62fe]" />
                  </span>
                  IT Infrastructure
                </h3>
                <p className="carbon-body-02 text-[#525252] leading-relaxed">
                  The backbone of their business continuity relies on <strong className="text-[#161616]">48 Lenovo servers</strong>. These systems support critical production, finance, and energy management applications, making high availability and performance essential to their operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Problem / Solution / Outcome — scannable hook */}
      <section className="py-12 bg-white border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-2">Solution Summary</p>
          <h2 className="carbon-fluid-heading-05 text-[#161616] mb-8">
            Deployed ServerLife Extend™ to Transform Risk into Resilience
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border border-[#e0e0e0]">
            {/* Problem */}
            <div className="p-6 relative border-b md:border-b-0 md:border-r border-[#e0e0e0]">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#fa4d56]" />
              <p className="carbon-label-01 text-[#fa4d56] uppercase tracking-wider mb-3">The Problem</p>
              <p className="carbon-heading-02 text-[#161616] mb-2">
                OEM Dependency &amp; Out-of-Warranty Risk
              </p>
              <p className="carbon-body-01 text-[#525252]">
                48 mission-critical Lenovo servers supporting MES, ERP, and production scheduling. No OEM support. Escalating downtime risk with 72+ hour part delays.
              </p>
            </div>

            {/* Solution */}
            <div className="p-6 relative border-b md:border-b-0 md:border-r border-[#e0e0e0]">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0f62fe]" />
              <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-3">The Solution</p>
              <Link to="/services/server-continuity" className="group inline-flex items-center gap-2 carbon-heading-02 text-[#161616] mb-2 hover:text-[#0f62fe] transition-colors">
                ServerLife Extend™
                <ArrowRight className="w-4 h-4 text-[#c6c6c6] group-hover:text-[#0f62fe] group-hover:translate-x-0.5 transition-all" />
              </Link>
              <p className="carbon-body-01 text-[#525252] mb-3">
                Sovereign continuity with local spare inventory, shift-aligned engineering, and proactive lifecycle management. Replaced OEM dependency entirely.
              </p>
              <Link
                to="/services/server-continuity"
                className="inline-flex items-center gap-1.5 carbon-label-01 text-[#0f62fe] hover:text-[#0353e9] transition-colors"
              >
                View solution
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Outcome */}
            <div className="p-6 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#24a148]" />
              <p className="carbon-label-01 text-[#24a148] uppercase tracking-wider mb-3">The Outcome</p>
              <p className="carbon-heading-02 text-[#161616] mb-2">
                Zero Unplanned Outages
              </p>
              <p className="carbon-body-01 text-[#525252]">
                3–4 year infrastructure extension without hardware refreshes. $750K+ annual downtime risk avoided. $200K+ CapEx deferred.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial — shared FeaturedTestimonial component */}
      {project.quote && (
        <section className="py-16 bg-[#161616]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-6">
              <p className="carbon-label-01 text-[#a8a8a8] uppercase tracking-wider mb-2">Client Voice</p>
              <h2 className="carbon-fluid-heading-05 text-[#f4f4f4]">Testimonials</h2>
            </div>

            <FeaturedTestimonial
              quote={project.quote.text}
              author={project.quote.author}
              role={project.quote.role}
              client={project.client || 'Client'}
              clientLogo={project.logo}
              bgImage={project.heroImage || project.logo}
              contextDesc="Deployed ServerLife Extend™ to Critical Infrastructure and deferred CapEx spend without compromise on quality and continuity"
              contextLink="/services/server-continuity"
              solutionLink="/services/server-continuity"
              solutionLabel="ServerLife Extend™ Solution details"
              variant="dark"
            />
          </div>
        </section>
      )}

      {/* Unified Story Section: Challenge → Solution → Outcome → Business Impact */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Narrative Arc */}
          <div className="text-center mb-10">
            <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">
              Eliminating Downtime Risk
            </span>
            <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
              From Risk to Resilience
            </h2>
            <p className="carbon-body-02 text-[#525252] max-w-2xl mx-auto">
              How Ibrahim Fibres eliminated $750K+ in annual downtime risk while extending server lifecycle
            </p>
          </div>

          {/* Three-Act Story: Challenge | Solution | Outcome */}
          {project.challenges && (
            <div className="bg-white border border-[#e0e0e0] overflow-hidden mb-10">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e0e0e0]">
                {/* Act 1: The Risk */}
                <div className="p-6 relative group/risk cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#fa4d56]"></div>
                  <h3 className="carbon-heading-03 text-[#fa4d56] mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#fa4d56]/10 flex items-center justify-center">
                      <WarningAlt className="w-5 h-5" />
                    </span>
                    The Risk
                  </h3>
                  <div className="space-y-3">
                    {project.challenges.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-start gap-3">
                          <span className="text-[#fa4d56] carbon-label-01 font-semibold mt-1">{idx + 1}</span>
                          <div className="flex-1">
                            <h4 className="text-[15px] font-semibold text-[#161616] leading-snug group-hover/risk:text-[#fa4d56] transition-colors flex items-center gap-2">
                              {item.title}
                              <ChevronDown className="w-3 h-3 text-[#0f62fe] transition-transform duration-300 group-hover/risk:rotate-180" />
                            </h4>
                            <p className="text-sm text-[#525252] leading-relaxed max-h-0 overflow-hidden group-hover/risk:max-h-24 group-hover/risk:mt-2 transition-all duration-300">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Act 2: The Response */}
                <div className="p-6 relative group/response cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0f62fe]"></div>
                  <h3 className="carbon-heading-03 text-[#0f62fe] mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#0f62fe]/10 flex items-center justify-center">
                      <CheckmarkFilled className="w-5 h-5" />
                    </span>
                    The Response
                  </h3>
                  <div className="space-y-3">
                    {project.solutions?.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-start gap-3">
                          <span className="text-[#0f62fe] carbon-label-01 font-semibold mt-1">{idx + 1}</span>
                          <div className="flex-1">
                            <h4 className="text-[15px] font-semibold text-[#161616] leading-snug group-hover/response:text-[#0f62fe] transition-colors flex items-center gap-2">
                              {item.title}
                              <ChevronDown className="w-3 h-3 text-[#0f62fe] transition-transform duration-300 group-hover/response:rotate-180" />
                            </h4>
                            <p className="text-sm text-[#525252] leading-relaxed max-h-0 overflow-hidden group-hover/response:max-h-24 group-hover/response:mt-2 transition-all duration-300">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Act 3: The Outcome */}
                <div className="p-6 relative group/outcome cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#24a148]"></div>
                  <h3 className="carbon-heading-03 text-[#24a148] mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#24a148]/10 flex items-center justify-center">
                      <CheckmarkOutline className="w-5 h-5" />
                    </span>
                    The Outcome
                  </h3>
                  {/* Prominent Metrics */}
                  <div className="space-y-3 mb-5">
                    {project.metrics?.slice(1, 5).map((metric, idx) => (
                      <div key={idx} className="bg-[#f4f4f4] p-3 border-l-4" style={{ borderColor: idx === 0 ? '#24a148' : idx === 1 ? '#0f62fe' : idx === 2 ? '#06b6d4' : '#84cc16' }}>
                        <div className="text-2xl font-light" style={{ color: idx === 0 ? '#24a148' : idx === 1 ? '#0f62fe' : idx === 2 ? '#06b6d4' : '#84cc16' }}>
                          {metric.value}
                        </div>
                        <div className="carbon-label-01 text-[#525252] mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Full Results List */}
                  <div className="space-y-2 border-t border-[#e0e0e0] pt-4">
                    {project.results?.slice(3, 8).map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-start gap-3">
                          <span className="text-[#24a148] carbon-label-01 font-semibold mt-0.5">{idx + 4}</span>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-[#161616] group-hover/outcome:text-[#24a148] transition-colors flex items-center gap-2">
                              {item.title}
                              <ChevronDown className="w-3 h-3 text-[#0f62fe] transition-transform duration-300 group-hover/outcome:rotate-180" />
                            </h4>
                            <p className="text-xs text-[#525252] leading-relaxed max-h-0 overflow-hidden group-hover/outcome:max-h-16 transition-all duration-300">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Before/After Visual Bridge */}
          {project.beforeAfter && (
            <div className="mb-10">
              <h3 className="carbon-heading-03 text-[#161616] mb-6 text-center">The Transformation</h3>
              <div className="bg-white border border-[#e0e0e0] overflow-hidden">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e0e0e0]">
                  {/* Before Column */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-[#fa4d56]"></span>
                      <span className="carbon-label-01 text-[#fa4d56] uppercase tracking-wider font-semibold">Before</span>
                    </div>
                    <div className="space-y-3">
                      {project.beforeAfter.map((row, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-[#f4f4f4] last:border-0">
                          <span className="text-sm text-[#525252]">{row.metric}</span>
                          <span className="text-sm font-medium text-[#fa4d56]">{row.before}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* After Column */}
                  <div className="p-6 bg-[#f4f4f4]">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-[#24a148]"></span>
                      <span className="carbon-label-01 text-[#24a148] uppercase tracking-wider font-semibold">After</span>
                    </div>
                    <div className="space-y-3">
                      {project.beforeAfter.map((row, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-[#e0e0e0] last:border-0">
                          <span className="text-sm text-[#525252]">{row.metric}</span>
                          <span className="text-sm font-semibold text-[#24a148]">{row.after}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Business Impact - Connected to Outcomes */}
          {project.businessBenefits && (
            <div>
              <div className="text-center mb-6">
                <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">
                  Business Impact
                </span>
                <h3 className="carbon-fluid-heading-04 text-[#161616]">What This Means for the Business</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.businessBenefits.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#0f62fe] to-[#84cc16]"></div>
                    <h4 className="carbon-heading-02 text-[#161616] mb-3">{item.benefit}</h4>
                    <p className="text-sm text-[#525252] mb-3 leading-relaxed">{item.how}</p>
                    <p className="carbon-helper-text-01 text-[#0f62fe] italic">"{item.context}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setTechExpanded(!techExpanded)}
            className="w-full flex items-center justify-between p-4 bg-[#f4f4f4] hover:bg-[#e5e5e5] transition-colors group"
          >
            <span className="carbon-heading-02 text-[#161616]">Technology Stack</span>
            <div className="w-10 h-10 bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              {techExpanded ? (
                <ChevronUp className="w-6 h-6 text-[#525252] group-hover:text-[#0f62fe] transition-colors" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#525252] group-hover:text-[#0f62fe] transition-colors" />
              )}
            </div>
          </button>
          
          {techExpanded && (
            <div className="mt-4 p-6 bg-[#f4f4f4]">
              <div>
                <span className="carbon-label-01 text-[#525252]">Technologies:</span>
                <p className="carbon-body-short-01 text-[#161616] mt-1">{project.techStack}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Services */}
      {project.relatedServices && project.relatedServices.length > 0 && (
        <section className="py-12 bg-white border-y border-[#e0e0e0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="carbon-heading-03 text-[#161616] mb-6 text-center">Related Services You May Be Interested In</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.relatedServices.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-[#f4f4f4] text-[#525252] text-sm font-medium border border-[#e0e0e0] hover:bg-[#0f62fe] hover:text-white hover:border-[#0f62fe] transition-all"
                >
                  {service.name}
                  <ArrowRight className="w-3 h-3 text-[#c6c6c6] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom CTA Section */}
      {project.ctaSection && (
        <section className="py-16 bg-[#2563EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="carbon-fluid-heading-04 text-white mb-4">
              {project.ctaSection.headline}
            </h3>
            <p className="carbon-fluid-heading-03 text-blue-100 mb-8">
              {project.ctaSection.subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={project.ctaSection.primaryCta.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f62fe] font-semibold hover:bg-[#e5f6ff] transition-colors shadow-lg"
              >
                {project.ctaSection.primaryCta.text}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={project.ctaSection.secondaryCta.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold border-2 border-white hover:bg-white/10 transition-colors"
              >
                {project.ctaSection.secondaryCta.text}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f62fe] text-white font-medium rounded-full shadow-lg hover:bg-[#0353e9] transition-colors"
        >
          <Phone className="w-4 h-4" />
          Discuss Your Project
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
