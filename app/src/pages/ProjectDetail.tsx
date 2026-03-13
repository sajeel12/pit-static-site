import { useState } from 'react';
import { ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';

interface Project {
  id: string;
  title: string;
  track: 'services' | 'infrastructure';
  serviceCategories: string[];
  category: string;
  industry: string;
  outcome: string;
  techStack: string;
  description: string;
  slug: string;
  client?: string;
  challenge?: string[];
  solution?: string[];
  result?: string[];
  metrics?: { label: string; value: string }[];
  quote?: {
    text: string;
    author: string;
    role: string;
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
      'No proactive alerting—issues discovered through customer complaints',
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
    client: 'Regional Stock Exchange',
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
    quote: {
      text: "The observability platform Perception IT built gives us complete confidence in our trading infrastructure. We can now detect and resolve issues before they impact the market.",
      author: 'Chief Technology Officer',
      role: 'Regional Stock Exchange',
    },
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
    slug: 'network-performance-optimization',
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
      'Processing delays eliminated—sub-second handling',
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
];

const ProjectDetail = () => {
  const [techExpanded, setTechExpanded] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  
  const project = projectsData.find(p => p.slug === slug) || projectsData[0];
  
  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const prevProject = projectsData[currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1];
  const nextProject = projectsData[currentIndex < projectsData.length - 1 ? currentIndex + 1 : 0];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/projects" className="hover:text-[#2563EB] transition-colors">Projects</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-gray-400">{project.category}</span>
            <ArrowRight className="w-3 h-3" />
            <span className="text-[#1A1A1A] font-medium truncate max-w-[200px]">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative bg-gray-100 aspect-video max-h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Case Study Image</div>
            <div className="text-sm text-gray-500">{project.category} — {project.industry}</div>
          </div>
        </div>
      </div>

      {/* Header Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-[#2563EB] text-white text-sm font-medium rounded-full">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              {project.industry}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {project.description}
          </p>
          
          {project.client && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <span className="text-sm text-gray-500">Client:</span>
              <span className="ml-2 text-[#1A1A1A] font-medium">{project.client}</span>
            </div>
          )}
        </div>
      </section>

      {/* Metrics Bar */}
      {project.metrics && (
        <section className="py-8 bg-[#F3F4F6] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2563EB]">{metric.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge | Solution | Result */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Challenge */}
            {project.challenge && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-sm">!</span>
                  Challenge
                </h2>
                <ul className="space-y-3">
                  {project.challenge.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#2563EB]/10 text-[#2563EB] rounded-lg flex items-center justify-center text-sm">✓</span>
                  Solution
                </h2>
                <ul className="space-y-3">
                  {project.solution.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Result */}
            {project.result && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-sm">↑</span>
                  Result
                </h2>
                <ul className="space-y-3">
                  {project.result.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setTechExpanded(!techExpanded)}
            className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-[#1A1A1A]">Technology Stack</span>
            {techExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {techExpanded && (
            <div className="mt-4 p-6 bg-gray-50 rounded-lg">
              <div>
                <span className="text-sm font-medium text-gray-500">Technologies:</span>
                <p className="text-[#1A1A1A] mt-1">{project.techStack}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quote Block */}
      {project.quote && (
        <section className="py-16 bg-[#2563EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8">
              "{project.quote.text}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold">
                {project.quote.author.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-white font-medium">{project.quote.author}</div>
                <div className="text-white/70 text-sm">{project.quote.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation Footer */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-gray-600 hover:text-[#2563EB] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm truncate max-w-[150px]">{prevProject.title}</span>
            </Link>
            
            <Link
              to="/projects"
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              View All Projects
            </Link>
            
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-gray-600 hover:text-[#2563EB] transition-colors"
            >
              <span className="text-sm truncate max-w-[150px]">{nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors"
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
