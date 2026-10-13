'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

interface SetHtmlLangProps {
  readonly locale: string;
}

export function SetHtmlLang({ locale }: SetHtmlLangProps) {
  const t = useTranslations('Meta');
  const title = t('title');

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = title;
  }, [locale, title]);

  return null;
}
