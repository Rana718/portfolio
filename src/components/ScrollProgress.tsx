"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";

export const ScrollProgress = () => {
   const { scrollYProgress } = useScroll();
   const { theme } = useTheme();
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   return (
      <motion.div
         className="fixed top-0 left-0 right-0 h-0.5 z-100 origin-left"
         style={{
            scaleX,
            background: accentColor,
            boxShadow: `0 0 10px ${accentColor}, 0 0 20px ${accentColor}80`,
         }}
      />
   );
};
