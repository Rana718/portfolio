import { Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

const socials = [
  { icon: Github, label: "Github", url: "https://github.com/Rana718" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/rana-dolui" },
  { icon: Mail, label: "Mail", url: "mailto:ranadolui.dev@gmail.com" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Grid pattern background with neon tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.5), transparent)",
        }}
      />

      <div className="bg-[#0a0a0a] text-white border-t border-[#00ff88]/10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
            {/* Brand section */}
            <div>
              <h3 className="font-bold text-lg pb-4 tracking-wide text-white hover:text-[#00ff88] transition-colors duration-300 cursor-default">
                RANA DOLUI
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Full Stack Developer building scalable solutions with modern technologies.
              </p>
              {/* Neon accent line */}
              <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[#00ff88] to-transparent rounded-full" />
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold text-xs tracking-widest pb-4 text-[#00ff88]/80">
                QUICK LINKS
              </h3>
              <div className="space-y-2 text-sm">
                {quickLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-400 hover:text-[#00ff88] hover:pl-2 transition-all duration-300 block"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect section */}
            <div>
              <h3 className="font-semibold text-xs tracking-widest mb-4 text-[#00ff88]/80">
                CONNECT
              </h3>
              <div className="flex gap-3 mb-4">
                {socials.map(({ url, label, icon: Icon }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={label}
                    href={url}
                    className="border border-gray-700 text-gray-400 text-sm p-3 rounded-full transition-all duration-300 hover:text-[#00ff88] hover:border-[#00ff88] hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:bg-[#00ff88]/5"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-400 hover:text-[#00ff88] transition-colors duration-300">
                ranadolui.dev@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2025 RANA DOLUI - ALL RIGHTS RESERVED
            </p>
            {/* Neon pulse indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
              <span className="text-xs text-[#00ff88]/70">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
