import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		name: "Not Only Dungeons and Dragons Society",
		joined: "March 2025",
		left: "present",
		position: "Webmaster",
		banner: "/images/noddsoc-banner.jpg",
		logo: "/images/noddsoc.png",
		links: {
			discord: "E6F7Unz",
			github: "Sheffield-NoDDSoc",
			instagram: "noddsoc",
			website: "noddsoc.co.uk"
		}
	};
};