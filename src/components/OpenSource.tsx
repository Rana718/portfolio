"use client";
import { useState } from "react";
import { useTheme } from "@/lib/theme-provider";
import { openSourceRepos } from "@/lib/data";
import { LiquidButton } from "./LiquidButton";
import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiRust, SiKotlin, SiSwift, SiDart, SiRuby, SiC,
} from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';

const langIcons: Record<string, { icon: React.ElementType; light: string; dark: string }> = {
  'Go':         { icon: TbBrandGolang, light: '#00ADD8', dark: '#00ADD8' },
  'JavaScript': { icon: SiJavascript, light: '#F7DF1E', dark: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, light: '#3178C6', dark: '#3178C6' },
  'Python':     { icon: SiPython,     light: '#3776AB', dark: '#3776AB' },
  'C++':        { icon: SiCplusplus,  light: '#00599C', dark: '#00599C' },
  'C':          { icon: SiC,          light: '#555555', dark: '#A8B9CC' },
  'Rust':       { icon: SiRust,       light: '#CE422B', dark: '#CE422B' },
  'Kotlin':     { icon: SiKotlin,     light: '#7F52FF', dark: '#7F52FF' },
  'Swift':      { icon: SiSwift,      light: '#F05138', dark: '#F05138' },
  'Dart':       { icon: SiDart,       light: '#00B4AB', dark: '#00B4AB' },
  'Ruby':       { icon: SiRuby,       light: '#CC342D', dark: '#CC342D' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const OpenSource = () => {
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 lg:py-32" id="opensource">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
          OPEN SOURCE
        </h2>
        <motion.div
          className="w-16 md:w-24 h-1 mx-auto mb-6 md:mb-8 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <p className="text-foreground/60 text-xs md:text-sm max-w-2xl mx-auto px-2">
          Projects I've built and shared with the community
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {openSourceRepos.map((repo) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-foreground/20 p-5 rounded-3xl flex flex-col gap-3 transition-all duration-500"
            variants={itemVariants}
            whileHover={{
              y: -4,
              boxShadow: `0 0 30px rgba(${accentRgb}, 0.15)`,
              borderColor: `rgba(${accentRgb}, 0.4)`,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `linear-gradient(135deg, rgba(${accentRgb}, 0.05), transparent)` }}
            />

            <div className="relative z-10 flex flex-col gap-3 h-full">
              <div className="flex items-center justify-between">
                <h3
                  className="font-bold text-sm tracking-wide transition-colors duration-300 group-hover:text-(--accent)"
                  style={{ ["--accent" as string]: accentColor }}
                >
                  {repo.name}
                </h3>
                {repo.isrelease && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: `rgba(${accentRgb}, 0.15)`,
                      color: accentColor,
                    }}
                  >
                    RELEASED
                  </span>
                )}
              </div>
              <p className="text-xs text-foreground/60 leading-relaxed flex-1">{repo.description}</p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-foreground/15 text-foreground/50 transition-colors duration-300 group-hover:border-foreground/25"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Language icons */}
              <div className="flex items-center gap-1.5 pt-1">
                {repo.language.map((lang) => {
                  const entry = langIcons[lang];
                  if (!entry) return null;
                  const { icon: Icon, light, dark } = entry;
                  return (
                    <motion.div
                      key={lang}
                      className="w-6 h-6 flex items-center justify-center rounded-md bg-foreground/5 transition-all duration-300"
                      title={lang}
                      whileHover={{ scale: 1.2 }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.12)`;
                        e.currentTarget.style.boxShadow = `0 0 8px rgba(${accentRgb}, 0.2)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <Icon
                        className="w-3.5 h-3.5 transition-colors duration-300"
                        style={{ color: theme === 'dark' ? dark : light }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <LiquidButton
          href="https://github.com/Rana718"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="rounded-xl py-3 px-8 text-sm"
        >
          VIEW GITHUB PROFILE
        </LiquidButton>
      </motion.div>
    </section>
  );
};
