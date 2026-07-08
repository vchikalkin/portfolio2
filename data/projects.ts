import type { ProjectItem } from '@/types';

export const projectItems: readonly ProjectItem[] = [
  {
    id: 'zapishis_online_bot',
    url: 'https://t.me/zapishis_online_bot',
    featured: true,
  },
  {
    id: 'next_downloader_bot',
    url: 'https://t.me/next_downloader_bot',
  },
  {
    id: 'eslint_config',
    url: 'https://github.com/vchikalkin/eslint-config-awesome',
    github: 'https://github.com/vchikalkin/eslint-config-awesome',
  },
  {
    id: 'portfolio',
    url: 'https://vchikalkin.dev',
  },
] as const;
