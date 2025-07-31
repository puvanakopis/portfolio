import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import { Link } from 'react-scroll'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
            <hr />
          <div className="footer-logo">
            <span>Puvankopis</span>
          </div>
          
          <div className="footer-links">
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="footer-link"
              offset={-80} 
            >
              Home
            </Link>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="footer-link"
              offset={-80}
            >
              About
            </Link>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              className="footer-link"
              offset={-80}
            >
              Skills
            </Link>
            <Link 
              to="qualifications" 
              smooth={true} 
              duration={500} 
              className="footer-link"
              offset={-80}
            >
              Qualifications
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="footer-link"
              offset={-80}
            >
              Projects
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="footer-link"
              offset={-80}
            >
              Contact
            </Link>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/puvanakopis" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/puvanakopis/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/puvanakopis/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/puvanakopis" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaXTwitter />
            </a>
            <a href="https://www.facebook.com/puvanakopis" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Puvankopis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;