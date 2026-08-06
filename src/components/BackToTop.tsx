"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme-provider";

export const BackToTop = () => {
   const [visible, setVisible] = useState(false);
   const { theme } = useTheme();
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
   const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

   useEffect(() => {
      const handleScroll = () => {
         setVisible(window.scrollY > 800);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <div className="hidden md:block">
         <AnimatePresence>
            {visible && (
               <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 z-50 p-3 rounded-full border border-foreground/20 backdrop-blur-md transition-colors duration-300"
                  style={{
                     backgroundColor: `rgba(${accentRgb}, 0.1)`,
                     borderColor: `rgba(${accentRgb}, 0.3)`,
                     boxShadow: `0 0 20px rgba(${accentRgb}, 0.2)`,
                  }}
                  aria-label="Back to top"
               >
                  <ArrowUp size={20} style={{ color: accentColor }} />
               </motion.button>
            )}
         </AnimatePresence>
      </div>
   );
};
