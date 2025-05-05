import { peer, caree, codec, Tic_icon, pinglo, megic, urlshort } from '../assets/images';

const experiences = [
    {
        title: 'Full Stack Developer',
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
        title: 'CareerWise',
        description: 'CareerWise is your go-to AI assistant for interview preparation. It offers realistic mock interviews, real-time feedback, and expert guidance to help you improve. Built with Next.js, Prisma, TypeScript, and Gemini, it makes interview practice feel natural and effective, giving you the confidence to ace any job opportunity.',
        tech: ['Next.js', 'Prisma', 'TypeScript', 'Framer Motion', 'Gemini'],
        github: 'https://github.com/Rana718/HireLens',
        demo: 'https://careerw-ise.vercel.app/',
        image: caree
    },
    {
        title: 'PeerDrop',
        description: "PeerDrop lets you share files instantly and securely without needing any third-party servers. Using peer-to-peer technology with end-to-end encryption, it ensures your files are transferred safely in real time. Built with React, TypeScript, Go, and Gorilla WebSockets, it's a fast and reliable way to share anything without hassle.",
        tech: ['React', 'TypeScript', 'Framer Motion', 'Go', 'Gorilla WebSockets'],
        github: 'https://github.com/Rana718/file_sharing',
        demo: 'https://peerdrop-theta.vercel.app/',
        image: peer
    },
    {
        title: 'Snipity',
        description: "Snipity is a clean and minimalistic code editor designed for quick snippet creation and sharing. Whether youre debugging, collaborating, or just saving useful code, Snipity provides an intuitive interface with instant sharing. Built with Next.js, Convex, Framer Motion, and Zustand, it delivers a smooth and interactive experience for developers.",
        tech: ['Next.js', 'Convex', 'TypeScript', 'Framer Motion', 'Zustand'],
        github: 'https://github.com/Rana718/snipity',
        demo: 'https://snipity.vercel.app/',
        image: codec
    },
    {
        title: 'Magic Pad',
        description: "A fun, creative tool inspired by Apple's drawing calculator. I built it for experimentation and enjoyment, letting users interact with playful drawing features that combine functionality with creativity.",
        tech: ['React', "Vite", 'TypeScript', "FastApI", "Gemini"],
        github: 'https://github.com/Rana718/MagicPad',
        demo: 'https://magic-pad.vercel.app/',
        image: megic

    },
    {
        title: "URL Shortener",
        description: "A simple yet efficient URL shortener that allows users to convert long URLs into compact, shareable links. It uses BigCache for fast, in-memory storage of shortened URLs, ensuring quick access without the overhead of a database. Designed for performance and simplicity, ideal for lightweight use cases or internal tools.",
        tech: ["React", "Vite", "TypeScript", "Go", "Fiber", "Docker"],
        github: "https://github.com/Luciferair/link-shortner",
        demo: "https://shortify-link-shortener.vercel.app/",
        image: urlshort
    },
    {
        title: "Tic Tac Toe Game",
        description: "A modern Tic Tac Toe game with offline, bot, and online multiplayer modes. Built with React, Tailwind CSS, and Node.js using Socket.IO for real-time gameplay.",
        tech: ["React", "Vite", "Framer Motion", "Socket.IO", "Node.js", "Express", "Redis"],
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
    "PostgreSQL", "MongoDB",
    "Prisma", "Redis", "Convex", "Supabase",

    // DevOps & Cloud
    "Docker", "Kubernetes", "AWS", "Kafka" , "CI/CD",

    // // Tools
    // "Git",
];


export {
    experiences,
    projects,
    skills
}