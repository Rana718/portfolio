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

interface GlowOrb {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

// Light theme types (Sun)
interface SunRay {
  angle: number;
  length: number;
  width: number;
  opacity: number;
  speed: number;
  phase: number;
}

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

interface FloatingOrb {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speedX: number;
  speedY: number;
  phase: number;
}

interface Cloud {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  opacity: number;
  puffs: { offsetX: number; offsetY: number; radius: number }[];
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

    if (theme === "dark") {
      // ==================== DARK THEME: STARFIELD ====================
      const neonColor = { r: 0, g: 255, b: 136 };

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

      const glowOrbs: GlowOrb[] = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 300, opacity: 0.03, pulsePhase: 0, pulseSpeed: 0.005 },
        { x: canvas.width * 0.8, y: canvas.height * 0.6, radius: 250, opacity: 0.025, pulsePhase: Math.PI, pulseSpeed: 0.007 },
        { x: canvas.width * 0.5, y: canvas.height * 0.8, radius: 350, opacity: 0.02, pulsePhase: Math.PI / 2, pulseSpeed: 0.004 },
      ];

      const animateDark = () => {
        time += 1;
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw soft glow orbs
        glowOrbs.forEach((orb) => {
          orb.pulsePhase += orb.pulseSpeed;
          const pulse = Math.sin(orb.pulsePhase) * 0.5 + 0.5;
          const currentOpacity = orb.opacity * (0.7 + pulse * 0.3);

          const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
          gradient.addColorStop(0, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${currentOpacity})`);
          gradient.addColorStop(0.5, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${currentOpacity * 0.3})`);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        });

        // Draw twinkling stars
        stars.forEach((star) => {
          star.twinklePhase += star.twinkleSpeed;
          const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
          const currentOpacity = star.opacity * (0.4 + twinkle * 0.6);

          const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
          glowGradient.addColorStop(0, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${currentOpacity * 0.4})`);
          glowGradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${currentOpacity})`;
          ctx.fill();
        });

        // Shooting stars
        if (Math.random() < 0.02) {
          createShootingStar();
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const star = shootingStars[i];
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;
          star.opacity -= 0.015;

          if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
            shootingStars.splice(i, 1);
            continue;
          }

          const tailX = star.x - Math.cos(star.angle) * star.length;
          const tailY = star.y - Math.sin(star.angle) * star.length;

