import { getTranslations } from 'next-intl/server';
import { AboutContent } from '@/components/sections/about-content';

export async function AboutSection() {
  const t = await getTranslations('About');
  const homeLabT = await getTranslations('HomeLab');

  const facts = [] as const;

  return (
    <AboutContent
      title={t('title')}
      summary={t('summary')}
      facts={facts}
      highlightTitle={t('highlight.title')}
      highlightDescription={t('highlight.description')}
      homeLabTitle={homeLabT('title')}
      homeLabDescription={homeLabT('description')}
    />
  );
}
