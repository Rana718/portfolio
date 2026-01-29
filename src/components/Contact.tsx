"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme-provider";

const socials = [
  { icon: Github, label: "Github", url: "https://github.com/Rana718" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/rana-dolui-89357728a/" },
  { icon: SiX, label: "X", url: "https://x.com/jack718r" },
  { icon: Mail, label: "Mail", url: "mailto:ranadolui.dev@gmail.com" },
];

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
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
      className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-32"
      id="contact"
    >
      <div className="mb-12 text-center sm:mb-16">
        <h2
          className={`mb-4 text-3xl font-bold sm:text-5xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          CONTACT
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
          className={`mx-auto max-w-2xl text-xs text-foreground/60 sm:text-sm transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Got an idea in mind? Let's collaborate and build something remarkable.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div
          className={`mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
            GET IN TOUCH
          </h2>
          <div className="flex flex-col gap-y-4">
            <div
              className="group flex items-center justify-between p-3 sm:p-4 rounded-2xl border border-foreground/20 transition-all duration-500"
              onMouseEnter={(e) => {
                setIsCardHovered(true);
                e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.5)`;
                e.currentTarget.style.boxShadow = `0 0 25px rgba(${accentRgb}, 0.2)`;
                e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.05)`;
              }}
              onMouseLeave={(e) => {
                setIsCardHovered(false);
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.backgroundColor = "";
              }}
            >
              <div className="flex gap-3 sm:gap-4 items-center">
                <div
                  className="p-2 rounded-xl transition-colors duration-300"
                  style={{ backgroundColor: `rgba(${accentRgb}, 0.1)` }}
                >
                  <Mail
                    className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                    style={{ color: accentColor }}
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs uppercase font-medium"
                    style={{ color: `rgba(${accentRgb}, 0.7)` }}
                  >
                    EMAIL
                  </p>
                  <p
                    className="truncate text-xs sm:text-sm transition-colors duration-300"
                    style={{ color: isCardHovered ? accentColor : undefined }}
                  >
                    ranadolui.dev@gmail.com
                  </p>
                </div>
              </div>
              {/* Animated arrow on hover */}
              <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <span style={{ color: accentColor }}>→</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
            SOCIAL LINKS
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {socials.map(({ icon: Icon, label, url }, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={label}
                href={url}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20 p-3 transition-all duration-300 sm:h-16 sm:w-16 sm:p-4"
                aria-label={label}
                style={{ animationDelay: `${500 + index * 100}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accentColor;
                  e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.1)`;
                  e.currentTarget.style.boxShadow = `0 0 25px rgba(${accentRgb}, 0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Icon
                  className="h-6 w-6 text-foreground/70 transition-colors duration-300 sm:h-7 sm:w-7"
                  style={{ ["--accent" as string]: accentColor }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = accentColor;
                    e.currentTarget.style.filter = `drop-shadow(0 0 8px rgba(${accentRgb}, 0.5))`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.filter = "";
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