          const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
          gradient.addColorStop(0, "transparent");
          gradient.addColorStop(1, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${star.opacity})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(star.x, star.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();

          const headGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 8);
          headGlow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          headGlow.addColorStop(0.3, `rgba(${neonColor.r}, ${neonColor.g}, ${neonColor.b}, ${star.opacity * 0.8})`);
          headGlow.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = headGlow;
          ctx.fill();
        }

        animationId = requestAnimationFrame(animateDark);
      };

      animateDark();
    } else {
      // ==================== LIGHT THEME: SUN WITH CLOUDS ====================
      // Deeper, more saturated sun colors
      const sunColor = { r: 255, g: 160, b: 0 };       // Deeper orange-yellow
      const sunColorSecondary = { r: 255, g: 120, b: 0 }; // Deep orange
      const sunColorBright = { r: 255, g: 200, b: 50 };   // Bright yellow for core

      // Sun position (top right area) - slightly larger
      const sunX = canvas.width * 0.85;
      const sunY = canvas.height * 0.15;
      const sunRadius = Math.min(canvas.width, canvas.height) * 0.1;

      // Create sun rays - more rays for brighter effect
      const sunRays: SunRay[] = [];
      const rayCount = 16;
      for (let i = 0; i < rayCount; i++) {
        sunRays.push({
          angle: (i / rayCount) * Math.PI * 2,
          length: sunRadius * 4 + Math.random() * sunRadius * 2,
          width: 10 + Math.random() * 15,
          opacity: 0.25 + Math.random() * 0.15,
          speed: 0.002 + Math.random() * 0.002,
          phase: Math.random() * Math.PI * 2,
        });
      }

      // Floating light particles
      const lightParticles: LightParticle[] = [];
      const createLightParticle = () => {
        if (lightParticles.length >= 60) return;
        lightParticles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 10,
          size: Math.random() * 5 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: -(Math.random() * 1.2 + 0.5),
          life: 0,
          maxLife: 300 + Math.random() * 200,
        });
      };

      // Floating warm orbs
      const floatingOrbs: FloatingOrb[] = [];
      for (let i = 0; i < 6; i++) {
        floatingOrbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 100 + Math.random() * 150,
          opacity: 0.04 + Math.random() * 0.03,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          phase: Math.random() * Math.PI * 2,
        });
      }

      // Create fluffy clouds
      const createCloud = (x: number, y: number, scale: number): Cloud => {
        const puffs: { offsetX: number; offsetY: number; radius: number }[] = [];
        // Create a cluster of circles to form a fluffy cloud
        const puffCount = 5 + Math.floor(Math.random() * 4);
        for (let i = 0; i < puffCount; i++) {
          puffs.push({
            offsetX: (Math.random() - 0.5) * 80 * scale,
            offsetY: (Math.random() - 0.5) * 40 * scale,
            radius: (25 + Math.random() * 35) * scale,
          });
        }
        return {
          x,
          y,
          width: 150 * scale,
          height: 60 * scale,
          speed: 0.2 + Math.random() * 0.3,
          opacity: 0.6 + Math.random() * 0.3,
          puffs,
        };
      };

      const clouds: Cloud[] = [
        createCloud(canvas.width * 0.1, canvas.height * 0.2, 1.2),
        createCloud(canvas.width * 0.4, canvas.height * 0.12, 0.9),
        createCloud(canvas.width * 0.6, canvas.height * 0.25, 1.0),
        createCloud(canvas.width * 0.2, canvas.height * 0.35, 0.7),
        createCloud(canvas.width * 0.75, canvas.height * 0.18, 0.8),
      ];

      const drawCloud = (cloud: Cloud) => {
        ctx.save();

        // Draw each puff of the cloud
        cloud.puffs.forEach((puff) => {
          const puffX = cloud.x + puff.offsetX;
          const puffY = cloud.y + puff.offsetY;

          // Cloud gradient - white with slight warm tint
          const cloudGradient = ctx.createRadialGradient(
            puffX, puffY - puff.radius * 0.3, 0,
            puffX, puffY, puff.radius
          );
          cloudGradient.addColorStop(0, `rgba(255, 255, 255, ${cloud.opacity})`);
          cloudGradient.addColorStop(0.5, `rgba(255, 252, 245, ${cloud.opacity * 0.9})`);
          cloudGradient.addColorStop(0.8, `rgba(250, 245, 235, ${cloud.opacity * 0.6})`);
          cloudGradient.addColorStop(1, `rgba(245, 240, 230, 0)`);

          ctx.beginPath();
          ctx.arc(puffX, puffY, puff.radius, 0, Math.PI * 2);
          ctx.fillStyle = cloudGradient;
          ctx.fill();
        });

        ctx.restore();
      };

      const animateLight = () => {
        time += 1;

        // Warm cream/light yellow sky gradient background
        const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        skyGradient.addColorStop(0, "#fff8e8");
        skyGradient.addColorStop(0.3, "#fffef5");
        skyGradient.addColorStop(1, "#fffef8");
        ctx.fillStyle = skyGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw floating warm orbs (background atmosphere)
        floatingOrbs.forEach((orb) => {
          orb.phase += 0.01;
          orb.x += orb.speedX + Math.sin(orb.phase) * 0.2;
          orb.y += orb.speedY + Math.cos(orb.phase) * 0.2;

          if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
          if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
          if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
          if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

          const pulse = Math.sin(orb.phase * 2) * 0.5 + 0.5;
          const currentOpacity = orb.opacity * (0.7 + pulse * 0.3);

          const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
          gradient.addColorStop(0, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, ${currentOpacity})`);
          gradient.addColorStop(0.5, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, ${currentOpacity * 0.3})`);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        });

        // Draw bright light beams from sun FIRST (behind everything)
        const beamCount = 5;
        for (let i = 0; i < beamCount; i++) {
          const beamAngle = Math.PI / 6 + (i / beamCount) * Math.PI / 1.5 + Math.sin(time * 0.003 + i) * 0.05;
          const beamLength = Math.min(canvas.width, canvas.height) * 1.8;
          const beamWidth = 150 + Math.sin(time * 0.008 + i * 2) * 40;

          const beamEndX = sunX + Math.cos(beamAngle) * beamLength;
          const beamEndY = sunY + Math.sin(beamAngle) * beamLength;

          const beamGradient = ctx.createLinearGradient(sunX, sunY, beamEndX, beamEndY);
          beamGradient.addColorStop(0, `rgba(${sunColorBright.r}, ${sunColorBright.g}, ${sunColorBright.b}, 0.15)`);
          beamGradient.addColorStop(0.2, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, 0.08)`);
          beamGradient.addColorStop(0.5, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, 0.03)`);
          beamGradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.moveTo(sunX, sunY);
          ctx.lineTo(beamEndX - beamWidth / 2, beamEndY);
          ctx.lineTo(beamEndX + beamWidth / 2, beamEndY);
          ctx.closePath();
          ctx.fillStyle = beamGradient;
          ctx.fill();
        }

        // Draw sun rays
        sunRays.forEach((ray) => {
          ray.phase += ray.speed;
          const pulse = Math.sin(ray.phase) * 0.3 + 0.7;
          const currentLength = ray.length * pulse;
          const currentOpacity = ray.opacity * pulse;

          const endX = sunX + Math.cos(ray.angle + time * 0.0008) * currentLength;
          const endY = sunY + Math.sin(ray.angle + time * 0.0008) * currentLength;

          const gradient = ctx.createLinearGradient(sunX, sunY, endX, endY);
          gradient.addColorStop(0, `rgba(${sunColorBright.r}, ${sunColorBright.g}, ${sunColorBright.b}, ${currentOpacity})`);
          gradient.addColorStop(0.4, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, ${currentOpacity * 0.6})`);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.moveTo(sunX, sunY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = ray.width * pulse;
          ctx.lineCap = "round";
          ctx.stroke();
        });

        // Draw sun outer glow - larger and brighter
        const outerGlow = ctx.createRadialGradient(sunX, sunY, sunRadius * 0.3, sunX, sunY, sunRadius * 5);
        outerGlow.addColorStop(0, `rgba(${sunColorBright.r}, ${sunColorBright.g}, ${sunColorBright.b}, 0.5)`);
        outerGlow.addColorStop(0.2, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, 0.35)`);
        outerGlow.addColorStop(0.4, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, 0.15)`);
        outerGlow.addColorStop(0.7, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, 0.05)`);
        outerGlow.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius * 5, 0, Math.PI * 2);
        ctx.fillStyle = outerGlow;
        ctx.fill();

        // Draw sun core - brighter and more saturated
        const sunGradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius);
        sunGradient.addColorStop(0, `rgba(255, 255, 220, 1)`);
        sunGradient.addColorStop(0.2, `rgba(${sunColorBright.r}, ${sunColorBright.g}, ${sunColorBright.b}, 0.98)`);
        sunGradient.addColorStop(0.5, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, 0.95)`);
        sunGradient.addColorStop(0.8, `rgba(${sunColorSecondary.r}, ${sunColorSecondary.g}, ${sunColorSecondary.b}, 0.9)`);
        sunGradient.addColorStop(1, `rgba(${sunColorSecondary.r}, ${sunColorSecondary.g}, ${sunColorSecondary.b}, 0.6)`);

        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = sunGradient;
        ctx.fill();

        // Add inner sun highlight for extra brightness
        const innerHighlight = ctx.createRadialGradient(
          sunX - sunRadius * 0.2, sunY - sunRadius * 0.2, 0,
          sunX, sunY, sunRadius * 0.6
        );
        innerHighlight.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        innerHighlight.addColorStop(0.5, "rgba(255, 255, 240, 0.3)");
        innerHighlight.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = innerHighlight;
        ctx.fill();

        // Update and draw clouds
        clouds.forEach((cloud) => {
          cloud.x += cloud.speed;
          // Wrap around when cloud goes off screen
          if (cloud.x > canvas.width + cloud.width) {
            cloud.x = -cloud.width * 2;
          }
          drawCloud(cloud);
        });

        // Create and update light particles
        if (Math.random() < 0.18) {
          createLightParticle();
        }

        for (let i = lightParticles.length - 1; i >= 0; i--) {
          const particle = lightParticles[i];
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.life++;

          const lifeRatio = particle.life / particle.maxLife;
          const currentOpacity = particle.opacity * (1 - lifeRatio);

          if (particle.life >= particle.maxLife || particle.y < -10) {
            lightParticles.splice(i, 1);
            continue;
          }

          // Draw particle with warm glow
          const particleGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2.5
          );
          particleGradient.addColorStop(0, `rgba(${sunColorBright.r}, ${sunColorBright.g}, ${sunColorBright.b}, ${currentOpacity})`);
          particleGradient.addColorStop(0.5, `rgba(${sunColor.r}, ${sunColor.g}, ${sunColor.b}, ${currentOpacity * 0.5})`);
          particleGradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = particleGradient;
          ctx.fill();

          // Particle core - brighter
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 230, ${currentOpacity})`;
          ctx.fill();
        }

        animationId = requestAnimationFrame(animateLight);
      };

      animateLight();
    }

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  const gridColor = theme === "dark" ? "rgba(0, 255, 136, 1)" : "rgba(255, 184, 0, 0.8)";

  return (
    <>
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
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
