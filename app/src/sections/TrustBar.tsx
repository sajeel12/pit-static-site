import { useEffect, useRef, useState } from 'react';

const TrustBar = () => {
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
    { value: '14', label: 'Years Experience' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Support Coverage' },
    { value: 'British-Led', label: 'Technical Team' },
  ];

  const partners = [
    { initials: 'AWS', name: 'AWS Partner' },
    { initials: 'AZ', name: 'Azure' },
    { initials: 'GCP', name: 'Google Cloud' },
    { initials: 'ITIL', name: 'ITIL Certified' },
    { initials: 'K8s', name: 'Kubernetes' },
    { initials: 'TF', name: 'Terraform' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-pi-gray"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-pi-black mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-pi-gray-text">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 lg:gap-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {partners.map((partner) => (
            <div
              key={partner.initials}
              className="group flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-sm opacity-70 hover:opacity-100 transition-opacity"
              title={partner.name}
            >
              <span className="text-sm font-semibold text-pi-gray-text group-hover:text-pi-blue transition-colors">
                {partner.initials}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
