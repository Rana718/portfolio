"use client";
import { testimonials } from "@/lib/data";
import { TestimonialCard } from "./TestimonialCard";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { useState } from "react";

export const Testimonials = () => {
  const { theme } = useTheme();
  const [pausedRow, setPausedRow] = useState<number | null>(null);

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5, 10);

  return (
    <section
      className="max-w-screen mx-auto text-center py-20 lg:py-32 overflow-hidden relative"
      id="testimonials"
    >
      {/* Blur glow effect */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none -z-10"
        style={{ backgroundColor: `rgba(${accentRgb}, 0.15)` }}
      />

      <motion.div
        className="px-4 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
          CLIENT FEEDBACK
        </h2>
        <motion.div
          className="w-16 md:w-24 h-1 mx-auto mb-6 md:mb-8 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2 mb-12">
          What clients say about working with me
        </p>
      </motion.div>

      {/* First row - scrolling right to left */}
      <div
        className="relative mb-6"
        onMouseEnter={() => setPausedRow(1)}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div className="scroll-container">
          <div
            className="scroll-content scroll-right-to-left"
            style={{ animationPlayState: pausedRow === 1 ? "paused" : "running" }}
          >
            {[...firstRow, ...firstRow, ...firstRow].map(
              (testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="px-3 py-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Second row - scrolling left to right */}
      <div
        className="relative"
        onMouseEnter={() => setPausedRow(2)}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div className="scroll-container">
          <div
            className="scroll-content scroll-left-to-right"
            style={{ animationPlayState: pausedRow === 2 ? "paused" : "running" }}
          >
            {[...secondRow, ...secondRow, ...secondRow].map(
              (testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="px-3 py-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Gradient overlays on sides */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
        style={{
          background: `linear-gradient(to right, rgb(var(--background-rgb)), transparent)`,
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
        style={{
          background: `linear-gradient(to left, rgb(var(--background-rgb)), transparent)`,
        }}
      />
    </section>
  );
};
