// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { Snippet, SvelteComponent } from 'svelte';

declare global {
    namespace App {}

    namespace Partials {
        export interface Date {
            start: string;
            end?: string;
        }

        export interface Image {
            src: string;
            alt: string;
            width?: string;
            height?: string;
        }

        export interface Socials {
            devpost?: string;
            discord?: string;
            github?: string;
            instagram?: string;
            linkedin?: string;
            orcid?: string;
            pdf?: string;
            website?: string;
        }
    }

    namespace Config {
        export interface Build {
            buildTime: Date;
            commit?: string;
            release?: string;
            repository: string;
            svelteKit: string;
        }

        export interface Environment {
            isDev: boolean;
        }

        export interface Head {
            title: string;
            description: string;
            keywords?: string[];
            banner?: Partials.Image;
        }

        export interface Hero {
            title: string;
            subtitle: string;
            email: string;
            image: Partials.Image;
            socials: Partials.Socials;
            positions: HeroPosition[];
        }

        export interface HeroPosition {
            title: string;
            company: string;
            href: string;
        }

        export interface Footer {
            wordmark: Partials.Image;
        }
    }

    namespace ErrorPage {
        export interface Config {
            [code: number]: Props;
        }

        export interface Props {
            title: string;
            message: string;
            emote: string;
            isBug: boolean;
            status?: number;
        }
    }

    namespace Mdsvex {
        export type Renderer = Snippet;
        export type Metadata = Record<string, string>;
        export interface File {
            default: Renderer;
            metadata: Metadata;
        }

        export interface Entry {
            slug: string;
            content: Renderer;
        }
    }
}

declare module '*.md' {
    export default class Comp extends SvelteComponent {};
    export const metadata: Record<string, unknown>;
}

export {};
