import React, { useState, useEffect } from 'react';

const Hero = ({ title, description, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Gestisce il movimento del mouse per un leggero effetto parallasse
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="hero-section">
      {/* Sfondo con gradiente */}
      <div className="gradient-background"></div>
      
      {/* Overlay con effetto granuloso */}
      <div className="grain-overlay"></div>
      
      <div className="hero-content">
        <div 
          className="content-inner"
          style={{
            transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -8}px)`
          }}
        >
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>
          {children}
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          background: linear-gradient(to right, #E0F7FA, #ECEFF1);
          color: #2B2828;
          padding: 6rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .gradient-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #E0F7FA, #ECEFF1);
          z-index: 1;
        }
        
        .grain-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          z-index: 2;
          opacity: 0.5;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .content-inner {
          transition: transform 0.1s ease-out;
        }

        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1.3rem;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;