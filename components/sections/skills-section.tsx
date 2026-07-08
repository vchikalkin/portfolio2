import { getTranslations } from 'next-intl/server';
import { SkillsContent } from '@/components/sections/skills-content';
import { skillCategories } from '@/data/skills';

export async function SkillsSection() {
  const t = await getTranslations('Skills');

  const categories = skillCategories
    .map((category) => { return {
      id: category.id,
      label: t(`categories.${category.id}`),
      skills: category.skills
        .filter((skillId) => !skillId.startsWith('todo'))
        .map((skillId) => { return {
          id: skillId,
          label: t(`items.${skillId}`),
        } }),
    } })
    .filter((category) => category.skills.length > 0);

  return <SkillsContent eyebrow={t('eyebrow')} title={t('title')} categories={categories} />;
}
