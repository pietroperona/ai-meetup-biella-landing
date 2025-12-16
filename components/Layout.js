// components/Layout.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children, title, description, canonicalUrl, ogImage, structuredData }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestisce lo scroll della pagina per aggiungere effetti all'header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Gestisce il click sul link Roadmap per scorrere alla sezione
  const handleRoadmapClick = (e) => {
    e.preventDefault();

    // Se siamo nella home, scorriamo alla sezione roadmap
    if (router.pathname === '/') {
      const roadmapSection = document.getElementById('roadmap-section');
      if (roadmapSection) {
        roadmapSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false); // Chiude il menu su mobile
    } else {
      // Se siamo in un'altra pagina, navighiamo alla home e poi scorriamo
      router.push('/#roadmap-section');
    }
  };

  // Controlla se una voce di menu è attiva
  const isActive = (path) => {
    if (path === '/' && router.pathname === '/') return true;
    if (path !== '/' && router.pathname.startsWith(path)) return true;
    return false;
  };

  // Chiude il menu quando si cambia pagina
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const defaultTitle = "AI Meetup | Community italiana sull'Intelligenza Artificiale";
  const defaultDescription = "La community italiana che rende l'intelligenza artificiale accessibile a tutti. Eventi, formazione e networking nelle città italiane.";
  const defaultOgImage = "https://www.aimeetup.it/social-card.png";
  const defaultCanonical = "https://www.aimeetup.it" + router.pathname;

  // Crea lo structured data di base (con fallback al default)
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Meetup Italia",
    "url": "https://www.aimeetup.it",
    "logo": "https://www.aimeetup.it/logo-ai-meetup.svg",
    "sameAs": [
      "https://www.linkedin.com/company/ai-meetup-italia/",
      "https://www.instagram.com/aimeetupitalia/"
    ],
    "description": "Community italiana che rende l'intelligenza artificiale accessibile a tutti attraverso eventi sul territorio nazionale.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "contact@aimeetup.it"
    }
  };

  // Unisce i dati strutturati personalizzati con quelli di default
  const finalStructuredData = structuredData || baseStructuredData;

  return (
    <div className="layout">
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl || defaultCanonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || defaultCanonical} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:image" content={ogImage || defaultOgImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl || defaultCanonical} />
        <meta property="twitter:title" content={title || defaultTitle} />
        <meta property="twitter:description" content={description || defaultDescription} />
        <meta property="twitter:image" content={ogImage || defaultOgImage} />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(finalStructuredData) }}
        />
      </Head>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link href="/" className="logo-link">
            <img src="/ai-meetup-logo-nopayoff-black.svg" alt="AI Meetup Logo" className="logo" />
          </Link>

          {/* Hamburger menu per mobile */}
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menu di navigazione */}
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <a href="/#roadmap-section" className="nav-link" onClick={handleRoadmapClick}>Roadmap</a>
              </li>
              <li className={`nav-item ${isActive('/progetto') ? 'active' : ''}`}>
                <Link href="/progetto" className="nav-link">Progetto</Link>
              </li>
              {/* <li className={`nav-item ${isActive('/diventa-partner') ? 'active' : ''}`}>
                <Link href="/diventa-partner" className="nav-link">Diventa Partner</Link>
              </li> */}
              <li className={`nav-item ${isActive('/contatti') ? 'active' : ''}`}>
                <Link href="/contatti" className="nav-link contact-link">Contatti</Link>
              </li>
              <li className="nav-item cta-item">
                <a href="https://luma.com/user/aimeetup" target="_blank" rel="noopener noreferrer" className="nav-link cta-button">
                  Scopri i prossimi eventi
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={`main-content ${router.pathname === '/' ? 'home-page' : ''}`}>
        {children}
      </main>

      <Footer />

      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: transparent;
          backdrop-filter: none;
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: none;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        }

        .header-container {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .logo-link {
          display: block;
          z-index: 1001;
          justify-self: start;
        }

        .logo {
          height: 40px;
          width: auto;
          transition: transform 0.2s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .hamburger span {
          width: 100%;
          height: 3px;
          background-color: #2B2828;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          font-family: 'Syne', sans-serif;
        }

        .nav-link {
          color: #2B2828;
          font-size: 1rem;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          cursor: pointer;
          border: none;
          background: none;
          font-family: 'Syne', sans-serif !important;
        }

        .nav-link * {
          font-family: 'Syne', sans-serif !important;
        }

        .nav-link:hover, .dropdown-link:hover {
          color: #D43D3D;
        }

        .nav-item.active .nav-link:not(.dropdown-trigger) {
          color: #D43D3D;
          position: relative;
          font-weight: 500;
        }

        .nav-item.active .nav-link:not(.dropdown-trigger)::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #D43D3D;
        }

        /* Stile migliorato per il dropdown */
        .dropdown-container {
          position: relative;
        }

        .dropdown-trigger {
          padding-right: 24px;
          position: relative;
        }

        .dropdown-arrow {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #2B2828;
          transition: transform 0.3s ease;
        }

        .dropdown-trigger.open .dropdown-arrow {
          transform: translateY(-50%) rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          padding: 0.5rem 0;
          margin-top: 0.7rem;
          overflow: hidden;
        }

        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 10px;
          height: 10px;
          background-color: white;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-left: 1px solid rgba(0, 0, 0, 0.05);
          z-index: 0;
        }

        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-item {
          width: 100%;
        }

        .dropdown-link {
          display: flex;
          align-items: center;
          color: #2B2828;
          padding: 0.8rem 1.5rem;
          text-decoration: none;
          font-size: 0.9rem;
          font-family: 'Syne', sans-serif !important;
          font-weight: 500;
          transition: all 0.2s ease;
          width: 100%;
          position: relative;
        }

        .dropdown-link * {
          font-family: 'Syne', sans-serif !important;
        }

        .dropdown-link:hover {
          background-color: rgba(212, 61, 61, 0.07);
          color: #D43D3D;
        }

        .city-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #4BB543;
          border-radius: 50%;
          margin-right: 10px;
        }

        .add-icon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          height: 16px;
          font-size: 14px;
          font-weight: bold;
          color: #2B2828;
          margin-right: 8px;
          transition: all 0.2s ease;
        }

        .add-city:hover .add-icon {
          color: #D43D3D;
        }

        /* Stile speciale per il link "Contatti" */
        .contact-link {
          padding: 0.4rem 0.9rem;
          border: 1px solid rgba(43, 40, 40, 0.3);
          border-radius: 4px;
          transition: all 0.25s ease;
        }

        .contact-link:hover {
          background-color: #D43D3D;
          color: white;
          border-color: #D43D3D;
        }

        .nav {
          grid-column: 2;
          display: flex;
          align-items: center;
          font-family: 'Syne', sans-serif;
        }

        .nav-list {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
          align-items: center;
          font-family: 'Syne', sans-serif;
        }

        /* Pulsante CTA "Scopri i prossimi eventi" */
        .cta-item {
          position: absolute;
          right: 2rem;
        }

        .cta-button {
          padding: 0.6rem 1.2rem !important;
          background: #2B2828;
          color: white !important;
          border-radius: 6px;
          font-weight: 600 !important;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(43, 40, 40, 0.3);
        }

        .cta-button:hover {
          background: #D43D3D;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 61, 61, 0.4);
          color: white !important;
        }

        .main-content {
          flex: 1;
        }

        .main-content:not(.home-page) {
          margin-top: 72px; /* Altezza dell'header */
        }

        @media (max-width: 768px) {
          .header-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            position: relative;
          }

          .logo-link {
            position: static;
            justify-self: unset;
          }

          .hamburger {
            display: flex;
            position: relative;
            z-index: 1001;
          }

          .nav {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 100%;
            background-color: rgba(245, 245, 245, 0.98);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            padding: 5rem 2rem 2rem;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .nav.open {
            transform: translateX(0);
          }

          .nav-list {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }

          .nav-item {
            width: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            padding: 0 !important;
            margin: 0 !important;
            display: flex !important;
            align-items: center !important;
          }

          .nav-item:not(.cta-item) {
            height: 65px !important;
            min-height: 65px !important;
            max-height: 65px !important;
            overflow: hidden !important;
          }

          /* Forza tutti i testi ad avere lo stesso stile */
          .nav-list li *,
          .nav-list .nav-item *,
          .nav-list .nav-link,
          .nav-list .contact-link,
          .nav-list a {
            font-size: 1.3rem !important;
            font-weight: 500 !important;
            font-family: 'Syne', sans-serif !important;
            line-height: 1.95rem !important;
            letter-spacing: 0 !important;
          }

          /* Forza tutti i link e wrapper a occupare tutto lo spazio e centrare */
          .nav-list .nav-item > *,
          .nav-list .nav-link,
          .nav-list .contact-link,
          .nav-list a {
            width: 100% !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: flex-start !important;
            text-align: left !important;
            border: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            transform: none !important;
            height: 100% !important;
            flex: 1 !important;
          }

          /* CTA button in basso su mobile */
          .cta-item {
            position: static !important;
            margin-top: auto !important;
            padding-top: 2rem !important;
            width: 100% !important;
          }

          .cta-item .cta-button {
            width: 100% !important;
            display: block !important;
            text-align: center !important;
            padding: 1.2rem 0 !important;
            font-size: 1.3rem !important;
            font-weight: 500 !important;
            font-family: 'Syne', sans-serif !important;
            line-height: 1.5 !important;
            letter-spacing: 0 !important;
            background: #2B2828 !important;
            border-radius: 6px !important;
            margin: 0 !important;
            box-shadow: none !important;
            transform: none !important;
          }

          /* Dropdown su mobile */
          .dropdown-menu {
            position: static;
            box-shadow: none;
            opacity: 1;
            visibility: visible;
            transform: none;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
            padding: 0;
            margin: 0.5rem 0 0 0;
            background-color: rgba(0, 0, 0, 0.03);
            border-radius: 4px;
            width: 100%;
          }

          .dropdown-menu::before {
            display: none;
          }

          .dropdown-menu.open {
            max-height: 200px;
            padding: 0.5rem 0;
          }

          .dropdown-link {
            padding: 0.8rem 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;