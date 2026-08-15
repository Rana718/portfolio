"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export interface BlogPreviewItem {
   slug: string;
   title: string;
   description: string;
   date: string;
   category?: string;
   language?: string;
   readingTime: string;
}

interface BlogPreviewSectionProps {
   blogs: BlogPreviewItem[];
}

export function BlogPreviewSection({ blogs }: BlogPreviewSectionProps) {
   if (blogs.length === 0) return null;

   return (
      <Container className="py-[12vw] md:py-20">
         <SectionHeading number="05" title="Engineering Writing" />

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3vw] md:gap-4">
            {blogs.map((blog, i) => (
               <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
               >
                  <Link
                     href={`/blog/${blog.slug}`}
                     className="group flex flex-col h-full rounded-xl border border-border-primary bg-bg-secondary/40 p-[5vw] md:p-6 transition-all hover:border-accent/30 hover:bg-bg-secondary"
                  >
                     <div className="mb-[2vw] md:mb-3 flex flex-wrap gap-[1vw] md:gap-1.5">
                        {blog.category && (
                           <span className="rounded-full bg-accent/10 px-[2vw] md:px-2.5 py-[0.5vw] md:py-0.5 font-mono text-[2vw] md:text-[10px] uppercase text-accent">
                              {blog.category}
                           </span>
                        )}
                        {blog.language && (
                           <span className="rounded-full border border-border-primary px-[2vw] md:px-2.5 py-[0.5vw] md:py-0.5 font-mono text-[2vw] md:text-[10px] uppercase text-fg-muted">
                              {blog.language}
                           </span>
                        )}
                     </div>

                     <h3 className="font-black text-[4vw] md:text-base leading-[1.15] mb-[2vw] md:mb-2 group-hover:text-accent transition-colors">
                        {blog.title}
                     </h3>

                     <p className="text-[2.8vw] md:text-sm text-fg-secondary leading-relaxed line-clamp-3 mb-[3vw] md:mb-4 flex-1">
                        {blog.description}
                     </p>

                     <div className="mt-auto flex items-center justify-between text-[2.2vw] md:text-xs text-fg-muted">
                        <span className="flex items-center gap-[1vw] md:gap-1">
                           <Calendar size={12} />
                           {new Date(blog.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                           })}
                        </span>
                        <span className="flex items-center gap-[1vw] md:gap-1">
                           <Clock size={12} />
                           {blog.readingTime}
                        </span>
                     </div>
                  </Link>
               </motion.div>
            ))}
         </div>

         <div className="mt-[5vw] md:mt-8 flex justify-center">
            <Link
               href="/blog"
               className="group flex items-center gap-2 rounded-full border border-border-primary px-[5vw] md:px-6 py-[1.5vw] md:py-2 font-mono text-[2.2vw] md:text-xs uppercase tracking-widest text-fg-secondary transition-all hover:border-accent hover:text-accent"
            >
               View All Posts
               <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
               />
            </Link>
         </div>
      </Container>
   );
}
