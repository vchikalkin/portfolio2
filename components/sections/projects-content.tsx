import { ArrowUpRight } from 'lucide-react';
import { SectionShell } from '@/components/layout/section-shell';

export interface ProjectEntry {
  readonly id: string;
  readonly url: string;
  readonly title: string;
  readonly description: string;
  readonly featured?: boolean;
}

interface ProjectsContentProps {
  readonly title: string;
  readonly viewProject: string;
  readonly items: readonly ProjectEntry[];
}

export function ProjectsContent({
  title,
  viewProject,
  items,
}: ProjectsContentProps) {
  return (
    <SectionShell id="projects">
      <div className="max-w-3xl">
        <h2 id="projects-title" className="mb-8 text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>

        <ul className="space-y-3">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card-hover group flex items-start justify-between gap-4 rounded-xl border border-border-subtle bg-surface/40 px-4 py-3 transition-colors md:px-5 md:py-4"
                >
                  <div>
                    <h3 className="text-base font-medium text-foreground md:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-sm text-muted-foreground">
                    {viewProject}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionShell>
  );
}
