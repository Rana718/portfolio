"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme-provider";
import { openSourceRepos } from "@/lib/data";
import { LiquidButton } from "./LiquidButton";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiRust, SiKotlin, SiSwift, SiDart, SiRuby, SiC,
} from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';

const langIcons: Record<string, { icon: React.ElementType; light: string; dark: string }> = {
  'Go':         { icon: TbBrandGolang, light: '#00ADD8', dark: '#00ADD8' },
  'JavaScript': { icon: SiJavascript, light: '#F7DF1E', dark: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, light: '#3178C6', dark: '#3178C6' },
  'Python':     { icon: SiPython,     light: '#3776AB', dark: '#3776AB' },
  'C++':        { icon: SiCplusplus,  light: '#00599C', dark: '#00599C' },
  'C':          { icon: SiC,          light: '#555555', dark: '#A8B9CC' },
  'Rust':       { icon: SiRust,       light: '#CE422B', dark: '#CE422B' },
  'Kotlin':     { icon: SiKotlin,     light: '#7F52FF', dark: '#7F52FF' },
  'Swift':      { icon: SiSwift,      light: '#F05138', dark: '#F05138' },
  'Dart':       { icon: SiDart,       light: '#00B4AB', dark: '#00B4AB' },
  'Ruby':       { icon: SiRuby,       light: '#CC342D', dark: '#CC342D' },
};

export const OpenSource = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-20 lg:py-32" id="opensource">
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-wide mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          OPEN SOURCE
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
          className={`text-foreground/60 text-xs md:text-sm max-w-2xl mx-auto px-2 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Projects I've built and shared with the community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        {openSourceRepos.map((repo, index) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative border border-foreground/20 p-5 rounded-3xl flex flex-col gap-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${300 + index * 100}ms` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.4)`;
              e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `linear-gradient(135deg, rgba(${accentRgb}, 0.05), transparent)` }}
            />

            <div className="relative z-10 flex flex-col gap-3 h-full">
              <h3
                className="font-bold text-sm tracking-wide transition-colors duration-300 group-hover:text-(--accent)"
                style={{ ["--accent" as string]: accentColor }}
              >
                {repo.name}
              </h3>
              <p className="text-xs text-foreground/60 leading-relaxed flex-1">{repo.description}</p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-foreground/15 text-foreground/50"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Language icons */}
              <div className="flex items-center gap-1.5 pt-1">
                {repo.language.map((lang) => {
                  const entry = langIcons[lang];
                  if (!entry) return null;
                  const { icon: Icon, light, dark } = entry;
                  return (
                    <div
                      key={lang}
                      className="w-6 h-6 flex items-center justify-center rounded-md bg-foreground/5 transition-all duration-300"
                      title={lang}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.12)`;
                        e.currentTarget.style.boxShadow = `0 0 8px rgba(${accentRgb}, 0.2)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <Icon
                        className="w-3.5 h-3.5 transition-colors duration-300"
                        style={{ color: theme === 'dark' ? dark : light }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div
        className={`flex justify-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        <LiquidButton
          href="https://github.com/Rana718"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="rounded-xl py-3 px-8 text-sm"
        >
          VIEW GITHUB PROFILE
        </LiquidButton>
      </div>
    </section>
  );
};
