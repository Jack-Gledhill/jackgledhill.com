import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		name: "Constellation",
		position: "Personal project",
		start: "July 2024",
		end: "present",
		banner: "/images/nebula.jpg",
		logo: "/images/constellation.png",
		links: {
			github: "constellation-net",
			website: "starsystem.dev"
		}
	};
};