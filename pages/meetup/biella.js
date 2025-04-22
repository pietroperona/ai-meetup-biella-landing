// pages/meetup/biella.js
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';

export default function MeetupBiella() {
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !privacyAccepted) {
      setFormStatus({
        message: 'Per favore, inserisci l\'email e accetta la privacy policy.',
        isError: true
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          message: 'Grazie per l\'iscrizione! Ti terremo aggiornato sui prossimi eventi.',
          isError: false
        });
        setEmail('');
        setPrivacyAccepted(false);
      } else {
        throw new Error(data.message || 'Si è verificato un errore durante l\'iscrizione.');
      }
    } catch (error) {
      setFormStatus({
        message: error.message || 'Si è verificato un errore. Riprova più tardi.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dati strutturati specifici per la pagina Meetup Biella
  const biellaStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "AI Meetup Biella - Community locale sull'Intelligenza Artificiale",
    "description": "Scopri gli eventi di AI Meetup a Biella. La community locale che ti aiuta a comprendere e utilizzare l'intelligenza artificiale nella tua vita e professione.",
    "startDate": "2025-09-01T18:00:00+02:00", // Data da aggiornare con evento effettivo
    "endDate": "2025-09-01T20:00:00+02:00",   // Data da aggiornare con evento effettivo
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Biella",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Biella",
        "addressRegion": "BI",
        "addressCountry": "IT"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "AI Meetup Italia",
      "url": "https://www.aimeetup.it"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.aimeetup.it/meetup/biella",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "isPartOf": {
      "@type": "Organization",
      "name": "AI Meetup Italia",
      "url": "https://www.aimeetup.it"
    }
  };

  return (
    <Layout
      title="AI Meetup Biella | Eventi e community IA locale"
      description="Scopri gli eventi di AI Meetup a Biella. La community locale che ti aiuta a comprendere e utilizzare l'intelligenza artificiale nella tua vita e professione."
      canonicalUrl="https://www.aimeetup.it/meetup/biella"
      ogImage="https://www.aimeetup.it/social-card.png"
      structuredData={biellaStructuredData}
    >
      <div className="meetup-page">
        <main className="main-content">
          {/* Hero Section con titolo grande */}
          <div className="hero-section">
            <h1 className="hero-title">Ehi Biella, stiamo arrivando! 🤩</h1>
            <h2 className="hero-subtitle">Stiamo creando la prima community AI di Biella. Aiutaci a costruire ponti tra le persone e l'intelligenza artificiale, <a href="/contatti" className="contact-link">contattaci</a>.</h2>
          </div>

          {/* Form Section - stesso della home */}
          <div className="form-section">
            <div className="form-container">
              <h2 className="form-title">Resta aggiornato sui prossimi eventi, unisciti al futuro.👇</h2>

              <form onSubmit={handleSubmit} className="form">
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua email"
                    className="email-input"
                    required
                  />
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="checkbox"
                    required
                  />
                  <label htmlFor="privacy" className="privacy-label">
                    Acconsento al trattamento dei miei dati personali come descritto nella <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>
                  </label>
                </div>

                {formStatus.message && (
                  <div className={`form-message ${formStatus.isError ? 'error-message' : 'success-message'}`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .meetup-page {
          background-color: #F5F5F5;
        }
        
        .main-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        
        .hero-section {
          width: 100%;
          padding: 3rem 1rem;
          text-align: center;
        }
        
        .hero-title {
          font-size: 3.5rem;
          line-height: 1.2;
          font-weight: 500;
          margin: 0 0 1.5rem 0;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.5;
          font-weight: 400;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .contact-link {
          color: #D43D3D;
          text-decoration: underline;
          transition: opacity 0.2s ease;
        }
        
        .contact-link:hover {
          opacity: 0.8;
        }
        
        .form-section {
          width: 100%;
          max-width: 500px;
        }
        
        .form-container {
          width: 100%;
          padding: 1.5rem;
          border-radius: 8px;
        }
        
        .form-title {
          text-align: center;
          font-size: 1.2rem;
          margin-bottom: 2rem;
          font-weight: 500;
        }
        
        .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }
        
        .input-group {
          width: 100%;
        }
        
        .email-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid #2B2828;
          background-color: transparent;
          font-family: 'Azeret Mono', monospace;
          font-size: 1rem;
          color: #2B2828;
        }
        
        .email-input::placeholder {
          color: #2B2828;
          opacity: 0.7;
        }
        
        .email-input:focus {
          outline: none;
          border-color: #D43D3D;
        }
        
        .checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        
        .checkbox {
          margin-top: 0.3rem;
          cursor: pointer;
        }
        
        .privacy-label {
          font-size: 0.8rem;
          line-height: 1.4;
        }
        
        .privacy-link {
          color: #D43D3D;
          text-decoration: underline;
          transition: opacity 0.2s ease;
        }
        
        .privacy-link:hover {
          opacity: 0.8;
        }
        
        .form-message {
          padding: 0.5rem;
          font-size: 0.8rem;
          text-align: center;
        }
        
        .error-message {
          color: #D43D3D;
        }
        
        .success-message {
          color: #2B2828;
        }
        
        .submit-button {
          background-color: #2B2828;
          color: #F5F5F5;
          border: none;
          padding: 0.8rem 1.5rem;
          font-family: 'Azeret Mono', monospace;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          align-self: center;
          min-width: 150px;
        }
        
        .submit-button:hover {
          background-color: #D43D3D;
          transform: translateY(-2px);
        }
        
        .submit-button:disabled {
          background-color: #2B2828;
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        @media (max-width: 768px) {
          .main-content {
            padding: 2rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2.8rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .main-content {
            padding: 1.5rem 1rem;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .form-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </Layout>
  );
}