import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOGS_DIR = path.join(process.cwd(), "src/content/blogs");

export interface BlogMeta {
	slug: string;
	title: string;
	description: string;
	date: string;
	updated?: string;
	tags: string[];
	author: string;
	category?: string;
	language?: string;
	level?: string;
	cover?: string;
	readingTime: string;
}

export interface Blog extends BlogMeta {
	content: string;
}

function parseBlogFile(filename: string): Blog {
	const fullPath = path.join(BLOGS_DIR, filename);
	const raw = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(raw);
	const slug = filename.replace(/\.mdx?$/, "");
	const rt = readingTime(content);

	return {
		slug: (data.slug as string) || slug,
		title: data.title as string,
		description: data.description as string,
		date: data.date as string,
		updated: data.updated as string | undefined,
		tags: (data.tags as string[]) || [],
		author: (data.author as string) || "Rana Dolui",
		category: data.category as string | undefined,
		language: data.language as string | undefined,
		level: data.level as string | undefined,
		cover: data.cover as string | undefined,
		readingTime: rt.text,
		content,
	};
}

export function getAllBlogs(): BlogMeta[] {
	if (!fs.existsSync(BLOGS_DIR)) return [];

	return fs
		.readdirSync(BLOGS_DIR)
		.filter((f) => /\.mdx?$/.test(f))
		.map((f) => {
			const blog = parseBlogFile(f);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { content: _, ...meta } = blog;
			return meta;
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): Blog | null {
	if (!fs.existsSync(BLOGS_DIR)) return null;

	const files = fs.readdirSync(BLOGS_DIR).filter((f) => /\.mdx?$/.test(f));

	for (const file of files) {
		const blog = parseBlogFile(file);
		if (blog.slug === slug) return blog;
	}
	return null;
}

export function getAllSlugs(): string[] {
	if (!fs.existsSync(BLOGS_DIR)) return [];
	return fs
		.readdirSync(BLOGS_DIR)
		.filter((f) => /\.mdx?$/.test(f))
		.map((f) => {
			const raw = fs.readFileSync(path.join(BLOGS_DIR, f), "utf8");
			const { data } = matter(raw);
			return (data.slug as string) || f.replace(/\.mdx?$/, "");
		});
}
