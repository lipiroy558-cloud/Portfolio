import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Subtle Background Watermark: 01 */}
      <div className="hero-watermark" aria-hidden="true">
        01
      </div>

      <div className="hero-inner-container">
        {/* Left Column: Editorial Typography & Actions */}
        <div className="hero-content">
          {/* Tagline matching reference: '— IT STUDENT & CREATIVE' */}
          <div className="hero-eyebrow">
            <span className="eyebrow-dash">—</span>
            <span className="eyebrow-text">IT STUDENT &amp; CREATIVE</span>
          </div>

          {/* Headline matching reference: 'Somewhere between logic and imagination.' */}
          <h1 className="hero-heading">
            <span className="hero-line">Somewhere</span>
            <span className="hero-line">between</span>
            <span className="hero-line">
              <em className="hero-italic">logic</em> and
            </span>
            <span className="hero-line">imagination.</span>
          </h1>

          {/* Genuine Bio description */}
          <p className="hero-description">
            A mind drawn to logic, a heart that keeps looking for stories. Part code, part cinema, and still figuring out who I want to become.
          </p>

          {/* Action Buttons matching reference */}
          <div className="hero-actions">
            <a
              href="#work"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('work');
              }}
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight size={16} className="btn-arrow" />
            </a>

            <a
              href="#about"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('about');
              }}
            >
              GET TO KNOW ME
            </a>
          </div>

          {/* Editorial Italic Quote */}
          <div className="hero-quote-wrap">
            <p className="hero-quote">
              Still becoming. Still collecting little pieces of the world.
            </p>
          </div>
        </div>

        {/* Right Column: Avatar & Editorial Metadata */}
        <div className="hero-visual-wrapper">
          {/* Top-Right Index Tag: 2024 — PORTFOLIO */}
          <div className="hero-top-meta" aria-hidden="true">
            2024 — PORTFOLIO
          </div>

          {/* Avatar Image Asset */}
          <div className="hero-avatar-card">
            <img
              src="/avatar.png"
              alt="Lipi Roy - 3D Cartoon Avatar"
              className="hero-avatar-img"
              loading="eager"
            />
          </div>

          {/* Right Margin Vertical Text: LIPI ROY — INDEX 01 */}
          <div className="hero-vertical-meta" aria-hidden="true">
            LIPI ROY — INDEX 01
          </div>
        </div>
      </div>

      {/* Bottom Center Scroll Prompt */}
      <button
        className="hero-scroll-indicator"
        onClick={() => handleScrollTo('work')}
        aria-label="Scroll down to work"
      >
        <span className="scroll-label">SCROLL</span>
        <ArrowDown size={15} className="scroll-arrow" />
      </button>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding-top: 5.5rem;
          padding-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background-color: var(--bg-cream);
        }

        .hero-watermark {
          position: absolute;
          bottom: 1.5rem;
          left: 3rem;
          font-family: var(--font-serif);
          font-size: clamp(8rem, 16vw, 15rem);
          font-weight: 700;
          color: rgba(26, 26, 26, 0.04);
          line-height: 0.8;
          user-select: none;
          pointer-events: none;
          z-index: 1;
        }

        .hero-inner-container {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3rem;
          align-items: center;
        }

        /* Left Column Content */
        .hero-content {
          max-width: 620px;
          padding-top: 1rem;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1.6rem;
        }

        .eyebrow-dash {
          color: var(--text-terracotta);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .eyebrow-text {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--text-terracotta);
        }

        .hero-heading {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 5.8vw, 5.3rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--text-main);
          margin-bottom: 2rem;
        }

        .hero-line {
          display: block;
        }

        .hero-italic {
          font-style: italic;
          font-weight: 400;
          font-family: var(--font-serif);
          letter-spacing: -0.01em;
          margin-right: 0.08em;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.68;
          color: var(--text-secondary);
          margin-bottom: 2.3rem;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.15rem;
          margin-bottom: 2.5rem;
        }

        .btn-primary {
          background-color: var(--bg-dark);
          color: #FAF8F4;
          padding: 0.95rem 1.85rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--bg-dark);
        }

        .btn-primary:hover {
          background-color: var(--bg-dark-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(3px);
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--text-main);
          padding: 0.95rem 1.85rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: 1px solid rgba(26, 26, 26, 0.35);
          transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
        }

        .btn-secondary:hover {
          border-color: var(--text-main);
          background-color: rgba(26, 26, 26, 0.03);
          transform: translateY(-2px);
        }

        .hero-quote-wrap {
          border-left: 2px solid var(--border-medium);
          padding-left: 1rem;
        }

        .hero-quote {
          font-family: var(--font-accent-serif);
          font-style: italic;
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Right Column Visual */
        .hero-visual-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          min-height: 540px;
        }

        .hero-top-meta {
          position: absolute;
          top: 0;
          right: 1.5rem;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-muted);
          user-select: none;
        }

        .hero-vertical-meta {
          position: absolute;
          right: -1rem;
          bottom: 2rem;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-muted);
          user-select: none;
        }

        .hero-avatar-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .hero-avatar-img {
          width: 100%;
          max-height: 580px;
          object-fit: contain;
          object-position: bottom center;
          filter: drop-shadow(0 16px 28px rgba(0, 0, 0, 0.08));
          transition: transform 0.4s ease;
        }

        .hero-avatar-img:hover {
          transform: scale(1.02);
        }

        /* Scroll Prompt at Bottom */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          background: none;
          cursor: pointer;
          z-index: 5;
          transition: color 0.2s ease;
        }

        .hero-scroll-indicator:hover {
          color: var(--text-main);
        }

        .scroll-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .scroll-arrow {
          animation: floatDown 2s infinite ease-in-out;
        }

        @keyframes floatDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .hero-inner-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: left;
          }
          .hero-content {
            max-width: 100%;
          }
          .hero-visual-wrapper {
            min-height: 440px;
          }
          .hero-avatar-card {
            max-width: 380px;
          }
          .hero-watermark {
            left: 1.5rem;
            bottom: 0.5rem;
          }
          .hero-vertical-meta {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding-top: 5rem;
            padding-bottom: 4rem;
          }
          .hero-heading {
            font-size: 2.6rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary, .btn-secondary {
            justify-content: center;
            text-align: center;
          }
          .hero-avatar-img {
            max-height: 420px;
          }
        }
      `}</style>
    </section>
  );
}
