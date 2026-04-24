import { resolveDate, resolveFiles } from '$lib/mdsvex';

export interface Event extends Mdsvex.Entry {
    title: string;
    type: string;
    draft: boolean;
    date: string;
    logo: string;
    links: Partials.Socials;
}

export const events: Event[] = resolveFiles(
    import.meta.glob('/src/content/events/*.md', { eager: true })
) as Event[];
events.sort((a, b) => resolveDate(a.date) > resolveDate(b.date) ? -1 : 1);