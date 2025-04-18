// components/ViewportTester.js
import React, { useEffect, useState } from 'react';

const ViewportTester = () => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setViewport({
        width,
        height,
        isMobile: width < 600,
        isTablet: width >= 600 && width < 960,
        isDesktop: width >= 960
      });
    };

    // Set initial viewport data
    updateViewport();
    
    // Add event listener
    window.addEventListener('resize', updateViewport);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  return (
    <div className="viewport-tester">
      <div className="viewport-info">
        <h3>Informazioni Viewport</h3>
        <ul>
          <li><strong>Larghezza:</strong> {viewport.width}px</li>
          <li><strong>Altezza:</strong> {viewport.height}px</li>
          <li><strong>Stato:</strong> {viewport.isMobile ? 'Mobile' : viewport.isTablet ? 'Tablet' : 'Desktop'}</li>
        </ul>
      </div>
      
      <div className="media-query-indicators">
        <div className="indicator mobile-only">Visibile solo su Mobile (&lt;600px)</div>
        <div className="indicator tablet-only">Visibile solo su Tablet (600-959px)</div>
        <div className="indicator desktop-only">Visibile solo su Desktop (≥960px)</div>
        <div className="indicator mobile-tablet">Visibile su Mobile e Tablet (&lt;960px)</div>
        <div className="indicator tablet-desktop">Visibile su Tablet e Desktop (≥600px)</div>
      </div>
      
      <div className="debugging-tips">
        <h4>Suggerimenti per il debug responsive:</h4>
        <ol>
          <li>Usa gli strumenti di sviluppo del browser per testare diverse dimensioni dello schermo</li>
          <li>Verifica che i componenti si adattino correttamente alle varie larghezze</li>
          <li>Controlla la spaziatura, i font e gli allineamenti in ogni breakpoint</li>
          <li>Testa l'orientamento orizzontale sui dispositivi mobili</li>
        </ol>
      </div>
      
      <style jsx>{`
        .viewport-tester {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: rgba(255, 255, 255, 0.95);
          border: 2px solid #D43D3D;
          border-radius: 8px;
          padding: 15px;
          font-family: 'Azeret Mono', monospace;
          font-size: 14px;
          z-index: 9999;
          max-width: 320px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .viewport-info h3 {
          font-size: 16px;
          margin: 0 0 10px;
          color: #2B2828;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding-bottom: 5px;
        }
        
        .viewport-info ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .viewport-info li {
          margin-bottom: 5px;
        }
        
        .media-query-indicators {
          margin-top: 15px;
        }
        
        .indicator {
          margin-bottom: 5px;
          padding: 5px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
        
        .mobile-only {
          background-color: #FFD8D8;
          color: #D43D3D;
          display: none;
        }
        
        .tablet-only {
          background-color: #FFF3D8;
          color: #D49E3D;
          display: none;
        }
        
        .desktop-only {
          background-color: #D8F8E1;
          color: #3DAD54;
          display: none;
        }
        
        .mobile-tablet {
          background-color: #E6D8FF;
          color: #6E3DD4;
          display: none;
        }
        
        .tablet-desktop {
          background-color: #D8E9FF;
          color: #3D78D4;
          display: none;
        }
        
        .debugging-tips {
          margin-top: 15px;
          font-size: 12px;
        }
        
        .debugging-tips h4 {
          font-size: 14px;
          margin: 0 0 8px;
          color: #2B2828;
        }
        
        .debugging-tips ol {
          margin: 0;
          padding-left: 20px;
        }
        
        .debugging-tips li {
          margin-bottom: 4px;
        }
        
        /* Media queries per mostrare gli indicatori appropriati */
        @media (max-width: 599px) {
          .mobile-only {
            display: block;
          }
          
          .mobile-tablet {
            display: block;
          }
        }
        
        @media (min-width: 600px) and (max-width: 959px) {
          .tablet-only {
            display: block;
          }
          
          .mobile-tablet {
            display: block;
          }
          
          .tablet-desktop {
            display: block;
          }
        }
        
        @media (min-width: 960px) {
          .desktop-only {
            display: block;
          }
          
          .tablet-desktop {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewportTester;