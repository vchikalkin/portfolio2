import { getTranslations } from 'next-intl/server';
import { AboutContent } from '@/components/sections/about-content';

export async function AboutSection() {
  const t = await getTranslations('About');

  const facts = [t('facts.experience'), t('facts.passion'), t('facts.products')] as const;

  return (
    <AboutContent
      eyebrow={t('eyebrow')}
      title={t('title')}
      summary={t('summary')}
      facts={facts}
      initials={t('initials')}
      photoAlt={t('photoAlt')}
    />
  );
}
