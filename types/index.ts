// Core Types
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  education: string;
  languages: string[];
  hobbies: string[];
  initials: string;
  email: string;
  intro: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Project {
  id?: number;
  name: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  employmentType: string;
  location: string;
  description: string;
  projects?: Project[];
  skills: string[];
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface InterestCategory {
  category: string;
  items: string[];
}

export interface TechnicalSkillGroup {
  category: string;
  technologies: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

// Work Project Types
export interface WorkProject {
  id: number;
  title: string;
  company: string;
  role: string;
  period: string;
  image: string;
  achievements?: string[];
  technologies: string[];
  webUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
}

// Personal Project Types
export interface ProjectDescriptionItem {
  type: "link";
  url: string;
  text: string;
}

export interface PersonalProject {
  id: number;
  title: string;
  description: (string | ProjectDescriptionItem)[];
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  status: string;
}

export type ProjectStatusVariant = "default" | "secondary" | "outline";

export interface ProjectStatusVariants {
  [key: string]: ProjectStatusVariant;
}

// Social Media Types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Theme Types
export interface AccentColor {
  id: string;
  color: string;
  name: string;
}

export type AccentColorId = string;

// Component Props Types
export interface AccentColorPickerProps {
  onColorChange?: (colorId: AccentColorId) => void;
}

// Analytics Types
export interface GtagConfig {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  custom_map?: Record<string, string>;
}

export interface GtagEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameter?: string;
  [key: string]: string | number | boolean | undefined;
}

// Global Window Extensions
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: GtagConfig | GtagEvent
    ) => void;
  }
}

// Animation Classes
export type AnimationDelay = 1 | 2 | 3 | 4 | 5 | 6;

// Navigation Types
export interface NavigationLink {
  href: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

// Common Component Props
export interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
}