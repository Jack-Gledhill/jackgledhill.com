import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "HackSheffield 9 ~ Jack Gledhill",
            description: "Sheffield's ninth hackathon, and the third largest hackathon in the UK. HackSheffield was organised by Sheffield CompSoc and took place in November 2024. The event brought together students from across the UK to collaborate on innovative projects over a weekend.",
            keywords: [
                "Hackathon",
                "HackSheffield",
                "HackSheffield 9",
                "Sheffield hackathon",
                "Sheffield CompSoc"
            ]
        },
		name: "HackSheffield 9",
		start: "November 2024",
		banner: "/images/hacksheffield9/banner.webp",
		logo: "/images/hacksheffield9/logo.webp",
		links: {
			website: "hacksheffield.uk"
		}
	};
};