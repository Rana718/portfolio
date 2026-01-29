"use client";
import { Code2, Server, Smartphone, Database } from "lucide-react";
import { skills } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme-provider";

const skillsArray = [
  { icon: Code2, ...skills.frontend },
  { icon: Server, ...skills.backend },
  { icon: Smartphone, ...skills.mobile },
  { icon: Database, ...skills.database },
];

export const About = () => {
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
      className="max-w-7xl mx-auto px-4 py-32 lg:py-50 pb-8"
      id="about"
    >
      <div className="text-center mb-12 md:mb-16">
        <h1
          className={`text-3xl md:text-5xl font-bold tracking-wider mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          ABOUT
        </h1>
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
          className={`text-xs md:text-sm leading-relaxed max-w-2xl mx-auto text-foreground/70 px-2 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          I'm a Full Stack Developer with expertise in building modern web and mobile applications.
          From frontend interfaces to backend systems and DevOps, I create scalable solutions using cutting-edge technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {skillsArray.map(({ icon: Icon, title, description, tech }, index) => (
          <div
            className={`relative overflow-hidden border border-foreground/20 p-4 md:p-6 text-center rounded-3xl group transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: `${300 + index * 100}ms`,
              ["--accent-color" as string]: accentColor,
              ["--accent-rgb" as string]: accentRgb,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.5)`;
              e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.15)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
            key={title}
          >
            {/* Animated gradient background */}
            <div
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"
              style={{
                background: `linear-gradient(to top, rgba(${accentRgb}, 0.1), rgba(${accentRgb}, 0.05), transparent)`,
              }}
            />

            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl"
                style={{ backgroundColor: `rgba(${accentRgb}, 0.1)` }}
              />
            </div>

            <div className="relative z-10">
              <div
                className="text-2xl md:text-3xl mb-3 text-foreground/80 flex justify-center transition-colors duration-300"
                style={{ ["--hover-color" as string]: accentColor }}
              >
                <Icon
                  className="group-hover:drop-shadow-[0_0_8px_var(--accent-glow)]"
                  style={{
                    ["--accent-glow" as string]: `rgba(${accentRgb}, 0.5)`,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = ""}
                />
              </div>
              <h3 className="font-bold text-xs md:text-sm mb-2 tracking-wider group-hover:text-(--accent-color) transition-colors duration-300">
                {title}
              </h3>
              <p className="text-xs mb-3 font-medium" style={{ color: `rgba(${accentRgb}, 0.7)` }}>
                {tech}
              </p>
              <p className="text-xs text-foreground/60 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
