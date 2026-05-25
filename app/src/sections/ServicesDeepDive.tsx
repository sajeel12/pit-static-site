import { useEffect, useRef, useState } from 'react';
import { Eye, Brain, Cloud, Headphones, Server, Shield, ArrowRight } from 'lucide-react';

const ServicesDeepDive = () => {
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
      href: '/services/observability',
    },
    {
      icon: Brain,
      title: 'MLOps',
      description: 'Machine learning operations and model management at enterprise scale.',
      tags: ['Model Ops', 'Data Pipelines', 'AutoML'],
      href: '/services/mlops',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'CI/CD, infrastructure-as-code, and secure cloud foundations.',
      tags: ['Kubernetes', 'Terraform', 'AWS/Azure/GCP'],
      href: '/services/devops-cloud',
    },
    {
      icon: Headphones,
      title: 'Service Desk',
      description: 'ITIL-aligned processes, automation, and self-service portals.',
      tags: ['ServiceNow', 'Jira', 'ITIL'],
      href: '/services/service-desk',
    },
    {
      icon: Server,
      title: 'Infrastructure',
      description: 'Network, security, server management and data centre operations.',
      tags: ['Network', 'Security', 'Storage'],
      href: '/services/infrastructure',
    },
    {
      icon: Shield,
      title: 'Managed Services',
      description: '24/7 monitoring and support with follow-the-sun coverage.',
      tags: ['24/7 NOC', 'SLA', 'Proactive'],
      href: '/services/managed-services',
    },
  ];

  return (
    <section
      id="services-deep-dive"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.1em] text-pi-gray-text mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-[32px] font-semibold text-pi-black">
            Comprehensive IT Solutions
          </h2>
        </div>

        {/* Services Grid - Executive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              className={`group p-8 bg-white border border-gray-100 rounded-[18px] hover:border-pi-blue/30 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-pi-blue/10 flex items-center justify-center mb-5 group-hover:bg-pi-blue/20 transition-colors">
                <service.icon className="w-8 h-8 text-pi-blue group-hover:scale-110 transition-transform" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-pi-black mb-3">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-4" />

              {/* Description */}
              <p className="text-sm text-pi-gray-text leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-pi-gray-text bg-gray-100 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <span className="inline-flex items-center gap-1 text-sm font-medium text-pi-blue group-hover:gap-2 transition-all">
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

export default ServicesDeepDive;
