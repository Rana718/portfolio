"use client";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const typeColors: Record<string, string> = {
  "Internship": "rgba(96,165,250,0.15)",
  "Full-time": "rgba(52,211,153,0.15)",
  "Part-time": "rgba(251,191,36,0.15)",
  "Freelance": "rgba(167,139,250,0.15)",
};
const typeText: Record<string, string> = {
  "Internship": "#60a5fa",
  "Full-time": "#34d399",
  "Part-time": "#fbbf24",
  "Freelance": "#a78bfa",
};

export const Experience = () => {
  const { theme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 lg:py-32" id="experience">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">EXPERIENCE</h2>
        <motion.div
          className="w-16 md:w-24 h-1 mx-auto mb-4 rounded-full"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`, boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <p className="text-foreground/60 text-xs md:text-sm max-w-2xl mx-auto">My professional journey building impactful solutions</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px">
          <motion.div
            className="w-full h-full"
            style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)` }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                className="relative pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Company logo as timeline node */}
                <motion.div
                  className="absolute left-0 top-3 w-10 h-10 rounded-full overflow-hidden border-2 bg-background"
                  style={{ borderColor: `rgba(${accentRgb}, 0.4)`, boxShadow: `0 0 10px rgba(${accentRgb}, 0.2)` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                >
                  <Image src={exp.image} alt={exp.company} fill className="object-cover" />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="relative border border-foreground/15 p-4 rounded-2xl group cursor-pointer transition-all duration-300"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.4)`;
                    e.currentTarget.style.boxShadow = `0 0 20px rgba(${accentRgb}, 0.08)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(to right, rgba(${accentRgb}, 0.04), transparent)` }}
                  />

                  <div className="relative z-10">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <h3
                            className="text-sm font-bold transition-colors duration-300 group-hover:text-(--accent)"
                            style={{ ["--accent" as string]: accentColor }}
                          >
                            {exp.title}
                          </h3>
                          {exp.type && (
                            <span
                              className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                              style={{ backgroundColor: typeColors[exp.type] ?? "rgba(128,128,128,0.15)", color: typeText[exp.type] ?? "inherit" }}
                            >
                              {exp.type}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-foreground/60">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[11px] font-semibold" style={{ color: accentColor }}>
                          {exp.duration}
                        </span>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                          <ChevronDown size={14} className="text-foreground/40" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: isExpanded ? "400px" : "2.5rem" }}
                    >
                      <p className={`text-xs text-foreground/55 leading-relaxed mt-2 ${isExpanded ? "" : "line-clamp-2"}`}>
                        {exp.description}
                      </p>
                    </div>
                    <p className="mt-1 text-[10px] text-foreground/30 uppercase tracking-wider">
                      {isExpanded ? "Show less" : "Read more"}
                    </p>
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

