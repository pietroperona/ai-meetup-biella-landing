// components/Manifesto.js
import React, { useEffect, useRef } from 'react';

const Manifesto = () => {
  const manifestoRef = useRef(null);
  
  // Fade-in effect when scrolling to the manifesto
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
    
    if (manifestoRef.current) {
      observer.observe(manifestoRef.current);
    }
    
    return () => {
      if (manifestoRef.current) {
        observer.unobserve(manifestoRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={manifestoRef} className="manifesto-section">
      <div className="manifesto-container">
        <div className="title-wrapper">
          <h2 className="manifesto-title">Il nostro manifesto</h2>
          <div className="title-underline"></div>
          <h4 className="manifesto-subtitle">AI Meetup Italia</h4>
        </div>
        
        <div className="manifesto-content">
          <p>L'intelligenza artificiale è già qui.<br />
          Nelle nostre ricerche, nei consigli che riceviamo, nelle scelte che facciamo.<br />
          Non possiamo ignorarla. Possiamo capirla. <span className="highlight">Insieme</span>.</p>
          
          <p>Crediamo che <span className="highlight">conoscere l'AI sia un atto di cittadinanza attiva</span>.<br />
          Per questo portiamo il confronto nei territori, tra persone vere, fuori dalle bolle digitali.</p>
          
          <p>Parliamo con tutti:<br />
          studenti, esperti, freelance, artigiani, imprenditori, genitori, insegnanti, curiosi.<br />
          <span className="highlight">Se vuoi capire, sperimentare e condividere: sei dei nostri</span>.</p>
          
          <p>Scegliamo un'AI europea, etica, trasparente, accessibile.<br />
          Sosteniamo l'<a href="https://digital-strategy.ec.europa.eu/it/policies/ai-pact" target="_blank" rel="noopener noreferrer" className="ai-pact-link"><span className="highlight-green">AI Pact dell'Unione Europea</span></a>.<br />
          Perché servono scelte coraggiose per costruire fiducia.</p>
          
          <p>Facciamo domande.<br />
          Sperimentiamo strumenti.<br />
          Coltiviamo idee.<br />
          Un meetup alla volta.</p>
          
          <p className="manifesto-conclusion"><span className="highlight">AI Meetup Italia:<br />Dove l'intelligenza artificiale incontra le persone</span>.</p>
        </div>
      </div>
      
      <style jsx>{`
        .manifesto-section {
          padding: 3rem 0;
          margin: 0 auto;
          width: 100%;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .manifesto-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .manifesto-container {
          background-color: white;
          padding: 3rem 2rem;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          max-width: 900px;
          margin: 0 auto;
        }
        
        .title-wrapper {
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .manifesto-title {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
          font-weight: 500;
          display: inline-block;
        }
        
        .title-underline {
          width: 60px;
          height: 3px;
          background-color: #D43D3D;
          margin: 0 auto;
          margin-bottom: 1.2rem;
        }
        
        .manifesto-subtitle {
          font-size: 1rem;
          font-weight: normal;
          opacity: 0.7;
        }
        
        .manifesto-content {
          font-size: 1rem;
          line-height: 1.7;
        }
        
        .manifesto-content p {
          margin-bottom: 1.5rem;
        }
        
        .highlight {
          position: relative;
          font-weight: 500;
          z-index: 1;
        }
        
        .highlight:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(212, 61, 61, 0.2);
          z-index: -1;
        }
        
        .highlight-green {
          position: relative;
          font-weight: 500;
          z-index: 1;
        }
        
        .highlight-green:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(75, 181, 67, 0.2);
          z-index: -1;
          transition: background-color 0.2s ease;
        }
        
        .ai-pact-link {
          text-decoration: none;
          color: inherit;
        }
        
        .ai-pact-link:hover .highlight-green:after {
          background-color: rgba(75, 181, 67, 0.4);
        }
        
        .manifesto-conclusion {
          margin-top: 2rem;
          font-size: 1.1rem;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .manifesto-section {
            padding: 2rem 1rem;
          }
          
          .manifesto-container {
            padding: 2rem 1.5rem;
          }
          
          .manifesto-title {
            font-size: 1.4rem;
            margin-bottom: 0.75rem;
          }
          
          .title-underline {
            width: 50px;
            height: 3px;
            margin-bottom: 1rem;
          }
        }
        
        @media (max-width: 600px) {
          .manifesto-container {
            padding: 1.75rem 1.25rem;
          }
          
          .manifesto-title {
            font-size: 1.3rem;
            margin-bottom: 0.6rem;
          }
          
          .title-underline {
            width: 40px;
            height: 2px;
            margin-bottom: 0.8rem;
          }
          
          .manifesto-content {
            font-size: 0.9rem;
          }
          
          .manifesto-conclusion {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Manifesto;