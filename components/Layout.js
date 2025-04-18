// components/Layout.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMeetupOpen, setIsMeetupOpen] = useState(false);
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

  // Gestisce il click fuori dal menu meetup per chiuderlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMeetupOpen && !event.target.closest('.dropdown-container')) {
        setIsMeetupOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMeetupOpen]);

  return (
    <div className="layout">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link href="/" className="logo-link">
            <img src="/logo-ai-meetup.svg" alt="AI Meetup Logo" className="logo" />
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
                <a href="/#roadmap-section" className="nav-link" onClick={handleRoadmapClick}>
                  Roadmap
                </a>
              </li>
              <li className={`nav-item ${isActive('/progetto') ? 'active' : ''}`}>
                <Link href="/progetto" className="nav-link">Progetto</Link>
              </li>
              <li className={`nav-item dropdown-container ${isActive('/meetup') ? 'active' : ''}`}>
                <button 
                  className={`nav-link dropdown-trigger ${isMeetupOpen ? 'open' : ''}`}
                  onClick={() => setIsMeetupOpen(!isMeetupOpen)}
                >
                  Meetup <span className="dropdown-arrow"></span>
                </button>
                <ul className={`dropdown-menu ${isMeetupOpen ? 'open' : ''}`}>
                  <li className="dropdown-item">
                    <Link href="/meetup/biella" className="dropdown-link">Biella</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/contatti" className="dropdown-link">Candida la tua città</Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${isActive('/diventa-partner') ? 'active' : ''}`}>
                <Link href="/diventa-partner" className="nav-link">Diventa Partner</Link>
              </li>
              <li className={`nav-item ${isActive('/contatti') ? 'active' : ''}`}>
                <Link href="/contatti" className="nav-link">Contatti</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
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
          background-color: rgba(245, 245, 245, 0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }

        .header.scrolled {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .logo-link {
          display: block;
          z-index: 1001;
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

        .nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
          align-items: center;
        }
        }

        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
        }

        .nav-link {
          color: #2B2828;
          font-size: 0.95rem;
          text-decoration: none;
          font-weight: 400; /* Cambiato da 500 a 400 per un font normale */
          padding: 0.5rem 0;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          cursor: pointer;
          border: none;
          background: none;
          font-family: 'Azeret Mono', monospace;
        }

        .nav-link:hover, .dropdown-link:hover {
          color: #D43D3D;
        }

        .nav-item.active .nav-link:not(.dropdown-trigger) {
          color: #D43D3D;
          position: relative;
          font-weight: 500; /* Applicato il font-weight 500 solo alle voci attive */
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

        .dropdown-container {
          position: relative;
        }

        .dropdown-trigger {
          padding-right: 20px;
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
          transition: transform 0.2s ease;
        }

        .dropdown-trigger.open .dropdown-arrow {
          transform: translateY(-50%) rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 180px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 1000;
          padding: 0.5rem 0;
          margin-top: 0.5rem;
        }

        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          width: 100%;
        }

        .dropdown-link {
          display: block;
          color: #2B2828;
          padding: 0.7rem 1.5rem;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          width: 100%;
        }

        .dropdown-link:hover {
          background-color: rgba(212, 61, 61, 0.05);
        }

        .main-content {
          margin-top: 72px; /* Altezza dell'header */
          flex: 1;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 1rem;
          }

          .hamburger {
            display: flex;
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
            padding: 0.5rem 0;
          }

          .nav-link {
            width: 100%;
            padding: 1rem 0;
            font-size: 1.1rem;
          }

          .dropdown-menu {
            position: static;
            box-shadow: none;
            opacity: 1;
            visibility: visible;
            transform: none;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding: 0;
            margin: 0;
            background-color: transparent;
          }

          .dropdown-menu.open {
            max-height: 200px;
          }

          .dropdown-link {
            padding: 0.7rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;