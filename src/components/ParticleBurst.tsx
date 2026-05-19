"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

// Dark theme types (Starfield)
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

// Light theme types
interface LightParticle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
}

interface Cloud {
  x: number;
  y: number;
  width: number;
  speed: number;
  opacity: number;
}

export const ParticleBurst = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let isVisible = true;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Pause when tab hidden or canvas offscreen
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    if (theme === "dark") {
      // ==================== DARK THEME: OPTIMIZED STARFIELD ====================
      const neonR = 0, neonG = 255, neonB = 136;

      // Cap stars at 120 regardless of screen size
      const stars: Star[] = [];
      const starCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 120);

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.2 + 0.3,
          opacity: Math.random() * 0.4 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }

      const shootingStars: ShootingStar[] = [];
      const glowOrbs = [
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.3, radius: 250, opacity: 0.025, phase: 0, speed: 0.005 },
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.6, radius: 200, opacity: 0.02, phase: Math.PI, speed: 0.007 },
      ];

      const createShootingStar = () => {
        if (shootingStars.length >= 3) return;
        shootingStars.push({
          x: Math.random() * window.innerWidth * 0.8,
          y: Math.random() * window.innerHeight * 0.3,
          length: Math.random() * 60 + 30,
          speed: Math.random() * 6 + 4,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        });
      };

      // Pre-create shared gradient for simple stars (no per-star gradients)
      const animateDark = () => {
        if (!isVisible) {
          animationId = requestAnimationFrame(animateDark);
          return;
        }
        time += 1;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // Draw soft glow orbs (2 instead of 3)
        for (let i = 0; i < glowOrbs.length; i++) {
          const orb = glowOrbs[i];
          orb.phase += orb.speed;
          const pulse = Math.sin(orb.phase) * 0.5 + 0.5;
          const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
          grad.addColorStop(0, `rgba(${neonR}, ${neonG}, ${neonB}, ${orb.opacity * (0.7 + pulse * 0.3)})`);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw twinkling stars - NO individual glow gradients, just simple circles
        ctx.fillStyle = `rgb(${neonR}, ${neonG}, ${neonB})`;
        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          star.twinklePhase += star.twinkleSpeed;
          const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
          const alpha = star.opacity * (0.4 + twinkle * 0.6);
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        // Shooting stars (max 3, simplified)
        if (Math.random() < 0.008) createShootingStar();
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const star = shootingStars[i];
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;
          star.opacity -= 0.012;
          if (star.opacity <= 0) {
            shootingStars.splice(i, 1);
            continue;
          }
          const tailX = star.x - Math.cos(star.angle) * star.length;
          const tailY = star.y - Math.sin(star.angle) * star.length;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(star.x, star.y);
          ctx.strokeStyle = `rgba(${neonR}, ${neonG}, ${neonB}, ${star.opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        animationId = requestAnimationFrame(animateDark);
      };

      animateDark();
    } else {
      // ==================== LIGHT THEME: SIMPLIFIED SUN ====================
      const sunR = 255, sunG = 160, sunB = 0;
      const sunBrightR = 255, sunBrightG = 200, sunBrightB = 50;
      const sunX = window.innerWidth * 0.85;
      const sunY = window.innerHeight * 0.15;
      const sunRadius = Math.min(window.innerWidth, window.innerHeight) * 0.08;

      // Simplified: 8 rays instead of 16
      const rayAngles = [0, 0.785, 1.57, 2.356, 3.141, 3.927, 4.712, 5.498];

      // Max 20 light particles instead of 60
      const lightParticles: LightParticle[] = [];
      const createLightParticle = () => {
        if (lightParticles.length >= 20) return;
        lightParticles.push({
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 10,
          size: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.4 + 0.2,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: -(Math.random() * 0.8 + 0.4),
          life: 0,
          maxLife: 250 + Math.random() * 150,
        });
      };

      // Simplified clouds (3 instead of 5, no puff gradients)
      const clouds: Cloud[] = [
        { x: window.innerWidth * 0.1, y: window.innerHeight * 0.2, width: 120, speed: 0.15, opacity: 0.5 },
        { x: window.innerWidth * 0.5, y: window.innerHeight * 0.12, width: 100, speed: 0.1, opacity: 0.4 },
        { x: window.innerWidth * 0.75, y: window.innerHeight * 0.25, width: 90, speed: 0.12, opacity: 0.45 },
      ];

      const animateLight = () => {
        if (!isVisible) {
          animationId = requestAnimationFrame(animateLight);
          return;
        }
        time += 1;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // Simple sky background (solid color, no gradient per frame)
        ctx.fillStyle = "#fffef8";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        // Simplified sun rays (lines, not gradients)
        ctx.lineCap = "round";
        for (let i = 0; i < rayAngles.length; i++) {
          const angle = rayAngles[i] + time * 0.0005;
          const len = sunRadius * 3.5;
          const endX = sunX + Math.cos(angle) * len;
          const endY = sunY + Math.sin(angle) * len;
          ctx.beginPath();
          ctx.moveTo(sunX, sunY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(${sunBrightR}, ${sunBrightG}, ${sunBrightB}, 0.15)`;
          ctx.lineWidth = 6;
          ctx.stroke();
        }

        // Sun outer glow (single gradient)
        const outerGlow = ctx.createRadialGradient(sunX, sunY, sunRadius * 0.3, sunX, sunY, sunRadius * 4);
        outerGlow.addColorStop(0, `rgba(${sunBrightR}, ${sunBrightG}, ${sunBrightB}, 0.3)`);
        outerGlow.addColorStop(1, "transparent");
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Sun core
        const sunGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius);
        sunGrad.addColorStop(0, `rgba(255, 255, 220, 1)`);
        sunGrad.addColorStop(0.5, `rgba(${sunBrightR}, ${sunBrightG}, ${sunBrightB}, 0.95)`);
        sunGrad.addColorStop(1, `rgba(${sunR}, ${sunG}, ${sunB}, 0.7)`);
        ctx.fillStyle = sunGrad;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fill();

        // Simple clouds (ellipses, no per-puff gradients)
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        for (let i = 0; i < clouds.length; i++) {
          const cloud = clouds[i];
          cloud.x += cloud.speed;
          if (cloud.x > window.innerWidth + cloud.width) cloud.x = -cloud.width;
          ctx.globalAlpha = cloud.opacity;
          ctx.beginPath();
          ctx.ellipse(cloud.x, cloud.y, cloud.width * 0.5, cloud.width * 0.2, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        // Light particles (max 20, simple circles)
        if (Math.random() < 0.08) createLightParticle();
        for (let i = lightParticles.length - 1; i >= 0; i--) {
          const p = lightParticles[i];
          p.x += p.speedX;
          p.y += p.speedY;
          p.life++;
          const lifeRatio = p.life / p.maxLife;
          const alpha = p.opacity * (1 - lifeRatio);
          if (p.life >= p.maxLife || p.y < -10) {
            lightParticles.splice(i, 1);
            continue;
          }
          ctx.globalAlpha = alpha;
          ctx.fillStyle = `rgb(${sunBrightR}, ${sunBrightG}, ${sunBrightB})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        animationId = requestAnimationFrame(animateLight);
      };

      animateLight();
    }

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 0%, var(--background) 90%)`,
        }}
      />
    </>
  );
};
