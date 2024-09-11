import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// Define interfaces for the props
interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-gradient-to-r from-gray-800 via-gray-900 to-black p-10 rounded-3xl xs:w-[320px] w-full shadow-lg'
  >
    <p className='text-white font-black text-[48px] leading-none animate-pulse'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px] leading-relaxed'>
        {testimonial}
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px] italic'>
            {designation} at {company}
          </p>
        </div>

        <motion.img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks: React.FC = () => {
  return (
    <div className='mt-12 bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[20px] shadow-2xl'>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] relative overflow-hidden`}
      >
        <motion.div variants={textVariant(0)} className="relative z-10">
          <p className={`${styles.sectionSubText} text-teal-400`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>Testimonials.</h2>
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-[150px] h-[150px] bg-teal-400 rounded-full opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-purple-500 rounded-full opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
