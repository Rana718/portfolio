export const experiences = [
   {
      title: "Freelance Developer",
      company: "Self-Employed",
      type: "Freelance",
      duration: "NOV 2025 - Present",
      description: `As a freelance developer, I build full-stack web and mobile applications for clients across various industries. I specialize in creating scalable, production-ready solutions using modern technologies like Next.js, React Native, FastAPI, and Go.`,
      image: "/company/frees.png",
   },
   {
      title: "Python Developer",
      company: "Telohive",
      type: "Part-time",
      duration: "DEC 2025 - Feb 2026",
      description:
         "At Telo, I handle backend development and AI agent systems, primarily using FastAPI, Redis, and PostgreSQL. I build AI-driven features with LangChain and OpenAI to enable automation and intelligent workflows. I also manage deployments on VPS using Docker and GitHub Actions, ensuring system stability and reliability.",
      image: "/company/telo.png",
   },
   {
      title: "Full Stack Developer",
      type: "Full-time",
      company: "Saciva",
      duration: "JAN 2025 - NOV 2025",
      description: `At Saciva, I work as a Full Stack Developer handling frontend, backend, and DevOps. The frontend (Next.js + DuckDB) is deployed on Vercel, and the backend (Express.js) is hosted on Hostinger with zero-downtime updates. I containerized the app with Docker, set up Nginx for scalability, and implemented monitoring using Sentry, Grafana, and Prometheus.`,
      image: "/company/saciva.png",
   },
   {
      title: "React Native Intern",
      type: "Internship",
      company: "HumanEra Intelligence",
      duration: "SEP 2024 - DEC 2024",
      description: `Developed a cross-platform mobile app using React Native and Expo. Implemented user authentication with Clerk and managed state using Zustand for a seamless user experience. Adopted a local-first approach and integrated GraphQL for efficient data handling.`,
      image: "/company/hui.png",
   },
];

