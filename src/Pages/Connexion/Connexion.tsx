import React, { useState } from 'react';
import { Link } from 'react-router';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Veuillez remplir tous les champs.');
      return;
    }
    setErrorMsg('');
    alert(`Connexion réussie pour : ${email}`);
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>📰 INFO MAG</h2>
          <p>Connectez-vous à votre espace personnel</p>
        </div>

        {errorMsg && <div className="error-alert">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ex: amele@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            Se connecter
          </button>
        </form>

        <div className="auth-footer-text">
          <p>
            Pas encore de compte ? <Link to="/contact">Contactez-nous</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Connexion;