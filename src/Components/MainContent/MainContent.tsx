import React, { useState } from 'react';

function MainContent() {
  const [likes, setLikes] = useState(14);
  const [isLiked, setIsLiked] = useState(false);

  const [comments, setComments] = useState([
    { id: 1, author: 'Amélie', avatar: 'A', text: 'Très intéressant ! Merci pour cet article.' },
    { id: 2, author: 'Jean', avatar: 'J', text: 'Les nouvelles technologies sont importantes.' }
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment = {
      id: Date.now(),
      author: 'Visiteur',
      avatar: 'V',
      text: newCommentText
    };

    setComments([...comments, newComment]);
    setNewCommentText('');
  };

  return (
    <main className="main-content" id="articles">
      <h2 className="section-title">🔥 À la Une</h2>

      <article className="featured-article">
        <img
          src="https://www.adngolfe1togo.com/storage/app/public/actualites/37IQb8nueaeatkgSt03ttl4QGrWNGtgaBryogrgQ.jpg"
          alt="Évolution du numérique"
          className="article-banner"
        />

        <div className="article-center-content">
          <span className="category-badge">TECHNOLOGIE</span>

          <h3>L'évolution du numérique aujourd'hui</h3>

          <p className="article-meta">
            Par Ami DADO• 14 nov. 2026 • 5 min de lecture
          </p>

          <p className="article-excerpt">
            Découvrez comment les nouvelles technologies transforment notre quotidien,
            facilitent la communication et créent de nouvelles opportunités professionnelles.
          </p>

          <button className="read-more-full" type="button">
            Lire l'article complet →
          </button>

          <div className="article-actions">
            <button
              className={`like-btn ${isLiked ? 'liked' : ''}`}
              onClick={handleLike}
              type="button"
            >
              {isLiked ? '❤️ Aimé' : '🤍 J\'aime'} ({likes})
            </button>
          </div>
        </div>
      </article>

      <section className="comments">
        <h3>💬 Commentaires ({comments.length})</h3>

        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="avatar">{comment.avatar}</div>
            <div>
              <strong>{comment.author}</strong>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}

        <form onSubmit={handleAddComment} className="comment-form">
          <input
            type="text"
            placeholder="Écrire un commentaire..."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          />
          <button type="submit" className="submit-comment-btn">
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}

export default MainContent;