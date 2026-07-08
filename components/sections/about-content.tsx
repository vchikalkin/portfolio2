import { SectionShell } from '@/components/layout/section-shell';

interface AboutContentProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly summary: string;
  readonly facts: readonly string[];
  readonly initials: string;
  readonly photoAlt: string;
}

export function AboutContent({
  eyebrow,
  title,
  summary,
  facts,
  initials,
  photoAlt,
}: AboutContentProps) {
  return (
    <SectionShell id="about" eyebrow={eyebrow}>
      <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
        <div
          aria-label={photoAlt}
          className="card-hover flex aspect-square max-w-[240px] items-center justify-center rounded-2xl border border-border-subtle bg-surface"
          role="img"
        >
          <span className="text-5xl font-medium tracking-tight text-foreground">{initials}</span>
        </div>

        <div>
          <h2 id="about-title" className="text-3xl font-medium tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {summary} 😉
          </p>

          <ul className="mt-10 space-y-4">
            {facts.map((fact) => 
              { return <li key={fact} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-foreground/30" />
                <p className="text-muted-foreground">{fact}</p>
              </li> }
            )}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
