'use client';

import { NextIntlClientProvider } from 'next-intl';
import {
  type PropsWithChildren,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from 'react';
import {
  LocaleContext,
  type LocaleContextValue,
} from '@/components/controls/locale-context';
import { SetHtmlLang } from '@/components/controls/set-html-lang';
import {
  defaultLocale,
  isLocale,
  type Locale,
  localeStorageKey,
} from '@/i18n/routing';

type Messages = Record<string, unknown>;

// ponytail: fixed date for static export; live clock not needed on this page
const staticNow = new Date('2026-01-01T00:00:00.000Z');

interface LocaleProviderProps extends PropsWithChildren {
  readonly messagesByLocale: Readonly<Record<Locale, Messages>>;
}

function subscribeToLocale(onStoreChange: () => void) {
  window.addEventListener('portfolio-locale', onStoreChange);
  window.addEventListener('storage', onStoreChange);

  return () => {
    window.removeEventListener('portfolio-locale', onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function getLocaleSnapshot(): Locale {
  const stored = window.localStorage.getItem(localeStorageKey);

  return isLocale(stored) ? stored : defaultLocale;
}

function getServerLocaleSnapshot(): Locale {
  return defaultLocale;
}

function persistLocale(next: Locale) {
  window.localStorage.setItem(localeStorageKey, next);
  window.dispatchEvent(new Event('portfolio-locale'));
}

export function LocaleProvider({
  children,
  messagesByLocale,
}: LocaleProviderProps) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  const setLocale = useCallback((next: Locale) => {
    persistLocale(next);
  }, []);

  const value = useMemo((): LocaleContextValue => ({ locale, setLocale }), [
    locale,
    setLocale,
  ]);

  return (
    <LocaleContext.Provider value={value}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesByLocale[locale]}
        timeZone="Europe/Moscow"
        now={staticNow}
      >
        <SetHtmlLang locale={locale} />
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
