import './globals.css';
import type { Metadata, Viewport } from 'next';
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

const { title, description } = ruMessages.Meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  applicationName: ruMessages.Card.name,
  authors: [{ name: ruMessages.Card.name, url: siteConfig.url }],
  creator: ruMessages.Card.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/',
    siteName: ruMessages.Card.name,
    locale: 'ru_RU',
  },
  twitter: {
    // ponytail: no OG image yet — summary, not summary_large_image
    card: 'summary',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2f3f5' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
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
