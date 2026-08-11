import { MDXRemote } from "next-mdx-remote/rsc";
import type { Options as PrettyCodeOptions } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { MermaidDiagram } from "./MermaidDiagram";

const prettyCodeOptions: PrettyCodeOptions = {
	theme: "tokyo-night",
	keepBackground: false,
	defaultLang: {
		block: "text",
		inline: "text",
	},
	grid: true,
	// Keep blank lines at their full height after Shiki tokenises the block.
	onVisitLine(element) {
		if (element.children.length === 0) {
			element.children.push({ type: "text", value: " " });
		}
	},
};

type MdastNode = {
	type: string;
	lang?: string;
	value?: string;
	children?: MdastNode[];
};

function remarkMermaid() {
	return (tree: MdastNode) => {
		const transform = (node: MdastNode) => {
			if (!node.children) return;

			node.children = node.children.map((child) => {
				if (child.type === "code" && child.lang === "mermaid") {
					return {
						type: "mdxJsxFlowElement",
						name: "Mermaid",
						attributes: [
							{
								type: "mdxJsxAttribute",
								name: "chart",
								value: child.value ?? "",
							},
						],
						children: [],
					} as MdastNode;
				}

				transform(child);
				return child;
			});
		};

		transform(tree);
	};
}

// Custom MDX components — all server-safe (no hooks)
const components = {
	Mermaid: MermaidDiagram,
	h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			className="mt-12 mb-5 scroll-mt-24 text-3xl font-bold text-[var(--foreground)]"
			{...props}
		/>
	),
	h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className="mt-10 mb-4 scroll-mt-24 text-2xl font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-2"
			{...props}
		/>
	),
	h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className="mt-8 mb-3 scroll-mt-24 text-xl font-semibold text-[var(--foreground)]"
			{...props}
		/>
	),
	h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className="mt-6 mb-2 text-lg font-semibold text-[var(--foreground)]"
			{...props}
		/>
	),
	p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className="my-5 leading-7 text-[var(--muted-foreground)]" {...props} />
	),
	a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a
			className="text-[var(--primary)] underline underline-offset-4 hover:opacity-75 transition"
			target={props.href?.startsWith("http") ? "_blank" : undefined}
			rel={
				props.href?.startsWith("http") ? "noopener noreferrer" : undefined
			}
			{...props}
		/>
	),
	ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
		<ul
			className="my-5 ml-6 list-disc space-y-2 text-[var(--muted-foreground)]"
			{...props}
		/>
	),
	ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
		<ol
			className="my-5 ml-6 list-decimal space-y-2 text-[var(--muted-foreground)]"
			{...props}
		/>
	),
	li: (props: React.HTMLAttributes<HTMLLIElement>) => (
		<li className="leading-7" {...props} />
	),
	blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
		<blockquote
			className="my-6 border-l-4 border-[var(--primary)] pl-5 italic text-[var(--muted-foreground)] bg-[var(--muted)]/30 py-3 rounded-r-lg"
			{...props}
		/>
	),
	// rehype-pretty-code wraps code blocks in <figure data-rehype-pretty-code-figure>
	figure: (props: React.HTMLAttributes<HTMLElement>) => (
		<figure
			className="not-prose my-6 overflow-hidden rounded-xl border border-[var(--border)] shadow-lg"
			{...props}
		/>
	),
	// Language label bar
	figcaption: (props: React.HTMLAttributes<HTMLElement>) => (
		<figcaption
			className="flex items-center gap-2 border-b border-white/10 bg-[#1a1b26] px-5 py-2.5 font-mono text-xs text-[#a9b1d6]/70"
			{...props}
		/>
	),
	pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
		<pre
			className="overflow-x-auto p-5 text-sm leading-6 [&>code]:block [&>code]:min-w-max [&>code]:bg-transparent [&>code]:p-0"
			{...props}
		/>
	),
	// Inline code (not inside a pre block)
	code: (props: React.HTMLAttributes<HTMLElement>) => (
		<code {...props} />
	),
	table: (props: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
			<table
				className="w-full border-collapse text-sm text-[var(--foreground)]"
				{...props}
			/>
		</div>
	),
	thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
		<thead className="bg-[var(--muted)] text-left" {...props} />
	),
	th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
		<th
			className="px-4 py-3 font-semibold text-[var(--foreground)] border-b border-[var(--border)]"
			{...props}
		/>
	),
	td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
		<td
			className="border-b border-[var(--border)] px-4 py-3 text-[var(--muted-foreground)]"
			{...props}
		/>
	),
	hr: () => <hr className="my-10 border-[var(--border)]" />,
	strong: (props: React.HTMLAttributes<HTMLElement>) => (
		<strong className="font-semibold text-[var(--foreground)]" {...props} />
	),
	em: (props: React.HTMLAttributes<HTMLElement>) => (
		<em className="italic text-[var(--muted-foreground)]" {...props} />
	),
};

interface MDXContentProps {
	source: string;
}

export async function MDXContent({ source }: MDXContentProps) {
	return (
		<article className="mdx-content">
			<MDXRemote
				source={source}
				components={components}
				options={{
					mdxOptions: {
						remarkPlugins: [remarkGfm, remarkMermaid],
						rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
					},
				}}
			/>
		</article>
	);
}
