import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SiteShell } from '@/components/layout/site-shell';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ServicesSection } from '@/components/sections/services-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';

interface HomePageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const canonicalUrl = `${siteConfig.url}/${locale}`;
  const languages: Record<string, string> = {};

  for (const current of routing.locales) {
    languages[current] = `${siteConfig.url}/${current}`;
  }

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      url: canonicalUrl,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const jobTitle = locale === 'ru' ? 'Full Stack разработчик' : 'Full Stack Developer';
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.telegram,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
    ].filter(Boolean),
  };

  return (
    <SiteShell>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </SiteShell>
  );
}
