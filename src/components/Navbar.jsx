import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">Yousuf Abdullah<span>.</span></a>

        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="btn-small">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
