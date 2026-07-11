import { getTranslations } from 'next-intl/server';
import { ServicesContent } from '@/components/sections/services-content';

export async function ServicesSection() {
  const t = await getTranslations('Services');

  const listItems = t.raw('list') as string[];

  return (
    <ServicesContent
      title={t('title')}
      lead={t('lead')}
      listItems={listItems}
      ctaLabel={t('cta')}
    />
  );
}
