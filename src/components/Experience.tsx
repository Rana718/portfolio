import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

interface Experience {
  date: string;
  icon: string;
  iconBg: string;
  title: string;
  company_name: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 30%, #29283a)",
        color: "#fff",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <motion.img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
      }
    >
      <motion.div initial="hidden" animate="visible" variants={fadeIn("up", "spring", 0.5, 1)}>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </motion.div>

      <motion.ul
        className='mt-5 list-disc ml-5 space-y-2'
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.1, 0.1)}
      >
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
            variants={fadeIn("left", "spring", index * 0.2, 1)}
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-teal-400`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
