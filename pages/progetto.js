// pages/progetto.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';

export default function Progetto() {
  // Usiamo un approccio più semplice con useRef per gli elementi DOM
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const blocksRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Stato per gestire l'apertura/chiusura delle fisarmoniche su mobile
  const [expandedSection, setExpandedSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Verifica se è mobile quando il componente monta
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Esegui subito e aggiungi event listener
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Funzione per gestire l'espansione delle sezioni su mobile
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

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
      blocksRef.current,
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

        {/* SEZIONE 4 - BLOCCHI AFFIANCATI / FISARMONICHE */}
        <section ref={blocksRef} className="section blocks-section fade-in">
          <div className="container">
            <div className="blocks-grid">
              {/* BLOCCO 1 - UN PROGETTO NAZIONALE */}
              <div className={`block ${isMobile && expandedSection === 'national' ? 'expanded' : ''}`}>
                <div 
                  className="block-header"
                  onClick={() => isMobile && toggleSection('national')}
                >
                  <h3 className="block-title">Radici locali, visione globale</h3>
                  {isMobile && (
                    <button className="accordion-toggle">
                      {expandedSection === 'national' ? '−' : '+'}
                    </button>
                  )}
                </div>
                <div className="block-content">
                  <p className="block-paragraph">
                    Vogliamo portare l'intelligenza artificiale anche dove non arriva mai:
                    nelle città meno centrali, nelle scuole, nelle biblioteche, nei coworking locali.
                  </p>
                  <p className="block-paragraph">
                    Creiamo spazi di incontro tra mondo accademico, imprese, istituzioni, scuole e cittadini di ogni età e background.
                  </p>
                </div>
              </div>
              
              {/* BLOCCO 2 - COME LO FACCIAMO */}
              <div className={`block ${isMobile && expandedSection === 'how' ? 'expanded' : ''}`}>
                <div 
                  className="block-header"
                  onClick={() => isMobile && toggleSection('how')}
                >
                  <h3 className="block-title">Come lo facciamo</h3>
                  {isMobile && (
                    <button className="accordion-toggle">
                      {expandedSection === 'how' ? '−' : '+'}
                    </button>
                  )}
                </div>
                <div className="block-content">
                  <p className="block-paragraph">
                    Il nostro approccio si basa sulla divulgazione pratica e sul coinvolgimento diretto:
                  </p>
                  <ul className="how-list">
                    <li>Eventi locali accessibili a tutti</li>
                    <li>Workshop pratici e momenti divulgativi</li>
                    <li>Incontri tra esperti, cittadini, imprese e scuole</li>
                    <li>Coinvolgimento delle comunità locali</li>
                  </ul>
                  <p className="block-paragraph">
                    Ogni incontro è pensato per creare connessioni significative e condividere conoscenza pratica.
                  </p>
                </div>
              </div>
              
              {/* BLOCCO 3 - UN PROGETTO IN EVOLUZIONE */}
              <div className={`block ${isMobile && expandedSection === 'evolution' ? 'expanded' : ''}`}>
                <div 
                  className="block-header"
                  onClick={() => isMobile && toggleSection('evolution')}
                >
                  <h3 className="block-title">Un progetto in evoluzione</h3>
                  {isMobile && (
                    <button className="accordion-toggle">
                      {expandedSection === 'evolution' ? '−' : '+'}
                    </button>
                  )}
                </div>
                <div className="block-content">
                  <p className="block-paragraph">
                    AI Meetup cresce con le persone che lo vivono.
                  </p>
                  <p className="block-paragraph">
                    Ogni evento, ogni città, ogni idea contribuisce a scrivere la prossima pagina del progetto.
                  </p>
                  <p className="block-paragraph">
                    Siamo sempre alla ricerca di nuove collaborazioni, territori da esplorare, e idee da condividere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEZIONE 7 - CTA CON SFONDO GRAINY */}
        <section ref={ctaRef} className="section cta-section fade-in">
          <div className="grain-overlay"></div>
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
          position: relative;
        }
        
        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .container {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 2;
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
        
        /* Hero section semplice */
        .hero-section {
          padding: 8rem 1.5rem 6rem;
          text-align: center;
          position: relative;
          background-color: #F5F5F5;
        }
        
        .grain-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          z-index: 1;
          opacity: 0.5;
          mix-blend-mode: overlay;
          pointer-events: none;
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
        
        /* Blocchi affiancati / fisarmoniche */
        .blocks-section {
          padding: 5rem 1.5rem;
        }
        
        .blocks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .block {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-top: 3px solid #D43D3D; /* Linea rossa in cima per sottolineare l'importanza */
        }
        
        .block:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        .block-header {
          padding: 1.8rem 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        
        .block-title {
          font-size: 1.3rem;
          margin: 0;
          font-weight: 500;
          color: #2B2828;
          flex: 1;
        }
        
        .block-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 220px; /* Altezza minima per uniformità */
        }
        
        .block-paragraph {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: #333;
        }
        
        .block-paragraph:last-child {
          margin-bottom: 0;
        }
        
        .how-list {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 1rem 0;
        }
        
        .how-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          font-size: 1rem;
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
        
        .how-list li:last-child {
          margin-bottom: 0;
        }
        
        /* Toggle accordion su mobile */
        .accordion-toggle {
          background: none;
          border: 1px solid rgba(0, 0, 0, 0.15);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: none; /* Nascosto di default, visibile solo su mobile */
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: bold;
          color: #2B2828;
          transition: all 0.2s ease;
          padding: 0;
          line-height: 1;
        }
        
        /* CTA section con sfondo grainy e gradiente come la hero */
        .cta-section {
          background: linear-gradient(to right, #E0F7FA, #ECEFF1);
          text-align: center;
          color: #2B2828; /* Cambiato in scuro per leggibilità sul background chiaro */
          padding: 5rem 1.5rem;
          overflow: hidden;
          position: relative;
        }
        
        .cta-section .grain-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          z-index: 1;
          opacity: 0.5;
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        
        .cta-title {
          font-size: 1.9rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: #2B2828;
        }
        
        .cta-description {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          color: rgba(43, 40, 40, 0.9);
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
        @media (max-width: 768px) {
          .section {
            padding: 3.5rem 1.5rem;
          }
          
          .section-title {
            font-size: 1.6rem;
            margin-bottom: 2rem;
          }
          
          .hero-title {
            font-size: 1.8rem;
          }
          
          .hero-tagline {
            font-size: 1.4rem;
          }
          
          .paragraph {
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }
          
          /* Trasforma i blocchi in fisarmoniche su mobile */
          .blocks-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .block {
            overflow: hidden;
          }
          
          .block:hover {
            transform: none;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          }
          
          .block-header {
            padding: 1.2rem 1rem;
            cursor: pointer;
          }
          
          .accordion-toggle {
            display: flex;
          }
          
          .block-title {
            font-size: 1.1rem;
            padding-right: 10px;
          }
          
          .block-content {
            padding: 0;
            max-height: 0;
            transition: max-height 0.3s ease, padding 0.3s ease;
            overflow: hidden;
          }
          
          .block.expanded .block-content {
            padding: 1.5rem;
            max-height: 1000px; /* Un valore alto per accomodare qualsiasi contenuto */
          }
          
          @media (max-width: 768px) {
          .cta-title {
            font-size: 1.5rem;
          }
          
          .cta-description {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
        }
          
          .cta-button {
            padding: 0.9rem 2rem;
            font-size: 1rem;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .blocks-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }
        
        @media (min-width: 1024px) {
          .section {
            padding: 5rem 2rem;
          }
          
          .hero-section {
            padding: 10rem 2rem 8rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .blocks-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </Layout>
  );
}