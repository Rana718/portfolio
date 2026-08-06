"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Day {
   date: string;
   count: number;
   level: number;
}

const MONTHS = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec",
];

const LEVEL_OPACITY = [0, 0.25, 0.45, 0.7, 1];

function weekdayOf(date: string) {
   return new Date(`${date}T00:00:00Z`).getUTCDay();
}

function monthOf(date: string) {
   return new Date(`${date}T00:00:00Z`).getUTCMonth();
}

interface Week {
   id: string;
   days: (Day | null)[];
}

const WEEKDAY_LABELS = [
   { id: "sun", label: "" },
   { id: "mon", label: "Mon" },
   { id: "tue", label: "" },
   { id: "wed", label: "Wed" },
   { id: "thu", label: "" },
   { id: "fri", label: "Fri" },
   { id: "sat", label: "" },
];

const SKELETON_WEEKS: Week[] = Array.from({ length: 53 }, (_, w) => ({
   id: `skeleton-${w}`,
   days: Array(7).fill(null),
}));

function toWeeks(days: Day[]): Week[] {
   if (days.length === 0) return [];
   const weeks: Week[] = [];
   let current: (Day | null)[] = Array(7).fill(null);

   let cursor = weekdayOf(days[0].date);

   const push = (columnDays: (Day | null)[]) => {
      const first = columnDays.find(Boolean);
      if (first) weeks.push({ id: first.date, days: columnDays });
   };

   for (const day of days) {
      const weekday = weekdayOf(day.date);
      if (weekday < cursor) {
         push(current);
         current = Array(7).fill(null);
      }
      current[weekday] = day;
      cursor = weekday;
   }
   push(current);
   return weeks;
}

interface ContributionHeatmapProps {
   username: string;
}

