import {
  backend,
  creator,
  mobile,
  web,
  tictac,
  hire,
  pass_g,
  haven_image,
} from "../assets"


interface NavLink {
  id: string;
  title: string;
}

interface Service {
  title: string;
  icon: string;
}


// interface Testimonial {
//   testimonial: string;
//   name: string;
//   designation: string;
//   company: string;
//   image: string;
// }

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
}

interface TechnicalSkill {
  name: string;
  imageUrl: string;
}


export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: Service[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technicalSkills: TechnicalSkill[] = [
  // Programming Languages
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "kotlin",
  "Golang",
  "Rust",
  "solidity",
  "C",
  "CPP",
  "BASH",
  "powershell",

  // Web Development Frameworks
  "React",
  "Redux",
  "Threejs",
  "vite",
  "Nodejs",
  "Expressjs",
  "hono",
  "Nextjs",
  "Tailwind CSS",
  "Bootstrap",
  "Django",
  "Flask",
  "FastAPI",
  "ReactNative",
  "Expo",
  "jetpackcompose",
  "pygame",
  "selenium",

  // Package Managers
  "bun",
  "pnpm",
  "deno",
  "yarn",

  // Databases / ORMs
  "PostgreSQL",
  "mysql",
  "Firebase",
  "MongoDB",
  "SQLite",
  "prisma",

  // Others
  "wsl",
  "androidstudio",
  "Postman",
  "Docker",
  "AWS",
  "cloudflare",
  "Vercel",
  "render",
  "Git",
  "Figma",
  "blender",
  "discord",
  
].map(name => ({
  name,
  imageUrl: `https://go-skill-icons.vercel.app/api/icons?i=${name.toLowerCase().replace(/\s/g, '')}`,
}));


// const testimonials: Testimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rana proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rana does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rana optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects: Project[] = [
  {
    name: "Pass Guard",
    description:
      "PassGuard is a modern and secure password manager designed to help you store and manage your passwords safely. With a user-friendly interface and robust features, PassGuard ensures your sensitive information is kept private and secure. Live Demo",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pass_g,
    source_code_link: "https://github.com/Rana718/PassGuard",
  },
  {
    name: "Tic Tac Toe",
    description:
      "Experience the classic game of Tic Tac Toe on our versatile platform! Play against friends offline, challenge a smart bot, or compete with strangers online. Enjoy smooth gameplay, intuitive design, and endless fun!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/Rana718/tic-tac-toe",
  },
  {
    name: "HireLens",
    description:
      "HireLens is an AI-powered platform designed to perfect your job interview skills. It offers personalized mock interviews, real-time feedback, and expert insights to help you prepare for any interview with confidence and precision, ensuring you're ready for success.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hire,
    source_code_link: "https://github.com/Rana718/HireLens",
  },
  {
    name: "MindHavens",
    description:
      "MindHaven is a meditation app designed to help you find peace and balance. With guided sessions, calming music, and personalized meditation plans, it helps reduce stress and improve focus, creating a haven for your mind in the chaos of daily life.",
    tags: [
      {
        name: "REACT NATIVE",
        color: "blue-text-gradient",
      },
      {
        name: "EXPO",
        color: "green-text-gradient",
      },
      {
        name: "NativeWind",
        color: "pink-text-gradient",
      },
    ],
    image: haven_image,
    source_code_link: "https://github.com/Rana718/MindHaven",
  },
];

export { services, projects, technicalSkills };
