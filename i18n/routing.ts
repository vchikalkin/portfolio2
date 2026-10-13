export const locales = ['ru', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ru';

export const localeStorageKey = 'portfolio-locale';

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'ru' || value === 'en';
}
