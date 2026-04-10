import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import { headingReveal, itemFadeUp, staggerContainer, viewportDefault } from '../utils/animations';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [showAllProjects, setShowAllProjects] = useState(false);

    const projects = [
        {
            id: 1,
            title: 'Yummi',
            description: 'A modern, responsive restaurant website showcasing menus, offers, and customer reviews.',
            image: project1,
            category: 'web',
            tags: ['React', 'CSS3'],
            gitlink: 'https://github.com/puvanakopis/Yummi'
        },
        {
            id: 2,
            title: 'Foodi',
            description: 'A sleek restaurant website with curated menus, seasonal specials, and diner testimonials.',
            image: project2,
            category: 'web',
            tags: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
            demolink: 'https://foodi-860506298.development.catalystserverless.com/app/index.html',
            gitlink: 'https://github.com/puvanakopis/Foodi'
        },
        {
            id: 3,
            title: 'Edusity',
            description: 'An education site to explore programs, resources, and campus updates in one place.',
            image: project3,
            category: 'web',
            tags: ['React', 'CSS3'],
            gitlink: 'https://github.com/puvanakopis/Edusity'
        }
        , {
            id: 4,
            title: 'CampusEase',
            description: 'A platform that helps students and lecturers in Sri Lanka find housing and transport.',
            image: project4,
            category: 'ai',
            tags: ['React', 'Node.js', 'AI'],
            gitlink: 'https://github.com/puvanakopis/CampusEase'
        }
        , {
            id: 5,
            title: 'CampusEase',
            description: 'A platform that helps students and lecturers in Sri Lanka find housing and transport.',
            image: project4,
            category: 'ai',
            tags: ['React', 'Node.js', 'AI'],
            gitlink: 'https://github.com/puvanakopis/CampusEase'
        }
        , {
            id: 6,
            title: 'CampusEase',
            description: 'A platform that helps students and lecturers in Sri Lanka find housing and transport.',
            image: project4,
            category: 'ai',
            tags: ['React', 'Node.js', 'AI'],
            gitlink: 'https://github.com/puvanakopis/CampusEase'
        }
        , {
            id: 7,
            title: 'CampusEase',
            description: 'A platform that helps students and lecturers in Sri Lanka find housing and transport.',
            image: project4,
            category: 'ai',
            tags: ['React', 'Node.js', 'AI'],
            gitlink: 'https://github.com/puvanakopis/CampusEase'
        }
    ];

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    const allProjectsCount = projects.length;
    const webProjectsCount = projects.filter((project) => project.category === 'web').length;
    const aiProjectsCount = projects.filter((project) => project.category === 'ai').length;

    const visibleProjects =
        filteredProjects.length > 6 && !showAllProjects
            ? filteredProjects.slice(0, 6)
            : filteredProjects;

    return (
        <section className="relative flex w-full flex-col pb-[14vh] max-[600px]:pb-[12vh]" id="projects">
            <motion.h1
                className="section-heading mb-6 flex w-fit items-start justify-between sm:mb-8"
                variants={headingReveal}
                initial="hidden"
                whileInView="show"
                viewport={viewportDefault}
            >
                My Projects
            </motion.h1>

            <motion.div
                className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportDefault}
            >
                <motion.button
                    type="button"
                    onClick={() => {
                        setActiveFilter('all');
                        setShowAllProjects(false);
                    }}
                    className={`rounded-full border px-3.5 py-1.5 text-[0.82rem] font-semibold sm:px-4 sm:text-sm ${activeFilter === 'all'
                        ? 'border-[#4F4D4D] bg-[#4F4D4D] text-white'
                        : 'border-[#c7c2b8] bg-white text-[#4F4D4D]'
                        }`}
                    variants={itemFadeUp}
                    whileHover={{ y: -2 }}
                >
                    All ({allProjectsCount})
                </motion.button>
                <motion.button
                    type="button"
                    onClick={() => {
                        setActiveFilter('web');
                        setShowAllProjects(false);
                    }}
                    className={`rounded-full border px-3.5 py-1.5 text-[0.82rem] font-semibold sm:px-4 sm:text-sm ${activeFilter === 'web'
                        ? 'border-[#4F4D4D] bg-[#4F4D4D] text-white'
                        : 'border-[#c7c2b8] bg-white text-[#4F4D4D]'
                        }`}
                    variants={itemFadeUp}
                    whileHover={{ y: -2 }}
                >
                    Web ({webProjectsCount})
                </motion.button>
                <motion.button
                    type="button"
                    onClick={() => {
                        setActiveFilter('ai');
                        setShowAllProjects(false);
                    }}
                    className={`rounded-full border px-3.5 py-1.5 text-[0.82rem] font-semibold sm:px-4 sm:text-sm ${activeFilter === 'ai'
                        ? 'border-[#4F4D4D] bg-[#4F4D4D] text-white'
                        : 'border-[#c7c2b8] bg-white text-[#4F4D4D]'
                        }`}
                    variants={itemFadeUp}
                    whileHover={{ y: -2 }}
                >
                    AI Project ({aiProjectsCount})
                </motion.button>
            </motion.div>

            <motion.div
                className="flex flex-col items-center justify-center gap-8 pt-8 sm:gap-10 sm:pt-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportDefault}
            >
                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    <AnimatePresence mode="sync">
                        {visibleProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                className="overflow-hidden rounded-xl border border-[#c7c2b8] bg-white/80"
                                layout
                                variants={itemFadeUp}
                                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -5 }}
                            >
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-[200px] w-full object-cover sm:h-[220px]"
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <div className="flex min-h-[245px] flex-col gap-4 p-4 sm:p-5">
                                    <h3 className="text-[1.2rem] font-semibold text-[#4F4D4D] sm:text-[1.35rem]">
                                        {project.title}
                                    </h3>
                                    <p className="grow text-[0.96rem] text-slate-700 sm:text-[1rem]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-[#4F4D4D] px-3 py-1 text-[0.74rem] text-white sm:text-[0.78rem]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-3 min-[440px]:flex-row">
                                        {project.demolink && (
                                            <motion.a
                                                href={project.demolink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-1 items-center justify-center rounded-md border border-[#4F4D4D] bg-white px-4 py-2 text-[0.92rem] font-medium text-[#4F4D4D] no-underline"
                                                aria-label={`View ${project.title} demo`}
                                                whileHover={{ y: -2 }}
                                            >
                                                <FaExternalLinkAlt style={{ marginRight: '6px' }} />
                                                Demo
                                            </motion.a>
                                        )}
                                        <motion.a
                                            href={project.gitlink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-1 items-center justify-center rounded-md border border-[#4F4D4D] bg-[#4F4D4D] px-4 py-2 text-[0.92rem] font-medium text-white no-underline"
                                            aria-label={`View ${project.title} on GitHub`}
                                            whileHover={{ y: -2 }}
                                        >
                                            <FaGithub style={{ marginRight: '6px' }} />
                                            GitHub
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length > 6 && !showAllProjects && (
                    <button
                        type="button"
                        onClick={() => setShowAllProjects(true)}
                        className="rounded-md border border-[#4F4D4D] bg-[#4F4D4D] px-5 py-2 text-sm font-semibold text-white"
                    >
                        Show All Projects
                    </button>
                )}
            </motion.div>
        </section>
    );
};

export default Projects;