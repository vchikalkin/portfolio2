import { getTranslations } from 'next-intl/server';
import { HomeLabContent } from '@/components/sections/home-lab-content';

export async function HomeLabSection() {
  const t = await getTranslations('HomeLab');

  return <HomeLabContent title={t('title')} description={t('description')} />;
}
