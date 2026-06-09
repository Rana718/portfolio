"use client";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { useState } from "react";
import { ChevronDown, Briefcase } from "lucide-react";

export const Experience = () => {
  const { theme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 lg:py-32" id="experience">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
          EXPERIENCE
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
        <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2">
          My professional journey building impactful solutions
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px">
          <motion.div
            className="w-full h-full"
            style={{
              background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)`,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                className="relative pl-12 md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-2 md:left-6 top-5 w-4 h-4 rounded-full border-2"
                  style={{
                    borderColor: accentColor,
                    backgroundColor: theme === "dark" ? "#0a0a0a" : "#fffef8",
                    boxShadow: `0 0 10px rgba(${accentRgb}, 0.5)`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                />

                {/* Card */}
                <motion.div
                  className="relative border border-foreground/20 p-5 md:p-6 rounded-2xl transition-all duration-500 group cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.4)`;
                    e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.1)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                  onClick={() => toggleExpand(index)}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Left accent line */}
                  <div
                    className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom, rgba(${accentRgb}, 0.5), ${accentColor}, rgba(${accentRgb}, 0.5))`,
                    }}
                  />

                  {/* Subtle glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(to right, rgba(${accentRgb}, 0.05), transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div className="flex items-start gap-3">
                        <div
                          className="p-2 rounded-xl hidden md:flex"
                          style={{ backgroundColor: `rgba(${accentRgb}, 0.1)` }}
                        >
                          <Briefcase size={16} style={{ color: accentColor }} />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-bold mb-0.5 transition-colors duration-300 group-hover:text-(--accent)" style={{ ["--accent" as string]: accentColor }}>
                            {exp.title}
                          </h3>
                          <p className="text-sm text-foreground/70">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <span
                          className="text-xs md:text-sm font-semibold"
                          style={{
                            color: accentColor,
                            filter: `drop-shadow(0 0 8px rgba(${accentRgb}, 0.3))`,
                          }}
                        >
                          {exp.duration}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} className="text-foreground/40" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Description with smooth expand/collapse */}
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isExpanded ? "600px" : "2.8rem",
                      }}
                    >
                      <p className={`text-xs md:text-sm text-foreground/60 leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
                        {exp.description}
                      </p>
                    </div>

                    {/* Expand/collapse hint */}
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-foreground/30 uppercase tracking-wider">
                      <motion.span
                        animate={{ opacity: isExpanded ? 0.6 : 0.4 }}
                        className="transition-opacity"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
