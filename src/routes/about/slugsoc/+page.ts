import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "SLUGSoc ~ Jack Gledhill",
            description: "SLUGSoc is Sheffield's LAN Gaming Society, providing a space for students to enjoy video games together. It hosts regular LANs, socials and tournaments, and is a great way to meet fellow gamers at the University of Sheffield.",
            keywords: [
                "LAN gaming",
                "SLUGSoc",
                "University of Sheffield",
                "Sheffield Students' Union"
            ]
        },
		name: "Sheffield LAN Gaming Society",
		start: "March 2025",
		end: "present",
		position: "Technical Officer",
		banner: "/images/slugsoc-banner.webp",
		logo: "/images/slugsoc.webp",
		links: {
			discord: "VvUCXCT",
			github: "SLUGSoc",
			instagram: "slugsoc",
			linkedin: "university-of-sheffield-lan-gaming-society",
			website: "slugsoc.co.uk"
		}
	};
};