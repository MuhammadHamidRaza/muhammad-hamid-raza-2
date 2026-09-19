export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
  agentsCount?: number;
  agentsList?: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  review?: {
    rating: number;
    quote: string;
    client: string;
    tipNote?: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  headline: string;
  skills: string[];
  frameworksOrTools: string[];
  specSample?: {
    filename: string;
    code: string;
    lang: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'freelance' | 'education';
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'open-source' | 'published-packages' | 'books' | 'client-review' | 'community' | 'media';
  description: string;
  highlightText: string;
  url?: string;
  urlLabel?: string;
  badge: string;
}

export interface OpenSourceTool {
  name: string;
  tagline: string;
  description: string;
  ecosystem: 'Python / PyPI' | 'Node / npm' | 'GitHub' | 'Claude Code';
  installCommand?: string;
  repoUrl: string;
  packageUrl?: string;
  specsIncluded: string[];
}

export interface AgentNode {
  id: string;
  name: string;
  role: string;
  shortDesc: string;
  category: 'core' | 'commerce' | 'operations' | 'support';
  x: number;
  y: number;
  activeColor: string;
}
