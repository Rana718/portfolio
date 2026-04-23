"use client";
import { useTheme } from "@/lib/theme-provider";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  return (
    <>
      <div
        className="w-16 md:w-24 h-1 mx-auto mb-12 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
        }}
      />
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group relative border border-foreground/20 p-6 rounded-3xl transition-all duration-300"
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
              e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.4)`;
              e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.1)`;
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `linear-gradient(135deg, rgba(${accentRgb}, 0.04), transparent)` }}
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2
                  className="font-bold text-base md:text-lg leading-snug transition-colors duration-300 group-hover:text-(--accent)"
                  style={{ ["--accent" as string]: accentColor }}
                >
                  {post.title}
                </h2>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: accentColor }}
                />
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full border border-foreground/15 text-foreground/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-[11px] text-foreground/40">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
