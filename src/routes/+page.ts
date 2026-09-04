import { Homepage } from "$lib/content";

export function load() {
    return {
        experience: Homepage.sortCards(Homepage.experience),
        projects: Homepage.sortCards(Homepage.projects),
        research: Homepage.sortCards(Homepage.research)
    };
}
