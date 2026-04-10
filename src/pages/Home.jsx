import { useState, useEffect } from 'react';
import { FaDownload, FaEnvelopeOpenText } from 'react-icons/fa';
import { MdOutlineSmartToy } from "react-icons/md";
import { Link } from 'react-scroll';
import cvFile from '../assets/Puvanakopis_CV.pdf';
import profileImage from '../assets/puvi.png';
import DarkButton from '../components/buttons/DarkButton';

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
        <div
            className="relative flex h-fit w-full items-center justify-between pb-14 pt-[10vh] min-[1024px]:min-h-[100vh] max-lg:flex-col max-lg:text-center"
            id="home"
        >
            {/* ---------------- LEFT CONTENT ---------------- */}
            <div className="flex w-1/2 flex-col items- justify-center max-lg:order-1 max-lg:mb-[30px] max-lg:w-full">

                {/* Heading */}
                <h2 className="mb-[0px] text-[24px] font-medium animate-[heroRise_0.7s_ease-out] [animation-fill-mode:both]">
                    Hi, I'm
                </h2>

                {/* Name */}
                <div className="mb-[30px] font-extrabold leading-none text-[70px] max-md:text-[clamp(32px,8vw,50px)] animate-[heroRise_0.85s_ease-out] [animation-delay:120ms] [animation-fill-mode:both]">
                    Puvanakopis
                </div>

                {/* Typing role */}
                <h2 className="mb-[30px] h-[30px] text-[30px] font-medium animate-[heroRise_0.9s_ease-out] [animation-delay:220ms] [animation-fill-mode:both]">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </h2>

                {/* Description */}
                <p className="mb-[30px] max-w-xl text-base md:text-lg mb-6 animate-[heroFade_0.9s_ease-out] [animation-delay:320ms] [animation-fill-mode:both]">
                    I specialize in architecting robust server-side applications and integrating artificial intelligence into modern web solutions. Turning complex logic into seamless experiences.
                </p>

                {/* Buttons */}
                <div className="mt-5 flex gap-5 max-md:flex-col max-md:items-center max-md:gap-[10px] animate-[heroRise_1s_ease-out] [animation-delay:420ms] [animation-fill-mode:both]">
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
                </div>
            </div>


            {/* ---------------- RIGHT IMAGE SECTION (NEW STYLE) ---------------- */}
            <div className="group relative flex w-[30%] justify-center max-lg:order-2 max-lg:mb-8 max-lg:w-full animate-[heroRise_1s_ease-out] [animation-delay:260ms] [animation-fill-mode:both]">
                {/* Glow Background */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#4F4D4D]/35 via-[#4F4D4D]/20 to-[#4F4D4D]/10 blur-3xl opacity-80 transition-all duration-700 group-hover:scale-105 animate-[pulseSoft_3.2s_ease-in-out_infinite]"></div>

                {/* Main Image Card */}
                <div className="relative isolate w-full max-w-[400px] overflow-hidden rounded-2xl [clip-path:inset(0_round_1rem)] border-4 border-white/90 shadow-[0_22px_45px_-15px_rgba(15,23,42,0.35)] ring-1 ring-slate-100/70 rotate-2 transform-gpu transition-all duration-500 group-hover:rotate-0 group-hover:-translate-y-1 animate-[floatY_5s_ease-in-out_infinite]">
                    <img
                        src={profileImage}
                        alt="Puvanakopis"
                        className="h-full w-full rounded-[inherit] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-slate-900/25 via-transparent to-transparent"></div>

                    <div className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700 backdrop-blur-md animate-[heroFade_0.9s_ease-out] [animation-delay:600ms] [animation-fill-mode:both]">
                        Open to Work
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/70 bg-white/90 p-3 shadow-lg backdrop-blur-md animate-[heroFade_0.9s_ease-out] [animation-delay:700ms] [animation-fill-mode:both]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F4D4D]/15 text-[#4F4D4D] shadow-inner">
                            <MdOutlineSmartToy />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Focus</p>
                            <p className="text-sm font-bold text-slate-800">AI + Backend</p>
                        </div>
                    </div>
                </div>
            </div>

            <Link
                to="about"
                smooth={true}
                duration={700}
                offset={0}
                className="absolute bottom-2 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-[#4F4D4D]/75 animate-[heroFade_1.2s_ease-out] [animation-delay:900ms] [animation-fill-mode:both]"
                aria-label="Scroll down to about section"
            >
                <span className="text-[22px] font-medium">Scroll down</span>
                <span className="relative flex h-[54px] w-[32px] items-start justify-center rounded-full border-2 border-[#4F4D4D]/60 p-[6px]">
                    <span className="h-2.5 w-1.5 rounded-full bg-[#4F4D4D] animate-[scrollWheel_1.6s_ease-in-out_infinite]"></span>
                </span>
            </Link>

        </div>
    );
};

export default Home;