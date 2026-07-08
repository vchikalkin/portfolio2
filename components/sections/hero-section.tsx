import { getTranslations } from 'next-intl/server';
import { HeroContent } from '@/components/sections/hero-content';

export async function HeroSection() {
  const t = await getTranslations('Hero');
  const trust = await getTranslations('Trust');

  return (
    <HeroContent
      name={t('name')}
      tagline={t('tagline')}
      role={t('role')}
      description={t('description')}
      ctaPrimary={t('ctaPrimary')}
      ctaSecondary={t('ctaSecondary')}
      trustYears={trust('years')}
      trustCompanies={trust('companies')}
      trustFullstack={trust('fullstack')}
    />
  );
}
