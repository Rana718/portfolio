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
    <footer className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="bg-black text-white border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
            <div>
              <h3 className="font-bold text-lg pb-4 tracking-wide">RANA DOLUI</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Full Stack Developer building scalable solutions with modern technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xs tracking-widest pb-4 text-gray-300">
                QUICK LINKS
              </h3>
              <div className="space-y-2 text-sm">
                {quickLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-400 hover:text-white transition block"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xs tracking-widest mb-4 text-gray-300">
                CONNECT
              </h3>
              <div className="flex gap-3 mb-4">
                {socials.map(({ url, label, icon: Icon }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={label}
                    href={url}
                    className="border border-gray-500 text-gray-400 text-sm p-3 rounded-full hover:text-white hover:border-white transition-colors"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-400">ranadolui.dev@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
            <p className="text-xs text-gray-500">
              © 2025 RANA DOLUI - ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
