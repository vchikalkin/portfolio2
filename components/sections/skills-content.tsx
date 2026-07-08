import { TechIcon } from '@/components/icons/tech-icon';
import { SectionShell } from '@/components/layout/section-shell';

export interface SkillCategoryEntry {
  readonly id: string;
  readonly label: string;
  readonly skills: readonly { readonly id: string; readonly label: string }[];
}

interface SkillsContentProps {
  readonly title: string;
  readonly categories: readonly SkillCategoryEntry[];
}

export function SkillsContent({ title, categories }: SkillsContentProps) {
  const visibleCategories = categories.filter((category) => category.skills.length > 0);

  return (
    <SectionShell id="skills">
      <div className="max-w-3xl">
        <h2 id="skills-title" className="mb-10 text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {visibleCategories.map((category) =>
            { return <div key={category.id}>
              <h3 className="mb-4 font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
                {category.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) =>
                  { return <li key={skill.id}>
                    <span className="card-hover inline-flex items-center gap-2 rounded-lg border border-border-subtle px-3 py-1.5 text-sm text-muted-foreground">
                      <TechIcon className="size-3.5 opacity-80" id={skill.id} />
                      {skill.label}
                    </span>
                  </li> }
                )}
              </ul>
            </div> }
          )}
        </div>
      </div>
    </SectionShell>
  );
}
