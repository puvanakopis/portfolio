import React, { useState, useEffect } from 'react';
import './Home.css';
import cvFile from '../assets/puvi.png';
import profileImage from '../assets/puvi.png';
import facebook from '../assets/Facebook.png';
import GitHub from '../assets/GitHub.png';
import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/LinkedIn.png';
import Twitter from '../assets/twitter.png';

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
                <a href='https://www.facebook.com/puvanakopis' target="_blank" className="social-icon">
                    <img src={facebook} alt="" />
                    <a href='https://www.facebook.com/puvanakopis' target="_blank" className="social-name">Facebook</a>
                </a>
                <a href='https://github.com/puvanakopis' target="_blank" className="social-icon">
                    <img src={GitHub} alt="" />
                    <a href='https://github.com/puvanakopis' target="_blank" className="social-name">GitHub</a>
                </a>
                <div href='https://www.instagram.com/puvanakopis/?hl=en' target="_blank" className="social-icon">
                    <img src={Instagram} alt="" />
                    <a href='https://www.instagram.com/puvanakopis/?hl=en' target="_blank" className="social-name">Instagram</a>
                </div>
                <a href='https://www.linkedin.com/in/puvanakopis/' target="_blank" className="social-icon">
                    <img src={LinkedIn} alt="" />
                    <a href='https://www.linkedin.com/in/puvanakopis/' target="_blank" className="social-name">LinkedIn</a>
                </a>
                <a href='https://x.com/puvanakopis' target="_blank" className="social-icon">
                    <img src={Twitter} alt="" />
                    <a href='https://x.com/puvanakopis' target="_blank" className="social-name">Twitter</a>
                </a>
            </div>





            {/* ------------- Profile Info ------------- */}
            <div className="home-profile">
                <h2 className="home-greeting">Hello, I'm</h2>
                <div className="home-name">Puvankopis</div>
                <h2 className="home-title">{displayedText}<span className="cursor">|</span></h2>

                <div className="home-actions">
                    <a href={cvFile} download="Puvankopis_CV.pdf" className="btn btn-light">
                        Download CV
                    </a>
                    <a href="/contact" className="btn btn-dark">
                        Contact Info
                    </a>
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