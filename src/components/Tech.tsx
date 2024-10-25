import { motion } from "framer-motion";
import { technicalSkills } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 lg:px-44 md:p-12 p-14'>
      {technicalSkills.map((skill) => (
        <motion.div
          className='w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center'
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className='object-contain w-14 h-14'
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;
