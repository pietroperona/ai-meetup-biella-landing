// pages/progetto.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero'; // Importa il componente Hero

export default function Progetto() {
  // Riferimenti per le animazioni al momento dello scroll
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const impactRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

  // Funzione per l'animazione degli elementi al momento dello scroll
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
    
    const elements = [storyRef.current, missionRef.current, impactRef.current, valuesRef.current, ctaRef.current];
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
        <meta name="description" content="Scopri come nasce AI Meetup, la community italiana che rende l'intelligenza artificiale accessibile a tutti. La nostra missione, i nostri valori e l'impatto che vogliamo avere." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Il Progetto | AI Meetup" />
        <meta property="og:description" content="Scopri come nasce AI Meetup, la community italiana che rende l'intelligenza artificiale accessibile a tutti. La nostra missione, i nostri valori e l'impatto che vogliamo avere." />
        <meta property="og:url" content="https://biella.aimeetup.it/progetto" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://biella.aimeetup.it/social-card.png" />
      </Head>

      <div className="project-page">
        {/* Hero Section */}
        <Hero
          title="Scopri AI Meetup"
          description="Costruiamo ponti tra le persone e l'intelligenza artificiale, abbattendo barriere tecniche e culturali."
        />

        <div className="container">
          {/* Sezione Storia */}
          <section ref={storyRef} className="section story-section fade-in">
            <h2 className="section-title">Come nasce AI Meetup</h2>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">Ottobre 2024</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">L'idea</h3>
                  <p className="timeline-text">
                    L'idea di AI Meetup nasce dall'osservazione di un paradosso: mentre l'intelligenza artificiale trasforma rapidamente ogni aspetto della nostra vita, la maggior parte delle persone non ha gli strumenti per comprenderla e utilizzarla. Da qui, l'intuizione di creare una community che faccia da ponte tra la tecnologia più avanzata e le persone comuni.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Gennaio 2025</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">La squadra</h3>
                  <p className="timeline-text">
                    Un gruppo eterogeneo di professionisti del settore tecnologico, educatori e appassionati di AI si unisce con l'obiettivo di creare un format innovativo di divulgazione dell'intelligenza artificiale. L'idea è quella di partire da Biella per poi espandersi in tutta Italia.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Febbraio 2025</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">La struttura</h3>
                  <p className="timeline-text">
                    Viene definita la struttura organizzativa di AI Meetup: un network nazionale che supporta lo sviluppo di comunità locali autonome ma interconnesse, con l'obiettivo di rendere l'intelligenza artificiale comprensibile, accessibile e utile per tutti.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Aprile 2025</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Il manifesto</h3>
                  <p className="timeline-text">
                    Viene pubblicato il manifesto che definisce i principi fondamentali di AI Meetup, con un forte focus sull'accessibilità, l'etica e l'impatto sociale positivo dell'intelligenza artificiale. Contestualmente, viene avviata la ricerca di partner che condividano questi valori.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione Missione */}
          <section ref={missionRef} className="section mission-section fade-in">
            <h2 className="section-title">La Nostra Missione</h2>
            
            <div className="mission-content">
              <div className="mission-statement">
                <p className="statement-text">
                  Rendere l'intelligenza artificiale <span className="highlight-text">accessibile, comprensibile e utile</span> per tutte le persone, indipendentemente dal loro background tecnico.
                </p>
              </div>
              
              <div className="mission-details">
                <div className="mission-card">
                  <div className="mission-icon">🔍</div>
                  <h3 className="mission-title">Divulgazione</h3>
                  <p className="mission-description">
                    Spieghiamo l'AI in modo semplice ma rigoroso, traducendo concetti complessi in esempi pratici e comprensibili.
                  </p>
                </div>
                
                <div className="mission-card">
                  <div className="mission-icon">🤝</div>
                  <h3 className="mission-title">Connessione</h3>
                  <p className="mission-description">
                    Creiamo una rete di persone, aziende e istituzioni che collaborano per promuovere un uso consapevole e benefico dell'AI.
                  </p>
                </div>
                
                <div className="mission-card">
                  <div className="mission-icon">💡</div>
                  <h3 className="mission-title">Formazione</h3>
                  <p className="mission-description">
                    Forniamo conoscenze pratiche per utilizzare l'AI nella vita quotidiana e professionale, senza necessità di competenze tecniche avanzate.
                  </p>
                </div>
                
                <div className="mission-card">
                  <div className="mission-icon">🛡️</div>
                  <h3 className="mission-title">Responsabilità</h3>
                  <p className="mission-description">
                    Promuoviamo un approccio etico e responsabile all'AI, allineato con l'AI Pact Europeo e centrato sul benessere delle persone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione Valori */}
          <section ref={valuesRef} className="section values-section fade-in">
            <h2 className="section-title">I Nostri Valori</h2>
            
            <div className="values-content">
              <div className="values-image">
                <img src="/images/values-illustration.jpg" alt="I valori di AI Meetup" className="values-img" />
              </div>
              
              <div className="values-list">
                <div className="value-item">
                  <h3 className="value-title">
                    <span className="value-emoji">🌟</span> Inclusività
                  </h3>
                  <p className="value-description">
                    Crediamo che l'intelligenza artificiale debba essere comprensibile e accessibile a tutti, indipendentemente dalla formazione tecnica.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3 className="value-title">
                    <span className="value-emoji">🔄</span> Connessione
                  </h3>
                  <p className="value-description">
                    Lavoriamo per connettere persone diverse, unendo esperienze e competenze per creare un dialogo ricco e costruttivo sull'AI.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3 className="value-title">
                    <span className="value-emoji">⚖️</span> Etica
                  </h3>
                  <p className="value-description">
                    Promuoviamo un'intelligenza artificiale etica e centrata sull'umano, che rispetti i diritti fondamentali e migliori la vita delle persone.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3 className="value-title">
                    <span className="value-emoji">🌱</span> Crescita
                  </h3>
                  <p className="value-description">
                    Crediamo nell'apprendimento continuo e nella condivisione di conoscenze come motori di crescita personale e collettiva.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3 className="value-title">
                    <span className="value-emoji">🔎</span> Trasparenza
                  </h3>
                  <p className="value-description">
                    Operiamo con massima trasparenza, spiegando in modo chiaro come funziona l'AI e le sue potenziali implicazioni.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione Impatto */}
          <section ref={impactRef} className="section impact-section fade-in">
            <h2 className="section-title">L'Impatto che vogliamo avere</h2>
            
            <div className="impact-intro">
              <p>
                Crediamo che l'intelligenza artificiale possa trasformare positivamente la società, ma solo se resa accessibile, comprensibile e governabile da tutti. Ecco l'impatto che vogliamo generare:
              </p>
            </div>
            
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-icon">👥</div>
                <h3 className="impact-title">Cittadinanza Digitale</h3>
                <p className="impact-text">
                  Formare cittadini consapevoli, capaci di comprendere, utilizzare e contribuire a plasmare la società digitale del futuro.
                </p>
              </div>
              
              <div className="impact-card">
                <div className="impact-icon">🏙️</div>
                <h3 className="impact-title">Comunità Territoriali</h3>
                <p className="impact-text">
                  Creare e sostenere comunità locali attive, che fungano da punto di riferimento per l'apprendimento e la sperimentazione dell'AI nel territorio.
                </p>
              </div>
              
              <div className="impact-card">
                <div className="impact-icon">🔄</div>
                <h3 className="impact-title">Ecosistema di Innovazione</h3>
                <p className="impact-text">
                  Favorire la creazione di connessioni e collaborazioni tra persone, aziende e istituzioni per accelerare l'innovazione responsabile.
                </p>
              </div>
              
              <div className="impact-card">
                <div className="impact-icon">💼</div>
                <h3 className="impact-title">Competitività</h3>
                <p className="impact-text">
                  Contribuire a rendere le persone e le organizzazioni più competitive attraverso l'acquisizione di competenze pratiche sull'AI.
                </p>
              </div>
              
              <div className="impact-card">
                <div className="impact-icon">⚖️</div>
                <h3 className="impact-title">Equità Digitale</h3>
                <p className="impact-text">
                  Ridurre il divario digitale, garantendo che i benefici dell'AI siano accessibili a tutti, indipendentemente dal background socio-economico o tecnico.
                </p>
              </div>
              
              <div className="impact-card">
                <div className="impact-icon">🌍</div>
                <h3 className="impact-title">Italia nell'AI</h3>
                <p className="impact-text">
                  Contribuire a posizionare l'Italia come un paese all'avanguardia nell'adozione consapevole e responsabile dell'intelligenza artificiale.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione CTA */}
          <section ref={ctaRef} className="section cta-section fade-in">
            <div className="cta-box">
              <h2 className="cta-title">Unisciti a noi. Costruiamo il futuro insieme.</h2>
              <p className="cta-description">
                AI Meetup è un'iniziativa aperta che cresce grazie all'energia e al contributo di persone che credono nell'importanza di rendere l'intelligenza artificiale un'opportunità per tutti.
              </p>
              
              <div className="cta-options">
                <div className="cta-option">
                  <h3 className="option-title">Partecipa</h3>
                  <p className="option-description">
                    Vieni ai nostri eventi, entra nella community e scopri come l'AI può trasformare la tua vita personale e professionale.
                  </p>
                  <Link href="/meetup/biella" className="cta-button secondary">
                    Scopri gli eventi
                  </Link>
                </div>
                
                <div className="cta-option">
                  <h3 className="option-title">Contribuisci</h3>
                  <p className="option-description">
                    Hai competenze o idee da condividere? Vuoi portare AI Meetup nella tua città o diventare partner del progetto?
                  </p>
                  <Link href="/contatti" className="cta-button primary">
                    Contattaci
                  </Link>
                </div>
              </div>
              
              <div className="cta-quote">
                <p>"L'intelligenza artificiale è troppo importante per lasciarla solo agli esperti. È tempo che tutti possano capirla, utilizzarla e partecipare a definirne il futuro."</p>
                <cite>— Il team di AI Meetup</cite>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .project-page {
          background-color: #F5F5F5;
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        
        .section {
          margin-bottom: 6rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section-title {
          font-size: 1.8rem;
          margin-bottom: 2.5rem;
          text-align: center;
          position: relative;
          font-weight: 500;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 3px;
          background-color: #D43D3D;
        }
        
        /* Timeline styles */
        .timeline {
          position: relative;
          padding: 2rem 0;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          height: calc(100% - 4rem);
          width: 2px;
          background-color: rgba(43, 40, 40, 0.1);
          left: 120px;
          top: 2rem;
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-date {
          width: 120px;
          padding-right: 2rem;
          text-align: right;
          font-weight: 500;
          color: #D43D3D;
          position: relative;
        }
        
        .timeline-date::after {
          content: '';
          position: absolute;
          right: -10px;
          top: 8px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #D43D3D;
          z-index: 1;
        }
        
        .timeline-content {
          flex: 1;
          padding-left: 2.5rem;
        }
        
        .timeline-title {
          margin-bottom: 0.8rem;
          font-weight: 500;
          font-size: 1.2rem;
        }
        
        .timeline-text {
          line-height: 1.6;
          color: #2B2828;
        }
        
        /* Mission styles */
        .mission-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        .mission-statement {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 2.5rem;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        
        .statement-text {
          font-size: 1.6rem;
          line-height: 1.5;
          font-weight: 400;
        }
        
        .highlight-text {
          font-weight: 500;
          color: #D43D3D;
        }
        
        .mission-details {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .mission-card {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .mission-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        .mission-title {
          margin-bottom: 1rem;
          font-weight: 500;
          font-size: 1.2rem;
        }
        
        .mission-description {
          line-height: 1.6;
          color: #2B2828;
        }
        
        /* Values styles */
        .values-content {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          align-items: center;
        }
        
        .values-image {
          flex: 1;
          min-width: 300px;
          max-width: 450px;
        }
        
        .values-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        
        .values-list {
          flex: 1;
          min-width: 300px;
        }
        
        .value-item {
          margin-bottom: 2rem;
        }
        
        .value-title {
          display: flex;
          align-items: center;
          margin-bottom: 0.8rem;
          font-size: 1.2rem;
          font-weight: 500;
        }
        
        .value-emoji {
          margin-right: 0.8rem;
          font-size: 1.8rem;
        }
        
        .value-description {
          line-height: 1.6;
          color: #2B2828;
          padding-left: 2.8rem;
        }
        
        /* Impact styles */
        .impact-intro {
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
        }
        
        .impact-intro p {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .impact-card {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .impact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .impact-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        .impact-title {
          margin-bottom: 1rem;
          font-weight: 500;
          font-size: 1.2rem;
        }
        
        .impact-text {
          line-height: 1.6;
          color: #2B2828;
        }
        
        /* CTA styles */
        .cta-box {
          background: linear-gradient(135deg, #2B2828, #444);
          color: white;
          padding: 3.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .cta-title {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .cta-description {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .cta-options {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .cta-option {
          flex: 1;
          min-width: 300px;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
        }
        
        .option-title {
          margin-bottom: 1rem;
          font-weight: 500;
          font-size: 1.2rem;
        }
        
        .option-description {
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        
        .cta-button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
          text-decoration: none;
          font-family: 'Azeret Mono', monospace;
        }
        
        .cta-button.primary {
          background-color: #D43D3D;
          color: white;
          border: none;
        }
        
        .cta-button.primary:hover {
          background-color: #C13434;
          transform: translateY(-3px);
        }
        
        .cta-button.secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .cta-button.secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }
        
        .cta-quote {
          margin-top: 2rem;
          font-style: italic;
          position: relative;
          padding-left: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-quote::before {
          content: '"';
          position: absolute;
          left: 0;
          top: -10px;
          font-size: 3rem;
          line-height: 1;
          font-family: serif;
          opacity: 0.5;
        }
        
        .cta-quote p {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .cta-quote cite {
          display: block;
          margin-top: 1rem;
          opacity: 0.8;
          font-style: normal;
        }
        
        /* Media queries */
        @media (max-width: 768px) {
          .container {
            padding: 3rem 1.5rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .timeline::before {
            left: 80px;
          }
          
          .timeline-date {
            width: 80px;
          }
          
          .timeline-content {
            padding-left: 2rem;
          }
          
          .statement-text {
            font-size: 1.3rem;
          }
          
          .cta-box {
            padding: 2.5rem 1.5rem;
          }
          
          .cta-title {
            font-size: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .timeline {
            padding-left: 1rem;
          }
          
          .timeline::before {
            left: 1rem;
          }
          
          .timeline-item {
            flex-direction: column;
          }
          
          .timeline-date {
            width: auto;
            text-align: left;
            padding-left: 2rem;
            padding-right: 0;
            margin-bottom: 0.5rem;
          }
          
          .timeline-date::after {
            left: 0;
            right: auto;
          }
          
          .timeline-content {
            padding-left: 2rem;
          }
          
          .cta-button {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
}