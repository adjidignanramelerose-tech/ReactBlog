
import { Link } from 'react-router';

function About() {
  const valeurs = [
    {
      icone: "⚡",
      titre: "Actualité en temps réel",
      description: "Une veille constante sur les innovations numériques, le développement web et l'intelligence artificielle."
    },
    {
      icone: "🎯",
      titre: "Contenu vérifié et clair",
      description: "Des articles accessibles, structurés et pratiques pour accompagner les passionnés et professionnels du digital."
    },
    {
      icone: "🤝",
      titre: "Communauté active",
      description: "Un espace d'échange ouvert où chaque lecteur peut réagir, commenter et partager ses idées."
    }
  ];

  return (
    <div className="apropos-container">
      {/* Bannière d'en-tête */}
      <section className="apropos-hero">
        <span className="category-badge">NOTRE MISSION</span>
        <h1>À propos d'INFO MAG</h1>
        <p>
          Votre média numérique de référence dédié aux nouvelles technologies,
          au développement web et à l'innovation digitale.
        </p>
      </section>

      {/* Section Histoire & Vision */}
      <section className="apropos-story">
        <div className="story-content">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Fondé avec la passion du numérique et du partage de connaissances,
            <strong> INFO MAG</strong> est né d'une ambition simple : rendre l'information
            technologique claire, fiable et accessible à tous.
          </p>
          <p>
            Que vous soyez développeur, entrepreneur ou simplement curieux des évolutions
            du monde digital, notre équipe décrypte chaque semaine les tendances qui façonnent
            demain.
          </p>
        </div>

        <div className="story-stats">
          <div className="stat-box">
            <h3>50+</h3>
            <span>Articles publiés</span>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <span>Passion Tech</span>
          </div>
          <div className="stat-box">
            <h3>24/7</h3>
            <span>Veille numérique</span>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="apropos-values">
        <h2>Nos engagements</h2>
        <div className="values-grid">
          {valeurs.map((val, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{val.icone}</div>
              <h3>{val.titre}</h3>
              <p>{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="apropos-cta">
        <h2>Envie de collaborer ou de nous écrire ?</h2>
        <p>Notre rédaction est à votre écoute pour toute proposition d'article ou partenariat.</p>
        <Link to="/contact" className="cta-contact-btn">
          Nous contacter →
        </Link>
      </section>
    </div>
  );
}

export default About;