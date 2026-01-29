"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
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
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Create grid nodes
    const gridSize = 80;
    const nodes: Node[] = [];
    const cols = Math.ceil(canvas.width / gridSize) + 2;
    const rows = Math.ceil(canvas.height / gridSize) + 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        nodes.push({
          x: i * gridSize - gridSize / 2,
          y: j * gridSize - gridSize / 2,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    }

    const neonColorRgb = { r: 0, g: 255, b: 136 };

    const drawNode = (node: Node, time: number) => {
      const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase) * 0.5 + 0.5;
      const currentOpacity = node.opacity * (0.5 + pulse * 0.5);
      const currentRadius = node.radius * (0.8 + pulse * 0.4);

      // Draw glow
      const glowGradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, currentRadius * 4
      );
      glowGradient.addColorStop(0, `rgba(${neonColorRgb.r}, ${neonColorRgb.g}, ${neonColorRgb.b}, ${currentOpacity * 0.5})`);
      glowGradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Draw core
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${neonColorRgb.r}, ${neonColorRgb.g}, ${neonColorRgb.b}, ${currentOpacity})`;
      ctx.fill();
    };

    const drawConnection = (node1: Node, node2: Node, distance: number, maxDist: number) => {
      const opacity = (1 - distance / maxDist) * 0.15;
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.strokeStyle = `rgba(${neonColorRgb.r}, ${neonColorRgb.g}, ${neonColorRgb.b}, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    let time = 0;
    const animate = () => {
      time += 1;

      // Clear with fade effect
      ctx.fillStyle = theme === "dark" ? "rgba(10, 10, 10, 0.15)" : "rgba(250, 250, 250, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      const connectionDistance = 120;

      nodes.forEach((node) => {
        // Apply slight drift
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges softly
        const margin = 50;
        if (node.x < -margin || node.x > canvas.width + margin) node.vx *= -1;
        if (node.y < -margin || node.y > canvas.height + margin) node.vy *= -1;

        // Mouse interaction - nodes are attracted to cursor
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 200;

        if (distToMouse < interactionRadius && distToMouse > 0) {
          const force = (1 - distToMouse / interactionRadius) * 0.02;
          node.vx += (dx / distToMouse) * force;
          node.vy += (dy / distToMouse) * force;
        }

        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;
      });

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            drawConnection(nodes[i], nodes[j], distance, connectionDistance);
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => drawNode(node, time));

      // Draw mouse glow
      if (mouseX > 0 && mouseY > 0) {
        const mouseGlow = ctx.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, 150
        );
        mouseGlow.addColorStop(0, `rgba(${neonColorRgb.r}, ${neonColorRgb.g}, ${neonColorRgb.b}, 0.15)`);
        mouseGlow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 150, 0, Math.PI * 2);
        ctx.fillStyle = mouseGlow;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <>
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)`,
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] pointer-events-none" />
    </>
  );
};
