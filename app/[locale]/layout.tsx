import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { PropsWithChildren } from 'react';
import { MotionProvider } from '@/components/motion/motion-provider';
import { SetHtmlLang } from '@/components/set-html-lang';
import { routing } from '@/i18n/routing';

interface LocaleLayoutProps extends PropsWithChildren {
  readonly params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SetHtmlLang locale={locale} />
      <MotionProvider>{children}</MotionProvider>
    </NextIntlClientProvider>
  );
}
