import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';
import { ThemeProvider } from '@/components/controls/theme-provider';
import { siteConfig } from '@/config/site';
import { defaultLocale } from '@/i18n/routing';
import ruMessages from '@/messages/ru.json';

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-plex-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: ruMessages.Meta.title,
  description: ruMessages.Meta.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: ruMessages.Meta.title,
    description: ruMessages.Meta.description,
    type: 'website',
    url: siteConfig.url,
    siteName: ruMessages.Card.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: ruMessages.Meta.title,
    description: ruMessages.Meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang={defaultLocale}
      className={`${ibmPlexSans.variable} ${sourceSerif.variable} ${ibmPlexMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
