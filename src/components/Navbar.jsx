import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Puvankopis</div>
        
        {/* ------------ Desktop Navigation ------------ */}
        <div className="desktop-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        {/* ------------ Mobile Hamburger Icon ------------ */}
        <div 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        
        {/* ------------ Mobile Navigation ------------ */}
        <div className={`mobile-links ${isOpen ? 'open' : ''}`}>
          <a href="#about" className="mobile-link" onClick={toggleMenu}>About</a>
          <a href="#skills" className="mobile-link" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="mobile-link" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="mobile-link" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;