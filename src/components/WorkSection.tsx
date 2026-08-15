"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

interface WorkSectionProps {
   onProjectClick: (project: (typeof projects)[number]) => void;
}

// Computed once at module load.
const featuredProjects = projects.filter((p) => p.featured);

export function WorkSection({ onProjectClick }: WorkSectionProps) {

   return (
      <Container size="narrow" className="py-[12vw] md:py-20">
         <SectionHeading number="02" title="Featured Projects" />

         <div className="space-y-[8vw] md:space-y-16">
            {featuredProjects.map((project, index) => (
               <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
               >
                  <button
                     onClick={() => onProjectClick(project)}
                     className="group relative flex w-full cursor-pointer flex-col md:flex-row md:items-center gap-[3vw] md:gap-8 text-left"
                  >
                     <div
                        className={`flex-1 ${index % 2 === 1 ? "md:order-2" : ""}`}
                     >
                        <span className="font-mono text-[2vw] md:text-[11px] uppercase tracking-widest text-fg-muted">
                           {project.category.join(" · ")}
                        </span>
                        <h3 className="font-black text-[6vw] md:text-3xl leading-[1.05] mt-[1vw] md:mt-1 mb-[2vw] md:mb-3">
                           {project.title}
                        </h3>
                        <p className="text-[3vw] md:text-sm text-fg-secondary leading-relaxed mb-[3vw] md:mb-4 max-w-lg">
                           {project.description}
                        </p>
                        <div className="flex flex-wrap gap-[1vw] md:gap-1.5">
                           {project.tech.slice(0, 4).map((t) => (
                              <span
                                 key={t}
                                 className="rounded-full border border-border-primary px-[2.5vw] md:px-2.5 py-[0.8vw] md:py-1 font-mono text-[2vw] md:text-[11px] uppercase text-fg-muted"
                              >
                                 {t}
                              </span>
                           ))}
                           {project.tech.length > 4 && (
                              <span className="rounded-full px-[2.5vw] md:px-2.5 py-[0.8vw] md:py-1 font-mono text-[2vw] md:text-[11px] text-fg-muted">
                                 +{project.tech.length - 4}
                              </span>
                           )}
                        </div>
                     </div>

                     <div className="shrink-0 self-start md:self-center">
                        <div className="flex h-[8vw] w-[8vw] md:h-10 md:w-10 items-center justify-center rounded-full border border-border-primary transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent group-hover:rotate-45">
                           <ArrowUpRight
                              size={18}
                              className="transition-transform"
                           />
                        </div>
                     </div>
                  </button>
               </motion.div>
            ))}
         </div>
      </Container>
   );
}
