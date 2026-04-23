"use client";
import { useTheme } from "@/lib/theme-provider";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
};

export default function BlogPostClient({ post }: { post: Post }) {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  return (
    <main className="min-h-screen py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs text-foreground/50 mb-10 transition-colors duration-200 hover:text-foreground"
        >
          <ArrowLeft size={14} />
          BACK TO BLOG
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full border"
                style={{ color: `rgba(${accentRgb}, 0.8)`, borderColor: `rgba(${accentRgb}, 0.3)` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-foreground/60 text-sm leading-relaxed mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-4 text-xs text-foreground/40">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          {/* Divider */}
          <div
            className="mt-8 h-px w-full"
            style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
          />
        </div>

        {/* Content */}
        <div className="prose-blog">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4" style={{ color: accentColor }}>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-bold mt-8 mb-3 text-foreground/90">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-4">{children}</p>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.includes("language-");
                return isBlock ? (
                  <code className="block text-xs leading-relaxed text-foreground/80">{children}</code>
                ) : (
                  <code
                    className="text-xs px-1.5 py-0.5 rounded font-mono"
                    style={{ backgroundColor: `rgba(${accentRgb}, 0.1)`, color: accentColor }}
                  >
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre
                  className="text-xs p-4 rounded-2xl overflow-x-auto mb-6 border border-foreground/10"
                  style={{ backgroundColor: theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)" }}
                >
                  {children}
                </pre>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-sm text-foreground/70 mb-4 space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-sm text-foreground/70 mb-4 space-y-1">{children}</ol>
              ),
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground/90">{children}</strong>
              ),
              blockquote: ({ children }) => (
                <blockquote
                  className="border-l-2 pl-4 my-4 text-foreground/60 italic"
                  style={{ borderColor: accentColor }}
                >
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-xs border-collapse">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th
                  className="text-left px-3 py-2 font-semibold border-b"
                  style={{ borderColor: `rgba(${accentRgb}, 0.3)`, color: accentColor }}
                >
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-3 py-2 border-b border-foreground/10 text-foreground/70">{children}</td>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <div
          className="mt-12 pt-8 border-t border-foreground/10 flex justify-between items-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs transition-colors duration-200"
            style={{ color: accentColor }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ArrowLeft size={14} />
            All Posts
          </Link>
          <span className="text-xs text-foreground/30">Rana Dolui</span>
        </div>
      </div>
    </main>
  );
}
