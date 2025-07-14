import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		name: "Wanderlust",
		position: "HackUPC 2025",
		start: "May 2025",
		banner: "/images/hackupc-banner.png",
		logo: "/images/hackupc.jpg",
		links: {
			github: "thejmfc/hackupc25",
			website: "devpost.com/software/wanderlust-24eodz"
		}
	};
};