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
  brandColor = '#0f62fe'
}: SidebarMenuProps) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className="sticky top-0 h-screen z-40 hidden xl:flex flex-col justify-center"
      style={{ width: '240px' }}
    >
      <div className="bg-white border-r border-gray-200 py-6 w-full">
        <ul className="space-y-0">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 border-l-2 ${
                  activeSection === item.id
                    ? 'font-medium'
                    : 'text-gray-500 hover:text-gray-900 border-transparent'
                }`}
                style={{
                  borderLeftColor: activeSection === item.id ? brandColor : 'transparent',
                  color: activeSection === item.id ? brandColor : undefined,
                  backgroundColor: activeSection === item.id ? `${brandColor}08` : 'transparent'
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
