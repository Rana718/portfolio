import { Helmet } from 'react-helmet-async'

function SEO({
    title = "Rana Dolui - Full Stack & AI Developer | React, Next.js, Go, Python, AI Systems",
    description = "Full Stack & AI Developer skilled in React, Next.js, Go, Python, FastAPI, and building scalable AI-powered applications with modern technologies.",
    keywords = "Rana Dolui, Full Stack Developer, AI Developer, React, Next.js, Go, Python, FastAPI, TypeScript, MongoDB, PostgreSQL, Tailwind, WebSockets, Docker, Vercel, Redis, LangChain, gRPC, RabbitMQ, Portfolio",
    image = "https://ranadolui.me/logo.png",
    url = "https://ranadolui.me/"
}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <link rel="canonical" href={url} />
        </Helmet>
    )
}

export default SEO
