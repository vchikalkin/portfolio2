'use client';

import { domMax,LazyMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export function MotionProvider({ children }: Readonly<PropsWithChildren>) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
