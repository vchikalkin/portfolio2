'use client';

import { useEffect, useState } from 'react';
import type { SectionId } from '@/types';

export function useActiveSection(sectionIds: readonly SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0] ?? 'hero');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.querySelector<HTMLElement>(`#${id}`))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .toSorted((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) {
          return;
        }

        const top = visible[0];

        if (top.target.id) {
          setActiveSection(top.target.id as SectionId);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
