import { getTranslations } from 'next-intl/server';
import { ExperienceContent } from '@/components/sections/experience-content';
import { experienceItems } from '@/data/experience';
import { isPlaceholder } from '@/lib/content';

export async function ExperienceSection() {
  const t = await getTranslations('Experience');

  const items = experienceItems.map((item) => {
    const achievements = ['0', '1']
      .map((key) => t(`items.${item.id}.achievements.${key}`))
      .filter((achievement) => !isPlaceholder(achievement));

    return {
      id: item.id,
      url: item.url,
      title: t(`items.${item.id}.title`),
      role: t(`items.${item.id}.role`),
      period: t(`items.${item.id}.period`),
      achievements,
    };
  });

  return (
    <ExperienceContent eyebrow={t('eyebrow')} title={t('title')} items={items} />
  );
}
