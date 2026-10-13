import type { ReactNode } from 'react';
import { LocaleDocument } from '@/components/controls/locale-document';

export default function RuLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <LocaleDocument locale="ru">{children}</LocaleDocument>;
}
