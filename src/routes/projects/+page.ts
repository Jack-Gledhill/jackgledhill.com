import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        meta: {
            title: "Project Directory ~ Jack Gledhill",
            description: "",
            keywords: []
        },
        projects: [
            {
                title: "smtp2gotify",
                subtitle: "Personal project",
                summary: "SMTP server that forwards emails to Gotify, a self-hosted push notification service.",
                banner: "/images/gotify/banner.webp",
                href: "https://github.com/Jack-Gledhill/smtp2gotify",
                technologies: ["Go", "SMTP", "Gotify", "Docker"],
                featured: false,
                completed: true,
                draft: false
            },
            {
                title: "Genesis",
                subtitle: "Personal project",
                summary: "",
                banner: "/images/genesis.webp",
                href: "https://github.com/Jack-Gledhill/genesis",
                technologies: ["Ansible", "WireGuard", "Docker", "AdGuard Home"],
                featured: false,
                completed: true,
                draft: true
            },
            {
                title: "The Unfiltered Blog",
                subtitle: "Personal project",
                summary: "A blog that discusses various interests I have. It is so named because the topics aren't filtered by any particular theme, and tend to follow my tone of voice rather than a formal writing style.",
                banner: "/images/unfiltered-blog.webp",
                href: "https://blog.jackgledhill.com",
                technologies: ["MkDocs", "Material for MkDocs"],
                featured: false,
                completed: true,
                draft: false
            },
            {
                title: "noddsoc.co.uk",
                subtitle: "Sheffield NoDDSoc",
                summary: "NoDDSoc's new knowledge base for everything to do with their society and TTRPGs.",
                banner: "/images/noddsoc/website-banner.webp",
                href: "/about/noddsoc.co.uk",
                technologies: ["MkDocs", "Material for MkDocs"],
                featured: true,
                completed: false,
                draft: false
            },
            {
                title: "Wanderlust",
                subtitle: "HackUPC 2025",
                summary: "A full-stack web app written in Flask that helps groups find their ideal holiday destination based on their preferences. It uses the Gemini API to suggest a destination, the Skyscanner API to find flights and MongoDB as a backend.",
                banner: "/images/hackupc25/banner.webp",
                href: "/about/wanderlust",
                technologies: ["Flask", "MongoDB", "Gemini API", "Skyscanner API"],
                featured: false,
                completed: true,
                draft: false
            },
            {
                title: "Constellation",
                subtitle: "Personal project",
                summary: "Constellation is my homelab. It includes a Highly Available k3s cluster, a Proxmox cluster and a TrueNAS server.",
                banner: "/images/constellation/banner.webp",
                href: "/about/constellation",
                technologies: ["Kubernetes", "Proxmox", "TrueNAS", "Docker", "GitOps", "ZFS"],
                featured: true,
                completed: false,
                draft: false
            }
        ]
    };
};