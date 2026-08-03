import { cn } from "@/lib/utils";

interface ContainerProps {
   children: React.ReactNode;
   className?: string;
   size?: "default" | "narrow";
}

export function Container({
   children,
   className,
   size = "default",
}: ContainerProps) {
   return (
      <div
         className={cn(
            "mx-auto w-full min-w-0 px-4 md:px-8 lg:px-12",
            size === "default" ? "max-w-400" : "max-w-300",
            className,
         )}
      >
         {children}
      </div>
   );
}
