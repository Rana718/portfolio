"use client";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { LiquidButton } from "./LiquidButton";

export const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="max-w-7xl mx-auto text-center py-32 lg:py-46 px-4 md:px-8" id="projects">
      <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
        PROJECTS
      </h2>
      <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-6 md:mb-8" />
      <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2">
        A collection of my featured projects showcasing different aspects of modern software development
      </p>

      <div className="py-6 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
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
