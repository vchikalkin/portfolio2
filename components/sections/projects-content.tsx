import { SectionShell } from '@/components/layout/section-shell';
import { ProjectCard } from '@/components/sections/project-card';

export interface ProjectEntry {
  readonly id: string;
  readonly url: string;
  readonly title: string;
  readonly description: string;
  readonly featured?: boolean;
}

interface ProjectsContentProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly viewProject: string;
  readonly items: readonly ProjectEntry[];
}

export function ProjectsContent({
  eyebrow,
  title,
  viewProject,
  items,
}: ProjectsContentProps) {
  const featured = items.find((item) => item.featured);
  const rest = items.filter((item) => !item.featured);

  return (
    <SectionShell id="projects" eyebrow={eyebrow}>
      <h2 id="projects-title" className="mb-14 text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>

      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        {featured ? (
          <ProjectCard
            featured
            className="lg:col-span-3"
            item={featured}
            viewProject={viewProject}
          />
        ) : null}

        <div className="flex flex-col gap-6 lg:col-span-2">
          {rest.map((item) => (
            <ProjectCard key={item.id} item={item} viewProject={viewProject} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
