"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glowOnHover?: boolean;
}

export const TiltCard = ({
  children,
  className = "",
  tiltAmount = 10,
  glowOnHover = true,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {glowOnHover && (
        <motion.div
          className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(${accentRgb}, 0.15), transparent, rgba(${accentRgb}, 0.1))`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
};
