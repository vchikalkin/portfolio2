'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export function ThroughLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const isReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-6 z-30 hidden h-screen w-px md:left-8 lg:block"
    >
      <div className="absolute inset-0 bg-foreground/10" />
      <m.div
        className="absolute top-0 left-0 w-full origin-top bg-accent"
        style={isReducedMotion ? { scaleY: 1 } : { scaleY }}
      />
    </div>
  );
}
