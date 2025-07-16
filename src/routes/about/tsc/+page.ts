import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "TSC ~ Jack Gledhill",
            description: "The Technical Services Committee is a group of volunteer students at the University of Sheffield, who run the events, gigs and club nights at the Students' Union.",
            keywords: [
                "Entertainment",
                "DMX",
                "XLR",
                "Pioneer DJ",
                "Sound engineering",
                "Light programming",
                "University of Sheffield",
                "Sheffield Students' Union"
            ]
        },
		name: "Technical Services Committee",
		start: "Dec 2024",
		end: "present",
		position: "Junior Crew Member",
		banner: "/images/tsc/banner.webp",
		logo: "/images/tsc/logo.webp",
		links: {
			instagram: "tsc_sheffield",
			linkedin: "tsc-sheffield",
			website: "tsc.sites.sheffield.ac.uk"
		}
	};
};