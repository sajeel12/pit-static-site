import { Link } from 'react-router-dom';
import { Grid, Column } from '@carbon/react';
import LogoLinkedin from '@carbon/icons-react/es/LogoLinkedin';
import Email from '@carbon/icons-react/es/Email';
import Phone from '@carbon/icons-react/es/Phone';
import Location from '@carbon/icons-react/es/Location';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Cloud & Cost', href: '/services/cloud-cost-optimisation' },
      { name: 'Cloud Infrastructure', href: '#services' },
      { name: 'AI & Machine Learning', href: '#services' },
      { name: 'IT Service Management', href: '#services' },
      { name: 'Managed Services', href: '#services' },
      { name: 'Monitoring', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#contact' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Case Studies', href: '/projects' },
      { name: 'Partners', href: '#partnerships' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const linkStyle: React.CSSProperties = {
    color: '#c6c6c6',
    fontSize: '0.875rem',
    textDecoration: 'none',
    lineHeight: 1.5,
    display: 'inline-block',
    padding: '0.125rem 0',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#ffffff';
    e.currentTarget.style.textDecoration = 'underline';
    e.currentTarget.style.textUnderlineOffset = '0.25rem';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#c6c6c6';
    e.currentTarget.style.textDecoration = 'none';
  };

  const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.outline = '2px solid #78a9ff';
    e.currentTarget.style.outlineOffset = '2px';
  };

  const handleBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.outline = 'none';
  };

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: '#161616',
        color: '#ffffff',
        padding: 'var(--cds-spacing-10) var(--cds-spacing-05) 0',
      }}
    >
      {/* ── Main footer grid ───────────────────────────────────── */}
      <Grid style={{ marginBottom: 'var(--cds-spacing-09)' }}>
        {/* Brand */}
        <Column lg={4} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', marginBottom: 'var(--cds-spacing-05)' }}>
            <img
              src="/logos/PIT/logo-icon-white.png"
              alt="Perception IT"
              style={{ height: 40, width: 'auto' }}
            />
          </div>
          <p
            className="cds--body-02"
            style={{
              color: '#c6c6c6',
              fontSize: '0.875rem',
              lineHeight: 1.5,
              marginBottom: 'var(--cds-spacing-05)',
              maxWidth: '20rem',
            }}
          >
            British-standard enterprise IT, engineered in Pakistan.
            Serving clients worldwide.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-03)' }}>
            <a
              href="mailto:contact@perception-it.com"
              style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <Email size={16} style={{ color: '#8d8d8d', flexShrink: 0 }} />
              <span>contact@perception-it.com</span>
            </a>
            <a
              href="tel:+924235947000"
              style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <Phone size={16} style={{ color: '#8d8d8d', flexShrink: 0 }} />
              <span>+92 42 3594 7000</span>
            </a>
            <span
              style={{
                color: '#8d8d8d',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--cds-spacing-03)',
                lineHeight: 1.5,
              }}
            >
              <Location size={16} style={{ flexShrink: 0 }} />
              <span>Lahore, Pakistan</span>
            </span>
          </div>
        </Column>

        {/* Services */}
        <Column lg={3} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-06)' }}>
          <p
            className="cds--label-01"
            style={{
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.32px',
              marginBottom: 'var(--cds-spacing-05)',
            }}
          >
            Services
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {footerLinks.services.map((link) => (
              <li key={link.name} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Link
                  to={link.href}
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        {/* Company */}
        <Column lg={3} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-06)' }}>
          <p
            className="cds--label-01"
            style={{
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.32px',
              marginBottom: 'var(--cds-spacing-05)',
            }}
          >
            Company
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {footerLinks.company.map((link) => (
              <li key={link.name} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Link
                  to={link.href}
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        {/* Resources */}
        <Column lg={3} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-06)' }}>
          <p
            className="cds--label-01"
            style={{
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.32px',
              marginBottom: 'var(--cds-spacing-05)',
            }}
          >
            Resources
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {footerLinks.resources.map((link) => (
              <li key={link.name} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Link
                  to={link.href}
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        {/* Social */}
        <Column lg={2} md={4} sm={4}>
          <p
            className="cds--label-01"
            style={{
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.32px',
              marginBottom: 'var(--cds-spacing-05)',
            }}
          >
            Connect
          </p>
          <a
            href="https://linkedin.com/company/perception-it"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--cds-spacing-03)',
              color: '#c6c6c6',
              textDecoration: 'none',
              fontSize: '0.875rem',
              padding: '0.5rem 0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#c6c6c6';
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <LogoLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </Column>
      </Grid>

      {/* ── Legal bar ──────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid #393939', padding: 'var(--cds-spacing-05) var(--cds-spacing-05)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 'var(--cds-spacing-03)',
              }}
            >
              <p
                className="cds--helper-text-01"
                style={{
                  color: '#8d8d8d',
                  fontSize: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                © {new Date().getFullYear()} Perception IT. All rights reserved.
              </p>
              <p
                className="cds--helper-text-01"
                style={{
                  color: '#8d8d8d',
                  fontSize: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                VAT: GB123456789 &nbsp;|&nbsp; Company Reg: 12345678
              </p>
            </div>
          </Column>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
