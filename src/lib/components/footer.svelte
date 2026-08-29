<script lang="ts">
    import { build } from '$lib/site.config.ts';
    import wordmark from '$lib/assets/emblem/wordmark.webp?enhanced';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
    import { faCopyright, faMugHot } from '@fortawesome/free-solid-svg-icons';
    import { faGithub, faSvelte, faTailwindCss } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="bg-slate-950 p-8 text-sm flex flex-col gap-8">
    <div>
        <enhanced:img alt="" class="max-md:mx-auto h-12 w-auto" src={wordmark} />
    </div>

    <div class="grid grid-rows-3 md:grid-rows-none md:grid-cols-2 gap-8 md:place-content-between">
        <div class="text-center md:text-left flex flex-col gap-2">
            <p class="text-slate-400">Version {build.release || 'dev'}</p>
            <p>
                Made with
                <a class="hover:text-svelte!" href="https://svelte.dev" target="_blank"
                   title="Svelte">
                    <FontAwesomeIcon icon={faSvelte} />
                </a>
                and
                <a class="hover:text-tailwind!" href="https://tailwindcss.com" target="_blank"
                   title="Tailwind">
                    <FontAwesomeIcon icon={faTailwindCss} />
                </a>
            </p>
        </div>

        <div class="text-center md:text-right flex flex-col gap-2">
            <p class="tracking-[1em]">
                {@render link("Source code", faGithub, build.repository)}
                {@render link("Copyright & Attributions", faCopyright, "/copyright")}
                {@render link("I'm a teapot", faMugHot, "/teapot")}
            </p>
            <p>Copyright &copy; {new Date().getFullYear()} Jack Gledhill</p>
        </div>
    </div>
</div>

{#snippet link(label: string, icon: IconDefinition, href: string)}
    <a {href} title={label}>
        <FontAwesomeIcon {icon} />
    </a>
{/snippet}