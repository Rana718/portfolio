import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1.1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="relative w-full"
    >
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card
                   hover:shadow-2xl transition-shadow duration-300"
        whileHover={{
          boxShadow: "0 0 25px rgba(0, 255, 170, 0.5)",
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <motion.div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
                     flex justify-evenly items-center flex-col
                     backdrop-blur-sm bg-opacity-90"
          whileHover={{ backgroundColor: "rgba(40, 44, 52, 0.95)" }}
        >
          <motion.img
            src={icon}
            alt={title}
            loading="lazy"
            className="w-16 h-16 object-contain"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              filter: "brightness(1.2)"
            }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          />

          <motion.h3
            className="text-white text-[20px] font-bold text-center
                       tracking-wider"
            whileHover={{
              textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
              scale: 1.05
            }}
          >
            {title}
          </motion.h3>

          <motion.div
            className="absolute inset-0 rounded-[20px] opacity-0 
                       bg-gradient-to-r from-purple-500 to-cyan-500"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <motion.div
      variants={textVariant(0.1)}
      initial="hidden"
      animate="show"
      className="relative z-0"
    >
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        // @ts-ignore
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am currently pursuing my Bachelor's degree, where I am deeply passionate about software development, web development, and mobile app development. My interests also extend to the exciting fields of cybersecurity and Web3 technologies. I am continuously exploring new ways to enhance my skills and stay at the forefront of technological advancements. Whether it's building responsive websites, developing secure applications, or delving into decentralized solutions, I am committed to expanding my expertise and contributing to innovative projects. My goal is to become a versatile developer who can navigate both traditional and cutting-edge technologies to create impactful solutions.

      </motion.p>
      <div className="flex justify-center items-center mt-6">
        <h2 className="text-white text-[40px] font-bold text-center">Service</h2>
      </div>
      <div className="mt-8 flex flex-wrap gap-10 justify-center items-cente">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
