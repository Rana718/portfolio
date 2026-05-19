"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  role?: string;
  company?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  return (
    <motion.div
      className="relative min-w-85 max-w-85 h-45 p-6 rounded-2xl border border-foreground/10 bg-background/80 backdrop-blur-sm group cursor-default"
      whileHover={{
        scale: 1.03,
        y: -4,
        boxShadow: `0 0 30px rgba(${accentRgb}, 0.15)`,
        borderColor: `rgba(${accentRgb}, 0.3)`,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Quote icon */}
      <Quote
        size={24}
        className="absolute top-4 right-4 opacity-10"
        style={{ color: accentColor }}
      />

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < testimonial.rating ? accentColor : "transparent"}
            stroke={accentColor}
            strokeWidth="1.5"
            style={{
              filter: i < testimonial.rating ? `drop-shadow(0 0 4px rgba(${accentRgb}, 0.5))` : "none",
            }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-xs text-foreground/70 leading-relaxed line-clamp-4 mb-4">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="absolute bottom-4 left-6 right-6">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              backgroundColor: `rgba(${accentRgb}, 0.15)`,
              color: accentColor,
            }}
          >
            {testimonial.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="text-xs font-semibold">{testimonial.name}</p>
            {(testimonial.role || testimonial.company) && (
              <p className="text-[10px] text-foreground/40">
                {testimonial.role}{testimonial.role && testimonial.company && ", "}{testimonial.company}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
