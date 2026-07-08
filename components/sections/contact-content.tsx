'use client';

import { Check, CodeXml, Copy, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { SectionShell } from '@/components/layout/section-shell';
import { ContactRow } from '@/components/sections/contact-row';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

interface ContactContentProps {
  readonly title: string;
  readonly description: string;
  readonly emailLabel: string;
  readonly telegramLabel: string;
  readonly githubLabel: string;
  readonly linkedinLabel: string;
  readonly resumeLabel: string;
  readonly copyEmailLabel: string;
  readonly copiedLabel: string;
  readonly soundcloudLabel: string;
  readonly instagramLabel: string;
}

export function ContactContent({
  title,
  description,
  emailLabel,
  telegramLabel,
  githubLabel,
  linkedinLabel,
  resumeLabel,
  copyEmailLabel,
  copiedLabel,
  soundcloudLabel,
  instagramLabel,
}: ContactContentProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(siteConfig.email)
      .then(() => {
        setHasCopied(true);
        window.setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      })
      .catch(() => {
        window.location.href = `mailto:${siteConfig.email}`;
      });
  };

  const EmailActionIcon = hasCopied ? Check : Copy;

  return (
    <SectionShell id="contact" className="min-h-[40vh]">
      <div className="max-w-3xl">
        <h2 id="contact-title" className="text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>

        <div className="mt-10">
          <a href={siteConfig.links.telegram} rel="noopener noreferrer" target="_blank">
            <Button className="gap-2" size="lg">
              <Send aria-hidden="true" className="size-4" />
              {telegramLabel}
            </Button>
          </a>
        </div>

        <ul className="mt-12 space-y-4">
          <ContactRow href={siteConfig.links.telegram} icon={Send} label={telegramLabel}>
            @vchikalkin
          </ContactRow>

          <ContactRow href={siteConfig.links.github} icon={CodeXml} label={githubLabel}>
            github.com/vchikalkin
          </ContactRow>

          <ContactRow
            actionIcon={EmailActionIcon}
            actionLabel={hasCopied ? copiedLabel : copyEmailLabel}
            icon={Mail}
            label={emailLabel}
            onClick={handleCopyEmail}
          >
            {siteConfig.email}
          </ContactRow>

          <ContactRow href={siteConfig.links.linkedin} icon={Mail} label={linkedinLabel}>
            LinkedIn
          </ContactRow>

          {siteConfig.links.resume ? (
            <ContactRow href={siteConfig.links.resume} icon={Mail} label={resumeLabel}>
              {resumeLabel}
            </ContactRow>
          ) : null}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground/60">
          <a
            className="transition-colors hover:text-muted-foreground"
            href={siteConfig.links.soundcloud}
            rel="noopener noreferrer"
            target="_blank"
          >
            {soundcloudLabel}
          </a>
          <span aria-hidden="true" className="text-border-subtle">
            ·
          </span>
          <a
            className="transition-colors hover:text-muted-foreground"
            href={siteConfig.links.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            {instagramLabel}
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
