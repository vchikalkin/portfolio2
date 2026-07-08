import type { ProjectItem } from '@/types';

export const projectItems: readonly ProjectItem[] = [
  {
    id: 'portfolio',
    url: 'https://vchikalkin.dev',
  },
  {
    id: 'victoria_pianist_site',
    url: 'https://portfolio-victoriachikalkina-com.vercel.app/',
  },
  {
    id: 'next_downloader_bot',
    url: 'https://t.me/next_downloader_bot',
  },
  {
    id: 'zapishis_online_bot',
    url: 'https://t.me/zapishis_online_bot',
  },
  {
    id: 'next_tailwind_eslint_boilerplate',
    url: 'https://github.com/vchikalkin/next-tailwind-eslint-boilerplate',
    github: 'https://github.com/vchikalkin/next-tailwind-eslint-boilerplate',
  },
  {
    id: 'eslint_config',
    url: 'https://github.com/vchikalkin/eslint-config-awesome',
    github: 'https://github.com/vchikalkin/eslint-config-awesome',
  },
] as const;
