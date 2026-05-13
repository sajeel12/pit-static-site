import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Menu } from 'lucide-react';

/* ------------------------------------------------------------------
   DATA
   ------------------------------------------------------------------ */
const NAV_ITEMS = [
  {
    label: 'Solutions',
    href: '/services',
    sections: [
      { title: 'View All Solutions', href: '/services', desc: '' },
      { title: 'Cooling & Airflow', href: '/infrastructure/data-centre-services/cooling-thermal', desc: 'Precision cooling & thermal continuity' },
      { title: 'Power & UPS', href: '/services/power-ups', desc: 'UPS & power distribution' },
      { title: 'Server Continuity', href: '/services/server-continuity', desc: 'Business continuity & disaster recovery' },
      { title: 'Hardware Support', href: '/services/hardware-support', desc: 'Save 60% vs vendor contracts' },
      { title: '24×7 SLA Support', href: '/services/sla-support', desc: 'Guaranteed response times' },
    ],
  },
  {
    label: 'Consultancy',
    href: '/services/consultancy',
    sections: [
      { title: 'View All Consultancy', href: '/services/consultancy', desc: '' },
      { title: 'IT Assessment', href: '/services/it-assessment', desc: 'Current-state analysis & gaps' },
      { title: 'Technology Roadmap', href: '/services/technology-roadmap', desc: '3-year planning & prioritisation' },
      { title: 'Digital Transformation', href: '/services/digital-transformation', desc: 'Process modernisation' },
    ],
  },
  {
    label: 'Cloud',
    href: '/services/cloud',
    sections: [
      { title: 'View All Cloud', href: '/services/cloud', desc: '' },
      { title: 'Cloud Strategy', href: '/services/cloud-strategy', desc: 'Multi-cloud roadmap & governance' },
      { title: 'Cloud Cost Optimisation', href: '/services/cloud-cost-optimisation', desc: 'Reduce spend by 30–40%' },
      { title: 'Cloud Management', href: '/services/cloud-management', desc: 'Operations & monitoring' },
      { title: 'DevOps Delivery', href: '/services/devops-delivery', desc: 'CI/CD pipelines & automation' },
      { title: 'Container Platform', href: '/services/container-platform', desc: 'Kubernetes & orchestration' },
    ],
  },
  {
    label: 'Infrastructure',
    href: '/services/infrastructure',
    sections: [
      { title: 'View All Infrastructure', href: '/services/infrastructure', desc: '' },
      { title: 'Cooling & Airflow', href: '/infrastructure/data-centre-services/cooling-thermal', desc: 'Precision cooling & thermal continuity' },
      { title: 'Power & UPS', href: '/services/power-ups', desc: 'UPS & power distribution' },
      { title: 'Network Operations', href: '/services/network-operations', desc: 'Cross-domain automation & monitoring' },
      { title: 'Data Centre Design & Build', href: '/services/design-build', desc: 'End-to-end construction & CFD' },
    ],
  },
  {
    label: 'Data & Analytics',
    href: '/services/data-analytics',
    sections: [
      { title: 'View All Data & Analytics', href: '/services/data-analytics', desc: '' },
      { title: 'IoT Data Analytics', href: '/services/iot-data-analytics', desc: 'Real-time sensor data processing' },
      { title: 'Data Lakes & Warehousing', href: '/services/data-lakes-warehousing', desc: 'Cloud-based data warehousing' },
      { title: 'Geospatial Analytics', href: '/services/geospatial-analytics', desc: 'Real-time mobile tower mapping' },
    ],
  },
  {
    label: 'AI',
    href: '/services/ai',
    sections: [
      { title: 'View All AI', href: '/services/ai', desc: '' },
      { title: 'AI Strategy', href: '/services/ai-strategy', desc: 'AI roadmap & use-case prioritisation' },
      { title: 'MLOps', href: '/services/mlops', desc: 'Model deployment & monitoring' },
      { title: 'Generative AI', href: '/services/generative-ai', desc: 'LLM integration & fine-tuning' },
    ],
  },
  {
    label: 'IT Platforms',
    href: '/services/platforms',
    sections: [
      { title: 'View All IT Platforms', href: '/services/platforms', desc: '' },
      { title: 'ServiceNow', href: '/services/servicenow', desc: 'ITSM & enterprise workflows' },
      { title: 'Salesforce', href: '/services/salesforce', desc: 'CRM implementation' },
      { title: 'Microsoft 365', href: '/services/microsoft-365', desc: 'Migration & governance' },
    ],
  },
];

const FLAT_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
];

/* ------------------------------------------------------------------
   DESKTOP NAV ITEM
   ------------------------------------------------------------------ */
const DesktopNavItem = ({
  item,
  isOpen,
  onToggle,
  onClose,
}: {
  item: (typeof NAV_ITEMS)[0];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center">
        <Link
          to={item.href}
          className="px-3 py-2 text-[13px] font-medium text-white hover:bg-white/10 transition-colors"
          onClick={onClose}
        >
          {item.label}
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`Toggle ${item.label} menu`}
          className="px-1 py-2 text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 w-72 bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden z-50 transition-all duration-200"
          role="menu"
        >
          <ul className="py-2">
            {item.sections.map((section, i) => (
              <li key={section.title} role="none">
                <Link
                  to={section.href}
                  role="menuitem"
                  onClick={onClose}
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    i === 0
                      ? 'font-semibold text-[#0f62fe] hover:bg-[#f4f4f4]'
                      : 'text-[#161616] hover:bg-[#f4f4f4] hover:text-[#0f62fe]'
                  }`}
                >
                  <span className="block">{section.title}</span>
                  {section.desc && (
                    <span className="block text-xs text-gray-400 mt-0.5">
                      {section.desc}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------
   MOBILE NAV
   ------------------------------------------------------------------ */
const MobileNav = ({ onClose }: { onClose: () => void }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const location = useLocation();

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-[#161616] overflow-y-auto">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <Link to="/" onClick={onClose} className="text-white font-semibold text-lg">
          Perception IT
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-white hover:bg-white/10 rounded transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="px-6 py-4" aria-label="Mobile navigation">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex-1 py-3 text-base font-medium transition-colors ${
                      location.pathname.startsWith(item.href)
                        ? 'text-[#0f62fe]'
                        : 'text-white hover:text-[#0f62fe]'
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${item.label}`}
                    className="p-2 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <ul className="pl-4 pb-2 space-y-1 border-l-2 border-gray-700 ml-2">
                    {item.sections.map((section) => (
                      <li key={section.title}>
                        <Link
                          to={section.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {section.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}

          {FLAT_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={onClose}
                className={`block py-3 text-base font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-[#0f62fe]'
                    : 'text-white hover:text-[#0f62fe]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

/* ------------------------------------------------------------------
   MAIN COMPONENT
   ------------------------------------------------------------------ */
export default function CoolingNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#161616]/95 backdrop-blur-md border-b border-gray-800'
            : 'bg-[#161616] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/logos/logo_icon.png" alt="Perception IT" className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center ml-8 gap-1"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onToggle={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  onClose={() => setOpenDropdown(null)}
                />
              ))}
              {FLAT_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-3 py-2 text-[13px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden ml-auto p-2 text-white hover:bg-white/10 rounded transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
