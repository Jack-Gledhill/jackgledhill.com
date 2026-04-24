import { resolveDate, resolveFiles } from '$lib/mdsvex';

export interface Committee extends Mdsvex.Entry {
    title: string;
    position: string;
    draft: boolean;
    date: Partials.Date;
    logo: string;
    links: Partials.Socials;
}

export const committees: Committee[] = resolveFiles(
    import.meta.glob('/src/content/committees/*.md', { eager: true })
) as Committee[];
committees.sort((a, b) => resolveDate(a.date.end) > resolveDate(b.date.end) ? -1 : 1);