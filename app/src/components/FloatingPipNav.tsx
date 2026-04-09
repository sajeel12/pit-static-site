import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface Section {
  id: string;
  label: string;
}

interface FloatingPipNavProps {
  sections: Section[];
}

export function FloatingPipNav({ sections }: FloatingPipNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Set up Intersection Observer
  useEffect(() => {
    if (sections.length === 0) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      root: null,
      rootMargin: '0px',
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections]);

  const handleClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      navigate(`${location.pathname}#${sectionId}`, { replace: true });
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [navigate, location.pathname]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(sectionId);
    }
  }, [handleClick]);

  if (sections.length === 0) {
    return null;
  }

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col gap-4"
      aria-label="Page sections"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        const isHovered = hoveredSection === section.id;

        return (
          <div
            key={section.id}
            className="relative flex items-center justify-end"
          >
            {/* Tooltip Label */}
            <div
              className={`
                absolute right-8 whitespace-nowrap
                px-3 py-1.5 rounded
                bg-[#262626] text-white
                text-xs font-semibold
                transition-all duration-200
                ${isHovered || isActive 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-2 pointer-events-none'
                }
              `}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              aria-hidden={!isHovered && !isActive}
            >
              {section.label}
              <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[#262626] rotate-45" 
              />
            </div>

            {/* Pip Button */}
            <button
              onClick={() => handleClick(section.id)}
              onKeyDown={(e) => handleKeyDown(e, section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onFocus={() => setHoveredSection(section.id)}
              onBlur={() => setHoveredSection(null)}
              className={`
                relative rounded-full
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2
                ${isActive 
                  ? 'w-3 h-3 bg-[#0f62fe] opacity-100' 
                  : 'w-2 h-2 bg-[#c6c6c6] opacity-60 hover:opacity-100'
                }
              `}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              aria-label={`Jump to ${section.label} section`}
              aria-current={isActive ? 'true' : undefined}
              tabIndex={0}
              type="button"
            />
          </div>
        );
      })}
    </nav>
  );
}

export default FloatingPipNav;
