import { cn } from "@/lib/utils";

interface TagPillProps {
   label: string;
   active?: boolean;
   onClick?: () => void;
   className?: string;
}

export function TagPill({ label, active, onClick, className }: TagPillProps) {
   const interactive = typeof onClick === "function";

   return (
      <button
         type="button"
         onClick={onClick}
         className={cn(
            "group relative overflow-hidden rounded-full border px-[3vw] md:px-3 py-[1vw] md:py-1 font-mono text-[2.5vw] md:text-xs uppercase tracking-widest",
            "transition-[border-color,color,box-shadow,transform] duration-300",
            active
               ? "border-accent bg-accent/10 text-fg-primary shadow-[0_0_18px_-6px_var(--accent-glow)]"
               : "border-border-primary text-fg-secondary hover:border-accent/50 hover:text-fg-primary",
            interactive && !active && "hover:-translate-y-0.5",
            className,
         )}
      >
         {/* Accent flood on hover — the shared button language, at pill scale. */}
         {!active && (
            <span className="pointer-events-none absolute inset-0 translate-y-full bg-accent/15 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
         )}
         <span className="relative z-10">{label}</span>
      </button>
   );
}
