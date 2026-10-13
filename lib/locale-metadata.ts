import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/config/site';
import { type AppLocale, localePath } from '@/i18n/routing';

const languageAlternates = {
  ru: '/',
  en: '/en',
  'x-default': '/',
} as const;

export async function buildLocaleMetadata(locale: AppLocale): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const tCard = await getTranslations({ locale, namespace: 'Card' });
  const title = t('title');
  const description = t('description');
  const name = tCard('name');
  const path = localePath(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    applicationName: name,
    authors: [{ name, url: siteConfig.url }],
    creator: name,
    alternates: {
      canonical: path,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: path,
      siteName: name,
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      alternateLocale: locale === 'ru' ? ['en_US'] : ['ru_RU'],
    },
    twitter: {
      // ponytail: no OG image yet — summary, not summary_large_image
      card: 'summary',
      title,
      description,
    },
  };
}
