/**
 * FeaturedTestimonial
 * ──────────────────────────────────────────────
 * A prominent, single-testimonial card used for credibility sections on
 * service pages, case-study detail pages, and landing-page trust strips.
 *
 * Design system: IBM Carbon Design System
 *   • All colours via CSS custom properties (var(--cds-*))
 *   • All spacing via Carbon spacing tokens
 *   • Typography via Carbon type classes
 *
 * Variants
 *   • dark   (default) — Gray 100 theme for dark sections
 *   • light  — White/Gray 10 theme for light sections
 *
 * Layout
 *   Desktop: 5-column grid — image | content (2:3 ratio)
 *   Mobile:  stacked vertically.
 *
 * Features
 *   • Optional background image with gradient overlay
 *   • Client logo tile in context header
 *   • Clean quote styling with large decorative mark
 *   • Author bar: avatar circle + name/role + case-study CTA
 *   • Optional overflow prev/next buttons (positioned at card edge)
 */

import { Link } from 'react-router-dom';
import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import ChevronLeft from '@carbon/icons-react/es/ChevronLeft';
import ChevronRight from '@carbon/icons-react/es/ChevronRight';
import styles from './FeaturedTestimonial.module.css';

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
  const isDark = variant === 'dark';

  const cardClass = isDark ? styles['ft-card--dark'] : styles['ft-card--light'];
  const authorBarClass = isDark ? styles['ft-author-bar--dark'] : styles['ft-author-bar--light'];
  const navBtnClass = isDark ? styles['ft-nav-btn--dark'] : styles['ft-nav-btn--light'];

  return (
    <div className="relative">
      {/* ── Overflow nav buttons ── */}
      {showNav && (
        <>
          <button
            onClick={onPrev}
            className={`${styles['ft-nav-btn']} ${styles['ft-nav-btn--prev']} ${navBtnClass}`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onNext}
            className={`${styles['ft-nav-btn']} ${styles['ft-nav-btn--next']} ${navBtnClass}`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* ── Card ── */}
      <div className={`${styles['ft-card']} ${cardClass}`}>
        <div className={styles['ft-grid']}>
          {/* ── Left: Background image ── */}
          <div className={styles['ft-left']}>
            {bgImage ? (
              <>
                <img
                  src={bgImage}
                  alt=""
                  className={styles['ft-left__image']}
                />
                <div className={styles['ft-left__overlay']} />
              </>
            ) : (
              <div className={styles['ft-left__placeholder']}>
                <span className={`cds--label-01 ${styles['ft-left__placeholder-text']}`}>
                  Client Facility Photo Placeholder
                </span>
              </div>
            )}
          </div>

          {/* ── Right: Context + Quote + Author ── */}
          <div className={styles['ft-right']}>
            {/* Context header */}
            <div className={styles['ft-context']}>
              <div className={styles['ft-context__inner']}>
                {clientLogo && (
                  <div className={styles['ft-context__logo']}>
                    <img
                      src={clientLogo}
                      alt={client}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className={styles['ft-context__meta']}>
                  <span className={`cds--body-01 ${styles['ft-context__client']}`}>{client}</span>
                  {contextDesc && (
                    <p className={`cds--body-01 ${styles['ft-context__desc']}`}>{contextDesc}</p>
                  )}
                  {solutionLink && (
                    <Link
                      to={solutionLink}
                      className={`cds--label-01 ${styles['ft-context__link']}`}
                    >
                      {solutionLabel}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className={styles['ft-quote-wrap']}>
              <span className={styles['ft-quote__mark']} aria-hidden="true">&ldquo;</span>
              <blockquote className={styles['ft-quote']}>
                <div className={styles['ft-quote__body']}>
                  {quote.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </blockquote>
            </div>

            {/* Bottom Bar */}
            <div className={`${styles['ft-author-bar']} ${authorBarClass}`}>
              <div className={styles['ft-author-bar__inner']}>
                <div className={styles['ft-author-bar__author']}>
                  <div className={styles['ft-author-bar__avatar']}>{initials}</div>
                  <div className={styles['ft-author-bar__name']}>
                    <span className="cds--body-01">{author}</span>
                    <span className="cds--helper-text-01">{role}</span>
                  </div>
                </div>
                {contextLink && (
                  <Link
                    to={contextLink}
                    className={`cds--label-01 ${styles['ft-author-bar__cta']}`}
                  >
                    Full case study
                    <ArrowRight size={16} />
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
