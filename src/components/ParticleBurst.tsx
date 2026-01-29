"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

interface GlowOrb {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export const ParticleBurst = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const neonColor = { r: 0, g: 255, b: 136 };

    // Stars - static twinkling background
    const stars: Star[] = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 8000);

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Shooting stars
    const shootingStars: ShootingStar[] = [];

    const createShootingStar = () => {
      if (shootingStars.length >= 8) return;

      shootingStars.push({
        x: Math.random() * canvas.width * 0.8,
        y: Math.random() * canvas.height * 0.3,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      });
    };

    // Soft glow orbs - very subtle ambient light
    const glowOrbs: GlowOrb[] = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 300, opacity: 0.03, pulsePhase: 0, pulseSpeed: 0.005 },
      { x: canvas.width * 0.8, y: canvas.height * 0.6, radius: 250, opacity: 0.025, pulsePhase: Math.PI, pulseSpeed: 0.007 },
      { x: canvas.width * 0.5, y: canvas.height * 0.8, radius: 350, opacity: 0.02, pulsePhase: Math.PI / 2, pulseSpeed: 0.004 },
    ];

    const animate = () => {
      time += 1;

      // Clear canvas completely
      ctx.fillStyle = theme === "dark" ? "#0a0a0a" : "#fafafa";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw soft glow orbs (ambient lighting)
      glowOrbs.forEach((orb) => {
        orb.pulsePhase += orb.pulseSpeed;
        const pulse = Math.sin(orb.pulsePhase) * 0.5 + 0.5;
        const currentOpacity = orb.opacity * (0.7 + pulse * 0.3);

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw stars with twinkling
      stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
        const currentOpacity = star.opacity * (0.4 + twinkle * 0.6);

        // Star glow
        const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        glowGradient.addColorStop(0, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${currentOpacity * 0.4})`);
        glowGradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${currentOpacity})`;
        ctx.fill();
      });

      // Randomly create shooting stars
      if (Math.random() < 0.02) {
        createShootingStar();
      }

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];

        // Move
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.015;

        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Draw shooting star trail
        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(1, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${star.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Bright head
        const headGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 8);
        headGlow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        headGlow.addColorStop(0.3, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${star.opacity * 0.8})`);
        headGlow.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = headGlow;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <>
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 0%, var(--background) 90%)`,
        }}
      />
    </>
  );
};
