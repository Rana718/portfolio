"use client";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { LiquidButton } from "./LiquidButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";

const categories = ["All", "Web App", "Mobile App", "AI/ML", "Tool"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  const categoryFiltered = activeCategory === "All"
    ? projects
    : projects.filter((p) => (p.category as string[]).includes(activeCategory));

  const filteredProjects = activeCategory === "All" ? categoryFiltered.slice(0, 6) : categoryFiltered;
  const showViewAll = projects.length > 6 && activeCategory === "All";

  return (
    <section className="max-w-7xl mx-auto text-center py-20 lg:py-32 px-4 md:px-8" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
          PROJECTS
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
        <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2 mb-8">
          A collection of my featured projects showcasing different aspects of modern software development
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-2 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border"
            style={{
              borderColor: activeCategory === cat ? accentColor : "rgba(128,128,128,0.2)",
              backgroundColor: activeCategory === cat ? `rgba(${accentRgb}, 0.15)` : "transparent",
              color: activeCategory === cat ? accentColor : "inherit",
              boxShadow: activeCategory === cat ? `0 0 15px rgba(${accentRgb}, 0.2)` : "none",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      <div className="py-6 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" as const }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {showViewAll && (
        <motion.div
          className="flex justify-center mt-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <LiquidButton
            href="/projects"
            variant="primary"
            className="rounded-xl py-3 px-8 text-sm"
          >
            VIEW ALL PROJECTS
          </LiquidButton>
        </motion.div>
      )}
    </section>
  );
};
