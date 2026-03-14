import { readFiles } from '$lib/content';

export type Event = {
    title: string;
    description: string;
    keywords: string[];
    draft: boolean;
    date: Date;
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
    const events = await readFiles(
        import.meta.glob('/src/content/events/*.md', {
            eager: true
        })
    );

    return events.sort(
        (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
}

export async function getEvent(slug: string): Promise<EventFile> {
    return await import(`../../content/events/${slug}.md`);
}
