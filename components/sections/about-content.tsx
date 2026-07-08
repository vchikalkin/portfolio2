import { SectionShell } from '@/components/layout/section-shell';

interface AboutContentProps {
  readonly title: string;
  readonly summary: string;
  readonly facts: readonly string[];
}

export function AboutContent({ title, summary, facts }: AboutContentProps) {
  return (
    <SectionShell id="about">
      <h2 id="about-title" className="text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {summary} 😉
      </p>

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
    </SectionShell>
  );
}
