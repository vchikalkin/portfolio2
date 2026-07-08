import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly showIcon?: boolean;
}

export function ExternalLink({
  className,
  children,
  showIcon = true,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        'inline-flex items-center gap-1 transition-opacity hover:opacity-80',
        className,
      )}
      {...props}
    >
      {children}
      {showIcon ? <ArrowUpRight aria-hidden="true" className="size-3.5" /> : null}
    </a>
  );
}
