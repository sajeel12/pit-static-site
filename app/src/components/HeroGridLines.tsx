/**
 * Subtle Carbon-style grid lines for hero backgrounds.
 * Extracted from HeroGraphics for lighter reuse on inner pages.
 */
interface HeroGridLinesProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const HeroGridLines = ({ variant = 'light', className }: HeroGridLinesProps) => {
  const stroke = '#c6c6c6';
  const opacity = variant === 'dark' ? 0.18 : 0.12;

  return (
    <div
      className={className || 'absolute inset-0 overflow-hidden pointer-events-none z-0'}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity={opacity}>
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={80 + i * 80}
              x2="1200"
              y2={80 + i * 80}
              stroke={stroke}
              strokeWidth="1"
            />
          ))}
          {[...Array(13)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 100}
              y1="0"
              x2={i * 100}
              y2="800"
              stroke={stroke}
              strokeWidth="1"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default HeroGridLines;
