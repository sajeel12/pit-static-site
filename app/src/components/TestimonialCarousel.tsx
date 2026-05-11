/**
 * TestimonialCarousel
 * ──────────────────────────────────────────────
 * Homepage-style testimonial, fully IBM Carbon Design System.
 *
 * Carbon compliance:
 *   • 0px border-radius (sharp corners)
 *   • Solid layer backgrounds (no gradients)
 *   • Carbon spacing + color tokens
 *   • Decorative quotation mark (IBM Plex Serif)
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from '@carbon/icons-react';
import styles from './TestimonialCarousel.module.css';

export interface TestimonialCarouselProps {
  quote: string;
  author: string;
  role: string;
  client: string;
  sector?: string;
  initials?: string;
  clientLogo?: string | null;
  bgImage?: string | null;
  contextDesc?: string;
  contextLink?: string | null;
  solutionLink?: string | null;
  solutionLabel?: string;
}

export default function TestimonialCarousel({
  quote,
  author,
  role,
  client,
  sector,
  clientLogo,
  bgImage,
  contextDesc,
  contextLink,
  solutionLink,
  solutionLabel = 'Solution details',
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = 1;

  return (
    <div className={styles['tc-wrap']}>
      <div className={styles['tc-card']}>
        <div className={styles['tc-grid']}>
          {/* Left: Image panel — logo removed, image only */}
          <div className={styles['tc-left']}>
            {bgImage ? (
              <>
                <img src={bgImage} alt="" className={styles['tc-left__bg']} />
                <div className={styles['tc-left__overlay']} />
              </>
            ) : (
              <div className={styles['tc-left__fallback']} />
            )}
          </div>

          {/* Right: Content panel */}
          <div className={styles['tc-right']}>
            {/* Context header: logo + name + desc + link */}
            <div className={styles['tc-context']}>
              {clientLogo && (
                <div className={styles['tc-context__logo']}>
                  <img
                    src={clientLogo}
                    alt={client}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className={styles['tc-context__text']}>
                <span className={`cds--body-01 ${styles['tc-context__client']}`}>
                  {client}
                </span>
                {contextDesc && (
                  <p className={`cds--body-compact-01 ${styles['tc-context__desc']}`}>
                    {contextDesc}
                  </p>
                )}
                {solutionLink && (
                  <Link
                    to={solutionLink}
                    className={`cds--label-01 ${styles['tc-context__link']}`}
                  >
                    {solutionLabel}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>

            {/* Sector badge */}
            {sector && (
              <div className={styles['tc-sector-badge']}>
                <span className="cds--label-01">{sector}</span>
              </div>
            )}

            {/* Quote with decorative mark */}
            <div className={styles['tc-quote-wrap']}>
              <span className={styles['tc-quote__mark']} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className={styles['tc-quote']}>
                <div className={styles['tc-quote__body']}>
                  {quote.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </blockquote>
            </div>

            {/* Author + CTA row */}
            <div className={styles['tc-author-block']}>
              <div className={styles['tc-author']}>
                <span className={`cds--body-01 ${styles['tc-author__name']}`}>
                  {author}
                </span>
                <span className={`cds--helper-text-01 ${styles['tc-author__role']}`}>
                  {role}
                </span>
              </div>
              {contextLink && (
                <Link
                  to={contextLink}
                  className={`cds--label-01 ${styles['tc-study-link']}`}
                >
                  Full case study
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar: dots + counter + nav */}
        <div className={styles['tc-footer']}>
          <div className={styles['tc-footer__left']}>
            <div className={styles['tc-dots']}>
              {Array.from({ length: total }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={
                    idx === current
                      ? styles['tc-dot--active']
                      : styles['tc-dot--inactive']
                  }
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <span className={`cds--label-01 ${styles['tc-counter']}`}>
              {current + 1} / {total}
            </span>
          </div>

          <div className={styles['tc-nav']}>
            <button
              className={styles['tc-nav__btn']}
              onClick={() => setCurrent((prev) => (prev - 1 + total) % total)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className={styles['tc-nav__btn']}
              onClick={() => setCurrent((prev) => (prev + 1) % total)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
