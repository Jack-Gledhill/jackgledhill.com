import { readFiles } from '$lib/content';

export type Project = {
    title: string;
    description: string;
    keywords: string[];
    draft: boolean;
    position: string;
    start: string;
    end: string;
    banner: string;
    logo: string;
    links: object;
};

export type ProjectFile = {
    metadata: Project;
    default: any;
    slug?: string;
};

export async function getAllProjects(): Promise<ProjectFile[]> {
    return await readFiles(
        import.meta.glob('/src/content/projects/*.md', {
            eager: true
        })
    );
}

export async function getProject(slug: string): Promise<ProjectFile> {
    return await import(`/src/content/projects/${slug}.md`);
}
