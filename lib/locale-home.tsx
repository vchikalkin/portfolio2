import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SiteCard } from '@/components/card/site-card';
import { siteConfig } from '@/config/site';
import { type AppLocale, localePath } from '@/i18n/routing';

interface LocaleHomeProps {
  readonly locale: AppLocale;
}

function absoluteLocaleUrl(locale: AppLocale): string {
  const path = localePath(locale);

  return path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;
}

export async function LocaleHome({ locale }: LocaleHomeProps) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Meta' });
  const tCard = await getTranslations({ locale, namespace: 'Card' });

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: tCard('name'),
    jobTitle: t('jobTitle'),
    url: absoluteLocaleUrl(locale),
    email: siteConfig.email,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.telegram,
      siteConfig.links.linkedin,
    ],
  };

  return (
    <>
      <SiteCard />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </>
  );
}
