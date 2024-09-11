import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technicalSkills } from "../constants"; // Import the technicalSkills data

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-start'>
      {technicalSkills.map((skill) => (
        <motion.div
          className='w-28 h-28 flex items-center justify-center'
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ margin: 0, padding: 0 }}
        >
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className='w-full h-full object-contain'
            style={{ margin: 0, padding: 0 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
