import { committees, events, projects, papers } from '$lib/mdsvex';

export function load() {
    return {
        committees: committees,
        events: events,
        projects: projects,
        papers: papers
    };
}
