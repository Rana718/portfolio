"use client";

import { useState } from "react";
import { technologies } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FilterBar } from "./ui/FilterBar";
import * as SiIcons from "react-icons/si";

const allCategories = ["All", ...new Set(technologies.map((t) => t.category))];

function getIcon(name: string) {
   const normalized = name.startsWith("Si") ? name : `Si${name}`;
   const icon = (
      SiIcons as Record<string, React.ComponentType<{ size?: number }>>
   )[normalized];
   return icon || null;
}

export function SkillsSection() {
   const [activeCategory, setActiveCategory] = useState("All");
   const filtered =
      activeCategory === "All"
         ? technologies
         : technologies.filter((t) => t.category === activeCategory);

   return (
      <Container className="py-[12vw] md:py-20">
         <SectionHeading number="04" title="Skills & Tech" />

         <FilterBar
            categories={allCategories}
            active={activeCategory}
            onChange={setActiveCategory}
         />

         <motion.div
            layout
            className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-12 gap-[1vw] md:gap-1.5"
         >
            <AnimatePresence mode="popLayout">
               {filtered.map((tech, i) => {
                  const Icon = getIcon(tech.icon);
                  return (
                     <motion.div
                        key={tech.name}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, delay: i * 0.01 }}
                        className="group flex flex-col items-center gap-[0.3vw] md:gap-1 rounded-lg border border-border-primary bg-bg-secondary/40 p-[1.5vw] md:p-1.5 transition-all hover:border-accent/30 hover:bg-bg-secondary hover:scale-[1.05]"
                     >
                        <span
                           className="text-[4.5vw] md:text-2xl transition-all duration-300 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                           style={
                              tech.color && tech.color !== "currentColor"
                                 ? { color: tech.color }
                                 : undefined
                           }
                        >
                           {Icon ? (
                              <Icon size={22} />
                           ) : (
                              <span className="text-fg-muted text-[10px] font-black">
                                 {tech.name.charAt(0)}
                              </span>
                           )}
                        </span>
                        <span className="font-mono text-[1.6vw] md:text-[8px] uppercase tracking-tight text-fg-muted group-hover:text-fg-primary transition-colors text-center leading-tight">
                           {tech.name}
                        </span>
                     </motion.div>
                  );
               })}
            </AnimatePresence>
         </motion.div>
      </Container>
   );
}
