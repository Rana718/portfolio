"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectModal } from "@/components/ProjectModal";
import { Container } from "@/components/ui/Container";

export default function ProjectsPage() {
   const [selectedProject, setSelectedProject] = useState<
      (typeof projects)[number] | null
   >(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <main className="min-h-screen py-[12vw] md:py-24 bg-bg-primary">
         <Container>
            <div className="mb-[8vw] md:mb-12">
               <h1 className="font-black text-[8vw] md:text-5xl mb-[3vw] md:mb-4">
                  ALL PROJECTS
               </h1>
               <p className="font-mono text-[3vw] md:text-sm uppercase tracking-widest text-fg-muted">
                  Complete collection across different technologies and domains
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3vw] md:gap-4">
               {projects.map((project) => (
                  <button
                     key={project.id}
                     onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                     }}
                     className="group flex flex-col rounded-2xl border border-border-primary bg-bg-secondary/40 p-[5vw] md:p-6 text-left transition-all hover:border-accent/30 hover:bg-bg-secondary cursor-pointer"
                  >
                     <div className="flex items-start justify-between mb-[3vw] md:mb-3">
                        <span className="font-mono text-[2.2vw] md:text-[10px] uppercase tracking-widest text-fg-muted">
                           {project.category[0]}
                        </span>
                        <ArrowUpRight
                           size={14}
                           className="text-fg-muted transition-colors group-hover:text-accent"
                        />
                     </div>
                     <h3 className="font-black text-[4.5vw] md:text-lg leading-[1.1] mb-[2vw] md:mb-2">
                        {project.title}
                     </h3>
                     <p className="text-[3vw] md:text-sm text-fg-secondary leading-relaxed line-clamp-2 mb-[3vw] md:mb-4">
                        {project.description}
                     </p>
                     <div className="mt-auto flex flex-wrap gap-[1vw] md:gap-1.5">
                        {project.tech.slice(0, 4).map((t) => (
                           <span
                              key={t}
                              className="rounded-full border border-border-primary px-[2vw] md:px-2 py-[0.5vw] md:py-0.5 font-mono text-[2vw] md:text-[10px] uppercase text-fg-muted"
                           >
                              {t}
                           </span>
                        ))}
                     </div>
                  </button>
               ))}
            </div>

            <ProjectModal
               project={selectedProject}
               isOpen={isModalOpen}
               onClose={() => {
                  setIsModalOpen(false);
                  setSelectedProject(null);
               }}
            />
         </Container>
      </main>
   );
}
