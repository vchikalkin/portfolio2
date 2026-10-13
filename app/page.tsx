import { Home } from '@/components/card/home';
import { siteConfig } from '@/config/site';
import ruMessages from '@/messages/ru.json';

export default function HomePage() {
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: ruMessages.Card.name,
    jobTitle: ruMessages.Meta.jobTitle,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.telegram,
      siteConfig.links.linkedin,
    ],
  };

  return (
    <>
      <Home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </>
  );
}
