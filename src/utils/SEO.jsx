import { Helmet } from 'react-helmet-async'

function SEO({
    title = "Rana Dolui - Full Stack Developer | React, Next.js, Go, Python Expert | Hire Now",
    description = "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS. Built OmniAI, CareerWise, PeerDrop. Available for hire in Kolkata, India.",
    keywords = "Rana Dolui, Full Stack Developer, React Developer, Next.js Developer, Go Developer, Python Developer, JavaScript Expert, TypeScript, AI ML Developer, Web Developer Kolkata, Hire Full Stack Developer, React Native, FastAPI, Docker, AWS, Kubernetes, Software Engineer India, Freelance Developer",
    image = "https://ranadolui.me/logo.png",
    url = "https://ranadolui.me/",
    type = "website"
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rana Dolui",
        "jobTitle": "Full Stack Developer",
        "description": description,
        "url": url,
        "image": image,
        "sameAs": [
            "https://github.com/Rana718",
            "https://www.linkedin.com/in/rana-dolui-89357728a/",
            "https://x.com/jack718r"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "addressCountry": "IN"
        },
        "email": "ranadolui718@gmail.com",
        "knowsAbout": ["JavaScript", "TypeScript", "React", "Next.js", "Go", "Python", "Node.js", "FastAPI", "React Native", "Docker", "Kubernetes", "AWS", "PostgreSQL", "MongoDB", "Redis", "AI/ML", "LangChain"],
        "workExample": [
            {"@type": "CreativeWork", "name": "OmniAI", "url": "https://github.com/Rana718/omniai"},
            {"@type": "CreativeWork", "name": "CareerWise", "url": "https://careerw-ise.vercel.app/"}
        ]
    }

    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Rana Dolui" />
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Rana Dolui Portfolio" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content="@Ranad187" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <link rel="canonical" href={url} />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
    )
}

export default SEO
