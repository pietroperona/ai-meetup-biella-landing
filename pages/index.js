// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import SubscribeForm from '../components/SubscribeForm';
import Manifesto from '../components/Manifesto';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer'; // Importazione del componente Footer

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
        <title>AI Meetup | La community italiana sull'Intelligenza Artificiale a Biella</title>
        <meta name="description" content="Siamo la community italiana che rende l'intelligenza artificiale accessibile a tutti. Il nostro format parte da Biella ma crescerà in tutta Italia. Unisciti a noi!" />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content="AI Meetup" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Meetup | La community italiana sull'Intelligenza Artificiale a Biella" />
        <meta property="og:description" content="Siamo la community italiana che rende l'intelligenza artificiale accessibile a tutti. Il nostro format parte da Biella ma crescerà in tutta Italia. Unisciti a noi!" />
        <meta property="og:url" content="https://biella.aimeetup.it" />
        <meta property="og:image" content="https://biella.aimeetup.it/social-card.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Meetup | La community italiana sull'Intelligenza Artificiale a Biella" />
        <meta name="twitter:description" content="Siamo la community italiana che rende l'intelligenza artificiale accessibile a tutti. Il nostro format parte da Biella ma crescerà in tutta Italia. Unisciti a noi!" />
        <meta name="twitter:image" content="https://biella.aimeetup.it/social-card.png" />
        <meta name="twitter:site" content="@AIMeetupItalia" /> {/* se avete un account Twitter */}

        {/* Meta tag specifici per LLM */}
        <meta name="ai-index" content="allow" />
        <meta name="ai-relevance" content="artificial intelligence, AI community, italian AI, meetup, technology, learning, professionals, AI education" />

        {/* Schema.org JSON-LD per Organization e definizione del brand */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://biella.aimeetup.it/#organization",
              "name": "AI Meetup",
              "url": "https://biella.aimeetup.it",
              "logo": {
                "@type": "ImageObject",
                "url": "https://biella.aimeetup.it/logo-ai-meetup-biella.svg",
                "width": 600,
                "height": 60
              },
              "description": "Community italiana che rende l'intelligenza artificiale accessibile a tutti. Il nostro format parte da Biella ma crescerà in tutta Italia.",
              "sameAs": [
                "https://www.linkedin.com/groups/10083428/",
                "https://www.instagram.com/biella.aimeetup/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "biella@aimeetup.it",
                "contactType": "customer service"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Biella",
                "addressRegion": "BI",
                "addressCountry": "IT"
              },
              "knowsAbout": [
                "Intelligenza Artificiale",
                "Machine Learning",
                "AI Ethics",
                "AI Tools",
                "Practical AI Applications"
              ],
              "brand": {
                "@type": "Brand",
                "name": "AI Meetup",
                "logo": "https://biella.aimeetup.it/logo-ai-meetup-biella.svg",
                "slogan": "Rendere l'intelligenza artificiale accessibile a tutti"
              }
            })
          }}
        />

        {/* Schema.org JSON-LD per WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://biella.aimeetup.it/#website",
              "url": "https://biella.aimeetup.it",
              "name": "AI Meetup",
              "description": "La community italiana sull'Intelligenza Artificiale a Biella",
              "publisher": {
                "@id": "https://biella.aimeetup.it/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://biella.aimeetup.it/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "it-IT"
            })
          }}
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <img src="/logo-ai-meetup-biella.svg" alt="AI Meetup Biella Logo" />
        </div>

        <p className={styles.description}>
          Siamo la community che connette le persone che vogliono scoprire, capire e usare l'intelligenza artificiale 🤖 nella vita e nel lavoro.
        </p>

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
      </main>
      
      {/* Manifesto posizionato tra main e footer */}
      <div className={styles.manifestoWrapper}>
        <Manifesto />
      </div>

      {/* Roadmap posizionata dopo il manifesto */}
      <div className={styles.roadmapWrapper}>
        <Roadmap />
      </div>

      {/* Sostituiamo il vecchio footer con il nuovo componente Footer */}
      <Footer />
    </div>
  );
}