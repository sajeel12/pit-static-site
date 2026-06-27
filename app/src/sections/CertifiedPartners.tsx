import { useEffect, useRef, useState } from 'react';
import { Award, BadgeCheck } from 'lucide-react';

interface Partner {
  name: string;
  src: string;
  status: string;
  certified?: boolean;
}

const PARTNERS: Partner[] = [
  {
    name: 'Huawei',
    src: '/logos/partners/Partner-Huawei-Logo.svg',
    status: 'Enterprise Certified',
    certified: true,
  },
  {
    name: 'HPE',
    src: '/logos/partners/HPE logo /HPE Logo files/HPE Logo/HPE-logo-full-clr-pos-rgb (3).webp',
    status: 'Authorised Partner',
  },
  {
    name: 'Dell',
    src: '/logos/partners/DELL LOGO/DELL LOGO 1 .webp',
    status: 'Authorised Partner',
  },
  {
    name: 'Lenovo',
    src: '/logos/partners/Partner-Lenovo-Logo.svg',
    status: 'Authorised Partner',
  },
  {
    name: 'VMware',
    src: '/logos/partners/Partner-vmware-logo.svg',
    status: 'Authorised Partner',
  },
  {
    name: 'ManageEngine',
    src: '/logos/partners/manageengine-logo.svg',
    status: 'Authorised Partner',
  },
];

const CertifiedPartners = () => {
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading + value prop */}
          <div className="lg:col-span-4">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="inline-flex items-center gap-2 carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                Certified Partnerships
              </span>
              <h2 className="carbon-fluid-heading-05 text-[#161616] mb-4">
                Huawei Enterprise Certified, HPE + 4 More
              </h2>
              <p className="carbon-body-02 text-gray-600">
                Our direct partner status means certified hardware, priority parts access and
                manufacturer-backed escalation channels.
              </p>
            </div>
          </div>

          {/* Right: partner logo grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {PARTNERS.map((partner, idx) => (
                <div
                  key={partner.name}
                  className={`group relative flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-[#f4f4f4] hover:border-[#0f62fe]/30 hover:bg-white hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 75}ms` }}
                >
                  {partner.certified && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#0f62fe] bg-[#0f62fe]/10 px-2 py-0.5 rounded-full">
                      <BadgeCheck className="w-3 h-3" />
                      Certified
                    </span>
                  )}
                  <div className="w-full h-14 flex items-center justify-center mb-4">
                    <img
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                  <span className="carbon-label-02 text-[#161616] text-center">{partner.name}</span>
                  <span className="carbon-helper-text-01 text-gray-500 text-center mt-0.5">{partner.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedPartners;
