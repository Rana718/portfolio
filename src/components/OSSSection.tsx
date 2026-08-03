"use client";

import { openSourceRepos } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function OSSSection() {
   return (
      <Container className="py-[12vw] md:py-20">
         <SectionHeading number="05" title="Open Source" />

         <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vw] md:gap-4">
            {openSourceRepos.map((repo, i) => (
               <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-xl border border-border-primary bg-bg-secondary/40 p-[5vw] md:p-6 transition-all hover:border-accent/30"
               >
                  <div className="flex items-start justify-between mb-[2vw] md:mb-3">
                     <div className="flex items-center gap-[2vw] md:gap-2">
                        <Github className="h-[4vw] w-[4vw] md:h-4 md:w-4 text-fg-muted group-hover:text-fg-primary transition-colors" />
                        <h3 className="font-black text-[4vw] md:text-lg capitalize">
                           {repo.name}
                        </h3>
                     </div>
                     <ExternalLink
                        size={14}
                        className="text-fg-muted group-hover:text-accent transition-colors"
                     />
                  </div>

                  <p className="text-[3vw] md:text-sm text-fg-secondary leading-relaxed mb-[3vw] md:mb-4">
                     {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-[1vw] md:gap-1.5 mb-[2.5vw] md:mb-3">
                     {repo.language.map((lang) => (
                        <span
                           key={lang}
                           className="rounded-full border border-border-primary px-[2vw] md:px-2.5 py-[0.5vw] md:py-0.5 font-mono text-[2vw] md:text-[10px] uppercase text-fg-muted"
                        >
                           {lang}
                        </span>
                     ))}
                  </div>

                  <div className="flex flex-wrap gap-[1vw] md:gap-1.5">
                     {repo.topics.slice(0, 5).map((topic) => (
                        <span
                           key={topic}
                           className="rounded-full bg-accent/10 px-[2vw] md:px-2 py-[0.4vw] md:py-0.5 font-mono text-[1.8vw] md:text-[9px] uppercase text-accent"
                        >
                           {topic}
                        </span>
                     ))}
                  </div>
               </motion.a>
            ))}
         </div>
      </Container>
   );
}
