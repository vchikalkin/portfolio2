'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/i18n/routing';

export interface LocaleContextValue {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocaleState(): LocaleContextValue {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocaleState must be used within LocaleProvider');
  }

  return context;
}
