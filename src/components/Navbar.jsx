import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div ><Link to='/' className="logo">Puvankopis</Link></div>

        {/* ------------ Desktop Navigation ------------ */}
        <div className="desktop-links">
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