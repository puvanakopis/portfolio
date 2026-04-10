import profileImage from '../assets/puvi.png';
import {
  FaUniversity,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBullseye,
} from 'react-icons/fa';
import { MdOutlineSmartToy } from 'react-icons/md';

const About = () => {
  return (
    <section className="flex w-full h-full  items-start justify-start flex-col pb-[20vh] min-[1024px]:min-h-[100vh] max-[600px]:pb-[15vh] max-[480px]:pb-[12vh]" id="about">
      <h1 className=" flex w-fit min-h-[10vh] items-start justify-between font-extrabold text-[45px] text-[#4F4D4D] transition-all duration-300 max-lg:pb-[4vh] max-lg:text-[3rem] max-[480px]:text-[2rem]">
        About Me
      </h1>

      <div className="mx-auto flex w-full h-full min-h-[90vh] items-center justify-between gap-12 max-lg:flex-col-reverse max-lg:gap-10">

        {/* RIGHT CONTENT */}
        <div className="group relative flex w-[35%] justify-center max-lg:mb-8 max-lg:w-full animate-[heroRise_1s_ease-out] [animation-delay:260ms] [animation-fill-mode:both]">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#4F4D4D]/35 via-[#4F4D4D]/20 to-[#4F4D4D]/10 blur-3xl opacity-70 transition-all duration-700 group-hover:opacity-100 animate-[pulseSoft_3.2s_ease-in-out_infinite]"></div>

          <div className="relative isolate w-full max-w-[380px] overflow-hidden rounded-2xl [clip-path:inset(0_round_1rem)] border-4 border-white/90 opacity-90 shadow-[0_22px_45px_-15px_rgba(15,23,42,0.35)] ring-1 ring-slate-100/70 transform-gpu transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100 animate-[floatY_5s_ease-in-out_infinite]">
            <img
              src={profileImage}
              alt="Puvankopis"
              className="h-full w-full rounded-[inherit] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-slate-900/25 via-transparent to-transparent"></div>

            <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100 animate-[heroFade_0.9s_ease-out] [animation-delay:600ms] [animation-fill-mode:both]">
              Open for Opportunities
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl border border-white/70 bg-white/90 p-3 shadow-lg backdrop-blur-md animate-[heroFade_0.9s_ease-out] [animation-delay:700ms] [animation-fill-mode:both]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F4D4D]/15 text-[#4F4D4D] shadow-inner">
                <MdOutlineSmartToy />
              </div>
              <div>
                <p className="text-xs text-slate-500">Focus</p>
                <p className="text-sm font-bold text-slate-800">Web + AI Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div className="w-[55%] animate-[heroFade_0.95s_ease-out] [animation-delay:120ms] [animation-fill-mode:both] max-lg:w-full max-lg:text-center">
          <p className="mb-6 text-base leading-[1.75] text-slate-700 md:text-lg">
            I am a passionate developer skilled in web development, data analysis, and AI/machine learning. I completed my studies at BT/PD/Kaluthavalai Maha Vidyalayam and currently study at Sabaragamuwa University of Sri Lanka.
          </p>

          <p className="mb-8 text-base leading-[1.75] text-slate-700 md:text-lg">
            Outside coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring others. I focus on creating practical solutions with great user experiences.
          </p>

          {/* 2x2 INFO GRID */}
          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:justify-items-center">

            {/* University */}
            <div className="flex items-start gap-3 rounded-xl border border-[#c7c2b8] bg-white/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 rounded-xl border border-[#c7c2b8] bg-white/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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
            </div>

            {/* Goal */}
            <div className="flex items-start gap-3 rounded-xl border border-[#c7c2b8] bg-white/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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
            </div>

            {/* Availability */}
            <div className="flex items-start gap-3 rounded-xl border border-[#c7c2b8] bg-white/80 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;