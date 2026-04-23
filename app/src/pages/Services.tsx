import { Link } from 'react-router-dom';
import { 
  Cloud, Server, Database, Settings, Network, Brain, 
  ArrowRight, ChevronRight 
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';

const serviceCategories = [
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Strategic cloud adoption, migration, and optimisation services',
    icon: Cloud,
    link: '/services/cloud',
    color: 'bg-blue-500',
    services: [
      { title: 'Cloud Migration', link: '/services/cloud-migration' },
      { title: 'Cloud Management', link: '/services/cloud-management' },
      { title: 'Cloud Cost Optimisation', link: '/services/cloud-cost-optimization' },
      { title: 'DevOps & Delivery', link: '/services/devops-delivery' },
      { title: 'Container Platform', link: '/services/container-platform' },
      { title: 'Operations & Monitoring', link: '/services/operations-monitoring' },
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Hardware support, data center services, and 24×7 SLA support',
    icon: Server,
    link: '/services#infrastructure',
    color: 'bg-slate-500',
    services: [
      { title: 'Server Continuity', link: '/services/server-continuity' },
      { title: 'Data Center Services', link: '/services/datacenter' },
      { title: 'Hardware Support', link: '/services/hardware-support' },
      { title: '24×7 SLA Support', link: '/services/sla-support' },
      { title: 'Business Continuity', link: '/services/business-continuity' },
      { title: 'Network Operations', link: '/services/network-monitoring' },
    ]
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description: 'Transform data into actionable insights',
    icon: Database,
    link: '/services#data',
    color: 'bg-green-500',
    services: [
      { title: 'IoT Data Analytics', link: '/services/iot-analytics' },
      { title: 'Data Lakes & Warehousing', link: '/services/data-lakes' },
      { title: 'Geospatial Analytics', link: '/services/geospatial' },
      { title: 'Data Federation', link: '/services/data-federation' },
      { title: 'Database Optimisation', link: '/services/database-optimisation' },
    ]
  },
  {
    id: 'platforms',
    title: 'IT Platforms',
    description: 'ServiceNow, IBM Maximo, and custom platform implementations',
    icon: Settings,
    link: '/services#platforms',
    color: 'bg-purple-500',
    services: [
      { title: 'ServiceNow', link: '/services/servicenow' },
      { title: 'IBM Maximo', link: '/services/maximo' },
      { title: 'Jira Service Management', link: '/services/jira-service-management' },
      { title: 'Service Desk', link: '/services/service-desk' },
      { title: 'Custom Development', link: '/services/custom-development' },
    ]
  },
  {
    id: 'ai',
    title: 'AI Services',
    description: 'AI-first services for intelligent operations',
    icon: Brain,
    link: '/services#ai',
    color: 'bg-indigo-500',
    services: [
      { title: 'AI Accelerator', link: '/services/ai-accelerator' },
      { title: 'AI Model Development', link: '/services/ai-model-development' },
      { title: 'MLOps', link: '/services/mlops' },
      { title: 'AI Consulting', link: '/services/ai-consulting' },
    ]
  },
  {
    id: 'operations',
    title: 'Operations',
    description: '24/7 Observability & Support - Your eyes and hands',
    icon: Network,
    link: '/services#operations',
    color: 'bg-orange-500',
    services: [
      { title: 'Observability Platform', link: '/services/observability' },
      { title: 'Logging & Tracing', link: '/services/logging-tracing' },
      { title: 'Alerting Rules', link: '/services/alerting-rules' },
      { title: 'Network Monitoring', link: '/services/network-monitoring' },
      { title: 'Cross-Domain Automation', link: '/services/cross-domain-automation' },
      { title: 'AIOps', link: '/services/aiops' },
    ]
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              From Hardware to Cloud
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT services spanning infrastructure, cloud, data, platforms, and AI. 
              One partner, complete accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className={`h-2 ${category.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${category.color} bg-opacity-10 flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {category.services.slice(0, 4).map((service, idx) => (
                        <Link 
                          key={idx}
                          to={service.link}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-blue-600">{service.title}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </Link>
                      ))}
                    </div>
                    
                    <Link 
                      to={category.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      View All {category.title}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our experts can help you identify the best solutions for your business needs.
          </p>
          <a 
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
