'use client';

import { m, useReducedMotion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface StaggerItemProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const isReducedMotion = useReducedMotion();

  return (
    <m.div className={className} variants={isReducedMotion ? undefined : fadeUp}>
      {children}
    </m.div>
  );
}
