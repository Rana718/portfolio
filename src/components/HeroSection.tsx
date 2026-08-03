"use client";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { Typewriter } from "./Typewriter";
import { ParticleBurst } from "./ParticleBurst";
import { GlassButton } from "./ui/GlassButton";
import { TextScramble } from "./TextScramble";
import { StatCounter } from "./StatCounter";
import { useTheme } from "@/lib/theme-provider";
import { Container } from "./ui/Container";

const socials = [
   { url: "https://github.com/Rana718", label: "Github", icon: Github },
   {
      url: "https://linkedin.com/in/rana-dolui-89357728a/",
      label: "LinkedIn",
      icon: Linkedin,
   },
   { url: "https://x.com/jack718r", label: "X", icon: SiX },
   { url: "mailto:ranadolui.dev@gmail.com", label: "Mail", icon: Mail },
];

export function HeroSection() {
   const { theme } = useTheme();
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
   const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

   return (
      <div className="relative h-screen w-full overflow-hidden bg-bg-primary">
         <ParticleBurst />
         <Container className="relative z-10 flex h-full flex-col items-center justify-center">
            <motion.div
               className="w-full max-w-2xl"
               initial="hidden"
               animate="visible"
               variants={{
                  hidden: { opacity: 0 },
                  visible: {
                     opacity: 1,
                     transition: { staggerChildren: 0.15, delayChildren: 0.5 },
                  },
               }}
            >
               {/* Name */}
               <motion.h1
                  className="text-center font-black text-[clamp(2rem,8vw,5rem)] leading-[0.92] mb-[2.5vw] md:mb-3"
                  variants={{
                     hidden: { opacity: 0, y: 30 },
                     visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                     },
                  }}
               >
                  <TextScramble text="RANA DOLUI" delay={500} duration={1500} />
               </motion.h1>

               {/* Accent line */}
               <motion.div
                  className="mb-[3vw] md:mb-4 flex justify-center"
                  variants={{
                     hidden: { opacity: 0, y: 30 },
                     visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                     },
                  }}
               >
                  <div
                     className="h-px w-32 md:w-48 rounded-full"
                     style={{
                        background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                        boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
                     }}
                  />
               </motion.div>

               {/* Role typewriter */}
               <motion.p
                  className="mb-[3vw] md:mb-4 text-center font-mono text-[3.2vw] md:text-sm uppercase tracking-widest"
                  variants={{
                     hidden: { opacity: 0, y: 30 },
                     visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                     },
                  }}
               >
                  <span className="text-fg-muted">&gt; </span>
                  <span className="inline-block" style={{ color: accentColor }}>
                     <Typewriter text="FULL-STACK DEV & AI ENGINEER" />
                  </span>
                  <span
                     className="inline-block animate-pulse"
                     style={{ color: accentColor }}
                  >
                     _
                  </span>
               </motion.p>

               {/* Bio */}
               <motion.p
                  className="mb-[5vw] md:mb-6 text-center text-[3.2vw] md:text-sm leading-relaxed text-fg-secondary"
                  variants={{
                     hidden: { opacity: 0, y: 30 },
                     visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                     },
                  }}
               >
                  Full Stack Developer & AI Engineer building scalable web,
                  mobile apps, and intelligent agent systems. I ship
                  production-grade solutions with Next.js, Go, Python, and
                  AI/ML.
               </motion.p>

               {/* Stats row */}
               <motion.div
                  className="mb-[6vw] md:mb-8 grid grid-cols-2 gap-[2.5vw] md:gap-6 max-w-sm mx-auto"
                  variants={{
                     hidden: { opacity: 0, y: 30 },
                     visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                     },
                  }}
               >
                  <StatCounter end={3} suffix="+" label="Years Exp" delay={0} />
                  <StatCounter
                     end={17}
                     suffix="+"
                     label="Projects"
                     delay={0.2}
                  />
               </motion.div>

               {/* CTA buttons */}
               <motion.div
                  className="mb-[5vw] md:mb-8 flex justify-center gap-[2.5vw] md:gap-3"
                  variants={{
                     hidden: { opacity: 0, y: 30 },
                     visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                     },
                  }}
               >
                  <GlassButton
                     href="#work"
                     variant="accent"
                     className="px-[4vw] md:px-6 py-[1.2vw] md:py-2.5 text-[2.2vw] md:text-xs"
                  >
                     VIEW PROJECTS
                  </GlassButton>
                  <GlassButton
                     href="/Rana_Dolui.pdf"
                     download
                     variant="outline"
                     className="px-[4vw] md:px-6 py-[1.2vw] md:py-2.5 text-[2.2vw] md:text-xs"
                  >
                     DOWNLOAD CV
                  </GlassButton>
               </motion.div>

               {/* Social links */}
               <motion.div
                  className="flex justify-center gap-[2.5vw] md:gap-4"
                  variants={{
                     hidden: { opacity: 0, y: 30 },
                     visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                     },
                  }}
               >
                  {socials.map(({ url, label, icon: Icon }) => (
                     <GlassButton
                        key={label}
                        href={url}
                        target="_blank"
                        variant="glass"
                        icon
                        className="h-[9vw] w-[9vw] md:h-11 md:w-11"
                        aria-label={label}
                     >
                        <Icon size={18} />
                     </GlassButton>
                  ))}
               </motion.div>
            </motion.div>

            {/* Scroll-down chevron */}
            <motion.a
               href="#experience"
               className="absolute bottom-6 hidden md:block"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 2, duration: 0.5 }}
            >
               <ChevronDown
                  size={28}
                  className="animate-bounce-chevron"
                  style={{ color: accentColor, opacity: 0.6 }}
               />
            </motion.a>
         </Container>
      </div>
   );
}
