import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "ShefESH ~ Jack Gledhill",
            description: "ShefESH runs weekly sessions for students to learn about ethical hacking and cybersecurity. It is a community of like-minded individuals at the University of Sheffield who are passionate about technology and security.",
            keywords: [
                "Ethical hacking",
                "ShefESH",
                "Sheffield ethical hackers",
                "University of Sheffield",
                "Sheffield Students' Union"
            ]
        },
		name: "Sheffield Ethical Hackers",
		start: "March 2025",
		end: "present",
		position: "Inclusions Officer",
		banner: "/images/shefesh/banner.webp",
		logo: "/images/shefesh/logo.webp",
		links: {
			discord: "rhfnwgphdx",
			github: "ShefESH",
			instagram: "_shefesh",
			linkedin: "sheffield-ethical-student-hackers",
			website: "shefesh.com"
		}
	};
};