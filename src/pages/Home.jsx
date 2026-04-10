import { useState, useEffect } from 'react';
import { FaDownload, FaEnvelopeOpenText } from 'react-icons/fa';
import { MdOutlineSmartToy } from "react-icons/md";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import cvFile from '../assets/Puvanakopis_CV.pdf';
import profileImage from '../assets/puvi.png';
import DarkButton from '../components/buttons/DarkButton';
import { imageFloatIn, itemFadeUp, sectionReveal, staggerContainer, viewportDefault } from '../utils/animations';

const TITLES = ["Frontend Developer", "Backend Developer", "AI/ML Engineer"];

const Home = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    // Typing effect
    useEffect(() => {
        if (charIndex < TITLES[currentTitleIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + TITLES[currentTitleIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, currentTitleIndex]);

    return (
        <motion.div
            className="relative flex w-full items-center justify-between gap-10 pb-16 pt-4 min-[1024px]:min-h-[calc(100vh-10vh)] max-lg:flex-col max-lg:gap-8 max-lg:pb-12 max-lg:text-center"
            id="home"
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportDefault}
        >
            {/* ---------------- LEFT CONTENT ---------------- */}
            <motion.div
                className="order-2 flex w-full max-w-3xl flex-col justify-center min-[1024px]:order-1 min-[1024px]:w-1/2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportDefault}
            >

                {/* Heading */}
                <motion.h2 className="mb-1 text-[19px] font-medium sm:text-[22px]" variants={itemFadeUp}>
                    Hi, I'm
                </motion.h2>

                {/* Name */}
                <motion.div className="mb-6 text-[clamp(36px,10vw,72px)] font-extrabold leading-none" variants={itemFadeUp}>
                    Puvanakopis
                </motion.div>

                {/* Typing role */}
                <motion.h2 className="mb-6 min-h-[2.1rem] text-[clamp(20px,5vw,30px)] font-medium" variants={itemFadeUp}>
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </motion.h2>

                {/* Description */}
                <motion.p className="mb-6 max-w-xl text-base leading-relaxed md:text-lg" variants={itemFadeUp}>
                    I specialize in architecting robust server-side applications and integrating artificial intelligence into modern web solutions. Turning complex logic into seamless experiences.
                </motion.p>

                {/* Buttons */}
                <motion.div className="mt-4 flex flex-wrap gap-3 max-md:flex-col max-md:items-stretch" variants={itemFadeUp}>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="inline-flex w-fit cursor-pointer items-center justify-center rounded-lg border border-[#4F4D4D] bg-transparent px-6 py-3 text-[1rem] font-medium text-[#4F4D4D] no-underline transition-all duration-300 hover:bg-[#4F4D4D] hover:text-[#F8F9FA] max-md:w-full"
                    >
                        <FaEnvelopeOpenText style={{ marginRight: '8px' }} />
                        Contact Me
                    </Link>

                    <DarkButton
                        href={cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaDownload style={{ marginRight: '8px' }} />
                        Download CV
                    </DarkButton>
                </motion.div>
            </motion.div>


            {/* ---------------- RIGHT IMAGE SECTION (NEW STYLE) ---------------- */}
            <motion.div className="group order-1 relative flex w-full justify-center min-[1024px]:order-2 min-[1024px]:w-[42%]" variants={imageFloatIn} initial="hidden" whileInView="show" viewport={viewportDefault}>
                {/* Glow Background */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#4F4D4D]/35 via-[#4F4D4D]/20 to-[#4F4D4D]/10 blur-3xl opacity-80 transition-all duration-700 group-hover:scale-105 animate-[pulseSoft_3.2s_ease-in-out_infinite]"></div>

                {/* Main Image Card */}
                <div className="relative isolate w-full max-w-[320px] overflow-hidden rounded-2xl [clip-path:inset(0_round_1rem)] border-4 border-white/90 shadow-[0_22px_45px_-15px_rgba(15,23,42,0.35)] ring-1 ring-slate-100/70 rotate-1 transform-gpu transition-all duration-500 group-hover:rotate-0 group-hover:-translate-y-1 animate-[floatY_5s_ease-in-out_infinite] sm:max-w-[360px] md:max-w-[390px]">
                    <img
                        src={profileImage}
                        alt="Puvanakopis"
                        className="h-full w-full rounded-[inherit] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-slate-900/25 via-transparent to-transparent"></div>

                    <motion.div className="absolute right-3 top-3 rounded-full border border-white/60 bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-700 backdrop-blur-md sm:right-4 sm:top-4 sm:px-3 sm:text-[11px]" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={viewportDefault}>
                        Open to Work
                    </motion.div>

                    <motion.div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl border border-white/70 bg-white/90 p-2 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 sm:gap-3 sm:p-3" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={viewportDefault}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F4D4D]/15 text-[#4F4D4D] shadow-inner">
                            <MdOutlineSmartToy />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Focus</p>
                            <p className="text-sm font-bold text-slate-800">AI + Backend</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportDefault}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute bottom-1 left-1/2 hidden -translate-x-1/2 min-[1024px]:block"
            >
                <Link
                    to="about"
                    smooth={true}
                    duration={700}
                    offset={0}
                    className="flex cursor-pointer flex-col items-center gap-2 text-[#4F4D4D]/75"
                    aria-label="Scroll down to about section"
                >
                    <span className="text-[20px] font-medium">Scroll down</span>
                    <span className="relative flex h-[54px] w-[32px] items-start justify-center rounded-full border-2 border-[#4F4D4D]/60 p-[6px]">
                        <span className="h-2.5 w-1.5 rounded-full bg-[#4F4D4D] animate-[scrollWheel_1.6s_ease-in-out_infinite]"></span>
                    </span>
                </Link>
            </motion.div>

        </motion.div>
    );
};

export default Home;