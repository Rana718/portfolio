"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { cn } from "@/lib/utils";

type Variant = "accent" | "glass" | "outline";

interface GlassButtonProps {
   children: React.ReactNode;
   href?: string;
   onClick?: () => void;
   variant?: Variant;
   className?: string;
   icon?: boolean;
   download?: boolean;
   target?: string;
   "aria-label"?: string;
   magnetic?: boolean;
}

export function GlassButton({
   children,
   href,
   onClick,
   variant = "glass",
   className,
   icon = false,
   download,
   target,
   "aria-label": ariaLabel,
   magnetic = true,
}: GlassButtonProps) {
   const shape = icon
      ? "h-[11vw] w-[11vw] md:h-14 md:w-14 justify-center"
      : "px-[6vw] md:px-8 py-[3vw] md:py-4 gap-[2vw] md:gap-3";

   const surface: Record<Variant, string> = {
      accent:
         "border-accent/60 bg-accent/15 text-fg-primary hover:border-accent",
      glass: "border-border-primary bg-gradient-to-br from-fg-primary/[0.08] via-fg-primary/[0.04] to-transparent hover:border-accent/50",
      outline: "border-border-primary bg-transparent hover:border-accent/50",
   };

   const body = (
      <motion.a
         href={href}
         onClick={
            onClick
               ? (e) => {
                    if (!href) e.preventDefault();
                    onClick();
                 }
               : undefined
         }
         download={download}
         target={target ?? (href?.startsWith("http") ? "_blank" : undefined)}
         rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
         aria-label={ariaLabel}
         role={href ? undefined : "button"}
         tabIndex={0}
         onKeyDown={(e) => {
            if (onClick && (e.key === "Enter" || e.key === " ")) {
               e.preventDefault();
               onClick();
            }
         }}
         className={cn(
            "group relative flex items-center overflow-hidden rounded-full border backdrop-blur-2xl backdrop-saturate-150",
            "font-mono text-[2.5vw] md:text-sm font-bold uppercase tracking-widest whitespace-nowrap",
            "transition-[border-color,box-shadow] duration-500 cursor-pointer",
            "hover:shadow-[0_0_25px_-4px_var(--accent-glow)]",
            shape,
            surface[variant],
            className,
         )}
      >
         {/* Top gleam — a bright reflection along the upper edge. */}
         <span className="pointer-events-none absolute inset-x-1 top-0 h-1/2 rounded-t-full bg-linear-to-b from-fg-primary/10 to-transparent" />

         {/* Accent flood, rising from the bottom edge on hover. */}
         <span className="pointer-events-none absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />

         <span className="relative z-10 flex items-center gap-[2vw] md:gap-3 transition-colors duration-500 group-hover:text-bg-primary">
            {children}
         </span>
      </motion.a>
   );

   return magnetic ? <MagneticButton>{body}</MagneticButton> : body;
}
