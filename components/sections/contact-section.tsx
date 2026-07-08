import { getTranslations } from 'next-intl/server';
import { ContactContent } from '@/components/sections/contact-content';

export async function ContactSection() {
  const t = await getTranslations('Contact');

  return (
    <ContactContent
      eyebrow={t('eyebrow')}
      title={t('title')}
      description={t('description')}
      emailLabel={t('email')}
      telegramLabel={t('telegram')}
      githubLabel={t('github')}
      linkedinLabel={t('linkedin')}
      resumeLabel={t('resume')}
      copyEmailLabel={t('copyEmail')}
      copiedLabel={t('copied')}
      soundcloudLabel={t('soundcloud')}
      instagramLabel={t('instagram')}
    />
  );
}
