export interface NavItem {
  readonly id: SectionId;
  readonly label: string;
  readonly href: string;
}

export type SectionId =
  | 'hero'
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'contact';

export interface ExperienceItem {
  readonly id: string;
  readonly url: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly url: string;
  readonly featured?: boolean;
  readonly github?: string;
}

export interface SkillCategory {
  readonly id: string;
  readonly skills: readonly string[];
}
