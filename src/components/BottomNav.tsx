"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const SECTIONS = [
   { id: "oss", label: "OSS", shortLabel: "OSS" },
   { id: "work", label: "Projects", shortLabel: "Work" },
   { id: "skills", label: "Skills", shortLabel: "Sk" },
   { id: "blog", label: "Writing", shortLabel: "Blog" },
   { id: "experience", label: "Exp", shortLabel: "Exp" },
   { id: "contact", label: "Contact", shortLabel: "Ct" },
];

export function BottomNav() {
   const [activeSection, setActiveSection] = useState("home");
   const pathname = usePathname();
   const isHomePage = pathname === "/";
   const isBlogPage = pathname.startsWith("/blog");

   const scrollTo = useCallback((id: string) => {
      if (id === "home") {
         window.scrollTo({ top: 0, behavior: "smooth" });
         return;
      }
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         const vh = window.innerHeight;

         if (scrollY < vh * 0.5) {
            setActiveSection("home");
            return;
         }

         for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const el = document.getElementById(SECTIONS[i].id);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            if (rect.top < vh * 0.4) {
               setActiveSection(SECTIONS[i].id);
               return;
            }
         }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav className="fixed bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[96vw]">
         <div className="flex items-center gap-0.5 md:gap-1 rounded-full border border-border-primary bg-bg-primary/80 backdrop-blur-xl px-1.5 md:px-2 py-1.5 md:py-2 text-fg-primary overflow-x-auto scrollbar-none">
            <Link
               href="/"
               className={`rounded-full shrink-0 px-2 md:px-3 py-1 md:py-1.5 font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors ${
                  isHomePage && activeSection === "home"
                     ? "bg-accent/20 text-accent"
                     : "text-fg-muted hover:text-fg-primary"
               }`}
            >
               Home
            </Link>
            {isHomePage && SECTIONS.map(({ id, label, shortLabel }) => (
               <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className={`rounded-full shrink-0 px-2 md:px-3 py-1 md:py-1.5 font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors ${
                     activeSection === id
                        ? "bg-accent/20 text-accent"
                        : "text-fg-muted hover:text-fg-primary"
                  }`}
               >
                  <span className="sm:hidden">{shortLabel}</span>
                  <span className="hidden sm:inline">{label}</span>
               </button>
            ))}
            <Link
               href="/blog"
               className={`rounded-full shrink-0 px-2 md:px-3 py-1 md:py-1.5 font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors ${
                  isBlogPage
                     ? "bg-accent/20 text-accent"
                     : "text-fg-muted hover:text-fg-primary"
               }`}
            >
               Blog
            </Link>
            <div className="w-px h-4 md:h-5 mx-0.5 md:mx-1 bg-border-primary shrink-0" />
            <AnimatedThemeToggler />
         </div>
      </nav>
   );
}
