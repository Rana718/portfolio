"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function useLenis() {
   useEffect(() => {
      const lenis = new Lenis({
         duration: 1.2,
         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      let rafId: number;

      function raf(time: number) {
         lenis.raf(time);
         rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      return () => {
         cancelAnimationFrame(rafId);
         lenis.destroy();
      };
   }, []);
}
