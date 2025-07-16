import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        meta: {
            title: "Wanderlust ~ Jack Gledhill",
            description: "A full-stack web app written in Flask that helps groups find their ideal holiday destination based on their preferences. It uses the Gemini API to suggest a destination, the Skyscanner API to find flights and MongoDB as a backend.",
            keywords: [
                "HackUPC",
                "HackUPC 2025",
                "Hackathon",
                "MongoDB",
                "Python",
                "Flask",
                "Skyscanner",
                "Google Gemini",
                "Twilio",
                "DevPost"
            ]
        },
        name: "Wanderlust",
        position: "HackUPC 2025",
        start: "May 2025",
        banner: "/images/hackupc-banner.png",
        logo: "/images/hackupc.jpg",
        links: {
            github: "thejmfc/hackupc25",
            website: "devpost.com/software/wanderlust-24eodz"
        }
    };
};