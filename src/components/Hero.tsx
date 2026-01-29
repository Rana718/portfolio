"use client";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { ParticleBurst } from "./ParticleBurst";
import { LiquidButton } from "./LiquidButton";

const socials = [
  { url: "https://github.com/Rana718", label: "Github", icon: Github },
  { url: "https://linkedin.com/in/rana-dolui", label: "LinkedIn", icon: Linkedin },
  { url: "mailto:ranadolui.dev@gmail.com", label: "Mail", icon: Mail },
];

export const Hero = () => (
  <section id="home" className="relative min-h-screen bg-background overflow-hidden">
    <ParticleBurst />
    <header className="relative z-10 pt-24 sm:pt-28 md:pt-32 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="max-w-2xl w-full">
        {/* Animated name with neon glow */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-2 sm:mb-4 opacity-0 animate-fade-in-up">
          <span className="inline-block hover:text-[#00ff88] transition-colors duration-300 cursor-default">
            RANA DOLUI
          </span>
        </h1>

        {/* Neon line divider */}
        <div className="flex justify-center mb-6 sm:mb-8 opacity-0 animate-fade-in delay-200">
          <div className="w-32 sm:w-40 md:w-48 h-[2px] neon-line rounded-full" />
        </div>

        {/* Typewriter with neon color */}
        <p className="text-center text-xs sm:text-sm md:text-base tracking-widest mb-6 sm:mb-8 opacity-0 animate-fade-in delay-300">
          <span className="text-foreground/60">&gt; </span>
          <span className="text-[#00ff88]">
            <Typewriter text="FULL-STACK DEVELOPER" />
          </span>
          <span className="text-[#00ff88] animate-pulse">_</span>
        </p>

        {/* Description with smooth animation */}
        <div className="text-center mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed text-foreground/70 opacity-0 animate-fade-in delay-400">
          <p>
            Hi, I'm{" "}
            <span className="bg-[#00ff88] text-sm text-[#0a0a0a] px-2 py-1 inline-block rounded-xl font-semibold shadow-[0_0_15px_rgba(0,255,136,0.3)]">
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

      {/* Bouncing chevron with neon glow */}
      <div className="absolute bottom-6 sm:bottom-8 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="block p-2 rounded-full transition-all duration-300 hover:bg-[#00ff88]/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
        >
          <ChevronDown size={28} className="text-[#00ff88]/60 hover:text-[#00ff88] transition-colors" />
        </a>
      </div>
    </header>
  </section>
);
