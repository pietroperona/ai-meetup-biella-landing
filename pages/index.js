import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import SubscribeForm from '../components/SubscribeForm';
import Roadmap from '../components/Roadmap';
import Layout from '../components/Layout';

export default function Home() {
  // Stati e logica esistenti rimangono uguali
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormFixed, setIsFormFixed] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [showStickyForm, setShowStickyForm] = useState(false);
  const [isFormDismissed, setIsFormDismissed] = useState(false);
  
  // Riferimento per la sezione CTA progetto per lo scrolling
  const projectCtaRef = useRef(null);
  const heroRef = useRef(null);
  const stickyFormRef = useRef(null);
  const autoSlideRef = useRef(null);
  const touchStartXRef = useRef(null);
  const events = [
    {
      title: "Light Talk's + Networking",
      date: '15/01',
      location: 'Sellalab',
      city: 'Biella',
      url: 'https://luma.com/3q3dwtgt'
    },
    {
      title: "Light Talk's + Networking",
      date: 'TBD',
      location: 'Sellalab',
      city: 'Biella'
    },
    {
      title: 'Community Meetup',
      date: 'TBD',
      location: 'Sellalab',
      city: 'Biella'
    }
  ];

  const baseEventYear = 2026;
  const toIsoDate = (dateStr) => {
    if (!dateStr || dateStr === 'TBD') return null;
    const [day, month] = dateStr.split('/');
    if (!day || !month) return null;
    return `${baseEventYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const structuredEvents = events
    .map((event) => {
      const isoDate = toIsoDate(event.date);
      if (!isoDate) return null;

      return {
        "@type": "Event",
        "name": event.title,
        "startDate": isoDate,
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "Place",
          "name": `${event.location}, ${event.city} (BI)`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": event.city,
            "addressRegion": "BI",
            "addressCountry": "IT"
          }
        },
        "url": event.url || "https://www.aimeetup.it/",
        "organizer": {
          "@type": "Organization",
          "name": "AI Meetup Italia",
          "url": "https://www.aimeetup.it"
        }
      };
    })
    .filter(Boolean);

  const clearAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  const nextEvent = () => setCurrentEventIndex((prev) => (prev + 1) % events.length);
  const prevEvent = () => setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);

  const startAutoSlide = () => {
    if (!isMobile || events.length <= 1) return;
    clearAutoSlide();
    autoSlideRef.current = setInterval(nextEvent, 4000);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartXRef.current = e.touches[0].clientX;
    clearAutoSlide();
  };

  const handleTouchEnd = (e) => {
    if (!isMobile || touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const swipeThreshold = 40;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        prevEvent();
      } else {
        nextEvent();
      }
    }

    touchStartXRef.current = null;
    startAutoSlide();
  };

  const handleSubmit = async (e) => {
    // Logica del form rimane uguale
    e.preventDefault();

    if (!name || !email || !privacyAccepted) {
      setFormStatus({
        message: 'Per favore, compila tutti i campi e accetta la privacy policy.',
        isError: true
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormStatus({
          message: 'Grazie per l\'iscrizione! Ti terremo aggiornato sui prossimi eventi.',
          isError: false
        });
        setName('');
        setEmail('');
        setPrivacyAccepted(false);
      } else {
        throw new Error(data.message || 'Si è verificato un errore durante l\'iscrizione.');
      }
    } catch (error) {
      setFormStatus({
        message: error.message || 'Si è verificato un errore. Riprova più tardi.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismissForm = () => {
    setIsFormDismissed(true);
    setShowStickyForm(false);
    setIsFormFixed(false);
  };
  
  // Funzione per lo scroll alla sezione CTA progetto
  const scrollToProjectCta = () => {
    projectCtaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Gestisce comportamento sticky del form
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (stickyFormRef.current) {
        setFormHeight(stickyFormRef.current.getBoundingClientRect().height);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (stickyFormRef.current) {
      setFormHeight(stickyFormRef.current.getBoundingClientRect().height);
    }
  }, [formStatus.message]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      if (isFormDismissed) {
        setShowStickyForm(false);
        setIsFormFixed(false);
        return;
      }

      const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
      const scrollRatio = docHeight === 0 ? 0 : window.scrollY / docHeight;
      const threshold = isMobile ? 0.15 : 0.7; // mobile prima, desktop verso 3/4 pagina
      const hasPassedThreshold = scrollRatio >= threshold;

      setShowStickyForm(hasPassedThreshold);

      if (isMobile) {
        setIsFormFixed(false);
        return;
      }

      // Form appare solo dopo aver superato la soglia
      const shouldFix = hasPassedThreshold;
      setIsFormFixed(shouldFix);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMobile, isFormDismissed]);

  useEffect(() => {
    if (!isMobile) {
      clearAutoSlide();
      setCurrentEventIndex(0);
      return undefined;
    }

    startAutoSlide();
    return clearAutoSlide;
  }, [isMobile, events.length]);

  // Dati strutturati specifici per la homepage
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Meetup | Community italiana sull'Intelligenza Artificiale",
    "description": "La community italiana che rende l'intelligenza artificiale accessibile a tutti. Eventi, formazione e networking nelle città italiane. Unisciti al movimento.",
    "url": "https://www.aimeetup.it/",
    "inLanguage": "it-IT",
    "publisher": {
      "@type": "Organization",
      "name": "AI Meetup",
      "url": "https://www.aimeetup.it"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Meetup Italia",
      "description": "Community italiana sull'intelligenza artificiale con presenza in diverse città",
      "url": "https://www.aimeetup.it",
      "location": {
        "@type": "Country",
        "name": "Italia"
      }
    }
  };

  if (structuredEvents.length > 0) {
    homeStructuredData.event = structuredEvents;
  }

  return (
    <Layout
      title="AI Meetup | Community italiana sull'Intelligenza Artificiale"
      description="La community italiana che rende l'intelligenza artificiale accessibile a tutti. Eventi, formazione e networking nelle città italiane. Unisciti al movimento."
      canonicalUrl="https://www.aimeetup.it/"
      ogImage="https://www.aimeetup.it/social-card.png"
      structuredData={homeStructuredData}
    >
      <Head>
        {/* I meta tag esistenti rimangono uguali */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Il resto degli head tag rimane lo stesso */}
      </Head>

      {/* Hero Section con gradiente - posizionamento assoluto */}
      <section className="hero-full-section" ref={heroRef}>
        <div className="hero-wrapper">
          {/* Hero Section con frase principale in evidenza */}
          <div className="hero-section">
            <div className="hero-content">
              <h1 className="hero-heading">
                <span>AI Meetup è una community</span> <span className="highlight">indipendente</span> <span>di</span> <span className="highlight">divulgazione</span> <span>sull'</span><span className="highlight">intelligenza artificiale.</span>
              </h1>
              <p className="hero-tagline">Inclusiva, aperta, locale.</p>

              <div className="events-section">
                <span className="events-label">Prossimi eventi</span>
                <div className={`hero-events ${isMobile ? 'mobile-slider' : ''}`}>
                  <div
                    className="hero-events-track"
                    style={{
                      transform: isMobile ? `translateX(-${currentEventIndex * 100}%)` : 'none'
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    {events.map((event, index) => {
                    const isPending = event.date === 'TBD';
                    const CardTag = event.url ? 'a' : 'div';
                    return (
                      <CardTag
                        key={event.title + index}
                        className={`event-card ${isPending ? 'pending' : ''} ${event.url ? 'clickable' : ''}`}
                        href={event.url || undefined}
                        target={event.url ? '_blank' : undefined}
                        rel={event.url ? 'noopener noreferrer' : undefined}
                      >
                        <div className="event-title">{event.title}</div>
                        <div className="event-date">{event.date}</div>
                        <div className="event-location">
                          <div className="hosted-block">
                            <span className="hosted-label">Hosted by:</span>
                            <img
                              src="/logo-MAV-esteso-black.png"
                              alt="Il Mondo a venire:formazione, ispirazione e confronto"
                              className="location-logo"
                            />
                          </div>
                          <div className="city-block">
                            <span className="city-label">Location:</span>
                            <span className="location-city">Sellalab Biella</span>
                          </div>
                        </div>
                      </CardTag>
                    );
                  })}
                  </div>

                  {isMobile && events.length > 1 && (
                    <div className="slider-dots">
                      {events.map((_, dotIndex) => (
                        <button
                          key={`dot-${dotIndex}`}
                          className={`slider-dot ${dotIndex === currentEventIndex ? 'active' : ''}`}
                          onClick={() => {
                            setCurrentEventIndex(dotIndex);
                            startAutoSlide();
                          }}
                          aria-label={`Mostra evento ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Indicatore di scroll utilizzando FontAwesome */}
          <div className="scroll-indicator" onClick={scrollToProjectCta}>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* Form sticky desktop */}
      <div
        className={styles.stickyFormPlaceholder}
        style={{ height: showStickyForm && isFormFixed ? formHeight : 0 }}
      />
      <div
        ref={stickyFormRef}
        className={`${styles.stickyFormWrapper} ${isFormFixed ? styles.isFixed : ''} ${isFormDismissed ? styles.isDismissed : ''}`}
        style={{ display: showStickyForm || isFormDismissed ? 'block' : 'none' }}
      >
        <div className={`${styles.formContainer} ${styles.stickyFormCard}`}>
          <button
            type="button"
            className={styles.closeStickyButton}
            onClick={handleDismissForm}
            aria-label="Chiudi il banner di iscrizione"
          >
            ×
          </button>
          {!isSubmitted ? (
            <>
              <h2 className={styles.formTitle}>Rimani aggiornato sui nostri eventi👇🏼</h2>

              <form onSubmit={handleSubmit} className={`${styles.form} ${styles.inlineForm}`}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Il tuo nome"
                    className={styles.emailInput}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua email"
                    className={styles.emailInput}
                    required
                  />
                </div>

                <div className={styles.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className={styles.checkbox}
                    required
                  />
                  <label htmlFor="privacy" className={styles.privacyLabel}>
                    Acconsento al trattamento dei miei dati personali come descritto nella <a href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</a>
                  </label>
                </div>

                {formStatus.message && formStatus.isError && (
                  <div className={`${styles.formMessage} ${styles.errorMessage}`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti'}
                </button>
              </form>
            </>
          ) : (
            <div className={styles.successContainer}>
              <h2 className={styles.successTitle}>Grazie per l'iscrizione! Ti terremo aggiornato sui prossimi eventi.</h2>
            </div>
          )}
        </div>
      </div>

      {/* Sezione CTA Progetto */}
      <section ref={projectCtaRef} className="project-cta-section">
        <div className="project-cta-container">
          <h2 className="project-cta-title">
            <span>Basta hype,</span> <span className="project-highlight">basta paura</span>.<br />
            Noi scegliamo <span className="project-highlight">la curiosità</span>.<br />
            <span>Scopriamo insieme</span> <span className="project-highlight">l'intelligenza artificiale</span><span>!</span>
          </h2>
          <a href="/progetto" className="project-cta-button">
            Scopri i nostri valori
          </a>
        </div>
      </section>

      <div id="roadmap-section" className={styles.roadmapWrapper}>
        <Roadmap />
      </div>

    <style jsx>{`
          .hero-full-section {
            width: 100%;
            /* Gradiente organico multi-colore per tutta la hero */
            background:
              radial-gradient(circle at 20% 20%, rgba(254, 254, 254, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(113, 227, 181, 0.85) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(235, 216, 87, 0.9) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(189, 113, 100, 0.85) 0%, transparent 50%),
              linear-gradient(135deg, #FEFEFE 0%, #E8DCC8 100%);
            padding-top: 72px; /* Spazio per la navbar fixed */
            background-size: 200% 200%;
            animation: gradientShift 20s ease infinite;
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .hero-wrapper {
            max-width: 900px;
            margin: 0 auto;
            padding: 3rem 2rem 2rem;
          }

          .hero-section {
            padding: 3rem 2rem 1.5rem;
            margin-bottom: 0;
          }
          
          .hero-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }
          
          .hero-heading {
            font-size: 2.5rem;
            line-height: 1.4;
            font-weight: 500;
            letter-spacing: -0.5px;
            margin-bottom: 2rem;
          }

          .hero-tagline {
            font-size: 2.5rem;
            font-weight: 400;
            margin-bottom: 2.5rem;
            color: #333;
            line-height: 1.4;
          }

          .events-section {
            margin-top: 3rem;
          }

          .events-label {
            display: inline-block;
            font-family: 'Syne', sans-serif;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #2B2828;
            opacity: 0.7;
            margin-bottom: 0.75rem;
          }

          .hero-heading span {
            display: inline;
            margin: 0 0.2rem;
          }

          .highlight {
            position: relative;
            z-index: 1;
          }

          .highlight::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 8px;
            background-color: rgba(233, 213, 94, 0.4); /* Giallo evidenziatore */
            z-index: -1;
          }

          .hero-events {
            padding: 1.5rem 1.75rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.25rem;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(43, 40, 40, 0.08);
          border-radius: 14px;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(6px);
        }

          .hero-events-track {
            display: contents;
          }

          .event-card {
            padding: 0.75rem 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
            text-align: left;
            position: relative;
            text-decoration: none;
            color: inherit;
          }

          .event-card:not(:last-child)::after {
            content: '';
            position: absolute;
            right: -0.65rem;
            top: 12%;
            bottom: 12%;
            width: 1px;
            background: linear-gradient(180deg, rgba(43, 40, 40, 0) 0%, rgba(43, 40, 40, 0.12) 50%, rgba(43, 40, 40, 0) 100%);
          }

          .event-title {
            font-size: 1.1rem;
            letter-spacing: 0.2px;
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Syne', sans-serif;
            color: #2B2828;
            line-height: 1.25;
            word-break: break-word;
            overflow-wrap: anywhere;
            white-space: normal;
            hyphens: auto;
          }

          .event-date {
            font-size: 2.7rem;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: #2B2828;
          }

          .event-location {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 0.75rem;
            text-align: left;
          }

          .hosted-block {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.15rem;
          }

          .hosted-label {
            font-size: 0.72rem;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            color: rgba(43, 40, 40, 0.6);
          }

          .location-logo {
            height: 26px;
            width: auto;
            display: block;
          }

          .city-block {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.15rem;
          }

          .city-label {
            font-size: 0.72rem;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            color: rgba(43, 40, 40, 0.6);
          }

          .location-city {
            font-size: 1rem;
            font-weight: 600;
            color: rgba(43, 40, 40, 0.7);
            line-height: 1.2;
          }

          .location-name {
            text-transform: uppercase;
          }

          .event-card:not(.pending) .location-city {
            color: #2B2828;
          }

          .event-card.pending {
            opacity: 0.6;
          }

          .event-card.pending .event-title,
          .event-card.pending .event-date {
            color: rgba(43, 40, 40, 0.65);
          }

          .event-card.pending .location-city {
            color: rgba(43, 40, 40, 0.5);
          }

          .event-card.pending .location-logo {
            opacity: 0.5;
          }

          .event-card.pending .hosted-label {
            color: rgba(43, 40, 40, 0.45);
          }

          .event-card.clickable {
            cursor: pointer;
          }

          .event-card.clickable:hover .event-title,
          .event-card.clickable:hover .event-date {
            color: #D43D3D;
          }

          .slider-dots {
            display: none;
            justify-content: center;
            gap: 0.55rem;
            margin-top: 0.75rem;
          }

          .slider-dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            border: none;
            background: rgba(43, 40, 40, 0.2);
            transition: all 0.2s ease;
            padding: 0;
          }

          .slider-dot.active {
            width: 18px;
            background: #2B2828;
          }
          
          /* Indicatore di scroll con FontAwesome */
          .scroll-indicator {
            margin: 0.5rem auto 2.5rem;
            text-align: center;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          
          .scroll-indicator:hover {
            transform: translateY(3px);
          }
          
          .scroll-indicator i {
            font-size: 24px;
            color: #2B2828;
            opacity: 0.7;
            animation: pulseDown 2s infinite;
          }
          
          @keyframes pulseDown {
            0%, 100% {
              opacity: 0.7;
              transform: translateY(0);
            }
            50% {
              opacity: 1;
              transform: translateY(3px);
            }
          }
          
          @media (max-width: 768px) {
            .hero-full-section {
              padding-top: 56px;
            }

            .hero-wrapper {
              padding: 1.5rem 1.5rem 1.5rem;
            }

            .hero-section {
              padding: 2rem 1.5rem 0.75rem;
            }

            .hero-heading {
              font-size: 2.2rem;
            }

            .hero-tagline {
              font-size: 1.9rem;
            }

            .events-section {
              margin-top: 2rem;
            }

            .events-label {
              font-size: 0.75rem;
              letter-spacing: 1.2px;
              margin-bottom: 0.6rem;
            }

            .hero-events {
              padding: 1rem 1.1rem 1.2rem;
              grid-template-columns: 1fr;
              gap: 1rem;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            }

            .hero-events.mobile-slider {
              display: block;
              overflow: hidden;
              padding: 1rem 1.1rem 1.8rem;
            }

            .hero-events.mobile-slider .hero-events-track {
              display: flex;
              width: 100%;
              gap: 0;
              transition: transform 0.35s ease;
            }

            .event-card {
              padding: 0.25rem 0;
            }

            .hero-events.mobile-slider .event-card {
              width: 100%;
              min-width: 100%;
              flex: 0 0 100%;
              padding: 0.35rem 0;
              box-sizing: border-box;
              margin: 0;
            }

            .event-card:not(:last-child)::after {
              display: none;
            }

            .event-title {
              font-size: 1.05rem;
            }

            .event-date {
              font-size: 2.3rem;
            }

            .event-location {
              justify-content: flex-start;
            }

            .hero-events.mobile-slider .slider-dots {
              display: flex;
            }
            
            .scroll-indicator {
              margin: 0.5rem auto 2rem; /* Ridotto margine inferiore per mobile */
            }
            
            .scroll-indicator i {
              font-size: 20px;
            }
          }
          
          @media (max-width: 480px) {
            .hero-wrapper {
              padding: 1rem 1rem 1rem;
            }

            .hero-section {
              padding: 1.5rem 1rem 0.5rem;
            }

            .hero-heading {
              font-size: 1.7rem;
            }

            .hero-tagline {
              font-size: 1.6rem;
              margin-bottom: 2rem;
            }

            .highlight::after {
              height: 6px;
              bottom: 3px;
            }
          }

          /* Sezione CTA Progetto */
          .project-cta-section {
            background-color: #fff;
            padding: 5.5rem 2.5rem 5.5rem;
            text-align: center;
            width: 100%;
          }

          .project-cta-container {
            width: 100%;
            max-width: 980px;
            margin: 0 auto;
          }

          .project-cta-title {
            font-size: 2.2rem;
            line-height: 1.4;
            font-weight: 500;
            margin-bottom: 2.25rem;
            color: #222;
          }

          .project-cta-title span {
            display: inline;
            margin: 0 0.2rem;
          }

          .project-highlight {
            position: relative;
            z-index: 1;
          }

          .project-highlight::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 8px;
            background-color: #80E5BB;
            z-index: -1;
          }

          .project-cta-button {
            display: inline-block;
            background-color: #2B2828;
            color: #F5F5F5;
            padding: 0.95rem 2.35rem;
            font-family: 'Syne', sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(43, 40, 40, 0.3);
          }

          .project-cta-button:hover {
            background-color: #D43D3D;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(212, 61, 61, 0.4);
          }

          @media (max-width: 768px) {
            .project-cta-section {
              padding: 4rem 1.5rem;
            }

            .project-cta-title {
              font-size: 1.8rem;
            }

            .project-cta-tagline {
              font-size: 1.4rem;
            }
          }

          @media (max-width: 480px) {
            .project-cta-section {
              padding: 3rem 1rem;
            }

            .project-cta-title {
              font-size: 1.5rem;
              margin-bottom: 2rem;
            }

            .project-cta-tagline {
              font-size: 1.2rem;
              margin-bottom: 2.5rem;
            }

            .project-cta-button {
              padding: 0.9rem 2rem;
              font-size: 1rem;
            }
          }
        `}</style>
    </Layout>
  );
}
