import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Sparkles, Film, Instagram, MapPin } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Exact real contact details provided by the user:
  const contactDetails = {
    email: 'lipiroyyy68@gmail.com',
    github: 'https://github.com/lipiroy558-cloud',
    linkedin: 'https://www.linkedin.com/in/lippi-roy',
    letterboxd: 'https://letterboxd.com/LIPISTICK/',
    instagram: 'https://instagram.com/lipiiistickkk?psln=MTBjNzZzcXJydGRoYg%3D%3D',
    location: 'India (IST / UTC+5:30)',
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        {/* Eyebrow Tag */}
        <div className="section-tag">06 / GET IN TOUCH</div>

        {/* Section Header */}
        <div className="contact-header">
          <h2 id="contact-heading" className="section-title">
            If something here caught your attention, you know where to find me.
          </h2>
          <p className="section-subtitle">
            Whether it's about software engineering, film recommendations, internships, or creative ideas—I'm always glad to connect.
          </p>
        </div>

        {/* Contact Content Container */}
        <div className="contact-content-wrap">
          {/* Featured Primary Channel: Direct Email */}
          <div className="primary-email-card">
            <div className="card-top-meta">
              <span className="meta-badge">PRIMARY INBOX</span>
              <span className="meta-reply-time">Personal &bull; Direct communication</span>
            </div>

            <div className="email-action-row">
              <a
                href={`mailto:${contactDetails.email}`}
                className="email-direct-link"
                aria-label={`Send an email to ${contactDetails.email} (opens your email client)`}
              >
                <div className="email-icon-circle" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <span className="email-text-display">{contactDetails.email}</span>
                <ArrowUpRight size={18} className="email-link-arrow" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`copy-email-btn ${copied ? 'is-copied' : ''}`}
                aria-label={copied ? "Email copied to clipboard" : "Copy email address to clipboard"}
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="check-icon" aria-hidden="true" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} aria-hidden="true" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            <p className="email-card-hint">
              Clicking the address opens your default email client. You can also copy it directly.
            </p>
          </div>

          {/* Real Social & Creative Channels Grid */}
          <div className="secondary-channels-grid">
            {/* Letterboxd Card */}
            <a
              href={contactDetails.letterboxd}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
              aria-label="Visit Lipi Roy's Letterboxd profile (opens in a new tab)"
            >
              <div className="channel-card-header">
                <div className="channel-icon-box" aria-hidden="true">
                  <Film size={18} />
                </div>
                <ArrowUpRight size={15} className="channel-external-indicator" aria-hidden="true" />
              </div>
              <div className="channel-body">
                <span className="channel-category">CINEMA &amp; LOGS</span>
                <span className="channel-primary-text">letterboxd.com/LIPISTICK</span>
                <span className="channel-secondary-text">Diary of films watched, ratings &amp; lists</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
              aria-label="Visit Lipi Roy's GitHub profile (opens in a new tab)"
            >
              <div className="channel-card-header">
                <div className="channel-icon-box" aria-hidden="true">
                  <Github size={18} />
                </div>
                <ArrowUpRight size={15} className="channel-external-indicator" aria-hidden="true" />
              </div>
              <div className="channel-body">
                <span className="channel-category">CODE &amp; REPOSITORIES</span>
                <span className="channel-primary-text">github.com/lipiroy558-cloud</span>
                <span className="channel-secondary-text">Source code, coursework &amp; web projects</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
              aria-label="Visit Lipi Roy's LinkedIn profile (opens in a new tab)"
            >
              <div className="channel-card-header">
                <div className="channel-icon-box" aria-hidden="true">
                  <Linkedin size={18} />
                </div>
                <ArrowUpRight size={15} className="channel-external-indicator" aria-hidden="true" />
              </div>
              <div className="channel-body">
                <span className="channel-category">PROFESSIONAL PROFILE</span>
                <span className="channel-primary-text">linkedin.com/in/lippi-roy</span>
                <span className="channel-secondary-text">Career journey, education &amp; networking</span>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={contactDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
              aria-label="Visit Lipi Roy's Instagram profile (opens in a new tab)"
            >
              <div className="channel-card-header">
                <div className="channel-icon-box" aria-hidden="true">
                  <Instagram size={18} />
                </div>
                <ArrowUpRight size={15} className="channel-external-indicator" aria-hidden="true" />
              </div>
              <div className="channel-body">
                <span className="channel-category">VISUAL DIARY</span>
                <span className="channel-primary-text">instagram.com/lipiiistickkk</span>
                <span className="channel-secondary-text">Everyday moments, snapshots &amp; aesthetics</span>
              </div>
            </a>
          </div>

          {/* Availability / Status Card */}
          <div className="availability-notice-card" role="region" aria-label="Current Availability Status">
            <div className="availability-header">
              <span className="status-live-dot" aria-hidden="true"></span>
              <span className="availability-tag">CURRENT STATUS</span>
            </div>
            <div className="availability-content">
              <Sparkles size={16} className="availability-sparkle" aria-hidden="true" />
              <p className="availability-text">
                <strong>Undergraduate IT Student &bull; Based in India:</strong> Open to student internships, junior engineering roles, and creative web collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-cream);
        }

        .contact-header {
          max-width: 780px;
          margin-bottom: 3.5rem;
        }

        .contact-content-wrap {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 960px;
        }

        /* Primary Featured Email Card */
        .primary-email-card {
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-medium);
          padding: 2.25rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .primary-email-card:hover {
          border-color: var(--text-main);
          box-shadow: 0 8px 24px rgba(26, 26, 26, 0.04);
        }

        .card-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .meta-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-terracotta);
        }

        .meta-reply-time {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .email-action-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .email-direct-link {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          color: var(--text-main);
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .email-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--bg-cream-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-terracotta);
          transition: background-color 0.2s ease, transform 0.2s ease, color 0.2s ease;
        }

        .email-direct-link:hover .email-icon-circle {
          background-color: var(--bg-dark);
          color: #FAF8F4;
          transform: scale(1.05);
        }

        .email-text-display {
          font-family: var(--font-serif);
          font-size: clamp(1.35rem, 2.5vw, 1.85rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          border-bottom: 1.5px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .email-direct-link:hover .email-text-display {
          border-color: var(--text-main);
        }

        .email-link-arrow {
          color: var(--text-muted);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .email-direct-link:hover .email-link-arrow {
          color: var(--text-main);
          transform: translate(2px, -2px);
        }

        .copy-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.65rem 1.15rem;
          background-color: var(--bg-cream-card);
          border: 1px solid var(--border-medium);
          color: var(--text-main);
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        .copy-email-btn:hover {
          background-color: var(--bg-dark);
          color: #FAF8F4;
          border-color: var(--bg-dark);
          transform: translateY(-1px);
        }

        .copy-email-btn.is-copied {
          background-color: #F1F8F3;
          border-color: #2E7D32;
          color: #2E7D32;
        }

        .check-icon {
          color: #2E7D32;
        }

        .email-card-hint {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Secondary Channels Grid */
        .secondary-channels-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .channel-card {
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-subtle);
          padding: 1.6rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          text-decoration: none;
          color: var(--text-main);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .channel-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-medium);
          box-shadow: 0 8px 20px rgba(26, 26, 26, 0.04);
        }

        .channel-card:hover .channel-external-indicator {
          transform: translate(2px, -2px);
          color: var(--text-main);
        }

        .channel-card:hover .channel-primary-text {
          color: var(--text-terracotta);
        }

        .channel-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .channel-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: var(--bg-cream-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
        }

        .channel-external-indicator {
          color: var(--text-muted);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .channel-body {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .channel-category {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .channel-primary-text {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-main);
          transition: color 0.2s ease;
          word-break: break-word;
        }

        .channel-secondary-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        /* Availability Notice Banner */
        .availability-notice-card {
          background-color: var(--bg-cream-card);
          border: 1px solid var(--border-subtle);
          border-left: 3px solid var(--text-terracotta);
          padding: 1.25rem 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .availability-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #2E7D32;
          box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.2);
          animation: statusPulse 2s infinite ease-in-out;
        }

        @keyframes statusPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.75;
          }
        }

        .availability-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-terracotta);
        }

        .availability-content {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .availability-sparkle {
          color: var(--text-terracotta);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .availability-text {
          font-size: 0.9rem;
          line-height: 1.55;
          color: var(--text-main);
        }

        .availability-text strong {
          color: var(--text-main);
          font-weight: 600;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .secondary-channels-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .primary-email-card {
            padding: 1.75rem 1.5rem;
          }

          .email-action-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .copy-email-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .email-direct-link {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .email-text-display {
            font-size: 1.25rem;
          }

          .card-top-meta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
