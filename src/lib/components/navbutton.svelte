<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

		let { active, onclick, icon, children } = $props();
</script>

{#if active}
    <button {onclick} class="bg-slate-800 rounded-t-lg border-1 border-b-0 border-slate-700 p-4 hover:cursor-pointer">
        <FontAwesomeIcon {icon} fixedWidth />
        <span class="hidden lg:inline">
            {@render children()}
        </span>
    </button>
{:else}
    <button {onclick} class="bg-slate-900 rounded-t-lg border-1 border-b-0 border-slate-800 p-4 hover:cursor-pointer">
        <FontAwesomeIcon {icon} fixedWidth />
        <span class="hidden lg:inline">
            {@render children()}
        </span>
    </button>
{/if}