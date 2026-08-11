"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { BlogMeta } from "@/lib/blogs";
import { Calendar, Clock, Tag, Search, ArrowRight } from "lucide-react";

interface BlogListProps {
	blogs: BlogMeta[];
}

export function BlogList({ blogs }: BlogListProps) {
	const [query, setQuery] = useState("");
	const [activeTag, setActiveTag] = useState<string | null>(null);

	const allTags = useMemo(
		() => Array.from(new Set(blogs.flatMap((b) => b.tags))).sort(),
		[blogs],
	);

	const filtered = useMemo(() => {
		const q = query.toLowerCase().trim();
		return blogs.filter((b) => {
			const matchesQuery =
				!q ||
				b.title.toLowerCase().includes(q) ||
				b.description.toLowerCase().includes(q) ||
				b.tags.some((t) => t.toLowerCase().includes(q));
			const matchesTag = !activeTag || b.tags.includes(activeTag);
			return matchesQuery && matchesTag;
		});
	}, [blogs, query, activeTag]);

	return (
		<div className="space-y-10">
			{/* Search */}
			<div className="relative">
				<Search
					className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
					size={18}
				/>
				<input
					type="text"
					placeholder="Search posts…"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] pl-12 pr-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
				/>
			</div>

			{/* Tag filter */}
			{allTags.length > 0 && (
				<div className="flex flex-wrap gap-2">
					<button
						type="button"
						onClick={() => setActiveTag(null)}
						className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
							!activeTag
								? "bg-[var(--primary)] text-[var(--primary-foreground)]"
								: "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]"
						}`}
					>
						All
					</button>
					{allTags.map((tag) => (
						<button
							key={tag}
							type="button"
							onClick={() => setActiveTag(activeTag === tag ? null : tag)}
							className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
								activeTag === tag
									? "bg-[var(--primary)] text-[var(--primary-foreground)]"
									: "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]"
							}`}
						>
							{tag}
						</button>
					))}
				</div>
			)}

			{/* Count */}
			<p className="text-sm text-[var(--muted-foreground)]">
				{filtered.length} post{filtered.length !== 1 ? "s" : ""}
				{query || activeTag ? " found" : ""}
			</p>

			{/* Cards */}
			{filtered.length === 0 ? (
				<div className="py-20 text-center text-[var(--muted-foreground)]">
					No posts match your search.
				</div>
			) : (
				<ul className="grid gap-6 sm:grid-cols-2">
					{filtered.map((blog) => (
						<li key={blog.slug}>
							<Link
								href={`/blog/${blog.slug}`}
								className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-[var(--primary)] hover:shadow-lg"
							>
								{/* Tags */}
								<div className="mb-4 flex flex-wrap gap-2">
									{blog.category && (
										<span className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--primary)]">
											{blog.category}
										</span>
									)}
									{blog.language && (
										<span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-medium text-[var(--muted-foreground)]">
											{blog.language}
										</span>
									)}
									{blog.tags.slice(0, 3).map((tag) => (
										<span
											key={tag}
											className="flex items-center gap-1 rounded-full bg-[var(--muted)] px-3 py-1 text-[10px] font-medium text-[var(--muted-foreground)]"
										>
											<Tag size={10} />
											{tag}
										</span>
									))}
								</div>

								{/* Title */}
								<h2 className="mb-2 flex-1 text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition leading-snug">
									{blog.title}
								</h2>

								{/* Description */}
								<p className="mb-5 text-sm text-[var(--muted-foreground)] line-clamp-3">
									{blog.description}
								</p>

								{/* Footer */}
								<div className="mt-auto flex items-center justify-between text-xs text-[var(--muted-foreground)]">
									<span className="flex items-center gap-1.5">
										<Calendar size={12} />
										{new Date(blog.date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
										})}
									</span>
									<span className="flex items-center gap-1.5">
										<Clock size={12} />
										{blog.readingTime}
									</span>
									<span className="flex items-center gap-1 font-medium text-[var(--primary)] opacity-0 group-hover:opacity-100 transition">
										Read <ArrowRight size={12} />
									</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
