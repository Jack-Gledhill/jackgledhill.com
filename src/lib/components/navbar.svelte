<script lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import { faBookOpen, faChalkboard, faCodeFork, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

    import { page } from '$app/state';
</script>

{#snippet navButton(name: string, href: string, icon: IconDefinition, active: boolean)}
    {#if active}
        <div class="bg-slate-800 rounded-t-lg border-1 border-b-0 border-slate-700 p-4 text-center" data-sveltekit-noscroll>
            <FontAwesomeIcon {icon} fixedWidth />
            <span class="hidden lg:inline">
                {name}
            </span>
        </div>
    {:else}
        <a {href} class="bg-slate-900 rounded-t-lg border-1 border-b-0 border-slate-800 p-4 text-center hover:cursor-pointer" data-sveltekit-noscroll>
            <FontAwesomeIcon {icon} fixedWidth />
            <span class="hidden lg:inline">
                {name}
            </span>
        </a>
    {/if}
{/snippet}

<nav class="grid grid-cols-4 lg:flex lg:flex-row gap-4 text-2xl lg:text-xl">
    {@render navButton("Committees", "#committees", faHandHoldingHeart, page.url.hash === "#committees" || page.url.hash === "")}
    {@render navButton("Events", "#events", faChalkboard, page.url.hash === "#events")}
    {@render navButton("Projects", "#projects", faCodeFork, page.url.hash === "#projects")}
    {@render navButton("Research", "#research", faBookOpen, page.url.hash === "#research")}
</nav>