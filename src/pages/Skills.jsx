import React, { useState, useEffect } from 'react';
import { FaServer, FaCode, FaPaintBrush, FaBrain } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Developer',
      icon: <FaServer />,
      skills: [
        { name: 'Express JS', level: 70 },
        { name: 'Node JS', level: 70 },
        { name: 'Mongo DB', level: 90 },
      ]
    },
    {
      title: 'Frontend Developer',
      icon: <FaCode />,
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      title: 'UI/UX Designer',
      icon: <FaPaintBrush />,
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Photoshop', level: 60 },
        { name: 'Wireframing', level: 50 },
        { name: 'Prototyping', level: 45 },
      ]
    },
    {
      title: 'AI/ML Developer',
      icon: <FaBrain />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'TensorFlow', level: 70 },
        { name: 'Pandas & NumPy', level: 75 },
        { name: 'Power Bi', level: 60 },
        { name: 'Data Preprocessing', level: 70 },
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatically slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % skillCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [skillCategories.length]);

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % skillCategories.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  // Touch event handlers for mobile swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
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
  };

  return (
    <div className="skills" id="skills">
      <div className='logo'>
        My Skills
      </div>
      <div className="skills-container">

        <div className="skills-container-wrapper">

          {/* ------------- arrow button ------------- */}
          <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous slide">
            &#10094;
          </button>

          {/* ------------- Skills container ------------- */}
          <div
            className="skills-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {[...Array(cardsToShow)].map((_, offset) => {
              const category = skillCategories[(currentIndex + offset) % skillCategories.length];
              return (
                <div className="skill-category" key={offset}>
                  <h3 className="category-title">
                    <span className="category-icon">{category.icon}</span> {category.title}
                  </h3>

                  <div className="category-skills">
                    {category.skills.map((skill, skillIndex) => (
                      <div className="skill-item" key={skillIndex}>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ------------- arrow button ------------- */}
          <button className="carousel-button next" onClick={nextSlide} aria-label="Next slide">
            &#10095;
          </button>
        </div>

        {/* ------------- dot indicators ------------- */}
        <div className="carousel-dots">
          {skillCategories.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;