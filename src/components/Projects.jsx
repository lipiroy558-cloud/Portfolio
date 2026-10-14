import React, { useState } from 'react';
import { projects, categories } from '../data/projectsData';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="section projects-section">
      <div className="container">
        {/* Eyebrow & Header */}
        <div className="section-tag">03 / SELECTED WORK</div>

        <div className="projects-header-wrap">
          <div>
            <h2 className="section-title">
              A few things I've made. A few things that made me.
            </h2>
            <p className="section-subtitle">
              Projects from my technical journey—built to explore ideas, solve real problems, and understand how systems come together.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-pill-group">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="project-period">{project.period}</span>
              </div>

              <div className="project-meta-pill">
                {project.category}
              </div>

              <h3 className="project-title">
                {project.title}
              </h3>

              <p className="project-desc">
                {project.description}
              </p>

              {/* Key Highlights */}
              <ul className="project-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i} className="highlight-item">
                    <CheckCircle2 size={13} className="highlight-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="project-actions">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-link"
                  aria-label={`View ${project.title} code on GitHub`}
                >
                  <Github size={15} />
                  <span>SOURCE CODE</span>
                </a>

                <a
                  href={project.links.live}
                  className="project-action-link is-primary"
                  onClick={(e) => {
                    if (project.links.live === '#') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  aria-label={`View ${project.title} live preview`}
                >
                  <span>OVERVIEW</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-category">{selectedProject.category} &bull; {selectedProject.period}</span>
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-long-desc">{selectedProject.longDescription}</p>

            <div className="modal-section-title">Key Architectural Highlights</div>
            <ul className="modal-highlights">
              {selectedProject.highlights.map((h, i) => (
                <li key={i}>&bull; {h}</li>
              ))}
            </ul>

            <div className="modal-tags">
              {selectedProject.tags.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="modal-footer">
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={16} />
                <span>VIEW ON GITHUB</span>
              </a>
              <button
                className="btn-secondary"
                onClick={() => setSelectedProject(null)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          background-color: var(--bg-cream);
        }

        .projects-header-wrap {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .filter-pill-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          background: var(--bg-cream-card);
          padding: 0.35rem;
          border: 1px solid var(--border-subtle);
        }

        .filter-btn {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.45rem 1rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .filter-btn.is-active {
          background-color: var(--bg-dark);
          color: #FAF8F4;
        }

        .filter-btn:hover:not(.is-active) {
          color: var(--text-main);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2.25rem;
        }

        .project-card {
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-subtle);
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-medium);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .project-index {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .project-period {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--text-muted);
        }

        .project-meta-pill {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-terracotta);
          margin-bottom: 0.8rem;
        }

        .project-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.25;
          margin-bottom: 0.9rem;
        }

        .project-desc {
          font-size: 0.94rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .project-highlights {
          list-style: none;
          margin-bottom: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.84rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .highlight-icon {
          color: var(--text-terracotta);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
          margin-bottom: 1.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .tech-tag {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 0.25rem 0.65rem;
          background-color: var(--bg-cream-card);
          color: var(--text-secondary);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .project-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .project-action-link {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-main);
          transition: opacity 0.2s ease;
        }

        .project-action-link:hover {
          opacity: 0.7;
        }

        .project-action-link.is-primary {
          color: var(--text-terracotta);
        }

        /* Modal */
        .project-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(26, 26, 26, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 1.5rem;
        }

        .project-modal-content {
          background-color: var(--bg-cream-elevated);
          max-width: 620px;
          width: 100%;
          padding: 2.5rem;
          border: 1px solid var(--border-medium);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .modal-category {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-terracotta);
        }

        .modal-close-btn {
          font-size: 1.2rem;
          color: var(--text-muted);
          padding: 4px;
        }

        .modal-close-btn:hover {
          color: var(--text-main);
        }

        .modal-title {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }

        .modal-long-desc {
          font-size: 0.98rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .modal-section-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-main);
          margin-bottom: 0.75rem;
        }

        .modal-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
        }

        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .modal-footer {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .projects-header-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
