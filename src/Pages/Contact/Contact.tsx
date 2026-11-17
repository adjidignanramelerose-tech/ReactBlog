import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulation d'envoi du message
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-card">
        <h2>Contactez-nous</h2>
        <p className="contact-subtitle">
          Une question, une suggestion ou un partenariat ? Écrivez-nous !
        </p>

        {submitted && (
          <div className="success-alert">
            ✅ Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Votre Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex: Amélé Djidjignan"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Votre Adresse Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ex: amele@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Ex: Proposition d'article / Partenariat"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Rédigez votre message ici..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-contact-btn">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;