"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navItems = ["About", "Experience", "Projects", "Contact"];

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setOpen] = useState(false);
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

    const handleScrollTop = () => {
      if (window.scrollY < window.innerHeight * 0.2) {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  return (
    <nav className="fixed top-6 w-full max-w-xs md:max-w-2xl lg:max-w-3xl z-50 px-4">
      <div className="px-4 py-2 md:px-6 md:py-4 flex justify-between backdrop-blur-sm items-center border border-foreground/10 rounded-full bg-background/80">
        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <button
            className="text-sm md:text-md lg:text-lg font-bold hover:cursor-pointer transition-colors hover:text-green-500"
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
              className={`text-xs font-semibold tracking-wide transition-all ${
                active === item.toLowerCase()
                  ? "text-foreground border-b-2 border-green-500"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-foreground/5 transition-colors rounded-full"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-sm mt-2 border border-foreground/10 rounded-2xl bg-background/80">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`block w-full text-left text-sm font-semibold tracking-wide py-2 transition-all ${
                  active === item.toLowerCase()
                    ? "text-foreground border-b-2 border-green-500 pl-3"
                    : "text-foreground/60 hover:text-foreground pl-2"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
