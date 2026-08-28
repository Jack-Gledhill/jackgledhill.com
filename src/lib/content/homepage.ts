import hexagon from "$lib/assets/emblem/hexagon.webp?enhanced";

import compsoc from "$lib/assets/logos/compsoc.webp?enhanced";
import noddsoc from "$lib/assets/logos/noddsoc.webp?enhanced";
import shefesh from "$lib/assets/logos/shefesh.webp?enhanced";
import slugsoc from "$lib/assets/logos/slugsoc.webp?enhanced";
import tsc from "$lib/assets/logos/tsc.webp?enhanced";

import constellation from "$lib/assets/logos/constellation.webp?enhanced";
import haskell from "$lib/assets/logos/haskell.webp?enhanced";
import kubernetes from "$lib/assets/logos/kubernetes.webp?enhanced";
import numpy from "$lib/assets/logos/numpy.webp?enhanced";
import rails from "$lib/assets/logos/rails.webp?enhanced";
import shefmentors from "$lib/assets/logos/shefmentors.webp?enhanced";
import springboot from "$lib/assets/logos/springboot.webp?enhanced";

import hacksheffield9 from "$lib/assets/logos/hacksheffield9.webp?enhanced";
import hackupc25 from "$lib/assets/logos/hackupc25.webp?enhanced";
import hackupc26 from "$lib/assets/logos/hackupc26.webp?enhanced";
import ichack26 from "$lib/assets/logos/ichack26.webp?enhanced";

