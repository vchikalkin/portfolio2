import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { SectionId } from '@/types';

interface SectionShellProps {
  readonly id: SectionId;
  readonly eyebrow: string;
  readonly children: ReactNode;
  readonly className?: string;
}

export function SectionShell({ id, eyebrow, children, className }: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('relative scroll-mt-24 py-20 md:py-32', className)}
    >
      <div className="mb-10 flex items-center gap-4 md:mb-14">
        <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
          {eyebrow}
        </span>
        <div className="h-px flex-1 bg-border-subtle" />
      </div>
      {children}
    </section>
  );
}
