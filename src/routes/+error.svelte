<script lang="ts">
    import { pageProps, defaultProps } from '$lib/errors.config.ts';

    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    import { page } from '$app/state';
	const { title, message, emote, isBug }: ErrorPage.Props = pageProps[page.status] || defaultProps;
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
            <h1 class="text-8xl font-bold">{page.status}</h1>
            <h2 class="text-4xl font-bold">{title}</h2>
            <p class="text-xl">{message}</p>

            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <button>
                    <a class="max-lg:block rounded-lg p-4 bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="/">
                        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
                        Back home
                    </a>
                </button>

                {#if (isBug)}
                    <button>
                        <a class="max-lg:block rounded-lg p-4 bg-red-500 hover:bg-red-700 transition duration-200 shadow-md" href="https://github.com/Jack-Gledhill/jackgledhill.com/issues/new">
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                            Report a bug
                        </a>
                    </button>
                {/if}
            </div>
        </div>
    </div>
</div>