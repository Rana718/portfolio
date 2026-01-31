"use client";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { LiquidButton } from "./LiquidButton";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme-provider";

export const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto text-center py-20 lg:py-32 px-4 md:px-8"
      id="projects"
    >
      <h2
        className={`text-3xl md:text-5xl font-bold tracking-wide mb-3 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        PROJECTS
      </h2>
      <div
        className={`w-16 md:w-24 h-1 mx-auto mb-6 md:mb-8 rounded-full transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
        }}
      />
      <p
        className={`text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        A collection of my featured projects showcasing different aspects of modern software development
      </p>

      <div className="py-6 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex justify-center mt-1 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <LiquidButton
          href="/projects"
          variant="primary"
          className="rounded-xl py-3 px-8 text-sm"
        >
          VIEW ALL PROJECTS
        </LiquidButton>
      </div>
    </section>
  );
};
