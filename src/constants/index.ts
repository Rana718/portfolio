import {
  backend,
  creator,
  mobile,
  web,
  tictac,
  hire,
  pass_g,
  haven_image,
  aws_logo,
  sql_logo,
  // @ts-ignore
} from "../assets"


interface NavLink {
  id: string;
  title: string;
}

interface Service {
  title: string;
  icon: string;
}


interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

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

// Define the data using the interfaces
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
  {
    name: "HTML5",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Three.js",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
  },
  {
    name: "React Native",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", // React Native doesn't have a separate SVG in devicons, using React's icon.
  },
  {
    name: "Expo",
    imageUrl: "https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white",
  },
  {
    name: "Node.js",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "Next.js",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Bootstrap",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Python",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "Django",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
  },
  {
    name: "Flask",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
  },
  {
    name: "FastAPI",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Golang",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
  },
  {
    name: "Rust",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg",
  },
  {
    name: "Firebase",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  {
    name: "SQL",
    imageUrl: sql_logo,
  },
  {
    name: "PostgreSQL",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQLite",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "Docker",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    imageUrl: aws_logo,
  },
  {
    name: "Vercel",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
  },
  {
    name: "Railway",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/railway/railway-original.svg", // Railway doesn't have an official SVG in devicons, using a placeholder.
  },
  {
    name: "Java",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "Git",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    name: "Shell Script",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg",
  },
  {
    name: "C",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
  },
  {
    name: "C++",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Figma",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  {
    name: "Postman",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
  },
];

const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rana proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rana does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rana optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

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

export { services, testimonials, projects, technicalSkills };
