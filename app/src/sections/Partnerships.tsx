import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Building2, Handshake, Users } from 'lucide-react';

const Partnerships = () => {
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

  const partners = [
    {
      name: 'Huawei',
      type: 'Enterprise Partner',
      description: 'Authorized support for servers, storage & networking',
    },
    {
      name: 'ServiceNow',
      type: 'Implementation Partner',
      description: 'Certified implementation and managed services',
    },
    {
      name: 'EZY',
      type: 'Distribution Alliance',
      description: 'Hardware supply and logistics partnership',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Content */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              Partnerships
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
              Better together
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Strategic partnerships that extend our capabilities and reach. We work with 
              best-in-class technology providers to deliver comprehensive solutions.
            </p>

            {/* Partnership Types */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Handshake, text: 'Technology partnerships' },
                { icon: Building2, text: 'Channel partnerships' },
                { icon: Users, text: 'Consulting partnerships' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >
              Become a partner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Partner Cards */}
          <div className={`space-y-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">{partner.name}</h3>
                    <span className="text-sm text-blue-500">{partner.type}</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-400">{partner.name.charAt(0)}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
