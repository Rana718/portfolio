"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
   number: string;
   title: string;
   className?: string;
}

export function SectionHeading({
   number,
   title,
   className,
}: SectionHeadingProps) {
   return (
      <motion.h2
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className={`font-mono text-xs md:text-sm uppercase tracking-widest text-fg-secondary mb-[4vw] md:mb-10 ${className || ""}`}
      >
         <span className="text-fg-primary/30">{number} /</span> {title}
      </motion.h2>
   );
}
