import { SectionShell } from '@/components/layout/section-shell';

export interface SkillCategoryEntry {
  readonly id: string;
  readonly label: string;
  readonly skills: readonly { readonly id: string; readonly label: string }[];
}

interface SkillsContentProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly categories: readonly SkillCategoryEntry[];
}

export function SkillsContent({ eyebrow, title, categories }: SkillsContentProps) {
  const visibleCategories = categories.filter((category) => category.skills.length > 0);

  return (
    <SectionShell id="skills" eyebrow={eyebrow}>
      <h2 id="skills-title" className="mb-14 text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>

      <div className="grid gap-10 sm:grid-cols-2">
        {visibleCategories.map((category) => 
          { return <div key={category.id}>
            <h3 className="mb-4 font-mono text-xs tracking-[0.12em] text-accent uppercase">
              {category.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => 
                { return <li key={skill.id}>
                  <span className="card-hover inline-block rounded-lg border border-border-subtle px-3 py-1.5 text-sm text-muted-foreground">
                    {skill.label}
                  </span>
                </li> }
              )}
            </ul>
          </div> }
        )}
      </div>
    </SectionShell>
  );
}
