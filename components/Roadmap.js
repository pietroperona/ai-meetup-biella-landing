import React from 'react';

const Roadmap = () => {
  // Dati della roadmap con nuovo stato "in progress"
  const timelineEvents = [
    { 
      date: 'Febbraio 2025', 
      title: 'Partenza attività', 
      status: 'completed' 
    },
    { 
      date: 'Marzo 2025', 
      title: 'Call for partner', 
      status: 'in-progress' 
    },
    { 
      date: 'Aprile 2025', 
      title: 'Manifesto Beta 0.1', 
      status: 'completed' 
    },
    { 
      date: 'Maggio 2025', 
      title: 'Primo consiglio direttivo', 
      status: 'upcoming' 
    },
    { 
      date: 'Maggio 2025', 
      title: 'Call for sponsor', 
      status: 'upcoming' 
    },
    { 
      date: 'Settembre 2025', 
      title: 'Primo meetup (Biella)', 
      status: 'upcoming' 
    },
    { 
      date: 'Novembre 2025', 
      title: 'Primo meetup (Milano)', 
      status: 'upcoming' 
    }
  ];

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
                <div className="event-date">{event.date}</div>
                <div className="event-title">{event.title}</div>
                <div className="event-status">
                  {event.status === 'completed' && (
                    <span className="status-badge completed">Completato</span>
                  )}
                  {event.status === 'in-progress' && (
                    <span className="status-badge in-progress">Avviato</span>
                  )}
                  {event.status === 'upcoming' && (
                    <span className="status-badge upcoming">In arrivo</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <div className="timeline-line"></div>
        </div>
      </div>
      
      <style jsx>{`
        .roadmap-section {
          padding: 3rem 0;
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
          font-size: 1.6rem;
          margin-bottom: 3.5rem;
          font-weight: 500;
          position: relative;
        }
        
        .roadmap-title:after {
          content: '';
          position: absolute;
          bottom: -0.8rem;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
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
          width: 3px;
          background-color: #2B2828;
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
        
        .timeline-marker {
          flex: 0 0 2.5rem;
          position: relative;
        }
        
        .marker-outer {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .timeline-item.completed .marker-outer {
          background-color: #4BB543; /* Verde per completato */
        }
        
        .timeline-item.in-progress .marker-outer {
          background-color: #F2C94C; /* Giallo per avviato */
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
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          margin-left: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .timeline-content:before {
          content: '';
          position: absolute;
          left: -0.5rem;
          top: 1rem;
          width: 1rem;
          height: 1rem;
          background-color: white;
          transform: rotate(45deg);
        }
        
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
        
        .event-date {
          font-size: 0.9rem;
          font-weight: 500;
          color: #2B2828;
          margin-bottom: 0.5rem;
        }
        
        .timeline-item.completed .event-date {
          color: #4BB543; /* Verde per completato */
        }
        
        .timeline-item.in-progress .event-date {
          color: #F2C94C; /* Giallo per avviato */
        }
        
        .event-title {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        
        .event-status {
          margin-top: 0.75rem;
        }
        
        .status-badge {
          display: inline-block;
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
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
        
        /* Effetto hover */
        .timeline-item:hover .timeline-content {
          transform: translateX(5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        
        .timeline-item:hover .marker-outer {
          transform: scale(1.2);
        }
        
        /* Media query per schermi più piccoli */
        @media (max-width: 600px) {
          .roadmap-container {
            padding: 2rem 1rem;
          }
          
          .roadmap-title {
            font-size: 1.3rem;
            margin-bottom: 2.5rem;
          }
          
          .timeline-line {
            left: 1rem;
          }
          
          .timeline-marker {
            flex: 0 0 2rem;
          }
          
          .marker-outer {
            width: 1.25rem;
            height: 1.25rem;
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
        }
      `}</style>
    </section>
  );
};

export default Roadmap;