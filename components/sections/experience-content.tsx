import { SectionShell } from '@/components/layout/section-shell';
import { ExternalLink } from '@/components/ui/external-link';
import { cn } from '@/lib/utils';

export interface ExperienceEntry {
  readonly id: string;
  readonly url: string;
  readonly title: string;
  readonly role: string;
  readonly period: string;
  readonly achievements: readonly string[];
}

interface ExperienceContentProps {
  readonly title: string;
  readonly items: readonly ExperienceEntry[];
}

export function ExperienceContent({ title, items }: ExperienceContentProps) {
  const hasRichCards = items.some((item) => item.achievements.length > 0);

  return (
    <SectionShell id="experience">
      <h2 id="experience-title" className="mb-10 text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>

      <div
        className={cn('relative lg:pl-10', hasRichCards ? 'space-y-8 lg:space-y-10' : 'space-y-3')}
      >
        <div
          aria-hidden="true"
          className="bg-foreground/10 absolute top-0 left-0 hidden h-full w-px lg:block"
        />

        {items.map((item) => {
          const hasAchievements = item.achievements.length > 0;

          return (
            <article
              key={item.id}
              className={cn(
                'card-hover border-border-subtle relative rounded-xl border',
                hasAchievements
                  ? 'bg-surface/50 p-6 md:p-8'
                  : 'bg-surface/40 px-4 py-3 md:px-5 md:py-4',
              )}
            >
              <div
                aria-hidden="true"
                className={cn(
                  'border-border-subtle bg-accent absolute -left-10 hidden size-2 rounded-full border lg:block',
                  hasAchievements ? 'top-8' : 'top-10',
                )}
              />
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">
                    <ExternalLink href={item.url} showIcon={false}>
                      {item.title}
                    </ExternalLink>
                  </h3>
                  <p className="text-muted-foreground mt-1">{item.role}</p>
                </div>
                <p className="text-muted-foreground font-mono text-sm">{item.period}</p>
              </div>
              {hasAchievements ? (
                <ul className="mt-6 space-y-2">
                  {item.achievements.map((achievement) => {
                    return (
                      <li
                        key={achievement}
                        className="text-muted-foreground flex items-start gap-3 text-sm"
                      >
                        <span
                          aria-hidden="true"
                          className="bg-accent/60 mt-2 size-1 shrink-0 rounded-full"
                        />
                        {achievement}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
