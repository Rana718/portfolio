"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

interface Particle {
   id: number;
   x: number;
   y: number;
   rotation: number;
   color: string;
   size: number;
   vx: number;
   vy: number;
   vr: number;
   opacity: number;
}

interface ConfettiProps {
   trigger: boolean;
   onComplete?: () => void;
}

export const Confetti = ({ trigger, onComplete }: ConfettiProps) => {
   const { theme } = useTheme();
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const particlesRef = useRef<Particle[]>([]);
   const rafRef = useRef<number>(0);
   const [active, setActive] = useState(false);

   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
   const secondaryColor = theme === "dark" ? "#00d4aa" : "#FF9500";

   useEffect(() => {
      if (!trigger) return;

      const colors = [
         accentColor,
         secondaryColor,
         "#FF6B6B",
         "#4ECDC4",
         "#FFE66D",
         "#95E1D3",
      ];
      const particles: Particle[] = Array.from({ length: 30 }, (_, i) => {
         const angle = Math.random() * Math.PI * 2;
         const speed = Math.random() * 8 + 4;
         return {
            id: i,
            x: 0,
            y: 0,
            rotation: Math.random() * 360,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 6 + 3,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 6,
            vr: (Math.random() - 0.5) * 15,
            opacity: 1,
         };
      });

      particlesRef.current = particles;
      setActive(true);

      const timer = setTimeout(() => {
         setActive(false);
         particlesRef.current = [];
         onComplete?.();
      }, 2000);

      return () => clearTimeout(timer);
   }, [trigger, accentColor, secondaryColor, onComplete]);

   useEffect(() => {
      if (!active) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const resize = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
      };
      resize();

      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.7;

      const animate = () => {
         const particles = particlesRef.current;
         if (particles.length === 0) return;

         ctx.clearRect(0, 0, canvas.width, canvas.height);
         let alive = 0;

         for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.25; // gravity
            p.rotation += p.vr;
            p.opacity -= 0.015;
            p.vx *= 0.98;

            if (p.opacity <= 0) continue;
            alive++;

            ctx.save();
            ctx.translate(centerX + p.x, centerY + p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
            ctx.restore();
         }

         ctx.globalAlpha = 1;

         if (alive > 0) {
            rafRef.current = requestAnimationFrame(animate);
         }
      };

      rafRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafRef.current);
   }, [active]);

   if (!active) return null;

   return (
      <canvas
         ref={canvasRef}
         className="fixed inset-0 pointer-events-none z-50"
         style={{ width: "100%", height: "100%" }}
      />
   );
};
