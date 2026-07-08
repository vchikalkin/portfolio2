import { getTranslations } from 'next-intl/server';
import { ServicesContent } from '@/components/sections/services-content';

const serviceIds = ['sites', 'telegram', 'webapps', 'custom'] as const;

export async function ServicesSection() {
  const t = await getTranslations('Services');

  const items = serviceIds.map((id) => {
    return {
      id,
      title: t(`items.${id}.title`),
      description: t(`items.${id}.description`),
    };
  });

  return (
    <ServicesContent
      title={t('title')}
      lead={t('lead')}
      items={items}
      ctaLabel={t('cta')}
    />
  );
}
