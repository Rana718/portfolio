"use client";

import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

const typeColors: Record<string, string> = {
   Internship: "#60a5fa",
   "Full-time": "#34d399",
   "Part-time": "#fbbf24",
   Freelance: "#a78bfa",
};

export function ExperienceSection() {
   const { theme } = useTheme();
   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";

   return (
      <Container size="narrow" className="py-[12vw] md:py-20">
         <SectionHeading number="01" title="Experience" />

         <div className="relative">
            <div className="absolute left-3.5 md:left-4.75 top-0 bottom-0 w-px bg-border-primary" />

            <div className="space-y-[5vw] md:space-y-8">
               {experiences.map((exp, index) => {
                  const isExpanded = expandedIndex === index;
                  const typeColor = typeColors[exp.type] || "#a78bfa";

                  return (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative pl-[8vw] md:pl-12"
                     >
                        <div
                           className="absolute left-0 top-0 w-[6vw] h-[6vw] md:w-9 md:h-9 rounded-full border-2 flex items-center justify-center overflow-hidden bg-bg-primary"
                           style={{
                              borderColor: accentColor,
                              boxShadow: `0 0 10px ${accentColor}30`,
                           }}
                        >
                           <Image
                              src={exp.image}
                              alt={exp.company}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                           />
                        </div>

                        <button
                           onClick={() =>
                              setExpandedIndex(isExpanded ? null : index)
                           }
                           className="w-full text-left group cursor-pointer"
                        >
                           <div className="rounded-xl border border-border-primary bg-bg-secondary/40 p-[4vw] md:p-5 transition-all hover:border-accent/20">
                              <div className="flex flex-wrap items-start justify-between gap-[2vw] md:gap-3 mb-[2vw] md:mb-3">
                                 <div className="flex flex-wrap items-center gap-[1.5vw] md:gap-2">
                                    <span className="rounded-full border border-border-primary px-[2vw] md:px-2.5 py-[0.5vw] md:py-0.5 font-mono text-[2vw] md:text-[11px] uppercase tracking-widest text-fg-muted">
                                       {exp.duration}
                                    </span>
                                    <span
                                       className="rounded-full px-[2vw] md:px-2.5 py-[0.5vw] md:py-0.5 font-mono text-[2vw] md:text-[11px] uppercase tracking-widest"
                                       style={{
                                          color: typeColor,
                                          backgroundColor: `${typeColor}15`,
                                       }}
                                    >
                                       {exp.type}
                                    </span>
                                 </div>
                                 <ChevronDown
                                    className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                    size={16}
                                    style={{ color: accentColor }}
                                 />
                              </div>

                              <h3 className="font-black text-[4vw] md:text-lg leading-[1.1] mb-[1vw] md:mb-1">
                                 {exp.title}
                              </h3>
                              <p className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-muted mb-[3vw] md:mb-3">
                                 {exp.company}
                              </p>

                              <motion.div
                                 initial={false}
                                 animate={{
                                    height: isExpanded ? "auto" : 0,
                                    opacity: isExpanded ? 1 : 0,
                                 }}
                                 transition={{ duration: 0.3 }}
                                 className="overflow-hidden"
                              >
                                 <p className="text-[3vw] md:text-sm text-fg-secondary leading-relaxed pt-[2vw] md:pt-3 border-t border-border-primary">
                                    {exp.description}
                                 </p>
                              </motion.div>
                           </div>
                        </button>
                     </motion.div>
                  );
               })}
            </div>
         </div>
      </Container>
   );
}
