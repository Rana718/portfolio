"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

export const MouseSpotlight = () => {
  const { theme } = useTheme();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const currentRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const orb = orbRef.current;
    if (!spotlight || !orb) return;

    // Use direct DOM manipulation - ZERO React re-renders
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const target = mouseRef.current;
      const current = currentRef.current;

      // Smooth follow with lerp (cheaper than spring)
      current.x = lerp(current.x, target.x, 0.08);
      current.y = lerp(current.y, target.y, 0.08);

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
  }, [accentRgb]);

  return (
    <>
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      />
      <div
        ref={orbRef}
        className="pointer-events-none fixed hidden md:block z-[1] w-64 h-64 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${accentRgb}, 0.06) 0%, transparent 70%)`,
          filter: "blur(40px)",
          willChange: "transform",
        }}
      />
    </>
  );
};
