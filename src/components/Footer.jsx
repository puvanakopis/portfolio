import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8F9FA] pb-4 text-[#4F4D4D]" id="contact">
      <div className="mx-auto w-[80%] max-lg:w-[90%]">
        <div className="flex flex-col items-center gap-y-[1.8rem] gap-x-8">
          <hr className="w-full border-t border-[#4F4D4D]/20" />
          <div className="[font-family:'Cormorant_Garamond',serif] text-[2.5rem] font-extrabold text-[#4F4D4D] max-md:text-[2rem]">
            <span>Puvankopis</span>
          </div>

          <div className="flex cursor-pointer flex-wrap justify-center gap-6 max-md:hidden">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="relative text-[1.1rem] text-[#4F4D4D] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
              offset={0}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="relative text-[1.1rem] text-[#4F4D4D] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
              offset={0}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="relative text-[1.1rem] text-[#4F4D4D] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
              offset={0}
            >
              Skills
            </Link>
            <Link
              to="qualifications"
              smooth={true}
              duration={500}
              className="relative text-[1.1rem] text-[#4F4D4D] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
              offset={0}
            >
              Qualifications
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="relative text-[1.1rem] text-[#4F4D4D] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
              offset={0}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="relative text-[1.1rem] text-[#4F4D4D] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#4F4D4D] after:transition-all after:duration-300 hover:after:w-full"
              offset={0}
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-6 max-[480px]:gap-4">
            <a href="https://github.com/puvanakopis" target="_blank" rel="noopener noreferrer" className="text-[1.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-[5px]">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/puvanakopis/" target="_blank" rel="noopener noreferrer" className="text-[1.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-[5px]">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/puvanakopis/" target="_blank" rel="noopener noreferrer" className="text-[1.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-[5px]">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/puvanakopis" target="_blank" rel="noopener noreferrer" className="text-[1.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-[5px]">
              <FaXTwitter />
            </a>
            <a href="https://www.facebook.com/puvanakopis" target="_blank" rel="noopener noreferrer" className="text-[1.5rem] text-[#4F4D4D] transition-all duration-300 hover:-translate-y-[5px]">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="border-t border-[#4F4D4D]/10 pt-4 text-center text-[0.9rem] max-[480px]:text-[0.8rem]">
          <p>&copy; {new Date().getFullYear()} Puvankopis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;