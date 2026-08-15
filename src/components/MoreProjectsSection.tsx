"use client";

import { projects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FilterBar } from "./ui/FilterBar";

interface MoreProjectsSectionProps {
   onProjectClick: (project: (typeof projects)[number]) => void;
}

// Computed once at module load — these never change at runtime.
const nonFeatured = projects.filter((p) => !p.featured);
const allCategories = [
   "All",
   ...new Set(nonFeatured.flatMap((p) => p.category)),
];

export function MoreProjectsSection({
   onProjectClick,
}: MoreProjectsSectionProps) {
   const [activeCategory, setActiveCategory] = useState("All");
   const [showAll, setShowAll] = useState(false);

   const filtered =
      activeCategory === "All"
         ? nonFeatured
         : nonFeatured.filter((p) => p.category.includes(activeCategory));

   const INITIAL_VISIBLE = 9;
   const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
   const hiddenCount = filtered.length - INITIAL_VISIBLE;

   return (
      <Container className="py-[12vw] md:py-20">
         <SectionHeading number="03" title="Project Archive" />

         <FilterBar
            categories={allCategories}
            active={activeCategory}
            onChange={(cat) => {
               setActiveCategory(cat);
               setShowAll(false);
            }}
         />

         <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.5vw] md:gap-3"
         >
            <AnimatePresence mode="popLayout">
               {visible.map((project, i) => (
                  <motion.button
                     key={project.id}
                     layout
                     initial={{ opacity: 0, scale: 0.97 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.97 }}
                     transition={{ duration: 0.25, delay: i * 0.02 }}
                     onClick={() => onProjectClick(project)}
                     className="group flex flex-col rounded-xl border border-border-primary bg-bg-secondary/40 p-[4vw] md:p-5 text-left transition-all hover:border-accent/30 hover:bg-bg-secondary cursor-pointer"
                  >
                     <div className="flex items-start justify-between mb-[2vw] md:mb-2">
                        <span className="font-mono text-[2vw] md:text-[10px] uppercase tracking-widest text-fg-muted">
                           {project.category[0]}
                        </span>
                        <ArrowUpRight
                           size={12}
                           className="text-fg-muted transition-colors group-hover:text-accent"
                        />
                     </div>
                     <h4 className="font-black text-[3.8vw] md:text-base leading-[1.1] mb-[1.5vw] md:mb-2">
                        {project.title}
                     </h4>
                     <p className="text-[2.5vw] md:text-xs text-fg-secondary leading-relaxed line-clamp-2 mb-[2.5vw] md:mb-3">
                        {project.description}
                     </p>
                     <div className="mt-auto flex flex-wrap gap-[1vw] md:gap-1">
                        {project.tech.slice(0, 4).map((t) => (
                           <span
                              key={t}
                              className="rounded-full border border-border-primary px-[1.8vw] md:px-2 py-[0.4vw] md:py-0.5 font-mono text-[1.8vw] md:text-[10px] uppercase text-fg-muted"
                           >
                              {t}
                           </span>
                        ))}
                     </div>
                  </motion.button>
               ))}
            </AnimatePresence>
         </motion.div>

         {hiddenCount > 0 && (
            <div className="mt-[5vw] md:mt-8 flex justify-center">
               <button
                  onClick={() => setShowAll(!showAll)}
                  className="rounded-full border border-border-primary px-[5vw] md:px-6 py-[1.5vw] md:py-2 font-mono text-[2.2vw] md:text-xs uppercase tracking-widest text-fg-secondary transition-all hover:border-accent hover:text-accent"
               >
                  {showAll
                     ? "Show Less"
                     : `Show All ${filtered.length} Projects`}
               </button>
            </div>
         )}
      </Container>
   );
}
