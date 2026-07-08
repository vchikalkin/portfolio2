'use client';

import type { LucideIcon } from 'lucide-react';
import { ExternalLink } from '@/components/ui/external-link';
import { cn } from '@/lib/utils';

interface ContactRowProps {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly children: React.ReactNode;
  readonly href?: string;
  readonly onClick?: () => void;
  readonly actionIcon?: LucideIcon;
  readonly actionLabel?: string;
}

export function ContactRow({
  icon: Icon,
  label,
  children,
  href,
  onClick,
  actionIcon: ActionIcon,
  actionLabel,
}: ContactRowProps) {
  const content = (
    <div
      className={cn(
        'card-hover flex items-center justify-between gap-4 rounded-xl border border-border-subtle bg-surface/50 px-5 py-4',
      )}
    >
      <div className="flex items-center gap-4">
        <Icon aria-hidden="true" className="size-4 text-muted-foreground" />
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-sm">{children}</p>
        </div>
      </div>
      {ActionIcon && actionLabel ? (
        <ActionIcon aria-hidden="true" className="size-4 text-muted-foreground" />
      ) : null}
    </div>
  );

  if (href) {
    return (
      <li>
        <ExternalLink className="block w-full" href={href} showIcon={false}>
          {content}
        </ExternalLink>
      </li>
    );
  }

  return (
    <li>
      <button
        aria-label={actionLabel}
        className="w-full text-left"
        type="button"
        onClick={onClick}
      >
        {content}
      </button>
    </li>
  );
}
