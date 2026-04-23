import { readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

function getBlogPosts() {
  const file = join(process.cwd(), "public", "data", "blog.json");
  return JSON.parse(readFileSync(file, "utf-8"));
}

export function generateStaticParams() {
  return getBlogPosts().map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPosts().find((p: { slug: string }) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Rana Dolui`,
    description: post.excerpt,
    alternates: { canonical: `https://ranadolui.me/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPosts().find((p: { slug: string }) => p.slug === slug);
  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
