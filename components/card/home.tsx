'use client';

import { SiteCard } from '@/components/card/site-card';
import { LocaleProvider } from '@/components/controls/locale-provider';
import { siteConfig } from '@/config/site';
import type { Locale } from '@/i18n/routing';
import enMessages from '@/messages/en.json';
import ruMessages from '@/messages/ru.json';

const messagesByLocale = {
  ru: ruMessages,
  en: enMessages,
} as const satisfies Record<Locale, typeof ruMessages>;

export function Home() {
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: ruMessages.Card.name,
    jobTitle: ruMessages.Meta.jobTitle,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.telegram,
      siteConfig.links.linkedin,
    ],
  };

  return (
    <LocaleProvider messagesByLocale={messagesByLocale}>
      <SiteCard />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </LocaleProvider>
  );
}
