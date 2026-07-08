'use client';

import { animate, useInView, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { easeOut, motionDuration } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface CounterProps {
  readonly value: number;
  readonly suffix?: string;
  readonly className?: string;
  readonly duration?: number;
}

export function Counter({
  value,
  suffix = '',
  className,
  duration = motionDuration.counter,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || !ref.current) {
      return;
    }

    if (isReducedMotion) {
      ref.current.textContent = String(value);

      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: easeOut,
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = String(Math.round(latest));
        }
      },
    });

    return () => {
      controls.stop();
    };
  }, [isInView, isReducedMotion, motionValue, value, duration]);

  return (
    <span className={cn('tabular-nums', className)}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
