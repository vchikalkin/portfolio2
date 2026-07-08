import { SectionShell } from '@/components/layout/section-shell';

interface HomeLabContentProps {
  readonly title: string;
  readonly description: string;
}

export function HomeLabContent({ title, description }: HomeLabContentProps) {
  return (
    <SectionShell id="home-lab">
      <div className="card-hover max-w-3xl rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8">
        <h2 id="home-lab-title" className="text-2xl font-medium tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      </div>
    </SectionShell>
  );
}
