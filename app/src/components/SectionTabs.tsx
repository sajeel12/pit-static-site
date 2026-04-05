import { useState, useEffect, useRef } from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface SectionTabsProps {
  items: TabItem[];
  brandColor?: string;
}

const SectionTabs = ({ 
  items, 
  brandColor = 'var(--cds-button-primary)'
}: SectionTabsProps) => {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Scroll spy to track active section
  useEffect(() => {
    const handleScroll = () => {
      // Determine if tabs should be sticky
      const heroHeight = window.innerHeight * 0.6; // Approximate hero height
      setIsSticky(window.scrollY > heroHeight - 80);

      // Determine active section
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  // Scroll active tab into view
  useEffect(() => {
    if (activeSection && tabRefs.current.has(activeSection)) {
      const tabElement = tabRefs.current.get(activeSection);
      if (tabElement && tabsRef.current) {
        const container = tabsRef.current;
        const tabRect = tabElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Check if tab is outside visible area
        if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
          tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }
    }
  }, [activeSection]);

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
    <div 
      className={`xl:hidden w-full z-30 transition-all duration-300 ${
        isSticky ? 'sticky top-20 shadow-md' : ''
      }`}
      style={{
        backgroundColor: 'var(--cds-layer-01)',
        borderBottom: isSticky ? '1px solid var(--cds-border-subtle)' : 'none'
      }}
    >
      <div 
        ref={tabsRef}
        className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-2"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => {
                if (el) tabRefs.current.set(item.id, el);
              }}
              onClick={() => scrollToSection(item.id)}
              className="flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap"
              style={{
                backgroundColor: isActive ? brandColor : 'transparent',
                color: isActive ? 'white' : 'var(--cds-text-secondary)',
                border: `1px solid ${isActive ? brandColor : 'var(--cds-border-subtle)'}`,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'var(--cds-border-strong)';
                  e.currentTarget.style.color = 'var(--cds-text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'var(--cds-border-subtle)';
                  e.currentTarget.style.color = 'var(--cds-text-secondary)';
                }
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      
      {/* Hide scrollbar for webkit browsers */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SectionTabs;
