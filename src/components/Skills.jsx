import React from 'react';
import { skillCategories } from '../data/skillsData';
import { Terminal, Layers, Palette } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (index) => {
    switch (index) {
      case 0: return <Layers size={22} />;
      case 1: return <Terminal size={22} />;
      case 2: return <Palette size={22} />;
      default: return <Layers size={22} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Eyebrow & Header */}
        <div className="section-tag">04 / TOOLKIT &amp; SKILLS</div>

        <div className="skills-header">
          <h2 className="section-title">
            Tools for building, mediums for thinking.
          </h2>
          <p className="section-subtitle">
            A look at the languages, frameworks, and design tools I work with as an IT student—learning how things work under the hood, and practicing how to make them clear.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row">
                    <div className="skill-main">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-badge">{skill.level}</span>
                    </div>
                    <p className="skill-detail">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-cream);
        }

        .skills-header {
          margin-bottom: 3.5rem;
          max-width: 720px;
        }

        .skills-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.25rem;
        }

        .skill-category-card {
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-subtle);
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .skill-category-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-medium);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.04);
        }

        .category-header {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .category-icon {
          color: var(--text-terracotta);
          padding: 0.65rem;
          background: var(--bg-cream-card);
          border: 1px solid var(--border-subtle);
        }

        .category-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.35rem;
        }

        .category-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .skill-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 0.96rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .skill-badge {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.2rem 0.55rem;
          background-color: var(--bg-cream-card);
          color: var(--text-terracotta);
          border: 1px solid rgba(139, 74, 52, 0.15);
        }

        .skill-detail {
          font-size: 0.83rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .skills-categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
