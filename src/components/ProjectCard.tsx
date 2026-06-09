"use client";
import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { LiquidButton } from "./LiquidButton";
import { useTheme } from "@/lib/theme-provider";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGo, SiPython, SiFastapi, SiFlask,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiMysql,
  SiDocker, SiNginx, SiRabbitmq, SiApachekafka, SiClerk,
  SiFramer, SiSocketdotio, SiSelenium, SiFirebase, SiSupabase,
  SiVite, SiFlutter, SiLangchain
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandGolang, TbBrandFramerMotion } from 'react-icons/tb';

const techIcons: Record<string, any> = {
  'Next.js': SiNextdotjs,
  'NextJS': SiNextdotjs,
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
  'LangChain': SiLangchain,
  'OpenAI': SiGo,
  'Gemini': SiGo,
  'Razorpay': SiGo,
  'SQLAlchemy': SiPython,
  'Convex': SiGo,
  'Fiber': SiGo,
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
    category?: string | string[];
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";
  const categories = Array.isArray(project.category) ? project.category : project.category ? [project.category] : [];
  const isMobileApp = categories.includes("Mobile App");

  return (
    <motion.div
      className="group border border-foreground/20 overflow-hidden transition-all duration-500 rounded-2xl flex flex-col bg-background h-full"
      whileHover={{
        y: -6,
        boxShadow: `0 16px 32px rgba(${accentRgb}, 0.1)`,
        borderColor: `rgba(${accentRgb}, 0.4)`,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Image container */}
      <div className={`relative h-40 overflow-hidden ${isMobileApp ? 'bg-linear-to-b from-foreground/5 to-foreground/10' : 'bg-foreground/5'}`}>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`${isMobileApp ? 'object-contain p-2' : 'object-cover'}`}
          />
        </motion.div>
        {categories.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end">
            {categories.map((cat) => (
              <div
                key={cat}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium backdrop-blur-md"
                style={{
                  backgroundColor: `rgba(${accentRgb}, 0.15)`,
                  color: accentColor,
                }}
              >
                {cat}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-1 flex-col justify-between text-left">
        <div>
          <h3
            className="font-bold text-base mb-1.5 tracking-wide transition-colors duration-300"
            style={{ ["--accent" as string]: accentColor }}
          >
            <span className="group-hover:text-(--accent)">{project.title}</span>
          </h3>
          <p className="text-foreground/60 text-xs leading-relaxed mb-3 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech icons */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {[...new Set(project.tech)].slice(0, 8).map((tech) => {
            const Icon = techIcons[tech];
            return Icon ? (
              <motion.div
                key={tech}
                className="w-6 h-6 flex items-center justify-center rounded-md bg-foreground/5"
                title={tech}
                whileHover={{ scale: 1.15, y: -2 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.1)`;
                  e.currentTarget.style.boxShadow = `0 0 8px rgba(${accentRgb}, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Icon
                  className="w-3.5 h-3.5 text-foreground/70 transition-colors duration-300"
                  onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) => e.currentTarget.style.color = ""}
                />
              </motion.div>
            ) : null;
          })}
          {[...new Set(project.tech)].length > 8 && (
            <div className="w-6 h-6 flex items-center justify-center rounded-md bg-foreground/5 text-[10px] font-bold text-foreground/60">
              +{[...new Set(project.tech)].length - 8}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <LiquidButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="flex-1 rounded-lg py-2 px-3 text-[11px]"
          >
            <Code2 size={14} />
            CODE
          </LiquidButton>
          {project.demo && (
            <LiquidButton
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="flex-1 rounded-lg py-2 px-3 text-[11px]"
            >
              <ExternalLink size={14} />
              DEMO
            </LiquidButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};
