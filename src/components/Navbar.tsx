"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navItems = ["About", "Experience", "Projects", "Contact"];

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
        className={`px-4 py-2 md:px-6 md:py-4 flex justify-between backdrop-blur-md items-center border rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-background/90 border-[#00ff88]/20 shadow-[0_0_20px_rgba(0,255,136,0.1)]"
            : "bg-background/80 border-foreground/10"
        }`}
      >
        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <button
            className="text-sm md:text-md lg:text-lg font-bold hover:cursor-pointer transition-all duration-300 hover:text-[#00ff88] hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]"
            onClick={handleLogoClick}
          >
            RANA DOLUI
          </button>
        </div>

        <div className="hidden md:flex gap-7">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`text-xs font-semibold tracking-wide transition-all duration-300 relative ${
                active === item.toLowerCase()
                  ? "text-[#00ff88] drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {item.toUpperCase()}
              {active === item.toLowerCase() && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00ff88] rounded-full shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-[#00ff88]/10 transition-all duration-300 rounded-full hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden backdrop-blur-md mt-2 border border-foreground/10 rounded-2xl bg-background/90 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`block w-full text-left text-sm font-semibold tracking-wide py-2 transition-all duration-300 ${
                active === item.toLowerCase()
                  ? "text-[#00ff88] pl-4 border-l-2 border-[#00ff88] shadow-[inset_0_0_20px_rgba(0,255,136,0.1)]"
                  : "text-foreground/60 hover:text-foreground hover:pl-3 pl-2"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
