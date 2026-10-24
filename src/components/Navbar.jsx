import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'work', 'about', 'skills', 'beyond', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'BEYOND', href: '#beyond', id: 'beyond' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Theme handling
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(current);
    setTheme(current);
  };

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  // Initialize theme on mount
  useEffect(() => {
    applyTheme(theme);
  }, []);


  return (
    <header className={`navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo matching reference: lowercase spaced serif 'l i p i' */}
        <a 
          href="#hero" 
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, '#hero')}
          aria-label="Lipi Roy Portfolio Home"
        >
          <span className="logo-letter">l</span>
          <span className="logo-letter">i</span>
          <span className="logo-letter">p</span>
          <span className="logo-letter">i</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'is-active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>

      {/* Hairline Border underneath */}
      <div className="navbar-divider" />

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span>{link.name}</span>
                <span className="mobile-arrow">→</span>
              </a>
            ))}
          </nav>

        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background-color: var(--bg-cream);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .navbar-wrapper.is-scrolled {
          background-color: rgba(250, 248, 244, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .navbar-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 1.35rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 500;
          letter-spacing: 0.38em;
          color: var(--text-main);
          display: inline-flex;
          align-items: center;
          gap: 0.15rem;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .navbar-brand:hover {
          opacity: 0.75;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 2.75rem;
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-main);
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }

        .nav-link:hover {
          opacity: 1;
          color: #000000;
        }

        .nav-link.is-active {
          opacity: 1;
          font-weight: 700;
        }

        .nav-link.is-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1.5px;
          background-color: var(--text-main);
        }

        .navbar-divider {
          width: 100%;
          height: 1px;
          background-color: var(--border-subtle);
        }

        .mobile-toggle {
          display: none;
          padding: 6px;
          color: var(--text-main);
        }
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-main);
          margin-left: 1rem;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 101;
        }
        @media (max-width: 768px) {
          .mobile-toggle { display: block; }
          .theme-toggle { margin-left: 0.5rem; }
        }

        .mobile-menu-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #FAF8F4;
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          padding: 1.5rem 2rem 2rem;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          color: var(--text-main);
        }

        .mobile-arrow {
          font-size: 1.2rem;
          color: var(--text-terracotta);
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 1.15rem 1.25rem;
          }
          .navbar-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
