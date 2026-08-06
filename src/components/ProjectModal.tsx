"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

interface ProjectModalProps {
   project: Project | null;
   isOpen: boolean;
   onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
   const [imgLoaded, setImgLoaded] = useState(false);
   const portalRef = useRef<Element | null>(null);
   const [, forceRender] = useState(0);

   useEffect(() => {
      portalRef.current = document.body;
      forceRender((n) => n + 1);
   }, []);

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
         setImgLoaded(false);
      }
      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);

   useEffect(() => {
      if (!isOpen) return;
      const handleEsc = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
   }, [isOpen, onClose]);

   if (!portalRef.current || !project) return null;

   const modal = (
      <AnimatePresence>
         {isOpen && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-[3vw] md:p-8">
               {/* Backdrop */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={onClose}
                  className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
               />

               {/* Modal */}
               <motion.div
                  initial={{ scale: 0.97, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.97, opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-330 max-h-[92vh] md:h-[88vh] bg-bg-primary border border-border-primary rounded-2xl shadow-2xl flex flex-col overflow-hidden"
               >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 px-[6vw] md:px-8 py-[4vw] md:py-5 border-b border-border-primary bg-bg-primary/80 backdrop-blur-md shrink-0">
                     <div>
                        <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-muted">
                           {project.category.join(" · ")}
                        </span>
                        <h2 className="font-black text-[6vw] md:text-2xl mt-[1vw] md:mt-1">
                           {project.title}
                        </h2>
                     </div>
                     <button
                        onClick={onClose}
                        className="flex h-[8vw] w-[8vw] md:h-10 md:w-10 items-center justify-center rounded-full border border-border-primary transition-all hover:border-fg-primary hover:bg-bg-secondary"
                     >
                        <X size={18} />
                     </button>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-y-auto md:overflow-hidden">
                     {/* Image column */}
                     <div className="md:w-[58%] md:shrink-0 bg-bg-secondary relative min-h-[30vh] md:min-h-0 md:border-r md:border-border-primary">
                        {!imgLoaded && (
                           <div className="absolute inset-0 flex items-center justify-center bg-bg-secondary">
                              <div className="w-8 h-8 border-4 border-fg-primary/20 border-t-accent rounded-full animate-spin" />
                           </div>
                        )}
                        <Image
                           src={project.image}
                           alt={project.title}
                           fill
                           className={`object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                           onLoad={() => setImgLoaded(true)}
                           sizes="(max-width: 768px) 100vw, 58vw"
                        />
                     </div>

                     {/* Text column */}
                     <div className="md:flex-1 md:overflow-y-auto">
                        <div className="p-[6vw] md:p-8 space-y-[6vw] md:space-y-8">
                           {/* Description */}
                           <div>
                              <p className="text-[3.5vw] md:text-base text-fg-secondary leading-relaxed">
                                 {project.fullDescription ||
                                    project.description}
                              </p>
                           </div>

                           {/* Tech stack */}
                           <div>
                              <h4 className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-muted mb-[2vw] md:mb-3">
                                 Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-[1.5vw] md:gap-2">
                                 {project.tech.map((t) => (
                                    <span
                                       key={t}
                                       className="rounded-full border border-border-primary px-[3vw] md:px-3 py-[1vw] md:py-1 font-mono text-[2.5vw] md:text-xs uppercase text-fg-muted"
                                    >
                                       {t}
                                    </span>
                                 ))}
                              </div>
                           </div>

                           {/* Action buttons */}
                           <div className="flex flex-wrap gap-[3vw] md:gap-4 pt-[3vw] md:pt-4 border-t border-border-primary">
                              {project.demo && (
                                 <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-accent px-[5vw] md:px-6 py-[2vw] md:py-3 font-mono text-[2.5vw] md:text-sm font-semibold uppercase tracking-widest text-black transition-all hover:scale-105"
                                 >
                                    <ExternalLink size={16} />
                                    Live Demo
                                 </a>
                              )}
                              <a
                                 href={project.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center gap-2 rounded-full border border-border-primary px-[5vw] md:px-6 py-[2vw] md:py-3 font-mono text-[2.5vw] md:text-sm uppercase tracking-widest text-fg-secondary transition-all hover:border-accent hover:text-accent"
                              >
                                 <Github size={16} />
                                 Source Code
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   );

   return createPortal(modal, portalRef.current);
}
