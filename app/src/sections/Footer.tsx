import { Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      { name: 'Connect on LinkedIn', href: 'https://linkedin.com', external: true },
    ],
    resources: [
      { name: 'Case Studies', href: '/projects' },
      { name: 'Partners', href: '#partnerships' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#0F172A] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logos/logo.png" 
                alt="Perception IT" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Enterprise IT solutions with British standards and local expertise. 
              Based in Lahore, serving Pakistan and the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Perception IT. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            VAT: GB123456789 | Company Reg: 12345678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
