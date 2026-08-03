"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { useTheme } from "@/lib/theme-provider";
import { Container } from "./ui/Container";

const quickLinks = [
   { href: "#home", label: "HOME" },
   { href: "#experience", label: "EXPERIENCE" },
   { href: "#work", label: "WORK" },
   { href: "#skills", label: "SKILLS" },
   { href: "#services", label: "SERVICES" },
   { href: "#contact", label: "CONTACT" },
];

const socials = [
   { icon: Github, label: "Github", url: "https://github.com/Rana718" },
   {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/rana-dolui-89357728a/",
   },
   { icon: SiX, label: "X", url: "https://x.com/jack718r" },
   { icon: Mail, label: "Mail", url: "mailto:ranadolui.dev@gmail.com" },
];

export function FooterSection() {
   const { theme } = useTheme();
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";

   return (
      <footer className="relative overflow-hidden border-t border-border-primary">
         <Container className="py-[8vw] md:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[6vw] md:gap-10">
               <div>
                  <h3
                     className="font-black text-[4vw] md:text-base mb-[1.5vw] md:mb-2"
                     style={{ color: accentColor }}
                  >
                     RANA DOLUI
                  </h3>
                  <p className="text-[2.5vw] md:text-xs text-fg-muted leading-relaxed">
                     Full Stack Developer & AI Engineer building
                     production-grade solutions.
                  </p>
                  <div className="flex items-center gap-[1.5vw] md:gap-2 mt-[2.5vw] md:mt-3">
                     <span
                        className="h-1.25 w-1.25 rounded-full animate-pulse"
                        style={{ backgroundColor: accentColor }}
                     />
                     <span className="font-mono text-[2vw] md:text-[10px] uppercase tracking-widest text-accent">
                        Available for work
                     </span>
                  </div>
               </div>
               <div>
                  <h4 className="font-mono text-[2.5vw] md:text-[11px] uppercase tracking-widest text-fg-muted mb-[2.5vw] md:mb-3">
                     Quick Links
                  </h4>
                  <div className="grid grid-cols-2 gap-[1.5vw] md:gap-1.5">
                     {quickLinks.map((link) => (
                        <a
                           key={link.label}
                           href={link.href}
                           className="font-mono text-[2vw] md:text-[10px] uppercase tracking-widest text-fg-secondary hover:text-fg-primary transition-colors"
                        >
                           {link.label}
                        </a>
                     ))}
                  </div>
               </div>
               <div>
                  <h4 className="font-mono text-[2.5vw] md:text-[11px] uppercase tracking-widest text-fg-muted mb-[2.5vw] md:mb-3">
                     Connect
                  </h4>
                  <div className="flex gap-[2vw] md:gap-2">
                     {socials.map(({ icon: Icon, label, url }) => (
                        <a
                           key={label}
                           href={url}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={label}
                           className="flex h-[8vw] w-[8vw] md:h-9 md:w-9 items-center justify-center rounded-full border border-border-primary transition-all hover:border-accent hover:text-accent"
                        >
                           <Icon size={14} />
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            <div className="mt-[6vw] md:mt-10 pt-[3vw] md:pt-5 border-t border-border-primary flex flex-col sm:flex-row items-center justify-between gap-[1.5vw] md:gap-3">
               <p className="font-mono text-[2vw] md:text-[10px] text-fg-muted">
                  © {new Date().getFullYear()} Rana Dolui. All rights reserved.
               </p>
               <p className="font-mono text-[2vw] md:text-[10px] text-fg-muted">
                  Built with Next.js & TypeScript
               </p>
            </div>
         </Container>
      </footer>
   );
}
