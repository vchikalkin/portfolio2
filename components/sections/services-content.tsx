import { ArrowUpRight } from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';

export interface ServiceEntry {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

interface ServicesContentProps {
  readonly title: string;
  readonly lead: string;
  readonly items: readonly ServiceEntry[];
  readonly ctaLabel: string;
}

export function ServicesContent({ title, lead, items, ctaLabel }: ServicesContentProps) {
  return (
    <SectionShell id="services">
      <div className="max-w-3xl">
        <h2 id="services-title" className="text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{lead}</p>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => {
            return (
              <li key={item.id} className="card-hover rounded-xl border border-border-subtle bg-surface/50 p-5 md:p-6">
                <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
          >
            {ctaLabel}
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
