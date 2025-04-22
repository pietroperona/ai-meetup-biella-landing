// pages/progetto.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function Progetto() {
  // Usiamo un approccio più semplice con useRef per gli elementi DOM
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const nationalRef = useRef(null);
  const howRef = useRef(null);
  const evolutionRef = useRef(null);
  const ctaRef = useRef(null);

  // Animazione elementi al scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Colleghiamo l'observer a tutti i refs
    const elements = [
      heroRef.current,
      missionRef.current,
      valuesRef.current,
      nationalRef.current,
      howRef.current,
      evolutionRef.current,
      ctaRef.current
    ];
    
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Il Progetto | AI Meetup - La community italiana sull'Intelligenza Artificiale</title>
        <meta name="description" content="AI Meetup è un progetto indipendente di divulgazione sull'intelligenza artificiale. Inclusivo, aperto, locale." />
      </Head>

      <div className="project-page">
        {/* SEZIONE 1 - HERO/MANIFESTO */}
        <section ref={heroRef} className="section hero-section fade-in">
          <div className="container">
            <h1 className="hero-title">
              AI Meetup è un progetto indipendente di divulgazione sull'intelligenza artificiale.
            </h1>
            <p className="hero-tagline">Inclusivo, aperto, locale.</p>
          </div>
        </section>

        {/* SEZIONE 2 - MISSIONE */}
        <section ref={missionRef} className="section mission-section fade-in">
          <div className="container">
            <h2 className="section-title">La nostra missione</h2>
            <p className="paragraph">
              Costruiamo ponti tra le persone e l'intelligenza artificiale, abbattendo barriere tecniche e culturali.
            </p>
            <p className="paragraph">
              Crediamo in un futuro dove l'AI non sia solo per pochi, ma per chiunque voglia capirla, sperimentarla, farne parte.
            </p>
          </div>
        </section>

        {/* SEZIONE 3 - VALORI */}
        <section ref={valuesRef} className="section values-section fade-in">
          <div className="container">
            <h2 className="section-title">I nostri valori</h2>
            <div className="values-content">
              <p className="paragraph">
                AI Meetup promuove un uso etico, aperto e accessibile dell'intelligenza artificiale.
              </p>
              <p className="paragraph">
                Abbiamo scelto di firmare l'<a href="https://digital-strategy.ec.europa.eu/it/policies/ai-pact" target="_blank" rel="noopener noreferrer" className="link-highlight">AI Pact europeo</a>, impegnandoci a diffondere un'adozione responsabile e trasparente dell'AI.
              </p>
              <p className="paragraph">
                Stiamo costituendo una organizzazione no profit, perché crediamo in un progetto indipendente, costruito per durare e appartenere alla comunità.
              </p>
            </div>
          </div>
        </section>

        {/* SEZIONE 4 - PROGETTI NAZIONALI */}
        <section ref={nationalRef} className="section national-section fade-in">
          <div className="container">
            <h2 className="section-title">Un progetto nazionale, radicato nei territori</h2>
            <p className="paragraph">
              Vogliamo portare l'intelligenza artificiale anche dove non arriva mai:
              nelle città meno centrali, nelle scuole, nelle biblioteche, nei coworking locali.
            </p>
            <p className="paragraph">
              Lavoriamo per costruire una rete nazionale che agisce localmente,
              mettendo in connessione esperti, curiosi, studenti e imprenditori.
            </p>
          </div>
        </section>

        {/* SEZIONE 5 - COME */}
        <section ref={howRef} className="section how-section fade-in">
          <div className="container">
            <h2 className="section-title">Come lo facciamo</h2>
            <ul className="how-list">
              <li>Eventi locali accessibili a tutti</li>
              <li>Workshop pratici e momenti divulgativi</li>
              <li>Incontri tra esperti, cittadini, imprese e scuole</li>
              <li>Coinvolgimento delle comunità locali</li>
            </ul>
          </div>
        </section>

        {/* SEZIONE 6 - EVOLUZIONE */}
        <section ref={evolutionRef} className="section evolution-section fade-in">
          <div className="container">
            <h2 className="section-title">Un progetto in evoluzione</h2>
            <p className="paragraph">
              AI Meetup cresce con le persone che lo vivono.
            </p>
            <p className="paragraph">
              Ogni evento, ogni città, ogni idea contribuisce a scrivere la prossima pagina del progetto.
            </p>
            <p className="paragraph">
              Siamo sempre alla ricerca di nuove collaborazioni, territori da esplorare, e idee da condividere.
            </p>
          </div>
        </section>

        {/* SEZIONE 7 - CTA */}
        <section ref={ctaRef} className="section cta-section fade-in">
          <div className="container">
            <h2 className="cta-title">Vuoi portare AI Meetup nella tua città?</h2>
            <p className="cta-description">Scrivici e costruiamo qualcosa insieme.</p>
            <Link href="/contatti" className="cta-button">Contattaci</Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .project-page {
          background-color: #F5F5F5;
          color: #333;
        }
        
        .section {
          padding: 4rem 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
        }
        
        .section-title {
          font-size: 1.8rem;
          margin-bottom: 2.5rem;
          font-weight: 500;
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 40px;
          height: 3px;
          background-color: #D43D3D;
        }
        
        .paragraph {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 1.8rem;
          color: #333;
          max-width: 680px;
        }
        
        /* Hero section */
        .hero-section {
          padding: 8rem 1.5rem 6rem;
          text-align: center;
          position: relative;
        }
        
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 2px;
          background: linear-gradient(to right, rgba(212, 61, 61, 0), rgba(212, 61, 61, 0.5), rgba(212, 61, 61, 0));
        }
        
        .hero-title {
          font-size: 2.2rem;
          line-height: 1.4;
          font-weight: 500;
          margin-bottom: 2.5rem;
          color: #222;
        }
        
        .hero-tagline {
          font-size: 1.7rem;
          font-weight: 400;
          margin-bottom: 0;
          color: #333;
        }
        
        /* Values section */
        .values-section {
          background-color: #f7f7f7;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .values-content {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid rgba(212, 61, 61, 0.2);
        }
        
        .link-highlight {
          color: #2B2828;
          text-decoration: underline;
          text-decoration-color: #D43D3D;
          text-underline-offset: 3px;
          transition: all 0.2s ease;
          font-weight: 500;
        }
        
        .link-highlight:hover {
          color: #D43D3D;
        }
        
        /* How section */
        .how-section {
          background-color: #f7f7f7;
        }
        
        .how-list {
          list-style: none;
          padding: 0;
          margin: 0;
          max-width: 680px;
        }
        
        .how-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1.5rem;
          font-size: 1.15rem;
          line-height: 1.6;
          color: #333;
        }
        
        .how-list li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: #D43D3D;
          font-weight: 500;
        }
        
        /* CTA section */
        .cta-section {
          background-color: #2B2828;
          text-align: center;
          color: white;
          padding: 5rem 1.5rem;
        }
        
        .cta-title {
          font-size: 1.9rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .cta-description {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }
        
        .cta-button {
          display: inline-block;
          background-color: #D43D3D;
          color: white;
          padding: 1rem 2.5rem;
          font-size: 1.05rem;
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .cta-button:hover {
          background-color: #C13434;
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }
        
        /* Media queries */
        @media (min-width: 768px) {
          .section {
            padding: 5rem 2rem;
          }
          
          .section-title {
            font-size: 2rem;
            margin-bottom: 3rem;
          }
          
          .section-title::after {
            width: 60px;
            height: 4px;
          }
          
          .hero-section {
            padding: 10rem 2rem 8rem;
          }
          
          .hero-title {
            font-size: 2.8rem;
          }
          
          .hero-tagline {
            font-size: 1.9rem;
          }
          
          .paragraph {
            font-size: 1.2rem;
            line-height: 1.9;
          }
          
          .how-list li {
            font-size: 1.2rem;
            line-height: 1.7;
          }
          
          .cta-button {
            padding: 1.1rem 3rem;
            font-size: 1.1rem;
          }
        }
        
        @media (min-width: 1024px) {
          .section {
            padding: 6rem 2rem;
          }
          
          .hero-section {
            padding: 12rem 2rem 10rem;
          }
          
          .hero-title {
            font-size: 3.2rem;
          }
        }
      `}</style>
    </Layout>
  );
}