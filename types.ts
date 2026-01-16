import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g., "Advanced"
  icon?: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  span: number; // For Bento grid layout (col-span)
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
