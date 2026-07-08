'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { type Locale, routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations('LocaleSwitcher');

  return (
    <nav
      aria-label={t('label')}
      className="flex gap-0.5 rounded-md border border-border-subtle bg-background/90 p-0.5 backdrop-blur-sm"
    >
      {routing.locales.map((nextLocale) => {
        const isActive = locale === nextLocale;

        return (
          <Link
            replace
            key={nextLocale}
            href={pathname}
            locale={nextLocale}
            className={cn(
              'inline-flex h-7 min-w-7 items-center justify-center rounded-md px-2 text-xs font-medium transition-colors',
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
