"use client";
import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-foreground/30 overflow-hidden hover:shadow-md transition rounded-3xl flex flex-col"
            >
              <div className="relative h-32 md:h-48 bg-foreground/10 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 md:p-6 bg-background flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base md:text-lg pb-2 md:pb-3 tracking-wide text-center">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-xs leading-relaxed pb-3 md:pb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pb-4 md:pb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-200 text-gray-800 px-2 py-1 font-semibold rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 font-semibold rounded-xl">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-foreground text-background rounded-3xl py-2 px-3 md:px-4 text-xs md:text-sm font-bold flex items-center justify-center gap-2 hover:bg-foreground/90 transition"
                    href={project.github}
                  >
                    <Code2 size={16} />
                    CODE
                  </a>
                  {project.demo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-foreground rounded-3xl py-2 px-3 md:px-4 text-xs md:text-sm font-bold flex items-center justify-center gap-2 hover:bg-background/50 transition"
                      href={project.demo}
                    >
                      <ExternalLink size={16} />
                      PREVIEW
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
