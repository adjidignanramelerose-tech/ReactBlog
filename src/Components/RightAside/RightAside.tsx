

interface Publicite {
  titre: string;
  sousTitre: string;
  lieu: string;
  badge: string;
  image: string;
}

function RightAside() {
  const publicites: Publicite[] = [
    {
      titre: "Formation Développement Web",
      sousTitre: "HTML, CSS, React & Laravel",
      lieu: "Lomé - Agoè",
      badge: "PROMO -20%",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80"
    },
    {
      titre: "Bootcamp Intelligence Artificielle",
      sousTitre: "Maîtrisez les outils IA",
      lieu: "Lomé - Centre",
      badge: "NOUVEAU",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80"
    }
  ];

  return (
    <aside className="right-aside">
      <h3 className="aside-title">📢 Publicités</h3>
      <p className="aside-subtitle">Nos partenaires près de chez vous</p>

      {publicites.map((pub, index) => (
        <div className="pub-card" key={index}>
          <div className="pub-image-wrapper">
            <span className="pub-badge">{pub.badge}</span>
            <img src={pub.image} alt={pub.titre} className="pub-img" />
          </div>

          <div className="pub-body">
            <h4>{pub.titre}</h4>
            <p className="pub-highlight">{pub.sousTitre}</p>
            <p className="pub-location">📍 {pub.lieu}</p>
            <button type="button" className="pub-contact-btn">
              💬 En savoir plus
            </button>
          </div>
        </div>
      ))}

      <button className="all-pubs" type="button">
        Toutes les publicités
      </button>
    </aside>
  );
}

export default RightAside;