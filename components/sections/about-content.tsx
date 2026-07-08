import { SectionShell } from '@/components/layout/section-shell';

interface AboutContentProps {
  readonly title: string;
  readonly summary: string;
  readonly facts: readonly string[];
  readonly highlightTitle: string;
  readonly highlightDescription: string;
  readonly homeLabTitle: string;
  readonly homeLabDescription: string;
}

export function AboutContent({
  title,
  summary,
  facts,
  highlightTitle,
  highlightDescription,
  homeLabTitle,
  homeLabDescription,
}: AboutContentProps) {
  return (
    <SectionShell id="about">
      <h2 id="about-title" className="text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {summary}
      </p>

      {facts.length > 0 ? (
        <ul className="mt-8 space-y-4">
          {facts.map((fact) => {
            return (
              <li key={fact} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-foreground/30" />
                <p className="text-muted-foreground">{fact}</p>
              </li>
            );
          })}
        </ul>
      ) : null}

      <article className="card-hover mt-8 max-w-3xl rounded-xl border border-border-subtle bg-surface/50 p-5 md:p-6">
        <h3 className="text-lg font-medium tracking-tight">{highlightTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
          {highlightDescription}
        </p>
      </article>

      <article className="card-hover mt-8 max-w-3xl rounded-xl border border-border-subtle bg-surface/50 p-5 md:p-6">
        <h3 className="text-lg font-medium tracking-tight">{homeLabTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
          {homeLabDescription}
        </p>
      </article>
    </SectionShell>
  );
}
