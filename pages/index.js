// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import SubscribeForm from '../components/SubscribeForm';


export default function Home() {
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
      // Qui inseriremo la logica di integrazione con Mailchimp
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

  return (
    <div className={styles.container}>
      <Head>
        <title>AI Meetup Biella - Unisciti alla nostra community di Intelligenza Artificiale</title>
        <meta name="description" content="Siamo la community che connette le persone che vogliono scoprire, capire e usare l'intelligenza artificiale nella vita e nel lavoro." />
        <meta property="og:title" content="AI Meetup Biella" />
        <meta property="og:description" content="Unisciti alla nostra community di Intelligenza Artificiale a Biella" />
        <meta property="og:image" content="/social-card.png" />
        <meta property="og:url" content="https://aimeetupbiella.it" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Meetup Biella" />
        <meta name="twitter:description" content="Unisciti alla nostra community di Intelligenza Artificiale a Biella" />
        <meta name="twitter:image" content="/social-card.png" />
        <link rel="icon" href="/ai-meetup.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <img src="/logo-ai-meetup-biella.svg" alt="AI Meetup Biella Logo" />
        </div>
        
        <p className={styles.description}>
          Siamo la community che connette le persone che vogliono scoprire, capire e usare l'intelligenza artificiale nella vita e nel lavoro.
        </p>
        
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Resta aggiornato sui prossimi eventi, unisciti al futuro.</h2>
          
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
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="https://www.linkedin.com/groups/10083428/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/biella.aimeetup/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            Instagram
          </a>
          <a href="mailto:biella@aimeetup.it" className={styles.footerLink}>
            Become a partner
          </a>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} AI Meetup Biella
        </div>
      </footer>
    </div>
  );
}