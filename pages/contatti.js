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
          description="Hai domande? Vuoi collaborare? Contattaci!"
        />

        <div className="container">
          {/* Inserisci qui il resto del contenuto della pagina contatti */}
          <p>
            Questa è la pagina dei contatti. Puoi inserire qui un form di contatto,
            informazioni di contatto, una mappa, ecc.
          </p>
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
        }

        p {
          font-size: 1.1rem;
          line-height: 1.7;
        }
      `}</style>
    </Layout>
  );
}