import { resolveDate, resolveFiles } from '$lib/mdsvex';

export interface Project extends Mdsvex.Entry {
    title: string;
    type: string;
    draft: boolean;
    date: Partials.Date;
    logo: Partials.Image;
    links: Partials.Socials;
    technologies: string[];
}

export const projects: Project[] = resolveFiles(
    import.meta.glob('/src/content/projects/*.md', { eager: true })
) as Project[];
projects.sort((a, b) => (resolveDate(a.date.end) > resolveDate(b.date.end) ? -1 : 1));