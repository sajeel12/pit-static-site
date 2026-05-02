import { Phone } from '@carbon/icons-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/923093955577"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center"
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
    >
      <Phone size={24} style={{ color: '#ffffff' }} />
    </a>
  );
};

export default FloatingWhatsApp;
