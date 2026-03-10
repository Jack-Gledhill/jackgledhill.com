import { readFiles } from '$lib/content';

export type Event = {
    title: string;
    description: string;
    keywords: string[];
    draft: boolean;
    start: string;
    banner: string;
    logo: string;
    links: object;
};

export type EventFile = {
    metadata: Event;
    default: any;
    slug?: string;
};

export async function getAllEvents(): Promise<EventFile[]> {
    return await readFiles(
        import.meta.glob('/src/content/events/*.md', {
            eager: true
        })
    );
}

export async function getEvent(slug: string): Promise<EventFile> {
    return await import(`/src/content/events/${slug}.md`);
}
