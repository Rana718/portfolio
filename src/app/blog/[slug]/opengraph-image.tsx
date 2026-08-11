import { ImageResponse } from "next/og";
import { getBlogBySlug } from "@/lib/blogs";

export const alt = "Rana Dolui engineering article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);
	const title = blog?.title ?? "Engineering Blog";
	const description =
		blog?.description ?? "Practical software engineering notes and deep dives.";

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: "64px 72px",
				background: "#09090b",
				color: "#fafafa",
				fontFamily: "sans-serif",
			}}
		>
			<div style={{ display: "flex", alignItems: "center", gap: 18 }}>
				<div
					style={{
						width: 16,
						height: 16,
						borderRadius: 999,
						background: "#00ff88",
						boxShadow: "0 0 28px #00ff88",
					}}
				/>
				<div style={{ fontSize: 25, color: "#a1a1aa", letterSpacing: 2 }}>
					RANA DOLUI · ENGINEERING BLOG
				</div>
			</div>

			<div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
				<div style={{ fontSize: title.length > 72 ? 48 : 58, lineHeight: 1.08, fontWeight: 750 }}>
					{title}
				</div>
				<div style={{ fontSize: 25, lineHeight: 1.4, color: "#a1a1aa", maxWidth: 1000 }}>
					{description.length > 190 ? `${description.slice(0, 187)}...` : description}
				</div>
			</div>

			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<div style={{ display: "flex", gap: 12 }}>
					{[blog?.category, blog?.language, blog?.level]
						.filter((value): value is string => Boolean(value))
						.map((value) => (
							<div
								key={value}
								style={{
									padding: "9px 16px",
									border: "1px solid #3f3f46",
									borderRadius: 999,
									fontSize: 19,
									color: "#d4d4d8",
								}}
							>
								{value}
							</div>
						))}
				</div>
				<div style={{ fontSize: 22, color: "#00ff88" }}>ranadolui.me</div>
			</div>
		</div>,
		size,
	);
}
