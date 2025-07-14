import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        email: "bWVAamFja2dsZWRoaWxsLmNvbQ==",
        events: [
            {
                name: "Kubernetes Workshop",
                draft: false,
                date: "May 2025",
                logo: "/images/kubernetes.png",
							  slug: "k8s",
                summary: "An introductory workshop on Kubernetes, covering the basics of container orchestration and deployment."
            },
            {
                name: "HackSheffield 9",
                draft: false,
                date: "Nov 2024",
                logo: "/images/hacksheffield9.png",
							  slug: "hs9",
                summary: "University of Sheffield's ninth annual Hackathon, organised by Sheffield CompSoc."
            }
        ],
        links: {
            github: "Jack-Gledhill",
            linkedin: "jackgledhill",
            orcid: "0009-0000-3055-0714"
        },
        positions: [
            {
                title: "Web Developer Intern",
                company: "b:friend",
                href: "https://letsbfriend.org.uk"
            },
            {
                title: "MEng Software Engineering",
                company: "University of Sheffield",
                href: "https://sheffield.ac.uk"
            }
        ],
        projects: [
            {
                name: "noddsoc.co.uk",
								client: "Sheffield NoDDSoc",
								summary: "NoDDSoc's new knowledge base for everything to do with their society and TTRPGs.",
                logo: "/images/noddsoc-co-uk-banner.png",
                slug: "noddsoc.co.uk",
								draft: false,
            },
						{
								name: "Wanderlust",
								client: "HackUPC 2025",
								summary: "A full-stack web app written in Flask that helps groups find their ideal holiday destination based on their preferences. It uses the Gemini API to suggest a destination, the Skyscanner API to find flights and MongoDB as a backend.",
								logo: "/images/hackupc-banner.png",
								slug: "wanderlust",
								draft: false
						},
            {
                name: "Constellation",
                client: "Personal project",
								summary: "Constellation is my homelab. It includes a Highly Available k3s cluster, a Proxmox cluster and a TrueNAS server.",
                logo: "/images/nebula.jpg",
                slug: "constellation",
								draft: false
            }
        ],
			  committees: [
						{
								role: "Webmaster",
								society: "NoDDSoc",
								slug: "noddsoc",
								start: "Mar 2025",
								end: "present",
								logo: "/images/noddsoc.png",
								draft: false
						},
						{
								role: "Inclusions Officer",
								society: "ShefESH",
								slug: "shefesh",
								start: "Mar 2025",
								end: "present",
								logo: "/images/shefesh.png",
								draft: false
						},
						{
								role: "Technical Officer",
								society: "SLUGSoc",
								slug: "slugsoc",
								start: "Mar 2025",
								end: "present",
								logo: "/images/slugsoc.png",
								draft: false
						},
						{
								role: "First Year Rep",
								society: "CompSoc",
								slug: "compsoc",
								start: "Oct 2024",
								end: "Feb 2025",
								logo: "/images/compsoc.png",
								draft: false
						},
						{
								role: "Academic Representative",
								society: "SSLCom",
								slug: "sslcom",
								start: "Sep 2024",
								end: "present",
								logo: "/images/ssu.png",
								draft: true
						}
				],
        volunteering: [
            {
                role: "Junior Crew Member",
								company: "Technical Services Committee",
                slug: "tsc",
								start: "Dec 2024",
                end: "present",
                logo: "/images/tsc.png",
								draft: false
            }
        ]
    };
};