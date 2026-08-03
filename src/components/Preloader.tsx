"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";

export function Preloader() {
   const [loading, setLoading] = useState(true);
   const { theme } = useTheme();
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";

   useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
   }, []);

   return (
      <AnimatePresence>
         {loading && (
            <motion.div
               className="fixed inset-0 z-100 flex items-center justify-center bg-bg-primary"
               exit={{ opacity: 0 }}
               transition={{ duration: 0.6, ease: "easeInOut" }}
            >
               <motion.h1
                  className="text-[clamp(2rem,8vw,5rem)] font-black tracking-tight"
                  style={{
                     color: accentColor,
                     textShadow: `0 0 30px ${accentColor}80`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
               >
                  RANA DOLUI
               </motion.h1>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
