export const skillItems = [
  'typescript',
  'react',
  'nextjs',
  'nodejs',
  'nestjs',
  'trpc',
  'redis',
  'postgresql',
  'docker',
  'dotnet',
] as const;

export type SkillId = (typeof skillItems)[number];
