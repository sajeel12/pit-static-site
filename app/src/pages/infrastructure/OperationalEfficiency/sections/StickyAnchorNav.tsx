import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'calculator', label: 'Calculator' },
  { id: 'faq', label: 'FAQ' },
  { id: 'cta', label: 'Get Started' },
];

export default function StickyAnchorNav() {
  const [activeSection, setActiveSection] = useState('savings');
  const [navScrolled, setNavScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navOffsetRef = useRef<number>(400);

  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        navOffsetRef.current = navRef.current.offsetTop;
      }
    };
    measure();
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
        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const el = document.getElementById(NAV_ITEMS[i].id);
          if (el && el.offsetTop <= spyY) {
            setActiveSection((prev) => (prev !== NAV_ITEMS[i].id ? NAV_ITEMS[i].id : prev));
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className="sticky z-40 border-b border-gray-200 desktop-anchor-nav"
      style={{
        position: 'sticky',
        top: '3rem',
        background: navScrolled ? 'var(--cds-layer)' : 'var(--cds-background)',
        boxShadow: navScrolled ? 'var(--cds-shadow)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Desktop: horizontal pill nav */}
        <div className="hidden md:block">
          <ul className="anchor-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="flex items-center">
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
        <div className="md:hidden relative -mx-6 px-6 py-3">
          <select
            value={activeSection}
            onChange={(e) => scrollTo(e.target.value)}
            className="w-full h-11 px-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:border-[#0f62fe]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%236b7280' d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
