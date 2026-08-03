"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
   strength?: number;
   hoverScale?: number;
}

export function MagneticButton({
   children,
   className = "",
   onClick,
   strength = 0.15,
   hoverScale = 1.05,
}: MagneticButtonProps) {
   const ref = useRef<HTMLDivElement>(null);
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      setPosition({
         x: (e.clientX - (left + width / 2)) * strength,
         y: (e.clientY - (top + height / 2)) * strength,
      });
   };

   const reset = () => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
   };

   return (
      <motion.div
         ref={ref}
         className={`relative inline-flex ${className}`}
         style={{ isolation: "isolate" }}
         onMouseMove={handleMouseMove}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={reset}
         onClick={onClick}
         animate={{
            x: position.x,
            y: position.y,
            scale: isHovered ? hoverScale : 1,
         }}
         transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.5,
            scale: { duration: 0.2, ease: "easeOut" },
         }}
      >
         {children}
      </motion.div>
   );
}
