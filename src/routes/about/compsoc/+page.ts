import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "CompSoc ~ Jack Gledhill",
            description: "Sheffield CompSoc is the University of Sheffield's Computer Science society, providing a platform for students to engage with technology, collaborate on projects, and participate in events. As a First Year Representative, I helped organise events and support new members.",
            keywords: [
                "CompSoc",
                "Sheffield CompSoc",
                "Computer Science society",
                "University of Sheffield",
                "Sheffield Students' Union"
            ]
        },
		name: "Sheffield CompSoc",
		start: "Oct 2024",
		end: "May 2025",
		position: "First Year Representative",
		banner: "/images/compsoc/banner.webp",
		logo: "/images/compsoc/logo.webp",
		links: {
			discord: "3e9GMgc",
			github: "shefcompsoc",
			instagram: "shefcompsoc",
			linkedin: "shefcompsoc",
			website: "shefcompsoc.uk"
		}
	};
};