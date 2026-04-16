import { motion } from 'framer-motion';
import { headingReveal, viewportDefault } from '../utils/animations';

const SectionHeading = ({ title, kicker = 'Section', className = '' }) => {
  return (
    <motion.header
      className={`section-heading-wrap ${className}`.trim()}
      variants={headingReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportDefault}
    >
      <span className="section-kicker">{kicker}</span>
      <h3 className="section-heading">{title}</h3>
    </motion.header>
  );
};

export default SectionHeading;