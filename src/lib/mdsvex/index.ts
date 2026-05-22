export function getSlug(path: string): string {
    return path.split('/').at(-1)?.replace('.md', '') || path.replace('.md', '');
}

export function resolveFiles(files: Record<string, unknown>): Mdsvex.Entry[] {
    return Object.entries(files).map(([path, resolver]) => {
        return {
            slug: getSlug(path),
            content: (resolver as Mdsvex.File).default,
            ...(resolver as Mdsvex.File).metadata
        } as Mdsvex.Entry;
    });
}

export function resolveDate(date?: string): Date {
    return !date ? new Date() : new Date(date);
}

export * from './committee.ts';
export * from './event.ts';
export * from './page.ts';
export * from './paper.ts';
export * from './project.ts';