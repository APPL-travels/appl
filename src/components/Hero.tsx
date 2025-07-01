import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{ position: 'relative', textAlign: 'center', color: 'white', marginBottom: 40 }}>
      <img
        src="https://source.unsplash.com/1200x400/?travel,adventure"
        alt="Hero"
        style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'brightness(0.7)' }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h2 style={{ fontSize: '3rem', margin: 0 }}>Discover Your Next Adventure</h2>
        <p style={{ fontSize: '1.5rem', marginTop: 10 }}>Explore the world's most beautiful places with us</p>
        <button style={{ marginTop: 20, padding: '10px 20px', fontSize: '1rem', backgroundColor: '#007acc', color: 'white', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
