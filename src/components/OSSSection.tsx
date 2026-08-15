"use client";

import { openSourceRepos } from "@/lib/data";
import type { GitHubStatsByRepo } from "@/lib/github";
import { motion } from "framer-motion";
import { CircleDot, ExternalLink, Github, GitFork, Star } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

interface OSSSectionProps {
   stats: GitHubStatsByRepo;
}

function formatCount(value: number) {
   return new Intl.NumberFormat("en", { notation: "compact" }).format(value);
}

export function OSSSection({ stats }: OSSSectionProps) {
   return (
      <Container className="py-[12vw] md:py-20">
         <SectionHeading number="01" title="Open Source" />

         <div className="mb-[7vw] md:mb-10 max-w-3xl">
            <h2 className="font-black text-[7vw] md:text-5xl leading-[1.02] mb-[3vw] md:mb-4">
               SYSTEMS BUILT IN PUBLIC
            </h2>
            <p className="text-[3.4vw] md:text-base leading-relaxed text-fg-secondary">
               Performance-focused databases, developer tools, and backend
               frameworks. Repository activity below is synced from GitHub.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3vw] md:gap-4">
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
                  className="group rounded-xl border border-border-primary bg-bg-secondary/40 p-[5vw] md:p-6 transition-all hover:border-accent/30 flex flex-col"
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

                  <p className="text-[3vw] md:text-sm text-fg-secondary leading-relaxed mb-[3vw] md:mb-4 flex-1">
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

                  <div className="flex flex-wrap gap-[1vw] md:gap-1.5 mb-[2.5vw] md:mb-3">
                     {repo.topics.slice(0, 5).map((topic) => (
                        <span
                           key={topic}
                           className="rounded-full bg-accent/10 px-[2vw] md:px-2 py-[0.4vw] md:py-0.5 font-mono text-[1.8vw] md:text-[9px] uppercase text-accent"
                        >
                           {topic}
                        </span>
                     ))}
                  </div>

                  {stats[repo.name] ? (
                     <div className="flex items-center gap-[3vw] md:gap-3 mt-auto pt-[2vw] md:pt-2 border-t border-border-primary">
                        <span className="flex items-center gap-[1vw] md:gap-1 text-[2.5vw] md:text-xs text-fg-muted">
                           <Star size={12} />
                           {formatCount(stats[repo.name].stars)} stars
                        </span>
                        <span className="flex items-center gap-[1vw] md:gap-1 text-[2.5vw] md:text-xs text-fg-muted">
                           <GitFork size={12} />
                           {formatCount(stats[repo.name].forks)} forks
                        </span>
                        <span className="flex items-center gap-[1vw] md:gap-1 text-[2.5vw] md:text-xs text-fg-muted">
                           <CircleDot size={12} />
                           {formatCount(stats[repo.name].openIssues)} issues
                        </span>
                     </div>
                  ) : (
                     <div className="mt-auto pt-[2vw] md:pt-2 border-t border-border-primary">
                        <span className="flex items-center gap-[1vw] md:gap-1 text-[2.5vw] md:text-xs text-fg-muted">
                           <Github size={12} />
                           View repository activity
                        </span>
                     </div>
                  )}
               </motion.a>
            ))}
         </div>
      </Container>
   );
}
