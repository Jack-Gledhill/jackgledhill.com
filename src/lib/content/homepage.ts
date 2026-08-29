import hexagon from "$lib/assets/emblem/hexagon.webp?enhanced";

import bfriend from "$lib/assets/logos/bfriend.webp?enhanced";
import digitalZest from "$lib/assets/logos/digitalzest.webp?enhanced";
import ssu from "$lib/assets/logos/ssu.webp?enhanced";
import streamcord from "$lib/assets/logos/streamcord.webp?enhanced";

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
        date: Partials.DateRange;
        logo?: Picture;
        links?: Partials.Socials;
        tags?: string[];
    }

    export const experience: Card[] = [
        {
            title: "Sheffield Students' Union",
            subtitle: "Student Web Developer",
            description:
                "Worked to migrate the SU's website from an archaic HTML/CSS system to a new, extensible React web app. " +
                "Collated real feedback from students on the website to aid design philosophy in the future. Used Figma" +
                "designs to bring new life to existing web pages in need of a fresh coat of paint. Deployed a staging " +
                "version of the website using Cloudflare Pages to enable more efficient code and design reviews",
            draft: false,
            date: {
                start: new Date(2025, 8)
            },
            logo: ssu,
            links: {
                github: "sheffieldsu",
                website: "https://su.sheffield.ac.uk"
            },
            tags: ["React", "Tailwind"]
        },
        {
            title: "b:friend",
            subtitle: "Web Developer Intern",
            description:
                "Consulted with the charity on their mission and needs for an online store. Researched potential " +
                "approaches and summarised associated costs and risks. Aided decision-making with technical knowledge. " +
                "Built and configured a Wix e-commerce website. Designed merchandise to be sold on the online store.",
            draft: false,
            date: {
                start: new Date(2025, 6),
                end: new Date(2025, 8)
            },
            logo: bfriend,
            links: {
                website: "https://letsbfriend.org.uk"
            }
        },
        {
            title: "Kubernetes Workshop",
            subtitle: "Presenter",
            description:
                "Delivered an introductory workshop on Kubernetes. The workshop introduces Kubernetes, " +
                "its uses and how to get started with it. Students learn the basics of container orchestration, " +
                "setting up a cluster with Docker Desktop and deploying Pods and Services to the cluster.",
            draft: false,
            date: {
                start: new Date(2025, 3),
                end: new Date(2025, 3)
            },
            logo: kubernetes,
            links: {
                github: "shefcompsoc/k8s-workshop"
            },
            tags: ["Kubernetes"]
        },
        {
            title: "HackSheffield 9",
            subtitle: "Technical Lead",
            description:
                "Took charge of tech at Sheffield’s 2024 Hackathon. Attended frequent meetings in a team of " +
                "12 to discuss, brainstorm and organise the Hackathon. Kept the peace when collective stress " +
                "turned meetings sour. Volunteered for 21 hours during the 36-hour Hackathon, including setup, " +
                "food, registration, stewarding, judging and teardown.",
            draft: false,
            date: {
                start: new Date(2024, 10),
                end: new Date(2024, 10)
            },
            logo: hacksheffield9,
            links: {
                website: "hacksheffield.uk"
            }
        },
        {
            title: "Digital Zest",
            subtitle: "Software Engineer",
            description:
                "Built an e-commerce Progressive Web App that integrates with clients' Wordpress websites to " +
                "facilitate straightforward Business-to-Business (B2B) purchases and invoicing. Regularly sought " +
                "advice and feedback from Sales, Management and other Developers to aid decision-making. " +
                "Designed custom tools to integrate into the company's Project Management Systems (PMS), " +
                "reducing managerial overhead and improving team efficiency.",
            draft: false,
            date: {
                start: new Date(2022, 5),
                end: new Date(2023, 6)
            },
            logo: digitalZest,
            links: {
                website: "https://digitalzest.co.uk"
            },
            tags: ["React", "Tailwind", "MongoDB", "Golang"]
        },
        {
            title: "Streamcord",
            subtitle: "Software Engineer",
            description:
                "Engineered a new orchestration system that rapidly scales, monitors and error-corrects the " +
                "company's cloud platform. Refactored the platform's original codebase into a series of " +
                "individually scalable, resilient microservices. This new codebase integrated directly with the " +
                "orchestration system to provide near-perfect uptime and simplified disaster recovery.",
            draft: false,
            date: {
                start: new Date(2021, 2),
                end: new Date(2022, 5)
            },
            logo: streamcord,
            links: {
                website: "https://streamcord.io"
            },
            tags: ["Golang", "Python", "Docker"]
        }
    ];

    export const projects: Card[] = [
        {
            title: "Software Hut Project",
            subtitle: "University Project",
            description:
                "An invoice and expense management app built for a real client as part of the Software Hut module " +
                "at the University of Sheffield.",
            draft: false,
            date: {
                start: new Date(2026, 1),
                end: new Date(2026, 5)
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
                "A group project built as part of the COM1001 module at the University of Sheffield. " +
                "ShefMentors is a Ruby web app, built to connect 1st year students with 3rd and 4th year mentors. ",
            draft: false,
            date: {
                start: new Date(2024, 9),
                end: new Date(2024, 11)
            },
            logo: shefmentors,
            tags: ["Ruby", "Ruby on Rails", "RSpec", "Capybara", "Sequel", "SQLite"]
        },
        {
            title: "Word Search Solver",
            subtitle: "University Project",
            description:
                "An assignment completed as part of the COM2004 module at the University of Sheffield. " +
                "The project involved building a Python program that took screenshots of word search puzzles " +
                "and solved them using a combination of Principal Component Analysis (PCA), K-Nearest Neighbours " +
                "(KNN) and a custom search algorithm to find the words in the puzzle.",
            draft: false,
            date: {
                start: new Date(2025, 9),
                end: new Date(2025, 11)
            },
            logo: numpy,
            tags: ["Python", "NumPy", "SciPy", "PCA", "KNN"]
        },
        {
            title: "Gradient",
            subtitle: "University Project",
            description:
                "A full stack web app built for the practical assessment of the COM2008 module at the University of Sheffield. " +
                "Gradient was a team project with a CRUD backend written in Java Spring Boot and a frontend written in React. " +
                "The app aimed to be an assessment management platform for University administrators to manage and track student " +
                "assessments and ensure the proper procedures are followed.",
            draft: false,
            date: {
                start: new Date(2025, 9),
                end: new Date(2025, 11)
            },
            logo: springboot,
            tags: ["Java", "JUnit", "Maven", "Spring Boot", "JPA", "H2", "React", "TailwindCSS"]
        },
        {
            title: "Karma Card Game",
            subtitle: "University Project",
            description:
                "This was the grading assignment for the COM2108 module at the University of Sheffield. " +
                "The assignment was to implement the card game Karma (a.k.a Palace or Shed) in Haskell. " +
                "Doing so meant using State Monad to handle the game state, as well as implementing functions " +
                "for the game rules and a custom strategy for automated players.",
            draft: false,
            date: {
                start: new Date(2025, 9),
                end: new Date(2025, 11)
            },
            logo: haskell,
            tags: ["Haskell", "HUnit", "Monad"]
        },
        {
            title: "Constellation",
            subtitle: "Personal Project",
            description:
                "Constellation is my homelab. It contains a Raspberry Pi Kubernetes cluster, a Proxmox cluster " +
                "and a TrueNAS server. The homelab serves as a learning tool, as well as providing self-hosting to " +
                "myself and others.",
            draft: false,
            date: {
                start: new Date(2024, 5)
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
                "The very website you're reading this on right now. jackgledhill.com has seen many iterations over the " +
                "years, but its current form is a SvelteKit and mdsvex-powered static site, hosted on Cloudflare Pages " +
                "and GitHub Pages, with GitHub Actions handling the deployment process.",
            draft: false,
            date: {
                start: new Date(2025, 7)
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
                "sidequest. is a Python & React web-app designed to help users find the cheapest flights to their destination. " +
                "It leverages layovers as not only a cost-saving strategy, but also an opportunity for travelers to find a " +
                "better use of their time while waiting for their connecting flight. The app uses the Skyscanner API to find " +
                "flights, and Google Gemini's API to plan an itinerary for each layover on the way.",
            draft: false,
            date: {
                start: new Date(2026, 3),
                end: new Date(2026, 3)
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
                "Built as our ICHack 2026 submission, studentHomes aimed to improve the flat-hunting experience for students " +
                "in the UK using Reinforcement Learning. The platform took a user's preferences via natural language and " +
                "provided housing recommendations based on an automated assessment of each house's suitability.",
            draft: false,
            date: {
                start: new Date(2026, 1),
                end: new Date(2026, 1)
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
                "A full-stack web app written in Flask that helps groups find their ideal holiday destination based on " +
                "their preferences. It uses the Gemini API to suggest a destination, the Skyscanner API to find flights " +
                "and MongoDB as a backend.",
            draft: false,
            date: {
                start: new Date(2025, 4),
                end: new Date(2025, 4)
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
                "An EPQ undertaken as part of my A-Level studies. This paper investigates the potential impact of " +
                "Artificial Intelligence on jobs in the UK based on an analysis of current trends and industry projections.",
            draft: false,
            date: {
                start: new Date(2022, 10),
                end: new Date(2022, 10)
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
                "An individual research project undertaken as part of the Science & Engineering Foundation Year at the " +
                "University of Sheffield. The project analysed various load balancing algorithms used in industry and evaluated " +
                "the circumstances where an engineering team may favour them.",
            draft: false,
            date: {
                start: new Date(2024, 4),
                end: new Date(2024, 4)
            },
            links: {
                pdf: "/research/001cef.pdf"
            },
            tags: ["J. Gledhill"]
        }
    ];
}
