import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@/components/controls/theme-provider';
import type { AppLocale } from '@/i18n/routing';

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

interface LocaleDocumentProps {
  readonly locale: AppLocale;
  readonly children: ReactNode;
}

export async function LocaleDocument({
  locale,
  children,
}: LocaleDocumentProps) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={`${ibmPlexSans.variable} ${sourceSerif.variable} ${ibmPlexMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
