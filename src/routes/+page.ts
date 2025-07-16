import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        meta: {
            title: "Jack Gledhill",
            description: "Jack is a Software Engineering student at the University of Sheffield, with a passion for DevOps and Kubernetes. He is involved in numerous student societies, and has been a key organiser in HackSheffield - the third largest hackathon in the UK.",
            keywords: [
                "Software Engineer",
                "Sheffield Software Engineer",
                "Software Developer",
                "Sheffield Software Developer",
                "Web Developer",
                "Sheffield Web Developer",
                "DevOps Engineer",
                "Kubernetes Engineer",
                "HackSheffield",
                "Hackathon",
                "University of Sheffield",
                "Python",
                "Golang",
                "JavaScript",
                "Kubernetes",
                "React",
                "Svelte",
                "Docker"
            ]
        },
        email: "bWVAamFja2dsZWRoaWxsLmNvbQ==",
        events: [
            {
                name: "Kubernetes Workshop",
                draft: false,
                date: "May 2025",
                logo: "/images/kubernetes/logo.webp",
                slug: "k8s",
                summary: "An introductory workshop on Kubernetes, covering the basics of container orchestration and deployment."
            },
            {
                name: "HackSheffield 9",
                draft: false,
                date: "Nov 2024",
                logo: "/images/hacksheffield9/logo.webp",
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
                logo: "/images/noddsoc/website-banner.webp",
                slug: "noddsoc.co.uk",
								draft: false,
            },
            {
                name: "Wanderlust",
                client: "HackUPC 2025",
                summary: "A full-stack web app written in Flask that helps groups find their ideal holiday destination based on their preferences. It uses the Gemini API to suggest a destination, the Skyscanner API to find flights and MongoDB as a backend.",
                logo: "/images/hackupc25/banner.webp",
                slug: "wanderlust",
                draft: false
            },
            {
                name: "Constellation",
                client: "Personal project",
                summary: "Constellation is my homelab. It includes a Highly Available k3s cluster, a Proxmox cluster and a TrueNAS server.",
                logo: "/images/constellation/banner.webp",
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
                logo: "/images/noddsoc/logo.webp",
                draft: false
            },
            {
                role: "Inclusions Officer",
                society: "ShefESH",
                slug: "shefesh",
                start: "Mar 2025",
                end: "present",
                logo: "/images/shefesh/logo.webp",
                draft: false
            },
            {
                role: "Technical Officer",
                society: "SLUGSoc",
                slug: "slugsoc",
                start: "Mar 2025",
                end: "present",
                logo: "/images/slugsoc/logo.webp",
                draft: false
            },
            {
                role: "First Year Rep",
                society: "CompSoc",
                slug: "compsoc",
                start: "Oct 2024",
                end: "Feb 2025",
                logo: "/images/compsoc/logo.webp",
                draft: false
            },
            {
                role: "Academic Representative",
                society: "SSLCom",
                slug: "sslcom",
                start: "Sep 2024",
                end: "present",
                logo: "/images/su/logo.webp",
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
                logo: "/images/tsc/logo.webp",
                draft: false
            }
        ]
    };
};