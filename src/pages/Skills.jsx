import { FaServer, FaCode, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { headingReveal, itemFadeUp, staggerContainer, viewportDefault } from '../utils/animations';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Developer',
      icon: <FaServer />,
      skills: [
        { name: 'Express JS', level: 70 },
        { name: 'Node JS', level: 70 },
        { name: 'Mongo DB', level: 90 },
      ]
    },
    {
      title: 'Frontend Developer',
      icon: <FaCode />,
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      title: 'AI/ML Developer',
      icon: <FaBrain />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'TensorFlow', level: 70 },
        { name: 'Pandas & NumPy', level: 75 },
        { name: 'Power Bi', level: 60 },
        { name: 'Data Preprocessing', level: 70 },
      ]
    }
  ];

  return (
    <section className="relative flex w-full flex-col pb-[20vh] min-[1024px]:min-h-[85vh] max-[600px]:pb-[15vh] max-[480px]:pb-[12vh]" id="skills">
      <motion.h1
        className="flex w-fit min-h-[10vh] items-start justify-between text-[45px] font-extrabold text-[#4F4D4D] transition-all duration-300 max-lg:pb-[4vh] max-lg:text-[3rem] max-[480px]:text-[2rem]"
        variants={headingReveal}
        initial="hidden"
        whileInView="show"
        viewport={viewportDefault}
      >
        My Skills
      </motion.h1>

      <motion.div
        className=" flex flex-col items-center justify-center gap-12  pt-[10vh] max-lg:gap-8 max-lg:pt-[8vh] max-md:pt-[6vh] max-[600px]:pt-[5vh] max-[480px]:gap-6 max-[480px]:pt-[4vh]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportDefault}
      >
        <div className="grid w-full grid-cols-3 gap-6 max-lg:grid-cols-1">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              className="flex flex-col gap-5 rounded-xl border border-[#c7c2b8] bg-white/80 px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              key={categoryIndex}
              variants={itemFadeUp}
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F4D4D]/10 text-[#4F4D4D]">
                  {category.icon}
                </div>
                <h3 className="text-[1.2rem] font-semibold text-[#4F4D4D]">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="rounded-lg px-3 py-2"
                    variants={itemFadeUp}
                  >
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-[#4F4D4D]">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-[6px] overflow-hidden rounded-full bg-[#e9ecef]">
                      <motion.div
                        className="h-full rounded-full bg-[#4F4D4D] transition-all duration-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: skillIndex * 0.06 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;