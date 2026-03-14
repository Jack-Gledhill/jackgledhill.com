import { readFiles } from '$lib/content';

export type Paper = {
    title: string;
    description: string;
    draft: boolean;
    authors: string[];
    journal: string;
    date: Date;
    links: object;
};

export type PaperFile = {
    metadata: Paper;
    default: any;
    slug?: string;
};

export async function getAllPapers(): Promise<PaperFile[]> {
    const papers = await readFiles(
        import.meta.glob('/src/content/papers/*.md', {
            eager: true
        })
    );

    return papers.sort(
        (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
}

export async function getPaper(slug: string): Promise<PaperFile> {
    return await import(`../../content/papers/${slug}.md`);
}
