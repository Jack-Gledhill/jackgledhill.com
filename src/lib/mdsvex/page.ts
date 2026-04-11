import { resolveFiles } from '$lib/mdsvex';

export interface Page extends Mdsvex.Entry, Config.Head {
    draft: boolean;
}

export const pages: Page[] = resolveFiles(
    import.meta.glob('/src/content/pages/*.md', { eager: true })
) as Page[];

export function getPage(slug: string): Page | undefined {
    return pages.filter((page) => page.slug === slug)[0] || undefined;
}