import type { Picture } from "vite";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Homepage {
    interface Card {
        title: string;
        subtitle: string;
        description: string;
        draft: boolean;
        date: Partials.Date;
        logo?: Picture;
        links?: Partials.Socials;
        tags?: string[];
    }

    export const committees: Card[] = [
        {
            title: "CompSoc 2024/25",
            subtitle: "First Year Representative",
            description:
                "Sheffield CompSoc is the University of Sheffield's Computer Science society, providing a platform for students to engage with technology, collaborate on projects, and participate in events. \n" +
                "As a First Year Representative, I helped organise events and support new members.",
            draft: false,
            date: {
                start: "2024-10-01",
                end: "2025-05-01"
            },
            logo: compsoc,
            links: {
                discord: "3e9GMgc",
                github: "shefcompsoc",
                instagram: "shefcompsoc",
                linkedin: "shefcompsoc",
                website: "shefcompsoc.uk"
            }
        },
        {
            title: "CompSoc 2026/27",
            subtitle: "Tech Officer",
            description:
                "Sheffield CompSoc is the University of Sheffield's Computer Science society, providing a platform for students to engage with technology, collaborate on projects, and participate in events.\n" +
                "As Tech Officer, I am responsible for the society's technical resources, including all the tech needs of HackSheffield 11.",
            draft: false,
            date: {
                start: "2026-04-29"
            },
            logo: compsoc,
            links: {
                discord: "3e9GMgc",
                github: "shefcompsoc",
                instagram: "shefcompsoc",
                linkedin: "shefcompsoc",
                website: "shefcompsoc.uk"
            }
        },
        {
            title: "NoDDSoc",
            subtitle: "Webmaster",
            description:
                "NoDDSoc is the University of Sheffield's TTRPG society, providing a welcoming community for tabletop RPG enthusiasts. \n" +
                "The society hosts regular events, campaigns, and social gatherings for students to engage in D&D and other TTRPGs.",
            draft: false,
            date: {
                start: "2025-03-01"
            },
            logo: noddsoc,
            links: {
                discord: "E6F7Unz",
                github: "Sheffield-NoDDSoc",
                instagram: "noddsoc",
                website: "noddsoc.co.uk"
            }
        },
        {
            title: "ShefESH",
            subtitle: "Inclusions Officer",
            description:
                "ShefESH runs weekly sessions for students to learn about ethical hacking and cybersecurity. \n" +
                "It is a community of like-minded individuals at the University of Sheffield who are passionate about technology and security.",
            draft: false,
            date: {
                start: "2025-03-01",
                end: "2026-04-20"
            },
            logo: shefesh,
            links: {
                discord: "rhfnwgphdx",
                github: "ShefESH",
                instagram: "_shefesh",
                linkedin: "sheffield-ethical-student-hackers",
                website: "shefesh.com"
            }
        },
        {
            title: "SLUGSoc",
            subtitle: "Technical Officer",
            description:
                "SLUGSoc is Sheffield's LAN Gaming Society, providing a space for students to enjoy video games together. \n" +
                "It hosts regular LANs, socials and tournaments, and is a great way to meet fellow gamers at the University of Sheffield.",
            draft: false,
            date: {
                start: "2025-03-01",
                end: "2026-04-28"
            },
            logo: slugsoc,
            links: {
                discord: "VvUCXCT",
                github: "SLUGSoc",
                instagram: "slugsoc",
                linkedin: "university-of-sheffield-lan-gaming-society",
                website: "slugsoc.co.uk"
            }
        },
        {
            title: "Technical Services Committee",
            subtitle: "Junior Crew Member",
            description:
                "The Technical Services Committee is a group of volunteer students at the University of Sheffield, who run the events, gigs and club nights at the Students' Union.",
            draft: false,
            date: {
                start: "2024-12-01",
                end: "2025-07-01"
            },
            logo: tsc,
            links: {
                instagram: "tsc_sheffield",
                linkedin: "tsc-sheffield",
                website: "tsc.sheffield.ac.uk"
            }
        }
    ];

    export const events: Card[] = [
        {
            title: "HackSheffield 9",
            subtitle: "Hackathon",
            description:
                "Sheffield's ninth hackathon, and the third largest hackathon in the UK. \n" +
                "HackSheffield was organised by Sheffield CompSoc and took place in November 2024. \n" +
                "The event brought together students from across the UK to collaborate on innovative projects over a weekend.",
            draft: false,
            date: {
                start: "2024-11-01"
            },
            logo: hacksheffield9,
            links: {
                website: "hacksheffield.uk"
            }
        },
        {
            title: "Kubernetes Workshop",
            subtitle: "Workshop",
            description:
                "This was an introductory workshop on Kubernetes. \n" +
                "The workshop introduces Kubernetes, its uses and how to get started with it. \n" +
                "Students learn the basics of container orchestration, setting up a cluster with Docker Desktop and deploying Pods and Services to the cluster.",
            draft: false,
            date: {
                start: "2025-04-01"
            },
            logo: kubernetes,
            links: {
                github: "shefcompsoc/k8s-workshop"
            }
        }
    ];

    export const projects: Card[] = [
        {
            title: "Software Hut Project",
            subtitle: "University Project",
            description:
                "An invoice and expense management app built for a real client as part of the Software Hut module at the University of Sheffield.",
            draft: false,
            date: {
                start: "2026-02-09"
            },
            logo: rails,
            tags: [
                "Ruby",
                "Ruby on Rails",
                "RSpec",
                "RuboCop",
                "Capybara",
                "HAML",
                "Bootstrap",
                "PostgreSQL",
                "Sentry"
            ]
        },
        {
            title: "ShefMentors",
            subtitle: "University Project",
            description:
                "A group project built as part of the COM1001 module at the University of Sheffield. \n" +
                "ShefMentors is a Ruby web app, built to connect 1st year students with 3rd and 4th year mentors. ",
            draft: false,
            date: {
                start: "2024-10-01",
                end: "2024-12-19"
            },
            logo: shefmentors,
            tags: ["Ruby", "Ruby on Rails", "RSpec", "Capybara", "Sequel", "SQLite"]
        },
        {
            title: "Word Search Solver",
            subtitle: "University Project",
            description:
                "An assignment completed as part of the COM2004 module at the University of Sheffield. \n" +
                "The project involved building a Python program that took screenshots of word search puzzles and solved them using a combination of Principal Component Analysis (PCA), K-Nearest Neighbours (KNN) and a custom search algorithm to find the words in the puzzle.",
            draft: false,
            date: {
                start: "2025-10-24",
                end: "2025-12-16"
            },
            logo: numpy,
            tags: ["Python", "NumPy", "SciPy", "PCA", "KNN"]
        },
        {
            title: "Gradient",
            subtitle: "University Project",
            description:
                "A full stack web app built for the practical assessment of the COM2008 module at the University of Sheffield. \n" +
                "Gradient was a team project with a CRUD backend written in Java Spring Boot and a frontend written in React. \n" +
                "The app aimed to be an assessment management platform for University administrators to manage and track student assessments and ensure the proper procedures are followed.",
            draft: false,
            date: {
                start: "2025-10-17",
                end: "2025-12-11"
            },
            logo: springboot,
            tags: ["Java", "JUnit", "Maven", "Spring Boot", "JPA", "H2", "React", "TailwindCSS"]
        },
        {
            title: "Karma Card Game",
            subtitle: "University Project",
            description:
                "This was the grading assignment for the COM2108 module at the University of Sheffield. \n" +
                "The assignment was to implement the card game Karma (a.k.a Palace or Shed) in Haskell. \n" +
                "Doing so meant using State Monad to handle the game state, as well as implementing functions for the game rules and a custom strategy for automated players.",
            draft: false,
            date: {
                start: "2025-10-31",
                end: "2025-12-19"
            },
            logo: haskell,
            tags: ["Haskell", "HUnit", "Monad"]
        },
        {
            title: "Constellation",
            subtitle: "Personal Project",
            description:
                "Constellation is my homelab. \n" +
                "It contains a Raspberry Pi Kubernetes cluster, a Proxmox cluster and a TrueNAS server.\n" +
                "The homelab serves as a learning tool, as well as providing self-hosting to myself and others.",
            draft: false,
            date: {
                start: "2024-06-01"
            },
            logo: constellation,
            links: {
                github: "Jack-Gledhill",
                website: "starsystem.dev"
            },
            tags: ["Constellation", "ArgoCD", "Proxmox", "TrueNAS", "Docker", "Ansible"]
        },
        {
            title: "jackgledhill.com",
            subtitle: "Personal Project",
            description:
                "The very website you're reading this on right now. \n" +
                "jackgledhill.com has seen many iterations over the years, but its current form is a SvelteKit and mdsvex-powered static site, hosted on Cloudflare Pages and GitHub Pages, with GitHub Actions handling the deployment process.",
            draft: false,
            date: {
                start: "2025-08-01"
            },
            logo: hexagon,
            links: {
                github: "Jack-Gledhill/jackgledhill.com",
                website: "jackgledhill.com"
            },
            tags: ["SvelteKit", "mdsvex", "Cloudflare Pages", "GitHub Pages", "GitHub Actions"]
        },
        {
            title: "sidequest.",
            subtitle: "Hackathon Project",
            description:
                "sidequest. is a Python & React web-app designed to help users find the cheapest flights to their destination.\n" +
                "It leverages layovers as not only a cost-saving strategy, but also an opportunity for travelers to find a better use of their time while waiting for their connecting flight.\n" +
                "The app uses the Skyscanner API to find flights, and Google Gemini's API to plan an itinerary for each layover on the way.",
            draft: false,
            date: {
                start: "2026-04-24",
                end: "2026-04-26"
            },
            logo: hackupc26,
            links: {
                devpost: "software/sidequest-1sfapj",
                github: "thejmfc/hackupc26"
            },
            tags: ["Python", "FastAPI", "React", "Tailwind CSS", "MapBox", "GeoJSON", "Three.js"]
        },
        {
            title: "studentHomes",
            subtitle: "Hackathon Project",
            description:
                "Built as our ICHack 2026 submission, studentHomes aimed to improve the flat-hunting experience for students in the UK using Reinforcement Learning. \n" +
                "The platform took a user's preferences via natural language and provided housing recommendations based on an automated assessment of each house's suitability.",
            draft: false,
            date: {
                start: "2026-01-31",
                end: "2026-02-01"
            },
            logo: ichack26,
            links: {
                devpost: "software/studenthomes",
                github: "thejmfc/ichack26"
            },
            tags: [
                "Python",
                "PyTorch",
                "SQLModel",
                "GeoPy",
                "FastAPI",
                "SQLite",
                "ChromaDB",
                "React",
                "Tailwind CSS"
            ]
        },
        {
            title: "Wanderlust",
            subtitle: "Hackathon Project",
            description:
                "A full-stack web app written in Flask that helps groups find their ideal holiday destination based on their preferences. \n" +
                "It uses the Gemini API to suggest a destination, the Skyscanner API to find flights and MongoDB as a backend.",
            draft: false,
            date: {
                start: "2025-05-02",
                end: "2025-05-04"
            },
            logo: hackupc25,
            links: {
                devpost: "software/wanderlust-24eodz",
                github: "thejmfc/hackupc25"
            },
            tags: ["Python", "Flask", "MongoDB", "Gemini", "Skyscanner", "Twilio"]
        }
    ];

    export const research: Card[] = [
        {
            title: "To What Extent Will the Use of Artificial Intelligence Disrupt the UK Workforce?",
            subtitle: "Scarborough Sixth Form College",
            description:
                "An EPQ undertaken as part of my A-Level studies. \n" +
                "This paper investigates the potential impact of Artificial Intelligence on jobs in the UK based on an analysis of current trends and industry projections.",
            draft: false,
            date: {
                start: "2022-11-01"
            },
            links: {
                pdf: "/research/epq.pdf"
            },
            tags: ["J. Gledhill"]
        },
        {
            title: "An Analysis of Load Balancing Algorithms in Web Applications",
            subtitle: "University of Sheffield",
            description:
                "An individual research project undertaken as part of the Science & Engineering Foundation Year at the University of Sheffield. \n" +
                "The project analysed various load balancing algorithms used in industry and evaluated the circumstances where an engineering team may favour them.",
            draft: false,
            date: {
                start: "2024-05-01"
            },
            links: {
                pdf: "/research/001cef.pdf"
            },
            tags: ["J. Gledhill"]
        }
    ];
}