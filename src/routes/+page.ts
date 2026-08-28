import { Homepage } from "$lib/content";

export function load() {
    return {
        committees: Homepage.committees,
        events: Homepage.events,
        projects: Homepage.projects,
        research: Homepage.research
    };
}
