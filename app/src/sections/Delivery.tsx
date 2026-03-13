import { useEffect, useRef, useState } from 'react';
import { Check, Clock, FileText, Shield } from 'lucide-react';

const Delivery = () => {
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

  const steps = [
    {
      icon: FileText,
      title: 'Discover',
      description: 'We audit your current state, identify gaps, and define success metrics.',
    },
    {
      icon: Shield,
      title: 'Design',
      description: 'We architect solutions tailored to your infrastructure and business goals.',
    },
    {
      icon: Clock,
      title: 'Deliver',
      description: 'We implement with full rollback plans, baselines, and daily dashboards.',
    },
    {
      icon: Check,
      title: 'Drive',
      description: 'We optimize continuously and train your team for self-sufficiency.',
    },
  ];

  const engagementModels = [
    {
      title: 'Fixed-Price Projects',
      description: 'Defined scope, defined outcome, defined cost.',
    },
    {
      title: 'Managed Services',
      description: 'Ongoing support with SLA-backed guarantees.',
    },
    {
      title: 'Consulting',
      description: 'Expert guidance for your in-house teams.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
            How we deliver
          </h2>
          <p className="text-lg text-gray-600">
            A proven methodology that de-risks every engagement.
          </p>
        </div>

        {/* Steps */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gray-200" />
              )}
              
              <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Models */}
        <div className={`bg-[#0F172A] rounded-3xl p-8 lg:p-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Engagement Models
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-lg font-semibold text-white mb-2">{model.title}</h4>
                <p className="text-sm text-gray-400">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
