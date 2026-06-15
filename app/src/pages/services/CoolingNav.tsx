import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Menu, ArrowUpRight, ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------
   TYPES
   ------------------------------------------------------------------ */
interface LinkItem {
  title: string;
  href: string;
  desc?: string;
}

interface SectionGroup {
  heading: string;
  href?: string;
  links: LinkItem[];
}

interface NavItemConfig {
  label: string;
  href: string;
  groups: SectionGroup[];
}

/* ------------------------------------------------------------------
   DATA
   ------------------------------------------------------------------ */
const NAV_ITEMS: NavItemConfig[] = [
  {
    label: 'Solutions',
    href: '/services',
    groups: [
      {
        heading: 'Core Services',
        links: [
          { title: 'View All Solutions', href: '/services', desc: '' },
          { title: 'Cooling', href: '/infrastructure/data-centre-services/cooling-thermal', desc: 'Precision cooling & thermal continuity' },
          { title: 'Power & UPS', href: '/services/power-ups', desc: 'UPS & power distribution' },
          { title: 'Server Continuity', href: '/services/server-continuity', desc: 'Business continuity & disaster recovery' },
          { title: 'Hardware Support', href: '/services/hardware-support', desc: 'Save 60% vs vendor contracts' },
          { title: '24×7 SLA Support', href: '/services/sla-support', desc: 'Guaranteed response times' },
        ],
      },
    ],
  },
  {
    label: 'Consultancy',
    href: '/services/consultancy',
    groups: [
      {
        heading: 'Consultancy',
        links: [
          { title: 'View All Consultancy', href: '/services/consultancy', desc: '' },
          { title: 'IT Assessment', href: '/services/it-assessment', desc: 'Current-state analysis & gaps' },
          { title: 'Technology Roadmap', href: '/services/technology-roadmap', desc: '3-year planning & prioritisation' },
          { title: 'Digital Transformation', href: '/services/digital-transformation', desc: 'Process modernisation' },
        ],
      },
    ],
  },
  {
    label: 'Cloud',
    href: '/services/cloud',
    groups: [
      {
        heading: 'Cloud Services',
        links: [
          { title: 'View All Cloud', href: '/services/cloud', desc: '' },
          { title: 'Cloud Strategy', href: '/services/cloud-strategy', desc: 'Multi-cloud roadmap & governance' },
          { title: 'Cloud Cost Optimisation', href: '/services/cloud-cost-optimisation', desc: 'Reduce spend by 30–40%' },
          { title: 'Cloud Management', href: '/services/cloud-management', desc: 'Operations & monitoring' },
          { title: 'DevOps Delivery', href: '/services/devops-delivery', desc: 'CI/CD pipelines & automation' },
          { title: 'Container Platform', href: '/services/container-platform', desc: 'Kubernetes & orchestration' },
        ],
      },
    ],
  },
  {
    label: 'Infrastructure',
    href: '/services/infrastructure',
    groups: [
      {
        heading: 'Data Centre Infrastructure Services',
        href: '/services/datacenter2',
        links: [
          { title: 'Cost Optimisation', href: '/infrastructure/operational-efficiency', desc: 'Cost reduction & ROI across Data Centre infrastructure. Also available as part of our Ecosystem Integration.' },
          { title: 'Cooling', href: '/infrastructure/data-centre-services/cooling-thermal', desc: 'Precision cooling & thermal continuity' },
          { title: 'Power & UPS', href: '/services/power-ups', desc: 'UPS systems & power distribution' },
          { title: 'Rack & Cabinet', href: '/services/rack-cabinets', desc: 'Server cabinets & enclosures' },
          { title: 'Monitoring', href: '/services/monitoring', desc: 'Temp, humidity, leak detection' },
          { title: 'Fire Suppression', href: '/services/fire-suppression', desc: 'FM200 & clean-agent protection' },
          { title: 'Design & Build', href: '/services/design-build', desc: 'End-to-end construction & CFD' },
          { title: 'Migration & Relocation', href: '/services/migration-relocation', desc: 'Zero-downtime moves' },
          { title: 'Maintenance & Support', href: '/services/maintenance-support', desc: 'SLA-backed contracts' },
        ],
      },
      {
        heading: 'Core Infrastructure',
        href: '/services/core-infrastructure',
        links: [
          { title: 'Server Continuity', href: '/services/server-continuity', desc: 'Business continuity & disaster recovery' },
          { title: 'Hardware Support', href: '/services/hardware-support', desc: 'Save 60% vs vendor contracts' },
          { title: '24×7 SLA Support', href: '/services/sla-support', desc: 'Guaranteed response times' },
        ],
      },
      {
        heading: 'Network Operations',
        href: '/services/network-operations',
        links: [
          { title: 'Cross-Domain Automation', href: '/services/cross-domain-automation', desc: 'Automate alarm correlation' },
          { title: 'Network Monitoring', href: '/services/network-monitoring', desc: 'Real-time visibility & optimisation' },
        ],
      },
    ],
  },
  {
    label: 'Data & Analytics',
    href: '/services/data-analytics',
    groups: [
      {
        heading: 'Data & Analytics',
        links: [
          { title: 'View All Data & Analytics', href: '/services/data-analytics', desc: '' },
          { title: 'IoT Data Analytics', href: '/services/iot-data-analytics', desc: 'Real-time sensor data processing' },
          { title: 'Data Lakes & Warehousing', href: '/services/data-lakes-warehousing', desc: 'Cloud-based data warehousing' },
          { title: 'Geospatial Analytics', href: '/services/geospatial-analytics', desc: 'Real-time mobile tower mapping' },
        ],
      },
    ],
  },
  {
    label: 'AI',
    href: '/services/ai',
    groups: [
      {
        heading: 'AI',
        links: [
          { title: 'View All AI', href: '/services/ai', desc: '' },
          { title: 'AI Strategy', href: '/services/ai-strategy', desc: 'AI roadmap & use-case prioritisation' },
          { title: 'MLOps', href: '/services/mlops', desc: 'Model deployment & monitoring' },
          { title: 'Generative AI', href: '/services/generative-ai', desc: 'LLM integration & fine-tuning' },
        ],
      },
    ],
  },
  {
    label: 'IT Platforms',
    href: '/services/platforms',
    groups: [
      {
        heading: 'IT Platforms',
        links: [
          { title: 'View All IT Platforms', href: '/services/platforms', desc: '' },
          { title: 'ServiceNow', href: '/services/servicenow', desc: 'ITSM & enterprise workflows' },
          { title: 'Salesforce', href: '/services/salesforce', desc: 'CRM implementation' },
          { title: 'Microsoft 365', href: '/services/microsoft-365', desc: 'Migration & governance' },
        ],
      },
    ],
  },
];

