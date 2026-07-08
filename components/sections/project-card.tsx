import { ArrowUpRight } from 'lucide-react';
import type { ProjectEntry } from '@/components/sections/projects-content';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  readonly item: ProjectEntry;
  readonly viewProject: string;
  readonly className?: string;
  readonly featured?: boolean;
}

export function ProjectCard({
  item,
  viewProject,
  className,
  featured = false,
}: ProjectCardProps) {
  return (
    <a
      href={item.url}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        'card-hover group flex h-full flex-col rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8',
        featured && 'min-h-[320px] justify-between',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'mb-6 rounded-lg border border-border-subtle',
          featured ? 'h-40' : 'h-24',
        )}
        style={{
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--glow-purple) 18%, transparent), color-mix(in srgb, var(--glow-pink) 12%, transparent))',
        }}
      />
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {item.description}
        </p>
        <p className="mt-6 text-sm text-accent">{viewProject}</p>
      </div>
    </a>
  );
}
