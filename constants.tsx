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
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf", // Update this path with your actual resume file
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
  {
    id: 1,
    role: "Junior Web Developer",
    company: "Creative Agency",
    period: "2018 - 2019",
    achievements: [
      "Collaborated with designers to translate Figma mockups into pixel-perfect websites.",
      "Maintained and optimized legacy WordPress sites.",
      "Learned core JavaScript fundamentals and browser APIs.",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "PHP"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Innovate Digital",
    period: "2019 - 2021",
    achievements: [
      "Developed end-to-end web solutions using Next.js and Node.js.",
      "Integrated payment gateways like Stripe and PayPal.",
      "Built real-time data visualization dashboards using D3.js.",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
  },
  {
    id: 3,
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    achievements: [
      "Led a team of 6 developers in building scalable React applications.",
      "Improved site performance by 40% using code-splitting and memoization.",
      "Implemented a comprehensive design system with Tailwind CSS.",
    ],
    techStack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "e-commerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers featuring real-time sales data and inventory management.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    projectType: "team",
  },
  {
    id: 2,
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "SaaS platform leveraging Gemini API to help marketers generate blog posts and social media captions.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Next.js", "OpenAI", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    projectType: "personal",
  },
  {
    id: 3,
    slug: "social-media-app",
    title: "Social Media App",
    description:
      "Mobile-first social platform for photographers with image processing capabilities and instant messaging.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    projectType: "team",
  },
  {
    id: 4,
    slug: "task-management-system",
    title: "Task Management System",
    description:
      "Collaborative project management tool with Kanban boards, Gantt charts, and team velocity tracking.",
    image: "https://picsum.photos/800/600?random=4",
    tags: ["Vue.js", "GraphQL", "Apollo", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
    projectType: "personal",
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
