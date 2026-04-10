import { useState, useEffect } from 'react';
import { FaServer, FaCode, FaPaintBrush, FaBrain } from 'react-icons/fa';

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
    <div className="flex w-full flex-col pb-[20vh] min-[1024px]:min-h-[85vh] max-[600px]:pb-[15vh] max-[480px]:pb-[12vh]" id="skills">
      <div className="flex w-fit items-start justify-start font-extrabold text-[45px] font-extrabold text-[#4F4D4D] transition-all duration-300 max-lg:pb-[4vh] max-lg:text-[3rem] max-[480px]:text-[2rem]">
        My Skills
      </div>
      <div className="relative box-border flex flex-col items-center justify-center gap-12 overflow-hidden pt-[10vh] max-lg:gap-8 max-lg:pt-[8vh] max-md:pt-[6vh] max-[600px]:pt-[5vh] max-[480px]:gap-6 max-[480px]:pt-[4vh]">

        <div className="relative mx-auto flex w-full items-center justify-center p-0">

          {/* ------------- arrow button ------------- */}
          <button
            className="absolute left-[10px] top-1/2 z-[1] -translate-y-1/2 bg-none p-[10px] text-[2.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-1/2 hover:scale-[1.2] max-lg:text-[2rem] max-md:text-[1.8rem] max-[480px]:p-[5px] max-[480px]:text-[1.6rem]"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &#10094;
          </button>

          {/* ------------- Skills container ------------- */}
          <div
            className="flex w-[calc(100%-100px)] justify-center gap-[30px] overflow-hidden py-[10px] [scroll-behavior:smooth] max-lg:w-[calc(100%-80px)] max-lg:gap-5 max-md:w-[calc(100%-70px)] max-md:gap-[15px] max-[600px]:w-[calc(100%-60px)] max-[480px]:w-[calc(100%-50px)] max-[480px]:gap-[10px] max-[480px]:py-[5px] max-[400px]:w-[calc(100%-40px)]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {[...Array(cardsToShow)].map((_, offset) => {
              const category = skillCategories[(currentIndex + offset) % skillCategories.length];
              return (
                <div
                  className="h-auto min-h-[400px] w-full min-w-[280px] max-w-[400px] flex-1 rounded-[20px] border-[3px] border-[#4F4D4D] p-[25px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px] max-lg:min-h-[380px] max-lg:p-5 max-md:min-h-[360px] max-md:min-w-[180px] max-md:p-[18px] max-[600px]:min-h-[340px] max-[600px]:max-w-[25rem] max-[600px]:p-[15px] max-[480px]:min-h-[320px] max-[480px]:min-w-[4rem] max-[480px]:max-w-[15rem] max-[480px]:border-2 max-[480px]:p-3"
                  key={offset}
                >
                  <h3 className="mb-8 text-center text-[1.8rem] font-semibold text-[#4F4D4D] max-lg:mb-6 max-lg:text-[1.6rem] max-md:mb-5 max-md:text-[1.4rem] max-[600px]:mb-4 max-[600px]:text-[1.3rem] max-[480px]:mb-3 max-[480px]:text-[1.2rem] max-[400px]:text-[1.1rem]">
                    <span className="text-[1.8rem] text-[#4F4D4D]">{category.icon}</span> {category.title}
                  </h3>

                  <div className="flex flex-col gap-[15px] max-[480px]:gap-[10px]">
                    {category.skills.map((skill, skillIndex) => (
                      <div className="w-full" key={skillIndex}>
                        <div className="mb-[5px] flex justify-between max-[480px]:mb-[3px]">
                          <span className="text-[1rem] font-medium max-md:text-[0.95rem] max-[480px]:text-[0.9rem] max-[400px]:text-[0.85rem]">{skill.name}</span>
                          <span className="text-[0.9rem] text-[#4F4D4D] max-md:text-[0.85rem] max-[480px]:text-[0.8rem]">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded bg-[#F8F9FA] max-[480px]:h-[6px]">
                          <div
                            className="relative h-full bg-[#4F4D4D] transition-[width] duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-[2px] after:bg-white after:shadow-[0_0_5px_rgba(255,255,255,0.8)]"
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
          <button
            className="absolute right-[10px] top-1/2 z-[1] -translate-y-1/2 bg-none p-[10px] text-[2.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-1/2 hover:scale-[1.2] max-lg:text-[2rem] max-md:text-[1.8rem] max-[480px]:p-[5px] max-[480px]:text-[1.6rem]"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>

        {/* ------------- dot indicators ------------- */}
        <div className="mt-[30px] flex flex-wrap justify-center max-[600px]:mt-[25px] max-[480px]:mt-5">
          {skillCategories.map((_, index) => (
            <span
              key={index}
              className={`mx-[5px] inline-block h-3 w-3 cursor-pointer rounded-full transition-all duration-300 max-[480px]:h-[10px] max-[480px]:w-[10px] ${index === currentIndex ? 'bg-[#4F4D4D]' : 'bg-[#bbb]'}`}
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