import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Eye,
  ScrollText,
  BellRing,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';

const OperationsMonitoring = () => {
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
      icon: Eye,
      title: 'Observability',
      description: 'Full-stack visibility into your applications, infrastructure, and business metrics.',
      features: ['Metrics collection', 'Distributed tracing', 'Log aggregation', 'Custom dashboards']
    },
    {
      icon: ScrollText,
      title: 'Logging & Tracing',
      description: 'Centralized log management with correlation across distributed services.',
      features: ['Log centralization', 'Trace correlation', 'Error tracking', 'Log analytics']
    },
    {
      icon: BellRing,
      title: 'Alerting Rules',
      description: 'Intelligent alerting that reduces noise and ensures rapid response to issues.',
      features: ['Smart thresholds', 'Alert routing', 'Escalation policies', 'On-call integration']
    }
  ];

  const caseStudies = [
    {
      title: 'Advanced Observability for Stock Exchange',
      client: 'Major Asian Stock Exchange',
      description: 'Comprehensive monitoring, audit, and reporting system for critical trading infrastructure.',
      outcomes: [
        'Enhanced operational transparency',
        'Performance visibility for trading systems',
        'Comprehensive audit capabilities'
      ],
      technologies: ['Observability', 'Monitoring', 'IBM'],
      slug: 'stock-exchange-observability'
    },
    {
      title: 'Observability Infrastructure for ISP',
      client: 'Major Internet Service Provider',
      description: 'Comprehensive observability infrastructure integrating server, application, and network monitoring.',
      outcomes: [
        'End-to-end infrastructure visibility',
        'Integrated monitoring solution'
      ],
      technologies: ['Observability', 'Zabbix', 'Monitoring'],
      slug: 'isp-observability'
    },
    {
      title: 'Real-Time Event Stream Processing',
      client: 'Major Telecom Operator',
      description: 'Implemented stream processing with event enrichment and intelligent correlation.',
      outcomes: [
        'Alert noise reduced by 60% through correlation',
        'Alert actionability improved from 8% to 94%',
        '<5 second latency on event-to-alert pipeline'
      ],
      technologies: ['Kafka', 'Spark Streaming', 'Flink'],
      slug: 'stream-event-processing'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* 
          IMAGE PLACEHOLDER: Hero Background
          TYPE: Screenshot
          CONTENT: Grafana dashboard with multiple metric panels showing CPU, memory, network, and disk usage
          STYLE: Dark theme (Grafana default), emerald green (#10B981) accent lines, multiple panel layout
          SIZE: 1920x1080px
          FORMAT: WebP with JPG fallback
          SOURCE: Screenshot from Grafana instance with sample data or Grafana Cloud demo
        */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link to="/services/cloud" className="text-blue-400 hover:text-blue-300 transition-colors">
                Cloud Services
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-400">Operations & Monitoring</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Operations &<br />
              <span className="text-blue-400">Monitoring</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 font-light leading-relaxed max-w-2xl font-light">
              Full-stack observability, logging, and alerting for cloud infrastructure.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:monitoring@perception-it.com?subject=Observability%20Inquiry"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-all duration-300"
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
      <section id="services" className="reveal-section py-20">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
              Observability Services
            </h2>
            <p className="text-lg text-gray-600">
              See everything, miss nothing. Comprehensive monitoring for modern infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
              >
                {/* 
                  ICON PLACEHOLDER: Service Icons (3 total)
                  TYPE: Custom SVG
                  CONTENT:
                    1. Eye with data streams/rays (Observability)
                    2. Scroll/document with log lines (Logging & Tracing)
                    3. Smart bell with AI circuit pattern (Alerting Rules)
                  STYLE: Line icons, emerald (#10B981) stroke, 2px weight, monitoring/visibility theme
                  SIZE: 56x56px
                  FORMAT: SVG
                  SOURCE: Create in Figma/Illustrator or source from IconFinder
                */}
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" />
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
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
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
      <section id="case-studies" className="reveal-section py-20 bg-white">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['case-studies'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                Case Studies
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
                Proven Results
              </h2>
              <p className="text-lg text-gray-600">
                Real observability outcomes from enterprise engagements.
              </p>
            </div>
            <Link
              to="/projects?category=cloud"
              className="group inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* 
          CASE STUDY IMAGES NEEDED:
          1. Stock Exchange Observability:
             TYPE: Photo
             CONTENT: Stock exchange trading floor with multiple monitor arrays showing trading data
             STYLE: Professional photography, warm lighting, screens showing charts, busy atmosphere
             SIZE: 800x450px (16:9)
             FORMAT: WebP with JPG fallback
             SOURCE: Stock photo (Unsplash, Shutterstock) or client-provided image

          2. ISP Observability:
             TYPE: Diagram
             CONTENT: Network topology diagram with monitoring agents positioned across infrastructure
             STYLE: Technical network diagram, emerald green status indicators, hierarchical layout
             SIZE: 800x450px (16:9)
             FORMAT: WebP with JPG fallback
             SOURCE: Draw.io, Lucidchart, or network diagram tool export

          3. Stream Event Processing:
             TYPE: Flow Diagram
             CONTENT: Real-time event correlation and alert flow architecture
             STYLE: Data flow diagram showing Kafka → Processing → Alerts pipeline, emerald accents
             SIZE: 800x450px (16:9)
             FORMAT: WebP with JPG fallback
             SOURCE: Architecture diagram tool or custom illustration in Figma
        */}
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <Link
                key={idx}
                to={`/projects/case-study/${study.slug}`}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:bg-white hover:shadow-xl hover:border hover:border-gray-100 transition-all duration-300"
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {study.client}
                    </span>
                  </div>
                
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
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
      <section id="stats" className="reveal-section py-20 bg-blue-900 relative overflow-hidden">
        {/* 
          IMAGE PLACEHOLDER: Stats Section Background
          TYPE: Abstract Pattern
          CONTENT: Monitoring graph pattern with waveform and metric line aesthetics
          STYLE: Emerald gradient overlay (from emerald-900 to emerald-800), faint waveform patterns
          SIZE: 1920x400px (repeating)
          FORMAT: WebP with JPG fallback
          SOURCE: Generated pattern or CSS background with monitoring graph elements
        */}
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '60%', label: 'Alert Noise Reduced', icon: BellRing },
              { value: '94%', label: 'Alert Accuracy', icon: CheckCircle2 },
              { value: '<5s', label: 'Alert Latency', icon: Clock },
              { value: '99.99%', label: 'Uptime SLA', icon: Eye }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-blue-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="reveal-section py-20">
        <div className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-700 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] mb-8">
            Ready for full visibility?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get a free observability assessment. We'll identify your monitoring gaps.
          </p>
          <a 
            href="mailto:monitoring@perception-it.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-400 transition-colors"
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

export default OperationsMonitoring;
