import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { localePath, routing } from '@/i18n/routing';

export const dynamic = 'force-static';

function absoluteUrl(locale: (typeof routing.locales)[number]): string {
  const path = localePath(locale);

  return path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;
}

// same cluster on every <url> — self + reciprocal + x-default (Google / Next caveat)
const languageAlternates = {
  ru: absoluteUrl('ru'),
  en: absoluteUrl('en'),
  'x-default': absoluteUrl('ru'),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => {
    return {
      url: absoluteUrl(locale),
      // ponytail: omit changefreq/priority (Google ignores); lastmod only when we have a real date
      alternates: {
        languages: languageAlternates,
      },
    };
  });
}
