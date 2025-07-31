import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact" id="contact">
  <div className='logo'>
          Contact Me
        </div>
      <div className="contact-container">
      
        {/* ------------ Contact Info ------------ */}
        <div className='info-container'>
          <h2 className="info-title">Get In Touch</h2>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>puvanakopis@gmail.com</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>+94 75 46 14 044</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>Batticaloa, Sri Lanka</p>
            </div>
          </div>
        </div>


        {/* ------------ Contact Form ------------ */}
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-1 btn-dark">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;