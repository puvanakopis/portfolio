import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { headingReveal, itemFadeUp, sectionReveal, staggerContainer, viewportDefault } from '../utils/animations';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      id: 1,
      title: "GCE Advanced Level (Physical Science)",
      institution: "BT/PD/Kaluthavalai Maha Vidyalayam (National School)",
      period: "2019 – 2021",
      side: "right"
    },
    {
      id: 2,
      title: "BSc (Hons) in Software Engineering",
      institution: "Sabaragamuwa University of Sri Lanka",
      period: "2023 – present",
      side: "left"
    },
  ];

  const experienceData = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Fiverr",
      period: "Jun 2024 – present",
      side: "left"
    },
  ];

  return (
    <motion.section
      className="w-full pb-[16vh] min-[1024px]:min-h-[90vh]"
      id="qualifications"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportDefault}
    >
      <motion.div className="z-[999] flex w-fit items-start justify-start pb-[9vh] font-extrabold text-[45px] text-[#4F4D4D] transition-all duration-300 max-lg:text-[3rem] max-[480px]:text-[2rem]" variants={headingReveal}>
        Qualifications
      </motion.div>

      <div className="mx-auto max-w-[1000px] gap-12 px-2 md:px-4">

        {/* Tabs */}
        <motion.div
          className="mb-10 flex justify-center gap-4 max-[769px]:flex-col max-[769px]:items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
        >
          <motion.button
            type="button"
            className={`group flex cursor-pointer items-center rounded-xl border border-[#4F4D4D]/50 px-6 py-[0.85rem] shadow-[0_10px_25px_-18px_rgba(15,23,42,0.55)] backdrop-blur-sm transition-all duration-300 max-[769px]:w-[85%] max-[769px]:justify-center ${activeTab === 'education'
                ? 'bg-[#4F4D4D] text-[#F8F9FA] ring-1 ring-[#4F4D4D]/30'
                : 'bg-white/85 text-[#4F4D4D] hover:-translate-y-0.5 hover:bg-[#4F4D4D] hover:text-[#F8F9FA]'
              }`}
            onClick={() => setActiveTab('education')}
            variants={itemFadeUp}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGraduationCap className="mr-2 text-[1.1rem] transition-transform duration-300 group-hover:scale-110" />
            <span>Education</span>
          </motion.button>

          <motion.button
            type="button"
            className={`group flex cursor-pointer items-center rounded-xl border border-[#4F4D4D]/50 px-6 py-[0.85rem] shadow-[0_10px_25px_-18px_rgba(15,23,42,0.55)] backdrop-blur-sm transition-all duration-300 max-[769px]:w-[85%] max-[769px]:justify-center ${activeTab === 'experience'
                ? 'bg-[#4F4D4D] text-[#F8F9FA] ring-1 ring-[#4F4D4D]/30'
                : 'bg-white/85 text-[#4F4D4D] hover:-translate-y-0.5 hover:bg-[#4F4D4D] hover:text-[#F8F9FA]'
              }`}
            onClick={() => setActiveTab('experience')}
            variants={itemFadeUp}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaBriefcase className="mr-2 text-[1.1rem] transition-transform duration-300 group-hover:scale-110" />
            <span>Experience</span>
          </motion.button>
        </motion.div>

        {/* Content */}
        <div>
          <motion.div
            className="relative py-8 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-[#4F4D4D]/20 before:via-[#4F4D4D]/65 before:to-[#4F4D4D]/20 max-[769px]:py-0 max-[769px]:before:hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportDefault}
          >

            {activeTab === 'education'
              ? educationData.map((item, index) => (
                <div
                  key={item.id}
                  className="relative mb-8 w-full before:absolute before:top-6 before:z-[1] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-white/70 before:bg-[#4F4D4D] before:shadow before:left-1/2 before:-translate-x-2 max-[769px]:before:hidden"
                >
                  <motion.div
                    className={`group relative w-[45%] rounded-xl border border-[#c7c2b8] bg-white/80 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md animate-[heroRise_0.75s_ease-out] [animation-fill-mode:both] max-[769px]:ml-8 max-[769px]:w-[calc(100%-3rem)] max-[769px]:text-left ${item.side === 'left'
                        ? 'ml-[-1.5rem] mr-auto text-left'
                        : 'ml-auto mr-[-1.5rem] text-right'
                      }`}
                    variants={itemFadeUp}
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="mb-1 text-[1.1rem] font-semibold text-[#4F4D4D]">
                      {item.title}
                    </h3>
                    <p className="mb-2 text-sm text-slate-700">
                      {item.institution}
                    </p>
                    <div
                      className={`flex items-center gap-2 text-sm text-slate-700 ${item.side === 'right'
                          ? 'justify-end max-[769px]:justify-start'
                          : 'justify-start'
                        }`}
                    >
                      <FaCalendarAlt className="text-[#4F4D4D]" />
                      <span>{item.period}</span>
                    </div>
                  </motion.div>
                </div>
              ))
              : experienceData.map((item, index) => (
                <div
                  key={item.id}
                  className="relative mb-8 w-full before:absolute before:top-6 before:z-[1] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-white/70 before:bg-[#4F4D4D] before:shadow before:left-1/2 before:-translate-x-2 max-[769px]:before:hidden"
                >
                  <motion.div
                    className={`group relative w-[45%] rounded-xl border border-[#c7c2b8] bg-white/80 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md animate-[heroRise_0.75s_ease-out] [animation-fill-mode:both] max-[769px]:ml-8 max-[769px]:w-[calc(100%-3rem)] max-[769px]:text-left ${item.side === 'left'
                        ? 'ml-[-1.5rem] mr-auto text-left'
                        : 'ml-auto mr-[-1.5rem] text-right'
                      }`}
                    variants={itemFadeUp}
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="mb-1 text-[1.1rem] font-semibold text-[#4F4D4D]">
                      {item.title}
                    </h3>
                    <p className="mb-2 text-sm text-slate-700">
                      {item.company}
                    </p>
                    <div
                      className={`flex items-center gap-2 text-sm text-slate-700 ${item.side === 'right'
                          ? 'justify-end max-[769px]:justify-start'
                          : 'justify-start'
                        }`}
                    >
                      <FaCalendarAlt className="text-[#4F4D4D]" />
                      <span>{item.period}</span>
                    </div>
                  </motion.div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Qualifications;