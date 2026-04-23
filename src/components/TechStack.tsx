"use client";
import { useTheme } from "@/lib/theme-provider";
import { useEffect, useRef, useState } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiFlask,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiMysql, SiSqlite,
  SiDocker, SiAmazonwebservices, SiApachekafka, SiKubernetes,
  SiNginx, SiGithubactions, SiGrafana, SiPrometheus, SiRabbitmq,
  SiDjango, SiFirebase, SiSupabase, SiCloudflare,
  SiGit, SiGithub, SiVite, SiFigma,
  SiHtml5, SiCss3, SiC, SiCplusplus,
  SiKotlin, SiRust, SiSolidity, SiBootstrap, SiThreedotjs,
  SiRedux, SiSocketdotio, SiSelenium, SiHelm, SiArgo,
  SiElectron, SiClerk, SiTrpc, SiExpo,
  SiAuth0, SiHono, SiSvelte, SiFlutter, SiPhp, SiLaravel, SiElasticsearch,
  SiLangchain, SiHuggingface,
} from 'react-icons/si';
import {
  TbBrandReactNative, TbBrandFramerMotion, TbBrandGolang
} from 'react-icons/tb';

// Pinecone inline SVG (no react-icons entry exists)
const SiPinecone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.982 0a.773.773 0 0 0-.531.203L8.498 2.83a.762.762 0 0 0-.03 1.09l.72.745-2.588 2.369-1.744-1.79a.762.762 0 0 0-1.09-.029L1.22 7.45a.762.762 0 0 0-.03 1.09l6.513 6.724a.762.762 0 0 0 1.09.029l2.544-2.464.72.744a.762.762 0 0 0 1.09.03l2.953-2.86a.762.762 0 0 0 .03-1.09l-1.745-1.79 2.589-2.368.72.744a.762.762 0 0 0 1.09.03l2.953-2.86a.762.762 0 0 0 .03-1.09L15.214.549A.762.762 0 0 0 14.605.3l-.031.001a.762.762 0 0 0-.512.22l-2.08 2.014V.762A.762.762 0 0 0 11.982 0zm.002 4.578 4.26 4.397-2.13 2.063-4.26-4.397zm-5.69 2.367 4.26 4.397-2.13 2.063-4.26-4.397z"/>
  </svg>
);

// LangGraph inline SVG
const SiLanggraph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="5" r="2"/>
    <circle cx="5" cy="17" r="2"/>
    <circle cx="19" cy="17" r="2"/>
    <line x1="12" y1="7" x2="6.5" y2="15.2"/>
    <line x1="12" y1="7" x2="17.5" y2="15.2"/>
    <line x1="7" y1="17" x2="17" y2="17"/>
  </svg>
);

