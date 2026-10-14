import React, { useState, useEffect } from 'react';
import { filmsData, letterboxdProfile } from '../data/filmsData';
import { musicData } from '../data/musicData';
import { Film, Disc3, ArrowUpRight, Clapperboard, Edit3, Check, ExternalLink, Headphones } from 'lucide-react';

export default function BeyondCode() {
  // Local state for user-editable reflections, initialized from filmsData and localStorage
  const [reflections, setReflections] = useState(() => {
    const saved = {};
    filmsData.forEach(film => {
      const stored = localStorage.getItem(`film_reflection_${film.id}`);
      saved[film.id] = stored !== null ? stored : film.reflection;
    });
    return saved;
  });

  const [editingFilmId, setEditingFilmId] = useState(null);
  const [tempNote, setTempNote] = useState('');

  const startEditing = (filmId) => {
    setEditingFilmId(filmId);
    setTempNote(reflections[filmId] || '');
  };

  const saveReflection = (filmId) => {
    const updated = { ...reflections, [filmId]: tempNote };
    setReflections(updated);
    localStorage.setItem(`film_reflection_${filmId}`, tempNote);
    setEditingFilmId(null);
  };

  return (
    <section id="beyond" className="section beyond-section" aria-labelledby="beyond-heading">
      <div className="container">
        {/* Eyebrow & Main Section Header */}
        <div className="section-tag">05 / BEYOND CODE</div>

        <div className="beyond-header-block">
          <div className="header-text-group">
            <h2 id="beyond-heading" className="section-title">
              Frames I Can't Forget
            </h2>
            <p className="section-subtitle">
              Some stories end when the credits roll. Others stay somewhere in the back of your mind. A personal journal of cinematography, atmosphere, and framing that lingers.
            </p>
          </div>

          {/* Letterboxd Profile Link */}
          <a
            href={letterboxdProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="letterboxd-cta"
            aria-label="View Lipi Roy's Letterboxd profile (opens in new tab)"
          >
            <Film size={16} aria-hidden="true" />
            <span>LETTERBOXD JOURNAL</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Film Journal Grid */}
        <div className="film-journal-grid">
          {filmsData.map((film) => {
            const hasReflection = Boolean(reflections[film.id]?.trim());
            const isEditing = editingFilmId === film.id;

            return (
              <article key={film.id} className="film-card">
                {/* Visual Cinematic Still Container */}
                <div className="film-still-wrap">
                  <img
                    src={film.stillUrl}
                    alt={`${film.title} (${film.year}) directed by ${film.director}`}
                    className="film-still-img"
                    loading="lazy"
                    onError={(e) => {
                      // Graceful fallback to artistic film frame
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('is-fallback');
                    }}
                  />
                  <div className="film-still-overlay" />
                  <span className="film-aspect-pill">{film.aspectRatio}</span>
                </div>

                {/* Film Information */}
                <div className="film-content">
                  <div className="film-meta-row">
                    <span className="film-year">{film.year}</span>
                    <span className="film-director">dir. {film.director}</span>
                  </div>

                  <h3 className="film-title">{film.title}</h3>

                  {film.cinematographer && (
                    <p className="film-cinematographer">
                      Cinematography by {film.cinematographer}
                    </p>
                  )}

                  <div className="film-palette-note">
                    <span className="palette-label">ATMOSPHERE:</span>
                    <span className="palette-desc">{film.paletteNote}</span>
                  </div>

                  {/* Personal Reflection Field */}
                  <div className="film-reflection-box">
                    <div className="reflection-header">
                      <span className="reflection-label">PERSONAL REFLECTION</span>
                      {!isEditing && (
                        <button
                          type="button"
                          onClick={() => startEditing(film.id)}
                          className="edit-note-btn"
                          aria-label={`Edit personal reflection for ${film.title}`}
                          title="Click to write your personal reflection"
                        >
                          <Edit3 size={12} />
                          <span>{hasReflection ? 'EDIT NOTE' : 'WRITE NOTE'}</span>
                        </button>
                      )}
                    </div>

                    {isEditing ? (
                      <div className="reflection-editor">
                        <textarea
                          rows={3}
                          value={tempNote}
                          onChange={(e) => setTempNote(e.target.value)}
                          placeholder={film.placeholderText}
                          className="reflection-textarea"
                          autoFocus
                        />
                        <div className="editor-actions">
                          <button
                            type="button"
                            onClick={() => saveReflection(film.id)}
                            className="btn-save-note"
                          >
                            <Check size={13} />
                            <span>SAVE NOTE</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingFilmId(null)}
                            className="btn-cancel-note"
                          >
                            CANCEL
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`reflection-display ${!hasReflection ? 'is-placeholder' : ''}`}
                        onClick={() => startEditing(film.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            startEditing(film.id);
                          }
                        }}
                        title="Click to edit your reflection"
                      >
                        {hasReflection ? (
                          <p className="reflection-quote">"{reflections[film.id]}"</p>
                        ) : (
                          <p className="reflection-empty-hint">
                            {film.placeholderText}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Divider */}
        <div className="beyond-divider" />

        {/* Music Feature: "On Repeat" */}
        <div className="music-feature-wrap">
          <div className="music-header">
            <div className="music-tag">
              <Disc3 size={18} className="disc-icon" aria-hidden="true" />
              <span>ON REPEAT</span>
            </div>
            <h3 className="music-title">Songs for the moments that don't need explaining.</h3>
            <p className="music-subtitle">
              A quiet, personal selection of music for late-night code, long walks, and quiet thinking.
            </p>
          </div>

          <div className="music-cards-grid">
            {musicData.map((track, idx) => (
              <div key={track.id} className="music-card">
                <div className="music-card-top">
                  <span className="track-number">0{idx + 1}</span>
                  <Headphones size={16} className="track-icon" aria-hidden="true" />
                </div>
                <h4 className="track-title">{track.title}</h4>
                <p className="track-artist">{track.artist}</p>
                <p className="track-note">{track.note}</p>
                {track.link && track.link !== '#' && (
                  <a
                    href={track.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-link"
                    aria-label={`Listen to ${track.title} (opens external link)`}
                  >
                    <span>LISTEN</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Understated Philosophy Note */}
        <div className="beyond-philosophy-quote">
          <blockquote>
            "Not everything I love needs to become something productive."
          </blockquote>
        </div>
      </div>

      <style>{`
        .beyond-section {
          background-color: var(--bg-cream);
        }

        .beyond-header-block {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .header-text-group {
          max-width: 720px;
        }

        .letterboxd-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.4rem;
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-medium);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-main);
          transition: all 0.2s ease;
        }

        .letterboxd-cta:hover {
          background-color: var(--bg-dark);
          color: #FAF8F4;
          border-color: var(--bg-dark);
          transform: translateY(-2px);
        }

        /* Film Journal Grid */
        .film-journal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.25rem;
          margin-bottom: 4.5rem;
        }

        .film-card {
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          overflow: hidden;
        }

        .film-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-medium);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
        }

        .film-still-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background-color: #201D1A;
          overflow: hidden;
        }

        .film-still-wrap.is-fallback {
          background: linear-gradient(135deg, #1A1A1A 0%, #2A2421 100%);
        }

        .film-still-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .film-card:hover .film-still-img {
          transform: scale(1.04);
        }

        .film-still-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20, 18, 16, 0.45) 0%, transparent 60%);
          pointer-events: none;
        }

        .film-aspect-pill {
          position: absolute;
          bottom: 0.85rem;
          right: 0.85rem;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.6rem;
          background-color: rgba(26, 26, 26, 0.75);
          backdrop-filter: blur(4px);
          color: #FAF8F4;
          border-radius: 2px;
        }

        .film-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .film-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.65rem;
        }

        .film-year {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--text-terracotta);
        }

        .film-director {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
          font-style: italic;
        }

        .film-title {
          font-family: var(--font-serif);
          font-size: 1.55rem;
          font-weight: 600;
          line-height: 1.2;
          color: var(--text-main);
          margin-bottom: 0.4rem;
        }

        .film-cinematographer {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .film-palette-note {
          background-color: var(--bg-cream-card);
          padding: 0.75rem 1rem;
          border-left: 2px solid var(--border-medium);
          margin-bottom: 1.5rem;
          font-size: 0.8rem;
          line-height: 1.5;
        }

        .palette-label {
          font-weight: 700;
          letter-spacing: 0.1em;
          font-size: 0.65rem;
          color: var(--text-terracotta);
          display: block;
          margin-bottom: 0.15rem;
        }

        .palette-desc {
          color: var(--text-secondary);
        }

        /* Reflection Area */
        .film-reflection-box {
          margin-top: auto;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .reflection-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.65rem;
        }

        .reflection-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .edit-note-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-terracotta);
          padding: 2px 4px;
          transition: color 0.2s ease;
        }

        .edit-note-btn:hover {
          color: var(--text-main);
        }

        .reflection-display {
          cursor: pointer;
          min-height: 52px;
          padding: 0.65rem 0.85rem;
          background-color: var(--bg-cream-card);
          border: 1px dashed var(--border-subtle);
          border-radius: 2px;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        .reflection-display:hover {
          border-color: var(--border-medium);
          background-color: #FAF6EE;
        }

        .reflection-quote {
          font-family: var(--font-accent-serif);
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.55;
          color: var(--text-main);
        }

        .reflection-empty-hint {
          font-size: 0.82rem;
          font-style: italic;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .reflection-editor {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .reflection-textarea {
          width: 100%;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          padding: 0.65rem;
          background-color: var(--bg-cream);
          border: 1px solid var(--text-main);
          color: var(--text-main);
          resize: vertical;
          outline: none;
        }

        .editor-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-save-note {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 0.4rem 0.8rem;
          background-color: var(--bg-dark);
          color: #FAF8F4;
          transition: background-color 0.2s ease;
        }

        .btn-save-note:hover {
          background-color: var(--bg-dark-hover);
        }

        .btn-cancel-note {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 0.4rem 0.8rem;
          color: var(--text-muted);
        }

        .btn-cancel-note:hover {
          color: var(--text-main);
        }

        /* Divider */
        .beyond-divider {
          width: 100%;
          height: 1px;
          background-color: var(--border-subtle);
          margin-bottom: 4rem;
        }

        /* Music Feature */
        .music-feature-wrap {
          margin-bottom: 4.5rem;
        }

        .music-header {
          max-width: 680px;
          margin-bottom: 2.5rem;
        }

        .music-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-terracotta);
          margin-bottom: 0.75rem;
        }

        .disc-icon {
          animation: spinDisc 12s linear infinite;
        }

        @keyframes spinDisc {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .music-title {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          font-weight: 600;
          line-height: 1.25;
          color: var(--text-main);
          margin-bottom: 0.65rem;
        }

        .music-subtitle {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .music-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
        }

        .music-card {
          background-color: var(--bg-cream-elevated);
          border: 1px solid var(--border-subtle);
          padding: 1.85rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .music-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-medium);
        }

        .music-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .track-number {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .track-icon {
          color: var(--text-terracotta);
        }

        .track-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .track-artist {
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-terracotta);
          margin-bottom: 1rem;
        }

        .track-note {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-secondary);
          font-style: italic;
          margin-top: auto;
        }

        .track-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-main);
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
        }

        /* Philosophy Quote */
        .beyond-philosophy-quote {
          text-align: center;
          padding: 2.5rem 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .beyond-philosophy-quote blockquote {
          font-family: var(--font-accent-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 2.5vw, 1.55rem);
          color: var(--text-secondary);
          max-width: 680px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .film-journal-grid {
            grid-template-columns: 1fr;
          }
          .beyond-header-block {
            flex-direction: column;
            align-items: flex-start;
          }
          .music-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
