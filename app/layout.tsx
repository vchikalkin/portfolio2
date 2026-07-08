import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { getTranslations } from 'next-intl/server';
import { ThemeProvider } from '@/components/controls/theme-provider';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: routing.defaultLocale, namespace: 'Meta' });

  return {
    metadataBase: new URL(siteConfig.url),
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang={routing.defaultLocale}
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
