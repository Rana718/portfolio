"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
   href?: string;
   strength?: number;
}

export function MagneticButton({
   children,
   className,
   onClick,
   href,
   strength = 0.15,
}: MagneticButtonProps) {
   const ref = useRef<HTMLDivElement>(null);

   const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
   };

   const handleMouseLeave = () => {
      if (!ref.current) return;
      ref.current.style.transform = "translate(0px, 0px) scale(1)";
   };

   const Comp = href ? "a" : "div";

   return (
      <Comp
         href={href}
         target={href ? "_blank" : undefined}
         rel={href ? "noopener noreferrer" : undefined}
         className={className}
         onClick={onClick}
         onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
               e.preventDefault();
               onClick?.();
            }
         }}
      >
         <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
               transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="inline-block"
         >
            {children}
         </motion.div>
      </Comp>
   );
}
