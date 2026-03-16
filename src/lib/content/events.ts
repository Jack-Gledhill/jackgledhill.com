import { readFiles } from '$lib/content';
import { Event, type EventProps } from '$lib/models';

export class EventFile {
    metadata: Event;
    content: any;
    slug?: string;

    constructor(metadata: object, content: any, slug?: string) {
        this.metadata = new Event(metadata as EventProps);
        this.content = content;
        this.slug = slug;
    }
}

export async function getAllEvents(): Promise<EventFile[]> {
    const files = await readFiles(
        import.meta.glob('/src/content/events/*.md', {
            eager: true
        })
    );

    const events: EventFile[] = [];
    for (const f of files) {
        events.push(new EventFile(f.metadata, f.default, f.slug));
    }

    return events.sort(
        (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
}

export async function getEvent(slug: string): Promise<EventFile> {
    const file = await import(`../../content/events/${slug}.md`);
    return new EventFile(file.metadata, file.default, slug);
}
