export type File = {
    metadata: any;
    default: any;
    slug?: string;
}

export async function readFiles(paths: Record<string, File>) {
    const objs: File[] = [];

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            file.slug = slug;
            objs.push(file);
        }
    }

    return objs;
}

export * from './committees';
export * from './events';
export * from './papers';
export * from './projects';