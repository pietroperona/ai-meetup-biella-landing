import React, { useState } from 'react';

const Roadmap = () => {
  // Dati della roadmap con descrizioni
  const timelineEvents = [
    { 
      date: 'Febbraio 2025', 
      title: 'Partenza attività', 
      status: 'completed',
      description: "Avvio delle attività organizzative e definizione della struttura operativa dell'associazione a livello nazionale.",
      hasDetails: true
    },
    { 
      date: 'Marzo 2025', 
      title: 'Call for partner', 
      status: 'in-progress',
      description: "Lancio della campagna di ricerca partner per creare una rete di collaborazioni a livello nazionale e locale.",
      hasDetails: true
    },
    { 
      date: 'Aprile 2025', 
      title: 'Manifesto Beta 0.1', 
      status: 'completed',
      description: "Pubblicazione della prima versione del manifesto con gli intenti e gli obiettivi strategici della community.",
      hasDetails: true
    },
    { 
      date: 'Aprile 2025', 
      title: 'Firma AI Pact EU Commission', 
      status: 'in-progress',
      description: `Adesione all'<a href="https://digital-strategy.ec.europa.eu/it/policies/ai-pact" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">iniziativa europea</a> che promuove l'implementazione responsabile della normativa sull'IA e l'etica digitale. Adesione al Pillar I e II.`,
      hasDetails: true
    },
    { 
      date: 'Maggio 2025', 
      title: 'Primo consiglio direttivo', 
      status: 'upcoming',
      hasDetails: false
    },
    { 
      date: 'Maggio 2025', 
      title: 'Call for sponsor', 
      status: 'upcoming',
      description: "Apertura delle candidature per le aziende interessate a supportare le attività e gli eventi della community.",
      hasDetails: true
    },
    { 
      date: 'Settembre 2025', 
      title: 'Primo meetup (Biella)', 
      status: 'upcoming',
      description: "Organizzazione del primo evento pubblico della community nella città di Biella, con focus sull'IA applicata.",
      hasDetails: true
    },
    { 
      date: 'Novembre 2025', 
      title: 'Primo meetup (Milano)', 
      status: 'upcoming',
      description: "Espansione delle attività con il primo evento nella città di Milano, punto di partenza per la rete nazionale.",
      hasDetails: true
    }
  ];

  // Stato per tenere traccia degli elementi espansi
  const [expandedItems, setExpandedItems] = useState({});

  // Funzione per cambiare lo stato di espansione di un elemento
  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="roadmap-section">
      <div className="roadmap-container">
        <h2 className="roadmap-title">La nostra roadmap</h2>
        
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`timeline-item ${event.status}`}>
              <div className="timeline-marker">
                <div className="marker-outer">
                  <div className="marker-inner"></div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="event-header">
                  <div className="event-date">{event.date}</div>
                  <div className="event-title">{event.title}</div>
                  {event.hasDetails && (
                    <button 
                      className={`expand-button ${expandedItems[index] ? 'expanded' : ''}`}
                      onClick={() => toggleExpand(index)}
                      aria-expanded={expandedItems[index]}
                      aria-label={expandedItems[index] ? "Nascondi dettagli" : "Mostra dettagli"}
                    >
                      {expandedItems[index] ? '−' : '+'}
                    </button>
                  )}
                </div>
                
                <div className="event-status">
                  {event.status === 'completed' && (
                    <span className="status-badge completed">Completato</span>
                  )}
                  {event.status === 'in-progress' && (
                    <span className="status-badge in-progress">In corso</span>
                  )}
                  {event.status === 'upcoming' && (
                    <span className="status-badge upcoming">In arrivo</span>
                  )}
                </div>
                
                {event.hasDetails && (
                  <div className={`event-description ${expandedItems[index] ? 'visible' : ''}`}>
                    <p dangerouslySetInnerHTML={{ __html: event.description }} />
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <div className="timeline-line"></div>
        </div>
      </div>
      
      <style jsx>{`
        .roadmap-section {
          padding: 4rem 0;
          margin: 0 auto;
          width: 100%;
          background-color: #F5F5F5;
        }
        
        .roadmap-container {
          padding: 3rem 2rem;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        
        .roadmap-title {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 3.5rem;
          font-weight: 500;
          position: relative;
        }
        
        .roadmap-title:after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 3px;
          background-color: #D43D3D;
        }
        
        .timeline {
          position: relative;
          padding: 1rem 0;
        }
        
        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 1.25rem;
          width: 2px;
          background-color: rgba(43, 40, 40, 0.15);
          transform: translateX(-50%);
          z-index: 1;
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 2;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-item:after {
          content: '';
          position: absolute;
          top: 1.8rem;
          left: 1.25rem;
          height: calc(100% + 2.5rem);
          width: 2px;
          z-index: 1;
        }
        
        .timeline-item.completed:after {
          background-color: #4BB543;
        }
        
        .timeline-item.in-progress:after {
          background-color: #F2C94C;
        }
        
        .timeline-marker {
          flex: 0 0 2.5rem;
          position: relative;
          display: flex;
          justify-content: center;
        }
        
        .marker-outer {
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 2;
        }
        
        .timeline-item.completed .marker-outer {
          background-color: #4BB543; /* Verde per completato */
        }
        
        .timeline-item.in-progress .marker-outer {
          background-color: #F2C94C; /* Giallo per in corso */
        }
        
        .timeline-item.upcoming .marker-outer {
          background-color: #2B2828;
          opacity: 0.7;
        }
        
        .marker-inner {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background-color: #F5F5F5;
        }
        
        .timeline-content {
          flex: 1;
          background-color: white;
          padding: 1.25rem 1.5rem;
          border-radius: 6px;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.07);
          margin-left: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }
        
        /* Rimuovo l'elemento triangolare che sporge */
        /* .timeline-content:before {
          content: '';
          position: absolute;
          left: -0.75rem;
          top: 1rem;
          width: 1.5rem;
          height: 1.5rem;
          background-color: white;
          transform: rotate(45deg);
          border-radius: 2px;
          z-index: -1;
          box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.04);
        } */
        
        
        .timeline-item.completed .timeline-content {
          border-left: 4px solid #4BB543; /* Verde per completato */
        }
        
        .timeline-item.in-progress .timeline-content {
          border-left: 4px solid #F2C94C; /* Giallo per avviato */
        }
        
        .timeline-item.upcoming .timeline-content {
          border-left: 4px solid #2B2828;
          opacity: 0.9;
        }
        
        .event-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          margin-bottom: 0.75rem;
        }
        
        .event-date {
          font-size: 0.9rem;
          font-weight: 500;
          color: #2B2828;
          opacity: 0.8;
          margin-bottom: 0.5rem;
          flex: 0 0 100%;
        }
        
        .timeline-item.completed .event-date {
          color: #4BB543; /* Verde per completato */
          opacity: 1;
        }
        
        .timeline-item.in-progress .event-date {
          color: #F2C94C; /* Giallo per avviato */
          opacity: 1;
        }
        
        .event-title {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          margin-right: auto;
          flex: 1;
        }
        
        .expand-button {
          background: none;
          border: 1px solid rgba(43, 40, 40, 0.15);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: bold;
          color: #2B2828;
          transition: all 0.2s ease;
          margin-left: 10px;
          background-color: rgba(0, 0, 0, 0.05);
          padding-bottom: 4px; /* Aggiustamento per centrare meglio il simbolo + */
        }
        
        .expand-button:hover {
          background-color: rgba(0, 0, 0, 0.1);
          transform: scale(1.1);
        }
        
        .expand-button.expanded {
          transform: rotate(0deg);
          background-color: rgba(212, 61, 61, 0.15);
          color: #D43D3D;
          border-color: rgba(212, 61, 61, 0.3);
        }
        
        .event-status {
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }
        
        .status-badge {
          display: inline-block;
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-weight: 500;
        }
        
        .status-badge.completed {
          background-color: rgba(75, 181, 67, 0.1);
          color: #4BB543;
        }
        
        .status-badge.in-progress {
          background-color: rgba(242, 201, 76, 0.1);
          color: #D4A03D;
        }
        
        .status-badge.upcoming {
          background-color: rgba(43, 40, 40, 0.1);
          color: #2B2828;
        }
        
        .event-description {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.3s ease;
          margin-top: 0;
          border-top: 1px solid transparent;
        }
        
        .event-description.visible {
          max-height: 200px;
          opacity: 1;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .event-description p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #2B2828;
          opacity: 0.9;
        }
        
        /* Effetto hover */
        .timeline-item:hover .timeline-content {
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-item:hover .marker-outer {
          transform: scale(1.1);
        }
        
        /* Media query per schermi più piccoli */
        @media (max-width: 600px) {
          .roadmap-container {
            padding: 2rem 1rem;
          }
          
          .roadmap-title {
            font-size: 1.4rem;
            margin-bottom: 2.5rem;
          }
          
          .timeline-line {
            left: 1rem;
          }
          
          .timeline-marker {
            flex: 0 0 2rem;
          }
          
          .marker-outer {
            width: 1.5rem;
            height: 1.5rem;
          }
          
          .marker-inner {
            width: 0.4rem;
            height: 0.4rem;
          }
          
          .timeline-content {
            padding: 1rem;
            margin-left: 1rem;
          }
          
          .event-title {
            font-size: 1rem;
          }
          
          .timeline-item:after {
            left: 1rem;
          }
          
          .expand-button {
            width: 24px;
            height: 24px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Roadmap;