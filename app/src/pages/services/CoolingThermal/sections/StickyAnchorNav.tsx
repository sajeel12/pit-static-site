import { useState, useEffect, useRef } from 'react';
import {
  CheckmarkFilled, ChevronUp, ChevronDown,
} from '@carbon/icons-react';
import styles from '../CoolingThermal.module.css';
import { PAGE_SECTIONS } from '../data';
import '../../../../styles/carbon-typography.css';

export default function StickyAnchorNav() {



  const [activeSection, setActiveSection] = useState('assessment');



  const [navScrolled, setNavScrolled] = useState(false);



  const [mobileOpen, setMobileOpen] = useState(false);



  const mobileDropdownRef = useRef<HTMLDivElement>(null);



  const navRef = useRef<HTMLElement>(null);



  const navOffsetRef = useRef<number>(400);



  const navItems = PAGE_SECTIONS.filter((s) => s.inNav);







  // Measure nav offset once after layout stabilises



  useEffect(() => {



    const measure = () => {



      if (navRef.current) {



        navOffsetRef.current = navRef.current.offsetTop;



      }



    };



    measure();



    // Re-measure after images/fonts load



    window.addEventListener('load', measure);



    return () => window.removeEventListener('load', measure);



  }, []);







  useEffect(() => {



    let ticking = false;



    const handleScroll = () => {



      if (ticking) return;



      ticking = true;



      requestAnimationFrame(() => {



        const scrollY = window.scrollY;



        const shouldBeScrolled = scrollY >= navOffsetRef.current - 48;



        setNavScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));



        const spyY = scrollY + 150;



        for (let i = navItems.length - 1; i >= 0; i--) {



          const el = document.getElementById(navItems[i].id);



          if (el && el.offsetTop <= spyY) {



            setActiveSection((prev) => (prev !== navItems[i].id ? navItems[i].id : prev));



            break;



          }



        }



        ticking = false;



      });



    };



    window.addEventListener('scroll', handleScroll, { passive: true });



    handleScroll();



    return () => window.removeEventListener('scroll', handleScroll);



  }, []);







  useEffect(() => {



    if (!mobileOpen) return;



    const handleClick = (e: MouseEvent) => {



      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target as Node)) {



        setMobileOpen(false);



      }



    };



    const handleKey = (e: KeyboardEvent) => {



      if (e.key === 'Escape') setMobileOpen(false);



    };



    document.addEventListener('mousedown', handleClick);



    document.addEventListener('keydown', handleKey);



    return () => {



      document.removeEventListener('mousedown', handleClick);



      document.removeEventListener('keydown', handleKey);



    };



  }, [mobileOpen]);







  const scrollTo = (id: string) => {



    const el = document.getElementById(id);



    if (el) {



      const headerOffset = 80;



      const elementPosition = el.getBoundingClientRect().top + window.scrollY;



      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });



    }



    setMobileOpen(false);



  };







  const activeLabel = navItems.find((i) => i.id === activeSection)?.label ?? 'Navigate';







  return (



    <nav



      ref={navRef}



      className={`${styles['sticky-nav']} desktop-anchor-nav`}



      style={{



        background: navScrolled ? 'var(--cds-layer)' : 'var(--cds-background)',



        boxShadow: navScrolled ? 'var(--cds-shadow)' : 'none',



        top: '3rem',



      }}



    >



      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">



        {/* Desktop: horizontal pill nav */}



        <div className="hidden md:block">



          <ul className="anchor-nav-list">



            {navItems.map((item, idx) => (



              <li key={item.id} className="flex items-center">



                {/* Divider between process steps (01-04) and content sections */}



                {idx === 4 && <span className="anchor-nav-divider" aria-hidden="true" />}



                <button



                  onClick={() => scrollTo(item.id)}



                  className={`anchor-nav-item ${activeSection === item.id ? 'anchor-nav-item--active' : ''} ${item.id === 'cta' ? 'anchor-nav-item--cta' : ''}`}



                >



                  {item.label}



                </button>



              </li>



            ))}



          </ul>



        </div>







        {/* Mobile: integrated section jumper */}



        <div ref={mobileDropdownRef} className={`md:hidden relative -mx-6 px-6 py-4 transition-colors duration-200 ${navScrolled ? 'bg-[#161616]' : 'bg-white'}`}>



          <button



            onClick={() => setMobileOpen(!mobileOpen)}



            className={`w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left transition-all rounded-xl border ${mobileOpen ? 'bg-[#0f62fe] border-[#0f62fe] text-white shadow-md' : navScrolled ? 'bg-[#262626] border-gray-700 text-gray-200 shadow-sm' : 'bg-gray-50 border-gray-300 text-gray-900 shadow-sm'}`}



            aria-label="Jump to section"



          >



            <div className="flex items-center gap-2.5 min-w-0">



              <span className={`carbon-micro uppercase tracking-wider ${mobileOpen ? 'text-blue-100' : navScrolled ? 'text-gray-500' : 'text-gray-400'}`}>Section</span>



              <span className={`carbon-body-02 font-semibold truncate ${mobileOpen ? 'text-white' : navScrolled ? 'text-gray-100' : 'text-gray-900'}`}>{activeLabel}</span>



            </div>



            {mobileOpen ? (



              <ChevronUp className="w-5 h-5 flex-shrink-0" />



            ) : (



              <ChevronDown className={`w-5 h-5 flex-shrink-0 ${navScrolled ? 'text-gray-500' : 'text-gray-400'}`} />



            )}



          </button>







          {mobileOpen && (



            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50">



              {navItems.map((item) => (



                <button



                  key={item.id}



                  onClick={() => scrollTo(item.id)}



                  className={`w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors border-b border-gray-100 last:border-b-0 ${activeSection === item.id ? 'bg-[#00d4ff]/5 text-[#00d4ff] font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}



                >



                  <span className="carbon-body-02">{item.label}</span>



                  {activeSection === item.id && (



                    <CheckmarkFilled className="w-4 h-4 flex-shrink-0" />



                  )}



                </button>



              ))}



            </div>



          )}



        </div>



      </div>



    </nav>



  );



};

