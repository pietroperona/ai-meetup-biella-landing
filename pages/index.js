import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import SubscribeForm from '../components/SubscribeForm';
import Manifesto from '../components/Manifesto';
import Roadmap from '../components/Roadmap';
import Layout from '../components/Layout';

export default function Home() {
  // Stati e logica esistenti rimangono uguali
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Riferimento per la sezione manifesto per lo scrolling
  const manifestoRef = useRef(null);

  const handleSubmit = async (e) => {
    // Logica del form rimane uguale
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
  
  // Funzione per lo scroll alla sezione del manifesto
  const scrollToManifesto = () => {
    manifestoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dati strutturati specifici per la homepage
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Meetup | Community italiana sull'Intelligenza Artificiale",
    "description": "La community italiana che rende l'intelligenza artificiale accessibile a tutti. Eventi, formazione e networking nelle città italiane. Unisciti al movimento.",
    "url": "https://www.aimeetup.it/",
    "publisher": {
      "@type": "Organization",
      "name": "AI Meetup Italia",
      "url": "https://www.aimeetup.it"
    },
    // resto del codice
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Meetup Italia",
      "description": "Community italiana sull'intelligenza artificiale con presenza in diverse città",
      "url": "https://www.aimeetup.it",
      "location": {
        "@type": "Country",
        "name": "Italia"
      }
    }
  };

  return (
    <Layout
      title="AI Meetup | Community italiana sull'Intelligenza Artificiale"
      description="La community italiana che rende l'intelligenza artificiale accessibile a tutti. Eventi, formazione e networking nelle città italiane. Unisciti al movimento."
      canonicalUrl="https://www.aimeetup.it/"
      ogImage="https://www.aimeetup.it/social-card.png"
      structuredData={homeStructuredData}
    >
      <div className={styles.container}>
        <Head>
          {/* I meta tag esistenti rimangono uguali */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          {/* Il resto degli head tag rimane lo stesso */}
        </Head>

        <main className={styles.main}>
          {/* Hero Section con frase principale in evidenza */}
          <div className="hero-section">
            <div className="hero-content">
              <h1 className="hero-heading">
                <span>Costruiamo</span> 
                <span className="highlight">ponti</span> 
                <span>tra le persone e</span> 
                <span className="highlight">l'intelligenza artificiale</span>
                <span>, abbattendo</span> 
                <span className="highlight">barriere</span> 
                <span>tecniche e culturali.</span>
              </h1>
            </div>
          </div>

          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Resta aggiornato sui prossimi eventi, unisciti al futuro.👇</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email"
                  className={styles.emailInput}
                  required
                />
              </div>

              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className={styles.checkbox}
                  required
                />
                <label htmlFor="privacy" className={styles.privacyLabel}>
                  Acconsento al trattamento dei miei dati personali come descritto nella <a href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</a>
                </label>
              </div>

              {formStatus.message && (
                <div className={`${styles.formMessage} ${formStatus.isError ? styles.errorMessage : styles.successMessage}`}>
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti'}
              </button>
            </form>
          </div>
          
          {/* Indicatore di scroll utilizzando FontAwesome */}
          <div className="scroll-indicator" onClick={scrollToManifesto}>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </main>
        
        {/* Manifesto posizionato tra main e footer */}
        <div ref={manifestoRef} className={styles.manifestoWrapper}>
          <Manifesto />
        </div>

        {/* Roadmap posizionata dopo il manifesto con ID per lo scroll */}
        <div id="roadmap-section" className={styles.roadmapWrapper}>
          <Roadmap />
        </div>

        <style jsx>{`
          .hero-section {
            padding: 3rem 2rem 1.5rem; /* Ridotto padding inferiore */
            margin-bottom: 0; /* Ridotto margine inferiore */
            border-radius: 8px;
          }
          
          .hero-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }
          
          .hero-heading {
            font-size: 2.5rem;
            line-height: 1.4;
            font-weight: 500;
            letter-spacing: -0.5px;
          }
          
          .hero-heading span {
            display: inline;
            margin: 0 0.2rem;
          }
          
          .highlight {
            position: relative;
            z-index: 1;
          }
          
          .highlight::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 8px;
            background-color: rgba(75, 181, 67, 0.3); /* Verde evidenziatore */
            z-index: -1;
          }
          
          /* Indicatore di scroll con FontAwesome */
          .scroll-indicator {
            margin: 0.5rem auto 2.5rem;
            text-align: center;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          
          .scroll-indicator:hover {
            transform: translateY(3px);
          }
          
          .scroll-indicator i {
            font-size: 24px;
            color: #2B2828;
            opacity: 0.7;
            animation: pulseDown 2s infinite;
          }
          
          @keyframes pulseDown {
            0%, 100% {
              opacity: 0.7;
              transform: translateY(0);
            }
            50% {
              opacity: 1;
              transform: translateY(3px);
            }
          }
          
          @media (max-width: 768px) {
            .hero-section {
              padding: 4rem 1.5rem 1rem; /* Ridotto padding inferiore per mobile */
            }
            
            .hero-heading {
              font-size: 2rem;
            }
            
            .scroll-indicator {
              margin: 0.5rem auto 2rem; /* Ridotto margine inferiore per mobile */
            }
            
            .scroll-indicator i {
              font-size: 20px;
            }
          }
          
          @media (max-width: 480px) {
            .hero-section {
              padding: 3rem 1rem 0.5rem; /* Ridotto ulteriormente il padding per dispositivi molto piccoli */
            }
            
            .hero-heading {
              font-size: 1.5rem;
            }
            
            .highlight::after {
              height: 6px;
              bottom: 3px;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}