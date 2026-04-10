import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

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
    if (section === 'home') return 'Portfolio';
    else if (section === 'about') return 'About Me';
    else if (section === 'skills') return 'My Skills';
    else if (section === 'qualifications') return 'Qualifications';
    else if (section === 'projects') return 'My Projects';
    else if (section === 'contact') return 'Contact Me';
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <nav className="fixed left-[10%] top-0 z-[1000] h-[10vh] w-[80%] bg-[#F8F9FA] p-0 max-lg:left-[5%] max-lg:w-[90%]">
      <div className="flex w-full items-center justify-between pt-[10px]">
        <div
          className={`[font-extrabold text-[45px] font-extrabold text-[#4F4D4D] transition-all duration-300 max-lg:text-[3rem] max-[480px]:text-[2rem] ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          {formatSectionName(activeSection)}
        </div>

        {/* ------------ Desktop Navigation ------------ */}
        <div className="flex gap-10 max-lg:hidden">

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
            onSetActive={() => handleSectionChange('about')}
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
            onSetActive={() => handleSectionChange('skills')}
          >
            Skills
          </Link>
          <Link
            to="qualifications"
            spy={true}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
            onSetActive={() => handleSectionChange('qualifications')}
          >
            Qualifications
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
            onSetActive={() => handleSectionChange('projects')}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
            onSetActive={() => handleSectionChange('contact')}
          >
            Contact
          </Link>
        </div>

        {/* ------------ Mobile Hamburger Icon ------------ */}
        <div
          className={`z-[1001] hidden h-[21px] w-[30px] cursor-pointer flex-col justify-between max-lg:flex ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className={`block h-[3px] w-full bg-[#4F4D4D] transition-all duration-300 ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}></span>
          <span className={`block h-[3px] w-full bg-[#4F4D4D] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-[3px] w-full bg-[#4F4D4D] transition-all duration-300 ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}></span>
        </div>

        {/* ------------ Mobile Navigation ------------ */}
        <div
          className={`fixed left-0 top-0 z-[1000] flex h-[110vh] w-full flex-col items-center justify-center gap-10 bg-[#F8F9FA] transition-all duration-500 lg:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
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
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
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
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
            onClick={closeMenu}
            onSetActive={() => handleSectionChange('skills')}
          >
            Skills
          </Link>
          <Link
            to="qualifications"
            spy={true}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
            onClick={closeMenu}
            onSetActive={() => handleSectionChange('qualifications')}
          >
            Qualifications
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
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
            className="relative cursor-pointer py-2 text-[20px] text-[#4F4D4D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
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