<script lang="ts">
    import { footer } from '$lib/site.config.ts';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
    import { faCopyright, faMugHot } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="bg-slate-950 p-8 text-sm flex flex-col gap-8">
    <div>
        <img class="max-md:mx-auto h-12" src={footer.wordmark.src} alt={footer.wordmark.alt} />
    </div>

    <div class="grid grid-rows-3 md:grid-rows-none md:grid-cols-2 gap-8 md:place-content-between">
        <p class="text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} Jack Gledhill
        </p>

        <p class="text-center md:text-right tracking-[1em]">
            {@render link("Source code", faGithub, "https://github.com/Jack-Gledhill/jackgledhill.com")}
            {@render link("Copyright & Attributions", faCopyright, "/copyright")}
            {@render link("I'm a teapot", faMugHot, "/teapot")}
        </p>
    </div>
</div>

{#snippet link(label: string, icon: IconDefinition, href: string)}
    <a class="hover:text-slate-400" {href} aria-label={label}>
        <FontAwesomeIcon {icon} />
    </a>
{/snippet}