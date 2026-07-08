'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerContainer, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface StaggerContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const isReducedMotion = useReducedMotion();

  return (
    <m.div
      className={cn(className)}
      initial={isReducedMotion ? false : 'hidden'}
      variants={staggerContainer}
      viewport={viewportOnce}
      whileInView={isReducedMotion ? undefined : 'visible'}
    >
      {children}
    </m.div>
  );
}
