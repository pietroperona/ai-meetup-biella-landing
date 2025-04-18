// pages/meetup/biella.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import SubscribeForm from '../../components/SubscribeForm';

export default function MeetupBiella() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Riferimenti per l'animazione al momento dello scroll
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  // Data del primo evento (esempio - da aggiornare con la data effettiva)
  const firstEventDate = new Date('September 15, 2025 18:30:00');
  
  // Calcola il countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = firstEventDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

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
    
    const elements = [infoRef.current, formRef.current, mapRef.current];
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
        <title>AI Meetup Biella | Community sull'Intelligenza Artificiale</title>
        <meta name="description" content="Partecipa agli eventi di AI Meetup a Biella, la community che rende l'intelligenza artificiale accessibile a tutti. Scopri quando e dove si terrà il prossimo incontro." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="AI Meetup Biella | Community sull'Intelligenza Artificiale" />
        <meta property="og:description" content="Partecipa agli eventi di AI Meetup a Biella, la community che rende l'intelligenza artificiale accessibile a tutti. Scopri quando e dove si terrà il prossimo incontro." />
        <meta property="og:url" content="https://biella.aimeetup.it/meetup/biella" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://biella.aimeetup.it/social-card.png" />
      </Head>

      <div className="meetup-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">AI Meetup Biella</h1>
            <p className="hero-description">
              Il primo appuntamento italiano con la community che connette le persone e l'intelligenza artificiale.
            </p>
            
            <div className="hero-cta">
              <Link href="#subscribe" className="cta-button">Iscriviti alla newsletter</Link>
            </div>
            
            <div className="countdown-container">
              <div className="countdown-title">Primo evento tra:</div>
              <div className="countdown">
                <div className="countdown-item">
                  <div className="countdown-number">{countdown.days}</div>
                  <div className="countdown-label">Giorni</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-number">{countdown.hours}</div>
                  <div className="countdown-label">Ore</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-number">{countdown.minutes}</div>
                  <div className="countdown-label">Minuti</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-number">{countdown.seconds}</div>
                  <div className="countdown-label">Secondi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <section ref={infoRef} className="info-section fade-in">
            <h2 className="section-title">Stiamo arrivando a Biella!</h2>
            
            <div className="info-content">
              <div className="info-text">
                <p className="info-intro">
                  Siamo entusiasti di annunciare che il <strong>primo AI Meetup ufficiale</strong> si terrà a <strong>Biella</strong>, città che fa da apripista al nostro progetto di community nazionale.
                </p>
                
                <div className="event-details">
                  <div className="detail-item">
                    <div className="detail-icon">📅</div>
                    <div className="detail-text">
                      <strong>Quando:</strong> 15 settembre 2025, ore 18:30
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">📍</div>
                    <div className="detail-text">
                      <strong>Dove:</strong> Palazzo Ferrero, Corso del Piazzo, 25, Biella
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">💡</div>
                    <div className="detail-text">
                      <strong>Tema:</strong> "Introduzione all'AI: capire le basi per usarla nella vita quotidiana"
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">🎯</div>
                    <div className="detail-text">
                      <strong>Per chi:</strong> Aperto a tutti, dai curiosi ai professionisti
                    </div>
                  </div>
                </div>
                
                <div className="info-description">
                  <h3 className="info-subtitle">Cosa aspettarsi</h3>
                  <p>
                    Ogni incontro di AI Meetup è pensato per essere accessibile, interessante e pratico. Durante l'evento:
                  </p>
                  <ul className="info-list">
                    <li>Introdurremo i concetti base dell'intelligenza artificiale in modo comprensibile</li>
                    <li>Vedremo esempi pratici di applicazione dell'AI nella vita quotidiana e professionale</li>
                    <li>Parleremo dell'evoluzione dell'AI e delle sue prospettive future</li>
                    <li>Ci sarà spazio per domande, networking e scambio di idee</li>
                  </ul>
                  <p>
                    Non è richiesta alcuna conoscenza tecnica preliminare, solo curiosità e voglia di imparare!
                  </p>
                </div>
              </div>
              
              <div className="info-image">
                <img src="/images/biella-panorama.jpg" alt="Panorama di Biella" className="city-image" />
                <div className="image-caption">Biella, prima città italiana ad ospitare AI Meetup</div>
              </div>
            </div>
          </section>

          <section ref={formRef} id="subscribe" className="subscribe-section fade-in">
            <div className="subscribe-box">
              <h2 className="subscribe-title">Ricevi aggiornamenti sul primo Meetup</h2>
              <p className="subscribe-text">
                La data finale e i dettagli dell'evento saranno confermati presto. Iscriviti alla nostra newsletter per rimanere aggiornato e assicurarti un posto.
              </p>
              
              <div className="subscribe-form-container">
                <SubscribeForm />
              </div>
            </div>
          </section>

          <section ref={mapRef} className="map-section fade-in">
            <h2 className="section-title">Dove ci troveremo</h2>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.1290538201!2d8.053492115752767!3d45.56678917910276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478624e2742f5fe3%3A0x1bf8c8c4c8c8c8c8!2sPalazzo%20Ferrero!5e0!3m2!1sit!2sit!4v1617358972961!5m2!1sit!2sit" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                title="Mappa di Palazzo Ferrero, Biella"
                className="map-iframe"
              ></iframe>
            </div>
            
            <div className="location-info">
              <div className="location-address">
                <h3>Palazzo Ferrero</h3>
                <p>Corso del Piazzo, 25<br />13900 Biella BI</p>
              </div>
              
              <div className="location-directions">
                <h3>Come arrivare</h3>
                <p>Il Palazzo Ferrero è facilmente raggiungibile dal centro città. Dalla stazione ferroviaria, prendere il bus n.1 fino alla fermata "Piazzo" o utilizzare la funicolare che collega la città bassa con il borgo storico del Piazzo.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .meetup-page {
          background-color: #F5F5F5;
        }
        
        .hero-section {
          background: linear-gradient(to right, #2B2828, #555);
          background-size: cover;
          position: relative;
          color: white;
          padding: 6rem 2rem;
          text-align: center;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .hero-description {
          font-size: 1.3rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .hero-cta {
          margin-bottom: 3rem;
        }
        
        .cta-button {
          display: inline-block;
          background-color: #D43D3D;
          color: white;
          padding: 1rem 2rem;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s ease, transform 0.2s ease;
          text-decoration: none;
          font-family: 'Azeret Mono', monospace;
        }
        
        .cta-button:hover {
          background-color: #C13434;
          transform: translateY(-3px);
        }
        
        .countdown-container {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 8px;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .countdown-title {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }
        
        .countdown {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .countdown-item {
          min-width: 70px;
        }
        
        .countdown-number {
          font-size: 2.5rem;
          font-weight: 700;
          background-color: rgba(255, 255, 255, 0.15);
          padding: 0.5rem;
          border-radius: 6px;
          margin-bottom: 0.5rem;
        }
        
        .countdown-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .container {
          max-width: 1000px;
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
        
        /* Info section styles */
        .info-section {
          margin-bottom: 5rem;
        }
        
        .info-content {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
        }
        
        .info-text {
          flex: 1;
          min-width: 300px;
        }
        
        .info-intro {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        
        .event-details {
          margin-bottom: 2rem;
        }
        
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }
        
        .detail-icon {
          font-size: 1.5rem;
        }
        
        .detail-text {
          flex: 1;
        }
        
        .info-subtitle {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .info-list {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .info-list li {
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }
        
        .info-image {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
        }
        
        .city-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        .image-caption {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        /* Subscribe section styles */
        .subscribe-section {
          margin-bottom: 5rem;
        }
        
        .subscribe-box {
          background-color: white;
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          text-align: center;
        }
        
        .subscribe-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .subscribe-text {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .subscribe-form-container {
          max-width: 500px;
          margin: 0 auto;
        }
        
        /* Map section styles */
        .map-section {
          margin-bottom: 5rem;
        }
        
        .map-container {
          margin-bottom: 2rem;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        }
        
        .map-iframe {
          display: block;
        }
        
        .location-info {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }
        
        .location-address, .location-directions {
          flex: 1;
          min-width: 300px;
        }
        
        .location-address h3, .location-directions h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .location-address p, .location-directions p {
          line-height: 1.6;
        }
        
        /* Animation styles */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Media queries */
        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .countdown {
            gap: 1rem;
          }
          
          .countdown-item {
            min-width: 60px;
          }
          
          .countdown-number {
            font-size: 2rem;
          }
          
          .container {
            padding: 3rem 1.5rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .subscribe-box {
            padding: 2rem 1.5rem;
          }
          
          .subscribe-title {
            font-size: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .countdown {
            flex-wrap: wrap;
            justify-content: space-around;
          }
          
          .countdown-item {
            margin-bottom: 1rem;
          }
          
          .cta-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </Layout>
  );
}