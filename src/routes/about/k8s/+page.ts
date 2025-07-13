import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		name: "Kubernetes Workshop",
		start: "April 2025",
		banner: "/images/k8s-banner.jpg",
		logo: "/images/kubernetes.png",
		links: {
			github: "shefcompsoc/k8s-workshop"
		}
	};
};