import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

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
        <section className="relative flex w-full flex-col pb-[20vh] max-[600px]:pb-[15vh] max-[480px]:pb-[12vh]" id="projects">
            <h1 className="flex w-fit min-h-[10vh] items-start justify-between text-[45px] font-extrabold text-[#4F4D4D] transition-all duration-300 max-lg:pb-[4vh] max-lg:text-[3rem] max-[480px]:text-[2rem]">
                My Projects
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                    type="button"
                    onClick={() => {
                        setActiveFilter('all');
                        setShowAllProjects(false);
                    }}
                    className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${activeFilter === 'all'
                        ? 'border-[#4F4D4D] bg-[#4F4D4D] text-white'
                        : 'border-[#c7c2b8] bg-white text-[#4F4D4D]'
                        }`}
                >
                    All ({allProjectsCount})
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setActiveFilter('web');
                        setShowAllProjects(false);
                    }}
                    className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${activeFilter === 'web'
                        ? 'border-[#4F4D4D] bg-[#4F4D4D] text-white'
                        : 'border-[#c7c2b8] bg-white text-[#4F4D4D]'
                        }`}
                >
                    Web ({webProjectsCount})
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setActiveFilter('ai');
                        setShowAllProjects(false);
                    }}
                    className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${activeFilter === 'ai'
                        ? 'border-[#4F4D4D] bg-[#4F4D4D] text-white'
                        : 'border-[#c7c2b8] bg-white text-[#4F4D4D]'
                        }`}
                >
                    AI Project ({aiProjectsCount})
                </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-12 pt-[10vh] max-lg:gap-8 max-lg:pt-[8vh] max-md:pt-[6vh] max-[600px]:pt-[5vh] max-[480px]:gap-6 max-[480px]:pt-[4vh]">
                <div className="grid w-full grid-cols-3 gap-6 max-[1200px]:grid-cols-2 max-lg:grid-cols-1">
                    {visibleProjects.map((project) => (
                        <article
                            key={project.id}
                            className="overflow-hidden rounded-xl border border-[#c7c2b8] bg-white/80"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-[220px] w-full object-cover"
                            />

                            <div className="flex min-h-[250px] flex-col gap-4 p-5">
                                <h3 className="text-[1.35rem] font-semibold text-[#4F4D4D]">
                                    {project.title}
                                </h3>
                                <p className="grow text-[1rem] text-slate-700">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-[#4F4D4D] px-3 py-1 text-[0.78rem] text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 max-[480px]:flex-col">
                                    {project.demolink && (
                                        <a
                                            href={project.demolink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-1 items-center justify-center rounded-md border border-[#4F4D4D] bg-white px-4 py-2 text-[0.92rem] font-medium text-[#4F4D4D] no-underline"
                                            aria-label={`View ${project.title} demo`}
                                        >
                                            <FaExternalLinkAlt style={{ marginRight: '6px' }} />
                                            Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.gitlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center rounded-md border border-[#4F4D4D] bg-[#4F4D4D] px-4 py-2 text-[0.92rem] font-medium text-white no-underline"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <FaGithub style={{ marginRight: '6px' }} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
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
            </div>
        </section>
    );
};

export default Projects;