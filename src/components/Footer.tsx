"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { useTheme } from "@/lib/theme-provider";

const quickLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

const socials = [
  { icon: Github, label: "Github", url: "https://github.com/Rana718" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/rana-dolui-89357728a/" },
  { icon: SiX, label: "X", url: "https://x.com/jack718r" },
  { icon: Mail, label: "Mail", url: "mailto:ranadolui.dev@gmail.com" },
];

export const Footer = () => {
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";
  const bgColor = theme === "dark" ? "#0a0a0a" : "#1a1a1a";

  return (
    <footer className="relative overflow-hidden">
      {/* Grid pattern background with accent tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(${accentRgb}, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${accentRgb}, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${accentRgb}, 0.5), transparent)`,
        }}
      />

      <div
        className="text-white border-t"
        style={{
          backgroundColor: bgColor,
          borderColor: `rgba(${accentRgb}, 0.1)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
            {/* Brand section */}
            <div>
              <h3
                className="font-bold text-lg pb-4 tracking-wide text-white transition-colors duration-300 cursor-default"
                onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                onMouseLeave={(e) => e.currentTarget.style.color = "white"}
              >
                RANA DOLUI
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Full Stack Developer building scalable solutions with modern technologies.
              </p>
              {/* Accent line */}
              <div
                className="mt-4 w-12 h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${accentColor}, transparent)`,
                }}
              />
            </div>

            {/* Quick links */}
            <div>
              <h3
                className="font-semibold text-xs tracking-widest pb-4"
                style={{ color: `rgba(${accentRgb}, 0.8)` }}
              >
                QUICK LINKS
              </h3>
              <div className="space-y-2 text-sm">
                {quickLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-400 block transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = accentColor;
                      e.currentTarget.style.paddingLeft = "0.5rem";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.paddingLeft = "";
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect section */}
            <div>
              <h3
                className="font-semibold text-xs tracking-widest mb-4"
                style={{ color: `rgba(${accentRgb}, 0.8)` }}
              >
                CONNECT
              </h3>
              <div className="flex gap-3 mb-4">
                {socials.map(({ url, label, icon: Icon }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={label}
                    href={url}
                    className="border border-gray-700 text-gray-400 text-sm p-3 rounded-full transition-all duration-300"
                    aria-label={label}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = accentColor;
                      e.currentTarget.style.borderColor = accentColor;
                      e.currentTarget.style.boxShadow = `0 0 15px rgba(${accentRgb}, 0.3)`;
                      e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.05)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.boxShadow = "";
                      e.currentTarget.style.backgroundColor = "";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <p
                className="text-sm text-gray-400 transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                onMouseLeave={(e) => e.currentTarget.style.color = ""}
              >
                ranadolui.dev@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2025 RANA DOLUI - ALL RIGHTS RESERVED
            </p>
            {/* Pulse indicator */}
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 10px rgba(${accentRgb}, 0.5)`,
                }}
              />
              <span
                className="text-xs"
                style={{ color: `rgba(${accentRgb}, 0.7)` }}
              >
                Available for work
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
