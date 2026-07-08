import { getTranslations } from 'next-intl/server';
import { ServicesContent } from '@/components/sections/services-content';

const listItemIds = [
  'portfolio_site',
  'personal_site',
  'landing',
  'company_site',
  'internet_service',
  'web_app',
  'telegram_mini_app',
  'telegram_bot',
  'project_launch_help',
] as const;

export async function ServicesSection() {
  const t = await getTranslations('Services');

  const listItems = listItemIds.map((id) => t(`list.${id}`));

  return (
    <ServicesContent
      title={t('title')}
      lead={t('lead')}
      listItems={listItems}
      ctaLabel={t('cta')}
    />
  );
}
