'use client';

import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type KeyboardEvent, useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';

interface MobileNavProps {
  readonly items: readonly NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const t = useTranslations('Nav');
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  function handleToggle() {
    setIsOpen((current) => !current);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="icon"
        className="relative z-50 size-8 rounded-md border-border-subtle bg-background/90"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? t('menuClose') : t('menu')}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-4" />
        ) : (
          <Menu aria-hidden="true" className="size-4" />
        )}
      </Button>

      {isOpen ? (
        <>
          <button
            type="button"
            tabIndex={-1}
            className="fixed inset-0 z-40 cursor-default"
            aria-label={t('menuClose')}
            onClick={handleClose}
            onPointerDown={handleClose}
          />
          <div
            id={panelId}
            className="fixed inset-x-0 top-14 z-50 border-b border-border-subtle bg-background/90 backdrop-blur-sm"
          >
            <nav aria-label={t('aria')} className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              <ul className="flex flex-col">
                {items.map((item) => {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className={cn(
                          'block px-3 py-2.5 text-sm transition-colors',
                          'text-muted-foreground hover:text-foreground',
                        )}
                        onClick={handleClose}
                        onKeyDown={handleKeyDown}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
