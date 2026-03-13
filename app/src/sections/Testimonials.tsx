import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
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

  const testimonials = [
    {
      quote: "Perception IT's managed service transformed our network operations. The proactive monitoring and rapid response capabilities have been game-changing for our infrastructure reliability.",
      author: 'Head of Network Operations',
      role: 'Major Asian Telecom Operator',
      metric: '99.9%',
      metricLabel: 'Uptime SLA',
    },
    {
      quote: "The observability platform Perception IT built gives us complete confidence in our trading infrastructure. We can now detect and resolve issues before they impact the market.",
      author: 'Chief Technology Officer',
      role: 'Regional Stock Exchange',
      metric: '99.99%',
      metricLabel: 'Trading Uptime',
    },
    {
      quote: "Perception IT gave us the visibility we needed to truly understand our customer experience. We can now proactively address issues before customers even notice.",
      author: 'VP of Network Engineering',
      role: 'Regional ISP',
      metric: '25%',
      metricLabel: 'Churn Reduction',
    },
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight">
            Trusted by industry leaders
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-[#FAFAFA] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-semibold text-gray-400">
                    {testimonials[current].author.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-gray-400">Client Photo</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Metric Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full mb-6 w-fit">
                <span className="text-2xl font-light text-blue-500">{testimonials[current].metric}</span>
                <span className="text-sm text-blue-700">{testimonials[current].metricLabel}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-[#0F172A] leading-relaxed mb-8 font-light">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-[#0F172A]">{testimonials[current].author}</div>
                <div className="text-sm text-gray-500">{testimonials[current].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'w-8 bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
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
