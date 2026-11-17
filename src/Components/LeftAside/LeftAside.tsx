

interface Actualite {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

function LeftAside() {
  const actualites: Actualite[] = [
    {
      id: 1,
      title: "Les nouvelles technologies en plein essor",
      date: "14 novembre 2026",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&q=80"
    },
    {
      id: 2,
      title: "Le développement web moderne avec React",
      date: "12 nov. 2026",
      category: "Développement",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=150&q=80"
    },
    {
      id: 3,
      title: "L'intelligence artificielle au quotidien",
      date: "10 novembre 2026",
      category: "IA",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&q=80"
    },
    {
      id: 4,
      title: "Les innovations numériques en Afrique",
      date: "08 novembre 2026",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&q=80"
    }
  ];

  return (
    <aside className="left-aside">
      <h3 className="aside-title">📌 Derniers articles</h3>

      <div className="actualites-list">
        {actualites.map((item) => (
          <div key={item.id} className="actualite-item">
            <img src={item.image} alt={item.title} className="actualite-thumb" />
            <div className="actualite-info">
              <h4>{item.title}</h4>
              <span className="actualite-date">{item.date} •</span>
              <span className="actualite-cat">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="all-articles" type="button">
        Tous les articles
      </button>
    </aside>
  );
}

export default LeftAside;