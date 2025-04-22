import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero'; // Importa il componente Hero

export default function Contatti() {
  // Dati strutturati specifici per la pagina contatti
  const contattiStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contattaci | AI Meetup Italia",
    "description": "Vuoi portare AI Meetup nella tua città o collaborare con noi? Contatta la community italiana sull'intelligenza artificiale per informazioni e partnership.",
    "url": "https://www.aimeetup.it/contatti",
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Meetup Italia",
      "email": "contact@aimeetup.it",
      "url": "https://www.aimeetup.it",
      "sameAs": [
        "https://www.linkedin.com/company/ai-meetup-italia/",
        "https://www.instagram.com/aimeetupitalia/"
      ]
    }
  };

  return (
    <Layout
      title="Contattaci | AI Meetup Italia"
      description="Vuoi portare AI Meetup nella tua città o collaborare con noi? Contatta la community italiana sull'intelligenza artificiale per informazioni e partnership."
      canonicalUrl="https://www.aimeetup.it/contatti"
      ogImage="https://www.aimeetup.it/social-card.png"
      structuredData={contattiStructuredData}
    >
      <div className="contatti-page">
        <Hero
          title="Contatti"
          description="Entra in contatto con la community AI Meetup"
        />

        <div className="container">
          {/* Link email centrale */}
          <div className="email-container">
            <a href="mailto:contact@aimeetup.it">contact@aimeetup.it</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contatti-page {
          background-color: #f5f5f5;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px; /* Assicura un'altezza minima per centrare verticalmente */
        }

        .email-container {
          text-align: center;
          margin: 4rem 0; /* Aggiunto margine sopra e sotto */
        }

        .email-container a {
          font-size: 3rem; /* Testo gigante */
          color: #2B2828;
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
}