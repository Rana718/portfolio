import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getBlogBySlug } from "@/lib/blogs";
import { MDXContent } from "@/components/blog/MDXContent";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

interface Params {
	slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
	return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);
	if (!blog) return {};

	const url = `https://ranadolui.me/blog/${slug}`;
	const image = blog.cover
		? `https://ranadolui.me${blog.cover}`
		: "https://ranadolui.me/logo.png";

	return {
		title: `${blog.title} — Rana Dolui`,
		description: blog.description,
		keywords: [...blog.tags, "Rana Dolui", "blog", "technical writing"],
		authors: [{ name: blog.author }],
		alternates: { canonical: url },
		openGraph: {
			type: "article",
			url,
			title: blog.title,
			description: blog.description,
			publishedTime: new Date(blog.date).toISOString(),
			authors: [blog.author],
			tags: blog.tags,
			siteName: "Rana Dolui Portfolio",
			images: [{ url: image, width: 1200, height: 630, alt: blog.title }],
		},
		twitter: {
			card: "summary_large_image",
			site: "@jack718r",
			creator: "@jack718r",
			title: blog.title,
			description: blog.description,
			images: [image],
		},
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<Params>;
}) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);
	if (!blog) notFound();

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: blog.title,
		description: blog.description,
		datePublished: new Date(blog.date).toISOString(),
		dateModified: new Date(blog.date).toISOString(),
		author: {
			"@type": "Person",
			name: blog.author,
			url: "https://ranadolui.me",
		},
		publisher: {
			"@type": "Person",
			name: "Rana Dolui",
			url: "https://ranadolui.me",
		},
		url: `https://ranadolui.me/blog/${slug}`,
		image: blog.cover
			? `https://ranadolui.me${blog.cover}`
			: "https://ranadolui.me/logo.png",
		keywords: blog.tags.join(", "),
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://ranadolui.me/blog/${slug}`,
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<main className="min-h-screen bg-[var(--background)] px-4 py-24 sm:px-8">
				<div className="mx-auto max-w-3xl">
					{/* Back */}
					<Link
						href="/blog"
						className="mb-10 inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition"
					>
						<ArrowLeft size={14} />
						All posts
					</Link>

					{/* Header */}
					<header className="mb-12 space-y-6">
						<div className="flex flex-wrap gap-2">
							{blog.tags.map((tag) => (
								<span
									key={tag}
									className="flex items-center gap-1.5 rounded-full bg-[var(--muted)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]"
								>
									<Tag size={10} />
									{tag}
								</span>
							))}
						</div>

						<h1 className="text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-4xl">
							{blog.title}
						</h1>

						<p className="text-lg text-[var(--muted-foreground)]">
							{blog.description}
						</p>

						<div className="flex flex-wrap items-center gap-6 text-sm text-[var(--muted-foreground)]">
							<span className="flex items-center gap-1.5">
								<Calendar size={14} />
								{new Date(blog.date).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</span>
							<span className="flex items-center gap-1.5">
								<Clock size={14} />
								{blog.readingTime}
							</span>
							<span className="font-medium text-[var(--foreground)]">
								{blog.author}
							</span>
						</div>

						<hr className="border-[var(--border)]" />
					</header>

					{/* MDX Content — rendered server-side with syntax highlighting */}
					<MDXContent source={blog.content} />

					{/* Footer */}
					<footer className="mt-16 pt-8 border-t border-[var(--border)]">
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition"
						>
							<ArrowLeft size={14} />
							Back to all posts
						</Link>
					</footer>
				</div>
			</main>
		</>
	);
}
