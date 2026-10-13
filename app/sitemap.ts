import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { localePath, routing } from '@/i18n/routing';

export const dynamic = 'force-static';

const languageAlternates = {
  ru: siteConfig.url,
  en: `${siteConfig.url}/en`,
  'x-default': siteConfig.url,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => {
    const path = localePath(locale);

    return {
      url: path === '/' ? siteConfig.url : `${siteConfig.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: languageAlternates,
      },
    };
  });
}
