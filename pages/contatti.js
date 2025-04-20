import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero'; // Importa il componente Hero

export default function Contatti() {
  return (
    <Layout>
      <Head>
        <title>Contatti | AI Meetup - La community italiana sull'Intelligenza Artificiale</title>
        <meta name="description" content="Contatta AI Meetup per informazioni, partnership o per proporre un evento nella tua città." />
      </Head>

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