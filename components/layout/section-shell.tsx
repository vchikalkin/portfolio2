import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { SectionId } from '@/types';

interface SectionShellProps {
  readonly id: SectionId;
  readonly children: ReactNode;
  readonly className?: string;
}

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('relative scroll-mt-24 py-12 md:py-16', className)}
    >
      {children}
    </section>
  );
}
