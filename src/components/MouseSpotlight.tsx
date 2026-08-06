"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

export const MouseSpotlight = () => {
   const { theme } = useTheme();
   const spotlightRef = useRef<HTMLDivElement>(null);
   const orbRef = useRef<HTMLDivElement>(null);
   const frameRef = useRef<number>(0);
   const mouseRef = useRef({ x: -1000, y: -1000 });
   const currentRef = useRef({ x: -1000, y: -1000 });
   // Store accentRgb in a ref so the animation loop always reads the latest
   // value without needing to re-create the effect.
   const accentRgbRef = useRef(
      theme === "dark" ? "0, 255, 136" : "255, 184, 0",
   );

   // Keep the ref in sync with the theme prop (no effect restart needed).
   accentRgbRef.current = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

   // Also update the orb background immediately when theme changes so it
   // doesn't lag behind the ref value.
   useEffect(() => {
      const orb = orbRef.current;
      if (!orb) return;
      orb.style.background = `radial-gradient(circle, rgba(${accentRgbRef.current}, 0.06) 0%, transparent 70%)`;
   }, [theme]);

   useEffect(() => {
      const spotlight = spotlightRef.current;
      const orb = orbRef.current;
      if (!spotlight || !orb) return;

      const handleMouseMove = (e: MouseEvent) => {
         mouseRef.current.x = e.clientX;
         mouseRef.current.y = e.clientY;
      };

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

      const animate = () => {
         const target = mouseRef.current;
         const current = currentRef.current;

         current.x = lerp(current.x, target.x, 0.08);
         current.y = lerp(current.y, target.y, 0.08);

         const accentRgb = accentRgbRef.current;
         spotlight.style.background = `radial-gradient(600px circle at ${current.x}px ${current.y}px, rgba(${accentRgb}, 0.05), transparent 40%)`;
         orb.style.transform = `translate(${current.x - 128}px, ${current.y - 128}px)`;

         frameRef.current = requestAnimationFrame(animate);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      frameRef.current = requestAnimationFrame(animate);

      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         cancelAnimationFrame(frameRef.current);
      };
      // Only run once — theme changes are handled via the ref above.
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <div
            ref={spotlightRef}
            className="pointer-events-none fixed inset-0 z-1 hidden md:block"
         />
         <div
            ref={orbRef}
            className="pointer-events-none fixed hidden md:block z-1 w-64 h-64 rounded-full"
            style={{
               background: `radial-gradient(circle, rgba(${accentRgbRef.current}, 0.06) 0%, transparent 70%)`,
               filter: "blur(40px)",
               willChange: "transform",
            }}
         />
      </>
   );
};
