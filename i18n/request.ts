import { getRequestConfig } from 'next-intl/server';
import type ruMessages from '../messages/ru.json';
import { defaultLocale } from './routing';

type Messages = typeof ruMessages;

export default getRequestConfig(async () => {
  const messagesImport = (await import(
    `../messages/${defaultLocale}.json`
  )) as { default: Messages };

  return {
    locale: defaultLocale,
    messages: messagesImport.default,
  };
});
