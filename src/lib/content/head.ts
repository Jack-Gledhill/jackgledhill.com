// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Head {
    interface Banner {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    }

    interface Metadata {
        title: string;
        description: string;
        keywords?: string[];
        banner?: Banner;
    }

    export const metadata: Metadata = {
        title: "Jack Gledhill",
        description:
            "Jack is a Software Engineering student at the University of Sheffield, with a passion for DevOps and Kubernetes. He is involved in numerous student societies, and has been a key organiser in HackSheffield - the third largest hackathon in the UK.",
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
        ],
        banner: {
            src: "/twittercard.webp",
            alt: "Jack at ICHack 2026",
            width: 5906,
            height: 3937
        }
    };
}