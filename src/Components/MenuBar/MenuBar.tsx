import React, { useState } from 'react';
import { NavLink, Link } from 'react-router';

function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="menu-bar">
      {/* 1. Logo à gauche */}
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <h2>📰 INFO MAG</h2>
      </Link>

      {/* Bouton Hamburger Mobile */}
      <button
        type="button"
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir ou fermer le menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 2. Menu de navigation au milieu */}
      <nav className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/" end onClick={closeMenu}>Maison</NavLink></li>
          <li><NavLink to="/articles" onClick={closeMenu}>Articles</NavLink></li>
          <li><NavLink to="/apropos" onClick={closeMenu}>À propos</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </nav>

      {/* 3. Bouton Connexion à droite */}
      <div className="connexion-container">
        <Link to="/connexion" className="connexion-btn" onClick={closeMenu}>
          → Connexion
        </Link>
      </div>
    </header>
  );
}

export default MenuBar;