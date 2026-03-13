import { useEffect, useRef, useState } from 'react';
import { Cloud, Server, Eye, Users, ArrowRight } from 'lucide-react';

const ServiceQuickNav = () => {
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
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Accelerate delivery with modern cloud infrastructure and automation',
      href: '/services/devops-cloud',
    },
    {
      icon: Server,
      title: 'Infrastructure Support',
      description: 'SLA-backed maintenance and 24/7 support for critical systems',
      href: '/services/infrastructure',
    },
    {
      icon: Eye,
      title: 'Observability',
      description: 'Real-time insights to optimize performance and reduce costs',
      href: '/services/observability',
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic guidance from British-certified architects',
      href: '/services/consulting',
    },
  ];

  return (
    <section
      id="services-quick-nav"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.1em] text-pi-gray-text mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-[32px] font-semibold text-pi-black">
            End-to-End IT Infrastructure
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              className={`group p-6 bg-white border border-gray-100 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-pi-blue/10 flex items-center justify-center mb-4 group-hover:bg-pi-blue/20 transition-colors">
                <service.icon className="w-6 h-6 text-pi-blue group-hover:scale-110 transition-transform" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-pi-black mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-pi-gray-text leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center gap-1 text-sm font-medium text-pi-blue group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceQuickNav;