export const projects = [
   {
      id: 1,
      title: "AssumioAI",
      description:
         "AI-powered startup idea validation platform that analyzes business ideas, market opportunities, risks, feasibility, and execution strategies through intelligent multi-agent workflows.",
      fullDescription:
         "AI-powered startup validation platform that helps founders analyze ideas through specialized AI agents, evaluating market opportunities, competition, feasibility, risks, and execution strategies before investing time and money.",
      tech: [
         "Next.js",
         "TypeScript",
         "TailwindCSS",
         "Node.js",
         "PostgreSQL",
         "Prisma",
         "OpenAI",
         "LangGraph",
         "Redis",
         "Framer Motion",
      ],
      category: ["Web App", "AI/ML"],
      github: "https://github.com/Rana718/AssumioAI",
      demo: "https://assumioai.ranadolui.me/",
      image: "/projects/assumioai.png",
      featured: true,
   },
   {
      id: 2,
      title: "OmniAI",
      description:
         "Chat with documents and websites through intelligent AI conversations. Get instant answers from your content.",
      fullDescription:
         "OmniAI is an advanced AI-powered platform that enables users to have intelligent conversations with their documents and websites. Built with cutting-edge technologies like LangChain and Pinecone for vector storage, it provides instant, contextual answers from your content. The platform features real-time processing, secure document handling, and seamless integration with various file formats.",
      tech: [
         "Next.js",
         "TypeScript",
         "TailwindCSS",
         "Go",
         "FastAPI",
         "LangChain",
         "Redis",
         "Pinecone",
         "Postgresql",
         "Docker",
         "gRPC",
         "RabbitMQ",
         "nginx",
      ],
      category: ["AI/ML", "Web App"],
      github: "https://github.com/Rana718/omniai",
      demo: "https://omniai-seven.vercel.app/",
      image: "/projects/omniai.png",
      featured: true,
   },
   {
      id: 3,
      title: "CareerWise",
      description:
         "AI interview prep with mock sessions, feedback, and guidance. Built with Next.js, prisma and Gemini.",
      fullDescription:
         "CareerWise is a comprehensive AI-powered interview preparation platform that helps job seekers practice and improve their interview skills. It features mock interview sessions, real-time feedback, personalized guidance, and performance analytics. Built with modern technologies for a seamless user experience.",
      tech: [
         "Next.js",
         "TailwindCSS",
         "Prisma",
         "TypeScript",
         "Postgresql",
         "Framer Motion",
         "Gemini",
      ],
      category: ["Web App", "AI/ML"],
      github: "https://github.com/Rana718/HireLens",
      demo: "https://careerw-ise.vercel.app/",
      image: "/projects/careerwise.png",
      featured: true,
   },
   {
      id: 4,
      title: "AI Resume Builder",
      description:
         "Built AI resume builder with automated CV generation, cover letter creation, payment integration, user management, and analytics dashboard for subscription-based service.",
      longDescription:
         "Full-stack AI-powered resume builder with Next.js frontend and FastAPI backend. Features include CV generation, cover letter creation, LinkedIn integration, payment processing, and admin dashboard with Docker deployment.",
      tech: [
         "NextJS",
         "TypeScript",
         "TailwindCSS",
         "Framer Motion",
         "Zustand",
         "FastAPI",
         "SQLAlchemy",
         "Firebase",
         "Postgresql",
         "Razorpay",
         "Docker",
         "Redis",
         "OpenAI",
      ],
      category: ["Web App", "AI/ML"],
      github: "https://github.com/Rana718/cvbuilder",
      demo: "https://cvbuilder.ranadolui.me/",
      image: "/projects/aicv.png",
      featured: true,
      status: "completed",
   },
   {
      id: 5,
      title: "KhelRatna",
      description:
         "Cricket tournament management platform with live score tracking and YouTube match streaming.",
      fullDescription:
         "KhelRatna is a dedicated platform for hosting and managing cricket tournaments. Organizers can create and manage tournaments, update scores in real time, and provide detailed statistics. Players and teams can track their performances, while audiences can follow live scores and even watch tournament matches streamed directly through YouTube integration.",
      tech: [
         "Next.js",
         "Clerk",
         "Flutter",
         "Prisma",
         "TypeScript",
         "Framer Motion",
         "TailwindCSS",
      ],
      category: ["Mobile App", "Web App"],
      github: "https://github.com/Rana718/khelratna_user",
      demo: "https://play.google.com/store/apps/details?id=com.khelratna.app",
      image: "/projects/khelratna.png",
      featured: true,
   },
   {
      id: 6,
      title: "Passman",
      description:
         "Secure password manager with end-to-end encryption, multi-factor authentication, vault management, zero-trust mode, and recovery keys for account protection.",
      longDescription:
         "A full-stack password manager with end-to-end encryption, multi-factor authentication (TOTP/Email OTP), vault management, zero-trust mode, and 40 recovery keys for secure password reset and account recovery.",
      tech: [
         "SvelteKit",
         "TypeScript",
         "TailwindCSS",
         "Framer Motion",
         "FastAPI",
         "PostgreSQL",
         "SQLAlchemy",
         "Redis",
      ],
      category: ["Web App"],
      github: "https://github.com/Rana718/passman",
      demo: "https://passman-sandy-seven.vercel.app/",
      image: "/projects/passman.png",
      featured: true,
      status: "completed",
   },
   {
      id: 7,
      title: "CPM",
      description:
         "A fast, isolated C/C++ package manager powered by Nix. Like uv for Python, but for C and C++.",
      fullDescription:
         "CPM is a C/C++ package manager built around complete isolation using Nix as the backend for reproducible builds. It supports\n" +
         "header-only and compiled system libraries, parallel downloads, auto-resolves latest GitHub tags, and generates compile_commands.json for\n" +
         "editor LSP. Never pollutes the system — all artifacts stay in .cpm/ and ~/.cpm/cache/.",
      tech: ["C++", "CMake", "Nix", "TOML", "Bash", "Ninja"],
      category: ["Tool"],
      github: "https://github.com/Rana718/cpm",
      demo: "https://cpm.ranadolui.me/",
      image: "/projects/cpm.png",
      featured: false,
      status: "completed",
   },
   {
      id: 8,
      title: "PeerDrop",
      description:
         "Instant, secure file sharing via peer-to-peer tech with end-to-end encryption. Built with React, Go, and WebSockets.",
      fullDescription:
         "PeerDrop revolutionizes file sharing with peer-to-peer technology and end-to-end encryption. No file size limits, no server storage, just direct, secure transfers between devices. Built with React frontend and Go backend using WebSockets for real-time communication.",
      tech: [
         "React",
         "TypeScript",
         "TailwindCSS",
         "Framer Motion",
         "Go",
         "WebSocket",
      ],
      category: ["Web App"],
      github: "https://github.com/Rana718/file_sharing",
      demo: "https://peerdrop-theta.vercel.app/",
      image: "/projects/peerdrop.png",
      featured: false,
      status: "completed",
   },
   {
      id: 9,
      title: "NewsApp",
      description:
         "A news aggregator app that fetches the latest news from various sources using NewsAPI.",
      fullDescription:
         "NewsApp is a modern news aggregator that pulls the latest articles from multiple sources using the NewsAPI. It features a clean, responsive design with categories for easy navigation, and allows users to search for specific topics. Built with Next.js and TailwindCSS, it provides a seamless user experience with fast loading times and smooth transitions.",
      tech: ["React Native", "expo", "TypeScript", "TailwindCSS", "NewsAPI"],
      category: ["Mobile App"],
      github: "https://github.com/Rana718/NewsApp",
      demo: null,
      image: "/projects/newsapp.jpg",
      featured: false,
      status: "completed",
   },
   {
      id: 10,
      title: "Music Mixer",
      description:
         "Advanced PipeWire audio mixer with per-app controls and real-time routing.",
      fullDescription:
         "Music Mixer is a native Linux desktop application built in Rust and GPUI for managing PipeWire audio streams. It enables per-application volume control, mute management, dynamic output routing, and live monitoring of PipeWire nodes, ports, and links. The application automatically restores routing configurations when devices are connected and safely resets audio state on exit. Designed with a modern custom GUI, KernelPilot provides a powerful alternative to traditional Linux audio mixers.",
      tech: ["Rust", "Linux"],
      category: ["Tool"],
      github: "https://github.com/Lumos-Labs-HQ/volume-mixer.git",
      demo: "",
      image: "/projects/mixer.png",
      featured: true,
   },
   {
      id: 11,
      title: "Snipity",
      description:
         "Minimal code editor for creating and sharing snippets easily. Built with Next.js, Convex, Zustand, and Framer Motion.",
      fullDescription:
         "Snipity is a modern, minimal code editor designed for developers to create, edit, and share code snippets effortlessly. Features syntax highlighting, real-time collaboration, snippet organization, and seamless sharing capabilities. Built with Next.js and powered by Convex for real-time data synchronization.",
      tech: ["Next.js", "Convex", "TypeScript", "Framer Motion", "Zustand"],
      category: ["Web App"],
      github: "https://github.com/Rana718/snipity",
      demo: "https://snipity.vercel.app/",
      image: "/projects/codeCraft.png",
      featured: false,
   },
   {
      id: 12,
      title: "Trainer",
      description:
         "Linux CLI tool that launches Windows trainers through the exact Proton version and Wine prefix used by a Steam game.",
      fullDescription:
         "Trainer is a lightweight Linux utility that removes the hassle of running Windows game trainers under Proton. It automatically discovers Steam compatdata prefixes, detects the Proton version assigned to a game, and launches trainers inside the correct environment without manual configuration. Features include interactive game selection, native file picker support, detached launching, DPI scaling management, and compatibility with official Proton, GE-Proton, CachyOS Proton, and other custom builds.",
      tech: ["Go", "Steam", "Proton", "Wine", "Linux"],
      category: ["Tool"],
      github: "https://github.com/Rana718/trainer",
      demo: "",
      image: "/projects/trainer.png",
      featured: false,
      status: "completed",
   },
   {
      id: 13,
      title: "URL Shortener",
      description:
         "Fast, in-memory URL shortener using BigCache for quick link generation. Built with React, Go, and Docker.",
      fullDescription:
         "A high-performance URL shortening service built with Go and React. Features in-memory caching with BigCache for lightning-fast redirects, analytics tracking, custom short URLs, and bulk URL processing. Containerized with Docker for easy deployment and scaling.",
      tech: ["React", "Vite", "TypeScript", "Go", "Fiber", "Redis", "Docker"],
      category: ["Web App"],
      github: "https://github.com/Luciferair/link-shortner",
      demo: "https://shortify-link-shortener.vercel.app/",
      image: "/projects/urlshort.png",
      featured: false,
      status: "completed",
   },
   {
      id: 14,
      title: "Pinglo",
      description:
         "Real-time chat application with modern UI and seamless messaging experience.",
      fullDescription:
         "Pinglo is a real-time chat application built for modern communication needs. Features include instant messaging, group chats, file sharing, emoji reactions, and user presence indicators. Built with React and Socket.IO for real-time communication.",
      tech: [
         "Next.js",
         "Socket.IO",
         "Framer Motion",
         "TailwindCSS",
         "TypeScript",
         "Express",
         "MongoDB",
      ],
      category: ["Web App"],
      github: "https://github.com/Rana718/pinglo",
      demo: null,
      image: "/projects/pinglo.png",
      featured: false,
   },
   {
      id: 15,
      title: "AI App",
      description:
         "A simple AI app where user can generate images and text using Gemini.",
      fullDescription:
         "AI App is a simple yet powerful application that allows users to generate images and text using the Gemini AI model. It features a user-friendly interface, real-time generation capabilities, and supports various input formats for both text and image generation.",
      tech: [
         "React Native",
         "expo",
         "clerk",
         "TypeScript",
         "TailwindCSS",
         "Gemini",
      ],
      category: ["Mobile App", "AI/ML"],
      github: "https://github.com/Rana718/Image_AI_App",
      demo: null,
      image: "/projects/aiapp.jpg",
      featured: false,
      status: "completed",
   },
   {
      id: 16,
      title: "Magic Pad",
      description:
         "A creative drawing tool inspired by Apple's calculator sketchpad. Built for fun and interaction.",
      fullDescription:
         "Magic Pad is an innovative drawing application inspired by Apple's calculator sketchpad feature. It combines creativity with AI, allowing users to draw and interact with their sketches in unique ways. Features include gesture recognition, AI-powered sketch analysis, and interactive drawing tools.",
      tech: ["React", "Vite", "TypeScript", "FastAPI", "Gemini"],
      category: ["Tool", "AI/ML"],
      github: "https://github.com/Rana718/MagicPad",
      demo: "https://magic-pad.vercel.app/",
      image: "/projects/megic.png",
      featured: false,
      status: "completed",
   },
   {
      id: 17,
      title: "Fitly",
      description:
         "AI-powered web app that helps users find the best jobs based on their skills and interests.",
      fullDescription:
         "Fitly is an AI-powered web application designed to connect users with the most suitable job opportunities. It also allows users to generate tailored CVs based on job descriptions, making the application process smarter and more efficient.",
      tech: [
         "Next.js",
         "TypeScript",
         "TailwindCSS",
         "Framer Motion",
         "FastAPI",
         "Postgresql",
         "Python",
         "Selenium",
         "Gemini",
      ],
      category: ["Web App", "AI/ML"],
      github: "https://github.com/Rana718/Fitly",
      demo: null,
      image: "/projects/fitly.png",
      featured: false,
   },
];

