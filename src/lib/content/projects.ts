import { readFiles } from '$lib/content';
import { compareEnds, Project, type ProjectProps } from '$lib/models';

export class ProjectFile {
    metadata: Project;
    content: any;
    slug?: string;

    constructor(metadata: object, content: any, slug?: string) {
        this.metadata = new Project(metadata as ProjectProps);
        this.content = content;
        this.slug = slug;
    }
}

export async function getAllProjects(): Promise<ProjectFile[]> {
    const files = await readFiles(
        import.meta.glob('/src/content/home/projects/*.md', {
            eager: true
        })
    );

    const projects: ProjectFile[] = [];
    for (const f of files) {
        projects.push(new ProjectFile(f.metadata, f.default, f.slug));
    }

    return projects.sort((a, b) => compareEnds(b.metadata.date, a.metadata.date));
}

export async function getProject(slug: string): Promise<ProjectFile | null> {
    try {
        const file = await import(`../../content/home/projects/${slug}.md`);
        return new ProjectFile(file.metadata, file.default);
    } catch {
        return null;
    }
}