import { Braces, Globe, Languages,type LucideIcon  } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiCss,
  SiDocker,
  SiEslint,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
} from 'react-icons/si';
import { cn } from '@/lib/utils';

type TechIconComponent = IconType | LucideIcon;

const skillIcons: Record<string, TechIconComponent> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html_css: SiHtml5,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  rest_api: Braces,
  git: SiGit,
  eslint: SiEslint,
  docker: SiDocker,
  telegram_bots: SiTelegram,
  i18n: Languages,
  ci_cd: SiGithubactions,
};

interface TechIconProps {
  readonly id: string;
  readonly className?: string;
}

export function TechIcon({ id, className }: TechIconProps) {
  if (id === 'html_css') {
    return (
      <span className={cn('inline-flex shrink-0 items-center gap-0.5', className)}>
        <SiHtml5 aria-hidden="true" />
        <SiCss aria-hidden="true" />
      </span>
    );
  }

  const Icon = skillIcons[id] ?? Globe;

  return <Icon aria-hidden="true" className={cn('shrink-0', className)} />;
}
