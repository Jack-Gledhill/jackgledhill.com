import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
        meta: {
            title: "Kubernetes Workshop ~ Jack Gledhill",
            description: "This was an introductory workshop on Kubernetes, planned and ran by Jack Gledhill. The workshop introduces Kubernetes, its uses and how to get started with it. Students learn the basics of container orchestration, setting up a cluster with Docker Desktopm and deploying Pods and Services to the cluster.",
            keywords: [
                "Kubernetes",
                "University of Sheffield",
                "Sheffield Students' Union",
                "Sheffield CompSoc",
                "Container orchestration",
                "Docker",
                "Kubernetes Engineer",
                "DevOps",
                "DevOps Engineer"
            ]
        },
		name: "Kubernetes Workshop",
		start: "April 2025",
		banner: "/images/k8s-banner.jpg",
		logo: "/images/kubernetes.png",
		links: {
			github: "shefcompsoc/k8s-workshop"
		}
	};
};