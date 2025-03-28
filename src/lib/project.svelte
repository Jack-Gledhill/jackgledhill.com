<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { dev } from '$app/environment';

    let {
		name,                      // Name of the project
        client="Personal project", // Name of the client the project was for
		src,                       // Splash image for the project, approximately 16:9
		alt,                       // Alt text for the project's display image
        links,                     // List of links to associate with the project
        draft=false,               // If true, won't appear in production and will be marked in development
		children                   // Brief summary of the project
	} = $props();
</script>

{#if !draft || dev}
<div class="bg-slate-700 border-1 border-slate-600 rounded-lg">
    <div class="flex justify-center h-78 overflow-y-hidden">
        <img class="rounded-t-lg w-full object-cover" src={src} alt={alt} />
    </div>

    <div class="p-4 md:p-8">
        {#if draft}
            <span class="bg-red-500 text-white text-sm lg:text-base px-2 rounded-full">DRAFT</span>
        {/if}
        <h3 class="text-slate-400 font-bold uppercase text-xl lg:text-2xl">{name}</h3>
        <p class="text-lg lg:text-xl">{client}</p>

        <div class="text-3xl lg:text-2xl grid grid-cols-3 md:grid-cols-6 gap-[1em] my-8">
            {#each links as { icon, href } (href)}
                <a class="hover:text-slate-400" {href} target="_blank">
                    <FontAwesomeIcon {icon} fixedWidth />
                </a>
            {/each}
        </div>

        <p>{@render children?.()}</p>

        {#if dev}
        <p class="leading-12 hover:text-blue-600 text-blue-400 underline">
            <a href="https://jackgledhill.com">Read more...</a>
        </p>
        {/if}
    </div>
</div>
{/if}