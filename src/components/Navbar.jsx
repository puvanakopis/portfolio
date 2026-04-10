import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { navReveal } from '../utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navLinkClass = "relative cursor-pointer py-2 text-[18px] text-[#4F4D4D] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full xl:text-[20px]";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSectionChange = useCallback((section) => {
    if (section === activeSection) return;

    setTimeout(() => {
      setActiveSection(section);
    }, 200);
  }, [activeSection]);

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
  }, [handleSectionChange]);


  return (
    <Motion.nav
      className="fixed top-0 z-[100] h-[10vh] min-h-[72px] w-full bg-[#F8F9FA]/90 px-4 backdrop-blur-md [font-family:'Lora',serif] sm:px-6 md:px-10 lg:px-[8%] xl:px-[10%]"
      variants={navReveal}
      initial="hidden"
      animate="show"
    >
      <div className="flex h-full w-full items-center justify-between">
        <Motion.div
          className={`text-[34px] font-extrabold text-[#4F4D4D] transition-all duration-300 sm:text-[38px] lg:text-[42px]`}
          whileHover={{ scale: 1.03 }}
        >
          Portfolio
        </Motion.div>

        {/* ------------ Desktop Navigation ------------ */}
        <div className="hidden gap-8 lg:flex xl:gap-10">

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={navLinkClass}
            onSetActive={() => handleSectionChange('about')}
          >
            About
            {activeSection === 'about' && (
              <Motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#4F4D4D]"
                layoutId="activeNavLine"
              />
            )}
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={navLinkClass}
            onSetActive={() => handleSectionChange('skills')}
          >
            Skills
            {activeSection === 'skills' && (
              <Motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#4F4D4D]"
                layoutId="activeNavLine"
              />
            )}
          </Link>
          <Link
            to="qualifications"
            spy={true}
            smooth={true}
            duration={500}
            className={navLinkClass}
            onSetActive={() => handleSectionChange('qualifications')}
          >
            Qualifications
            {activeSection === 'qualifications' && (
              <Motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#4F4D4D]"
                layoutId="activeNavLine"
              />
            )}
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={navLinkClass}
            onSetActive={() => handleSectionChange('projects')}
          >
            Projects
            {activeSection === 'projects' && (
              <Motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#4F4D4D]"
                layoutId="activeNavLine"
              />
            )}
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={navLinkClass}
            onSetActive={() => handleSectionChange('contact')}
          >
            Contact
            {activeSection === 'contact' && (
              <Motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#4F4D4D]"
                layoutId="activeNavLine"
              />
            )}
          </Link>
        </div>

        {/* ------------ Mobile Hamburger Icon ------------ */}
        <Motion.div
          className={`z-[1001] flex h-[21px] w-[30px] cursor-pointer flex-col justify-between lg:hidden ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`block h-[3px] w-full bg-[#4F4D4D] transition-all duration-300 ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}></span>
          <span className={`block h-[3px] w-full bg-[#4F4D4D] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-[3px] w-full bg-[#4F4D4D] transition-all duration-300 ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}></span>
        </Motion.div>

        {/* ------------ Mobile Navigation ------------ */}
        <AnimatePresence>
          {isOpen && (
            <Motion.div
              className="fixed left-0 top-0 z-[1000] flex h-[100dvh] w-full flex-col items-center justify-center gap-7 bg-[#F8F9FA] px-6 lg:hidden"
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className={navLinkClass}
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
                className={navLinkClass}
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
                className={navLinkClass}
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
                className={navLinkClass}
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
                className={navLinkClass}
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
                className={navLinkClass}
                onClick={closeMenu}
                onSetActive={() => handleSectionChange('contact')}
              >
                Contact
              </Link>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.nav>
  );
};

export default Navbar;