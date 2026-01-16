"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

export const ParticleBurst = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string;
    }> = [];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const particleCount = 150;

    const colors = ["#22c55e", "#16a34a", "#15803d", "#10b981", "#14532d"];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const elevation = Math.random() * Math.PI - Math.PI / 2;
      const speed = Math.random() * 2 + 1;

      particles.push({
        x: centerX,
        y: centerY,
        z: 0,
        vx: Math.cos(angle) * Math.cos(elevation) * speed,
        vy: Math.sin(angle) * Math.cos(elevation) * speed,
        vz: Math.sin(elevation) * speed,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = theme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        const scale = Math.max(0.1, 300 / (300 + p.z));
        const x2d = centerX + (p.x - centerX) * scale;
        const y2d = centerY + (p.y - centerY) * scale;
        const size = Math.max(0.5, p.size * scale);

        if (
          x2d < -50 || x2d > canvas.width + 50 ||
          y2d < -50 || y2d > canvas.height + 50 ||
          p.z > 500 || p.z < -200
        ) {
          p.x = centerX;
          p.y = centerY;
          p.z = 0;
          const angle = Math.random() * Math.PI * 2;
          const elevation = Math.random() * Math.PI - Math.PI / 2;
          const speed = Math.random() * 2 + 1;
          p.vx = Math.cos(angle) * Math.cos(elevation) * speed;
          p.vy = Math.sin(angle) * Math.cos(elevation) * speed;
          p.vz = Math.sin(elevation) * speed;
        }

        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] pointer-events-none" />
    </>
  );
};
