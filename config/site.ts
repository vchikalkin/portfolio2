export const siteConfig = {
  name: 'Влад Чикалкин',
  url: 'https://vchikalkin.dev',
  email: 'i@vchikalkin.ru',
  links: {
    github: 'https://github.com/vchikalkin',
    telegram: 'https://t.me/vchikalkin',
    instagram: 'https://www.instagram.com/v.chikalkin/',
    soundcloud: 'https://soundcloud.com/vchika',
    linkedin: 'https://www.linkedin.com/in/vladislav-chikalkin-b8a251167/',
    resume: null as string | null, // TODO: add resume PDF URL
  },
  sectionIds: [
    'hero',
    'about',
    'services',
    'experience',
    'projects',
    'skills',
    'contact',
  ] as const,
} as const;
