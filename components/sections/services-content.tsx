import { ArrowUpRight, Check } from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';

interface ServicesContentProps {
  readonly title: string;
  readonly lead: string;
  readonly listItems: readonly string[];
  readonly ctaLabel: string;
}

export function ServicesContent({ title, lead, listItems, ctaLabel }: ServicesContentProps) {
  return (
    <SectionShell id="services">
      <div className="max-w-3xl">
        <h2 id="services-title" className="text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{lead}</p>

        <ul className="mt-10 space-y-2">
          {listItems.map((label) => {
            return (
              <li
                key={label}
                className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface/40 px-4 py-3"
              >
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-foreground">{label}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
          >
            {ctaLabel}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
