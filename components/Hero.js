import React from 'react';

const Hero = ({ title, description, children }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        {children}
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(to right, #E0F7FA, #ECEFF1);
          color: #2B2828;
          padding: 6rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
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
      `}</style>
    </div>
  );
};

export default Hero;