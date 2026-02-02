"use client";
import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { LiquidButton } from "./LiquidButton";
import { useTheme } from "@/lib/theme-provider";
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
    category?: string;
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";
  const isMobileApp = project.category === "Mobile App";

  return (
    <div
      className="group border border-foreground/20 overflow-hidden transition-all duration-500 rounded-2xl flex flex-col bg-background"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.4)`;
        e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.1)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Image container with overlay on hover */}
      <div className={`relative h-48 overflow-hidden ${isMobileApp ? 'bg-linear-to-b from-foreground/5 to-foreground/10' : 'bg-foreground/5'}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`${isMobileApp ? 'object-contain p-2' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
        />
      </div>

      <div className="p-5 flex flex-1 flex-col justify-between text-left">
        <div>
          <h3
            className="font-bold text-lg mb-2 tracking-wide transition-colors duration-300"
            style={{ ["--accent" as string]: accentColor }}
          >
            <span className="group-hover:text-(--accent)">{project.title}</span>
          </h3>
          <p className="text-foreground/60 text-xs leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech icons with hover effect */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[...new Set(project.tech)].slice(0, 8).map((tech) => {
            const Icon = techIcons[tech];
            return Icon ? (
              <div
                key={tech}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-foreground/5 transition-all duration-300"
                title={tech}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.1)`;
                  e.currentTarget.style.boxShadow = `0 0 10px rgba(${accentRgb}, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Icon
                  className="w-4 h-4 text-foreground/70 transition-colors duration-300"
                  onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) => e.currentTarget.style.color = ""}
                />
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
