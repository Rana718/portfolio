
import { peer, caree, codec, Tic_icon } from '../assets/images';

const experiences = [
    {
        title: 'Full Stack Developer',
        company: 'Saciva',
        duration: 'DEC 2024 - Present',
        description: " At Saciva, I develop scalable web applications, design and optimize APIs, and manage databases efficiently I implement real-time web notifications and enhance performance using Redis and BullMQ. On the frontend, I build responsive interfaces with Next.js and TailwindCSS, and I streamline deployment processes using GitHub Actions and Render."
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
        description: "Snipity is a clean and minimalistic code editor designed for quick snippet creation and sharing. Whether you’re debugging, collaborating, or just saving useful code, Snipity provides an intuitive interface with instant sharing. Built with Next.js, Convex, Framer Motion, and Zustand, it delivers a smooth and interactive experience for developers.",
        tech: ['Next.js', 'Convex', 'TypeScript', 'Framer Motion', 'Zustand'],
        github: 'https://github.com/Rana718/snipity',
        demo: 'https://snipity.vercel.app/',
        image: codec
    },
    {
        title: "Tic Tac Toe Game",
        description: "A modern Tic Tac Toe game with offline, bot, and online multiplayer modes. Built with React, Tailwind CSS, and Node.js using Socket.IO for real-time gameplay.",
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Socket.IO", "Node.js", "Express", "Redis"],
        github: "https://github.com/Rana718/tic-tac-toe",
        demo: "https://tic-tac-toe-pink-nine.vercel.app/",
        image: Tic_icon
    }
    
];

const skills = [
    // Languages
    "JavaScript", "TypeScript", "Python", "Golang",

    // Frameworks & Libraries
    "Next.js", "React", "React Native", "Express.js", "Hono.js", "NestJS",
    "FastAPI", "Flask", "Django", "Fiber",

    // Databases & BaaS
    "PostgreSQL", "MongoDB", "Firebase",
    "Prisma", "Drizzle", "Redis", "DuckDB", "Convex", "Supabase",

    // DevOps & Cloud
    "Docker", "Kubernetes", "AWS", "Kafka",

    // Tools
    "Git",
];


export {
    experiences,
    projects,
    skills
}