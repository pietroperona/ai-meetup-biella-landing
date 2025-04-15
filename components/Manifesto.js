// components/Manifesto.js
import React, { useEffect, useRef } from 'react';

const Manifesto = () => {
  const manifestoRef = useRef(null);
  
  // Simple fade-in effect when scrolling to the manifesto
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
        <h2 className="manifesto-title">Il nostro manifesto</h2><h4 className="manifesto-subtitle">v0.1 Beta</h4>
        
        <div className="manifesto-content">
          <p>L'intelligenza artificiale è già parte della nostra vita.<br />
          La conoscenza deve superare il timore: capiamola insieme.<br />
          Non è riservata a pochi esperti: riguarda ognuno di noi.</p>
          
          <p>Crediamo che <span className="highlight">sapere come funziona l'AI sia fare cittadinanza attiva.</span><br />
          Siamo convinti che <span className="highlight">condividere conoscenza nei territori</span> sia il primo passo per usarla in modo consapevole.</p>
          
          <p><span className="highlight">Parliamo con tutti</span>:<br />
          esperti, studenti, imprenditori, artigiani, genitori, sindaci, docenti, freelance, curiosi.<br />
          Se vuoi capire e condividere, sei dei nostri.</p>
          
          <p><span className="highlight">Scegliamo l'AI Europea.</span><br />
          Un'AI etica, trasparente, accessibile, al servizio delle persone.<br />
          Per questo promuoviamo l'<a href="https://digital-strategy.ec.europa.eu/it/policies/ai-pact" target="_blank" rel="noopener noreferrer" className="ai-pact-link"><span className="highlight-green">AI Pact dell'Unione Europea</span></a>:<br />
          perché servono scelte chiare per generare fiducia.</p>
          
          <p>Facciamo domande.<br />
          Sperimentiamo strumenti.<br />
          Condividiamo idee.<br />
          Un meetup alla volta.</p>
          
          <p className="manifesto-conclusion"><span className="highlight">AI Meetup è dove la tecnologia incontra la comunità.</span><br /></p>
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
          max-width: 900px; /* Dimensione ottimale per desktop */
          margin: 0 auto;
        }
        
        .manifesto-title {
          text-align: center;
          font-size: 1.6rem;
          margin-bottom: 2.5rem;
          font-weight: 500;
          position: relative;
        }
        
        .manifesto-title:after {
          content: '';
          position: absolute;
          bottom: -0.8rem;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #D43D3D;
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
        }
        
        @media (max-width: 600px) {
          .manifesto-section {
            padding: 2rem 1rem;
          }
          
          .manifesto-container {
            padding: 2rem 1.5rem;
          }
          
          .manifesto-title {
            font-size: 1.3rem;
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