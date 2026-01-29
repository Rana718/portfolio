"use client";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { ParticleBurst } from "./ParticleBurst";
import { LiquidButton } from "./LiquidButton";
import { useTheme } from "@/lib/theme-provider";

const socials = [
  { url: "https://github.com/Rana718", label: "Github", icon: Github },
  { url: "https://linkedin.com/in/rana-dolui", label: "LinkedIn", icon: Linkedin },
  { url: "mailto:ranadolui.dev@gmail.com", label: "Mail", icon: Mail },
];

export const Hero = () => {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBurst />
      <header className="relative z-10 pt-24 sm:pt-28 md:pt-32 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl w-full">
          {/* Animated name with glow */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-2 sm:mb-4 opacity-0 animate-fade-in-up">
            <span
              className="inline-block transition-colors duration-300 cursor-default"
              style={{ color: "inherit" }}
              onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
              onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
            >
              RANA DOLUI
            </span>
          </h1>

          {/* Line divider */}
          <div className="flex justify-center mb-6 sm:mb-8 opacity-0 animate-fade-in delay-200">
            <div
              className="w-32 sm:w-40 md:w-48 h-0.5 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
              }}
            />
          </div>

          {/* Typewriter with accent color */}
          <p className="text-center text-xs sm:text-sm md:text-base tracking-widest mb-6 sm:mb-8 opacity-0 animate-fade-in delay-300">
            <span className="text-foreground/60">&gt; </span>
            <span style={{ color: accentColor }}>
              <Typewriter text="FULL-STACK DEVELOPER" />
            </span>
            <span style={{ color: accentColor }} className="animate-pulse">_</span>
          </p>

          {/* Description with smooth animation */}
          <div className="text-center mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed text-foreground/70 opacity-0 animate-fade-in delay-400">
            <p>
              Hi, I'm{" "}
              <span
                className="text-sm px-2 py-1 inline-block rounded-xl font-semibold"
                style={{
                  backgroundColor: accentColor,
                  color: theme === "dark" ? "#0a0a0a" : "#1a1a1a",
                  boxShadow: `0 0 15px rgba(${accentRgb}, 0.3)`
                }}
              >
                Rana Dolui
              </span>{" "}
              — a Full Stack Developer passionate about building scalable web and mobile applications.
              I specialize in React, Next.js, Go, and Python, creating solutions that are both powerful and user-friendly.
            </p>
          </div>

          {/* CTA Buttons with animation */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 opacity-0 animate-fade-in delay-500">
            <LiquidButton
              href="#projects"
              variant="primary"
              className="px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm rounded-3xl"
            >
              VIEW PROJECTS
            </LiquidButton>
            <LiquidButton
              href="/Rana_Dolui.pdf"
              download
              variant="secondary"
              className="px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm rounded-3xl"
            >
              DOWNLOAD CV
            </LiquidButton>
          </div>

          {/* Social links with staggered animation */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            {socials.map(({ url, label, icon: Icon }, index) => (
              <div
                key={label}
                className="opacity-0 animate-fade-in-scale"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <LiquidButton
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="p-2 sm:p-3 rounded-full"
                  aria-label={label}
                >
                  <Icon size={18} />
                </LiquidButton>
              </div>
            ))}
          </div>
        </div>

        {/* Bouncing chevron with glow */}
        <div className="absolute bottom-6 sm:bottom-8 animate-bounce">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="block p-2 rounded-full transition-all duration-300"
            style={{
              ["--hover-bg" as string]: `rgba(${accentRgb}, 0.1)`,
              ["--hover-shadow" as string]: `0 0 20px rgba(${accentRgb}, 0.3)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.1)`;
              e.currentTarget.style.boxShadow = `0 0 20px rgba(${accentRgb}, 0.3)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <ChevronDown
              size={28}
              style={{ color: accentColor, opacity: 0.6 }}
              className="transition-colors"
            />
          </a>
        </div>
      </header>
    </section>
  );
};
