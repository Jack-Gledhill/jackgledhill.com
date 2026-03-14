import { readFiles } from '$lib/content';

export type Project = {
    title: string;
    description: string;
    keywords: string[];
    draft: boolean;
    date: Date;
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
    const projects = await readFiles(
        import.meta.glob('/src/content/projects/*.md', {
            eager: true
        })
    );

    return projects.sort(
        (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
}

export async function getProject(slug: string): Promise<ProjectFile> {
    return await import(`../../content/projects/${slug}.md`);
}
