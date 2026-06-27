import { Link } from 'react-router-dom';
import LogoLinkedin from '@carbon/icons-react/es/LogoLinkedin';
import Email from '@carbon/icons-react/es/Email';
import Phone from '@carbon/icons-react/es/Phone';
import Location from '@carbon/icons-react/es/Location';

const footerLinks = {
  services: [
    { name: 'Cloud & Cost', href: '/services/cloud-cost-optimisation' },
    { name: 'Cloud Infrastructure', href: '/services/infrastructure' },
    { name: 'AI & Machine Learning', href: '/services/mlops' },
    { name: 'IT Service Management', href: '/services/servicenow' },
    { name: 'Managed Services', href: '/services/cloud-management' },
    { name: 'Monitoring', href: '/services/observability' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Case Studies', href: '/projects' },
    { name: 'Partners', href: '/partners/huawei' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Staff Portal', href: '/portal' },
  ],
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-sm text-[#c6c6c6] hover:text-white transition-colors duration-200 inline-block"
  >
    {children}
  </Link>
);

const ExternalLink = ({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    className={`text-sm text-[#c6c6c6] hover:text-white transition-colors duration-200 inline-flex items-center gap-3 ${className}`}
  >
    {children}
  </a>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
    {children}
  </h3>
);

const OfficeCard = ({
  title,
  phone1,
  phone2,
  email,
  address,
}: {
  title: string;
  phone1: { href: string; label: string };
  phone2: { href: string; label: string };
  email: string;
  address: React.ReactNode;
}) => (
  <div className="bg-[#1f1f1f] border border-[#333333] rounded-lg p-6 hover:border-[#0f62fe]/40 transition-colors duration-300">
    <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
    <div className="space-y-3">
      <ExternalLink href={phone1.href}>
        <Phone size={16} className="text-[#8d8d8d]" />
        {phone1.label}
      </ExternalLink>
      <ExternalLink href={phone2.href}>
        <Phone size={16} className="text-[#8d8d8d]" />
        {phone2.label}
      </ExternalLink>
      <ExternalLink href={`mailto:${email}`}>
        <Email size={16} className="text-[#8d8d8d]" />
        {email}
      </ExternalLink>
      <div className="flex items-start gap-3 text-sm text-[#8d8d8d]">
        <Location size={16} className="mt-0.5 flex-shrink-0" />
        <span className="leading-relaxed">{address}</span>
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 lg:pt-20">
        {/* Brand & links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#393939]">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img
                src="/logos/PIT/logo-icon-white.png"
                alt="Perception IT"
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold tracking-tight text-white group-hover:text-[#78a9ff] transition-colors">
                Perception IT
              </span>
            </Link>
            <p className="text-[#c6c6c6] text-sm leading-relaxed mb-6 max-w-xs">
              British-standard enterprise IT, engineered in Pakistan. Serving clients worldwide.
            </p>
            <div className="space-y-3">
              <ExternalLink href="mailto:info@perception-it.com">
                <Email size={16} className="text-[#8d8d8d]" />
                info@perception-it.com
              </ExternalLink>
              <ExternalLink href="tel:+447456457005">
                <Phone size={16} className="text-[#8d8d8d]" />
                +44 7456 457005
              </ExternalLink>
              <a
                href="https://linkedin.com/company/perception-it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-[#c6c6c6] hover:text-white transition-colors duration-200"
              >
                <LogoLinkedin size={18} className="text-[#8d8d8d]" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <SectionHeading>Services</SectionHeading>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <FooterLink to={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <SectionHeading>Company</SectionHeading>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <FooterLink to={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <SectionHeading>Resources</SectionHeading>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <FooterLink to={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="py-12 border-b border-[#393939]">
          <SectionHeading>Our Offices</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <OfficeCard
              title="Perception IT UK"
              phone1={{ href: 'tel:+447456457005', label: '+44 7456 457005' }}
              phone2={{ href: 'tel:+442086388982', label: '+44 208 6388982' }}
              email="info@perception-it.com"
              address={
                <>
                  12a Fleet Business Park, Sandy Lane,
                  <br />
                  Fleet, Hampshire, GU52 8BF
                </>
              }
            />
            <OfficeCard
              title="Perception IT Pakistan"
              phone1={{ href: 'tel:+923018436565', label: '+92 301 8436565' }}
              phone2={{ href: 'tel:+924235710686', label: '+92 42 35710686' }}
              email="info@perception-it.com"
              address={
                <>
                  Office # 01, 1st Floor, Liberty Gate Plaza,
                  <br />
                  Tariq Road, Block C2, Plot 10-C/II, Gulberg III,
                  <br />
                  Lahore, Pakistan
                </>
              }
            />
          </div>
        </div>

        {/* Legal */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-[#8d8d8d]">
          <p>© {new Date().getFullYear()} Perception IT. All rights reserved.</p>
          <p>VAT ID: GB373976838</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
