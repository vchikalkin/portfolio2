import type { SkillCategory } from '@/types';

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'frontend',
    skills: ['react', 'nextjs', 'typescript', 'tailwind', 'html_css'],
  },
  {
    id: 'backend',
    skills: ['nodejs', 'postgresql', 'rest_api', 'todo_backend'],
  },
  {
    id: 'tools',
    skills: ['git', 'eslint', 'docker', 'todo_tools'],
  },
  {
    id: 'other',
    skills: ['telegram_bots', 'i18n', 'ci_cd', 'todo_other'],
  },
] as const;
