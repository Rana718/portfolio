import { cn } from "@/lib/utils";

interface TagPillProps {
   label: string;
   active?: boolean;
   onClick?: () => void;
   className?: string;
}

export function TagPill({ label, active, onClick, className }: TagPillProps) {
   return (
      <button
         onClick={onClick}
         className={cn(
            "rounded-full border px-[3vw] md:px-3 py-[1vw] md:py-1 font-mono text-[2.5vw] md:text-xs uppercase tracking-widest transition-colors",
            active
               ? "border-accent text-fg-primary bg-accent/10"
               : "border-border-primary text-fg-secondary hover:text-fg-primary hover:border-fg-primary/30",
            className,
         )}
      >
         {label}
      </button>
   );
}