const FLAT_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
];

/* ------------------------------------------------------------------
   DESKTOP DROPDOWN
   ------------------------------------------------------------------ */
const DesktopDropdown = ({
  groups,
  onClose,
  showPartnerBadge = false,
}: {
  groups: SectionGroup[];
  onClose: () => void;
  showPartnerBadge?: boolean;
}) => {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[60]"
      role="menu"
    >
      {/* Arrow pointer */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100" />

      <div className="relative bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 rounded-xl overflow-hidden">
        <div className="flex">
          {groups.map((group, groupIdx) => (
            <div key={group.heading} className={`min-w-[260px] border-r border-gray-50 last:border-r-0 px-1 ${groupIdx === 0 ? 'bg-[#fafbfc]' : ''}`}>
              {group.href ? (
                <Link
                  to={group.href}
                  onClick={onClose}
                  className={`flex items-center gap-2 px-4 pt-5 pb-2 hover:underline transition-colors ${
                    groupIdx === 0
                      ? 'text-sm font-bold text-[#161616]'
                      : 'text-xs font-semibold text-[#0f62fe]'
                  }`}
                >
                  {group.heading}
                  <ArrowUpRight className={`${groupIdx === 0 ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} />
                </Link>
              ) : (
                <p className={`px-4 pt-5 pb-2 ${groupIdx === 0 ? 'text-sm font-bold text-[#161616]' : 'text-xs font-semibold text-[#6f6f6f]'}`}>
                  {group.heading}
                </p>
              )}
              {groupIdx === 0 && (
                <div className="mx-4 mb-2 h-px bg-[#e0e0e0]" />
              )}
              <ul className="space-y-1 pb-2">
                {group.links.map((link) => (
                  <li key={link.title} role="none">
                    <Link
                      to={link.href}
                      role="menuitem"
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#161616] hover:bg-[#f4f4f4] hover:text-[#0f62fe] transition-colors group rounded-sm"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="font-medium">{link.title}</span>
                        {link.desc && (
                          <span className="block text-[11px] text-[#525252] mt-0.5 leading-snug">
                            {link.desc}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8d8d8d] group-hover:text-[#0f62fe] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
              {group.href && (
                <>
                  <div className="border-t border-[#e0e0e0] mx-4 my-2" />
                  <div className="px-4 pb-4">
                    <Link
                      to={group.href}
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f62fe] hover:text-[#0353e9] transition-colors"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className={`px-5 py-4 border-t border-gray-100 flex items-center justify-between ${showPartnerBadge ? 'bg-[#161616]' : 'bg-gray-50/80'}`}>
          <Link
            to="/services/infrastructure"
            onClick={onClose}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${showPartnerBadge ? 'text-white/80 hover:text-white' : 'text-[#0f62fe] hover:text-[#0353e9]'}`}
          >
            View All Infrastructure <ArrowRight className="w-4 h-4" />
          </Link>

          {showPartnerBadge && (
            <Link
              to="/partners/huawei"
              onClick={onClose}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#cf0a2c] flex items-center justify-center flex-shrink-0 rounded-sm">
                <span className="text-white font-semibold text-xs">H</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-semibold text-[#cf0a2c] uppercase tracking-[0.16px]">
                  Certified Partner
                </span>
                <span className="text-sm text-white/90 font-medium">
                  Huawei Enterprise
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
   DESKTOP NAV ITEM
   ------------------------------------------------------------------ */
const DesktopNavItem = ({
  item,
  isOpen,
  onToggle,
  onClose,
  isActive,
}: {
  item: NavItemConfig;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  isActive: boolean;
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
      <div className={`flex items-center rounded-lg transition-colors ${isOpen ? 'bg-white/10' : 'hover:bg-white/10'}`}>
        <Link
          to={item.href}
          className={`relative px-3 py-2 text-[13px] font-medium transition-colors rounded-l-lg ${
            isActive
              ? 'text-white'
              : 'text-white/80 hover:text-white'
          }`}
          onClick={onClose}
        >
          {item.label}
          {isActive && (
            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#0f62fe] rounded-full" />
          )}
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`Toggle ${item.label} menu`}
          className={`px-0.5 py-2 transition-colors ${
            isOpen ? 'text-white' : 'text-white/50 hover:text-white'
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {isOpen && (
        <DesktopDropdown
          groups={item.groups}
          onClose={onClose}
          showPartnerBadge={item.label === 'Infrastructure'}
        />
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
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/60">
        <Link to="/" onClick={onClose} className="text-white font-semibold text-lg">
          Perception IT
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="px-6 py-4" aria-label="Mobile navigation">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isActive = location.pathname.startsWith(item.href);
            return (
              <li key={item.label}>
                <div className={`flex items-center justify-between border rounded-lg transition-colors ${isOpen ? 'border-gray-700 bg-white/[0.03]' : 'border-gray-800/50'}`}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex-1 py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
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
                    className={`p-2 mr-1 rounded-lg transition-colors ${
                      isOpen ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-2 p-3 bg-white/[0.03] border border-gray-800/40 rounded-xl space-y-4">
                    {item.groups.map((group, gIdx) => (
                      <div key={group.heading} className={`${gIdx > 0 ? 'border-t border-gray-800/40 pt-3' : ''} ${gIdx === 0 ? 'bg-white/[0.03] rounded-lg p-3 -mx-1' : ''}`}>
                        {group.href ? (
                          <Link
                            to={group.href}
                            onClick={onClose}
                            className={`inline-flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition-colors ${
                              gIdx === 0
                                ? 'text-sm font-bold text-white mb-2'
                                : 'text-xs font-semibold text-[#0f62fe] mb-2'
                            }`}
                          >
                            {group.heading}
                            <ArrowUpRight className={`${gIdx === 0 ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} />
                          </Link>
                        ) : (
                          <p className={`${gIdx === 0 ? 'text-sm font-bold text-white mb-2' : 'text-xs font-semibold text-gray-400 mb-2'}`}>
                            {group.heading}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {group.links.map((link) => (
                            <li key={link.title}>
                              <Link
                                to={link.href}
                                onClick={onClose}
                                className="flex items-center gap-3 p-3 border border-gray-700/50 rounded-lg text-sm text-gray-300 hover:text-white hover:border-gray-600 hover:bg-white/5 transition-colors"
                              >
                                <div className="flex-1 min-w-0">
                                  <span className="font-medium block">{link.title}</span>
                                  {link.desc && (
                                    <span className="block text-[11px] text-gray-500 mt-0.5 leading-snug">
                                      {link.desc}
                                    </span>
                                  )}
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {group.href && (
                          <div className="mt-2 pt-2 border-t border-gray-700/50">
                            <Link
                              to={group.href}
                              onClick={onClose}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f62fe] hover:text-[#78a9ff] transition-colors"
                            >
                              View All <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          })}

          {FLAT_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  className={`block py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#0f62fe]'
                      : 'text-white hover:text-[#0f62fe] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
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
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#161616] border-b border-gray-800/60">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center h-12">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/logos/PIT/Perception IT_logo_in-white.png?v=2" alt="Perception IT" className="h-9 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center ml-8 gap-2"
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
                  isActive={location.pathname.startsWith(item.href)}
                />
              ))}
              {FLAT_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative px-3 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                      isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    } hover:bg-white/10`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#0f62fe] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden ml-auto p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
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
      <div className="h-12 shrink-0" />
    </>
  );
}
