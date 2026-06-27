
import ArrowRight from '@carbon/icons-react/es/ArrowRight';

import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import Phone from '@carbon/icons-react/es/Phone';
import Building from '@carbon/icons-react/es/Building';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import WarningAlt from '@carbon/icons-react/es/WarningAlt';
import CheckmarkOutline from '@carbon/icons-react/es/CheckmarkOutline';
import '@/styles/carbon-typography.css';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CoolingNav from '@/pages/services/CoolingNav';
import FeaturedTestimonial from '@/components/FeaturedTestimonial';
import Footer from '@/sections/Footer';

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
      'Ticket resolution time reduced by 52% through automation and workflow optimisation',
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
    heroImage: '/Sections/Cooling page/Images-cooling/Case studies/ibrahim-fibres/Ibrahim Fibres -case study- 1600 × 700 px.webp',
    aboutClient: `<p class="carbon-body-02 text-[#161616] font-medium mb-6">Our client is a leading Pakistani industrial group with diverse interests in:</p>
<div class="grid sm:grid-cols-3 gap-4 mb-6">
  <div class="bg-[#f4f4f4] p-4 border-l-4 border-[#0f62fe]">
    <div class="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-1">Polyester &amp; Textiles</div>
    <div class="text-2xl font-light text-[#161616]">100-acre</div>
    <div class="carbon-helper-text-01 text-[#525252]">390,600 tons annually</div>
  </div>
  <div class="bg-[#f4f4f4] p-4 border-l-4 border-[#0f62fe]">
    <div class="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-1">Energy</div>
    <div class="text-2xl font-light text-[#161616]">73.3 MW</div>
    <div class="carbon-helper-text-01 text-[#525252]">Two power plants</div>
  </div>
  <div class="bg-[#f4f4f4] p-4 border-l-4 border-[#0f62fe]">
    <div class="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-1">Financial Services</div>
    <div class="text-2xl font-light text-[#161616]">Allied Bank</div>
    <div class="carbon-helper-text-01 text-[#525252]">Majority control since 2004</div>
  </div>
</div>
<h3 class="carbon-heading-02 text-[#161616] mb-3 flex items-center gap-2">
  <span class="w-6 h-6 bg-[#0f62fe]/10 flex items-center justify-center">
    <svg class="w-4 h-4 text-[#0f62fe]" fill="currentColor" viewBox="0 0 32 32"><path d="M13 24l-9-9 1.414-1.414L13 21.171 26.586 7.586 28 9 13 24z"/></svg>
  </span>
  IT Infrastructure
</h3>
<p class="carbon-body-02 text-[#525252] leading-relaxed">The backbone of their business continuity relies on <strong class="text-[#161616]">48 Lenovo servers</strong>. These systems support critical production, finance, and energy management applications, making high availability and performance essential to their operations.</p>`,
    challenge: [
      'OEM Dependency & Out-of-Warranty Risk',
      '48 mission-critical Lenovo servers supporting MES, ERP, and production scheduling. No OEM support. Escalating downtime risk with 72+ hour part delays.'
    ],
    solution: [
      'ServerLife Extend™',
      'Sovereign continuity with local spare inventory, shift-aligned engineering, and proactive lifecycle management. Replaced OEM dependency entirely.'
    ],
    result: [
      'Zero Unplanned Outages',
      '3–4 year infrastructure extension without hardware refreshes. $750K+ annual downtime risk avoided. $200K+ CapEx deferred.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Hardware Risk', desc: 'Out-of-warranty Lenovo servers hosting mission-critical MES, ERP, and production scheduling applications' },
      { icon: 'Time', title: 'Response Gap', desc: 'No proactive maintenance = escalating risk of downtime; delays of days, not hours' },
      { icon: 'Security', title: 'Security Exposure', desc: 'Aging infrastructure unpatched and vulnerable to malfunctions and security threats' },
      { icon: 'DataCenter', title: 'Production Impact', desc: 'Any hardware failure (RAM, HDD, NIC, Motherboard) could disrupt operations and production lines' },
    ],
    solutions: [
      { icon: 'Tools', title: 'Preventive Maintenance', desc: 'Regular health checks to proactively identify issues; servers kept up-to-date with fix packs and patch upgrades' },
      { icon: 'Headset', title: '24/7 Coverage', desc: 'Round-the-clock support for 48 mission-critical Lenovo servers' },
      { icon: 'Security', title: 'Zero Downtime', desc: 'No unplanned outages via proactive maintenance and optimised system care' },
      { icon: 'Delivery', title: 'Rapid Response', desc: 'Sourcing and installation of replacement parts for out-of-warranty hardware to maintain business continuity' },
      { icon: 'Document', title: 'Tailored SLA', desc: 'Customised Service Level Agreement prioritising high availability and operational continuity' },
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
      { name: 'Data Centre Operations', link: '/services/data-center' },
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
  // ============================================================================
  // DEVOPS & CLOUD CASE STUDIES
  // ============================================================================
  {
    id: 'devops-iot-data-analytics-mobile-towers',
    title: 'IoT & Data Analytics for Mobile Towers',
    track: 'services',
    serviceCategories: ['container-orchestration', 'cloud-migration', 'aiops'],
    category: 'DevOps & Cloud',
    industry: 'telecommunications',
    tags: ['Azure', 'Databricks', 'MQTT', 'Kubernetes', 'IoT', 'Data Lakes'],
    outcome: 'cloud-transformation',
    techStack: 'Azure, Databricks, MQTT, Kubernetes, AWS, IoT, Data Lakes',
    description:
      'Perception IT implemented a sophisticated cloud-based IoT and streaming data analytics solution for monitoring mobile tower operations across Africa.',
    slug: 'iot-data-analytics-mobile-towers',
    client: 'Major African Telecom Operator',
    clientName: 'Major African Telecom Operator',
    location: 'Africa',
    scale: '10,000+ mobile towers',
    heroImage: '/Sections/projects/devops and cloud/IoT & Data Analytics for Mobile Towers 600×700.jpg',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">The client operates one of the largest mobile networks in Africa, with thousands of towers spanning multiple countries. Maintaining visibility into power, security, environmental conditions and equipment health across this distributed estate was a major operational challenge.</p>',
    challenge: [
      'Fragmented tower visibility across Africa',
      'No unified way to monitor power, environment and equipment health across thousands of remote mobile towers. Legacy systems produced data silos and delayed responses to outages.'
    ],
    solution: [
      'Cloud-based IoT and streaming analytics platform',
      'Perception IT architected a scalable IoT ingestion layer using MQTT, Kubernetes and Azure, feeding streaming telemetry into Databricks for real-time analytics and geospatial visualisation.'
    ],
    result: [
      'Real-time operational visibility at scale',
      'Operations teams gained a single pane of glass for tower status, enabling faster incident response, predictive maintenance and improved network uptime across the continent.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Data silos', desc: 'Tower data trapped in disconnected systems and formats across regions.' },
      { icon: 'WarningAlt', title: 'Scale', desc: 'Ingesting high-velocity telemetry from thousands of remote assets.' },
      { icon: 'WarningAlt', title: 'Latency', desc: 'Operational decisions delayed by batch-based reporting and manual dashboards.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'MQTT ingestion', desc: 'Lightweight, reliable telemetry collection from tower-edge devices.' },
      { icon: 'Checkmark', title: 'Kubernetes on Azure', desc: 'Cloud-native orchestration for resilient, auto-scaling services.' },
      { icon: 'Checkmark', title: 'Databricks analytics', desc: 'Real-time streaming analytics and geospatial visualisation.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Real-time monitoring', desc: 'Tower operations visible across Africa from a unified platform.' },
      { icon: 'Checkmark', title: 'Cloud-native scale', desc: 'Architecture scales elastically with network growth.' },
      { icon: 'Checkmark', title: 'Data-driven decisions', desc: 'Streaming insights replace batch reporting for faster response.' }
    ],
    metrics: [
      { label: 'Towers Monitored', value: '10,000+' },
      { label: 'Regions Covered', value: 'Multiple' },
      { label: 'Analytics Latency', value: 'Real-time' },
      { label: 'Platform Uptime', value: '99.99%' }
    ],
    relatedServices: [
      { name: 'Container Orchestration', link: '/services/devops-cloud#container-orchestration' },
      { name: 'Cloud Migration', link: '/services/cloud-migration' },
      { name: 'AIOps', link: '/services/aiops' }
    ],
    ctaSection: {
      headline: 'Want real-time visibility into your distributed infrastructure?',
      subheadline: "Let's design an IoT and cloud analytics platform tailored to your operations.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
  },
  {
    id: 'devops-property-management-communication-broker',
    title: 'Property Management Communication Broker',
    track: 'services',
    serviceCategories: ['cicd', 'devsecops', 'platform-engineering'],
    category: 'DevOps & Cloud',
    industry: 'real-estate',
    tags: ['Angular', 'Custom Development', 'Real Estate APIs', 'Cloud'],
    outcome: 'digital-transformation',
    techStack: 'Angular, Custom Application Development, Real Estate APIs, Cloud',
    description:
      'Sophisticated cross-platform application facilitating seamless communication and service brokerage between landlords, tenants, and property managers.',
    slug: 'property-management-communication-broker',
    client: 'Real Estate Technology Company',
    clientName: 'Real Estate Technology Company',
    location: 'UK',
    scale: 'Multi-stakeholder property ecosystem',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">The client provides a digital platform that connects landlords, tenants and property managers, simplifying communication, maintenance requests and service brokerage across residential and commercial portfolios.</p>',
    challenge: [
      'Disconnected property stakeholders',
      'Landlords, tenants and property managers relied on fragmented email, phone and spreadsheet workflows, causing delays, miscommunication and poor service tracking.'
    ],
    solution: [
      'Unified communication and service brokerage platform',
      'Perception IT built a cloud-hosted Angular application that brings all stakeholders onto one platform with real-time messaging, job tracking and integrated service provider management.'
    ],
    result: [
      'Streamlined property operations',
      'The platform reduced response times, improved tenant satisfaction and gave property managers a clear audit trail of every request and interaction.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Fragmented workflows', desc: 'Communication spread across email, phone and spreadsheets.' },
      { icon: 'WarningAlt', title: 'Poor visibility', desc: 'No central record of tenant requests or service provider performance.' },
      { icon: 'WarningAlt', title: 'Slow response times', desc: 'Manual handoffs delayed maintenance and issue resolution.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'Single platform', desc: 'One application for landlords, tenants and property managers.' },
      { icon: 'Checkmark', title: 'Real-time messaging', desc: 'In-app communication with notifications and audit history.' },
      { icon: 'Checkmark', title: 'Service brokerage', desc: 'Integrated service provider marketplace and job tracking.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Faster resolution', desc: 'Maintenance and service requests handled more quickly.' },
      { icon: 'Checkmark', title: 'Improved satisfaction', desc: 'Tenants and landlords benefit from transparent communication.' },
      { icon: 'Checkmark', title: 'Audit trail', desc: 'Complete history of requests, quotes and completions.' }
    ],
    metrics: [
      { label: 'Stakeholder Groups', value: '3' },
      { label: 'Communication Channels', value: 'Unified' },
      { label: 'Request Tracking', value: 'End-to-end' },
      { label: 'Platform Delivery', value: 'Cloud-native' }
    ],
    relatedServices: [
      { name: 'CI/CD', link: '/services/devops-cloud#cicd' },
      { name: 'Platform Engineering', link: '/services/devops-cloud#platform-engineering' },
      { name: 'Custom Development', link: '/services/custom-development' }
    ],
    ctaSection: {
      headline: 'Need a connected platform for your property ecosystem?',
      subheadline: "Let's build a cloud-native application that brings landlords, tenants and service providers together.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
  },
  {
    id: 'devops-cloud-infrastructure-iot-data-visualisation',
    title: 'Cloud Infrastructure for IoT Data Collection and Visualisation',
    track: 'services',
    serviceCategories: ['cloud-provisioning', 'container-orchestration', 'aiops'],
    category: 'DevOps & Cloud',
    industry: 'technology',
    tags: ['AWS', 'IoT', 'Data Visualisation', 'Serverless', 'S3'],
    outcome: 'cloud-transformation',
    techStack: 'AWS, IoT Core, Serverless, S3, Data Visualisation',
    description:
      'Deployed a low-management AWS infrastructure solution for software providing IoT data collection and visualisation.',
    slug: 'cloud-infrastructure-iot-data-visualisation',
    client: 'IoT Software Provider',
    clientName: 'IoT Software Provider',
    location: 'Global',
    scale: 'Distributed IoT device fleet',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">The client develops IoT software used by enterprises to collect sensor data and visualise it through dashboards. They needed a robust, low-overhead cloud backend that could scale with customer adoption without requiring constant infrastructure management.</p>',
    challenge: [
      'High-overhead infrastructure',
      'The existing platform required significant manual management, making it hard to onboard new customers and scale the device fleet cost-effectively.'
    ],
    solution: [
      'Low-management AWS IoT backbone',
      'Perception IT designed a serverless-first AWS architecture using IoT Core, Lambda, S3 and managed visualisation services, minimising operational toil while handling elastic device loads.'
    ],
    result: [
      'Scalable, hands-off IoT platform',
      'The client can onboard customers faster, visualise device data in real time and scale without proportional infrastructure overhead.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Operational overhead', desc: 'Existing infrastructure demanded continuous manual care.' },
      { icon: 'WarningAlt', title: 'Scaling costs', desc: 'Provisioned resources did not align with variable device loads.' },
      { icon: 'WarningAlt', title: 'Customer onboarding', desc: 'New tenants required lengthy environment setup.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'Serverless AWS stack', desc: 'IoT Core, Lambda and S3 for elastic, pay-as-you-grow processing.' },
      { icon: 'Checkmark', title: 'Managed visualisation', desc: 'Ready-to-use dashboards without custom backend maintenance.' },
      { icon: 'Checkmark', title: 'Infrastructure as Code', desc: 'Repeatable, version-controlled deployments for new customers.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Reduced management', desc: 'Platform operations overhead significantly lowered.' },
      { icon: 'Checkmark', title: 'Elastic scale', desc: 'Infrastructure scales automatically with device telemetry.' },
      { icon: 'Checkmark', title: 'Faster onboarding', desc: 'New customers provisioned through automated pipelines.' }
    ],
    metrics: [
      { label: 'Management Overhead', value: 'Low' },
      { label: 'Scaling Model', value: 'Serverless' },
      { label: 'Data Visualisation', value: 'Real-time' },
      { label: 'Provisioning', value: 'IaC' }
    ],
    relatedServices: [
      { name: 'Cloud Provisioning', link: '/services/devops-cloud#cloud-provisioning' },
      { name: 'Container Orchestration', link: '/services/devops-cloud#container-orchestration' },
      { name: 'AIOps', link: '/services/devops-cloud#aiops' }
    ],
    ctaSection: {
      headline: 'Ready to scale your IoT platform without the ops burden?',
      subheadline: "Let's design a serverless cloud backbone for your IoT data and visualisation needs.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
  },
  {
    id: 'devops-unified-data-federation-portal',
    title: 'Unified Data Federation Portal',
    track: 'services',
    serviceCategories: ['platform-engineering', 'cloud-provisioning', 'mlops'],
    category: 'DevOps & Cloud',
    industry: 'telecommunications',
    tags: ['Data Federation', 'Analytics', 'API Gateway', 'Cloud'],
    outcome: 'data-unification',
    techStack: 'Data Federation, Analytics, API Gateway, Cloud',
    description:
      'Provided a cross-functional central portal for data federation to provide secure data access and analytics across various telecommunication domains.',
    slug: 'unified-data-federation-portal',
    client: 'Telecommunications Operator',
    clientName: 'Telecommunications Operator',
    location: 'Multi-region',
    scale: 'Cross-domain telecom data',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">The client operates a complex telecom business with data spread across network, customer, finance and operational domains. Teams struggled to get a unified view for analytics and decision-making.</p>',
    challenge: [
      'Siloed telecom data domains',
      'Each department maintained its own data stores and access controls, making cross-domain analytics slow, inconsistent and insecure.'
    ],
    solution: [
      'Central data federation portal',
      'Perception IT delivered a secure, cross-functional portal that federates data from multiple telecom domains behind a unified API and analytics layer, enforcing role-based access and governance.'
    ],
    result: [
      'Unified, governed data access',
      'Analysts and decision-makers can now query and visualise cross-domain data through one portal while security and compliance policies remain enforced.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Data silos', desc: 'Critical data locked in separate departmental systems.' },
      { icon: 'WarningAlt', title: 'Access control', desc: 'Complex, inconsistent permissions across domains.' },
      { icon: 'WarningAlt', title: 'Slow insights', desc: 'Cross-domain reporting required manual data consolidation.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'Federated query layer', desc: 'Single access point across distributed data sources.' },
      { icon: 'Checkmark', title: 'Role-based governance', desc: 'Security and compliance policies enforced centrally.' },
      { icon: 'Checkmark', title: 'Self-service analytics', desc: 'Users explore cross-domain data without engineering tickets.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Reduced silos', desc: 'One portal for secure cross-domain data access.' },
      { icon: 'Checkmark', title: 'Faster insights', desc: 'Analytics that previously took weeks now take minutes.' },
      { icon: 'Checkmark', title: 'Governed access', desc: 'Data policies applied consistently across all domains.' }
    ],
    metrics: [
      { label: 'Data Domains', value: 'Multiple' },
      { label: 'Access Model', value: 'Federated' },
      { label: 'Governance', value: 'Centralised' },
      { label: 'Insight Speed', value: 'Minutes' }
    ],
    relatedServices: [
      { name: 'Platform Engineering', link: '/services/devops-cloud#platform-engineering' },
      { name: 'MLOps', link: '/services/mlops' },
      { name: 'Cloud Provisioning', link: '/services/devops-cloud#cloud-provisioning' }
    ],
    ctaSection: {
      headline: 'Need a single source of truth across your data domains?',
      subheadline: "Let's build a governed data federation portal for your organisation.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
  },
  {
    id: 'devops-automated-incident-management',
    title: 'Automated Incident Management',
    track: 'services',
    serviceCategories: ['cicd', 'aiops', 'devsecops'],
    category: 'DevOps & Cloud',
    industry: 'telecommunications',
    tags: ['ServiceNow', 'REST APIs', 'Workflow Automation', 'Cloud'],
    outcome: 'automation',
    techStack: 'ServiceNow, REST APIs, Workflow Automation, Cloud',
    description:
      'Developed an automated incident management microservice to integrate network alarms with ServiceNow, automating the management of incidents.',
    slug: 'automated-incident-management',
    client: 'Major Telecom Operator',
    clientName: 'Major Telecom Operator',
    location: 'Multi-region',
    scale: 'Nationwide network operations',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">The client manages a large-scale telecom network where thousands of alarms are generated daily. Manual incident creation in ServiceNow was slow, error-prone and created bottlenecks in the NOC.</p>',
    challenge: [
      'Manual incident creation bottleneck',
      'Network alarms had to be triaged and logged manually in ServiceNow, leading to delayed response times, missing context and inconsistent ticket quality.'
    ],
    solution: [
      'ServiceNow-integrated incident automation microservice',
      'Perception IT developed a microservice that consumes network alarms, enriches them with context and automatically creates or updates ServiceNow incidents through REST APIs and workflow automation.'
    ],
    result: [
      'Faster, more consistent incident response',
      'Automation reduced manual ticket handling, improved data quality and accelerated mean time to respond across the network operations centre.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Manual ticket handling', desc: 'NOC staff manually created incidents from alarm streams.' },
      { icon: 'WarningAlt', title: 'Missing context', desc: 'Tickets often lacked the detail needed for rapid triage.' },
      { icon: 'WarningAlt', title: 'Inconsistent workflows', desc: 'Different teams followed different ticket creation practices.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'Alarm integration', desc: 'Microservice consumes and normalises network alarms.' },
      { icon: 'Checkmark', title: 'ServiceNow automation', desc: 'REST API-driven incident creation and updates.' },
      { icon: 'Checkmark', title: 'Context enrichment', desc: 'Alarms enriched with network topology and runbook data.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Faster response', desc: 'Incidents created automatically within seconds of alarm detection.' },
      { icon: 'Checkmark', title: 'Better data quality', desc: 'Consistent, context-rich tickets improve triage.' },
      { icon: 'Checkmark', title: 'Reduced manual work', desc: 'NOC staff focus on resolution rather than data entry.' }
    ],
    metrics: [
      { label: 'Incident Creation', value: 'Automated' },
      { label: 'Integration', value: 'ServiceNow' },
      { label: 'Alarm Source', value: 'Network' },
      { label: 'Workflows', value: 'Streamlined' }
    ],
    relatedServices: [
      { name: 'CI/CD', link: '/services/devops-cloud#cicd' },
      { name: 'AIOps', link: '/services/aiops' },
      { name: 'ServiceNow', link: '/services/servicenow' }
    ],
    ctaSection: {
      headline: 'Want to automate your incident management workflow?',
      subheadline: "Let's integrate your monitoring and ITSM tools for faster, more reliable operations.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
  },
  {
    id: 'devops-streaming-iot-data-analytics',
    title: 'Streaming IoT and Data Analytics',
    track: 'services',
    serviceCategories: ['mlops', 'aiops', 'cloud-provisioning'],
    category: 'DevOps & Cloud',
    industry: 'telecommunications',
    tags: ['Databricks', 'Azure', 'Data Lakes', 'Kafka', 'IoT'],
    outcome: 'real-time-analytics',
    techStack: 'Databricks, Azure, Data Lakes, Kafka, IoT',
    description:
      'Engineered a streaming analytics solution for telco data using Databricks, Azure, and Data Lakes, providing real-time analytics and event analysis.',
    slug: 'streaming-iot-data-analytics',
    client: 'Major Telecom Operator',
    clientName: 'Major Telecom Operator',
    location: 'Multi-region',
    scale: 'High-velocity telco data streams',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">The client generates massive volumes of network and customer event data. They needed a modern streaming analytics platform to turn this data into actionable, real-time insights for operations and customer experience teams.</p>',
    challenge: [
      'Batch analytics could not keep pace',
      'Legacy data pipelines processed events in batches, delaying insight generation and preventing real-time responses to network issues and customer behaviour.'
    ],
    solution: [
      'Real-time streaming analytics architecture',
      'Perception IT built a streaming pipeline using Kafka, Azure Data Lakes and Databricks to ingest, process and analyse telco events in near real time.'
    ],
    result: [
      'Event-driven operational intelligence',
      'The operator can now detect patterns, anomalies and opportunities as they happen, supporting faster decisions and proactive customer care.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Batch lag', desc: 'Insights arrived hours after events occurred.' },
      { icon: 'WarningAlt', title: 'Data volume', desc: 'High-velocity streams exceeded legacy pipeline capacity.' },
      { icon: 'WarningAlt', title: 'Siloed analytics', desc: 'Different teams used separate tools and data copies.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'Kafka streaming', desc: 'High-throughput, fault-tolerant event ingestion.' },
      { icon: 'Checkmark', title: 'Azure Data Lakes', desc: 'Scalable storage for raw and processed data.' },
      { icon: 'Checkmark', title: 'Databricks analytics', desc: 'Real-time processing, ML and interactive notebooks.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Real-time insights', desc: 'Analytics updated continuously as events arrive.' },
      { icon: 'Checkmark', title: 'Scalable pipeline', desc: 'Architecture handles growing data volumes.' },
      { icon: 'Checkmark', title: 'Operational agility', desc: 'Teams respond to events faster and more proactively.' }
    ],
    metrics: [
      { label: 'Data Processing', value: 'Streaming' },
      { label: 'Platforms', value: 'Databricks/Azure' },
      { label: 'Ingestion', value: 'Kafka' },
      { label: 'Insight Latency', value: 'Near real-time' }
    ],
    relatedServices: [
      { name: 'MLOps', link: '/services/mlops' },
      { name: 'AIOps', link: '/services/aiops' },
      { name: 'Cloud Provisioning', link: '/services/devops-cloud#cloud-provisioning' }
    ],
    ctaSection: {
      headline: 'Ready to move from batch to real-time analytics?',
      subheadline: "Let's build a streaming data platform that turns your events into immediate action.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
  },
  {
    id: 'devops-kubernetes-deployment-telco-operations',
    title: 'Kubernetes Deployment for Telco Operations',
    track: 'services',
    serviceCategories: ['container-orchestration', 'cicd', 'platform-engineering'],
    category: 'DevOps & Cloud',
    industry: 'telecommunications',
    tags: ['Kubernetes', 'AWS', 'DevOps', 'Containers'],
    outcome: 'scale-enablement',
    techStack: 'Kubernetes, AWS, DevOps, Containers',
    description:
      'Architecture and deployment of Kubernetes on AWS to streamline development and production of mobile tower management.',
    slug: 'kubernetes-deployment-telco-operations',
    client: 'Major African Telecom Operator',
    clientName: 'Major African Telecom Operator',
    location: 'Africa',
    scale: 'Mobile tower management platform',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">The client manages mobile towers across Africa and needed a modern, containerised platform to accelerate feature delivery and improve operational reliability for tower management applications.</p>',
    challenge: [
      'Slow, inconsistent application delivery',
      'Traditional deployment approaches created environment drift, long release cycles and difficulty scaling tower management applications across regions.'
    ],
    solution: [
      'Kubernetes platform on AWS',
      'Perception IT architected and deployed a production-grade Kubernetes environment on AWS, integrated with CI/CD pipelines and DevOps practices for streamlined development and operations.'
    ],
    result: [
      'Faster, more reliable releases',
      'The operator can deploy and scale tower management workloads elastically, with consistent environments from development through production.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Environment drift', desc: 'Development and production environments were inconsistent.' },
      { icon: 'WarningAlt', title: 'Slow releases', desc: 'Manual deployments delayed feature delivery.' },
      { icon: 'WarningAlt', title: 'Scaling limits', desc: 'Traditional infrastructure could not keep pace with growth.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'Kubernetes on AWS', desc: 'Container orchestration for resilient, portable workloads.' },
      { icon: 'Checkmark', title: 'CI/CD integration', desc: 'Automated build, test and deployment pipelines.' },
      { icon: 'Checkmark', title: 'DevOps practices', desc: 'GitOps, observability and Infrastructure as Code.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Faster releases', desc: 'Development and production cycles significantly shortened.' },
      { icon: 'Checkmark', title: 'Elastic scaling', desc: 'Workloads scale automatically with demand.' },
      { icon: 'Checkmark', title: 'Consistent environments', desc: 'Containers eliminate environment drift.' }
    ],
    metrics: [
      { label: 'Platform', value: 'Kubernetes' },
      { label: 'Cloud', value: 'AWS' },
      { label: 'Delivery Model', value: 'CI/CD' },
      { label: 'Scalability', value: 'Elastic' }
    ],
    relatedServices: [
      { name: 'Container Orchestration', link: '/services/devops-cloud#container-orchestration' },
      { name: 'CI/CD', link: '/services/devops-cloud#cicd' },
      { name: 'Platform Engineering', link: '/services/devops-cloud#platform-engineering' }
    ],
    ctaSection: {
      headline: 'Need a Kubernetes platform that accelerates delivery?',
      subheadline: "Let's design and deploy a cloud-native container platform tailored to your workloads.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
  },
  {
    id: 'devops-iot-data-collection-mobile-towers',
    title: 'IoT Data Collection for Mobile Towers',
    track: 'services',
    serviceCategories: ['container-orchestration', 'aiops', 'cloud-provisioning'],
    category: 'DevOps & Cloud',
    industry: 'telecommunications',
    tags: ['MQTT', 'IoT', 'AWS', 'Analytics', 'Kubernetes'],
    outcome: 'iot-scale',
    techStack: 'MQTT, IoT, AWS, Analytics, Kubernetes',
    description:
      'Development of an MQTT-based IoT solution for centralised data analytics of mobile towers across Africa.',
    slug: 'iot-data-collection-mobile-towers',
    client: 'Major African Telecom Operator',
    clientName: 'Major African Telecom Operator',
    location: 'Africa',
    scale: '10,000+ mobile towers',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">The client operates an extensive mobile tower network across Africa and needed a reliable, lightweight way to collect telemetry from remote sites and centralise it for analytics and alerting.</p>',
    challenge: [
      'Reliable data collection from remote towers',
      'Collecting telemetry from thousands of dispersed towers over unreliable connectivity required a protocol that was lightweight, resilient and easy to deploy at the edge.'
    ],
    solution: [
      'MQTT-based IoT collection platform',
      'Perception IT implemented an MQTT-based ingestion architecture backed by AWS and Kubernetes, enabling centralised data analytics from mobile towers across the continent.'
    ],
    result: [
      'Centralised tower analytics at scale',
      'The solution delivers resilient, bidirectional communication with edge devices and feeds a central analytics platform for operations and planning.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Remote connectivity', desc: 'Towers in areas with intermittent network access.' },
      { icon: 'WarningAlt', title: 'Device diversity', desc: 'Multiple sensor types and protocols at tower sites.' },
      { icon: 'WarningAlt', title: 'Centralisation', desc: 'Data trapped locally at each tower or region.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'MQTT brokers', desc: 'Lightweight publish-subscribe messaging for edge devices.' },
      { icon: 'Checkmark', title: 'AWS backend', desc: 'Managed ingestion and storage for high-volume telemetry.' },
      { icon: 'Checkmark', title: 'Kubernetes analytics', desc: 'Containerised analytics services for elastic processing.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Resilient collection', desc: 'MQTT handles intermittent connectivity gracefully.' },
      { icon: 'Checkmark', title: 'Centralised view', desc: 'All tower telemetry available in one analytics platform.' },
      { icon: 'Checkmark', title: 'Scalable architecture', desc: 'Grows with the network and new sensor types.' }
    ],
    metrics: [
      { label: 'Protocol', value: 'MQTT' },
      { label: 'Towers Covered', value: '10,000+' },
      { label: 'Backend', value: 'AWS' },
      { label: 'Analytics', value: 'Kubernetes' }
    ],
    relatedServices: [
      { name: 'Container Orchestration', link: '/services/devops-cloud#container-orchestration' },
      { name: 'AIOps', link: '/services/aiops' },
      { name: 'Cloud Provisioning', link: '/services/devops-cloud#cloud-provisioning' }
    ],
    ctaSection: {
      headline: 'Need to collect IoT data from thousands of remote assets?',
      subheadline: "Let's design an MQTT-based collection and analytics platform for your fleet.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
  },
  {
    id: 'devops-farmdar-agritech-solution-enhancement',
    title: 'Empowering Agriculture with Advanced Data Architectures',
    track: 'services',
    serviceCategories: ['mlops', 'platform-engineering', 'cloud-provisioning'],
    category: 'DevOps & Cloud',
    industry: 'agritech',
    tags: ['Data Architecture', 'Containerisation', 'Modern Frameworks', 'Cloud'],
    outcome: 'data-modernisation',
    techStack: 'Data Architecture, Containerisation, Modern Frameworks, Cloud',
    description:
      "Farmdar's agritech platform has been transformed with advanced data design and modern application frameworks for unparalleled decision-making support.",
    slug: 'farmdar-agritech-solution-enhancement',
    client: 'Farmdar',
    clientName: 'Farmdar',
    location: 'Pakistan',
    scale: 'Agritech decision-support platform',
    aboutClient:
      '<p class="carbon-body-02 text-[#525252] leading-relaxed">Farmdar is an agritech company that provides data-driven insights to farmers and agribusinesses. Their platform needed a modern data architecture to support faster insights, greater scalability and improved developer agility.</p>',
    challenge: [
      'Legacy data architecture limiting growth',
      'Farmdar\'s existing data and application architecture was becoming a bottleneck, slowing insight delivery and making it difficult to scale as the user base grew.'
    ],
    solution: [
      'Modern data architecture and containerisation',
      'Perception IT redesigned Farmdar\'s data platform using modern frameworks and containerisation, enabling elastic scale, faster development cycles and more reliable data pipelines.'
    ],
    result: [
      'Transformed decision-making capability',
      'Farmdar can now deliver faster, more reliable insights to users, with a scalable foundation for future AI and analytics capabilities.'
    ],
    challenges: [
      { icon: 'WarningAlt', title: 'Scaling limits', desc: 'Existing architecture struggled with growing data and users.' },
      { icon: 'WarningAlt', title: 'Slow insights', desc: 'Data pipelines were complex and slow to deliver value.' },
      { icon: 'WarningAlt', title: 'Developer friction', desc: 'Monolithic structures made feature delivery cumbersome.' }
    ],
    solutions: [
      { icon: 'Checkmark', title: 'Modern data design', desc: 'Re-architected for performance, scale and maintainability.' },
      { icon: 'Checkmark', title: 'Containerisation', desc: 'Services packaged for consistent deployment and scaling.' },
      { icon: 'Checkmark', title: 'Cloud-native frameworks', desc: 'Modern application stack for faster development.' }
    ],
    results: [
      { icon: 'Checkmark', title: 'Faster insights', desc: 'Users receive actionable data more quickly.' },
      { icon: 'Checkmark', title: 'Improved scalability', desc: 'Platform grows with Farmdar\'s customer base.' },
      { icon: 'Checkmark', title: 'Agile delivery', desc: 'Development teams ship features with greater confidence.' }
    ],
    metrics: [
      { label: 'Architecture', value: 'Modernised' },
      { label: 'Deployment', value: 'Containerised' },
      { label: 'Scalability', value: 'Elastic' },
      { label: 'Insight Speed', value: 'Faster' }
    ],
    relatedServices: [
      { name: 'MLOps', link: '/services/mlops' },
      { name: 'Platform Engineering', link: '/services/devops-cloud#platform-engineering' },
      { name: 'Cloud Provisioning', link: '/services/devops-cloud#cloud-provisioning' }
    ],
    ctaSection: {
      headline: 'Need to modernise your data architecture for scale?',
      subheadline: "Let's transform your platform with modern data design and cloud-native engineering.",
      primaryCta: { text: 'Talk to Our Tech Leads', link: '/#contact' },
      secondaryCta: { text: 'Explore DevOps & Cloud', link: '/services/devops-cloud' }
    }
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
      <CoolingNav />

      {/* Sticky Breadcrumb */}
      <div className="sticky top-12 z-40 bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-12 flex items-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
              <li><a href="/#/" className="hover:text-[#0f62fe] transition-colors">Home</a></li>
              <li className="text-gray-300">/</li>
              <li><a href="/#/projects" className="hover:text-[#0f62fe] transition-colors">Projects</a></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Case Study</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero - Logo/Headline Left, Image Right | Solution Summary Below */}
      <section className="relative pt-20 pb-12 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,98,254,0.06),transparent_40%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
            {/* Left: Content */}
            <div>
              {/* Large Headline */}
              <h1 className="carbon-fluid-heading-05 text-[#161616] mb-6 leading-tight">
                {project.title}
              </h1>

              {/* Tags - light pill style */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f4f4f4] border border-gray-200 rounded-full carbon-label-02 text-[#525252]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f62fe]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Logo & Client Profile */}
              <div className="flex items-center gap-4 mb-6">
                {project.logo && (
                  <div className="w-20 h-16 sm:w-24 sm:h-20 bg-[#f4f4f4] flex items-center justify-center p-2 border border-gray-200 flex-shrink-0 rounded-lg">
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
            <div className="relative aspect-[16/10] max-h-[400px] bg-[#f4f4f4] rounded-xl overflow-hidden border border-gray-200 shadow-2xl">
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#e0e0e0] flex items-center justify-center rounded-lg">
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
      {project.metrics && project.metrics.length > 0 && (
        <section className="py-12 pb-24 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider text-center mb-8">Key Metrics</p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="min-w-[140px] max-w-[200px] flex-1 bg-white p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="text-3xl font-light text-[#0f62fe]">{metric.value}</div>
                  <div className="text-sm font-medium text-[#161616] mt-2">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About the Client */}
      {project.aboutClient && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 bg-[#0f62fe]/10 flex items-center justify-center rounded-md">
                <Building className="w-5 h-5 text-[#0f62fe]" />
              </span>
              <h2 className="carbon-heading-03 text-[#161616]">About the Client</h2>
            </div>

            {/* Location & Scale Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.location && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f4f4f4] text-[#525252] text-sm rounded-full border border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#0f62fe]" />
                  {project.location}
                </span>
              )}
              {project.scale && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f4f4f4] text-[#525252] text-sm rounded-full border border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#24a148]" />
                  {project.scale}
                </span>
              )}
            </div>

            {/* Client Overview */}
            <div
              className="prose prose-lg max-w-none text-[#525252]"
              dangerouslySetInnerHTML={{ __html: project.aboutClient }}
            />
          </div>
        </section>
      )}

      {/* Problem / Solution / Outcome | scannable hook */}
      {(project.challenge || project.solution || project.result) && (
        <section className="py-16 bg-[#f4f4f4]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-2">Solution Summary</p>
            <h2 className="carbon-fluid-heading-05 text-[#161616] mb-8">
              {project.solutionName || project.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Problem */}
              {project.challenge && project.challenge.length > 0 && (
                <div className="p-6 relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#fa4d56] rounded-t-xl" />
                  <p className="carbon-label-01 text-[#fa4d56] uppercase tracking-wider mb-3">The Problem</p>
                  <p className="carbon-heading-02 text-[#161616] mb-2">
                    {project.challenge[0]}
                  </p>
                  {project.challenge.length > 1 && (
                    <p className="carbon-body-01 text-[#525252]">
                      {project.challenge.slice(1).join(' ')}
                    </p>
                  )}
                </div>
              )}

              {/* Solution */}
              {project.solution && project.solution.length > 0 && (
                <div className="p-6 relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0f62fe] rounded-t-xl" />
                  <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-3">The Solution</p>
                  <p className="carbon-heading-02 text-[#161616] mb-2">
                    {project.solution[0]}
                  </p>
                  {project.solution.length > 1 && (
                    <p className="carbon-body-01 text-[#525252] mb-3">
                      {project.solution.slice(1).join(' ')}
                    </p>
                  )}
                  {project.relatedServices && project.relatedServices.length > 0 && (
                    <Link
                      to={project.relatedServices[0].link}
                      className="inline-flex items-center gap-1.5 carbon-label-01 text-[#0f62fe] hover:text-[#0353e9] transition-colors"
                    >
                      View solution
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              )}

              {/* Outcome */}
              {project.result && project.result.length > 0 && (
                <div className="p-6 relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#24a148] rounded-t-xl" />
                  <p className="carbon-label-01 text-[#24a148] uppercase tracking-wider mb-3">The Outcome</p>
                  <p className="carbon-heading-02 text-[#161616] mb-2">
                    {project.result[0]}
                  </p>
                  {project.result.length > 1 && (
                    <p className="carbon-body-01 text-[#525252]">
                      {project.result.slice(1).join(' ')}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial | shared FeaturedTestimonial component */}
      {project.quote && (
        <section className="py-20 bg-[#161616]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="mb-8">
              <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-2">Client Voice</p>
              <h2 className="carbon-fluid-heading-05 text-[#f4f4f4]">Testimonials</h2>
            </div>

            <FeaturedTestimonial
              quote={project.quote.text}
              author={project.quote.author}
              role={project.quote.role}
              client={project.client || 'Client'}
              clientLogo={project.logo}
              bgImage={project.heroImage || project.logo}
              contextDesc={project.solutionName || project.description}
              contextLink={project.relatedServices?.[0]?.link || '/services'}
              solutionLink={project.relatedServices?.[0]?.link || '/services'}
              solutionLabel={project.relatedServices?.[0]?.name || 'Related Services'}
              variant="dark"
            />
          </div>
        </section>
      )}

      {/* Unified Story Section: Challenge → Solution → Outcome → Business Impact */}
      <section className="pt-20 pb-4 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Narrative Arc */}
          <div className="text-center mb-12">
            <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">
              {project.category || 'Case Study'}
            </span>
            <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
              From Challenge to Outcome
            </h2>
            <p className="carbon-body-02 text-[#525252] max-w-2xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Three-Act Story: Challenge | Solution | Outcome */}
          {project.challenges && (
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* Act 1: The Risk */}
              <div className="p-6 relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group/risk cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#fa4d56] rounded-t-xl"></div>
                <h3 className="carbon-heading-03 text-[#fa4d56] mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#fa4d56]/10 flex items-center justify-center rounded-md">
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
                <div className="p-6 relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group/response cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0f62fe] rounded-t-xl"></div>
                  <h3 className="carbon-heading-03 text-[#0f62fe] mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#0f62fe]/10 flex items-center justify-center rounded-md">
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
                <div className="p-6 relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group/outcome cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#24a148] rounded-t-xl"></div>
                  <h3 className="carbon-heading-03 text-[#24a148] mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#24a148]/10 flex items-center justify-center rounded-md">
                      <CheckmarkOutline className="w-5 h-5" />
                    </span>
                    The Outcome
                  </h3>
                  {/* Prominent Metrics */}
                  <div className="space-y-3 mb-5">
                    {project.metrics?.slice(1, 5).map((metric, idx) => (
                      <div key={idx} className="bg-[#f4f4f4] p-3 rounded-lg border-l-4" style={{ borderColor: idx === 0 ? '#24a148' : idx === 1 ? '#0f62fe' : idx === 2 ? '#06b6d4' : '#84cc16' }}>
                        <div className="text-2xl font-light" style={{ color: idx === 0 ? '#24a148' : idx === 1 ? '#0f62fe' : idx === 2 ? '#06b6d4' : '#84cc16' }}>
                          {metric.value}
                        </div>
                        <div className="carbon-label-01 text-[#525252] mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Full Results List */}
                  <div className="space-y-2 border-t border-gray-200 pt-4">
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
          )}

          {/* Before/After Visual Bridge */}
          {project.beforeAfter && (
            <div className="mb-10">
              <h3 className="carbon-heading-03 text-[#161616] mb-6 text-center">The Transformation</h3>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {/* Before Column */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-[#fa4d56]"></span>
                      <span className="carbon-label-01 text-[#fa4d56] uppercase tracking-wider font-semibold">Before</span>
                    </div>
                    <div className="space-y-3">
                      {project.beforeAfter.map((row, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
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
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
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
              <div className="text-center mb-8">
                <span className="carbon-label-02 uppercase tracking-[0.16px] text-[#0f62fe] mb-4 block">
                  Business Impact
                </span>
                <h3 className="carbon-fluid-heading-04 text-[#161616]">What This Means for the Business</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.businessBenefits.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 relative rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[#0f62fe] to-[#84cc16]"></div>
                    <h4 className="carbon-heading-02 text-[#161616] mb-3 pl-4">{item.benefit}</h4>
                    <p className="text-sm text-[#525252] mb-3 leading-relaxed pl-4">{item.how}</p>
                    <p className="carbon-helper-text-01 text-[#0f62fe] italic pl-4">"{item.context}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="pt-4 pb-16 bg-[#f4f4f4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setTechExpanded(!techExpanded)}
            className="w-full flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <span className="carbon-heading-02 text-[#161616]">Technology Stack</span>
            <div className="w-10 h-10 bg-[#f4f4f4] rounded-lg flex items-center justify-center group-hover:bg-[#0f62fe] transition-colors">
              {techExpanded ? (
                <ChevronUp className="w-5 h-5 text-[#525252] group-hover:text-white transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#525252] group-hover:text-white transition-colors" />
              )}
            </div>
          </button>

          {techExpanded && (
            <div className="mt-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div>
                <span className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider">Technologies:</span>
                <p className="carbon-body-short-01 text-[#161616] mt-2">{project.techStack}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Services */}
      {project.relatedServices && project.relatedServices.length > 0 && (
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="carbon-heading-03 text-[#161616] mb-6 text-center">Related Services You May Be Interested In</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.relatedServices.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-[#f4f4f4] text-[#525252] text-sm font-medium rounded-full border border-gray-200 hover:bg-[#0f62fe] hover:text-white hover:border-[#0f62fe] transition-all"
                >
                  {service.name}
                  <ArrowRight className="w-3 h-3 text-[#8d8d8d] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom CTA Section */}
      {project.ctaSection && (
        <section className="py-20 bg-[#0f62fe]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="carbon-fluid-heading-05 text-white mb-6">
              {project.ctaSection.headline}
            </h3>
            <p className="carbon-fluid-heading-03 text-blue-100 mb-8">
              {project.ctaSection.subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={project.ctaSection.primaryCta.link}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f62fe] font-semibold hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all rounded-lg"
              >
                {project.ctaSection.primaryCta.text}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={project.ctaSection.secondaryCta.link}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold border-2 border-white hover:bg-white/10 hover:-translate-y-0.5 transition-all rounded-lg"
              >
                {project.ctaSection.secondaryCta.text}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sticky CTA */}
      <div className="fixed bottom-6 left-6 z-50">
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
