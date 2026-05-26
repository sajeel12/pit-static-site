import { Link, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';
import Tools from '@carbon/icons-react/es/Tools';
import ArrowLeft from '@carbon/icons-react/es/ArrowLeft';

const UnderConstruction = () => {
  const location = useLocation();
  const path = location.pathname;

  // Derive a parent hub link from the path
  const getHubLink = () => {
    if (path.includes('cooling') || path.includes('power') || path.includes('rack') || path.includes('environmental') || path.includes('fire') || path.includes('design') || path.includes('migration') || path.includes('maintenance')) {
      return { label: 'Data Centre Services', to: '/services/datacenter2' };
    }
    if (path.includes('server') || path.includes('hardware') || path.includes('sla')) {
      return { label: 'Infrastructure', to: '/services/infrastructure' };
    }
    return { label: 'Services', to: '/services' };
  };

  const hub = getHubLink();

  // Format the page name from the URL path
  const pageName = path
    .split('/')
    .pop()
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()) || 'Service';

  return (
    <div className="min-h-screen bg-[var(--cds-background)] flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <div className="w-20 h-20 bg-[#0f62fe]/10 flex items-center justify-center mx-auto mb-8">
            <Tools className="w-10 h-10 text-[#0f62fe]" />
          </div>

          <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-4">Perception-IT</p>
          <h1 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">
            {pageName}
          </h1>
          <p className="carbon-heading-02 text-[var(--cds-text-secondary)] mb-8">
            This page is under construction.
          </p>
          <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10 max-w-md mx-auto">
            We are building out detailed service specifications, case studies, and engagement models for this offering. Check back soon, or explore our existing services below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={hub.to}
              className="cds--btn cds--btn--primary inline-flex items-center gap-2 bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {hub.label}
            </Link>
            <Link
              to="/"
              className="cds--btn cds--btn--tertiary inline-flex items-center border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UnderConstruction;
