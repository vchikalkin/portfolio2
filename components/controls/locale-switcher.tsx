'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { localePath, routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations('LocaleSwitcher');

  return (
    <nav
      aria-label={t('label')}
      className="flex gap-0.5 rounded-md border border-border-subtle p-0.5"
    >
      {routing.locales.map((nextLocale) => {
        const isActive = locale === nextLocale;

        return (
          <Link
            key={nextLocale}
            href={localePath(nextLocale)}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'inline-flex h-7 min-w-7 items-center justify-center rounded-sm px-2 text-xs font-medium transition-colors',
              isActive
                ? 'toggle-active'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
            )}
          >
            {t(nextLocale)}
          </Link>
        );
      })}
    </nav>
  );
}
