import { getTranslations } from 'next-intl/server';
import type { PropsWithChildren } from 'react';
import { RetroBackground } from '@/components/layout/retro-background';
import { SiteHeader } from '@/components/layout/site-header';
import { ThroughLine } from '@/components/layout/through-line';

export async function SiteShell({ children }: Readonly<PropsWithChildren>) {
  const hero = await getTranslations('Hero');

  return (
    <>
      <RetroBackground />
      <ThroughLine />
      <SiteHeader name={hero('name')} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:pl-16">{children}</div>
    </>
  );
}