export const skills = {
   frontend: {
      title: "FRONTEND",
      tech: "TypeScript, React, Next.js, SvelteKit, Framer Motion",
      description: "Building responsive and interactive user interfaces",
   },
   backend: {
      title: "BACKEND",
      tech: "Node.js, Express, FastAPI, Flask, Go Fiber",
      description: "Scalable server-side applications and APIs",
   },
   mobile: {
      title: "MOBILE",
      tech: "React Native, Expo, Flutter, Kotlin",
      description: "Cross-platform mobile applications",
   },
   database: {
      title: "DATABASE & DEVOPS",
      tech: "PostgreSQL, MongoDB, Redis, Docker, AWS, Kafka, K8s",
      description: "Database management and cloud infrastructure",
   },
};

export const testimonials = [
   {
      id: 1,
      name: "Sarah Johnson",
      content:
         "Working with this developer has been an absolute pleasure. The attention to detail and technical expertise is outstanding. Our project was delivered on time and exceeded expectations.",
      rating: 5,
   },
   {
      id: 2,
      name: "Michael Chen",
      content:
         "Exceptional full-stack development skills! The scalability and performance optimizations implemented were top-notch. Highly recommend for complex projects.",
      rating: 5,
   },
   {
      id: 3,
      name: "Emily Rodriguez",
      content:
         "Transformed our MVP into a production-ready application. The code quality and architecture decisions were spot-on. A true professional!",
      rating: 5,
   },
   {
      id: 4,
      name: "David Kim",
      content:
         "Outstanding problem-solving abilities and deep technical knowledge. The DevOps implementation and CI/CD pipelines were flawlessly executed.",
      rating: 5,
   },
   {
      id: 5,
      name: "Lisa Thompson",
      content:
         "Perfect implementation of our design vision. The animations and user experience are incredibly smooth. Great collaboration throughout the project.",
      rating: 5,
   },
   {
      id: 6,
      name: "James Wilson",
      content:
         "Built our entire platform from scratch with modern tech stack. The scalability and maintainability of the codebase is impressive. Highly skilled developer!",
      rating: 4,
   },
   {
      id: 7,
      name: "Priya Sharma",
      role: "Project Manager",
      company: "Digital Solutions",
      content:
         "Excellent communication and technical execution. The project was delivered with clean documentation and comprehensive testing. Would definitely work again!",
      rating: 5,
   },
   {
      id: 8,
      name: "Robert Anderson",
      content:
         "Impressive expertise in both frontend and backend development. The API architecture and database optimization were particularly well done.",
      rating: 5,
   },
   {
      id: 9,
      name: "Amanda Lee",
      content:
         "Our e-commerce platform performance improved dramatically. The optimization and new features boosted our conversion rate significantly. Amazing work!",
      rating: 5,
   },
   {
      id: 10,
      name: "Chris Martinez",
      content:
         "Deep knowledge of modern web technologies and best practices. The real-time features and state management implementation were perfectly executed.",
      rating: 5,
   },
];

