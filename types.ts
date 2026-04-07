import { LucideIcon } from "lucide-react";

export interface Project {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  projectType: "team" | "personal";
}

export interface Experience {
  id: string | number;
  role: string;
  company: string;
  location?: string;
  period: string;
  achievements: string[];
  techStack?: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: "frontend" | "backend" | "tools" | "other";
  level?: number; // 0-100 for progress bars if needed
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface Profile {
  nickname: string;
  fullname: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  resumeUrl?: string;
  github?: string;
  linkedin?: string;
  avatar?: string;
  yearsOfExperience?: number;
}
export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  credentialId?: string;
}
