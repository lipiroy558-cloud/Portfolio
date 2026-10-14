import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'BEYOND', href: '#beyond' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrap" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand Identity & Tagline */}
          <div className="footer-brand-col">
            <a 
              href="#hero" 
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="footer-brand"
              aria-label="Lipi Roy - Back to Home"
            >
              <span className="brand-l">l</span>
              <span className="brand-l">i</span>
              <span className="brand-l">p</span>
              <span className="brand-l">i</span>
            </a>
            <p className="footer-tagline">
              Somewhere between logic and imagination.
            </p>
          </div>

          {/* Minimal Navigation & Back to Top */}
          <div className="footer-actions-col">
            <nav className="footer-nav" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top of the page"
              title="Scroll back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} className="back-arrow-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Minimal Copyright Row */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Lipi Roy. All rights reserved.
          </p>
          <p className="credit-text">
            Designed with editorial typography &bull; Built with React &amp; Vite
          </p>
        </div>
      </div>

      <style>{`
        .footer-wrap {
          background-color: var(--bg-cream);
          padding: 4.5rem 0 2.75rem;
          border-top: 1px solid var(--border-subtle);
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .footer-brand {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 500;
          letter-spacing: 0.38em;
          color: var(--text-main);
          display: inline-flex;
          margin-bottom: 0.65rem;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .footer-brand:hover {
          opacity: 0.75;
        }

        .footer-tagline {
          font-family: var(--font-accent-serif);
          font-style: italic;
          font-size: 1.05rem;
          color: var(--text-secondary);
        }

        .footer-actions-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.5rem;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 1.75rem;
        }

        .footer-nav-link {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: var(--text-main);
        }

        .footer-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: var(--text-main);
          transition: width 0.2s ease;
        }

        .footer-nav-link:hover::after {
          width: 100%;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-main);
          padding: 0.5rem 0.95rem;
          background-color: transparent;
          border: 1px solid var(--border-medium);
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        .back-to-top-btn:hover {
          background-color: var(--bg-dark);
          color: #FAF8F4;
          border-color: var(--bg-dark);
          transform: translateY(-2px);
        }

        .back-to-top-btn:hover .back-arrow-icon {
          transform: translateY(-2px);
        }

        .back-arrow-icon {
          transition: transform 0.2s ease;
        }

        .footer-bottom {
          padding-top: 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .credit-text {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-actions-col {
            align-items: flex-start;
          }

          .footer-nav {
            gap: 1.25rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
