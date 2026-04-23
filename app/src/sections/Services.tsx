import { useEffect, useRef, useState } from 'react';
import { Eye, Brain, Cloud, Headphones, Server, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Eye,
      title: 'Observability',
      description: 'Unified telemetry, alerting and event correlation-reduce noise, find root cause faster.',
      tags: ['AIOps', 'Real-time', 'Log Analytics'],
      href: '#services',
    },
    {
      icon: Brain,
      title: 'MLOps',
      description: 'Machine learning operations and model management at enterprise scale.',
      tags: ['Model Ops', 'Data Pipelines', 'AutoML'],
      href: '#services',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'CI/CD, infrastructure-as-code, and secure cloud foundations.',
      tags: ['Kubernetes', 'Terraform', 'AWS/Azure/GCP'],
      href: '#services',
    },
    {
      icon: Headphones,
      title: 'Service Desk',
      description: 'ITIL-aligned processes, automation, and self-service portals.',
      tags: ['ServiceNow', 'Jira', 'ITIL'],
      href: '#services',
    },
    {
      icon: Server,
      title: 'Infrastructure',
      description: 'Network, security, server management and data center operations.',
      tags: ['Network', 'Security', 'Storage'],
      href: '#services',
    },
    {
      icon: Shield,
      title: 'Managed Services',
      description: '24/7 monitoring and support with follow-the-sun coverage.',
      tags: ['24/7 NOC', 'SLA', 'Proactive'],
      href: '#services',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] mb-6 leading-tight tracking-tight">
            End-to-end IT solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From strategy to execution, we deliver comprehensive IT services that drive 
            business transformation and operational excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              className={`group p-8 bg-white border border-gray-100 rounded-[18px] hover:border-blue-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-blue-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-4 group-hover:bg-blue-100 transition-colors" />

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 bg-gray-100 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 group-hover:gap-3 transition-all">
                Explore {service.title}
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
