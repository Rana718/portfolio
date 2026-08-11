import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blogs";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
	title: "Blog — Rana Dolui | Systems, Rust, Web & Engineering",
	description:
		"Technical deep-dives on Rust systems programming, concurrent data structures, web architecture, and engineering from Rana Dolui.",
	keywords: [
		"Rana Dolui Blog",
		"Rust programming",
		"concurrent hashmap",
		"lock-free data structures",
		"systems programming",
		"Next.js",
		"Go",
		"web development",
	],
	alternates: { canonical: "https://ranadolui.me/blog" },
	openGraph: {
		type: "website",
		url: "https://ranadolui.me/blog",
		title: "Blog — Rana Dolui",
		description:
			"Technical deep-dives on Rust, systems programming, concurrent data structures, and web engineering.",
		siteName: "Rana Dolui Portfolio",
		images: [{ url: "https://ranadolui.me/logo.png", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		site: "@jack718r",
		creator: "@jack718r",
		title: "Blog — Rana Dolui",
		description:
			"Technical deep-dives on Rust, systems programming, concurrent data structures, and web engineering.",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Blog",
	name: "Rana Dolui's Blog",
	description:
		"Technical deep-dives on systems programming, Rust, concurrent data structures, and modern web engineering.",
	url: "https://ranadolui.me/blog",
	author: {
		"@type": "Person",
		name: "Rana Dolui",
		url: "https://ranadolui.me",
	},
};

export default function BlogPage() {
	const blogs = getAllBlogs();

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<main className="min-h-screen bg-[var(--background)] px-4 py-24 sm:px-8">
				<div className="mx-auto max-w-4xl">
					{/* Header */}
					<div className="mb-14 space-y-4">
						<p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
							Writing
						</p>
						<h1 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
							Blog
						</h1>
						<p className="max-w-2xl text-[var(--muted-foreground)]">
							Long-form technical writing on Rust systems internals, concurrent
							data structures, web architecture, and everything I build or break.
						</p>
					</div>

					<BlogList blogs={blogs} />
				</div>
			</main>
		</>
	);
}
