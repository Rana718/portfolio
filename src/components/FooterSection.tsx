"use client";

import { motion } from "framer-motion";
import { Calendar, Download, Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "./ui/XIcon";
import { Container } from "./ui/Container";
import { GlassButton } from "./ui/GlassButton";
import { ContributionHeatmap } from "./ContributionHeatmap";

const GITHUB_USERNAME = "Rana718";

const actions = [
   {
      href: "mailto:ranadolui.dev@gmail.com",
      icon: Mail,
      label: "ranadolui.dev@gmail.com",
      variant: "accent" as const,
   },
   {
      href: "https://cal.com/rana-dolui-0l0osz/15min?overlayCalendar=true",
      icon: Calendar,
      label: "Book a call",
      variant: "glass" as const,
   },
   {
      href: "/Rana_Dolui.pdf",
      icon: Download,
      label: "Resume",
      variant: "outline" as const,
      download: true,
   },
];

const socials = [
   { href: "https://github.com/Rana718", label: "GitHub" },
   { href: "https://x.com/jack718r", label: "Twitter" },
   {
      href: "https://linkedin.com/in/rana-dolui-89357728a/",
      label: "LinkedIn",
   },
];

const socialIcons = [
   { href: "https://github.com/Rana718", icon: Github, label: "GitHub" },
   {
      href: "https://linkedin.com/in/rana-dolui-89357728a/",
      icon: Linkedin,
      label: "LinkedIn",
   },
   { href: "https://x.com/jack718r", icon: XIcon, label: "X" },
];

// Evaluated once at module load — no need to recompute on every render.
const currentYear = new Date().getFullYear();

export function FooterSection() {
   return (
      <footer className="relative flex min-h-[80vh] flex-col justify-between overflow-hidden border-t border-border-primary pt-[8vw] md:pt-16">
         <Container>
            <div className="flex flex-col gap-[12vw] md:gap-12">
               {/* Heading + contribution graph */}
               <div className="grid grid-cols-1 items-center gap-[8vw] md:grid-cols-12 md:gap-8">
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                     className="col-span-1 md:col-span-4"
                  >
                     <span className="mb-[3vw] md:mb-4 block text-center font-mono text-[2.5vw] md:text-base uppercase tracking-widest text-fg-secondary md:text-left">
                        <span className="text-fg-primary/30">08 /</span> Connect
                     </span>
                     <h2 className="text-center font-black text-[16vw] md:text-8xl lg:text-[9rem] uppercase leading-[0.75] tracking-tighter md:text-left">
                        Let&apos;s
                        <br />
                        <span className="text-accent">Talk.</span>
                     </h2>

                     <div className="mt-[6vw] md:mt-8 flex justify-center gap-[3vw] md:gap-3 md:justify-start">
                        {socialIcons.map(({ href, icon: Icon, label }) => (
                           <GlassButton
                              key={label}
                              href={href}
                              icon
                              variant="glass"
                              aria-label={label}
                              className="h-[11vw] w-[11vw] md:h-12 md:w-12"
                           >
                              <Icon className="h-[4.5vw] w-[4.5vw] md:h-5 md:w-5" />
                           </GlassButton>
                        ))}
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                     className="col-span-1 mt-[8vw] md:col-span-8 md:mt-0 md:ml-8"
                  >
                     <ContributionHeatmap username={GITHUB_USERNAME} />
                  </motion.div>
               </div>

               {/* Action row */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="flex w-full flex-wrap items-center justify-center gap-[3vw] md:flex-nowrap md:gap-3"
               >
                  {actions.map(
                     ({ href, icon: Icon, label, variant, download }) => (
                        <GlassButton
                           key={label}
                           href={href}
                           variant={variant}
                           download={download}
                        >
                           <Icon className="h-[4.5vw] w-[4.5vw] md:h-5 md:w-5" />
                           {label}
                        </GlassButton>
                     ),
                  )}
               </motion.div>
            </div>
         </Container>

         <Container className="flex items-end justify-between pt-[6vw] md:pt-10 font-mono text-[2.5vw] md:text-sm uppercase text-fg-secondary">
            <span>© {currentYear} Rana Dolui</span>
            <div className="flex gap-[4vw] md:gap-4">
               {socials.map(({ href, label }) => (
                  <a
                     key={label}
                     href={href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="relative transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                  >
                     {label}
                  </a>
               ))}
            </div>
         </Container>

         {/* Watermark — decorative, scales with the viewport. */}
         <div className="pointer-events-none mt-[12vw] md:mt-8 flex w-full select-none items-end justify-center overflow-hidden">
            <motion.span
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 0.3, y: 16 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="bg-linear-to-b from-fg-primary to-transparent bg-clip-text font-black text-[22vw] uppercase leading-[0.7] tracking-tighter whitespace-nowrap text-transparent"
            >
               Rana Dolui
            </motion.span>
         </div>
      </footer>
   );
}
