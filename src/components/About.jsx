import React from 'react';
import { Code2, Compass, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Code2 size={24} />,
      title: 'Code & Logic',
      desc: 'Approaching software with discipline: clean state handling, modular React architectures, and fundamental IT problem-solving.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Cinema & Atmosphere',
      desc: 'Caring deeply about framing, pacing, lighting, and the emotional resonance that makes both films and interfaces feel human.'
    },
    {
      icon: <Compass size={24} />,
      title: 'Still Becoming',
      desc: 'Treating student life as an ongoing journal—curious, experimental, collecting books, music, and learning from every step.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Eyebrow & Title */}
        <div className="section-tag">02 / ABOUT ME</div>
        
        <div className="about-header-grid">
          <div>
            <h2 className="section-title">
              Learning to build with logic, making room for stories.
            </h2>
          </div>
          <div>
            <p className="section-subtitle">
              I study Information Technology, spend my hours understanding software systems, and spend my evenings drawn to cinema, music, and the quiet details of ordinary life.
            </p>
          </div>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="about-main-grid">
          {/* Detailed Narrative */}
          <div className="about-narrative">
            <h3 className="about-subheading">A person beyond the code</h3>
            <p className="narrative-p">
              I study Information Technology because I genuinely enjoy building things—writing clean code, solving algorithmic problems, and watching an idea take shape on the screen. But technical craft is only half of who I am. I care just as much about how things feel: the framing and color of a film shot, the silence before a musical cue, and the stories that stay in the back of your mind long after they end.
            </p>
            <p className="narrative-p">
              I don't have everything figured out, and I'm not trying to pretend I do. I am curious, ambitious, and in the middle of learning—collecting little pieces of the world, asking questions, and discovering the kind of developer and person I want to become.
            </p>

            {/* Quick Status Highlight */}
            <div className="about-status-card">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-label">CURRENT STATUS</span>
              </div>
              <p className="status-text">
                Undergraduate IT Student &bull; Exploring Software &amp; Cinema &bull; Learning by Building
              </p>
            </div>
          </div>

          {/* Core Values / Pillars */}
          <div className="about-pillars">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <div className="pillar-info">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-cream);
        }

        .about-header-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          margin-bottom: 4rem;
          align-items: flex-end;
        }

        .about-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-subheading {
          font-family: var(--font-serif);
          font-size: 1.7rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-bottom: 1.25rem;
          color: var(--text-main);
        }

        .narrative-p {
          font-size: 1.02rem;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .about-status-card {
          margin-top: 2rem;
          padding: 1.35rem 1.6rem;
          background-color: var(--bg-cream-card);
          border: 1px solid var(--border-subtle);
          border-left: 3px solid var(--text-terracotta);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #2E7D32;
          box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.2);
          animation: pulseDot 2s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.75;
          }
        }

        .status-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--text-terracotta);
        }

        .status-text {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-main);
          line-height: 1.5;
        }

        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .pillar-card {
          display: flex;
          gap: 1.35rem;
          padding: 1.6rem;
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-subtle);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .pillar-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-medium);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        .pillar-icon-box {
          color: var(--text-terracotta);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pillar-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.4rem;
        }

        .pillar-desc {
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .about-header-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .about-main-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
