import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // logo text based on path
  const getLogoText = () => {
    switch (location.pathname) {
      case '/about':
        return 'About Me';
      case '/skills':
        return 'My Skills';
      case '/projects':
        return 'My Projects';
      case '/contact':
        return 'Contact Me';
      default:
        return 'Puvankopis';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">{getLogoText()}</div>

        {/* ------------ Desktop Navigation ------------ */}
        <div className="desktop-links">
          <div><Link className='nav-link' to='/'>Home</Link></div>
          <div><Link className='nav-link' to='/about'>About</Link></div>
          <div><Link className='nav-link' to='/skills'>Skills</Link></div>
          <div><Link className='nav-link' to='/projects'>Projects</Link></div>
          <div><Link className='nav-link' to='/contact'>Contact</Link></div>
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
          <div onClick={toggleMenu}><Link className='nav-link' to='/'>Home</Link></div>
          <div onClick={toggleMenu}><Link className='nav-link' to='/about'>About</Link></div>
          <div onClick={toggleMenu}><Link className='nav-link' to='/skills'>Skills</Link></div>
          <div onClick={toggleMenu}><Link className='nav-link' to='/projects'>Projects</Link></div>
          <div onClick={toggleMenu}><Link className='nav-link' to='/contact'>Contact</Link></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;