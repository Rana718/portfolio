"use client";
import { experiences } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      className="max-w-7xl mx-auto px-4 py-32 lg:py-46"
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
            background: "linear-gradient(90deg, transparent, #00ff88, transparent)",
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
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
            className={`relative border border-foreground/20 p-6 md:p-8 rounded-3xl transition-all duration-500 hover:border-[#00ff88]/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] group ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: `${300 + index * 150}ms` }}
          >
            {/* Left accent line */}
            <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#00ff88]/50 via-[#00ff88] to-[#00ff88]/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-[#00ff88] transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{exp.company}</p>
                </div>
                <span className="text-xs md:text-sm text-[#00ff88] font-semibold mt-2 md:mt-0 drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]">
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
