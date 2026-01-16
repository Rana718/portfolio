"use client";
import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGo, SiPython, SiFastapi, SiFlask,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiMysql,
  SiDocker, SiNginx, SiRabbitmq, SiApachekafka, SiClerk,
  SiFramer, SiSocketdotio, SiSelenium, SiFirebase, SiSupabase,
  SiVite, SiFlutter
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandGolang, TbBrandFramerMotion } from 'react-icons/tb';

const techIcons: Record<string, any> = {
  'Next.js': SiNextdotjs,
  'React': SiReact,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'TailwindCSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'Go': TbBrandGolang,
  'Python': SiPython,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'PostgreSQL': SiPostgresql,
  'Postgresql': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Prisma': SiPrisma,
  'MySQL': SiMysql,
  'Docker': SiDocker,
  'nginx': SiNginx,
  'RabbitMQ': SiRabbitmq,
  'Kafka': SiApachekafka,
  'Clerk': SiClerk,
  'Framer Motion': TbBrandFramerMotion,
  'Socket.IO': SiSocketdotio,
  'Selenium': SiSelenium,
  'Firebase': SiFirebase,
  'Supabase': SiSupabase,
  'Vite': SiVite,
  'React Native': TbBrandReactNative,
  'Flutter': SiFlutter,
  'WebSocket': SiSocketdotio,
  'gRPC': SiGo,
  'LangChain': SiPython,
  'Pinecone': SiPython,
  'Gemini': SiPython,
  'expo': TbBrandReactNative,
  'Cobra CLI': SiGo,
  'SQLC': SiPostgresql,
  'SQLite': SiMysql,
  'NewsAPI': SiJavascript,
  'Convex': SiJavascript,
  'Zustand': SiReact,
};

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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-foreground/20 overflow-hidden hover:border-foreground/40 transition-all rounded-2xl flex flex-col bg-background"
            >
              <div className="relative h-48 md:h-56 bg-foreground/5 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 md:p-6 flex flex-1 flex-col justify-between text-left">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-xs md:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 8).map((tech) => {
                    const Icon = techIcons[tech];
                    return Icon ? (
                      <div
                        key={tech}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                        title={tech}
                      >
                        <Icon className="w-4 h-4 text-foreground/70" />
                      </div>
                    ) : null;
                  })}
                  {project.tech.length > 8 && (
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-foreground/5 text-[10px] font-bold text-foreground/60">
                      +{project.tech.length - 8}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-foreground text-background rounded-xl py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2 hover:bg-foreground/90 transition"
                    href={project.github}
                  >
                    <Code2 size={16} />
                    CODE
                  </a>
                  {project.demo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-foreground/30 text-foreground rounded-xl py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2 hover:bg-foreground/5 transition"
                      href={project.demo}
                    >
                      <ExternalLink size={16} />
                      DEMO
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
