"use client";

import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Brain, Smartphone, Server } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
   Globe,
   Brain,
   Smartphone,
   Server,
};

export function ServicesSection() {
   return (
      <Container className="py-[12vw] md:py-20">
         <SectionHeading number="07" title="Services" />

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3vw] md:gap-4 mb-[6vw] md:mb-12">
            {services.map((service, i) => {
               const Icon = iconMap[service.icon] || Server;
               return (
                  <motion.div
                     key={service.id}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-10%" }}
                     transition={{ duration: 0.5, delay: i * 0.08 }}
                     className="rounded-xl border border-border-primary bg-bg-secondary/40 p-[5vw] md:p-6 transition-all hover:border-accent/20"
                  >
                     <Icon className="h-[6vw] w-[6vw] md:h-8 md:w-8 text-accent mb-[2vw] md:mb-3" />
                     <h3 className="font-black text-[4vw] md:text-lg mb-[1.5vw] md:mb-2">
                        {service.title}
                     </h3>
                     <p className="text-[2.8vw] md:text-sm text-fg-secondary leading-relaxed mb-[3vw] md:mb-4">
                        {service.description}
                     </p>
                     <ul className="space-y-[1vw] md:space-y-1.5">
                        {service.features.map((f) => (
                           <li
                              key={f}
                              className="flex items-center gap-[1.5vw] md:gap-2 text-[2.5vw] md:text-xs text-fg-muted"
                           >
                              <span className="h-px w-[2.5vw] md:w-3 bg-accent/50 shrink-0" />
                              {f}
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               );
            })}
         </div>

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-[2.5vw] md:gap-4 rounded-xl border border-border-primary bg-bg-secondary/40 p-[5vw] md:p-6"
         >
            <p className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary text-center sm:text-left">
               Available for remote projects worldwide
            </p>
            <a
               href="https://cal.com/rana-dolui-0l0osz/15min?overlayCalendar=true"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 rounded-full bg-accent px-[4vw] md:px-5 py-[1.5vw] md:py-2 font-mono text-[2.2vw] md:text-xs font-semibold uppercase tracking-widest text-black transition-all hover:scale-105"
            >
               Book a call
               <ArrowUpRight size={14} />
            </a>
         </motion.div>
      </Container>
   );
}
