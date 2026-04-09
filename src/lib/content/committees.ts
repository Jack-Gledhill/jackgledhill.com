import { readFiles } from '$lib/content';
import { Committee, type CommitteeProps, compareEnds } from '$lib/models';

export class CommitteeFile {
    metadata: Committee;
    content: any;
    slug?: string;

    constructor(metadata: object, content: any, slug?: string) {
        this.metadata = new Committee(metadata as CommitteeProps);
        this.content = content;
        this.slug = slug;
    }
}

export async function getAllCommittees(): Promise<CommitteeFile[]> {
    const files = await readFiles(
        import.meta.glob('/src/content/home/committees/*.md', {
            eager: true
        })
    );

    const committees: CommitteeFile[] = [];
    for (const f of files) {
        committees.push(new CommitteeFile(f.metadata, f.default, f.slug));
    }

    return committees.sort((a, b) => compareEnds(b.metadata.date, a.metadata.date));
}

export async function getCommittee(slug: string): Promise<CommitteeFile | null> {
    try {
        const file = await import(`../../content/home/committees/${slug}.md`);
        return new CommitteeFile(file.metadata, file.default, slug);
    } catch {
        return null;
    }
}