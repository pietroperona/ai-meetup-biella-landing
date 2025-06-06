// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/company/ai-meetup-italia/" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/aimeetupitalia/" target="_blank" rel="noopener noreferrer" className="footer-link">
          Instagram
        </a>
        <a href="mailto:contact@aimeetup.it" className="footer-link">
          Contattaci
        </a>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} AI Meetup Italia
      </div>

      <div className="footer-info">
        <p className="mission-text">Costruiamo ponti tra le persone e l'AI abbattendo barriere tecniche e culturali.</p>
        <p className="disclaimer-text">I nomi di prodotti, servizi e aziende citati possono essere marchi registrati dei rispettivi proprietari. Il loro utilizzo è a scopo informativo e non implica alcuna affiliazione o endorsement.</p>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          border-top: 1px solid rgba(43, 40, 40, 0.1);
          background-color: #F5F5F5;
        }
        
        .footer-links {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        
        .footer-link {
          color: #2B2828;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        
        .footer-link:hover {
          color: #D43D3D;
        }
        
        .footer-info {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .mission-text {
          font-size: 0.9rem;
          margin: 0.5rem 0 1rem;
          color: #2B2828;
        }
        
        .disclaimer-text {
          font-size: 0.75rem;
          margin: 0;
          color: rgba(43, 40, 40, 0.7);
          line-height: 1.5;
        }
        
        .copyright {
          font-size: 0.8rem;
          color: #2B2828;
          opacity: 0.7;
          margin-bottom: 1rem;
        }
        
        @media (max-width: 600px) {
          .footer {
            padding: 1.5rem 1rem;
          }
          
          .footer-links {
            gap: 1rem;
          }
          
          .mission-text {
            font-size: 0.85rem;
          }
          
          .disclaimer-text {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;