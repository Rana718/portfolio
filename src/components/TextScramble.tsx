"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-provider";

const chars = "!<>-_\\/[]{}—=+*^?#________";

interface TextScrambleProps {
   text: string;
   className?: string;
   delay?: number;
   duration?: number;
}

export const TextScramble = ({
   text,
   className = "",
   delay = 0,
   duration = 1200,
}: TextScrambleProps) => {
   const spanRef = useRef<HTMLSpanElement>(null);
   const { theme } = useTheme();
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";

   useEffect(() => {
      const span = spanRef.current;
      if (!span) return;

      let rafId: number;
      let startTime: number | null = null;
      const totalTime = duration;

      const scramble = (timestamp: number) => {
         if (!startTime) startTime = timestamp;
         const elapsed = timestamp - startTime;
         const progress = Math.min(elapsed / totalTime, 1);
         const revealed = Math.floor(progress * text.length);

         let result = "";
         for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") {
               result += " ";
            } else if (i < revealed) {
               result += text[i];
            } else {
               result += chars[Math.floor(Math.random() * chars.length)];
            }
         }
         span.textContent = result;

         if (progress < 1) {
            rafId = requestAnimationFrame(scramble);
         } else {
            span.textContent = text;
         }
      };

      const timeoutId = setTimeout(() => {
         rafId = requestAnimationFrame(scramble);
      }, delay);

      return () => {
         clearTimeout(timeoutId);
         cancelAnimationFrame(rafId);
      };
   }, [text, duration, delay]);

   return (
      <span ref={spanRef} className={className} style={{ color: accentColor }}>
         {text.replace(/./g, "\u00A0")}
      </span>
   );
};
