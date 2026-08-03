"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
   children: ReactNode;
   className?: string;
   id?: string;
   variants?: Variants;
   delay?: number;
}

const defaultVariants: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
   },
};

export const AnimatedSection = ({
   children,
   className = "",
   id,
   variants = defaultVariants,
   delay = 0,
}: AnimatedSectionProps) => {
   return (
      <motion.section
         id={id}
         className={className}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
         variants={variants}
         transition={{ delay }}
      >
         {children}
      </motion.section>
   );
};

export const AnimatedDiv = ({
   children,
   className = "",
   variants = defaultVariants,
   delay = 0,
}: Omit<AnimatedSectionProps, "id">) => {
   return (
      <motion.div
         className={className}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-50px" }}
         variants={variants}
         transition={{ delay }}
      >
         {children}
      </motion.div>
   );
};
