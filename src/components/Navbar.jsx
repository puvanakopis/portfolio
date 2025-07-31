import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSectionChange = (section) => {
    if (section === activeSection) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsAnimating(false);
    }, 200);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            handleSectionChange(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Format the section name for display
  const formatSectionName = (section) => {
    if (section === 'home') return 'Puvankopis';
    else if (section === 'about') return 'About Me';
    else if (section === 'skills') return 'My Skills';
    else if (section === 'projects') return 'My Projects';
    else if (section === 'contact') return 'Contact Me';
    
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`logo ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          {formatSectionName(activeSection)}
        </div>

        {/* ------------ Desktop Navigation ------------ */}
        <div className="desktop-links">
          <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onSetActive={() => handleSectionChange('home')}
          >
            Home
          </Link>
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onSetActive={() => handleSectionChange('about')}
          >
            About
          </Link>
          <Link 
            to="skills" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onSetActive={() => handleSectionChange('skills')}
          >
            Skills
          </Link>
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onSetActive={() => handleSectionChange('projects')}
          >
            Projects
          </Link>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onSetActive={() => handleSectionChange('contact')}
          >
            Contact
          </Link>
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
          <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={closeMenu}
            onSetActive={() => handleSectionChange('home')}
          >
            Home
          </Link>
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={closeMenu}
            onSetActive={() => handleSectionChange('about')}
          >
            About
          </Link>
          <Link 
            to="skills" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={closeMenu}
            onSetActive={() => handleSectionChange('skills')}
          >
            Skills
          </Link>
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={closeMenu}
            onSetActive={() => handleSectionChange('projects')}
          >
            Projects
          </Link>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={closeMenu}
            onSetActive={() => handleSectionChange('contact')}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;