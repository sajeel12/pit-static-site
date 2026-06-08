import { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, LogOut } from 'lucide-react';
import { PORTAL_SECTIONS } from '../data';

interface PortalNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

export default function PortalNav({ activeSection, onSectionChange, onLogout }: PortalNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    cooling: true,
    power: true,
  });

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Mobile toggle */}
      <div className="md:hidden bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <span className="carbon-label-02 text-gray-700">Sections</span>
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="flex items-center gap-1 text-sm text-[#0f62fe]"
        >
          {mobileOpen ? 'Hide' : 'Show'}
          <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Nav sidebar */}
      <nav
        className={`bg-[#f4f4f4] border-r border-gray-200 ${
          mobileOpen ? 'block' : 'hidden md:block'
        } md:w-64 md:min-h-screen md:sticky md:top-0`}
      >
        <div className="p-5">
          <p className="carbon-label-02 text-gray-500 uppercase tracking-wider mb-4">Service Pages</p>

          {PORTAL_SECTIONS.map((section) => (
            <div key={section.id} className="mb-2">
              {/* Section header */}
              <button
                onClick={() => {
                  toggleSection(section.id);
                  onSectionChange(section.id);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors ${
                  activeSection === section.id
                    ? 'bg-[#0f62fe] text-white'
                    : 'text-[#161616] hover:bg-gray-200'
                }`}
              >
                <span className="carbon-heading-02 text-sm">{section.label}</span>
                {expandedSections[section.id] ? (
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                )}
              </button>

              {/* Categories */}
              {expandedSections[section.id] && (
                <div className="mt-1 ml-2 space-y-0.5">
                  {section.categories.map((cat) => (
                    <a
                      key={cat}
                      href={`#${section.id}-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-200 hover:text-[#161616] transition-colors"
                    >
                      {cat}
                    </a>
                  ))}
                  <a
                    href={section.publicPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-[#0f62fe] hover:bg-[#0f62fe]/10 transition-colors"
                  >
                    View public page
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="p-5 border-t border-gray-200">
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#da1e28] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </nav>
    </>
  );
}