export const services = [
   {
      id: 1,
      title: "Full-Stack Web Apps",
      description:
         "End-to-end development with Next.js, React, Go, and Python. I build fast, scalable web applications with modern architectures.",
      icon: "Globe",
      features: [
         "Responsive UI/UX",
         "REST & GraphQL APIs",
         "Database Design",
         "Cloud Deployment",
      ],
   },
   {
      id: 2,
      title: "AI/ML Integration",
      description:
         "Integrate LLMs, RAG systems, and AI agents to automate workflows and build intelligent features into your products.",
      icon: "Brain",
      features: [
         "LangChain & LangGraph",
         "OpenAI / Gemini",
         "Vector Databases",
         "Agent Systems",
      ],
   },
   {
      id: 3,
      title: "Mobile Apps",
      description:
         "Cross-platform mobile apps built with React Native and Flutter. Fast, native-feeling experiences for iOS and Android.",
      icon: "Smartphone",
      features: [
         "iOS & Android",
         "Expo / RN CLI",
         "Push Notifications",
         "App Store Deploy",
      ],
   },
   {
      id: 4,
      title: "DevOps & Infrastructure",
      description:
         "Docker, Kubernetes, CI/CD pipelines, and monitoring — I handle infrastructure so you can focus on building.",
      icon: "Server",
      features: [
         "Docker & K8s",
         "AWS / GCP",
         "GitHub Actions",
         "Grafana & Prometheus",
      ],
   },
];

