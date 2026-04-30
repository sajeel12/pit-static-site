/**
 * FeaturedTestimonial
 * ──────────────────────────────────────────────
 * A prominent, single-testimonial card used for credibility sections on
 * service pages, case-study detail pages, and landing-page trust strips.
 *
 * Reference design: DataCentre 4 (CoolingAirflowEnhanced.tsx)
 *
 * Variants
 *   • dark   (default) — Gray 100 theme for dark sections
 *   • light  — White/Gray 10 theme for light sections
 *
 * Layout
 *   5-column grid on desktop: 2-col image/logo panel | 3-col content panel
 *   Stacked on mobile.
 *
 * Features
 *   • Optional background image with gradient overlay
 *   • Client logo tile (white bg, sharp corners)
 *   • Context header: "Client / Service" badge + description + solution link
 *   • Large decorative quotation marks (IBM Plex Serif)
 *   • Author bar: teal circle avatar + name/role + case-study CTA
 *   • Optional overflow prev/next buttons (positioned at card edge)
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Building, ChevronLeft, ChevronRight } from '@carbon/icons-react';

/* ─── Types ─── */

export interface FeaturedTestimonialProps {
  /** Testimonial body text. Use `\n\n` to split into paragraphs. */
  quote: string;
  /** Attribution name */
  author: string;
  /** Attribution role / company */
  role: string;
  /** Client or company name (shown in logo tile & context header) */
  client: string;
  /** Avatar initials (auto-computed from author if omitted) */
  initials?: string;

  /** Client logo URL. If null/undefined, shows a building icon placeholder. */
  clientLogo?: string | null;
  /** Background image for the left panel. If null/undefined, shows a dark placeholder. */
  bgImage?: string | null;

  /** Descriptive context line (e.g. "Deployed X to Y…") */
  contextDesc?: string;
  /** Case-study detail page link (right-side CTA) */
  contextLink?: string | null;
  /** Solution page link (context header CTA) */
  solutionLink?: string | null;
  /** Label for the solution link (default: "Solution details") */
  solutionLabel?: string;

  /** Show overflow prev/next buttons (default: false) */
  showNav?: boolean;
  onPrev?: () => void;
  onNext?: () => void;

  /** Visual theme (default: 'dark') */
  variant?: 'dark' | 'light';
}

/* ─── Helpers ─── */

