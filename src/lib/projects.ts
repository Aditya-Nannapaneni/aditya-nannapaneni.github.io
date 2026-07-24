import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function getAllProjects(): Promise<Project[]> {
  return getCollection('projects');
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects
    .filter((p) => p.data.featured)
    .sort((a, b) => (a.data.featuredOrder ?? 99) - (b.data.featuredOrder ?? 99));
}

export async function getProjectsByCategory(
  category: Project['data']['category'],
): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects
    .filter((p) => p.data.category === category)
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export function projectHref(project: Project): string {
  return `/projects/${project.id}/`;
}

export function projectKeyLine(project: Project): string | undefined {
  return project.data.keyResult ?? project.data.researchQuestion;
}
