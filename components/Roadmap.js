import React, { useEffect, useRef } from 'react';

const Roadmap = () => {
  const roadmapRef = useRef(null);

  const milestones = [
    {
      date: 'Settembre 2025',
      title: 'Kickoff del team',
      description: 'Inizio delle attività organizzative per il team di AI Meetup.',
      status: 'completed'
    },
    {
      date: 'Ottobre 2025',
      title: 'AI Meetup #0 · Biella',
      description: 'Primo meetup inaugurale con community locale e presentazione del progetto.',
      status: 'completed'
    },
    {
      date: '15 gennaio 2026',
      title: 'Meetup #1 · Light Talk + aperitivo',
      description: 'Talk, Q&A e networking aperto con ingresso libero.',
      status: 'upcoming'
    }
  ];

  useEffect(() => {
    const section = roadmapRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={roadmapRef} className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <p className="eyebrow">Roadmap</p>
          <h2 className="headline">Il percorso di AI Meetup</h2>
          <p className="lead">
            Una timeline chiara con le tappe chiave che portano dalla fase organizzativa ai primi eventi aperti.
          </p>
        </div>

        <div className="roadmap-track">
          {milestones.map((item, index) => (
            <div key={item.date} className={`roadmap-item ${item.status}`}>
              <div className="marker">
                <span className="dot" />
              </div>

              <div className="card">
                <div className="date">{item.date}</div>
                <div className="title">{item.title}</div>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .roadmap-section {
          width: 100%;
          padding: 5rem 0;
          background: radial-gradient(circle at 20% 20%, rgba(212, 61, 61, 0.08), transparent 30%),
            radial-gradient(circle at 80% 10%, rgba(43, 40, 40, 0.08), transparent 25%),
            #f7f6f2;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .roadmap-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .roadmap-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .roadmap-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .eyebrow {
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(43, 40, 40, 0.65);
          margin: 0 0 0.5rem;
          font-weight: 600;
        }

        .headline {
          font-size: 2.2rem;
          margin: 0 0 0.75rem;
          color: #2b2828;
        }

        .lead {
          max-width: 640px;
          margin: 0 auto;
          color: rgba(43, 40, 40, 0.75);
          line-height: 1.6;
        }

        .roadmap-track {
          display: flex;
          gap: 1.75rem;
          position: relative;
          padding: 1.5rem 0.25rem 0.5rem;
          overflow: visible;
          scroll-snap-type: none;
          align-items: stretch;
        }

        .roadmap-track::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 1.7rem;
          height: 2px;
          background: linear-gradient(90deg, rgba(212, 61, 61, 0.5), rgba(43, 40, 40, 0.12));
          border-radius: 999px;
          z-index: 0;
        }

        .roadmap-item {
          flex: 1 1 0;
          min-width: 260px;
          max-width: 360px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        .roadmap-item.completed .dot {
          border-color: #2d7a2a;
          box-shadow: 0 6px 18px rgba(45, 122, 42, 0.25);
        }

        .roadmap-item.upcoming .dot {
          border-color: #d43d3d;
          box-shadow: 0 6px 18px rgba(212, 61, 61, 0.2);
          opacity: 0.9;
        }

        .marker {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0 0.5rem;
          height: 20px;
          z-index: 1;
          width: 100%;
        }

        .dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid #d43d3d;
          background: #fff;
          box-shadow: 0 6px 18px rgba(212, 61, 61, 0.25);
          z-index: 2;
        }

        .connector {
          display: none;
        }

        .card {
          background: white;
          border-radius: 16px;
          padding: 1.25rem 1.35rem;
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(43, 40, 40, 0.06);
          display: grid;
          gap: 0.4rem;
          height: 100%;
          min-height: 220px;
          box-sizing: border-box;
          width: 100%;
          align-content: start;
        }

        .roadmap-item.completed .card {
          border-color: rgba(45, 122, 42, 0.14);
        }

        .roadmap-item.upcoming .card {
          border-color: rgba(212, 61, 61, 0.2);
          box-shadow: 0 16px 32px rgba(212, 61, 61, 0.08);
          background: linear-gradient(135deg, rgba(212, 61, 61, 0.04), rgba(255, 255, 255, 0.9));
        }

        .date {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.75rem;
          background: rgba(212, 61, 61, 0.08);
          color: #d43d3d;
          font-weight: 700;
          border-radius: 999px;
          font-size: 0.9rem;
          letter-spacing: 0.3px;
          width: fit-content;
        }

        .title {
          font-size: 1.3rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          color: #2b2828;
          line-height: 1.35;
        }

        .description {
          margin: 0;
          color: rgba(43, 40, 40, 0.72);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          .headline {
            font-size: 1.9rem;
          }

        }

        @media (max-width: 640px) {
          .roadmap-section {
            padding: 4rem 0;
          }

          .headline {
            font-size: 1.65rem;
          }

          .lead {
            font-size: 0.95rem;
          }

          .roadmap-track {
            position: relative;
            display: flex;
            padding: 0.25rem 0.25rem 0.75rem;
            flex-direction: column;
            gap: 1.25rem;
          }

          .roadmap-track::before {
            top: 0;
            bottom: 0;
            left: 14px;
            right: auto;
            width: 2px;
            height: auto;
            background: linear-gradient(180deg, rgba(212, 61, 61, 0.5), rgba(43, 40, 40, 0.12));
          }

          .roadmap-item {
            width: 100%;
            flex-direction: row;
            gap: 0.75rem;
            max-width: none;
          }

          .marker {
            padding: 0.5rem 0 0.35rem;
            align-items: center;
            justify-content: center;
            width: 28px;
          }

          .connector {
            margin-left: 0;
            width: 3px;
            height: 40px;
            background: linear-gradient(180deg, rgba(212, 61, 61, 0.65), rgba(43, 40, 40, 0.15));
          }

          .card {
            padding: 1.1rem 1.1rem;
            min-height: 200px;
            width: 100%;
          }

          .title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Roadmap;
