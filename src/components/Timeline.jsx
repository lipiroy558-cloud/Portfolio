import React, { useState } from 'react';
import { timelineData, timelineCategories } from '../data/timelineData';
import { GraduationCap, Sparkles, Calendar, BookOpen, Check } from 'lucide-react';

export default function Timeline() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? timelineData
    : timelineData.filter((item) => item.type === activeFilter);

  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        {/* Eyebrow & Header */}
        <div className="section-tag">03 / JOURNEY &amp; EDUCATION</div>

        <div className="timeline-header-wrap">
          <div>
            <h2 className="section-title">
              The academic path &amp; milestones along the way.
            </h2>
            <p className="section-subtitle">
              A record of formal computer science education, self-directed engineering, and the milestones that shape how I think and build.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="timeline-filter-group" role="tablist" aria-label="Filter timeline">
            {timelineCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`timeline-filter-btn ${activeFilter === category ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(category)}
                role="tab"
                aria-selected={activeFilter === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="timeline-spine-wrap">
          <div className="timeline-spine-line" aria-hidden="true" />

          <div className="timeline-items">
            {filteredItems.map((item, index) => {
              const isEducation = item.type === 'Education';

              return (
                <div key={item.id} className="timeline-entry">
                  {/* Timeline Node Marker */}
                  <div className="timeline-node">
                    <div className="node-icon-box">
                      {isEducation ? (
                        <GraduationCap size={18} className="node-icon" />
                      ) : (
                        <Sparkles size={18} className="node-icon" />
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div className="timeline-meta-left">
                        <span className="timeline-type-pill">{item.type}</span>
                        <span className="timeline-status-badge">{item.badge}</span>
                      </div>
                      <div className="timeline-period">
                        <Calendar size={13} className="period-icon" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="timeline-item-title">{item.title}</h3>
                    <p className="timeline-institution">{item.institution}</p>

                    <p className="timeline-desc">{item.description}</p>

                    {/* Coursework Tags */}
                    {item.coursework && item.coursework.length > 0 && (
                      <div className="timeline-coursework-block">
                        <span className="coursework-label">
                          <BookOpen size={13} /> Key Coursework &amp; Topics
                        </span>
                        <div className="coursework-tags">
                          {item.coursework.map((course, cIdx) => (
                            <span key={cIdx} className="coursework-tag">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="timeline-highlights">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="timeline-highlight-item">
                            <span className="highlight-bullet">
                              <Check size={12} />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-section {
          background-color: var(--bg-cream);
          position: relative;
        }

        .timeline-header-wrap {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .timeline-filter-group {
          display: inline-flex;
          gap: 0.5rem;
          background-color: var(--bg-cream-card);
          padding: 0.35rem;
          border-radius: 9999px;
          border: 1px solid var(--border-subtle);
        }

        .timeline-filter-btn {
          border: none;
          background: transparent;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.45rem 1.1rem;
          border-radius: 9999px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .timeline-filter-btn:hover {
          color: var(--text-main);
        }

        .timeline-filter-btn.is-active {
          background-color: var(--bg-cream-elevated);
          color: var(--text-main);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        /* Spine Layout */
        .timeline-spine-wrap {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-spine-line {
          position: absolute;
          left: 17px;
          top: 15px;
          bottom: 20px;
          width: 2px;
          background-color: var(--border-subtle);
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-entry {
          position: relative;
          display: flex;
          align-items: flex-start;
        }

        .timeline-node {
          position: absolute;
          left: -2rem;
          top: 1.5rem;
          transform: translateX(-50%);
          z-index: 2;
        }

        .node-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--bg-cream-elevated);
          border: 2px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-terracotta);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: var(--transition-smooth);
        }

        .timeline-entry:hover .node-icon-box {
          border-color: var(--text-terracotta);
          transform: scale(1.08);
        }

        /* Timeline Card */
        .timeline-card {
          flex: 1;
          margin-left: 1.25rem;
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          padding: 2rem 2.25rem;
          transition: var(--transition-smooth);
        }

        .timeline-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          border-color: var(--border-medium);
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.85rem;
          flex-wrap: wrap;
        }

        .timeline-meta-left {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .timeline-type-pill {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-terracotta);
          background-color: rgba(139, 74, 52, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: 2px;
        }

        .timeline-status-badge {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .timeline-period {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .period-icon {
          color: var(--text-muted);
        }

        .timeline-item-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--text-main);
          margin-bottom: 0.25rem;
          line-height: 1.35;
        }

        .timeline-institution {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .timeline-desc {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        /* Coursework */
        .timeline-coursework-block {
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .coursework-label {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-main);
          margin-bottom: 0.65rem;
        }

        .coursework-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .coursework-tag {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary);
          background-color: var(--bg-cream-card);
          border: 1px solid var(--border-subtle);
          padding: 0.25rem 0.65rem;
          border-radius: 2px;
        }

        /* Highlights */
        .timeline-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 1.15rem;
          padding-top: 1.15rem;
          border-top: 1px solid var(--border-subtle);
        }

        .timeline-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .highlight-bullet {
          margin-top: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: rgba(139, 74, 52, 0.1);
          color: var(--text-terracotta);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .timeline-header-wrap {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .timeline-spine-wrap {
            padding-left: 1.5rem;
          }

          .timeline-spine-line {
            left: 12px;
          }

          .timeline-node {
            left: -1.5rem;
          }

          .node-icon-box {
            width: 28px;
            height: 28px;
          }

          .node-icon {
            width: 14px;
            height: 14px;
          }

          .timeline-card {
            margin-left: 0.75rem;
            padding: 1.5rem 1.25rem;
          }

          .timeline-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .timeline-item-title {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </section>
  );
}
