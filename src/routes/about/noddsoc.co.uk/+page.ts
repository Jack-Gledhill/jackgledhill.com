import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		name: "noddsoc.co.uk",
		position: "NoDDSoc",
		start: "May 2025",
		end: "present",
		banner: "/images/noddsoc-co-uk-banner.png",
		logo: "/images/noddsoc.png",
		links: {
			github: "Sheffield-NoDDSoc/noddsoc.co.uk",
			website: "noddsoc.co.uk"
		}
	};
};