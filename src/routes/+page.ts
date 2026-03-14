import { error } from '@sveltejs/kit';
import { getAllCommittees, getAllEvents, getAllPapers, getAllProjects } from '$lib/content';

export async function load() {
    try {
        const page = await import('/src/content/index.md');
        const committees = await getAllCommittees();
        const events = await getAllEvents();
        const papers = await getAllPapers();
        const projects = await getAllProjects();

        return {
            metadata: page.metadata,
            committees: committees,
            events: events,
            papers: papers,
            projects: projects
        };
    } catch (e) {
        console.log(e);
        error(404, "Missing index.md content file");
    }
}