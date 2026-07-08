import { getTranslations } from 'next-intl/server';
import type { PropsWithChildren } from 'react';
import { RetroBackground } from '@/components/layout/retro-background';
import { SiteHeader } from '@/components/layout/site-header';
import { ThroughLine } from '@/components/layout/through-line';

export async function SiteShell({ children }: Readonly<PropsWithChildren>) {
  const nav = await getTranslations('Nav');
  const hero = await getTranslations('Hero');

  return (
    <>
      <RetroBackground />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {nav('skip')}
      </a>
      <ThroughLine />
      <SiteHeader name={hero('name')} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:pl-16">{children}</div>
    </>
  );
}
