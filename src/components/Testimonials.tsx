"use client";
import { testimonials } from "@/lib/data";
import { TestimonialCard } from "./TestimonialCard";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme-provider";

export const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();

    const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
    const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Split testimonials into two rows
    const firstRow = testimonials.slice(0, 5);
    const secondRow = testimonials.slice(5, 10);

    return (
        <section
            ref={sectionRef}
            className="max-w-screen mx-auto text-center py-20 lg:py-32 overflow-hidden"
            id="testimonials"
        >
            <div className="px-4 md:px-8">
                <h2
                    className={`text-3xl md:text-5xl font-bold tracking-wide mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    CLIENT FEEDBACK
                </h2>
                <div
                    className={`w-16 md:w-24 h-1 mx-auto mb-6 md:mb-8 rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                    style={{
                        background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                        boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
                    }}
                />
                <p
                    className={`text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    What clients say about working with me
                </p>
            </div>

            {/* First row - scrolling right to left */}
            <div className="relative mb-6">
                <div className="scroll-container">
                    <div className="scroll-content scroll-right-to-left">
                        {[...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
                            <div key={`${testimonial.id}-${index}`} className="px-3">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Second row - scrolling left to right */}
            <div className="relative">
                <div className="scroll-container">
                    <div className="scroll-content scroll-left-to-right">
                        {[...secondRow, ...secondRow, ...secondRow].map((testimonial, index) => (
                            <div key={`${testimonial.id}-${index}`} className="px-3">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gradient overlays on sides */}
            <div
                className="pointer-events-none fixed left-0 top-0 bottom-0 w-32 z-10"
                style={{
                    background: `linear-gradient(to right, rgb(var(--background-rgb)), transparent)`,
                }}
            />
            <div
                className="pointer-events-none fixed right-0 top-0 bottom-0 w-32 z-10"
                style={{
                    background: `linear-gradient(to left, rgb(var(--background-rgb)), transparent)`,
                }}
            />
        </section>
    );
};
