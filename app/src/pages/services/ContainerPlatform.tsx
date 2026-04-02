import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Hexagon,
  Layers,
  Grid3x3,
  CheckCircle2,
  TrendingUp,
  Shield,
  ArrowUpRight,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const ContainerPlatform = () => {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});

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

  const services = [
    {
      icon: Hexagon,
      title: 'Kubernetes',
      description: 'Production-grade Kubernetes clusters designed for high availability and scale.',
      features: ['EKS/AKS/GKE deployment', 'Multi-region clusters', 'Auto-scaling', 'Disaster recovery']
    },
    {
      icon: Layers,
      title: 'Container Orchestration',
      description: 'Automated container deployment, scaling, and management across your infrastructure.',
      features: ['Docker optimisation', 'Service mesh', 'Load balancing', 'Rolling updates']
    },
    {
      icon: Grid3x3,
      title: 'Cluster Management',
      description: 'Day-2 operations including monitoring, logging, and ongoing optimisation.',
      features: ['24/7 monitoring', 'Performance tuning', 'Security patching', 'Cost optimisation']
    }
  ];

  const caseStudies = [
    {
      title: 'Kubernetes-Driven Scalability for Telecom Operations',
      client: 'Major African Telecom Operator',
      description: 'Architected multi-region Kubernetes clusters on AWS to eliminate provisioning bottlenecks.',
      outcomes: [
        '3x throughput increase on identical infrastructure',
        'Infrastructure provisioning time reduced from 5 weeks to <48 hours',
        '50% infrastructure cost reduction through optimisation'
      ],
      technologies: ['Amazon EKS', 'Docker', 'ArgoCD', 'Helm', 'Prometheus'],
      slug: 'k8s-telco-scalability'
    },
    {
      title: 'Multi-Cluster Kubernetes Operations & Day-2 Management',
      client: 'Major Telecom Operator',
      description: 'Deployed multi-cluster control plane managing 50+ microservices across production.',
      outcomes: [
        '20,000+ pod deployments per month with 99.95% success rate',
        'Unplanned downtime reduced by 87%',
        'Cluster utilization optimized to 78% average'
      ],
      technologies: ['Kubernetes', 'Karpenter', 'Prometheus', 'Grafana'],
      slug: 'k8s-cluster-operations'
    },
    {
      title: 'Edge-Resilient IoT Data Collection Infrastructure',
      client: 'Major African Telecom Operator',
      description: 'Deployed edge-based MQTT collectors with local buffering for resilient data collection.',
      outcomes: [
        'Data delivery reliability improved to 99.95%',
        'Latency reduced from 120ms to <25ms average',
        '2M+ events/minute sustained throughput'
      ],
      technologies: ['MQTT Edge', 'Kubernetes', 'Message Queues', 'Prometheus'],
      slug: 'iot-collection-infrastructure'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 overflow-hidden">
        {/* 
          IMAGE PLACEHOLDER: Hero Background
          TYPE: Architecture Diagram
          CONTENT: Multi-region EKS cluster topology on AWS showing us-east-1, eu-west-1, ap-south-1 with connecting lines
          STYLE: AWS architecture style, cyan (#06B6D4) highlights on dark background, region labels visible
          SIZE: 1920x1080px
          FORMAT: WebP with JPG fallback
          SOURCE: Cloudcraft.co or AWS Architecture Diagram Tool, export as PNG then convert
        */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link to="/services/cloud" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Cloud Services
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-400">Container Platform</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-[1.1] tracking-tight">
              Container<br />
              <span className="text-cyan-400">Platform</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light">
              Kubernetes and container orchestration for scalable, portable applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:k8s@perception-it.com?subject=Kubernetes%20Inquiry"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/projects?category=cloud"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="reveal-section py-24 lg:py-32">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-500 mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
              Container Services
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end Kubernetes and container solutions from cluster design to day-2 operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all duration-500"
              >
                {/* 
                  ICON PLACEHOLDER: Service Icons (3 total)
                  TYPE: Custom SVG
                  CONTENT:
                    1. Kubernetes wheel (Kubernetes)
                    2. Stacked containers (Container Orchestration)
                    3. Cluster nodes connected (Cluster Management)
                  STYLE: Line icons, cyan (#06B6D4) stroke, 2px weight, tech/industrial aesthetic
                  SIZE: 56x56px
                  FORMAT: SVG
                  SOURCE: Kubernetes official icons (permissive license) or create in Figma
                */}
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                  {/* <img src={`/icons/${service.title.toLowerCase().replace(/\s+/g, '-')}.svg`} alt={service.title} className="w-7 h-7" /> */}
                </div>
                
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="reveal-section py-24 lg:py-32 bg-white">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['case-studies'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-500 mb-4 block">
                Case Studies
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
                Proven Results
              </h2>
              <p className="text-lg text-gray-600">
                Real container platform outcomes from enterprise engagements.
              </p>
            </div>
            <Link
              to="/projects?category=cloud"
              className="group inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* 
          CASE STUDY IMAGES NEEDED:
          1. Telecom K8s Scalability:
             TYPE: Graph
             CONTENT: Cluster auto-scaling metrics over time showing throughput increase
             STYLE: Line graph with cyan accent, time series x-axis, throughput y-axis, 3x gain annotation
             SIZE: 800x450px (16:9)
             FORMAT: WebP with JPG fallback
             SOURCE: Grafana screenshot or Chart.js generated graph

          2. Multi-Cluster Operations:
             TYPE: Dashboard Screenshot
             CONTENT: Pod deployment success rate 99.95% dashboard with metrics panels
             STYLE: Kubernetes dashboard style, green success indicators, dark theme option
             SIZE: 800x450px (16:9)
             FORMAT: WebP with JPG fallback
             SOURCE: Kubernetes Dashboard or Grafana screenshot

          3. Edge IoT Infrastructure:
             TYPE: Architecture Diagram
             CONTENT: Edge IoT device data flow architecture showing MQTT collectors, Kubernetes edge nodes, cloud connectivity
             STYLE: Technical diagram, cyan flow lines, edge-to-cloud data path visualization
             SIZE: 800x450px (16:9)
             FORMAT: WebP with JPG fallback
             SOURCE: Draw.io, Cloudcraft, or Lucidchart export
        */}
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <Link
                key={idx}
                to={`/projects/case-study/${study.slug}`}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl hover:border hover:border-gray-100 transition-all duration-300"
              >
                {/* IMAGE PLACEHOLDER: Case Study Thumbnail
                    Size: 800x450px (16:9), Format: WebP
                */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {/* <img src={`/images/case-studies/${study.slug}.webp`} alt={study.title} className="w-full h-full object-cover" loading="lazy" /> */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400/50 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-500">IMG</span>
                    </div>
                    <span className="text-xs text-gray-500">Case Study Image</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                      {study.client}
                    </span>
                  </div>
                
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-cyan-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {study.outcomes.slice(0, 2).map((outcome, oidx) => (
                      <li key={oidx} className="flex items-start gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
                  {study.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white text-gray-600 text-xs rounded border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="reveal-section py-24 lg:py-32 bg-cyan-900 relative overflow-hidden">
        {/* 
          IMAGE PLACEHOLDER: Stats Section Background
          TYPE: Abstract Pattern
          CONTENT: Container ship pattern with container stack silhouettes
          STYLE: Cyan gradient overlay (from cyan-900 to cyan-800), faint shipping container pattern
          SIZE: 1920x400px (repeating)
          FORMAT: WebP with JPG fallback
          SOURCE: Generated pattern or CSS background with container ship motif
        */}
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Microservices Managed', icon: Hexagon },
              { value: '99.95%', label: 'Deployment Success', icon: CheckCircle2 },
              { value: '20K+', label: 'Pods/Month', icon: Layers },
              { value: '87%', label: 'Downtime Reduction', icon: Shield }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-cyan-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="reveal-section py-24 lg:py-32">
        <div className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-700 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] mb-8">
            Ready to containerize?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get a free Kubernetes readiness assessment.
          </p>
          <a 
            href="mailto:k8s@perception-it.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-400 transition-colors"
          >
            Request Assessment
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContainerPlatform;
