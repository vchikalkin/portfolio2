export const easeOut = [0.22, 1, 0.36, 1] as const;

export const motionDuration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  counter: 1.4,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.normal, ease: easeOut },
  },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDuration.normal, ease: easeOut },
  },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
} as const;

export const viewportOnce = {
  once: true,
  margin: '-80px' as const,
};

export const lineDraw = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
} as const;
