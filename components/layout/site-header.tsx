'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { siteConfig } from '@/config/site';
import { useActiveSection } from '@/hooks/use-active-section';
import { easeOut } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { NavItem, SectionId } from '@/types';

const navSections: readonly SectionId[] = [
  'about',
  'experience',
  'projects',
  'skills',
  'contact',
];

interface SiteHeaderProps {
  readonly name: string;
}

export function SiteHeader({ name }: SiteHeaderProps) {
  const t = useTranslations('Nav');
  const { scrollYProgress } = useScroll();
  const activeSection = useActiveSection(siteConfig.sectionIds);
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const navItems: NavItem[] = navSections.map((id) => {
    return {
      id,
      href: `#${id}`,
      label: t(id),
    };
  });

  return (
    <>
      <m.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
        style={{ scaleX: progressScaleX }}
      />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border-subtle bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6 lg:h-16 lg:gap-4 lg:px-8">
          <a
            href="#hero"
            className="shrink-0 text-sm font-medium tracking-tight whitespace-nowrap transition-opacity hover:opacity-70"
          >
            {name}
          </a>

          <nav
            aria-label={t('aria')}
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'relative shrink-0 px-3 py-2 text-sm whitespace-nowrap transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <m.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                      transition={{ duration: 0.25, ease: easeOut }}
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
