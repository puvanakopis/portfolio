import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ show: false, success: false, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4fsjyzl', 'template_b7ky1fb', form.current, {
        publicKey: '6E0FxfvHVy52L35Og',
      })
      .then(
        () => {
          setNotification({ show: true, success: true, message: 'Message sent successfully!' });
          form.current.reset();
          setTimeout(() => setNotification({ show: false }), 3000);
        },
        (error) => {
          setNotification({ show: true, success: false, message: 'Failed to send message. Please try again.' });
          setTimeout(() => setNotification({ show: false }), 3000);
        },
      );
  };

  return (
    <div className="contact" id="contact">
      {/* Notification Overlay */}
      {notification.show && (
        <div className="notification-overlay">
          <div className={`notification ${notification.success ? 'success' : 'error'}`}>
            <div className="notification-message">{notification.message}</div>
          </div>
        </div>
      )}

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
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name='name' placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name='email' placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" name='subject' placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" name='message' rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-1 btn-dark">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;