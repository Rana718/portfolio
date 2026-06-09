"use client";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { Typewriter } from "./Typewriter";
import { ParticleBurst } from "./ParticleBurst";
import { LiquidButton } from "./LiquidButton";
import { TextScramble } from "./TextScramble";
import { useTheme } from "@/lib/theme-provider";

const socials = [
  { url: "https://github.com/Rana718", label: "Github", icon: Github },
  { url: "https://linkedin.com/in/rana-dolui-89357728a/", label: "LinkedIn", icon: Linkedin },
  { url: "https://x.com/jack718r", label: "X", icon: SiX },
  { url: "mailto:ranadolui.dev@gmail.com", label: "Mail", icon: Mail },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const Hero = () => {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBurst />
      <header className="relative z-10 pt-24 sm:pt-28 md:pt-32 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-2xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated name with text scramble */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-2 sm:mb-4"
            variants={itemVariants}
          >
            <span
              className="inline-block transition-colors duration-300 cursor-default"
              style={{ color: "inherit" }}
              onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
              onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
            >
              <TextScramble text="RANA DOLUI" delay={300} duration={1500} />
            </span>
          </motion.h1>

          {/* Line divider */}
          <motion.div className="flex justify-center mb-6 sm:mb-8" variants={itemVariants}>
            <motion.div
              className="w-32 sm:w-40 md:w-48 h-0.5 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Typewriter with accent color */}
          <motion.p
            className="text-center text-xs sm:text-sm md:text-base tracking-widest mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <span className="text-foreground/60">&gt; </span>
            <span style={{ color: accentColor }}>
              <Typewriter text="FULL-STACK DEV & AI ENGINEER" />
            </span>
            <span style={{ color: accentColor }} className="animate-pulse">_</span>
          </motion.p>

          {/* Description with smooth animation */}
          <motion.div
            className="text-center mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed text-foreground/70"
            variants={itemVariants}
          >
            <p>
              Hi, I'm{" "}
              <motion.span
                className="text-sm px-2 py-1 inline-block rounded-xl font-semibold"
                style={{
                  backgroundColor: accentColor,
                  color: theme === "dark" ? "#0a0a0a" : "#1a1a1a",
                  boxShadow: `0 0 15px rgba(${accentRgb}, 0.3)`,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Rana Dolui
              </motion.span>{" "}
              — a Full Stack Developer & AI Engineer passionate about building scalable web, mobile applications and intelligent agent systems.
              I specialize in Next.js, Go, Python, and AI/ML, designing robust system architectures and creating solutions that are both powerful and user-friendly.
            </p>
          </motion.div>

          {/* CTA Buttons with animation */}
          <motion.div
            className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
            variants={itemVariants}
          >
            <LiquidButton
              href="#projects"
              variant="primary"
              className="px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm rounded-3xl"
            >
              VIEW PROJECTS
            </LiquidButton>
            <LiquidButton
              href="/Rana_Dolui.pdf"
              download
              variant="secondary"
              className="px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm rounded-3xl"
            >
              DOWNLOAD CV
            </LiquidButton>
          </motion.div>

          {/* Social links with staggered animation */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
            variants={itemVariants}
          >
            {socials.map(({ url, label, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <LiquidButton
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="p-2 sm:p-3 rounded-full"
                  aria-label={label}
                >
                  <Icon size={18} />
                </LiquidButton>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bouncing chevron with glow */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            className="block p-2 rounded-full transition-all duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              ["--hover-bg" as string]: `rgba(${accentRgb}, 0.1)`,
              ["--hover-shadow" as string]: `0 0 20px rgba(${accentRgb}, 0.3)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.1)`;
              e.currentTarget.style.boxShadow = `0 0 20px rgba(${accentRgb}, 0.3)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <ChevronDown
              size={28}
              style={{ color: accentColor, opacity: 0.6 }}
              className="transition-colors"
            />
          </motion.a>
        </motion.div>
      </header>
    </section>
  );
};
