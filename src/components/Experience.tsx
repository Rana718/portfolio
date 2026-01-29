"use client";
import { experiences } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme-provider";

export const Experience = () => {
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
      className="max-w-7xl mx-auto px-4 py-20 lg:py-32"
      id="experience"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-wide mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          EXPERIENCE
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
          className={`text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          My professional journey building impactful solutions
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative border border-foreground/20 p-6 md:p-8 rounded-3xl transition-all duration-500 group ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: `${300 + index * 150}ms` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.4)`;
              e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {/* Left accent line */}
            <div
              className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to bottom, rgba(${accentRgb}, 0.5), ${accentColor}, rgba(${accentRgb}, 0.5))`,
              }}
            />

            {/* Subtle glow on hover */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(to right, rgba(${accentRgb}, 0.05), transparent)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3
                    className="text-lg md:text-xl font-bold mb-1 transition-colors duration-300"
                    style={{ ["--hover-color" as string]: accentColor }}
                  >
                    <span className="group-hover:text-(--hover-color)">{exp.title}</span>
                  </h3>
                  <p className="text-sm text-foreground/70">{exp.company}</p>
                </div>
                <span
                  className="text-xs md:text-sm font-semibold mt-2 md:mt-0"
                  style={{
                    color: accentColor,
                    filter: `drop-shadow(0 0 8px rgba(${accentRgb}, 0.3))`,
                  }}
                >
                  {exp.duration}
                </span>
              </div>
              <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
