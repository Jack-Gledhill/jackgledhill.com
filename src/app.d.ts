// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { Snippet } from "svelte";

declare global {
    namespace App {}

    namespace Partials {
        export interface DateRange {
            start: Date;
            end?: Date;
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
            environment: string;
            release?: string;
            repository: string;
            svelteKit: string;
        }

        export interface Environment {
            isDev: boolean;
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

declare module "*.md" {
    export default class Comp extends SvelteComponent {}
    export const metadata: Record<string, unknown>;
}

export {};
