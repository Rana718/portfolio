"use client";
import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { LiquidButton } from "./LiquidButton";
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
  'expo': TbBrandReactNative,
  'Zustand': SiReact,
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo?: string | null;
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group border border-foreground/20 overflow-hidden hover:border-foreground/40 transition-all rounded-2xl flex flex-col bg-background">
      <div className="relative h-48 bg-foreground/5 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-1 flex-col justify-between text-left">
        <div>
          <h3 className="font-bold text-lg mb-2 tracking-wide">
            {project.title}
          </h3>
          <p className="text-foreground/60 text-xs leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {[...new Set(project.tech)].slice(0, 8).map((tech) => {
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
          {[...new Set(project.tech)].length > 8 && (
            <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-foreground/5 text-[10px] font-bold text-foreground/60">
              +{[...new Set(project.tech)].length - 8}
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <LiquidButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="flex-1 rounded-xl py-2.5 px-4 text-xs"
          >
            <Code2 size={16} />
            CODE
          </LiquidButton>
          {project.demo && (
            <LiquidButton
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="flex-1 rounded-xl py-2.5 px-4 text-xs"
            >
              <ExternalLink size={16} />
              DEMO
            </LiquidButton>
          )}
        </div>
      </div>
    </div>
  );
};
