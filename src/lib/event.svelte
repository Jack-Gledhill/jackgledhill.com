<script>
	import { dev } from '$app/environment';

    let {
	    name,        // Name of the event
        date,        // The date the event occurred
        src,         // A logo for the event
        alt,         // Alt text for the event's logo
        draft=false, // Events marked as drafts don't appear in production and are marked in development
        children     // A brief summary of the event
	} = $props();
</script>

{#if !draft || dev}
<div class="grid grid-cols-4 gap-4">
    <div class="col-span-1 hidden md:block">
        <img class="rounded-lg" src={src} alt={alt} />
    </div>

    <div class="col-span-3 content-center">
        {#if draft}
            <span class="bg-red-500 text-white text-base px-2 rounded-full">DRAFT</span>
        {/if}
        <h3 class="text-lg md:text-2xl font-bold text-slate-400">{name}</h3>
        <p class="italic text-sm">{date}</p>

        <p>{@render children?.()}</p>
    </div>
</div>
{/if}