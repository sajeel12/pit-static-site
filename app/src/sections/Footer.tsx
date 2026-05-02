import { Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    solutions: [
      { name: 'AI Accelerator', href: '/services/ai-accelerator' },
      { name: 'Cloud Control', href: '/services/cloud-cost-optimisation' },
      { name: 'Server Continuity Suite', href: '/services/server-continuity' },
      { name: 'Data Centre Services', href: '/services/infrastructure' },
    ],
    services: [
      { name: 'Cooling & Airflow', href: '/services/cooling-airflow' },
      { name: 'Power & UPS', href: '/services/power-ups' },
      { name: 'Cloud Infrastructure', href: '/services/cloud-management' },
      { name: 'IT Service Management', href: '/services/service-management' },
      { name: 'Managed Services', href: '/services/managed-services' },
      { name: 'Monitoring', href: '/services/monitoring' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Connect on LinkedIn', href: 'https://linkedin.com', external: true },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Slavery & Human Trafficking', href: '/modern-slavery' },
    ],
  };

  const linkBaseStyle: React.CSSProperties = {
    color: '#a8a8a8',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    textDecoration: 'none',
    transition: 'color 150ms cubic-bezier(0.2, 0, 0.38, 0.9)',
  };

  const linkHoverStyle = {
    color: '#f4f4f4',
  };

  return (
    <footer style={{ background: '#161616', padding: '4rem 0 2rem' }}>
      <div style={{ maxWidth: '99rem', margin: '0 auto', padding: '0 1rem' }}>
        {/* Main footer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <img
                src="/logos/logo.png"
                alt="Perception IT"
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            <p style={{ color: '#a8a8a8', fontSize: '0.875rem', lineHeight: '1.5rem', marginBottom: '1.5rem', maxWidth: '20rem' }}>
              Enterprise IT solutions with British standards and local expertise.
              Based in Lahore, serving Pakistan and the UK.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#262626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 150ms cubic-bezier(0.2, 0, 0.38, 0.9)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#393939'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#262626'; }}
              >
                <Linkedin size={18} style={{ color: '#f4f4f4' }} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#262626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 150ms cubic-bezier(0.2, 0, 0.38, 0.9)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#393939'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#262626'; }}
              >
                <Twitter size={18} style={{ color: '#f4f4f4' }} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ color: '#f4f4f4', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    style={linkBaseStyle}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = linkHoverStyle.color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = linkBaseStyle.color as string; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#f4f4f4', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    style={linkBaseStyle}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = linkHoverStyle.color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = linkBaseStyle.color as string; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: '#f4f4f4', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
                Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkBaseStyle}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = linkHoverStyle.color; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = linkBaseStyle.color as string; }}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        style={linkBaseStyle}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = linkHoverStyle.color; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = linkBaseStyle.color as string; }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#f4f4f4', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
                Legal
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      style={linkBaseStyle}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = linkHoverStyle.color; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = linkBaseStyle.color as string; }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #393939',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="footer-bottom"
        >
          <p style={{ color: '#6f6f6f', fontSize: '0.75rem', lineHeight: '1rem' }}>
            &copy; {new Date().getFullYear()} Perception IT (Private) Limited. All rights reserved.
          </p>
          <p style={{ color: '#525252', fontSize: '0.75rem', lineHeight: '1rem' }}>
            Huawei Enterprise Partner | Lahore, Pakistan &middot; London, UK
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1055px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 671px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
