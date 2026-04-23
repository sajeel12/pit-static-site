import { useEffect, useRef, useState } from 'react';
import { Clock, Headphones, Shield, TrendingUp } from 'lucide-react';

const Reliability = () => {
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

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ISO 27001-aligned practices, encrypted communications, and audit-ready documentation.',
    },
    {
      icon: Clock,
      title: '99.9% Uptime SLA',
      description: 'Backed by penalty clauses. We put our money where our mouth is.',
    },
    {
      icon: TrendingUp,
      title: 'Proactive Monitoring',
      description: 'AIOps-driven early warning systems. Fix issues before they impact users.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Follow-the-sun coverage with UK-Pakistan handoffs. Always someone awake.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Reliability
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
            Built for mission-critical
          </h2>
          <p className="text-lg text-gray-600">
            Enterprise-grade reliability with SLA-backed guarantees.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-[#FAFAFA] rounded-2xl hover:bg-white hover:shadow-xl hover:border-blue-100 border border-transparent transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Status Banner */}
        <div className={`mt-12 p-6 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-center gap-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-700 font-medium">All systems operational</span>
          <span className="text-green-600 text-sm">- 99.97% uptime this quarter</span>
        </div>
      </div>
    </section>
  );
};

export default Reliability;
