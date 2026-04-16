import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { itemFadeUp, staggerContainer, viewportDefault } from '../utils/animations';

const Contact = () => {
  const form = useRef();
  const initialNotification = { show: false, success: false, message: '' };
  const [notification, setNotification] = useState(initialNotification);

  const contactItems = [
    {
      title: 'Email',
      value: 'puvanakopis@gmail.com',
      icon: <FaEnvelope size={18} />,
    },
    {
      title: 'Phone',
      value: '+94 75 46 14 044',
      icon: <FaPhone size={18} />,
    },
    {
      title: 'Location',
      value: 'Batticaloa, Sri Lanka',
      icon: <FaMapMarkerAlt size={18} />,
    },
  ];

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
          setTimeout(() => setNotification(initialNotification), 3000);
        },
        () => {
          setNotification({ show: true, success: false, message: 'Failed to send message. Please try again.' });
          setTimeout(() => setNotification(initialNotification), 3000);
        },
      );
  };

  const inputClassName = 'w-full rounded-lg border border-[#c7c2b8] bg-white px-4 py-3 text-[1rem] text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#4F4D4D]';
  const buttonClassName = 'inline-flex w-fit cursor-pointer items-center justify-center rounded-lg border border-[#4F4D4D] bg-[#4F4D4D] px-6 py-3 text-[1rem] font-medium text-[#F8F9FA] transition-all duration-300 hover:bg-transparent hover:text-[#4F4D4D] max-md:w-full';

  return (
    <section className="pt-[15vh] relative flex w-full flex-col pb-[12vh] min-[1024px]:min-h-[72vh]" id="contact">
      {/* Notification Overlay */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            className="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-black/40 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`flex w-full max-w-[520px] items-center gap-4 rounded-xl border  bg-[#F8F9FA] px-6 py-5 shadow-[0_8px_20px_rgba(0,0,0,0.18)] ${notification.success ? 'border-[#4F4D4D] text-[#4F4D4D]' : 'border-[#4F4D4D] text-[#4F4D4D]'}`}
              initial={{ y: 22, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 16, scale: 0.98 }}
            >
              <div className="text-[1.2rem]">
                {notification.success ? <FaCheckCircle /> : <FaExclamationCircle />}
              </div>
              <div className="text-[1rem] font-semibold">{notification.message}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionHeading
        title="Contact Me"
        kicker="Let’s Talk"
        className="mx-auto items-center text-center"
      />

      <motion.div
        className="grid w-full grid-cols-1 gap-4 pt-4 sm:pt-6 lg:grid-cols-2 lg:gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportDefault}
      >
        {/* Contact Info */}
        <motion.div className="flex flex-col gap-5 rounded-xl px-4 py-4 transition-all duration-300 sm:px-5 sm:py-5" variants={itemFadeUp}>
          <h2 className="text-[1.5rem] font-semibold text-[#4F4D4D]">Get In Touch</h2>

          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <motion.div key={item.title} className="rounded-lg px-2 py-3 sm:px-4 sm:py-4" variants={itemFadeUp} whileHover={{ x: 4 }}>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F4D4D]/10 text-[#4F4D4D]">
                    <div className="flex justify-center align-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-[1rem] font-semibold text-[#4F4D4D]">{item.title}</h3>
                </div>
                <p className="pl-12 text-[0.98rem] text-slate-700">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="flex flex-col gap-4 rounded-xl px-4 py-4 transition-all duration-300 sm:px-5 sm:py-5"
          ref={form}
          onSubmit={sendEmail}
          variants={itemFadeUp}
        >
          <h2 className="text-[1.5rem] font-semibold text-[#4F4D4D]">Send a Message</h2>

          <div className="flex flex-col gap-4">
            <input className={inputClassName} type="text" name="name" placeholder="Your Name" required />
            <input className={inputClassName} type="email" name="email" placeholder="Your Email" required />
            <input className={inputClassName} type="text" name="subject" placeholder="Subject" required />
            <textarea className={`${inputClassName} min-h-[150px] resize-y`} placeholder="Your Message" name="message" rows="5" required />
          </div>

          <motion.button type="submit" className={buttonClassName} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;