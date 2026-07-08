import { getTranslations } from 'next-intl/server';
import { ProjectsContent } from '@/components/sections/projects-content';
import { projectItems } from '@/data/projects';

export async function ProjectsSection() {
  const t = await getTranslations('Projects');

  const items = projectItems.map((item) => { return {
    id: item.id,
    url: item.url,
    featured: item.featured,
    title: t(`items.${item.id}.title`),
    description: t(`items.${item.id}.description`),
  } });

  return (
    <ProjectsContent
      title={t('title')}
      viewProject={t('viewProject')}
      items={items}
    />
  );
}
