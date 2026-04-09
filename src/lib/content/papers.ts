import { readFiles } from '$lib/content';
import { Paper, type PaperProps } from '$lib/models';

export class PaperFile {
    metadata: Paper;
    content: any;
    slug?: string;

    constructor(metadata: object, content: any, slug?: string) {
        this.metadata = new Paper(metadata as PaperProps);
        this.content = content;
        this.slug = slug;
    }
}

export async function getAllPapers(): Promise<PaperFile[]> {
    const files = await readFiles(
        import.meta.glob('/src/content/home/papers/*.md', {
            eager: true
        })
    );

    const papers: PaperFile[] = [];
    for (const f of files) {
        papers.push(new PaperFile(f.metadata, f.default, f.slug));
    }

    return papers.sort(
        (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
}

export async function getPaper(slug: string): Promise<PaperFile | null> {
    try {
        const file = await import(`../../content/home/papers/${slug}.md`);
        return new PaperFile(file.metadata, file.default, slug);
    } catch {
        return null;
    }
}
