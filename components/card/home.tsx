'use client';

import { SiteCard } from '@/components/card/site-card';
import { LocaleProvider } from '@/components/controls/locale-provider';
import type { Locale } from '@/i18n/routing';
import enMessages from '@/messages/en.json';
import ruMessages from '@/messages/ru.json';

const messagesByLocale = {
  ru: ruMessages,
  en: enMessages,
} as const satisfies Record<Locale, typeof ruMessages>;

export function Home() {
  return (
    <LocaleProvider messagesByLocale={messagesByLocale}>
      <SiteCard />
    </LocaleProvider>
  );
}
