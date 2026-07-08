'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface FadeInProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const isReducedMotion = useReducedMotion();

  return (
    <m.div
      className={cn(className)}
      initial={isReducedMotion ? false : 'hidden'}
      transition={delay > 0 ? { delay } : undefined}
      variants={fadeUp}
      viewport={viewportOnce}
      whileInView={isReducedMotion ? undefined : 'visible'}
    >
      {children}
    </m.div>
  );
}
