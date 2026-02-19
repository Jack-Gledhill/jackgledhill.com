import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        meta: {
            title: 'Jack Gledhill',
            description:
                'Jack is a Software Engineering student at the University of Sheffield, with a passion for DevOps and Kubernetes. He is involved in numerous student societies, and has been a key organiser in HackSheffield - the third largest hackathon in the UK.',
            keywords: [
                'Software Engineer',
                'Sheffield Software Engineer',
                'Software Developer',
                'Sheffield Software Developer',
                'Web Developer',
                'Sheffield Web Developer',
                'DevOps Engineer',
                'Kubernetes Engineer',
                'HackSheffield',
                'Hackathon',
                'University of Sheffield',
                'Python',
                'Golang',
                'JavaScript',
                'Kubernetes',
                'React',
                'Svelte',
                'Docker'
            ]
        },
        email: 'me@jackgledhill.com',
        events: [
            {
                name: 'Kubernetes Workshop',
                draft: false,
                date: 'May 2025',
                logo: '/images/kubernetes/logo.webp',
                slug: 'k8s',
                summary:
                    'An introductory workshop on Kubernetes, covering the basics of container orchestration and deployment.'
            },
            {
                name: 'HackSheffield 9',
                draft: false,
                date: 'Nov 2024',
                logo: '/images/hacksheffield9/logo.webp',
                slug: 'hs9',
                summary:
                    "University of Sheffield's ninth annual Hackathon, organised by Sheffield CompSoc."
            }
        ],
        links: {
            github: 'Jack-Gledhill',
            linkedin: 'jackgledhill',
            orcid: '0009-0000-3055-0714'
        },
        positions: [
            {
                title: 'Web Developer',
                company: "Sheffield Students' Union",
                href: 'https://su.sheffield.ac.uk'
            },
            {
                title: 'MEng Software Engineering',
                company: 'University of Sheffield',
                href: 'https://sheffield.ac.uk'
            }
        ],
        research: [
            {
                title: 'An Analysis of Load Balancing Algorithms in Web Applications',
                authors: ['J. Gledhill'],
                date: 'May 2024',
                journal: 'University of Sheffield',
                links: {
                    docx: '/research/fce001.docx',
                    pdf: '/research/fce001.pdf'
                },
                description: 'An individual research project undertaken as part of the Science & Engineering Foundation Year at the University of Sheffield. The project analysed various load balancing algorithms used in industry and evaluated the circumstances where an engineering team may favour them.',
                draft: false
            },
            {
                title: 'To What Extent Will the Use of Artifical Intelligence Disrupt the UK Workforce?',
                authors: ['J. Gledhill'],
                date: 'Nov 2022',
                journal: 'Scarborough Sixth Form College',
                links: {
                    docx: '/research/epq.docx',
                    pdf: '/research/epq.pdf'
                },
                description: 'An EPQ undertaken as part of my A-Level studies. This paper investigates the potential impact of Artificial Intelligence on jobs in the UK based on an analysis of current trends and industry projections.',
                draft: false
            }
        ],
        projects: [
            {
                name: 'Constellation',
                client: 'Personal project',
                summary:
                    'Constellation is my homelab. It includes a Highly Available k3s cluster, a Proxmox cluster and a TrueNAS server.',
                logo: '/images/constellation/banner.webp',
                href: '/about/constellation',
                draft: false
            },
            {
                name: 'smtp2gotify',
                client: 'Personal project',
                summary:
                    'SMTP server that forwards emails to Gotify, a self-hosted push notification service.',
                logo: '/images/gotify/banner.webp',
                href: 'https://github.com/Jack-Gledhill/smtp2gotify',
                draft: false
            },
            {
                name: 'The Unfiltered Blog',
                client: 'Personal project',
                summary:
                    "A blog that discusses various interests I have. It is so named because the topics aren't filtered by any particular theme, and tend to follow my tone of voice rather than a formal writing style.",
                logo: '/images/unfiltered-blog.webp',
                href: 'https://blog.jackgledhill.com',
                draft: false
            }
        ],
        committees: [
            {
                role: 'Webmaster',
                name: 'NoDDSoc',
                slug: 'noddsoc',
                start: 'Mar 2025',
                end: 'present',
                logo: '/images/noddsoc/logo.webp',
                draft: false
            },
            {
                role: 'Inclusions Officer',
                name: 'ShefESH',
                slug: 'shefesh',
                start: 'Mar 2025',
                end: 'present',
                logo: '/images/shefesh/logo.webp',
                draft: false
            },
            {
                role: 'Technical Officer',
                name: 'SLUGSoc',
                slug: 'slugsoc',
                start: 'Mar 2025',
                end: 'present',
                logo: '/images/slugsoc/logo.webp',
                draft: false
            },
            {
                role: 'First Year Rep',
                name: 'CompSoc',
                slug: 'compsoc',
                start: 'Oct 2024',
                end: 'Feb 2025',
                logo: '/images/compsoc/logo.webp',
                draft: false
            },
            {
                role: 'Academic Representative',
                name: 'SSLCom',
                slug: 'sslcom',
                start: 'Sep 2024',
                end: 'present',
                logo: '/images/su/logo.webp',
                draft: true
            }
        ],
        volunteering: [
            {
                role: 'Junior Crew Member',
                name: 'Technical Services Committee',
                slug: 'tsc',
                start: 'Dec 2024',
                end: 'present',
                logo: '/images/tsc/logo.webp',
                draft: false
            }
        ]
    };
};