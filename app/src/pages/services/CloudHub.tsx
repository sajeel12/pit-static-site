import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Cloud, 
  PieChart,
  GitBranch,
  Hexagon,
  Eye,
  CheckCircle2,
  TrendingDown,
  Zap,
  Shield,
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const CloudHub = () => {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const cloudHubs = [
    {
      id: 'cloud-management',
      title: 'Cloud Management',
      description: 'Strategic cloud adoption and migration services for seamless infrastructure transition.',
      icon: Cloud,
      link: '/services/cloud-management',
      spokes: [
        { id: 'cloud-migration', title: 'Cloud Migration', link: '/services/cloud-migration' },
        { id: 'cloud-provisioning', title: 'Cloud Provisioning', link: '/services/cloud-provisioning' },
        { id: 'architecture-patterns', title: 'Architecture Patterns', link: '/services/architecture-patterns' }
      ],
      caseStudies: 2
    },
    {
      id: 'cloud-cost-optimisation',
      title: 'Cloud Cost Optimisation',
      description: 'FinOps practices and tools to reduce cloud spend while maintaining performance.',
      icon: PieChart,
      link: '/services/cloud-cost-optimisation',
      badge: 'POPULAR',
      spokes: [
        { id: 'cost-explorer', title: 'Cost Explorer', link: '/services/cost-explorer' },
        { id: 'budget-alerts', title: 'Budget Alerts', link: '/services/budget-alerts' },
        { id: 'reserved-instance-planner', title: 'Reserved Instance Planner', link: '/services/reserved-instance-planner' },
        { id: 'usage-analytics', title: 'Usage Analytics', link: '/services/usage-analytics' },
        { id: 'savings-recommendations', title: 'Savings Recommendations', link: '/services/savings-recommendations' }
      ],
      caseStudies: 1
    },
    {
      id: 'devops-delivery',
      title: 'DevOps & Delivery',
      description: 'CI/CD pipelines and DevSecOps integration for rapid, secure software delivery.',
      icon: GitBranch,
      link: '/services/devops-delivery',
      spokes: [
        { id: 'devops-pipelines', title: 'DevOps Pipelines', link: '/services/devops-pipelines' },
        { id: 'devsecops-integration', title: 'DevSecOps Integration', link: '/services/devsecops-integration' },
        { id: 'cicd-templates', title: 'CI/CD Templates', link: '/services/cicd-templates' }
      ],
      caseStudies: 1
    },
    {
      id: 'container-platform',
      title: 'Container Platform',
      description: 'Kubernetes and container orchestration for scalable, portable applications.',
      icon: Hexagon,
      link: '/services/container-platform',
      spokes: [
        { id: 'kubernetes', title: 'Kubernetes', link: '/services/kubernetes' },
        { id: 'container-orchestration', title: 'Container Orchestration', link: '/services/container-orchestration' },
        { id: 'cluster-management', title: 'Cluster Management', link: '/services/cluster-management' }
      ],
      caseStudies: 3
    },
    {
      id: 'operations-monitoring',
      title: 'Operations & Monitoring',
      description: 'Full-stack observability, logging, and alerting for cloud infrastructure.',
      icon: Eye,
      link: '/services/operations-monitoring',
      spokes: [
        { id: 'observability', title: 'Observability', link: '/services/observability' },
        { id: 'logging-tracing', title: 'Logging & Tracing', link: '/services/logging-tracing' },
        { id: 'alerting-rules', title: 'Alerting Rules', link: '/services/alerting-rules' }
      ],
      caseStudies: 5
    }
  ];

  const stats = [
    { value: '40%', label: 'Average Cost Reduction', icon: TrendingDown },
    { value: '99.99%', label: 'Uptime SLA', icon: Shield },
    { value: '3x', label: 'Faster Deployments', icon: Zap },
    { value: '14+', label: 'Years Experience', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* 
          IMAGE PLACEHOLDER: Hero Background
          TYPE: Screenshot from AWS/Azure Console
          CONTENT: Cloud resource overview dashboard showing EC2 instances, RDS databases, S3 buckets
          STYLE: Dark theme console interface, blue accent colors, slight blur for readability
          SIZE: 1920x1080px, Format: WebP with JPG fallback
          SOURCE: Screenshot from AWS Management Console or Azure Portal Services view
          NOTE: Blur text and obscure any sensitive account info
        */}
        {/* Abstract Background - Replace with actual cloud dashboard screenshot */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        {/* 
          <img 
            src="/images/cloud-hero-bg.webp" 
            alt="Cloud Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        */}
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-400 mb-8">
              Cloud Services
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-[1.1] tracking-tight">
              Cloud Infrastructure<br />
              <span className="text-blue-400">That Scales</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light">
              End-to-end cloud services from migration to optimisation. 
              AWS, Azure, and hybrid environments managed by certified experts.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services/cloud-cost-optimisation"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300 text-lg"
              >
                Explore Cost Optimisation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/projects?category=cloud"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-light text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Hubs Grid */}
      <section id="hubs" className="reveal-section py-24 lg:py-32">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['hubs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
              Cloud Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Five core practice areas covering the full cloud lifecycle—from migration to optimisation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudHubs.map((hub) => (
              <Link
                key={hub.id}
                to={hub.link}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-500"
              >
                {/* Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    {/* 
                      ICON PLACEHOLDER: Hub Icon
                      TYPE: Custom SVG illustration
                      SIZE: 56x56px, Format: SVG
                      
                      Cloud Management: Cloud with bidirectional arrows (migration symbol)
                      Cloud Cost Optimisation: Piggy bank with cloud + downward trending graph
                      DevOps & Delivery: Pipeline flow with connected stages (build, test, deploy)
                      Container Platform: Kubernetes ship wheel or stacked containers
                      Operations & Monitoring: Dashboard with multiple metric panels
                    */}
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                      <hub.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" />
                      {/* <img src={`/icons/hub-${hub.id}.svg`} alt={hub.title} className="w-7 h-7" /> */}
                    </div>
                    {hub.badge && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {hub.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                    {hub.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {hub.description}
                  </p>
                  
                  {/* Spokes */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hub.spokes.map((spoke) => (
                      <span 
                        key={spoke.id}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
                      >
                        {spoke.title}
                      </span>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {hub.caseStudies} case study{hub.caseStudies !== 1 ? 'ies' : ''}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Not sure where to start?
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Get a free cloud assessment. We'll identify your biggest opportunities.
                </p>
              </div>
              <a 
                href="mailto:cloud@perception-it.com"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Request Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="case-studies" className="reveal-section py-24 lg:py-32 bg-white">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['case-studies'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                Case Studies
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
                Proven cloud results
              </h2>
              <p className="text-lg text-gray-600">
                Real outcomes from real cloud engagements across telecom, finance, and enterprise.
              </p>
            </div>
            <Link
              to="/projects?category=cloud"
              className="group inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View all cloud projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 
              CASE STUDY IMAGE PLACEHOLDERS:
              
              1. IoT Tower Case Study
                 TYPE: Photo with data overlay
                 CONTENT: African cell tower with sensor nodes + floating data metrics (signal strength, uptime)
                 SOURCE: Unsplash for tower photo + Figma for overlay graphics
                 SIZE: 800x450px (16:9), Format: WebP
                 
              2. Kubernetes Scalability Case Study
                 TYPE: Infrastructure diagram
                 CONTENT: Multi-region AWS EKS cluster topology map with auto-scaling indicators
                 SOURCE: CloudCraft or Draw.io diagram export
                 SIZE: 800x450px (16:9), Format: WebP
                 
              3. Stream Processing Case Study
                 TYPE: Data flow visualization
                 CONTENT: Kafka streams with real-time event processing, alert correlation diagram
                 SOURCE: Figma or Miro diagram
                 SIZE: 800x450px (16:9), Format: WebP
            */}
            {[
              {
                title: 'IoT & Analytics Platform for Mobile Towers',
                client: 'Major African Telecom',
                industry: 'Telecommunications',
                metric: '99.95%',
                metricLabel: 'Data Delivery',
                tags: ['Azure', 'Databricks', 'Kubernetes'],
                slug: 'iot-data-analytics-mobile-towers',
                image: '/images/case-studies/iot-tower.webp'
              },
              {
                title: 'Kubernetes-Driven Scalability',
                client: 'Major African Telecom',
                industry: 'Telecommunications',
                metric: '50%',
                metricLabel: 'Cost Reduction',
                tags: ['AWS', 'EKS', 'DevOps'],
                slug: 'k8s-telco-scalability',
                image: '/images/case-studies/k8s-cluster.webp'
              },
              {
                title: 'Real-Time Event Stream Processing',
                client: 'Major Telecom Operator',
                industry: 'Telecommunications',
                metric: '60%',
                metricLabel: 'Alert Noise Reduced',
                tags: ['Kafka', 'Flink', 'Observability'],
                slug: 'stream-event-processing'
              }
            ].map((study, idx) => (
              <Link
                key={idx}
                to={`/projects/case-study/${study.slug}`}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl hover:border hover:border-gray-100 transition-all duration-300"
              >
                {/* 
                  IMAGE PLACEHOLDER: Case Study Thumbnail
                  
                  TYPE: Mixed (Photo + Diagram)
                  CONTENT: 
                    - IoT: Cell tower photo with data overlay
                    - K8s: Cluster topology diagram
                    - Streams: Data flow visualization
                  SIZE: 800x450px (16:9 aspect ratio)
                  FORMAT: WebP with JPG fallback
                  PATH: study.image (dynamically loaded from /images/case-studies/)
                  LOADING: lazy (for performance)
                */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {/* 
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400/50 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-500">IMG</span>
                    </div>
                    <span className="text-xs text-gray-500">Case Study Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-600 font-medium">{study.client}</span>
                    <span className="text-xs text-gray-500">{study.industry}</span>
                  </div>
                
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                
                <div className="flex items-center gap-3 mb-4 py-3 border-y border-gray-200">
                  <div className="text-2xl font-light text-blue-500">{study.metric}</div>
                  <div className="text-xs text-gray-500">{study.metricLabel}</div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500 bg-white rounded border border-gray-200"
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

      {/* CTA Section */}
      <section id="cta" className="reveal-section py-24 lg:py-32 bg-[#0F172A]">
        <div className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-700 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-6 block">
            Get Started
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-8 leading-tight tracking-tight">
            Ready to optimize your cloud?
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you're migrating, scaling, or cutting costs—we've done it before.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="mailto:cloud@perception-it.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300"
            >
              Schedule Cloud Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/projects?category=cloud"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Browse Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudHub;
