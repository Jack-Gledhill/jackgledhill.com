<script lang="ts">
    import { build } from '$lib/site.config.ts';

    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let { title, message, emote, isBug, status }: ErrorPage.Props = $props();
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="min-h-screen p-8 lg:px-48 text-center flex flex-col justify-center">
    <div class="grid lg:grid-cols-3 gap-16 items-center">
        <div class="rounded-full mx-auto max-lg:w-3/4 bg-slate-800 border-10  border-slate-600">
            <img class="rounded-b-full" src={emote} alt="Decorative emoji in Jack's likeness" />
        </div>

        <div class="lg:col-span-2 flex flex-col gap-8">
            <h1 class="text-8xl font-bold">{status}</h1>
            <h2 class="text-4xl font-bold">{title}</h2>
            <p class="text-xl">{message}</p>

            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <button>
                    <a class="max-lg:block rounded-lg p-4 bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="/">
                        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
                        Back home
                    </a>
                </button>

                {#if isBug}
                    <button>
                        <a class="max-lg:block rounded-lg p-4 bg-red-500 hover:bg-red-700 transition duration-200 shadow-md" href="https://github.com/Jack-Gledhill/jackgledhill.com/issues/new">
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                            Report a bug
                        </a>
                    </button>
                {/if}
            </div>

            {#if isBug}
                <hr class="border-slate-600 mt-4" />

                <div class="text-slate-400 flex flex-row justify-between gap-8">
                    <div class="text-left">
                        <p>Build time:</p>
                        <p>Environment:</p>
                        <p>Commit:</p>
                        <p>Release:</p>
                        <p>SvelteKit Version:</p>
                    </div>

                    <div class="text-right">
                        <p>{build.buildTime.toLocaleString()}</p>
                        <p>{process.env.NODE_ENV}</p>
                        {@render optionalDebugLink(build.commit, build.repository + "/commit/" + build.commit)}
                        {@render optionalDebugLink(build.release, build.repository + "/releases/tag/" + build.release)}
                        <p>{build.svelteKit}</p>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

{#snippet optionalDebugLink(text?: string, href: string)}
    <p>
        {#if text}
            <a class="underline hover:text-white transition duration-200" {href}>
                {href}
            </a>
        {:else}
            N/A
        {/if}
    </p>
{/snippet}