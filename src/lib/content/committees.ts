import  { readFiles } from '$lib/content';

export type Committee = {
    title: string;
    description: string;
    keywords: string[];
    draft: boolean;
    start: Date;
    end?: Date;
    position: string;
    banner: string;
    logo: string;
    links: object;
}

export type CommitteeFile = {
    metadata: Committee;
    default: any;
    slug?: string;
}

export async function getAllCommittees(): Promise<CommitteeFile[]> {
    const committees = await readFiles(
        import.meta.glob('/src/content/committees/*.md', {
            eager: true
        })
    );

    return committees.sort(
        (a, b) => new Date(b.metadata.start).getTime() - new Date(a.metadata.start).getTime()
    );
}

export async function getCommittee(slug: string): Promise<CommitteeFile> {
    return await import(`../../content/committees/${slug}.md`);
}