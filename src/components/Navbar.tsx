"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "@/lib/theme-provider";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const navItems = ["About", "Experience", "Projects", "Contact"];

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  const handleNavClick = (id: string) => {
    setActive(id);
    setOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    if (pathname !== '/') {
      router.push('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActive('home');
    }
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.2) {
        setActive("home");
      }
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-6 w-full max-w-xs md:max-w-2xl lg:max-w-3xl z-50 px-4">
      <div
        className="px-4 py-2 md:px-6 md:py-4 flex justify-between backdrop-blur-md items-center border rounded-full transition-all duration-500"
        style={{
          backgroundColor: theme === "dark"
            ? (scrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.85)")
            : (scrolled ? "rgba(255, 254, 248, 0.95)" : "rgba(255, 254, 248, 0.85)"),
          borderColor: scrolled ? `rgba(${accentRgb}, 0.3)` : `rgba(${accentRgb}, 0.1)`,
          boxShadow: scrolled ? `0 0 20px rgba(${accentRgb}, 0.15)` : "none",
        }}
      >
        <div className="flex gap-3 items-center">
          <AnimatedThemeToggler className="p-2 rounded-full border border-foreground/20 hover:border-foreground transition-colors" />
          <button
            className="text-sm md:text-md lg:text-lg font-bold hover:cursor-pointer transition-all duration-300"
            onClick={handleLogoClick}
            style={{ color: "inherit" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accentColor;
              e.currentTarget.style.filter = `drop-shadow(0 0 8px rgba(${accentRgb}, 0.5))`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "inherit";
              e.currentTarget.style.filter = "none";
            }}
          >
            RANA DOLUI
          </button>
        </div>

        <div className="hidden md:flex gap-7">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="text-xs font-semibold tracking-wide transition-all duration-300 relative"
              style={{
                color: active === item.toLowerCase() ? accentColor : "rgba(128, 128, 128, 0.8)",
                filter: active === item.toLowerCase() ? `drop-shadow(0 0 8px rgba(${accentRgb}, 0.5))` : "none",
              }}
              onMouseEnter={(e) => {
                if (active !== item.toLowerCase()) {
                  e.currentTarget.style.color = "inherit";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.toLowerCase()) {
                  e.currentTarget.style.color = "rgba(128, 128, 128, 0.8)";
                }
              }}
            >
              {item.toUpperCase()}
              {active === item.toLowerCase() && (
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 10px rgba(${accentRgb}, 0.5)`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!isOpen)}
          className="md:hidden p-2 transition-all duration-300 rounded-full"
          style={{
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.1)`;
            e.currentTarget.style.boxShadow = `0 0 15px rgba(${accentRgb}, 0.2)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden backdrop-blur-md mt-2 border rounded-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: theme === "dark" ? "rgba(10, 10, 10, 0.95)" : "rgba(255, 254, 248, 0.95)",
          borderColor: `rgba(${accentRgb}, 0.15)`,
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="block w-full text-left text-sm font-semibold tracking-wide py-2 transition-all duration-300"
              style={{
                color: active === item.toLowerCase() ? accentColor : "rgba(128, 128, 128, 0.8)",
                paddingLeft: active === item.toLowerCase() ? "1rem" : "0.5rem",
                borderLeft: active === item.toLowerCase() ? `2px solid ${accentColor}` : "none",
                boxShadow: active === item.toLowerCase() ? `inset 0 0 20px rgba(${accentRgb}, 0.1)` : "none",
                animationDelay: `${index * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                if (active !== item.toLowerCase()) {
                  e.currentTarget.style.paddingLeft = "0.75rem";
                  e.currentTarget.style.color = "inherit";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.toLowerCase()) {
                  e.currentTarget.style.paddingLeft = "0.5rem";
                  e.currentTarget.style.color = "rgba(128, 128, 128, 0.8)";
                }
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
