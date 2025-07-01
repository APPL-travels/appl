import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#007acc', padding: '20px 0', color: 'white', textAlign: 'center' }}>
      <h1 style={{ margin: 0, fontSize: '2.5rem' }}>TravelSite</h1>
      <nav style={{ marginTop: 10 }}>
        <a href="#hero" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</a>
        <a href="#destinations" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Destinations</a>
        <a href="#blogs" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Blogs</a>
        <a href="#testimonials" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Testimonials</a>
        <a href="#footer" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
