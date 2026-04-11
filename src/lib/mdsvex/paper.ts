import { resolveDate, resolveFiles } from '$lib/mdsvex';

export interface Paper extends Mdsvex.Entry {
    title: string;
    journal: string;
    authors: string[];
    draft: boolean;
    date: string;
    links: Partials.Socials;
}

export const papers: Paper[] = resolveFiles(
    import.meta.glob('/src/content/papers/*.md', { eager: true })
) as Paper[];
papers.sort((a, b) => (resolveDate(a.date) > resolveDate(b.date) ? -1 : 1));