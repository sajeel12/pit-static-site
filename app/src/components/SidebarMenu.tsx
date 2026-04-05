import { useState, useEffect } from 'react';

interface MenuItem {
  id: string;
  label: string;
}

interface SidebarMenuProps {
  items: MenuItem[];
  brandColor?: string;
}

const SidebarMenu = ({ 
  items, 
  brandColor = 'var(--cds-button-primary)'
}: SidebarMenuProps) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset for header (120px) + buffer
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className="sticky top-32 self-start z-40 hidden xl:flex flex-col"
      style={{ width: '256px' }}
    >
      {/* IBM-style minimal sidebar with Carbon tokens */}
      <div 
        className="w-full"
        style={{ 
          backgroundColor: 'var(--cds-layer-01)',
          borderRight: '1px solid var(--cds-border-subtle)'
        }}
      >
        <ul className="space-y-0">
          {items.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left transition-all duration-200"
                  style={{
                    padding: 'var(--cds-spacing-04) var(--cds-spacing-05)',
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 400,
                    lineHeight: '18px',
                    letterSpacing: '0.01em',
                    color: isActive ? 'var(--cds-text-primary)' : 'var(--cds-text-secondary)',
                    backgroundColor: isActive ? 'var(--cds-layer-hover)' : 'transparent',
                    borderLeft: `4px solid ${isActive ? brandColor : 'transparent'}`,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'var(--cds-layer-hover)';
                      e.currentTarget.style.color = 'var(--cds-text-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--cds-text-secondary)';
                    }
                  }}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
