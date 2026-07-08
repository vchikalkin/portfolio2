import { SectionShell } from '@/components/layout/section-shell';
import { ExternalLink } from '@/components/ui/external-link';

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
  return (
    <SectionShell id="experience">
      <h2 id="experience-title" className="mb-10 text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>

      <div className="relative space-y-8 lg:space-y-10 lg:pl-10">
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 hidden h-full w-px bg-foreground/10 lg:block"
        />

        {items.map((item) => 
          { return <article
            key={item.id}
            className="card-hover relative rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute top-8 -left-10 hidden size-2 rounded-full border border-border-subtle bg-accent lg:block"
            />
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-medium tracking-tight">
                  <ExternalLink href={item.url} showIcon={false}>
                    {item.title}
                  </ExternalLink>
                </h3>
                <p className="mt-1 text-muted-foreground">{item.role}</p>
              </div>
              <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
            </div>
            {item.achievements.length > 0 ? (
              <ul className="mt-6 space-y-2">
                {item.achievements.map((achievement) => 
                  { return <li key={achievement} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
                    {achievement}
                  </li> }
                )}
              </ul>
            ) : null}
          </article> }
        )}
      </div>
    </SectionShell>
  );
}
