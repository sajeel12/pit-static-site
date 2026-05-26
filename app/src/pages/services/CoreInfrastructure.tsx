import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../sections/Footer';
import Tools from '@carbon/icons-react/es/Tools';
import ArrowLeft from '@carbon/icons-react/es/ArrowLeft';

const CoreInfrastructure = () => (
  <div className="min-h-screen bg-[var(--cds-background)] flex flex-col">
    <Navigation />

    <main className="flex-1 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div className="w-20 h-20 bg-[#0f62fe]/10 flex items-center justify-center mx-auto mb-8 rounded-lg">
          <Tools className="w-10 h-10 text-[#0f62fe]" />
        </div>

        <p className="carbon-label-01 text-[#0f62fe] uppercase tracking-wider mb-4">Perception-IT</p>
        <h1 className="carbon-fluid-heading-04 text-[var(--cds-text-primary)] mb-4">
          Core Infrastructure
        </h1>
        <p className="carbon-heading-02 text-[var(--cds-text-secondary)] mb-8">
          This page is under construction.
        </p>
        <p className="carbon-body-01 text-[var(--cds-text-secondary)] mb-10 max-w-md mx-auto">
          We are building out detailed service specifications, case studies, and engagement models for our core infrastructure offerings. Check back soon.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/services/infrastructure"
            className="cds--btn cds--btn--primary inline-flex items-center gap-2 bg-[#0f62fe] text-white hover:bg-[#0353e9] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Infrastructure
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

export default CoreInfrastructure;
