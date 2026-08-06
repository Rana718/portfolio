"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
   AnimatePresence,
   motion,
   useMotionValue,
   useSpring,
} from "framer-motion";
import { Bot, Pointer } from "lucide-react";

interface PaintDot {
   id: number;
   x: number;
   y: number;
   size: number;
}

const INTERACTIVE_SELECTOR =
   'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

const FIELD_SELECTOR = 'input, textarea, select, [contenteditable="true"]';

const RING_SPRING = { damping: 30, stiffness: 600, mass: 0.4 };

const EATER_HOME = { x: 48, y: 48 };

const PAINT_SPACING = 6;

export function CustomCursor() {
   const [isHovering, setIsHovering] = useState(false);
   const [isClicking, setIsClicking] = useState(false);
   const [isVisible, setIsVisible] = useState(false);
   const [isPainting, setIsPainting] = useState(false);
   const [hoverText, setHoverText] = useState<string | null>(null);
   const [paintDots, setPaintDots] = useState<PaintDot[]>([]);
   const [velocityScale, setVelocityScale] = useState(1);
   const [enabled, setEnabled] = useState(false);

   // Eater bot
   const [eaterVisible, setEaterVisible] = useState(false);
   const [eaterPos, setEaterPos] = useState({ x: 0, y: 0, rotate: 0 });
   const [moveDuration, setMoveDuration] = useState(0.1);

   const cursorX = useMotionValue(0);
   const cursorY = useMotionValue(0);
   const ringX = useSpring(cursorX, RING_SPRING);
   const ringY = useSpring(cursorY, RING_SPRING);

   const paintIdRef = useRef(0);
   const lastPaintPos = useRef({ x: 0, y: 0 });
   const lastMovePos = useRef({ x: 0, y: 0, time: 0 });
   const isPaintingRef = useRef(false);
   const strokeRef = useRef<PaintDot[]>([]);
   const velocityDecay = useRef<ReturnType<typeof setTimeout> | null>(null);
   const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

   useEffect(() => {
      const fine = window.matchMedia("(pointer: fine)");
      const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
      const sync = () => setEnabled(fine.matches && !calm.matches);

      sync();
      fine.addEventListener("change", sync);
      calm.addEventListener("change", sync);
      return () => {
         fine.removeEventListener("change", sync);
         calm.removeEventListener("change", sync);
      };
   }, []);

   const schedule = useCallback((fn: () => void, delay: number) => {
      timers.current.push(setTimeout(fn, delay));
   }, []);

   const consumeStroke = useCallback(() => {
      const stroke = [...strokeRef.current];
      strokeRef.current = [];

      if (stroke.length <= 1) {
         setPaintDots((prev) =>
            prev.filter((dot) => !stroke.some((s) => s.id === dot.id)),
         );
         return;
      }

      setEaterVisible(true);
      setMoveDuration(0); // Place instantly at home.
      setEaterPos({ ...EATER_HOME, rotate: 0 });

      schedule(() => {
         setMoveDuration(0.8);
         setEaterPos({ x: stroke[0].x, y: stroke[0].y, rotate: 0 });

         schedule(() => {
            setMoveDuration(0.1);
            let elapsed = 0;

            stroke.forEach((dot, i) => {
               const progress = i / Math.max(stroke.length - 1, 1);
               elapsed += 70 * (1 - progress) ** 2 + 15;

               schedule(() => {
                  setEaterPos((prev) => {
                     const next = stroke[i + 1];
                     const rotate = next
                        ? (Math.atan2(next.y - dot.y, next.x - dot.x) * 180) /
                          Math.PI
                        : prev.rotate;
                     return { x: dot.x, y: dot.y, rotate };
                  });
                  setPaintDots((prev) => prev.filter((p) => p.id !== dot.id));

                  if (i < stroke.length - 1) return;

                  schedule(() => {
                     setMoveDuration(0.8);
                     setEaterPos({
                        ...EATER_HOME,
                        rotate:
                           (Math.atan2(
                              EATER_HOME.y - dot.y,
                              EATER_HOME.x - dot.x,
                           ) *
                              180) /
                           Math.PI,
                     });
                     schedule(() => {
                        setEaterVisible(false);
                        setMoveDuration(0.1);
                     }, 800);
                  }, 100);
               }, elapsed);
            });
         }, 800);
      }, 50);
   }, [schedule]);

   const addDot = useCallback((x: number, y: number, size: number) => {
      const dot: PaintDot = { id: paintIdRef.current++, x, y, size };
      // Append without spreading the entire array — use functional updater
      // with a single push to avoid O(n) copy on every mouse move pixel.
      setPaintDots((prev) => {
         const next = prev.slice(); // shallow copy only once per dot
         next.push(dot);
         return next;
      });
      strokeRef.current.push(dot);
      lastPaintPos.current = { x, y };
   }, []);

   useEffect(() => {
      if (!enabled) return;

      const onMouseMove = (e: MouseEvent) => {
         cursorX.set(e.clientX);
         cursorY.set(e.clientY);
         setIsVisible(true);

         const now = e.timeStamp;
         const dt = now - lastMovePos.current.time;
         if (dt > 0) {
            const dx = e.clientX - lastMovePos.current.x;
            const dy = e.clientY - lastMovePos.current.y;
            const speed = Math.hypot(dx, dy) / dt;
            const scale = Math.min(1 + speed * 0.5, 3);

            setVelocityScale((prev) => (scale > prev ? scale : prev));
            if (velocityDecay.current) clearTimeout(velocityDecay.current);
            velocityDecay.current = setTimeout(() => setVelocityScale(1), 150);
         }
         lastMovePos.current = { x: e.clientX, y: e.clientY, time: now };

         if (!isPaintingRef.current) return;
         const moved = Math.hypot(
            e.clientX - lastPaintPos.current.x,
            e.clientY - lastPaintPos.current.y,
         );
         if (moved > PAINT_SPACING) {
            addDot(e.clientX, e.clientY, 5 + Math.random() * 3);
         }
      };

      const onMouseDown = (e: MouseEvent) => {
         const target = e.target as HTMLElement | null;
         if (!target?.closest(FIELD_SELECTOR)) e.preventDefault();

         setIsClicking(true);
         setIsPainting(true);
         isPaintingRef.current = true;
         strokeRef.current = [];
         lastPaintPos.current = { x: e.clientX, y: e.clientY };
         addDot(e.clientX, e.clientY, 6);
      };

      const onMouseUp = () => {
         setIsClicking(false);
         setIsPainting(false);
         isPaintingRef.current = false;
         consumeStroke();
      };

      const onOver = (e: MouseEvent) => {
         const el = (e.target as HTMLElement | null)?.closest(
            INTERACTIVE_SELECTOR,
         );
         if (!el) return;
         setIsHovering(true);
         setHoverText(el.getAttribute("data-cursor-text"));
      };

      const onOut = (e: MouseEvent) => {
         const el = (e.target as HTMLElement | null)?.closest(
            INTERACTIVE_SELECTOR,
         );
         if (!el) return;
         const to = e.relatedTarget as HTMLElement | null;
         if (to?.closest(INTERACTIVE_SELECTOR) === el) return;
         setIsHovering(false);
         setHoverText(null);
      };

      const onDocLeave = (e: MouseEvent) => {
         if (e.relatedTarget instanceof HTMLIFrameElement) return;
         setIsVisible(false);
         if (isPaintingRef.current) consumeStroke();
         isPaintingRef.current = false;
         setIsPainting(false);
      };

      const onDocEnter = () => setIsVisible(true);
      const onDragStart = (e: DragEvent) => e.preventDefault();

      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp, { passive: true });
      window.addEventListener("dragstart", onDragStart);
      document.addEventListener("mouseover", onOver, { passive: true });
      document.addEventListener("mouseout", onOut, { passive: true });
      document.documentElement.addEventListener("mouseleave", onDocLeave, { passive: true });
      document.documentElement.addEventListener("mouseenter", onDocEnter, { passive: true });

      return () => {
         window.removeEventListener("mousemove", onMouseMove);
         window.removeEventListener("mousedown", onMouseDown);
         window.removeEventListener("mouseup", onMouseUp);
         window.removeEventListener("dragstart", onDragStart);
         document.removeEventListener("mouseover", onOver);
         document.removeEventListener("mouseout", onOut);
         document.documentElement.removeEventListener("mouseleave", onDocLeave);
         document.documentElement.removeEventListener("mouseenter", onDocEnter);

         if (velocityDecay.current) clearTimeout(velocityDecay.current);
         for (const id of timers.current) clearTimeout(id);
         timers.current = [];
      };
   }, [enabled, cursorX, cursorY, addDot, consumeStroke]);

   if (!enabled) return null;

   return (
      <>
         <div className="pointer-events-none fixed inset-0 z-9990 mix-blend-difference">
            <AnimatePresence>
               {paintDots.map((dot) => (
                  <motion.div
                     key={dot.id}
                     className="absolute rounded-full bg-white"
                     style={{
                        left: dot.x,
                        top: dot.y,
                        width: dot.size,
                        height: dot.size,
                        transform: "translate(-50%, -50%)",
                     }}
                     initial={{ scale: 0, opacity: 1 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0, opacity: 0 }}
                     transition={{ duration: 0.1 }}
                  />
               ))}
            </AnimatePresence>
         </div>

         {/* Eater bot */}
         <AnimatePresence>
            {eaterVisible && (
               <motion.div
                  className="pointer-events-none fixed z-9995 text-white mix-blend-difference"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                     opacity: 1,
                     scale: 1,
                     left: eaterPos.x,
                     top: eaterPos.y,
                     rotate: eaterPos.rotate,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: moveDuration }}
                  style={{ marginLeft: -12, marginTop: -12 }}
               >
                  <Bot size={24} strokeWidth={2.5} />
               </motion.div>
            )}
         </AnimatePresence>

         {/* Instant dot, morphing into a pointer hand over interactive things */}
         <motion.div
            className="pointer-events-none fixed z-9999 flex items-center justify-center overflow-visible mix-blend-difference"
            style={{
               x: cursorX,
               y: cursorY,
               translateX: "-50%",
               translateY: "-50%",
               width: isHovering ? 32 : 12,
               height: isHovering ? 32 : 12,
            }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
         >
            <AnimatePresence mode="wait">
               {isHovering ? (
                  <motion.div
                     key="hand"
                     initial={{ scale: 0, opacity: 0, rotate: -20 }}
                     animate={{ scale: 1, opacity: 1, rotate: 0 }}
                     exit={{ scale: 0, opacity: 0, rotate: -20 }}
                     transition={{ duration: 0.15 }}
                  >
                     <Pointer size={24} fill="white" color="white" />
                  </motion.div>
               ) : (
                  <motion.div
                     key="dot"
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0, opacity: 0 }}
                     transition={{ duration: 0.15 }}
                     className="h-full w-full rounded-full bg-white"
                  />
               )}
            </AnimatePresence>
         </motion.div>

         {/* Trailing ring — tinted with the theme accent. */}
         <motion.div
            className="pointer-events-none fixed z-9998"
            style={{
               x: ringX,
               y: ringY,
               translateX: "-50%",
               translateY: "-50%",
            }}
            animate={{
               scale: isClicking
                  ? 0.9 * velocityScale
                  : isHovering
                    ? 1.5
                    : velocityScale,
               opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
         >
            <div
               className="h-15 w-15 rounded-full border transition-[background-color,box-shadow,opacity] duration-200"
               style={{
                  borderColor: "rgba(var(--accent-rgb), 0.5)",
                  backgroundColor: isHovering
                     ? "rgba(var(--accent-rgb), 0.10)"
                     : "transparent",
                  boxShadow: isHovering
                     ? "0 0 20px -4px var(--accent-glow)"
                     : undefined,
               }}
            />
         </motion.div>

         {/* Label supplied by data-cursor-text on the hovered element. */}
         <AnimatePresence>
            {hoverText && (
               <motion.div
                  className="pointer-events-none fixed z-9999"
                  style={{ x: ringX, y: ringY }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
               >
                  <div className="ml-10 shrink-0 rounded-lg border border-border-primary bg-bg-primary/90 px-3 py-1.5 shadow-xl backdrop-blur-md">
                     <span className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-wider text-fg-primary">
                        {hoverText}
                     </span>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         <style>{`
            * { cursor: none !important; }
            ${
               isPainting
                  ? `* { user-select: none !important; -webkit-user-select: none !important; }`
                  : ""
            }
         `}</style>
      </>
   );
}
