import { useState, useEffect, useRef } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface StickyAnchorNavProps {
  items: NavItem[];
  defaultActive?: string;
}

export default function StickyAnchorNav({ items, defaultActive }: StickyAnchorNavProps) {
  const [activeSection, setActiveSection] = useState(defaultActive ?? items[0]?.id ?? '');
  const [navScrolled, setNavScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navOffsetRef = useRef<number>(400);

  // Measure nav offset once after layout stabilises
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
        for (let i = items.length - 1; i >= 0; i--) {
          const el = document.getElementById(items[i].id);
          if (el && el.offsetTop <= spyY) {
            setActiveSection((prev) => (prev !== items[i].id ? items[i].id : prev));
            break;
          }
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

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
      className={`sticky z-30 border-b border-[var(--cds-border-subtle)] transition-all duration-150 ${navScrolled ? 'bg-black md:bg-[#f4f4f4]' : 'bg-white'}`}
      style={{
        top: '3rem',
        boxShadow: navScrolled ? '0 4px 12px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Desktop: horizontal pill nav */}
        <div className="hidden md:block">
          <ul className="anchor-nav-list" style={navScrolled ? { padding: '12px 0' } : undefined}>
            {items.map((item) => (
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
        <div className={`md:hidden relative -mx-6 px-6 transition-colors duration-150 ${navScrolled ? 'pt-3 pb-[18px]' : 'py-3'}`}>
          <select
            id="page-nav-mobile"
            name="page-nav-mobile"
            value={activeSection}
            onChange={(e) => scrollTo(e.target.value)}
            className="w-full h-11 px-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:border-[#0f62fe]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%236b7280' d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
            }}
          >
            {items.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
