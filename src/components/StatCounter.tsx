"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";

interface StatCounterProps {
   end: number;
   suffix?: string;
   prefix?: string;
   label: string;
   duration?: number;
   delay?: number;
}

export const StatCounter = ({
   end,
   suffix = "",
   prefix = "",
   label,
   duration = 2,
   delay = 0,
}: StatCounterProps) => {
   const [count, setCount] = useState(0);
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, margin: "-50px" });
   const { theme } = useTheme();
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";

   useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
         if (!startTime) startTime = timestamp;
         const progress = Math.min(
            (timestamp - startTime) / (duration * 1000),
            1,
         );

         // Ease out cubic
         const eased = 1 - Math.pow(1 - progress, 3);
         setCount(Math.floor(eased * end));

         if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
         } else {
            setCount(end);
         }
      };

      const timer = setTimeout(() => {
         animationFrame = requestAnimationFrame(animate);
      }, delay * 1000);

      return () => {
         clearTimeout(timer);
         if (animationFrame) cancelAnimationFrame(animationFrame);
      };
   }, [isInView, end, duration, delay]);

   return (
      <motion.div
         ref={ref}
         className="text-center"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay, duration: 0.5 }}
      >
         <div
            className="text-3xl md:text-4xl font-bold mb-1"
            style={{
               color: accentColor,
               textShadow: `0 0 20px ${accentColor}40`,
            }}
         >
            {prefix}
            {count}
            {suffix}
         </div>
         <div className="text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
            {label}
         </div>
      </motion.div>
   );
};
