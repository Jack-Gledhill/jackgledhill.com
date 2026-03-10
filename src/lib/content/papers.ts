import { readFiles } from '$lib/content';

export type Paper = {
    title: string;
    description: string;
    draft: boolean;
    authors: string[];
    date: string;
    links: object;
};

export type PaperFile = {
    metadata: Paper;
    default: any;
    slug?: string;
};

export async function getAllPapers(): Promise<PaperFile[]> {
    return await readFiles(
        import.meta.glob('/src/content/papers/*.md', {
            eager: true
        })
    );
}

export async function getPaper(slug: string): Promise<PaperFile> {
    return await import(`/src/content/papers/${slug}.md`);
}
