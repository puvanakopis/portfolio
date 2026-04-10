import { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Yummi',
            description: 'A modern, responsive restaurant website showcasing delicious menus, offers, and reviews',
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
        {
            id: 4,
            title: 'CampusEase',
            description: 'CampusEase connects students and lecturers in Sri Lanka with trusted housing and transport.',
            image: project4,
            tags: ['React', 'node js'],
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
        <div className="flex h-fit w-full flex-col pb-[20vh] max-[600px]:pb-[15vh] max-[480px]:pb-[12vh]" id="projects">
            <div className="flex w-fit items-start justify-start pb-[10vh] font-extrabold text-[45px] font-extrabold text-[#4F4D4D] transition-all duration-300 max-lg:pb-[4vh] max-lg:text-[3rem] max-[480px]:text-[2rem]">
                My Projects
            </div>

            <div className="relative box-border flex flex-col items-center justify-center gap-12 overflow-hidden pt-[10vh] max-lg:gap-8 max-lg:pt-[8vh] max-md:pt-[6vh] max-[600px]:pt-[5vh] max-[480px]:gap-6 max-[480px]:pt-[4vh]">

                <div className="relative mx-auto flex w-full items-center justify-center p-0">
                    {/* --------------- Arrow button --------------- */}
                    <button
                        className="absolute left-[10px] top-1/2 z-[1] -translate-y-1/2 bg-none p-[10px] text-[2.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-1/2 hover:scale-[1.2] max-lg:text-[2rem] max-md:text-[1.8rem] max-[480px]:p-[5px] max-[480px]:text-[1.6rem] max-[400px]:text-[1.4rem]"
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
                        className="flex w-[calc(100%-100px)] justify-center gap-[30px] overflow-hidden py-[10px] [scroll-behavior:smooth] max-lg:w-[calc(100%-80px)] max-lg:gap-5 max-md:w-[calc(100%-70px)] max-md:gap-[15px] max-[600px]:w-[calc(100%-60px)] max-[480px]:w-[calc(100%-50px)] max-[480px]:gap-[10px] max-[480px]:py-[5px] max-[400px]:w-[calc(100%-40px)]"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseEnter={pauseAutoPlay}
                        onMouseLeave={resumeAutoPlay}
                    >
                        {projects.slice(currentIndex, currentIndex + cardsToShow).map((project) => (
                            <div className="h-auto min-h-[420px] w-full min-w-[280px] max-w-[400px] overflow-hidden rounded-[20px] border-[3px] border-[#4F4D4D] bg-[#F8F9FA] shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px] max-lg:min-h-[380px] max-md:min-h-[360px] max-md:min-w-[250px] max-[600px]:min-h-[340px] max-[600px]:max-w-[25rem] max-[480px]:min-h-[320px] max-[480px]:min-w-[200px] max-[480px]:max-w-[15rem] max-[480px]:border-2" key={project.id}>
                                <div>
                                    <img src={project.image} alt={project.title} className="h-[220px] w-full object-cover" />
                                </div>
                                <div className="box-border flex h-[calc(100%-220px)] flex-col p-5">
                                    <h3 className="m-0 text-[1.5rem] text-[#4F4D4D] max-lg:text-[1.4rem] max-md:text-[1.3rem] max-[600px]:text-[1.2rem] max-[480px]:text-[1.1rem] max-[400px]:text-[1rem]">{project.title}</h3>
                                    <p className="grow text-[1rem] text-[#4F4D4D] max-md:text-[0.95rem] max-[480px]:text-[0.9rem] max-[400px]:text-[0.85rem]">{project.description}</p>
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="rounded-[20px] bg-[#4F4D4D] px-[0.8rem] py-[0.3rem] text-[0.8rem] text-white max-[480px]:px-[0.6rem] max-[480px]:py-[0.2rem] max-[480px]:text-[0.7rem]">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between gap-[10px]">
                                        <a
                                            href={project.demolink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-1 items-center justify-center rounded-[5px] border border-[#4F4D4D] bg-white px-4 py-2 text-[0.9rem] text-[#4F4D4D] no-underline transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] max-[480px]:px-[0.8rem] max-[480px]:py-[0.4rem] max-[480px]:text-[0.8rem]"
                                            aria-label={`View ${project.title} project`}
                                        >
                                            <FaExternalLinkAlt style={{ marginRight: '6px' }} />
                                            Demo
                                        </a>
                                        <a
                                            href={project.gitlink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-1 items-center justify-center rounded-[5px] border border-[#4F4D4D] bg-[#4F4D4D] px-4 py-2 text-[0.9rem] text-white no-underline transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] max-[480px]:px-[0.8rem] max-[480px]:py-[0.4rem] max-[480px]:text-[0.8rem]"
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
                        className="absolute right-[10px] top-1/2 z-[1] -translate-y-1/2 bg-none p-[10px] text-[2.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-1/2 hover:scale-[1.2] max-lg:text-[2rem] max-md:text-[1.8rem] max-[480px]:p-[5px] max-[480px]:text-[1.6rem] max-[400px]:text-[1.4rem]"
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
                <div className="mt-[30px] flex flex-wrap justify-center max-[600px]:mt-[25px] max-[480px]:mt-5">
                    {Array.from({ length: dotsCount }).map((_, index) => (
                        <span
                            key={index}
                            className={`mx-[5px] inline-block h-3 w-3 cursor-pointer rounded-full transition-all duration-300 max-[480px]:h-[10px] max-[480px]:w-[10px] ${index === currentIndex ? 'bg-[#4F4D4D]' : 'bg-[#bbb]'}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                pauseAutoPlay();
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;