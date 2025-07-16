import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "Constellation ~ Jack Gledhill",
            description: "Constellation is my homelab. It contains a Raspberry Pi Kubernetes cluster, a Proxmox cluster and a TrueNAS server. The homelab serves as a learning tool, as well as providing self-hosting to myself and others.",
            keywords: [
                "Kubernetes",
                "Proxmox",
                "TrueNAS",
                "k3s",
                "Homelab",
                "Docker",
                "MikroTik",
                "Container orchestration",
                "Server rack",
                "Home server"
            ]
        },
		name: "Constellation",
		position: "Personal project",
		start: "July 2024",
		end: "present",
		banner: "/images/constellation/banner.webp",
		logo: "/images/constellation/logo.webp",
		links: {
			github: "constellation-net",
			website: "starsystem.dev"
		}
	};
};