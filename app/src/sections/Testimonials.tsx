import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: [
        "We have been working with Perception IT now for several years. Their proactive approach and commitment to excellence have been instrumental in ensuring that we stay ahead of the competition and continue to meet the evolving needs of our customers.",
        "IBM Netcool Event Management Automation has been one of the most mature areas delivered and managed by Perception IT for Jazz NOC. Partnering with Perception IT for IBM Netcool Automation was a strategic move. Real-time event analysis, proactive problem resolution, increased network stability - impressive results!"
      ],
      author: 'Usman Ikram',
      role: 'Manager, SQM & Automation Support',
      company: 'Jazz',
      sector: 'Telecommunication',
      hasLogo: true,
    },
    {
      quote: [
        "Our partnership with Perception IT has elevated our solutions to new heights. Their expert architectural designs have streamlined our data processes and significantly boosted our system's scalability.",
        "This transformation has led to faster insights and fortified our growth trajectory. Moreover, their modernisation initiatives, including the adoption of containerisation techniques, have enhanced our team's efficiency and agility.",
        "Thanks to Perception IT, we're achieving quicker, more reliable results, paving the way for sustained innovation and market leadership."
      ],
      author: 'Muhammad Bukhari',
      role: 'CEO',
      company: 'Farmdar',
      sector: 'AgriTech',
    },
    {
      quote: [
        "We have worked with Perception IT for over two years and have been very happy with the quality of work and expertise delivered.",
        "They have proved diligent and continue to deliver first class technical and documentation deliverables for us. Hence, I would fully recommend their services to others."
      ],
      author: 'Julian Luxton',
      role: 'Principal Consultant',
      company: 'Innovise ESM & Solutions',
      sector: 'IT Services',
    },
    {
      quote: [
        "Abilisoft have utilised Perception IT for systems management consultancy and Java development over the past 2 years and have found them to be dependable partners and their work to be of excellent quality, delivering a good return on investment for us.",
        "They have been willing to go the extra mile to fill any skills gaps, regardless of the complexity of the technologies involved and have delivered solid solutions with good communication, documentation and time management, both to ourselves, and the end customer.",
        "We would not hesitate in recommending Perception IT to others."
      ],
      author: 'Andy Onacko',
      role: 'CEO',
      company: 'Abilisoft',
      sector: 'Software',
    },
    {
      quote: [
        "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. With 48 critical Lenovo servers supporting our production and financial systems, any downtime could have cost us millions.",
        "Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident.",
        "We now operate with confidence knowing our IT backbone is in expert hands. For any organization managing critical hardware, I highly recommend their service."
      ],
      author: 'Mr. Usman Zafar',
      role: 'Head of IT',
      company: 'Ibrahim Fibres Limited',
      sector: 'Manufacturing',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goTo = (idx: number) => setCurrent(idx);

  const t = testimonials[current];
  
  // Alternate between white and blue
  const isEven = current % 2 === 0;
  const style = isEven 
    ? { bg: 'bg-white', badge: 'bg-blue-100', badgeText: 'text-blue-700', metric: 'text-blue-500', company: 'text-blue-600', dot: 'bg-blue-500', border: 'border-gray-200' }
    : { bg: 'bg-blue-50', badge: 'bg-blue-100', badgeText: 'text-blue-700', metric: 'text-blue-500', company: 'text-blue-600', dot: 'bg-blue-500', border: 'border-blue-100' };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0F172A] leading-tight tracking-tight">
            Trusted by industry leaders
          </h2>
        </div>

        <div 
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-xl hover:scale-[1.01] border ${style.border} ${style.bg}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid lg:grid-cols-2">
            <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                {t.hasLogo ? (
                  <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm">
                    <img 
                      src="/logos/clients/client-jazz-logo.png" 
                      alt={t.company} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-semibold text-gray-400">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="text-sm text-gray-400">{t.company || 'Client'}</span>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {t.sector ? (
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${style.badge} rounded-full mb-6 w-fit`}>
                  <span className={`text-xs font-medium uppercase tracking-wide ${style.badgeText}`}>{t.sector}</span>
                </div>
              ) : null}

              <div className="text-[#0F172A] leading-relaxed mb-8 font-normal text-sm space-y-3">
                {t.quote.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div>
                <div className="font-semibold text-[#0F172A] text-base">{t.author}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
                {t.company && <div className={`text-sm font-medium mt-1 ${style.company}`}>{t.company}</div>}
              </div>
            </div>
          </div>

          <div className={`flex items-center justify-between p-6 border-t ${style.border}`}>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? `w-8 ${style.dot}` : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
