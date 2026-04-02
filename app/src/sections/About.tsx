import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';

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
    { value: '23+', label: 'Years Experience' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Led By
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight">
            British Standards, Local Expertise
          </h2>
        </div>

        <div className={`grid lg:grid-cols-12 gap-12 items-start transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left: Photo + Stats */}
          <div className="lg:col-span-4">
            <div className="flex flex-col items-center">
              {/* Modest Square Photo */}
              <div className="w-48 h-48 rounded overflow-hidden mb-6">
                <img
                  src="/david_headshot.jpg"
                  alt="David Pridmore, CEO & CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats */}
              <div className="flex gap-6 mb-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-light text-blue-500">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* LinkedIn Connect */}
              <a
                href="https://www.linkedin.com/in/davidpridmore/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white text-sm font-medium rounded-lg hover:bg-[#006396] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Quote + Credentials */}
          <div className="lg:col-span-8">
            {/* Quote Block */}
            <blockquote className="relative mb-8">
              <span className="text-6xl text-blue-200 absolute -top-6 -left-1 font-serif leading-none">"</span>
              <p className="text-xl text-gray-800 leading-relaxed pl-8 border-l-4 border-blue-500 italic">
                The emphasis is now on IT technology to steer business outcomes such as revenue growth, cost efficiency, risk mitigation, and operational excellence
              </p>
              <footer className="mt-4 pl-8">
                <div className="font-semibold text-gray-900">David Pridmore</div>
                <div className="text-sm text-gray-500 mb-3">CEO & CTO, Perception IT</div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-xs font-medium text-blue-700">Enterprise Standards. Local Delivery.</span>
                </div>
              </footer>
            </blockquote>

            {/* Sector Credentials */}
            <div className="bg-gray-50 rounded-lg p-5 mb-6">
              <p className="text-sm text-gray-600 mb-4">
                Formerly advised engineering teams at leading enterprises across finance, telecom, and public sector:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex gap-3">
                  <span className="text-gray-500 w-20 flex-shrink-0 text-xs uppercase tracking-wide">Finance</span>
                  <span className="text-gray-800 font-medium">Deutsche Bank · Barclays · RBS · Aviva</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 w-20 flex-shrink-0 text-xs uppercase tracking-wide">Telecom</span>
                  <span className="text-gray-800 font-medium">British Telecom · Helios Towers · Jazz Mobilink</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 w-20 flex-shrink-0 text-xs uppercase tracking-wide">Enterprise</span>
                  <span className="text-gray-800 font-medium">IBM · GSK · UK Government (DEFRA)</span>
                </div>
              </div>
              
              {/* Awards */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Awards with IBM:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">IBM Tivoli Business Partner Management Solution Award</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">IBM Business Innovation Award</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Perception IT brings enterprise-grade IT solutions to ambitious organizations in Pakistan 
              and beyond. We bridge the gap between global best practices and local market needs.
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {[
                'British-certified technologists',
                'Huawei Enterprise Partner',
                'EZY Distribution Alliance',
                'ITIL-aligned processes',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="text-gray-700 text-sm">{item}</span>
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
