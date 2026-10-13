export const siteConfig = {
  url: 'https://vchikalkin.dev',
  careerStartYear: 2018,
  email: 'i@vchikalkin.ru',
  phone: '+7 (926) 925-08-68',
  handles: {
    telegram: '@vchikalkin',
    github: 'github.com/vchikalkin',
  },
  links: {
    github: 'https://github.com/vchikalkin',
    telegram: 'https://t.me/vchikalkin',
    instagram: 'https://www.instagram.com/v.chikalkin/',
    soundcloud: 'https://soundcloud.com/vchika',
    linkedin: 'https://www.linkedin.com/in/vladislav-chikalkin-b8a251167/',
  },
} as const;

export function getResumeUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_RESUME_URL;

  return url && url.length > 0 ? url : null;
}
