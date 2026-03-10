import  { readFiles } from '$lib/content';

export type Committee = {
    title: string;
    description: string;
    keywords: string[];
    draft: boolean;
    start: string;
    end: string;
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
    return await readFiles(
        import.meta.glob('/src/content/committees/*.md', {
            eager: true
        })
    );
}

export async function getCommittee(slug: string): Promise<CommitteeFile> {
    return await import(`/src/content/committees/${slug}.md`);
}