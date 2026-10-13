import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  // static export: no middleware — unprefixed `/` is wired by hand as ru
  localePrefix: 'as-needed',
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];

export function localePath(locale: AppLocale): string {
  return locale === routing.defaultLocale ? '/' : `/${locale}`;
}
