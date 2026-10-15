'use client';

import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/controls/locale-switcher';
import { ThemeSwitcher } from '@/components/controls/theme-switcher';
import { getResumeUrl, siteConfig } from '@/config/site';
import { experienceItems } from '@/data/experience';
import { projectItems } from '@/data/projects';
import { skillItems } from '@/data/skills';

export function SiteCard() {
  const t = useTranslations();
  const resumeHref = getResumeUrl();
  const years = new Date().getFullYear() - siteConfig.careerStartYear;

  return (
    <div className="flex min-h-dvh flex-col px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-8 lg:h-dvh lg:overflow-hidden lg:px-12">
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
        {resumeHref ? (
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground underline-offset-4 transition-opacity hover:underline hover:opacity-70"
          >
            {t('Card.resume')}
          </a>
        ) : null}
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center py-8 md:py-10">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl leading-none font-medium tracking-tight text-balance sm:text-5xl md:text-6xl">
            {t('Card.name')}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {t('Card.tagline', { years })}
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-border-subtle pt-8 md:mt-14 md:grid-cols-3 md:gap-10 md:pt-10">
          <section aria-labelledby="experience-heading">
            <h2
              id="experience-heading"
              className="mb-4 text-xs font-medium text-muted-foreground"
            >
              {t('Card.experience')}
            </h2>
            <ul className="space-y-4">
              {experienceItems.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="text-sm font-medium transition-colors group-hover:text-accent">
                        {t(`Experience.items.${item.id}.title`)}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {t(`Experience.items.${item.id}.role`)}
                      </div>
                      <div className="mt-0.5 font-mono text-xs text-muted-foreground tabular-nums">
                        {t(`Experience.items.${item.id}.period`)}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>

          <section aria-labelledby="stack-heading">
            <h2
              id="stack-heading"
              className="mb-4 text-xs font-medium text-muted-foreground"
            >
              {t('Card.stack')}
            </h2>
            <ul className="flex flex-wrap gap-1.5">
              {skillItems.map((skillId) => {
                return (
                  <li
                    key={skillId}
                    className="rounded-md border border-border-subtle bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                  >
                    {t(`Skills.items.${skillId}`)}
                  </li>
                );
              })}
            </ul>
          </section>

          <section aria-labelledby="projects-heading">
            <h2
              id="projects-heading"
              className="mb-4 text-xs font-medium text-muted-foreground"
            >
              {t('Card.projects')}
            </h2>
            <ul className="space-y-2.5">
              {projectItems.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {t(`Projects.items.${item.id}.title`)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <footer className="mt-10 border-t border-border-subtle pt-6 md:mt-12">
          <h2 className="sr-only">{t('Card.contact')}</h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {t('Contact.telegram')}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {t('Contact.github')}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {t('Contact.linkedin')}
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
