import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

interface Technology {
  name: string;
  icon: string; // Adjust the type if `icon` is not a string (e.g., if it's a React component or SVG)
}

const Tech: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <motion.h2
        className='text-3xl font-bold mb-8'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Technologies
      </motion.h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology: Technology, index: number) => (
          <motion.div
            key={technology.name}
            className='w-28 h-28 flex justify-center items-center'
            whileHover={{ scale: 1.1, rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.4 }}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
