import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)} className="text-center">
        <p className={`${styles.sectionSubText} text-teal-400`}>
          My Journey So Far
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Work Experience
        </h2>
        <motion.p
          className="mt-5 text-gray-400 text-[16px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          I am a fresher with a passion for learning and a strong foundation in
          software development. Although I don't have industry experience yet, I
          am eager to take on new challenges and contribute to real-world
          projects.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <p className="text-gray-500 text-[16px]">
          Currently, I have no industry experience to showcase here. However, I
          have been actively working on various personal and academic projects,
          which have helped me build a solid understanding of the technologies
          and tools I work with.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
