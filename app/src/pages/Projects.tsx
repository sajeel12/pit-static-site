import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, X, Phone, FileText, Quote } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';

interface Project {
  id: string;
  title: string;
  category: string;
  track: 'services' | 'infrastructure';
  serviceCategories: string[];
  industry: string;
  outcome: string;
  techStack: string;
  description: string;
  slug: string;
}

const Projects = () => {
  const [activeTrack, setActiveTrack] = useState<'services' | 'infrastructure'>('services');
  const [activeServiceFilter, setActiveServiceFilter] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [activeOutcome, setActiveOutcome] = useState('all');
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowStickyHeader(heroBottom < 80);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    { id: 'all', name: 'All', count: 30 },
    { id: 'cloud-cost', name: 'Cloud & Cost Optimisation', count: 2 },
    { id: 'cloud-infra', name: 'Cloud Infrastructure & DevOps', count: 7 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 5 },
    { id: 'ai-agents', name: 'AI Agents & Automation', count: 3 },
    { id: 'itsm', name: 'IT Service Management', count: 10 },
    { id: 'managed', name: 'Managed IT Services', count: 6 },
    { id: 'monitoring', name: 'Monitoring & Observability', count: 6 },
  ];

  const infrastructureCategories = [
    { id: 'all', name: 'All', count: 1 },
    { id: 'out-of-warranty', name: 'Out of Warranty Support', count: 1 },
    { id: 'sla', name: '24×7 Service Level Agreements', count: 2 },
    { id: 'datacenter', name: 'Data Center Services', count: 1 },
    { id: 'continuity', name: 'Business Continuity', count: 2 },
    { id: 'security', name: 'Security Monitoring and Audit', count: 2 },
  ];

  const industries = [
    { id: 'all', name: 'All' },
    { id: 'telecom', name: 'Telecommunications' },
    { id: 'banking', name: 'Banking & Finance' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'realestate', name: 'Real Estate' },
    { id: 'government', name: 'Government' },
    { id: 'energy', name: 'Energy & Utilities' },
  ];

  const outcomes = [
    { id: 'all', name: 'All' },
    { id: 'cost-reduction', name: 'Reduce Costs' },
    { id: 'sla-stability', name: 'Improve Uptime/SLA' },
    { id: 'delivery-acceleration', name: 'Accelerate Delivery' },
    { id: 'risk-mitigation', name: 'Mitigate Risk' },
    { id: 'scale-enablement', name: 'Enable Scale' },
  ];

  const projects: Project[] = [
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
    },
    {
      id: '7',
      title: 'Enhancing Accuracy, Reporting, and Auditability through Service Management Process Implementation',
      track: 'services',
      serviceCategories: ['itsm'],
      category: 'IT Service Management',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'IBM, Maximo, DB2, Java',
      description: 'Transformed reactive maintenance into data-driven operations with full audit trails, improving compliance readiness and operational decision-making for telecom infrastructure.',
      slug: 'servicemanagement-process-implementation',
    },
    {
      id: '8',
      title: 'Scaling IT Service Management delivery using advanced database solutions',
      track: 'services',
      serviceCategories: ['itsm', 'cloud-infra'],
      category: 'IT Service Management',
      industry: 'telecom',
      outcome: 'scale-enablement',
      techStack: 'DB2, PureScale, Maximo',
      description: 'Architected high-availability database infrastructure that eliminated performance bottlenecks, enabling the ITSM platform to scale with business growth without service degradation.',
      slug: 'itsm-database-scaling',
    },
    {
      id: '9',
      title: 'Integrating Asset Management with ITSM for Enhanced Efficiency',
      track: 'services',
      serviceCategories: ['itsm'],
      category: 'IT Service Management',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'Maximo',
      description: 'Unified asset and service management data, giving operations teams complete visibility into infrastructure health and maintenance history for better planning.',
      slug: 'asset-management-itsm-integration',
    },
    {
      id: '10',
      title: 'Enhancing Telecom Operations with IT Service Management Process Implementation',
      track: 'services',
      serviceCategories: ['itsm'],
      category: 'IT Service Management',
      industry: 'telecom',
      outcome: 'sla-stability',
      techStack: 'IBM, Maximo',
      description: 'Implemented ITIL-aligned service management processes, improving change control, reducing unplanned outages, and establishing clear accountability for infrastructure decisions.',
      slug: 'telecom-itsm-processes',
    },
    {
      id: '11',
      title: 'Telco Service Desk IT Process Migration to ServiceNow',
      track: 'services',
      serviceCategories: ['itsm', 'cloud-infra'],
      category: 'IT Service Management',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'ServiceNow, Maximo, DB2, Cloud',
      description: 'Migrated legacy service desk to modern cloud platform, improving agent productivity and enabling self-service capabilities for routine requests.',
      slug: 'servicenow-migration-telco',
    },
    {
      id: '12',
      title: 'Streamlining Incident Management with Automated Ticketing',
      track: 'services',
      serviceCategories: ['itsm', 'ai-agents'],
      category: 'IT Service Management',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'Java, Kafka, Kubernetes, Cloud, Pipelines',
      description: 'Built event-driven automation that routes incidents to the right teams instantly, reducing manual handoffs and accelerating resolution for critical system alerts.',
      slug: 'automated-incident-management',
    },
    {
      id: '13',
      title: 'Integrating reporting services with enterprise security solutions for Government Services',
      track: 'services',
      serviceCategories: ['itsm', 'security'],
      category: 'IT Service Management',
      industry: 'government',
      outcome: 'risk-mitigation',
      techStack: 'Java, Cognos',
      description: 'Built secure analytics and reporting capabilities for customs and trade operations, enabling data-driven policy decisions while maintaining strict security controls.',
      slug: 'government-reporting-security',
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
    },
    {
      id: '15',
      title: 'Managed Services Support and Consultancy',
      track: 'services',
      serviceCategories: ['managed', 'sla'],
      category: 'Managed IT Services',
      industry: 'banking',
      outcome: 'sla-stability',
      techStack: 'Websphere, DB2, HTTP Server',
      description: 'Provided ongoing operational support and strategic consultancy for banking infrastructure, ensuring compliance and system stability for critical financial services.',
      slug: 'banking-managed-services',
    },
    {
      id: '16',
      title: 'Overcoming Data Collection Challenges for Mobile Tower Management',
      track: 'services',
      serviceCategories: ['managed', 'ai-agents'],
      category: 'Managed IT Services',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'Java, AWS, Pipelines',
      description: 'Automated manual data collection workflows, eliminating spreadsheet-based processes and ensuring accurate, real-time tower inventory and status information.',
      slug: 'tower-data-collection-automation',
    },
    {
      id: '17',
      title: 'Real-Time Geospatial Monitoring for Mobile Infrastructure',
      track: 'services',
      serviceCategories: ['managed', 'monitoring'],
      category: 'Managed IT Services',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'Java, Netcool, WebSphere',
      description: 'Delivered map-based visualization of tower status across regions, enabling field teams to prioritize site visits and reduce travel time for maintenance.',
      slug: 'geospatial-tower-monitoring',
    },
    {
      id: '18',
      title: 'Analysis and Visualisation of Regional Mobile Tower Availability Data',
      track: 'services',
      serviceCategories: ['managed', 'ai-ml'],
      category: 'Managed IT Services',
      industry: 'telecom',
      outcome: 'scale-enablement',
      techStack: 'Java, Netcool, WebSphere',
      description: 'Created executive dashboards showing tower availability trends, enabling data-driven investment decisions for network expansion and infrastructure upgrades.',
      slug: 'tower-availability-analytics',
    },
    {
      id: '19',
      title: 'Leveraging IoT for Enhanced Telecommunication Tower Analytics',
      track: 'services',
      serviceCategories: ['ai-ml', 'monitoring'],
      category: 'AI & Machine Learning',
      industry: 'telecom',
      outcome: 'sla-stability',
      techStack: 'AWS, MQTT, IoT',
      description: 'Enabled real-time visibility into tower performance across thousands of sites, shifting from reactive repairs to predictive maintenance and reducing service disruptions.',
      slug: 'iot-tower-analytics',
    },
    {
      id: '20',
      title: 'Enhancing Telco Operations with Data Analytics',
      track: 'services',
      serviceCategories: ['ai-ml', 'cloud-infra'],
      category: 'AI & Machine Learning',
      industry: 'telecom',
      outcome: 'scale-enablement',
      techStack: 'Databricks, Azure, Data Lake, Kafka, IoT',
      description: 'Transformed raw network data into actionable insights, enabling operations teams to identify patterns and optimize performance across the telecommunications infrastructure.',
      slug: 'telco-data-analytics',
    },
    {
      id: '21',
      title: 'Revolutionising Data Access with Dremio',
      track: 'services',
      serviceCategories: ['ai-ml', 'cloud-cost'],
      category: 'AI & Machine Learning',
      industry: 'telecom',
      outcome: 'scale-enablement',
      techStack: 'AWS, Data Lake, Dremio',
      description: 'Unified disparate data sources into a single query layer, eliminating data silos and enabling self-service analytics for business users without engineering bottlenecks.',
      slug: 'dremio-data-federation',
    },
    {
      id: '22',
      title: "Advancing Farmdar's Agritech Platform",
      track: 'services',
      serviceCategories: ['ai-ml', 'ai-agents'],
      category: 'AI & Machine Learning',
      industry: 'agriculture',
      outcome: 'scale-enablement',
      techStack: 'AI, DevOps, Cloud, DataOps',
      description: 'Enhanced data platform scalability and reliability, enabling faster agricultural insights delivery and supporting business growth across new markets.',
      slug: 'farmdar-agritech-platform',
    },
    {
      id: '22b',
      title: 'Cloud Infrastructure Modernization for Agritech Scale',
      track: 'services',
      serviceCategories: ['cloud-infra', 'cloud-cost'],
      category: 'Cloud Infrastructure & DevOps',
      industry: 'agriculture',
      outcome: 'scale-enablement',
      techStack: 'Kubernetes, Docker, AWS, CI/CD, Terraform',
      description: 'Containerized monolithic application into microservices architecture with automated deployments, reducing infrastructure costs by 60% while supporting 10x user growth.',
      slug: 'farmdar-devops-transformation',
    },
    {
      id: '23',
      title: 'Gaining new Mobile Tower insights with IoT and MQTT',
      track: 'services',
      serviceCategories: ['ai-ml', 'monitoring'],
      category: 'AI & Machine Learning',
      industry: 'telecom',
      outcome: 'scale-enablement',
      techStack: 'AWS, MQTT, IoT',
      description: 'Implemented lightweight IoT protocols for remote tower monitoring, enabling real-time status updates even in areas with limited connectivity.',
      slug: 'iot-mqtt-tower-insights',
    },
    {
      id: '24',
      title: 'Easy to Manage Cloud Infrastructure for IoT Data Collection and Visualisation',
      track: 'services',
      serviceCategories: ['cloud-infra', 'datacenter'],
      category: 'Cloud Infrastructure & DevOps',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'Terraform, AWS, Pipelines, IoT',
      description: 'Deployed infrastructure-as-code platform that enabled rapid IoT deployment with automated scaling, reducing time-to-market for new connected services.',
      slug: 'cloud-infrastructure-iot',
    },
    {
      id: '25',
      title: 'Cloud-Native DevOps for Telecommunication with AWS and Kubernetes',
      track: 'services',
      serviceCategories: ['cloud-infra', 'continuity'],
      category: 'Cloud Infrastructure & DevOps',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'Kubernetes, Cloud, AWS, Pipelines',
      description: 'Modernized deployment practices with container orchestration, enabling faster feature releases and improved system resilience for telecom service platforms.',
      slug: 'kubernetes-devops-telco',
    },
    {
      id: '26',
      title: 'Streamlining Citizen Identity Management with Middleware Solutions',
      track: 'services',
      serviceCategories: ['cloud-infra', 'sla'],
      category: 'Cloud Infrastructure & DevOps',
      industry: 'government',
      outcome: 'sla-stability',
      techStack: 'IBM, WebSphere',
      description: 'Deployed robust middleware infrastructure supporting national identity services, ensuring system availability for millions of citizen transactions.',
      slug: 'identity-management-middleware',
    },
    {
      id: '27',
      title: 'Innovating Property Management Through Effective Communication and Service Brokerage',
      track: 'services',
      serviceCategories: ['cloud-infra', 'ai-agents'],
      category: 'Cloud Infrastructure & DevOps',
      industry: 'realestate',
      outcome: 'delivery-acceleration',
      techStack: 'Angular, GCP, Pipelines, AI',
      description: 'Built a unified platform connecting property managers, tenants, and service providers, streamlining communication and reducing response times for maintenance requests.',
      slug: 'property-management-platform',
    },
    {
      id: '28',
      title: 'Ensuring Continuous Manufacturing Operations with Reliable Hardware Support',
      track: 'infrastructure',
      serviceCategories: ['out-of-warranty', 'sla', 'continuity'],
      category: 'Out of Warranty Support',
      industry: 'manufacturing',
      outcome: 'cost-reduction',
      techStack: 'Server',
      description: 'Provided third-party hardware lifecycle management that extended equipment lifespan and eliminated vendor lock-in, maintaining production continuity at 60% lower support costs.',
      slug: 'manufacturing-hardware-support',
    },
    {
      id: '29',
      title: 'Managed Services Outsourcing for Enterprise Operations',
      track: 'services',
      serviceCategories: ['managed', 'sla'],
      category: 'Managed IT Services',
      industry: 'telecom',
      outcome: 'cost-reduction',
      techStack: 'ITIL, ServiceNow, NOC',
      description: 'Transitioned in-house IT operations to fully managed service model, reducing operational overhead by 45% while improving service levels and enabling internal teams to focus on strategic initiatives.',
      slug: 'managed-services-outsourcing',
    },
    {
      id: '30',
      title: 'Service Desk Implementation and Support',
      track: 'services',
      serviceCategories: ['itsm', 'managed'],
      category: 'IT Service Management',
      industry: 'banking',
      outcome: 'sla-stability',
      techStack: 'ServiceNow, ITIL, Automation',
      description: 'Designed and deployed enterprise service desk from scratch, achieving 90% first-call resolution and reducing average handle time by 35% through intelligent routing and knowledge base integration.',
      slug: 'service-desk-implementation-support',
    },
    {
      id: '31',
      title: 'Telecom Infrastructure Enhanced Asset Management',
      track: 'services',
      serviceCategories: ['itsm', 'monitoring'],
      category: 'IT Service Management',
      industry: 'telecom',
      outcome: 'delivery-acceleration',
      techStack: 'IBM Maximo, GIS, IoT Sensors',
      description: 'Integrated asset management with real-time monitoring for telecom infrastructure, enabling predictive maintenance and reducing unplanned downtime by 40% across thousands of network elements.',
      slug: 'telecom-infrastructure-enhanced-asset-management',
    },
    {
      id: '32',
      title: 'Comprehensive Service Management Overhaul for Mobile Network',
      track: 'services',
      serviceCategories: ['itsm', 'managed', 'monitoring'],
      category: 'IT Service Management',
      industry: 'telecom',
      outcome: 'scale-enablement',
      techStack: 'ServiceNow, IBM, Netcool',
      description: 'End-to-end transformation of service management processes for mobile operator, unifying incident, problem, and change management with automated workflows and executive dashboards.',
      slug: 'comprehensive-service-management-overhaul-mobile-network',
    },
  ];

  const featuredProjectIds = ['19', '2', '28', '22', '11'];

  const filteredProjects = projects.filter(project => {
    if (project.track !== activeTrack) return false;
    if (activeServiceFilter !== 'all' && !project.serviceCategories.includes(activeServiceFilter)) return false;
    if (activeIndustry !== 'all' && project.industry !== activeIndustry) return false;
    if (activeOutcome !== 'all' && project.outcome !== activeOutcome) return false;
    return true;
  });

  const featuredProjects = projects.filter(p => featuredProjectIds.includes(p.id));
  const archiveProjects = filteredProjects.filter(p => !featuredProjectIds.includes(p.id));

  const isFiltered = activeServiceFilter !== 'all' || activeIndustry !== 'all' || activeOutcome !== 'all';

  const currentCategories = activeTrack === 'services' ? serviceCategories : infrastructureCategories;

  const getActiveFilterCount = () => {
    let count = 0;
    if (activeServiceFilter !== 'all') count++;
    if (activeIndustry !== 'all') count++;
    if (activeOutcome !== 'all') count++;
    return count;
  };

  const clearFilters = () => {
    setActiveServiceFilter('all');
    setActiveIndustry('all');
    setActiveOutcome('all');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Sticky Header */}
      {showStickyHeader && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[#1A1A1A]">Projects</span>
                <div className="h-4 w-px bg-gray-200" />
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTrack('services')}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                      activeTrack === 'services'
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => setActiveTrack('infrastructure')}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                      activeTrack === 'infrastructure'
                        ? 'bg-slate-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Infrastructure
                  </button>
                </div>
                {getActiveFilterCount() > 0 && (
                  <>
                    <div className="h-4 w-px bg-gray-200" />
                    <span className="text-xs text-gray-500">
                      {getActiveFilterCount()} filter{getActiveFilterCount() > 1 ? 's' : ''} active
                    </span>
                  </>
                )}
              </div>
              <a
                href="/#contact"
                className="px-4 py-2 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
              Enterprise Impact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Real Results for Complex IT Challenges
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              See how telcos, banks, and manufacturers reduced costs, improved uptime, 
              and accelerated delivery—with full lifecycle ownership.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <span>Huawei Enterprise Partner</span>
              <span className="text-gray-300">|</span>
              <span>EZY Distribution Alliance</span>
              <span className="text-gray-300">|</span>
              <span>14+ Years Supporting Critical Systems</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-[#1A1A1A] font-medium rounded-lg hover:border-gray-400 transition-colors"
              >
                Filter by Industry
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Track Selector */}
      <section id="filters" className="py-6 bg-[#F3F4F6] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-sm font-medium text-gray-500">View projects by:</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setActiveTrack('services');
                  setActiveServiceFilter('all');
                }}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  activeTrack === 'services'
                    ? 'bg-[#2563EB] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => {
                  setActiveTrack('infrastructure');
                  setActiveServiceFilter('all');
                }}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  activeTrack === 'infrastructure'
                    ? 'bg-slate-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
              >
                Infrastructure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Filters */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {currentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveServiceFilter(cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeServiceFilter === cat.id
                    ? activeTrack === 'services'
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-slate-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
                <span className={`text-xs ${activeServiceFilter === cat.id ? 'text-white/70' : 'text-gray-400'}`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Filters */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <select
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] cursor-pointer"
              >
                {industries.map((ind) => (
                  <option key={ind.id} value={ind.id}>{ind.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={activeOutcome}
                onChange={(e) => setActiveOutcome(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] cursor-pointer"
              >
                {outcomes.map((out) => (
                  <option key={out.id} value={out.id}>{out.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-gray-500">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </span>
              {getActiveFilterCount() > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-[#2563EB] hover:text-blue-700"
                >
                  <X className="w-3 h-3" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Results (when filters active) */}
      {isFiltered && (
        <section className="py-12 bg-[#F8FAFC] border-l-4 border-[#2563EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Feedback Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <span className="text-sm font-medium text-gray-500">Active filters:</span>
              {activeServiceFilter !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium rounded-full">
                  {currentCategories.find(c => c.id === activeServiceFilter)?.name}
                  <button 
                    onClick={() => setActiveServiceFilter('all')}
                    className="hover:bg-[#2563EB]/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeIndustry !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium rounded-full">
                  {industries.find(i => i.id === activeIndustry)?.name}
                  <button 
                    onClick={() => setActiveIndustry('all')}
                    className="hover:bg-[#2563EB]/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeOutcome !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium rounded-full">
                  {outcomes.find(o => o.id === activeOutcome)?.name}
                  <button 
                    onClick={() => setActiveOutcome('all')}
                    className="hover:bg-[#2563EB]/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <div className="ml-auto flex items-center gap-4">
                <span className="text-sm font-medium text-[#1A1A1A]">
                  {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''}
                </span>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#2563EB] hover:bg-[#2563EB]/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear all
                </button>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">
              {filteredProjects.length > 0 
                ? 'Search Results'
                : 'No projects match these filters'
              }
            </h2>
            
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ArchiveProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Try adjusting your filters or browse all projects.</p>
                <button
                  onClick={clearFilters}
                  className="px-5 py-2.5 bg-[#2563EB] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Featured Projects Section */}
      <section className={`py-16 ${isFiltered ? 'bg-[#F3F4F6]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isFiltered && (
            <h2 className="text-xl font-semibold text-[#1A1A1A] mb-8">
              Also explore our featured projects
            </h2>
          )}
          {!isFiltered && (
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Featured Projects</h2>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial 1 */}
      <section className="py-16 bg-[#2563EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-white/30 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8">
            "Perception IT transformed our network operations with their observability platform. 
            Their team's expertise in Netcool and enterprise monitoring is unmatched in the region."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              [PHOTO]
            </div>
            <div className="text-left">
              <div className="text-white font-medium">Head of Network Operations</div>
              <div className="text-white/70 text-sm">Jazz Telecom, Pakistan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
            See a project similar to your challenge?
          </h3>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Book a 15-Minute Diagnostic Call
          </a>
        </div>
      </section>

      {/* Archive Projects (when no filters) */}
      {!isFiltered && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {archiveProjects.map((project) => (
                <ArchiveProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial 2 */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-gray-300 mx-auto mb-6" />
          <blockquote className="text-xl sm:text-2xl text-[#1A1A1A] font-medium leading-relaxed mb-8">
            "The team at Perception IT delivered our agritech platform enhancements on time and within budget. 
            Their cloud expertise helped us scale to new markets faster than we thought possible."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-semibold text-sm">
              [PHOTO]
            </div>
            <div className="text-left">
              <div className="text-[#1A1A1A] font-medium">Chief Technology Officer</div>
              <div className="text-gray-500 text-sm">Farmdar, Pakistan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Can't find your industry?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We operate under strict NDA. Many of our most impactful projects remain confidential.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Request Private Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Featured Project Card Component
const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300"
    >
      <div className="relative bg-gray-100 aspect-[4/3] flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Image</div>
          <div className="text-xs text-gray-400">{project.category}</div>
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          <span className="px-2 py-0.5 bg-[#2563EB] text-white text-[10px] font-medium rounded">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#1A1A1A] text-sm mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {project.description}
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] group-hover:gap-2 transition-all">
          View Case Study
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
};

// Archive Project Card Component
const ArchiveProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300"
    >
      <div className="relative bg-gray-100 aspect-video flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Image</div>
          <div className="text-xs text-gray-400">{project.category}</div>
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          <span className="px-2 py-0.5 bg-[#2563EB] text-white text-[10px] font-medium rounded">
            {project.category}
          </span>
          <span className="px-2 py-0.5 bg-white/90 text-gray-600 text-[10px] font-medium rounded">
            {project.industry === 'telecom' ? 'Telecommunications' : 
             project.industry === 'banking' ? 'Banking' : 
             project.industry === 'manufacturing' ? 'Manufacturing' :
             project.industry === 'agriculture' ? 'Agriculture' :
             project.industry === 'realestate' ? 'Real Estate' :
             project.industry === 'government' ? 'Government' : 'Other'}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {project.description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] group-hover:gap-2 transition-all">
          View Case Study
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

export default Projects;
