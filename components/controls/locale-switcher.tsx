'use client';

import { useTranslations } from 'next-intl';
import { useLocaleState } from '@/components/controls/locale-context';
import { type Locale,locales } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocaleState();
  const t = useTranslations('LocaleSwitcher');

  return (
    <nav
      aria-label={t('label')}
      className="flex gap-0.5 rounded-md border border-border-subtle p-0.5"
    >
      {locales.map((nextLocale: Locale) => {
        const isActive = locale === nextLocale;

        return (
          <button
            key={nextLocale}
            type="button"
            aria-pressed={isActive}
            className={cn(
              'inline-flex h-7 min-w-7 items-center justify-center rounded-sm px-2 text-xs font-medium transition-colors',
              isActive
                ? 'toggle-active'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
            )}
            onClick={() => {
              setLocale(nextLocale);
            }}
          >
            {t(nextLocale)}
          </button>
        );
      })}
    </nav>
  );
}
