import React, { useState, useEffect } from 'react';
import { FaDownload, FaEnvelopeOpenText } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Home.css';
import cvFile from '../assets/Puvankopis_CV.pdf';
import profileImage from '../assets/puvi.png';
import facebook from '../assets/Facebook.png';
import GitHub from '../assets/GitHub.png';
import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/LinkedIn.png';
import Twitter from '../assets/Twitter.png'
import { Link } from 'react-scroll';

const Home = () => {
    const titles = ["Frontend Developer", "Backend Developer", "UI/UX Designer", "AI/ML Engineer"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    // Typing effect
    useEffect(() => {
        if (charIndex < titles[currentTitleIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + titles[currentTitleIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, currentTitleIndex, titles]);

    return (
        <div className="home" id="home">
            {/* ------------- Social Media ------------- */}
            <div className="home-socials">
                <a href='https://www.facebook.com/puvanakopis' target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={facebook} alt="Facebook" />
                    <span className="social-name">Facebook</span>
                </a>
                <a href='https://github.com/puvanakopis' target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={GitHub} alt="GitHub" />
                    <span className="social-name">GitHub</span>
                </a>
                <a href='https://www.instagram.com/puvanakopis/?hl=en' target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={Instagram} alt="Instagram" />
                    <span className="social-name">Instagram</span>
                </a>
                <a href='https://www.linkedin.com/in/puvanakopis/' target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={LinkedIn} alt="LinkedIn" />
                    <span className="social-name">LinkedIn</span>
                </a>
                <a href='https://x.com/puvanakopis' target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={Twitter} alt="" />                    <span className="social-name">Twitter</span>
                </a>
            </div>

            {/* ------------- Profile Info ------------- */}
            <div className="home-profile">
                <h2 className="home-greeting">Hello, I'm</h2>
                <div className="home-name">Puvankopis</div>
                <h2 className="home-title">{displayedText}<span className="cursor">|</span></h2>

                <div className="home-actions">
                    <a href={cvFile} download="Puvankopis_CV.pdf" className="btn btn-light">
                        <FaDownload style={{ marginRight: '8px' }} />
                        Download CV
                    </a>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className="btn btn-dark"
                    >
                        <FaEnvelopeOpenText style={{ marginRight: '8px' }} />
                        Contact Info
                    </Link>

                </div>
            </div>

            {/* ------------- Profile Image ------------- */}
            <div className="home-image">
                <img src={profileImage} alt="Puvankopis" />
            </div>
        </div>
    );
};

export default Home;