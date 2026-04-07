import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Cpu,
  Github,
  Linkedin,
  Twitter,
  Figma,
  Smartphone,
  Mail,
} from "lucide-react";
import {
  NavItem,
  Experience,
  Project,
  Skill,
  SocialLink,
  Profile,
  Education,
  Certification,
} from "./types";

export const PROFILE: Profile = {
  name: "Akasaki Lee",
  title: "Full Stack Developer & UI/UX Enthusiast",
  bio: "I build high-performance, beautiful web applications with a focus on user experience and scalable architecture. Passionate about AI integration and modern frontend technologies.",
  email: "phucle682004@gmail.com",
  phone: "+84 0788580223",
  location: "DaNang, Vietnam",
  github: "https://github.com/lehongphuc-12",
  linkedin: "https://linkedin.com/in/lehongphuc-12",
  resumeUrl: "./Img/CV%20-%20Le%20Hong%20Phuc.pdf",
  yearsOfExperience: 3,
};

export const EDUCATION: Education[] = [
  {
    degree: "Software Engineer",
    institution: "FPT University",
    period: "2022 - 2026",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    name: "Oracle Java SE Programmer",
    issuer: "Oracle",
    year: "2022",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const EXPERIENCE: Experience[] = [
  // {
  //   id: 1,
  //   role: "Junior Web Developer",
  //   company: "Creative Agency",
  //   period: "2018 - 2019",
  //   achievements: [
  //     "Collaborated with designers to translate Figma mockups into pixel-perfect websites.",
  //     "Maintained and optimized legacy WordPress sites.",
  //     "Learned core JavaScript fundamentals and browser APIs.",
  //   ],
  //   techStack: ["HTML", "SCSS", "JavaScript", "PHP"],
  // },
  // {
  //   id: 2,
  //   role: "Full Stack Developer",
  //   company: "Innovate Digital",
  //   period: "2019 - 2021",
  //   achievements: [
  //     "Developed end-to-end web solutions using Next.js and Node.js.",
  //     "Integrated payment gateways like Stripe and PayPal.",
  //     "Built real-time data visualization dashboards using D3.js.",
  //   ],
  //   techStack: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
  // },
  // {
  //   id: 3,
  //   role: "Senior Frontend Engineer",
  //   company: "TechFlow Solutions",
  //   period: "2021 - Present",
  //   achievements: [
  //     "Led a team of 6 developers in building scalable React applications.",
  //     "Improved site performance by 40% using code-splitting and memoization.",
  //     "Implemented a comprehensive design system with Tailwind CSS.",
  //   ],
  //   techStack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  // },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "pet-spa-system",
    title: "Pet Spa Management System",
    description:
      "A comprehensive ASP.NET MVC web application for pet spa clinics, featuring appointment booking, service management, e-commerce for pet products, and administrative dashboards for staff and user management.",
    image: "./Img/pet-spa-system.png",
    tags: [
      "C#",
      ".NET 9",
      "ASP.NET MVC",
      "Entity Framework Core",
      "SQL Server",
      "SignalR",
      "Hangfire",
    ],
    github: "https://github.com/lamlam1924/pet-spa-system.git",
    demo: "https://lamlam1924.github.io/pet-spa-system/",
    featured: true,
    projectType: "team",
  },

  {
    id: 2,
    slug: "flower-shop",
    title: "Flower Shop E-commerce",
    description:
      "A full-stack e-commerce application for an online flower shop, featuring a modern React/Vite frontend and a Spring Boot backend. Includes product categorization, search, shopping cart management, Google authentication, and Cloudinary for image management.",
    image: "./Img/flowerconner.png",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "React",
      "Vite",
      "SQL Server",
      "MySQL",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com",
    demo: "https://flowershop-iota.vercel.app/",
    featured: true,
    projectType: "team",
  },

  {
    id: 3,
    slug: "pims-project-management",
    title: "Project Information Management System (PIMS)",
    description:
      "A comprehensive course project (SWP391) management system featuring student group management, defense scheduling and grading, semester administration, and a complex role-based access control system (Admin, Student, Lecturer).",
    image: "./Img/pims.png",
    tags: [
      "C#",
      ".NET 9",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
      "React 19",
      "TypeScript",
      "Vite",
      "TailwindCSS v4",
    ],
    github: "https://github.com/mendz123/PIMS_CourseProject.git",
    demo: "",
    featured: true,
    projectType: "team",
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React", icon: Code2, category: "frontend", level: 85 },
  { name: "TypeScript", icon: Terminal, category: "frontend", level: 80 },
  { name: "Tailwind CSS", icon: Layout, category: "frontend", level: 90 },
  { name: "HTML/CSS", icon: Layout, category: "frontend", level: 95 },
  { name: "JavaScript", icon: Code2, category: "frontend", level: 85 },
  { name: "Bootstrap", icon: Layout, category: "frontend", level: 85 },
  {
    name: "Responsive Design",
    icon: Smartphone,
    category: "frontend",
    level: 90,
  },

  // Backend
  { name: ".NET", icon: Code2, category: "backend", level: 85 },
  { name: "C#", icon: Code2, category: "backend", level: 85 },
  { name: "Java", icon: Code2, category: "backend", level: 85 },
  { name: "Spring Boot", icon: Server, category: "backend", level: 75 },
  { name: "SQL Server", icon: Database, category: "backend", level: 70 },
  { name: "Entity Framework", icon: Database, category: "backend", level: 75 },
  { name: "RESTful API", icon: Server, category: "backend", level: 80 },

  // Tools & DevOps
  { name: "Git", icon: Terminal, category: "tools", level: 85 },
  { name: "Github", icon: Github, category: "tools", level: 85 },
  { name: "Docker", icon: Cpu, category: "tools", level: 60 },
  { name: "Figma", icon: Figma, category: "tools", level: 75 },
  { name: "VS Code", icon: Code2, category: "tools", level: 90 },
  { name: "Postman", icon: Terminal, category: "tools", level: 85 },
  { name: "Swagger", icon: Code2, category: "tools", level: 80 },
  { name: "Azure", icon: Cpu, category: "tools", level: 65 },

  // Specialized & Others
  { name: "Clean Code", icon: Code2, category: "other", level: 85 },
  { name: "MVC Pattern", icon: Layout, category: "other", level: 80 },
  { name: "Design Patterns", icon: Code2, category: "other", level: 75 },
  { name: "Microservices", icon: Server, category: "other", level: 70 },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Twitter", url: "https://twitter.com", icon: Twitter },
  { platform: "Email", url: "mailto:phucle.dev@gmail.com", icon: Mail },
];