export const technologies = [
   {
      name: "TypeScript",
      category: "Languages",
      icon: "SiTypescript",
      color: "#3178C6",
   },
   {
      name: "JavaScript",
      category: "Languages",
      icon: "SiJavascript",
      color: "#F7DF1E",
   },
   {
      name: "Python",
      category: "Languages",
      icon: "SiPython",
      color: "#3776AB",
   },
   { name: "Go", category: "Languages", icon: "SiGo", color: "#00ADD8" },
   { name: "Rust", category: "Languages", icon: "SiRust", color: "#000000" },
   {
      name: "C++",
      category: "Languages",
      icon: "SiCplusplus",
      color: "#00599C",
   },
   {
      name: "Kotlin",
      category: "Languages",
      icon: "SiKotlin",
      color: "#7F52FF",
   },
   { name: "Bash", category: "Languages", icon: "SiGnubash", color: "#4EAA25" },
   { name: "React", category: "Frontend", icon: "SiReact", color: "#61DAFB" },
   {
      name: "Next.js",
      category: "Frontend",
      icon: "SiNextdotjs",
      color: "#000000",
   },
   {
      name: "SvelteKit",
      category: "Frontend",
      icon: "SiSvelte",
      color: "#FF3E00",
   },
   { name: "Vite", category: "Frontend", icon: "SiVite", color: "#646CFF" },
   {
      name: "TailwindCSS",
      category: "Frontend",
      icon: "SiTailwindcss",
      color: "#06B6D4",
   },
   {
      name: "Framer Motion",
      category: "Frontend",
      icon: "SiFramer",
      color: "#0055FF",
   },
   {
      name: "Zustand",
      category: "Frontend",
      icon: "SiZustand",
      color: "currentColor",
   },
   {
      name: "Node.js",
      category: "Backend",
      icon: "SiNodedotjs",
      color: "#339933",
   },
   {
      name: "Express",
      category: "Backend",
      icon: "SiExpress",
      color: "#000000",
   },
   {
      name: "FastAPI",
      category: "Backend",
      icon: "SiFastapi",
      color: "#009688",
   },
   { name: "Flask", category: "Backend", icon: "SiFlask", color: "#000000" },
   { name: "Go Fiber", category: "Backend", icon: "SiGo", color: "#00ADD8" },
   {
      name: "Socket.IO",
      category: "Backend",
      icon: "SiSocketdotio",
      color: "#010101",
   },
   { name: "gRPC", category: "Backend", icon: "SiGrpc", color: "currentColor" },
   {
      name: "GraphQL",
      category: "Backend",
      icon: "SiGraphql",
      color: "#E10098",
   },
   {
      name: "RabbitMQ",
      category: "Backend",
      icon: "SiRabbitmq",
      color: "#FF6600",
   },
   {
      name: "PostgreSQL",
      category: "Database",
      icon: "SiPostgresql",
      color: "#4169E1",
   },
   {
      name: "MongoDB",
      category: "Database",
      icon: "SiMongodb",
      color: "#47A248",
   },
   { name: "Redis", category: "Database", icon: "SiRedis", color: "#DC382D" },
   { name: "Prisma", category: "Database", icon: "SiPrisma", color: "#2D3748" },
   {
      name: "SQLAlchemy",
      category: "Database",
      icon: "SiSqlalchemy",
      color: "#D71F00",
   },
   {
      name: "Firebase",
      category: "Database",
      icon: "SiFirebase",
      color: "#DD2C00",
   },
   { name: "Convex", category: "Database", icon: "SiConvex", color: "#EE342F" },
   { name: "Docker", category: "DevOps", icon: "SiDocker", color: "#2496ED" },
   {
      name: "Kubernetes",
      category: "DevOps",
      icon: "SiKubernetes",
      color: "#326CE5",
   },
   {
      name: "AWS",
      category: "DevOps",
      icon: "SiAmazonwebservices",
      color: "#232F3E",
   },
   { name: "Nginx", category: "DevOps", icon: "SiNginx", color: "#009639" },
   {
      name: "GitHub Actions",
      category: "DevOps",
      icon: "SiGithubactions",
      color: "#2088FF",
   },
   { name: "Grafana", category: "DevOps", icon: "SiGrafana", color: "#F46800" },
   {
      name: "Prometheus",
      category: "DevOps",
      icon: "SiPrometheus",
      color: "#E6522C",
   },
   {
      name: "Kafka",
      category: "DevOps",
      icon: "SiApachekafka",
      color: "#231F20",
   },
   { name: "Sentry", category: "DevOps", icon: "SiSentry", color: "#362D59" },
   { name: "OpenAI", category: "AI/ML", icon: "SiOpenai", color: "#412991" },
   {
      name: "LangChain",
      category: "AI/ML",
      icon: "SiLangchain",
      color: "currentColor",
   },
   {
      name: "Gemini",
      category: "AI/ML",
      icon: "SiGooglegemini",
      color: "currentColor",
   },
   {
      name: "Pinecone",
      category: "AI/ML",
      icon: "SiPinecone",
      color: "currentColor",
   },
   {
      name: "LangGraph",
      category: "AI/ML",
      icon: "SiLangchain",
      color: "currentColor",
   },
   {
      name: "React Native",
      category: "Mobile",
      icon: "SiReact",
      color: "#61DAFB",
   },
   { name: "Expo", category: "Mobile", icon: "SiExpo", color: "#000020" },
   { name: "Flutter", category: "Mobile", icon: "SiFlutter", color: "#02569B" },
   { name: "Clerk", category: "Tools", icon: "SiClerk", color: "currentColor" },
   {
      name: "Razorpay",
      category: "Tools",
      icon: "SiRazorpay",
      color: "#02042B",
   },
   { name: "CMake", category: "Tools", icon: "SiCmake", color: "#064F8C" },
   { name: "Nix", category: "Tools", icon: "SiNixos", color: "#5277C3" },
   {
      name: "NewsAPI",
      category: "Tools",
      icon: "SiNewspaper",
      color: "currentColor",
   },
   { name: "Linux", category: "Tools", icon: "SiLinux", color: "#FCC624" },
   {
      name: "PipeWire",
      category: "Tools",
      icon: "SiPipewire",
      color: "currentColor",
   },
   {
      name: "Proton",
      category: "Tools",
      icon: "SiProton",
      color: "currentColor",
   },
   {
      name: "Selenium",
      category: "Tools",
      icon: "SiSelenium",
      color: "#43B02A",
   },
   { name: "Wine", category: "Tools", icon: "SiWine", color: "currentColor" },
   { name: "Steam", category: "Tools", icon: "SiSteam", color: "#000000" },
];

export const openSourceRepos = [
   {
      name: "flash",
      description:
         "A powerful, database-agnostic ORM built in Go with Prisma-like functionality. Outperforms Drizzle and Prisma by 3-12x in benchmarks.",
      url: "https://github.com/Lumos-Labs-HQ/flash",
      // stars: 21,
      // forks: 6,
      isrelease: true,
      language: ["Go", "JavaScript", "TypeScript", "Python"],
      topics: ["orm", "go", "postgresql", "mysql", "sqlite"],
   },
   {
      name: "Astraapi",
      description:
         "A C++ framework for building high-performance APIs with FastAPI-like simplicity. Features include all FastAPI features, C++ performance, and seamless integration with Python for AI workloads.",
      url: "https://github.com/Lumos-Labs-HQ/Astraapi",
      isrelease: true,
      language: ["C++", "Python"],
      topics: ["ai", "api", "framework", "C++", "Fastapi"],
   },
];
