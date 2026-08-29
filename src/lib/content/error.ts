import facepalm from "$lib/assets/emotes/facepalm.webp?enhanced";
import sad from "$lib/assets/emotes/sad.webp?enhanced";
import thinking from "$lib/assets/emotes/thinking.webp?enhanced";

import type { Picture } from "vite";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Error {
    export interface PageProps {
        title: string;
        message: string;
        emote: Picture;
    }
    
    export function getPageProps(code: number): PageProps {
        switch (code) {
            case 404:
                return {
                    title: "Page Not Found",
                    message: "Looks like the page you've requested doesn't exist.",
                    emote: thinking
                };
            case 500:
                return {
                    title: "Stop, hammer time!",
                    message:
                        "Something's broken. Very broken. An error like this shouldn't happen, please report this as a bug.",
                    emote: facepalm
                };
            case 502:
                return {
                    title: "Under Construction",
                    message:
                        "Sorry, looks like that content isn't available yet. Check again later.",
                    emote: sad
                };
            default:
                return {
                    title: "Well, this is awkward...",
                    message:
                        "Sorry, it looks like an unknown error has occurred. I can't tell you any more about what happened, please report this as a bug.",
                    emote: thinking
                };
        }
    }
}