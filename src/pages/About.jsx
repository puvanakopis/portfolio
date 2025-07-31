import './About.css';
import profileImage from '../assets/puvi.png';
import { FaUser, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about" id="about">
      <div className='logo'>
        About Me
      </div>
      <div className="about-container">

        {/* ------------ Profile image ------------ */}
        <div className="about-image">
          <img src={profileImage} alt="Puvankopis" />
        </div>

        {/* ------------ About content ------------ */}
        <div className="about-content">
          <div className="about-text">
            {/* about paragraphs */}
            <p>
              I am a passionate developer skilled in web development, data analysis, and AI/machine learning. I completed my studies at BT/PD/Kaluthavalai Maha Vidyalayam and currently study at Sabaragamuwa University of Sri Lanka.
            </p>
            <p>
              Outside coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring others. I focus on creating practical solutions with great user experiences.
            </p>

            {/* personal details */}
            <div className="about-details">
              <div className="detail-item">
                <FaUser className="detail-icon" />
                <span>Name:</span>
                <p>Puvankopis</p>
              </div>
              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <span>Email:</span>
                <p>puvanakopis@gmail.com</p>
              </div>
              <div className="detail-item">
                <FaMapMarkerAlt className="detail-icon" />
                <span>From:</span>
                <p>Batticaloa, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;