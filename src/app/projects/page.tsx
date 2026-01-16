"use client";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
            ALL PROJECTS
          </h1>
          <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-6" />
          <p className="text-foreground/60 text-sm md:text-base max-w-2xl mx-auto">
            Complete collection of my projects across different technologies and domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
