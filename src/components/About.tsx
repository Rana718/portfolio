"use client";
import { Code2, Server, Smartphone, Database } from "lucide-react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { TiltCard } from "./TiltCard";
import { StatCounter } from "./StatCounter";

const skillsArray = [
  { icon: Code2, ...skills.frontend },
  { icon: Server, ...skills.backend },
  { icon: Smartphone, ...skills.mobile },
  { icon: Database, ...skills.database },
];

const stats = [
  { end: 3, suffix: "+", label: "Years Experience" },
  { end: 15, suffix: "+", label: "Projects Built" },
  { end: 50, suffix: "+", label: "Technologies" },
  { end: 100, suffix: "%", label: "Client Satisfaction" },
];

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

export const About = () => {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  return (
    <section className="max-w-7xl mx-auto px-4 py-32 lg:py-50 pb-8" id="about">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-wider mb-4">
          ABOUT
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
        <p className="text-xs md:text-sm leading-relaxed max-w-2xl mx-auto text-foreground/70 px-2">
          I'm a Full Stack Developer with expertise in building modern web and
          mobile applications. From frontend interfaces to backend systems and
          DevOps, I create scalable solutions using cutting-edge technologies.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-20 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <StatCounter
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              duration={2}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Cards with Tilt */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillsArray.map(({ icon: Icon, title, description, tech }, index) => (
          <motion.div
            key={title}
            variants={itemVariants}
            custom={index}
          >
            <TiltCard className="h-full" tiltAmount={8}>
              <div
                className="relative overflow-hidden border border-foreground/20 p-4 md:p-6 text-center rounded-3xl group transition-all duration-500 h-full"
                style={{
                  ["--accent-color" as string]: accentColor,
                  ["--accent-rgb" as string]: accentRgb,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.5)`;
                  e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"
                  style={{
                    background: `linear-gradient(to top, rgba(${accentRgb}, 0.1), rgba(${accentRgb}, 0.05), transparent)`,
                  }}
                />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl"
                    style={{ backgroundColor: `rgba(${accentRgb}, 0.1)` }}
                  />
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="text-2xl md:text-3xl mb-3 text-foreground/80 flex justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon
                      className="group-hover:drop-shadow-[0_0_8px_var(--accent-glow)] transition-colors duration-300"
                      style={{
                        ["--accent-glow" as string]: `rgba(${accentRgb}, 0.5)`,
                        color: "inherit",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = accentColor)
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    />
                  </motion.div>
                  <h3 className="font-bold text-xs md:text-sm mb-2 tracking-wider group-hover:text-(--accent-color) transition-colors duration-300">
                    {title}
                  </h3>
                  <p
                    className="text-xs mb-3 font-medium"
                    style={{ color: `rgba(${accentRgb}, 0.7)` }}
                  >
                    {tech}
                  </p>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
