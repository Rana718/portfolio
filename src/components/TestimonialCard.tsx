"use client";
import { Quote, Star } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

interface TestimonialCardProps {
    testimonial: {
        id: number;
        name: string;
        role?: string;
        company?: string;
        content: string;
        rating: number;
    };
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    const { theme } = useTheme();
    const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
    const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

    return (
        <div
            className="group border border-foreground/20 overflow-hidden transition-all duration-500 rounded-xl flex flex-col justify-between bg-background p-5 min-w-85 max-w-85 h-45 relative"
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.4)`;
                e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.1)`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
            }}
        >
            {/* Header */}
            <div>
                <div className="flex items-start justify-between">
                    {/* Left side: Stars and Company */}
                    <div>
                        <div className="flex gap-0.5 mb-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className="transition-colors duration-300"
                                    style={{
                                        fill: accentColor,
                                        color: accentColor,
                                        filter: `drop-shadow(0 0 3px rgba(${accentRgb}, 0.3))`
                                    }}
                                />
                            ))}
                        </div>
                        {testimonial.company && (
                            <p
                                className="font-semibold text-xs tracking-wide transition-colors duration-300"
                                style={{ color: accentColor }}
                            >
                                {testimonial.company}
                            </p>
                        )}
                    </div>

                    {/* Right side: Name and Role */}
                    <div className="text-right">
                        <h4 className="font-semibold text-sm tracking-wide mb-0.5">
                            {testimonial.name}
                        </h4>
                        {testimonial.role && (
                            <p className="text-foreground/50 text-[10px]">
                                {testimonial.role}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Quote mark and Content */}
            <div className="relative mt-4 flex-1">
                <Quote
                    className="absolute -top-0.5 left-0 size-8 opacity-20"
                    style={{ color: accentColor }}
                    aria-hidden
                />
                <p className="line-clamp-4 pt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {testimonial.content}
                </p>
            </div>
        </div>
    );
};
