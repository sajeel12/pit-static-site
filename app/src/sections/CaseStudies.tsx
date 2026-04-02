import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
    {
      id: '1',
      title: 'Large-Scale Operational Support Systems',
      client: 'Major Asian Telecom',
      industry: 'Telecommunications',
      description: 'Delivered 24/7 operational visibility for mission-critical telecom infrastructure, enabling proactive incident detection and rapid response.',
      metric: '99.9%',
      metricLabel: 'Uptime SLA',
      tags: ['Observability', 'Netcool', 'IBM'],
      slug: 'operational-support-managed-service',
    },
    {
      id: '2',
      title: 'Advanced Observability for Stock Exchange',
      client: 'Major Asian Stock Exchange',
      industry: 'Financial Services',
      description: 'Comprehensive observability platform covering trading systems, market surveillance, and infrastructure monitoring with 99.99% uptime SLA.',
      metric: '99.99%',
      metricLabel: 'Uptime SLA',
      tags: ['Observability', 'Netcool', 'Audit'],
      slug: 'financial-market-observability',
    },
    {
      id: '3',
      title: 'Optimising Network Performance',
      client: 'National Telecom Provider',
      industry: 'Telecommunications',
      description: 'Implemented intelligent correlation across network domains, reducing mean-time-to-resolution and enabling faster root cause analysis.',
      metric: '70%',
      metricLabel: 'MTTR Reduction',
      tags: ['Observability', 'Automation', 'Netcool'],
      slug: 'network-performance-optimisation',
    },
    {
      id: '4',
      title: 'Breaking Performance Barriers',
      client: 'Multi-National Telecom',
      industry: 'Telecommunications',
      description: 'Architected high-throughput alarm processing pipeline capable of handling millions of events, eliminating processing delays.',
      metric: '10x',
      metricLabel: 'Throughput',
      tags: ['Cloud', 'Kubernetes', 'Java'],
      slug: 'high-performance-alarm-processing',
    },
    {
      id: '5',
      title: 'Data Architecture Modernization for AgriTech',
      client: 'Farmdar',
      industry: 'AgriTech',
      description: 'Expert architectural designs streamlined data processes and significantly boosted system scalability for agricultural analytics platform.',
      metric: 'Faster',
      metricLabel: 'Insights',
      tags: ['Data Architecture', 'Containerisation', 'Cloud'],
      slug: 'farmdar-data-modernization',
    },
  ];

  return (
    <section id="case-studies" ref={sectionRef} className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              Featured Projects
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-4">
              Enterprise impact
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real engagements across telecom, finance, and manufacturing.
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
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
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

                {/* Metric with Arrow */}
                <div className="flex items-center justify-between mb-4 py-3 border-y border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-light text-blue-500">{project.metric}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{project.metricLabel}</div>
                  </div>
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
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
  );
};

export default CaseStudies;
