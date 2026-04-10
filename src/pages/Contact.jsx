import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useRef, useState } from 'react';
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
        () => {
          setNotification({ show: true, success: false, message: 'Failed to send message. Please try again.' });
          setTimeout(() => setNotification({ show: false }), 3000);
        },
      );
  };

  const inputClassName = 'w-[90%] rounded-[5px] border-2 border-[#4F4D4D] p-[0.8rem] text-[1rem] text-[#4F4D4D] outline-none focus:border-[#4F4D4D] max-[600px]:text-[15px]';
  const buttonClassName = 'ml-[2.5%] inline-flex w-fit cursor-pointer items-center justify-center rounded-[5px] border-2 border-[#4F4D4D] bg-[#4F4D4D] px-5 py-3 text-[20px] text-[#F8F9FA] transition-all duration-300 hover:bg-[#F8F9FA] hover:text-[#4F4D4D] max-md:w-full max-md:text-[14px] max-[480px]:text-[13px]';

  return (
    <div className="flex h-fit w-full flex-col pb-[8vh] min-[1024px]:min-h-[85vh] max-lg:h-auto max-lg:pb-[5vh] max-[600px]:px-0 max-[600px]:pb-[30px]" id="contact">
      {/* Notification Overlay */}
      {notification.show && (
        <div className="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-black/50">
          <div
            className={`flex max-w-[80%] animate-[fadeIn_0.3s_ease-in-out] items-center gap-5 rounded-[15px] border-2 px-10 py-[30px] text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.02] hover:rounded-[25px] max-lg:gap-[15px] max-lg:px-[30px] max-lg:py-[25px] max-md:max-w-[90%] max-md:flex-col max-md:p-5 max-[480px]:w-[80%] max-[480px]:rounded-[10px] max-[480px]:p-[15px] max-[480px]:hover:scale-100 ${notification.success ? 'border-[#4F4D4D] bg-[#F8F9FA] text-[#4F4D4D]' : 'border-[#4F4D4D] bg-[#F8F9FA] text-[#4F4D4D]'}`}
          >
            <div className="text-[24px] font-semibold max-lg:text-[20px] max-md:text-[18px] max-[480px]:text-[16px]">{notification.message}</div>
          </div>
        </div>
      )}

      <div className="z-[999] flex w-fit items-start justify-start pt-3 pb-[10vh] [font-family:'Cormorant_Garamond',serif] text-[55px] font-extrabold text-[#4F4D4D] transition-all duration-300 max-lg:pb-[5vh] max-lg:text-[3rem] max-[480px]:text-[2rem]">
        Contact Me
      </div>
      <div className="flex flex-row max-lg:flex-col">
        {/* ------------ Contact Info ------------ */}
        <div className="flex-1 max-lg:text-center">
          <h2 className="pb-[25px] text-[35px] font-medium max-lg:text-[30px] max-[600px]:mb-5 max-[600px]:text-[28px]">Get In Touch</h2>

          <div>
            <div className="relative mb-8 pl-10 max-lg:pl-0 max-lg:text-center">
              <div className="absolute left-0 top-0 text-[1.2rem] text-[#4F4D4D] max-lg:relative max-lg:mb-[10px]">
                <FaEnvelope />
              </div>
              <h3 className="mb-2 [font-family:'Cormorant_Garamond',serif] text-[1.2rem] text-[#4F4D4D] max-lg:text-[18px]">Email</h3>
              <p className="text-[1.1rem] max-lg:text-[16px]">puvanakopis@gmail.com</p>
            </div>
            <div className="relative mb-8 pl-10 max-lg:pl-0 max-lg:text-center">
              <div className="absolute left-0 top-0 text-[1.2rem] text-[#4F4D4D] max-lg:relative max-lg:mb-[10px]">
                <FaPhone />
              </div>
              <h3 className="mb-2 [font-family:'Cormorant_Garamond',serif] text-[1.2rem] text-[#4F4D4D] max-lg:text-[18px]">Phone</h3>
              <p className="text-[1.1rem] max-lg:text-[16px]">+94 75 46 14 044</p>
            </div>
            <div className="relative mb-8 pl-10 max-lg:pl-0 max-lg:text-center">
              <div className="absolute left-0 top-0 text-[1.2rem] text-[#4F4D4D] max-lg:relative max-lg:mb-[10px]">
                <FaMapMarkerAlt />
              </div>
              <h3 className="mb-2 [font-family:'Cormorant_Garamond',serif] text-[1.2rem] text-[#4F4D4D] max-lg:text-[18px]">Location</h3>
              <p className="text-[1.1rem] max-lg:text-[16px]">Batticaloa, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* ------------ Contact Form ------------ */}
        <form className="flex flex-1 flex-col gap-6" ref={form} onSubmit={sendEmail}>
          <div className="flex items-center justify-center">
            <input className={inputClassName} type="text" name='name' placeholder="Your Name" required />
          </div>
          <div className="flex items-center justify-center">
            <input className={inputClassName} type="email" name='email' placeholder="Your Email" required />
          </div>
          <div className="flex items-center justify-center">
            <input className={inputClassName} type="text" name='subject' placeholder="Subject" required />
          </div>
          <div className="flex items-center justify-center">
            <textarea className={`${inputClassName} min-h-[150px] resize-y`} placeholder="Your Message" name='message' rows="5" required></textarea>
          </div>
          <button type="submit" className={buttonClassName}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;