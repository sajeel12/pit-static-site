/**
 * EditorialQuote
 * ──────────────────────────────────────────────
 * A full-width, typographic testimonial card designed for maximum impact.
 * No image panel — the quote itself is the visual hero.
 *
 * Design approach (IBM Carbon editorial):
 *   • Dark surface, generous whitespace
 *   • IBM Plex Serif for the quote body
 *   • Massive decorative quotation mark as a background element
 *   • Thin horizontal rules as structural dividers
 *   • Author block with initials avatar
 *   • Optional stat row for credibility metrics
 */

import { Link } from 'react-router-dom';
import { ArrowRight } from '@carbon/icons-react';
import styles from './EditorialQuote.module.css';

/* ─── Types ─── */

export interface EditorialQuoteProps {
  quote: string;
  author: string;
  role: string;
  client: string;
  initials?: string;

  /** Client logo URL */
  clientLogo?: string | null;
  /** Background image URL — when provided, switches to image-overlay mode */
  bgImage?: string | null;

  /** Descriptive context line */
  contextDesc?: string;

  /** Optional metrics to display (e.g. [{ label: 'Years', value: '3+' }]) */
  metrics?: { label: string; value: string }[];

  /** Case-study detail page link */
  contextLink?: string | null;
  /** Solution page link */
  solutionLink?: string | null;
  solutionLabel?: string;

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

export default function EditorialQuote({
  quote,
  author,
  role,
  client,
  initials: initialsProp,
  clientLogo,
  bgImage,
  contextDesc,
  metrics,
  contextLink,
  solutionLink,
  solutionLabel = 'Solution details',
  variant = 'dark',
}: EditorialQuoteProps) {
  const initials = initialsProp || computeInitials(author);
  const isDark = variant === 'dark';
  const hasImage = !!bgImage;

  const cardClass = isDark ? styles['eq-card--dark'] : styles['eq-card--light'];
  const imageClass = hasImage ? styles['eq-card--image'] : '';

  return (
    <div className={`${styles['eq-card']} ${cardClass} ${imageClass}`}>
      {hasImage && (
        <>
          <img src={bgImage!} alt="" className={styles['eq-bg']} />
          <div className={styles['eq-image-overlay']} />
        </>
      )}

      <div className={styles['eq-content']}>
        {/* Top bar: logo + client meta */}
        <div className={styles['eq-header']}>
          <div className={styles['eq-header__left']}>
            {clientLogo && (
              <div className={styles['eq-logo']}>
                <img
                  src={clientLogo}
                  alt={client}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
            <div className={styles['eq-header__text']}>
              <span className={`cds--label-01 ${styles['eq-client']}`}>{client}</span>
              {contextDesc && (
                <p className={`cds--body-compact-01 ${styles['eq-header__desc']}`}>{contextDesc}</p>
              )}
              {solutionLink && (
                <Link to={solutionLink} className={`cds--label-01 ${styles['eq-solution-link']}`}>
                  {solutionLabel}
                  <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </div>
        </div>

      {/* Decorative rule */}
      <div className={styles['eq-rule']} />

      {/* Quote body */}
      <div className={styles['eq-quote-wrap']}>
        <span className={styles['eq-quote__mark']} aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className={styles['eq-quote']}>
          <div className={styles['eq-quote__body']}>
            {quote.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </blockquote>
      </div>

      {/* Bottom bar: author + metrics + CTA */}
      <div className={styles['eq-footer']}>
        <div className={styles['eq-footer__main']}>
          <div className={styles['eq-author']}>
            <div className={styles['eq-author__avatar']}>{initials}</div>
            <div className={styles['eq-author__name']}>
              <span className="cds--body-01">{author}</span>
              <span className="cds--helper-text-01">{role}</span>
            </div>
          </div>

          {metrics && metrics.length > 0 && (
            <div className={styles['eq-metrics']}>
              {metrics.map((m) => (
                <div key={m.label} className={styles['eq-metric']}>
                  <span className={styles['eq-metric__value']}>{m.value}</span>
                  <span className={styles['eq-metric__label']}>{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {contextLink && (
          <Link
            to={contextLink}
            className={`cds--label-01 ${styles['eq-cta']}`}
          >
            Full case study
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
      </div>
    </div>
  );
}
