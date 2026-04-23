import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';
import { 
  Cloud, Server, Brain, ArrowRight, 
  TrendingUp, Cpu, Lock, Radio
} from 'lucide-react';

/**
 * Cover2 - IBM-Style Prototype Landing Page
 * 
 * Redesigned with thematic grouping and progressive disclosure
 * to reduce cognitive load and guide user flow.
 * 
 * Access at: /#/cover2
 */
const Cover2 = () => {
  return (
    <>
      <Navigation />
      <main className="bg-[#F5F7FA]">
        
        {/* SECTION 1: Hero - Simplified, Focused */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2C50] via-[#143D6B] to-[#1F4E8C] text-white">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>
          
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#00A9E0] mb-6">
                Enterprise IT Solutions
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Engineering Competitive Advantage
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
                From hardware to cloud - one partner for complete infrastructure transformation. 
                We integrate cloud, infrastructure, and AI into unified systems that drive measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#00A9E0] text-white font-bold hover:bg-[#0891C9] transition-all shadow-lg hover:shadow-xl"
                >
                  Start Migration Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/services/cloud" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Thematic Gateways - 3 Pillars */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2939] mb-4">
                Built for What Matters
              </h2>
              <p className="text-lg text-[#475569] max-w-2xl mx-auto">
                Three pillars of enterprise capability, integrated for impact. 
                Choose your path to transformation.
              </p>
            </div>

            <div className="space-y-6">
              {/* Cloud Pillar */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E9EDF4]">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#00A9E0] to-[#30C0D2]" />
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex items-center gap-6 lg:w-1/3">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00A9E0] to-[#30C0D2] flex items-center justify-center flex-shrink-0">
                        <Cloud className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1D2939]">Cloud</h3>
                        <p className="text-[#475569]">The foundation of modern IT</p>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {['Cost Optimisation', 'DevOps & Delivery', 'Container Platform', 'Operations'].map((item) => (
                          <span key={item} className="px-3 py-2 bg-[#F1F5F9] rounded-lg text-sm text-[#475569] text-center">
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to="/services/cloud" 
                        className="inline-flex items-center gap-2 text-[#00A9E0] font-semibold hover:text-[#0A2C50] transition-colors"
                      >
                        Explore Cloud Services <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infrastructure Pillar */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E9EDF4]">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#1F4E8C] to-[#0A2C50]" />
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex items-center gap-6 lg:w-1/3">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1F4E8C] to-[#0A2C50] flex items-center justify-center flex-shrink-0">
                        <Server className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1D2939]">Infrastructure</h3>
                        <p className="text-[#475569]">The backbone of operations</p>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {['Server Continuity', 'Data Center', 'Hardware Support', 'Network Operations'].map((item) => (
                          <span key={item} className="px-3 py-2 bg-[#F1F5F9] rounded-lg text-sm text-[#475569] text-center">
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to="/services/infrastructure" 
                        className="inline-flex items-center gap-2 text-[#1F4E8C] font-semibold hover:text-[#0A2C50] transition-colors"
                      >
                        Explore Infrastructure <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Pillar */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E9EDF4]">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#00B16A] to-[#10B981]" />
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex items-center gap-6 lg:w-1/3">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00B16A] to-[#10B981] flex items-center justify-center flex-shrink-0">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1D2939]">AI</h3>
                        <p className="text-[#475569]">The intelligence layer</p>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        {['MLOps', 'Data Observability', 'AI Consulting'].map((item) => (
                          <span key={item} className="px-3 py-2 bg-[#F1F5F9] rounded-lg text-sm text-[#475569] text-center">
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to="/services/ai" 
                        className="inline-flex items-center gap-2 text-[#00B16A] font-semibold hover:text-[#047857] transition-colors"
                      >
                        Explore AI Services <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Ready for What's Next - Emerging Tech */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
              <div>
                <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#00A9E0] mb-3">
                  Future-Ready Capabilities
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2939]">
                  Ready for What's Next
                </h2>
              </div>
              <Link 
                to="/services" 
                className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-[#0A2C50] font-semibold hover:text-[#00A9E0] transition-colors"
              >
                View all capabilities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-lg text-[#475569] max-w-3xl mb-10">
              Capabilities that separate market leaders from followers. 
              Stay ahead of the technology curve.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Cpu, 
                  title: 'AI Agents', 
                  description: 'Autonomous systems that execute complex workflows without human intervention.'
                },
                { 
                  icon: Lock, 
                  title: 'Quantum-Safe Security', 
                  description: 'Cryptography ready for the post-quantum era. Protect tomorrow\'s data today.'
                },
                { 
                  icon: Radio, 
                  title: 'Edge Computing', 
                  description: 'Process data where it\'s generated. Reduce latency, improve reliability.'
                },
                { 
                  icon: TrendingUp, 
                  title: 'FinOps Maturity', 
                  description: 'AI-enabled cost intelligence at scale. Optimise spend across multi-cloud.'
                },
              ].map((tile) => (
                <div 
                  key={tile.title}
                  className="group p-6 rounded-xl bg-white border border-[#E9EDF4] shadow-sm hover:shadow-lg hover:border-[#00A9E0]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00A9E0]/10 flex items-center justify-center mb-4">
                    <tile.icon className="w-6 h-6 text-[#00A9E0] brightness-75" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1D2939] mb-2">{tile.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4">{tile.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A2C50] group-hover:text-[#00A9E0] transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Client Success - Case Studies (Original Design) */}
        <section className="py-24 lg:py-32 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                  Client Success
                </span>
                <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
                  Outcomes, Not Just Outputs
                </h2>
                <p className="text-lg text-gray-600">
                  Measurable results from enterprise transformations.
                </p>
              </div>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
              >
                View all projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  metric: '4x ROI',
                  metricLabel: 'Return on Investment',
                  title: 'Telecom Cloud Migration',
                  description: 'Migrated 10,000+ workloads with zero downtime and 40% cost reduction within 6 months.',
                  client: 'Major Asian Telecom',
                  industry: 'Telecommunications',
                  tags: ['Cloud', 'Migration', 'Cost Optimisation'],
                  slug: 'telecom-cloud-migration',
                },
                {
                  metric: '$2.3M',
                  metricLabel: 'Annual Savings',
                  title: 'FinOps Implementation',
                  description: 'Implemented cost governance that identified waste and optimised reserved instance coverage.',
                  client: 'Regional Stock Exchange',
                  industry: 'Banking & Finance',
                  tags: ['FinOps', 'Cost Management', 'Governance'],
                  slug: 'finops-implementation',
                },
                {
                  metric: '99.999%',
                  metricLabel: 'Uptime SLA',
                  title: 'Infrastructure Resilience',
                  description: 'Built multi-region failover with automated recovery reducing MTTR from hours to minutes.',
                  client: 'African Telecom Operator',
                  industry: 'Telecommunications',
                  tags: ['Resilience', 'Multi-Region', 'Automation'],
                  slug: 'infrastructure-resilience',
                },
              ].map((project) => (
                <Link
                  key={project.slug}
                  to={`/projects/case-study/${project.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-500"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-semibold text-gray-400">{project.client.charAt(0)}</span>
                      </div>
                      <span className="text-xs text-gray-400">Project Image</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-blue-500">{project.client}</span>
                      <span className="text-xs text-gray-500">{project.industry}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metric */}
                    <div className="flex items-center gap-4 mb-4 py-3 border-y border-gray-100">
                      <div className="text-2xl font-light text-blue-500">{project.metric}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{project.metricLabel}</div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500 bg-gray-100 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Trust Bar (Original Design) */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { value: '99.999%', label: 'Uptime SLA' },
                { value: '120+', label: 'Enterprise Deliverables' },
                { value: '15', label: 'Global Regions' },
                { value: '24/7', label: 'Support Coverage' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Partner Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {[
                { initials: 'AWS', name: 'AWS Partner' },
                { initials: 'AZ', name: 'Azure' },
                { initials: 'GCP', name: 'Google Cloud' },
                { initials: 'K8s', name: 'Kubernetes' },
                { initials: 'TF', name: 'Terraform' },
                { initials: 'IBM', name: 'IBM Partner' },
              ].map((partner) => (
                <div
                  key={partner.initials}
                  className="group flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-sm opacity-70 hover:opacity-100 transition-opacity"
                  title={partner.name}
                >
                  <span className="text-sm font-semibold text-gray-400 group-hover:text-blue-500 transition-colors">
                    {partner.initials}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA (Original Design - Closing Style) */}
        <section className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-6 block">
              Get Started
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Ready when you are.
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Start with a strategic assessment. We'll create a tailored roadmap for your infrastructure transformation-no commitment required.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300"
              >
                Request Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services/cloud"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Cover2;
