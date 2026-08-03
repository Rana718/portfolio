import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
   },
};

export const fadeIn: Variants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
   },
};

export const fadeInScale: Variants = {
   hidden: { opacity: 0, scale: 0.9 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
   },
};

export const slideInLeft: Variants = {
   hidden: { opacity: 0, x: -50 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
   },
};

export const slideInRight: Variants = {
   hidden: { opacity: 0, x: 50 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
   },
};

export const staggerContainer: Variants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.2,
      },
   },
};

export const staggerItem: Variants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
   },
};

export const scaleOnHover = {
   scale: 1.05,
   transition: { type: "spring" as const, stiffness: 400, damping: 17 },
};

export const tapScale = {
   scale: 0.95,
};

export const springTransition = {
   type: "spring" as const,
   stiffness: 300,
   damping: 24,
};
