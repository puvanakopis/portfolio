import profileImage from '../assets/puvi.png';
import {
  FaUniversity,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBullseye,
} from 'react-icons/fa';
import { MdOutlineSmartToy } from 'react-icons/md';
import { motion } from 'framer-motion';
import { headingReveal, imageFloatIn, itemFadeUp, staggerContainer, viewportDefault } from '../utils/animations';

const About = () => {
  return (
    <section className="flex w-full h-full  items-start justify-start flex-col pb-[20vh] min-[1024px]:min-h-[100vh] max-[600px]:pb-[15vh] max-[480px]:pb-[12vh]" id="about">
      <motion.h1
        className=" flex w-fit min-h-[10vh] items-start justify-between font-extrabold text-[45px] text-[#4F4D4D] transition-all duration-300 max-lg:pb-[4vh] max-lg:text-[3rem] max-[480px]:text-[2rem]"
        variants={headingReveal}
        initial="hidden"
        whileInView="show"
        viewport={viewportDefault}
      >
        About Me
      </motion.h1>

      <div className="mx-auto flex w-full h-full min-h-[90vh] items-center justify-between gap-12 max-lg:flex-col-reverse max-lg:gap-10">

        {/* RIGHT CONTENT */}
        <motion.div
          className="group relative flex w-[35%] justify-center max-lg:mb-8 max-lg:w-full"
          variants={imageFloatIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#4F4D4D]/35 via-[#4F4D4D]/20 to-[#4F4D4D]/10 blur-3xl opacity-70 transition-all duration-700 group-hover:opacity-100 animate-[pulseSoft_3.2s_ease-in-out_infinite]"></div>

          <div className="relative isolate w-full max-w-[380px] overflow-hidden rounded-2xl [clip-path:inset(0_round_1rem)] border-4 border-white/90 opacity-90 shadow-[0_22px_45px_-15px_rgba(15,23,42,0.35)] ring-1 ring-slate-100/70 transform-gpu transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100 animate-[floatY_5s_ease-in-out_infinite]">
            <img
              src={profileImage}
              alt="Puvankopis"
              className="h-full w-full rounded-[inherit] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-slate-900/25 via-transparent to-transparent"></div>

            <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100">
              Open for Opportunities
            </div>

            <motion.div
              className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl border border-white/70 bg-white/90 p-3 shadow-lg backdrop-blur-md"
              variants={itemFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportDefault}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F4D4D]/15 text-[#4F4D4D] shadow-inner">
                <MdOutlineSmartToy />
              </div>
              <div>
                <p className="text-xs text-slate-500">Focus</p>
                <p className="text-sm font-bold text-slate-800">Web + AI Solutions</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          className="w-[55%] max-lg:w-full max-lg:text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
        >
          <motion.p className="mb-6 text-base leading-[1.75] text-slate-700 md:text-lg" variants={itemFadeUp}>
            I am a passionate developer skilled in web development, data analysis, and AI/machine learning. I completed my studies at BT/PD/Kaluthavalai Maha Vidyalayam and currently study at Sabaragamuwa University of Sri Lanka.
          </motion.p>

          <motion.p className="mb-8 text-base leading-[1.75] text-slate-700 md:text-lg" variants={itemFadeUp}>
            Outside coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring others. I focus on creating practical solutions with great user experiences.
          </motion.p>

          {/* 2x2 INFO GRID */}
          <motion.div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:justify-items-center" variants={staggerContainer}>

            {/* University */}
            <motion.div className="flex items-start gap-3 rounded-xl border border-[#c7c2b8] bg-white/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" variants={itemFadeUp} whileHover={{ y: -3 }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F4D4D]/10 text-[#4F4D4D]">
                <FaUniversity className="text-[14px]" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-[#4F4D4D]">
                  University
                </span>
                <p className="text-sm text-slate-700">
                  Sabaragamuwa University of Sri Lanka
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div className="flex items-start gap-3 rounded-xl border border-[#c7c2b8] bg-white/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" variants={itemFadeUp} whileHover={{ y: -3 }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F4D4D]/10 text-[#4F4D4D]">
                <FaMapMarkerAlt className="text-[14px]" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-[#4F4D4D]">
                  Location
                </span>
                <p className="text-sm text-slate-700">
                  Batticaloa, Sri Lanka
                </p>
              </div>
            </motion.div>

            {/* Goal */}
            <motion.div className="flex items-start gap-3 rounded-xl border border-[#c7c2b8] bg-white/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" variants={itemFadeUp} whileHover={{ y: -3 }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F4D4D]/10 text-[#4F4D4D]">
                <FaBullseye className="text-[14px]" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-[#4F4D4D]">
                  Goal
                </span>
                <p className="text-sm text-slate-700">
                  Build impactful AI & web solutions
                </p>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div className="flex items-start gap-3 rounded-xl border border-[#c7c2b8] bg-white/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" variants={itemFadeUp} whileHover={{ y: -3 }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F4D4D]/10 text-[#4F4D4D]">
                <FaCheckCircle className="text-[14px]" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-[#4F4D4D]">
                  Availability
                </span>
                <p className="text-sm text-slate-700">
                  Available for Work
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;