import { peer, caree, codec, Tic_icon, pinglo, omniai, megic, urlshort, saciva, khelratna, fitly, graft, aiapp, newsapp } from '../assets/images';

const experiences = [
    {
        title: 'Full Stack Developer',
        image: saciva,
        company: 'Saciva',
        duration: 'DEC 2024 - Present',
        description: `At Saciva, I work as a Full Stack Developer, focusing on both frontend and backend development, while also managing the complete DevOps setup. The 
        frontend is deployed on Vercel, and the backend is hosted on Hostinger with zero downtime during updates. For the frontend, we use Next.js with DuckDB, and for the backend, Express.js 
        along with other supporting technologies. I containerized the application using Docker and configured Nginx to ensure scalability. Additionally, I implemented a robust monitoring system using Sentry, Grafana, and Prometheus.`
    }
];

const projects = [
    {
        id: 1,
        title: "OmniAI",
        description: 'Chat with documents and websites through intelligent AI conversations. Get instant answers from your content.',
        longDescription: 'OmniAI is an advanced AI-powered platform that enables users to have intelligent conversations with their documents and websites. Built with cutting-edge technologies like LangChain and Pinecone for vector storage, it provides instant, contextual answers from your content. The platform features real-time processing, secure document handling, and seamless integration with various file formats.',
        tech: ['Next.js', 'Go', 'FastAPI', 'LangChain', 'Redis', 'Pinecone'],
        category: 'AI/ML',
        github: "https://github.com/Rana718/omniai",
        image: omniai,
        featured: true,
        status: 'completed'
    },
    {
        id: 2,
        title: 'CareerWise',
        description: 'AI interview prep with mock sessions, feedback, and guidance. Built with Next.js, prisma and Gemini.',
        longDescription: 'CareerWise is a comprehensive AI-powered interview preparation platform that helps job seekers practice and improve their interview skills. It features mock interview sessions, real-time feedback, personalized guidance, and performance analytics. Built with modern technologies for a seamless user experience.',
        tech: ['Next.js', 'Prisma', 'TypeScript', 'Framer Motion', 'Gemini'],
        category: 'Web App',
        github: 'https://github.com/Rana718/HireLens',
        demo: 'https://careerw-ise.vercel.app/',
        image: caree,
        featured: true,
        status: 'completed'
    },
    {
        id: 3,
        title: 'PeerDrop',
        description: 'Instant, secure file sharing via peer-to-peer tech with end-to-end encryption. Built with React, Go, and WebSockets.',
        longDescription: 'PeerDrop revolutionizes file sharing with peer-to-peer technology and end-to-end encryption. No file size limits, no server storage, just direct, secure transfers between devices. Built with React frontend and Go backend using WebSockets for real-time communication.',
        tech: ['React', 'TypeScript', 'Framer Motion', 'Go', 'Gorilla WebSockets'],
        category: 'Web App',
        github: 'https://github.com/Rana718/file_sharing',
        demo: 'https://peerdrop-theta.vercel.app/',
        image: peer,
        featured: true,
        status: 'completed'
    },
    {
        id: 4,
        title: 'KhelRatna',
        description: 'Cricket tournament management platform with live score tracking and YouTube match streaming.',
        longDescription: 'KhelRatna is a dedicated platform for hosting and managing cricket tournaments. Organizers can create and manage tournaments, update scores in real time, and provide detailed statistics. Players and teams can track their performances, while audiences can follow live scores and even watch tournament matches streamed directly through YouTube integration. Built with a modern stack, it ensures a seamless and engaging experience for both participants and fans.',
        tech: ['Next.js', 'Clerk', 'Prisma', 'TypeScript', 'Framer Motion', 'TailwindCSS'],
        category: 'Mobile App',
        github: 'https://github.com/Rana718/khelratna_user',
        // demo: '',
        image: khelratna,
        featured: true,
        status: 'completed'
    },
    {
        id: 5,
        title: 'Graft',
        description: 'A Go-based database migration CLI tool with smart migrations and multi-database support.',
        longDescription: 'Graft is a production-ready database migration CLI tool built with Go. It offers Prisma-like functionality with support for PostgreSQL, MySQL, and SQLite. 🔄 Smart migrations, 💾 automatic backups, and the ability to run raw SQL code.',
        tech: ['Go', 'Cobra', 'PostgreSQL', 'MySQL', 'SQLite', 'Viper'],
        category: 'Creative Tool',
        github: 'https://github.com/Rana718/Graft',
        image: graft,
        featured: true,
        status: 'completed'
    },
    {
        id: 6,
        title: 'NewsApp',
        description: 'A news aggregator app that fetches the latest news from various sources using NewsAPI.',
        longDescription: 'NewsApp is a modern news aggregator that pulls the latest articles from multiple sources using the NewsAPI. It features a clean, responsive design with categories for easy navigation, and allows users to search for specific topics. Built with Next.js and TailwindCSS, it provides a seamless user experience with fast loading times and smooth transitions.',
        tech: ['React Native', 'expo', 'TypeScript', 'NativeWind', 'NewsAPI'],
        category: 'Mobile App',
        github: 'https://github.com/Rana718/NewsApp',
        image: newsapp,
        featured: true,
        status: 'completed'
    },
    {
        id: 7,
        title: 'Snipity',
        description: 'Minimal code editor for creating and sharing snippets easily. Built with Next.js, Convex, Zustand, and Framer Motion.',
        longDescription: 'Snipity is a modern, minimal code editor designed for developers to create, edit, and share code snippets effortlessly. Features syntax highlighting, real-time collaboration, snippet organization, and seamless sharing capabilities. Built with Next.js and powered by Convex for real-time data synchronization.',
        tech: ['Next.js', 'Convex', 'TypeScript', 'Framer Motion', 'Zustand'],
        category: 'Web App',
        github: 'https://github.com/Rana718/snipity',
        demo: 'https://snipity.vercel.app/',
        image: codec,
        featured: false,
        status: 'completed'
    },
    {
        id: 8,
        title: 'Fitly',
        description: 'AI-powered web app that helps users find the best jobs based on their skills and interests.',
        longDescription: 'Fitly is an AI-powered web application designed to connect users with the most suitable job opportunities. It also allows users to generate tailored CVs based on job descriptions, making the application process smarter and more efficient.',
        tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Python', 'Selenium', 'Gemini'],
        category: 'Web App',
        github: 'https://github.com/Rana718/Fitly',
        image: fitly,
        featured: false,
        status: 'not completed'
    },
    {
        id: 9,
        title: "Pinglo",
        description: 'Real-time chat application with modern UI and seamless messaging experience.',
        longDescription: 'Pinglo is a real-time chat application built for modern communication needs. Features include instant messaging, group chats, file sharing, emoji reactions, and user presence indicators. Built with React and Socket.IO for real-time communication.',
        tech: ['React', 'Socket.IO', 'Node.js', 'MongoDB'],
        category: 'Web App',
        github: "https://github.com/Rana718/pinglo",
        // demo: "https://pinglo-chat.vercel.app/",
        image: pinglo,
        featured: false,
        status: 'not completed'
    },
    {
        id: 10,
        title: 'AI App',
        description: 'A simple AI app where user can generate images and text using Gemini.',
        longDescription: 'AI App is a simple yet powerful application that allows users to generate images and text using the Gemini AI model. It features a user-friendly interface, real-time generation capabilities, and supports various input formats for both text and image generation.',
        tech: ['React Native', 'expo', 'clerk', 'TypeScript', 'NativeWind', 'Gemini'],
        category: 'Mobile App',
        github: 'https://github.com/Rana718/Image_AI_App',
        image: aiapp,
        featured: false,
        status: 'completed'
    },
    {
        id: 11,
        title: 'Magic Pad',
        description: "A creative drawing tool inspired by Apple's calculator sketchpad. Built for fun and interaction.",
        longDescription: "Magic Pad is an innovative drawing application inspired by Apple's calculator sketchpad feature. It combines creativity with AI, allowing users to draw and interact with their sketches in unique ways. Features include gesture recognition, AI-powered sketch analysis, and interactive drawing tools.",
        tech: ['React', 'Vite', 'TypeScript', 'FastAPI', 'Gemini'],
        category: 'Creative Tool',
        github: 'https://github.com/Rana718/MagicPad',
        demo: 'https://magic-pad.vercel.app/',
        image: megic,
        featured: false,
        status: 'completed'
    },
    {
        id: 12,
        title: "URL Shortener",
        description: 'Fast, in-memory URL shortener using BigCache for quick link generation. Built with React, Go, and Docker.',
        longDescription: 'A high-performance URL shortening service built with Go and React. Features in-memory caching with BigCache for lightning-fast redirects, analytics tracking, custom short URLs, and bulk URL processing. Containerized with Docker for easy deployment and scaling.',
        tech: ['React', 'Vite', 'TypeScript', 'Go', 'Fiber', 'Docker'],
        category: 'Web App',
        github: "https://github.com/Luciferair/link-shortner",
        demo: "https://shortify-link-shortener.vercel.app/",
        image: urlshort,
        featured: true,
        status: 'completed'
    },
    {
        id: 13,
        title: "Tic Tac Toe Game",
        description: 'Modern Tic Tac Toe with bot, offline, and online multiplayer using Socket.IO and Redis.',
        longDescription: 'A modern take on the classic Tic Tac Toe game featuring multiple game modes including AI bot, offline play, and real-time online multiplayer. Built with React and Socket.IO for seamless real-time gameplay, Redis for session management, and beautiful animations with Framer Motion.',
        tech: ['React', 'Vite', 'Framer Motion', 'Socket.IO', 'Express'],
        category: 'Game',
        github: "https://github.com/Rana718/tic-tac-toe",
        // demo: "https://tic-tac-toe-pink-nine.vercel.app/",
        image: Tic_icon,
        featured: false,
        status: 'completed'
    },
];

const getFeaturedProjects = () => projects.filter(project => project.featured).slice(0, 6);

const getProjectsByCategory = (category) => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
};

const getCategories = () => {
    const categories = ['all', ...new Set(projects.map(project => project.category))];
    return categories;
};

const skills = [
    // Languages
    "JavaScript", "TypeScript", "Python", "Golang",

    // Frameworks & Libraries
    "Next.js", "React", "React Native", "Node.js",
    "FastAPI", "Flask", "Fiber",

    // Databases & BaaS
    "Prisma", "Redis", "Convex", "Supabase",

    // DevOps & Cloud
    "Docker", "AWS", "Kafka", "CI/CD",
];

export {
    experiences,
    projects,
    skills,
    getFeaturedProjects,
    getProjectsByCategory,
    getCategories
};
