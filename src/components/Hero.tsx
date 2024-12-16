import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero: React.FC = () => {
  const handleDownloadClick = () => {
    const filePath = '/Rana_Dolui.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', 'Rana_cv.pdf'); 
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="relative w-full h-2/3 mx-auto pb-128 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_#915EFF]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-1 sm:h-80 h-40 violet-gradient"
          />
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${styles.heroHeadText} text-white font-bold tracking-wider`}
          >
            Hi, I'm <span className="text-[#915EFF] hover:text-[#7e4c9b] transition-colors duration-300">Rana</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${styles.heroSubText} mt-2 text-white-100 leading-relaxed`}
          >
            I specialize in web development and app development. 
            <br className="sm:block hidden" />
            I create intuitive web experiences, build robust applications, 
            <br className="sm:block hidden" />
            and ensure top-notch cybersecurity while developing innovative software solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadClick}
            className="mt-5 px-6 py-3 bg-[#915EFF] text-white rounded-lg shadow-lg 
                     transition-all duration-300 hover:bg-[#7e4c9b] 
                     transform hover:-translate-y-1 
                     font-semibold tracking-wide"
          >
            Download CV
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;