function computeInitials(author: string): string {
  return author
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/* ─── Component ─── */

export default function FeaturedTestimonial({
  quote,
  author,
  role,
  client,
  initials: initialsProp,
  clientLogo,
  bgImage,
  contextDesc,
  contextLink,
  solutionLink,
  solutionLabel = 'Solution details',
  showNav = false,
  onPrev,
  onNext,
  variant = 'dark',
}: FeaturedTestimonialProps) {
  const initials = initialsProp || computeInitials(author);

  /* ── Colour tokens by variant ── */
  const isDark = variant === 'dark';

  const cardBg = isDark ? 'bg-[#262626]' : 'bg-[#f4f4f4]';
  const cardBorder = isDark ? 'border-[#393939]' : 'border-[#e0e0e0]';
  const textPrimary = isDark ? 'text-[#f4f4f4]' : 'text-[#161616]';
  const textSecondary = isDark ? 'text-[#a8a8a8]' : 'text-[#525252]';
  const textTertiary = isDark ? 'text-[#c6c6c6]' : 'text-[#6f6f6f]';
  const textMuted = isDark ? 'text-[#525252]' : 'text-[#c6c6c6]';
  const divider = isDark ? 'border-[#393939]' : 'border-[#e0e0e0]';
  const authorBarBg = isDark ? 'bg-[#1a1a1a]' : 'bg-white';
  const badgeBg = 'bg-[#0f62fe]/15';
  const badgeText = 'text-[#78a9ff]';
  const linkText = 'text-[#78a9ff]';
  const linkHover = 'hover:text-[#a6c8ff]';
  const navBtnBg = isDark ? 'bg-[#262626]' : 'bg-[#f4f4f4]';
  const navBtnHover = isDark ? 'hover:bg-[#393939]' : 'hover:bg-white';
  const quoteText = isDark ? 'text-[#f4f4f4]' : 'text-[#161616]';
  const imagePlaceholderBg = isDark ? 'bg-[#1a1a1a]' : 'bg-[#e0e0e0]';
  const imagePlaceholderText = isDark ? 'text-[#525252]' : 'text-[#a8a8a8]';
  const logoTileNameBg = isDark ? 'bg-[#1a1a1a]' : 'bg-white';

  return (
    <div className="relative">
      {/* ── Overflow nav buttons ── */}
      {showNav && (
        <>
          <button
            onClick={onPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 ${navBtnBg} flex items-center justify-center text-[#0f62fe] ${navBtnHover} transition-colors hidden md:flex`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 ${navBtnBg} flex items-center justify-center text-[#0f62fe] ${navBtnHover} transition-colors hidden md:flex`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* ── Card ── */}
      <div className={`${cardBg} border ${cardBorder}`}>
        <div className="grid md:grid-cols-5 gap-0">
          {/* ── Left: Background image + logo tile ── */}
          <div className="relative flex flex-col md:col-span-2 min-h-[320px]">
            {bgImage ? (
              <>
                <img
                  src={bgImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-[#161616]/60 via-[#161616]/30 to-[#161616]/70' : 'from-[#161616]/40 via-[#161616]/20 to-[#161616]/60'}`} />
              </>
            ) : (
              <>
                <div className={`absolute inset-0 ${imagePlaceholderBg}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`carbon-label-01 ${imagePlaceholderText} uppercase tracking-wider`}>
                    Client Facility Photo Placeholder
                  </span>
                </div>
              </>
            )}

            <div className="relative flex-1 flex flex-col p-8 items-start justify-start">
              {/* Client Identity Tile */}
              <div className="w-40">
                <div className="h-28 bg-white flex items-center justify-center">
                  {clientLogo ? (
                    <img
                      src={clientLogo}
                      alt={client}
                      className="max-w-full max-h-full object-contain p-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <Building className="w-14 h-14 text-[#8d8d8d]" />
                  )}
                </div>
                <div className={`${logoTileNameBg} border border-t-0 ${cardBorder} px-3 py-2 text-center`}>
                  <p className={`carbon-label-01 ${textTertiary} text-center`}>{client}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Context + Quote + Author ── */}
          <div className="md:col-span-3 flex flex-col">
            {/* Context header */}
            <div className={`px-8 pt-6 pb-4 border-b ${divider}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-0.5 ${badgeBg} ${badgeText} carbon-label-01`}>Client / Service</span>
                <span className={`w-1 h-1 rounded-full ${textMuted}`} />
                <span className={`carbon-label-01 ${textTertiary}`}>{client}</span>
              </div>
              {contextDesc && (
                <p className={`carbon-body-01 ${textSecondary} mb-3`}>{contextDesc}</p>
              )}
              {solutionLink && (
                <Link
                  to={solutionLink}
                  className={`inline-flex items-center gap-2 carbon-label-01 ${linkText} ${linkHover} transition-colors`}
                >
                  {solutionLabel}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Quote */}
            <div className="px-8 py-8 flex-1 flex flex-col justify-center min-h-[220px]">
              <blockquote className="relative">
                <span className="absolute -top-4 -left-4 text-8xl text-[#0f62fe] opacity-45 font-serif leading-none">
                  &ldquo;
                </span>
                <div className={`text-xl font-serif ${quoteText} leading-relaxed relative z-10 space-y-5`}>
                  {quote.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <span className="absolute -bottom-8 -right-2 text-8xl text-[#0f62fe] opacity-45 font-serif leading-none">
                  &rdquo;
                </span>
              </blockquote>
            </div>

            {/* Bottom Bar */}
            <div className={`border-t ${divider} ${authorBarBg}`}>
              <div className="flex items-center justify-between px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center text-xs font-semibold tracking-wide">
                    {initials}
                  </div>
                  <div>
                    <div className={`carbon-heading-01 ${textPrimary} font-semibold`}>{author}</div>
                    <div className={`carbon-helper-text-01 ${textSecondary}`}>{role}</div>
                  </div>
                </div>
                {contextLink && (
                  <Link
                    to={contextLink}
                    className={`inline-flex items-center gap-2 carbon-label-01 ${linkText} ${linkHover} transition-colors`}
                  >
                    Read case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
