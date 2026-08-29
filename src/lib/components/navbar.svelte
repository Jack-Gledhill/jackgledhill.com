<script lang="ts">
    import { page } from '$app/state';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
    import { faBookOpen, faChalkboard, faCodeFork, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
</script>

<style>
    @reference "tailwindcss";

    a {
        @apply bg-slate-900 hover:bg-slate-800;
        @apply border border-b-0 border-slate-800;
        @apply rounded-b-none;
        @apply p-4;
        @apply text-center;
        @apply cursor-pointer;
    }

    a.active {
        @apply bg-slate-800;
        @apply border-slate-700;
        @apply cursor-default;
    }
</style>

{#snippet navButton(name: string, href: string, icon: IconDefinition, active: boolean)}
    <a role="button" class:active={active} {href} data-sveltekit-noscroll>
        <FontAwesomeIcon {icon} fixedWidth />
        <span class="hidden lg:inline">
            {name}
        </span>
    </a>
{/snippet}

<nav class="grid grid-cols-4 lg:flex lg:flex-row gap-4 text-2xl lg:text-xl">
    {@render navButton("Committees", "#committees", faHandHoldingHeart, page.url.hash === "#committees" || page.url.hash === "")}
    {@render navButton("Events", "#events", faChalkboard, page.url.hash === "#events")}
    {@render navButton("Projects", "#projects", faCodeFork, page.url.hash === "#projects")}
    {@render navButton("Research", "#research", faBookOpen, page.url.hash === "#research")}
</nav>