import { Homepage } from "$lib/content";

export function load() {
    return {
        experience: Homepage.experience,
        projects: Homepage.projects,
        research: Homepage.research
    };
}
