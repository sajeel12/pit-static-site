import { useState, useEffect, useCallback } from 'react';
import PasswordGate from './components/PasswordGate';
import PortalNav from './components/PortalNav';
import ResourceCard from './components/ResourceCard';
import { PORTAL_SECTIONS } from './data';

export default function StaffPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('cooling');
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem('portal_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleAuth = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('portal_auth');
    setIsAuthenticated(false);
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#0f62fe] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordGate onAuth={handleAuth} />;
  }

  const currentSection = PORTAL_SECTIONS.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#161616] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logos/PIT/logo-icon-white.png" alt="Perception IT" className="h-6 w-auto" />
            <span className="text-white carbon-label-02">Staff Portal</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Sidebar */}
        <PortalNav
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={handleLogout}
        />

        {/* Main content */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10 min-w-0">
          {currentSection && (
            <>
              {/* Section header */}
              <div className="mb-8">
                <span className="inline-block carbon-label-02 text-[#0f62fe] uppercase tracking-wider mb-2">
                  Internal Resources
                </span>
                <h1 className="carbon-fluid-heading-05 text-[#161616] mb-3">
                  {currentSection.label}
                </h1>
                <p className="carbon-body-02 text-gray-600 max-w-2xl">
                  Downloadable templates, training materials, and operational documents for the{' '}
                  {currentSection.label} service line.
                </p>
              </div>

              {/* Resources grouped by category */}
              <div className="space-y-10">
                {currentSection.categories.map((category) => {
                  const resources = currentSection.resources.filter(
                    (r) => r.category === category
                  );
                  if (resources.length === 0) return null;

                  return (
                    <section
                      key={category}
                      id={`${currentSection.id}-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <h2 className="carbon-heading-02 text-[#161616] mb-1">{category}</h2>
                      <div className="w-12 h-0.5 bg-[#0f62fe] mb-4" />
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {resources.map((resource) => (
                          <ResourceCard
                            key={resource.id}
                            resource={resource}
                            sectionId={currentSection.id}
                          />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
