import profileImage from '../assets/puvi.png';
import { FaUser, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex h-fit w-full flex-col pb-[15vh] min-[1024px]:min-h-[85vh]" id="about">
      <div className="z-[999] flex w-fit items-start justify-start pt-3 pb-[10vh] [font-family:'Cormorant_Garamond',serif] text-[55px] font-extrabold text-[#4F4D4D] transition-all duration-300 max-lg:pb-[5vh] max-lg:text-[3rem] max-[480px]:text-[2rem]">
        About Me
      </div>
      <div className="mx-auto flex items-center justify-center gap-12 px-8 max-lg:flex-col max-lg:gap-8 max-lg:px-4">

        {/* ------------ Profile image ------------ */}
        <div className="flex flex-1 justify-center max-[480px]:hidden max-lg:mb-8 max-lg:w-full">
          <img src={profileImage} alt="Puvankopis" className="w-full max-w-[400px] rounded-[20px] object-cover max-lg:max-w-[300px]" />
        </div>

        {/* ------------ About content ------------ */}
        <div className="flex-1 max-lg:w-full max-lg:text-center">
          <div>
            {/* about paragraphs */}
            <p className="mb-6 text-[1.1rem] leading-[1.6] max-lg:text-[1rem] max-[480px]:text-[0.9rem]">
              I am a passionate developer skilled in web development, data analysis, and AI/machine learning. I completed my studies at BT/PD/Kaluthavalai Maha Vidyalayam and currently study at Sabaragamuwa University of Sri Lanka.
            </p>
            <p className="mb-6 text-[1.1rem] leading-[1.6] max-lg:text-[1rem] max-[480px]:text-[0.9rem]">
              Outside coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring others. I focus on creating practical solutions with great user experiences.
            </p>

            {/* personal details */}
            <div className="mt-8 grid grid-cols-1 gap-6 max-lg:justify-items-center">
              <div className="flex h-auto flex-row items-center gap-[10px] max-lg:flex-col max-lg:gap-[5px] max-lg:text-center">
                <FaUser className="h-[15px] w-[15px]" />
                <span className="whitespace-nowrap font-semibold text-[#4F4D4D]">Name:</span>
                <p className="m-0 text-[#4F4D4D]">Puvankopis</p>
              </div>
              <div className="flex h-auto flex-row items-center gap-[10px] max-lg:flex-col max-lg:gap-[5px] max-lg:text-center">
                <FaEnvelope className="h-[15px] w-[15px]" />
                <span className="whitespace-nowrap font-semibold text-[#4F4D4D]">Email:</span>
                <p className="m-0 text-[#4F4D4D]">puvanakopis@gmail.com</p>
              </div>
              <div className="flex h-auto flex-row items-center gap-[10px] max-lg:flex-col max-lg:gap-[5px] max-lg:text-center">
                <FaMapMarkerAlt className="h-[15px] w-[15px]" />
                <span className="whitespace-nowrap font-semibold text-[#4F4D4D]">From:</span>
                <p className="m-0 text-[#4F4D4D]">Batticaloa, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;