const technologies: { name: string; icon: React.ElementType; light: string; dark: string }[] = [
  // Languages
  { name: 'JavaScript', icon: SiJavascript, light: '#F7DF1E', dark: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, light: '#3178C6', dark: '#3178C6' },
  { name: 'Python', icon: SiPython, light: '#3776AB', dark: '#3776AB' },
  { name: 'Go', icon: TbBrandGolang, light: '#00ADD8', dark: '#00ADD8' },
  { name: 'C', icon: SiC, light: '#555555', dark: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, light: '#00599C', dark: '#00599C' },
  { name: 'Kotlin', icon: SiKotlin, light: '#7F52FF', dark: '#7F52FF' },
  { name: 'Rust', icon: SiRust, light: '#CE422B', dark: '#CE422B' },
  { name: 'PHP', icon: SiPhp, light: '#777BB4', dark: '#777BB4' },
  // { name: 'Solidity', icon: SiSolidity, light: '#363636', dark: '#A0A0A0' },
  { name: 'HTML', icon: SiHtml5, light: '#E34F26', dark: '#E34F26' },
  { name: 'CSS', icon: SiCss3, light: '#1572B6', dark: '#1572B6' },

  // AI / ML
  { name: 'LangChain', icon: SiLangchain, light: '#1C3C3C', dark: '#00FF00' },
  { name: 'LangGraph', icon: SiLanggraph, light: '#1C3C3C', dark: '#6EE7B7' },
  { name: 'Pinecone', icon: SiPinecone, light: '#000000', dark: '#FFFFFF' },
  { name: 'Hugging Face', icon: SiHuggingface, light: '#FFD21E', dark: '#FFD21E' },

  // Frontend Frameworks
  { name: 'React', icon: SiReact, light: '#61DAFB', dark: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, light: '#000000', dark: '#FFFFFF' },
  { name: 'Svelte', icon: SiSvelte, light: '#FF3E00', dark: '#FF3E00' },
  { name: 'React Native', icon: TbBrandReactNative, light: '#61DAFB', dark: '#61DAFB' },
  { name: 'Flutter', icon: SiFlutter, light: '#02569B', dark: '#02569B' },
  { name: 'Expo', icon: SiExpo, light: '#000020', dark: '#FFFFFF' },
  { name: 'Electron', icon: SiElectron, light: '#47848F', dark: '#47848F' },
  { name: 'TailwindCSS', icon: SiTailwindcss, light: '#06B6D4', dark: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, light: '#7952B3', dark: '#7952B3' },
  { name: 'Three.js', icon: SiThreedotjs, light: '#000000', dark: '#FFFFFF' },
  { name: 'Redux', icon: SiRedux, light: '#764ABC', dark: '#764ABC' },
  { name: 'Framer Motion', icon: TbBrandFramerMotion, light: '#0055FF', dark: '#0055FF' },
  { name: 'Clerk', icon: SiClerk, light: '#6C47FF', dark: '#6C47FF' },
  { name: 'Auth0', icon: SiAuth0, light: '#EB5424', dark: '#EB5424' },
  { name: 'Laravel', icon: SiLaravel, light: '#FF2D20', dark: '#FF2D20' },

  // Backend
  { name: 'Node.js', icon: SiNodedotjs, light: '#339933', dark: '#339933' },
  { name: 'Express', icon: SiExpress, light: '#000000', dark: '#FFFFFF' },
  { name: 'Hono', icon: SiHono, light: '#E36002', dark: '#E36002' },
  { name: 'Django', icon: SiDjango, light: '#092E20', dark: '#44B78B' },
  { name: 'Flask', icon: SiFlask, light: '#000000', dark: '#FFFFFF' },
  { name: 'FastAPI', icon: SiFastapi, light: '#009688', dark: '#009688' },
  { name: 'tRPC', icon: SiTrpc, light: '#2596BE', dark: '#2596BE' },
  { name: 'Socket.IO', icon: SiSocketdotio, light: '#010101', dark: '#FFFFFF' },
  { name: 'Selenium', icon: SiSelenium, light: '#43B02A', dark: '#43B02A' },

  // Databases
  { name: 'PostgreSQL', icon: SiPostgresql, light: '#4169E1', dark: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, light: '#4479A1', dark: '#4479A1' },
  { name: 'SQLite', icon: SiSqlite, light: '#003B57', dark: '#07A9E1' },
  { name: 'MongoDB', icon: SiMongodb, light: '#47A248', dark: '#47A248' },
  { name: 'Redis', icon: SiRedis, light: '#DC382D', dark: '#DC382D' },
  { name: 'Firebase', icon: SiFirebase, light: '#FFCA28', dark: '#FFCA28' },
  { name: 'Supabase', icon: SiSupabase, light: '#3ECF8E', dark: '#3ECF8E' },
  { name: 'Prisma', icon: SiPrisma, light: '#2D3748', dark: '#CBD5E0' },
  { name: 'Elasticsearch', icon: SiElasticsearch, light: '#005571', dark: '#005571' },

  // DevOps
  { name: 'Docker', icon: SiDocker, light: '#2496ED', dark: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, light: '#326CE5', dark: '#326CE5' },
  { name: 'Helm', icon: SiHelm, light: '#0F1689', dark: '#5B8DEE' },
  { name: 'ArgoCD', icon: SiArgo, light: '#EF7B4D', dark: '#EF7B4D' },
  { name: 'Nginx', icon: SiNginx, light: '#009639', dark: '#009639' },
  { name: 'Grafana', icon: SiGrafana, light: '#F46800', dark: '#F46800' },
  { name: 'Prometheus', icon: SiPrometheus, light: '#E6522C', dark: '#E6522C' },
  { name: 'GitHub Actions', icon: SiGithubactions, light: '#2088FF', dark: '#2088FF' },
  { name: 'AWS', icon: SiAmazonwebservices, light: '#FF9900', dark: '#FF9900' },
  { name: 'Cloudflare', icon: SiCloudflare, light: '#F38020', dark: '#F38020' },
  { name: 'Kafka', icon: SiApachekafka, light: '#231F20', dark: '#FFFFFF' },
  { name: 'RabbitMQ', icon: SiRabbitmq, light: '#FF6600', dark: '#FF6600' },

  // Tools
  { name: 'Git', icon: SiGit, light: '#F05032', dark: '#F05032' },
  { name: 'GitHub', icon: SiGithub, light: '#181717', dark: '#FFFFFF' },
  { name: 'Vite', icon: SiVite, light: '#646CFF', dark: '#646CFF' },
  { name: 'Figma', icon: SiFigma, light: '#F24E1E', dark: '#F24E1E' },
];

export const TechStack = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 pb-16 md:pb-24">
      <div className="text-center mb-8 md:mb-12">
        <h2
          className={`text-2xl md:text-4xl font-bold tracking-wide mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          TECH STACK
        </h2>
        <div
          className={`w-16 md:w-24 h-1 mx-auto mb-4 md:mb-6 rounded-full transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
          }}
        />
        <p
          className={`text-foreground/60 text-xs md:text-sm max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Technologies I work with to build modern applications
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mx-auto">
        {technologies.map(({ name, icon: Icon, light, dark }, index) => (
          <div
            key={name}
            className={`group relative flex flex-col items-center gap-2 transition-all duration-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${Math.min(300 + index * 20, 1000)}ms` }}
          >
            <div
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl border border-foreground/20 bg-background transition-all duration-300"
              title={name}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.5)`;
                e.currentTarget.style.boxShadow = `0 0 20px rgba(${accentRgb}, 0.2)`;
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.backgroundColor = "";
              }}
            >
              <Icon
                className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300"
                style={{ color: theme === 'dark' ? dark : light }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
