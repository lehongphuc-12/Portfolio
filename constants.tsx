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
} from "lucide-react";
import { NavItem, Experience, Project, Skill, SocialLink } from "./types";

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
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description:
      "Leading a team of 6 developers in building scalable React applications. Improved site performance by 40% and implemented a comprehensive design system.",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Innovate Digital",
    period: "2019 - 2021",
    description:
      "Developed end-to-end web solutions using Next.js and Node.js. Integrated payment gateways and real-time data visualization dashboards.",
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Creative Agency",
    period: "2018 - 2019",
    description:
      "Collaborated with designers to translate Figma mockups into pixel-perfect responsive websites using HTML, SCSS, and JavaScript.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers featuring real-time sales data, inventory management, and customer insights.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "SaaS platform leveraging Gemini API to help marketers generate blog posts, social media captions, and email campaigns.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Next.js", "OpenAI", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "Mobile-first social platform for photographers with image processing capabilities, stories, and instant messaging.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "Collaborative project management tool with Kanban boards, Gantt charts, and team velocity tracking.",
    image: "https://picsum.photos/800/600?random=4",
    tags: ["Vue.js", "GraphQL", "Apollo", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export const SKILLS: Skill[] = [
  { name: "React", icon: Code2, category: "frontend" },
  { name: "TypeScript", icon: Terminal, category: "frontend" },
  { name: "Node.js", icon: Server, category: "backend" },
  { name: "PostgreSQL", icon: Database, category: "backend" },
  { name: "Next.js", icon: Globe, category: "frontend" },
  { name: "Tailwind CSS", icon: Layout, category: "frontend" },
  { name: "Docker", icon: Cpu, category: "tools" },
  { name: "React Native", icon: Smartphone, category: "frontend" },
  { name: "Figma", icon: Figma, category: "tools" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Twitter", url: "https://twitter.com", icon: Twitter },
];
