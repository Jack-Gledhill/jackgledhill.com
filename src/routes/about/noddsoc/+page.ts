import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "NoDDSoc ~ Jack Gledhill",
            description: "NoDDSoc is the University of Sheffield's TTRPG society, providing a welcoming community for tabletop RPG enthusiasts. The society hosts regular events, campaigns, and social gatherings for students to engage in D&D and other TTRPGs.",
            keywords: [
                "NoDDSoc",
                "Dungeons and Dragons",
                "TTRPGs",
                "University of Sheffield",
                "Sheffield Students' Union",
                "Sheffield DnD"
            ]
        },
		name: "Sheffield NoDDSoc",
		start: "March 2025",
		end: "present",
		position: "Webmaster",
		banner: "/images/noddsoc-banner.webp",
		logo: "/images/noddsoc.webp",
		links: {
			discord: "E6F7Unz",
			github: "Sheffield-NoDDSoc",
			instagram: "noddsoc",
			website: "noddsoc.co.uk"
		}
	};
};