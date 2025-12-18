
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  year: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Publication {
  id: number;
  title: string;
  journal: string;
  link: string;
  year: string;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  location: string;
  period: string;
  grade?: string;
  coursework?: string[];
}

export interface Hackathon {
  id: number;
  name: string;
  project: string;
  achievement: string;
  date: string;
  location: string;
  description: string;
  techStack: string[];
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link?: string;
  skills?: string[];
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}