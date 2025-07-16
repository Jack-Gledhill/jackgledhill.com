import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "noddsoc.co.uk ~ Jack Gledhill",
            description: "A website for the NoDDSoc, the University of Sheffield's TTRPG society. It provides information about the society, its events, and how to get involved. The site is built using MkDocs with Material for MkDocs.",
            keywords: [
                "Web development",
                "Material for MkDocs",
                "MkDocs",
                "NoDDSoc",
                "TTRPG society",
                "University of Sheffield",
                "Sheffield Students' Union",
            ]
        },
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