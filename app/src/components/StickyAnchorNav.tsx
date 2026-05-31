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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navOffsetRef = useRef<number>(400);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
    }
    setDropdownOpen(false);
  };



  return (
    <nav
      ref={navRef}
      className={`sticky z-30 transition-all duration-150 ${navScrolled ? 'bg-black md:bg-[#f4f4f4] md:border-b md:border-[var(--cds-border-subtle)]' : 'bg-white border-b border-[var(--cds-border-subtle)]'}`}
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

        {/* Mobile: custom dropdown */}
        <div className={`md:hidden relative -mx-6 px-6 transition-colors duration-150 ${navScrolled ? 'pt-3 pb-[18px]' : 'py-3'}`}>
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg border transition-colors ${
                navScrolled
                  ? 'bg-[#1a1a1a] border border-gray-700 text-white hover:border-gray-500'
                  : 'bg-white border border-gray-300 text-gray-900 hover:border-gray-400'
              }`}
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
            >
              <span className="font-medium">Services</span>
              <svg
                className={`w-4 h-4 flex-shrink-0 ml-2 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''} ${navScrolled ? 'text-gray-400' : 'text-gray-500'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute left-0 right-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50 overflow-hidden"
                role="listbox"
              >
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="option"
                    aria-selected={activeSection === item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      scrollTo(item.id);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#0f62fe] text-white font-medium'
                        : 'text-gray-700 [@media(hover:hover)]:hover:bg-[#0f62fe]/10 [@media(hover:hover)]:hover:text-[#0f62fe]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
