import { peer, caree, codec, Tic_icon, pinglo, omniai, megic, urlshort, saciva } from '../assets/images';

const experiences = [
    {
        title: 'Full Stack Developer',
        image: saciva,
        company: 'Saciva',
        duration: 'DEC 2024 - Present',
        description: `At Saciva, I develop scalable web applications and design optimized APIs with efficient database
                    management. I implement real-time web notifications using Redis and BullMQ. On the frontend, I build
                    responsive interfaces with Next.js and TailwindCSS. I manage deployments using GitHub Actions, Render,
                    and AWS (EC2, S3, load balancing, etc.).`
    }
]

const projects = [
    {
        title: "OmniAI",
        description: 'Chat with documents and websites through intelligent AI conversations. Get instant answers from your content.',
        tech: ['Next.js', 'Go', 'FastAPI', 'LangChain', 'Redis', 'Pinecone'],
        github: "https://github.com/Rana718/omniai",
        image: omniai
    },
    {
        title: 'CareerWise',
        description: 'AI interview prep with mock sessions, feedback, and guidance. Built with Next.js, prisma and Gemini.',
        tech: ['Next.js', 'Prisma', 'TypeScript', 'Framer Motion', 'Gemini'],
        github: 'https://github.com/Rana718/HireLens',
        demo: 'https://careerw-ise.vercel.app/',
        image: caree
    },
    {
        title: 'PeerDrop',
        description: 'Instant, secure file sharing via peer-to-peer tech with end-to-end encryption. Built with React, Go, and WebSockets.',
        tech: ['React', 'TypeScript', 'Framer Motion', 'Go', 'Gorilla WebSockets'],
        github: 'https://github.com/Rana718/file_sharing',
        demo: 'https://peerdrop-theta.vercel.app/',
        image: peer
    },
    {
        title: 'Snipity',
        description: 'Minimal code editor for creating and sharing snippets easily. Built with Next.js, Convex, Zustand, and Framer Motion.',
        tech: ['Next.js', 'Convex', 'TypeScript', 'Framer Motion', 'Zustand'],
        github: 'https://github.com/Rana718/snipity',
        demo: 'https://snipity.vercel.app/',
        image: codec
    },
    {
        title: 'Magic Pad',
        description: "A creative drawing tool inspired by Apple's calculator sketchpad. Built for fun and interaction.",
        tech: ['React', 'Vite', 'TypeScript', 'FastApI', 'Gemini'],
        github: 'https://github.com/Rana718/MagicPad',
        demo: 'https://magic-pad.vercel.app/',
        image: megic
    },
    {
        title: "URL Shortener",
        description: 'Fast, in-memory URL shortener using BigCache for quick link generation. Built with React, Go, and Docker.',
        tech: ['React', 'Vite', 'TypeScript', 'Go', 'Fiber', 'Docker'],
        github: "https://github.com/Luciferair/link-shortner",
        demo: "https://shortify-link-shortener.vercel.app/",
        image: urlshort
    },
    {
        title: "Tic Tac Toe Game",
        description: 'Modern Tic Tac Toe with bot, offline, and online multiplayer using Socket.IO and Redis.',
        tech: ['React', 'Vite', 'Framer Motion', 'Socket.IO', 'Express',],
        github: "https://github.com/Rana718/tic-tac-toe",
        demo: "https://tic-tac-toe-pink-nine.vercel.app/",
        image: Tic_icon
    },
];


const skills = [
    // Languages
    "JavaScript", "TypeScript", "Python", "Golang",

    // Frameworks & Libraries
    "Next.js", "React", "React Native", "Node.js",
    "FastAPI", "Flask", "Fiber",

    // Databases & BaaS
    // "PostgreSQL", "MongoDB",
    "Prisma", "Redis", "Convex", "Supabase",


    // DevOps & Cloud
    "Docker", "AWS", "Kafka", "CI/CD",

    // // Tools
    // "Git",
];


export {
    experiences,
    projects,
    skills
}