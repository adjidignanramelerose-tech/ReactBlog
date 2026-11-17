
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>INFO MAG</h2>
        <p>Votre actualité numérique.</p>
      </div>

      <div className="footer-section">
        <h3>Menu</h3>
        <Link to="/">Accueil</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-section">
        <h3>Liens utiles</h3>
        <Link to="/articles">Actualités</Link>
        <Link to="/articles">Technologies</Link>
        <Link to="/connexion">Connexion</Link>
      </div>

      <div className="footer-section" id="apropos">
        <h3>À propos</h3>
        <p>
          INFO MAG est un site consacré aux actualités
          et aux nouvelles technologies.
        </p>
      </div>
    </footer>
  );
}

export default Footer;