export function ContributionHeatmap({ username }: ContributionHeatmapProps) {
   const [days, setDays] = useState<Day[]>([]);
   const [total, setTotal] = useState(0);
   const [state, setState] = useState<"loading" | "ready" | "error">("loading");

   const scrollRef = useRef<HTMLElement>(null);
   const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
   const [isDragging, setIsDragging] = useState(false);

   useEffect(() => {
      let cancelled = false;

      (async () => {
         try {
            const res = await fetch(
               `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
            );
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (cancelled) return;

            const contributions: Day[] = data.contributions ?? [];
            setDays(contributions);
            setTotal(
               data.total?.lastYear ??
                  contributions.reduce((sum, d) => sum + (d.count || 0), 0),
            );
            setState("ready");
         } catch {
            if (!cancelled) setState("error");
         }
      })();

      return () => {
         cancelled = true;
      };
   }, [username]);

   const weeks = useMemo(() => toWeeks(days), [days]);

   const monthLabels = useMemo(() => {
      let previous = -1;
      return weeks.map((week) => {
         const first = week.days.find(Boolean);
         if (!first) return { id: week.id, label: null };
         const month = monthOf(first.date);
         if (month === previous) return { id: week.id, label: null };
         previous = month;
         return { id: week.id, label: MONTHS[month] };
      });
   }, [weeks]);

   useEffect(() => {
      const container = scrollRef.current;
      if (!container || state !== "ready") return;

      let timer: ReturnType<typeof setTimeout> | null = null;
      const observer = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (!entry.isIntersecting) continue;
               timer = setTimeout(() => {
                  container.scrollTo({
                     left: container.scrollWidth,
                     behavior: "smooth",
                  });
               }, 600);
               observer.disconnect();
            }
         },
         { threshold: 0.1 },
      );

      observer.observe(container);
      return () => {
         observer.disconnect();
         if (timer) clearTimeout(timer);
      };
   }, [state]);

   const startDrag = (e: React.MouseEvent) => {
      const container = scrollRef.current;
      if (!container) return;
      dragRef.current = {
         active: true,
         startX: e.pageX,
         scrollLeft: container.scrollLeft,
      };
      setIsDragging(true);
   };

   const onDrag = (e: React.MouseEvent) => {
      const container = scrollRef.current;
      if (!dragRef.current.active || !container) return;
      e.preventDefault();
      container.scrollLeft =
         dragRef.current.scrollLeft - (e.pageX - dragRef.current.startX) * 1.5;
   };

   const endDrag = () => {
      dragRef.current.active = false;
      setIsDragging(false);
   };

   return (
      <div className="rounded-2xl border border-border-primary bg-bg-secondary/50 p-[4vw] md:p-6 backdrop-blur-sm">
         {state === "error" ? (
            <p className="py-[6vw] md:py-8 text-center font-mono text-[2.5vw] md:text-sm text-fg-muted">
               Contribution graph unavailable right now.
            </p>
         ) : (
            <>
               <section
                  ref={scrollRef}
                  aria-label={`${username} GitHub contribution graph`}
                  onMouseDown={startDrag}
                  onMouseMove={onDrag}
                  onMouseUp={endDrag}
                  onMouseLeave={endDrag}
                  className={`scrollbar-none select-none overflow-x-auto ${
                     isDragging ? "cursor-grabbing" : "cursor-grab"
                  }`}
               >
                  <div className="w-fit">
                     <div className="mb-1 flex gap-0.75 md:gap-1 pl-6.5 md:pl-8">
                        {monthLabels.map(({ id, label }) => (
                           <span
                              key={id}
                              className="w-2.5 md:w-3.5 shrink-0 font-mono text-[8px] md:text-[10px] text-fg-muted"
                           >
                              {label}
                           </span>
                        ))}
                     </div>

                     <div className="flex gap-0.75 md:gap-1">
                        <div className="mr-1 flex w-7 shrink-0 flex-col gap-0.75 md:gap-1">
                           {WEEKDAY_LABELS.map(({ id, label }) => (
                              <span
                                 key={id}
                                 className="flex h-2.5 md:h-3.5 items-center font-mono text-[8px] md:text-[10px] leading-none text-fg-muted"
                              >
                                 {label}
                              </span>
                           ))}
                        </div>

                        {(state === "loading" ? SKELETON_WEEKS : weeks).map(
                           (week, w) => (
                              <div
                                 key={week.id}
                                 className="flex flex-col gap-0.75 md:gap-1"
                              >
                                 {week.days.map((day, d) => {
                                    if (!day) {
                                       return (
                                          <div
                                             key={`${week.id}-${WEEKDAY_LABELS[d].id}`}
                                             className={`h-2.5 w-2.5 md:h-3.5 md:w-3.5 shrink-0 rounded-sm ${
                                                state === "loading"
                                                   ? "animate-pulse bg-fg-primary/6"
                                                   : ""
                                             }`}
                                          />
                                       );
                                    }
                                    const opacity =
                                       LEVEL_OPACITY[day.level] ?? 0;
                                    return (
                                       <div
                                          key={day.date}
                                          title={`${day.count} contribution${
                                             day.count === 1 ? "" : "s"
                                          } on ${day.date}`}
                                          className="h-2.5 w-2.5 md:h-3.5 md:w-3.5 shrink-0 rounded-sm transition-transform duration-200 hover:scale-125"
                                          style={{
                                             backgroundColor: `rgba(var(--accent-rgb), ${
                                                opacity === 0 ? 0.07 : opacity
                                             })`,
                                             boxShadow:
                                                day.level >= 3
                                                   ? "0 0 8px -2px var(--accent-glow)"
                                                   : undefined,
                                          }}
                                       />
                                    );
                                 })}
                              </div>
                           ),
                        )}
                     </div>
                  </div>
               </section>

               {/* Total + intensity legend */}
               <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border-primary/30 pt-3">
                  <span className="font-mono text-[2.5vw] md:text-sm text-fg-secondary">
                     {state === "loading"
                        ? "Loading contributions…"
                        : `${total.toLocaleString()} contributions in the last year`}
                  </span>
                  <div className="flex items-center gap-2">
                     <span className="font-mono text-[2.5vw] md:text-xs text-fg-muted">
                        Less
                     </span>
                     <div className="flex gap-1">
                        {LEVEL_OPACITY.map((opacity) => (
                           <div
                              key={`level-${opacity}`}
                              className="h-[2.5vw] w-[2.5vw] md:h-3 md:w-3 rounded-sm"
                              style={{
                                 backgroundColor: `rgba(var(--accent-rgb), ${
                                    opacity === 0 ? 0.07 : opacity
                                 })`,
                              }}
                           />
                        ))}
                     </div>
                     <span className="font-mono text-[2.5vw] md:text-xs text-fg-muted">
                        More
                     </span>
                  </div>
               </div>
            </>
         )}
      </div>
   );
}
