// pages/diventa-partner.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function DiventaPartner() {
  // Riferimenti per le animazioni al momento dello scroll
  const introRef = useRef(null);
  const sponsorRef = useRef(null);
  const communityRef = useRef(null);
  const comparisonRef = useRef(null);
  const ctaRef = useRef(null);

  // State per la tabella di confronto
  const [activeTab, setActiveTab] = useState('sponsor');

  // Configurazione delle animazioni allo scroll
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
    
    const elements = [introRef.current, sponsorRef.current, communityRef.current, comparisonRef.current, ctaRef.current];
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
        <title>Diventa Partner | AI Meetup - La community italiana sull'Intelligenza Artificiale</title>
        <meta name="description" content="Diventa partner di AI Meetup e contribuisci alla diffusione della conoscenza sull'intelligenza artificiale in Italia. Scopri come diventare sponsor nazionale o community partner locale." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Diventa Partner | AI Meetup" />
        <meta property="og:description" content="Diventa partner di AI Meetup e contribuisci alla diffusione della conoscenza sull'intelligenza artificiale in Italia. Scopri come diventare sponsor nazionale o community partner locale." />
        <meta property="og:url" content="https://biella.aimeetup.it/diventa-partner" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://biella.aimeetup.it/social-card.png" />
      </Head>

      <div className="partner-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Diventa Partner</h1>
            <p className="hero-description">
              Unisciti al progetto che sta rendendo l'intelligenza artificiale <span className="highlight">accessibile a tutti</span>.
            </p>
          </div>
        </div>

        <div className="container">
          {/* Sezione Introduttiva */}
          <section ref={introRef} className="intro-section fade-in">
            <h2 className="section-title">Due modi per contribuire al futuro</h2>
            
            <div className="intro-content">
              <p className="intro-text">
                AI Meetup è un'iniziativa aperta che cresce grazie al contributo di diverse realtà: aziende, organizzazioni, enti e persone che credono nell'importanza di rendere l'intelligenza artificiale accessibile a tutti.
              </p>
              
              <p className="intro-text">
                Abbiamo creato due tipi di partnership, per dare la possibilità a chiunque di contribuire secondo le proprie possibilità e ambizioni.
              </p>
              
              <div className="partner-types">
                <div className="partner-type-card" onClick={() => document.getElementById('sponsor-section').scrollIntoView({ behavior: 'smooth' })}>
                  <div className="partner-type-icon">🌍</div>
                  <h3 className="partner-type-title">Sponsor Nazionali</h3>
                  <p className="partner-type-description">
                    Supporta il progetto AI Meetup a livello nazionale, contribuendo alla sua crescita e diffusione in tutta Italia.
                  </p>
                  <button className="partner-type-button">Scopri di più</button>
                </div>
                
                <div className="partner-type-card" onClick={() => document.getElementById('community-section').scrollIntoView({ behavior: 'smooth' })}>
                  <div className="partner-type-icon">🏙️</div>
                  <h3 className="partner-type-title">Community Partner</h3>
                  <p className="partner-type-description">
                    Supporta lo sviluppo locale di AI Meetup nella tua città, contribuendo a creare una community attiva sul territorio.
                  </p>
                  <button className="partner-type-button">Scopri di più</button>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione Sponsor Nazionali */}
          <section id="sponsor-section" ref={sponsorRef} className="sponsor-section fade-in">
            <h2 className="section-title">Sponsor Nazionali</h2>
            
            <div className="sponsor-content">
              <div className="sponsor-image">
                <img src="/images/sponsor-national.jpg" alt="Partnership nazionale con AI Meetup" className="partner-image" />
              </div>
              
              <div className="sponsor-text">
                <h3 className="sponsor-subtitle">Contribuisci alla crescita dell'AI in Italia</h3>
                
                <p className="sponsor-description">
                  Diventare Sponsor Nazionale di AI Meetup significa supportare un'iniziativa strategica che mira a diffondere la conoscenza dell'intelligenza artificiale in tutta Italia, creando consapevolezza e competenze in un settore cruciale per il futuro.
                </p>
                
                <div className="benefits-list">
                  <h4 className="benefits-title">Cosa offriamo ai nostri sponsor:</h4>
                  <ul className="benefits">
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Visibilità nazionale</strong>: Il tuo brand presente in tutti gli eventi e materiali di comunicazione di AI Meetup in Italia
                      </div>
                    </li>
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Network qualificato</strong>: Accesso alla rete di professionisti, aziende e appassionati di AI in tutta Italia
                      </div>
                    </li>
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Speaker opportunity</strong>: Possibilità di partecipare come relatori agli eventi nazionali
                      </div>
                    </li>
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Content marketing</strong>: Creazione di contenuti congiunti per promuovere iniziative legate all'AI
                      </div>
                    </li>
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Responsabilità sociale</strong>: Associare il tuo brand a un'iniziativa con forte impatto sociale ed educativo
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="involvement-levels">
                  <h4 className="involvement-title">Livelli di coinvolgimento:</h4>
                  <div className="involvement-items">
                    <div className="involvement-item">
                      <div className="involvement-header">
                        <h5>Silver Partner</h5>
                        <div className="involvement-tag">Base</div>
                      </div>
                      <p>Visibilità e presenza del brand in tutti i materiali di comunicazione</p>
                    </div>
                    
                    <div className="involvement-item">
                      <div className="involvement-header">
                        <h5>Gold Partner</h5>
                        <div className="involvement-tag">Avanzato</div>
                      </div>
                      <p>Visibilità, interventi agli eventi e co-creazione di contenuti</p>
                    </div>
                    
                    <div className="involvement-item">
                      <div className="involvement-header">
                        <h5>Platinum Partner</h5>
                        <div className="involvement-tag">Premium</div>
                      </div>
                      <p>Partnership strategica con coinvolgimento diretto nello sviluppo del progetto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione Community Partner */}
          <section id="community-section" ref={communityRef} className="community-section fade-in">
            <h2 className="section-title">Community Partner</h2>
            
            <div className="community-content">
              <div className="community-text">
                <h3 className="community-subtitle">Porta AI Meetup nella tua città</h3>
                
                <p className="community-description">
                  Diventare Community Partner significa assumere un ruolo attivo nello sviluppo di AI Meetup a livello locale, contribuendo a creare una community viva e partecipativa nella tua città, con il supporto e le risorse del network nazionale.
                </p>
                
                <div className="benefits-list">
                  <h4 className="benefits-title">Cosa offriamo ai nostri community partner:</h4>
                  <ul className="benefits">
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Format collaudato</strong>: Accesso a un format di eventi già strutturato e pronto per essere implementato
                      </div>
                    </li>
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Materiali e risorse</strong>: Supporto con materiali di comunicazione, contenuti e best practice
                      </div>
                    </li>
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Rete nazionale</strong>: Far parte di un network in crescita, con opportunità di scambio e collaborazione
                      </div>
                    </li>
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Visibilità locale</strong>: Posizionarsi come punto di riferimento per l'AI nella propria città
                      </div>
                    </li>
                    <li className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">
                        <strong>Autonomia gestionale</strong>: Libertà di organizzare gli eventi secondo le specificità locali
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="profile-box">
                  <h4 className="profile-title">Chi può diventare Community Partner?</h4>
                  <ul className="profile-list">
                    <li>Spazi di coworking e innovation hub</li>
                    <li>Associazioni tecnologiche e culturali</li>
                    <li>Aziende con interesse nella formazione e nell'innovazione</li>
                    <li>Università e istituti di formazione</li>
                    <li>Enti pubblici e amministrazioni locali</li>
                    <li>Gruppi di professionisti e appassionati di tecnologia</li>
                  </ul>
                </div>
              </div>
              
              <div className="community-image">
                <img src="/images/community-partner.jpg" alt="Community partner locale di AI Meetup" className="partner-image" />
              </div>
            </div>
          </section>

          {/* Tabella Comparativa */}
          <section ref={comparisonRef} className="comparison-section fade-in">
            <h2 className="section-title">Confronto tra le partnership</h2>
            
            <div className="comparison-tabs">
              <button 
                className={`tab-button ${activeTab === 'sponsor' ? 'active' : ''}`}
                onClick={() => setActiveTab('sponsor')}
              >
                Sponsor Nazionali
              </button>
              <button 
                className={`tab-button ${activeTab === 'community' ? 'active' : ''}`}
                onClick={() => setActiveTab('community')}
              >
                Community Partner
              </button>
            </div>
            
            <div className="comparison-table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Caratteristica</th>
                    <th className={activeTab === 'sponsor' ? 'highlight-column' : ''}>Sponsor Nazionale</th>
                    <th className={activeTab === 'community' ? 'highlight-column' : ''}>Community Partner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ambito geografico</td>
                    <td className={activeTab === 'sponsor' ? 'highlight-column' : ''}>Tutto il territorio nazionale</td>
                    <td className={activeTab === 'community' ? 'highlight-column' : ''}>Specifico territorio locale</td>
                  </tr>
                  <tr>
                    <td>Impegno richiesto</td>
                    <td className={activeTab === 'sponsor' ? 'highlight-column' : ''}>Principalmente economico</td>
                    <td className={activeTab === 'community' ? 'highlight-column' : ''}>Organizzativo e logistico</td>
                  </tr>
                  <tr>
                    <td>Visibilità</td>
                    <td className={activeTab === 'sponsor' ? 'highlight-column' : ''}>Nazionale, su tutti gli eventi</td>
                    <td className={activeTab === 'community' ? 'highlight-column' : ''}>Locale, come organizzatore</td>
                  </tr>
                  <tr>
                    <td>Ruolo</td>
                    <td className={activeTab === 'sponsor' ? 'highlight-column' : ''}>Supporto al progetto</td>
                    <td className={activeTab === 'community' ? 'highlight-column' : ''}>Implementazione locale</td>
                  </tr>
                  <tr>
                    <td>Coinvolgimento</td>
                    <td className={activeTab === 'sponsor' ? 'highlight-column' : ''}>Partecipazione come relatori</td>
                    <td className={activeTab === 'community' ? 'highlight-column' : ''}>Organizzazione completa</td>
                  </tr>
                  <tr>
                    <td>Ideale per</td>
                    <td className={activeTab === 'sponsor' ? 'highlight-column' : ''}>Aziende con interesse nell'AI a livello nazionale</td>
                    <td className={activeTab === 'community' ? 'highlight-column' : ''}>Organizzazioni con forte presenza locale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Call to Action */}
          <section ref={ctaRef} className="cta-section fade-in">
            <div className="cta-box">
              <h2 className="cta-title">Costruiamo insieme il futuro dell'AI in Italia</h2>
              <p className="cta-description">
                Sei interessato a diventare partner di AI Meetup? Contattaci per discutere delle possibilità di collaborazione e ricevere maggiori informazioni.
              </p>
              <div className="cta-buttons">
                <Link href="/contatti" className="cta-button primary">Contattaci</Link>
                <a href="mailto:partnership@aimeetup.it" className="cta-button secondary">
                  partnership@aimeetup.it
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .partner-page {
          background-color: #F5F5F5;
        }
        
        .hero-section {
          background: linear-gradient(to right, #2B2828, #555);
          color: white;
          padding: 6rem 2rem;
          text-align: center;
        }
        
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .hero-description {
          font-size: 1.3rem;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .highlight {
          position: relative;
          display: inline-block;
          z-index: 1;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background-color: rgba(212, 61, 61, 0.4);
          z-index: -1;
        }
        
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem;
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
        
        /* Sezioni generali */
        .intro-section,
        .sponsor-section,
        .community-section,
        .comparison-section,
        .cta-section {
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .intro-section.visible,
        .sponsor-section.visible,
        .community-section.visible,
        .comparison-section.visible,
        .cta-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Sezione intro */
        .intro-text {
          font-size: 1.1rem;
          line-height: 1.7;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
        }
        
        .partner-types {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .partner-type-card {
          background-color: white;
          padding: 2.5rem 2rem;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          flex: 1;
          min-width: 300px;
          max-width: 500px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        
        .partner-type-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .partner-type-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .partner-type-title {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .partner-type-description {
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .partner-type-button {
          background-color: transparent;
          border: 2px solid #2B2828;
          color: #2B2828;
          padding: 0.8rem 1.5rem;
          font-size: 0.9rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
          font-family: 'Azeret Mono', monospace;
        }
        
        .partner-type-button:hover {
          background-color: #2B2828;
          color: white;
        }
        
        /* Sezioni sponsor e community */
        .sponsor-content,
        .community-content {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          align-items: flex-start;
        }
        
        .sponsor-text,
        .community-text {
          flex: 1;
          min-width: 300px;
        }
        
        .sponsor-image,
        .community-image {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
        }
        
        .partner-image {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        .sponsor-subtitle,
        .community-subtitle {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
          color: #D43D3D;
        }
        
        .sponsor-description,
        .community-description {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        
        /* Lista benefici */
        .benefits-title,
        .involvement-title,
        .profile-title {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .benefits {
          list-style: none;
          padding: 0;
          margin-bottom: 2.5rem;
        }
        
        .benefit-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          align-items: flex-start;
        }
        
        .benefit-icon {
          color: #D43D3D;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .benefit-text {
          flex: 1;
          line-height: 1.6;
        }
        
        /* Livelli di coinvolgimento */
        .involvement-items {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .involvement-item {
          background-color: rgba(0, 0, 0, 0.03);
          padding: 1.5rem;
          border-radius: 6px;
          flex: 1;
          min-width: 200px;
        }
        
        .involvement-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.8rem;
        }
        
        .involvement-header h5 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 500;
        }
        
        .involvement-tag {
          background-color: rgba(212, 61, 61, 0.1);
          color: #D43D3D;
          font-size: 0.8rem;
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
        }
        
        .involvement-item p {
          margin: 0;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        
        /* Profilo box */
        .profile-box {
          background-color: rgba(0, 0, 0, 0.03);
          padding: 1.5rem;
          border-radius: 6px;
          margin-bottom: 2rem;
        }
        
        .profile-list {
          list-style: disc;
          padding-left: 1.5rem;
          margin: 0;
        }
        
        .profile-list li {
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }
        
        /* Tabella comparativa */
        .comparison-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .tab-button {
          padding: 0.8rem 1.5rem;
          background-color: transparent;
          border: 2px solid #2B2828;
          color: #2B2828;
          font-size: 0.9rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
          font-family: 'Azeret Mono', monospace;
        }
        
        .tab-button.active {
          background-color: #2B2828;
          color: white;
        }
        
        .comparison-table-container {
          max-width: 100%;
          overflow-x: auto;
          margin-bottom: 2rem;
        }
        
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        }
        
        .comparison-table th,
        .comparison-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .comparison-table th {
          background-color: #2B2828;
          color: white;
          font-weight: 500;
        }
        
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        
        .comparison-table tr:nth-child(even) {
          background-color: rgba(0, 0, 0, 0.02);
        }
        
        .highlight-column {
          background-color: rgba(212, 61, 61, 0.05);
        }
        
        /* Call to Action */
        .cta-box {
          background: linear-gradient(135deg, #D43D3D, #A22E2E);
          color: white;
          padding: 3rem;
          border-radius: 8px;
          text-align: center;
        }
        
        .cta-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .cta-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .cta-button {
          padding: 1rem 2rem;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: transform 0.2s ease, background-color 0.2s ease;
          text-decoration: none;
          font-family: 'Azeret Mono', monospace;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
        }
        
        .cta-button.primary {
          background-color: white;
          color: #D43D3D;
        }
        
        .cta-button.primary:hover {
          background-color: #f0f0f0;
        }
        
        .cta-button.secondary {
          background-color: transparent;
          border: 2px solid white;
          color: white;
        }
        
        .cta-button.secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        /* Media queries */
        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .container {
            padding: 3rem 1.5rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .intro-text {
            font-size: 1rem;
          }
          
          .sponsor-subtitle,
          .community-subtitle {
            font-size: 1.3rem;
          }
          
          .sponsor-description,
          .community-description {
            font-size: 1rem;
          }
          
          .cta-box {
            padding: 2rem 1.5rem;
          }
          
          .cta-title {
            font-size: 1.5rem;
          }
          
          .cta-description {
            font-size: 1rem;
          }
          
          .cta-button {
            width: 100%;
            margin-bottom                      .cta-button {
                        width: 100%;
                        margin-bottom: 1rem; /* Aggiunto margine inferiore per spaziatura su mobile */
                      }
                      
                      .cta-buttons {
                        flex-direction: column; /* Imposta la direzione a colonna per impilare i pulsanti */
                        align-items: center; /* Centra i pulsanti orizzontalmente */
                      }
                    }
                    
                    @media (max-width: 576px) {
                      .partner-types {
                        flex-direction: column;
                        align-items: center;
                      }
                      
                      .partner-type-card {
                        min-width: auto;
                        width: 100%;
                      }
                      
                      .sponsor-content,
                      .community-content {
                        flex-direction: column;
                      }
                      
                      .sponsor-image,
                      .community-image {
                        max-width: 100%;
                      }
                      
                      .involvement-items {
                        flex-direction: column;
                      }
                    }
                  `}</style>
                </Layout>
              );
            }