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
  <section id="home" className="relative min-h-screen bg-background">
    <ParticleBurst />
    <header className="relative z-10 pt-24 sm:pt-28 md:pt-32 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-2 sm:mb-4">
          RANA DOLUI
        </h1>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-32 sm:w-40 md:w-48 h-1 bg-foreground" />
        </div>

        <p className="text-center text-xs sm:text-sm md:text-base text-foreground/60 tracking-widest mb-6 sm:mb-8">
          &gt; <Typewriter text="FULL-STACK DEVELOPER" />_
        </p>

        <div className="text-center mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed text-foreground/70">
          <p>
            Hi, I'm{" "}
            <span className="bg-foreground text-sm text-background px-2 py-1 inline-block rounded-2xl">
              Rana Dolui
            </span>{" "}
            — a Full Stack Developer passionate about building scalable web and mobile applications. 
            I specialize in React, Next.js, Go, and Python, creating solutions that are both powerful and user-friendly.
          </p>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
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

        <div className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          {socials.map(({ url, label, icon: Icon }) => (
            <LiquidButton
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="p-2 sm:p-3 rounded-full"
            >
              <Icon size={18} />
            </LiquidButton>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 animate-bounce">
        <a href="#about">
          <ChevronDown size={28} className="text-foreground/40" />
        </a>
      </div>
    </header>
  </section>
);
