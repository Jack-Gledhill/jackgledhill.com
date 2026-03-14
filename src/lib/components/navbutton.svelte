<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let { active, href, icon, children } = $props();
</script>

{#if active}
    <div class="bg-slate-800 rounded-t-lg border-1 border-b-0 border-slate-700 p-4 text-center">
        <FontAwesomeIcon {icon} fixedWidth />
        <span class="hidden lg:inline">
            {@render children()}
        </span>
    </div>
{:else}
    <a {href} class="bg-slate-900 rounded-t-lg border-1 border-b-0 border-slate-800 p-4 text-center hover:cursor-pointer">
        <FontAwesomeIcon {icon} fixedWidth />
        <span class="hidden lg:inline">
            {@render children()}
        </span>
    </a>
{/if}