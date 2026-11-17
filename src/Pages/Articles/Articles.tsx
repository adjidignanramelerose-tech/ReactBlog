import React, { useState } from 'react';

interface ArticleItem {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Tous', 'Tech', 'Développement', 'IA', 'Digital'];

  const articlesList: ArticleItem[] = [
    {
      id: 1,
      title: "L'évolution du numérique aujourd'hui",
      category: "Tech",
      author: "Amélé Djidjignan",
      date: "14 nov. 2026",
      readTime: "5 min",
      excerpt: "Découvrez comment les nouvelles technologies transforment notre quotidien, facilitent la communication et créent de nouvelles opportunités.",
      image: "https://www.adngolfe1togo.com/storage/app/public/actualites/37IQb8nueaeatkgSt03ttl4QGrWNGtgaBryogrgQ.jpg"
    },
    {
      id: 2,
      title: "Le développement web moderne avec React et TypeScript",
      category: "Développement",
      author: "Charles KUEVEY",
      date: "12 nov. 2026",
      readTime: "7 min",
      excerpt: "Pourquoi l'association de React et TypeScript est devenue incontournable pour concevoir des interfaces robustes et maintenables.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
    },
    {
      id: 3,
      title: "L'intelligence artificielle au service de la productivité",
      category: "IA",
      author: "Julien DAGBA.",
      date: "10 nov. 2026",
      readTime: "6 min",
      excerpt: "Tour d'horizon des outils d'IA générative qui assistent les développeurs, rédacteurs et designers au quotidien.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
    },
    {
      id: 4,
      title: "Les innovations numériques en plein essor en Afrique",
      category: "Digital",
      author: "Amour AYITE.",
      date: "08 nov. 2026",
      readTime: "4 min",
      excerpt: "Fintech, e-commerce et solutions mobiles : comment l'écosystème tech africain redéfinit les usages numériques.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
    },
    {
      id: 5,
      title: "Maîtriser CSS Grid et Flexbox pour des mises en page réactives",
      category: "Développement",
      author: "Amélé Djidjignan",
      date: "05 nov. 2026",
      readTime: "6 min",
      excerpt: "Les bonnes pratiques pour structurer vos grilles multi-colonnes sans difficulté sur mobile, tablette et ordinateur.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&q=80"
    },
    {
      id: 6,
      title: "Cybersécurité : protéger ses données personnelles en ligne",
      category: "Tech",
      author: "Sylvain EGBON.",
      date: "02 nov. 2026",
      readTime: "5 min",
      excerpt: "Les réflexes essentiels pour sécuriser vos comptes, mots de passe et navigation face aux menaces numériques.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
    }
  ];

  // Filtrage combiné (catégorie + recherche texte)
  const filteredArticles = articlesList.filter((article) => {
    const matchCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    const matchSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="articles-page-container">
      {/* En-tête de la page */}
      <header className="articles-header">
        <h1>Tous nos articles</h1>
        <p>Explorez nos dossiers, tutoriels et actualités autour du numérique et de la tech.</p>

        {/* Barre de recherche */}
        <div className="articles-search-bar">
          <input
            type="text"
            placeholder="Rechercher un article par mot-clé..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Boutons filtres par catégorie */}
        <div className="categories-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grille des articles */}
      {filteredArticles.length > 0 ? (
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <article className="article-card" key={article.id}>
              <div className="article-card-img-wrapper">
                <img src={article.image} alt={article.title} className="article-card-img" />
                <span className="article-card-badge">{article.category}</span>
              </div>

              <div className="article-card-body">
                <div className="article-card-meta">
                  <span>{article.date}</span> • <span>{article.readTime} de lecture</span>
                </div>

                <h3>{article.title}</h3>
                <p className="article-card-excerpt">{article.excerpt}</p>

                <div className="article-card-footer">
                  <span className="article-card-author">Par {article.author}</span>
                  <button type="button" className="article-card-btn">
                    Lire →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="no-articles-found">
          <p>Aucun article ne correspond à votre recherche « {searchQuery} ».</p>
          <button
            type="button"
            className="reset-filter-btn"
            onClick={() => {
              setSelectedCategory('Tous');
              setSearchQuery('');
            }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}

export default Articles;