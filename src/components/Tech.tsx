import { motion } from "framer-motion";
import { technicalSkills } from "../constants";
import React from "react";

const Tech = React.memo(() => {
  return (
    <div className="flex flex-wrap justify-center gap-2 lg:px-44 md:p-12 p-2">
      {technicalSkills.map((skill) => (
        <motion.div
          className="bg-gray-800 rounded-full flex items-center justify-center backdrop-blur-sm 
          transition-colors group hover:bg-gradient-to-br hover:from-[#a855f7] hover:via-purple-400 hover:to-cyan-400
          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:scale-110 transition-transform"
          />
        </motion.div>
      ))}
    </div>
  );
});

export default Tech;
