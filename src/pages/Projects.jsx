import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Yummi',
            description: 'A modern, responsive restaurant website showcasing delicious menus, offers, and reviews for food lovers.',
            image: project1,
            tags: ['React', 'CSS3'],
            demolink: '#',
            gitlink: 'https://github.com/puvanakopis/Yummi'
        },
        {
            id: 2,
            title: 'Foodi',
            description: ' sleek restaurant website featuring curated menus, seasonal specials, and diner testimonials.',
            image: project2,
            tags: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
            demolink: 'https://foodi-860506298.development.catalystserverless.com/app/index.html',
            gitlink: 'https://github.com/puvanakopis/Foodi'
        },
        {
            id: 3,
            title: 'Edusity',
            description: 'Explore website for programs, resources, and campus updates—all in one place..',
            image: project3,
            tags: ['React', 'CSS3'],
            demolink: '#',
            gitlink: 'https://github.com/puvanakopis/Edusity'
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(2);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1200) {
                setCardsToShow(1);
            } else {
                setCardsToShow(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto slide change with pause on hover
    useEffect(() => {
        let interval;
        // maxIndex is the highest start index that still shows full cardsToShow cards
        const maxIndex = projects.length - cardsToShow;

        const startInterval = () => {
            if (isAutoPlaying) {
                interval = setInterval(() => {
                    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
                }, 4000);
            }
        };

        startInterval();

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [projects.length, cardsToShow, isAutoPlaying]);

    // Move to next slide
    const nextSlide = () => {
        const maxIndex = projects.length - cardsToShow;
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    // Move to previous slide
    const prevSlide = () => {
        const maxIndex = projects.length - cardsToShow;
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Pause auto-play when user interacts
    const pauseAutoPlay = () => setIsAutoPlaying(false);
    const resumeAutoPlay = () => setIsAutoPlaying(true);

    // Touch event handlers for mobile swipe support
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        pauseAutoPlay();
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 100) {
            nextSlide();
        }

        if (touchStart - touchEnd < -100) {
            prevSlide();
        }
        resumeAutoPlay();
    };

    const dotsCount = projects.length - cardsToShow + 1;

    return (
        <div className="projects" id="projects">
            <div className="projects-container-wrapper">
                {/* --------------- Arrow button --------------- */}
                <button
                    className="carousel-button prev"
                    onClick={() => {
                        prevSlide();
                        pauseAutoPlay();
                    }}
                    aria-label="Previous slide"
                >
                    &#10094;
                </button>

                {/* --------------- Projects container --------------- */}
                <div
                    className="projects-container"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseEnter={pauseAutoPlay}
                    onMouseLeave={resumeAutoPlay}
                >
                    {projects.slice(currentIndex, currentIndex + cardsToShow).map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-buttons">
                                    <a
                                        href={project.demolink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-project btn-light"
                                        aria-label={`View ${project.title} project`}
                                    >
                                        <FaExternalLinkAlt style={{ marginRight: '6px' }} />
                                        Demo
                                    </a>
                                    <a
                                        href={project.gitlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-project btn-dark"
                                        aria-label={`View ${project.title} project details`}
                                    >
                                        <FaGithub style={{ marginRight: '6px' }} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --------------- Arrow button --------------- */}
                <button
                    className="carousel-button next"
                    onClick={() => {
                        nextSlide();
                        pauseAutoPlay();
                    }}
                    aria-label="Next slide"
                >
                    &#10095;
                </button>
            </div>

            {/* --------------- Dot indicators --------------- */}
            <div className="carousel-dots">
                {Array.from({ length: dotsCount }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentIndex(index);
                            pauseAutoPlay();
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Projects;