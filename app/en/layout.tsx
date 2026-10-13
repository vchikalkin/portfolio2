import type { ReactNode } from 'react';
import { LocaleDocument } from '@/components/controls/locale-document';

export default function EnLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <LocaleDocument locale="en">{children}</LocaleDocument>;
}
