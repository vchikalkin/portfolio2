import type { Metadata } from 'next';
import { LocaleHome } from '@/lib/locale-home';
import { buildLocaleMetadata } from '@/lib/locale-metadata';

export function generateMetadata(): Promise<Metadata> {
  return buildLocaleMetadata('en');
}

export default function EnHomePage() {
  return <LocaleHome locale="en" />;
}
