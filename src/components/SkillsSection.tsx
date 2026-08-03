"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { technologies } from "@/lib/data";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

function getIcon(name: string): IconComponent | null {
   const normalized = name.startsWith("Si") ? name : `Si${name}`;
   return (SiIcons as Record<string, IconComponent>)[normalized] ?? null;
}

function brandColor(color: string) {
   if (!color || color === "currentColor") return null;
   const flat = color.toLowerCase();
   if (flat === "#000000" || flat === "#000" || flat === "#010101") return null;
   return color;
}

const skillCategories = technologies.reduce<
   { title: string; skills: typeof technologies }[]
>((rows, tech) => {
   const row = rows.find((r) => r.title === tech.category);
   if (row) row.skills.push(tech);
   else rows.push({ title: tech.category, skills: [tech] });
   return rows;
}, []);

function SkillBadge({ tech }: { tech: (typeof technologies)[number] }) {
   const Icon = getIcon(tech.icon);
   const color = brandColor(tech.color);

   return (
      <span
         style={
            color ? ({ "--brand": color } as React.CSSProperties) : undefined
         }
         className="group inline-flex cursor-default items-center gap-[1.5vw] md:gap-2 rounded-full border border-fg-primary/10 bg-fg-primary/5 px-[3vw] py-[1.5vw] md:px-3.5 md:py-1.5 font-mono text-[3vw] md:text-sm text-fg-secondary transition-all duration-300 hover:scale-[1.03] hover:border-accent/40 hover:bg-fg-primary/10 hover:shadow-[0_0_18px_-6px_var(--accent-glow)]"
      >
         {Icon && (
            <span
               className={`flex shrink-0 items-center opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
                  color ? "group-hover:text-var(--brand)" : ""
               }`}
            >
               <Icon className="h-[3.5vw] w-[3.5vw] md:h-4 md:w-4" size={16} />
            </span>
         )}
         <span className="transition-colors duration-300 group-hover:text-fg-primary">
            {tech.name}
         </span>
      </span>
   );
}

export function SkillsSection() {
   return (
      <Container className="py-[12vw] md:py-20">
         <SectionHeading number="04" title="Technical Expertise" />

         <p className="mb-[12vw] md:mb-16 max-w-2xl text-[4vw] md:text-xl leading-relaxed text-fg-secondary">
            The tools I reach for when building — grouped by where they sit in
            the stack. Hover any badge to see its brand color.
         </p>

         <div className="divide-y divide-border-primary">
            {skillCategories.map((category, idx) => (
               <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                     duration: 0.5,
                     delay: idx * 0.05,
                     ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid grid-cols-1 gap-[4vw] py-[7vw] first:pt-0 last:pb-0 md:grid-cols-4 md:gap-8 md:py-8"
               >
                  {/* Label column */}
                  <div className="md:col-span-1">
                     <div className="flex items-baseline gap-[2vw] md:gap-3">
                        <span className="font-mono text-[2.3vw] md:text-xs tabular-nums text-accent">
                           {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-black text-[5.5vw] md:text-xl uppercase tracking-tight text-fg-primary">
                           {category.title}
                        </h3>
                     </div>
                     <span className="ml-[6vw] md:ml-8 mt-[1vw] md:mt-1.5 block font-mono text-[2.3vw] md:text-[10px] uppercase tracking-widest text-fg-muted">
                        {category.skills.length} tools
                     </span>
                  </div>

                  {/* Badge column */}
                  <div className="flex flex-wrap gap-[2vw] md:col-span-3 md:gap-2">
                     {category.skills.map((tech) => (
                        <SkillBadge key={tech.name} tech={tech} />
                     ))}
                  </div>
               </motion.div>
            ))}
         </div>
      </Container>
   );
}
