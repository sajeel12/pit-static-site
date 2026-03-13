import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
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

  const stats = [
    { value: '14+', label: 'Years Experience' },
    { value: '50+', label: 'Platforms Deployed' },
    { value: '24/7', label: 'Support Coverage' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* David Pridmore Photo */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <img
                src="/david_headshot.jpg"
                alt="David Pridmore, CTO"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-light text-blue-500">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
              British Standards,<br />
              Local Expertise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded by David Pridmore, Perception IT brings enterprise-grade IT solutions to ambitious 
              organizations in Pakistan and beyond. With 14+ years of experience across telecom, finance, 
              and manufacturing sectors, we bridge the gap between global best practices and local market needs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team combines British-certified methodologies with deep technical expertise, delivering 
              outcomes that meet the highest international standards—right here in Pakistan.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-10">
              {[
                'British-certified technologists',
                'Huawei Enterprise Partner',
                'EZY Distribution Alliance',
                'ITIL-aligned processes',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
            >
              Work with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
