import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => {
    return {
      url: `${siteConfig.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    };
  });
}
