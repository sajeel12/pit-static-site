import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, ChevronLeft, ChevronRight, Quotes,
} from '@carbon/icons-react';
import { TESTIMONIALS } from '../data';


export default function TestimonialCarousel() {



  const [current, setCurrent] = useState(0);



  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);



  const total = TESTIMONIALS.length;







  const goTo = (idx: number) => {



    setCurrent(((idx % total) + total) % total);



  };







  useEffect(() => {



    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 8000);



    return () => { if (timerRef.current) clearInterval(timerRef.current); };



  }, [total]);







  const pause = () => { if (timerRef.current) clearInterval(timerRef.current); };



  const resume = () => {



    if (timerRef.current) clearInterval(timerRef.current);



    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 8000);



  };







  const t = TESTIMONIALS[current];







  return (



    <div



      className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${t.bg} pt-10 px-8 pb-6 md:pt-14 md:px-12 md:pb-8 transition-all duration-700`}



      onMouseEnter={pause}



      onMouseLeave={resume}



    >



      <Quotes className="absolute top-6 left-6 w-16 h-16 text-white/10" />



      <div className="relative z-10">



        <p className="carbon-fluid-quotation-03 text-white mt-4 mb-8 leading-relaxed px-8 md:px-16 whitespace-pre-line">"{t.quote}"</p>



        <div className="flex items-center gap-4 px-8 md:px-16">



          {t.logo && (



            <div className="p-2 bg-white rounded-lg shadow-sm flex-shrink-0">



              <img



                src={t.logo}



                alt={t.org}



                className="h-8 w-auto"



              />



            </div>



          )}



          <div>



            <p className="carbon-heading-02 text-white">{t.author}</p>



            <p className="carbon-body-02 text-white/70 mt-0.5">{t.org}</p>



          </div>



        </div>



        {t.project && (



          <div className="mt-14 pl-4 border-l-2 border-white/20">



            <p className="carbon-label-02 text-white/90 mb-1">{t.project.headline}</p>



            <p className="carbon-body-02 text-white/50 mb-2">{t.project.desc}</p>



            <a



              href={t.project.link}



              className="inline-flex items-center gap-1 carbon-label-01 text-white/60 hover:text-white transition-colors"



            >



              View Solution Details <ArrowRight className="w-3 h-3" />



            </a>



          </div>



        )}



      </div>







      {/* Footer: dots + counter + nav */}



      <div className="flex items-center justify-between mt-6">



        <div className="flex items-center gap-3">



          <div className="flex gap-2">



            {TESTIMONIALS.map((_, i) => (



              <button



                key={i}



                onClick={() => goTo(i)}



                className={`h-3 rounded-full transition-all ${i === current ? 'bg-white w-8' : 'bg-white/40 w-3'}`}



                aria-label={`Go to testimonial ${i + 1}`}



              />



            ))}



          </div>



          <span className="carbon-label-01 text-white/60">



            {current + 1} / {total}



          </span>



        </div>







        <div className="flex gap-2">



          <button



            onClick={() => goTo(current - 1)}



            className="w-12 h-12 rounded-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"



            aria-label="Previous testimonial"



          >



            <ChevronLeft className="w-6 h-6" />



          </button>



          <button



            onClick={() => goTo(current + 1)}



            className="w-12 h-12 rounded-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"



            aria-label="Next testimonial"



          >



            <ChevronRight className="w-6 h-6" />



          </button>



        </div>



      </div>



    </div>



  );



};

