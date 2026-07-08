import { ArrowDown } from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface HeroContentProps {
  readonly eyebrow: string;
  readonly hello: string;
  readonly name: string;
  readonly tagline: string;
  readonly role: string;
  readonly description: string;
  readonly ctaPrimary: string;
  readonly ctaSecondary: string;
  readonly trustYears: string;
  readonly trustCompanies: string;
  readonly trustFullstack: string;
}

export function HeroContent({
  eyebrow,
  hello,
  name,
  tagline,
  role,
  description,
  ctaPrimary,
  ctaSecondary,
  trustYears,
  trustCompanies,
  trustFullstack,
}: HeroContentProps) {
  return (
    <SectionShell id="hero" eyebrow={eyebrow} className="flex min-h-[90vh] flex-col justify-center pt-28 pb-16">
      <div className="relative max-w-3xl">
        <p className="mb-4 text-sm text-muted-foreground">{hello}</p>
        <h1
          id="hero-title"
          className="gradient-text text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] font-medium tracking-[-0.03em]"
        >
          {name}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">{tagline}</p>
        <p className="mt-2 font-mono text-sm text-accent">{role}</p>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={siteConfig.links.telegram} rel="noopener noreferrer" target="_blank">
            <Button size="lg" className="w-full sm:w-auto">
              {ctaPrimary}
            </Button>
          </a>
          <a href="#projects">
            <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
              {ctaSecondary}
              <ArrowDown aria-hidden="true" className="size-4" />
            </Button>
          </a>
        </div>
      </div>

      <div className="mt-20 grid max-w-xl grid-cols-3 gap-8 border-t border-border-subtle pt-10">
        <div className="space-y-1">
          <p className="text-3xl font-medium tracking-tight text-accent md:text-4xl">7+</p>
          <p className="text-sm text-muted-foreground">{trustYears}</p>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-medium tracking-tight text-accent md:text-4xl">3</p>
          <p className="text-sm text-muted-foreground">{trustCompanies}</p>
        </div>
        <div className="space-y-1">
          <p className={cn('text-lg font-medium tracking-tight md:text-xl')}>{trustFullstack}</p>
          <p className="text-sm text-muted-foreground opacity-0 select-none" aria-hidden="true">
            —
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
